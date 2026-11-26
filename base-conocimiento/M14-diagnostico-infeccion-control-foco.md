---
id: M14
titulo: "Diagnóstico de la Infección y Control de Foco"
subtitulo: "Hemocultivos bien tomados, biomarcadores con sus límites, diagnóstico molecular y metagenómica, y el reloj del control de foco: cuándo drenar ya, cuándo esperar y qué hacer con la fascitis necrotizante"
ultima_actualizacion: 2026-11-26
piloto_fase2: false
fuentes_nlm:
  - "PubMed (abstracts verificados con PMID, 2026-11-26)"
fuentes_vault:
  - "04-Recursos/Papers/Procalcitonina en Sepsis.md"
  - "03-Proyectos/Protocolo Antibioticoterapia Sepsis UCI.md"
  - "Barrido anual PubMed + avisos de correo 2025–2026"
palabras_clave:
  - hemocultivos
  - tiempo a la positividad
  - procalcitonina
  - presepsina
  - PRONTO
  - ADAPT-Sepsis
  - diagnóstico molecular rápido
  - DigiSep
  - PROGRESS
  - beta-D-glucano
  - CandiSep
  - control de foco
  - Reitz 2022
  - POINTER
  - STOP-IT
  - LRINEC
  - fascitis necrotizante
  - INSTINCT
---

# M14 — Diagnóstico de la Infección y Control de Foco

> Módulo armado el 2026-11-26 a partir de abstracts de PubMed, cada uno con su PMID. Ningún estudio se leyó a texto completo: antes de llevar un número a una clase, conviene abrir el paper.

---

## 1. Capa Base — Desde cero (Conceptos, Criterios y Fundamentos)

### 1.1 Las dos preguntas de la primera hora
Frente a un paciente con sospecha de sepsis hay dos preguntas distintas que se suelen mezclar:

1. **¿Es una infección?** La sepsis es disfunción orgánica *causada por una infección* ([M01](#module-M01)), pero en la primera hora la infección casi nunca está confirmada: se sospecha. Incluso en sepsis grave con hipotensión o lactato $\ge 4$, los hemocultivos tomados antes del antibiótico fueron positivos en apenas el **31,4%** de los pacientes (Cheng 2019, `PMID 31525774`).
2. **¿Dónde está y hay que sacarla?** Un foco que necesita drenaje, desbridamiento o retiro de un dispositivo no se resuelve con antibióticos, por bien dosificados que estén ([M09](#module-M09)).

Las herramientas para contestarlas son tres, y cada una responde algo distinto:

| Herramienta | Qué contesta | Qué **no** contesta |
| :--- | :--- | :--- |
| **Examen clínico + imágenes** | Dónde está el foco y si es drenable | Qué germen es |
| **Microbiología** (cultivos, paneles moleculares) | Qué germen y a qué es sensible | Si el paciente está séptico; llega tarde para la primera dosis |
| **Biomarcadores** (procalcitonina, presepsina) | Probabilidad de infección bacteriana, ayuda a suspender antibióticos | Dónde está el foco; no alcanzan para decidir no tratar a un paciente en shock |

### 1.2 Hemocultivos bien tomados
- **Cuántos:** de los episodios de bacteriemia detectados con 3 o más hemocultivos en 24 h, el primero detectó el **73,1%**, los dos primeros el **89,7%** y los tres primeros el **98,2%** (Lee 2007, `PMID 17881544`; estudio previo de Cockerill 2004, `PMID 15227618`). Por eso se piden **2 a 3 sets** (cada set = frasco aerobio + anaerobio), no uno.
- **Cuánto volumen:** el rendimiento depende del volumen de sangre cultivada. El estándar es **~20 mL por set** (10 mL por frasco en adultos). Un frasco con poca sangre es la causa más común de un falso negativo.
- **Antes del antibiótico, si no lo demora:** en sepsis grave, repetir los hemocultivos a una mediana de 70 minutos después de la primera dosis bajó la positividad de **31,4% a 19,4%**; la sensibilidad de los cultivos post-antibiótico fue del **52,9%** (Cheng 2019, `PMID 31525774`). La regla de las guías SSC es tomarlos antes **siempre que no demoren** el antibiótico; en el shock, el antibiótico no espera al cultivo.
- **Los otros cultivos también cuentan:** sumando cultivos de otros sitios (orina, secreciones, líquidos), en el mismo estudio se identificó el germen en el **67,6%** de los bacteriémicos.
- **El tiempo a la positividad también informa:** un hemocultivo que se positiviza rápido se asoció a más mortalidad (OR 2,98) y más shock (OR 4,06) en gram positivos y gram negativos, pero no en la candidemia (24 estudios; Hsieh 2022, `PMID 35144551`).
- **Contaminación:** entre el **1% y más del 10%** de los hemocultivos positivos son contaminantes según el centro. Un estafilococo coagulasa negativo, *Cutibacterium*, *Bacillus* o un corinebacteria en 1 de 2 sets suele ser contaminación; en 2 de 2, o con un catéter o prótesis, hay que pensarlo. La guía de la ASM 2024 revisó qué intervenciones bajan la contaminación (venopunción en lugar de catéter, equipos de extracción, kits, dispositivos de descarte) (Sautter 2024, `PMID 39495314`).

### 1.3 Biomarcadores: qué preguntan y qué no

| Biomarcador | Rendimiento diagnóstico (2025–2026) | Para qué sirve | Trampa |
| :--- | :--- | :--- | :--- |
| **Procalcitonina (PCT)** en UTI | Sensibilidad 0,72, especificidad 0,65, AUC 0,79 para sepsis (Sepsis-3), certeza baja (Ghatak 2026, `PMID 41421176`) | **Suspender** antibióticos (ver 2.4) | Sube sin infección en cirugía mayor, trauma, shock, pancreatitis, quemados y algunos tumores (Popa 2026, `PMID 41901546`) |
| **PCT para descartar bacteriemia** | Con corte 0,10 ng/mL: sensibilidad 93%, especificidad 36% (40 estudios, 192.529 pacientes; Kaal 2026, `PMID 41519266`) | Ayuda a no pedir hemocultivos innecesarios en la comunidad | 32 de 40 estudios con alto riesgo de sesgo |
| **Presepsina (sCD14-ST)** | Sepsis-3: sensibilidad 0,78, especificidad 0,74, AUC 0,85, con heterogeneidad alta y cortes no estandarizados (Damavandi 2026, `PMID 42321635`) | Señal complementaria | En la guardia rindió casi igual que la PCT: AUROC 0,63 vs 0,62 (Sri-On 2026, `PMID 41482452`) |
| **PCR** | — | Seguimiento de tendencia | No sirvió para acortar antibióticos en ADAPT-Sepsis (`PMID 39652885`) |
| **Lactato** | No es marcador de infección | Gravedad e hipoperfusión ([M04](#module-M04)) | Un lactato normal no descarta sepsis |

Un metaanálisis de 38 estudios en la guardia mostró PCT y presepsina **comparables**: AUROC 0,84 y 0,87, sin diferencia significativa en sensibilidad ni especificidad (Chairaj 2025, `PMID 41339821`).

### 1.4 Qué es el control de foco
**Control de foco** es todo procedimiento físico que elimina la fuente de la infección, frena la contaminación en curso y restituye la anatomía y la función. Se resume en cuatro verbos:

1. **Drenar:** abscesos, empiema, vía biliar obstruida, riñón obstruido.
2. **Desbridar:** tejido necrótico infectado (fascitis, necrosis pancreática infectada).
3. **Retirar dispositivos:** catéteres, prótesis, sondas. La SSC 2021 pide retirar un acceso vascular posiblemente infectado **después de asegurar otro acceso** (Evans 2021, `PMID 34599691`).
4. **Control definitivo:** resecar o derivar (perforación, isquemia intestinal).

La SSC 2021 lo plantea como declaración de buena práctica: **identificar o descartar rápido** un diagnóstico anatómico que requiera control urgente, e intervenir **apenas sea médica y logísticamente posible**. El principio que acompaña: la intervención **menos invasiva que resuelva el foco** (percutánea antes que cirugía abierta, cuando ambas sirven).

| Foco | Control de foco típico | Urgencia |
| :--- | :--- | :--- |
| Perforación o peritonitis secundaria | Laparotomía o laparoscopía | Alta |
| Infección necrotizante de partes blandas | Desbridamiento quirúrgico amplio | **Máxima** (ver 2.6) |
| Colangitis obstructiva | Drenaje biliar endoscópico o percutáneo | Moderada: drenaje precoz; grave: apenas se estabiliza (TG18, `PMID 28941329`) |
| Pielonefritis obstructiva | Nefrostomía o catéter doble J | Alta |
| Absceso (hepático, renal, psoas, intraabdominal) | Drenaje percutáneo guiado por imágenes | Alta |
| Catéter venoso central infectado | Retiro tras asegurar otro acceso | Alta |
| Necrosis pancreática infectada | **Diferido**: antibióticos y esperar el encapsulamiento (*step-up*) | **Baja**: drenar inmediatamente no fue mejor (POINTER, ver 2.2) |
| Endocarditis con indicación quirúrgica | Cirugía valvular | Según indicación |

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 ¿Cuán rápido? La evidencia del reloj del control de foco
No hay ensayos aleatorizados sobre *cuándo* hacer el control de foco; todo lo que sigue es observacional.

- **MEDUSA (Bloos 2014, 44 UTI alemanas, $n = 1.011$):** entre los 422 pacientes con control de foco, hacerlo **más de 6 h** después de la disfunción orgánica se asoció a mayor mortalidad a 28 días (**42,9% vs 26,7%**). En el mismo estudio, no hubo relación lineal entre el tiempo al antibiótico y la mortalidad, pero sí con que el antibiótico fuera **adecuado** (30,3% vs 40,9%). `PMID 24589043`
- **ABISS-Edusepsis (Martínez 2017, 99 UTI españolas, $n = 3.663$):** el 32% necesitó control de foco (abdominal, urinario y partes blandas, sobre todo). Hacerlo se asoció a menor mortalidad (OR ajustado 0,81), pero **hacerlo después de 12 h no** se asoció a más mortalidad (27,6% vs 26,8%). `PMID 27611975`
- **Kim 2019 (11 guardias coreanas, shock séptico):** el control de foco redujo la mortalidad a 28 días (HR 0,54), pero no se encontró diferencia por hacerlo antes o después de 6 o 12 h. `PMID 31247517`
- **Reitz 2022 (*JAMA Surg*, $n = 4.962$, sepsis de la comunidad):** mediana de **15,4 h** hasta el control de foco; solo el 27% lo tuvo antes de 6 h. La mortalidad cruda a 90 días fue igual (14% vs 15%), pero ajustada, **antes de 6 h se asoció a menor mortalidad (aOR 0,71)**, con más efecto en el foco **abdominal (aOR 0,56)** y de **partes blandas (aOR 0,72)** que en el ortopédico o craneal (aOR 1,33). `PMID 35830181`
- **Bacteriemia por *Pseudomonas* (Vena 2026, 14 hospitales italianos, 639 episodios):** el 34% necesitó control de foco y solo la mitad lo tuvo temprano y adecuado. La mortalidad a 30 días fue **6,5%** con control temprano adecuado frente a **23,6%** sin él (HR ajustado 0,15 en el análisis por puntaje de propensión). `PMID 42787356`

**Cómo leerlo:** los estudios no coinciden en un umbral de horas, y todos tienen el mismo problema: los pacientes más graves o más inestables se operan antes, o después, por razones que no se miden (sesgo de indicación). Lo consistente es otra cosa: **hacer el control de foco cuando hace falta se asocia siempre a menos mortalidad**, y el apuro pesa más en el abdomen y en las partes blandas. "Dentro de las 6 h" es una meta razonable, no un dato demostrado.

### 2.2 Cuando más rápido no es mejor
- **POINTER (*N Engl J Med* 2021, $n = 104$, necrosis pancreática infectada):** drenar **dentro de las 24 h** del diagnóstico no fue superior a **esperar el encapsulamiento** (índice de complicaciones 57 vs 58; mortalidad 13% vs 10%). El grupo inmediato necesitó **más intervenciones** (4,4 vs 2,6), y en el grupo diferido el **39% se curó solo con antibióticos**, sin drenaje. `PMID 34614330`
- **Relaparotomía a demanda vs programada (van Ruler, *JAMA* 2007, $n = 232$, peritonitis grave):** sin diferencia en muerte o morbilidad (57% vs 65%) ni en mortalidad (29% vs 36%). A demanda hubo **menos relaparotomías negativas** (31% vs 66%), 4 días menos de UTI y un 23% menos de costos. `PMID 17712070`
- **Colangitis (Tokyo Guidelines 2018):** en la leve alcanza con antibióticos; en la moderada, drenaje precoz; en la **grave, drenaje apenas el paciente se estabiliza** con soporte respiratorio y hemodinámico. `PMID 28941329`

La lección: "control de foco precoz" no quiere decir "el procedimiento más grande lo antes posible". Quiere decir **el procedimiento correcto, en el momento en que cambia el pronóstico**.

### 2.3 Después del control de foco: cuánto antibiótico
- **STOP-IT (*N Engl J Med* 2015, $n = 518$, infección intraabdominal con control de foco adecuado):** un curso fijo de **4 ± 1 días** dio el mismo resultado que seguir hasta 2 días después de normalizar fiebre, leucocitos e íleo (mediana de 8 días): **21,8% vs 22,3%** en el compuesto de infección del sitio quirúrgico, recurrencia o muerte. `PMID 25992746`
- **BALANCE (bacteriemia, 7 vs 14 días):** ver [M09](#module-M09). Recordá que excluyó focos endovasculares y óseos profundos.
- **Endocarditis complicada con shock (metaanálisis, 7 estudios observacionales):** mortalidad hospitalaria del **62,3%** (OR 5,83 frente a endocarditis sin shock); la cirugía valvular se asoció a menor mortalidad, sobre todo en el shock cardiogénico. *S. aureus* fue el germen más frecuente. `PMID 40884710`
- **Bacteriemia persistente por *S. aureus*** (hemocultivos positivos $\ge 48$ h con tratamiento adecuado; 19 estudios, 7.993 pacientes): duplica a triplica la mortalidad a 30 días (**OR ajustado 2,81**). Hay que repetir los hemocultivos y buscar un foco no controlado (endocarditis, absceso, material protésico). `PMID 43000473`

### 2.4 Procalcitonina: para suspender sí, para no empezar no
- **Para empezar antibióticos en la guardia — PRONTO** (*Lancet Respir Med* 2026, 20 guardias, $n = 5.453$): sumar PCT rápida al NEWS2 **no cambió** el inicio de antibióticos a las 3 h (48,4% vs 48,2%), con mortalidad no inferior. `PMID 41881047` (ver [M01](#module-M01))
- **Para suspenderlos en la UTI:**
  - **PRORATA** (*Lancet* 2010, $n = 621$): 2,7 días más sin antibióticos, mortalidad a 28 días no inferior (21,2% vs 20,4%). `PMID 20097417`
  - **SAPS** (*Lancet Infect Dis* 2016, 15 hospitales holandeses, $n = 1.546$): suspender con caída $\ge 80\%$ del pico o PCT $\le 0{,}5$ acortó la mediana de 7 a 5 días; la mortalidad a 28 días fue menor (20% vs 25%), un hallazgo que no se repitió después. `PMID 26947523`
  - **ADAPT-Sepsis** (*JAMA* 2025, 41 UTI británicas, $n = 2.760$): la PCT diaria acortó **0,88 días** (10,7 → 9,8) con mortalidad no inferior; la **PCR no acortó nada**. `PMID 39652885`
  - **Metaanálisis 2026:** 19 ensayos, $n = 6.382$: **−2,0 días** con PCT, mortalidad RR 0,95 (0,83–1,07), certeza moderada (Rafiq 2026, `PMID 41505903`). Otro metaanálisis de 16 ensayos encontró algo más de **reinfección** con PCT (RR 1,12; 1,00–1,26) (Raja 2026, `PMID 41838832`).
- **Lo que dice la SSC 2021:** **en contra** de usar PCT más evaluación clínica para decidir *cuándo empezar* (recomendación débil); **a favor** de usarla para decidir *cuándo suspender* cuando la duración óptima no está clara (débil). `PMID 34599691`

### 2.5 Diagnóstico microbiológico rápido y metagenómica
- **Tests moleculares sobre hemocultivo positivo:** sensibilidad 92–99% y especificidad 99–100% frente al método convencional (74 estudios, 24.590 muestras; Wang 2025, `PMID 39672467`). La identificación es confiable; la pregunta es si cambia algo.
- **¿Bajan la mortalidad?** En el metaanálisis de Timbrook 2017 (31 estudios, 5.920 pacientes), sí (OR 0,66), **pero solo con un programa de stewardship** (OR 0,64); **sin stewardship, no** (OR 0,72; 0,46–1,12). Acortaron 5 h el tiempo a la terapia efectiva. `PMID 27678085` Un metaanálisis de 2026 con 51 estudios repitió la cifra (OR 0,66), con estudios mayormente observacionales (Zhou 2026, `PMID 41877090`).
- **Antibiograma rápido — FAST** (*JAMA* 2026, ECA, $n = 850$, gramnegativos): ajustó el antibiótico 14 h antes, pero **no mejoró el desenlace** (DOOR a 30 días). `PMID 41999287` (ver [M09](#module-M09))
- **Metagenómica — DigiSep** (*Intensive Care Med* 2026, 24 UTI alemanas, $n = 389$): sumar mNGS de ADN libre circulante **no mejoró el primario** (DOOR/RADAR). En secundarios hubo menos días de ventilación (6,6 vs 9,3), resolución del shock más rápida y mejor calidad de vida a 90 días, sin diferencia de costos. Son hallazgos exploratorios. `PMID 42377463`
- **PCR digital en gota — PROGRESS** (*Nat Commun* 2026, ECA 3:1, $n = 1.373$): detectó gérmenes en el **54,1% vs 21,6%** del cultivo, con sensibilidad del 80,6%, y duplicó la cobertura antibiótica apropiada (12,9% vs 6,1%). La carga de ADN bacteriano (por ejemplo, $> 3.051$ copias/mL al ingreso) predijo mortalidad. El primario fue diagnóstico; la mejora de sobrevida que reportan los autores es secundaria y conviene leerla a texto completo antes de creerla. `PMID 42749736`

**El hilo común:** la velocidad del laboratorio solo salva vidas si alguien actúa con el resultado. Un panel rápido sin un equipo que cambie el antibiótico es información cara.

### 2.6 Hongos: el beta-D-glucano no es atajo
- **CandiSep** (*Intensive Care Med* 2022, 18 UTI, $n = 339$, sepsis con alto riesgo de candidiasis invasiva): dar antifúngicos si el **beta-D-glucano (BDG)** era $\ge 80$ pg/mL adelantó el tratamiento (1,1 vs 4,4 días) y casi multiplicó por 8 su uso (48,8% vs 6%), **sin bajar la mortalidad** a 28 días (33,7% vs 30,5%; RR 1,10). `PMID 35708758`
- **Análisis secundario 2026:** con los cortes del fabricante, BDG, manano y anticuerpos rindieron mal. Con 80% de especificidad, el BDG (corte $> 280$ pg/mL) detectó solo el **46%** de las candidiasis invasivas. Los anticuerpos se alteran por la **colonización** y combinar marcadores no sumó nada. `PMID 42023876`

### 2.7 Imágenes y PoCUS para encontrar el foco
- **PoCUS orientado al foco:** una revisión de 2026 lo propone como un escaneo **disparado por la clínica y con tiempo acotado**, no como cribado completo. Sirve para sostener neumonía o derrame, y para encontrar patología biliar, obstrucción urinaria, retención o una colección de partes blandas drenable. Su papel es **disparar** la tomografía, el drenaje o la interconsulta, no probar el foco (Chen 2026, `PMID 42840779`). Técnica en [M07](#module-M07).
- **Tomografía en partes blandas:** en sospecha de infección necrotizante, la TC tuvo sensibilidad del **88,5%** y especificidad del **93,3%**; la radiografía simple, 48,9% y 94,0% (Fernando 2019, `PMID 29672405`).
- **PET-TC con FDG:** en bacteriemia y sepsis sin foco, sensibilidad cercana al **94%**, cambió el manejo en el 20–48% de los pacientes, y en bacteriemia compleja hubo que escanear a 3–6 pacientes para encontrar un foco relevante (revisión paraguas, Martinello 2026, `PMID 41873478`). Es para pacientes seleccionados y estables para el traslado.

### 2.8 Infección necrotizante de partes blandas
- **El examen físico no la descarta:** fiebre con sensibilidad del 46%, ampollas hemorrágicas del 25% (especificidad 96%), hipotensión del 21% (especificidad 98%) (Fernando 2019, `PMID 29672405`).
- **El LRINEC tampoco:** $\ge 6$ tiene sensibilidad del **68,2%** (especificidad 84,8%); $\ge 8$, sensibilidad del 40,8%. Uno de cada tres pacientes con infección necrotizante tiene LRINEC $< 6$. `PMID 29672405`
- **El tiempo es fascia:** operar **dentro de las 6 h** de la consulta se asoció a menor mortalidad (**19% vs 32%**; OR 0,43), y dentro de las 12 h también (OR 0,41) (Nawijn 2020, 109 estudios, `PMID 31921330`).
- **Quién se muere (Kruger 2026, *Crit Care Med*, 41 cohortes, 168.261 pacientes):** con certeza moderada o alta, la edad, la hepatopatía y la enfermedad renal crónica, el Charlson alto y la inmunosupresión; de la enfermedad, la hipotensión, la bacteriemia, la lesión renal aguda, la coagulopatía, la plaquetopenia y el shock. `PMID 42138515`
- **Clindamicina:** en estreptococo betahemolítico **del grupo A** invasivo tratado con betalactámicos, sumar clindamicina se asoció a menor mortalidad (6,5% vs 11,0%; aOR 0,44), incluso sin shock ni fascitis; en los **no A/B**, no (aOR 2,60, no significativo). Es una cohorte retrospectiva de 118 hospitales (Babiker 2021, `PMID 33333013`).
- **Inmunoglobulina IV — INSTINCT** (*Intensive Care Med* 2017, $n = 100$): 25 g/día por 3 días **no mejoró** la función física a 6 meses (36 vs 31 puntos; p 0,81). `PMID 28421246`

### 2.9 Modelos predictivos de bacteriemia: todavía no
Un metaanálisis de 2026 juntó **155 estudios con 403 modelos**: el 85% de las validaciones externas tenía alto riesgo de sesgo, casi siempre por no reportar calibración. El mejor modelo de adultos (ID-BactER) llegó a un C de 0,74 (Someko 2026, `PMID 43079304`). No reemplazan pedir hemocultivos con criterio clínico.

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "PCT alta = infección bacteriana."**
   - **Realidad:** la PCT sube sin infección en cirugía mayor, trauma, shock, pancreatitis, quemados y algunos tumores (`PMID 41901546`). En la UTI su especificidad para sepsis es de 0,65 (`PMID 41421176`). Hay que leerla con el contexto y su tendencia, no como un valor aislado.
2. **Mito: "Con PCT baja en la guardia puedo no dar antibióticos al paciente en shock."**
   - **Realidad:** la SSC 2021 recomienda **no** usar la PCT para decidir el inicio, y en PRONTO no cambió la prescripción (`PMID 41881047`). Donde sí demostró algo es en **suspender** antibióticos en la UTI (ADAPT-Sepsis, `PMID 39652885`).
3. **Mito: "Ya le di el antibiótico, para qué tomo hemocultivos."**
   - **Realidad:** la sensibilidad cae pero no desaparece: **52,9%** de los positivos se siguen detectando dentro de las 2 h (`PMID 31525774`). Si se olvidaron, se toman igual, cuanto antes.
4. **Mito: "Con un hemocultivo alcanza."**
   - **Realidad:** un set detecta el 73% de las bacteriemias; dos, el 90%; tres, el 98% (`PMID 17881544`). Y un único positivo con un germen de piel no se puede interpretar.
5. **Mito: "LRINEC menor de 6: no es fascitis, mañana lo vemos."**
   - **Realidad:** sensibilidad del 68% (`PMID 29672405`). Si la clínica sugiere infección necrotizante (dolor desproporcionado, progresión rápida, shock), la conducta es la exploración quirúrgica, y operar antes de 6 h se asocia a la mitad de la mortalidad (`PMID 31921330`).
6. **Mito: "El control de foco siempre es lo antes posible y lo más agresivo posible."**
   - **Realidad:** en la necrosis pancreática infectada, drenar enseguida no fue mejor y sumó intervenciones (POINTER, `PMID 34614330`); la relaparotomía programada no superó a la relaparotomía a demanda (`PMID 17712070`). Lo que importa es elegir el procedimiento menos invasivo que resuelva el foco.
7. **Mito: "El panel molecular rápido baja la mortalidad por sí solo."**
   - **Realidad:** sin un programa de stewardship que actúe con el resultado, no hubo beneficio (`PMID 27678085`), y el antibiograma rápido de FAST no mejoró el desenlace (`PMID 41999287`).
8. **Mito: "Después de operar una peritonitis, el antibiótico sigue hasta normalizar leucocitos y fiebre."**
   - **Realidad:** con control de foco adecuado, **4 días** fueron iguales a 8 (STOP-IT, `PMID 25992746`).

---

## 4. Especificación del Simulador / Atlas Interactivo

> Especificación pendiente de implementar. Hoy los simuladores ejecutables están en M03, M05 y M09.

- **Nombre UI:** *El reloj del foco: hemocultivos, biomarcadores y control de foco*
- **Controles:**
  - Hemocultivos: número de sets (1–3), volumen por set (5 / 10 / 20 mL), tomados antes o después del antibiótico.
  - Biomarcador: PCT (ng/mL) y contexto no infeccioso (posoperatorio, trauma, pancreatitis, ninguno).
  - Foco: abdominal con perforación / partes blandas necrotizante / urinario obstructivo / biliar (TG18 leve, moderada o grave) / catéter / necrosis pancreática infectada / neumonía sin colección.
  - Estado hemodinámico: sin shock / shock séptico.
- **Salidas:**
  - Rendimiento esperado de los hemocultivos (curva de Lee 2007 y caída post-antibiótico de Cheng 2019).
  - Lectura de la PCT con su contexto ("no sirve para decidir el inicio"; "sirve para suspender").
  - Semáforo de urgencia del control de foco por tipo de foco: rojo para fascitis y perforación, amarillo para colangitis moderada y absceso, verde-diferido para necrosis pancreática infectada.
  - Duración sugerida de antibiótico tras el control de foco (STOP-IT, BALANCE), siempre como lectura didáctica.
- **SVG:** línea de tiempo de las primeras 24 h con los hitos (cultivos, antibiótico, imagen, control de foco) y la ventana de 6 h marcada como "meta razonable, no demostrada".

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** Paciente de 68 años en shock séptico de foco urinario. En la guardia recibió la primera dosis de antibiótico a los 40 minutos, antes de tomar hemocultivos. ¿Cuál es la conducta correcta?
- A) No tomar hemocultivos: después del antibiótico ya no sirven.
- B) Tomar 2–3 sets de hemocultivos cuanto antes: la sensibilidad baja, pero dentro de las 2 h sigue detectando alrededor de la mitad de las bacteriemias, y sumar urocultivo aumenta la identificación del germen.
- C) Suspender el antibiótico 24 h para tomar cultivos limpios.
- D) Tomar un solo hemocultivo de 5 mL desde el catéter recién colocado.
- E) Pedir procalcitonina y decidir según el valor si vale la pena cultivar.

**Pregunta 2.** Sobre la procalcitonina (PCT) en sepsis, señalá la opción CORRECTA:
- A) PRONTO mostró que sumar PCT al NEWS2 redujo un tercio el inicio de antibióticos en la guardia.
- B) En ADAPT-Sepsis, la PCR acortó más la duración antibiótica que la PCT.
- C) La SSC 2021 recomienda usar la PCT para decidir cuándo **empezar** antibióticos en sepsis.
- D) La PCT sirve para **suspender**: en ADAPT-Sepsis acortó 0,88 días con mortalidad no inferior, y un metaanálisis de 2026 estimó −2 días con RR de mortalidad 0,95; en cambio, no cambió el inicio de antibióticos en la guardia (PRONTO).
- E) Una PCT alta confirma infección bacteriana aunque el paciente esté en el posoperatorio de una cirugía mayor.

**Pregunta 3.** Sobre el momento del control de foco en sepsis, ¿cuál es la lectura correcta de la evidencia?
- A) Un ECA demostró que operar antes de las 6 h reduce la mortalidad a la mitad en todos los focos.
- B) La evidencia es observacional: Reitz 2022 asoció el control antes de 6 h a menor mortalidad ajustada (aOR 0,71), con más efecto en el foco abdominal y de partes blandas, mientras que otros estudios no encontraron un umbral horario claro.
- C) El momento no importa: ningún estudio asoció la demora a más mortalidad.
- D) El control de foco solo importa si los hemocultivos son positivos.
- E) En el foco ortopédico o craneal, operar antes de 6 h tuvo el mayor beneficio.

**Pregunta 4.** Varón de 55 años con necrosis pancreática infectada (gas en la colección en la TC), sin shock, en el día 12 de evolución. Según **POINTER**, ¿qué conducta es más razonable?
- A) Drenaje percutáneo y necrosectomía en las próximas 24 h, porque el control de foco siempre es urgente.
- B) Laparotomía con necrosectomía abierta inmediata.
- C) Antibióticos y posponer el drenaje hasta el encapsulamiento (*walled-off necrosis*): drenar inmediatamente no redujo complicaciones ni mortalidad, sumó intervenciones, y el 39% del grupo diferido se curó solo con antibióticos.
- D) Esperar sin antibióticos, porque la infección pancreática no necesita tratamiento.
- E) Corticoides para frenar la inflamación y diferir cualquier decisión 4 semanas.

**Pregunta 5.** Mujer de 49 años, diabética, con dolor intenso en el muslo desproporcionado al eritema, taquicardia y PAS de 88 mmHg. Su LRINEC es 4. ¿Qué es lo correcto?
- A) LRINEC menor de 6 descarta la infección necrotizante; tratar como celulitis.
- B) Esperar la evolución de 24 h del LRINEC antes de llamar a cirugía.
- C) Indicar inmunoglobulina IV, que en INSTINCT mejoró la función física a 6 meses.
- D) Pedir radiografía simple: si no hay gas, se descarta.
- E) El LRINEC tiene sensibilidad del 68% y no descarta: con esta clínica corresponde exploración quirúrgica urgente, porque operar antes de 6 h se asoció a casi la mitad de la mortalidad (19% vs 32%).

**Pregunta 6.** Sobre el diagnóstico molecular rápido en bacteriemia, señalá lo CORRECTO:
- A) Su beneficio en mortalidad aparece cuando está integrado a un programa de stewardship que actúa con el resultado; sin stewardship no hubo beneficio significativo (Timbrook 2017).
- B) El antibiograma rápido de FAST redujo la mortalidad a 30 días.
- C) La metagenómica de DigiSep mejoró el desenlace primario DOOR/RADAR.
- D) Los paneles moleculares tienen especificidad del 60% frente al cultivo convencional.
- E) Con un panel rápido ya no hace falta el antibiograma convencional.

**Pregunta 7.** En **CandiSep**, guiar antifúngicos con beta-D-glucano ($\ge 80$ pg/mL) en sepsis con alto riesgo de candidiasis invasiva:
- A) Redujo un 30% la mortalidad a 28 días.
- B) Adelantó el antifúngico (1,1 vs 4,4 días) y multiplicó su uso, sin bajar la mortalidad a 28 días (33,7% vs 30,5%).
- C) Mostró que los anticuerpos anti-*Candida* son el mejor marcador porque no se alteran por la colonización.
- D) Demostró que combinar BDG y manano duplica la sensibilidad.
- E) Mostró que el BDG con el corte del fabricante tiene sensibilidad del 95%.

**Pregunta 8.** Peritonitis por perforación colónica operada con resección y control de foco adecuado. Al día 4, afebril y tolerando la dieta, con leucocitos todavía en 13.000. Según **STOP-IT**:
- A) Completar 14 días de antibiótico por la leucocitosis.
- B) Seguir hasta 2 días después de normalizar los leucocitos.
- C) Un curso fijo de 4 ± 1 días fue igual de seguro que el curso guiado por la normalización de fiebre, leucocitos e íleo (21,8% vs 22,3%), así que es razonable suspender.
- D) Cambiar a un carbapenem por 7 días más.
- E) Pedir PCT y no suspender hasta que sea menor de 0,05 ng/mL.

<details>
<summary>Ver respuestas y justificación (Preguntas 1–8)</summary>

1. **Respuesta correcta: B.** *Justificación:* Cheng 2019 (`PMID 31525774`): a una mediana de 70 minutos post-antibiótico, la positividad cayó de 31,4% a 19,4%, con sensibilidad del 52,9%; sumando otros cultivos, se identificó el germen en el 67,6%. Lee 2007 (`PMID 17881544`) justifica 2–3 sets. Nunca se suspende el antibiótico para cultivar.
2. **Respuesta correcta: D.** *Justificación:* ADAPT-Sepsis (`PMID 39652885`), Rafiq 2026 (`PMID 41505903`) y PRONTO (`PMID 41881047`). La SSC 2021 recomienda no usar la PCT para decidir el inicio (`PMID 34599691`). La PCT sube en el posoperatorio sin infección (`PMID 41901546`).
3. **Respuesta correcta: B.** *Justificación:* Reitz 2022 (`PMID 35830181`): aOR 0,71, abdominal 0,56, partes blandas 0,72, ortopédico o craneal 1,33. Martínez 2017 (`PMID 27611975`) y Kim 2019 (`PMID 31247517`) no hallaron un umbral horario. No hay ECA sobre el momento.
4. **Respuesta correcta: C.** *Justificación:* POINTER (`PMID 34614330`): índice de complicaciones 57 vs 58, mortalidad 13% vs 10%, intervenciones 4,4 vs 2,6, y 39% del grupo diferido curado solo con antibióticos.
5. **Respuesta correcta: E.** *Justificación:* Fernando 2019 (`PMID 29672405`): LRINEC $\ge 6$ con sensibilidad del 68,2% y radiografía con sensibilidad del 48,9%. Nawijn 2020 (`PMID 31921330`): mortalidad 19% vs 32% con cirugía antes o después de 6 h. INSTINCT fue negativo (`PMID 28421246`).
6. **Respuesta correcta: A.** *Justificación:* Timbrook 2017 (`PMID 27678085`): OR 0,64 con stewardship y 0,72 (0,46–1,12) sin él. FAST (`PMID 41999287`) y DigiSep (`PMID 42377463`) fueron negativos en el primario. Los tests moleculares tienen especificidad del 99–100% (`PMID 39672467`), pero el antibiograma fenotípico sigue haciendo falta.
7. **Respuesta correcta: B.** *Justificación:* CandiSep (`PMID 35708758`). En el análisis secundario (`PMID 42023876`), los anticuerpos se alteraron por la colonización, combinar marcadores no sumó y el BDG con 80% de especificidad tuvo sensibilidad del 46%.
8. **Respuesta correcta: C.** *Justificación:* STOP-IT (`PMID 25992746`): 4 vs 8 días de mediana, con 21,8% vs 22,3% en el compuesto. La leucocitosis aislada con control de foco adecuado no justifica prolongar.

</details>

### 5.2 Casos "Detectá el error de guardia" (3 casos)
1. **Caso 1 — "La PCT dio 0,3: no es bacteriano, suspendemos todo":** Varón de 71 años, a las 3 h de llegar a la guardia con fiebre, confusión, noradrenalina 0,2 µg/kg/min y lactato 4,1. Le sacaron un hemocultivo de 5 mL de la vía periférica recién puesta y se suspendió el antibiótico por la PCT baja.
   - *Error oculto:* triple. La PCT no sirve para decidir **no empezar** (SSC 2021; PRONTO): en el shock el antibiótico va igual. Un solo set de 5 mL tiene bajo rendimiento: hacen falta 2–3 sets de ~20 mL (Lee 2007). Y en las primeras horas la PCT puede no haber subido todavía.
2. **Caso 2 — "Celulitis con LRINEC 3, la vemos mañana con el cirujano":** Mujer de 58 años con dolor intenso en la pierna, ampollas violáceas, hipotensión que responde parcialmente a fluidos y plaquetas de 90.000. Se la internó en sala con antibiótico y control a las 24 h.
   - *Error oculto:* el LRINEC tiene sensibilidad del 68% y no descarta. Las ampollas hemorrágicas (especificidad del 96%) y la hipotensión (98%) son muy específicas de infección necrotizante. Operar después de 6 h se asocia a 32% de mortalidad frente a 19%. Además, si es estreptococo del grupo A, conviene sumar clindamicina al betalactámico.
3. **Caso 3 — "Pancreatitis infectada: drenemos todo hoy":** Pancreatitis necrotizante en el día 10, con gas en la colección y sin shock. Se programó necrosectomía quirúrgica abierta para el mismo día.
   - *Error oculto:* en la necrosis pancreática infectada sin deterioro, el abordaje es antibióticos y *step-up* diferido hasta el encapsulamiento. En POINTER, drenar inmediatamente no fue mejor y sumó intervenciones, y la necrosectomía abierta precoz es la opción más agresiva.

### 5.3 Flashcards de repaso rápido (10 tarjetas)
1. **¿Qué porcentaje de bacteriemias detectan 1, 2 y 3 hemocultivos?** → 73%, 90% y 98% (Lee 2007, `PMID 17881544`).
2. **¿Cuánto cae la positividad de los hemocultivos tomados ~70 minutos después del antibiótico?** → De 31,4% a 19,4%; sensibilidad post-antibiótico del 52,9% (Cheng 2019, `PMID 31525774`).
3. **¿Para qué sirve la procalcitonina y para qué no?** → Sirve para **suspender** antibióticos en la UTI (ADAPT-Sepsis: −0,88 días). No sirve para decidir **no empezar** (SSC 2021; PRONTO).
4. **¿Qué causas no infecciosas suben la procalcitonina?** → Cirugía mayor, trauma, shock, pancreatitis, quemados y algunos tumores (`PMID 41901546`).
5. **¿Qué mostró Reitz 2022 sobre el momento del control de foco?** → Antes de 6 h: aOR 0,71 de mortalidad a 90 días, con más efecto en el abdomen (0,56) y las partes blandas (0,72). Es observacional (`PMID 35830181`).
6. **¿Qué mostró POINTER?** → En necrosis pancreática infectada, drenar enseguida no fue mejor que esperar el encapsulamiento y sumó intervenciones (4,4 vs 2,6); el 39% del grupo diferido se curó solo con antibióticos (`PMID 34614330`).
7. **¿Cuánto antibiótico después de un control de foco abdominal adecuado?** → 4 ± 1 días (STOP-IT, `PMID 25992746`).
8. **¿El LRINEC descarta la fascitis necrotizante?** → No: con $\ge 6$, sensibilidad del 68,2%. La TC tiene sensibilidad del 88,5% (Fernando 2019, `PMID 29672405`).
9. **¿Qué es una bacteriemia persistente por *S. aureus* y por qué importa?** → Hemocultivos positivos $\ge 48$ h con tratamiento adecuado; OR ajustado de mortalidad 2,81. Hay que buscar un foco no controlado (`PMID 43000473`).
10. **¿Cuándo un panel molecular rápido baja la mortalidad en bacteriemia?** → Cuando un programa de stewardship actúa con el resultado (OR 0,64); sin stewardship, no (Timbrook 2017, `PMID 27678085`).

---

## 6. Referencias Verificadas y Registro de Correcciones

> Todas verificadas en PubMed el 2026-11-26 (título, revista, año y PMID), leídas a nivel de abstract.

**Hemocultivos y microbiología**
1. **Lee A, et al.** Detection of bloodstream infections in adults: how many blood cultures are needed? *J Clin Microbiol*. 2007. `PMID 17881544`.
2. **Cockerill FR, et al.** Optimal testing parameters for blood cultures. *Clin Infect Dis*. 2004. `PMID 15227618`.
3. **Cheng MP, et al.** Blood culture results before and after antimicrobial administration in patients with severe manifestations of sepsis (FABLED). *Ann Intern Med*. 2019. `PMID 31525774`.
4. **Sautter RL, et al.** ASM evidence-based guidelines to reduce blood culture contamination rates. *Clin Microbiol Rev*. 2024. `PMID 39495314`.
5. **Hsieh YC, et al.** Short time to positivity of blood culture predicts mortality and septic shock. *BMC Infect Dis*. 2022. `PMID 35144551`.
6. **Meena DS, et al.** Persistent *Staphylococcus aureus* bacteremia and 30-day mortality. *Syst Rev*. 2026. `PMID 43000473`.
7. **Someko H, et al.** Diagnostic prediction models for bacteraemia. *BMC Infect Dis*. 2026. `PMID 43079304`.

**Biomarcadores**
8. **Ghatak T, et al.** Diagnostic accuracy of procalcitonin for sepsis in critically ill adults (Sepsis-3). *J Crit Care*. 2026. `PMID 41421176`.
9. **Kaal AG, et al.** Procalcitonin for community-acquired bacteraemia. *Clin Microbiol Infect*. 2026. `PMID 41519266`.
10. **Popa SL, et al.** Non-infectious causes for elevated procalcitonin. *Medicina (Kaunas)*. 2026. `PMID 41901546`.
11. **Damavandi S, et al.** Presepsin for sepsis according to Sepsis-3. *BMC Anesthesiol*. 2026. `PMID 42321635`.
12. **Chairaj T, et al.** Procalcitonin and presepsin in sepsis. *BMC Emerg Med*. 2025. `PMID 41339821`.
13. **Sri-On J, et al.** Presepsin for sepsis diagnosis in emergency departments. *Emerg Med J*. 2026. `PMID 41482452`.
14. **Todd S, et al.** PRONTO. *Lancet Respir Med*. 2026. `PMID 41881047`.
15. **Bouadma L, et al.** PRORATA. *Lancet*. 2010. `PMID 20097417`.
16. **de Jong E, et al.** SAPS: procalcitonin guidance in critically ill patients. *Lancet Infect Dis*. 2016. `PMID 26947523`.
17. **Dark P, et al.** ADAPT-Sepsis. *JAMA*. 2025. `PMID 39652885`.
18. **Rafiq S, et al.** PCT- or CRP-guided antibiotic discontinuation in sepsis. *Anaesthesia*. 2026. `PMID 41505903`.
19. **Raja HAA, et al.** PCT-guided antibiotic therapy vs standard of care for sepsis. *Med Princ Pract*. 2026. `PMID 41838832`.

**Diagnóstico rápido, metagenómica y hongos**
20. **Timbrook TT, et al.** Molecular rapid diagnostic testing in bloodstream infections. *Clin Infect Dis*. 2017. `PMID 27678085`.
21. **Zhou B, et al.** Molecular rapid diagnostic testing in bloodstream infections. *BMC Infect Dis*. 2026. `PMID 41877090`.
22. **Wang Y, et al.** Molecular tests on positive blood cultures. *Clin Microbiol Infect*. 2025. `PMID 39672467`.
23. **FAST** (rapid AST in gram-negative bacteremia). *JAMA*. 2026. `PMID 41999287`.
24. **Brenner T, et al.** DigiSep. *Intensive Care Med*. 2026. `PMID 42377463`.
25. **Zhang H, et al.** PROGRESS (droplet digital PCR). *Nat Commun*. 2026. `PMID 42749736`.
26. **Bloos F, et al.** CandiSep. *Intensive Care Med*. 2022. `PMID 35708758`.
27. **Standl L, et al.** BDG, mannan and anti-*Candida* antibodies in CandiSep. *J Clin Microbiol*. 2026. `PMID 42023876`.

**Control de foco**
28. **Evans L, et al.** Surviving Sepsis Campaign 2021. *Intensive Care Med*. 2021. `PMID 34599691`.
29. **Bloos F, et al.** MEDUSA: compliance with infection management guidelines. *Crit Care*. 2014. `PMID 24589043`.
30. **Martínez ML, et al.** Impact of source control in severe sepsis and septic shock. *Crit Care Med*. 2017. `PMID 27611975`.
31. **Kim H, et al.** Timing to source control in septic shock. *J Crit Care*. 2019. `PMID 31247517`.
32. **Reitz KM, et al.** Time to source control in sepsis and 90-day mortality. *JAMA Surg*. 2022. `PMID 35830181`.
33. **Vena A, et al.** Source control in *Pseudomonas aeruginosa* bloodstream infections. *Open Forum Infect Dis*. 2026. `PMID 42787356`.
34. **Boxhoorn L, et al.** POINTER: immediate vs postponed intervention for infected necrotizing pancreatitis. *N Engl J Med*. 2021. `PMID 34614330`.
35. **van Ruler O, et al.** On-demand vs planned relaparotomy in severe peritonitis. *JAMA*. 2007. `PMID 17712070`.
36. **Miura F, et al.** Tokyo Guidelines 2018: acute cholangitis. *J Hepatobiliary Pancreat Sci*. 2018. `PMID 28941329`.
37. **Sawyer RG, et al.** STOP-IT. *N Engl J Med*. 2015. `PMID 25992746`.
38. **Pîrîianu-Masgras RB, et al.** Infective endocarditis complicated by shock. *Heart Fail Rev*. 2025. `PMID 40884710`.

**Imágenes y partes blandas**
39. **Chen W, et al.** PoCUS for source-oriented assessment in ED sepsis. *Front Med*. 2026. `PMID 42840779`.
40. **Martinello C, et al.** FDG PET/CT in FUO, bacteremia and sepsis: umbrella review. *Q J Nucl Med Mol Imaging*. 2026. `PMID 41873478`.
41. **Fernando SM, et al.** NSTI: physical examination, imaging and LRINEC. *Ann Surg*. 2019. `PMID 29672405`.
42. **Nawijn F, et al.** Time is of the essence in NSTI. *World J Emerg Surg*. 2020. `PMID 31921330`.
43. **Kruger N, et al.** Prognostic factors in NSTI. *Crit Care Med*. 2026. `PMID 42138515`.
44. **Babiker A, et al.** Adjunctive clindamycin in invasive β-haemolytic streptococcal infections. *Lancet Infect Dis*. 2021. `PMID 33333013`.
45. **Madsen MB, et al.** INSTINCT. *Intensive Care Med*. 2017. `PMID 28421246`.

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- Módulo nuevo (2026-11-26); todavía sin ítems de auditoría. Pendiente: leer a texto completo Reitz 2022, POINTER, PROGRESS y DigiSep.
