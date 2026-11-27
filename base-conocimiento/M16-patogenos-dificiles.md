---
id: M16
titulo: "Patógenos Difíciles: Multirresistentes, Hongos y Virus"
subtitulo: "BLEE, AmpC, KPC y metalo-betalactamasas en la Argentina post-COVID, Acinetobacter y Pseudomonas difíciles, SAMR, candidemia, aspergilosis, gripe, COVID y reactivaciones virales: qué droga para qué enzima y qué ensayos lo sostienen"
ultima_actualizacion: 2026-11-26
piloto_fase2: true
fuentes_nlm:
  - "PubMed (abstracts verificados con PMID, 2026-11-26)"
fuentes_vault:
  - "Pendiente de incorporar: Interaccion Midazolam-Fluconazol en UCI (la perla de fluconazol en CKRT ya está en M09)"
palabras_clave:
  - BLEE
  - AmpC
  - KPC
  - NDM
  - metalo-betalactamasa
  - RECAPT-AR
  - MERINO
  - ceftazidima-avibactam
  - aztreonam-avibactam
  - cefiderocol
  - sulbactam-durlobactam
  - Acinetobacter
  - SAMR
  - CAMERA2
  - candidemia
  - EMPIRICUS
  - aspergilosis asociada a influenza
  - oseltamivir
  - reactivación de CMV
---

# M16 — Patógenos Difíciles: Multirresistentes, Hongos y Virus

> Módulo armado el 2026-11-26 a partir de abstracts de PubMed, cada uno con su PMID. Los pocos datos que salen del texto completo están marcados. Las dosis y los puntos de corte locales (ANLIS Malbrán) están en [M09](#module-M09): este módulo no los repite. Ante una infección por un germen multirresistente, la consulta con Infectología sigue siendo la regla.

---

## 1. Capa Base — Desde cero (Conceptos, Criterios y Fundamentos)

### 1.1 Qué hace "difícil" a un patógeno
Un germen es difícil por una de tres razones, o por varias:

1. **Resistencia:** las drogas habituales no le hacen nada. Se habla de multirresistente (MDR), extremadamente resistente (XDR) y, en *Pseudomonas*, de **resistencia difícil de tratar (DTR)**: resistente a todos los betalactámicos de primera línea y a las fluoroquinolonas.
2. **Alternativas tóxicas o poco probadas:** colistina (riñón, neurotoxicidad), aminoglucósidos, drogas nuevas con ensayos chicos.
3. **El huésped:** inmunosuprimido, con catéteres, con días de antibióticos de amplio espectro o internado mucho tiempo en la UTI. Es el terreno de los hongos y de las reactivaciones virales.

En la UTI, la infección **adquirida en la UTI** se asoció a más mortalidad que la de la comunidad (OR 1,32), y también la infección por enterococo resistente a vancomicina (OR 2,41), *Klebsiella* resistente a cefalosporinas de tercera generación y carbapenémicos (OR 1,29) y *Acinetobacter* resistente a carbapenémicos (OR 1,40) (EPIC III, 1.150 UTI, `PMID 32207816`).

### 1.2 Las enzimas: el antibiótico se elige por el mecanismo
La pregunta útil frente a un gramnegativo resistente no es "¿a qué es resistente?", sino **"¿qué enzima tiene?"**. La clasificación de Ambler ordena las betalactamasas en cuatro clases:

| Clase | Enzimas típicas | Gérmenes | Qué sirve (si el antibiograma lo confirma) |
| :--- | :--- | :--- | :--- |
| **A — BLEE** | CTX-M | *E. coli*, *K. pneumoniae* | **Carbapenémico** (MERINO, ver 2.1) |
| **A — carbapenemasa** | **KPC** | *K. pneumoniae* | Ceftazidima-avibactam, meropenem-vaborbactam, imipenem-relebactam |
| **B — metalo-betalactamasas (MBL)** | **NDM**, VIM, IMP | *K. pneumoniae*, *Enterobacter* | **Aztreonam-avibactam** o ceftazidima-avibactam **+ aztreonam**; cefiderocol. El avibactam solo **no** inhibe las MBL |
| **C — AmpC** | AmpC cromosómica o plasmídica | *Enterobacter*, *C. freundii*, *Serratia*, *Morganella* | Cefepime o carbapenémico; cuidado con la piperacilina-tazobactam (MERINO-2) |
| **D — OXA** | OXA-48 y su variante **OXA-163**; OXA-23 en *Acinetobacter* | *K. pneumoniae*; *A. baumannii* | Ceftazidima-avibactam para OXA-48; *Acinetobacter*: ver 2.4 |

Las MBL hidrolizan casi todos los betalactámicos **salvo el aztreonam**, pero esos gérmenes casi siempre traen además una BLEE o una AmpC que destruye el aztreonam. Por eso se combina aztreonam con avibactam: el avibactam protege al aztreonam de las otras enzimas.

### 1.3 La Argentina después de la pandemia: NDM y KPC en partes iguales
El estudio nacional **RECAPT-AR** (laboratorio nacional de referencia, 821 enterobacterias productoras de carbapenemasas, 2021) cambió el mapa (Echegorry 2024, `PMID 39766529`):
- **MBL 42,0%** y **KPC 39,8%**: la NDM ya circula al mismo nivel que la KPC. Le siguen la **OXA-163** (7,4%) y las **combinaciones** de enzimas (8,3%), sobre todo **NDM + KPC** (3,4%).
- *K. pneumoniae* fue el 76% de los aislamientos.
- Sensibilidad: ceftazidima-avibactam 92% e imipenem-relebactam 98% **frente a las serino-carbapenemasas** (KPC, OXA); aztreonam-avibactam **96–98% frente a todas las clases**. Colistina, entre 27% y 78% según la enzima; amikacina, entre 17% y 81%.

**La consecuencia práctica:** en la Argentina, casi la mitad de las enterobacterias resistentes a carbapenémicos tiene una MBL, contra la que la ceftazidima-avibactam sola no sirve. Saber qué carbapenemasa tiene el germen (test rápido de carbapenemasas o PCR, cuando el laboratorio lo ofrece) cambia la droga. Reglas locales de Malbrán en [M09](#module-M09).

### 1.4 Hongos y virus: el huésped manda
- **Candida:** el riesgo crece con catéteres, nutrición parenteral, cirugía abdominal, antibióticos de amplio espectro y colonización múltiple. La guía global 2025 (ECMM, ISHAM y ASM) advierte sobre ***Candida auris*** (hoy *Candidozyma auris*) y ***C. parapsilosis* resistente a fluconazol** como amenazas emergentes (Cornely 2025, `PMID 39956121`). El diagnóstico (beta-D-glucano, CandiSep) está en [M14](#module-M14).
- **Aspergillus:** ya no es solo del neutropénico. La gripe grave y la COVID-19 son factores de riesgo en pacientes sin inmunosupresión clásica (ver 2.9).
- **Virus:** la gripe y la COVID-19 son causas de sepsis viral, y en el paciente ventilado mucho tiempo reaparecen los herpesvirus (herpes simple y citomegalovirus). Reactivarse no es lo mismo que causar daño (ver 2.11).

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 BLEE y AmpC: el carbapenémico todavía tiene su lugar
- **MERINO** (*JAMA* 2018, 26 centros de 9 países, $n = 379$, bacteriemia por *E. coli* o *Klebsiella* resistente a ceftriaxona pero sensible a piperacilina-tazobactam): la mortalidad a 30 días fue **12,3% con piperacilina-tazobactam frente a 3,7% con meropenem**. No se demostró no inferioridad. `PMID 30208454`
- **MERINO-2** (piloto, $n = 72$, bacteriemia por productores de AmpC): el compuesto fue 29% vs 21%, sin diferencia significativa, pero con **más fracaso microbiológico** con piperacilina-tazobactam (13% vs 0%) y menos recaídas (0% vs 9%). Es un piloto: genera hipótesis. `PMID 34395716`

En la bacteriemia por BLEE, la droga definitiva es un carbapenémico, aunque el antibiograma diga "sensible" a piperacilina-tazobactam.

### 2.2 KPC: la ceftazidima-avibactam desplazó a la colistina
- **CRACKLE (van Duin 2018, cohorte, $n = 137$, enterobacterias resistentes a carbapenémicos):** la mortalidad hospitalaria a 30 días ajustada fue **9% con ceftazidima-avibactam frente a 32% con colistina**. Es observacional y los autores piden confirmación en un ECA. `PMID 29020404`
- **Guías:** la guía de la IDSA 2024 (`PMID 39108079`) y la de ESCMID 2022, avalada por ESICM (`PMID 34923128`), ordenan el tratamiento por germen y mecanismo (BLEE, AmpC, carbapenemasas, *Pseudomonas* DTR, *Acinetobacter*, *Stenotrophomonas*). La IDSA aclara que su texto se basa en la epidemiología de EE. UU., que no es la nuestra.

### 2.3 MBL (NDM): avibactam para proteger al aztreonam
- **Falcone 2021 (cohorte prospectiva, 102 bacteriemias por MBL, 82 NDM y 20 VIM):** la mortalidad a 30 días fue **19,2% con ceftazidima-avibactam + aztreonam frente a 44% con otros antibióticos activos**, con HR ajustado de 0,37 y menos fracaso clínico (HR 0,30). `PMID 32427286`
- **REVISIT** (*Lancet Infect Dis* 2025, $n = 422$, infección intraabdominal complicada y neumonía intrahospitalaria o asociada a la ventilación): aztreonam-avibactam frente a meropenem con o sin colistina. La curación fue 68,4% vs 65,7%, y la mortalidad a 28 días, 4% vs 7%. Fue un estudio **descriptivo, sin prueba de hipótesis**, y solo el 24% de los aislamientos estudiados tenía carbapenemasas. `PMID 39389071`
- **Cefepime-taniborbactam — CERTAIN-1** (*N Engl J Med* 2024, $n = 661$, infección urinaria complicada y pielonefritis): fue **superior** a meropenem en el éxito compuesto (70,6% vs 58,0%). Es una droga nueva con actividad contra MBL, probada en infección urinaria, no en el shock séptico. `PMID 38354140`

El aztreonam-avibactam coformulado y la mezcla de ceftazidima-avibactam con aztreonam **no son intercambiables en el laboratorio**: Malbrán prohíbe extrapolar los puntos de corte de una a la otra ([M09](#module-M09)).

### 2.4 *Acinetobacter baumannii* resistente a carbapenémicos (CRAB)
- **Sumar meropenem a la colistina no sirve:**
  - **AIDA** (*Lancet Infect Dis* 2018, $n = 406$, 77% *A. baumannii*): fracaso clínico a 14 días de **79% con colistina sola frente a 73% con colistina + meropenem**, sin diferencia (RR 0,93). La combinación dio más diarrea. `PMID 29456043`
  - **OVERCOME** (*NEJM Evidence* 2023, $n = 423$, 78% *A. baumannii*, 70% neumonía): mortalidad a 28 días de **43% vs 37%** (p = 0,17), sin diferencia en fracaso, cura microbiológica ni toxicidad renal (52% vs 49%). `PMID 37538951`
- **Sulbactam-durlobactam — ATTACK** (*Lancet Infect Dis* 2023, $n = 181$, sobre todo neumonía): frente a colistina, ambas con imipenem de base, la mortalidad a 28 días fue **19% vs 32%** (cumplió no inferioridad) y la **nefrotoxicidad, 13% vs 38%**. `PMID 37182534`
- **Cefiderocol — CREDIBLE-CR** (*Lancet Infect Dis* 2021, $n = 152$): curación clínica similar a la mejor terapia disponible, pero **más muertes con cefiderocol (34% vs 18%)**, sobre todo en los pacientes con *Acinetobacter*. Fue descriptivo, sin potencia para comparar. `PMID 33058795` Como terapia empírica en bacteriemia gramnegativa intrahospitalaria, GAME CHANGER no mostró ventaja ([M09](#module-M09), `PMID 41067237`).

En la Argentina, el sulbactam en dosis alta (9 g/día) es la base del tratamiento del CRAB según Malbrán ([M09](#module-M09)). El sulbactam-durlobactam es la droga con mejor ensayo, pero su disponibilidad local es limitada.

### 2.5 *Pseudomonas*: dosis alta y drogas nuevas
- **ASPECT-NP** (*Lancet Infect Dis* 2019, $n = 726$, neumonía intrahospitalaria, 71% asociada a la ventilación, 92% en UTI): **ceftolozano-tazobactam en dosis alta (3 g cada 8 h)** fue no inferior a meropenem en mortalidad a 28 días (**24,0% vs 25,3%**) y en curación clínica (54% vs 53%). `PMID 31563344`
- En la *Pseudomonas* DTR, la IDSA 2024 prefiere ceftolozano-tazobactam, ceftazidima-avibactam o imipenem-relebactam según la sensibilidad (`PMID 39108079`, recomendación del texto completo).

### 2.6 *Staphylococcus aureus*: sumar no siempre suma
- **CAMERA2** (*JAMA* 2020, $n = 352$, bacteriemia por SAMR): agregar un betalactámico antiestafilocócico a la vancomicina o la daptomicina **no mejoró el compuesto** (35% vs 39%). Bajó la bacteriemia persistente al día 5 (11% vs 20%), pero la **lesión renal aguda fue 23% vs 6%** y el ensayo se cortó por seguridad. `PMID 32044943`
- **ARREST** (*Lancet* 2018, $n = 758$, bacteriemia por *S. aureus*): la rifampicina adyuvante no cambió fracaso, recurrencia ni muerte (17% vs 18%), y sumó efectos adversos e interacciones (6% vs 2%). `PMID 29249276`
- La bacteriemia persistente por *S. aureus* obliga a buscar un foco no controlado ([M14](#module-M14)).

### 2.7 ¿Cuándo cubrir multirresistentes de entrada?
La SSC 2021 (`PMID 34599691`, recomendaciones del texto completo) pide cubrir **SAMR** y usar **dos antibióticos contra gramnegativos** solo cuando el **riesgo de multirresistencia es alto**: colonización o infección previa conocida, antibióticos recientes, internación prolongada o alta prevalencia local. Con riesgo bajo, recomienda **no** duplicar. En la práctica, el hisopado de vigilancia y la epidemiología de la propia UTI son los mejores predictores. Desescalar a las 48–72 h con el cultivo es parte del mismo acto ([M09](#module-M09)).

### 2.8 Candidemia: tratar la que está, no la que podría estar
- **EMPIRICUS** (*JAMA* 2016, $n = 260$, sepsis adquirida en la UTI con colonización por *Candida* en varios sitios y falla multiorgánica, sin neutropenia): la micafungina empírica **no aumentó la sobrevida libre de infección fúngica** a 28 días (68% vs 60,2%; HR 1,35; 0,87–2,08), ni siquiera con beta-D-glucano mayor de 80 pg/mL. Redujo las infecciones fúngicas nuevas (3% vs 12%). `PMID 27706483`
- **ReSTORE** (*Lancet* 2023, $n = 199$): **rezafungina una vez por semana** fue no inferior a la caspofungina diaria en curación global (59% vs 61%) y en mortalidad a 30 días (24% vs 21%). Es una opción para completar el tratamiento sin vía central. `PMID 36442484`
- **Guías:** la IDSA 2016 (`PMID 26679628`) y la guía global 2025 (`PMID 39956121`) coinciden en el esquema clásico: **equinocandina** como tratamiento inicial en el paciente crítico, **retirar el catéter** venoso central cuando sea posible, fondo de ojo y hemocultivos de control, con 14 días desde el primer hemocultivo negativo (texto completo de IDSA 2016). La guía 2025 suma *C. auris* y la *C. parapsilosis* resistente a fluconazol.
- El fluconazol en CKRT necesita dosis plena (800 mg/día): [M09](#module-M09).

### 2.9 Aspergilosis en la UTI: gripe, COVID y mortalidad alta
- **Aspergilosis asociada a influenza (Schauwvlieghe 2018, 7 temporadas, Países Bajos y Bélgica):** apareció en el **19%** de los pacientes con gripe internados en UTI, con una mediana de 3 días desde el ingreso. Ocurrió en el 14% de los pacientes sin inmunosupresión y en el 5% de los controles con neumonía sin gripe. La gripe fue un factor de riesgo independiente (OR 5,19), y la mortalidad a 90 días fue **51% vs 28%**. `PMID 30076119`
- **Mortalidad (metaanálisis de datos individuales, 2026, 209 estudios):** mortalidad en la UTI del **57,1%** y, a 4 semanas, del 42,9% en los pacientes internados en UTI, donde predominó la COVID-19 (Kimura 2026, `PMID 43057280`).

En el paciente con gripe grave que empeora en los primeros días de UTI, hay que pensar en *Aspergillus* aunque no sea inmunosuprimido.

### 2.10 Sepsis viral: gripe y COVID-19
- **Gripe — inhibidores de la neuraminidasa (Muthuri 2014, datos individuales de 29.234 pacientes internados, pandemia H1N1):** tratar se asoció a menor mortalidad (OR 0,81), y tratar **dentro de las 48 h** de los síntomas, más todavía (OR 0,48 frente a tratar tarde). Cada día de demora hasta el día 5 sumó riesgo (HR 1,23 por día). En niños la asociación fue menor. Es observacional. `PMID 24815805`
- **Gripe — FLAGSTONE** (*Lancet Infect Dis* 2022, $n = 366$, gripe grave internada): sumar **baloxavir** al oseltamivir no acortó el tiempo a la mejoría clínica (97,5 vs 100,2 h). La combinación de antivirales no está indicada de rutina. `PMID 35085510`
- **COVID-19 — RECOVERY** (*N Engl J Med* 2021): la dexametasona bajó la mortalidad a 28 días en los **ventilados (29,3% vs 41,4%)** y con oxígeno (23,3% vs 26,2%), pero **no** en los que no necesitaban soporte respiratorio (17,8% vs 14,0%). `PMID 32678530`
- **COVID-19 — REMAP-CAP, antagonistas de IL-6** (*N Engl J Med* 2021): en críticos con soporte orgánico, tocilizumab y sarilumab sumaron días libres de soporte (10 y 11 frente a 0) y mejoraron la sobrevida a 90 días (HR 1,61). `PMID 33631065`

La lección de la COVID-19 para la sepsis: el mismo fármaco (corticoide) ayuda o daña según la **gravedad** y el **momento**. Corticoides en la neumonía bacteriana grave en [M15](#module-M15).

### 2.11 Reactivaciones virales: estar no es lo mismo que dañar
En el paciente ventilado mucho tiempo, el citomegalovirus (CMV) y el herpes simple (HSV) se reactivan con frecuencia. Tres ensayos probaron tratarlos:
- **Ganciclovir profiláctico (Limaye 2017, *JAMA*, $n = 160$, críticos seropositivos para CMV):** bajó la reactivación (12% vs 39%), pero **no cambió la IL-6** (el primario) ni la mortalidad (12% vs 15%). `PMID 28829877`
- **Ganciclovir anticipado (Papazian 2021, $n = 76$, ventilados $\ge 96$ h con CMV en sangre):** se cortó por futilidad; la mortalidad a 60 días fue 41% vs 43%. `PMID 33570708`
- **Aciclovir (Luyt 2020, *JAMA Intern Med*, $n = 238$, ventilados $\ge 96$ h con HSV en la orofaringe):** no aumentó los días libres de ventilador (35 vs 36). La mortalidad a 60 días fue 22% vs 33% (p = 0,06), una señal que no alcanza significación. `PMID 31841577`

Hoy, ni el CMV ni el HSV detectados en el ventilado sin inmunosupresión justifican un tratamiento antiviral de rutina.

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "Si el antibiograma dice sensible a piperacilina-tazobactam, sirve para la bacteriemia por BLEE."**
   - **Realidad:** en MERINO, la mortalidad fue 12,3% con piperacilina-tazobactam frente a 3,7% con meropenem (`PMID 30208454`).
2. **Mito: "Para una *Klebsiella* resistente a carbapenémicos, ceftazidima-avibactam alcanza siempre."**
   - **Realidad:** sirve para KPC y OXA-48, pero **no para las MBL** (NDM), que en la Argentina son el 42% (RECAPT-AR, `PMID 39766529`). Hay que saber qué carbapenemasa es.
3. **Mito: "Colistina más meropenem es mejor que colistina sola para *Acinetobacter*."**
   - **Realidad:** AIDA (`PMID 29456043`) y OVERCOME (`PMID 37538951`) no encontraron diferencias.
4. **Mito: "El cefiderocol es la solución para cualquier gramnegativo resistente."**
   - **Realidad:** en CREDIBLE-CR hubo más muertes con cefiderocol, sobre todo con *Acinetobacter* (34% vs 18%; `PMID 33058795`), y como terapia empírica no mostró ventaja (GAME CHANGER, `PMID 41067237`).
5. **Mito: "En la bacteriemia por SAMR, sumar cefazolina a la vancomicina potencia el efecto."**
   - **Realidad:** en CAMERA2 no mejoró el desenlace y la lesión renal aguda pasó de 6% a 23% (`PMID 32044943`).
6. **Mito: "Paciente séptico colonizado por *Candida*: equinocandina empírica."**
   - **Realidad:** en EMPIRICUS, la micafungina empírica no mejoró la sobrevida libre de infección fúngica (`PMID 27706483`).
7. **Mito: "Si no es neutropénico, no puede tener aspergilosis."**
   - **Realidad:** la gripe grave se asoció a aspergilosis invasiva en el 14% de los pacientes sin inmunosupresión, con OR 5,19 (`PMID 30076119`).
8. **Mito: "CMV positivo en sangre del ventilado: ganciclovir."**
   - **Realidad:** ni la profilaxis (`PMID 28829877`) ni el tratamiento anticipado (`PMID 33570708`) mejoraron los desenlaces en críticos sin inmunosupresión.

---

## 4. Especificación del Simulador / Atlas Interactivo

> **Implementado el 2026-11-26.** Esta especificación ya corre en la pestaña «Simulador en vivo» del módulo. Los simuladores ejecutables están en M03, M05, M09, M14, M15, M16 y M17.

- **Nombre UI:** *La llave y la cerradura: enzima → antibiótico*
- **Controles:**
  - Germen: *E. coli* / *K. pneumoniae* / *Enterobacter* / *P. aeruginosa* / *A. baumannii* / *S. aureus* / *Candida*.
  - Mecanismo: BLEE / AmpC / KPC / NDM / OXA-48-163 / KPC + NDM / DTR / SAMR / *C. auris*.
  - Foco: bacteriemia / neumonía / urinario / abdominal.
  - Función renal: normal / LRA / CKRT (enlaza con el motor PK/PD de M09).
- **Salidas:**
  - Qué drogas cubren ese mecanismo (tabla de la sección 1.2) y cuáles **no** (por ejemplo, "ceftazidima-avibactam sola no cubre NDM").
  - El ensayo que sostiene cada opción, con su resultado en una línea (MERINO, CRACKLE, Falcone, ATTACK, AIDA, CAMERA2).
  - Advertencia de toxicidad (colistina: riñón; combinación con betalactámico en SAMR: riñón).
  - Recordatorio local: reglas de Malbrán en M09 y consulta con Infectología.
- **SVG:** una betalactamasa como cerradura y cada inhibidor (avibactam, vaborbactam, relebactam, durlobactam, taniborbactam) como llave, con las clases de Ambler que abre cada una.

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** Bacteriemia por *E. coli* productora de BLEE, sensible a piperacilina-tazobactam y a meropenem, en un paciente que ya está estable. ¿Cuál es el tratamiento definitivo con mejor evidencia?
- A) Piperacilina-tazobactam, porque el antibiograma la informa sensible.
- B) Ceftriaxona en dosis alta por infusión prolongada.
- C) Colistina, para guardar los carbapenémicos.
- D) Meropenem: en MERINO, la piperacilina-tazobactam tuvo 12,3% de mortalidad frente a 3,7%.
- E) Ceftazidima-avibactam como primera opción.

**Pregunta 2.** *K. pneumoniae* resistente a carbapenémicos en una UTI argentina, con test de carbapenemasas positivo para **NDM**. ¿Qué opción es activa contra este mecanismo?
- A) Aztreonam-avibactam, o ceftazidima-avibactam combinada con aztreonam.
- B) Ceftazidima-avibactam sola, porque el avibactam inhibe todas las carbapenemasas.
- C) Meropenem-vaborbactam, que fue diseñado para las metalo-betalactamasas.
- D) Imipenem-relebactam, activo frente a las clases A, B, C y D.
- E) Meropenem en infusión prolongada a dosis máxima, sin otro agregado.

**Pregunta 3.** Sobre la epidemiología de las carbapenemasas en la Argentina después de la pandemia (RECAPT-AR), señalá lo CORRECTO:
- A) La KPC representa más del 90% de las carbapenemasas.
- B) Las combinaciones de enzimas no se detectaron en el país.
- C) La colistina conserva sensibilidad mayor del 95% en todas las clases.
- D) *Escherichia coli* es la especie más frecuente.
- E) Las MBL (42,0%) y la KPC (39,8%) circulan en proporciones similares, y el aztreonam-avibactam fue activo frente a todas las clases (96–98%).

**Pregunta 4.** Neumonía asociada a la ventilación por *A. baumannii* resistente a carbapenémicos. ¿Qué afirmación es CORRECTA?
- A) Colistina con meropenem redujo la mortalidad frente a colistina sola en AIDA y en OVERCOME.
- B) El cefiderocol mostró menos muertes que la mejor terapia disponible en CREDIBLE-CR.
- C) En ATTACK, sulbactam-durlobactam fue no inferior a colistina en mortalidad (19% vs 32%), con mucha menos nefrotoxicidad (13% vs 38%).
- D) La rifampicina adyuvante es el tratamiento de elección.
- E) La amikacina sola alcanza siempre, porque la sensibilidad local es alta.

**Pregunta 5.** Bacteriemia por SAMR tratada con vancomicina. El residente propone sumar cefazolina "para potenciar". Según **CAMERA2**:
- A) La combinación bajó la mortalidad a 90 días a la mitad.
- B) No mejoró el compuesto primario, bajó la bacteriemia persistente al día 5, pero la lesión renal aguda fue de 23% frente a 6%.
- C) Fue igual de segura para el riñón que la vancomicina sola.
- D) Sumar rifampicina en lugar de cefazolina tuvo beneficio en ARREST.
- E) Se completó el reclutamiento planeado sin problemas de seguridad.

**Pregunta 6.** Paciente con sepsis adquirida en la UTI, sin neutropenia, con *Candida* en orina, aspirado traqueal y recto, y falla multiorgánica. Hemocultivos negativos. Según **EMPIRICUS**:
- A) La micafungina empírica no aumentó la sobrevida libre de infección fúngica a 28 días, aunque redujo las infecciones fúngicas nuevas.
- B) La micafungina empírica redujo la mortalidad a 28 días un 30%.
- C) Con beta-D-glucano mayor de 80 pg/mL, el beneficio fue significativo.
- D) Los pacientes con SOFA mayor de 8 tuvieron un beneficio significativo.
- E) La colonización múltiple obliga a dar fluconazol profiláctico.

**Pregunta 7.** Mujer de 50 años, sin inmunosupresión, internada en la UTI por gripe A grave. Al día 4 empeora la oxigenación con nuevos infiltrados. ¿Qué conviene tener en cuenta?
- A) La aspergilosis invasiva solo afecta a pacientes neutropénicos, así que se descarta.
- B) Hay que sumar baloxavir al oseltamivir porque FLAGSTONE mostró beneficio.
- C) El oseltamivir ya no sirve pasadas las 48 h y hay que suspenderlo.
- D) La gripe grave se asocia de forma independiente a aspergilosis invasiva (19% en UTI, 14% sin inmunosupresión), con mortalidad a 90 días del 51%: hay que buscarla.
- E) Es una neumonía viral pura y no requiere estudios adicionales.

**Pregunta 8.** Paciente ventilado hace 6 días, sin inmunosupresión, con PCR de CMV positiva en sangre a carga baja. ¿Qué dice la evidencia?
- A) El ganciclovir anticipado redujo la mortalidad a 60 días a la mitad.
- B) La profilaxis con ganciclovir bajó la IL-6 y la mortalidad.
- C) Ni la profilaxis ni el ganciclovir anticipado mejoraron los desenlaces; la reactivación no justifica tratar de rutina.
- D) El aciclovir es la droga de elección para el CMV del ventilado.
- E) Hay que iniciar foscarnet de inmediato.

<details>
<summary>Ver respuestas y justificación (Preguntas 1–8)</summary>

1. **Respuesta correcta: D.** *Justificación:* MERINO (`PMID 30208454`): 12,3% vs 3,7%, sin no inferioridad. La ceftazidima-avibactam se reserva para carbapenemasas.
2. **Respuesta correcta: A.** *Justificación:* el avibactam no inhibe las MBL; el aztreonam resiste la hidrólisis por MBL pero necesita al avibactam para las BLEE o AmpC acompañantes (Falcone 2021, `PMID 32427286`; RECAPT-AR, `PMID 39766529`). El vaborbactam y el relebactam tampoco inhiben las MBL.
3. **Respuesta correcta: E.** *Justificación:* RECAPT-AR (`PMID 39766529`): MBL 42,0%, KPC 39,8%, combinaciones 8,3% (NDM + KPC 3,4%), *K. pneumoniae* 76% y colistina entre 27% y 78%.
4. **Respuesta correcta: C.** *Justificación:* ATTACK (`PMID 37182534`). AIDA (`PMID 29456043`) y OVERCOME (`PMID 37538951`) no mostraron beneficio de la combinación, y en CREDIBLE-CR hubo más muertes con cefiderocol (`PMID 33058795`).
5. **Respuesta correcta: B.** *Justificación:* CAMERA2 (`PMID 32044943`): 35% vs 39% en el compuesto, bacteriemia persistente 11% vs 20% y lesión renal aguda 23% vs 6%. Se cortó por seguridad. ARREST fue negativo (`PMID 29249276`).
6. **Respuesta correcta: A.** *Justificación:* EMPIRICUS (`PMID 27706483`): HR 1,35 (0,87–2,08) global, 1,41 con beta-D-glucano mayor de 80 y 1,69 con SOFA mayor de 8, todos sin significación; infecciones nuevas 3% vs 12%.
7. **Respuesta correcta: D.** *Justificación:* Schauwvlieghe 2018 (`PMID 30076119`). FLAGSTONE fue negativo (`PMID 35085510`). En el internado grave, el inhibidor de la neuraminidasa se indica aunque hayan pasado 48 h; el beneficio es mayor cuanto antes (`PMID 24815805`).
8. **Respuesta correcta: C.** *Justificación:* Limaye 2017 (`PMID 28829877`) y Papazian 2021 (`PMID 33570708`). El aciclovir se probó para el HSV, no para el CMV (`PMID 31841577`).

</details>

### 5.2 Casos "Detectá el error de guardia" (3 casos)
1. **Caso 1 — "Es KPC seguro, va ceftazidima-avibactam":** Varón de 64 años con shock séptico por *K. pneumoniae* resistente a carbapenémicos en hemocultivos. No se pidió el test de carbapenemasas "porque en esta UTI siempre es KPC". Se indicó ceftazidima-avibactam sola, y a las 72 h persiste la bacteriemia.
   - *Error oculto:* en la Argentina post-COVID, la NDM circula tanto como la KPC (RECAPT-AR: 42% vs 40%), y hay coproducción de NDM + KPC. La ceftazidima-avibactam no cubre las MBL. Había que identificar la carbapenemasa y, si es NDM, usar aztreonam-avibactam o ceftazidima-avibactam + aztreonam, con los puntos de corte correctos de Malbrán.
2. **Caso 2 — "Colistina más meropenem, por las dudas":** Neumonía asociada a la ventilación por *A. baumannii* resistente a carbapenémicos. Se indicaron colistina y meropenem en infusión prolongada; al día 5 la creatinina se duplicó.
   - *Error oculto:* sumar meropenem a la colistina no mejoró nada en AIDA ni en OVERCOME. En la Argentina, la base es el sulbactam en dosis alta según Malbrán, y donde está disponible, el sulbactam-durlobactam fue no inferior a colistina con mucha menos nefrotoxicidad (ATTACK).
3. **Caso 3 — "Colonizado por *Candida*, le damos micafungina":** Paciente en el día 12 de UTI, sin neutropenia, con fiebre persistente, *Candida* en el aspirado traqueal y la orina, y hemocultivos negativos. Se inició micafungina empírica, y nadie revisó el catéter venoso central de 14 días.
   - *Error oculto:* la *Candida* en el aspirado traqueal casi nunca es neumonía, y la colonización sola no justifica el antifúngico empírico (EMPIRICUS). La fiebre persistente con un catéter de 14 días pide hemocultivos (central y periférico), buscar el foco y retirar el catéter si está infectado ([M14](#module-M14)).

### 5.3 Flashcards de repaso rápido (10 tarjetas)
1. **¿Qué mostró MERINO?** → En la bacteriemia por BLEE, piperacilina-tazobactam tuvo 12,3% de mortalidad frente a 3,7% con meropenem (`PMID 30208454`).
2. **¿Qué carbapenemasas no inhibe el avibactam?** → Las metalo-betalactamasas (NDM, VIM, IMP). Para ellas: aztreonam-avibactam o ceftazidima-avibactam + aztreonam.
3. **¿Cómo es la epidemiología argentina de carbapenemasas post-COVID?** → MBL 42,0% y KPC 39,8%, con combinaciones NDM + KPC; *K. pneumoniae* es el 76% (RECAPT-AR, `PMID 39766529`).
4. **¿Qué mostró CRACKLE?** → Mortalidad ajustada del 9% con ceftazidima-avibactam frente a 32% con colistina en enterobacterias resistentes a carbapenémicos (observacional, `PMID 29020404`).
5. **¿Sirve sumar meropenem a la colistina en *Acinetobacter*?** → No: AIDA y OVERCOME fueron negativos (`PMID 29456043`, `PMID 37538951`).
6. **¿Qué mostró ATTACK?** → Sulbactam-durlobactam frente a colistina en *Acinetobacter*: mortalidad 19% vs 32% y nefrotoxicidad 13% vs 38% (`PMID 37182534`).
7. **¿Qué pasó con el cefiderocol en CREDIBLE-CR?** → Curación similar, pero más muertes (34% vs 18%), sobre todo con *Acinetobacter* (`PMID 33058795`).
8. **¿Qué mostró CAMERA2?** → Sumar un betalactámico a la vancomicina en SAMR no mejoró el desenlace y triplicó la lesión renal aguda (23% vs 6%) (`PMID 32044943`).
9. **¿Con qué frecuencia aparece aspergilosis en la gripe grave en UTI?** → 19% en total, 14% sin inmunosupresión, con mortalidad a 90 días de 51% vs 28% (`PMID 30076119`).
10. **¿Cuánto importa el tiempo al oseltamivir en el internado?** → Tratar dentro de las 48 h: OR de mortalidad 0,48 frente a tratar tarde; cada día de demora, HR 1,23 (`PMID 24815805`).

---

## 6. Referencias Verificadas y Registro de Correcciones

> Todas verificadas en PubMed el 2026-11-26 (título, revista, año y PMID), leídas a nivel de abstract.

**Epidemiología y guías**
1. **Vincent JL, et al.** EPIC III: prevalence and outcomes of infection in ICUs in 2017. *JAMA*. 2020. `PMID 32207816`.
2. **Echegorry M, et al.** RECAPT-AR: carbapenemase-producing Enterobacteriaceae in Argentina post-COVID-19. *Antibiotics (Basel)*. 2024. `PMID 39766529`.
3. **Tamma PD, et al.** IDSA 2024 guidance on antimicrobial-resistant gram-negative infections. *Clin Infect Dis*. 2024. `PMID 39108079`.
4. **Paul M, et al.** ESCMID guidelines for multidrug-resistant gram-negative bacilli. *Clin Microbiol Infect*. 2022. `PMID 34923128`.
5. **Evans L, et al.** Surviving Sepsis Campaign 2021. *Intensive Care Med*. 2021. `PMID 34599691`.

**Enterobacterias: BLEE, AmpC y carbapenemasas**
6. **Harris PNA, et al.** MERINO: piperacillin-tazobactam vs meropenem for ceftriaxone-resistant bacteremia. *JAMA*. 2018. `PMID 30208454`.
7. **Stewart AG, et al.** MERINO-2: AmpC-producing bacteremia. *Open Forum Infect Dis*. 2021. `PMID 34395716`.
8. **van Duin D, et al.** CRACKLE: colistin vs ceftazidime-avibactam for CRE. *Clin Infect Dis*. 2018. `PMID 29020404`.
9. **Falcone M, et al.** Ceftazidime-avibactam plus aztreonam for MBL-producing Enterobacterales bacteremia. *Clin Infect Dis*. 2021. `PMID 32427286`.
10. **Carmeli Y, et al.** REVISIT: aztreonam-avibactam vs meropenem. *Lancet Infect Dis*. 2025. `PMID 39389071`.
11. **Wagenlehner FM, et al.** CERTAIN-1: cefepime-taniborbactam in complicated UTI. *N Engl J Med*. 2024. `PMID 38354140`.

***Acinetobacter*, *Pseudomonas* y cefiderocol**
12. **Paul M, et al.** AIDA: colistin alone vs colistin plus meropenem. *Lancet Infect Dis*. 2018. `PMID 29456043`.
13. **Kaye KS, et al.** OVERCOME: colistin monotherapy vs combination. *NEJM Evid*. 2023. `PMID 37538951`.
14. **Kaye KS, et al.** ATTACK: sulbactam-durlobactam vs colistin. *Lancet Infect Dis*. 2023. `PMID 37182534`.
15. **Bassetti M, et al.** CREDIBLE-CR: cefiderocol vs best available therapy. *Lancet Infect Dis*. 2021. `PMID 33058795`.
16. **GAME CHANGER** (empirical cefiderocol in hospital-acquired gram-negative bacteremia). *Lancet Infect Dis*. 2026. `PMID 41067237`.
17. **Kollef MH, et al.** ASPECT-NP: ceftolozane-tazobactam vs meropenem for nosocomial pneumonia. *Lancet Infect Dis*. 2019. `PMID 31563344`.

***Staphylococcus aureus***
18. **Tong SYC, et al.** CAMERA2: vancomycin or daptomycin with vs without β-lactam for MRSA bacteremia. *JAMA*. 2020. `PMID 32044943`.
19. **Thwaites GE, et al.** ARREST: adjunctive rifampicin for *S. aureus* bacteraemia. *Lancet*. 2018. `PMID 29249276`.

**Hongos**
20. **Pappas PG, et al.** IDSA clinical practice guideline for candidiasis, 2016 update. *Clin Infect Dis*. 2016. `PMID 26679628`.
21. **Cornely OA, et al.** Global guideline for candidiasis (ECMM, ISHAM, ASM). *Lancet Infect Dis*. 2025. `PMID 39956121`.
22. **Timsit JF, et al.** EMPIRICUS: empirical micafungin in ICU-acquired sepsis. *JAMA*. 2016. `PMID 27706483`.
23. **Thompson GR, et al.** ReSTORE: rezafungin vs caspofungin. *Lancet*. 2023. `PMID 36442484`.
24. **Schauwvlieghe AFAD, et al.** Invasive aspergillosis in severe influenza in the ICU. *Lancet Respir Med*. 2018. `PMID 30076119`.
25. **Kimura Y, et al.** Mortality in invasive aspergillosis: IPD meta-analysis. *Lancet Infect Dis*. 2026. `PMID 43057280`.

**Virus**
26. **Muthuri SG, et al.** Neuraminidase inhibitors and mortality in hospitalised H1N1pdm09 (IPD meta-analysis). *Lancet Respir Med*. 2014. `PMID 24815805`.
27. **Kumar D, et al.** FLAGSTONE: baloxavir plus neuraminidase inhibitor in severe influenza. *Lancet Infect Dis*. 2022. `PMID 35085510`.
28. **RECOVERY Collaborative Group.** Dexamethasone in hospitalized patients with COVID-19. *N Engl J Med*. 2021. `PMID 32678530`.
29. **REMAP-CAP Investigators.** IL-6 receptor antagonists in critically ill COVID-19. *N Engl J Med*. 2021. `PMID 33631065`.
30. **Limaye AP, et al.** Ganciclovir in CMV-seropositive critically ill adults. *JAMA*. 2017. `PMID 28829877`.
31. **Papazian L, et al.** Preemptive ganciclovir for ventilated patients with CMV reactivation. *Ann Intensive Care*. 2021. `PMID 33570708`.
32. **Luyt CE, et al.** Acyclovir for ventilated patients with HSV oropharyngeal reactivation. *JAMA Intern Med*. 2020. `PMID 31841577`.

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- Módulo nuevo (2026-11-26); todavía sin ítems de auditoría. Pendiente: leer a texto completo las recomendaciones de la IDSA 2024 (*Pseudomonas* DTR), de la SSC 2021 sobre cobertura de multirresistentes y de la IDSA 2016 sobre candidemia, que acá se citan desde el texto completo sin verificar en el abstract.
