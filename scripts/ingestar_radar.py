#!/usr/bin/env python3
"""Ingesta y normalizacion de entregas semanales del Radar Bibliografico para Sepsis Atlas UTI.

Lee los archivos `*-radar-sepsis-shock-cardio.md` en `Sepsis y Shock Septico/00 Radar Bibliografico/`,
extrae citas, PMIDs, DOIs, resultados, limitaciones y alertas ("como NO sobreinterpretarlo"),
clasifica su relevancia para sepsis/shock septico y los mapea a los modulos M01-M11 y M14-M20.

Genera:
  - base-conocimiento/evidencia-viva.json
  - base-conocimiento/pendientes-revision.md

Uso opcional:
  python scripts/ingestar_radar.py --check-pubmed-days 7
"""

from __future__ import annotations

import argparse
from collections import Counter, defaultdict
from datetime import datetime, timedelta, timezone
import glob
import json
import os
from pathlib import Path
import re
import sys
import unicodedata
import urllib.error
import urllib.parse
import urllib.request


BASE_PROYECTO = Path(__file__).resolve().parent.parent
VAULT_ROOT = BASE_PROYECTO.parent.parent
RADAR_DIR = VAULT_ROOT / "Sepsis y Shock Septico" / "00 Radar Bibliografico"
BASE_CONOCIMIENTO_DIR = BASE_PROYECTO / "base-conocimiento"
OUT_JSON = BASE_CONOCIMIENTO_DIR / "evidencia-viva.json"
OUT_PENDIENTES = BASE_CONOCIMIENTO_DIR / "pendientes-revision.md"


def strip_accents(text: str) -> str:
    """Devuelve texto en minusculas sin tildes para matching robusto."""
    nfkd = unicodedata.normalize("NFKD", text)
    return "".join(ch for ch in nfkd if not unicodedata.combining(ch)).lower()


def slugify(text: str, max_len: int = 48) -> str:
    """Normaliza un texto corto a slug ASCII."""
    clean = strip_accents(text)
    clean = re.sub(r"[^a-z0-9]+", "-", clean).strip("-")
    return clean[:max_len] or "entrada"


MODULE_RULES: list[tuple[str, re.Pattern[str]]] = [
    ("M01", re.compile(r"\b(sofa-?2|sofa-?1|qsofa|sirs|sepsis-3|ssc\s*202[16]|surviving sepsis|pragmatic\w*|criterio\w*|screening|news2)\b", re.I)),
    ("M02", re.compile(r"\b(endotip\w*|fenotip\w*\s+inmun\w*|inmun\w*[\s-]+endoteli\w*|transcriptom\w*|ferritin\w*|mals\b|anakinra|immunosep|ptlr4|nlrp3|inflamasoma\w*|mitocondri\w*|hla-dr|inmunoparal\w*|inmunomodul\w*|citometri\w*|nucleosom\w*)", re.I)),
    ("M03", re.compile(r"\b(glicocalix|glycocalyx|syndecan\w*|endocan\w*|heparan\w*|clovers|glycocheck|pbr\b|fuga capilar|ang-?2|tie2|endoteli\w*)", re.I)),
    ("M04", re.compile(r"\b(microcircul\w*|microvascul\w*|relleno capilar|crt\b|andromeda|lactat\w*|gap\s*(?:de\s*)?co2|pco2|scvo2|svo2|extraccion de o2|hiperoxi\w*|hipoxemi\w*|perfusi[oó]n|cth\b|videomicroscop\w*|nirs\b|vot\b|sto2)", re.I)),
    ("M05", re.compile(r"\b(pad\b|presion\s+(?:arterial\s+)?diastolica|presion de pulso|vneri|dsi\b|arise\s*fluids|ariss\b|albumina|fluid\s*balance|balance\s+(?:neto|hidrico)|reanimaci[oó]n|pam\b|mapopt|vasopresor(?:es)?\s+o\s+fluidos|descongesti\w*|hiperoncot\w*)", re.I)),
    ("M06", re.compile(r"\b(noradrenalin\w*|norepinefrin\w*|vasopresin\w*|azul de metileno|methylene blue|hidroxocobalamina|angiotensina|dobutamin\w*|betabloque\w*|landiolol|esmolol|corticoid\w*|hidrocortisona|fludrocortisona|aprocchss|adrenal\b|hat\b|vasoplej\w*|vasopresor\w*)", re.I)),
    ("M07", re.compile(r"\b(pocus|vexus|ecograf\w*|ecocardiograf\w*|telus|tee\b|transtoracic\w*|transesofagic\w*|vti\b|gls\b|fevi|tapse|miocardi\w*|comtess|coronari\w*.*sepsis|congestion venosa|ultrason\w*)", re.I)),
    ("M08", re.compile(r"\b(coagulop\w*|sic-?2|sic\b|inmunotromb\w*|cid\b|dic\b|trombocitopen\w*|anticoagul\w*|tromboembol\w*|tev\b|plaquetas|complemento|nets\b|halp\b)", re.I)),
    ("M09", re.compile(r"\b(antibiotic\w*|antimicrob\w*|beta-?lactam\w*|piperacilin\w*|meropenem|cefazolin\w*|vancomicin\w*|procalcitonin\w*|pct\b|adapt-sepsis|balance\b|acorn\b|bling\s*iii|mercy\b|arc\b|clearance renal aumentado|iv push|stewardship|pk/pd|antibiogram\w*|mdro|pseudomonas|klebsiella|bacteriemi\w*|control(?:\s+temprano\s+y\s+adecuado)?\s+de(?:l)?\s+foco|source control)", re.I)),
    ("M10", re.compile(r"\b(aki\b|lra\b|lesion renal|ira\b|trr\b|crrt\b|dialisis|hemofiltraci\w*|hemoadsor\w*|polimixina b|polymyxin b|tigris|cytosorb|oxiris|purificacion sanguinea|sodio.*diuresis|indice resistivo renal|cistatina)", re.I)),
    ("M14", re.compile(r"\b(hemocultiv\w*|blood cultur\w*|time to positivity|tiempo a la positividad|presepsin\w*|procalcitonin\w*|metagenom\w*|mngs\b|ddpcr|digital pcr|rapid diagnostic|diagnostico (?:molecular )?rapido|beta-?d-?glucan\w*|candisep|source control|control de(?:l)? foco|drenaje|drainage|necrotiz\w*|fascitis|soft[- ]tissue|partes blandas|absces\w*|peritonitis|laparotom\w*|colangitis|cholangitis|lrinec|pet[/-]?ct)", re.I)),
    ("M16", re.compile(r"\b(carbapenem[- ]?resist\w*|resistente a carbapenem\w*|carbapenemas\w*|kpc\b|ndm\b|metallo|metalo|mbl\b|oxa-?(?:48|163|23)\b|blee\b|esbl\w*|ampc\b|acinetobacter|crab\b|cre\b|dtr\b|multirresist\w*|multidrug[- ]resist\w*|xdr\b|cefiderocol|avibactam|vaborbactam|relebactam|durlobactam|taniborbactam|ceftolozan\w*|colistin\w*|mrsa\b|samr\b|candid\w*|candidozyma|aspergil\w*|antifung\w*|equinocandin\w*|micafungin\w*|rezafungin\w*|influenza|gripe|oseltamivir|baloxavir|covid|sars-cov-2|cytomegalovir\w*|citomegalovir\w*|cmv\b|herpes|hsv\b|aciclovir|acyclovir|ganciclovir)", re.I)),
    ("M20", re.compile(r"\b(epidemiolog\w*|sepsis incidence|incidence of sepsis|incidencia de (?:la )?sepsis|global burden|carga (?:global|de enfermedad)|bundle\w*|paquete\w*|sep-?1\b|quality improvement|mejora de (?:la )?calidad|bundle compliance|time to antibiotic\w*|tiempo (?:al|hasta el) antibiotico|machine learning|aprendizaje automatico|artificial intelligence|inteligencia artificial|deep learning|early warning|alerta temprana|economic burden|hospital costs|costos? de (?:la )?sepsis|cost-effectiveness|healthcare-associated|asociad\w* al cuidado|central line|catheter-related bloodstream|chlorhexidine|clorhexidina|hand hygiene|higiene de manos|palliative|paliativ\w*|end-of-life|fin de vida|goals of care|objetivos de cuidado|time-limited|inequit\w*|disparit\w*|desigualdad\w*)", re.I)),
    ("M19", re.compile(r"\b(post-?sepsis|post-?intensive care|pics\b|survivor\w*|sobrevivient\w*|long-term (?:outcome|mortality|cognitive)|largo plazo|readmission\w*|reingreso\w*|cognitive impairment|deterioro cognitivo|dementia|demencia|icu-acquired weakness|debilidad adquirida|rehabilitat\w*|rehabilitaci\w*|mobili[sz]ation|movilizaci\w*|follow-up (?:clinic|program\w*|service\w*)|seguimiento post|quality of life|calidad de vida|post-?traumatic stress|ptsd\b|icu diar\w*|abcdef|icu liberation)", re.I)),
    ("M18", re.compile(r"\b(pregnan\w*|embaraz\w*|matern\w*|puerper\w*|obstetr\w*|postpartum|posparto|neutropen\w*|haematolog\w*|hematolog\w*|transplant\w*|trasplant\w*|immunocomprom\w*|inmunocomprom\w*|inmunosuprim\w*|immunosuppress\w*|frail\w*|fragil\w*|elderly|older (?:adults|patients)|ancian\w*|sarcopen\w*|cirrho\w*|cirros\w*|acute-on-chronic|aclf\b|spontaneous bacterial peritonitis|peritonitis bacteriana espontanea)", re.I)),
    ("M17", re.compile(r"\b(glucem\w*|glucose control|glycemic|glycaemic|hiperglucem\w*|hyperglyc\w*|hipoglucem\w*|hypoglyc\w*|insulin\w*|nutrici[oó]n|nutrition|enteral|parenteral|calori\w*|protein dos\w*|dosis de proteina|refeeding|realimentaci\w*|transfus\w*|hemoglobin threshold|umbral de hemoglobina|red[- ]cell|globulos rojos|fiebre|fever|antipyretic|antipiretic\w*|acetaminophen|paracetamol|cooling|enfriamiento|stress ulcer|ulcera de estres|pantoprazol\w*|famotidin\w*|ranitidin\w*|proton pump|tiroid\w*|thyroid|vitamin(?:a)? c\b|ascorbic)", re.I)),
    ("M15", re.compile(r"\b(sdra|ards\b|acute respiratory distress|distres respiratorio|pafi|pao2/fio2|spo2/fio2|neumoni\w*|pneumoni\w*|nav\b|vap\b|ventilator-associated|prono|prone|driving pressure|presion de distension|peep\b|reclutamiento|recruitment|volumen corriente|tidal volume|mechanical power|potencia mecanica|alto flujo|high-?flow|hfno\b|ecmo\b|cor pulmonale|insuficiencia respiratoria|respiratory failure|hypoxemic|oxygen(?:ation)? target)", re.I)),
    ("M11", re.compile(r"\b(higado|hepat\w*|sald\b|colestas\w*|intestin\w*|microbiom\w*|suddicu|antro gastrico|encefalopat\w*|sae\b|ceeg|delirium|propofol|pris\b|midazolam|sedoanalgesi\w*|post-?sepsis|destete|weaning|ventilacion\s+(?:mecanica|invasiva))", re.I)),
]

DIRECT_SEPSIS_RE = re.compile(
    r"\b(sepsis|septic|s[eé]ptic[oa]s?|sofa-?2|sofa|qsofa|ssc\s*2026|surviving sepsis|"
    r"endotox\w*|inmunotromb\w*|sic-?2|glicocalix|syndecan\w*|procalcitonin\w*|adapt-sepsis|"
    r"andromeda|arise\s*fluids|ariss|immunosep|tigris|polimixina b|polymyxin b|sa-?aki|"
    r"lactilaci\w*|hiperoxia.*sepsis|midazolam.*sepsis|bacteriemi\w*|sald\b|microcircul\w*.*shock)\b",
    re.I,
)

CARDIO_SEPSIS_OVERLAP_RE = re.compile(
    r"\b(vasoplej\w*|azul de metileno|methylene blue|hidroxocobalamina|vasopresor\w*|noradrenalin\w*|vasopresin\w*|"
    r"corticoid\w*|hidrocortisona|antibiotic\w*|antimicrob\w*|pocus|vexus|telus|tee\b|congestion venosa|"
    r"hepatitis hipox\w*|balance\s+(?:neto|hidrico)|destete|ventilacion invasiva|pam\b|perfusi[oó]n|"
    r"microcircul\w*|lactato|relleno capilar|delirium|aki\b|trr\b|sdra)\b",
    re.I,
)

PURE_CARDIO_RE = re.compile(
    r"\b(impella|lvad|euromacs|va-?ecmo|microaxial|shock cardiogenico|cardiogenic shock|"
    r"insuficiencia cardiaca aguda|acute heart failure|adhf|push-?ahf|post-?pci|sca con shock|"
    r"balon de contrapulsacion|iabp|thesus-hf|esc\s*2026.*insuficiencia cardiaca)\b",
    re.I,
)

SKIP_H2_SECTIONS = {
    "busqueda",
    "busqueda y criterio de filtro",
    "busqueda realizada",
    "ideas para obsidian/auxillian",
    "para cargar como fuente",
    "pendiente de lectura completa",
    "resumen ejecutivo",
}

ALERT_H2_KEYWORDS = ("alertas metodologicas", "baja confiabilidad")
PRACTICE_H2_KEYWORDS = ("cambios que podrian modificar practica",)

KNOWN_FIELD_PREFIXES = (
    "cita",
    "enlace",
    "enlaces",
    "tipo",
    "pregunta",
    "poblacion",
    "intervencion",
    "exposicion",
    "comparador",
    "outcome",
    "resultado",
    "punto clave",
    "mensaje",
    "limitaciones",
    "confiabilidad",
    "impacto",
    "como no sobreinterpretar",
    "no sobreinterpretar",
    "pendiente",
)


def classify_relevance(text_core: str, full_text: str) -> str:
    """Clasifica una entrada en 'directa', 'cardio_sepsis' o 'solo_cardio'."""
    norm_core = strip_accents(text_core)
    norm_full = strip_accents(full_text)
    if DIRECT_SEPSIS_RE.search(norm_core):
        return "directa"
    if PURE_CARDIO_RE.search(norm_full):
        if re.search(r"\b(vasoplej\w*|sepsis|septic|s[eé]ptic\w*|telus|congestion venosa|hepatitis hipox\w*)\b", norm_core):
            return "cardio_sepsis"
        return "solo_cardio"
    if CARDIO_SEPSIS_OVERLAP_RE.search(norm_core):
        return "cardio_sepsis"
    return "solo_cardio"


def assign_modules(text: str) -> list[str]:
    """Asigna uno o mas modulos (M01-M11, M14-M20) segun contenido clinico."""
    norm = strip_accents(text)
    mods = [mod for mod, pat in MODULE_RULES if pat.search(norm)]
    return mods or ["M01"]


def _match_field_header(stripped: str) -> tuple[str, str] | None:
    """Detecta cabeceras de campo con bullet (- Key: val) o sin bullet (Key: val / **Key:** val)."""
    m = re.match(r"^(?:-\s+)?(?:\*\*)?([^:*\n]{2,42}?)(?:\*\*)?:\s*(?:\*\*)?(.*)$", stripped)
    if not m:
        return None
    key_norm = strip_accents(m.group(1).strip())
    if stripped.startswith("-") or re.match(r"^\*\*[^*]+:\*\*", stripped) or any(key_norm.startswith(p) for p in KNOWN_FIELD_PREFIXES):
        return key_norm, m.group(2).strip().lstrip("*").strip()
    return None


def extract_field(lines: list[str], prefixes: tuple[str, ...]) -> str:
    """Extrae el valor de un campo markdown que coincida con alguno de los prefijos."""
    out: list[str] = []
    capturing = False
    for line in lines:
        stripped = line.strip()
        hdr = _match_field_header(stripped)
        if hdr:
            key_norm, val = hdr
            if any(key_norm == p or key_norm.startswith(p) for p in prefixes):
                capturing = True
                if val:
                    out.append(val)
                continue
            if capturing:
                break
        elif capturing:
            if not stripped or stripped.startswith("#"):
                break
            out.append(stripped)
    return " ".join(out).strip()


def extract_pmid_doi(text: str) -> tuple[str | None, str | None]:
    """Extrae el primer PMID y DOI presentes en un bloque."""
    pmid_m = re.search(r"PMID\s*:?\s*(\d{7,9})", text, re.I)
    if not pmid_m:
        pmid_m = re.search(r"pubmed\.ncbi\.nlm\.nih\.gov/(\d{7,9})", text, re.I)
    doi_m = re.search(r"(?:DOI\s*:?\s*|doi\.org/)(10\.\d{4,9}/[^\s\]\)>,;]+)", text, re.I)
    doi = doi_m.group(1).rstrip(".)],;") if doi_m else None
    return (pmid_m.group(1) if pmid_m else None, doi)


def extract_title_and_body(raw_heading: str, block_lines: list[str], fallback_title: str = "") -> tuple[str, str]:
    """Limpia numeracion en ### y busca titulo en bold si es bloque inline."""
    title = re.sub(r"^\d+\.\s*", "", raw_heading).strip()
    if not title and fallback_title:
        title = fallback_title
    body = "\n".join(block_lines).strip()
    return title, body


def parse_block_to_entry(
    title: str,
    block_lines: list[str],
    fecha_radar: str,
    section_kind: str,
    archivo_origen: str,
) -> dict | None:
    """Convierte un bloque de estudio en un diccionario estructurado."""
    body_text = "\n".join(block_lines).strip()
    if not body_text or len(body_text) < 40:
        return None
    norm_title = strip_accents(title)
    if norm_title.startswith("no hubo") or norm_title.startswith("correccion") and "erratum" not in strip_accents(body_text):
        pass

    pmid, doi = extract_pmid_doi(body_text)
    cita = extract_field(block_lines, ("cita",))
    if not cita:
        # En formatos como 2026-07-12, la primera linea no vacia en negrita es la cita
        for ln in block_lines:
            s = ln.strip()
            if s.startswith("**") and not s.startswith("- "):
                cita = s.strip("*").strip()
                break

    tipo = extract_field(block_lines, ("tipo/pregunta", "tipo de estudio", "tipo"))
    pregunta = extract_field(block_lines, ("pregunta clinica", "pregunta"))
    if pregunta and tipo and pregunta.lower() not in tipo.lower():
        tipo_pregunta = f"{tipo} — {pregunta}"
    else:
        tipo_pregunta = tipo or pregunta

    poblacion = extract_field(
        block_lines,
        ("poblacion/exposicion", "poblacion", "exposicion/comparador", "exposicion", "poblacion/exposicion/comparador"),
    )
    resultado = extract_field(
        block_lines,
        ("resultado numerico clave", "outcome/resultado clave", "resultado clave", "punto clave disponible", "punto clave", "mensaje"),
    )
    limitaciones = extract_field(block_lines, ("limitaciones/confiabilidad", "limitaciones", "confiabilidad"))
    impacto_uti = extract_field(block_lines, ("impacto practico uti/guardia", "impacto practico posible", "impacto practico", "impacto uti/guardia", "impacto uti"))
    no_sobreinterpretar = extract_field(block_lines, ("como no sobreinterpretarlo", "no sobreinterpretar"))

    # Si es un bloque sin bullets con sufijos (p. ej. alerta metodologica breve)
    if not resultado and not impacto_uti:
        resultado = re.sub(r"\s+", " ", body_text)[:420].strip()

    full_text = f"{title}\n{cita}\n{body_text}"
    core_text = f"{title}\n{cita}\n{tipo_pregunta}\n{poblacion}\n{resultado}"
    relevancia = classify_relevance(core_text, full_text)
    modulos = assign_modules(f"{core_text}\n{impacto_uti}")

    entry_id = f"pmid-{pmid}" if pmid else (f"doi-{slugify(doi)}" if doi else f"{fecha_radar}-{slugify(title)}")
    es_alerta = section_kind == "alerta" or bool(re.search(r"\b(erratum|correccion|baja confiabilidad|preclin|animales|retrospectivos de mimic)\b", strip_accents(full_text)))
    senal_practica = section_kind == "practica" and not es_alerta

    return {
        "id": entry_id,
        "fecha_radar": fecha_radar,
        "fechas_radar": [fecha_radar],
        "titulo": title,
        "cita": cita or None,
        "pmid": pmid,
        "doi": doi,
        "tipo_pregunta": tipo_pregunta or None,
        "poblacion": poblacion or None,
        "resultado_clave": resultado or None,
        "limitaciones": limitaciones or None,
        "impacto_uti": impacto_uti or None,
        "no_sobreinterpretar": no_sobreinterpretar or None,
        "archivo_origen": archivo_origen,
        "seccion_radar": section_kind,
        "senal_practica": senal_practica,
        "es_alerta_metodologica": es_alerta,
        "relevancia_sepsis": relevancia,
        "modulos": modulos,
    }


def parse_radar_file(path: Path) -> list[dict]:
    """Parsea todas las entradas clinicas de un archivo de Radar Bibliografico."""
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    m_date = re.match(r"^(\d{4}-\d{2}-\d{2})-", path.name)
    fecha_radar = m_date.group(1) if m_date else "1970-01-01"

    entries: list[dict] = []
    current_h2 = ""
    current_h3: str | None = None
    buffer: list[str] = []

    def get_section_kind(h2_norm: str) -> str:
        if any(k in h2_norm for k in ALERT_H2_KEYWORDS):
            return "alerta"
        if any(k in h2_norm for k in PRACTICE_H2_KEYWORDS):
            return "practica"
        return "lectura"

    def flush_h3() -> None:
        nonlocal buffer, current_h3
        if current_h3 is None:
            buffer = []
            return
        h2_norm = strip_accents(current_h2)
        if h2_norm in SKIP_H2_SECTIONS:
            buffer = []
            current_h3 = None
            return
        h3_norm = strip_accents(current_h3)
        if h3_norm == "contexto reciente, no nuevo hoy":
            # Procesar items con enlace/PMID dentro de contexto reciente
            chunk: list[str] = []
            chunk_title = ""
            for ln in buffer:
                m_item = re.match(r"^-\s+\*\*(.+?)\*\*\s*(.*)$", ln.strip())
                if m_item:
                    if chunk_title:
                        e = parse_block_to_entry(chunk_title, chunk, fecha_radar, "lectura", path.name)
                        if e:
                            entries.append(e)
                    chunk_title = m_item.group(1).rstrip(".").strip()
                    chunk = [m_item.group(2)] if m_item.group(2) else []
                elif chunk_title:
                    chunk.append(ln)
            if chunk_title:
                e = parse_block_to_entry(chunk_title, chunk, fecha_radar, "lectura", path.name)
                if e:
                    entries.append(e)
            buffer = []
            current_h3 = None
            return

        title, _ = extract_title_and_body(current_h3, buffer)
        e = parse_block_to_entry(title, buffer, fecha_radar, get_section_kind(h2_norm), path.name)
        if e and (e["pmid"] or e["doi"] or e["cita"] or e["impacto_uti"] or e["no_sobreinterpretar"]):
            entries.append(e)
        buffer = []
        current_h3 = None

    def flush_h2_inline() -> None:
        """Captura bloques de estudio escritos directo bajo ## (sin ###), como en 2026-07-12."""
        nonlocal buffer
        h2_norm = strip_accents(current_h2)
        if h2_norm in SKIP_H2_SECTIONS or not buffer:
            buffer = []
            return
        # Buscar si hay parrafo **Titulo.** ... seguido de bullets
        for idx, ln in enumerate(buffer):
            s = ln.strip()
            m_bold = re.match(r"^\*\*([^*]{12,})\*\*\s*(.*)$", s)
            if m_bold and ("PMID" in s or (idx + 1 < len(buffer) and buffer[idx + 1].strip().startswith("-"))):
                sub_title = m_bold.group(1).rstrip(".").strip()
                sub_lines = buffer[idx:]
                e = parse_block_to_entry(sub_title, sub_lines, fecha_radar, get_section_kind(h2_norm), path.name)
                if e and (e["pmid"] or e["doi"] or e["cita"] or e["impacto_uti"]):
                    entries.append(e)
                break
        buffer = []

    for line in lines:
        if line.startswith("## "):
            if current_h3 is not None:
                flush_h3()
            else:
                flush_h2_inline()
            current_h2 = line[3:].strip()
            current_h3 = None
            buffer = []
        elif line.startswith("### "):
            if current_h3 is not None:
                flush_h3()
            else:
                flush_h2_inline()
            current_h3 = line[4:].strip()
            buffer = []
        else:
            if current_h2:
                buffer.append(line)

    if current_h3 is not None:
        flush_h3()
    else:
        flush_h2_inline()

    return entries


def check_pubmed_recent(days: int, known_pmids: set[str]) -> dict:
    """Consulta opcionalmente PubMed E-utilities para detectar articulos recientes no ingresados aun."""
    today = datetime.now(timezone.utc).date()
    start = today - timedelta(days=days)
    term = f'(sepsis[Title/Abstract] OR "septic shock"[Title/Abstract]) AND ("{start:%Y/%m/%d}"[EDAT] : "{today:%Y/%m/%d}"[EDAT])'
    params = urllib.parse.urlencode({"db": "pubmed", "term": term, "retmax": "25", "retmode": "json"})
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?{params}"
    try:
        with urllib.request.urlopen(url, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        idlist = data.get("esearchresult", {}).get("idlist", [])
        nuevos = [pid for pid in idlist if pid not in known_pmids]
        return {"ok": True, "ventana_dias": days, "total_encontrados": len(idlist), "pmids_nuevos": nuevos[:15]}
    except (urllib.error.URLError, TimeoutError, Exception) as exc:
        return {"ok": False, "error": str(exc)}


def build_pendientes_markdown(entries: list[dict], skipped_cardio: int, radars_count: int) -> str:
    """Genera cola de revision humana en Markdown agrupada por modulo."""
    by_mod: dict[str, list[dict]] = defaultdict(list)
    for e in entries:
        for mod in e["modulos"]:
            by_mod[mod].append(e)

    lines = [
        "---",
        "tags: [sepsis, radar, evidencia-viva, pendientes]",
        "tipo: cola-revision",
        f"actualizado: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "---",
        "",
        "# Cola de Revisión de Evidencia Viva — Sepsis Atlas UTI",
        "",
        f"Procesadas **{radars_count} entregas** del Radar Bibliográfico. Se indexaron **{len(entries)} entradas relevantes para sepsis/shock** (se omitieron **{skipped_cardio}** entradas exclusivas de cardiología mecánica/IC aguda).",
        "",
        "## Cómo usar esta cola",
        "1. Al llegar una nueva entrega semanal en `Sepsis y Shock Septico/00 Radar Bibliografico/`, ejecutar `python scripts/ingestar_radar.py`.",
        "2. Los ítems marcados con **[SEÑAL PRÁCTICA]** o de alta jerarquía (RCT/guía/metaanálisis) se revisan primero para promoverlos al cuerpo del módulo `MXX-*.md`.",
        "3. Los ítems marcados con **[CAUTELA / ALERTA]** sirven para reforzar la sección *Cómo NO sobreinterpretarlo* sin sobredimensionar observacionales.",
        "",
    ]

    for mod in sorted(by_mod.keys()):
        items = sorted(by_mod[mod], key=lambda x: x["fecha_radar"], reverse=True)
        lines.append(f"## {mod} ({len(items)} entradas)")
        lines.append("")
        for it in items:
            tag = "[SEÑAL PRÁCTICA]" if it["senal_practica"] else ("[ALERTA METODOLÓGICA]" if it["es_alerta_metodologica"] else "[LECTURA]")
            pmid_txt = f" · PMID {it['pmid']}" if it["pmid"] else ""
            doi_txt = f" · DOI `{it['doi']}`" if it["doi"] else ""
            lines.append(f"- **{it['fecha_radar']}** {tag} **{it['titulo']}**{pmid_txt}{doi_txt} *(rel: {it['relevancia_sepsis']})*")
            if it["resultado_clave"]:
                lines.append(f"  - *Resultado:* {it['resultado_clave'][:260]}")
            if it["no_sobreinterpretar"]:
                lines.append(f"  - *No sobreinterpretar:* {it['no_sobreinterpretar'][:240]}")
        lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Ingesta el Radar Bibliografico hacia evidencia-viva.json")
    parser.add_argument("--check-pubmed-days", type=int, default=0, help="Consulta opcional a PubMed ultimos N dias")
    args = parser.parse_args()

    if not RADAR_DIR.exists():
        print(f"ERROR: No existe carpeta de Radar: {RADAR_DIR}", file=sys.stderr)
        return 1

    radar_files = sorted(Path(p) for p in glob.glob(str(RADAR_DIR / "*-radar-sepsis-shock-cardio.md")))
    if not radar_files:
        print("ERROR: No se encontraron archivos *-radar-sepsis-shock-cardio.md", file=sys.stderr)
        return 1

    raw_entries: list[dict] = []
    for rf in radar_files:
        raw_entries.extend(parse_radar_file(rf))

    dedup: dict[str, dict] = {}
    skipped_cardio = 0
    for e in raw_entries:
        if e["relevancia_sepsis"] == "solo_cardio":
            skipped_cardio += 1
            continue
        eid = e["id"]
        if eid in dedup:
            prev = dedup[eid]
            fechas = sorted(set(prev["fechas_radar"] + e["fechas_radar"]), reverse=True)
            if e["fecha_radar"] >= prev["fecha_radar"]:
                e["fechas_radar"] = fechas
                dedup[eid] = e
            else:
                prev["fechas_radar"] = fechas
        else:
            dedup[eid] = e

    final_entries = sorted(dedup.values(), key=lambda x: (x["fecha_radar"], x["titulo"]), reverse=True)

    mod_counter: Counter[str] = Counter()
    for e in final_entries:
        for m in e["modulos"]:
            mod_counter[m] += 1

    known_pmids = {e["pmid"] for e in final_entries if e["pmid"]}
    pubmed_check = check_pubmed_recent(args.check_pubmed_days, known_pmids) if args.check_pubmed_days > 0 else None

    BASE_CONOCIMIENTO_DIR.mkdir(parents=True, exist_ok=True)
    payload = {
        "ultima_actualizacion": datetime.now().astimezone().isoformat(timespec="seconds"),
        "radars_procesados": len(radar_files),
        "rango_fechas": {
            "desde": final_entries[-1]["fecha_radar"] if final_entries else None,
            "hasta": final_entries[0]["fecha_radar"] if final_entries else None,
        },
        "total_entradas": len(final_entries),
        "omitidas_solo_cardiologia": skipped_cardio,
        "conteo_por_modulo": dict(sorted(mod_counter.items())),
        "chequeo_pubmed": pubmed_check,
        "entradas": final_entries,
    }

    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    OUT_PENDIENTES.write_text(build_pendientes_markdown(final_entries, skipped_cardio, len(radar_files)), encoding="utf-8")

    print(
        f"OK: {len(radar_files)} radars -> {len(final_entries)} entradas sepsis/shock "
        f"({skipped_cardio} solo cardio omitidas). Modulos: {dict(sorted(mod_counter.items()))}"
    )
    if pubmed_check is not None:
        print(f"PubMed check: {pubmed_check}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
