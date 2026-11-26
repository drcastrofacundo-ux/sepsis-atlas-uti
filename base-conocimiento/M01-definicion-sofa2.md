---
id: M01
titulo: "Definición Moderna, SOFA-2, Fisiología de la Falla Orgánica y Síndrome Post-Sepsis"
subtitulo: "De Sepsis-3 y SSC 2026 a la recalibración SOFA-2 (Ranzani JAMA 2025), límites de la IA y secuelas post-UCI"
ultima_actualizacion: 2026-11-25
piloto_fase2: false
fuentes_nlm:
  - "General"
  - "SOFA-2"
  - "2026"
  - "Actualizaciones ChatGPT"
fuentes_vault:
  - "04-Recursos/Papers/MOC Sepsis.md"
  - "01-Clínica/Sepsis y shock séptico.md"
  - "Sepsis y Shock Septico/ (SOFA-2, Singer 2026, Post-sepsis)"
palabras_clave:
  - Sepsis-3
  - SSC 2026
  - ESICM 2025
  - SOFA-2
  - Ranzani 2025
  - Bai 2026
  - qSOFA
  - ECMO
  - AUPRC
  - Singer 2026
  - post-sepsis
---

# M01 — Definición Moderna, SOFA-2, Fisiología de la Falla Orgánica y Síndrome Post-Sepsis

---

## 1. Capa Base — Desde cero (Conceptos, Criterios y Fundamentos)

### 1.1 Qué es sepsis hoy (Sepsis-3 a SSC 2026)
Desde el consenso **Sepsis-3 (*JAMA* 2016)**, la **sepsis** se define operativamente como una **disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped a una infección** — abandonando definitivamente los antiguos criterios inespecíficos de SRIS.

- **Criterio operativo clínico:** sospecha o confirmación de infección + un incremento agudo **$\Delta\text{SOFA} \ge 2\text{ puntos}$** respecto al estado basal (asumido $0$ si se desconoce), equivalente a una mortalidad intrahospitalaria basal $\ge 10\%$.
- **Shock séptico:** subgrupo de sepsis en el que persisten anomalías circulatorias y celulares/metabólicas profundas capaces de elevar sustancialmente la mortalidad:
  1. Requerimiento de **vasopresores** para sostener $\text{PAM} \ge 65\text{ mmHg}$, **y**
  2. **Lactato sérico $> 2\text{ mmol/L}$** ($> 18\text{ mg/dL}$) **pese a una resucitación volémica adecuada** ($\text{mortalidad hospitalaria}>40\%$).

### 1.2 Herramientas de cribado vs. puntaje de falla orgánica
| Herramienta | Propósito real | Rendimiento y límite crítico | Uso recomendado (SSC 2026) |
| :--- | :--- | :--- | :--- |
| **qSOFA** ($\text{FR}\ge 22$, $\text{PAS}\le 100$, $\text{GCS}<15$) | Alerta rápida fuera de UCI | **Sensibilidad pobre ($0{,}52$)** frente a NEWS2 o SOFA completo | **Nunca usar como regla de exclusión** ni herramienta única de tamizaje |
| **NEWS2 / SIRS** | Cribado temprano de deterioro | Mayor sensibilidad inicial en urgencias/piso | Útil para disparar evaluación clínica rápida, sin definir sepsis por sí solo |
| **SOFA / SOFA-2** | Cuantificación objetiva de disfunción multiorgánica | Evalúa $6$ sistemas ($0\text{–}4$ puntos c/u; $0\text{–}24$ totales) | Diagnóstico operativo de disfunción orgánica ($\Delta \ge 2$) y seguimiento en UCI |

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Guías Internacionales 2025–2026 y Shock Refractario
- **Surviving Sepsis Campaign (SSC) 2026 (`PMID 41869847`):** actualización mayor con **$129$ declaraciones ($46$ nuevas)**. Destacan:
  - Antimicrobianos $< 1\text{ h}$ en shock/sepsis probable y $< 3\text{ h}$ en sepsis posible sin shock; infusión prolongada/continua de $\beta$-lactámicos tras carga = recomendación fuerte, certeza alta; antibióticos antianaeróbicos solo dirigidos ([M09](#module-M09)).
  - **Prohibición estricta de sedación durante prono vigil (*awake proning*):** deprime el impulso respiratorio compensador y dificulta la intubación de emergencia con riesgo de paro hipóxico.
  - Alerta sobre **oximetría de pulso en piel oscura** ([M04](#module-M04)) y metas de PAM individualizadas/conservadoras en $\ge 65\text{ años}$ ([M05](#module-M05)).
- **Consenso ESICM 2025 (`PMID 41236566`):** armoniza fisiología de reanimación inicial, evaluación hemodinámica dinámica y vigilancia de congestión.
- **Definición operativa de Shock Séptico Refractario (`PMID 42467247`):** requerimiento de **noradrenalina $> 0{,}5\ \mu\text{g/kg/min}$ + $\ge 2$ criterios objetivos de hipoperfusión** identificó una mortalidad del **$73{,}6\%$** con un cociente de probabilidad positivo **$\text{LR}+ 8{,}12$**.

### 2.2 SOFA-2 (Ranzani, Singer, Rhodes et al., *JAMA* 2025, `PMID 41159833`)
Tras casi 30 años desde el SOFA original (Vincent 1996), el score **SOFA-2** fue desarrollado y validado en **$10$ cohortes de $9$ países ($1.319$ UCIs, $3{,}34$ millones de admisiones entre 2014 y 2023)** para reflejar el soporte orgánico contemporáneo (cánula nasal de alto flujo, VNI, ECMO VV/VA, TRR moderna, delirio farmacológico y estandarización de vasopresores):

- **Desempeño estadístico oficial (cohorte Ranzani 2025):**
  - **AUROC mortalidad (evaluación en 2 etapas):** **SOFA-2 $0{,}79$ (IC95% $0{,}76\text{–}0{,}81$)** vs **SOFA-1 $0{,}77$ ($0{,}74\text{–}0{,}81$)**.
  - **Promedio longitudinal días 1–7:** **$\text{AUROC } 0{,}87$** ($0{,}80\text{–}0{,}92$); **pico máximo:** **$\text{AUROC } 0{,}84$**.
  - **Razón de momios por $+1$ punto:** **$\text{OR } 1{,}378$ (IC95% $1{,}375\text{–}1{,}381$)**.
  - **Reclasificación frente a SOFA-1:** $49\%$ igual puntaje (mortalidad $4{,}7\%$), $40\%$ menor puntaje ($8{,}6\%$), $11\%$ mayor puntaje ($13{,}5\%$).
  - *Corrección de auditoría Ítem #11:* las cifras de **$\text{AUROC } 0{,}829$ vs $0{,}796$** pertenecen a la validación externa independiente en MIMIC-IV por **Bai et al. (2026)** (y otra validación en **Taiwán mostró $\text{AUROC } 0{,}78$**), no al trabajo original de Ranzani.

#### Tabla Completa de Criterios SOFA-2 (0–24 puntos; peor valor de 24 h; Día 1 faltante = 0; Días 2–7 LOCF)
| Sistema Orgánico | 0 pts | 1 pt | 2 pts | 3 pts | 4 pts | Reglas Críticas R3 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Cerebral** | GCS $15$ | GCS $13\text{–}14$ **o** fármacos para delirium | GCS $9\text{–}12$ | GCS $6\text{–}8$ | GCS $3\text{–}5$ / mioclonías | En sedado: usar **último GCS pre-sedación** ($0$ si desconocido), nunca GCS $3$ ficticio |
| **Respiratorio** ($\text{PaFi}$ / $\text{SpFi}$) | $> 300$ | $\le 300$ | $\le 225$ ($\text{SpO}_2/\text{FiO}_2 \le 250$) | $\le 150$ (o $\text{SpFi}\le 200$) **+ soporte ventilatorio avanzado** | $\le 75$ (o $\text{SpFi}\le 120$) **+ soporte avanzado o ECMO** | **Sin soporte avanzado (HFNC/VNI/VMi), el máximo es $2$ pts** aunque $\text{PaFi} \le 150$. **ECMO-VV = 4 resp / 0 CV** |
| **Cardiovascular** (**NE+Epi BASE!**) | $\text{PAM}\ge 70$ sin drogas | $\text{PAM}<70$ sin drogas | **NE+Epi base $\le 0{,}2\ \mu\text{g/kg/min}$** o cualquier otro vasopresor/inotrópico | **$>0{,}2\text{ a }\le 0{,}4$** o dosis baja $+ 2.^\circ$ vasoactivo | **$>0{,}4$** o dosis media $+ 2.^\circ$ vasoactivo o soporte mecánico | **Conversión obligatoria a BASE** (`1 : 2,00 : 1,89 : 1,22`, [M06](#module-M06)). **ECMO-VA = 4 CV + 4 resp** |
| **Hepático** ($\text{Bb mg/dL}$) | $\le 1{,}2$ | $\le 3{,}0$ | $\le 6{,}0$ | $\le 12{,}0$ | $> 12{,}0$ | Equivalencia $\text{SI}$ ($\mu\text{mol/L}$) según tabla original |
| **Renal** | $\text{Cr} \le 1{,}20$ | $\text{Cr}\le 2{,}0$ o diuresis $<0{,}5\text{ mL/kg/h}\ 6\text{–}12\text{ h}$ | $\text{Cr}\le 3{,}5$ o $<0{,}5\ \ge 12\text{ h}$ | $\text{Cr}>3{,}5$ o $<0{,}3\ \ge 24\text{ h}$ o anuria $\ge 12\text{ h}$ | **TRR** o criterios objetivos de TRR | Incluye explícitamente criterios objetivos para evitar sesgo por práctica de inicio de diálisis |
| **Hemostasia** ($\text{Plaq }\times 10^3/\mu\text{L}$) | $> 150$ | $\le 150$ | $\le 100$ | $\le 80$ *(ajustado vs SOFA-1)* | $\le 50$ *(ajustado vs SOFA-1)* | Evaluar además tendencia SIC/SIC-2 ([M08](#module-M08)) |

- **Sistemas evaluados y excluidos en SOFA-2:** los puntajes **gastrointestinal** (estudio ASDI, `n = 406.469`, sin asociación consistente incremental) e **inmunológico** (relación compleja en U de leucocitos) fueron **excluidos formalmente** tras evaluación empírica.

### 2.3 Lectura crítica de ECAs, Modelos de IA en UCI y Síndrome Post-Sepsis
- **Por qué fallan los grandes ECAs de sepsis (Singer & Vincent 2026):** analizan tres razones clave de resultados neutros repetidos: (1) **alta no adherencia a protocolos** complejos, (2) **heterogeneidad del efecto individual del tratamiento (ITE)** — un promedio neutro en ensayos como **BaSICS** o **EGDT** puede mezclar quintiles extremos beneficiados (**Q1 vs Q5**) con grupos dañados, y (3) tiempos de intervención biológicamente tardíos.
- **El espejismo de la IA predictiva en UCI (*JAMA Netw Open* 2026):** los algoritmos de alerta temprana pierden drásticamente valor en terapia intensiva por **compresión de riesgo**: un modelo que presume $\text{AUROC } 0{,}90\text{–}0{,}94$ en urgencias cae a **$\text{AUROC } 0{,}76$** en UCI con una precisión-recall (**AUPRC**) de apenas **$0{,}24$** ($19{,}3\%$ falsos positivos, obligando a evaluar $8{,}7$ pacientes por cada sepsis real; y al excluir predicciones emitidas *después* de que el médico ya pidió un lactato, cae a $0{,}75$).
- **Síndrome Post-Sepsis y Morbimortalidad Tardía (2024–2026):**
  - **¿Es la sepsis o es haber estado crítico? (Arbous et al. 2024, $n = 29.997$ sobrevivientes de UTI apareados):** mortalidad a 3 años **32,7% con sepsis vs 33,6% con infección no séptica ($\text{aHR } 1{,}00$)**, y la calidad de vida tampoco difiere entre sobrevivientes con y sin sepsis (revisión sistemática 2025, 33 estudios). Casi nada de lo que llamamos "síndrome post-sepsis" es específico de la sepsis: es infección grave más estadía en UTI.
  - **Contra la población general, el exceso es enorme y máximo en los que llegaron sanos (Inghammar 2024, cohorte sueca):** mortalidad de los meses 2 a 12 **$\text{HR } 17{,}5$ en previamente sanos vs $2{,}9$ en comórbidos**. La causa dominante del exceso tardío es la **infección ($\text{HR } 6{,}3$)**, con reingreso infeccioso aumentado más de 5 años después: la huella epidemiológica de la inmunosupresión persistente.
  - **Secuelas específicas:** incremento dosis-dependiente de **demencia tardía** (**Sun 2025**), exceso de eventos cardiovasculares mayores (**MACE**) incluso en adultos jóvenes **$\le 45\text{ años}$ ($\text{HR } 2{,}51$, Wu 2025)** y vulnerabilidad infecciosa/funcional prolongada (**Flick 2026**).
  - **Clínicas de seguimiento post-UCI:** **ENCOMPASS** (*JAMA Intern Med* 2025, *stepped-wedge*, $n = 3.548$) no cambió el compuesto reingreso o muerte a 90 días (48,2% vs 48,0%): bajó la mortalidad al margen (17,3% vs 20,5%) **a costa de más reingresos**, y el compuesto los canceló. El ensayo de **monitoreo remoto 2026** fue negativo, con señal de **daño en $\ge 65$ años**. La SSC 2026 sugiere ofrecer seguimiento con certeza baja. Mejorar secuelas exige prevención *intra-UCI* (evitar sobrecarga, delirium, sedación profunda y debilidad) más que consultas tardías.
  - **Lo accionable al alta, con datos que ya están en la epicrisis:**
    - **Subtipos de sobreviviente con 3 variables (Flick 2026, análisis secundario de CLOVERS, $n = 1.368$):** índice de Charlson, días de internación y destino al alta separan cinco subtipos con mortalidad a 3 meses de **5,1% a 45,5%**; "bajo estado funcional" ($\text{OR } 11{,}1$) y "basal enfermo con enfermedad severa" ($\text{OR } 9{,}7$). Predicen muerte y discapacidad pero **no reingreso**: son fenómenos con determinantes distintos.
    - **Epicrisis escrita para el paciente y su médico de cabecera:** nombrar la palabra "sepsis", listar secuelas esperables (debilidad, fatiga, deterioro cognitivo, riesgo de reinfección) y qué se vigila. Es una declaración de buena práctica de la SSC 2026 y cuesta cinco minutos.
    - **Rehabilitación física a quien estuvo más de 48 h en VM invasiva** (señal consistente en cohortes, con probable confusión por indicación) y **seguimiento cardiovascular del sobreviviente joven** ($\le 45$ años, ver M07).
  - **Debilidad adquirida e inmunosupresión persistente:** sin desenlaces duros nuevos 2024–2026. La debilidad mejora sobre todo en los primeros 3–6 meses y después hace meseta (ventana para concentrar la rehabilitación). El PICS sigue sin definición operativa; lo nuevo es mecanístico (subpoblaciones monocitarias inmunosupresoras por *single-cell*), y los marcadores clásicos (mHLA-DR bajo sostenido, linfopenia persistente) no se validaron 2024–2026 contra desenlaces post-alta. No pedirlos para decidir el seguimiento.


### Novedades del barrido anual 2025–2026 (PubMed + avisos de correo, leídas en abstract)
> Agregadas el 2026-11-26 desde el abstract de PubMed (no el texto completo). Cada una lleva su PMID. Lista completa de candidatos en `candidatos-pubmed-correo.md`.

- **PRONTO** (*Lancet Respir Med* 2026, ECA en 20 guardias del Reino Unido, $n = 5.453$ analizados): sumar **procalcitonina rápida al NEWS2** no cambió el inicio de antibióticos IV a las 3 h (48,4% vs 48,2%) y fue no inferior en mortalidad a 28 días (13,6% vs 16,6%). La procalcitonina no frena antibióticos en la guardia, pero tampoco daña. `PMID 41881047`
- **APT-Sepsis** (*N Engl J Med* 2026, ECA por conglomerados en Malawi y Uganda, 431.394 partos): un programa de higiene de manos, prevención y detección precoz con el paquete **FAST-M** (fluidos, antibióticos, control de foco, traslado, monitoreo) redujo el compuesto de muerte, casi-muerte o infección grave materna (1,4% vs 1,9%; RR 0,68). Es el primer ECA grande de **sepsis obstétrica**, hueco del mapa de cobertura. `PMID 41259754`
- **Paquete de la hora 1 prehospitalario** (*Crit Care Med* 2026, ECA por conglomerados, $n = 381$): no redujo la mortalidad a 28 días (22% vs 27%; RR 0,81; IC95% 0,61–1,08), con desbalance de enrolamiento entre centros. `PMID 42573415`
- **El panorama de los ECAs de sepsis** (*Crit Care* 2026, 62 ECAs, $n = 36.739$): ningún dominio mostró beneficio de mortalidad agrupado — reanimación (RR 0,88; 0,77–1,01), cantidad de fluidos (0,96), tipo de fluido (0,95), vasopresores (0,97), corticoides (0,92; 0,84–1,00) y vitamina C (0,95). Refuerza la sección de por qué fallan los ECAs. `PMID 43074020`
- **Metagenómica clínica — DigiSep** (*Intensive Care Med* 2026, ECA en 24 UTI alemanas, $n = 389$): sumar mNGS a la microbiología estándar no mejoró el primario DOOR/RADAR; en secundarios hubo menos días de VM (6,6 vs 9,3), resolución más rápida del shock y mejor calidad de vida a 90 días, sin diferencia de costos. Señal, no indicación. `PMID 42377463`
- **Fragilidad post-UTI en mayores de 65 con shock séptico** (*Crit Care Med* 2026, post hoc de un ECA de metas de PAM): de 339 sobrevivientes a 90 días, el **36% quedó con fragilidad severa** (CFS $\ge 7$). Se asoció a la fragilidad previa (aOR 2,03 por punto de CFS), al SOFA y al uso de corticoides (aOR 1,72). `PMID 42584186`
- **Factores pronósticos en shock séptico** (*Lancet Respir Med* 2026, metaanálisis de 95 estudios, 4,8 millones de pacientes, 95% observacionales). `PMID 41619747`

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "qSOFA negativo (< 2) descarta sepsis."**
   - **Realidad:** sensibilidad de apenas **$0{,}52$**; sirve únicamente como alerta de mal pronóstico rápido en urgencias, jamás para descartar sepsis.
2. **Mito: "En SOFA-2, un paciente sedado en asistencia respiratoria puntúa GCS = 3 (4 puntos cerebrales) y un paciente con PaFi 120 con cánula nasal simple puntúa 3 puntos respiratorios."**
   - **Realidad (Ranzani *JAMA* 2025):** en pacientes sedados se utiliza el **último GCS pre-sedación** ($0$ si desconocido); y en respiratorio **sin soporte avanzado (HFNC/VNI/VM)** el máximo puntaje posible es **$2$**, aunque la $\text{PaFi}$ sea $\le 150$!
3. **Mito: "Cargar la dosis de noradrenalina en bitartrato directo al calculador SOFA-2 sin convertir a base."**
   - **Realidad (Ítem #11):** duplica falsamente la dosis, pasando erróneamente de CV $2$ ($\le 0{,}2$) a CV $4$ ($> 0{,}4$).
4. **Mito: "Cada 48 horas debemos disparar alerta de protocolo si ΔSOFA ≥ 2 respecto al ingreso, o confiar en algoritmos de IA con AUROC 0,94."**
   - **Realidad (Ítem #8e & *JAMA Netw Open* 2026):** no existe regla validada de re-alarma rígida a las 48 h; y los modelos de IA se comprimen en UCI a **$\text{AUROC } 0{,}76 / \text{AUPRC } 0{,}24$**.
5. **Mito: "La sedación suave ayuda al paciente hipoxémico a tolerar el prono vigil."**
   - **Realidad (SSC 2026):** prohibición estricta por riesgo de depresión respiratoria y paro hipóxico; si no tolera prono vigil, intubar.

---

## 4. Especificación del Simulador / Atlas Interactivo

- **Nombre UI:** *Calculadora Inteligente SOFA-1 vs. SOFA-2 (Conversor NE Base/Sal + ECMO + Sedación)*
- **Controles:** 6 selectores orgánicos + `Formulación NA` (`Base` / `Bitartrato 2:1` / `Bitartrato anhidro 1,89:1` / `HCl 1,22:1`), `Soporte ventilatorio avanzado` (`Ninguno` / `HFNC-VNI-VMi` / `ECMO-VV` / `ECMO-VA`), `Paciente sedado + último GCS previo`, `TRR activa`.
- **Salidas:** puntaje SOFA-2 exacto ($0\text{–}24$) comparado lado a lado contra SOFA-1, mostrando qué órganos reclasifican ($40\%$ baja / $11\%$ sube, Ranzani 2025), advertencia automática si $\text{PaFi} \le 150$ sin soporte avanzado (tope $2$ pts) o ECMO-VA ($4$ CV + $4$ Resp), y calculadora educativa de compresión **AUROC vs AUPRC** en UCI.
- **SVG:** mapa interactivo de 6 órganos mostrando diferencias exactas SOFA-1 vs SOFA-2 y reglas especiales.

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** Paciente de $62\text{ años}$ con neumonía bilateral recibe únicamente oxígeno por máscara con reservorio ($\text{FiO}_2$ estimada $0{,}70$) con $\text{PaO}_2\ 91\text{ mmHg}$ ($\text{PaFi } 130$), sin soporte ventilatorio avanzado aún, sedado levemente por agitación previa (GCS pre-sedación $14$), recibiendo noradrenalina **bitartrato monohidrato a $0{,}24\ \mu\text{g/kg/min}$**, plaquetas $92.000/\text{mm}^3$, bilirrubina $1{,}1\text{ mg/dL}$ y creatinina $1{,}8\text{ mg/dL}$ con buena diuresis. Aplicando estrictamente las reglas oficiales de **SOFA-2 (Ranzani *JAMA* 2025)**, ¿qué puntaje suma en los componentes **Respiratorio + Cardiovascular + Cerebral**?
- A) Respiratorio $3$ + Cardiovascular $3$ + Cerebral $4 = 10$ puntos.
- B) Respiratorio $3$ + Cardiovascular $2$ + Cerebral $1 = 6$ puntos.
- C) **Respiratorio $2$ + Cardiovascular $2$ + Cerebral $1 = 5$ puntos.**
- D) Respiratorio $2$ + Cardiovascular $3$ + Cerebral $0 = 5$ puntos.
- E) Respiratorio $4$ + Cardiovascular $2$ + Cerebral $2 = 8$ puntos.

**Pregunta 2.** Con respecto al desempeño y validación del puntaje **SOFA-2** y las nuevas definiciones en guías recientes, señale la opción CORRECTA:
- A) El estudio original de Ranzani (*JAMA* 2025) obtuvo AUROC $0{,}829$ en MIMIC-IV y agregó un séptimo dominio gastrointestinal obligatorio.
- B) En Ranzani (*JAMA* 2025, `3,34M` admisiones), SOFA-2 logró **AUROC $0{,}79$ vs $0{,}77$** (con AUROC longitudinal D1–D7 de **$0{,}87$**, $\text{OR } 1{,}378$ por punto) y excluyó los sistemas gastrointestinal e inmune; el AUROC $0{,}829$ vs $0{,}796$ corresponde a la validación externa posterior de **Bai et al. (2026)** en MIMIC-IV.
- C) En SOFA-2, un paciente en ECMO veno-venoso (ECMO-VV) recibe automáticamente $4$ puntos cardiovasculares además de $4$ respiratorios.
- D) El qSOFA posee sensibilidad del $92\%$ para tamizar sepsis en urgencias según las guías SSC 2026.
- E) Para ayudar a tolerar el decúbito prono vigil (*awake proning*), SSC 2026 recomienda infusión baja de dexmedetomidina o propofol.

**Pregunta 3.** La dirección de un hospital evalúa comprar un algoritmo comercial de inteligencia artificial para detectar sepsis que presume en folletos un $\text{AUROC}$ de **$0{,}92$** en el departamento de emergencias. Según el análisis publicado en ***JAMA Network Open* (2026)**, ¿qué ocurre al desplegar ese modelo dentro de la **terapia intensiva (UCI)**?
- A) El AUROC sube a $0{,}98$ en UCI porque hay más parámetros cargados en la historia clínica.
- B) Por **compresión de riesgo**, el rendimiento en UCI cae aproximadamente a **$\text{AUROC } 0{,}76$ y $\text{AUPRC } 0{,}24$**, generando alrededor de $19{,}3\%$ de falsos positivos ($8{,}7$ pacientes evaluados por cada alerta útil) y revelando que gran parte de su señal detecta órdenes médicas previas como la solicitud de lactato.
- C) La AUPRC es independiente de la prevalencia real de sepsis y siempre supera $0{,}85$ en pacientes críticos.
- D) Los modelos de IA permiten suspender la obtención de hemocultivos cuando el puntaje es bajo.
- E) El algoritmo reemplaza completamente la evaluación clínica del residente cada $4\text{ h}$.

**Pregunta 4.** Sobre el **síndrome post-sepsis** y las secuelas a largo plazo (2024–2026), marque el enunciado CORRECTO:
- A) Los sobrevivientes de sepsis no presentan mayor riesgo cardiovascular ni neurológico tras el alta hospitalaria si normalizaron la creatinina al egreso.
- B) En comparación con población sana general, el exceso de riesgo tardío es enorme (**Inghammar 2024**, $\text{HR } 17{,}5$), asociando demencia dosis-dependiente (**Sun 2025**) y MACE incluso en **$\le 45\text{ años}$ ($\text{HR } 2{,}51$, Wu 2025)**; sin embargo, al comparar con pacientes críticos con infección no séptica ajustada (**Arbous 2024**), el exceso específico se atenúa ($\text{aHR } 1{,}00$), y los ECAs de seguimiento post-UCI (**ENCOMPASS, Yende 2026**) fueron neutros.
- C) El ensayo ENCOMPASS redujo la mortalidad al año post-alta en un $35\%$ absoluto mediante teleconsultas mensuales.
- D) Solo los mayores de $75\text{ años}$ desarrollan eventos cardiovasculares mayores tras una sepsis.
- E) No existe vínculo alguno entre sepsis previa y deterioro cognitivo posterior.

<!-- practica-2026-11-26 -->
**Pregunta 5.** En el ensayo **PRONTO** (guardias del Reino Unido), sumar procalcitonina rápida a la evaluación con NEWS2 en sospecha de sepsis:
- A) Redujo en un tercio el inicio de antibióticos IV a las 3 h.
- B) No cambió el inicio de antibióticos IV a las 3 h (48,4% vs 48,2%) y fue no inferior en mortalidad a 28 días.
- C) Aumentó la mortalidad a 28 días por retraso antibiótico.
- D) Demostró que con procalcitonina baja se puede no dar antibióticos en el shock séptico.
- E) Permitió omitir los hemocultivos en la mitad de los pacientes.

**Pregunta 6.** Sobre el **síndrome post-sepsis**, ¿cuál es la lectura correcta de la evidencia 2024–2026?
- A) La sepsis triplica la mortalidad a 3 años frente a cualquier otro sobreviviente de UTI.
- B) Los programas de seguimiento post-alta (ENCOMPASS) redujeron el compuesto reingreso o muerte.
- C) Frente a sobrevivientes de UTI con infección no séptica, la mortalidad a 3 años es similar (aHR 1,00); el gran exceso aparece contra la población general, sobre todo en los previamente sanos.
- D) Las secuelas cognitivas están descartadas en todos los estudios.
- E) El riesgo cardiovascular post-sepsis es máximo en mayores de 80 años y nulo en jóvenes.

<details>
<summary>Ver respuestas y justificación tripartita (Preguntas 1–4)</summary>

1. **Respuesta correcta: C.** *Justificación:* Respiratorio = **$2$** (máximo posible sin HFNC/VNI/VMi aunque $\text{PaFi}=130$); Cardiovascular = **$2$** ($0{,}24$ bitartrato $= 0{,}12\ \mu\text{g/kg/min}$ NE base $\le 0{,}2$!); Cerebral = **$1$** (último GCS pre-sedación $14$). Total $= 5$ puntos.
2. **Respuesta correcta: B.** *Justificación:* Exactitud de Ranzani 2025 vs Bai 2026 (**Ítem #11**), exclusión GI/Inmune, ECMO-VV ($4$ resp / $0$ CV) y prohibición de sedar en prono vigil (SSC 2026).
3. **Respuesta correcta: B.** *Justificación:* Describe fielmente la compresión de riesgo en UCI ($\text{AUROC } 0{,}76 / \text{AUPRC } 0{,}24$, $8{,}7$ evaluaciones/alerta verdadera y sesgo post-lactato).
4. **Respuesta correcta: B.** *Justificación:* Integra correctamente Arbous 2024, Inghammar 2024, Sun 2025, Wu 2025 y resultados neutros de ENCOMPASS/Yende 2026.

5. **Respuesta correcta: B.** *Justificación:* PRONTO (*Lancet Respir Med* 2026, `PMID 41881047`): el primario de antibióticos a 3 h fue idéntico y la mortalidad fue no inferior (13,6% vs 16,6%). La procalcitonina no frena antibióticos en la guardia.
6. **Respuesta correcta: C.** *Justificación:* Arbous 2024 (aHR 1,00 vs infección no séptica) e Inghammar 2024 (HR 17,5 en previamente sanos vs 2,9 en comórbidos). ENCOMPASS fue neutro en el compuesto. El exceso de riesgo cardiovascular relativo fue mayor en $\le 45$ años (M07).

</details>

### 5.2 Casos "Detectá el error de guardia" (2 casos)
1. **Caso 1 — "Tiene SOFA-2 de 12 puntos al ingreso y lo sedamos para que aguante el prono vigil":** Se puntuó GCS $3$ ($4$ pts) bajo sedación, se ingresó NE bitartrato $0{,}30$ sin dividir $\div 2$ ($3$ pts en vez de $2$) y se sedó en prono sin tubo endotraqueal.
   - *Error oculto:* doble falsificación del puntaje SOFA-2 más violación directa de seguridad aérea **SSC 2026** (prono vigil sin sedación).
2. **Caso 2 — "qSOFA 1 en guardia, descartamos sepsis y nos quedamos tranquilos":** Paciente febril, taquicárdico con PA $108/48$, oligúrico e hipoxémico ($\text{PAD } 48$, lactato $3{,}4$).
   - *Error oculto:* qSOFA tiene sensibilidad **$0{,}52$**; ya presenta disfunción renal/hipoxémica y vasoplejia temprana ($\text{PAD} < 50$).

### 5.3 Flashcards de repaso rápido (6 tarjetas)
1. **¿Cuál es el puntaje respiratorio máximo en SOFA-2 si el paciente NO tiene soporte ventilatorio avanzado?** → **$2$ puntos** (aunque $\text{PaFi} \le 150$).
2. **¿Cómo puntúa ECMO-VV vs ECMO-VA en SOFA-2?** → **ECMO-VV:** $4$ resp / $0$ CV; **ECMO-VA:** $4$ CV + $4$ resp.
3. **¿Qué sistemas fueron excluidos de SOFA-2 y por qué?** → **Gastrointestinal** (ASDI `n=406.469` sin asociación consistente) e **Inmunológico** (relación compleja en U).
4. **¿Qué define operativamente al Shock Séptico Refractario en `PMID 42467247`?** → **NA $> 0{,}5\ \mu\text{g/kg/min}$ + $\ge 2$ criterios de hipoperfusión** (mortalidad **$73{,}6\%$**, $\text{LR}+ 8{,}12$).
5. **¿Qué ocurre con la precisión de las alertas de IA al pasar de Urgencias a UCI?** → $\text{AUROC}$ cae de $\sim 0{,}90 \to 0{,}76$ con **$\text{AUPRC } 0{,}24$** ($8{,}7$ falsas/alerta útil, *JAMA Netw Open* 2026).
6. **¿Qué distingue a Bai 2026 de Ranzani 2025 en la validación de SOFA-2?** → **Ranzani 2025** ($3{,}34\text{M}$ adm.): AUROC $0{,}79$ vs $0{,}77$; **Bai 2026** (MIMIC-IV): AUROC $0{,}829$ vs $0{,}796$.
7. **¿Qué es el paquete FAST-M del ensayo APT-Sepsis?** → Fluidos, antibióticos, control de foco, traslado si hace falta y monitoreo; junto con higiene de manos y prevención redujo la morbimortalidad infecciosa materna (RR 0,68) en Malawi y Uganda (`PMID 41259754`).

---

## 6. Referencias Verificadas y Registro de Correcciones

1. **Ranzani OT, Singer M, Rhodes A, et al.** Development and validation of the SOFA-2 score. *JAMA*. 2025. `PMID 41159833`.
2. **Bai et al.** External validation of SOFA-2 in MIMIC-IV ($0.829$ vs $0.796$). 2026 (y validación externa Taiwán $0.78$).
3. **Surviving Sepsis Campaign (SSC) Guidelines 2026.** `PMID 41869847` ($129$ declaraciones, $46$ nuevas); **ESICM 2025** (`PMID 41236566`).
4. **Refractory septic shock operational definition ($\text{NE}>0.5 + 2$ hypoperfusion).** `PMID 42467247`.
5. **Singer M, Vincent JL.** Why clinical trials in sepsis fail (non-adherence, ITE, BaSICS, EGDT Q1/Q5). 2026.
6. **Early sepsis AI alert validation in ICU ($\text{AUROC } 0.76, \text{AUPRC } 0.24$).** *JAMA Netw Open*. 2026.
7. **Arbous MS et al.** *Crit Care*. 2024. `PMID 39563453`; **Inghammar M et al.** *Open Forum Infect Dis*. 2024. `PMID 38962525`; revisión de calidad de vida post-UTI con y sin sepsis, 2025, `PMID 40138536`; **Sun et al. (2025); Wu et al. (2025); Flick RJ et al.** Sepsis survivor subtypes. *Crit Care Med*. 2026. `PMID 41231072`; **ENCOMPASS.** *JAMA Intern Med*. 2025. `PMID 40788609`; monitoreo remoto post-sepsis (Yende 2026), `PMID 42275060`. **Nakanishi N.** ICU-acquired weakness review. *Acute Crit Care*. 2025. `PMID 40903401`. **Sun XF et al.** Immune-cell signatures of PICS. *Med (N Y)*. 2025. `PMID 39824181`.

> Fuente de las ampliaciones de 2.3: síntesis propia *Síndrome post-sepsis y desenlaces a largo plazo* (bóveda), leída a nivel de abstract.

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- **Ítem #8a & #8e:** Eliminado el uso de qSOFA como descarte y retirada la supuesta alerta obligatoria $\Delta\text{SOFA} \ge 2$ cada $48\text{ h}$.
- **Ítem #11:** Separados estrictamente los resultados de **Ranzani 2025** ($0{,}79$ vs $0{,}77$) frente a **Bai 2026** ($0{,}829$ vs $0{,}796$) e incorporada conversión obligatoria a **NE base** y las reglas exactas de sedación, soporte respiratorio avanzado y ECMO en la matriz oficial de SOFA-2.
