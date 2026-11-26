---
id: M15
titulo: "Pulmón Séptico: Neumonía como Foco y SDRA"
subtitulo: "El pulmón como origen y como víctima de la sepsis: neumonía grave, definición global de SDRA, ventilación protectora, presión de distensión, prono, oxígeno, fluidos, corticoides y ECMO"
ultima_actualizacion: 2026-11-26
piloto_fase2: false
fuentes_nlm:
  - "PubMed (abstracts verificados con PMID, 2026-11-26)"
fuentes_vault:
  - "Pendiente de incorporar: 01-Clínica/Protocolo BLUE.md, 02-PoCUS/Ecografia pulmonar - BLUE IRA y weaning.md y el PDF crudo de stress en ventilación mecánica"
palabras_clave:
  - SDRA
  - definición global 2024
  - LUNG SAFE
  - ARMA
  - presión de distensión
  - PEEP
  - ART
  - PROSEVA
  - ROSE
  - FACTT
  - DEXA-ARDS
  - CAPE COD
  - REMAP-CAP
  - EOLIA
  - subfenotipos
  - neumonía asociada a la ventilación
  - REGARD-VAP
  - AMIKINHAL
  - cor pulmonale agudo
---

# M15 — Pulmón Séptico: Neumonía como Foco y SDRA

> Módulo armado el 2026-11-26 a partir de abstracts de PubMed, cada uno con su PMID. Los pocos datos que salen del texto completo y no del abstract están marcados como tales. Antes de llevar un número a una clase, conviene abrir el paper.

---

## 1. Capa Base — Desde cero (Conceptos, Criterios y Fundamentos)

### 1.1 El pulmón juega dos veces
En la sepsis, el pulmón aparece en dos papeles distintos, y muchas veces en el mismo paciente:

1. **Como foco:** la neumonía es el origen más frecuente de la sepsis en la UTI. En EPIC III (1.150 UTI de 88 países), el **54%** de los pacientes internados tenía una infección sospechada o probada, con una mortalidad hospitalaria del **30%** (`PMID 32207816`). La neumonía grave de la comunidad, la intrahospitalaria y la asociada a la ventilación mecánica (NAV) son infecciones con su propio manejo antibiótico ([M09](#module-M09)) y su propio diagnóstico microbiológico ([M14](#module-M14)).
2. **Como víctima:** la sepsis, con foco pulmonar o no, es la causa principal de **síndrome de distrés respiratorio agudo (SDRA)**. El mecanismo es el mismo que en el resto de los órganos: endotelio dañado, glicocálix desprendido y fuga capilar ([M03](#module-M03)), más inflamación del epitelio alveolar ([M02](#module-M02)).

El SDRA asociado a sepsis es peor que el de otras causas. En una cohorte prospectiva de 736 pacientes con SDRA, el asociado a sepsis tuvo **más mortalidad a 60 días (38,2% vs 22,6%)**, menos extubaciones exitosas (53,6% vs 72,6%) y peor PaO₂/FiO₂ a los días 3, 7 y 14, aunque al diagnóstico la oxigenación era igual (Sheu 2010, `PMID 20507948`).

### 1.2 Cuánto pesa: LUNG SAFE
**LUNG SAFE** (*JAMA* 2016, 459 UTI de 50 países, 29.144 ingresos) es la foto epidemiológica del SDRA bajo la definición de Berlín (`PMID 26903337`):
- El SDRA fue el **10,4%** de los ingresos a UTI y el **23,4%** de los pacientes ventilados.
- **Se subdiagnostica:** los médicos lo reconocieron en el **51,3%** de los leves y en el **78,5%** de los graves.
- **Se subtrata:** menos de dos tercios recibieron un volumen corriente de 8 mL/kg o menos, la presión meseta se midió en el **40,1%** y solo el **16,3%** de los graves fue a prono.
- Mortalidad hospitalaria: **34,9%** en el leve, **40,3%** en el moderado y **46,1%** en el grave.

Reconocer el SDRA importa: en LUNG SAFE, cuando el médico lo reconocía, usaba más PEEP, más bloqueo neuromuscular y más prono.

### 1.3 Definiciones: de Berlín a la definición global
| | **Berlín 2012** (`PMID 22797452`) | **Definición global 2024** (Matthay, `PMID 37487152`) |
| :--- | :--- | :--- |
| Hipoxemia | PaO₂/FiO₂ $\le 300$ con PEEP o CPAP $\ge 5$ | PaO₂/FiO₂ $\le 300$ **o** SpO₂/FiO₂ $\le 315$ (con SpO₂ $\le 97\%$) |
| Soporte | Ventilación invasiva o no invasiva | Suma la **cánula nasal de alto flujo $\ge 30$ L/min** |
| Imagen | Opacidades bilaterales en radiografía o TC | Igual, y suma la **ecografía pulmonar** |
| Gravedad | Leve (200–300), moderado (100–200), grave ($\le 100$) | Mantiene las categorías en el intubado; agrega una categoría para el no intubado |
| Contextos con pocos recursos | — | No exige PEEP, flujo de oxígeno ni un dispositivo determinado |

La definición global se hizo para reconocer el SDRA antes y en más lugares. El precio: entran pacientes más heterogéneos, y los ensayos que respaldan cada tratamiento se hicieron con la definición de Berlín en pacientes intubados.

### 1.4 La fisiología que hay que saber: el pulmón pequeño
- **El "pulmón de bebé":** en el SDRA, la parte del pulmón que todavía se ventila es chica. El mismo volumen corriente que en un pulmón sano es fisiológico, en un pulmón de SDRA sobredistiende la parte aireada.
- **Peso corporal predicho (PCP):** el volumen corriente se calcula por la **talla**, no por el peso real. Varón: $PCP = 50 + 0{,}91 \times (\text{talla en cm} - 152{,}4)$. Mujer: $PCP = 45{,}5 + 0{,}91 \times (\text{talla en cm} - 152{,}4)$.
- **Presión de distensión (*driving pressure*):** $\Delta P = P_{meseta} - PEEP = V_T / C_{rs}$. Como la distensibilidad ($C_{rs}$) refleja cuánto pulmón está aireado, la $\Delta P$ "normaliza" el volumen corriente al tamaño real del pulmón funcional.
- **Presión meseta:** se mide con una pausa inspiratoria de 0,5 s, con el paciente sin esfuerzo. Sin medirla, no se puede calcular la $\Delta P$.
- **El ventrículo derecho:** la PEEP, la presión meseta alta, la hipercapnia y la hipoxemia suben la poscarga del VD. El **cor pulmonale agudo** es una complicación del SDRA ventilado que se ve con eco ([M07](#module-M07)).

### 1.5 La neumonía grave como foco
- **Neumonía de la comunidad (NAC):** guía ATS/IDSA 2019 (`PMID 31573350`). En la NAC grave que ingresa a la UTI, la guía europea ERS/ESICM/ESCMID/ALAT 2023 es la primera específica para este grupo; cubre diagnóstico, antibióticos, soporte de órganos, biomarcadores y adyuvantes (`PMID 37012484`).
- **Neumonía intrahospitalaria y asociada a la ventilación:** guía IDSA/ATS 2016 (`PMID 27418577`).
- **Diagnóstico:** hemocultivos y cultivo de secreciones respiratorias antes del antibiótico, siempre que no lo demoren. El rendimiento de los cultivos, los paneles moleculares y la procalcitonina están en [M14](#module-M14).

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Ventilación protectora: lo único que es dogma
- **ARMA** (*N Engl J Med* 2000, $n = 861$): **6 mL/kg de PCP** con presión meseta $\le 30$ cmH₂O frente a 12 mL/kg bajó la mortalidad de **39,8% a 31,0%**, y sumó días libres de ventilador (12 vs 10). Los volúmenes reales fueron 6,2 vs 11,8 mL/kg y las mesetas, 25 vs 33 cmH₂O. `PMID 10793162`
- **Presión de distensión (Amato 2015, 3.562 pacientes de 9 ensayos):** fue la variable del ventilador que mejor se asoció a la sobrevida. Cada aumento de 1 desvío estándar (unos **7 cmH₂O**) se asoció a un RR de mortalidad de **1,41**, incluso en pacientes con volumen corriente y meseta "protectores" (RR 1,36). Los cambios de volumen o de PEEP solo se asociaron a sobrevida cuando bajaban la $\Delta P$. Es un análisis de mediación, no un ensayo. `PMID 25693014`
- **Potencia mecánica:** resume en una sola cifra la energía que el ventilador entrega por minuto (volumen, presiones y frecuencia). Se asocia a mortalidad en estudios observacionales, y un análisis exploratorio de 2026 le sumó la "potencia química" del oxígeno (Lilien 2026, `PMID 42563318`). Todavía no hay un ensayo que la use como meta.

### 2.2 PEEP y reclutamiento: más PEEP no es mejor por definición
- **LOVS (Meade 2008, $n = 983$):** pulmón abierto (PEEP media 14,6 vs 9,8 cmH₂O y maniobras de reclutamiento) sin diferencia en mortalidad (36,4% vs 40,4%), con menos hipoxemia refractaria (4,6% vs 10,2%). `PMID 18270352`
- **ExPress (Mercat 2008, $n = 767$):** PEEP alta para llegar a una meseta de 28–30 cmH₂O, sin diferencia en mortalidad a 28 días (27,8% vs 31,2%), con más días libres de ventilador (7 vs 3). `PMID 18270353`
- **ART** (*JAMA* 2017, $n = 1.010$, SDRA moderado a grave): reclutamiento con PEEP titulada por la mejor distensibilidad **aumentó** la mortalidad a 28 días (**55,3% vs 49,3%**; HR 1,20), con más neumotórax (3,2% vs 1,2%) y barotrauma (5,6% vs 1,6%). `PMID 28973363`
- **EPVent-2** (*JAMA* 2019, $n = 200$): titular la PEEP con presión esofágica no fue mejor que una tabla PEEP-FiO₂ alta (mortalidad 32,4% vs 30,6%). `PMID 30776290`
- **Subfenotipos:** en el ensayo ALVEOLI, el efecto de la PEEP alta sobre la mortalidad fue distinto según el subfenotipo (ver 2.9; `PMID 24853585`).

**Lo que dicen las guías:** la ATS 2024 sugiere **PEEP más alta sin maniobras de reclutamiento** en el SDRA moderado a grave (condicional, certeza baja a moderada) y recomienda **en contra de las maniobras de reclutamiento prolongadas** (fuerte, certeza moderada) (Qadir 2024, `PMID 38032683`). La guía ESICM 2023 cubre los mismos dominios (`PMID 37326646`).

### 2.3 Prono: la intervención que más vidas salva en el SDRA grave
- **PROSEVA** (*N Engl J Med* 2013, $n = 466$, PaO₂/FiO₂ $< 150$ con FiO₂ $\ge 0{,}6$ y PEEP $\ge 5$): sesiones de **al menos 16 h** bajaron la mortalidad a 28 días de **32,8% a 16,0%** (HR 0,39) y a 90 días de 41,0% a 23,6%. Hubo menos paros cardíacos en el grupo prono. `PMID 23688302`
- **La duración importa:** en un metaanálisis de 8 ensayos, el prono en general no alcanzó significación (RR 0,83; 0,68–1,01), pero el prono de **más de 12 h** sí (33,1% vs 44,4%; RR 0,75) (Longobardo 2021, `PMID 33594874`).
- **Prono despierto:** en la insuficiencia respiratoria por COVID-19 con cánula de alto flujo, el prono despierto bajó el fracaso (intubación o muerte) de 46% a 40% (RR 0,86) y la intubación (HR 0,75), sin cambiar la mortalidad (HR 0,87; 0,68–1,11). `PMID 34425070` No se puede extrapolar sin más a la neumonía bacteriana.

En la vida real, solo el **16,3%** de los SDRA graves de LUNG SAFE fue a prono (`PMID 26903337`). Es la brecha más grande entre lo que se sabe y lo que se hace.

### 2.4 Bloqueo neuromuscular: de ACURASYS a ROSE
- **ACURASYS** (*N Engl J Med* 2010, $n = 340$, PaO₂/FiO₂ $< 150$): 48 h de cisatracurio mejoró la sobrevida a 90 días **ajustada** (HR 0,68); la mortalidad cruda a 90 días fue 31,6% vs 40,7% (p = 0,08). No hubo más paresia. `PMID 20843245`
- **ROSE** (*N Engl J Med* 2019, $n = 1.006$): bloqueo continuo con sedación profunda frente a sedación liviana sin bloqueo de rutina: **42,5% vs 42,8%** de mortalidad a 90 días. El grupo bloqueado estuvo menos activo y tuvo más eventos cardiovasculares. `PMID 31112383`

La diferencia entre los dos no es el cisatracurio, sino el **grupo control**: en ACURASYS el control estaba sedado profundo; en ROSE, con sedación liviana y PEEP alta. La ATS 2024 lo sugiere solo en el **SDRA grave temprano** (condicional, certeza baja; `PMID 38032683`). Sedación en [M11](#module-M11).

### 2.5 Oxígeno: ni más ni menos
- **HOT-ICU** (*N Engl J Med* 2021, $n = 2.928$, insuficiencia respiratoria hipoxémica): apuntar a una PaO₂ de 60 frente a 90 mmHg no cambió la mortalidad a 90 días (**42,9% vs 42,4%**). `PMID 33471452`
- **UK-ROX** (*JAMA* 2025, 97 UTI, $n = 16.500$ ventilados): una meta conservadora de SpO₂ del 90% (88–92%) bajó un 29% la exposición al oxígeno, sin cambiar la mortalidad a 90 días (**35,4% vs 34,9%**). `PMID 40501321`

Con estos dos ensayos, una meta de SpO₂ de alrededor de 90–94% es segura; bajar más no salva vidas. El oxígeno como fármaco y la hiperoxia están en [M04](#module-M04).

### 2.6 Fluidos: el pulmón paga la reanimación
- **FACTT** (*N Engl J Med* 2006, $n = 1.000$, lesión pulmonar aguda): la estrategia **conservadora** dejó un balance a 7 días de −136 mL frente a +6.992 mL con la liberal. Sin diferencia en mortalidad a 60 días (25,5% vs 28,4%), pero con **más días libres de ventilador (14,6 vs 12,1)** y de UTI, sin más shock ni diálisis. `PMID 16714767`
- **Revisión (Vignon 2020):** las estrategias restrictivas mejoran la oxigenación y acortan la ventilación sin cambiar la mortalidad. Hay que distinguir la fase temprana (reanimación del shock, con índices de respuesta a fluidos) de la tardía (devolver el exceso apenas el paciente se estabiliza). La presión positiva en la vía aérea contribuye al balance positivo. `PMID 33169217`
- **Las líneas B suben con el balance:** en 20 pacientes con shock séptico y balance positivo, el puntaje de líneas B aumentó (36,6 a 63,8) y un aumento de 10 o más se asoció a caída de la PaO₂/FiO₂ (Theerawit 2014, `PMID 24872647`). Es un estudio chico; la técnica está en [M07](#module-M07).

FACTT se hizo **después** del shock: los pacientes en shock entraban con su propio protocolo. La reanimación inicial, CLOVERS y los índices de respuesta a fluidos están en [M05](#module-M05).

### 2.7 Corticoides: el pulmón es donde más pesan
- **NAC grave — CAPE COD** (*N Engl J Med* 2023, $n = 800$): hidrocortisona 200 mg/día por 4 a 7 días, con descenso, bajó la mortalidad a 28 días de **11,9% a 6,2%**, y en los no ventilados redujo la intubación (18,0% vs 29,5%; HR 0,59). Según el texto completo, excluyó a los pacientes en shock séptico y con gripe. `PMID 36942789`
- **NAC grave — ESCAPe** (*Intensive Care Med* 2022, $n = 586$, veteranos de EE. UU.): metilprednisolona 40 mg/día con descenso por 20 días, **sin diferencia** en mortalidad a 60 días (16% vs 18%). Se cortó por reclutamiento lento (llegó al 41% de la muestra planeada). `PMID 35723686`
- **NAC grave — REMAP-CAP, dominio corticoides** (*Intensive Care Med* 2025, $n = 658$): 7 días de hidrocortisona 50 mg cada 6 h **se cortaron por futilidad**. Mortalidad a 90 días del 15% vs 9,8%, con OR ajustado de 1,52 a 1,63 según el estrato y todos los intervalos cruzando 1. En lo exploratorio, el shock duró un día menos. No descarta un beneficio chico ni un daño. `PMID 40261382`
- **Metaanálisis 2026 (196 estudios, 89.117 pacientes):** en la NAC por COVID, los corticoides probablemente reducen la mortalidad a 30 días (OR 0,87); en la NAC **no COVID**, ninguna terapia inmunomoduladora se asoció de forma consistente a menor mortalidad (Flower 2026, `PMID 42994614`).
- **SDRA — DEXA-ARDS** (*Lancet Respir Med* 2020, $n = 277$, SDRA moderado a grave establecido): dexametasona 20 mg/día por 5 días y luego 10 mg/día por 5 días sumó **4,8 días libres de ventilador** y bajó la mortalidad a 60 días (**21% vs 36%**). No tuvo placebo (el control siguió el tratamiento habitual) y se cortó por reclutamiento lento. `PMID 32043986`
- **Guía ATS 2024:** sugiere corticoides en el SDRA (condicional, certeza moderada; `PMID 38032683`). Una revisión de 2025 advierte que la recomendación va por delante de la evidencia: no está claro qué corticoide, a qué dosis ni para qué fenotipo (Nguyen 2025, `PMID 41046258`).

**Cómo leerlo:** CAPE COD es positivo y REMAP-CAP no, con poblaciones, dosis y duraciones distintas. Lo que hoy se sostiene es que en la NAC grave, **sin shock y sin gripe**, la hidrocortisona 200 mg/día de CAPE COD tiene el mejor respaldo. El shock séptico tiene su propia evidencia de hidrocortisona ([M06](#module-M06)).

### 2.8 Soporte no invasivo y ECMO
- **FLORALI** (*N Engl J Med* 2015, $n = 310$, insuficiencia hipoxémica no hipercápnica): la intubación fue 38% con alto flujo, 47% con oxígeno estándar y 50% con ventilación no invasiva (p = 0,18). El alto flujo tuvo **más días libres de ventilador** (24 vs 22 vs 19) y menos mortalidad a 90 días (HR 2,01 del oxígeno estándar y 2,50 de la VNI frente al alto flujo). `PMID 25981908`
- **EOLIA** (*N Engl J Med* 2018, $n = 249$, SDRA muy grave): la ECMO venovenosa temprana bajó la mortalidad a 60 días de 46% a **35%** (RR 0,76; 0,55–1,04; p = 0,09), sin significación. El **28%** del grupo control pasó a ECMO de rescate. Más sangrado con transfusión (46% vs 28%). `PMID 29791822`
- **Metaanálisis de EOLIA y CESAR (Munshi 2019):** con los dos ECA juntos ($n = 429$), la mortalidad a 60 días fue **34% vs 47%** (RR 0,73; certeza moderada), con un 19% de sangrado mayor. `PMID 30642776`
- **Guía ATS 2024:** sugiere ECMO venovenosa en pacientes **seleccionados** con SDRA grave (condicional, certeza baja). `PMID 38032683`

La ECMO es para centros con experiencia y para pacientes que ya tuvieron ventilación protectora, prono y bloqueo bien hechos, no para saltear esos pasos.

### 2.9 Subfenotipos: dos SDRA distintos
- **Calfee 2014** (ARMA y ALVEOLI, $n = 1.022$): con análisis de clases latentes aparecieron dos subfenotipos. El **hiperinflamatorio** tenía más biomarcadores inflamatorios, más vasopresores, menos bicarbonato y **más sepsis**, más mortalidad y menos días libres de ventilador. En ALVEOLI, la respuesta a la PEEP alta fue distinta según el subfenotipo. `PMID 24853585`
- **SPARC** (*Lancet Respir Med* 2026, 17 hospitales de EE. UU., $n = 338$): clasificar en tiempo real con IL-6, TNFR1 soluble y variables clínicas fue **factible**, en una mediana de 2,2 h, llegando al 82% de los últimos 100 pacientes. El hiperinflamatorio fue el 29% de los SDRA y tuvo peores desenlaces. `PMID 42140220`
- **En el inmunocomprometido:** la neoplasia hematológica se asoció fuertemente al hiperinflamatorio (OR 4,3), y la clasificación solo predijo mortalidad en ese grupo, no en trasplantados ni en tumores sólidos (Weingart 2025, `PMID 41150892`).

Todavía no hay un tratamiento elegido por subfenotipo que haya funcionado en un ensayo prospectivo. Endotipos de sepsis en [M02](#module-M02).

### 2.10 El ventrículo derecho en el SDRA séptico
En 752 pacientes con SDRA moderado a grave y ventilación protectora, estudiados con eco transesofágica, el **cor pulmonale agudo** apareció en el **22%**. Sus predictores fueron cuatro: **neumonía como causa** del SDRA, **$\Delta P \ge 18$ cmH₂O**, PaO₂/FiO₂ $< 150$ y PaCO₂ $\ge 48$ mmHg. El cor pulmonale **grave** se asoció a más mortalidad (57% vs 42%), y el prono fue protector (Mekontso Dessap 2016, `PMID 26650055`).

En el SDRA séptico, la eco del VD (relación VD/VI, septum paradojal) informa al mismo tiempo sobre el ventilador y sobre los fluidos: un VD dilatado no se arregla con volumen ([M07](#module-M07)).

### 2.11 Neumonía asociada a la ventilación: cuánto antibiótico y cómo prevenirla
- **Duración — Chastre 2003** (*JAMA*, 51 UTI francesas, $n = 401$): **8 días** fueron iguales a 15 en mortalidad (18,8% vs 17,2%) y recurrencia (28,9% vs 26,0%), con 4 días más libres de antibiótico. Con no fermentadores (*Pseudomonas*), según el abstract, hubo más recurrencias con 8 días. `PMID 14625336`
- **Duración — REGARD-VAP** (*Lancet Respir Med* 2024, 39 UTI de Nepal, Singapur y Tailandia, $n = 461$): un curso **individualizado** (suspender tras 48 h sin fiebre y con estabilidad hemodinámica; mediana de **6 días** frente a 14) fue no inferior en muerte o recurrencia a 60 días (41% vs 44%), con muchos menos efectos adversos del antibiótico (8% vs 38%). `PMID 38272050`
- **Prevención — AMIKINHAL** (*N Engl J Med* 2023, $n = 850$, ventilados $\ge 72$ h): 3 días de **amikacina inhalada** bajaron la NAV a 28 días de 22% a **15%**. `PMID 37888914` El abstract no informa un beneficio en mortalidad, y queda la pregunta de la resistencia a largo plazo.
- **Una revisión de 2026** resume la tendencia: cursos más cortos guiados por la respuesta, desescalar la doble cobertura antipseudomonas empírica y usar los paneles moleculares integrados a stewardship (Pan 2026, `PMID 43071612`). Descontaminación digestiva selectiva y SuDDICU en [M11](#module-M11).

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "El volumen corriente se calcula con el peso del paciente."**
   - **Realidad:** se calcula con el **peso predicho por la talla**. En ARMA, 6 mL/kg de PCP frente a 12 bajó la mortalidad de 39,8% a 31,0% (`PMID 10793162`). En un paciente obeso, usar el peso real duplica el volumen corriente.
2. **Mito: "Si la meseta está por debajo de 30, el pulmón está protegido."**
   - **Realidad:** la $\Delta P$ se asoció a mortalidad aun con meseta y volumen corriente "protectores" (RR 1,36; `PMID 25693014`). Hay que mirar la meseta **y** la $\Delta P$.
3. **Mito: "Reclutar y subir la PEEP siempre abre el pulmón y mejora el pronóstico."**
   - **Realidad:** en ART, reclutar y titular la PEEP aumentó la mortalidad (55,3% vs 49,3%) y el barotrauma (`PMID 28973363`). La ATS 2024 recomienda en contra de las maniobras prolongadas (`PMID 38032683`).
4. **Mito: "El prono es el último recurso, cuando ya no queda nada."**
   - **Realidad:** en PROSEVA se usó **temprano**, con PaO₂/FiO₂ $< 150$, y bajó la mortalidad a la mitad (`PMID 23688302`). Es una de las primeras medidas en el SDRA moderado a grave.
5. **Mito: "Todo SDRA grave va con cisatracurio 48 h."**
   - **Realidad:** en ROSE, frente a sedación liviana, el bloqueo continuo no cambió la mortalidad (42,5% vs 42,8%; `PMID 31112383`). Queda para casos seleccionados de SDRA grave temprano.
6. **Mito: "Más oxígeno es más seguro en el paciente ventilado."**
   - **Realidad:** ni HOT-ICU (`PMID 33471452`) ni UK-ROX (`PMID 40501321`) mostraron diferencia de mortalidad entre metas altas y bajas. No hay ganancia en saturar 100%.
7. **Mito: "Los corticoides en la neumonía grave ya están demostrados para todos."**
   - **Realidad:** CAPE COD fue positivo (`PMID 36942789`), pero ESCAPe (`PMID 35723686`) y REMAP-CAP (`PMID 40261382`) no, y un metaanálisis de 2026 no encontró beneficio consistente en la NAC no COVID (`PMID 42994614`). El respaldo es para la población de CAPE COD.
8. **Mito: "La NAV se trata 14 días, sobre todo si hay *Pseudomonas*."**
   - **Realidad:** 8 días fueron iguales a 15 en mortalidad (`PMID 14625336`), y un curso individualizado con mediana de 6 días fue no inferior en REGARD-VAP (`PMID 38272050`). Con no fermentadores conviene seguir la respuesta clínica, no un número fijo.

---

## 4. Especificación del Simulador / Atlas Interactivo

> Especificación pendiente de implementar. Hoy los simuladores ejecutables están en M03, M05 y M09.

- **Nombre UI:** *El pulmón chico: ventilador, presión de distensión y ventrículo derecho*
- **Controles:**
  - Sexo y talla (cm), peso real (kg).
  - Volumen corriente (mL), PEEP (cmH₂O), presión meseta medida (cmH₂O), frecuencia respiratoria.
  - PaO₂ y FiO₂ (o SpO₂ y FiO₂), soporte actual (alto flujo, VNI, invasiva).
  - PaCO₂ y causa del SDRA (neumonía / extrapulmonar).
- **Salidas:**
  - Peso predicho y volumen corriente en mL/kg de PCP, con alerta si supera 8 mL/kg o si se calculó con el peso real.
  - $\Delta P = P_{meseta} - PEEP$ y distensibilidad $C_{rs} = V_T / \Delta P$, con alerta si $\Delta P \ge 15$ y otra si $\ge 18$ cmH₂O.
  - Categoría de SDRA por Berlín y por la definición global (PaO₂/FiO₂ o SpO₂/FiO₂ $\le 315$).
  - Puntaje de riesgo de cor pulmonale agudo (Mekontso Dessap 2016: neumonía, $\Delta P \ge 18$, PaO₂/FiO₂ $< 150$, PaCO₂ $\ge 48$), con la sugerencia de evaluar el VD con eco.
  - Semáforo de medidas: protección siempre; prono si PaO₂/FiO₂ $< 150$; bloqueo neuromuscular solo en SDRA grave temprano; ECMO si se cumplen criterios de EOLIA en un centro con experiencia. Siempre como lectura didáctica.
- **SVG:** pulmón con la zona aireada que se achica a medida que baja la distensibilidad, con el mismo volumen corriente sobredistendiendo una fracción cada vez mayor.

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** Varón de 1,70 m y 110 kg, con SDRA por neumonía, ventilado con volumen corriente de 660 mL (6 mL/kg de peso real). ¿Qué es lo correcto?
- A) Está bien ventilado: 6 mL/kg es el estándar de ARMA.
- B) Hay que subir a 8 mL/kg de peso real por la obesidad.
- C) El volumen corriente se calcula con el peso predicho por la talla (unos 66 kg en este paciente): 660 mL equivalen a 10 mL/kg de PCP, y hay que bajarlo a alrededor de 400 mL y medir la meseta y la presión de distensión.
- D) Da igual el volumen corriente mientras la saturación sea mayor de 95%.
- E) Hay que usar el peso ideal por índice de masa corporal de 25.

**Pregunta 2.** Sobre la presión de distensión ($\Delta P$) en el SDRA, ¿cuál es la afirmación CORRECTA?
- A) Se calcula como presión pico menos PEEP.
- B) Un ECA demostró que guiar el ventilador por la $\Delta P$ reduce la mortalidad.
- C) Solo importa si la presión meseta supera 30 cmH₂O.
- D) Subir la PEEP siempre baja la $\Delta P$.
- E) Es $P_{meseta} - PEEP$ (equivale a $V_T / C_{rs}$); en un análisis de 3.562 pacientes, cada 7 cmH₂O más se asoció a un RR de mortalidad de 1,41, incluso con meseta y volumen corriente protectores.

**Pregunta 3.** Mujer de 45 años con SDRA por neumonía neumocócica, PaO₂/FiO₂ de 110 con FiO₂ de 0,7 y PEEP de 12, a las 18 h de la intubación, con volumen corriente de 6 mL/kg de PCP. ¿Qué medida tiene la mejor evidencia de reducción de mortalidad?
- A) Maniobra de reclutamiento con PEEP titulada por la mejor distensibilidad.
- B) Prono en sesiones de al menos 16 h: en PROSEVA bajó la mortalidad a 28 días de 32,8% a 16,0%.
- C) Óxido nítrico inhalado.
- D) Titular la PEEP con presión esofágica.
- E) ECMO venovenosa inmediata, antes de cualquier otra medida.

**Pregunta 4.** Sobre el bloqueo neuromuscular en el SDRA, señalá lo CORRECTO:
- A) ROSE confirmó el beneficio de ACURASYS con una mortalidad 10 puntos menor.
- B) Debe usarse en todo SDRA leve para mejorar la sincronía.
- C) Produce más debilidad adquirida en todos los ensayos.
- D) En ROSE, frente a sedación liviana sin bloqueo de rutina, el cisatracurio continuo no cambió la mortalidad a 90 días (42,5% vs 42,8%); la ATS 2024 lo sugiere solo en el SDRA grave temprano.
- E) ACURASYS mostró una mortalidad cruda significativamente menor con p < 0,001.

**Pregunta 5.** Varón de 62 años con NAC grave en la UTI, con alto flujo, sin shock y sin gripe. Sobre los corticoides, ¿cuál es la lectura correcta?
- A) Todos los ensayos fueron negativos y no hay que darlos.
- B) La hidrocortisona 200 mg/día de CAPE COD bajó la mortalidad a 28 días (6,2% vs 11,9%) y redujo la intubación; ESCAPe y REMAP-CAP fueron negativos, así que el respaldo es para la población de CAPE COD.
- C) REMAP-CAP demostró un beneficio claro de 7 días de hidrocortisona.
- D) La dexametasona de DEXA-ARDS está indicada en toda NAC, haya o no SDRA.
- E) La metilprednisolona de ESCAPe redujo la mortalidad a la mitad.

**Pregunta 6.** Sobre la oxigenación en el paciente ventilado, ¿cuál es la afirmación CORRECTA?
- A) Una meta de PaO₂ de 60 mmHg redujo la mortalidad frente a 90 mmHg en HOT-ICU.
- B) Saturar 100% previene la hipoxia tisular y baja la mortalidad.
- C) En UK-ROX, una meta conservadora de SpO₂ del 90% bajó la exposición al oxígeno un 29% sin cambiar la mortalidad a 90 días (35,4% vs 34,9%).
- D) La hiperoxia está demostrada como causa de muerte en todos los ensayos.
- E) UK-ROX incluyó solo pacientes con SDRA grave.

**Pregunta 7.** Paciente con shock séptico de foco pulmonar, ya sin vasopresores al día 3, con balance acumulado de +9 L y SDRA moderado. Según **FACTT**, ¿qué es lo esperable con una estrategia conservadora de fluidos?
- A) Más días libres de ventilador (14,6 vs 12,1) y de UTI, sin más shock ni diálisis, aunque sin diferencia significativa en la mortalidad a 60 días.
- B) Menor mortalidad a 60 días, con diferencia significativa.
- C) Más insuficiencia renal con requerimiento de diálisis.
- D) Peor oxigenación.
- E) Que hay que restringir fluidos también en la primera hora del shock.

**Pregunta 8.** En el SDRA moderado a grave por neumonía, con $\Delta P$ de 19 cmH₂O, PaO₂/FiO₂ de 120 y PaCO₂ de 52 mmHg, el paciente sigue hipotenso. ¿Qué conviene evaluar primero?
- A) Dar 2 L de cristaloides porque la hipotensión es por hipovolemia.
- B) Subir la PEEP a 20 cmH₂O para mejorar la oxigenación.
- C) Pedir una radiografía para descartar neumotórax antes de cualquier otra cosa.
- D) Iniciar ECMO venoarterial.
- E) El VD con eco: el paciente reúne los cuatro predictores de cor pulmonale agudo (neumonía, $\Delta P \ge 18$, PaO₂/FiO₂ $< 150$ y PaCO₂ $\ge 48$); el VD dilatado no responde a volumen y el prono fue protector.

<details>
<summary>Ver respuestas y justificación (Preguntas 1–8)</summary>

1. **Respuesta correcta: C.** *Justificación:* el PCP de un varón de 170 cm es $50 + 0{,}91 \times (170 - 152{,}4) \approx 66$ kg. ARMA usó 6 mL/kg de PCP (`PMID 10793162`). En LUNG SAFE, menos de dos tercios recibieron 8 mL/kg o menos (`PMID 26903337`).
2. **Respuesta correcta: E.** *Justificación:* Amato 2015 (`PMID 25693014`): RR 1,41 por desvío estándar (~7 cmH₂O) y 1,36 en los "protegidos". Es un análisis de mediación, no un ECA. La $\Delta P$ usa la meseta, no la presión pico.
3. **Respuesta correcta: B.** *Justificación:* PROSEVA (`PMID 23688302`): HR 0,39 a 28 días. ART aumentó la mortalidad con reclutamiento (`PMID 28973363`), EPVent-2 fue negativo (`PMID 30776290`) y la ECMO viene después de la ventilación protectora y el prono (`PMID 29791822`).
4. **Respuesta correcta: D.** *Justificación:* ROSE (`PMID 31112383`) y ATS 2024 (`PMID 38032683`). En ACURASYS la mortalidad cruda a 90 días fue 31,6% vs 40,7% con p = 0,08; el beneficio fue en la ajustada (HR 0,68) y no hubo más paresia (`PMID 20843245`).
5. **Respuesta correcta: B.** *Justificación:* CAPE COD (`PMID 36942789`), ESCAPe (`PMID 35723686`: 16% vs 18%) y REMAP-CAP (`PMID 40261382`: cortado por futilidad). DEXA-ARDS se hizo en SDRA moderado a grave establecido, no en toda NAC (`PMID 32043986`).
6. **Respuesta correcta: C.** *Justificación:* UK-ROX (`PMID 40501321`), con 16.500 ventilados en general. HOT-ICU no mostró diferencia (42,9% vs 42,4%; `PMID 33471452`).
7. **Respuesta correcta: A.** *Justificación:* FACTT (`PMID 16714767`): mortalidad 25,5% vs 28,4% (p = 0,30), días libres de ventilador 14,6 vs 12,1 y diálisis 10% vs 14%. Se aplicó después de la fase de shock; la reanimación inicial sigue otra lógica ([M05](#module-M05)).
8. **Respuesta correcta: E.** *Justificación:* Mekontso Dessap 2016 (`PMID 26650055`): cor pulmonale agudo en el 22%, con mortalidad del 57% en el grave frente a 42%, y el prono como factor protector. Subir más la PEEP aumenta la poscarga del VD.

</details>

### 5.2 Casos "Detectá el error de guardia" (3 casos)
1. **Caso 1 — "Satura 98%, está bien ventilado":** Mujer de 1,55 m y 95 kg, con SDRA por neumonía, ventilada con 570 mL (6 mL/kg de peso real) y PEEP de 8. Satura 98% con FiO₂ de 0,8. Nadie midió la presión meseta.
   - *Error oculto:* triple. El PCP de una mujer de 155 cm es de unos 48 kg, así que 570 mL son casi **12 mL/kg de PCP**, el volumen del grupo control de ARMA. Sin meseta no se puede calcular la $\Delta P$. Y una SpO₂ de 98% con FiO₂ de 0,8 no es una meta: alcanza con 90–94% (HOT-ICU, UK-ROX).
2. **Caso 2 — "Esperemos a mañana para el prono":** Varón de 58 años con shock séptico de foco pulmonar, PaO₂/FiO₂ de 95 con FiO₂ de 0,9 y PEEP de 14, a las 12 h de intubado. Se decidió hacer una maniobra de reclutamiento con 40 cmH₂O y "si mañana sigue igual, lo pronamos".
   - *Error oculto:* el prono tiene beneficio de mortalidad cuando se usa **temprano** y en sesiones de al menos 16 h (PROSEVA), y está indicado ya con PaO₂/FiO₂ $< 150$. La maniobra de reclutamiento prolongada aumentó la mortalidad y el barotrauma en ART, y la ATS 2024 recomienda en contra.
3. **Caso 3 — "NAV por *Pseudomonas*: 14 días sí o sí":** Paciente con NAV por *Pseudomonas* sensible, afebril y sin vasopresores desde el día 4, con secreciones en descenso. Se indicaron 14 días de meropenem más amikacina.
   - *Error oculto:* 8 días fueron iguales a 15 en mortalidad (Chastre 2003), y en REGARD-VAP un curso individualizado (mediana de 6 días) fue no inferior con muchos menos efectos adversos (8% vs 38%). La doble cobertura empírica se desescala con el antibiograma ([M09](#module-M09)).

### 5.3 Flashcards de repaso rápido (10 tarjetas)
1. **¿Qué porcentaje de los pacientes ventilados tiene SDRA, y cuántos SDRA graves van a prono en la práctica?** → 23,4% de los ventilados; solo el 16,3% de los graves va a prono (LUNG SAFE, `PMID 26903337`).
2. **¿Qué cambió la definición global de SDRA de 2024?** → Suma el alto flujo $\ge 30$ L/min, la SpO₂/FiO₂ $\le 315$ y la ecografía pulmonar, y no exige PEEP en contextos con pocos recursos (`PMID 37487152`).
3. **¿Cómo se calcula el peso corporal predicho?** → Varón: $50 + 0{,}91 \times (\text{talla} - 152{,}4)$; mujer: $45{,}5 + 0{,}91 \times (\text{talla} - 152{,}4)$.
4. **¿Qué mostró ARMA?** → 6 mL/kg de PCP con meseta $\le 30$ frente a 12 mL/kg: mortalidad de 31,0% frente a 39,8% (`PMID 10793162`).
5. **¿Qué es la presión de distensión y por qué importa?** → $P_{meseta} - PEEP$; cada 7 cmH₂O más se asoció a RR 1,41 de mortalidad (`PMID 25693014`).
6. **¿Qué mostró ART?** → Reclutar y titular la PEEP aumentó la mortalidad a 28 días (55,3% vs 49,3%) y el barotrauma (`PMID 28973363`).
7. **¿Cuánto bajó la mortalidad el prono en PROSEVA, y con qué duración?** → De 32,8% a 16,0% a 28 días, con sesiones de al menos 16 h (`PMID 23688302`).
8. **¿Qué diferencia hay entre CAPE COD y REMAP-CAP?** → CAPE COD: hidrocortisona 200 mg/día bajó la mortalidad en NAC grave (6,2% vs 11,9%). REMAP-CAP: 7 días de hidrocortisona, cortado por futilidad (`PMID 36942789`, `PMID 40261382`).
9. **¿Qué mostró EOLIA y qué cambia con el metaanálisis?** → EOLIA: 35% vs 46%, p = 0,09, con 28% de cruce a ECMO. Sumando CESAR: 34% vs 47%, RR 0,73 (`PMID 29791822`, `PMID 30642776`).
10. **¿Cuáles son los cuatro predictores de cor pulmonale agudo en el SDRA?** → Neumonía como causa, $\Delta P \ge 18$ cmH₂O, PaO₂/FiO₂ $< 150$ y PaCO₂ $\ge 48$ mmHg (`PMID 26650055`).

---

## 6. Referencias Verificadas y Registro de Correcciones

> Todas verificadas en PubMed el 2026-11-26 (título, revista, año y PMID), leídas a nivel de abstract.

**Epidemiología y definiciones**
1. **Bellani G, et al.** LUNG SAFE: epidemiology, patterns of care, and mortality of ARDS in 50 countries. *JAMA*. 2016. `PMID 26903337`.
2. **ARDS Definition Task Force.** ARDS: the Berlin Definition. *JAMA*. 2012. `PMID 22797452`.
3. **Matthay MA, et al.** A new global definition of ARDS. *Am J Respir Crit Care Med*. 2024. `PMID 37487152`.
4. **Sheu CC, et al.** Sepsis-related vs non-sepsis-related ARDS. *Chest*. 2010. `PMID 20507948`.
5. **Vincent JL, et al.** EPIC III: prevalence and outcomes of infection in ICUs in 2017. *JAMA*. 2020. `PMID 32207816`.

**Neumonía grave**
6. **Metlay JP, et al.** ATS/IDSA guideline: community-acquired pneumonia in adults. *Am J Respir Crit Care Med*. 2019. `PMID 31573350`.
7. **Martin-Loeches I, et al.** ERS/ESICM/ESCMID/ALAT guidelines for severe community-acquired pneumonia. *Intensive Care Med*. 2023. `PMID 37012484`.
8. **Kalil AC, et al.** IDSA/ATS guidelines: hospital-acquired and ventilator-associated pneumonia. *Clin Infect Dis*. 2016. `PMID 27418577`.
9. **Pan D, et al.** Severe pulmonary infections. *Curr Opin Crit Care*. 2026. `PMID 43071612`.

**Ventilación, PEEP y reclutamiento**
10. **ARDS Network.** ARMA: lower vs traditional tidal volumes. *N Engl J Med*. 2000. `PMID 10793162`.
11. **Amato MB, et al.** Driving pressure and survival in ARDS. *N Engl J Med*. 2015. `PMID 25693014`.
12. **Lilien TA, et al.** Mechanical and chemical power and mortality in ARDS. *Am J Physiol Lung Cell Mol Physiol*. 2026. `PMID 42563318`.
13. **Meade MO, et al.** LOVS: low tidal volume, recruitment and high PEEP. *JAMA*. 2008. `PMID 18270352`.
14. **Mercat A, et al.** ExPress: PEEP setting in ALI/ARDS. *JAMA*. 2008. `PMID 18270353`.
15. **Writing Group for the ART Investigators.** Lung recruitment and titrated PEEP vs low PEEP. *JAMA*. 2017. `PMID 28973363`.
16. **Beitler JR, et al.** EPVent-2: esophageal pressure-guided PEEP. *JAMA*. 2019. `PMID 30776290`.
17. **Grasselli G, et al.** ESICM guidelines on ARDS. *Intensive Care Med*. 2023. `PMID 37326646`.
18. **Qadir N, et al.** ATS clinical practice guideline update on ARDS. *Am J Respir Crit Care Med*. 2024. `PMID 38032683`.

**Prono, bloqueo neuromuscular y oxígeno**
19. **Guérin C, et al.** PROSEVA: prone positioning in severe ARDS. *N Engl J Med*. 2013. `PMID 23688302`.
20. **Longobardo A, et al.** Non-specialist therapeutic strategies in ARDS (meta-analysis). *Minerva Anestesiol*. 2021. `PMID 33594874`.
21. **Ehrmann S, et al.** Awake prone positioning for COVID-19 (meta-trial). *Lancet Respir Med*. 2021. `PMID 34425070`.
22. **Papazian L, et al.** ACURASYS: neuromuscular blockers in early ARDS. *N Engl J Med*. 2010. `PMID 20843245`.
23. **NHLBI PETAL Network.** ROSE: early neuromuscular blockade in ARDS. *N Engl J Med*. 2019. `PMID 31112383`.
24. **Schjørring OL, et al.** HOT-ICU: lower vs higher oxygenation targets. *N Engl J Med*. 2021. `PMID 33471452`.
25. **Martin DS, et al.** UK-ROX: conservative oxygen therapy in ventilated adults. *JAMA*. 2025. `PMID 40501321`.

**Fluidos y ventrículo derecho**
26. **NHLBI ARDS Network.** FACTT: two fluid-management strategies in acute lung injury. *N Engl J Med*. 2006. `PMID 16714767`.
27. **Vignon P, et al.** Fluid administration and monitoring in ARDS. *Intensive Care Med*. 2020. `PMID 33169217`.
28. **Theerawit P, et al.** B-lines and extravascular lung water in shock patients receiving fluids. *Indian J Crit Care Med*. 2014. `PMID 24872647`.
29. **Mekontso Dessap A, et al.** Acute cor pulmonale during protective ventilation for ARDS. *Intensive Care Med*. 2016. `PMID 26650055`.

**Corticoides**
30. **Dequin PF, et al.** CAPE COD: hydrocortisone in severe community-acquired pneumonia. *N Engl J Med*. 2023. `PMID 36942789`.
31. **Meduri GU, et al.** ESCAPe: low-dose methylprednisolone in severe CAP. *Intensive Care Med*. 2022. `PMID 35723686`.
32. **REMAP-CAP Investigators.** Hydrocortisone in severe CAP: the REMAP-CAP corticosteroid domain. *Intensive Care Med*. 2025. `PMID 40261382`.
33. **Flower L, et al.** Immunomodulatory therapies in COVID-19 and non-COVID-19 CAP (meta-analysis). *Clin Microbiol Infect*. 2026. `PMID 42994614`.
34. **Villar J, et al.** DEXA-ARDS: dexamethasone for ARDS. *Lancet Respir Med*. 2020. `PMID 32043986`.
35. **Nguyen TL, et al.** Corticosteroids in non-viral ARDS: recommendations outpace evidence. *Pneumonia (Nathan)*. 2025. `PMID 41046258`.

**Soporte no invasivo y ECMO**
36. **Frat JP, et al.** FLORALI: high-flow oxygen in acute hypoxemic respiratory failure. *N Engl J Med*. 2015. `PMID 25981908`.
37. **Combes A, et al.** EOLIA: ECMO for severe ARDS. *N Engl J Med*. 2018. `PMID 29791822`.
38. **Munshi L, et al.** Venovenous ECMO for ARDS: systematic review and meta-analysis. *Lancet Respir Med*. 2019. `PMID 30642776`.

**Subfenotipos**
39. **Calfee CS, et al.** Subphenotypes in ARDS: latent class analysis. *Lancet Respir Med*. 2014. `PMID 24853585`.
40. **Files DC, et al.** SPARC: real-time biological subphenotyping in ARDS and severe AHRF. *Lancet Respir Med*. 2026. `PMID 42140220`.
41. **Weingart MF, et al.** Inflammatory subphenotypes in immunocompromised patients with sepsis. *Crit Care Med*. 2025. `PMID 41150892`.

**Neumonía asociada a la ventilación**
42. **Chastre J, et al.** 8 vs 15 days of antibiotics for VAP. *JAMA*. 2003. `PMID 14625336`.
43. **Mo Y, et al.** REGARD-VAP: individualised short-course antibiotics for VAP. *Lancet Respir Med*. 2024. `PMID 38272050`.
44. **Ehrmann S, et al.** AMIKINHAL: inhaled amikacin to prevent VAP. *N Engl J Med*. 2023. `PMID 37888914`.

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- Módulo nuevo (2026-11-26); todavía sin ítems de auditoría. Pendiente: leer a texto completo CAPE COD (criterios de exclusión), REMAP-CAP dominio corticoides, las recomendaciones específicas de la guía ESICM 2023 y de la guía europea de NAC grave 2023, y SPARC.
