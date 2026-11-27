/**
 * Glosario del Atlas: ninguna sigla sin desarrollar, y ninguna definicion sin
 * su porque.
 *
 * Cada entrada tiene cuatro campos, y los cuatro son obligatorios:
 *  - sigla:     como aparece en pantalla.
 *  - expansion: que quieren decir esas letras, en el idioma original si la
 *               sigla viene del ingles, mas la traduccion.
 *  - que:       que mide o que es, en una frase.
 *  - porque:    por que existe / por que importa / que decision cambia.
 *
 * El campo `fuente` solo va cuando el numero o el umbral sale de un trabajo
 * concreto. Si no hay fuente, es fisiologia o definicion de consenso.
 */

export interface EntradaGlosario {
  sigla: string;
  expansion: string;
  que: string;
  porque: string;
  formula?: string;
  fuente?: string;
}

export const GLOSARIO: Record<string, EntradaGlosario> = {
  // ---------- Presiones y hemodinamia (M05) ----------
  PAS: {
    sigla: 'PAS',
    expansion: 'Presión arterial sistólica',
    que: 'La presión máxima de la onda arterial, durante la eyección del ventrículo.',
    porque:
      'Depende sobre todo del volumen sistólico y de la rigidez de la arteria. Por eso un anciano con arterias rígidas puede tener una sistólica alta con un volumen sistólico bajo: la sistólica sola engaña.',
  },
  PAD: {
    sigla: 'PAD',
    expansion: 'Presión arterial diastólica',
    que: 'La presión mínima de la onda arterial, mientras el ventrículo se llena.',
    porque:
      'Es el mejor reflejo del tono vascular al lado de la cama, porque su determinante principal es la resistencia periférica. Una PAD menor de 50 mmHg marca vasoplejia y caída de la perfusión coronaria, y es el disparador propuesto para empezar noradrenalina.',
  },
  PAM: {
    sigla: 'PAM',
    expansion: 'Presión arterial media',
    que: 'La presión promedio del ciclo cardíaco, que es la que verdaderamente impulsa el flujo hacia los órganos.',
    formula: 'PAM = (PAS + 2 × PAD) / 3',
    porque:
      'Es la presión de entrada de la circulación sistémica, por eso es la meta de reanimación y no la sistólica. La diastólica pesa el doble en la fórmula porque la diástole dura más que la sístole.',
  },
  PP: {
    sigla: 'PP',
    expansion: 'Presión de pulso (del inglés pulse pressure)',
    que: 'La diferencia entre la sistólica y la diastólica.',
    formula: 'PP = PAS − PAD',
    porque:
      'Mezcla dos informaciones: el volumen sistólico y la rigidez arterial. Una PP baja (< 40) sugiere volumen sistólico bajo; una PP ancha en un anciano suele ser rigidez, no hiperdinamia. Por eso se lee junto con la edad y no sola.',
  },
  PVC: {
    sigla: 'PVC',
    expansion: 'Presión venosa central',
    que: 'La presión en la vena cava superior, a la entrada de la aurícula derecha.',
    porque:
      'No sirve para predecir si un paciente responde a fluidos —ese uso está abandonado—, pero sí como presión de salida: lo que drena un órgano depende de la diferencia entre su presión de entrada y la PVC. Una PVC alta es congestión, no reserva.',
  },
  RAP: {
    sigla: 'RAP',
    expansion: 'Right atrial pressure — presión de la aurícula derecha',
    que: 'Lo mismo que la PVC, pero nombrada desde la fisiología de Guyton en vez de desde el catéter.',
    porque:
      'En la curva de retorno venoso, la RAP es la presión de salida del sistema venoso: cuanto más sube, menos retorno hay para el mismo gradiente. Es el eje horizontal del gráfico de Guyton.',
  },
  MPP: {
    sigla: 'MPP',
    expansion: 'Mean perfusion pressure — presión media de perfusión',
    que: 'La presión que realmente atraviesa el órgano, descontando la presión de salida.',
    formula: 'MPP = PAM − PVC',
    porque:
      'Dos pacientes con la misma PAM perfunden distinto si uno tiene la PVC en 4 y el otro en 18. La MPP es lo que queda de gradiente, y es lo que el riñón ve.',
  },
  DPP: {
    sigla: 'DPP',
    expansion: 'Diastolic perfusion pressure — presión de perfusión diastólica',
    que: 'El gradiente diastólico sobre la presión venosa.',
    formula: 'DPP = PAD − PVC',
    porque:
      'El miocardio se perfunde en diástole, así que este es el gradiente de la coronaria. Una DPP baja es la combinación más peligrosa: vasoplejia por un lado y congestión por el otro, cada una empujando el gradiente a cero desde una punta distinta.',
  },
  FC: {
    sigla: 'FC',
    expansion: 'Frecuencia cardíaca',
    que: 'Los latidos por minuto, que determinan cuánto dura cada diástole.',
    porque:
      'Acorta la diástole cuando sube, y al acortarla eleva la PAD sin que haya cambiado el tono vascular. Por eso todos los índices de tono diastólico se corrigen por frecuencia: sin corregir, la taquicardia disfraza una vasoplejia.',
  },
  DSI: {
    sigla: 'DSI',
    expansion: 'Diastolic shock index — índice de shock diastólico',
    que: 'La frecuencia cardíaca dividida por la presión diastólica.',
    formula: 'DSI = FC / PAD',
    porque:
      'Captura en un número la combinación que define la vasoplejia: taquicardia con diastólica baja. Sube cuando el corazón compensa un tono que se cae. Un DSI ≥ 2,2 alerta sobre colapso vasopléjico grave.',
    fuente: 'Ospina-Tascón 2020 (PMID 32296976); umbral de Paiva 2024',
  },
  VNERi: {
    sigla: 'VNERi',
    expansion: 'Vascular norepinephrine responsiveness index — índice de respuesta vascular a la noradrenalina',
    que: 'La presión diastólica dividida por el producto de la dosis de noradrenalina y la frecuencia cardíaca.',
    formula: 'VNERi = PAD / (noradrenalina bitartrato en µg/kg/min × FC)',
    porque:
      'La PAD dice cuánto tono hay, pero no si ese tono RESPONDE a la noradrenalina. Dos pacientes con la misma PAD/FC están en situaciones opuestas si uno la sostiene con 0,05 µg/kg/min y el otro con 0,5. Dividir por la dosis convierte una foto del tono en una medida de respuesta: cuanto más bajo el VNERi, más droga hace falta para sostener menos presión. Un VNERi bajo sugiere que seguir subiendo la noradrenalina no va a alcanzar la meta, y que conviene pensar en un vasopresor no catecolaminérgico o en corticoides en vez de escalar la dosis.',
    fuente:
      'Goury 2025, Ann Intensive Care 15:43 (PMID 40133652), post hoc de ANDROMEDA-SHOCK, n = 424. Curva en J invertida: nadir 6,7; < 2,6 mortalidad 56 ± 6%; 2,6–10,8 mortalidad 28 ± 7%; > 10,8 mortalidad 39 ± 19%. Calibrado con la sal bitartrato y medido una sola vez dentro de las 4 h del diagnóstico: no está validado para seguimiento evolutivo.',
  },
  E_adyn: {
    sigla: 'E_adyn',
    expansion: 'Elastancia arterial dinámica',
    que: 'La variación de presión de pulso dividida por la variación del volumen sistólico.',
    formula: 'E_adyn = PPV / SVV',
    porque:
      'Dice si el árbol arterial está acoplado al corazón. Por debajo de 0,94 predice que la presión va a caer cuando se baje la noradrenalina: es el aviso de que el destete vasopresor va a fracasar.',
    fuente: 'Guinot 2015, Crit Care',
  },
  PPV: {
    sigla: 'PPV',
    expansion: 'Pulse pressure variation — variación de la presión de pulso',
    que: 'Cuánto oscila la presión de pulso a lo largo de un ciclo respiratorio en un paciente ventilado.',
    porque:
      'Es un predictor dinámico de respuesta a fluidos: aprovecha que la ventilación mecánica cambia cíclicamente la precarga. Deja de ser confiable con arritmia, respiración espontánea, volumen corriente bajo, presión intraabdominal alta o hipertensión pulmonar.',
  },
  SVV: {
    sigla: 'SVV',
    expansion: 'Stroke volume variation — variación del volumen sistólico',
    que: 'La misma oscilación respiratoria, pero medida sobre el volumen sistólico en lugar de la presión.',
    porque: 'Tiene las mismas limitaciones que la PPV, y se usa junto a ella para calcular la elastancia arterial dinámica.',
  },
  PLR: {
    sigla: 'PLR',
    expansion: 'Passive leg raising — elevación pasiva de piernas',
    que: 'Una maniobra que transfiere sangre de las piernas al tórax, como un bolo reversible de unos 300 mL.',
    porque:
      'Es la prueba de respuesta a fluidos que no deja fluido adentro: si el paciente no responde, no se perdió nada. Su rendimiento cae con presión intraabdominal elevada, porque el aumento de precarga no llega.',
  },
  CRT: {
    sigla: 'CRT',
    expansion: 'Capillary refill time — tiempo de relleno capilar',
    que: 'Los segundos que tarda en volver el color después de presionar la piel.',
    porque:
      'Es la variable de perfusión más barata que existe y la que se normaliza más rápido. ANDROMEDA-SHOCK la usó como meta de reanimación en lugar del lactato, que tarda horas en bajar aunque la perfusión ya se haya recuperado.',
  },
  PIA: {
    sigla: 'PIA',
    expansion: 'Presión intraabdominal',
    que: 'La presión dentro de la cavidad abdominal, medida habitualmente por vía vesical.',
    porque:
      'Por encima de 12 mmHg deforma todo lo demás: comprime la cava, degrada el rendimiento de la elevación pasiva de piernas y vuelve poco confiables la PPV y la SVV. Si no se mide, se interpretan mal todos los índices dinámicos.',
  },
  VExUS: {
    sigla: 'VExUS',
    expansion: 'Venous Excess Ultrasound — ecografía de exceso venoso',
    que: 'Un puntaje ecográfico de congestión venosa que combina la vena cava inferior con los flujos de las venas suprahepáticas, porta y renales.',
    porque:
      'Pone número a la congestión, que es el daño por el lado de la salida y no de la entrada. Ojo en el cirrótico: la hipertensión portal confunde el algoritmo, así que ahí no se lee igual.',
  },
  NA: {
    sigla: 'NA',
    expansion: 'Noradrenalina (norepinefrina)',
    que: 'El vasopresor de primera línea del shock séptico, agonista α₁ principalmente.',
    porque:
      'La dosis solo significa algo si se aclara la sal: 1 µg de base equivale a 2,00 µg de bitartrato monohidrato, 1,89 de bitartrato anhidro y 1,22 de clorhidrato. Comparar dosis entre hospitales sin convertir es comparar cosas distintas.',
  },

  // ---------- Glicocálix (M03) ----------
  ALI: {
    sigla: 'ALI',
    expansion: 'Índice albúmina/lactato (albumin-lactate index)',
    que: 'El cociente entre la albúmina y el lactato.',
    porque:
      'Junta en un número la pérdida de la barrera (albúmina que se fuga) con la hipoperfusión (lactato que sube). Baja por los dos lados a la vez cuando el glicocálix se rompe.',
  },
  IFC: {
    sigla: 'IFC',
    expansion: 'Índice de fuga capilar',
    que: 'La proteína C reactiva dividida por la albúmina.',
    porque:
      'Mide lo mismo desde el otro lado: inflamación que sube sobre proteína que se va. Es la versión de Palacios del mismo concepto.',
  },

  // ---------- Antibióticos y PK/PD (M09, M16) ----------
  'PK/PD': {
    sigla: 'PK/PD',
    expansion: 'Farmacocinética / farmacodinamia (pharmacokinetics / pharmacodynamics)',
    que: 'La PK es lo que el cuerpo le hace a la droga; la PD, lo que la droga le hace al germen.',
    porque:
      'La dosis correcta no se define por el peso sino por el cruce de las dos: cuánto tiempo la concentración libre se mantiene por encima de la CIM del germen. Por eso en el crítico la dosis del prospecto suele quedar corta.',
  },
  MIC: {
    sigla: 'MIC',
    expansion: 'Minimum inhibitory concentration — concentración inhibitoria mínima (CIM)',
    que: 'La concentración más baja de antibiótico que frena el crecimiento del germen.',
    porque:
      'Es el denominador de toda meta PK/PD. Sin CIM, decir «dosis alta» no quiere decir nada: alta respecto de qué.',
  },
  ARC: {
    sigla: 'ARC',
    expansion: 'Augmented renal clearance — clearance renal aumentado',
    que: 'Un filtrado glomerular por encima de lo normal, típico del paciente joven séptico sin daño renal.',
    porque:
      'Es la trampa inversa a la que todos esperan: el riñón que funciona de más barre el antibiótico y deja al paciente subdosificado con una creatinina normal. Se corrige con infusión prolongada, no con más bolos.',
  },
  CKRT: {
    sigla: 'CKRT',
    expansion: 'Continuous kidney replacement therapy — terapia de reemplazo renal continua',
    que: 'La diálisis continua del paciente crítico inestable.',
    porque:
      'Cambia por completo la eliminación de los antibióticos, y en general hacia abajo la dosis no: muchas drogas necesitan dosis plena porque el circuito las extrae. Reducirlas «por el riñón» es un error frecuente.',
  },
  PCT: {
    sigla: 'PCT',
    expansion: 'Procalcitonina',
    que: 'Un biomarcador que sube en la infección bacteriana.',
    porque:
      'No sirve para decidir si empezar antibióticos, pero sí ayuda a suspenderlos antes con seguridad. Se lee como tendencia y en contexto, nunca como un valor aislado.',
  },
  BLEE: {
    sigla: 'BLEE',
    expansion: 'Betalactamasa de espectro extendido',
    que: 'Una enzima de clase A que hidroliza cefalosporinas de espectro extendido.',
    porque:
      'Define una conducta concreta: en la bacteriemia, MERINO mostró que piperacilina-tazobactam fue peor que meropenem, así que acá el carbapenémico no es exceso.',
  },
  KPC: {
    sigla: 'KPC',
    expansion: 'Klebsiella pneumoniae carbapenemasa',
    que: 'Una carbapenemasa de clase A, serino-enzima.',
    porque:
      'Al ser serino-enzima, sí la inhibe el avibactam: ceftazidima-avibactam y meropenem-vaborbactam funcionan. Esto es exactamente lo que no pasa con las metalo-betalactamasas.',
  },
  NDM: {
    sigla: 'NDM',
    expansion: 'New Delhi metallo-β-lactamase',
    que: 'Una carbapenemasa de clase B, metalo-enzima que usa zinc en su sitio activo.',
    porque:
      'El avibactam NO inhibe las metalo-betalactamasas: ceftazidima-avibactam sola no cubre NDM, y es el error más frecuente. Hace falta sumarle aztreonam, o usar aztreonam-avibactam. En la Argentina la NDM ya circula al mismo nivel que la KPC.',
  },
  MBL: {
    sigla: 'MBL',
    expansion: 'Metallo-β-lactamase — metalo-betalactamasa',
    que: 'La familia de carbapenemasas de clase B, que incluye NDM, VIM e IMP.',
    porque:
      'Define la frontera terapéutica más importante de la resistencia: ningún inhibidor de serino-enzimas las toca. El aztreonam escapa a su hidrólisis, por eso es la base de la combinación.',
  },
  CRAB: {
    sigla: 'CRAB',
    expansion: 'Carbapenem-resistant Acinetobacter baumannii',
    que: 'Acinetobacter resistente a carbapenémicos.',
    porque:
      'Es el escenario con menos opciones y peor evidencia. Sumar meropenem a la colistina no mejoró la mortalidad y sí sumó toxicidad.',
  },
  DTR: {
    sigla: 'DTR',
    expansion: 'Difficult-to-treat resistance — resistencia difícil de tratar',
    que: 'Una definición que agrupa a los gramnegativos resistentes a todos los betalactámicos de primera línea y a las fluoroquinolonas.',
    porque:
      'Cambia el eje: en vez de contar a cuántas drogas es resistente, pregunta si queda alguna opción de baja toxicidad. Es la lógica con la que se eligen los nuevos betalactámicos.',
  },
  SAMR: {
    sigla: 'SAMR',
    expansion: 'Staphylococcus aureus meticilino-resistente',
    que: 'S. aureus con el gen mecA, resistente a todos los betalactámicos antiestafilocócicos clásicos.',
    porque:
      'Define una conducta y una trampa: la daptomicina es excelente en bacteriemia y no sirve en neumonía, porque el surfactante pulmonar la inactiva.',
  },
  'RECAPT-AR': {
    sigla: 'RECAPT-AR',
    expansion: 'Red de vigilancia de carbapenemasas de la Argentina',
    que: 'La vigilancia nacional que describe qué carbapenemasas circulan y en qué proporción.',
    porque:
      'Es el dato que vuelve local una decisión global: acá la NDM está al nivel de la KPC, así que suponer el mecanismo por lo que uno leyó en guías del hemisferio norte lleva a elegir mal la droga.',
  },

  // ---------- Pulmón (M15) ----------
  SDRA: {
    sigla: 'SDRA',
    expansion: 'Síndrome de distrés respiratorio agudo',
    que: 'Edema pulmonar inflamatorio no cardiogénico, de aparición aguda y bilateral.',
    porque:
      'No es un diagnóstico etiológico sino un síndrome: lo que cambia el pronóstico no es ponerle el nombre, sino ventilar protegido y pronar temprano cuando corresponde.',
  },
  PCP: {
    sigla: 'PCP',
    expansion: 'Peso corporal predicho',
    que: 'El peso que corresponde a la talla y el sexo del paciente, no el que marca la balanza.',
    formula: 'Varón: 50 + 0,91 × (talla en cm − 152,4) · Mujer: 45,5 + 0,91 × (talla − 152,4)',
    porque:
      'El pulmón no crece con el peso. Un paciente de 1,70 m y 110 kg tiene el mismo tamaño pulmonar que uno de 1,70 m y 70 kg, así que ventilarlo con 6 mL/kg del peso real le entrega casi 10 mL/kg de pulmón real. Es el error que más se repite.',
  },
  VT: {
    sigla: 'VT',
    expansion: 'Volumen corriente (tidal volume)',
    que: 'El volumen de cada respiración.',
    porque:
      'Indexado al peso predicho, 6 mL/kg bajó la mortalidad del 39,8% al 31,0% frente a 12 mL/kg. Es una de las pocas intervenciones de la terapia intensiva con ese tamaño de efecto.',
    fuente: 'ARMA, ARDSNet 2000',
  },
  PEEP: {
    sigla: 'PEEP',
    expansion: 'Positive end-expiratory pressure — presión positiva al final de la espiración',
    que: 'La presión que queda en la vía aérea al terminar de exhalar.',
    porque:
      'Mantiene abiertos los alvéolos que se colapsarían, pero a costa de sobredistender los que ya están abiertos y de aumentar la poscarga del ventrículo derecho. Por eso subirla no es gratis.',
  },
  'ΔP': {
    sigla: 'ΔP',
    expansion: 'Presión de distensión (driving pressure)',
    que: 'La presión que efectivamente distiende el pulmón en cada respiración.',
    formula: 'ΔP = presión meseta − PEEP',
    porque:
      'Normaliza el volumen corriente por la distensibilidad que ese pulmón realmente tiene. Cada 7 cmH₂O más se asociaron a un riesgo relativo de muerte de 1,41, incluso con volumen y meseta dentro de lo protector.',
    fuente: 'Amato 2015',
  },
  'PaO₂/FiO₂': {
    sigla: 'PaO₂/FiO₂',
    expansion: 'Presión arterial de oxígeno sobre fracción inspirada de oxígeno',
    que: 'El índice de oxigenación clásico.',
    porque:
      'Normaliza la oxigenación por cuánto oxígeno se está entregando: una PaO₂ de 90 con FiO₂ 0,21 y con FiO₂ 1,0 son dos pulmones completamente distintos. Por debajo de 150 es el umbral del prono.',
  },
  'SpO₂/FiO₂': {
    sigla: 'SpO₂/FiO₂',
    expansion: 'Saturación de pulso sobre fracción inspirada de oxígeno',
    que: 'El equivalente no invasivo del anterior.',
    porque:
      'Permite clasificar sin gases arteriales, que es lo que habilitó la definición global 2024 a incluir pacientes en alto flujo. Solo vale con SpO₂ ≤ 97%: por encima la curva de la hemoglobina se aplana y el índice deja de discriminar.',
  },
  EOLIA: {
    sigla: 'EOLIA',
    expansion: 'ECMO to Rescue Lung Injury in Severe ARDS (nombre del ensayo)',
    que: 'El ensayo que definió los criterios de ECMO venovenosa en el SDRA grave.',
    porque:
      'Sus criterios son el lenguaje común para decidir una derivación: PaO₂/FiO₂ < 50, o < 80 por más de 6 h, o pH < 7,25 con PaCO₂ ≥ 60. No es un umbral de gravedad cualquiera, es el criterio de un ensayo concreto.',
  },

  // ---------- Soporte general (M17) ----------
  'NICE-SUGAR': {
    sigla: 'NICE-SUGAR',
    expansion: 'Normoglycaemia in Intensive Care Evaluation — Survival Using Glucose Algorithm Regulation',
    que: 'El ensayo de 6.104 pacientes que comparó control glucémico estricto contra liberal.',
    porque:
      'Dio vuelta la práctica: la meta de 81–108 mg/dL aumentó la mortalidad a 90 días (27,5% vs 24,9%) y multiplicó por 13 la hipoglucemia grave. Es la razón por la que hoy la meta es 140–180 y no la normoglucemia.',
  },
  PACER: {
    sigla: 'PACER',
    expansion: 'Platelet transfusion before CVC placement (nombre del ensayo)',
    que: 'El ensayo que comparó transfundir o no plaquetas antes de una vía central con 10.000–50.000 plaquetas.',
    porque:
      'No transfundir dio más sangrado por el catéter (11,9% vs 4,8%) y no cumplió la no inferioridad. Corrige la idea de que con eco alcanza.',
  },

  // ---------- Poblaciones (M18) ----------
  qSOFA: {
    sigla: 'qSOFA',
    expansion: 'Quick Sequential Organ Failure Assessment',
    que: 'Un puntaje de tres ítems al lado de la cama: frecuencia respiratoria ≥ 22, presión sistólica ≤ 100 y alteración del estado mental.',
    porque:
      'Nació como una herramienta de alerta fuera de la UTI, sin laboratorio. Está validado en adultos «promedio»: en la embarazada su AUC fue 0,54, es decir, apenas mejor que tirar una moneda.',
  },
  'qSOFA-P': {
    sigla: 'qSOFA-P',
    expansion: 'qSOFA obstétrico (pregnancy-adapted)',
    que: 'La versión con umbrales corridos: frecuencia respiratoria ≥ 35 y sistólica ≤ 85.',
    porque:
      'La fisiología del embarazo positiviza el qSOFA estándar sin que haya gravedad, así que el puntaje original no discrimina. Con los umbrales corridos el AUC subió a 0,77. Es unicéntrico y retrospectivo, y ningún puntaje negativo descarta sepsis.',
    fuente: 'Cagino 2022 (PMID 34583411), 104 embarazadas con infección grave',
  },
  CFS: {
    sigla: 'CFS',
    expansion: 'Clinical Frailty Scale — escala clínica de fragilidad',
    que: 'Una escala de 1 (muy en forma) a 9 (enfermo terminal) que gradúa la función de las 2 semanas previas a la enfermedad aguda.',
    porque:
      'Mide función, no edad: un paciente de 85 puede tener CFS 2 y uno de 68, CFS 7. Sirve para la conversación sobre expectativas y para planear la rehabilitación, nunca como criterio para negar la UTI.',
  },
  ACLF: {
    sigla: 'ACLF',
    expansion: 'Acute-on-chronic liver failure — falla hepática aguda sobre crónica',
    que: 'La descompensación de un cirrótico con fallas de otros órganos, medida con el CLIF-SOFA.',
    porque:
      'Separa dos pronósticos que parecen el mismo paciente: mortalidad a 28 días del 33,9% con ACLF frente al 1,9% sin ella. Y la sepsis es su gatillo más frecuente.',
    fuente: 'CANONIC, Moreau 2013 (PMID 23474284), 1.343 cirróticos',
  },
  PBE: {
    sigla: 'PBE',
    expansion: 'Peritonitis bacteriana espontánea',
    que: 'La infección del líquido ascítico sin un foco quirúrgico, con ≥ 250 polimorfonucleares/mm³.',
    porque:
      'Es la única infección del cirrótico donde la albúmina IV tiene beneficio demostrado (1,5 g/kg al diagnóstico y 1 g/kg el día 3: insuficiencia renal del 33% al 10%). Fuera de la PBE el beneficio es incierto, por eso el recuento define conducta.',
    fuente: 'Sort 1999 (PMID 10432325)',
  },

  // ---------- Después de la UTI (M19) ----------
  PICS: {
    sigla: 'PICS',
    expansion: 'Post-intensive care syndrome — síndrome post-cuidados intensivos',
    que: 'Problemas nuevos o que empeoran en la salud física, cognitiva o mental, que aparecen tras la enfermedad crítica y persisten después del alta.',
    porque:
      'Le pone nombre a lo que el paciente vive como algo que le pasa solo a él. Si no se nombra en la epicrisis, nadie lo busca ni lo trata.',
    fuente: 'Needham 2012 (PMID 21946660)',
  },
  'PICS-F': {
    sigla: 'PICS-F',
    expansion: 'Post-intensive care syndrome – family',
    que: 'El mismo síndrome en los familiares: ansiedad, depresión, estrés postraumático y carga económica.',
    porque:
      'La enfermedad crítica no termina en el paciente. A los 5 años del SDRA, las secuelas alcanzaban también a los cuidadores.',
  },
  MRC: {
    sigla: 'MRC',
    expansion: 'Medical Research Council (escala de fuerza)',
    que: 'La suma de fuerza de 12 grupos musculares, de 0 a 60 puntos.',
    porque:
      'Una suma menor de 48 define la debilidad adquirida en la UTI. Es el examen físico convertido en número, para poder seguirlo en el tiempo.',
  },

  // ---------- Sistema (M20) ----------
  NEWS2: {
    sigla: 'NEWS2',
    expansion: 'National Early Warning Score 2',
    que: 'Un puntaje de alerta temprana que suma frecuencia respiratoria, saturación, presión, frecuencia cardíaca, conciencia y temperatura.',
    porque:
      'Identifica a quién apurar sin esperar el shock: con NEWS2 ≥ 7, cada hora de demora del antibiótico se asoció a más mortalidad (OR 1,07), incluido el 86% de esos pacientes que no estaba en shock. Con NEWS2 < 7 no hubo asociación.',
    fuente: 'Rhee 2026, Lancet Respir Med (PMID 42556377), 99.667 consultas',
  },
  'SEP-1': {
    sigla: 'SEP-1',
    expansion: 'Severe Sepsis and Septic Shock Early Management Bundle',
    que: 'La medida de calidad obligatoria de los Estados Unidos que exige completar el paquete de sepsis.',
    porque:
      'Es el experimento natural de qué pasa cuando se convierte un proceso en métrica: los lactatos medidos pasaron del 55% al 77%, el uso de antibióticos subió un 24,4%, y la mortalidad no se movió (20,3% vs 20,4%).',
  },
  EGDT: {
    sigla: 'EGDT',
    expansion: 'Early goal-directed therapy — terapia temprana dirigida por metas',
    que: 'El protocolo de Rivers 2001 con metas fijas de PVC, PAM y saturación venosa central.',
    porque:
      'En PRISM (3.723 pacientes de tres ensayos) no superó al cuidado habitual (24,9% vs 25,4%) y costó más. No es que la EGDT falló: el cuidado habitual de 2014 ya había incorporado lo esencial.',
  },
  VPP: {
    sigla: 'VPP',
    expansion: 'Valor predictivo positivo',
    que: 'De todas las alertas que suenan, qué proporción corresponde a un paciente que realmente tiene la condición.',
    porque:
      'Es lo que decide si un algoritmo se usa o se silencia. Depende de la prevalencia, no solo de la sensibilidad y la especificidad: con prevalencia baja, un modelo «bueno» igual genera una mayoría de falsas alarmas.',
  },
  AUC: {
    sigla: 'AUC',
    expansion: 'Area under the curve — área bajo la curva ROC',
    que: 'La probabilidad de que el modelo le dé un puntaje más alto a un enfermo que a un sano.',
    porque:
      '0,5 es tirar una moneda y 1,0 es perfecto. El Epic Sepsis Model tuvo 0,63 en validación externa frente al 0,76–0,83 que informaba su fabricante: por eso un AUC de folleto no se acepta sin validación con datos propios.',
  },
  OR: {
    sigla: 'OR',
    expansion: 'Odds ratio — razón de momios',
    que: 'Cuántas veces cambian las probabilidades a favor de un desenlace por cada unidad de exposición.',
    porque:
      'No es un riesgo relativo: con desenlaces frecuentes, el OR exagera el efecto. Un OR de 1,15 por hora no significa 15% más de muertes por hora.',
  },
  HR: {
    sigla: 'HR',
    expansion: 'Hazard ratio — razón de riesgos instantáneos',
    que: 'La relación entre las tasas de que ocurra el evento en cada instante, entre dos grupos.',
    porque:
      'Se usa cuando importa el tiempo hasta el evento, no solo si ocurrió. Asume que esa relación se mantiene constante a lo largo del seguimiento, supuesto que no siempre se cumple.',
  },
  SSC: {
    sigla: 'SSC',
    expansion: 'Surviving Sepsis Campaign — Campaña Sobrevivir a la Sepsis',
    que: 'La guía internacional de manejo de sepsis y shock séptico.',
    porque:
      'Es la referencia común, pero conviene leer la fuerza de cada recomendación: muchas son condicionales con certeza baja, y el Atlas las marca cuando lo son.',
  },
  UTI: {
    sigla: 'UTI',
    expansion: 'Unidad de terapia intensiva',
    que: 'El servicio donde se asiste al paciente crítico.',
    porque:
      'En la bibliografía en inglés aparece como ICU, y en España como UCI. Son lo mismo; importa al leer los ensayos.',
  },
};

/** Devuelve las entradas pedidas, en el orden en que se piden, salteando las que no existen. */
export function entradas(claves: string[]): EntradaGlosario[] {
  return claves.map((k) => GLOSARIO[k]).filter((e): e is EntradaGlosario => Boolean(e));
}
