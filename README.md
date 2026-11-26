---
tags: [proyectos, sepsis, docencia, uti, webapp]
tipo: proyecto
creado: 2026-11-25
estado: fase-2a
---

# Sepsis Atlas UTI — Tratado-Laboratorio Interactivo

Plataforma educativa y clínica de Sepsis y Shock Séptico pensada para residentes de Terapia Intensiva (R2–R3) y formación desde las bases hasta la frontera de la evidencia (2022–2026).

Integra los **18 cuadernos de sepsis de NotebookLM** (~756 fuentes), **6 cuadernos afines académicos** (oxígeno/microcirculación, cardio-shock, vasoactivos, ecografía crítica, clases SATI), el corpus local de **bóveda local** (`MOC Sepsis`, `02-PoCUS`, protocolos y simuladores previos como `glicocalix-endotelial.html`) y las entregas semanales del **Radar Bibliográfico**.

---

## Arquitectura Curricular (19 Módulos)

| ID | Módulo | Foco | Piloto Fase 2A |
|---|---|---|---|
| **M01** | Definición, Criterios y Escalas (Sepsis-3 → SOFA-2) | Criterios, SOFA-1 vs SOFA-2, límites de RCTs sindrómicos | — |
| **M02** | Inmunopatología, Mitocondria y Endotipos | PAMPs/DAMPs, NLRP3, daño vs hibernación mitocondrial, CTS1–3, ImmunoSep | — |
| **M03** | Histología Endotelial, Glicocálix y Fuga Capilar | Starling revisada, shedding, Syndecan-1/Endocan, CLOVERS, PBR, ALI | **Sí** |
| **M04** | Microcirculación, Perfusión y Lactato | $DO_2/VO_2$, CTH, ANDROMEDA-SHOCK-2, Gap $\text{CO}_2$, hiperoxia | — |
| **M05** | Hemodinamia, Tono Vasomotor y Fluidos | Frank-Starling, PAD/PP (Ko 2026), DSI, VNERi, ARISE FLUIDS, ARISS | **Sí** |
| **M06** | Farmacología Vasoactiva, Corticoides y Control de FC | Receptores, NA en obesidad, vasopresina, dobutamina, landiolol/BB, HC+FC vs HAT | — |
| **M07** | Ecografía Crítica (PoCUS) y Corazón Séptico | RUSH, VTI, BLUE, VExUS, GLS vs FEVI, COMTESS 2026 | — |
| **M08** | Coagulopatía Séptica e Inmunotrombosis | NETs, complemento + CID, trayectoria SIC / SIC-2, anticoagulación | — |
| **M09** | Antibioticoterapia: PK/PD, 24–48 h, ARC y AKI | Modelos PK/PD, BLING III, MERCY, ARC, AKI inicial, ACORN, BALANCE, ADAPT-Sepsis | **Sí** |
| **M10** | Riñón en Sepsis (SA-AKI) y Soporte Extracorpóreo | Histología renal, hipoxia medular por NA, TRR, hemoadsorción, TIGRIS | — |
| **M11** | Hígado, Intestino, Cerebro y Sedoanalgesia | Sinusoide hepático, barrera/SuDDICU, SAE/MAPopt, PRIS propofol, PK midazolam | — |
| **M14** | Diagnóstico de la Infección y Control de Foco | Hemocultivos, PCT/presepsina, diagnóstico molecular y mNGS, BDG, timing del control de foco (Reitz, POINTER, STOP-IT), fascitis necrotizante | — |
| **M16** | Patógenos Difíciles: Multirresistentes, Hongos y Virus | Clases de Ambler, RECAPT-AR (NDM ≈ KPC en Argentina), MERINO, CRACKLE, aztreonam-avibactam, AIDA/OVERCOME/ATTACK, CREDIBLE-CR, CAMERA2, EMPIRICUS, aspergilosis post-influenza, oseltamivir, reactivación de CMV/HSV | — |
| **M15** | Pulmón Séptico: Neumonía como Foco y SDRA | LUNG SAFE, definición global 2024, ARMA, presión de distensión, ART, PROSEVA, ROSE, HOT-ICU/UK-ROX, FACTT, CAPE COD vs REMAP-CAP, EOLIA, subfenotipos, cor pulmonale, NAV (REGARD-VAP, AMIKINHAL) | — |
| **M17** | Soporte General y Endocrino-Metabólico | Glucemia (NICE-SUGAR, TGC-fast, LUCID, Yale, transición a SC), nutrición (EPaNIC, NUTRIREA-2/3, EFFORT, realimentación), transfusión (TRISS, PACER, TRALI/TACO), fiebre (HEAT, ASTER), profilaxis de úlcera de estrés (SUP-ICU, REVISE, SCCM/ASHP 2024) | — |
| **M18** | Poblaciones Especiales | Sepsis materna (OMS, GLOSS, qSOFA-P, APT-Sepsis), neutropenia febril (ECIL-4, How Long), trasplante, anciano frágil (65 trial, CFS, sarcopenia), cirrosis (albúmina en PBE, ACLF/CANONIC) | — |
| **M19** | Después de la UTI: Post-Sepsis, PICS y Rehabilitación | Mortalidad tardía (Engoren, Prescott, Arbous), debilidad adquirida, BRAIN-ICU, ABCDEF, Schweickert vs TEAM, diarios, PRaCTICaL/RECOVER/ENCOMPASS, subtipos de Flick | — |
| **M20** | La Sepsis como Sistema | GBD, inequidad en Argentina (Estenssoro 2019), SPREAD, codificación, costos, paquete de la hora 1, tiempo al antibiótico (Kumar, Seymour, Pak, Rhee 2026), SEP-1, PRISM, Pronovost, CLEAN-IT, IA (Epic, TREWS, COMPOSER), ensayos de tiempo limitado | — |
| **M12** | Centro de Entrenamiento SATI | Banco de MCQs R2–R3, casos "Detectá el error de guardia" y flashcards | — |

---

## Flujo de Evidencia Viva (`Radar → Base → Web`)

Para que la herramienta nunca quede congelada en el tiempo y incorpore automáticamente artículos nuevos:

1. **Ingreso semanal del Radar:** Cada nueva entrega `YYYY-MM-DD-radar-sepsis-shock-cardio.md` guardada en `Sepsis y Shock Septico/00 Radar Bibliografico/` se procesa con:
   ```powershell
   python scripts/ingestar_radar.py
   ```
   Opcionalmente podés consultar novedades recientes en PubMed / Europe PMC sin depender de archivos locales ejecutando:
   ```powershell
   python scripts/ingestar_radar.py --check-pubmed-days 7
   ```
2. **Salidas automáticas:**
   - `base-conocimiento/evidencia-viva.json`: base estructurada ordenada del más reciente al más antiguo, filtrada por relevancia en sepsis/shock y etiquetada por módulo (`M01`–`M11`, `M14`–`M20`). La app web de Fase 2 la consume directamente para mostrar el timeline **"Radar de Evidencia Viva"** e insignias de **"Nuevo"** por módulo.
   - `base-conocimiento/pendientes-revision.md`: cola de curación humana agrupada por módulo, separando señales con posible impacto práctico de alertas metodológicas o resultados observacionales que requieren cautela (*"cómo NO sobreinterpretarlo"*).
3. **Promoción a módulo maestro:** Cuando un estudio marca un cambio real de práctica o reemplaza evidencia previa, se promueve al cuerpo del módulo `MXX-*.md` y se registra en `base-conocimiento/00-matriz-fuentes.md`.
4. **Actualización mensual automática:** la tarea de Windows `AtlasActualizacionMensual` corre el día 1 de cada mes a las 7:00 (o al prender la compu si estaba apagada) el script `scripts/actualizar_mensual.ps1`. Ingesta el Radar, consulta PubMed (últimos 35 días), verifica los motores, arma `web/dist` y, si existen las variables de entorno `NETLIFY_AUTH_TOKEN` y `ATLAS_NETLIFY_SITE_ID`, lo publica en Netlify. El resultado queda en `actualizaciones.log`. Los PMID nuevos de PubMed se registran pero no se publican: solo entra a la web lo que pasó por el Radar.

## Barrido de PubMed y avisos de correo

`python scripts/barrido_pubmed_anual.py --dias 365 [--correo archivo.tsv]` busca ensayos, metaanálisis y guías de sepsis en humanos, descarta lo que ya está en el Atlas, la bóveda o el Radar, filtra pediátricos y artículos donde la sepsis no es el tema, asigna módulo y deja la cola en `base-conocimiento/candidatos-pubmed-correo.md` (+ `.json`). No publica nada. La actualización mensual lo corre con `--dias 35`. Los artículos sacados de los avisos de EvidenceAlerts están en `base-conocimiento/_correo-evidencealerts-2026.tsv`.

## Publicación

- Sitio aparte en Netlify, fuera de buscadores (`noindex` en `index.html` y `web/public/_headers`). Es público para quien tenga el enlace.
- `sync-data.mjs` limpia rutas locales antes del build y lo corta si queda alguna.
- Mapa de lo que falta cubrir: `mapa-cobertura-sepsis.md`.

---

## Estructura del Proyecto

```text
Sepsis-Atlas-UTI/
├── README.md
├── scripts/
│   └── ingestar_radar.py
├── base-conocimiento/
│   ├── 00-matriz-fuentes.md
│   ├── evidencia-viva.json
│   ├── pendientes-revision.md
│   ├── _extracciones-nlm/
│   │   ├── lote-1.md
│   │   ├── lote-2.md
│   │   ├── lote-3.md
│   │   └── lote-4.md
│   └── M01..M12-*.md, M14-*.md … M20-*.md (M12 se muestra último en la web; M13 propuesto en mapa-cobertura-sepsis.md)
└── web/   (Fase 2A — React + TypeScript + Vite)
    ├── scripts/
    │   ├── sync-data.mjs
    │   └── verify-engines.mjs
    └── src/
```

---

## Arranque de la Aplicación Web (Fase 2A)

Desde la raíz del proyecto (`03-Proyectos/Sepsis-Atlas-UTI`):

1. **Actualizar Evidencia Viva (opcional ante nuevo Radar o PubMed):**
   ```powershell
   python scripts/ingestar_radar.py --check-pubmed-days 7
   ```
2. **Sincronizar módulos y datos en la web app:**
   ```powershell
   cd web
   npm run sync-data
   ```
3. **Verificar motores matemáticos (`M03`, `M05`, `M09`):**
   ```powershell
   npm run verify
   ```
   Para comprobar que los enlaces hacia [[UTI Tools]] siguen existiendo en el sitio publicado (necesita internet):
   ```powershell
   npm run verify:links
   ```
   El mapa módulo → calculadora está en `web/src/data/uti-tools.json`.
4. **Modo desarrollo en vivo / Build estático portable (`web/dist/`):**
   ```powershell
   npm run dev
   # o para generar paquete estático desplegable:
   npm run build
   ```
