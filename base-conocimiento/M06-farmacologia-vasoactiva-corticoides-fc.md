---
id: M06
titulo: "Farmacología Vasoactiva, Inotrópicos, Betabloqueantes y Corticoides"
subtitulo: "Conversión base/sal, VASSPR 2026, TRICYCLE, Dubin 2024, De Backer 2024, Weibel 2026, FluDReSS y VICTORY 2026"
ultima_actualizacion: 2026-11-25
piloto_fase2: false
fuentes_nlm:
  - "Farmacoterapia y manejo hemodinamico"
  - "[Cardio] Fármacos Vasoactivos"
  - "General"
  - "2026"
  - "[SATI] clases"
fuentes_vault:
  - "Sepsis y Shock Septico/"
  - "00 Radar Bibliografico/"
palabras_clave:
  - noradrenalina base vs sal
  - vasopresina
  - VASSPR
  - TRICYCLE
  - angiotensina II
  - azul de metileno
  - dobutamina
  - levosimendán
  - landiolol
  - hidrocortisona
  - fludrocortisona
  - Weibel 2026
  - VICTORY 2026
---

# M06 — Farmacología Vasoactiva, Inotrópicos, Betabloqueantes y Corticoides

---

## 1. Capa Base — Desde cero (Fisiología, Farmacodinamia y Farmacotécnia)

### 1.1 Circuitos de receptores vasomotores e inotrópicos en el shock séptico
En la sepsis, la tormenta inflamatoria (iNOS $\to$ exceso de $\text{NO}/ \text{GMPc}$, apertura de canales $\text{K}_{\text{ATP}}$ vasculares, acidosis láctica y desensibilización/internalización de receptores adrenérgicos por fosforilación GRK) genera resistencia progresiva a catecolaminas. Por ello el soporte vasoactivo moderno actúa sobre **múltiples familias de receptores complementarios**:

| Receptor / Vía | Localización y Segundo Mensajero | Respuesta Fisiológica en Shock | Fármacos Clave |
| :--- | :--- | :--- | :--- |
| **$\alpha_1$-adrenérgico** | Músculo liso arteriolar y vénulas esplácnicas ($\text{G}_q \to \text{IP}_3 \to \uparrow\text{Ca}^{2+}$) | Vasoconstricción arterial ($\uparrow\text{PAD}/\text{RVS}$) + venoconstricción esplácnica ($V_0 \to V_s \to \uparrow P_{\text{msf}}$) | Noradrenalina, Fenilefrina, Epinefrina (dosis altas), Dopamina (dosis altas) |
| **$\beta_1$-adrenérgico** | Miocardio y nodo sinusal ($\text{G}_s \to \uparrow\text{AMPc} \to \text{PKA}$) | Inotropismo (+), cronotropismo (+) y riesgo de arritmias / incremento $\text{MVO}_2$ | Dobutamina, Epinefrina, Noradrenalina (moderado), Dopamina |
| **$\beta_2$-adrenérgico** | Vasos musculoesqueléticos, bronquios, músculo estriado ($\text{G}_s \to \uparrow\text{AMPc}$) | Vasodilatación arterial (cae PAD si domina sobre $\alpha_1$) y glucólisis $\text{Na}^+/\text{K}^+$-ATPasa ($\uparrow$ lactato sin hipoxia) | Dobutamina, Epinefrina (dosis bajas) |
| **$V_{1a}$ (Vasopresina)** | Músculo liso vascular ($\text{G}_q \to \text{PLC}/\text{IP}_3$); **sin desensibilización adrenérgica** | Vasoconstricción independiente de catecolaminas; **preserva relativo tono eferente glomerular renal** y oxigenación medular | Vasopresina (y análogos) |
| **$\text{AT}_1$ (Angiotensina II)** | Arteriolas sistémicas y eferente glomerular ($\text{G}_q$) | Vasopresor potente en shock distributivo con déficit de ECA endotelial | Angiotensina II |
| **Guanylyl ciclasa soluble ($\text{sGC}$)** | Músculo liso vascular (diana del $\text{NO}$) | Inhibición directa de sGC/iNOS restaurando sensibilidad contráctil al $\text{Ca}^{2+}$ | Azul de metileno |
| **Sensibilización troponina C / iPDE-3** | Miocardio y vasculatura sistémica/pulmonar | $\uparrow$ inotropismo sin sobrecarga intracelular de $\text{Ca}^{2+}$ + **vasodilatación sistémica** (inodilatadores) | Levosimendán, Milrinona |

### 1.2 La trampa química universal: Noradrenalina Base vs. Sal
Uno de los errores clínicos y bibliográficos más peligrosos en UCI y en el cálculo de **SOFA-2** / **VNERi** es confundir los miligramos de **sal** (ampolla comercial en muchos países europeos, latinoamericanos y argentinos) con los miligramos de **noradrenalina base** (estándar estadounidense y de ensayos como **SOFA-2**):

$$1{,}00\text{ mg NE base} = 2{,}00\text{ mg bitartrato monohidrato} = 1{,}89\text{ mg bitartrato anhidro} = 1{,}22\text{ mg clorhidrato (HCl)}$$

- **Regla de oro de guardia:** verificar la ficha técnica local de la ampolla antes de comparar protocolos ($0{,}25\ \mu\text{g/kg/min}$ de base **equivale exactamente a $0{,}50\ \mu\text{g/kg/min}$ de bitartrato monohidrato!**).
- **Seguridad física en Y-site:** **la furosemida precipita formando cristales al entrar en contacto en Y con catecolaminas** (noradrenalina, epinefrina, dobutamina, dopamina) y soluciones alcalinas — infundir siempre por lumen independiente.

---

## 2. Capa Profundidad R2–R3 y Frontera (2022–2026)

### 2.1 Dosificación por peso en obesidad: El sesgo de Severino / Wendel-Garcia 2026
- **Wendel-Garcia / Severino et al. 2026 (*Anesthesiology*, `n = 10.246`):** al estudiar dosis de noradrenalina en pacientes con sobrepeso y obesidad, indexar la bomba por **peso corporal real ($\mu\text{g/kg/min}$)** genera una distorsión matemática sistemática de **$-14{,}5\%$ a $-26\%$** respecto a la exposición farmacológica real por masa magra/volumen plasmático circulante.
- Este sesgo explica artefactos observacionales previos (como los reportados en análisis tipo **Melchers**) donde pacientes obesos parecían tolerar o sobrevivir distinto por unidad nominal de $\mu\text{g/kg/min}$: la droga hidrofílica se distribuye en el compartimento intravascular/magro y **no** en el tejido adiposo. Usar dosis absoluta ($\mu\text{g/min}$) o **peso ideal/ajustado** para evitar escaladas exageradas en obesidad mórbida.

### 2.2 Vasopresores de segunda línea: Vasopresina, TRICYCLE, Angiotensina II y Rescates (2025–2026)
- **Momento de inicio de Vasopresina (VASST, VANISH, VASSPR 2026):**
  - **VASSPR 2026 (Peltan et al., *JAMA* 2026):** comparó inicio temprano ($0{,}1\ \mu\text{g/kg/min}$ de noradrenalina) frente a inicio tardío ($0{,}4\ \mu\text{g/kg/min}$); resultó neutro en el desenlace primario (**$31{,}8\%$ vs $33{,}0\%$**).
  - **2.º Consenso Suizo de Vasopresina (2025):** acuñó la regla pragmática ***"earlier in, slower out"***: considerar vasopresina sin esperar dosis extremas de NA (umbral orientativo **$\ge 0{,}20\ \mu\text{g/kg/min}$** de dosis estandarizada, especialmente si hay taquicardia/FA, disfunción renal incipiente o requerimiento creciente), y realizar un **destete lento escalonado (*step-down taper*)**.
  - **Orden de destete (DOVSS — Jeon 2018; Musallam 2018; 2nd Swiss Consensus 2025):** suspender vasopresina antes que noradrenalina duplica la incidencia de hipotensión de rebote frente a descender primero la noradrenalina hasta dosis bajas y luego retirar vasopresina lentamente. *(Corrección de auditoría Ítem #8d: este dato proviene de DOVSS/Musallam/Swiss Consensus 2025, no de guías ESICM 2025).*
- **Fenómeno "piso sin techo" y pérdida de ventana (Wieruszewski et al. 2026 — TRICYCLE):** observó que en práctica real el rescate con vasopresina/angiotensina II suele demorarse hasta una mediana de **$0{,}39\ \mu\text{g/kg/min}$** de NA ("floor without ceiling"), pero rebasar **$> 0{,}25\ \mu\text{g/kg/min}$** antes de añadir un segundo mecanismo atenúa el beneficio incremental tanto de vasopresina como de angiotensina II.
- **Angiotensina II, Selepresina, Epinefrina y Dopamina:**
  - **ATHOS-3:** restauró PAM en shock vasodilatador resistente a catecolaminas con señal adicional de recuperación renal en subgrupo con LRA estadio 3 dialítica ([M10](#module-M10)).
  - **SEPSIS-ACT (selepresina):** negativa en días libres de soporte y mortalidad.
  - **OptimaCC (Levy 2018):** en shock cardiogénico demostró que la epinefrina incrementó el shock refractario (**$37\%$ vs $7\%$**) respecto a noradrenalina por acidosis láctica/consumo $\text{MVO}_2$; en sepsis queda como alternativa o rescate puntual.
  - **SOAP II (De Backer 2010):** dopamina asoció más arritmias globales y mayor mortalidad en shock cardiogénico que noradrenalina — fuera de uso rutinario en sepsis (**SSC 2026**).
- **Azul de metileno e Hidroxocobalamina (Cohen et al. 2026, `PMID 42565679`):** revisiones y comparativas recientes sugieren posible efecto ahorrador de noradrenalina con dosis bajas/tempranas de azul de metileno (alertar metahemoglobinemia, déficit G6PD y síndrome serotoninérgico con ISRS/linezolid); sin embargo, **SSC 2026** considera la evidencia aún insuficiente para recomendación firme.

### 2.3 Inotrópicos en el shock séptico: Dobutamina y Levosimendán
- **Farmacología estereoespecífica de la Dobutamina (Dubin et al. 2024):** la preparación clínica es una mezcla racémica $50:50$ de **$(-)$-dobutamina** (agonista $\alpha_1$ + $\beta_1/\beta_2$) y **$(+)$-dobutamina** (potente antagonista $\alpha_1$ + agonista $\beta_1/\beta_2$). Efecto clínico altamente dependiente de dosis:
  - Dosis bajas (**$\le 2{,}5\ \mu\text{g/kg/min}$**) pueden mejorar flujo esplácnico/microcirculatorio en disfunción contráctil demostrada sin caída marcada de $\text{RVS}$.
  - Escalar a **$> 5\ \mu\text{g/kg/min}$** raramente aumenta el gasto cardíaco útil pero desencadena **taquifilaxia en $66\%$ a las $72\text{ h}$**, **caída de $\text{PAM}$ en $43\%$**, empeoramiento de **disfunción diastólica ($\approx 48\%$)** u obstrucción dinámica **LVOTO ($\approx 22\%$)**. Siempre evaluar por POCUS antes y 30 min después!
  - *Nota crítica de ámbito:* el gran ensayo publicado en *JAMA* 2026 sobre soporte inotrópico se ejecutó en contexto **intraoperatorio quirúrgico**, no en shock séptico médico de UCI.
- **Levosimendán:** **LeoPARDS (Gordon 2016)** no mostró mejoría de SOFA/mortalidad y aumentó taquiarritmias y fracaso de desconexión respiratoria. Un metaanálisis reciente (**Rodríguez et al. 2025**) arroja $\text{OR } 0{,}64$, pero su **Análisis Secuencial de Ensayos (TSA) alcanza apenas $31\text{–}40\%$ del tamaño de información requerido**: sigue sin indicación rutinaria en miocardiopatía séptica.

### 2.4 Control de Frecuencia Cardíaca y Fenómenos de Rebote (2024–2026)
- **$\beta$-bloqueantes en taquicardia sinusal séptica (De Backer et al. 2024):** auditoría crítica demostró que el histórico estudio positivo de **Morelli (2013)** tenía una mortalidad anormalmente elevada en el brazo control (**$80{,}5\%$**), mientras los dos ECAs contemporáneos multicéntricos fueron desfavorables o neutros: **STRESS-L** (landiolol en Reino Unido) debió detenerse por señal de **daño/mortalidad** y **LANDI-SEP** resultó **neutro** en mortalidad clínica pese a controlar la frecuencia cardíaca.
- **Consenso Delphi NOAF (Guarracino et al. 2026):** propone landiolol para fibrilación auricular de nueva aparición (*NOAF*), pero su lectura crítica detecta **conflictos de interés con industria en $7$ de $8$ panelistas** y ausencia de disponibilidad comercial de landiolol en Argentina/región (priorizar amiodarona/control electrolítico/eco de precarga y descartar hipovolemia/dolor).
- **Trampa farmacológica del destete (Zhong et al. 2026):** en pacientes tratados con **dexmedetomidina**, el **$88{,}1\%$ de los episodios de taquicardia supraventricular (SVT) aparecieron como rebote *después* de suspender la infusión**, debiendo diferenciarse de nuevo foco séptico o fibrilación auricular séptica primaria.

### 2.5 Corticoides, Fludrocortisona y Proscripción de Vitamina C IV (2023–2026)
- **Calidad de los metaanálisis sobre corticoides (Weibel et al. 2026, `PMID 43058869`, Ítem #13):** al auditar **42 revisiones sistemáticas** de corticoides en sepsis, el **$90\%$ obtuvo calificación AMSTAR-2 críticamente baja** y más de la mitad omitió ensayos primarios comparables (además de anomalías estadísticas reportadas como $J=0$ vs $0{,}92$). Desconfiar de titulares que proclaman certeza absoluta solo por contar metaanálisis repetidos. Lo central del estudio (texto completo, *Crit Care* 2026;30:602): las 42 revisiones incluyeron **121 ECAs distintos** y **más de la mitad de los pares de revisiones no compartía ni un solo ensayo**. De 38 con metaanálisis de mortalidad a corto plazo, **39% concluyó beneficio y 61% ningún efecto**, y la discordancia ocurrió **solo en las que evaluaban "corticoides" en general**: para **HC + fludrocortisona** las conclusiones fueron consistentes (beneficio) y para **HAT** también (sin efecto). Antes de citar un metaanálisis, mirar si los ECAs que incluye representan la pregunta clínica.
- **Ensayos pivotales y papel de Fludrocortisona:**
  - **CORTICUS (2008):** neutro en mortalidad, más hiperglucemia/sobreinfección.
  - **ADRENAL (Venkatesh 2018, `n = 3.800`):** hidrocortisona $200\text{ mg/d}$ continua fue neutra en mortalidad a 90 d, pero aceleró reversión de shock y salida de VM.
  - **APROCCHSS (Annane 2018, `n = 1.241`):** **hidrocortisona + fludrocortisona ($50\ \mu\text{g}$ enteral/d)** redujo mortalidad a 90 d en shock séptico severo ($\text{PAM}$ sostenida con dosis altas de NA).
  - **Pirracchio et al. 2023 (metaanálisis IPD)** y **Annane 2025 / Teja 2024:** sugieren señal diferencial favorable al añadir fludrocortisona ($\text{RR } 0{,}86$) frente a hidrocortisona sola ($\text{RR } 0{,}96$ NS), aunque **FluDReSS 2024** demostró un hallazgo perturbador: en el **$97\%$ de los pacientes en shock séptico**, la **absorción enteral de fludrocortisona fue errática o subóptima** cuando se administró en forma estándar en shock gastrointestinal — explicando heterogeneidad de respuesta y motivando cautela hasta disponer de formulaciones o protocolos absorbentes estandarizados.
- **Lectura en una línea de la búsqueda propia (PubMed, 2026-11, cifras de abstracts):**
  - **Hidrocortisona sola:** beneficio pequeño a 28 días en Cochrane ($\text{RR } 0{,}89$), no significativo a 90 días en el IPD ($\text{RR } 0{,}93$), y ADRENAL neutro. **Acorta el shock, no baja la mortalidad.** Un análisis de ECA con 3.161 pacientes la asoció a **menos terapia de reemplazo renal** (Donaldson 2025). Continua vs intermitente: sin diferencia de mortalidad en metaanálisis ($\text{RR } 0{,}83$; IC95% $0{,}65\text{–}1{,}06$). En cirróticos, un ECA chico (cerrado por reclutamiento lento) fue neutro.
  - **HC + fludrocortisona:** la señal de mortalidad está acá, pero su ventaja **sobre la hidrocortisona sola es sobre todo indirecta** (Teja 2024: $\text{RR } 0{,}88$; IC95% $0{,}74\text{–}1{,}03$). El metaanálisis en red bayesiano de Lai 2024 da $\text{OR } 0{,}79$ vs placebo (NNT 21, **certeza baja**), y Sun 2026 no encontró beneficio adicional frente a HC sola. **No hay un ECA grande que compare HC+FC con HC sola de forma directa.** En la cohorte de Lock 2023, HC+FC dio más hiperglucemia (62% vs 46%) sin diferencia en reversión del shock.
  - **HAT:** mejora el SOFA (−1,16 a 72 h) y acorta el vasopresor en metaanálisis, pero los ensayos grandes y bien hechos son neutros en mortalidad y en resolución del shock. El "8,5% vs 40,4%" de Marik 2017 fue un antes-después retrospectivo de 94 pacientes. **Vitamina C sola:** CEMVIS 2026 neutro (30,7% vs 31,0%), con más muertes en el subgrupo con shock.
- **Muerte definitiva del protocolo HAT (Hidrocortisona + Vitamina C + Tiamina):** LOVIT, ACTS y VICTAS refutaron el HAT en sepsis, y **VICTORY 2026 (`PMID 42267875`)** confirmó **exceso de daño incluso en pacientes gran quemados ($\text{HR/RR } 1{,}96$)** con vitamina C IV en megadosis (además del sesgo falso-hiperglucémico en glucómetros capilares POC).


### Novedades del barrido anual 2025–2026 (PubMed + avisos de correo, leídas en abstract)
> Agregadas el 2026-11-26 desde el abstract de PubMed (no el texto completo). Cada una lleva su PMID. Lista completa de candidatos en `candidatos-pubmed-correo.md`.

- **Esmolol vs landiolol** (*Crit Care Med* 2026, metaanálisis en red): el esmolol **probablemente** mejora desenlaces frente al cuidado estándar; el efecto del landiolol es incierto por baja certeza. Leer junto con De Backer 2024 y el consenso de landiolol. `PMID 41363997`

---

## 3. Mitos vs. Evidencia — Cómo NO sobreinterpretarlo

1. **Mito: "0,30 µg/kg/min de noradrenalina en Buenos Aires significa lo mismo que 0,30 µg/kg/min en un ensayo estadounidense."**
   - **Realidad (Ítem #11):** si la ampolla se prepara en **bitartrato monohidrato**, $0{,}30\ \mu\text{g/kg/min}$ equivalen a **$0{,}15\ \mu\text{g/kg/min}$ de NE base** ($2{,}00:1$); y en un paciente obeso de $140\text{ kg}$ indexar por peso real introduce hasta **$-26\%$ de sesgo** (**Severino/Wendel-Garcia 2026**).
2. **Mito: "El inicio muy temprano de vasopresina a 0,1 µg/kg/min reduce la mortalidad global frente a esperar a 0,4 µg/kg/min."**
   - **Realidad (VASSPR 2026):** $31{,}8\%$ vs $33{,}0\%$ neutro; usar criterio fisiológico ("earlier in" $\sim 0{,}20\ \mu\text{g/kg/min}$ base según **2nd Swiss Consensus 2025** / **TRICYCLE $<0{,}25$**) y al destetar retirar **NA antes o en step-down** para evitar rebote (**DOVSS / Musallam 2018**).
3. **Mito: "El paciente tiene taquicardia sinusal a 125 lpm en shock séptico: hay que darle landiolol o esmolol por el estudio de Morelli."**
   - **Realidad (De Backer 2024):** Morelli tenía mortalidad control irreal ($80{,}5\%$); **STRESS-L** mostró daño y **LANDI-SEP** fue neutro. Descartar primero hipovolemia, fiebre, dolor o **rebote post-dexmedetomidina ($88{,}1\%$, Zhong 2026)** antes de frenar taquicardia compensadora.
4. **Mito: "Dobutamina 10 µg/kg/min siempre sube el gasto cardíaco en el shock séptico."**
   - **Realidad (Dubin 2024):** $> 5\ \mu\text{g/kg/min}$ casi no mejora gasto pero genera taquifilaxia ($66\%$ a 72 h), hipotensión ($43\%$), disfunción diastólica ($48\%$) o **LVOTO ($22\%$)**.
5. **Mito: "Mega-dosis de Vitamina C IV en sepsis o gran quemado ayudan a estabilizar el endotelio."**
   - **Realidad (VICTORY 2026):** **$\text{HR/RR } 1{,}96$ de daño**, además de artefactar glucemias POC.

---

## 4. Especificación del Simulador / Atlas Interactivo

- **Nombre UI:** *Conversor Crítico de Noradrenalina (Base/Sales/Obesidad) + Escalador Multimodal Vasoactivo-Inotrópico*
- **Controles:** `Dosis escrita en bomba` ($\mu\text{g/kg/min}$ o $\text{mL/h}$), `Sal de ampolla local` (`Bitartrato monohidrato 2:1` / `Bitartrato anhidro 1,89:1` / `HCl 1,22:1` / `Base 1:1`), `Peso real` vs `Talla/Sexo (para Peso Ideal/Ajustado)`, `FC`, `FEVI/VTI + LVOTO toggle`, `PAM actual`.
- **Salidas:** dosis equivalente exacta en **NE base** (alerta SOFA-2 cardiovascular y VNERi), corrección por peso ajustado en obesidad (**Severino 2026**), umbral **TRICYCLE ($0{,}25$ base)** / **VASSPR ($0{,}1\text{ vs }0{,}4$)**, orden seguro de destete (**DOVSS / Swiss Consensus 2025**), y bloqueo rojo si **Dobutamina + LVOTO** o **Furosemida en el mismo lumen que NA**.
- **SVG:** gráfico comparativo de dos bombas mostrando equivalencia masiva `Base vs Bitartrato` + diagrama multimodal de receptores ($\alpha_1 / V_{1a} / \text{AT}_1 / \text{sGC}$).

---

## 5. Actividades de Entrenamiento (SATI)

### 5.1 Preguntas de Opción Múltiple (estilo Examen Integrador SATI — 5 opciones)

**Pregunta 1.** En una UCI argentina cuya ampolla de noradrenalina rotula **4 mg de bitartrato monohidrato** por ampolla, un paciente de $80\text{ kg}$ recibe **$0{,}40\ \mu\text{g/kg/min}$** nominales de bitartrato. Para cargar su puntaje cardiovascular en **SOFA-2** (calibrado en **noradrenalina base**) y evaluar el punto de corte del estudio **TRICYCLE (2026)**, ¿a cuánto equivale su dosis real de **NE base**?
- A) $0{,}80\ \mu\text{g/kg/min}$
- B) $0{,}40\ \mu\text{g/kg/min}$
- C) $0{,}33\ \mu\text{g/kg/min}$
- D) **$0{,}20\ \mu\text{g/kg/min}$**
- E) $0{,}10\ \mu\text{g/kg/min}$

**Pregunta 2.** Con respecto al uso de vasopresina y el destete combinado con noradrenalina según **VASSPR (2026)**, **2nd Swiss Vasopressin Consensus (2025)** y **DOVSS**, señale la opción CORRECTA:
- A) VASSPR 2026 demostró reducción de mortalidad del $14\%$ al iniciar vasopresina a $0{,}1\ \mu\text{g/kg/min}$ frente a $0{,}4\ \mu\text{g/kg/min}$.
- B) Al estabilizarse el shock con ambos vasopresores, retirar primero la vasopresina antes que reducir la noradrenalina provoca menos episodios de hipotensión de rebote.
- C) VASSPR 2026 fue neutro ($31{,}8\%$ vs $33{,}0\%$), mientras el consenso suizo sugiere estrategia *"earlier in, slower out"* y evidencia tipo DOVSS/Musallam muestra menor hipotensión de rebote al descender/retirar primero noradrenalina y luego hacer destete escalonado lento de vasopresina.
- D) La vasopresina depende de receptores $\beta_1$ miocárdicos, perdiendo toda eficacia en acidosis metabólica grave.
- E) Retirar primero la vasopresina es una recomendación grado IA de las guías ESICM 2025.

**Pregunta 3.** Paciente séptica con $\text{IC } 1{,}9\text{ L/min/m}^2$ y FEVI estimada $35\%$ a quien se inicia dobutamina escalándola rápidamente a **$10\ \mu\text{g/kg/min}$**; a los $30\text{ min}$ la $\text{PAM}$ cae a $52\text{ mmHg}$ y la taquicardia sube a $142\text{ lpm}$. Según **Dubin et al. (2024)**, ¿qué fenómeno farmacodinámico explica este cuadro?
- A) La dobutamina es un agonista $\alpha_1$ puro a dosis $>5\ \mu\text{g/kg/min}$.
- B) El enantiómero $(+)$-dobutamina antagoniza receptores $\alpha_1$ y estimula $\beta_2$; a dosis $>5\ \mu\text{g/kg/min}$ raramente añade gasto útil pero provoca vasodilatación/hipotensión ($43\%$), taquifilaxia ($66\%$ a $72\text{ h}$), disfunción diastólica ($48\%$) o LVOTO ($22\%$).
- C) Se trata siempre de anafilaxia a la solución glucosada del diluyente.
- D) La dosis ideal de inicio para evitar hipotensión es asociar inmediatamente levosimendán en bolo sin carga.
- E) La caída de PAM demuestra fracaso definitivo de todos los vasopresores y obliga a vitamina C IV en megadosis.

**Pregunta 4.** Sobre $\beta$-bloqueantes, dexmedetomidina, corticoides y vitamina C en sepsis (2024–2026), marque la afirmación CORRECTA:
- A) Los metaanálisis sobre corticoides en sepsis tienen en $>90\%$ alta calidad AMSTAR-2 según Weibel et al. (2026).
- B) FluDReSS (2024) demostró absorción enteral óptima del $97\%$ para fludrocortisona en shock séptico.
- C) VICTORY (2026) confirmó que la vitamina C en dosis altas en grandes quemados mejora la supervivencia a 28 días.
- D) De Backer (2024) destacó que STRESS-L mostró daño y LANDI-SEP fue neutro (frente al control anómalo $80{,}5\%$ de Morelli); además **Zhong (2026)** alertó que el $88{,}1\%$ de SVT asociadas a dexmedetomidina ocurren como rebote *post-suspensión*.
- E) El ensayo intraoperatorio de inotrópicos de *JAMA* 2026 valida el uso sistemático de dobutamina en toda sepsis de UCI.

<details>
<summary>Ver respuestas y justificación tripartita (Preguntas 1–4)</summary>

1. **Respuesta correcta: D.** *Justificación:* Relación verificada (`Ítem #11`): $1\text{ mg base} = 2{,}00\text{ mg bitartrato monohidrato}$. Por lo tanto $0{,}40 / 2{,}00 = 0{,}20\ \mu\text{g/kg/min}$ de NE base. (C correspondería al clorhidrato $\div 1{,}22$).
2. **Respuesta correcta: C.** *Justificación:* Resume exactamente VASSPR 2026 ($31{,}8\%$ vs $33{,}0\%$), 2nd Swiss Vasopressin Consensus 2025 y la corrección del Ítem #8d sobre DOVSS/Musallam.
3. **Respuesta correcta: B.** *Justificación:* Resume la farmacología estereoquímica de Dubin 2024 y las complicaciones de dosis $>5\ \mu\text{g/kg/min}$.
4. **Respuesta correcta: D.** *Justificación:* Refuta los mitos en A/B/C/E usando exactamente Weibel 2026 ($90\%$ críticamente baja), FluDReSS 2024 ($97\%$ errática), VICTORY 2026 ($\text{HR } 1{,}96$ daño), De Backer 2024 y Zhong 2026 ($88{,}1\%$ post-stop).

</details>

### 5.2 Casos "Detectá el error de guardia" (2 casos)
1. **Caso 1 — "Pasemos la furosemida por el mismo prolongador de la noradrenalina que tiene doble vía Y":** El enfermero nota turbidez cristalina en la tubuladura mientras la PAM cae bruscamente.
   - *Error oculto:* incompatibilidad física directa entre **furosemida y catecolaminas** (precipitación inmediata con pérdida de entrega vasoactiva); requiere lumen exclusivo para vasopresores.
2. **Caso 2 — "Paciente obeso de 145 kg con '0,45 µg/kg/min' de noradrenalina: tiene shock refractario extremo, sumemos corticoides, azul de metileno y angiotensina II":** La farmacia entrega ampollas de bitartrato monohidrato ($2:1$) y el médico indexó por $145\text{ kg}$ reales cuando su peso ideal es $70\text{ kg}$.
   - *Error oculto:* $0{,}45$ bitartrato $= 0{,}225$ base nominal; además el peso real duplica al ideal (sesgo Severino 2026 $-14{,}5\%$ a $-26\%$ y sobreestimación aparente de dosis total absoluta).

### 5.3 Flashcards de repaso rápido (5 tarjetas)
1. **¿Cómo se convierte noradrenalina bitartrato monohidrato, tartrato/bitartrato anhidro y HCl a NE base?** → Dividir por **$2{,}00$**, **$1{,}89$** y **$1{,}22$**, respectivamente (SOFA-2 / Ítem #11).
2. **¿Qué mostró VASSPR 2026 sobre iniciar vasopresina a 0,1 vs 0,4 µg/kg/min de NA?** → Resultado neutro ($31{,}8\%$ vs $33{,}0\%$); **TRICYCLE (Wieruszewski 2026)** mostró además que rebasar $0{,}25$ atenúa el rescate.
3. **¿Qué ocurre con la dobutamina $> 5\ \mu\text{g/kg/min}$ según Dubin 2024?** → $66\%$ taquifilaxia a $72\text{ h}$, $43\%$ caída de PAM, $48\%$ disfunción diastólica y $22\%$ LVOTO.
4. **¿Qué hallaron Weibel 2026 y FluDReSS 2024 sobre corticoides/fludrocortisona?** → $90\%$ de 42 RS de corticoides tuvieron AMSTAR-2 críticamente baja (**Weibel**); $97\%$ de shock séptico mostró absorción enteral errática de fludrocortisona (**FluDReSS**).
5. **¿Qué demostró VICTORY 2026 sobre Vitamina C en grandes quemados?** → **Daño significativo ($\text{HR/RR } 1{,}96$)**, clausurando la terapia metabólica con vitamina C IV en dosis altas.

---

## 6. Referencias Verificadas y Registro de Correcciones

1. **Wendel-Garcia / Severino et al.** Actual vs ideal body weight norepinephrine dosing bias ($-14.5\%$ to $-26\%$, $n=10.246$). *Anesthesiology*. 2026.
2. **Peltan ID et al. (VASSPR Trial).** Early vs delayed vasopressin in septic shock ($31.8\%$ vs $33.0\%$). *JAMA*. 2026.
3. **2nd Swiss Vasopressin Consensus (2025); Wieruszewski PM et al. (TRICYCLE, 2026); Jeon K et al. (DOVSS 2018); Musallam A et al. (2018).**
4. **Cohen et al.** Methylene blue vs hydroxocobalamin in refractory vasoplegia. 2026. `PMID 42565679`.
5. **Dubin A et al.** Stereoisomeric pharmacology and adverse hemodynamic effects of dobutamine in sepsis. 2024.
6. **Gordon AC et al. (LeoPARDS, *NEJM* 2016); Rodríguez et al. (Levosimendan meta-analysis + TSA $31\text{–}40\%$, 2025).**
7. **De Backer D et al.** Beta-blockers in septic shock (Morelli vs STRESS-L vs LANDI-SEP). 2024; **Guarracino et al.** NOAF Delphi. 2026; **Zhong et al.** Dexmedetomidine post-cessation SVT ($88.1\%$). 2026.
8. **Weibel S et al.** AMSTAR-2 appraisal of 42 systematic reviews of corticosteroids in sepsis. 2026. `PMID 43058869`.
9. **Venkatesh B (ADRENAL, *NEJM* 2018); Annane D (APROCCHSS, *NEJM* 2018; 2025); Pirracchio R et al. (*NEJM Evid* 2023); Teja B (2024); FluDReSS Investigators (2024).**
9b. **Donaldson 2025** (HC y TRR), *JAMA Netw Open*, `PMID 40423970`; **Khan 2026** (continua vs intermitente), `PMID 41678431`; **Meersseman 2025** (cirróticos), `PMID 40757786`; **Lai 2024** (red bayesiana), *Crit Care Med*, `PMID 38156911`; **Sun 2026** (HC+FC vs HC), `PMID 41756379`; **Lock 2023**, `PMID 37026172`; **Deng 2024** (HAT), `PMID 38870923`; **Marik 2017**, *Chest*, `PMID 27940189`; **CEMVIS** (vitamina C), *Crit Care* 2026, `PMID 43053147`. Fuente: búsqueda propia *Corticoides en sepsis — HC, HC+FC y HAT (2026-11)*, cifras solo de abstracts.
10. **VICTORY Trial Investigators.** High-dose intravenous vitamin C in severe burns ($\text{HR/RR } 1.96$). 2026. `PMID 42267875`.

### Registro de correcciones de auditoría (`00-matriz-fuentes.md`)
- **Ítem #8d:** Corregida atribución del orden de retirada vasopresina/noradrenalina hacia **DOVSS / Musallam 2018 / 2nd Swiss Consensus 2025** (no ESICM 2025).
- **Ítem #11:** Incorporada tabla exacta de conversión base/sales de noradrenalina (`1 : 2,00 : 1,89 : 1,22`) y el sesgo de peso real en obesidad (**Severino/Wendel-Garcia 2026**).
- **Ítem #13 & #15:** Documentado **Weibel 2026** ($90\%$ AMSTAR-2 críticamente baja), **FluDReSS 2024** ($97\%$ errática), **VICTORY 2026** ($\text{HR } 1{,}96$) y descartados como fuentes los archivos `vasopresina vs nora en sepsis.pdf` e `hidrocortisona 1.pdf`.
