---
id: M02
titulo: "Inmunopatología, Inflamasoma, Disfunción Mitocondrial y Endotipos"
subtitulo: "De PAMPs/DAMPs y piroptosis NLRP3-GSDMD a la hibernación de Singer, ImmunoSep 2026, Ouranos 2026 e INSPIRE 2026"
ultima_actualizacion: 2026-11-25
piloto_fase2: false
fuentes_nlm:
  - "General"
  - "Endotipos"
  - "2026"
  - "Varios"
  - "Actualizaciones ChatGPT"
fuentes_vault:
  - "Sepsis y Shock Septico/"
  - "04-Recursos/Papers/MOC Sepsis.md"
  - "00 Radar Bibliografico/"
palabras_clave:
  - PAMPs
  - DAMPs
  - NLRP3
  - gasdermina D
  - piroptosis
  - cGAS-STING
  - ox-mtDNA
  - hibernación mitocondrial
  - mHLA-DR
  - ImmunoSep
  - MALS
  - ferritina
  - endotipos
---

# M02 — Inmunopatología, Inflamasoma, Disfunción Mitocondrial y Endotipos

---

## 1. Capa Base — Desde cero (Fisiología, Histología y Fundamentos)

### 1.1 Reconocimiento innato: PAMPs, DAMPs y receptores PRRs
La sepsis no comienza con la bacteria aislada sino con una respuesta desregulada del huésped tras el reconocimiento de patrones moleculares a través de receptores de reconocimiento de patrones (**PRRs**):
- **PAMPs (Patrones Moleculares Asociados a Patógenos):** lipopolisacárido (**LPS**) de gramnegativos, peptidoglicano, ácido lipoteicoico, flagelina y ácidos nucleicos microbianos.
- **DAMPs (Patrones Moleculares Asociados a Daño o Alarminas):** proteínas intracelulares o fragmentos estructurales liberados por necrosis o lesión tisular: **HMGB1**, histonas extracelulares, ATP, ácido hialurónico fragmentado del glicocálix y **ADN mitocondrial oxidado (ox-mtDNA)**.
- **Familias de PRRs clave:**
  1. **Receptores tipo Toll (TLRs):** en membrana plasmática (**TLR4/MD2** para LPS, **TLR2** para grampositivos) y endosomales (**TLR3/7/9** para ARN/ADN).
  2. **Receptores citosólicos NOD-like (NLRs):** destacando **NLRP3**, sensor de estrés celular, flujo de $\text{K}^+$ y daño lisosomal/mitocondrial.
  3. **Sensores citosólicos de ADN:** vía **cGAS–STING**, que detecta ADN ajeno o propio fuera del núcleo/mitocondria y dispara interferones tipo I e inflamación sostenida.

### 1.2 Señalización NF-κB, Inflamasoma NLRP3/Caspasa-1/4/5 y Piroptosis por GSDMD
La activación del inflamasoma canónico exige un circuito clásico de **dos señales**:
- **Señal 1 (*Priming*):** unión PAMP/DAMP a TLR4 $\to$ vías **MyD88 / TRIF** $\to$ translocación nuclear de **$\text{NF-}\kappa\text{B}$** $\to$ transcripción de TNF-$\alpha$, IL-6, pro-IL-1$\beta$, pro-IL-18 y mayor expresión de NLRP3.
- **Señal 2 (Activación y ensamblaje):** estrés oxidativo mitocondrial, eflujo de $\text{K}^+$ o cristales inducen el ensamblaje de **NLRP3 + proteína adaptadora ASC + procaspasa-1**.
- **Vía no canónica:** el LPS que alcanza el citosol activa directamente las **caspasas-4 y -5 humanas** (caspasa-11 en ratón) sin necesitar TLR4.
- **Ejecución por Gasdermina D (GSDMD):** tanto la caspasa-1 como las caspasas-4/5 escinden la **GSDMD**, liberando su fragmento N-terminal (**GSDMD-N**), que se oligomeriza formando **poros en las membranas**:
  1. **Piroptosis:** muerte celular lítica programada altamente inflamatoria con liberación masiva de **IL-1$\beta$**, **IL-18** y DAMPs.
  2. **Amplificación paracrina (*ASC specks*):** las motas o agregados extracelulares de **ASC** liberados tras la lisis son fagocitados por macrófagos vecinos, propagando la cascada inflamatoria como "priones inmunológicos" aun tras el aclaramiento bacteriano (**Neumann et al. 2026**).

### 1.3 La respuesta paradójica simultánea: Hiperinflamación + Inmunoparálisis
El antiguo modelo bifásico lineal ("primero SIRS hiperinflamatorio, semanas después CARS inmunosupresor") ha sido descartado. Hoy sabemos que **ambos programas transcripcionales se encienden desde las primeras horas de forma simultánea**:
- **Brazo hiperinflamatorio / daño tisular:** activación neutrofílica, NETosis (ver [M08](#module-M08)), ruptura del glicocálix endotelial (ver [M03](#module-M03)) y fiebre/vasoplejia.
- **Brazo de inmunoparálisis temprana:** apoptosis acelerada de linfocitos T CD4/CD8 y células dendríticas esplénicas, caída sostenida del antígeno **HLA-DR monocitario (mHLA-DR)** (impidiendo presentar antígenos), sobreexpresión de moléculas inhibitorias (**PD-1 / PD-L1**), expansión de células mieloides supresoras (**MDSC**) y desplazamiento hacia perfil tolerogénico mediado por IL-10 y lactato tisular.

### 1.4 Bioenergética mitocondrial: del ATP a la hipoxia citopática e hibernación
En condiciones fisiológicas, la cadena de transporte de electrones (complejos I–IV) mantiene el gradiente electroquímico ($\Delta\Psi_m$) que impulsa la ATP sintasa (complejo V). En sepsis confluyen tres agresiones bioenergéticas:
1. **Estrés nitrosativo y oxidativo:** exceso de óxido nítrico (por iNOS) más superóxido ($\text{O}_2^{\bullet -}$) forman **peroxinitrito ($\text{ONOO}^-$)**, que nitrosila e inhibe reversible o irreversiblemente el **Complejo I y Complejo IV**, además de activar la enzima reparadora de ADN **PARP-1**, la cual consume masivamente $\text{NAD}^+$ y agota la capacidad glucolítica y oxidativa (**hipoxia citopática de Fink**: la célula no puede usar el oxígeno aunque la $\text{DO}_2$ y $\text{PO}_2$ tisular estén conservadas o elevadas).
2. **Apertura del poro de transición de permeabilidad mitocondrial (mPTP) y daño de membrana:** pérdida de $\Delta\Psi_m$, fisión fragmentada de la red mitocondrial y liberación de citocromo c y **ox-mtDNA**.
3. **Hibernación metabólica (*oxygen conformance*, Singer 2004/2014):** respuesta adaptativa de supervivencia en la que la célula apaga su consumo energético no esencial (proteosíntesis, bombas no vitales) para sobrevivir sin necrosarse.

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Inflamasoma, GSDMD mitocondrial y la paradoja "Goldilocks" (2024–2026)
- **Perforación mitocondrial pre-lítica (Hu et al. 2024, *Crit Care*):** el fragmento **GSDMD-N** inserta poros en las membranas mitocondriales **antes** de lisar la membrana plasmática; esto provoca escape temprano de **ox-mtDNA** hacia el citosol, activando la vía **cGAS–STING** e intensificando la inflamación estéril aun cuando los hemocultivos ya se negativizaron.
- **Trampa metodológica en estudios mitocondriales (Fredriksson citado en Hu 2024):** medir actividad enzimática mitocondrial en biopsias y normalizarla ciegamente frente a la actividad de **citrato sintasa** genera distorsión cuando cambia el volumen del tejido, la masa proteica muscular o la proporción de mitocondrias dañadas/diluidas por edema intersticial.
- **Estrategias terapéuticas mitocondriales:** pese al enorme volumen de ensayos preclínicos con antioxidantes dirigidos, **la metformina** sigue siendo prácticamente el único fármaco modulador mitocondrial (inhibición leve y reversible de Complejo I + activación AMPK) con respaldo de múltiples estudios clínicos en humanos en exploración (sin recomendación rutinaria aún como fármaco antiséptico en guías SSC 2026).
- **Efecto "Goldilocks" del inflamasoma (Neumann et al. 2026):** ni la hiperactivación desbocada (daño orgánico por IL-1$\beta$, motas de ASC y piroptosis) ni la supresión farmacológica total de NLRP3/GSDMD son inocuas; el inflamasoma es necesario para el aclaramiento bacteriano efectivo. Bloquearlo en el paciente equivocado o en el momento incorrecto favorece persistencia microbiana e infecciones secundarias.

### 2.2 El gran debate bioenergético: Falla letal vs. Hibernación de Singer
- **Brealey et al. 2002 (`n = 28`)** documentaron en biopsias musculares de shock séptico humano disminución severa de Complejo I, agotamiento de ATP y disfunción bioenergética correlacionada con la mortalidad.
- **Paradoja histológica de Singer (2004/2014):** tanto en el corazón como en el riñón (ver Takasu 2013 en [M10](#module-M10)), los órganos fallidos en sepsis muestran una tasa sorprendentemente **baja de necrosis celular o apoptosis extensa** pese a la disfunción clínica severa. Esto sustenta la hipótesis de **hibernación metabólica / *oxygen conformance***: las células reducen su tasa metabólica y demanda de ATP en aproximadamente **$30\text{–}40\%$**, evitando cruzar el umbral irreversible de necrosis a costa de suspender temporalmente su función contráctil, absortiva o excretora.
- **Cuatro conceptos que se confunden (síntesis propia):**

  | Concepto | Origen | Qué es | Dónde vive |
  |---|---|---|---|
  | Hibernación mitocondrial | Singer 2004, sepsis | Apagado metabólico **adaptativo** por inflamación y cambio endocrino | Disoxia |
  | Hipoxia citopática | Fink 1997–2002 | **Defecto** adquirido de la respiración celular: cae el $\text{VO}_2$ aunque la entrega alcance | Disoxia |
  | Hibernación miocárdica | Rahimtoola, cardiopatía isquémica | Miocardio crónicamente hipoperfundido y viable que recupera al revascularizar | Isquemia real |
  | *Oxygen conformance* | Fisiología celular | La célula baja el $\text{VO}_2$ un 30–40% cuando cae el $\text{O}_2$ disponible, **sin caída de ATP** ni anaerobiosis (menos síntesis proteica y menos Na⁺/K⁺-ATPasa, vía HIF-1) | Hipoxia verdadera |

  Hibernación mitocondrial e hipoxia citopática describen el mismo fenómeno desde ángulos opuestos: Fink lo llama **defecto** (algo se rompió) y Singer **regulación** (algo se apagó a propósito); esa ambigüedad no está resuelta. El 30–40% corresponde a la *oxygen conformance* medida en células, no a una cifra demostrada de la hibernación séptica en humanos.
- **Qué sostiene la hipótesis y qué no:** Brealey 2002 es una **asociación** ($n = 28$): el ATP bajo acompaña a la muerte, pero no dice si el apagado mató o fue el último intento de la célula. La hipótesis adaptativa **sigue siendo hipótesis**; no hay un barrido 2024–2026 que la confirme o la refute.
- **La consecuencia incómoda:** si el apagado es adaptativo, **estimular la mitocondria en fase precoz podría dañar**, y todo el catálogo de terapias mitocondriales (MitoQ, NAD⁺, urolitina A, Mdivi-1; ver Hu 2024) parte de la premisa contraria. Podría explicar por qué 25 años de terapias dirigidas a la mitocondria no dieron una sola fase 3 positiva (interpretación propia, no de los papers). El blanco razonable según Singer sería **acelerar la biogénesis mitocondrial en la recuperación**: la supervivencia se asoció a activación precoz de la biogénesis (Carré 2010), no a sostener la función.
- *Lectura clínica R3:* los dos fenómenos coexisten como espectro temporal: inicialmente la hibernación protege a la célula de una crisis de $\text{DO}_2$ o toxicidad por NO/ROS; si la agresión persiste y fracasa la **mitofagia/biogénesis** (vía PGC-1$\alpha$), se vuelve falla bioenergética irreversible. Esto explica por qué forzar dosis suprafisiológicas de catecolaminas o oxígeno en un órgano "hibernado" empeora la injuria por desacople oxidativo sin restaurar función.

### 2.3 Biomarcadores de inmunidad innata y límites de los endotipos (2025–2026)
- **Vía pTLR4 (Mühlhaus et al. 2026):** la persistencia de señalización/expresión de **pTLR4** identificó pacientes con activación inflamatoria innata sostenida y mortalidad marcadamente mayor (**$\text{HR } 3{,}28$**), proponiéndose como potencial herramienta de estratificación prospectiva.
- **Endotipos transcripcionales (SRS1/SRS2, MARS, CTS1–3):**
  - El endotipo **SRS1** refleja inmunoparálisis relativa con tolerancia a endotoxina y peor pronóstico frente a **SRS2** (perfil más inmunocompetente).
  - *Nota estricta de auditoría:* la afirmación circulante de que el subgrupo **CTS2** presenta un exceso de mortalidad de **$+34\%$ al recibir corticoides** proviene de síntesis secundaria en NotebookLM sin verificación primaria pública independiente en esta revisión (`⏳ no verificado`), por lo cual debe tratarse exclusivamente como hipótesis generadora de cautela y **no** como criterio clínico validado para decidir o suspender hidrocortisona.
- **ImmunoSep (*JAMA* 2026) — Prueba de concepto vs. resultado clínico duro:** primer ECA grande de inmunoterapia personalizada según biomarcadores rápidos:
  - *Brazo MALS / Hiperinflamación* (ferritina elevada): recibió **anakinra** (antagonista receptor IL-1) + estándar.
  - *Brazo Inmunoparálisis* (mHLA-DR muy reducido sin ferritina extrema): recibió **interferón-$\gamma$ (IFN-$\gamma$)** + estándar.
  - **Resultado primario intermedio:** mejoría en descenso de SOFA al día 9 (**$35{,}1\%$ vs $17{,}9\%$**).
  - **Desenlaces duros:** **mortalidad/supervivencia a 90 días neutra ($68{,}7\%$ vs $67{,}6\%$)**; además, se observó un incremento de **shock *de novo* ($22{,}1\%$ vs $11{,}7\%$)** en el brazo tratado, y **la mayoría de los pacientes sépticos evaluados quedaron fuera como "inclasificables"** (ni MALS puro ni inmunoparálisis pura).
- **Realidad de la ferritina como biomarcador en UCI (Ouranos 2026; INSPIRE 2026; Schuster 2026):**
  - **De dónde sale el 4.420 ng/mL:** Kyriazopoulou 2017 ($n = 5.121$) definió MALS con ese corte de ferritina (prevalencia 3,7–4,3%, mortalidad a 28 días ~66%). El dato que casi nadie usa del mismo trabajo: una **caída $< 15\%$ de la ferritina al día 3** tuvo **sensibilidad $> 90\%$** para mala evolución — la cinética discrimina más que el valor absoluto, y es gratis (un solo grupo, sin replicación externa conocida). Con el mismo corte, la prevalencia va de 3,7% a 19,8% según a quién se le pide ferritina.
  - **Ouranos et al. 2026 (TriNetX, 224.507 sepsis con ferritina medida, texto completo):** el MALS duplicó la mortalidad ($\text{HR } 2{,}73$ a 28 días), pero los análisis con otros cortes mostraron una **rampa continua** ($\text{HR } 2{,}44$ con $\ge 2.000$ hasta $3{,}05$ con $\ge 10.000$): **el 4.420 es un corte administrativo, no un umbral biológico**. En el subanálisis apareado de MALS tratados con **anakinra** (104 vs 104), la mortalidad a 14 días fue **31,7% vs 18,3% ($\text{HR } 1{,}83$)**; los autores lo atribuyen a confusión por indicación, pero tampoco aparece ninguna señal de beneficio.
  - **El origen del "anakinra en MALS":** un reanálisis **post hoc de 43 pacientes** de un fase III negativo (Shakoory 2016: supervivencia 65,4% vs 35,3%). Sobre ese subgrupo descansa el brazo de anakinra de ImmunoSep (el "HR 0,28" que circula no figura en el abstract).
  - **INSPIRE 2026 (ECA fase IIa, $n = 60$, texto completo):** anakinra 100 mg SC/día en neumonía con **presepsina $> 350$ y SOFA = 1**, es decir **antes** de la falla orgánica, redujo el primario compuesto ($\text{OR } 0{,}18$) y la mortalidad a 90 días (**$\text{HR } 0{,}32$**; 20% vs 43%). La ferritina basal mediana fue **305–398 ng/mL**, diez veces por debajo del corte MALS: **anakinra funcionó donde la ferritina no la hubiera dejado entrar**. Hipótesis que se desprende de ImmunoSep e INSPIRE juntos: el determinante sería **el momento**, y la ferritina alta marcaría que **ya es tarde**. Cautelas: 30 por brazo, primario compuesto con un subrogante blando, presepsina no disponible.
  - **Schuster et al. 2026 (`PMID 41224076`, $n = 1.629$ sépticos hiperferritinémicos, solo abstract):** distintas definiciones de MALS identificaron **poblaciones en gran medida distintas**, y el **HLA-DR monocitario no difirió** entre MALS y no-MALS, lo que le pega al eje conceptual de ImmunoSep. El enriquecimiento predictivo por biomarcador funcionó en solo 3 de 12 ECAs de sepsis (Van Nynatten 2025: suPAR, antitrombina, mHLA-DR, IL-6, EAA); **la ferritina no está en esa lista**, porque no mide IL-1 sino un producto río abajo.
  - **En la cama:** la ferritina es un **buen marcador pronóstico y un mal marcador predictivo**. Pedirla al ingreso en el shock séptico grave y repetirla al día 3 para estratificar; ante ferritina $> 5.000$, buscar también neoplasia hematológica oculta y daño hepático agudo (en series de hiperferritinemia extrema, el 81% tenía más de una causa simultánea).
- **Por qué fracasan HLH-2004 y HScore en la UCI séptica (Liedgens; Haar):** el síndrome de activación macrofágica/HLH secundaria a sepsis comparte citopenias, fiebre, hipertrigliceridemia y ferritina elevada con el shock séptico refractario con falla hepática isquémica. En la cohorte de HLH en UTI de **Haar** ($n = 43$), el **HScore fue igual en sobrevivientes y fallecidos (228 vs 249)** y el único predictor independiente de muerte fue el **lactato $> 6\text{ mmol/L}$ ($\text{OR } 16{,}1$)**; en 117 oncológicos críticos con ferritina $> 10.000$ (**Liedgens 2024**), cumplir criterios HLH-2004 no cambió la supervivencia y tener shock séptico sí. En UTI, el rótulo de HLH no pronostica: el shock y la hipoperfusión sí. La concordancia entre métodos diagnósticos de HLH en críticos fue del 46% (Queffeulou 2026).
- **Trampa metodológica de las firmas transcriptómicas de IA:** modelos pequeños como **Su et al. 2025** (4 genes *max-logistic*) o evaluaciones críticas como `PMID 42691061` demuestran que es posible publicar un **$\text{AUROC}$ aparentemente prometedor teniendo una *balanced accuracy* de apenas $0{,}50$** (idéntica a tirar una moneda) cuando existe desbalance de clases o sobreajuste local sin validación externa rigurosa.

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "Ferritina en 2.500 ng/mL + trombocitopenia en un séptico significa MALS puro y obliga a dar anakinra de guardia."**
   - **Realidad (Ouranos 2026; ImmunoSep 2026; Haar):** la ferritina es una rampa continua de gravedad/inflamación y necrosis hepática; en el mundo real anakinra no seleccionado asoció $\text{HR } 1{,}83$ a 14 d (**Ouranos**), **ImmunoSep** fue neutro a 90 d ($68{,}7\%$ vs $67{,}6\%$) con más shock *de novo* ($22{,}1\%$ vs $11{,}7\%$), y HScore/HLH-2004 confunden falla hepática/lactato $>6$ ($\text{OR } 16{,}1$) con síndrome hemofagocítico.
2. **Mito: "Todos los pacientes sépticos encajan claramente en 'hiperinflamación' o 'inmunoparálisis'."**
   - **Realidad (ImmunoSep 2026):** la **mayoría de los pacientes** tamizados presentan perfiles mixtos o intermedios **inclasificables**; ambos programas corren en paralelo desde el inicio.
3. **Mito: "Si el órgano está fallando en sepsis es porque sus células se necrosaron masivamente; hay que empujarlo con más inotrópicos y $\text{FiO}_2$ 100%."**
   - **Realidad (Singer 2004/2014; Brealey 2002):** gran parte de los órganos críticos muestran **hibernación metabólica ($-30\text{–}40\%$ metabolismo) sin necrosis histológica extensa**; forzar trabajo mecánico o hiperoxia sobre una cadena respiratoria inhibida por peroxinitrito agrava la injuria por ROS y ox-mtDNA.
4. **Mito: "Bloquear el inflamasoma NLRP3 siempre es bueno porque baja la IL-1β."**
   - **Realidad (Neumann 2026):** efecto **Goldilocks** — suprimir NLRP3/GSDMD sin estratificación de fase y control del foco compromete la eliminación bacteriana.
5. **Mito: "Un paper con firma de 4 genes y AUROC 0,80 significa que ya podemos clasificar endotipos con certeza."**
   - **Realidad (`PMID 42691061`; Su 2025):** un modelo con desbalance extremo puede mostrar AUROC inflado con *balanced accuracy* de $0{,}50$; exigir siempre validación multicéntrica, calibración y métricas balanceadas.

---

## 4. Especificación del Simulador / Atlas Interactivo

- **Nombre UI:** *Atlas Dual Inflamasoma–Mitocondria y Clasificador Crítico de Endotipos (ImmunoSep / Singer / Ouranos)*
- **Controles:**
  1. `Carga PAMP / LPS citosólico` ($0\text{–}100\%$, paso $5$, default $65$)
  2. `Estrés nitrosativo (ONOO⁻ / PARP-1)` ($0\text{–}100\%$, paso $5$, default $55$)
  3. `Ferritina sérica` ($100\text{–}12.000\text{ ng/mL}$, paso $50$, default $650$)
  4. `mHLA-DR (moléculas/monocito)` ($1.000\text{–}25.000$, paso $500$, default $9.500$)
  5. `Lactato arterial` ($0{,}8\text{–}14{,}0\text{ mmol/L}$, paso $0{,}2$, default $3{,}2$)
  6. `Estrategia de modulación` (`Control estándar` | `Inhibición NLRP3/Anakinra` | `IFN-γ inmunoestimulante` | `Protección bioenergética / Control de foco`)
- **Lógica del modelo y salidas en vivo:**
  - Calcula activación **NLRP3 + Caspasa-4/5 → poros GSDMD-N → fuga ox-mtDNA → cGAS–STING**, frente a grado de **hibernación de Singer** ($-30\text{–}40\%$ demanda ATP si se evita hiperestimulación) vs riesgo de crisis energética por peroxinitrito.
  - Evalúa elegibilidad real para **ImmunoSep**: muestra en qué porcentaje cae como **"Inclasificable / Mixto"** (el escenario más frecuente), alerta si lactato $> 6\text{ mmol/L}$ (**Haar** $\text{OR } 16{,}1$: descartar hipoperfusión/hígado hipóxico antes de diagnosticar MALS!) y despliega el riesgo de mortalidad continua de **Ouranos 2026** vs la mediana **INSPIRE ($305\text{–}398$)**.
- **Presets clínicos (4):**
  1. *Sepsis típica mixta "Inclasificable" (ImmunoSep mayoría)*: Ferritina $410$, mHLA-DR $9.200$, Lactato $2{,}8$.
  2. *Sospecha MALS confundida por shock e hígado hipóxico (Haar)*: Ferritina $5.500$, mHLA-DR $7.000$, Lactato $8{,}5$ → alerta isquemia/shock antes de anakinra.
  3. *Inmunoparálisis profunda tardía (SRS1-like)*: Ferritina $380$, mHLA-DR $2.800$, linfopenia persistente → ventana teórica de vigilancia de sobreinfección y discusión de inmunoreconstitución.
  4. *Hibernación miocárdica/renal de Singer en estabilización*: Lactato bajando $2{,}1$, estrés nitrosativo moderado → evitar sobreestimulación catecolaminérgica/hiperóxica.
- **Capas SVG:** diagrama celular interactivo comparando membrana plasmática (TLR4, poros GSDMD-N, salida de motas ASC e IL-1$\beta$), mitocondria (complejos I–IV, $\Delta\Psi_m$, poros GSDMD-N tempranos, liberación de ox-mtDNA hacia cGAS–STING) y dial bioenergético (Hibernación adaptativa vs Necrosis/Fallo irreversible).

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** En relación con la patobiología del inflamasoma y la mitocondria en la sepsis según Hu et al. (2024) y Neumann et al. (2026), señale el enunciado CORRECTO:
- A) La gasdermina D clivada (GSDMD-N) perfora únicamente la membrana plasmática al final de la piroptosis, dejando intactas a las mitocondrias.
- B) La normalización de enzimas de la cadena respiratoria por la actividad de citrato sintasa es el estándar libre de sesgos en la sepsis muscular aguda.
- C) GSDMD-N daña las membranas mitocondriales antes de la lisis plasmática liberando ox-mtDNA hacia la vía cGAS–STING, mientras las motas extracelulares de ASC amplifican la inflamación y el bloqueo total de NLRP3 conlleva riesgo por efecto "Goldilocks".
- D) El lipopolisacárido citosólico solo puede activar el inflamasoma a través de TLR4 de superficie sin participación de caspasas-4/5.
- E) Existen ensayos clínicos fase III concluyentes que validan el uso rutinario de inhibidores directos de NLRP3 en todo shock séptico.

**Pregunta 2.** Ingresa a UCI un varón de $61\text{ años}$ con shock séptico abdominal, AST $3.400\text{ U/L}$, lactato $7{,}8\text{ mmol/L}$, plaquetas $52.000/\text{mm}^3$ y ferritina de $4.800\text{ ng/mL}$. Un residente propone indicar anakinra inmediato aduciendo que el HScore es compatible con MALS (síndrome de activación macrofágica). A la luz de **ImmunoSep (2026)**, **Ouranos (2026)** y **Haar**, ¿cuál es la valoración crítica correcta?
- A) Ferritina $> 2.000\text{ ng/mL}$ confirma MALS puro con indicación clase I de anakinra porque en ImmunoSep redujo la mortalidad a 90 d en un $18\%$ absoluto.
- B) HScore/HLH-2004 discriminan con $98\%$ de especificidad la hiperinflamación macrofágica de la hipoperfusión hepática séptica.
- C) En shock séptico refractario, ferritina elevada y lactato $> 6\text{ mmol/L}$ ($\text{OR } 16{,}1$) suelen reflejar hipoperfusión e injuria hepática; además Ouranos 2026 mostró que la ferritina es una rampa continua y anakinra no seleccionado tuvo $\text{HR } 1{,}83$ de mortalidad a 14 d, mientras ImmunoSep tuvo mortalidad 90 d neutra y mayor shock *de novo* ($22{,}1\%$ vs $11{,}7\%$).
- D) En INSPIRE 2026, la mediana de ferritina de los pacientes sépticos fue de $8.500\text{ ng/mL}$, confirmando que $4.800$ es un valor bajo.
- E) Debe combinarse inmediatamente anakinra con interferón-$\gamma$ para cubrir simultáneamente hiperinflamación e inmunoparálisis.

**Pregunta 3.** ¿Cuál de las siguientes descripciones refleja mejor el concepto de **hibernación metabólica** de Singer (2004/2014) en comparación con los hallazgos de Brealey (2002) y Fink?
- A) La falla orgánica séptica se explica íntegramente por necrosis tisular masiva visible en histología renal y miocárdica.
- B) Pese a la disfunción bioenergética del Complejo I y caída del ATP por peroxinitrito/PARP-1 (*hipoxia citopática*), los órganos muestran escasa necrosis histológica y reducen su demanda energética en $30\text{–}40\%$ (*oxygen conformance*) para preservar la viabilidad celular de manera potencialmente reversible.
- C) El fenómeno ocurre exclusivamente en pacientes sin vasopresores y desaparece aumentando la $\text{FiO}_2$ al $100\%$.
- D) La hibernación impide definitivamente la recuperación orgánica una vez superadas las primeras $24\text{ h}$.
- E) La hiperventilación sostenida revierte directamente la inhibición por peroxinitrito del Complejo I.

**Pregunta 4.** Al leer críticamente un estudio de *machine learning* sobre biomarcadores transcriptómicos para predecir endotipos sépticos (ej. firmas de 4 genes o reportes tipo `PMID 42691061`), ¿cuál es una trampa estadística frecuente que todo residente R3 debe detectar?
- A) Un modelo con $\text{AUROC}$ aparentemente moderado-alto ($>0{,}75\text{–}0{,}80$) puede ocultar una **balanced accuracy de $0{,}50$** (clasificación azarosa) en cohortes desbalanceadas si no se reportan calibración y validación externa.
- B) Si el tamaño muestral tiene menos de $100$ pacientes, el AUROC siempre subestima el rendimiento real en el mundo real.
- C) Las firmas génicas reemplazan al examen físico y a los hemocultivos desde el ingreso a guardia.
- D) Un coeficiente de determinación $R^2$ bajo siempre garantiza mejor generalización externa.
- E) La validación cruzada interna en el mismo hospital elimina por completo la necesidad de cohortes externas.

<!-- practica-2026-11-26 -->
**Pregunta 5.** Sobre la ferritina de **4.420 ng/mL** como criterio de MALS en sepsis, señale lo CORRECTO:
- A) Es el tamaño muestral del estudio de Ouranos 2026.
- B) Marca un quiebre biológico: por debajo no hay riesgo aumentado.
- C) Es un corte administrativo: el riesgo crece en rampa continua (HR 2,44 con $\ge 2.000$ hasta 3,05 con $\ge 10.000$), y el ensayo positivo de anakinra (INSPIRE) incluyó pacientes con ferritina ~350 ng/mL antes de la falla orgánica.
- D) Selecciona con precisión a quién beneficia anakinra, como demostró ImmunoSep en mortalidad a 90 días.
- E) Su cinética no aporta información pronóstica.

**Pregunta 6.** ¿Cuál de estos conceptos describe una reducción del consumo de O₂ del 30–40% **sin caída de ATP** ante hipoxia verdadera?
- A) Hipoxia citopática de Fink.
- B) Hibernación miocárdica de Rahimtoola.
- C) *Oxygen conformance*.
- D) Hibernación mitocondrial de Singer en disoxia.
- E) Efecto Haldane.

<details>
<summary>Ver respuestas y justificación tripartita (Preguntas 1–4)</summary>

1. **Respuesta correcta: C.** *Justificación:* (1) Hu 2024 describió la lesión mitocondrial temprana por GSDMD-N con fuga de ox-mtDNA y activación cGAS–STING; Neumann 2026 resaltó el rol propagador de las motas de ASC y el límite terapéutico del efecto Goldilocks. (2) Descarte: B invierte la advertencia de Fredriksson sobre citrato sintasa; D ignora las caspasas-4/5 no canónicas.
2. **Respuesta correcta: C.** *Justificación:* (1) AST $3.400$ + lactato $7{,}8$ ($>6$, Haar $\text{OR } 16{,}1$) grita hígado hipóxico/shock persistente antes que MALS primario. (2) Evidencia 2026: ImmunoSep tuvo SOFA D9 positivo ($35{,}1\%$ vs $17{,}9\%$) pero **90 d neutro ($68{,}7\%$ vs $67{,}6\%$)** y más shock *de novo* ($22{,}1\%$ vs $11{,}7\%$); Ouranos 2026 (`n = 4.420`) halló ferritina como rampa continua y $\text{HR } 1{,}83$ con anakinra en vida real. (3) INSPIRE mediana fue $305\text{–}398\text{ ng/mL}$.
3. **Respuesta correcta: B.** *Justificación:* (1) Integra hipoxia citopática (Fink: peroxinitrito + PARP-1), caída de Complejo I/ATP (Brealey 2002) e hibernación adaptativa reversible ($-30\text{–}40\%$ gasto metabólico, preservando arquitectura histológica, Singer 2004/2014).
4. **Respuesta correcta: A.** *Justificación:* `PMID 42691061` y la auditoría de firmas pequeñas (Su 2025) muestran que en datos desbalanceados un AUROC atractivo puede convivir con *balanced accuracy* de $0{,}50$ (inútil en clínica).

5. **Respuesta correcta: C.** *Justificación:* Ouranos 2026 (`PMID 42317790`, 224.507 pacientes) mostró la rampa continua; INSPIRE (`PMID 41552367`) seleccionó por presepsina y SOFA = 1. ImmunoSep fue neutro a 90 días. Una caída $< 15\%$ de la ferritina al día 3 tuvo sensibilidad $> 90\%$ para mala evolución (Kyriazopoulou 2017).
6. **Respuesta correcta: C.** *Justificación:* La *oxygen conformance* es la única de las cuatro que vive del lado de la hipoxia real (descripta en células C2C12). La hibernación de Singer y la hipoxia citopática describen la disoxia séptica desde ángulos opuestos (regulación vs defecto).

</details>

### 5.2 Casos "Detectá el error de guardia" (2 casos)
1. **Caso 1 — "Tiene ferritina de 1.900 ng/mL, está hiperinflamado; suspendamos la búsqueda del foco y pongamos anakinra":** Paciente séptico en día 3 con fiebre persistente, ferritina $1.900$, plaquetas en descenso y hepatograma con AST $1.800$, al que nadie drenó una colección retroperitoneal sospechada en TC.
   - *Error oculto:* usar la ferritina como interruptor binario de MALS ignorando que se comporta como rampa continua (**Ouranos 2026**), que el hepatograma sugiere lesión hepatocelular secundaria y que el bloqueo IL-1/NLRP3 con foco no controlado puede agravar sepsis y shock *de novo* (**ImmunoSep 2026**, **Neumann 2026**).
2. **Caso 2 — "Como pertenece al subgrupo CTS2, suspendamos de plano la hidrocortisona en su shock refractario":** Decisión de suspender corticoides de rescate solo por lectura de un resumen secundario sobre endotipos CTS2.
   - *Error oculto:* la señal específica atribuida a CTS2+$34\%$ con corticoides permanece marcada como **dato no verificado en fuente primaria pública** dentro de nuestra auditoría y **no** existe recomendación clínica validada para suspender hidrocortisona por endotipado en shock refractario (ver guías en [M06](#module-M06)).

### 5.3 Flashcards de repaso rápido (5 tarjetas)
1. **¿Qué hace la gasdermina D (GSDMD-N) antes incluso de romper la membrana plasmática?** → Forma poros en la membrana mitocondrial, liberando **ox-mtDNA** al citosol y activando la vía **cGAS–STING** (Hu 2024).
2. **¿Qué porcentaje reduce su metabolismo un órgano en hibernación de Singer y qué lo distingue histológicamente?** → **$-30\text{–}40\%$** de metabolismo (*oxygen conformance*) con **ausencia relativa de necrosis extensa** pese a disfunción grave.
3. **¿Qué mostró exactamente el ensayo ImmunoSep (*JAMA* 2026) a 90 días y en elegibilidad?** → Mejoró SOFA día 9 ($35{,}1\%$ vs $17{,}9\%$), pero **mortalidad 90 d neutra ($68{,}7\%$ vs $67{,}6\%$)**, más **shock *de novo* ($22{,}1\%$ vs $11{,}7\%$)** y la **mayoría de pacientes resultó inclasificable**.
4. **¿Qué mostró Ouranos et al. (2026, TriNetX, corte MALS de ferritina $\ge 4.420$ ng/mL) sobre ferritina y anakinra en vida real?** → Ferritina = **rampa continua** de riesgo sin corte mágico; anakinra fuera de selección estricta asoció **$\text{HR } 1{,}83$** a 14 días.
5. **¿Qué advertencia metodológica dejó Fredriksson (citado en Hu 2024) sobre biopsias mitocondriales?** → Normalizar por **citrato sintasa** puede ser engañoso cuando cambian la masa proteica o el edema tisular séptico.
6. **¿De dónde viene el 'anakinra en MALS'?** → De un reanálisis post hoc de 43 pacientes de un fase III negativo (Shakoory 2016); ImmunoSep no mostró beneficio en mortalidad y el uso real (Ouranos 2026) no mostró beneficio.

---

## 6. Referencias Verificadas y Registro de Correcciones

1. **Neumann K et al.** Inflammasome activation, ASC specks, GSDMD pyroptosis, and the Goldilocks caveat in sepsis. 2026.
2. **Hu Q et al.** Mitochondrial dysfunction, ox-mtDNA, cGAS-STING pathway, and citrate synthase pitfall in sepsis. *Crit Care*. 2024.
3. **Singer M et al.** Multiorgan failure is an adaptive, endocrine-mediated, metabolic response to overwhelming systemic inflammation. *Lancet*. 2004;364:545-548. `PMID 15302200`. **Singer M.** The role of mitochondrial dysfunction in sepsis-induced multi-organ failure. *Virulence*. 2014;5(1):66-72. `PMID 24185508`. **Brealey D et al.** Mitochondrial dysfunction and outcome of septic shock. *Lancet*. 2002;360:219-223. `PMID 12133657` (`n = 28`). **Fink MP.** Cytopathic hypoxia. *Oxygen conformance* en C2C12: `PMID 10806342`. Fuente de la tabla y los matices: síntesis propia *Hibernación mitocondrial* (bóveda, abstracts).
4. **Mühlhaus et al.** Persistent pTLR4 activation and mortality in sepsis ($\text{HR } 3{,}28$). 2026.
5. **Giamarellos-Bourboulis EJ et al. (ImmunoSep Trial).** Personalized immunotherapy (anakinra vs IFN-$\gamma$) in sepsis. *JAMA*. 2026.
6. **Ouranos K et al.** Real-world outcomes of MALS and hyperferritinemia in sepsis (TriNetX). *EClinicalMedicine*. 2026;96:104013. `PMID 42317790`. **Kyriazopoulou E et al.** MALS in sepsis. *BMC Med*. 2017. `PMID 28918754`. **Shakoory B et al.** IL-1 receptor blockade in sepsis with MAS features (reanálisis). *Crit Care Med*. 2016. `PMID 26584195`.
7. **Tavoulareas G et al. (INSPIRE).** Anakinra in pneumonia, phase IIa RCT ($n = 60$). *Lancet Reg Health Eur*. 2026;62:101573. `PMID 41552367`. **Van Nynatten LR et al.** Predictive enrichment using biomarkers in sepsis RCTs. *Crit Care*. 2025. `PMID 41310736`.
8. **Schuster et al.** Inflammatory endotyping boundaries in sepsis. 2026. `PMID 41224076`.
9. **Liedgens P et al.** Marked hyperferritinemia in critically ill cancer patients. *Eur J Haematol*. 2024. `PMID 38937785`. **Haar M et al.** HLH in critically ill adults. *Front Med*. 2025. `PMID 41234904`. **Queffeulou C et al.** HLH in critically ill patients. *Eur J Haematol*. 2026. `PMID 41414818`. Fuente de las ampliaciones: síntesis propia *Ferritina, MALS y anakinra en sepsis* (bóveda; Ouranos e INSPIRE leídos a texto completo, el resto abstracts).
10. **Su Y et al.** 4-gene max-logistic model (2025) y evaluación crítica de métricas desbalanceadas (`PMID 42691061`).

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- **Ítem #3 / #16 (Endotipos CTS2 y firmas IA):** Etiquetada la supuesta interacción `CTS2 + corticoides (+34%)` como **`⏳ no verificado`** en literatura primaria pública para impedir decisiones clínicas infundadas; resaltada la desconexión AUROC vs *balanced accuracy* ($0{,}50$) en `PMID 42691061` y las limitaciones de tamaño de INSPIRE ($n=60$) frente a Ouranos (224.507 sepsis con ferritina medida; el "4.420" es el corte de ferritina en ng/mL, no el tamaño muestral — corregido el 2026-11-25) e ImmunoSep ($68{,}7\%$ vs $67{,}6\%$ a 90 d).
