---
id: M20
titulo: "La Sepsis como Sistema: Epidemiología, Calidad, Prevención, IA y Ética"
subtitulo: "De la carga global y la inequidad argentina a los paquetes obligatorios, el tiempo al antibiótico, la prevención de infecciones, los algoritmos de alerta y las decisiones de fin de vida"
ultima_actualizacion: 2026-11-26
piloto_fase2: false
fuentes_nlm:
  - "PubMed (abstracts verificados con PMID, 2026-11-26)"
fuentes_vault:
  - "01-Clínica/Sepsis y shock séptico (protocolo propio: paquete de la hora 1)"
palabras_clave:
  - carga global
  - GBD
  - Argentina
  - inequidad
  - SPREAD
  - paquete de la hora 1
  - SEP-1
  - tiempo al antibiótico
  - Kumar
  - PRISM
  - prevención de infecciones
  - CLEAN-IT
  - Epic Sepsis Model
  - TREWS
  - COMPOSER
  - ensayos de tiempo limitado
  - costos
---

# M20 — La Sepsis como Sistema: Epidemiología, Calidad, Prevención, IA y Ética

> Módulo armado el 2026-11-26 a partir de abstracts de PubMed, cada uno con su PMID, y del paquete de la hora 1 del protocolo propio de la bóveda. Las recomendaciones de la SSC que salen del texto completo están marcadas.

---

## 1. Capa Base — Desde cero (Conceptos, Criterios y Fundamentos)

### 1.1 Cuánto pesa la sepsis en el mundo
- **Carga global (GBD 2017):** **48,9 millones** de casos y **11 millones de muertes** relacionadas con sepsis en un año, el **19,7% de todas las muertes del mundo**. Entre 1990 y 2017, la incidencia ajustada por edad bajó un 37% y la mortalidad un 52,8%. La carga más alta está en África subsahariana y el sur y el sudeste de Asia (Rudd 2020, `PMID 31954465`).
- **Prioridad de salud global:** en 2017, la Asamblea Mundial de la Salud aprobó una resolución que reconoce a la sepsis como prioridad y pide a los países mejorar la prevención, el diagnóstico y el tratamiento (Reinhart 2017, `PMID 28658587`).

### 1.2 La Argentina y la región: la sepsis también es desigualdad
- **Argentina (Estenssoro 2019, 49 UTI, 809 pacientes con sepsis, Sepsis-3):** los pacientes de **hospitales públicos** eran más jóvenes pero con más comorbilidades, menos años de educación y más trabajo informal o desempleo (30% vs 7%). Llegaban con **más horas de síntomas** (48 vs 24), más veces en **shock** (47% vs 35%) y con más gérmenes multirresistentes. El tratamiento en la UTI **no difirió**, pero la mortalidad a 28 días fue **42% frente a 24%** en el privado, y la internación en un hospital público fue un predictor independiente de muerte. `PMID 31288865`
- **Brasil (SPREAD, 227 UTI elegidas al azar):** 30 pacientes con sepsis por cada 100 camas de UTI y una mortalidad del **55,7%**. La **falta de recursos** (OR 1,67) y el **tratamiento inadecuado** (OR 0,56 cuando era adecuado) se asociaron a la mortalidad. Proyectado al país: unos 420.000 casos y 230.000 muertes por año. `PMID 28826588`

**La lección:** en la región, una parte grande de la mortalidad de la sepsis se decide **antes de la UTI**: en las horas de síntomas, en el acceso y en los recursos. En el estudio argentino, el tratamiento en la UTI fue igual en ambos sectores.

### 1.3 Cómo se mide (y cómo se puede medir mal)
- **Datos clínicos frente a datos administrativos (Rhee 2017, 409 hospitales de EE. UU.):** con criterios clínicos, la incidencia de sepsis fue estable (6,0% de los ingresos; +0,6% por año, no significativo), mientras que con los **códigos de facturación** subía un **10,3% por año**. La caída de la mortalidad también era más pronunciada en los códigos. `PMID 28903154`

Cuando cambia el incentivo para codificar sepsis, los pacientes "codificados" son cada vez menos graves y la mortalidad parece bajar sin que haya cambiado la atención. Toda métrica de calidad tiene que mirar **cómo se identifica el caso**.

### 1.4 Cuánto cuesta
En 2,5 millones de casos de EE. UU. (2010–2016), la mortalidad fue del 5,6% sin disfunción orgánica, 14,9% en la sepsis grave y **34,2% en el shock séptico**. El costo por caso aumentó con la gravedad (16.324, 24.638 y 38.298 dólares) y fue casi **tres veces mayor cuando la sepsis no estaba presente al ingreso** (51.022 frente a 18.023 dólares). La detección precoz es también una cuestión de costos (Paoli 2018, `PMID 30048332`).

### 1.5 El paquete de la hora 1
Un **paquete** agrupa intervenciones que, juntas, se hacen siempre y a tiempo. El paquete de la hora 1 del protocolo propio de la bóveda resume la lógica:
- **Identificar:** NEWS2 de 5 o más, o sospecha de infección con índice de shock mayor de 0,9 ([M01](#module-M01)).
- **Lactato** basal ([M04](#module-M04)).
- **Cultivos:** 2 pares de hemocultivos y urocultivo, **sin demorar el antibiótico** ([M14](#module-M14)).
- **Antibiótico** con dosis de carga ([M09](#module-M09)).
- **Fluidos** guiados por la respuesta a volumen ([M05](#module-M05)).
- **Vasopresor** si la PAM sigue baja ([M06](#module-M06)).

Lo que el paquete no dice, y la evidencia de la sección 2 discute, es **cuánto pesa cada minuto** y si convertirlo en una métrica obligatoria salva vidas.

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 El tiempo al antibiótico: depende de quién
- **Kumar 2006** (*Crit Care Med*, 2.731 pacientes con shock séptico): cada hora de demora del antibiótico eficaz tras la hipotensión se asoció a más mortalidad (**OR 1,12 por hora**). Con antibiótico en la primera hora, la sobrevida fue del 79,9%, y cayó en promedio un **7,6% por cada hora** de demora durante las 6 h siguientes. Solo la mitad recibió antibiótico eficaz dentro de las 6 h. `PMID 16625125`
- **Seymour 2017** (*N Engl J Med*, 149 hospitales de Nueva York con protocolo obligatorio, $n = 49.331$): completar el paquete de 3 h más tarde se asoció a más mortalidad (**OR 1,04 por hora**), igual que demorar el antibiótico (OR 1,04 por hora), pero **no** demorar el bolo de fluidos (OR 1,01). `PMID 28528569`
- **Cuidado con el análisis (Pak 2023, 104.248 pacientes):** según qué variables se ajustan, la asociación entre tiempo y mortalidad cambia de magnitud, de dirección y de significación. En el modelo completo, cada hora pesó en el **shock séptico** (OR 1,07), **no** en la sepsis sin shock (OR 1,03, no significativo) ni en la infección sola; en la sepsis sin shock solo empeoraban las demoras de más de 6 h. `PMID 37531612`
- **¿A quién apurar? (Rhee 2026, *Lancet Respir Med*, 99.667 consultas):** cada hora de demora se asoció a más mortalidad en el **shock** (OR 1,15; 1,5% absoluto por hora) y en los pacientes con **NEWS2 ampliado de 7 o más** (OR 1,07), incluido el 86% de ellos que no estaba en shock. Con un NEWS2 menor de 7 no hubo asociación. `PMID 42556377`

**Cómo usarlo:** en el **shock** o con NEWS2 alto, el antibiótico va **en la primera hora**. En la sospecha de sepsis sin shock, hay algo de margen para confirmar la infección antes de dar antibióticos de amplio espectro a todos. La SSC 2021 lo plantea así: en la sepsis posible sin shock, una evaluación rápida y antibiótico dentro de las 3 h si persiste la sospecha (`PMID 34599691`, recomendación del texto completo).

### 2.2 Paquetes obligatorios: ¿mejora la medida o mejora el paciente?
- **SEP-1 en EE. UU. (Rhee 2021, 114 hospitales, 117.510 pacientes):** la implementación obligatoria del paquete aumentó los lactatos medidos (55% → 77%), **no cambió** el uso de antibióticos de amplio espectro (que ya venía subiendo) y **no cambió la mortalidad** (20,3% vs 20,4%). `PMID 34928358`
- **Cumplir el SEP-1 (Townsend 2022, Medicare, apareamiento por propensión):** los pacientes con atención que cumplía la medida tuvieron menor mortalidad a 30 días (21,8% vs 27,5%; OR ajustado 0,83). Es observacional: los pacientes a los que se les puede completar todo el paquete pueden ser distintos de los que no. `PMID 34364867`
- **El costo en antibióticos (Anderson 2022, 26 hospitales):** con el SEP-1 aumentaron los diagnósticos de sepsis y el **uso de antibióticos un 24,4%**, junto con una caída de la mortalidad global por cada 1.000 pacientes. `PMID 34739080`

**La lección:** cumplir un paquete se asocia a mejores resultados, pero **imponerlo como métrica** no mostró por sí solo una caída de la mortalidad y empujó más antibióticos. Medir el proceso no es lo mismo que mejorar el desenlace.

### 2.3 Los protocolos de reanimación: cuando el "cuidado habitual" mejora
**PRISM** (*N Engl J Med* 2017, metaanálisis de datos individuales de ProCESS, ARISE y ProMISe, 3.723 pacientes en 138 hospitales): la terapia temprana dirigida por metas (EGDT) tuvo la **misma mortalidad a 90 días** que el cuidado habitual (**24,9% vs 25,4%**), con más días de UTI, más soporte cardiovascular y más costos. Tampoco hubo beneficio en los pacientes más graves. `PMID 28320242`

La EGDT de 2001 no "falló": el cuidado habitual de 2014 ya incorporaba lo esencial (reconocimiento precoz, antibiótico rápido, fluidos y vasopresores). Los protocolos rígidos dejan de sumar cuando el sistema ya aprendió. Reanimación actual en [M05](#module-M05).

### 2.4 Prevenir infecciones: la sepsis que no ocurre
- **Bacteriemias por catéter (Pronovost 2006, 103 UTI de Michigan):** una intervención simple (higiene de manos, barreras completas, clorhexidina, evitar la femoral y retirar los catéteres innecesarios, con una lista de verificación) bajó la mediana de bacteriemias de **2,7 a 0 por 1.000 días-catéter** a los 3 meses, con una reducción sostenida del **66%** a los 18 meses. `PMID 17192537`
- **Baño con clorhexidina (CLEAN-IT, Brasil, 2026, ensayo por conglomerados cruzado, 15.935 pacientes):** el baño diario con clorhexidina **no redujo** las infecciones intrahospitalarias en general (3,99 vs 3,45 por 1.000 días-paciente), pero se asoció a **menos cultivos multirresistentes** (14,4 vs 20,1) y a menos uso de antibióticos de reserva. `PMID 41732706`

Las infecciones asociadas al cuidado son sepsis evitables. La prevención de la neumonía asociada a la ventilación está en [M15](#module-M15), y la descontaminación digestiva, en [M11](#module-M11).

### 2.5 Inteligencia artificial: de la promesa al despliegue
- **Epic Sepsis Model (Wong 2021, *JAMA Intern Med*, 38.455 internaciones):** el modelo comercial más usado en EE. UU. tuvo un **AUC de 0,63** en la validación externa, muy por debajo de lo que informaba su fabricante. **No detectó el 67%** de las sepsis y solo identificó al 7% de los pacientes que no habían recibido antibiótico a tiempo, generando muchas alertas. `PMID 34152373`
- **TREWS (Adams 2022, *Nat Med*, 5 hospitales):** en 6.877 pacientes con sepsis detectados antes del antibiótico, cuando un médico **confirmaba la alerta dentro de las 3 h**, la mortalidad hospitalaria fue 3,3 puntos menor (reducción relativa del 18,7%). Es observacional: los médicos que confirman rápido pueden atender distinto por otras razones. `PMID 35864252`
- **COMPOSER (Boussina 2024, 2 guardias, cuasiexperimental):** una alerta dirigida a enfermería se asoció a 1,9 puntos menos de mortalidad por sepsis y a 5 puntos más de cumplimiento del paquete. `PMID 38263386`

**La lección:** un algoritmo solo sirve si (1) se valida **afuera** del lugar donde se creó, (2) no inunda de alertas y (3) alguien **actúa** con la alerta. Todavía no hay ensayos aleatorizados grandes que muestren que una alerta de sepsis salva vidas. Ver también la caída del rendimiento de los modelos al pasar de la guardia a la UTI en [M01](#module-M01).

### 2.6 Ética y fin de vida: no todo lo que se puede hacer se debe hacer
- **Ensayos de tiempo limitado (Chang 2021, *JAMA Intern Med*, 3 UTI, 209 pacientes con enfermedades avanzadas):** entrenar a los médicos para proponer a la familia un **período acotado de tratamiento con metas claras** y una reevaluación pactada aumentó las reuniones formales con la familia (**60% → 96%**), la discusión de riesgos y beneficios, valores y preferencias, y bajó la estadía en UTI (8,7 → 7,4 días) y los procedimientos invasivos, **con la misma mortalidad** (58%). `PMID 33843946`
- **Lo que pide la SSC:** hablar de los **objetivos de cuidado y el pronóstico** con el paciente y la familia temprano (idealmente en las primeras 72 h), e integrar los principios de cuidados paliativos cuando corresponda (`PMID 34599691`, recomendaciones del texto completo).

La fragilidad y la ACLF como datos pronósticos están en [M18](#module-M18); el después de la UTI y las decisiones compartidas al alta, en [M19](#module-M19).

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "La sepsis es un problema de los países pobres."**
   - **Realidad:** es una de cada cinco muertes en el mundo (`PMID 31954465`), con mayor carga en los países de bajos ingresos, pero en todos lados.
2. **Mito: "En la Argentina, el pronóstico de la sepsis depende solo de lo que hacemos en la UTI."**
   - **Realidad:** con el mismo tratamiento en la UTI, la mortalidad fue 42% en el público frente a 24% en el privado, con más horas de síntomas y más shock al ingreso (`PMID 31288865`).
3. **Mito: "Cada hora de demora del antibiótico mata por igual a todos los pacientes con sospecha de sepsis."**
   - **Realidad:** la asociación es clara en el shock y con NEWS2 alto, pero no en la sepsis sin shock ni en la infección sola, y depende mucho de cómo se analiza (`PMID 37531612`, `PMID 42556377`).
4. **Mito: "Hacer obligatorio el paquete de sepsis baja la mortalidad."**
   - **Realidad:** el SEP-1 subió los lactatos medidos y el uso de antibióticos, sin cambio de mortalidad (`PMID 34928358`, `PMID 34739080`).
5. **Mito: "La terapia temprana dirigida por metas es el estándar."**
   - **Realidad:** en PRISM no superó al cuidado habitual (24,9% vs 25,4%) y costó más (`PMID 28320242`).
6. **Mito: "Si la incidencia codificada de sepsis sube y la mortalidad baja, estamos mejorando."**
   - **Realidad:** con criterios clínicos, la incidencia fue estable; el cambio venía de cómo se codificaba (`PMID 28903154`).
7. **Mito: "Un algoritmo comercial de IA detecta la sepsis mejor que el equipo."**
   - **Realidad:** el modelo más usado tuvo un AUC de 0,63 y no detectó el 67% de las sepsis en la validación externa (`PMID 34152373`).
8. **Mito: "Plantear un ensayo de tiempo limitado es abandonar al paciente."**
   - **Realidad:** mejoró la comunicación con la familia y redujo los procedimientos no beneficiosos, con la misma mortalidad (`PMID 33843946`).

---

## 4. Especificación del Simulador / Atlas Interactivo

> Especificación pendiente de implementar. Hoy los simuladores ejecutables están en M03, M05 y M09.

- **Nombre UI:** *El tablero del servicio: de la guardia al indicador*
- **Controles:**
  - Hora de llegada, hora del antibiótico, presencia de shock, NEWS2 (con el ajuste por laboratorio).
  - Elementos del paquete de la hora 1 cumplidos (lactato, cultivos, antibiótico, fluidos, vasopresor).
  - Forma de identificar los casos para el indicador: criterios clínicos o códigos.
  - Algoritmo de alerta: sensibilidad, especificidad y alertas por día.
- **Salidas:**
  - Urgencia del antibiótico según shock y NEWS2 (Rhee 2026), con el aviso de que los datos son observacionales.
  - Cumplimiento del paquete del servicio, con la advertencia de que cumplir no garantiza un mejor desenlace (SEP-1).
  - Simulación del "efecto codificación": cómo cambia la mortalidad aparente si se suman casos leves (Rhee 2017).
  - Carga de alertas: verdaderos positivos, falsos positivos y alertas por cada sepsis detectada (Epic Sepsis Model).

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** Sobre la carga global de la sepsis (GBD 2017), señalá lo CORRECTO:
- A) Causa menos del 2% de las muertes en el mundo.
- B) Su incidencia y mortalidad ajustadas por edad aumentaron desde 1990.
- C) Se estimaron 48,9 millones de casos y 11 millones de muertes, casi el 20% de las muertes del mundo, con la mayor carga en África subsahariana y Asia.
- D) La carga más alta está en Europa occidental.
- E) El estudio solo incluyó pacientes de UTI.

**Pregunta 2.** En el estudio argentino de Estenssoro 2019, ¿qué explica mejor la diferencia de mortalidad entre hospitales públicos y privados?
- A) El tratamiento en la UTI fue peor en los hospitales públicos.
- B) Los pacientes de los hospitales públicos eran mayores.
- C) No hubo diferencia de mortalidad.
- D) Los públicos tenían más pacientes con infecciones virales.
- E) Llegaban con más horas de síntomas, más shock y más multirresistentes; el tratamiento en la UTI no difirió, y la mortalidad a 28 días fue 42% frente a 24%.

**Pregunta 3.** Sobre el tiempo al antibiótico, ¿cuál es la lectura más correcta de la evidencia reciente?
- A) Cada hora de demora se asocia a más mortalidad en el shock y con NEWS2 alto, pero la asociación es débil o nula en la sepsis sin shock y depende de cómo se analicen los datos.
- B) La demora no tiene ninguna asociación con la mortalidad, ni siquiera en el shock.
- C) Cada hora de demora aumenta la mortalidad un 7,6% en todos los pacientes con sospecha de infección.
- D) Los fluidos rápidos se asociaron a menor mortalidad, pero no el antibiótico.
- E) Con NEWS2 menor de 7, cada hora de demora triplica la mortalidad.

**Pregunta 4.** Sobre la implementación obligatoria del SEP-1 en EE. UU., señalá lo CORRECTO:
- A) Redujo la mortalidad a la mitad.
- B) Disminuyó el uso de antibióticos de amplio espectro.
- C) Aumentó la medición de lactato sin cambiar la mortalidad, y en otro estudio se asoció a un 24% más de uso de antibióticos.
- D) Eliminó la necesidad de hemocultivos.
- E) No cambió ningún proceso de atención.

**Pregunta 5.** Sobre **PRISM**, ¿qué es CORRECTO?
- A) La EGDT redujo la mortalidad a 90 días en los pacientes con lactato alto.
- B) La EGDT tuvo la misma mortalidad a 90 días que el cuidado habitual (24,9% vs 25,4%), con más días de UTI, más soporte cardiovascular y más costos.
- C) Se basó en un solo ensayo unicéntrico.
- D) El cuidado habitual tuvo más mortalidad que la EGDT.
- E) Mostró beneficio en los hospitales que usaban menos vasopresores.

**Pregunta 6.** El hospital quiere comprar un algoritmo de alerta de sepsis. ¿Qué enseña la validación externa del Epic Sepsis Model?
- A) El AUC informado por el fabricante siempre se reproduce en otros hospitales.
- B) Detectó el 95% de las sepsis antes que el equipo.
- C) Redujo la mortalidad en un ECA multicéntrico.
- D) En la validación externa tuvo un AUC de 0,63, no detectó el 67% de las sepsis y aportó poco sobre la práctica habitual: hay que exigir validación externa y medir la carga de alertas.
- E) No generó alertas falsas.

**Pregunta 7.** Sobre la prevención de infecciones en la UTI, ¿cuál es la afirmación CORRECTA?
- A) Una intervención con lista de verificación para catéteres centrales redujo un 66% las bacteriemias, de forma sostenida a 18 meses, en 103 UTI.
- B) El baño diario con clorhexidina redujo a la mitad las infecciones intrahospitalarias en CLEAN-IT.
- C) Las bacteriemias por catéter no se pueden prevenir.
- D) CLEAN-IT mostró más cultivos multirresistentes con clorhexidina.
- E) La intervención de Pronovost necesitó tecnología costosa.

**Pregunta 8.** Paciente de 84 años con demencia avanzada, en shock séptico de foco respiratorio, con falla renal y hepática. La familia pide "hacer todo". Según la evidencia sobre ensayos de tiempo limitado, ¿qué es lo más adecuado?
- A) Negar el ingreso a la UTI por la edad.
- B) Indicar todo el soporte sin reevaluación pactada, porque la familia lo pidió.
- C) Proponer en una reunión formal un período acotado de tratamiento con metas claras y una reevaluación pactada: mejoró la comunicación y redujo los procedimientos no beneficiosos, sin cambiar la mortalidad.
- D) Evitar hablar del pronóstico para no angustiar a la familia.
- E) Esperar a que el paciente mejore para hablar de los objetivos de cuidado.

<details>
<summary>Ver respuestas y justificación (Preguntas 1–8)</summary>

1. **Respuesta correcta: C.** *Justificación:* Rudd 2020 (`PMID 31954465`): 19,7% de las muertes del mundo; la incidencia ajustada bajó un 37% y la mortalidad un 52,8% desde 1990.
2. **Respuesta correcta: E.** *Justificación:* Estenssoro 2019 (`PMID 31288865`): los pacientes de los públicos eran más jóvenes (56 vs 64 años), con 48 vs 24 h de síntomas y shock en el 47% vs 35%.
3. **Respuesta correcta: A.** *Justificación:* Pak 2023 (`PMID 37531612`) y Rhee 2026 (`PMID 42556377`). El 7,6% por hora de Kumar 2006 es en el shock séptico, no en toda infección (`PMID 16625125`). En Seymour 2017, el bolo de fluidos no se asoció a la mortalidad (`PMID 28528569`).
4. **Respuesta correcta: C.** *Justificación:* Rhee 2021 (`PMID 34928358`): lactato 55% → 77%, mortalidad 20,3% vs 20,4%. Anderson 2022 (`PMID 34739080`): +24,4% de días de antibiótico.
5. **Respuesta correcta: B.** *Justificación:* PRISM (`PMID 28320242`): 3.723 pacientes de tres ECA, sin beneficio en ningún subgrupo.
6. **Respuesta correcta: D.** *Justificación:* Wong 2021 (`PMID 34152373`). TREWS (`PMID 35864252`) y COMPOSER (`PMID 38263386`) son observacionales o cuasiexperimentales.
7. **Respuesta correcta: A.** *Justificación:* Pronovost 2006 (`PMID 17192537`). CLEAN-IT (`PMID 41732706`): sin reducción global, con menos cultivos multirresistentes.
8. **Respuesta correcta: C.** *Justificación:* Chang 2021 (`PMID 33843946`): reuniones con la familia 60% → 96%, estadía en UTI 8,7 → 7,4 días, mortalidad 58% en ambos períodos. La SSC pide hablar de objetivos de cuidado temprano.

</details>

### 5.2 Casos "Detectá el error de guardia" (3 casos)
1. **Caso 1 — "El indicador mejoró, la sepsis está controlada":** La dirección del hospital celebra que la mortalidad de sepsis bajó del 30% al 18% en dos años, desde que se empezó a codificar "sepsis" en todo paciente con infección y SIRS. Nadie revisó si cambiaron los pacientes.
   - *Error oculto:* es el efecto codificación. En Rhee 2017, con criterios clínicos la incidencia fue estable y la caída de la mortalidad era menor que con los códigos. Si se suman casos leves, la mortalidad "baja" sin que cambie la atención. Hay que medir con criterios clínicos estables (Sepsis-3) y revisar la gravedad de los casos incluidos.
2. **Caso 2 — "Antibiótico de amplio espectro en 1 hora a todo el que tenga fiebre":** Para cumplir la meta, la guardia indica meropenem más vancomicina en la primera hora a todo paciente con fiebre y taquicardia, aunque esté estable, con NEWS2 bajo y sin foco claro.
   - *Error oculto:* la urgencia horaria está demostrada en el shock y con NEWS2 alto (Rhee 2026; Pak 2023), no en la sospecha de infección sin gravedad, donde hay margen para evaluar. El SEP-1 mostró que forzar la métrica aumenta el uso de antibióticos (+24%) sin cambiar la mortalidad. El costo es la resistencia ([M16](#module-M16)) y el daño por toxicidad.
3. **Caso 3 — "Compramos el algoritmo, el folleto dice AUC 0,92":** El hospital instala un algoritmo comercial de alerta de sepsis sin validarlo con datos propios. A los dos meses, enfermería silencia las alertas porque suenan todo el día.
   - *Error oculto:* el modelo comercial más usado tuvo un AUC de 0,63 en la validación externa y no detectó el 67% de las sepsis (Wong 2021). Antes de instalarlo hay que validarlo con datos propios, medir cuántas alertas genera por cada sepsis real y definir quién actúa con cada alerta: en TREWS, el beneficio se vio cuando un médico confirmaba la alerta dentro de las 3 h.

### 5.3 Flashcards de repaso rápido (10 tarjetas)
1. **¿Cuántas muertes por sepsis hay en el mundo por año (GBD 2017)?** → 11 millones, el 19,7% de todas las muertes (`PMID 31954465`).
2. **¿Qué mostró el estudio argentino de 2019 sobre público y privado?** → Mortalidad a 28 días de 42% frente a 24%, con el mismo tratamiento en la UTI pero más síntomas previos y más shock al ingreso (`PMID 31288865`).
3. **¿Qué mostró SPREAD en Brasil?** → Mortalidad del 55,7% en la UTI, asociada a la falta de recursos y al tratamiento inadecuado (`PMID 28826588`).
4. **¿Por qué no hay que medir la sepsis solo con códigos?** → Porque la incidencia codificada subió un 10% por año mientras la clínica fue estable, y la mortalidad parece bajar sin que cambie la atención (`PMID 28903154`).
5. **¿Qué mostró Kumar 2006?** → En el shock séptico, cada hora de demora del antibiótico eficaz se asoció a OR 1,12 de mortalidad (`PMID 16625125`).
6. **¿En quién pesa más cada hora de demora del antibiótico?** → En el shock (OR 1,15 por hora) y con NEWS2 ampliado de 7 o más (OR 1,07); no con NEWS2 menor de 7 (Rhee 2026, `PMID 42556377`).
7. **¿Qué pasó con el SEP-1 obligatorio?** → Más lactatos y más antibióticos, sin cambio de mortalidad (`PMID 34928358`, `PMID 34739080`).
8. **¿Qué mostró PRISM?** → La EGDT no superó al cuidado habitual (24,9% vs 25,4%) y costó más (`PMID 28320242`).
9. **¿Cuánto bajó las bacteriemias por catéter la intervención de Pronovost?** → Un 66%, sostenido a 18 meses (`PMID 17192537`).
10. **¿Qué es un ensayo de tiempo limitado y qué logró?** → Un período pactado de tratamiento con metas y reevaluación: más reuniones con la familia, menos procedimientos no beneficiosos y la misma mortalidad (`PMID 33843946`).

---

## 6. Referencias Verificadas y Registro de Correcciones

> Todas verificadas en PubMed el 2026-11-26 (título, revista, año y PMID), leídas a nivel de abstract.

**Epidemiología y carga**
1. **Rudd KE, et al.** Global sepsis incidence and mortality 1990–2017 (GBD). *Lancet*. 2020. `PMID 31954465`.
2. **Reinhart K, et al.** Recognizing sepsis as a global health priority: a WHO resolution. *N Engl J Med*. 2017. `PMID 28658587`.
3. **Estenssoro E, et al.** Health inequities in the diagnosis and outcome of sepsis in Argentina. *Crit Care*. 2019. `PMID 31288865`.
4. **Machado FR, et al.** SPREAD: epidemiology of sepsis in Brazilian ICUs. *Lancet Infect Dis*. 2017. `PMID 28826588`.
5. **Rhee C, et al.** Incidence and trends of sepsis in US hospitals: clinical vs claims data. *JAMA*. 2017. `PMID 28903154`.
6. **Paoli CJ, et al.** Epidemiology and costs of sepsis in the United States. *Crit Care Med*. 2018. `PMID 30048332`.

**Tiempo, paquetes y protocolos**
7. **Kumar A, et al.** Duration of hypotension before effective antimicrobial therapy in septic shock. *Crit Care Med*. 2006. `PMID 16625125`.
8. **Seymour CW, et al.** Time to treatment and mortality during mandated emergency care for sepsis. *N Engl J Med*. 2017. `PMID 28528569`.
9. **Pak TR, et al.** Risk of misleading conclusions in observational studies of time-to-antibiotics. *Clin Infect Dis*. 2023. `PMID 37531612`.
10. **Rhee C, et al.** NEWS2 vs shock status to stratify antibiotic urgency. *Lancet Respir Med*. 2026. `PMID 42556377`.
11. **Rhee C, et al.** SEP-1 implementation and outcomes in suspected sepsis. *JAMA Netw Open*. 2021. `PMID 34928358`.
12. **Townsend SR, et al.** Compliance with SEP-1 and mortality among Medicare beneficiaries. *Chest*. 2022. `PMID 34364867`.
13. **Anderson DJ, et al.** SEP-1 implementation and antibacterial utilization. *Clin Infect Dis*. 2022. `PMID 34739080`.
14. **PRISM Investigators.** Early goal-directed therapy for septic shock: patient-level meta-analysis. *N Engl J Med*. 2017. `PMID 28320242`.
15. **Evans L, et al.** Surviving Sepsis Campaign 2021. *Intensive Care Med*. 2021. `PMID 34599691`.

**Prevención**
16. **Pronovost P, et al.** An intervention to decrease catheter-related bloodstream infections in the ICU. *N Engl J Med*. 2006. `PMID 17192537`.
17. **Tomazini BM, et al.** CLEAN-IT: daily chlorhexidine bathing in critically ill patients. *Lancet Reg Health Am*. 2026. `PMID 41732706`.

**Inteligencia artificial**
18. **Wong A, et al.** External validation of the Epic Sepsis Model. *JAMA Intern Med*. 2021. `PMID 34152373`.
19. **Adams R, et al.** TREWS: patient outcomes after implementation. *Nat Med*. 2022. `PMID 35864252`.
20. **Boussina A, et al.** COMPOSER: deep learning sepsis prediction, quality of care and survival. *NPJ Digit Med*. 2024. `PMID 38263386`.

**Ética y fin de vida**
21. **Chang DW, et al.** Time-limited trials in critically ill patients with advanced illnesses. *JAMA Intern Med*. 2021. `PMID 33843946`.

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- Módulo nuevo (2026-11-26); todavía sin ítems de auditoría. Pendiente: verificar en el texto completo las recomendaciones de la SSC 2021 sobre el antibiótico en la sepsis posible sin shock (3 h) y sobre los objetivos de cuidado (72 h), que acá se citan sin verificar en el abstract. Buscar datos argentinos más recientes que Estenssoro 2019 y una guía sobre cuidados paliativos en sepsis.
