---
tags: [sepsis, auditoria, fuentes, trazabilidad, evidencia-viva]
tipo: matriz-fuentes
creado: 2026-11-25
---

# Matriz Maestra de Fuentes, Trazabilidad y Auditoría Crítica — Sepsis Atlas UTI

Este documento consolida la trazabilidad completa entre los **24 cuadernos relevantes de NotebookLM** (18 de la temática Sepsis + 6 cuadernos académicos afines), los **117 archivos locales** relevantes de *bóveda local*, las **17 entregas semanales del Radar Bibliográfico** (`evidencia-viva.json`) y la verificación directa en literatura 2025–2026.

---

## 1. Trazabilidad de Cuadernos de NotebookLM → Módulos (`M01`–`M12`)

### A. Cuadernos de Sepsis y Shock Séptico (18 cuadernos, ~756 fuentes)

| # | Cuaderno NotebookLM | Fuentes | Lote | Módulos Destino | Notas de Auditoría |
|---|---|---|---|---|---|
| 1 | `Sepsis > General` | 126 | lote-1.md | `M01`, `M02`, `M04`, `M06`, `M09` | Incluye SSC 2026, ANDROMEDA-2, ImmunoSep, TIGRIS, BALANCE, BLING III, IA AUROC vs AUPRC |
| 2 | `Sepsis > SOFA-2 (desarrollo y validacion)` | 2 | lote-1.md | `M01`, `M05`, `M06` | PDFs completos Ranzani *JAMA* 2025 + ANDROMEDA-SHOCK-2 *JAMA* 2025; regla NE base vs sal |
| 3 | `Sepsis > Endotipos y medicina de precision` | 28 | lote-1.md | `M02`, `M10`, `M12` | ImmunoSep, TIGRIS, pTLR4 (Mühlhaus 2026), Shakoory 2016, Su 2025, Briassouli 2025 |
| 4 | `Sepsis > 2026 (glicocalix, gap CO2, Na por peso)` | 21 | lote-1.md | `M03`, `M04`, `M05`, `M06` | NOSTRADAMUS, GlycoNurse, Severino/Wendel-Garcia 2026 (obesidad), Morales 2024 (sal vs base), Dubin & Pozo 2025 |
| 5 | `Sepsis > Varios` | 2 | lote-1.md | `M01`, `M06`, `M09` | Síntesis operativa: carga ATB sin recorte 48h, NEWS2, VICTORY 2026 |
| 6 | `Sepsis > Actualizaciones ChatGPT` | 1 | lote-1.md | `M01`, `M05`, `M06` | Revisión clásica Rivers → CLOVERS 2023 / LOVIT / ACEP 2023 |
| 7 | `Sepsis > Microcirculacion - Bibliografia extensa` | 146 | lote-2.md | `M03`, `M04`, `M05` | DAMIS 2023, Cheng 2025, Zhang 2026 ($\text{PPV}_{6\text{h}}$), Sarkar 2026 ($\Delta\text{DSI}$), Li 2026 (LDR); requiere ajuste VNERi (ver §2) |
| 8 | `Sepsis > Microcirculacion - Sintesis clinica y fenotipos` | 47 | lote-2.md | `M03`, `M04` | Modelo 4V-2C (Vélez-Páez 2025), SLOOP (Huang 2025), CLOVERS Oshima 2025, Daniyarova 2025, Wang 2026, Cytocam-IDF |
| 9 | `Sepsis > PD y presion de pulso` | 86 | lote-2.md | `M05`, `M07` | Windkessel, Guyton MSFP, Ji 2026 (PP 40–70 mmHg), Lim 2025 (DPP 37 mmHg), Paiva 2024, Eadyn/TVC/API/PAPI |
| 10 | `Sepsis > Albumina` | 42 | lote-2.md | `M03`, `M05` | Starling revisado ($L_p S, \sigma, \pi_{sg}$), TERA 5%→>15%/h, SAFE/SAFE-TBI, ALBIOS, ERASS, ARISS 2026, Cusack 2025, Li 2025 TTE |
| 11 | `Sepsis > Farmacoterapia y manejo hemodinamico` | 110 | lote-2.md | `M05`, `M06`, `M07` | Rodríguez 2025 (Levosimendán TSA), NMA corticoides 2024, ATHOS-3, SEPSIS-ACT, AdrenOSS-2 Knothe 2025 (Enibarcimab) |
| 12 | `Sepsis > Articulos ChatGPT (sepsis y cardio)` | 38 | lote-3.md | `M05`, `M07`, `M09`, `M10` | ARISE FLUIDS cifras completas, BICARICU-2, Tongyoo 2026 ($E/e'<10$), Puiac 2018 (HIA), Gisbert-Mora 2026 ($\text{CO}_2\text{e}$) |
| 13 | `Sepsis > Coagulacion` | 59 | lote-3.md | `M08` | Modelo celular, NETosis (suicida/vital/mitocondrial, Retter 2025), Wang 2026, SCARLET, KyberSept, SIC/JAAM/ISTH |
| 14 | `Sepsis > Antibioticos` | 53 | lote-3.md | `M09` | BLING III, MERCY, Abdul-Aziz 2024, Kuwana 2026 (cefepima ≥12g/48h), Beijer 2025, Gatti 2024, Hefny 2022 ARC, estabilidad meropenem |
| 15 | `Sepsis > ATB primeras 24-48h` | 26 | lote-3.md | `M09`, `M10` | Aldardeer 2024, ACORN, SMART, Patanwala 2025, BALANCE, ADAPT-Sepsis, Tee 2025/2026, **Boletín Pasteran & Corso 2025 (Malbrán)** |
| 16 | `Manejo de la Lesión Renal Aguda en el Shock Séptico` | 6 | lote-4.md | `M10`, `M09`, `M06` | SMART, VANISH, ATHOS-3 AKI-3 (Chaba 2025), STARRT-AKI, AKIKI-2, %FO; **corregido en OPTPRESS y TIGRIS** |
| 17 | `Sepsis > Higado en shock` | 52 | lote-4.md | `M11` | SRLI/SALD (Chen 2026 ML SHAP), Xu 2025, EASL Factor R / Ley Hy, PRIS (Krajčová, Schroeppel, Pitié-Salpêtrière 2025) |
| 18 | `[Tesis] Albumina, Glicocalix y PK de Midazolam - MIRA-Research` | 11 | lote-3.md | `M03`, `M11` | Protocolo doctoral MIRA Córdoba + ALI + PK midazolam; **actualizadas tesis previas de glicocálix** |

### B. Cuadernos Afines Académicos (6 cuadernos; excluido `[SATI] Registro de Pase de Guardia`)

| # | Cuaderno NotebookLM | Fuentes | Lote | Módulos Destino | Aporte Principal |
|---|---|---|---|---|---|
| 19 | `Oxigeno - clase Martes UTI (hiperoxia y microcirculacion)` *(incluye ejes de `Oxigeno - Masterclass Martes UTI`)* | 73 (+2) | lote-4.md | `M04` | $\text{DO}_2/\text{VO}_2$, IOTA, HYPERS2S, LOCO2, UK-ROX, LOGICAL, HOT-ICU, AVOID, oxímetro en piel oscura (Gudelunas 2024) |
| 20 | `[Cardio] Manejo Actualizado del Shock e Insuficiencia Cardíaca` | 10 | lote-4.md | `M05`, `M06`, `M07` | SOAP II, ESC 2021, Vieillard-Baron 2020 (VD en SDRA), Kircher VCI/PAD |
| 21 | `[Cardio] Fármacos Vasoactivos` | 28 | lote-4.md | `M06`, `M05` | OptimaCC (Levy 2018), VIS ($\ge 20$), vía periférica antecubital, incompatibilidad Y furosemida+catecolaminas |
| 22 | `[Eco] Ecografía en el Paciente Crítico` *(cubre `clase de ecografia critica`)* | 34 | lote-4.md | `M07`, `M05` | RUSH, BLUE, VTI, PLR, TOTE, Mini-Fluid Challenge, Berikashvili 2025 SUCRA, Zhang 2025, EPSS, LUS 0–36, SAM |
| 23 | `[SATI] clases` | 240 | lote-4.md | `M06`, `M05`, `M04`, `M12` | 2nd Swiss Vasopressin Consensus 2025, Guinot $E_{adyn}$, LOVIT/VICTORY/REMAP-CAP vit C (falsa hiperglucemia POC), enantiómeros dobutamina, trampa L-NMMA |

### C. Bóveda Local (*bóveda local*, 117 archivos + 17 Radares = 68 entradas)

- **Eje M01–M04:** MOC Sepsis.md, Sepsis y shock séptico.md, capítulo docente 2024–2026 (`build_sepsis_pdf.py`), PDF oficial SOFA-2, `Singer 2026`, `Sindrome post-sepsis`, `Neumann 2026` (PDF 28 pp), `Hu 2024` (PDF 19 pp), `Hibernacion mitocondrial`, `Mühlhaus 2026`, `Giamarellos-Bourboulis 2026`, `Ferritina, MALS y anakinra`, `Permeabilidad_Vascular_Masterclass.pptx`, `glicocalix-endotelial.html`, `Calculadora Fuga Capilar (ALI).md`, `indice de fuga capilar.pdf` + `indice de fuga capilar2.pdf`, `PBR y GlycoCheck`, `Rovas 2026`, `Scarbeck 2026 EDGE`, `Beltran 2026`, `Microcirculacion en sepsis - atlas mecanistico`, `ANDROMEDA-SHOCK 2025` (PDF 12 pp), `Gap veno-arterial de CO2`, `Lactato e inmunometabolismo`.
- **Eje M05–M08:** `Ko 2026`, `Goury 2025 (VNERi)`, `ARISE FLUIDS 2026`, `Sakr 2026 ARISS`, `Reposicion de Volumen` + `Si 2026`, `Dünser 2009`, `Cioccari 2016`, `Brosse 2026`, `Magder 2015`, `Valenti 2021`, `Wyler von Ballmoos 2010`, `Takala 2011`, `PAD MasterClass - bibliografía auditada 2026`, `Peso real vs ideal para noradrenalina en el obeso`, `Wieruszewski 2026 TRICYCLE`, `Dubin 2024`, `De Backer 2024`, `Guarracino 2026`, `Zhong 2026`, `Corticoides en sepsis búsqueda 2026-11`, `Weibel 2026`, `Disfuncion miocardica septica`, `Lorstad 2026 COMTESS` + corrección, `Indicadores Ecograficos de Congestion Venosa`, `02-PoCUS/*`, `Zhou 2026`, `Shiari 2026`, `Berger 2014`, `Inmunotrombosis y coagulopatia septica`.
- **Eje M09–M12:** `ATB en las primeras 24-48 h`, `Ulldemolins 2026`, `Antibioticos en sepsis con AKI`, `Early vs late...`, `Optimization...`, `Antimicrobial dosing in AKI - revision UCI 2025`, `Procalcitonina en Sepsis`, `Actualización Antibioticoterapia Shock Séptico (clase propia)`, `Protocolo Antibioticoterapia Sepsis UCI.md`, `Calculadora Sepsis y Antibioticos UCI.md`, `AKI asociada a sepsis`, `Hemoadsorcion y purificacion sanguinea`, `Neyra 2026 TIGRIS`, `Hígado en shock`, `Intestino, barrera y microbioma`, `Encefalopatia asociada a sepsis`, `Propofol en shock septico / PRIS`, `Midazolam PK (Smeets 2022/2024, Le Carpentier 2022, Shudofsky 2026, Franken 2017, Kirwan 2012, Ahonen 1999)`, `Sedoanalgesia 2022-2026`, `Insumos PVC vs no-PVC`, `El Monitor Puede Mentir`, `Caso T - PRIS PTZ`, `Sepsis en la guardia`, `Evaluaciones/_indice.md` + `examen_integrador_80`.
- **Evidencia Viva (Radar 2026-07-12 a 2026-11-22):** evidencia-viva.json (**68** entradas sepsis/shock indexadas; **41** entradas solo-cardiología filtradas).

---

## 2. Registro de Auditoría y Correcciones Maestras

Esta tabla documenta todas las discrepancias, mitos obsoletos, errores de cita o trampas matemáticas detectadas al cruzar NotebookLM contra la bóveda y las publicaciones primarias 2024–2026. **Regla editorial: ningún módulo ni simulador de Sepsis Atlas UTI puede reproducir el error previo.**

| # | Fuente con Error / Desactualización | Afirmación Errónea o Incompleta | Corrección Verificada (Fuente Primaria) | Módulo(s) |
|---|---|---|---|---|
| 1 | Notas antiguas de antibióticos | **BLING III** citado como *NEJM 2023* | **BLING III** es Dulhunty et al., ***JAMA* 2024;332(8):629–637** (`PMID 38864155`); **MERCY** es Monti et al., ***JAMA* 2023;330(2):141–151** (`PMID 37326473`). | `M09` |
| 2 | Cuaderno NLM `LRA en Shock Séptico` | Recomienda PAM **70–80/85 mmHg en hipertensos crónicos** citando beneficio renal en OPTPRESS | **OPTPRESS** (`PMID 40358717`, n≈514, ≥65 a) comparó PAM 80–85 vs 65–70 y fue **detenido por daño** (mort 90d **39,3% vs 28,6%**) **sin beneficio en ningún subgrupo, incluidos hipertensos crónicos**. | `M10`, `M05` |
| 3 | Cuaderno NLM `LRA en Shock Séptico` | Presenta **TIGRIS** con ARR 17,4% sin detallar diseño ni sesgos | **TIGRIS** (`Neyra 2026, Lancet Respir Med`, `PMID 41887242`) es **RCT abierto sin sham**, **2:1** (`n=151` evaluables, ~50 controles), **análisis bayesiano con prior informativo de EUPHRATES**. Mort 28d **38,7% vs 45,1% (ARR 6,4%)**; 90d **43,4% vs 60,8% (ARR 17,4%, NNT 8,1)**. | `M10`, `M02` |
| 4 | Revisión antigua PK Midazolam | Cita **Neupane 2022 (`PMID 36036654`)** como evidencia adulta de AKI y midazolam | **Neupane 2022 es estudio pediátrico**. Reemplazar en adultos por **Le Carpentier 2022** (`PMID 35776074`), **Smeets 2022** (`PMID 35397768`), **Smeets 2024** (`PMID 37926072`) y **Shudofsky 2026** (`PMID 42468972`). | `M11` |
| 5 | `glicocalix-endotelial.html`, `Glicocalix endotelial en sepsis.md`, `MIRA-Research` | Afirma que SYN-1 predice FMO, supera a SOFA/APACHE II, que "cada bolo lava glicocálix" y recomienda albúmina >30 g/L por ALBIOS | (a) **Daniyarova 2025** (`PMID 41195755`, n=4.529): SYN-1 predice mortalidad (OR 2,04) pero **NO MODS** (OR 2,35 NS) ni falla respiratoria (OR 1,05 NS); **Endocan** discrimina mejor (OR 5,06). (b) **Wang 2026** (`PMID 41593637`): la respuesta inmune precede al shedding (no lineal, $p=0,008$). (c) **CLOVERS 2025** (`PMID 40315385`): liberal vs restrictivo **no alteró HS ni SYN-1 a 24 h**. (d) **ARISS 2026** (`PMID 41712212`): albúmina 20% para $\ge 3,0\text{ g/dL}$ fue neutra a 90d (**43,3% vs 45,9%, RR 0,94, p=0,71**). | `M03`, `M05` |
| 6 | Cuaderno NLM `Microcirculacion` + `Sepsis-PBR` | Marco de 2 dominios (Rovas 2026) con PBR como medidor directo de espesor/fuga; cortes fijos universales | **Rovas 2026** admite que PBR **no mide grosor anatómico ni fuga**. En **EDGE 2026** (`PMID 41998704`) PBR no sobrevive multivariable ($p=0,1$) y en **Beltrán 2026** (`PMID 41645301`) PBR no difiere entre fenotipos ($p=0,753$). Además kits ELISA varían de 3 ng/mL (`Wang 2026`) a 150 ng/mL. | `M03` |
| 7 | `Indice de Fuga Capilar en Sepsis.md` vs `indice de fuga capilar.pdf` | Fórmula `ALI = PCR (mg/L) / Alb (g/L)` vs `IFC = [PCR (mg/dL) / Alb (g/L)] × 100` | **Trampa de escala ×10 / ×100**: Palacios 2018 (≥85,55) y Cordemans (>61) multiplican ×10 frente al cociente directo de García Uribe 2021 (≥7,41). La calculadora en M03 debe exigir selector explícito de unidades y mostrar ambas escalas. | `M03` |
| 8 | `01-Clínica\Sepsis y shock séptico.md` | (a) Lactato c/2h hasta aclaramiento >20%; (b) SIC con solo "SOFA CV"; (c) prohíbe albúmina en leak; (d) atribuye weaning VP tras NE a "ESICM 2025"; (e) alerta ΔSOFA c/48h ≥2 | (a) **Kattan 2020** (`PMID 32845407`) reanimar por lactato con CRT normal duplicó mortalidad (**40% vs 23%, aOR 3,3**); **Ahlstedt 2024** (`CLASSIC`). (b) SIC ISTH usa **4 órganos** (Resp+CV+Hep+Renal). (c) Matiz SSC 2026 / ARISS. (d) La cita real es **DOVSS (Jeon 2018) / Musallam 2018 / 2nd Swiss Vasopressin Consensus 2025**. (e) No hay corte ΔSOFA validado a 48 h. | `M01`, `M04`, `M05`, `M06`, `M08` |
| 9 | `PAD MasterClass.md` (pre-auditoría) | Cifras docentes "62% vs 28%", "PAD cae horas antes", categorías rígidas DSI | Retiradas en `PAD MasterClass - bibliografía auditada 2026.md`. Usar evidencia real: **Ospina-Tascón 2020** (DSI continuo), **Ko 2026** (`PMID 41593462`, PAD <50 mmHg aOR 0,48), **Sarkar 2026** (ΔDSI). | `M05` |
| 10 | Cuaderno NLM `Microcirculacion - Bibliografia extensa` | Cita VNERi con cortes aproximados `<0,90 / 1,6-2,5 / >3,5` y autor `Sharma 2026` en lugar de `Sarkar` | **Goury 2025** (`PMID 40133652`, ANDROMEDA-SHOCK `n=424`): $\text{VNERi} = \text{PAD}/(\text{NA bitartrato }\mu\text{g/kg/min} \times \text{FC})$ tiene nadir **6,7** y cortes **2,6 y 10,8** (mort 56% / 28% / 39%). Primer autor de IJCCM 2026 (`Temporal Analysis of DSI`) verificado es **Soumya Sarkar** (2° Ashish K. Sharma). También en **Ko 2026**, la tabla de nota suma n=328 (273+55) vs fila PAD <50 n=215. | `M05` |
| 11 | Notas previas de **SOFA-2** (`capítulo docente (síntesis).md`) y dosis de Noradrenalina | Atribuye AUROC 0,829 vs 0,796 a Ranzani; confunde sal vs base de NA | **Ranzani *JAMA* 2025** tiene AUROC **0,79 vs 0,77** (0,829 vs 0,796 es la validación externa **Bai 2026** en MIMIC-IV). **SOFA-2 exige NE base** (`1 mg base = 2,00 mg bitartrato monohidrato = 1,89 mg bitartrato anhidro = 1,22 mg HCl`); además **Severino/Wendel-Garcia 2026** demostró sesgo de −14,5% a −26% al indexar por peso real en obesos. | `M01`, `M06` |
| 12 | `Sedoanalgesia` / abstinencia opioide | Vigilar IWS desde ">5 días" de infusión | Umbral validado de riesgo IWS es **≥72 h** o **≥1.200 µg/día de fentanilo (~50 µg/h)** (`PMID 37151892`). | `M11` |
| 13 | Metaanálisis de corticoides y quemados | Citar "el metaanálisis" como definitivo a favor de corticoides o permitir Vitamina C en quemados | **Weibel 2026** (`PMID 43058869`): 90% de 42 RS tienen confianza AMSTAR-2 críticamente baja y >50% no comparte ensayos; **FluDReSS 2024** mostró absorción enteral errática de FC en 97%. **VICTORY 2026** (`PMID 42267875`, **HR/RR 1,96**) confirma daño por Vitamina C IV alta incluso en quemados. | `M06`, `M01` |
| 14 | Notas antiguas de troponina y miocardiopatía séptica | "Troponina elevada predice disfunción miocárdica séptica y mortalidad" | **Choi 2025** (n=2.141) y **COMTESS / Lörstad 2026** (`PMID 42393752`, + corrección `Crit Care 30:480`): hs-cTnT no correlaciona con IMR ($P=0,899$), MRR ($P=0,987$) ni FEVI; **GLS** (curva en U, óptimo −23% a −16%, Huespe 2026) supera a FEVI. | `M07` |
| 15 | Notas stub o PDFs mal rotulados en vault | `vasopresina vs nora en sepsis.pdf` y `hidrocortisona 1.pdf` | El primero es un UpToDate genérico de sepsis y el segundo un índice de *Medicina Intensiva* 2010; descartados como fuentes primarias. | `M06` |
| 16 | `Sepsis > General` (NLM) sobre Ferritina/MALS y **Zonulina** (`Mühlhaus 2026`) | Presenta 4.420 ng/mL como corte biológico duro para anakinra y cita correlación de pTLR4 con zonulina ($r=0,24$) | **Ouranos 2026** (`PMID 42317790`): 4.420 es **rampa continua sin quiebre** y real-world anakinra con ≥4.420 tuvo HR muerte 14d 1,83 (1,04–3,22), mientras **INSPIRE 2026** (`PMID 41552367`) fue positivo con mediana 305–398 ng/mL. **Schuster 2026** (`PMID 41224076`): mHLA-DR no difirió entre MALS y no-MALS. **Scheffler 2018** (`PMID 29459849`): ELISAs comerciales de "zonulina" miden properdina, no pre-haptoglobina 2. | `M02`, `M11` |

---

## 3. Protocolo Operativo de Evidencia Viva (Actualización Continua)

```
Nueva entrega semanal en:
  Sepsis y Shock Septico/00 Radar Bibliografico/YYYY-MM-DD-radar-sepsis-shock-cardio.md
         │
         ▼  python scripts/ingestar_radar.py [--check-pubmed-days 7]
         ├──► base-conocimiento/evidencia-viva.json  ──► Consumido directo por Web App (Fase 2)
         │                                                (Timeline "Evidencia Viva" + badge "Nuevo" en MXX)
         └──► base-conocimiento/pendientes-revision.md ──► Revisión humana:
                                                           • [SEÑAL PRÁCTICA] / RCT / Guía → Promover al texto de MXX-*.md
                                                           • [ALERTA METODOLÓGICA] → Sumar a "Cómo NO sobreinterpretarlo"
```

1. **Ingesta local:** Al agregarse un nuevo Radar semanal (o ejecutarse bajo `/schedule`), correr `python scripts/ingestar_radar.py`.
2. **Chequeo directo PubMed (opcional):** `python scripts/ingestar_radar.py --check-pubmed-days 7` detecta PMIDs nuevos aún no curados en el Radar.
3. **Promoción a módulos maestros:** Solo los estudios con impacto clínico confirmado (ECAs, guías, metaanálisis de alta certeza o fe de erratas críticas) modifican los umbrales de simuladores o el cuerpo principal de `M01`–`M12`, dejando registro en la sección `## 6.` del módulo y en esta matriz.
