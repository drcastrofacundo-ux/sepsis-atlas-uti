"""Barrido retroactivo de PubMed para el Sepsis Atlas UTI.

Busca ensayos, metaanálisis, revisiones sistemáticas y guías de sepsis/shock séptico
publicados en los últimos N días, suma los artículos detectados en los avisos de correo
(archivo TSV opcional), descarta lo que ya está en el Atlas, en la bóveda o en el Radar,
asigna módulo con las mismas reglas que ingestar_radar.py y genera una cola de candidatos.

No publica nada: la salida es base-conocimiento/candidatos-pubmed-correo.md (+ .json),
que sync-data.mjs no lee. La promoción al Atlas sigue siendo manual.

Uso:
    python scripts/barrido_pubmed_anual.py --dias 365 [--correo ruta.tsv]
"""

from __future__ import annotations

import argparse
import csv
import importlib.util
import json
import re
import time
import urllib.parse
import urllib.request
from datetime import date, timedelta
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
VAULT = BASE.parent.parent
KB = BASE / "base-conocimiento"
EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"

# Reutiliza las reglas de módulos del ingestor para no tener dos criterios distintos.
_spec = importlib.util.spec_from_file_location("ingestar_radar", Path(__file__).with_name("ingestar_radar.py"))
_ir = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_ir)

JOURNAL_TIER = {
    1: ["n engl j med", "jama", "lancet", "bmj", "ann intern med", "nejm evid"],
    2: ["intensive care med", "am j respir crit care med", "crit care med", "crit care", "chest",
        "lancet respir med", "lancet infect dis", "jama netw open", "jama intern med", "cochrane database syst rev",
        "ann intensive care", "eclinicalmedicine", "clin infect dis", "anesthesiology", "br j anaesth"],
}
PEDS = re.compile(r"\b(neonat|infant|child|children|pediatric|paediatric|picu|newborn|preterm)", re.I)
NON_HUMAN = re.compile(r"\b(mice|mouse|murine|rat|rats|porcine|swine|ovine|sheep|in vitro|zebrafish)\b", re.I)


def get(url: str) -> dict:
    for intento in range(4):
        try:
            with urllib.request.urlopen(url, timeout=30) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception:
            time.sleep(1.5 * (intento + 1))
    raise RuntimeError(f"No respondió PubMed: {url[:120]}")


def esearch(term: str, retmax: int = 5000) -> list[str]:
    q = urllib.parse.urlencode({"db": "pubmed", "term": term, "retmax": retmax, "retmode": "json"})
    time.sleep(0.4)
    return get(f"{EUTILS}/esearch.fcgi?{q}")["esearchresult"].get("idlist", [])


def esummary(pmids: list[str]) -> dict:
    out = {}
    for i in range(0, len(pmids), 200):
        q = urllib.parse.urlencode({"db": "pubmed", "id": ",".join(pmids[i:i + 200]), "retmode": "json"})
        time.sleep(0.4)
        res = get(f"{EUTILS}/esummary.fcgi?{q}")["result"]
        for uid in res.get("uids", []):
            out[uid] = res[uid]
    return out


def tier(journal: str) -> int:
    # Coincidencia exacta: "Lancet Oncol" o "Crit Care Explor" no son "Lancet" ni "Crit Care".
    j = journal.lower().strip().rstrip(".")
    for t, names in JOURNAL_TIER.items():
        if j in names:
            return t
    return 3


# El título tiene que hablar de infección grave o de cuidado crítico; si "sepsis" solo aparece en el
# abstract (p. ej. como evento adverso de un ensayo oncológico), el artículo no es para el Atlas.
TITULO_PERTINENTE = re.compile(
    r"sepsis|septic|bacter(a)?emia|bloodstream|shock|critically ill|intensive care|\bicu\b|infect|antibiotic|"
    r"antimicrobial|vasopress|norepinephrine|resuscitat|fluid|crystalloid|albumin|endotox|procalcitonin|"
    r"pneumonia|endocarditis|capillary refill|lactate|coagulopathy|organ dysfunction|acute kidney",
    re.I,
)


def known_ids() -> tuple[set[str], set[str]]:
    textos = []
    for p in list(KB.glob("*.md")) + list((KB / "_extracciones-nlm").glob("*.md")) + [KB / "evidencia-viva.json"]:
        if p.name.startswith("candidatos-"):  # la propia salida de este barrido no cuenta como "ya conocido"
            continue
        textos.append(p.read_text(encoding="utf-8", errors="ignore"))
    for carpeta in [VAULT / "04-Recursos" / "Papers", VAULT / "Sepsis y Shock Septico" / "00 Radar Bibliografico"]:
        for p in carpeta.glob("*.md"):
            textos.append(p.read_text(encoding="utf-8", errors="ignore"))
    todo = "\n".join(textos)
    pmids = set(re.findall(r"\b(\d{7,8})\b", todo))
    dois = {d.lower().rstrip(".") for d in re.findall(r"10\.\d{4,9}/[^\s`)\]>,;\"]+", todo)}
    return pmids, dois


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dias", type=int, default=365)
    ap.add_argument("--correo", type=Path, default=None, help="TSV con candidatos extraídos de los avisos de correo")
    args = ap.parse_args()

    hasta = date.today()
    desde = hasta - timedelta(days=args.dias)
    rango = f'("{desde:%Y/%m/%d}"[dp] : "{hasta:%Y/%m/%d}"[dp])'
    tipos = ('(randomized controlled trial[pt] OR meta-analysis[pt] OR systematic review[pt] OR '
             'practice guideline[pt] OR guideline[pt] OR consensus development conference[pt])')
    tema = '(sepsis[tiab] OR septic[tiab] OR bacteremia[tiab] OR bacteraemia[tiab] OR "Sepsis"[mh] OR "Shock, Septic"[mh])'
    termino = f"{tema} AND {tipos} AND {rango} AND humans[mh]"
    pmids = esearch(termino)

    # Artículos de los avisos de correo: se resuelven por título exacto en PubMed.
    correo = {}
    if args.correo and args.correo.exists():
        with args.correo.open(encoding="utf-8") as f:
            for fila in csv.DictReader(f, delimiter="\t"):
                # Palabras significativas del título, cada una con [ti]: más tolerante que la frase exacta
                # (los títulos del correo traen puntuación y abreviaturas que rompen la búsqueda literal).
                palabras = [w for w in re.findall(r"[A-Za-z0-9]{4,}", fila["titulo"])
                            if w.lower() not in {"with", "from", "versus", "trial", "study", "patients", "among", "their", "after"}]
                ids = esearch(" AND ".join(f"{w}[ti]" for w in palabras[:9]), retmax=3)
                if ids:
                    correo[ids[0]] = fila
                    if ids[0] not in pmids:
                        pmids.append(ids[0])
                else:
                    correo["sin-pmid:" + fila["titulo"][:60]] = fila

    resumen = esummary(pmids)
    ya_pmids, ya_dois = known_ids()

    candidatos, ya_estaban, descartados = [], 0, {"pediatrico": 0, "no_humano": 0, "titulo_no_pertinente": 0}
    for pmid, r in resumen.items():
        titulo = r.get("title", "").strip()
        doi = next((a["value"].lower() for a in r.get("articleids", []) if a.get("idtype") == "doi"), "")
        if pmid in ya_pmids or (doi and doi in ya_dois):
            ya_estaban += 1
            continue
        if NON_HUMAN.search(titulo):
            descartados["no_humano"] += 1
            continue
        if not TITULO_PERTINENTE.search(titulo) and pmid not in correo:
            descartados["titulo_no_pertinente"] += 1
            continue
        if PEDS.search(titulo) and pmid not in correo:
            descartados["pediatrico"] += 1
            continue
        tipos_pub = [t.lower() for t in r.get("pubtype", [])]
        diseno = ("guía" if any("guideline" in t or "consensus" in t for t in tipos_pub)
                  else "metaanálisis/RS" if any("meta-analysis" in t or "systematic review" in t for t in tipos_pub)
                  else "ECA" if any("randomized controlled trial" in t for t in tipos_pub) else "otro")
        revista = r.get("source", "")
        t = tier(revista)
        prioridad = (3 - t) * 2 + {"guía": 3, "ECA": 2, "metaanálisis/RS": 1}.get(diseno, 0) + (2 if pmid in correo else 0)
        modulos = _ir.assign_modules(titulo) or ["sin-módulo"]
        # "sepsis" en el título dispara M01 en casi todo: si hay un módulo más específico, va primero.
        if len(modulos) > 1 and modulos[0] == "M01":
            modulos = modulos[1:] + ["M01"]
        candidatos.append({
            "pmid": pmid, "doi": doi, "titulo": titulo, "revista": revista,
            "fecha": r.get("pubdate", ""), "diseno": diseno, "tier": t, "prioridad": prioridad,
            "modulos": modulos, "fuente": "correo (EvidenceAlerts) + PubMed" if pmid in correo else "PubMed",
        })

    sin_pmid = [v for k, v in correo.items() if k.startswith("sin-pmid:")]
    candidatos.sort(key=lambda c: (-c["prioridad"], c["revista"], c["titulo"]))

    (KB / "candidatos-pubmed-correo.json").write_text(json.dumps({
        "generado": hasta.isoformat(), "rango": [desde.isoformat(), hasta.isoformat()],
        "consulta": termino, "encontrados": len(resumen), "ya_estaban": ya_estaban,
        "descartados": descartados, "candidatos": candidatos, "correo_sin_pmid": sin_pmid,
    }, ensure_ascii=False, indent=2), encoding="utf-8")

    altos = [c for c in candidatos if c["tier"] <= 2]
    lineas = [
        "---", "tags: [sepsis, evidencia-viva, pendientes]", "tipo: cola-revision", f"creado: {hasta.isoformat()}", "---", "",
        "# Candidatos del barrido anual (PubMed + avisos de correo)", "",
        f"Rango {desde:%d/%m/%Y} – {hasta:%d/%m/%Y}. Ensayos, metaanálisis, revisiones sistemáticas y guías de sepsis en humanos.",
        f"PubMed devolvió **{len(resumen)}** artículos; **{ya_estaban}** ya estaban en el Atlas, la bóveda o el Radar; "
        f"se descartaron por título {descartados['pediatrico']} pediátricos, {descartados['no_humano']} no humanos y "
        f"{descartados['titulo_no_pertinente']} donde la sepsis no es el tema (p. ej. evento adverso en un ensayo oncológico).",
        f"Quedan **{len(candidatos)}** candidatos; **{len(altos)}** en revistas de primera o segunda línea (listados abajo). "
        "El resto está en `candidatos-pubmed-correo.json`.", "",
        "> **No están publicados en la web.** Asignación de módulo automática por palabras del título (mismas reglas que el ingestor del Radar): revisar antes de promover. "
        "Para promover uno: leer el abstract, sumarlo al módulo con su PMID y tildarlo acá.", "",
    ]
    por_mod: dict[str, list[dict]] = {}
    for c in altos:
        por_mod.setdefault(c["modulos"][0], []).append(c)
    for mod in sorted(por_mod):
        lineas += [f"## {mod} ({len(por_mod[mod])})", ""]
        for c in por_mod[mod]:
            marca = " · 📧 también en tu correo" if c["fuente"].startswith("correo") else ""
            lineas.append(f"- [ ] **{c['titulo']}** — *{c['revista']}* {c['fecha']} · {c['diseno']} · "
                          f"[PMID {c['pmid']}](https://pubmed.ncbi.nlm.nih.gov/{c['pmid']}/){marca}")
        lineas.append("")
    if sin_pmid:
        lineas += ["## Del correo, sin PMID encontrado por título", ""]
        lineas += [f"- {v['titulo']} — *{v['revista']}*" for v in sin_pmid]
        lineas.append("")
    (KB / "candidatos-pubmed-correo.md").write_text("\n".join(lineas), encoding="utf-8")
    print(f"OK barrido: {len(resumen)} encontrados, {ya_estaban} ya estaban, {len(candidatos)} candidatos, {len(altos)} de revistas de 1a/2a linea, {len(sin_pmid)} del correo sin PMID")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
