---
tags: [sepsis, radar, evidencia-viva, pendientes]
tipo: cola-revision
actualizado: 2026-11-25 22:14
---

# Cola de Revisión de Evidencia Viva — Sepsis Atlas UTI

Procesadas **17 entregas** del Radar Bibliográfico. Se indexaron **68 entradas relevantes para sepsis/shock** (se omitieron **41** entradas exclusivas de cardiología mecánica/IC aguda).

## Cómo usar esta cola
1. Al llegar una nueva entrega semanal en `Sepsis y Shock Septico/00 Radar Bibliografico/`, ejecutar `python scripts/ingestar_radar.py`.
2. Los ítems marcados con **[SEÑAL PRÁCTICA]** o de alta jerarquía (RCT/guía/metaanálisis) se revisan primero para promoverlos al cuerpo del módulo `MXX-*.md`.
3. Los ítems marcados con **[CAUTELA / ALERTA]** sirven para reforzar la sección *Cómo NO sobreinterpretarlo* sin sobredimensionar observacionales.

## M01 (21 entradas)

- **2026-11-22** [LECTURA] **Trayectorias de balance desde el día 3 en sepsis** · PMID 43066603 · DOI `10.1177/08850666261509926` *(rel: directa)*
  - *Resultado:* mortalidad cruda 28 días de 20,8% en recuperación rápida. Frente a ella, respuesta tardía: aOR 1,30 (IC95% 1,14–1,49); falla persistente: aOR 1,27 (IC95% 1,09–1,48).
  - *No sobreinterpretar:* no usar las tres clases para prescribir descongestión ni afirmar que el balance positivo sea la causa de la mortalidad.
- **2026-11-22** [LECTURA] **Fenotipo de shock e Impella: cohorte real** · PMID 43055770 · DOI `10.1007/s00392-026-03055-6` *(rel: directa)*
  - *Resultado:* mortalidad intrahospitalaria global 48,9%; en fenotipo asociado a sepsis 80,6%. Asociación ajustada de sepsis con muerte intrahospitalaria: aOR 4,65 (IC95% 2,03–12,07). Sangrado mayor 14,9%, isquemia de miembro 11,7%.
  - *No sobreinterpretar:* no concluir que Impella empeora pronóstico en sepsis ni usar el modelo para negar soporte a un individuo.
- **2026-11-01** [ALERTA METODOLÓGICA] **HALP y coagulopatía inducida por sepsis** · DOI `10.1097/SHK.0000000000002956` *(rel: directa)*
  - *Resultado:* - **Cita:** Dong X, Liu X, Ma X, et al. *Sepsis-induced coagulopathy attenuates the prognostic value of the hemoglobin–albumin–lymphocyte–platelet (HALP) score in sepsis.* **Shock.** Publicado online 29 oct 2026. DOI: [10.1097/SHK.0000000000002956](https://doi
- **2026-10-18** [SEÑAL PRÁCTICA] **Vasopresina: iniciar a 0,1 versus 0,4 µg/kg/min de noradrenalina-equivalente no redujo mortalidad** · DOI `10.1001/jama.2026.21333` *(rel: directa)*
  - *No sobreinterpretar:* no demuestra que la vasopresina sea inútil, ni que haya que esperar siempre 0,4 µg/kg/min; tampoco invalida indicaciones contextualizadas por un paciente concreto.
- **2026-09-27** [LECTURA] **Presion arterial diastolica en SSC 2026: pieza muy relevante para tu linea de vasoplejia** · PMID 42786551 · DOI `10.1093/ajrccm/aamag511` *(rel: directa)*
  - *Resultado:* no disponible en metadata PubMed.
  - *No sobreinterpretar:* no tomar el titulo como recomendacion formal; hasta leer el texto no asignar umbrales ni algoritmos.
- **2026-09-27** [ALERTA METODOLÓGICA] **Albumina hiperoncotica 20% en sepsis/shock: metaanalisis interesante, certeza baja** · PMID 42783423 · DOI `10.3390/medsci14050550` *(rel: directa)*
  - *Resultado:* mortalidad global RR 0,94; no robusto segun metodos. En subgrupo shock septico: RR 0,90 (IC95% 0,82-0,99; p=0,03). Certeza GRADE baja.
  - *No sobreinterpretar:* el subgrupo de shock es sugerente, no definitivo; evitar transformar una senal de metaanalisis en protocolo.
- **2026-09-06** [LECTURA] **SOFA-2: modernizacion, no adopcion automatica** · PMID 42700459 · DOI `10.1097/MCC.0000000000001417` *(rel: directa)*
  - *Resultado:* SOFA-2 conserva seis organos, actualiza definiciones, terapias contemporaneas, datos faltantes y disfuncion aguda sobre cronica; gastrointestinal e inmune fueron evaluados pero no incluidos por falta de soporte suficiente en datasets.
  - *No sobreinterpretar:* no asumir que reemplaza SOFA-1 en todos los protocolos o definiciones Sepsis-3 sin validacion local.
- **2026-08-23** [LECTURA] **Sepsis despues de trauma severo** · PMID 42628456 · DOI `10.1016/j.jcrc.2026.155719` *(rel: directa)*
  - *Resultado:* sepsis 5,7% (3486 pacientes). Estadia UTI mediana 19 vs 3 dias. MOF 68,7% en septicos vs 14,7% no septicos. Mortalidad asociada a sepsis 31,5%; foco pulmonar 63,6%, abdominal 8,7%; fatalidad abdominal 38,0% y pulmonar 32,3%. Ventilacion temprana al ingreso UTI
  - *No sobreinterpretar:* no asumir que todo ventilado necesita antibiotico precoz por el OR; usarlo para vigilancia, no para sobrediagnostico.
- **2026-08-23** [LECTURA] **Monitorizacion continua de glucosa en sepsis critica** · PMID 42622665 · DOI `10.1177/03000605261477581` *(rel: directa)*
  - *Resultado:* correlacion r=0,986; MARD 11,44%; 100% de lecturas en zonas A/B del error grid. Adherencia 73,91% vs 48,16%; tiempo 41,33 vs 63,67 s; mas hipoglucemias detectadas 2,46% vs 0,28%.
  - *No sobreinterpretar:* no reemplaza control arterial/venoso en shock profundo, vasopresores altos o discordancia clinica.
- **2026-08-09** [LECTURA] **SOFA-2 y mortalidad a 90/365 dias en sepsis** · PMID 42566422 · DOI `10.1097/SHK.0000000000002918` *(rel: directa)*
  - *Resultado:* por cada punto SOFA-2, OR ajustado 1,17 para mortalidad a 90 dias y 1,16 para 365 dias. Discriminacion individual modesta: AUC 0,65 y 0,64; random forest subio a 0,68 y 0,67.
  - *No sobreinterpretar:* un AUC 0,65 no alcanza para decisiones individuales duras. En sepsis real pesa la tendencia: lactato, diuresis, vasopresores, perfusion, foco, comorbilidad y respuesta inicial.
- **2026-08-09** [LECTURA] **Azul de metileno vs hidroxocobalamina en shock septico** · PMID 42565679 · DOI `10.1080/08998280.2026.2697704` *(rel: directa)*
  - *Resultado:* mortalidad y AKI similares. Hidroxocobalamina se asocio con mas inicio de CRRT a 3-7 dias y 7 dias, y mas stroke/vasopresores prolongados en dias 3-7; el abstract no da medidas de efecto numericas para esos secundarios.
  - *No sobreinterpretar:* no habilita a elegir azul de metileno como estandar ni a descartar hidroxocobalamina. Requiere ensayo prospectivo y seleccion fisiologica de pacientes.
- **2026-08-02** [SEÑAL PRÁCTICA] **SOFA-2 en guardia para infeccion sospechada: valida riesgo, no define conducta por si solo** · PMID 42542312 · DOI `10.1016/j.ijid.2026.109030` *(rel: directa)*
  - *Resultado:* AUROC SOFA-2 0,78 (IC95% 0,78-0,78), similar a SOFA-1 0,78, superior a qSOFA 0,72 y SIRS 0,63. SOFA-2 asigno menor score en 62,3% y mayor score en 1,5%; los reclasificados hacia arriba tuvieron mortalidad 25,2%.
  - *No sobreinterpretar:* no es una definicion operativa de sepsis por si sola, no reemplaza juicio clinico y no autoriza demorar antibioticos o reanimacion esperando completar el score.
- **2026-08-02** [ALERTA METODOLÓGICA] **Modelos y biomarcadores de sepsis: utiles para investigacion, no para implementar sin validacion local** · PMID 42540072 · DOI `10.3389/fcvm.2026.1788162` *(rel: directa)*
  - *Resultado:* - **SICM prediction model:** *Development and validation of a clinical prediction model for sepsis-induced cardiomyopathy.* Frontiers in Cardiovascular Medicine. DOI: [10.3389/fcvm.2026.1788162](https://doi.org/10.3389/fcvm.2026.1788162). PMID: [42540072](http
- **2026-08-02** [ALERTA METODOLÓGICA] **Items con abstract no accesible en PubMed durante la corrida** · PMID 42536586 · DOI `10.1097/MD.0000000000049961` *(rel: directa)*
  - *Resultado:* - *Anion gap trajectory patterns and prognosis in sepsis patients: A multicenter retrospective study.* Medicine. DOI: [10.1097/MD.0000000000049961](https://doi.org/10.1097/MD.0000000000049961). PMID: [42536586](https://pubmed.ncbi.nlm.nih.gov/42536586/). No so
- **2026-07-26** [LECTURA] **SIC-2: criterio simplificado de coagulopatia inducida por sepsis** · PMID 42498136 · DOI `10.1016/j.jtha.2026.07.013` *(rel: directa)*
  - *Resultado:* AUC para DIC 0,850 vs 0,854 (p = 0,37); mortalidad 28 dias AUC 0,621 vs 0,614, diferencia absoluta 0,007.
  - *No sobreinterpretar:* no es indicacion automatica de anticoagulacion, plasma, plaquetas ni trombomodulina; tampoco reemplaza juicio clinico de sangrado/trombosis.
- **2026-07-19** [SEÑAL PRÁCTICA] **Shock septico aparentemente refractario: no alcanza mirar la dosis de noradrenalina** · PMID 42467247 · DOI `10.1007/s00134-026-08551-x` *(rel: directa)*
  - *Resultado:* 188/1363 (13,8%) tenian equivalente de noradrenalina >0,5 mcg/kg/min a las 6 h, con mortalidad 47,9%. Con dos criterios de hipoperfusion, 53 pacientes (3,9%) tuvieron mortalidad 73,6% vs 23,7% en no refractarios; aHR 4,68 (IC95% 3,31-6,64). El LR+ fue 8,12 con
  - *No sobreinterpretar:* no usar >0,5 mcg/kg/min como gatillo automatico de terapias heroicas; obliga a re-chequear foco, volumen util/tolerado, ventriculo, vasoplejia, acidosis, sedacion y drogas antes de declarar fracaso.
- **2026-07-19** [LECTURA] **Refractariedad en shock septico como proceso de re-evaluacion** · PMID 42469837 · DOI `10.1186/s13054-026-06197-1` *(rel: directa)*
  - *No sobreinterpretar:* no es una guia ni algoritmo obligatorio; es una forma ordenada de no saltear causas corregibles.
- **2026-07-12** [LECTURA] **Test transcriptomico rapido en guardia para sepsis/infeccion** · PMID 42420745 · DOI `10.1007/s11739-026-04457-0` *(rel: directa)*
  - *Resultado:* bacteriana: especificidad rule-in 89-94%, sensibilidad rule-out 87-92%; viral: especificidad 92-95%, sensibilidad 76-92%; severidad: especificidad 83-86%, sensibilidad 85-87%.
  - *No sobreinterpretar:* no reemplaza foco, cultivos, antibiotico precoz cuando corresponde ni reevaluacion de perfusion.
- **2026-07-12** [LECTURA] **Lactato a 6 horas + PAFI en SDRA asociado a sepsis** · PMID 42434889 · DOI `10.1177/08850666261466237` *(rel: directa)*
  - *Resultado:* mortalidad 34,5%; AUC 0,82 derivacion, 0,80 validacion interna, 0,73 validacion externa; calibracion reportada como adecuada.
  - *No sobreinterpretar:* no usar la formula como "score de corte" para limitar tratamiento o indicar conductas; usarlo como marco de riesgo pendiente de validacion.
- **2026-07-12** [SEÑAL PRÁCTICA] **Impact of intravenous push antibiotics on sepsis management at a Veterans Affairs medical center emergency department** · PMID 42433622 · DOI `10.1017/ash.2026.10761` *(rel: directa)*
  - *Resultado:* mediana 132 min a 99 min; antibiotico dentro de 60 min 20,3% a 28,0%; dentro de 180 min 70,8% a 79,8%; estadia en guardia 397 a 369 min.
  - *No sobreinterpretar:* no significa "todo antibiotico en sepsis debe ser IV push"; significa que la logistica de administracion puede ser un cuello de botella medible.
- **2026-07-12** [LECTURA] **Corticoides en infeccion pulmonar grave** · PMID 42425738 · DOI `10.1136/bmjresp-2025-003934` *(rel: directa)*
  - *Resultado:* 12 RCTs, 4622 pacientes, 1203 eventos. OR de mortalidad de corto plazo 0,83 (IC95% 0,70-0,98), p=0,029, I2 2,0%, NNT 37,84, certeza GRADE baja. En NAC: OR 0,72 (IC95% 0,54-0,98), NNT 28,10. Cursos >7 dias mostraron diferencia; cursos <=7 dias no.
  - *No sobreinterpretar:* no usarlo como licencia para corticoides universales en toda sepsis o toda neumonia; mirar fenotipo, shock, oxigenacion, riesgo de infeccion secundaria/hiperglucemia y duracion.

## M02 (6 entradas)

- **2026-11-15** [LECTURA] **Fenotipos endoteliales y disfunción hepática asociada a sepsis** · PMID 42805482 · DOI `10.1016/j.lfs.2026.124715` *(rel: directa)*
  - *No sobreinterpretar:* no pedir citometría ni usar esta razón para anticipar, diagnosticar o tratar SALD; tampoco prueba que el fenotipo endotelial sea el mecanismo causal.
- **2026-09-06** [ALERTA METODOLÓGICA] **AUROC alto puede ocultar falla de decision en clasificadores transcriptomicos de sepsis** · PMID 42691061 · DOI `10.1371/journal.pone.0357585` *(rel: directa)*
  - *Resultado:* algunos modelos mantienen AUROC alto pero colapsan en umbrales fijos al transferirse entre cohortes/plataformas; en una validacion externa, balanced accuracy 0,50 pese a AUROC alto.
- **2026-08-23** [ALERTA METODOLÓGICA] **Critical Care Medicine: microcirculacion y nucleosomas H3.1** · PMID 42623141 · DOI `10.1097/CCM.0000000000007324` *(rel: directa)*
  - *Resultado:* - Beyond Supportive Care: Targeting the Microcirculation in Septic Shock. Crit Care Med. 2026 Aug 20. PMID: 42623141. DOI: 10.1097/CCM.0000000000007324. - H3.1 Nucleosomes in Sepsis: A Biomarker, a Mechanism, or Both? Crit Care Med. 2026 Aug 20. PMID: 42622496
  - *No sobreinterpretar:* no transformar microcirculacion/H3.1 en dianas terapeuticas bedside hasta leer texto completo y estudio fuente asociado.
- **2026-08-23** [LECTURA] **AKD despues de AKI asociada a sepsis: cinetica renal vs biomarcadores** · PMID 42618952 · DOI `10.1186/s40560-026-00926-y` *(rel: directa)*
  - *Resultado:* AKD en 196/690 (28,4%). MR-proADM basal asociado a AKD (OR ajustado 1,17; IC95% 1,08-1,28). AUC del modelo combinado: 0,65 basal, 0,70 dia 2, 0,76 dia 7. AKD se asocio con mortalidad 90 dias 55% vs 24% (RR 2,3; IC95% 1,9-2,9). H3.1 agrego poco valor clinico so
  - *No sobreinterpretar:* no convertir MR-proADM o H3.1 en indicacion de dialisis, volumen o vasopresores. Sirven como hipotesis/riesgo, no como orden terapeutica.
- **2026-07-12** [LECTURA] **Test transcriptomico rapido en guardia para sepsis/infeccion** · PMID 42420745 · DOI `10.1007/s11739-026-04457-0` *(rel: directa)*
  - *Resultado:* bacteriana: especificidad rule-in 89-94%, sensibilidad rule-out 87-92%; viral: especificidad 92-95%, sensibilidad 76-92%; severidad: especificidad 83-86%, sensibilidad 85-87%.
  - *No sobreinterpretar:* no reemplaza foco, cultivos, antibiotico precoz cuando corresponde ni reevaluacion de perfusion.
- **2026-07-12** [LECTURA] **Fenotipado inmune-endotelial en sepsis postoperatoria** · PMID 42435583 · DOI `10.1016/j.ebiom.2026.106372` *(rel: directa)*
  - *Resultado:* dos subpoblaciones B y un cluster endotelial CD36/CD16 se asociaron independientemente con mortalidad; el score integrado tuvo AUC 0,935 vs SOFA/APACHE II 0,751-0,804.
  - *No sobreinterpretar:* no reemplaza SOFA, perfusion ni juicio clinico; no define tratamiento inmunomodulador por ahora.

## M03 (3 entradas)

- **2026-11-15** [LECTURA] **Fenotipos endoteliales y disfunción hepática asociada a sepsis** · PMID 42805482 · DOI `10.1016/j.lfs.2026.124715` *(rel: directa)*
  - *No sobreinterpretar:* no pedir citometría ni usar esta razón para anticipar, diagnosticar o tratar SALD; tampoco prueba que el fenotipo endotelial sea el mecanismo causal.
- **2026-08-23** [ALERTA METODOLÓGICA] **Revisiones/protocolos con abstract no disponible en PubMed** · PMID 42631849 · DOI `10.1007/s10456-026-10084-2` *(rel: cardio_sepsis)*
  - *Resultado:* - Evaluating the endothelial glycocalyx from bench to bedside: a translational framework for microvascular assessment. Angiogenesis. 2026 Aug 22. PMID: 42631849. DOI: 10.1007/s10456-026-10084-2. - Current Methods, Quality Control, and Translational Perspective
- **2026-07-12** [LECTURA] **Fenotipado inmune-endotelial en sepsis postoperatoria** · PMID 42435583 · DOI `10.1016/j.ebiom.2026.106372` *(rel: directa)*
  - *Resultado:* dos subpoblaciones B y un cluster endotelial CD36/CD16 se asociaron independientemente con mortalidad; el score integrado tuvo AUC 0,935 vs SOFA/APACHE II 0,751-0,804.
  - *No sobreinterpretar:* no reemplaza SOFA, perfusion ni juicio clinico; no define tratamiento inmunomodulador por ahora.

## M04 (24 entradas)

- **2026-11-22** [LECTURA] **Trayectorias de balance desde el día 3 en sepsis** · PMID 43066603 · DOI `10.1177/08850666261509926` *(rel: directa)*
  - *Resultado:* mortalidad cruda 28 días de 20,8% en recuperación rápida. Frente a ella, respuesta tardía: aOR 1,30 (IC95% 1,14–1,49); falla persistente: aOR 1,27 (IC95% 1,09–1,48).
  - *No sobreinterpretar:* no usar las tres clases para prescribir descongestión ni afirmar que el balance positivo sea la causa de la mortalidad.
- **2026-11-22** [LECTURA] **PAM, perfusión y shock séptico refractario** · PMID 43057195 · DOI `10.1016/j.jcrc.2026.155803` *(rel: directa)*
  - *Resultado:* plantea que, por encima de aproximadamente 60–65 mmHg, la perfusión medida por lactato y relleno capilar suele desacoplarse de la presión arterial y propone desafíos de PAM acotados en el tiempo con marcadores seriados de perfusión.
  - *No sobreinterpretar:* no justificar tolerar hipotensión ni reducir vasopresores sin integrar perfusión, contexto neurológico/coronario/renal y ecografía.
- **2026-11-08** [LECTURA] **Perfusión en shock séptico y la “vascular waterfall”** · PMID 42523186 · DOI `10.1093/ajrccm/aamag397` *(rel: directa)*
  - *Resultado:* - **Cita:** Pinsky MR, Gómez H, Hernández G. *Assessing tissue perfusion during septic shock resuscitation through the vascular waterfall lens.* American Journal of Respiratory and Critical Care Medicine. 01/11/2026;212:2731–2735. - **Enlace:** [PMID 42523186]
  - *No sobreinterpretar:* no convierte una variable aislada (PAM, PVC, relleno capilar o delta PCO2) en objetivo universal ni valida un algoritmo de fluidos/vasopresores.
- **2026-11-01** [LECTURA] **Fenotipos clínicos de sepsis consensuados en seis cohortes internacionales** · DOI `10.1097/SHK.0000000000002954` *(rel: directa)*
  - *Resultado:* los perfiles 1, 2 y 3 representaron 32,6%, 20,0% y 47,4% de la cohorte de derivación; mortalidad hospitalaria 30,3%, 13,8% y 9,3%, respectivamente. Tras ajustar por edad y SOFA, el perfil 3 tuvo menor mortalidad a un año que el perfil 1 (HR 0,62; IC 95% 0,57–0
  - *No sobreinterpretar:* no asignar fluidos, vasopresores, inotrópicos o corticoides por pertenencia algorítmica a un perfil; no convertirlo en score ni en protocolo sin validación prospectiva y externa local.
- **2026-10-18** [SEÑAL PRÁCTICA] **Vasopresina: iniciar a 0,1 versus 0,4 µg/kg/min de noradrenalina-equivalente no redujo mortalidad** · DOI `10.1001/jama.2026.21333` *(rel: directa)*
  - *No sobreinterpretar:* no demuestra que la vasopresina sea inútil, ni que haya que esperar siempre 0,4 µg/kg/min; tampoco invalida indicaciones contextualizadas por un paciente concreto.
- **2026-10-04** [LECTURA] **Sepsis guidelines, exceso de confianza y humildad clinica** · PMID 42822214 · DOI `10.1016/j.jcrc.2026.155758` *(rel: directa)*
  - *Resultado:* no disponible en abstract/metadatos PubMed.
  - *No sobreinterpretar:* no usarlo como excusa para ignorar guias ni bundles; usarlo para mejorar juicio clinico y trazabilidad de excepciones.
- **2026-09-27** [ALERTA METODOLÓGICA] **Shock septico: no quedarse solo con PAM/ScvO2 si la dosis de vasopresor sube** · PMID 42790104 · DOI `10.1016/j.jcrc.2026.155762` *(rel: directa)*
  - *Resultado:* la dosis equivalente de noradrenalina se asocio inversamente con la pendiente de recuperacion de StO2 (rho -0,728; p ajustada <0,001). ScvO2 no se asocio con indices dinamicos derivados de VOT tras correccion por comparaciones multiples.
  - *No sobreinterpretar:* no indica un objetivo de noradrenalina ni una estrategia de reduccion; no reemplaza lactato, CRT ni evaluacion clinica; no valida NIRS como obligatorio.
- **2026-09-20** [SEÑAL PRÁCTICA] **Necrosis distal/gangrena simetrica en shock con vasopresores: ojo con culpar solo a la noradrenalina** · PMID 42760619 · DOI `10.1093/ehjcvp/pvag078` *(rel: directa)*
  - *Resultado:* no aporta efecto numerico aplicable; es sintesis fisiopatologica.
  - *No sobreinterpretar:* no justifica subir o bajar vasopresores por protocolo, ni anticoagular empiricamente a todos, ni negar que dosis altas/prolongadas de vasopresores puedan contribuir al problema. Sirve para ampliar el diagnostico causal y documentar mejor el
- **2026-09-20** [LECTURA] **Meta-analisis de resucitacion guiada por perfusion periferica en shock vasodilatado/septico - fuera de ventana estricta, pero de alto valor para lectura** · PMID 42725818 · DOI `10.1097/CCM.0000000000007364` *(rel: directa)*
  - *Resultado:* RR 0,87; IC95% 0,76-1,01; p=0,06; I2=0%; evidencia moderada. Analisis bayesiano: 97,2% de probabilidad posterior de RR <1.
  - *No sobreinterpretar:* no reemplaza lactato, ecografia, diuresis ni juicio clinico; no demuestra que "relleno capilar gana" en todos los escenarios.
- **2026-09-13** [LECTURA] **Fenotipos MAP/NEQ y albumina en shock septico** · PMID 42722591 *(rel: directa)*
  - *Resultado:* cuatro fenotipos: A estable bajo 29,8%, B ascendente 26,1%, C descendente 24,0%, D estable alto 20,1%. El fenotipo A tuvo mayor riesgo de mortalidad en UCI; comparado con A, OR para mortalidad: B 0,303 (IC95% 0,225-0,408), C 0,606 (0,458-0,801), D 0,547 (0,391
  - *No sobreinterpretar:* no demuestra beneficio de albumina; no define a quien darle albumina; MIMIC/eICU tienen sesgo de indicacion, calidad variable de mediciones y confusores residuales. Sirve para generar hipotesis y disenar dashboard, no para protocolo terapeu
- **2026-09-06** [LECTURA] **Trayectorias de sodio y diuresis en sepsis** · PMID 42695367 · DOI `10.7189/jogh.16.04308` *(rel: directa)*
  - *Resultado:* cinco subtipos de trayectoria durante 96 h. Mayor riesgo con sodio levemente creciente y diuresis decreciente (HR 1,85; IC95% 1,56-2,19) y con sodio decreciente mas diuresis que sube y luego se aplana (HR 1,53; IC95% 1,29-1,82).
  - *No sobreinterpretar:* MIMIC-IV, retrospectivo; no causal ni indicacion automatica de fluidos/diureticos.
- **2026-08-23** [LECTURA] **Sepsis despues de trauma severo** · PMID 42628456 · DOI `10.1016/j.jcrc.2026.155719` *(rel: directa)*
  - *Resultado:* sepsis 5,7% (3486 pacientes). Estadia UTI mediana 19 vs 3 dias. MOF 68,7% en septicos vs 14,7% no septicos. Mortalidad asociada a sepsis 31,5%; foco pulmonar 63,6%, abdominal 8,7%; fatalidad abdominal 38,0% y pulmonar 32,3%. Ventilacion temprana al ingreso UTI
  - *No sobreinterpretar:* no asumir que todo ventilado necesita antibiotico precoz por el OR; usarlo para vigilancia, no para sobrediagnostico.
- **2026-08-23** [ALERTA METODOLÓGICA] **Revisiones/protocolos con abstract no disponible en PubMed** · PMID 42631849 · DOI `10.1007/s10456-026-10084-2` *(rel: cardio_sepsis)*
  - *Resultado:* - Evaluating the endothelial glycocalyx from bench to bedside: a translational framework for microvascular assessment. Angiogenesis. 2026 Aug 22. PMID: 42631849. DOI: 10.1007/s10456-026-10084-2. - Current Methods, Quality Control, and Translational Perspective
- **2026-08-23** [ALERTA METODOLÓGICA] **Critical Care Medicine: microcirculacion y nucleosomas H3.1** · PMID 42623141 · DOI `10.1097/CCM.0000000000007324` *(rel: directa)*
  - *Resultado:* - Beyond Supportive Care: Targeting the Microcirculation in Septic Shock. Crit Care Med. 2026 Aug 20. PMID: 42623141. DOI: 10.1097/CCM.0000000000007324. - H3.1 Nucleosomes in Sepsis: A Biomarker, a Mechanism, or Both? Crit Care Med. 2026 Aug 20. PMID: 42622496
  - *No sobreinterpretar:* no transformar microcirculacion/H3.1 en dianas terapeuticas bedside hasta leer texto completo y estudio fuente asociado.
- **2026-08-09** [LECTURA] **Hipoxemia/hipercapnia temprana y mortalidad en ventilados invasivos** · PMID 42570531 · DOI `10.1016/j.hrtlng.2026.102905` *(rel: cardio_sepsis)*
  - *Resultado:* mortalidad global 23,0%. Hipoxemia aislada aOR 1,63 (IC95% 1,33-2,00); hipoxemia + hipercapnia aOR 1,67 (IC95% 1,21-2,32); hipercapnia aislada no se asocio a mayor mortalidad, aOR 0,86 (IC95% 0,54-1,39).
  - *No sobreinterpretar:* no perseguir normocapnia a costa de driving pressure/volutrauma. La hipercapnia aislada leve no equivale automaticamente a peor pronostico.
- **2026-08-09** [LECTURA] **Azul de metileno vs hidroxocobalamina en shock septico** · PMID 42565679 · DOI `10.1080/08998280.2026.2697704` *(rel: directa)*
  - *Resultado:* mortalidad y AKI similares. Hidroxocobalamina se asocio con mas inicio de CRRT a 3-7 dias y 7 dias, y mas stroke/vasopresores prolongados en dias 3-7; el abstract no da medidas de efecto numericas para esos secundarios.
  - *No sobreinterpretar:* no habilita a elegir azul de metileno como estandar ni a descartar hidroxocobalamina. Requiere ensayo prospectivo y seleccion fisiologica de pacientes.
- **2026-08-02** [LECTURA] **Sindrome cardiorrenal agudo en UTI: POCUS, congestion venosa y objetivos dinamicos** · PMID 42527161 · DOI `10.1016/j.ejim.2026.107087` *(rel: cardio_sepsis)*
  - *Resultado:* los autores remarcan mortalidad >50% cuando CRS critico requiere TRR; biomarcadores tubulares pueden detectar IRA 12-24 h antes que creatinina.
  - *No sobreinterpretar:* no transforma biomarcadores ni POCUS en algoritmo automatico; la congestion venosa no excluye hipoperfusion concomitante.
- **2026-08-02** [SEÑAL PRÁCTICA] **SOFA-2 en guardia para infeccion sospechada: valida riesgo, no define conducta por si solo** · PMID 42542312 · DOI `10.1016/j.ijid.2026.109030` *(rel: directa)*
  - *Resultado:* AUROC SOFA-2 0,78 (IC95% 0,78-0,78), similar a SOFA-1 0,78, superior a qSOFA 0,72 y SIRS 0,63. SOFA-2 asigno menor score en 62,3% y mayor score en 1,5%; los reclasificados hacia arriba tuvieron mortalidad 25,2%.
  - *No sobreinterpretar:* no es una definicion operativa de sepsis por si sola, no reemplaza juicio clinico y no autoriza demorar antibioticos o reanimacion esperando completar el score.
- **2026-07-26** [LECTURA] **Monitoreo hemodinamico avanzado post-paro extrahospitalario** · PMID 42492620 · DOI `10.1016/j.resuscitation.2026.111218` *(rel: cardio_sepsis)*
  - *Resultado:* variables mas reportadas: gasto cardiaco 27/28, PAM 25/28, PVC 17/28, SvO2 14/28. Asociaciones pronosticas heterogeneas; bajo SvO2 y presion pulmonar elevada se asociaron a peores outcomes en algunos estudios.
  - *No sobreinterpretar:* no valida un objetivo universal de GC, PVC, PAM o SvO2 post-paro.
- **2026-07-19** [SEÑAL PRÁCTICA] **Shock septico aparentemente refractario: no alcanza mirar la dosis de noradrenalina** · PMID 42467247 · DOI `10.1007/s00134-026-08551-x` *(rel: directa)*
  - *Resultado:* 188/1363 (13,8%) tenian equivalente de noradrenalina >0,5 mcg/kg/min a las 6 h, con mortalidad 47,9%. Con dos criterios de hipoperfusion, 53 pacientes (3,9%) tuvieron mortalidad 73,6% vs 23,7% en no refractarios; aHR 4,68 (IC95% 3,31-6,64). El LR+ fue 8,12 con
  - *No sobreinterpretar:* no usar >0,5 mcg/kg/min como gatillo automatico de terapias heroicas; obliga a re-chequear foco, volumen util/tolerado, ventriculo, vasoplejia, acidosis, sedacion y drogas antes de declarar fracaso.
- **2026-07-19** [SEÑAL PRÁCTICA] **PAM guiada por indice resistivo renal: mejora hemodinamia renal, no mortalidad** · PMID 42469213 · DOI `10.1038/s41467-026-75398-7` *(rel: directa)*
  - *Resultado:* el RRI post-titulacion fue menor en el grupo guiado por RRI (0,61 vs 0,67; p<0,001), pero la mortalidad a 28 dias no difirio: 25/138 vs 36/136; RR 0,69 (IC95% 0,44-1,08), p=0,11.
  - *No sobreinterpretar:* no subir ni bajar PAM solo por RRI fuera de protocolo; el resultado duro fue negativo.
- **2026-07-12** [LECTURA] **Transferencia interhospitalaria rural y bundle de sepsis** · PMID 42430347 · DOI `10.1371/journal.pone.0351133` *(rel: directa)*
  - *Resultado:* adherencia al bundle similar, diferencia 2,2% (IC95% -2,2 a 6,5). Transferencia se asocio con mayor estadia en guardia: 3,1 h vs 2,6 h, diferencia 0,6 h (IC95% 0,4-0,7).
  - *No sobreinterpretar:* que la transferencia no haya reducido adherencia en esa red no implica que toda transferencia sea segura; depende de telemedicina, protocolos y tiempos reales.
- **2026-07-12** [LECTURA] **Lactato a 6 horas + PAFI en SDRA asociado a sepsis** · PMID 42434889 · DOI `10.1177/08850666261466237` *(rel: directa)*
  - *Resultado:* mortalidad 34,5%; AUC 0,82 derivacion, 0,80 validacion interna, 0,73 validacion externa; calibracion reportada como adecuada.
  - *No sobreinterpretar:* no usar la formula como "score de corte" para limitar tratamiento o indicar conductas; usarlo como marco de riesgo pendiente de validacion.
- **2026-07-12** [LECTURA] **Fenotipado inmune-endotelial en sepsis postoperatoria** · PMID 42435583 · DOI `10.1016/j.ebiom.2026.106372` *(rel: directa)*
  - *Resultado:* dos subpoblaciones B y un cluster endotelial CD36/CD16 se asociaron independientemente con mortalidad; el score integrado tuvo AUC 0,935 vs SOFA/APACHE II 0,751-0,804.
  - *No sobreinterpretar:* no reemplaza SOFA, perfusion ni juicio clinico; no define tratamiento inmunomodulador por ahora.

## M05 (19 entradas)

- **2026-11-22** [LECTURA] **Trayectorias de balance desde el día 3 en sepsis** · PMID 43066603 · DOI `10.1177/08850666261509926` *(rel: directa)*
  - *Resultado:* mortalidad cruda 28 días de 20,8% en recuperación rápida. Frente a ella, respuesta tardía: aOR 1,30 (IC95% 1,14–1,49); falla persistente: aOR 1,27 (IC95% 1,09–1,48).
  - *No sobreinterpretar:* no usar las tres clases para prescribir descongestión ni afirmar que el balance positivo sea la causa de la mortalidad.
- **2026-11-22** [LECTURA] **PAM, perfusión y shock séptico refractario** · PMID 43057195 · DOI `10.1016/j.jcrc.2026.155803` *(rel: directa)*
  - *Resultado:* plantea que, por encima de aproximadamente 60–65 mmHg, la perfusión medida por lactato y relleno capilar suele desacoplarse de la presión arterial y propone desafíos de PAM acotados en el tiempo con marcadores seriados de perfusión.
  - *No sobreinterpretar:* no justificar tolerar hipotensión ni reducir vasopresores sin integrar perfusión, contexto neurológico/coronario/renal y ecografía.
- **2026-11-08** [ALERTA METODOLÓGICA] **VASI en sepsis adulta: señal pronóstica, no guía terapéutica** · PMID 42969437 · DOI `10.1097/SHK.0000000000002958` *(rel: directa)*
  - *Resultado:* - **Cita:** Zhu P, Ou Q, Huang Q, et al. *Vasoactive-Adjusted Shock Index for Risk Stratification in Adult Sepsis.* Shock. Publicado online 02/11/2026. - **Enlace:** [PMID 42969437](https://pubmed.ncbi.nlm.nih.gov/42969437/) · [DOI 10.1097/SHK.0000000000002958
- **2026-11-08** [LECTURA] **Perfusión en shock séptico y la “vascular waterfall”** · PMID 42523186 · DOI `10.1093/ajrccm/aamag397` *(rel: directa)*
  - *Resultado:* - **Cita:** Pinsky MR, Gómez H, Hernández G. *Assessing tissue perfusion during septic shock resuscitation through the vascular waterfall lens.* American Journal of Respiratory and Critical Care Medicine. 01/11/2026;212:2731–2735. - **Enlace:** [PMID 42523186]
  - *No sobreinterpretar:* no convierte una variable aislada (PAM, PVC, relleno capilar o delta PCO2) en objetivo universal ni valida un algoritmo de fluidos/vasopresores.
- **2026-10-04** [LECTURA] **Sepsis guidelines, exceso de confianza y humildad clinica** · PMID 42822214 · DOI `10.1016/j.jcrc.2026.155758` *(rel: directa)*
  - *Resultado:* no disponible en abstract/metadatos PubMed.
  - *No sobreinterpretar:* no usarlo como excusa para ignorar guias ni bundles; usarlo para mejorar juicio clinico y trazabilidad de excepciones.
- **2026-09-27** [ALERTA METODOLÓGICA] **Shock septico: no quedarse solo con PAM/ScvO2 si la dosis de vasopresor sube** · PMID 42790104 · DOI `10.1016/j.jcrc.2026.155762` *(rel: directa)*
  - *Resultado:* la dosis equivalente de noradrenalina se asocio inversamente con la pendiente de recuperacion de StO2 (rho -0,728; p ajustada <0,001). ScvO2 no se asocio con indices dinamicos derivados de VOT tras correccion por comparaciones multiples.
  - *No sobreinterpretar:* no indica un objetivo de noradrenalina ni una estrategia de reduccion; no reemplaza lactato, CRT ni evaluacion clinica; no valida NIRS como obligatorio.
- **2026-09-27** [LECTURA] **Presion arterial diastolica en SSC 2026: pieza muy relevante para tu linea de vasoplejia** · PMID 42786551 · DOI `10.1093/ajrccm/aamag511` *(rel: directa)*
  - *Resultado:* no disponible en metadata PubMed.
  - *No sobreinterpretar:* no tomar el titulo como recomendacion formal; hasta leer el texto no asignar umbrales ni algoritmos.
- **2026-09-27** [ALERTA METODOLÓGICA] **Albumina hiperoncotica 20% en sepsis/shock: metaanalisis interesante, certeza baja** · PMID 42783423 · DOI `10.3390/medsci14050550` *(rel: directa)*
  - *Resultado:* mortalidad global RR 0,94; no robusto segun metodos. En subgrupo shock septico: RR 0,90 (IC95% 0,82-0,99; p=0,03). Certeza GRADE baja.
  - *No sobreinterpretar:* el subgrupo de shock es sugerente, no definitivo; evitar transformar una senal de metaanalisis en protocolo.
- **2026-09-20** [LECTURA] **Meta-analisis de resucitacion guiada por perfusion periferica en shock vasodilatado/septico - fuera de ventana estricta, pero de alto valor para lectura** · PMID 42725818 · DOI `10.1097/CCM.0000000000007364` *(rel: directa)*
  - *Resultado:* RR 0,87; IC95% 0,76-1,01; p=0,06; I2=0%; evidencia moderada. Analisis bayesiano: 97,2% de probabilidad posterior de RR <1.
  - *No sobreinterpretar:* no reemplaza lactato, ecografia, diuresis ni juicio clinico; no demuestra que "relleno capilar gana" en todos los escenarios.
- **2026-09-13** [LECTURA] **Fenotipos MAP/NEQ y albumina en shock septico** · PMID 42722591 *(rel: directa)*
  - *Resultado:* cuatro fenotipos: A estable bajo 29,8%, B ascendente 26,1%, C descendente 24,0%, D estable alto 20,1%. El fenotipo A tuvo mayor riesgo de mortalidad en UCI; comparado con A, OR para mortalidad: B 0,303 (IC95% 0,225-0,408), C 0,606 (0,458-0,801), D 0,547 (0,391
  - *No sobreinterpretar:* no demuestra beneficio de albumina; no define a quien darle albumina; MIMIC/eICU tienen sesgo de indicacion, calidad variable de mediciones y confusores residuales. Sirve para generar hipotesis y disenar dashboard, no para protocolo terapeu
- **2026-09-06** [SEÑAL PRÁCTICA] **Vasopresina lista para usar en shock septico: mejora tiempos, no mortalidad** · PMID 42693658 · DOI `10.1177/08971900261486608` *(rel: directa)*
  - *Resultado:* tiempo orden-administracion 17 vs 41 min; tiempo a PAM objetivo mejoro (HR 1,29; IC95% 1,14-1,47); estadia UTI mas corta (HR 1,23; IC95% 1,06-1,43); sin diferencia significativa en mortalidad.
  - *No sobreinterpretar:* no prueba que vasopresina temprana reduzca mortalidad; diseno no aleatorizado y posible confusion residual.
- **2026-08-09** [LECTURA] **Azul de metileno vs hidroxocobalamina en shock septico** · PMID 42565679 · DOI `10.1080/08998280.2026.2697704` *(rel: directa)*
  - *Resultado:* mortalidad y AKI similares. Hidroxocobalamina se asocio con mas inicio de CRRT a 3-7 dias y 7 dias, y mas stroke/vasopresores prolongados en dias 3-7; el abstract no da medidas de efecto numericas para esos secundarios.
  - *No sobreinterpretar:* no habilita a elegir azul de metileno como estandar ni a descartar hidroxocobalamina. Requiere ensayo prospectivo y seleccion fisiologica de pacientes.
- **2026-08-02** [LECTURA] **Vasopresina como vasopresor primario perioperatorio: fisiologia interesante, poblacion no septica** · PMID 42541958 · DOI `10.1016/j.hrtlng.2026.102899` *(rel: directa)*
  - *Resultado:* PAM mantenida 72-78 vs 70-76 mmHg; indice cardiaco preservado 2,2-2,5 vs 2,1-2,4 L/min/m2; menor fluidos y balance positivo con AVP.
  - *No sobreinterpretar:* no es argumento para iniciar vasopresina como primer vasopresor universal en shock septico ni para evitar noradrenalina.
- **2026-08-02** [SEÑAL PRÁCTICA] **SOFA-2 en guardia para infeccion sospechada: valida riesgo, no define conducta por si solo** · PMID 42542312 · DOI `10.1016/j.ijid.2026.109030` *(rel: directa)*
  - *Resultado:* AUROC SOFA-2 0,78 (IC95% 0,78-0,78), similar a SOFA-1 0,78, superior a qSOFA 0,72 y SIRS 0,63. SOFA-2 asigno menor score en 62,3% y mayor score en 1,5%; los reclasificados hacia arriba tuvieron mortalidad 25,2%.
  - *No sobreinterpretar:* no es una definicion operativa de sepsis por si sola, no reemplaza juicio clinico y no autoriza demorar antibioticos o reanimacion esperando completar el score.
- **2026-08-02** [SEÑAL PRÁCTICA] **Inmunoglobulina enriquecida con IgM en sepsis/shock: senal favorable, evidencia insuficiente para uso rutinario** · PMID 42538732 · DOI `10.1097/CCE.0000000000001451` *(rel: directa)*
  - *Resultado:* sintesis principal no concluyente: OR 0,65 (IC95% 0,39-1,07; I2 9%). Mortalidad exacta a 28 dias tambien no concluyente: OR 0,84 (IC95% 0,50-1,43). Analisis significativos aparecieron en extensiones post hoc/exploratorias.
  - *No sobreinterpretar:* una direccion de efecto no es eficacia probada. No convertirlo en recomendacion general para shock septico.
- **2026-07-26** [LECTURA] **Monitoreo hemodinamico avanzado post-paro extrahospitalario** · PMID 42492620 · DOI `10.1016/j.resuscitation.2026.111218` *(rel: cardio_sepsis)*
  - *Resultado:* variables mas reportadas: gasto cardiaco 27/28, PAM 25/28, PVC 17/28, SvO2 14/28. Asociaciones pronosticas heterogeneas; bajo SvO2 y presion pulmonar elevada se asociaron a peores outcomes en algunos estudios.
  - *No sobreinterpretar:* no valida un objetivo universal de GC, PVC, PAM o SvO2 post-paro.
- **2026-07-19** [SEÑAL PRÁCTICA] **Shock septico aparentemente refractario: no alcanza mirar la dosis de noradrenalina** · PMID 42467247 · DOI `10.1007/s00134-026-08551-x` *(rel: directa)*
  - *Resultado:* 188/1363 (13,8%) tenian equivalente de noradrenalina >0,5 mcg/kg/min a las 6 h, con mortalidad 47,9%. Con dos criterios de hipoperfusion, 53 pacientes (3,9%) tuvieron mortalidad 73,6% vs 23,7% en no refractarios; aHR 4,68 (IC95% 3,31-6,64). El LR+ fue 8,12 con
  - *No sobreinterpretar:* no usar >0,5 mcg/kg/min como gatillo automatico de terapias heroicas; obliga a re-chequear foco, volumen util/tolerado, ventriculo, vasoplejia, acidosis, sedacion y drogas antes de declarar fracaso.
- **2026-07-19** [SEÑAL PRÁCTICA] **PAM guiada por indice resistivo renal: mejora hemodinamia renal, no mortalidad** · PMID 42469213 · DOI `10.1038/s41467-026-75398-7` *(rel: directa)*
  - *Resultado:* el RRI post-titulacion fue menor en el grupo guiado por RRI (0,61 vs 0,67; p<0,001), pero la mortalidad a 28 dias no difirio: 25/138 vs 36/136; RR 0,69 (IC95% 0,44-1,08), p=0,11.
  - *No sobreinterpretar:* no subir ni bajar PAM solo por RRI fuera de protocolo; el resultado duro fue negativo.
- **2026-07-12** [LECTURA] **Fenotipado inmune-endotelial en sepsis postoperatoria** · PMID 42435583 · DOI `10.1016/j.ebiom.2026.106372` *(rel: directa)*
  - *Resultado:* dos subpoblaciones B y un cluster endotelial CD36/CD16 se asociaron independientemente con mortalidad; el score integrado tuvo AUC 0,935 vs SOFA/APACHE II 0,751-0,804.
  - *No sobreinterpretar:* no reemplaza SOFA, perfusion ni juicio clinico; no define tratamiento inmunomodulador por ahora.

## M06 (23 entradas)

- **2026-11-22** [LECTURA] **Por qué las revisiones de corticoides en sepsis llegan a conclusiones distintas** · PMID 43058869 · DOI `10.1186/s13054-026-06471-2` *(rel: directa)*
  - *Resultado:* 15/38 (39%) revisiones con metaanálisis de mortalidad a corto plazo reportaron beneficio y 23/38 (61%) ausencia de efecto; más de la mitad de los pares de revisiones no compartía ECA. Las conclusiones fueron consistentes para hidrocortisona + fludrocortisona (
  - *No sobreinterpretar:* no equivale a una nueva recomendación a favor o en contra de corticoides.
- **2026-11-22** [LECTURA] **PAM, perfusión y shock séptico refractario** · PMID 43057195 · DOI `10.1016/j.jcrc.2026.155803` *(rel: directa)*
  - *Resultado:* plantea que, por encima de aproximadamente 60–65 mmHg, la perfusión medida por lactato y relleno capilar suele desacoplarse de la presión arterial y propone desafíos de PAM acotados en el tiempo con marcadores seriados de perfusión.
  - *No sobreinterpretar:* no justificar tolerar hipotensión ni reducir vasopresores sin integrar perfusión, contexto neurológico/coronario/renal y ecografía.
- **2026-11-22** [LECTURA] **Azul de metileno temprano en vasoplejía resistente a catecolaminas** · PMID 43063354 · DOI `10.1097/SHK.0000000000002952` *(rel: cardio_sepsis)*
  - *Resultado:* mortalidad hospitalaria 41% vs 59% y HR ajustado 0,69 (IC95% 0,51–0,94); el análisis por tipo de UTI atenuó la asociación.
  - *No sobreinterpretar:* no adoptar un umbral horario ni indicar AM “precoz” por estos resultados.
- **2026-11-08** [ALERTA METODOLÓGICA] **VASI en sepsis adulta: señal pronóstica, no guía terapéutica** · PMID 42969437 · DOI `10.1097/SHK.0000000000002958` *(rel: directa)*
  - *Resultado:* - **Cita:** Zhu P, Ou Q, Huang Q, et al. *Vasoactive-Adjusted Shock Index for Risk Stratification in Adult Sepsis.* Shock. Publicado online 02/11/2026. - **Enlace:** [PMID 42969437](https://pubmed.ncbi.nlm.nih.gov/42969437/) · [DOI 10.1097/SHK.0000000000002958
- **2026-10-25** [LECTURA] **Vasopressors or Fluids in Early Septic Shock** · PMID 42274006 *(rel: directa)*
- **2026-10-18** [SEÑAL PRÁCTICA] **Vasopresina: iniciar a 0,1 versus 0,4 µg/kg/min de noradrenalina-equivalente no redujo mortalidad** · DOI `10.1001/jama.2026.21333` *(rel: directa)*
  - *No sobreinterpretar:* no demuestra que la vasopresina sea inútil, ni que haya que esperar siempre 0,4 µg/kg/min; tampoco invalida indicaciones contextualizadas por un paciente concreto.
- **2026-10-18** [SEÑAL PRÁCTICA] **Dobutamina intraoperatoria durante control quirúrgico de foco: menos AKI, sin beneficio demostrado en mortalidad** · DOI `10.1001/jama.2026.21322` *(rel: directa)*
  - *No sobreinterpretar:* la reducción de AKI no equivale a demostrar mejor supervivencia; no sustituye evaluar gasto cardíaco, perfusión, congestión, respuesta a fluidos ni riesgo arrítmico.
- **2026-10-04** [LECTURA] **Taquicardia mediada por marcapasos simulando shock septico refractario** · PMID 42828523 · DOI `10.1016/j.jaccas.2026.110616` *(rel: directa)*
  - *Resultado:* frecuencia estimulada fija alrededor de 109-110/min; PVARP 225 ms y conduccion VA 360 ms; circuito de 550 ms.
  - *No sobreinterpretar:* no todo shock con marcapasos es PMT; primero sostener ABC, infeccion, eco, ECG, lactato/perfusion y causas mecanicas.
- **2026-10-04** [LECTURA] **Sepsis guidelines, exceso de confianza y humildad clinica** · PMID 42822214 · DOI `10.1016/j.jcrc.2026.155758` *(rel: directa)*
  - *Resultado:* no disponible en abstract/metadatos PubMed.
  - *No sobreinterpretar:* no usarlo como excusa para ignorar guias ni bundles; usarlo para mejorar juicio clinico y trazabilidad de excepciones.
- **2026-09-27** [ALERTA METODOLÓGICA] **Shock septico: no quedarse solo con PAM/ScvO2 si la dosis de vasopresor sube** · PMID 42790104 · DOI `10.1016/j.jcrc.2026.155762` *(rel: directa)*
  - *Resultado:* la dosis equivalente de noradrenalina se asocio inversamente con la pendiente de recuperacion de StO2 (rho -0,728; p ajustada <0,001). ScvO2 no se asocio con indices dinamicos derivados de VOT tras correccion por comparaciones multiples.
  - *No sobreinterpretar:* no indica un objetivo de noradrenalina ni una estrategia de reduccion; no reemplaza lactato, CRT ni evaluacion clinica; no valida NIRS como obligatorio.
- **2026-09-27** [LECTURA] **Presion arterial diastolica en SSC 2026: pieza muy relevante para tu linea de vasoplejia** · PMID 42786551 · DOI `10.1093/ajrccm/aamag511` *(rel: directa)*
  - *Resultado:* no disponible en metadata PubMed.
  - *No sobreinterpretar:* no tomar el titulo como recomendacion formal; hasta leer el texto no asignar umbrales ni algoritmos.
- **2026-09-27** [ALERTA METODOLÓGICA] **MANTRA angiotensina II vs noradrenalina en shock septico: protocolo, no resultados** · PMID 42779856 · DOI `10.64898/2026.09.12.26362906` *(rel: directa)*
  - *Resultado:* Cita: Mechanistic Assessment of Norepinephrine Therapy versus Angiotensin-II in Septic Shock (MANTRA): Study Protocol for a multicenter randomized trial. medRxiv. 2026. PMID: 42779856. DOI: 10.64898/2026.09.12.26362906. Tipo de estudio: preprint, protocolo de 
- **2026-09-20** [SEÑAL PRÁCTICA] **Necrosis distal/gangrena simetrica en shock con vasopresores: ojo con culpar solo a la noradrenalina** · PMID 42760619 · DOI `10.1093/ehjcvp/pvag078` *(rel: directa)*
  - *Resultado:* no aporta efecto numerico aplicable; es sintesis fisiopatologica.
  - *No sobreinterpretar:* no justifica subir o bajar vasopresores por protocolo, ni anticoagular empiricamente a todos, ni negar que dosis altas/prolongadas de vasopresores puedan contribuir al problema. Sirve para ampliar el diagnostico causal y documentar mejor el
- **2026-09-13** [LECTURA] **Fenotipos MAP/NEQ y albumina en shock septico** · PMID 42722591 *(rel: directa)*
  - *Resultado:* cuatro fenotipos: A estable bajo 29,8%, B ascendente 26,1%, C descendente 24,0%, D estable alto 20,1%. El fenotipo A tuvo mayor riesgo de mortalidad en UCI; comparado con A, OR para mortalidad: B 0,303 (IC95% 0,225-0,408), C 0,606 (0,458-0,801), D 0,547 (0,391
  - *No sobreinterpretar:* no demuestra beneficio de albumina; no define a quien darle albumina; MIMIC/eICU tienen sesgo de indicacion, calidad variable de mediciones y confusores residuales. Sirve para generar hipotesis y disenar dashboard, no para protocolo terapeu
- **2026-09-06** [SEÑAL PRÁCTICA] **Vasopresina lista para usar en shock septico: mejora tiempos, no mortalidad** · PMID 42693658 · DOI `10.1177/08971900261486608` *(rel: directa)*
  - *Resultado:* tiempo orden-administracion 17 vs 41 min; tiempo a PAM objetivo mejoro (HR 1,29; IC95% 1,14-1,47); estadia UTI mas corta (HR 1,23; IC95% 1,06-1,43); sin diferencia significativa en mortalidad.
  - *No sobreinterpretar:* no prueba que vasopresina temprana reduzca mortalidad; diseno no aleatorizado y posible confusion residual.
- **2026-08-23** [ALERTA METODOLÓGICA] **Preprint sobre discordancia de revisiones de corticoides en sepsis** · DOI `10.64898/2026.08.20.26360343` *(rel: directa)*
  - *Resultado:* - Fuente: medRxiv, publicado 2026-08-21. DOI: 10.64898/2026.08.20.26360343. - Tipo: meta-research preprint, no revisado por pares. - Hallazgo declarado: 42 revisiones sistematicas y 121 RCTs; mas de la mitad de pares de revisiones no compartian ningun RCT; ent
  - *No sobreinterpretar:* al ser preprint, no cambia conducta ni reemplaza guias. Sirve para afinar lectura critica.
- **2026-08-09** [LECTURA] **Azul de metileno vs hidroxocobalamina en shock septico** · PMID 42565679 · DOI `10.1080/08998280.2026.2697704` *(rel: directa)*
  - *Resultado:* mortalidad y AKI similares. Hidroxocobalamina se asocio con mas inicio de CRRT a 3-7 dias y 7 dias, y mas stroke/vasopresores prolongados en dias 3-7; el abstract no da medidas de efecto numericas para esos secundarios.
  - *No sobreinterpretar:* no habilita a elegir azul de metileno como estandar ni a descartar hidroxocobalamina. Requiere ensayo prospectivo y seleccion fisiologica de pacientes.
- **2026-08-02** [LECTURA] **Vasopresina como vasopresor primario perioperatorio: fisiologia interesante, poblacion no septica** · PMID 42541958 · DOI `10.1016/j.hrtlng.2026.102899` *(rel: directa)*
  - *Resultado:* PAM mantenida 72-78 vs 70-76 mmHg; indice cardiaco preservado 2,2-2,5 vs 2,1-2,4 L/min/m2; menor fluidos y balance positivo con AVP.
  - *No sobreinterpretar:* no es argumento para iniciar vasopresina como primer vasopresor universal en shock septico ni para evitar noradrenalina.
- **2026-08-02** [LECTURA] **Sindrome cardiorrenal agudo en UTI: POCUS, congestion venosa y objetivos dinamicos** · PMID 42527161 · DOI `10.1016/j.ejim.2026.107087` *(rel: cardio_sepsis)*
  - *Resultado:* los autores remarcan mortalidad >50% cuando CRS critico requiere TRR; biomarcadores tubulares pueden detectar IRA 12-24 h antes que creatinina.
  - *No sobreinterpretar:* no transforma biomarcadores ni POCUS en algoritmo automatico; la congestion venosa no excluye hipoperfusion concomitante.
- **2026-07-19** [SEÑAL PRÁCTICA] **Shock septico aparentemente refractario: no alcanza mirar la dosis de noradrenalina** · PMID 42467247 · DOI `10.1007/s00134-026-08551-x` *(rel: directa)*
  - *Resultado:* 188/1363 (13,8%) tenian equivalente de noradrenalina >0,5 mcg/kg/min a las 6 h, con mortalidad 47,9%. Con dos criterios de hipoperfusion, 53 pacientes (3,9%) tuvieron mortalidad 73,6% vs 23,7% en no refractarios; aHR 4,68 (IC95% 3,31-6,64). El LR+ fue 8,12 con
  - *No sobreinterpretar:* no usar >0,5 mcg/kg/min como gatillo automatico de terapias heroicas; obliga a re-chequear foco, volumen util/tolerado, ventriculo, vasoplejia, acidosis, sedacion y drogas antes de declarar fracaso.
- **2026-07-12** [LECTURA] **Transferencia interhospitalaria rural y bundle de sepsis** · PMID 42430347 · DOI `10.1371/journal.pone.0351133` *(rel: directa)*
  - *Resultado:* adherencia al bundle similar, diferencia 2,2% (IC95% -2,2 a 6,5). Transferencia se asocio con mayor estadia en guardia: 3,1 h vs 2,6 h, diferencia 0,6 h (IC95% 0,4-0,7).
  - *No sobreinterpretar:* que la transferencia no haya reducido adherencia en esa red no implica que toda transferencia sea segura; depende de telemedicina, protocolos y tiempos reales.
- **2026-07-12** [LECTURA] **Infecciones por Klebsiella pneumoniae resistente a carbapenemes en UTI** · PMID 42426650 · DOI `10.1186/s12879-026-13929-9` *(rel: cardio_sepsis)*
  - *Resultado:* mortalidad 75% (135/180). Predictores independientes: edad OR 1,04; vasopresores OR 13,42; ventilacion mecanica OR 14,19. No se encontro asociacion independiente entre combinaciones antimicrobianas especificas y supervivencia, con subgrupos limitados.
  - *No sobreinterpretar:* no concluir que el antibiotico no importa; el estudio no tiene potencia ni diseno para comparar estrategias terapeuticas finas.
- **2026-07-12** [LECTURA] **Corticoides en infeccion pulmonar grave** · PMID 42425738 · DOI `10.1136/bmjresp-2025-003934` *(rel: directa)*
  - *Resultado:* 12 RCTs, 4622 pacientes, 1203 eventos. OR de mortalidad de corto plazo 0,83 (IC95% 0,70-0,98), p=0,029, I2 2,0%, NNT 37,84, certeza GRADE baja. En NAC: OR 0,72 (IC95% 0,54-0,98), NNT 28,10. Cursos >7 dias mostraron diferencia; cursos <=7 dias no.
  - *No sobreinterpretar:* no usarlo como licencia para corticoides universales en toda sepsis o toda neumonia; mirar fenotipo, shock, oxigenacion, riesgo de infeccion secundaria/hiperglucemia y duracion.

## M07 (5 entradas)

- **2026-09-27** [ALERTA METODOLÓGICA] **Shock septico: no quedarse solo con PAM/ScvO2 si la dosis de vasopresor sube** · PMID 42790104 · DOI `10.1016/j.jcrc.2026.155762` *(rel: directa)*
  - *Resultado:* la dosis equivalente de noradrenalina se asocio inversamente con la pendiente de recuperacion de StO2 (rho -0,728; p ajustada <0,001). ScvO2 no se asocio con indices dinamicos derivados de VOT tras correccion por comparaciones multiples.
  - *No sobreinterpretar:* no indica un objetivo de noradrenalina ni una estrategia de reduccion; no reemplaza lactato, CRT ni evaluacion clinica; no valida NIRS como obligatorio.
- **2026-09-06** [SEÑAL PRÁCTICA] **TELUS agregado a TEE en shock ventilado: senal util, todavia no outcome** · PMID 42695753 · DOI `10.1097/CCM.0000000000007337` *(rel: cardio_sepsis)*
  - *Resultado:* mayor identificacion reportada por operador de etiologia de shock (86,5% vs 75,3%; OR 1,95; IC95% 1,02-3,72), sin diferencia significativa en cambios globales de manejo; duracion mediana 21,5 vs 19,0 min; complicaciones raras.
  - *No sobreinterpretar:* utilidad reportada por operador no es mortalidad, ventilator-free days ni menor lactato; falta adjudicacion independiente.
- **2026-08-09** [LECTURA] **Lesion ventricular derecha en SDRA** · PMID 42571495 · DOI `10.1016/j.aicoj.2026.100117` *(rel: cardio_sepsis)*
  - *Resultado:* prevalencia agrupada 30% (IC95% 23-38%). Asociacion con mortalidad UTI: OR no ajustado 2,49 (IC95% 1,81-3,42); aOR 2,37 (IC95% 1,24-4,51); aHR 2,64 (IC95% 1,60-4,37).
  - *No sobreinterpretar:* no todo VD lesionado exige bajar PEEP o agregar inotropico. Integrar oxigenacion, reclutabilidad, driving pressure, CO2, perfusion y congestion venosa.
- **2026-08-02** [LECTURA] **Sindrome cardiorrenal agudo en UTI: POCUS, congestion venosa y objetivos dinamicos** · PMID 42527161 · DOI `10.1016/j.ejim.2026.107087` *(rel: cardio_sepsis)*
  - *Resultado:* los autores remarcan mortalidad >50% cuando CRS critico requiere TRR; biomarcadores tubulares pueden detectar IRA 12-24 h antes que creatinina.
  - *No sobreinterpretar:* no transforma biomarcadores ni POCUS en algoritmo automatico; la congestion venosa no excluye hipoperfusion concomitante.
- **2026-07-19** [SEÑAL PRÁCTICA] **PAM guiada por indice resistivo renal: mejora hemodinamia renal, no mortalidad** · PMID 42469213 · DOI `10.1038/s41467-026-75398-7` *(rel: directa)*
  - *Resultado:* el RRI post-titulacion fue menor en el grupo guiado por RRI (0,61 vs 0,67; p<0,001), pero la mortalidad a 28 dias no difirio: 25/138 vs 36/136; RR 0,69 (IC95% 0,44-1,08), p=0,11.
  - *No sobreinterpretar:* no subir ni bajar PAM solo por RRI fuera de protocolo; el resultado duro fue negativo.

## M08 (5 entradas)

- **2026-11-01** [ALERTA METODOLÓGICA] **HALP y coagulopatía inducida por sepsis** · DOI `10.1097/SHK.0000000000002956` *(rel: directa)*
  - *Resultado:* - **Cita:** Dong X, Liu X, Ma X, et al. *Sepsis-induced coagulopathy attenuates the prognostic value of the hemoglobin–albumin–lymphocyte–platelet (HALP) score in sepsis.* **Shock.** Publicado online 29 oct 2026. DOI: [10.1097/SHK.0000000000002956](https://doi
- **2026-09-20** [SEÑAL PRÁCTICA] **Necrosis distal/gangrena simetrica en shock con vasopresores: ojo con culpar solo a la noradrenalina** · PMID 42760619 · DOI `10.1093/ehjcvp/pvag078` *(rel: directa)*
  - *Resultado:* no aporta efecto numerico aplicable; es sintesis fisiopatologica.
  - *No sobreinterpretar:* no justifica subir o bajar vasopresores por protocolo, ni anticoagular empiricamente a todos, ni negar que dosis altas/prolongadas de vasopresores puedan contribuir al problema. Sirve para ampliar el diagnostico causal y documentar mejor el
- **2026-08-02** [LECTURA] **Inhibicion terminal del complemento en shock septico: poblacion rara, riesgo clinico relevante** · PMID 42526359 · DOI `10.1016/j.jcrc.2026.155700` *(rel: directa)*
  - *Resultado:* mas trombocitopenia 20,3% vs 8,9%, IRA 25,0% vs 13,3%, eventos tromboticos 7,8% vs 4,7%, TRR 8,3% vs 5,1% y MACE 13,7% vs 9,2%. Mortalidad a 30 dias sin diferencia significativa.
  - *No sobreinterpretar:* no indica suspender o continuar automaticamente inhibidor C5 durante shock; eso depende de indicacion, infeccion, riesgo trombotico y equipo tratante.
- **2026-07-26** [LECTURA] **SIC-2: criterio simplificado de coagulopatia inducida por sepsis** · PMID 42498136 · DOI `10.1016/j.jtha.2026.07.013` *(rel: directa)*
  - *Resultado:* AUC para DIC 0,850 vs 0,854 (p = 0,37); mortalidad 28 dias AUC 0,621 vs 0,614, diferencia absoluta 0,007.
  - *No sobreinterpretar:* no es indicacion automatica de anticoagulacion, plasma, plaquetas ni trombomodulina; tampoco reemplaza juicio clinico de sangrado/trombosis.
- **2026-07-26** [LECTURA] **Profilaxis anticoagulante temprana en sepsis con trombocitopenia severa** · PMID 42489962 · DOI `10.1007/s11239-026-03361-w` *(rel: directa)*
  - *Resultado:* VTE 14 vs 86 eventos; HR ajustado 0,51 (IC95% 0,28-0,92; p = 0,025). Sangrado mayor 22 vs 95; HR 0,74 (IC95% 0,46-1,20; p = 0,220). La senal se atenuo en algunos analisis de sensibilidad.
  - *No sobreinterpretar:* no significa anticoagular toda plaquetopenia septica; hay que mirar sangrado activo, procedimientos, coagulopatia, fibrinogeno, DIC y causa de plaquetopenia.

## M09 (12 entradas)

- **2026-11-22** [LECTURA] **Trayectorias de balance desde el día 3 en sepsis** · PMID 43066603 · DOI `10.1177/08850666261509926` *(rel: directa)*
  - *Resultado:* mortalidad cruda 28 días de 20,8% en recuperación rápida. Frente a ella, respuesta tardía: aOR 1,30 (IC95% 1,14–1,49); falla persistente: aOR 1,27 (IC95% 1,09–1,48).
  - *No sobreinterpretar:* no usar las tres clases para prescribir descongestión ni afirmar que el balance positivo sea la causa de la mortalidad.
- **2026-10-18** [SEÑAL PRÁCTICA] **Dobutamina intraoperatoria durante control quirúrgico de foco: menos AKI, sin beneficio demostrado en mortalidad** · DOI `10.1001/jama.2026.21322` *(rel: directa)*
  - *No sobreinterpretar:* la reducción de AKI no equivale a demostrar mejor supervivencia; no sustituye evaluar gasto cardíaco, perfusión, congestión, respuesta a fluidos ni riesgo arrítmico.
- **2026-09-27** [SEÑAL PRÁCTICA] **Bacteriemia por Pseudomonas: el control de foco sigue siendo una intervencion critica, no un detalle quirurgico** · PMID 42787356 · DOI `10.1093/ofid/ofag488` *(rel: directa)*
  - *Resultado:* mortalidad 30 dias 6,5% con control temprano adecuado vs 23,6% sin control temprano adecuado y 28,4% cuando se considero no necesario. En analisis con propensity score, control temprano adecuado se asocio con menor mortalidad: HR ajustado 0,15; p=0,0024.
  - *No sobreinterpretar:* no justifica procedimientos inseguros ni reemplaza criterio quirurgico/intervencionista; asociacion no es causalidad demostrada.
- **2026-09-06** [LECTURA] **Trayectorias de sodio y diuresis en sepsis** · PMID 42695367 · DOI `10.7189/jogh.16.04308` *(rel: directa)*
  - *Resultado:* cinco subtipos de trayectoria durante 96 h. Mayor riesgo con sodio levemente creciente y diuresis decreciente (HR 1,85; IC95% 1,56-2,19) y con sodio decreciente mas diuresis que sube y luego se aplana (HR 1,53; IC95% 1,29-1,82).
  - *No sobreinterpretar:* MIMIC-IV, retrospectivo; no causal ni indicacion automatica de fluidos/diureticos.
- **2026-09-06** [ALERTA METODOLÓGICA] **Biomarcador de peroxidacion lipidica para diferenciar sepsis posoperatoria** · PMID 42697475 · DOI `10.1016/j.trsl.2026.09.001` *(rel: directa)*
  - *Resultado:* en 279 pacientes posoperatorios criticos, LPO fue menor en septicos; combinado con CRP/PCT alcanzo AUC 0,902.
- **2026-08-02** [LECTURA] **Vasopresina como vasopresor primario perioperatorio: fisiologia interesante, poblacion no septica** · PMID 42541958 · DOI `10.1016/j.hrtlng.2026.102899` *(rel: directa)*
  - *Resultado:* PAM mantenida 72-78 vs 70-76 mmHg; indice cardiaco preservado 2,2-2,5 vs 2,1-2,4 L/min/m2; menor fluidos y balance positivo con AVP.
  - *No sobreinterpretar:* no es argumento para iniciar vasopresina como primer vasopresor universal en shock septico ni para evitar noradrenalina.
- **2026-08-02** [SEÑAL PRÁCTICA] **Inmunoglobulina enriquecida con IgM en sepsis/shock: senal favorable, evidencia insuficiente para uso rutinario** · PMID 42538732 · DOI `10.1097/CCE.0000000000001451` *(rel: directa)*
  - *Resultado:* sintesis principal no concluyente: OR 0,65 (IC95% 0,39-1,07; I2 9%). Mortalidad exacta a 28 dias tambien no concluyente: OR 0,84 (IC95% 0,50-1,43). Analisis significativos aparecieron en extensiones post hoc/exploratorias.
  - *No sobreinterpretar:* una direccion de efecto no es eficacia probada. No convertirlo en recomendacion general para shock septico.
- **2026-08-02** [LECTURA] **Dispositivos medicos y MDRO en sepsis de guardia** · PMID 42526287 · DOI `10.1016/j.ajem.2026.07.032` *(rel: directa)*
  - *Resultado:* MDRO en 32,4%. Dispositivos asociados a MDRO: OR 2,33 (IC95% 1,28-4,33); shock septico OR 3,53. Dispositivos no se asociaron independientemente a mortalidad: OR 1,19 (IC95% 0,55-2,58). Shock septico fue fuerte predictor de mortalidad: OR 15,83.
  - *No sobreinterpretar:* no autoriza cobertura amplia automatica; debe cruzarse con colonizacion previa, internaciones, antibioticos recientes, foco, mapa local y gravedad.
- **2026-07-19** [LECTURA] **Diagnosticos rapidos en sepsis: mejoran tiempos, no mortalidad demostrada** · PMID 42468648 · DOI `10.1016/j.ijantimicag.2026.107937` *(rel: directa)*
  - *Resultado:* 49 registros microbiologicos y 33 clinicos. Sensibilidad agrupada 0,97-0,98; especificidad 0,99-1,00. Tiempo a identificacion -21,43 h; tiempo a tratamiento optimo/ajustado/apropiado -13,78 h. Mortalidad a 30 dias sin diferencia: OR 0,97 (IC95% 0,88-1,07).
  - *No sobreinterpretar:* test rapido sin circuito de accion no salva tiempo clinico.
- **2026-07-12** [LECTURA] **Transferencia interhospitalaria rural y bundle de sepsis** · PMID 42430347 · DOI `10.1371/journal.pone.0351133` *(rel: directa)*
  - *Resultado:* adherencia al bundle similar, diferencia 2,2% (IC95% -2,2 a 6,5). Transferencia se asocio con mayor estadia en guardia: 3,1 h vs 2,6 h, diferencia 0,6 h (IC95% 0,4-0,7).
  - *No sobreinterpretar:* que la transferencia no haya reducido adherencia en esa red no implica que toda transferencia sea segura; depende de telemedicina, protocolos y tiempos reales.
- **2026-07-12** [LECTURA] **Infecciones por Klebsiella pneumoniae resistente a carbapenemes en UTI** · PMID 42426650 · DOI `10.1186/s12879-026-13929-9` *(rel: cardio_sepsis)*
  - *Resultado:* mortalidad 75% (135/180). Predictores independientes: edad OR 1,04; vasopresores OR 13,42; ventilacion mecanica OR 14,19. No se encontro asociacion independiente entre combinaciones antimicrobianas especificas y supervivencia, con subgrupos limitados.
  - *No sobreinterpretar:* no concluir que el antibiotico no importa; el estudio no tiene potencia ni diseno para comparar estrategias terapeuticas finas.
- **2026-07-12** [SEÑAL PRÁCTICA] **Impact of intravenous push antibiotics on sepsis management at a Veterans Affairs medical center emergency department** · PMID 42433622 · DOI `10.1017/ash.2026.10761` *(rel: directa)*
  - *Resultado:* mediana 132 min a 99 min; antibiotico dentro de 60 min 20,3% a 28,0%; dentro de 180 min 70,8% a 79,8%; estadia en guardia 397 a 369 min.
  - *No sobreinterpretar:* no significa "todo antibiotico en sepsis debe ser IV push"; significa que la logistica de administracion puede ser un cuello de botella medible.

## M10 (12 entradas)

- **2026-11-22** [LECTURA] **Trayectorias de balance desde el día 3 en sepsis** · PMID 43066603 · DOI `10.1177/08850666261509926` *(rel: directa)*
  - *Resultado:* mortalidad cruda 28 días de 20,8% en recuperación rápida. Frente a ella, respuesta tardía: aOR 1,30 (IC95% 1,14–1,49); falla persistente: aOR 1,27 (IC95% 1,09–1,48).
  - *No sobreinterpretar:* no usar las tres clases para prescribir descongestión ni afirmar que el balance positivo sea la causa de la mortalidad.
- **2026-10-18** [SEÑAL PRÁCTICA] **Dobutamina intraoperatoria durante control quirúrgico de foco: menos AKI, sin beneficio demostrado en mortalidad** · DOI `10.1001/jama.2026.21322` *(rel: directa)*
  - *No sobreinterpretar:* la reducción de AKI no equivale a demostrar mejor supervivencia; no sustituye evaluar gasto cardíaco, perfusión, congestión, respuesta a fluidos ni riesgo arrítmico.
- **2026-10-04** [LECTURA] **BUN/cistatina C y mortalidad intrahospitalaria en sepsis** · PMID 42825208 · DOI `10.1515/med-2026-1522` *(rel: directa)*
  - *Resultado:* BCR OR ajustado 1,247 (IC95% 1,165-1,335; p menor a 0,001); BUN OR ajustado 1,047 (IC95% 1,029-1,065; p menor a 0,001). BCR+SOFA AUC 0,717.
  - *No sobreinterpretar:* no tratar el ratio como gatillo terapeutico ni usarlo aislado para limitar soporte.
- **2026-09-06** [LECTURA] **Trayectorias de sodio y diuresis en sepsis** · PMID 42695367 · DOI `10.7189/jogh.16.04308` *(rel: directa)*
  - *Resultado:* cinco subtipos de trayectoria durante 96 h. Mayor riesgo con sodio levemente creciente y diuresis decreciente (HR 1,85; IC95% 1,56-2,19) y con sodio decreciente mas diuresis que sube y luego se aplana (HR 1,53; IC95% 1,29-1,82).
  - *No sobreinterpretar:* MIMIC-IV, retrospectivo; no causal ni indicacion automatica de fluidos/diureticos.
- **2026-09-06** [ALERTA METODOLÓGICA] **SA-AKI y machine learning para respuesta a RRT** · PMID 42693505 · DOI `10.1177/08850666261483582` *(rel: directa)*
  - *Resultado:* 21.359 pacientes MIMIC-IV, tres subtipos; C2 tuvo mayor mortalidad 28 dias 30,8% y mayor uso de RRT 19,2%; LightGBM test AUC 0,814; RRT asociada a menor mortalidad global OR 0,810, pero heterogeneidad de efecto no significativa.
- **2026-09-06** [ALERTA METODOLÓGICA] **Items con abstract ausente o insuficiente en PubMed** · PMID 42695977 · DOI `10.1093/ndt/gfag205` *(rel: directa)*
  - *Resultado:* - Biomarker-guided polymyxin B haemoadsorption in endotoxic septic shock. NDT. PMID: 42695977. DOI: 10.1093/ndt/gfag205. Pendiente: sin abstract en PubMed; no sacar conclusion sobre hemoadsorcion. - Non-Invasive Prediction of Fluid Responsiveness in Septic Sho
- **2026-08-23** [LECTURA] **AKD despues de AKI asociada a sepsis: cinetica renal vs biomarcadores** · PMID 42618952 · DOI `10.1186/s40560-026-00926-y` *(rel: directa)*
  - *Resultado:* AKD en 196/690 (28,4%). MR-proADM basal asociado a AKD (OR ajustado 1,17; IC95% 1,08-1,28). AUC del modelo combinado: 0,65 basal, 0,70 dia 2, 0,76 dia 7. AKD se asocio con mortalidad 90 dias 55% vs 24% (RR 2,3; IC95% 1,9-2,9). H3.1 agrego poco valor clinico so
  - *No sobreinterpretar:* no convertir MR-proADM o H3.1 en indicacion de dialisis, volumen o vasopresores. Sirven como hipotesis/riesgo, no como orden terapeutica.
- **2026-08-09** [LECTURA] **Azul de metileno vs hidroxocobalamina en shock septico** · PMID 42565679 · DOI `10.1080/08998280.2026.2697704` *(rel: directa)*
  - *Resultado:* mortalidad y AKI similares. Hidroxocobalamina se asocio con mas inicio de CRRT a 3-7 dias y 7 dias, y mas stroke/vasopresores prolongados en dias 3-7; el abstract no da medidas de efecto numericas para esos secundarios.
  - *No sobreinterpretar:* no habilita a elegir azul de metileno como estandar ni a descartar hidroxocobalamina. Requiere ensayo prospectivo y seleccion fisiologica de pacientes.
- **2026-08-02** [LECTURA] **Sindrome cardiorrenal agudo en UTI: POCUS, congestion venosa y objetivos dinamicos** · PMID 42527161 · DOI `10.1016/j.ejim.2026.107087` *(rel: cardio_sepsis)*
  - *Resultado:* los autores remarcan mortalidad >50% cuando CRS critico requiere TRR; biomarcadores tubulares pueden detectar IRA 12-24 h antes que creatinina.
  - *No sobreinterpretar:* no transforma biomarcadores ni POCUS en algoritmo automatico; la congestion venosa no excluye hipoperfusion concomitante.
- **2026-08-02** [LECTURA] **Inhibicion terminal del complemento en shock septico: poblacion rara, riesgo clinico relevante** · PMID 42526359 · DOI `10.1016/j.jcrc.2026.155700` *(rel: directa)*
  - *Resultado:* mas trombocitopenia 20,3% vs 8,9%, IRA 25,0% vs 13,3%, eventos tromboticos 7,8% vs 4,7%, TRR 8,3% vs 5,1% y MACE 13,7% vs 9,2%. Mortalidad a 30 dias sin diferencia significativa.
  - *No sobreinterpretar:* no indica suspender o continuar automaticamente inhibidor C5 durante shock; eso depende de indicacion, infeccion, riesgo trombotico y equipo tratante.
- **2026-08-02** [LECTURA] **Dapagliflozina iniciada en criticos con IRA: factibilidad, no prueba de beneficio** · PMID 42537430 · DOI `10.1016/j.jcrc.2026.155701` *(rel: cardio_sepsis)*
  - *Resultado:* mortalidad 38% vs 40%; TRR 12% vs 18%; compuesto 41% vs 42%. Diferencia ajustada de riesgo para muerte -1,9% (IC95% -14,5 a 10,7), TRR -7,4% (-16,2 a 1,5). Sin divergencias fisiologicas sugestivas de inestabilidad.
  - *No sobreinterpretar:* "no se vio dano" no es "beneficia al rinon"; evitar aplicarlo en hipoperfusion, ayuno, cetoacidosis, sepsis no controlada o inestabilidad.
- **2026-07-19** [SEÑAL PRÁCTICA] **PAM guiada por indice resistivo renal: mejora hemodinamia renal, no mortalidad** · PMID 42469213 · DOI `10.1038/s41467-026-75398-7` *(rel: directa)*
  - *Resultado:* el RRI post-titulacion fue menor en el grupo guiado por RRI (0,61 vs 0,67; p<0,001), pero la mortalidad a 28 dias no difirio: 25/138 vs 36/136; RR 0,69 (IC95% 0,44-1,08), p=0,11.
  - *No sobreinterpretar:* no subir ni bajar PAM solo por RRI fuera de protocolo; el resultado duro fue negativo.

## M11 (10 entradas)

- **2026-11-15** [LECTURA] **Fenotipos endoteliales y disfunción hepática asociada a sepsis** · PMID 42805482 · DOI `10.1016/j.lfs.2026.124715` *(rel: directa)*
  - *No sobreinterpretar:* no pedir citometría ni usar esta razón para anticipar, diagnosticar o tratar SALD; tampoco prueba que el fenotipo endotelial sea el mecanismo causal.
- **2026-09-27** [ALERTA METODOLÓGICA] **CETP/SAA en SDRA asociado a sepsis: biomarcadores en preprint** · PMID 42779867 · DOI `10.64898/2026.09.14.751535` *(rel: directa)*
  - *Resultado:* mayor actividad CETP se asocio a menor mortalidad; asociaciones variables con SAA y rosuvastatina.
- **2026-09-20** [SEÑAL PRÁCTICA] **Necrosis distal/gangrena simetrica en shock con vasopresores: ojo con culpar solo a la noradrenalina** · PMID 42760619 · DOI `10.1093/ehjcvp/pvag078` *(rel: directa)*
  - *Resultado:* no aporta efecto numerico aplicable; es sintesis fisiopatologica.
  - *No sobreinterpretar:* no justifica subir o bajar vasopresores por protocolo, ni anticoagular empiricamente a todos, ni negar que dosis altas/prolongadas de vasopresores puedan contribuir al problema. Sirve para ampliar el diagnostico causal y documentar mejor el
- **2026-09-06** [LECTURA] **Hepatitis hipoxica en criticos: marcador de gravedad** · PMID 42690846 · DOI `10.1177/08850666261475587` *(rel: directa)*
  - *Resultado:* prevalencia agrupada de hepatitis hipoxica en UTI 8,3%; mortalidad 64,0%; asociacion con mortalidad vs no-HH RR 2,94. Principales precipitantes reportados: shock cardiogenico, paro cardiaco y sepsis.
  - *No sobreinterpretar:* heterogeneidad alta; probablemente marcador pronostico mas que causa tratable independiente.
- **2026-08-09** [LECTURA] **Telemedicina intensiva y destete de ventilacion invasiva** · PMID 42568095 · DOI `10.1186/s13054-026-06234-z` *(rel: cardio_sepsis)*
  - *Resultado:* mas SBTs con intervencion, 51% vs 27% de dias-paciente, p<0,001. Sin diferencia en exito de destete: 28% vs 36%, p=0,32. En destetados, menor duracion de ventilacion invasiva: mediana 7 vs 9 dias, p=0,031.
  - *No sobreinterpretar:* no demuestra que tele-UTI aumente supervivencia ni exito de destete por si sola. La senial es de adherencia a proceso y deteccion de oportunidad.
- **2026-08-09** [LECTURA] **Lesion ventricular derecha en SDRA** · PMID 42571495 · DOI `10.1016/j.aicoj.2026.100117` *(rel: cardio_sepsis)*
  - *Resultado:* prevalencia agrupada 30% (IC95% 23-38%). Asociacion con mortalidad UTI: OR no ajustado 2,49 (IC95% 1,81-3,42); aOR 2,37 (IC95% 1,24-4,51); aHR 2,64 (IC95% 1,60-4,37).
  - *No sobreinterpretar:* no todo VD lesionado exige bajar PEEP o agregar inotropico. Integrar oxigenacion, reclutabilidad, driving pressure, CO2, perfusion y congestion venosa.
- **2026-08-09** [LECTURA] **Hipoxemia/hipercapnia temprana y mortalidad en ventilados invasivos** · PMID 42570531 · DOI `10.1016/j.hrtlng.2026.102905` *(rel: cardio_sepsis)*
  - *Resultado:* mortalidad global 23,0%. Hipoxemia aislada aOR 1,63 (IC95% 1,33-2,00); hipoxemia + hipercapnia aOR 1,67 (IC95% 1,21-2,32); hipercapnia aislada no se asocio a mayor mortalidad, aOR 0,86 (IC95% 0,54-1,39).
  - *No sobreinterpretar:* no perseguir normocapnia a costa de driving pressure/volutrauma. La hipercapnia aislada leve no equivale automaticamente a peor pronostico.
- **2026-07-12** [LECTURA] **Lactato a 6 horas + PAFI en SDRA asociado a sepsis** · PMID 42434889 · DOI `10.1177/08850666261466237` *(rel: directa)*
  - *Resultado:* mortalidad 34,5%; AUC 0,82 derivacion, 0,80 validacion interna, 0,73 validacion externa; calibracion reportada como adecuada.
  - *No sobreinterpretar:* no usar la formula como "score de corte" para limitar tratamiento o indicar conductas; usarlo como marco de riesgo pendiente de validacion.
- **2026-07-12** [LECTURA] **Infecciones por Klebsiella pneumoniae resistente a carbapenemes en UTI** · PMID 42426650 · DOI `10.1186/s12879-026-13929-9` *(rel: cardio_sepsis)*
  - *Resultado:* mortalidad 75% (135/180). Predictores independientes: edad OR 1,04; vasopresores OR 13,42; ventilacion mecanica OR 14,19. No se encontro asociacion independiente entre combinaciones antimicrobianas especificas y supervivencia, con subgrupos limitados.
  - *No sobreinterpretar:* no concluir que el antibiotico no importa; el estudio no tiene potencia ni diseno para comparar estrategias terapeuticas finas.
- **2026-07-12** [LECTURA] **Corticoides en infeccion pulmonar grave** · PMID 42425738 · DOI `10.1136/bmjresp-2025-003934` *(rel: directa)*
  - *Resultado:* 12 RCTs, 4622 pacientes, 1203 eventos. OR de mortalidad de corto plazo 0,83 (IC95% 0,70-0,98), p=0,029, I2 2,0%, NNT 37,84, certeza GRADE baja. En NAC: OR 0,72 (IC95% 0,54-0,98), NNT 28,10. Cursos >7 dias mostraron diferencia; cursos <=7 dias no.
  - *No sobreinterpretar:* no usarlo como licencia para corticoides universales en toda sepsis o toda neumonia; mirar fenotipo, shock, oxigenacion, riesgo de infeccion secundaria/hiperglucemia y duracion.
