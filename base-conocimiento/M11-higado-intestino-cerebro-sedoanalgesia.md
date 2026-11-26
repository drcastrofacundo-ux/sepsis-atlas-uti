---
id: M11
titulo: "Hígado, Intestino, Encefalopatía Séptica (SAE) y Sedoanalgesia Crítica (PRIS y MIRA-PK)"
subtitulo: "De SRLI/SALD (Chen 2026) y Scheffler 2018 a NUTRIREA-2/3, SuDDICU 2026, Ferlini 2023, PRIS y Midazolam PK (Smeets/Shudofsky)"
ultima_actualizacion: 2026-11-25
piloto_fase2: false
fuentes_nlm:
  - "Higado en shock"
  - "[Tesis] Albumina, Glicocalix y PK de Midazolam - MIRA-Research"
  - "[SATI] clases"
  - "General"
fuentes_vault:
  - "Sepsis y Shock Septico/ (Hígado, Intestino, SAE, PRIS, Midazolam PK, Sedoanalgesia 2022-2026, PVC vs no-PVC)"
  - "00 Radar Bibliografico/"
palabras_clave:
  - SRLI
  - SALD
  - hepatitis hipóxica
  - microbioma
  - SuDDICU
  - zonulina
  - NUTRIREA
  - encefalopatía séptica
  - PRIS
  - propofol
  - midazolam
  - 1-OH-MG
  - Smeets
  - abstinencia opioide
---

# M11 — Hígado, Intestino, Encefalopatía Séptica (SAE) y Sedoanalgesia Crítica (PRIS y MIRA-PK)

---

## 1. Capa Base — Desde cero (Fisiología, Histología y Farmacocinética Hepato-Intestinal-SNC)

### 1.1 Hígado en sepsis: Zonas lobulillares, SRLI/SALD vs. Hepatitis Hipóxica
El hígado recibe doble irrigación (vena porta $75\%$ de flujo y $50\%$ del $\text{O}_2$; arteria hepática $25\%$ de flujo y $50\%$ del $\text{O}_2$ mediante respuesta amortiguadora arterial). Los hepatocitos se organizan en tres zonas metabólicas: la **Zona 1** (periportal, rica en $\text{O}_2$) y la **Zona 3** (centrolobulillar alrededor de la vena central, pobre en $\text{O}_2$ y rica en citocromo **CYP450**).

En la sepsis coexisten dos síndromes hepáticos diferenciados:
1. **Disfunción Hepática Asociada a Sepsis (SALD / SRLI):** definición clásica operativa **$\text{Bilirrubina} > 2{,}0\text{ mg/dL} + \text{INR} > 1{,}5$** (o colestasis séptica temprana sin isquemia masiva). Mecanismo: los PAMPs/LPS portales activan las **células de Kupffer** vía **TLR4 $\to$ NLRP3 $\to$ GSDMD** y citocinas (TNF-$\alpha$, IL-1$\beta$, IL-6), suprimiendo transcripcionalmente los transportadores canaliculares de sales biliares (**BSEP, MRP2**) y las enzimas del **CYP3A4**. Mortalidad asociada elevada (**$54\text{–}68\%$**).
2. **Hepatitis Hipóxica (*Shock Liver*):** necrosis isquémica/por reperfusión centrada en la **Zona 3** secundaria a caída abrupta del flujo o congestión venosa hepática extrema (falla derecha/taponamiento) con elevación súbita de **$\text{AST/ALT} > 10\text{–}20\times\text{LSN}$** y caída precoz de factores de coagulación/proteína C ([M08](#module-M08)). Mortalidad **$64\%$** (**$\text{RR } 2{,}94$**). Para orientar el patrón hepatocelular vs. colestásico en lesiones asociadas a fármacos (DILI), recordar el **Factor R de la EASL** [$R = (\text{ALT}/\text{LSN}) / (\text{FA}/\text{LSN})$] y la **Ley de Hy** (injuria hepatocelular + ictericia $\ge 2\times\text{LSN}$ sin obstrucción = alto riesgo de fallo fulminante).

### 1.2 Barrera intestinal, microbioma y perfusión esplácnica
El epitelio intestinal monocapa renovado desde criptas depende del acoplamiento microvascular de las vellosidades (circulación en contracorriente muy vulnerable al bajo gasto y vasopresores). La pérdida de moco protector, uniones estrechas y anaerobios productores de **ácidos grasos de cadena corta (butirato)** transforma al intestino de órgano digestivo en motor proinflamatorio y reservorio de patógenos resistentes.

### 1.3 Farmacología básica de Sedoanalgesia en Sepsis
- **Propofol:** lipofílico altamente ligado a proteínas, formulado en emulsión lipídica; aclarado principalmente por metabolismo hepático de alta extracción pero con riesgo directo de toxicidad mitocondrial directa (**PRIS**) a dosis altas sostenidas.
- **Midazolam:** metabolizado casi exclusivamente por **CYP3A4** hepático/intestinal a **$1\text{-OH-midazolam}$** (metabolito activo con afinidad $\text{Ki } 2{,}2\text{ nM}$ equivalente a $\sim 60\text{–}80\%$ de la potencia sedante del padre), el cual se conjuga por UGT a **$1\text{-OH-midazolam glucurónido (1-OH-MG)}$** (activo en $\sim 10\%$ y **excretado 100% por vía renal**!). Además es altamente lipofílico y **adsorbido por plásticos de PVC estándar**.

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Hígado en shock: Señal temprana de Chen 2026
- **Chen et al. 2026 (Modelado predictivo en SALD):** modelos *Random Forest* validados alcanzaron $\text{AUC } 0{,}867 / 0{,}862$ mostrando mediante análisis **SHAP** que pequeñas elevaciones tempranas subumbrales — **$\text{Bilirrubina} > 0{,}75\text{–}0{,}80\text{ mg/dL}$ e $\text{INR} > 1{,}45$** — ya señalan activación de SALD incipiente horas o días antes de cumplir los criterios tardíos $\text{Bb}>2{,}0$ / $\text{INR}>1{,}5$.

### 2.2 Intestino, Microbioma, Nutrición y Descontaminación (2018–2026)
- **Caída de dos mitos de permeabilidad y translocación:**
  - **Varkila et al. 2024 — el test más limpio de la translocación en humanos:** comparó bacteriemias por enterococo (flora intestinal) con bacteriemias por estafilococo coagulasa-negativo (flora de piel), midiendo biomarcadores de injuria de barrera **48 h antes** del evento. El score de barrera no discriminó entre ambas (**$\text{aOR } 1{,}12$**; IC95% $0{,}93\text{–}1{,}34$): si la translocación fuera el mecanismo, la barrera rota debería predecir la bacteriemia intestinal y no la cutánea. La hipótesis "intestino motor de la falla multiorgánica" sigue como marco (PQI 2025), pero con muy pocas medidas confiables de función intestinal.
  - **I-FABP y citrulina** fallaron incluso contra endoscopia en el escenario de máxima isquemia; ningún biomarcador de permeabilidad está validado para uso clínico.
  - **Scheffler et al. 2018 (`PMID 29459849`, Ítem #16):** demostró que los **kits ELISA comerciales de "zonulina"** utilizados en múltiples estudios críticos miden en realidad **properdina** (proteína del complemento C3) y **no pre-haptoglobina 2 ("zonulina real")** — invalidando correlaciones clínicas simples como la supuesta relación lineal con pTLR4 citada en síntesis secundarias!
- **Microbioma, Fibra, Probióticos y SDD:**
  - **Wozniak et al. 2024:** la pérdida rápida de diversidad $\alpha$ del microbioma intestinal (caída del índice de **Shannon $-0{,}1/\text{día}$**) duplicó el riesgo de muerte/sobreinfección (**$\text{HR } 1{,}99$**), fundamentando la restricción de antianaeróbicos innecesarios en **SSC 2026** ([M09](#module-M09)).
  - **Fibra enteral:** la inulina fue neutra en un ECA fase 2 en sepsis (2025), y una fórmula con fructooligosacáridos en trauma ventilado (**Serbanescu 2025**) **aceleró** la pérdida de *Bifidobacterium* y la expansión de enterobacterias, sobre todo en quienes venían con antibióticos antianaeróbicos. No agregar fibra "para reparar el microbioma" (la fibra por motilidad es otra discusión). El trasplante de microbiota fecal en críticos tiene solo un piloto sin desenlaces clínicos.
  - **Probióticos en críticos — Contraindicados en sepsis grave:** **PROSPECT (2021)** documentó bacteriemia/fungemia atribuible al probiótico con **$\text{OR } 14{,}02$**, y **PROPATRIA** demostró exceso de isquemia intestinal letal en pancreatitis grave.
  - **Descontaminación Digestiva Selectiva (SuDDICU 2026, `PMID 41159880`, $n = 9.289$):** **neutra en mortalidad hospitalaria a 90 días ($27{,}9\%$ vs $29{,}5\%$; $\text{OR } 0{,}94$)**, con menos bacteriemias (4,9% vs 6,8%) y **menos organismos resistentes ($16{,}8\%$ vs $26{,}8\%$)**: el temor a que "seleccione resistencia" no está sostenido por los datos. El metaanálisis bayesiano actualizado (32 ECAs, $n = 27.687$) sí da **$\text{RR } 0{,}91$** con probabilidad posterior del 99,2% de reducir mortalidad. Ensayado en ecologías con baja prevalencia de multirresistentes, distintas de la nuestra.
- **Gradación de la injuria gastrointestinal:** AGI III–IV o GIDS 2–4 se asociaron a mortalidad ($\text{OR } 2{,}78$). Sirve como score pronóstico y lenguaje común, no para decidir conducta; el GIDS de 24 h no es confiable y su validación prospectiva (GUTPHOS) no está publicada.
- **Nutrición en Shock y POCUS Gástrico:**
  - **Ecografía del antro gástrico:** SROC-AUC $0{,}86$ para predecir **intolerancia a la nutrición enteral** (metaanálisis en revista de calidad editorial limitada). Es lo único accionable del capítulo intestinal: no necesita insumos.
  - **NUTRIREA-2 (Reignier 2018):** nutrición enteral temprana a dosis calórica plena en shock con dosis altas de vasopresores multiplicó por casi 4 la **isquemia mesentérica ($\text{HR } 3{,}84$)** frente a parenteral inicial en esa fase inestable.
  - **NUTRIREA-3 (*Lancet Respir Med* 2023):** restricción calórico-proteica inicial (**$6\text{ kcal/kg/día}$** primeros días vs $25\text{ kcal/kg/d}$) aceleró salida de UCI con menor intolerancia digestiva y menor isquemia en shock vasopresor.

### 2.3 Encefalopatía Asociada a Sepsis (SAE): EEG, PESS y Perfusión Cerebral
- **Frecuencia:** hasta **$70\%$** de pacientes con sepsis grave desarrollan disfunción neurológica difusa aguda.
- **Ferlini et al. 2023 ($n = 92$ sépticos sin enfermedad neurológica previa, $7.431\text{ horas}$ de cEEG):** **$0\%$ de convulsiones**, pero **$25\%$ con descargas periódicas (PD)**, asociadas a SAE (**$\text{OR } 8{,}98$**; IC95% $1{,}11\text{–}72{,}8$), a mortalidad ajustada por gravedad (**$\text{OR } 2{,}94$**) y a peor desenlace funcional ($\text{OR } 3{,}82$); la reactividad conservada se asoció a buen desenlace. En el séptico "puro", el cEEG rinde como **escala de severidad** (fondo, reactividad, carga de PD), no como caza de estatus. IC muy anchos: es una señal, no una estimación.
- **Tronco encefálico — cohorte PRORETRO ($n = 322$ críticos profundamente sedados, no solo sépticos):** latencia **P14 $> 16\text{ ms}$** → mortalidad a 28 días **$\text{HR ajustado } 3{,}0$**. Sin potenciales evocados, los **reflejos** dicen algo parecido gratis: la ausencia de **reflejo tusígeno** y **fotomotor** se asoció a mortalidad, y la del **oculocefalógiro** a despertar retardado ($\text{OR } 2{,}1$). En el sedado profundo (RASS −4/−5), donde el CAM-ICU no sirve, el examen de tronco diario es la ventana al cerebro.
- **Autorregulación cerebral y $\text{PAM}_{\text{óptima}}$ (Peng et al. 2024, `n = 51`):** titular PAM hacia autorregulación cerebral individualizada ($\text{PAM}_{\text{opt}}$ media $84{,}5\text{ mmHg}$) redujo delirium en esa serie pequeña ($30{,}8\%$ vs $60\%$). *Lectura crítica R3:* tamaño muestral muy reducido (`n=51`) y tensión abierta con **OPTPRESS 2025** (daño sistémico al fijar $\text{PAM } 80\text{–}85\text{ mmHg}$ de rutina); **no** escalar PAM indiscriminadamente sin monitorización multimodal dedicada.
- **Elección de sedante y delirio:** **MENDS2 (*NEJM* 2021, $n = 422$)** demostró equivalencia entre dexmedetomidina y propofol ligero en días sin delirio/coma, días libres de VM, muerte a 90 días y **cognición a 6 meses**. Pese al entusiasmo preclínico por la dexmedetomidina, en humanos sépticos lo que mueve el cerebro es la **profundidad** de la sedación, no la molécula.
- **Estado del arte 2026 (Shankar-Hari, Sharshar y col., *Intensive Care Med* 2026):** SAE en hasta el 70%, con mortalidad proporcional a la severidad clínica y electroencefalográfica; mecanismos principales neuroinflamación e isquemia, con falla bioenergética y estrés oxidativo; regiones vulnerables corteza frontal, hipocampo, sistema límbico y tronco. **No hay definición operativa consensuada ni tratamiento específico**: control de la sepsis, protocolo de delirium y evitar neurotóxicos. En curso: KiSS (levetiracetam vs placebo en shock séptico).
- **Glicocálix y memoria (Hippensteel 2019):** los fragmentos de **heparán sulfato** liberados por la degradación del glicocálix (M03) cruzan la barrera hematoencefálica, se unen al BDNF y bloquean la potenciación a largo plazo hipocampal en ratones; en 20 sépticos, el patrón de sulfatación al ingreso se asoció a deterioro cognitivo al alta. Prueba de concepto ($n = 6$ deteriorados), pero es el eslabón mecanístico más limpio entre endotelio y cognición.
- **Neuroimagen (Polito 2013, $n = 71$, sin actualización 2024–2026):** la RM fue **normal en la mitad** (una RM limpia no descarta SAE) y mostró **infartos en 29%**, asociados de forma independiente a **CID** (M08), foco neurológico y peor pronóstico. En el séptico con CID y signo focal, la imagen sí cambia conducta.
- **Biomarcadores, todavía de investigación:** la revisión sistemática de O'Keeffe 2025 (28 estudios, 54 biomarcadores, solo 14 medidos más de una vez) no pudo hacer metaanálisis. Lo más consistente fue **NfL** y **S100β**; el mejor número duro es un AUC de 0,73 para NfL en neumonía (no shock). El succinato (AUC 0,92 validado en 18 personas) es interesante por el mecanismo y probablemente sobreajustado. No pedir NSE, S100β ni NfL para diagnosticar SAE.
- **Cognición a largo plazo, dos lecturas que no se contradicen del todo:** los registros administrativos muestran más demencia con dosis-respuesta (Sun 2025: $\text{HR } 1{,}25$, y $1{,}76$ con $\ge 2$ episodios; Underwood 2026: +160 casos por 1.000 personas-año a 10 años post-bacteriemia, y paradójicamente más riesgo con **PCR pico más baja**). La única cohorte prospectiva que midió cognición con MMSE/MoCA (Sahu 2026, $n = 84$, 55% de pérdida de seguimiento) no encontró efecto independiente de la sepsis frente a otros críticos ($\text{OR } 1{,}49$; IC95% $0{,}63\text{–}3{,}56$) y sí **mejoría entre el mes 1 y el 6**. Para la familia: mejora en el primer semestre, conviene control cognitivo antes de los 6 meses, y el riesgo a largo plazo sube sobre todo si repite sepsis (ver M01, síndrome post-sepsis).

### 2.4 Sedoanalgesia Crítica: PRIS, Farmacocinética de Midazolam (MIRA) e Insumos (2022–2026)
- **Síndrome por Infusión de Propofol (PRIS):**
  - *Mecanismo:* desacople oxidativo mitocondrial con bloqueo de **carnitina palmitoiltransferasa I (CPT-I)** (impidiendo $\beta$-oxidación de ácidos grasos de cadena larga) e inhibición directa de **Complejos I–III / CoQ10** (**Krajčová 2015**).
  - *Incidencia dosis-dependiente:* **$1{,}1\%$** basal $\to$ **$17\%$** con dosis $\ge 5\text{ mg/kg/h}$ $\to$ **$31\%$** con dosis $> 6\text{ mg/kg/h}$ (cohortes críticas incluyendo **Pitié-Salpêtrière 2025**).
  - *Clínica y biomarcador:* acidosis láctica inexplicable (cuando la macrohemodinamia mejora!), hiperkalemia, rabdomiólisis (**Schroeppel 2014**: vigilar **$\text{CPK} \ge 5.000\text{ U/L}$**), lipemia, patrón tipo Brugada en ECG y shock cardiogénico refractario.
  - *Rescate:* suspender propofol de inmediato, aportar **glucosa IV $6\text{–}8\text{ mg/kg/min}$** + insulina para suplir sustrato mitocondrial glucolítico, **NO dar bicarbonato en bolo** rutinario si empeora acidosis intracelular, iniciar **CKRT** para depurar potasio y ácidos orgánicos, y soporte inotrópico **no adrenérgico** (milrinona, glucagón o **ECMO-VA** precoz en colapso).
- **Farmacocinética de Midazolam en Sepsis y LRA (Tesis MIRA — Ítem #4):**
  - **Inflamación suprime CYP3A4 (Smeets et al. 2022, `PMID 35397768`):** cuando la **IL-6 sube de $116 \to 300\text{ pg/mL}$**, el aclaramiento de midazolam cae **$-24\%$**; paralelamente, un ascenso de creatinina de **$100 \to 200\ \mu\text{mol/L}$** reduce en **$-60\%$** el aclaramiento renal del metabolito activo **$1\text{-OH-MG}$**, causando despertar impredecible por días! (*Nota de auditoría Ítem #4: respaldado además en adultos por **Kirwan 2012**, **Le Carpentier 2022** [`PMID 35776074`] y **Shudofsky 2026** [`PMID 42468972`]; eliminado **Neupane 2022** por ser cohorte pediátrica).*
  - **Trampa de la CKRT (Smeets et al. 2024, `PMID 37926072`):** la terapia continua depura hasta el **$43\%$ del metabolito $1\text{-OH-MG}$**, pero **NO depura el midazolam padre** (muy lipofílico y ligado a proteínas $96\%$).
  - **Interacciones fatales en UCI:** **fluconazol** inhibe CYP3A4 elevando hasta **$4\times$** el área bajo curva de midazolam (**Ahonen 1999**); recordar también que los **carbapenémicos derrumban los niveles de ácido valproico en $-96\%$** en $<24\text{ h}$ (precipitando estado epiléptico).
  - **Trampa de las tubuladuras (Insumos PVC vs no-PVC):** las líneas intravenosas estándar de **PVC plastificado adsorben masivamente** midazolam, diazepam y nitroglicerina en sus primeros centímetros plásticos, reduciendo la dosis real recibida al paciente e induciendo falsa resistencia; emplear tubuladuras **no-PVC (polietileno/polipropileno)**.
- **Abstinencia iatrogénica y nuevos ensayos de sedación (2025–2026):**
  - **A2B 2025:** compara clonidina vs dexmedetomidina vs propofol en sedación ligera de UCI; **SESAR 2025** demostró que el **sevoflurano inhalado fue inferior al propofol** en SDRA (más LRA/acidosis/peores días sin VM); **Zhong 2026** documentó rebote de SVT ($88{,}1\%$) tras suspender dexmedetomidina.
- **El séptico ventilado: qué dice la evidencia 2022–2026 (síntesis propia, 116 referencias verificadas en PubMed):**
  - **Profundidad antes que molécula.** La sedación profunda precoz se asocia de forma consistente a peor pronóstico; en una cohorte de 10.204 ventilados (*Lancet Respir Med* 2026), el tiempo en sedación profunda **inducida por fármacos** se asoció a mortalidad ($\text{RR } 1{,}18$) y la sedación profunda **recibida fue 2,8 veces más frecuente que la indicada**: auditar RASS medido contra RASS objetivo. Excepción: en SDRA moderado-grave no se encontró esa asociación. Solo el 75% de los RASS de enfermería eran correctos en una auditoría 2026.
  - **Sedantes.** **A2B** (*JAMA* 2025, $n = 1.404$): ni dexmedetomidina ni clonidina acortaron la extubación frente a propofol, con **más agitación y más bradicardia grave**. En shock séptico, la dexmedetomidina no mostró efecto en mortalidad (metaanálisis de 8 ECAs). Midazolam frente a otros sedantes: **más delirium ($\text{RR } 2{,}39$)**, más tiempo a extubación y más estadía (17 ECAs). Remimazolam: no inferior en ECAs chinos cortos con desenlaces sustitutos — sin lugar todavía. **Volátiles:** SESAR peor en SDRA y metaanálisis con posible aumento de mortalidad ($\text{RR } 1{,}17$, certeza baja) y más LRA con sevoflurano.
  - **Analgesia.** **Ketamina como adyuvante, no monoterapia** (guía SCCS/SSAI 2024), con alucinaciones en 26% vs 7% en una emulación de ensayo. Fentanilo vs morfina (ANALGESIC): más delirium con fentanilo (RR 1,19, $p = 0{,}053$). **Paracetamol IV:** hipotensión en el 45,5%, PAM −6,75 mmHg, más con fiebre — relevante en el séptico con vasopresores. En obesidad, dosificar opioides por peso ideal redujo el consumo (retrospectivo).
  - **Delirium.** Haloperidol (AID-ICU): primario neutro pero **mortalidad menor a 90 días y a 1 año** (44,7% vs 51,6%; desenlace secundario). **Melatonina:** PADIS 2025 la sugiere, pero Pro-MEDIC, DEMEL y el metaanálisis de *Intensive Care Med* 2025 son negativos — opcional, sin beneficio demostrado en ECA. La dexmedetomidina nocturna fue la única intervención de sueño que redujo delirium ($\text{RR } 0{,}43$).
  - **Monitoreo.** El ECA argentino de **BIS** (Huespe, *Chest* 2024, Hospital Italiano) no mejoró días libres de delirium/coma en general, pero **redujo el propofol** y mejoró ese desenlace en sedación $> 24$ h.
  - **Bundle y movilización.** El primer ECA pragmático del **bundle ABCDEF fue negativo en delirium** (37,9% vs 36,4%, adherencia completa solo el 50% de los días): mantenerlo sin prometerle el efecto. **TEAM:** la movilización precoz intensificada no aumentó los días vivo fuera del hospital y tuvo **más eventos adversos**, peor en pacientes con vasopresores.
  - **PRIS en cohorte:** incidencia 2,9% con mortalidad asociada del 36,8%, en infusiones de mediana 147 h.
  - **Umbral real de vigilancia de abstinencia opioide — IWS (`PMID 37151892`, Ítem #12):** vigilar abstinencia iatrogénica desde **$\ge 72\text{ horas}$ de infusión continua** o dosis acumuladas **$\ge 1.200\ \mu\text{g/día}$ de fentanilo ($\approx 50\ \mu\text{g/h}$)** — no esperar a $> 5\text{ días}$!

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "Un paciente con midazolam en CKRT no acumula droga porque la máquina 'lava' los sedantes."**
   - **Realidad (Smeets 2024; Le Carpentier 2022):** la CKRT depura **$43\%$ de $1\text{-OH-MG}$**, pero **NO depura el midazolam padre**, mientras la IL-6 alta bloquea su metabolismo CYP3A4 ($-24\%$) y el fluconazol multiplica su exposición hasta **$4\times$** (**Ahonen 1999**).
2. **Mito: "Medimos 'zonulina' sérica comercial y probióticos para sellar el intestino en shock séptico."**
   - **Realidad (Scheffler 2018; PROSPECT 2021; PROPATRIA):** el ELISA comercial mide **properdina**, no zonulina; y los probióticos aumentan bacteriemia ($\text{OR } 14{,}02$) e isquemia letal en críticos inestables.
3. **Mito: "El paciente en shock con vasopresores necesita nutrición enteral plena (25–30 kcal/kg/d) desde el día 1."**
   - **Realidad (NUTRIREA-2/3):** en shock con vasopresores altos, enteral plena precoz dispara isquemia mesentérica ($\text{HR } 3{,}84$); mejor inicio hipocalórico trófico ($6\text{ kcal/kg/d}$).
4. **Mito: "Solo buscamos síndrome por propofol (PRIS) cuando supera 7 días, y solo buscamos abstinencia opioide después del día 5."**
   - **Realidad:** PRIS aparece incluso precozmente cuando la dosis excede **$5\text{–}6\text{ mg/kg/h}$** ($17\text{–}31\%$ incidencia; **Pitié-Salpêtrière 2025**; **CPK $\ge 5.000$**); y la abstinencia opioide (IWS) exige vigilancia ya desde **$\ge 72\text{ h}$ o $\ge 1.200\ \mu\text{g/día}$ de fentanilo** (**Ítem #12**).
5. **Mito: "En un paciente séptico con carbapenem, su anticonvulsivante habitual ácido valproico seguirá protegiéndolo."**
   - **Realidad:** los carbapenémicos reducen la valproatemia en **$-96\%$**, exigiendo cambio inmediato de fármaco antiepiléptico.

---

## 4. Especificación del Simulador / Atlas Interactivo

- **Nombre UI:** *Simulador Integrado Hepato-Intestinal y Neuro-Farmacológico (SRLI / PRIS / MIRA-PK Midazolam)*
- **Controles:** `IL-6 / Inflamación` ($20\text{–}600\text{ pg/mL}$), `SCr` ($70\text{–}350\ \mu\text{mol/L}$), `CKRT activa` (toggle), `Fluconazol concomitante` (toggle), `Tubuladura PVC vs No-PVC`, `Dosis Propofol` ($1\text{–}8\text{ mg/kg/h}$), `Dosis Fentanilo` ($\mu\text{g/h}$) + `Horas de infusión`, `Bilirrubina / INR / AST`, `Vasopresor + Kcal enteral`.
- **Salidas:** alerta **Chen 2026** ($\text{Bb}>0{,}75$ o $\text{INR}>1{,}45$), riesgo **PRIS** ($1{,}1\% / 17\% / 31\%$), cálculo cinético de acumulación de **Midazolam + $1\text{-OH-MG}$** (Smeets 2022/2024 + Ahonen 1999 + adsorción PVC), bandera **IWS ($\ge 72\text{ h}$ / $\ge 1.200\ \mu\text{g/d}$)** y alerta **NUTRIREA-2/3** de isquemia mesentérica.
- **SVG:** eje hepato-intestino-mitocondria cerebral integrando Zona 3 / BSEP-CYP3A4 / vellosidad intestinal / cadena respiratoria CPT-I.

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** Varón de $59\text{ años}$ con shock séptico pulmonar sedado con **propofol a $6{,}5\text{ mg/kg/h}$** durante $44\text{ h}$ para control de asincronía en SDRA. Pese a estabilidad hemodinámica previa, desarrolla bradicardia súbita con patrón ECG tipo Brugada en V1–V2, **lactato $9{,}2\text{ mmol/L}$, $\text{K}^+\ 6{,}4\text{ mEq/L}$, lipemia macroscópica y $\text{CPK } 14.500\text{ U/L}$**. ¿Cuál es la fisiopatología y conducta terapéutica de rescate MÁS adecuada?
- A) Se trata de un infarto agudo de miocardio por hipovolemia; mantener propofol para bajar consumo cerebral de $\text{O}_2$ e iniciar bicarbonato en bolos rápidos repetidos.
- B) Es un **Síndrome por Infusión de Propofol (PRIS)** ($31\%$ incidencia cuando $>6\text{ mg/kg/h}$) por bloqueo de **CPT-I y Complejos I–III/CoQ10**; suspender propofol de inmediato, aportar **glucosa IV $6\text{–}8\text{ mg/kg/min}$**, evitar bicarbonato en bolo, iniciar **CKRT** para potasio/ácidos y sostener shock cardiogénico con medidas no adrenérgicas (milrinona/glucagón/VA-ECMO).
- C) Cambiar a **sevoflurano inhalado** porque SESAR (2025) demostró su superioridad sobre propofol en SDRA grave.
- D) El umbral de seguridad del propofol para PRIS garantiza ausencia total de riesgo mientras la infusión dure menos de 72 horas sin importar los $\text{mg/kg/h}$.
- E) Indicar epinefrina en dosis crecientes como único sostén hasta que baje la CPK espontáneamente.

**Pregunta 2.** Una paciente adulta séptica en **CKRT** con inflamación sistémica intensa ($\text{IL-6 } 300\text{ pg/mL}$), creatinina previa en ascenso ($100 \to 200\ \mu\text{mol/L}$) y candidiasis tratada con **fluconazol IV** recibe infusión de **midazolam** por tubuladura de PVC estándar. A partir de los hallazgos de **Smeets (2022, 2024)**, **Le Carpentier (2022)**, **Shudofsky (2026)** y **Ahonen (1999)**, señale la opción CORRECTA:
- A) La CKRT depura eficientemente el $90\%$ del midazolam padre, anulando el efecto inhibidor de la IL-6 y del fluconazol sobre el CYP3A4.
- B) El ascenso de IL-6 reduce $\sim 24\%$ el aclaramiento hepático de midazolam vía CYP3A4, fluconazol multiplica hasta $4\times$ la exposición, la caída renal frena $-60\%$ la salida de **$1\text{-OH-MG}$** (aunque la CKRT logra aclarar ~$43\%$ de $1\text{-OH-MG}$, **no** depura midazolam padre) y el plástico de PVC adsorbe droga; todo junto vuelve caótico e impredecible el despertar.
- C) La evidencia adulta principal para este fenómeno proviene del ensayo de Neupane et al. (2022).
- D) El metabolito $1\text{-OH-midazolam}$ es farmacológicamente inactivo ($\text{Ki} > 1.000\text{ nM}$).
- E) Si la paciente convulsiona por encefalopatía, añadir **meropenem a su ácido valproico** mantiene o potencia los niveles de valproato.

**Pregunta 3.** Respecto al eje hepato-intestinal, microbioma y encefalopatía séptica (2018–2026), marque la afirmación CORRECTA:
- A) Los kits comerciales de "zonulina" sérica miden exclusivamente pre-haptoglobina 2 específica de uniones estrechas intestinales según Scheffler (2018).
- B) En el monitoreo electroencefalográfico continuo (**Ferlini 2023**, $7.431\text{ h}$), las convulsiones electrográficas francas aparecieron en el $65\%$ de los pacientes sépticos con encefalopatía.
- C) En **NUTRIREA-2**, la nutrición enteral plena precoz durante shock con vasopresores altos incrementó la isquemia mesentérica (**$\text{HR } 3{,}84$**), y **PROSPECT (2021)** mostró riesgo de bacteriemia con probióticos ($\text{OR } 14{,}02$).
- D) SuDDICU (2026) demostró que la descontaminación digestiva selectiva reduce la mortalidad hospitalaria en un $20\%$ absoluto en cualquier UCI.
- E) La vigilancia de abstinencia iatrogénica a opioides (IWS) recién comienza cuando el paciente supera los 7 días de fentanilo sin importar la dosis diaria.

**Pregunta 4.** ¿Qué demostraron **Chen et al. (2026)** sobre la disfunción hepática asociada a sepsis (SALD/SRLI) y **Ferlini / PRORETRO** sobre evaluación neurológica?
- A) En Chen 2026 (SHAP), valores sutiles de **bilirrubina $> 0{,}75\text{–}0{,}80\text{ mg/dL}$ e $\text{INR} > 1{,}45$** anticipan SRLI antes del criterio clásico ($\text{Bb}>2$, $\text{INR}>1{,}5$), mientras **Ferlini 2023** ($0\%$ convulsiones, $25\%$ descargas periódicas $\text{OR } 8{,}98$) y **PRORETRO** ($\text{P14}>16\text{ ms}$, $\text{HR } 3{,}0$) estratifican gravedad en SAE.
- B) En shock séptico puro sin drogas, el hígado hipóxico eleva primero la fosfatasa alcalina $>10\times$ con transaminasas normales.
- C) El estudio de Peng 2024 ($n=51$) demostró definitivamente en un ensayo fase III multicéntrico que todo séptico debe mantenerse con $\text{PAM } 85\text{ mmHg}$.
- D) El ensayo MENDS2 probó que la dexmedetomidina elimina completamente el delirio respecto al propofol ligero ($0\%$ vs $40\%$).
- E) La lactatemia y el INR normal excluyen por completo cualquier fallo de glucuronidación o metabolismo de fármacos en el día 5.

<!-- practica-2026-11-26 -->
**Pregunta 5.** En 7.431 horas de EEG continuo en sépticos sin enfermedad neurológica previa (Ferlini 2023):
- A) El 25% tuvo estatus epiléptico no convulsivo.
- B) No hubo convulsiones; las descargas periódicas (25%) se asociaron a encefalopatía, peor función y mortalidad: el cEEG sirve como escala de severidad.
- C) El EEG fue normal en el 90%.
- D) Las descargas periódicas requieren antiepilépticos.
- E) La reactividad del EEG no tuvo valor pronóstico.

**Pregunta 6.** Ensayo **A2B** (*JAMA* 2025) en ventilados: frente a propofol, la dexmedetomidina y la clonidina:
- A) Acortaron la extubación en 2 días.
- B) No acortaron el tiempo a extubación y dieron más agitación y más bradicardia grave.
- C) Redujeron la mortalidad a 180 días.
- D) Eliminaron el delirium.
- E) Solo se compararon con midazolam.

<details>
<summary>Ver respuestas y justificación tripartita (Preguntas 1–4)</summary>

1. **Respuesta correcta: B.** *Justificación:* Resume fisiopatología exacta del PRIS (CPT-I + CI–III/CoQ10), tasas dosis-dependientes ($1{,}1\% \to 17\% \to 31\%$), $\text{CPK} \ge 5.000$ (Schroeppel 2014) y rescate específico. Refuta SESAR 2025 (sevoflurano inferior a propofol en SDRA).
2. **Respuesta correcta: B.** *Justificación:* Integra exactamente los hallazgos de la tesis MIRA-PK (**Ítem #4**): Smeets 2022/2024, Le Carpentier 2022, Shudofsky 2026 (descartando Neupane pediátrico), Ahonen 1999 (fluconazol $\times 4$), adsorción en PVC y alerta carbapenem+valproato ($-96\%$).
3. **Respuesta correcta: C.** *Justificación:* NUTRIREA-2 ($\text{HR } 3{,}84$) y PROSPECT ($\text{OR } 14{,}02$). Descarta A (Scheffler 2018: properdina), B (Ferlini: $0\%$ convulsiones), D (SuDDICU: $27{,}9\%$ vs $29{,}5\%$ NS) y E (**Ítem #12**: $\ge 72\text{ h}$ o $\ge 1.200\ \mu\text{g/d}$ fentanilo).
4. **Respuesta correcta: A.** *Justificación:* Señala exactamente Chen 2026 SHAP, Ferlini 2023 y PRORETRO, manteniendo cautela frente al $n=51$ de Peng 2024 vs OPTPRESS.

5. **Respuesta correcta: B.** *Justificación:* `PMID 37161485`. En el sedado profundo, el examen de tronco (tusígeno, fotomotor, oculocefalógiro) aporta información gratis (PRORETRO).
6. **Respuesta correcta: B.** *Justificación:* `PMID 40388916`. En el séptico ventilado manda la profundidad de la sedación más que la molécula (MENDS2).

</details>

### 5.2 Casos "Detectá el error de guardia" (2 casos)
1. **Caso 1 — "Tiene 72 h de fentanilo a 60 µg/h (1.440 µg/d) pero todavía no lleva 5 días, así que cortamos de golpe la bomba sin pauta de transición":** Agitación severa, taquicardia $135$, diarrea e hipertensión a las 8 horas que se confunden con nuevo shock o infección.
   - *Error oculto:* **Ítem #12 (`PMID 37151892`)**: ya superó ambos umbrales de riesgo para **síndrome de abstinencia iatrogénica ($\ge 72\text{ h}$ y $\ge 1.200\ \mu\text{g/d}$)**.
2. **Caso 2 — "Epiléptico séptico estable con valproato a quien se rotó antibiótico a meropenem hace 36 h, y presenta estatus epiléptico":** El equipo solicita TAC nueva sin revisar interacciones.
   - *Error oculto:* los **carbapenémicos desploman los niveles séricos de ácido valproico en $-96\%$** por inducción de acilpéptido hidrolasa/inhibición de hidrólisis enteral del glucurónido.

### 5.3 Flashcards de repaso rápido (6 tarjetas)
1. **¿Qué mide realmente el kit comercial de "zonulina" (Scheffler 2018, `PMID 29459849`)?** → **Properdina** (complemento), **NO pre-haptoglobina 2**.
2. **¿Cómo varía la incidencia de PRIS con la dosis de propofol?** → Basal **$1{,}1\%$** $\to$ **$\ge 5\text{ mg/kg/h}$ ($17\%$)** $\to$ **$> 6\text{ mg/kg/h}$ ($31\%$)**; vigilar **$\text{CPK} \ge 5.000\text{ U/L}$**.
3. **¿Qué depura y qué NO depura la CKRT respecto al midazolam (Smeets 2024)?** → Depura **$43\%$ del metabolito $1\text{-OH-MG}$**, pero **NO depura midazolam padre**; además IL-6 alta ($300\text{ pg/mL}$) reduce su CL en $-24\%$.
4. **¿Qué ensayos adultos reemplazan a Neupane 2022 (pediátrico) en PK de midazolam?** → **Le Carpentier 2022** (`PMID 35776074`), **Smeets 2022/2024** (`35397768`/`37926072`) y **Shudofsky 2026** (`PMID 42468972`).
5. **¿Desde qué umbral temporal o de dosis diaria se debe prevenir abstinencia opioide (IWS)?** → **$\ge 72\text{ horas}$** o **$\ge 1.200\ \mu\text{g/día}$ de fentanilo ($\approx 50\ \mu\text{g/h}$)**.
6. **¿Qué ocurre con el ácido valproico al iniciar un carbapenémico y con midazolam al dar fluconazol?** → Carbapenem **reduce valproato $-96\%$**; fluconazol **eleva midazolam hasta $4\times$**.
7. **¿Qué mostró SuDDICU sobre resistencia?** → Menos organismos resistentes con SDD (16,8% vs 26,8%), con mortalidad a 90 días neutra (27,9% vs 29,5%).

---

## 6. Referencias Verificadas y Registro de Correcciones

1. **Chen et al.** Early SHAP prediction of sepsis-associated liver dysfunction ($\text{Bb}>0.75\text{–}0.80$, $\text{INR}>1.45$, $\text{AUC } 0.867/0.862$). 2026.
2. **Scheffler L et al.** Commercial "zonulin" ELISA detects properdin rather than prehaptoglobin-2. 2018. `PMID 29459849`.
3. **Varkila MRJ et al.** *Ann Intensive Care*. 2024. `PMID 38536623`; **Wozniak H (2024); SuDDICU** *N Engl J Med*. 2026. `PMID 41159880`; metaanálisis bayesiano de SDD, *NEJM Evid*. 2026. `PMID 41985173`; **PROSPECT** (2021) `PMID 34546300`; **NUTRIREA-2 (2018) & NUTRIREA-3 (2023).** **Soranno DE et al. (PQI).** *Crit Care*. 2025;29:81. `PMID 40011975`. **Serbanescu 2025** (scFOS en trauma), *BMC Med*. `PMID 41462238`; inulina en sepsis, *Crit Care*. 2025. `PMID 39806400`. I-FABP/citrulina vs endoscopia `PMID 41399684`; AGI/GIDS y mortalidad `PMID 41944494`; ecografía gástrica (Frontiers) `PMID 42088308`; TMF piloto `PMID 42174754`.

> Fuentes de las ampliaciones de 2.2 y 2.3: síntesis propias *Intestino, barrera y microbioma en sepsis* y *Encefalopatía asociada a sepsis 2024–2026* (bóveda). Lectura a nivel de abstract o resumen de resultados; los trabajos en revistas pay-to-publish están marcados.
4. **Ferlini L et al.** Periodic discharges and outcome in septic patients. *Crit Care*. 2023;27:179. `PMID 37161485`. **PRORETRO** — Altered lower brainstem response and mortality in deeply sedated critically ill patients. *Intensive Care Med*. 2025;51(6):1050-1061. `PMID 40512201`. **Peng Q et al.** Autoregulation-directed BP management and delirium in septic shock ($n=51$). *J Intensive Med*. 2024. `PMID 39035614`. **Hughes CG et al. (MENDS2).** *N Engl J Med*. 2021. `PMID 33528922`.
4b. **Shankar-Hari M et al.** Current knowledge and challenges of SAE. *Intensive Care Med*. 2026;52(8):1679-1696. `PMID 42301312`. **Hippensteel JA et al.** Heparan sulfate fragments mediate septic cognitive dysfunction. *J Clin Invest*. 2019. `PMID 30720464`. **Polito A et al.** Brain injury in human septic shock (MRI). *Crit Care*. 2013. `PMID 24047502`. **O'Keeffe F et al.** Serum biomarkers of delirium (systematic review). *Intensive Care Med Exp*. 2025. `PMID 40889075`. **Chung HY et al.** NfL in community-acquired pneumonia. 2023. `PMID 36479924`. **Hu H et al.** Succinate in SAE. *iScience*. 2025. `PMID 41550731`. **Sun M et al.** Postoperative sepsis and dementia. *Crit Care*. 2025. `PMID 39915868`. **Underwood J et al.** Dementia after bloodstream infection. *Age Ageing*. 2026. `PMID 42328806`. **Sahu R et al.** Cognitive recovery after critical illness. *J Intensive Care Med*. 2026. `PMID 41248045`.
5. **Krajčová A (2015); Pitié-Salpêtrière Cohort (2025); Schroeppel TJ (2014); SESAR (2025); A2B (2025).**
6. **Tesis MIRA-Research — Midazolam PK:** **Smeets TJL et al.** 2022 (`PMID 35397768`) & 2024 (`PMID 37926072`); **Le Carpentier E et al.** 2022 (`PMID 35776074`); **Shudofsky KN et al.** 2026 (`PMID 42468972`); **Kirwan C (2012); Ahonen J (1999).**
7. **Opioid iatrogenic withdrawal risk ($\ge 72\text{ h}$ / $\ge 1.200\ \mu\text{g/d}$).** `PMID 37151892`.
8. **Sedoanalgesia en el ventilado (síntesis propia, PMID verificados):** PADIS 2025 `PMID 39982143`; sedación profunda en 10.204 ventilados (*Lancet Respir Med* 2026) `PMID 41086817`; COVID-SED `PMID 35705989`; auditoría de RASS `PMID 42300982`; **A2B** (*JAMA* 2025) `PMID 40388916`; dexmedetomidina en shock séptico (MA) `PMID 40966880`; midazolam vs otros sedantes (MA 17 ECAs) `PMID 39827012`; **SESAR** `PMID 40098564`; volátiles (MA) `PMID 40474220`; ketamina (guía SCCS/SSAI) `PMID 39198198`, alucinaciones `PMID 40323454`; **ANALGESIC** `PMID 37235918`; paracetamol IV e hipotensión `PMID 40578485`; opioides por peso ideal `PMID 42262836`; **AID-ICU** `PMID 36286254`, a 1 año `PMID 38170227`; **Pro-MEDIC** `PMID 35220473`, **DEMEL** `PMID 40608082`, MA de melatonina `PMID 41051561`; dexmedetomidina nocturna (MA sueño) `PMID 37302381`; **BIS (Huespe, *Chest* 2024)** `PMID 38901489`; **ABCDEF ECA (Sosnowski 2026)** `PMID 42159452`; **TEAM** `PMID 36286256`, eventos adversos `PMID 39826257`; PRIS en cohorte `PMID 35724444`.

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- **Ítem #4:** Retirada la cita pediátrica **Neupane 2022 (`PMID 36036654`)** en adultos y reemplazada por **Le Carpentier 2022**, **Smeets 2022/2024** y **Shudofsky 2026**.
- **Ítem #12:** Actualizado el umbral de vigilancia IWS de "$>5$ días" al umbral validado **$\ge 72\text{ h}$ o $\ge 1.200\ \mu\text{g/día}$ de fentanilo**.
- **Ítem #16:** Expuesto el artefacto metodológico de los ELISAs de "zonulina" (**Scheffler 2018**: properdina, no pre-haptoglobina 2) anulando correlaciones no válidas con pTLR4.
