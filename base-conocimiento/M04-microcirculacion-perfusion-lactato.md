---
id: M04
titulo: "Microcirculación, Transporte de O₂, Oxigenación, Gap CO₂ y Biología del Lactato"
subtitulo: "De la heterogeneidad capilar (Østergaard) y ANDROMEDA-SHOCK-2 al efecto Haldane (Dubin 2025), Gudelunas 2024 y lactilación"
ultima_actualizacion: 2026-11-25
piloto_fase2: false
fuentes_nlm:
  - "Microcirculacion - Bibliografia extensa"
  - "Microcirculacion - Sintesis clinica y fenotipos"
  - "Oxigeno - clase Martes UTI"
  - "General"
  - "Varios"
fuentes_vault:
  - "Sepsis y Shock Septico/"
  - "04-Recursos/Papers/MOC Sepsis.md"
  - "00 Radar Bibliografico/"
palabras_clave:
  - microcirculación
  - CTH
  - Ince
  - PPV
  - ANDROMEDA-SHOCK-2
  - CRT
  - Gap CO2
  - efecto Haldane
  - hiperoxia
  - hipoxemia oculta
  - lactato
  - lactilación
---

# M04 — Microcirculación, Transporte de O₂, Oxigenación, Gap CO₂ y Biología del Lactato

---

## 1. Capa Base — Desde cero (Fisiología, Histología y Fundamentos)

### 1.1 Transporte global y extracción tisular de oxígeno ($\text{DO}_2$ / $\text{VO}_2$ / $\text{ERO}_2$)
La entrega sistémica de oxígeno hacia los tejidos depende del gasto cardíaco ($\text{GC}$) y del contenido arterial de oxígeno ($\text{CaO}_2$):

$$\text{CaO}_2 = (\text{Hb} \times 1{,}34 \times \text{SaO}_2) + (0{,}003 \times \text{PaO}_2)$$
$$\text{DO}_2 = \text{GC} \times \text{CaO}_2 \times 10\ (\text{mL/min})$$
$$\text{VO}_2 = \text{GC} \times (\text{CaO}_2 - \text{CvO}_2) \times 10, \qquad \text{ERO}_2 = \frac{\text{VO}_2}{\text{DO}_2}$$

En fisiología normal, cuando la $\text{DO}_2$ cae, los tejidos mantienen constante su $\text{VO}_2$ aumentando progresivamente la **tasa de extracción ($\text{ERO}_2$)** desde ~$25\%$ hasta ~$50\text{–}60\%$ (**fase independiente de flujo**). Al cruzar el punto crítico (**$\text{DO}_{2\text{crit}} \approx 300\text{–}330\text{ mL/min/m}^2$**), la extracción se satura y la $\text{VO}_2$ cae linealmente con el flujo (**fase dependiente de flujo**), disparando glucólisis anaerobia e hiperlactatemia hipóxica verdadera.

En el **shock séptico**, la curva $\text{DO}_2/\text{VO}_2$ sufre dos alteraciones críticas: (1) el techo de $\text{ERO}_2$ máxima se aplana por *shunt* microcirculatorio y falla mitocondrial (ver [M02](#module-M02)), y (2) la demanda metabólica basal suele elevarse, haciendo posible la **hipoxia tisular localizada aun con $\text{DO}_2$ global y $\text{S}_{\text{vc}}\text{O}_2$ aparentemente normales o altas**.

### 1.2 Arquitectura funcional de la unidad microvascular ($< 20\ \mu\text{m}$) y reología eritrocitaria
La macrohemodinamia (presión arterial, PVC, gasto cardíaco) únicamente transporta sangre hasta los grandes vasos; el intercambio real de gases, nutrientes y lactato sucede en vasos **$< 20\ \mu\text{m}$** (arteriolas terminales, metaarteriolas, capilares verdaderos y vénulas postcapilares):
- **Difusión radial de Krogh:** la distancia máxima que puede difundir el $\text{O}_2$ desde un capilar permeable hacia las mitocondrias disminuye drásticamente si el edema intersticial separa las células del endotelio (ver [M03](#module-M03)) o si capilares vecinos se cierran dejando "islotes hipóxicos".
- **Deformabilidad eritrocitaria (Baskurt; Piagnerelli):** en estado sano, un glóbulo rojo de $\sim 7{,}5\ \mu\text{m}$ debe deformarse para atravesar capilares de $3\text{–}5\ \mu\text{m}$. En sepsis, el estrés oxidativo y la lesión del glicocálix/espectrina vuelven rígido al eritrocito, enlenteciendo el tránsito capilar y favoreciendo microtrombosis y agregación junto a plaquetas y NETs ([M08](#module-M08)).

### 1.3 Ventanas clínicas e integradores metabólicos al pie de cama
1. **Ventana cutánea — Tiempo de Llenado Capilar (CRT):** compresión firme durante $10\text{ s}$ sobre la falange distal (con placa o dedo estandarizado) y cronómetro: normal $\le 3{,}0\text{ s}$. Es un reflejo directo del flujo arteriolar cutáneo y del tono simpático local, respondiendo en minutos a intervenciones reales de flujo/presión.
2. **Saturación venosa central ($\text{S}_{\text{vc}}\text{O}_2$):** balance global entre aporte y consumo ($\approx 1 - \text{ERO}_2$). Valores bajos ($< 65\text{–}70\%$) con anemia/hipoxia/bajo GC indican déficit de aporte o hiperextracción; valores **altos ($> 80\%$)** con lactato alto traducen *shunt* microcirculatorio o disfunción mitocondrial (*no* bienestar tisular).
3. **Diferencia veno-arterial de $\text{PCO}_2$ ($\Delta P_{\text{v-a}}\text{CO}_2$ o Gap $\text{CO}_2$):** por la ecuación de Fick aplicada al $\text{CO}_2$, $\Delta P_{\text{v-a}}\text{CO}_2 \propto \text{VCO}_2 / \text{GC}$. Normalmente $\le 6\text{ mmHg}$; un gap $> 6\text{ mmHg}$ sugiere clásicamente flujo sistémico insuficiente para "lavar" el $\text{CO}_2$ tisular (salvo artefacto Haldane!).
4. **Lactato sérico:** lejos de ser un mero "desecho de anaerobiosis", en sepsis responde al menos a tres fuentes simultáneas: (a) hipoperfusión verdadera por $\text{DO}_2 < \text{DO}_{2\text{crit}}$, (b) **glucólisis aerobia acelerada por estímulo $\beta_2$-adrenérgico** sobre la bomba $\text{Na}^+/\text{K}^+$-ATPasa muscular (**Levy 2005**, reversible con ouabaína experimental), y (c) **aclaramiento hepático/renal reducido**.

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Microcirculación sublingual, CTH maligna e incoherencia hemodinámica
- **De Backer et al. 2002:** hallazgo fundacional vigente: la proporción de vasos pequeños perfundidos (**PPV**, $< 20\ \mu\text{m}$) cae dramáticamente en sepsis al **$48\%$ frente al $90\%$** en sujetos sanos, independientemente de la PAM sistémica una vez corregida la hipotensión extrema.
- **Heterogeneidad del Tiempo de Tránsito Capilar — CTH "maligna" (Østergaard et al. 2015):** cuando unos capilares quedan obstruidos por microtrombos/edema y los vecinos reciben un flujo altísimo de compensación, los eritrocitos cruzan demasiado rápido (*shunt* funcional), reduciendo el tiempo disponible para descargar $\text{O}_2$. Subir ciegamente el gasto cardíaco con inotrópicos en presencia de CTH alta puede incluso empeorar el desvío capilar sin oxigenar los islotes hipóxicos.
- **Incoherencia hemodinámica (Ince 2015) y fenotipos 2025:** Ince clasificó 4 tipos de desconexión macro-micro: Tipo 1 (heterogeneidad inflamatoria), Tipo 2 (hemodilución por exceso de fluidos que reduce densidad funcional capilar y hematocrito capilar), Tipo 3 (taponamiento/vasoconstricción venosa por PVC alta o vasopresores excesivos) y Tipo 4 (edema intersticial con ampliación de la distancia de Krogh). Las nuevas taxonomías integradas **4V-2C (Vélez-Páez et al. 2025)** y **SLOOP (Huang et al. 2025)** refinan esta lectura acoplando variables venosas, macrohemodinámicas y de microscopía capilar.
- **Utilidad clínica actual de la videomicroscopía SDF/IDF:**
  - **DAMIS 2023:** integrar mediciones de microcirculación sublingual al pie de cama modificó efectivamente las prescripciones médicas en UCI, pero **no redujo la mortalidad a 30 días** — recordatorio de que medir mejor un lecho no mejora supervivencia mientras no exista una terapia microcirculatoria selectiva eficaz asociada al protocolo.
  - **Zhang et al. 2026:** conservar una **$\text{PPV}_{6\text{h}} > 68{,}6\%$** tras la resucitación temprana predijo supervivencia con **$\text{AUC } 0{,}788$**, reafirmando su valor como marcador pronóstico dinámico.
- **Monitoreo: qué avanzó y qué no (síntesis propia):**
  - **El consenso sigue siendo el de 2018** (segundo consenso ESICM de microcirculación sublingual): densidad capilar funcional y hematocrito capilar como capacidad **difusiva**, velocidad eritrocitaria como capacidad **convectiva**. No hay un tercero.
  - **Lo que sí avanzó es el análisis automatizado** (MicroTools, visión computacional, 2026), que ataca el cuello de botella del análisis offline por operador entrenado.
  - **Un tubo de sangre le ganó a la cámara** (piloto 2025, un centro): heparán sulfato plasmático por cromatografía-masas **AUC 0,85** vs densidad de De Backer **0,71**. Coherente con CLOVERS (M03), pero el método tampoco está disponible.
  - **El momento importa:** las alteraciones que **persisten a las 72 h** pesan más que las iniciales, y la PPV es el predictor microcirculatorio más fuerte. La pendiente de recuperación de la $\text{StO}_2$ tras el test de oclusión vascular (NIRS) se altera antes que los marcadores globales.
  - **Pruebas hemodinámicas agudas para medir el acoplamiento macro-micro (Crit Care 2026, no leído completo):** usar la elevación pasiva de piernas y el desafío de PAM para identificar a quién le sirve seguir reanimando la macrohemodinamia y a quién solo le suma sobrecarga y toxicidad adrenérgica.
  - **Se sabe medir la microcirculación mucho mejor de lo que se sabe tratarla:** no hay intervenciones microcirculatorias específicas nuevas 2024–2026 (vasopresina, terlipresina y fluidos con datos de 2010–2013).
- **Reología eritrocitaria (Baskurt / Piagnerelli):** la rigidez eritrocitaria sigue siendo un mecanismo clásico fisiopatológicamente validado; en nuestra revisión 2024–2026 **no surgieron nuevos ECAs** de terapias específicas modificadoras de deformabilidad eritrocitaria con beneficio clínico duro.

### 2.2 CRT y Gap $\text{CO}_2$: Del protocolo ANDROMEDA-2 al efecto Haldane (2025–2026)
- **CRT como guía operativa superior al lactato seriado:**
  - **ANDROMEDA-SHOCK-2 (*JAMA* 2025, `n = 1.467`, detallado en M05):** confirmó que una estrategia fisiológica guiada por **CRT** reduce fluidos en 6 h ($595$ vs $847\text{ mL}$), mejora días libres de soporte orgánico ($16{,}5$ vs $15{,}4$) y alcanza Win Ratio positivo ($\text{SWR } 1{,}16$, $p = 0{,}04$).
  - **YesReCan (Brosse et al. 2026):** valida la estandarización práctica y reproducibilidad interobservador del CRT en el paciente crítico real.
- **El péndulo del Gap $\text{CO}_2$ ($\Delta P_{\text{v-a}}\text{CO}_2$):**
  - **Valor pronóstico (Cheng et al. 2025):** un gap persistentemente $> 6\text{ mmHg}$ identificó mortalidad marcadamente superior (**$46{,}7\%$ vs $8{,}3\%$** cuando se normaliza).
  - **Fracaso como algoritmo único de intervención:** tanto **Su et al. 2018** como el ensayo aleatorizado **LACTEL 2025** resultaron **negativos** al intentar guiar la resucitación estrictamente para corregir $\Delta P_{\text{v-a}}\text{CO}_2$.
  - **Efecto Haldane como gran trampa interpretativa (Dubin & Pozo, *Chest* 2025):** al oxigenar más la hemoglobina (o cuando coexisten hiperoxia e hiperflujo con $\text{S}_{\text{v}}\text{O}_2$ elevada), se desplaza el $\text{CO}_2$ desde la hemoglobina hacia la forma disuelta aumentando artificialmente la $P_{\text{v}}\text{CO}_2$ sin cambios en el contenido total de $\text{CO}_2$. Resultado: **un $\Delta P_{\text{v-a}}\text{CO}_2 > 6\text{ mmHg}$ puede ser un falso positivo inducido por efecto Haldane/hiperoxia**, desencadenando bolos o dobutamina innecesarios si no se integra el contenido de $\text{CO}_2$, $\text{S}_{\text{vc}}\text{O}_2$ y CRT.
- **La historia completa del gap, en cuatro pasos (síntesis propia 2026):**
  1. **Fisiología:** el gap es un marcador de **adecuación del flujo** para lavar el $\text{CO}_2$, no de hipoxia tisular (rango normal $2\text{–}6\text{ mmHg}$; Lamia 2006; Ltaief 2021). El cociente $P_{\text{v-a}}\text{CO}_2/C_{\text{a-v}}\text{O}_2 > 1{,}4$ se propuso como señal de metabolismo anaeróbico (Mekontso-Dessap 2002).
  2. **Propuesta como meta:** Vallée 2008 instaló el corte de **6 mmHg** — con $\text{S}_{\text{vc}}\text{O}_2 \ge 70\%$ ya alcanzada, un gap $> 6$ identificaba pacientes todavía mal reanimados — y Ospina-Tascón 2013 ($n = 85$) asoció el gap persistentemente alto en las primeras 6 h con más disfunción orgánica y mortalidad. El $\Delta$ del gap tras un bolo se exploró también como marcador de respuesta a fluidos cuando no hay gasto cardíaco medido (Mesquida, AUC $0{,}76\text{–}0{,}83$).
  3. **Dos ECAs negativos:** Su 2018 (reanimación guiada por el cociente vs $\text{S}_{\text{v}}\text{O}_2$: sin diferencias en mortalidad ni disfunción orgánica) y **LACTEL 2025** ($n = 179$, lactato $\ge 3$): el grupo guiado por índices $\text{CO}_2\text{-O}_2$ recibió **más volumen, más noradrenalina y más dobutamina** sin mejor aclaramiento de lactato ni mortalidad (44,9% vs 33,3%, NS).
  4. **Por qué:** el gap está dominado por el efecto Haldane y la curva de disociación del $\text{CO}_2$ más que por el gasto cardíaco (Dubin y Pozo 2025). Asociación pronóstica no es utilidad terapéutica: el cociente es mayor en no sobrevivientes (SMD $0{,}75$) pero con heterogeneidad del 83% (Dubin 2022).
  - **Conclusión docente:** usar el gap para **interpretar** el estado hemodinámico junto con respuesta a fluidos, ecocardiografía y perfusión periférica; **no** para fijar un objetivo numérico de reanimación.

### 2.3 Oxigenoterapia en Sepsis: Ni hiperoxia (HYPERS2S) ni hipoxemia extrema (LOCO2) + Sesgo del oxímetro
- **Toxicidad microcirculatoria de la hiperoxia:** en modelos fisiológicos (**Farquhar 2009**, **AVOID**, **IOTA**), la hiperoxia ($\text{PaO}_2 > 150\text{–}300\text{ mmHg}$) provoca vasoconstricción arteriolar reactiva (sobre todo coronaria y cerebral) y caída de densidad capilar perfundida.
- **HYPERS2S (Asfar 2017):** detenido precozmente en shock séptico ventilado: $\text{FiO}_2\ 1{,}0$ durante 24 h mostró tendencia adversa en mortalidad (**$43\%$ vs $35\%$**) y más debilidad adquirida en UCI / atelectasias.
- **LOCO2 (Barrot 2020):** el péndulo opuesto restrictivo ($\text{PaO}_2\ 55\text{–}70\text{ mmHg}$ / $\text{SpO}_2\ 88\text{–}92\%$) en SDRA aumentó la **mortalidad a 90 d ($44{,}4\%$ vs $30{,}4\%$)** y los episodios de **isquemia mesentérica**.
- **Consenso de mega-ECAs (HOT-ICU; UK-ROX $n = 16.500$; LOGICAL $n = 1.840$):** sin ventaja clínica de dianas liberales extremas ni conservadoras extremas; la **zona segura práctica en UCI séptica** se sitúa en **$\text{SpO}_2\ 92\text{–}96\%$ ($\text{PaO}_2\ 65\text{–}90\text{ mmHg}$)**.
- **Sesgo cutáneo de la oximetría de pulso (Gudelunas et al. 2024):** en presencia de piel oscura y baja perfusión/vasoconstricción periférica, la **hipoxemia arterial oculta** ($\text{SaO}_2 < 88\%$ medida en gasometría mientras el pulsioxímetro marca $\text{SpO}_2 \ge 92\%$) ocurrió en el **$21{,}1\%$ de los pacientes de piel oscura frente a solo $1{,}1\%$ en piel clara**. Nunca confiar ciegamente en una $\text{SpO}_2$ de $93\%$ si el paciente tiene piel pigmentada y vasopresores/mala perfusión periférica: confirmar por gasometría arterial.

### 2.4 Biología moderna del Lactato (2020–2026): De marcador a señal epigenética
- **Perseguir el lactato con CRT ya normal mata (Kattan et al. 2020):** reanálisis clave de ANDROMEDA-SHOCK: en pacientes cuyo **CRT ya era $\le 3{,}0\text{ s}$**, insistir en administrar más fluidos o inotrópicos para acelerar la caída de un lactato residual duplicó/triplicó el riesgo de muerte (**$\text{aOR } 3{,}3$**).
- **Cinética bifásica y fuentes no hipóxicas (**Ahlstedt 2024; Castro 2026; Levy 2005**):** mientras en las primeras horas (típicamente hasta las $12\text{ h}$, heurística bifásica de **Castro 2026**) el lactato suele reflejar componente hemodinámico modificable, la persistencia $> 12\text{ h}$ con perfusión macro/cutánea recuperada obedece frecuentemente a glucólisis $\beta_2$-adrenérgica (**Levy 2005**), fallo hepático (ver [M11](#module-M11)), hipermetabolismo inflamatorio o hibernación celular.
- **Lactato como molécula inmunomoduladora y epigenética:**
  - **La inmunoparálisis es "todo apagado" (Cheng et al. 2016, *Nat Immunol*):** en leucocitos de sépticos inmunoparalizados caen **a la vez la glucólisis y el metabolismo oxidativo** (no un desplazamiento Warburg ↔ OXPHOS), con recuperación al mejorar el paciente y restauración parcial con IFN-γ. Es la base del brazo IFN-γ de ImmunoSep, que mejoró el SOFA sin cambiar la mortalidad (M02).
  - **Lactilación de histonas (Di et al. 2025; Guo et al. 2026):** el lactato actúa como sustrato epigenético (*lactyl-CoA*) modificando lisinas de histonas. En la única cohorte prospectiva humana con desenlace (**Guo 2026**), los que murieron tenían **menos** lactilación al día 3, no más — con solo 6 no sobrevivientes. El cociente de **Di 2025** no le ganó a la procalcitonina (AUC 0,915 vs 0,932), y el preclínico se contradice sobre si conviene subirla o bajarla. Línea de investigación, no test clínico.
- **El "descenso del lactato" como objetivo: cuatro ángulos, misma dirección (síntesis propia):**
  - **No mide la microcirculación:** el clearance de lactato y el cambio del MFI sublingual se asociaron al SOFA cada uno por su lado, pero **no entre sí** (Puskarich 2016, $n = 23$).
  - **No depende del volumen:** en el post hoc de CLASSIC ($n = 777$), la estrategia **restrictiva no retrasó la resolución de la hiperlactatemia** ($\text{HR } 0{,}94$ el día 1). Si el lactato midiera un déficit corregible con fluidos, el brazo restrictivo habría tardado más.
  - **El valor inicial sí, la trayectoria no:** en 12.132 pacientes de sala, el lactato inicial predijo mortalidad con fuerza (RR 2,65 si 2–3,9; 6,69 si $\ge 4$), pero no bajarlo en 6 h no predijo ni pase a UTI ni muerte (Dudaryk 2021, revista de calidad editorial limitada).
  - **El hígado:** en shock séptico hiperdinámico ovino, el clearance de lactato exógeno está deteriorado **sin hipoperfusión hepática** (bloqueo enzimático de piruvato deshidrogenasa y PEPCK; Tapia 2015). El hígado depura ~50% del lactato: con disfunción hepática metabólica, el lactato baja lento por motivos que los fluidos no corrigen.
- **El lactato también es combustible:** en voluntarios sanos, a 8 mmol/L el lactato aportó el **24% del metabolismo oxidativo cerebral** y redujo ~13% el consumo de glucosa (Koep 2025). No son sépticos, pero muestra que la hiperlactatemia es también un sustrato redistribuido. **No infundir lactato como terapia:** el lactato de sodio hipertónico en shock séptico ovino deterioró la presión y la función cardíaca después de las 12 h (Su 2016).
- **En la cama:** medir el lactato al ingreso para **pronóstico y triaje**; antes de las 6–12 h, un lactato alto obliga a buscar y corregir hipoperfusión; después, con CRT, $\text{S}_{\text{vc}}\text{O}_2$ y gap de $\text{CO}_2$ normales, **es metabolismo y no flujo**, y no debe generar más fluidos ni inotrópicos. En el paciente con catecolaminas altas, parte del lactato es glucólisis $\beta_2$ — lo que no significa betabloquear (M06).
- **Cociente Lactato/Albúmina (LAR):** pese a múltiples series retrospectivas entusiastas, su discriminación pronóstica incremental frente al lactato aislado resultó marginal (**$\text{AUC } 0{,}609$ vs $0{,}598$**), sin utilidad para guiar decisiones individuales al pie de cama.


### Novedades del barrido anual 2025–2026 (PubMed + avisos de correo, leídas en abstract)
> Agregadas el 2026-11-26 desde el abstract de PubMed (no el texto completo). Cada una lleva su PMID. Lista completa de candidatos en `candidatos-pubmed-correo.md`.

- **TARTARE-2S** (*Crit Care Med* 2026, ECA, $n = 194$, lactato $> 3$): apuntar a la **perfusión tisular** permitiendo PAM más baja que la recomendada no aumentó los días vivo con lactato normal y sin vasopresores (23 vs 22), con mortalidad a 30 días 24,7% vs 27,8% y sin señales de seguridad. `PMID 41105050`
- **Límites fisiológicos del CRT** (*Crit Care* 2026, endotoxemia humana, $n = 25$): el CRT cuantitativo siguió un curso **bifásico** que cruzó el umbral de 3 s en ambos sentidos en un mismo episodio (8,3 s a la 1,5 h; 1,3 s a las 5 h con inflamación persistente). La **temperatura de la piel** fue el principal determinante (−1,6 s por desvío estándar). Medir el CRT con la piel en cuenta. `PMID 42706575`
- **TRANSPORT** (*Intensive Care Med* 2026, ECA, 187 pacientes oncológicos con shock séptico y Hb $< 9$): transfundir con umbral de 9 vs 7 g/dL no mejoró la caída del lactato a 12 h (52% vs 50%), tuvo **más trombosis** (13% vs 1%) y mortalidad 46% vs 53% (NS); se detuvo por seguridad. `PMID 42616082`

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "El lactato sigue en 3,8 mmol/L tras 6 horas de resucitación aunque el CRT es de 1,8 s y la diuresis normal: hay que pasar otro litro de Ringer y subir noradrenalina."**
   - **Realidad (Kattan 2020; Ahlstedt 2024; Castro 2026):** perseguir el lactato cuando la perfusión periférica (CRT) ya se normalizó eleva la mortalidad (**$\text{aOR } 3{,}3$**); el lactato puede responder a estímulo $\beta_2$ (Levy 2005) o depuración lenta sin déficit de flujo.
2. **Mito: "Tiene Gap CO₂ de 8 mmHg, por lo tanto el gasto cardíaco es bajo y necesita dobutamina o fluidos."**
   - **Realidad (LACTEL 2025; Dubin & Pozo 2025):** un $\Delta P_{\text{v-a}}\text{CO}_2 > 6\text{ mmHg}$ con $\text{S}_{\text{vc}}\text{O}_2$ alta o hiperoxia puede ser un **falso positivo puro por efecto Haldane**; además LACTEL 2025 demostró que dirigir la terapia por Gap $\text{CO}_2$ no mejora el desenlace frente al estándar.
3. **Mito: "Poner $\text{FiO}_2$ al 100% / $\text{SpO}_2$ 100% da margen de seguridad extra al tejido séptico."**
   - **Realidad (HYPERS2S; Farquhar 2009; UK-ROX):** la hiperoxia genera vasoconstricción arteriolar, estrés oxidativo y caída capilar perfundida; mantener objetivo $\text{SpO}_2\ 92\text{–}96\%$.
4. **Mito: "El pulsioxímetro marca 93%, así que no hace falta gasometría."**
   - **Realidad (Gudelunas 2024):** en pacientes de piel oscura con vasoconstricción/hipoperfusión, la **hipoxemia arterial oculta ($\text{SaO}_2 < 88\%$)** alcanza el **$21{,}1\%$** vs $1{,}1\%$ en piel clara.
5. **Mito: "El cociente Lactato/Albúmina (LAR) es una brújula precisa para la guardia."**
   - **Realidad:** su $\text{AUC}$ global ($0{,}609$ vs $0{,}598$ del lactato solo) carece de poder discriminatorio clínico práctico.

---

## 4. Especificación del Simulador / Atlas Interactivo

- **Nombre UI:** *Simulador Integrado de Microcirculación, Transporte $\text{O}_2$, Haldane y Fenotipo de Lactato*
- **Controles:** `Hb` ($6{,}0\text{–}15{,}0\text{ g/dL}$), `SaO₂` ($82\text{–}100\%$), `PaO₂` ($50\text{–}400\text{ mmHg}$), `Índice Cardíaco` ($1{,}5\text{–}6{,}0\text{ L/min/m}^2$), `CTH / Heterogeneidad capilar (PPV%)` ($30\text{–}95\%$), `CRT` ($1{,}0\text{–}7{,}0\text{ s}$), `Lactato` ($0{,}8\text{–}12{,}0\text{ mmol/L}$), `Horas de resucitación` ($1\text{–}36\text{ h}$), `S_vcO₂` ($40\text{–}92\%$), `Tono piel oscura + vasoconstricción` (toggle), `ΔP_v-a CO₂ medido` ($2\text{–}14\text{ mmHg}$).
- **Motor y salidas:** calcula $\text{CaO}_2$, $\text{DO}_2$ (alerta si $<\text{DO}_{2\text{crit}}\ 300\text{–}330\text{ mL/min/m}^2$), $\text{ERO}_2$, riesgo de vasoconstricción hiperóxica ($\text{PaO}_2 > 150$), alerta **Gudelunas 2024 ($21{,}1\%$ riesgo hipoxemia oculta)**, bandera **Efecto Haldane (Dubin 2025)** si $\text{Gap CO}_2 > 6$ coexiste con $\text{S}_{\text{vc}}\text{O}_2 > 75\%$ / hiperoxia, y clasificador **Kattan 2020** (STOP fluidos si $\text{CRT} \le 3{,}0\text{ s}$ pese a lactato alto).
- **Presets (4):** (1) *Shock con $\text{DO}_2 < 300$ real*, (2) *Trampa Kattan (CRT $1{,}8\text{ s}$ + Lactato $4{,}2$)*, (3) *Trampa Haldane + Hiperoxia ($\text{PaO}_2\ 280$ + $\text{S}_{\text{vc}}\text{O}_2\ 82\%$ + Gap $8$)*, (4) *Hipoxemia oculta Gudelunas (piel oscura + NA alta + $\text{SpO}_2\ 92\%$)*.
- **SVG:** red capilar de Krogh comparando perfusión homogénea ($PPV\ 90\%$) vs CTH maligna/incoherencia de Ince (vasos trombosados + *shunt* rápido + edema intersticial) + curva bifásica $\text{DO}_2/\text{VO}_2$.

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** Varón de $54\text{ años}$, hora $8$ de resucitación por shock séptico neumónico. Recibe noradrenalina $0{,}15\ \mu\text{g/kg/min}$, $\text{PAM } 69\text{ mmHg}$, diuresis $1{,}0\text{ mL/kg/h}$, **$\text{CRT } 1{,}9\text{ s}$**, $\text{S}_{\text{vc}}\text{O}_2\ 73\%$, **lactato actual $3{,}9\text{ mmol/L}$** (descendió desde $6{,}2\text{ mmol/L}$ al ingreso). Un colega propone administrar otro bolo de $1.000\text{ mL}$ y añadir dobutamina para "normalizar el lactato antes de las 12 h". Según **Kattan et al. (2020)** y **ANDROMEDA-SHOCK-2 (2025)**, ¿cuál es la afirmación correcta?
- A) Mientras el lactato supere $2{,}0\text{ mmol/L}$ es obligatorio persistir con bolos de cristaloides hasta normalizarlo, sin importar el CRT.
- B) Escalar resucitación agresiva por lactato persistente cuando el **CRT ya se normalizó ($\le 3\text{ s}$)** se asoció con mayor mortalidad (**$\text{aOR } 3{,}3$**); este lactato en descenso refleja lavado gradual o estímulo adrenérgico $\beta_2$ más que déficit de flujo activo.
- C) La única causa posible de lactato $3{,}9$ en hora $8$ es oclusión coronaria aguda o isquemia mesentérica irreversible.
- D) El cociente Lactato/Albúmina (LAR) predice con $\text{AUC } 0{,}92$ que este paciente responderá a un bolo de albúmina al $20\%$.
- E) Está indicado administrar dicloroacetato o bicarbonato sódico hiperosmolar para normalizar químicamente la cifra de lactato.

**Pregunta 2.** Paciente ventilado con $\text{FiO}_2\ 0{,}85$ ($\text{PaO}_2\ 245\text{ mmHg}$), $\text{PAM } 70\text{ mmHg}$, $\text{IC } 4{,}1\text{ L/min/m}^2$, $\text{CRT } 2{,}2\text{ s}$, $\text{S}_{\text{vc}}\text{O}_2\ 81\%$ y **$\Delta P_{\text{v-a}}\text{CO}_2$ (Gap $\text{CO}_2$) calculado en $8{,}5\text{ mmHg}$**. Aplicando los hallazgos de **Dubin & Pozo (*Chest* 2025)** y **LACTEL (2025)**, ¿qué interpretación fisiológica es la MÁS acertada?
- A) Un Gap $\text{CO}_2 > 6\text{ mmHg}$ confirma con $100\%$ de especificidad bajo gasto cardíaco; requiere inotrópicos de inmediato.
- B) La hiperoxia y alta saturación venosa desplazan el $\text{CO}_2$ de la hemoglobina hacia el plasma por **efecto Haldane**, elevando artificialmente la $P_{\text{v}}\text{CO}_2$ y creando un **falso positivo de Gap $\text{CO}_2$** aun con hiperflujo; además los ECAs LACTEL 2025 y Su 2018 no demostraron beneficio de terapias guiadas por este gradiente aislado.
- C) Se debe subir la $\text{FiO}_2$ a $1{,}0$ como en HYPERS2S para corregir la diferencia venoarterial de $\text{CO}_2$.
- D) En presencia de $\text{IC } 4{,}1\text{ L/min/m}^2$, el aumento del Gap $\text{CO}_2$ indica siempre obstrucción mecánica de vena cava superior.
- E) El efecto Haldane solo ocurre cuando la $\text{PaO}_2$ es inferior a $55\text{ mmHg}$.

**Pregunta 3.** Respecto a las metas de oxigenación en el paciente séptico crítico y la oximetría de pulso, señale el enunciado CORRECTO:
- A) El ensayo HYPERS2S demostró que administrar $\text{FiO}_2\ 1{,}0$ durante $24\text{ h}$ en shock séptico reduce la mortalidad y previene debilidad adquirida en UCI.
- B) El ensayo LOCO2 demostró que mantener $\text{PaO}_2\ 55\text{–}70\text{ mmHg}$ reduce las isquemias esplácnicas en comparación con metas conservadoras moderadas.
- C) En pacientes de piel oscura con vasoconstricción o hipoperfusión periférica, **Gudelunas et al. (2024)** encontraron **hipoxemia arterial oculta ($\text{SaO}_2 < 88\%$ con $\text{SpO}_2 \ge 92\%$)** en el **$21{,}1\%$** frente al $1{,}1\%$ en piel clara, obligando a verificar gases arteriales y apuntar en general a una zona segura de $\text{SpO}_2\ 92\text{–}96\%$.
- D) Los mega-ensayos UK-ROX ($n=16.500$) y LOGICAL ($n=1.840$) demostraron que mantener $\text{PaO}_2 > 180\text{ mmHg}$ es superior para preservar la perfusión renal.
- E) La hiperoxia promueve vasodilatación coronaria y aumenta la densidad de capilares sublinguales perfundidos (PPV).

**Pregunta 4.** ¿Qué demuestra la integración de **Østergaard (2015)**, **Ince (2015)** y **DAMIS (2023)** sobre la microcirculación séptica?
- A) Cuando existe **CTH maligna** (capilares ocluidos conviviendo con capilares de hiperflujo rápido), elevar aún más el gasto cardíaco puede agravar el *shunt* funcional sin mejorar la extracción celular de $\text{O}_2$; y aunque visualizar la red sublingual cambia decisiones (DAMIS 2023), aún no demostró bajar la mortalidad a 30 días.
- B) La videomicroscopía SDF sublingual en tiempo real (DAMIS 2023) redujo la mortalidad a 30 días en un $40\%$.
- C) La hemodilución agresiva con cristaloides corrige la incoherencia hemodinámica Tipo 2 porque reduce la viscosidad sanguínea.
- D) En el estudio fundacional de De Backer (2002), la proporción de vasos pequeños perfundidos ($<20\ \mu\text{m}$) en sepsis superaba el $90\%$.
- E) Las guías clínicas recomiendan infusión de nitroglicerina endovenosa en todo shock séptico para abrir capilares cerrados sin considerar la PAM.

<!-- practica-2026-11-26 -->
**Pregunta 5.** Paciente con shock séptico a las 16 h: lactato 3,4 mmol/L, CRT 2 s, $\text{S}_{\text{vc}}\text{O}_2$ 74% y gap de CO₂ 4 mmHg. La conducta más coherente con la evidencia es:
- A) Bolo de 30 mL/kg para normalizar el lactato.
- B) Sumar dobutamina para aumentar el transporte de O₂.
- C) Interpretar la hiperlactatemia como metabólica (glucólisis $\beta_2$, clearance hepático, inmunometabolismo) y no indicar más volumen por el lactato.
- D) Infundir lactato de sodio hipertónico como sustrato energético.
- E) Iniciar betabloqueo para bajar la producción adrenérgica de lactato.

**Pregunta 6.** Sobre el **gap veno-arterial de CO₂** como objetivo de reanimación:
- A) Dos ECAs (Su 2018 y LACTEL 2025) mostraron menor mortalidad al corregirlo.
- B) Es un marcador directo de hipoxia tisular.
- C) Es un marcador de adecuación del flujo, pero guiar la reanimación para corregirlo no mostró beneficio en dos ECAs y está muy influido por el efecto Haldane.
- D) Un valor $> 6$ mmHg obliga siempre a iniciar dobutamina.
- E) No tiene valor pronóstico.

<details>
<summary>Ver respuestas y justificación tripartita (Preguntas 1–4)</summary>

1. **Respuesta correcta: B.** *Justificación:* Kattan (2020) demostró que insistir en terapias hemodinámicas por lactato cuando el CRT ya está normalizado asocia $\text{aOR } 3{,}3$ de mortalidad; además la glucólisis aerobia $\beta_2$ (Levy 2005) y cinética tardía (Castro 2026) explican valores residuales sin hipoxia de flujo. LAR tiene AUC pobre ($0{,}609$).
2. **Respuesta correcta: B.** *Justificación:* Dubin & Pozo (*Chest* 2025) explicaron el falso positivo de Gap $\text{CO}_2$ por efecto Haldane ante hiperoxia/alta $\text{S}_{\text{v}}\text{O}_2$, y LACTEL (2025) confirmó neutralidad terapéutica de algoritmos dirigidos solo por Gap $\text{CO}_2$. Además $\text{FiO}_2\ 0{,}85$ con $\text{PaO}_2\ 245$ es hiperoxia iatrogénica evitada en HYPERS2S/UK-ROX.
3. **Respuesta correcta: C.** *Justificación:* Gudelunas (2024) documentó $21{,}1\%$ vs $1{,}1\%$ de hipoxemia oculta; HYPERS2S tuvo tendencia adversa ($43\%$ vs $35\%$) y LOCO2 aumentó mortalidad 90 d ($44{,}4\%$ vs $30{,}4\%$) e isquemia mesentérica; la zona segura práctica es $\text{SpO}_2\ 92\text{–}96\%$.
4. **Respuesta correcta: A.** *Justificación:* Resume con precisión la CTH maligna (Østergaard 2015), incoherencia Tipo 2 por hemodilución (Ince 2015) y el resultado neutro a 30 d de DAMIS (2023) pese a modificar conductas.

5. **Respuesta correcta: C.** *Justificación:* Cinética bifásica (Castro 2026): después de 6–12 h, con perfusión periférica, ScvO₂ y gap normales, el lactato es metabolismo y no flujo. En CLASSIC, la estrategia restrictiva no retrasó la resolución del lactato. Kattan 2020: perseguir el lactato con CRT normal se asoció a más mortalidad.
6. **Respuesta correcta: C.** *Justificación:* Su 2018 (`PMID 30278407`) y LACTEL 2025 (`PMID 39615831`) fueron negativos; en LACTEL el grupo guiado recibió más volumen, noradrenalina y dobutamina sin beneficio. Dubin y Pozo 2025: el gap está dominado por el efecto Haldane.

</details>

### 5.2 Casos "Detectá el error de guardia" (2 casos)
1. **Caso 1 — "Oxígeno libre al 100% para asegurar tejidos + oxímetro en 92% en paciente con manos frías y piel oscura":** Dos errores opuestos en el mismo turno: mantener al primer paciente con $\text{PaO}_2\ 310\text{ mmHg}$ ("por si acaso") causando vasoconstricción microcirculatoria (HYPERS2S/Farquhar), y no tomar gasometría arterial al segundo paciente con piel oscura bajo noradrenalina porque el oxímetro marca $92\%$ (**Gudelunas 2024**: $21{,}1\%$ riesgo de $\text{SaO}_2 < 88\%$ oculta).
2. **Caso 2 — "La bomba de volumen guiada por el Gap CO₂ bajo hiperoxia":** Se reduce $\text{S}_{\text{vc}}\text{O}_2\ 82\%$, $\text{CRT } 2{,}0\text{ s}$, $\text{PaO}_2\ 220\text{ mmHg}$, pero Gap $\text{CO}_2 = 7{,}5\text{ mmHg}$ → el equipo pasa $1.500\text{ mL}$ extra creyendo que falta gasto cardíaco, ignorando el **efecto Haldane (Dubin & Pozo 2025)** y el fracaso de **LACTEL 2025**.

### 5.3 Flashcards de repaso rápido (6 tarjetas)
1. **¿Qué porcentaje cayó la perfusión de pequeños vasos ($<20\ \mu\text{m}$) en De Backer 2002?** → **$48\%$** frente al **$90\%$** normal; en Zhang 2026 una $\text{PPV}_{6\text{h}} > 68{,}6\%$ predijo supervivencia ($\text{AUC } 0{,}788$).
2. **¿Qué pasa si se empuja el tratamiento por lactato alto cuando el CRT ya está $\le 3\text{ s}$ (Kattan 2020)?** → Aumenta la mortalidad (**$\text{aOR } 3{,}3$**).
3. **¿Cómo produce el efecto Haldane un falso positivo del Gap $\text{CO}_2$ (Dubin & Pozo 2025)?** → La alta saturación/oxigenación venosa desplaza $\text{CO}_2$ desde la hemoglobina al plasma disuelto, elevando $P_{\text{v}}\text{CO}_2$ y $\Delta P_{\text{v-a}}\text{CO}_2$ sin déficit de gasto cardíaco.
4. **¿Qué resultados opuestos mostraron HYPERS2S y LOCO2 sobre el blanco de $\text{O}_2$?** → **HYPERS2S** ($\text{FiO}_2\ 1{,}0$): $43\%$ vs $35\%$ mort y debilidad; **LOCO2** ($\text{PaO}_2\ 55\text{–}70$): $44{,}4\%$ vs $30{,}4\%$ mort e isquemia mesentérica → blanco seguro **$\text{SpO}_2\ 92\text{–}96\%$**.
5. **¿Cuál fue la tasa de hipoxemia oculta en piel oscura con hipoperfusión en Gudelunas 2024?** → **$21{,}1\%$** frente a **$1{,}1\%$** en piel clara.
6. **¿Para qué sirve hoy medir el cociente Lactato/Albúmina (LAR) en la toma de decisiones?** → Discriminación muy pobre (**$\text{AUC } 0{,}609$ vs $0{,}598$** del lactato solo); no sustituye la evaluación multimodal.
7. **¿Qué modifica el CRT además de la perfusión?** → La temperatura de la piel (−1,6 s por desvío estándar): en endotoxemia humana el CRT cruzó los 3 s en ambos sentidos en un mismo episodio (`PMID 42706575`).

---

## 6. Referencias Verificadas y Registro de Correcciones

1. **Østergaard L et al.** Capillary transit time heterogeneity (CTH) and microvascular oxygen extraction in sepsis. 2015.
2. **De Backer D et al.** Microvascular blood flow is altered in patients with sepsis ($<20\ \mu\text{m}$ $48\%$ vs $90\%$). *Am J Respir Crit Care Med*. 2002.
3. **Ince C.** Hemodynamic coherence and the rationale for monitoring the microcirculation. *Crit Care*. 2015. `PMID 26729241`. **Second consensus on the assessment of sublingual microcirculation.** *Intensive Care Med*. 2018. `PMID 29411044`. **MicroTools** (2026) `PMID 41485226`. **Biomarkers of microcirculatory dysfunction in sepsis (piloto, heparán sulfato vs De Backer).** 2025. `PMID 41065504`. *Acute hemodynamic tests for macro-to-microcirculatory coupling*. *Crit Care*. 2026. DOI 10.1186/s13054-026-06018-5. Fuente: síntesis propia *Microcirculación en sepsis — fisiología, monitoreo y pronóstico*.
4. **Vélez-Páez JL et al.** 4V-2C microvascular classification. 2025; **Huang et al.** SLOOP phenotype. 2025.
5. **Bruno RR et al. (DAMIS Study Group).** Sublingual microcirculation evaluation and 30-day mortality in ICU shock. *Intensive Care Med*. 2023.
6. **Zhang et al.** $\text{PPV}_{6\text{h}} > 68.6\%$ ($\text{AUC } 0.788$) prognostic utility in sepsis resuscitation. 2026.
7. **Hernández G et al. (ANDROMEDA-SHOCK 1 & 2).** *JAMA*. 2019 / 2025; **Brosse et al. (YesReCan).** Bedside CRT standardization. 2026.
8. **Cheng et al. (2025); Su L et al.** $P_{\text{v-a}}\text{CO}_2/C_{\text{a-v}}\text{O}_2$-directed resuscitation vs $\text{SvO}_2$ (RCT). *J Crit Care*. 2018. `PMID 30278407`; **Guinot PG et al. (LACTEL).** *Chest*. 2025;167(4):1068-78. `PMID 39615831`.
9. **Dubin A, Pozo MO.** Central venous minus arterial $\text{CO}_2$ and its ratio are misleading surrogates for tissue perfusion. *Chest*. 2025;167(4):923-5. `PMID 40210306`. **Dubin A et al.** Gap ratio vs lactate as mortality predictors (meta-analysis). *Rev Bras Ter Intensiva*. 2022. `PMID 35946659`.
9b. **Mekontso-Dessap A et al.** *Intensive Care Med*. 2002. `PMID 11904655`. **Lamia B, Monnet X, Teboul JL.** *Minerva Anestesiol*. 2006. `PMID 16682934`. **Ltaief Z et al.** Pathophysiology of the veno-arterial $\text{PCO}_2$ gap. *Crit Care*. 2021. `PMID 34461974`. **Vallée F et al.** *Intensive Care Med*. 2008. `PMID 18607565`. **Ospina-Tascón GA et al.** *Crit Care*. 2013. `PMID 24330804`. **Mesquida J et al.** Gap as marker of fluid responsiveness. `PMID 34446823`.
10. **Asfar P et al. (HYPERS2S, *Lancet Respir Med* 2017); Barrot L et al. (LOCO2, *NEJM* 2020); HOT-ICU; UK-ROX ($n=16.500$); LOGICAL ($n=1.840$); Farquhar H et al. (2009).**
11. **Gudelunas MK et al.** Low perfusion and skin pigmentation occult hypoxemia ($21.1\%$ vs $1.1\%$). 2024.
12. **Kattan E et al.** Lactate-targeted resuscitation in septic shock with normal CRT (post hoc ANDROMEDA-SHOCK). *Ann Intensive Care*. 2020;10:114. `PMID 32845407`.
12b. **Castro R, Hernández G, Kattan E, Bakker J (2026)** cinética bifásica, `PMID 41101140`; **Guo 2026** lactilación con desenlace, `PMID 40663442`; **Cheng SC et al.** Broad defects in leukocyte energy metabolism in sepsis immunoparalysis. *Nat Immunol*. 2016. `PMID 26950237`; **Puskarich MA et al.** *Acad Emerg Med*. 2016. `PMID 26825368`; **Ahlstedt C et al.** (post hoc CLASSIC). *Intensive Care Med*. 2024. `PMID 38598125`, editorial `PMID 38635045`; **Dudaryk R et al.** *Cureus*. 2021. `PMID 33738169`; **Tapia P et al.** *Crit Care*. 2015. `PMID 25898244`; **Koep JL et al.** *J Physiol*. 2025. `PMID 41037311`; **Su F et al.** hypertonic sodium lactate. *Shock*. 2016. `PMID 27392154`; **Wangueu LT et al.** *Crit Care*. 2025. `PMID 41137071`. Fuente: síntesis propia *Lactato e inmunometabolismo en sepsis* (bóveda).
13. **Levy B et al. (2005); Ahlstedt C et al. (2024); Castro R et al. (2026); Cheng SC et al. (2016); Di et al. (2025); Guo et al. (2026).** Adrenergic hyperlactatemia, 12-h biphasic kinetics, immunoparalysis, and histone lactylation.

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- **Ítem #6 (Reología eritrocitaria):** Preservados los aportes clásicos de **Baskurt / Piagnerelli** sobre rigidez del eritrocito séptico dejando explícito que **no existieron actualizaciones terapéuticas duras 2024–2026** (evitando invenciones).
- **Ítem #12 (Gap $\text{CO}_2$ y Haldane):** Corregida la interpretación ingenua de $\Delta P_{\text{v-a}}\text{CO}_2 > 6$ como bajo flujo automático, incorporando el resultado negativo de **LACTEL 2025** / **Su 2018** y el mecanismo del **efecto Haldane (Dubin & Pozo, *Chest* 2025)**.
