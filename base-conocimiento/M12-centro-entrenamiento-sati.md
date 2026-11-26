---
id: M12
titulo: "Centro de Entrenamiento Clínico SATI (R2–R3) y Simulación Transversal"
subtitulo: "Examen integrador de 5 opciones, Caso T (triple trampa secuencial), Serie 'El Monitor Puede Mentir' y Evidencia Viva"
ultima_actualizacion: 2026-11-25
piloto_fase2: false
fuentes_nlm:
  - "[SATI] clases"
  - "General"
  - "2026"
  - "Microcirculacion - Sintesis clinica y fenotipos"
  - "Antibioticos"
fuentes_vault:
  - "Sepsis y Shock Septico/ (Caso T, El Monitor Puede Mentir, Sepsis en la guardia)"
  - "Evaluaciones/_indice.md y examen_integrador_80"
  - "03-Proyectos/Sepsis-Atlas-UTI/base-conocimiento/evidencia-viva.json"
palabras_clave:
  - SATI
  - examen integrador
  - R2 R3
  - Caso T
  - monitor puede mentir
  - razonamiento clínico
  - traps de guardia
  - flashcards
  - gamificación localStorage
---

# M12 — Centro de Entrenamiento Clínico SATI (R2–R3) y Simulación Transversal

Este módulo consolida la **capa evaluativa transversal** de *Sepsis Atlas UTI*, alineada al nivel de exigencia del **Examen Integrador SATI (R2–R3)** en tu bóveda (`Evaluaciones/_indice.md` y `examen_integrador_80`): **5 opciones (A–E), sin revelar la respuesta en el enunciado, con casos clínicos fisiológicos integrados y justificación tripartita al pie**.

> En la **Fase 2 (Aplicación Web)**, este módulo alimentará el modo **Guardia Simulada** con puntaje en vivo por dominio (`M01`–`M11`), repetición espaciada de flashcards y progreso persistente en `localStorage` (sin backend).

---

## 1. Examen Integrador Transversal (10 Viñetas Clínicas R2–R3)

### Pregunta 1 (M01 + M05 + M06 — Conversión Base/Sal, SOFA-2 y PAD)
Un hombre de $67\text{ años}$ con shock séptico de foco peritoneal recibe ventilación mecánica invasiva ($\text{PaFi } 140$), está sedado con propofol (último GCS pre-sedación $15$), y recibe noradrenalina **bitartrato monohidrato a $0{,}48\ \mu\text{g/kg/min}$** (ampolla rotulada en bitartrato). Sus signos actuales son $\text{PAS } 108 / \text{PAD } 44\text{ mmHg}$ ($\text{PAM } 65\text{ mmHg}$), $\text{FC } 120\text{ lpm}$, $\text{CRT } 4{,}1\text{ s}$, plaquetas $95.000/\text{mm}^3$, bilirrubina $2{,}1\text{ mg/dL}$, creatinina $1{,}9\text{ mg/dL}$ con buena diuresis. ¿Cuál es el análisis correcto de su **SOFA-2** cardiovascular + respiratorio y de su estado hemodinámico?
- A) Puntúa $4$ cardiovascular ($>0{,}4$ bitartrato), $3$ respiratorio y su $\text{PAM } 65$ garantiza perfusión vasomotora adecuada sin necesitar ajustes.
- B) Su dosis equivalente de **noradrenalina base es $0{,}24\ \mu\text{g/kg/min}$**, por lo que puntúa **$3$ cardiovascular** en SOFA-2 ($>0{,}2\text{ a }\le 0{,}4$), más **$3$ respiratorio** ($\text{PaFi}\le 150$ con VM); simultáneamente tiene vasoplejia diastólica severa (**$\text{PAD } 44 < 50\text{ mmHg}$**, $\text{DSI } 2{,}73$) y **VNERi real $0{,}76$** ($< 2{,}6$, zona crítica de Goury 2025).
- C) Como está intubado y sedado, su componente cerebral SOFA-2 puntúa obligatoriamente $4$ ($\text{GCS } 3$).
- D) El paciente presenta $\text{PP } 64\text{ mmHg}$, lo cual requiere suspender inmediatamente la noradrenalina y administrar $2.000\text{ mL}$ de salino $0{,}9\%$.
- E) Según OPTPRESS (2025), debe fijarse inmediatamente una meta de $\text{PAM } 85\text{ mmHg}$ por tener más de $65\text{ años}$.

### Pregunta 2 (M03 + M05 + M07 — Glicocálix, Fluido-Tolerancia y Congestión)
Mujer de $71\text{ años}$ en shock séptico neumónico con $\text{SDRA}$ moderado bajo VM controlada ($V_T\ 6\text{ mL/kg}$, $\text{PEEP } 12$). Ya recibió $2.500\text{ mL}$ de cristaloides. Presenta $\text{PAM } 67\text{ mmHg}$ (con NA $0{,}15$ base), $\text{CRT } 2{,}9\text{ s}$, albúmina $2{,}1\text{ g/dL}$, **$\text{VCI } 1{,}8\text{ cm}$**, Doppler portal pulsátil ($55\%$), $\text{LUS score } 20$ puntos y un test de elevación pasiva de piernas ($\text{PLR}$) con aumento del $\text{VTI}$ del $14\%$. ¿Qué conducta es la MÁS rigurosa según **ARISS (2026)**, **ARISE FLUIDS (2026)** y **Si et al. (2026)**?
- A) Como la $\text{PLR}$ subió $\text{VTI } 14\%$ y la $\text{VCI}$ mide $< 2{,}0\text{ cm}$, queda descartada congestión orgánica; debe recibir otro bolo rápido de $1.000\text{ mL}$ de cristaloides.
- B) Como la albúmina está en $2{,}1\text{ g/dL}$, debe infundirse albúmina al $20\%$ hasta lograr $\ge 3{,}0\text{ g/dL}$ porque ARISS (2026) demostró reducción de mortalidad del $15\%$.
- C) Aunque es $\text{FR}+$ por PLR, ya muestra **congestión venosa y pulmonar grave** ($\text{porta } 55\%$, $\text{LUS } 20$, fenómeno de **Si 2026** donde $55\%$ con $\text{VCI}<2\text{ cm}$ tienen flujo venoso alterado y el fluido eleva $\text{EVLWI}$ en SDRA incluso en $\text{FR}+$); con $\text{CRT } 2{,}9\text{ s}$ debe **frenarse volumen** y evitar corregir albúmina por meta numérica aislada (**ARISS 2026** neutro $43{,}3\%$ vs $45{,}9\%$).
- D) Medir Syndecan-1 garantiza que el próximo bolo de $500\text{ mL}$ cause FMO irreversible según CLOVERS (2025) y Daniyarova (2025).
- E) El LUS score de $20$ predice éxito garantizado de extubación inmediata sin edema.

### Pregunta 3 (M04 + M07 — LVOTO + Haldane + Kattan)
Paciente de $64\text{ años}$ con shock séptico bajo noradrenalina $0{,}35$ base y dobutamina $10\ \mu\text{g/kg/min}$, ventilado con $\text{FiO}_2\ 0{,}85$ ($\text{PaO}_2\ 250\text{ mmHg}$). Tiene $\text{CRT } 2{,}1\text{ s}$, lactato $4{,}6\text{ mmol/L}$, $\text{S}_{\text{vc}}\text{O}_2\ 82\%$, $\Delta P_{\text{v-a}}\text{CO}_2\ 7{,}8\text{ mmHg}$, y ecocardio que revela VI hiperdinámico pequeño con **SAM mitral y gradiente subaórtico en daga de $72\text{ mmHg}$**. ¿Cuál es la interpretación integral correcta?
- A) La combinación de lactato $4{,}6$ + Gap $\text{CO}_2\ 7{,}8\text{ mmHg}$ indica déficit extremo de gasto cardíaco que exige subir dobutamina a $20\ \mu\text{g/kg/min}$ y pasar $1.500\text{ mL}$ de fluidos.
- B) Presenta **tres trampas simultáneas**: (1) **LVOTO/SAM** agravado por dobutamina alta (mortalidad $53\%$, **Li 2025** — suspender dobutamina de inmediato!), (2) probable falso aumento del Gap $\text{CO}_2$ por **efecto Haldane** ante hiperoxia/$\text{S}_{\text{vc}}\text{O}_2\ 82\%$ (**Dubin & Pozo 2025**, bajar $\text{FiO}_2$ hacia $\text{SpO}_2\ 92\text{–}96\%$), y (3) riesgo de sobre-resucitar por lactato residual con $\text{CRT}$ normal (**Kattan 2020** $\text{aOR } 3{,}3$).
- C) La $\text{S}_{\text{vc}}\text{O}_2$ de $82\%$ confirma extracción tisular óptima sin disfunción mitocondrial ni *shunt*.
- D) El cuadro obliga a realizar cateterismo coronario urgente exclusivamente porque la hs-cTnT seguramente estará elevada.
- E) Se debe añadir furosemida $80\text{ mg}$ IV por la misma vía de la noradrenalina para descongestionar el VI.

### Pregunta 4 (M09 + M10 — Primeras 48 h de LRA + Fluconazol en CKRT)
Mujer de $70\text{ años}$, $70\text{ kg}$, con shock séptico abdominal y candidemia concomitante. Al ingreso presenta $\text{Cr } 2{,}6\text{ mg/dL}$ con oligoanuria inicial; a las $60\text{ h}$, tras empeorar su sobrecarga y acidosis ($\text{pH } 7{,}16$) refractarias pese a bicarbonato inicial, ingresa en **CKRT ($25\text{ mL/kg/h}$)**. ¿Cuál es la conducta antimicrobiana correcta en sus dos etapas (hora $0\text{–}48$ vs hora $60$ en CKRT)?
- A) Reducir meropenem y cefepime al $25\%$ desde la hora $0$ por $\text{Cr } 2{,}6$, y dar fluconazol $200\text{ mg/d}$ en CKRT por anuria.
- B) Dar dosis de carga completa y **diferir reducción renal de $\beta$-lactámicos en las primeras $24\text{–}48\text{ h}$** (**Aldardeer 2024 $\text{HR } 0{,}588$**, **Kuwana 2026 $94\%$ vs $61\%$**); luego en **CKRT** ajustar $\beta$-lactámicos al efluente real (vigilando neurotoxicidad si cefepime valle $>20\text{ mg/L}$ y cambiando bolsas de meropenem c/$6\text{–}8\text{ h}$), y administrar **fluconazol $800\text{ mg}$ carga $\to 800\text{ mg/día}$** porque el hemofiltro carece de reabsorción tubular.
- C) Mantener cefepime $6\text{ g/día}$ indefinidamente sin medir ni ajustar pasada la semana 1 en anuria porque la seguridad está garantizada.
- D) Preparar una bolsa única de meropenem para $24\text{ h}$ junto a la estufa para ahorrar trabajo de enfermería.
- E) En CKRT, duplicar la dosis de efluente a $50\text{ mL/kg/h}$ demostró reducir la mortalidad a la mitad en los ensayos RENAL y ATN.

### Pregunta 5 (M09 — ARC + Malbrán + Estabilidad + BALANCE/ADAPT)
Varón de $29\text{ años}$ politraumatizado en día 5 desarrolla neumonía asociada a VM por *Pseudomonas aeruginosa* ($\text{MIC}$ pip-tazo $8\text{ mg/L}$) y coinfección traqueal por CRAB (*A. baumannii* resistente a carbapenémicos, $\text{CIM}$ sulbactam $16\text{ mg/L}$). Está sin vasopresores, con $\text{Cr } 0{,}55\text{ mg/dL}$ y $\text{uCLcr}_{8\text{h}}$ de **$195\text{ mL/min}$**. Considerando **Ulldemolins (2026)**, **BLING III (2024)**, **Malbrán (2025)** y **BALANCE / ADAPT-Sepsis (2025)**, señale la opción CORRECTA:
- A) Piperacilina-tazobactam en bolo de 30 min cubre sobradamente la $\text{MIC } 8$ porque la creatinina de $0{,}55$ asegura filtración normal.
- B) Posee **ARC severo** ($\text{uCLcr}>130$, $>75\%$ fracaso para $4\times\text{MIC}$ en Ulldemolins 2026), requiriendo carga + infusión continua máxima/TDM o cambio según sensibilidad; para el CRAB, **sulbactam $9\text{ g/día}$** permite cobertura SDD hasta CIM $16\text{–}32$ (**Malbrán 2025**); y en bacteriemias no complicadas con foco controlado, $7\text{ días}$ son no inferiores a $14$ (**BALANCE 2025**) pudiendo apoyar desescalamiento con **procalcitonina** (**ADAPT-Sepsis 2025**, mientras PCR fracasó).
- C) Para confirmar si es sensible a ceftazidima-avibactam + aztreonam se deben aplicar directamente los puntos de corte comerciales de Emblaveo®.
- D) El ensayo **BLING III** fue publicado en *NEJM* 2023 con meropenem exclusivo y resultó neutro en curación clínica.
- E) El algoritmo basado en PCR de ADAPT-Sepsis acortó la terapia antibiótica $3\text{ días}$ más que la procalcitonina.

### Pregunta 6 (M02 + M06 — Endotipos, Ferritina, Corticoides y Vitamina C)
Ingresa un paciente de $55\text{ años}$ con shock séptico por neumonía grave que requiere noradrenalina $0{,}45\ \mu\text{g/kg/min}$ (base), $\text{AST } 2.900\text{ U/L}$, lactato $7{,}1\text{ mmol/L}$ y ferritina $4.600\text{ ng/mL}$. ¿Cuál de las siguientes decisiones terapéuticas se ajusta MEJOR a la evidencia 2025–2026 (**Ouranos 2026, ImmunoSep 2026, Weibel 2026, VICTORY 2026, VASSPR 2026**)?
- A) Iniciar anakinra inmediato asumiendo MALS puro sin evaluar hipoperfusión hepática ni lactato, junto con protocolo HAT (vitamina C IV megadosis + hidrocortisona + tiamina).
- B) Evitar vitamina C IV en dosis altas (**VICTORY 2026** $\text{HR } 1{,}96$ daño), interpretar la ferritina elevada con cautela ante lactato $>6$ ($\text{OR } 16{,}1$ **Haar**) y hepatitis hipóxica (**Ouranos 2026**: rampa continua sin corte mágico, anakinra real-world $\text{HR } 1{,}83$; **ImmunoSep**: 90 d neutro y más shock *de novo*), asociar segundo vasoactivo/hidrocortisona si shock refractario considerando absorción errática enteral de fludrocortisona (**FluDReSS 2024**: $97\%$) y calidad crítica de RS (**Weibel 2026**: $90\%$ AMSTAR-2 muy baja).
- C) Indicar beta-bloqueo inmediato con landiolol guiado por el estudio de Morelli (2013) como estándar absoluto de primera línea.
- D) Iniciar levosimendán de rutina porque su análisis TSA alcanzó el $100\%$ de certeza estadística en Rodríguez 2025.
- E) Retirar primero la vasopresina antes que descender noradrenalina porque reduce la hipotensión de rebote.

### Pregunta 7 (M08 + M11 — Coagulopatía, SPG, PRIS y Sedoanalgesia)
Paciente de $50\text{ años}$ con shock séptico biliar, *shock liver* ($\text{AST } 5.100$, $\text{Bb } 5{,}2$, $\text{INR } 2{,}6$), plaquetas $36.000/\text{mm}^3$ sin sangrado activo, en CKRT. Recibe **propofol $6{,}2\text{ mg/kg/h}$**, **midazolam $8\text{ mg/h}$** por tubuladura de PVC junto con **fluconazol IV** y antibiótico **meropenem** (cuando antes tomaba ácido valproico). Desarrolla acrocianosis simétrica distal, $\text{CPK } 11.000\text{ U/L}$, lactato en ascenso pese a PAM $68\text{ mmHg}$ y nueva crisis comicial focal. ¿Qué conjunto de mecanismos explica el cuadro?
- A) La acrocianosis (SPG) se debe únicamente a toxicidad directa de noradrenalina, la plaquetopenia obliga a heparina terapéutica plena y el propofol es inocuo debajo de $7\text{ días}$.
- B) Coexisten **PRIS** por propofol $>6\text{ mg/kg/h}$ ($\text{CPK}\ge 5.000$, suspender ya y dar glucosa IV), **falla hepato-renal + fluconazol que bloquean metabolismo de midazolam** mientras CKRT **no aclara el midazolam padre** (**Smeets 2024**, **Le Carpentier 2022**, **Shudofsky 2026**), **desplome $-96\%$ del ácido valproico por meropenem** explicando la crisis, **SPG por CID + *shock liver* (depleción PC/AT)** y tromboprofilaxis segura evaluable entre $30\text{–}50\text{k}$ sin anticoagulación plena (**Wang 2026** $\text{RR } 1{,}32$ sangrado; **Chen 2026** $\text{aHR } 0{,}51$).
- C) La CPK elevada se explica por la acrocianosis y requiere dobutamina $15\ \mu\text{g/kg/min}$ + bolo de bicarbonato sódico.
- D) Cambiar el propofol por sevoflurano mejora la supervivencia en SDRA según SESAR 2025.
- E) El score SIC clásico solo utiliza plaquetas, INR y componente cardiovascular del SOFA.

### Pregunta 8 (M04 + M10 + M11 — Oximetría en piel oscura, POCUS gástrico y Nutrición)
Varón afrodescendiente de $61\text{ años}$ con shock séptico bajo noradrenalina $0{,}40\ \mu\text{g/kg/min}$ (base) e hipoperfusión periférica. Su oxímetro de pulso marca $\text{SpO}_2\ 92\%$, se propone iniciar nutrición enteral completa a $25\text{ kcal/kg/d}$ y añadir probióticos para reforzar la barrera intestinal según un valor elevado de "zonulina" comercial. ¿Cuántos errores críticos detecta usted?
- A) Ninguno; todas son medidas respaldadas por SSC 2026 y NUTRIREA-2.
- B) Cuatro errores mayores: (1) riesgo del **$21{,}1\%$ de hipoxemia arterial oculta ($\text{SaO}_2<88\%$)** en piel oscura con hipoperfusión (**Gudelunas 2024**, exige gasometría arterial), (2) riesgo elevado de **isquemia mesentérica** con enteral plena en shock vasopresor alto (**NUTRIREA-2 $\text{HR } 3{,}84$**; preferir $6\text{ kcal/kg/d}$ inicial **NUTRIREA-3**), (3) **probióticos contraindicados** en sepsis grave por bacteriemia (**PROSPECT $\text{OR } 14{,}02$**) y (4) el kit comercial de **"zonulina" mide properdina** (**Scheffler 2018**), no integridad de uniones estrechas.
- C) Solo el error nutricional; el oxímetro es igual de preciso ($1\%$) en todos los tonos de piel durante vasoconstricción.
- D) Se debe sedar al paciente con dexmedetomidina para realizarle prono vigil sin intubarlo.
- E) La translocación bacteriana intestinal es la causa única comprobada de toda mortalidad séptica tardía ($\text{aOR } 8{,}5$ en Varkila 2024).

### Pregunta 9 (M01 + M06 + M07 + M11 — Destete, Rebote SVT, WIPO y Abstinencia Opioide)
Paciente séptico en resolución (día 5), destetado recientemente de infusión de **dexmedetomidina** tras haber recibido también **fentanilo a $65\ \mu\text{g/h}$ ($1.560\ \mu\text{g/d}$) durante $84\text{ horas}$**. Al iniciar prueba de ventilación espontánea desarrolla taquicardia supraventricular a $145\text{ lpm}$, hipertensión, agitación y **LUS score pulmonar de $21$ puntos** con $8$ líneas B bilaterales. ¿Cuál es el análisis correcto?
- A) La SVT demuestra exclusivamente recidiva infecciosa oculta y descarta abstinencia opioide porque aún no cumplió $5$ días de fentanilo.
- B) Convergen tres mecanismos de UCI bien caracterizados: **taquicardia supraventricular de rebote post-suspensión de dexmedetomidina** ($88{,}1\%$ en **Zhong 2026**), **síndrome de abstinencia iatrogénica a opioides (IWS)** por haber superado ambos umbrales ($\ge 72\text{ h}$ y $\ge 1.200\ \mu\text{g/d}$, `PMID 37151892`) y **edema pulmonar inducido por destete (WIPO)** altamente probable ($\text{LUS}>17$ y $\ge 6$ líneas B bilaterales, S/E $88\%$).
- C) Un LUS score de $21$ puntos confirma neumotórax bilateral masivo en el protocolo BLUE.
- D) El ensayo VASSPR (2026) ordena suspender inmediatamente los opioides sin rotación en pacientes hipertensos.
- E) Según Zhou et al. (2026), la excursión diafragmática por sí sola posee cero sesgos QUADAS-2 y resuelve el destete sin ecografía pulmonar ni cardíaca.

### Pregunta 10 (M01 + M05 + M10 — Lectura Metodológica Avanzada R3)
Durante un ateneo bibliográfico R3 se discuten cuatro trabajos recientes: **ANDROMEDA-SHOCK-2 (2025)**, **ARISE FLUIDS (2026)**, **TIGRIS (2026)** y un nuevo **score de IA en UCI (*JAMA Netw Open* 2026)**. ¿Cuál de las siguientes afirmaciones críticas demuestra lectura R3 sin sesgos?
- A) ANDROMEDA-SHOCK-2 demostró reducción absoluta de mortalidad a 28 d del $10\%$ con Win Ratio $1{,}16$; ARISE FLUIDS duplicó mortalidad al restringir fluidos; TIGRIS fue doble ciego con *sham* y el modelo de IA en UCI mantiene AUPRC $0{,}90$.
- B) En **ANDROMEDA-SHOCK-2**, el Win Ratio positivo ($1{,}16$, $p=0{,}04$) fue impulsado por días libres de soporte orgánico ($16{,}5$ vs $15{,}4$) con **mortalidad 28 d neutra ($26{,}5\%$ vs $26{,}6\%$)**; **ARISE FLUIDS** tuvo días fuera de hospital y mortalidad neutros ($76$ vs $76$ d) reduciendo drásticamente **edema pulmonar ($0{,}6\%$ vs $5{,}0\%$)**; **TIGRIS** fue **abierto sin *sham*** ($2:1$, $n=151$) con análisis bayesiano informado; y el modelo de IA sufrió **compresión de riesgo en UCI ($\text{AUROC } 0{,}76 / \text{AUPRC } 0{,}24$)**.
- C) La regla del punto z de Magder aconseja administrar más fluido cuando la $\text{PVC}$ sube $\ge 2\text{ mmHg}$ sin subir el gasto cardíaco.
- D) El ensayo Ko et al. (2026) sobre $\text{PAD}<50\text{ mmHg}$ fue un ECA multicéntrico doble ciego con cero inconsistencias numéricas.
- E) La lactilación de histonas es un marcador exclusivo de hepatotoxicidad por fluconazol sin relación inmunometabólica.

<details>
<summary>Ver respuestas y justificación tripartita consolidada (Preguntas 1–10)</summary>

1. **Respuesta correcta: B.** Conversión exacta $0{,}48/2 = 0{,}24$ base ($\text{CV}=3$), VM+$\text{PaFi } 140$ ($\text{Resp}=3$), GCS pre-sedación $15$ ($0$); $\text{PAD } 44<50$, $\text{DSI } 120/44 = 2{,}73$ y $\text{VNERi} = 44/(0{,}48\times 120) = 0{,}76 < 2{,}6$.
2. **Respuesta correcta: C.** Integra Si 2026 ($55\%$ congestión orgánica con $\text{VCI}<2\text{ cm}$, $\text{EVLWI}$ en SDRA), LUS $>17$, ARISS 2026 ($43{,}3\%$ vs $45{,}9\%$ neutro) y límite de SYN-1 (Daniyarova 2025).
3. **Respuesta correcta: B.** Tres trampas reales juntas: LVOTO/SAM ($53\%$ mort, Li 2025), Haldane (Dubin & Pozo 2025) y perseguir lactato con CRT normal (Kattan 2020 $\text{aOR } 3{,}3$).
4. **Respuesta correcta: B.** Aldardeer 2024 + Kuwana 2026 en primeras 48 h; fluconazol $800 \to 800\text{ mg/d}$ en CKRT; estabilidad meropenem $6\text{–}8\text{ h}$ y neurotoxicidad cefepime $>20\text{ mg/L}$.
5. **Respuesta correcta: B.** Ulldemolins 2026 ($\text{uCLcr}>130$), Malbrán 2025 (CRAB sulbactam $9\text{ g/d}$; no extrapolar Emblaveo®), BALANCE 2025 ($7\text{ d}$), ADAPT-Sepsis 2025 (PCT sí / PCR no) y corrección BLING III (*JAMA* 2024).
6. **Respuesta correcta: B.** Evita anakinra ciega (Haar / Ouranos 2026 / ImmunoSep 90 d neutro) y vitamina C (VICTORY 2026 daño), e integra FluDReSS 2024 y Weibel 2026.
7. **Respuesta correcta: B.** Integra PRIS ($31\%$ $>6\text{ mg/kg/h}$, $\text{CPK}\ge 5.000$), MIRA-PK midazolam/CKRT/fluconazol, carbapenem+valproato ($-96\%$), SPG y Wang/Chen 2026.
8. **Respuesta correcta: B.** Gudelunas 2024 ($21{,}1\%$), NUTRIREA-2/3 ($\text{HR } 3{,}84$ / $6\text{ kcal/kg/d}$), PROSPECT ($\text{OR } 14{,}02$) y Scheffler 2018 (properdina).
9. **Respuesta correcta: B.** Rebote SVT post-dexmedetomidina ($88{,}1\%$, Zhong 2026), umbral IWS ($\ge 72\text{ h}$ / $\ge 1.200\ \mu\text{g/d}$) y WIPO ($\text{LUS}>17$).
10. **Respuesta correcta: B.** Síntesis crítica exacta de ANDROMEDA-2, ARISE FLUIDS, TIGRIS y la compresión de riesgo IA en UCI.

</details>

---

## 2. Caso Integrador Longitudinal: *"Caso T"* (Las 3 Trampas Secuenciales de Guardia)

*Basado y auditado directamente desde `Sepsis y Shock Septico/Caso T` para entrenar al residente R2–R3 contra errores acumulativos en una misma internación de 7 días:*

- **Presentación basal:** Paciente de $66\text{ años}$ con shock séptico abdominal posquirúrgico, función renal limítrofe fluctuante al ingreso ($\text{Cr } 2{,}1\text{ mg/dL}$), ventilación mecánica invasiva con asincronías iniciales y evolución a lo largo de $7\text{ días}$ de UCI.
- **Trampa Secuencial #1 (Día 2 — Error de Ajuste Prematuro):** Al ver creatinina $2{,}1\text{ mg/dL}$ al ingreso, la guardia indica **piperacilina-tazobactam $2{,}25\text{ g}$ c/$12\text{ h}$** sin dosis de carga ni infusión extendida. Entre las horas $12\text{–}48$, el riñón inicia recuperación parcial (fenómeno **Hughes 2022** / **Aldardeer 2024**) mientras el $V_d$ está expandido → falla PK/PD temprana con persistencia bacteriana y nuevo ascenso térmico. *Lección:* carga plena + sostener dosis estándar inicial $24\text{–}48\text{ h}$, revaluando al día $2\text{–}3$ (**M09**).
- **Trampa Secuencial #2 (Días 4–5 — Escalamiento Iatrogénico hacia PRIS):** Por persistencia febril, taquipnea y mala adaptación al respirador, se rota/escala **propofol por encima de $5{,}5\text{–}6\text{ mg/kg/h}$** sumado a catecolaminas. Aparecen lactacidemia desproporcionada con CRT normal, $\text{K}^+$ en ascenso, lipemia y pico masivo de **$\text{CPK}$ ($> 5.000\text{–}15.000\text{ U/L}$)** → **PRIS** clásico por bloqueo CPT-I y complejos I–III (**M11**). Se suspende propofol, se aporta glucosa IV y soporte.
- **Trampa Secuencial #3 (Días 6–7 — Falso Diagnóstico de Síndrome Neuroléptico Maligno [SNM]):** Con el paciente aún febril al día 6–7, taquicárdico y rígido tras haber recibido dosis aisladas de haloperidol por agitación previa, alguien plantea **SNM** por ver la **CPK todavía elevada**.
  - **Refutación lógica en guardia:** reconstruyendo la **línea temporal (*causalidad inversa*)**, la CPK había hecho su pico máximo *antes* del neuroléptico (durante el PRIS de los días 4–5) y venía **descendiendo** exponencialmente; además no hay rigidez "en tubo de plomo" progresiva nueva paralela a ascenso enzimático. La fiebre nueva aislada sin empeoramiento hemodinámico ni elevación de PCT corresponde a **fiebre medicamentosa tardía por vancomicina** (resolución tras rotar antibiótico manteniendo vigilancia microbiológica).

---

## 3. Serie *"El Monitor Puede Mentir"* (8 Micro-Casos de 60 Segundos)

| # | Qué muestra el Monitor / Laboratorio | Lo que parece (Trampa) | Verdad Fisiopatológica y Evidencia | Módulo |
| :---: | :--- | :--- | :--- | :---: |
| **1** | $\text{PAM } 65\text{ mmHg}$ ($\text{PAS } 106 / \text{PAD } 44$), $\text{FC } 123\text{ lpm}$ | "PAM en meta $\ge 65$, todo estable" | **$\text{PAD } 44 < 50$**, **$\text{DSI } 2{,}80$**: vasoplejia arterial grave y riesgo coronario diastólico (**Ko 2026**, **Windkessel**) | `M05` |
| **2** | Creatinina al ingreso $1{,}8\text{ mg/dL}$ en shock séptico hora 1 | "Ajustar meropenem a $500\text{ mg}$ c/$12\text{ h}$ ya" | Carga plena siempre; diferir ajuste renal $24\text{–}48\text{ h}$ (**Aldardeer 2024** $\text{HR } 0{,}588$; **Kuwana 2026**); y si $\text{Cr } 0{,}6$, vigilar **ARC** (**Ulldemolins 2026**) | `M09` |
| **3** | Lactato $4{,}9\text{ mmol/L}$ + FEVI $72\%$ + VTI $25\text{ cm}$ bajo dobutamina | "Falta inotrópico o volumen" | Buscar **LVOTO/SAM** ($20\text{–}22\%$, $53\%$ mort, **Li 2025**) y verificar si **$\text{CRT} \le 3\text{ s}$** (**Kattan 2020** $\text{aOR } 3{,}3$) | `M07` `M04` |
| **4** | Diuresis $0{,}3\text{ mL/kg/h}$ por $7\text{ h}$ con $\text{Cr } 0{,}9\text{ mg/dL}$ estable | "Necrosis tubular establecida, pasar 2 L SF y dializar" | **$65\%$ oligurias aisladas** son funcionales/reversibles (**White 2023 $\text{OR } 0{,}34$**); 90% túbulos intactos (**Takasu**) | `M10` |
| **5** | $\text{qSOFA } 1$ + Software comercial IA silencioso (o alerta $0{,}94$ folleto) | "No tiene sepsis, ni hay que mirarlo" | qSOFA sens **$0{,}52$**; IA en UCI comprimida a **$\text{AUROC } 0{,}76 / \text{AUPRC } 0{,}24$** (*JAMA Netw Open* 2026) | `M01` |
| **6** | Ferritina $4.500\text{ ng/mL}$ + $\text{AST } 3.100$ + Lactato $8{,}0\text{ mmol/L}$ | "MALS puro: dar anakinra ya" | **Haar** ($\text{lactato}>6$, $\text{OR } 16{,}1$), **Ouranos 2026** (rampa continua, $\text{HR } 1{,}83$ real-world), **ImmunoSep** (90 d neutro) | `M02` |
| **7** | Glucómetro capilar POC marca $410\text{ mg/dL}$ bajo Vitamina C IV externa | "Cetoacidosis / hiperglucemia severa: bolo de insulina" | **Interferencia electroquímica POC** por ascorbato + **VICTORY 2026** ($\text{HR } 1{,}96$ daño: suspender Vit C!) | `M06` |
| **8** | Furosemida en Y por el mismo lumen que Noradrenalina; cae PAM | "Shock súbito refractario irreversible" | **Precipitación cristalina química directa** en la vía Y: cambiar tubuladura y separar lúmenes de inmediato | `M06` |

---

## 4. Especificación de Gamificación y Mantenimiento Vivo (Fase 2)

### 4.1 Estructura de progreso para Web App (`localStorage`)
- **Tres rangos progresivos:**
  1. `Residente R2 (Guardia Inicial)`: dominar Capa Base + simuladores `M03`, `M05`, `M09`.
  2. `Residente R3 (Unidad Crítica)`: aprobar $>80\%$ en los 11 bancos modulares + *El Monitor Puede Mentir*.
  3. `Fellow / Staff SATI`: resolver $\ge 9/10$ en el Examen Integrador Transversal + reconstruir las 3 trampas del *Caso T*.
- **Bloque de Evidencia Viva integrado:** consume automáticamente `base-conocimiento/evidencia-viva.json` (generado por `scripts/ingestar_radar.py`), destacando en `M12` tarjetas nuevas etiquetadas `[SEÑAL PRÁCTICA]` y `[ALERTA METODOLÓGICA]` de las últimas entregas del Radar Bibliográfico.
- **Estado actual de la base viva indexada:** **`68` entradas de sepsis y shock** (`2026-07-12` a `2026-11-22`, con `41` entradas solo-cardiología filtradas automáticamente).

---

## 5. Referencias Verificadas del Centro Evaluativo

1. **Banco interno de evaluaciones SATI:** `Evaluaciones/_indice.md` y `examen_integrador_80` (reglas psicométricas: 5 opciones A–E sin pistas de longitud ni respuestas inline, justificación tripartita).
2. **Casos clínicos auditados en bóveda:** `Sepsis y Shock Septico/Caso T`, `El Monitor Puede Mentir`, `Sepsis en la guardia`.
3. **Motor de Evidencia Viva:** evidencia-viva.json y pendientes-revision.md.
4. Todas las citas primarias cruzadas corresponden a los registros verificados de los módulos `M01`–`M11` y 00-matriz-fuentes.md.
