/**
 * Motor del simulador del M18: los valores normales de cada paciente.
 *
 * Los mismos signos vitales se leen distinto segun la poblacion. El motor
 * toma un set de signos y devuelve como se lee cada uno en esa poblacion,
 * que puntaje corresponde usar (qSOFA o qSOFA-P), los recordatorios propios
 * del grupo y los datos de pronostico que sirven para la conversacion con la
 * familia.
 *
 * Es material de estudio, no una herramienta de decision.
 */

export type Poblacion =
  | 'estandar'
  | 'embarazada'
  | 'puerpera'
  | 'neutropenico'
  | 'trasplantado'
  | 'anciano'
  | 'cirrotico';

export type Child = 'A' | 'B' | 'C';

export interface M18Inputs {
  poblacion: Poblacion;
  // Signos vitales
  fc: number;
  pas: number;
  pad: number;
  fr: number;
  temperatura: number;
  lactato: number;
  mentalAlterado: boolean;
  // Modificadores por poblacion
  trimestre: 1 | 2 | 3;
  decubitoSupino: boolean;
  neutrofilos: number; // /uL
  colonizadoResistentes: boolean;
  horasAfebril: number;
  edad: number;
  cfs: number; // Clinical Frailty Scale 1-9
  child: Child;
  ascitis: boolean;
  pmnAscitis: number; // polimorfonucleares/mm3
}

export type Tono = 'ok' | 'amber' | 'red' | 'cyan';

export interface LecturaSigno {
  signo: string;
  valor: string;
  tono: Tono;
  lectura: string;
}

export interface M18Output {
  nombrePoblacion: string;
  fisiologia: string;
  qsofa: number;
  qsofaItems: Array<{ nombre: string; presente: boolean }>;
  usaQsofaP: boolean;
  qsofaP: number | null;
  qsofaPItems: Array<{ nombre: string; presente: boolean }> | null;
  pam: number;
  presionPulso: number;
  signos: LecturaSigno[];
  recordatorios: Array<{ titulo: string; detalle: string }>;
  pronostico: Array<{ dato: string; valor: string; fuente: string }>;
  alerts: Array<{ tono: Tono; titulo: string; detalle: string }>;
}

export const POBLACION_NOMBRE: Record<Poblacion, string> = {
  estandar: 'Adulto estándar',
  embarazada: 'Embarazada',
  puerpera: 'Puérpera',
  neutropenico: 'Neutropénico febril',
  trasplantado: 'Trasplantado de órgano abdominal',
  anciano: 'Anciano frágil',
  cirrotico: 'Cirrótico',
};

const FISIOLOGIA: Record<Poblacion, string> = {
  estandar:
    'Es la población en la que se validaron el qSOFA, los criterios de SIRS y el SOFA, y en la que se hicieron casi todos los ensayos.',
  embarazada:
    'La frecuencia cardíaca sube, la presión baja en el segundo trimestre, aumentan el volumen plasmático y los leucocitos, y la PaCO₂ normal es más baja. Desde la mitad del embarazo el útero comprime la cava en decúbito supino.',
  puerpera:
    'La definición de la OMS incluye el parto, el posaborto y el puerperio. La fisiología todavía no volvió a la basal y la infección de la herida de cesárea aparece sobre todo por S. aureus.',
  neutropenico:
    'Sin neutrófilos faltan los signos clásicos: no hay pus, el infiltrado tarda en aparecer y el sedimento puede ser normal con una pielonefritis.',
  trasplantado:
    'Respuesta inflamatoria atenuada, gérmenes oportunistas y interacciones entre los inmunosupresores y los antibióticos o azoles.',
  anciano:
    'Debuta con delirium, caídas, anorexia o deterioro funcional, muchas veces sin fiebre. Con arterias rígidas, la presión de pulso es alta y la diastólica baja.',
  cirrotico:
    'Vive con presión baja por vasodilatación esplácnica, gasto cardíaco alto, lactato más alto por menor depuración hepática, albúmina baja y un INR prolongado que no mide el riesgo real de sangrado.',
};

/** qSOFA estándar: FR ≥ 22, PAS ≤ 100, alteración del estado mental. */
export function calcularQsofa(fr: number, pas: number, mentalAlterado: boolean) {
  const items = [
    { nombre: 'Frecuencia respiratoria ≥ 22', presente: fr >= 22 },
    { nombre: 'Presión sistólica ≤ 100 mmHg', presente: pas <= 100 },
    { nombre: 'Alteración del estado mental', presente: mentalAlterado },
  ];
  return { puntaje: items.filter((i) => i.presente).length, items };
}

/**
 * qSOFA-P (Cagino 2022, PMID 34583411): FR ≥ 35 y PAS ≤ 85.
 * AUC 0,77 frente a 0,54 del qSOFA estandar. Unicentrico y retrospectivo.
 */
export function calcularQsofaP(fr: number, pas: number) {
  const items = [
    { nombre: 'Frecuencia respiratoria ≥ 35', presente: fr >= 35 },
    { nombre: 'Presión sistólica ≤ 85 mmHg', presente: pas <= 85 },
  ];
  return { puntaje: items.filter((i) => i.presente).length, items };
}

export function esObstetrica(p: Poblacion): boolean {
  return p === 'embarazada' || p === 'puerpera';
}

function leerSignos(raw: M18Inputs, pam: number, pp: number): LecturaSigno[] {
  const p = raw.poblacion;
  const obstetrica = esObstetrica(p);
  const signos: LecturaSigno[] = [];

  // Frecuencia cardiaca
  const fcFisiologica = obstetrica ? 105 : 100;
  signos.push({
    signo: 'Frecuencia cardíaca',
    valor: `${raw.fc} lpm`,
    tono: raw.fc > fcFisiologica + 15 ? 'red' : raw.fc > fcFisiologica ? 'amber' : 'ok',
    lectura: obstetrica
      ? raw.fc <= fcFisiologica
        ? 'Dentro de lo esperable: en el embarazo la frecuencia sube de forma fisiológica.'
        : `Por encima de lo que explica el embarazo. La fisiología no justifica ${raw.fc} lpm.`
      : p === 'cirrotico'
        ? 'El cirrótico tiene gasto cardíaco alto de base, así que la taquicardia pierde valor discriminativo.'
        : raw.fc > fcFisiologica
          ? 'Taquicardia.'
          : 'Normal.',
  });

  // Presion sistolica
  signos.push({
    signo: 'Presión sistólica',
    valor: `${raw.pas} mmHg`,
    tono: raw.pas <= 85 ? 'red' : raw.pas <= 100 ? 'amber' : 'ok',
    lectura: obstetrica
      ? raw.pas <= 85
        ? 'Cumple el componente de presión del qSOFA-P, que es el umbral que discriminó mejor en esta población.'
        : 'En el segundo trimestre la presión baja de forma fisiológica, así que un valor algo bajo no alcanza para descartar nada.'
      : p === 'cirrotico'
        ? 'El cirrótico vive con presión baja: hay que compararla con su basal, no con la del adulto estándar.'
        : p === 'anciano'
          ? 'En el 65 trial, una meta de PAM de 60–65 bajó los vasopresores sin aumentar la mortalidad.'
          : raw.pas <= 100
            ? 'Cumple el componente de presión del qSOFA.'
            : 'Normal.',
  });

  // Presion de pulso y PAM
  signos.push({
    signo: 'PAM y presión de pulso',
    valor: `PAM ${pam.toFixed(0)} · PP ${pp.toFixed(0)} mmHg`,
    tono: pam < 60 ? 'red' : pam < 65 ? 'amber' : 'ok',
    lectura:
      p === 'anciano'
        ? `Con arterias rígidas, la presión de pulso ancha (${pp.toFixed(0)}) y la diastólica baja (${raw.pad}) son esperables y no indican por sí solas vasodilatación aguda.`
        : pam < 65
          ? 'Por debajo de la meta habitual de 65 mmHg.'
          : 'Por encima de la meta habitual de 65 mmHg.',
  });

  // Frecuencia respiratoria
  signos.push({
    signo: 'Frecuencia respiratoria',
    valor: `${raw.fr} /min`,
    tono: raw.fr >= 35 ? 'red' : raw.fr >= 22 ? 'amber' : 'ok',
    lectura: obstetrica
      ? raw.fr >= 35
        ? 'Cumple el componente respiratorio del qSOFA-P.'
        : 'La PaCO₂ normal del embarazo es más baja, así que una taquipnea leve puede ser fisiológica. El umbral útil acá es 35, no 22.'
      : raw.fr >= 22
        ? 'Cumple el componente respiratorio del qSOFA.'
        : 'Normal.',
  });

  // Temperatura
  const febril = raw.temperatura >= 38;
  signos.push({
    signo: 'Temperatura',
    valor: `${raw.temperatura.toFixed(1)} °C`,
    tono: p === 'neutropenico' && febril ? 'red' : febril ? 'amber' : 'ok',
    lectura:
      p === 'neutropenico'
        ? febril
          ? 'Fiebre con neutropenia: antibiótico de amplio espectro de inmediato, sin esperar nada.'
          : 'Sin fiebre no se descarta la infección: el neutropénico puede estar infectado y afebril.'
        : p === 'anciano'
          ? febril
            ? 'Fiebre presente, pero su ausencia no habría descartado nada.'
            : 'La ausencia de fiebre no descarta la infección: el anciano suele debutar con delirium y sin fiebre.'
          : p === 'trasplantado'
            ? 'La respuesta inflamatoria atenuada puede dar menos fiebre de la que correspondería al foco.'
            : febril
              ? 'Fiebre.'
              : 'Sin fiebre.',
  });

  // Lactato
  signos.push({
    signo: 'Lactato',
    valor: `${raw.lactato.toFixed(1)} mmol/L`,
    tono: raw.lactato > 4 ? 'red' : raw.lactato > 2 ? 'amber' : 'ok',
    lectura:
      p === 'cirrotico'
        ? 'El cirrótico depura menos lactato, así que el valor absoluto sobreestima la hipoperfusión. Lo que informa es la tendencia, no el número aislado.'
        : raw.lactato > 2
          ? 'Por encima de 2 mmol/L: marcador de hipoperfusión.'
          : 'Normal.',
  });

  return signos;
}

function armarRecordatorios(raw: M18Inputs): Array<{ titulo: string; detalle: string }> {
  const p = raw.poblacion;
  const r: Array<{ titulo: string; detalle: string }> = [];

  if (esObstetrica(p)) {
    r.push({
      titulo: 'Usar el qSOFA-P, no el qSOFA',
      detalle:
        'En 104 embarazadas con infección grave, el qSOFA estándar tuvo un AUC de 0,54 y el qSOFA-P, 0,77. Es unicéntrico y retrospectivo, pero el estándar directamente no discrimina.',
    });
    r.push({
      titulo: 'Los focos más frecuentes son el genital y el urinario',
      detalle:
        'En GLOSS (52 países, 1.456 mujeres): genital 51,2% y urinario 36,5%. E. coli fue el 87,3% de los uropatógenos. El 13,1% no recibió antibióticos el mismo día de la sospecha.',
    });
    r.push({
      titulo: 'Reanimar a la madre es proteger al feto',
      detalle:
        'Las decisiones sobre el parto o la cesárea se toman con Obstetricia. Lo que baja la mortalidad materna es organizar lo básico: prevenir, detectar y tratar a tiempo (APT-Sepsis, RR 0,68).',
    });
  }

  if (p === 'embarazada' && raw.trimestre >= 2) {
    r.push({
      titulo: 'Desplazar el útero a la izquierda',
      detalle:
        'Desde la mitad del embarazo, en decúbito supino el útero comprime la vena cava y empeora la hipotensión. Es parte de la reanimación, no un detalle de confort.',
    });
  }

  if (p === 'neutropenico') {
    r.push({
      titulo: 'Antibiótico de amplio espectro de inmediato',
      detalle:
        'Es la regla que no cambió desde la IDSA 2010: fiebre con menos de 500 neutrófilos recibe cobertura contra grampositivos y gramnegativos sin esperar cultivos ni estudios.',
    });
    r.push({
      titulo: raw.colonizadoResistentes ? 'Empezar amplio y desescalar' : 'Estrategia de escalada',
      detalle: raw.colonizadoResistentes
        ? 'ECIL-4: con colonización o infección previa por resistentes, presentación complicada o alta prevalencia local, se empieza amplio y se desescala.'
        : 'ECIL-4: sin factores de riesgo de resistencia, se empieza con un betalactámico antipseudomonas, sin carbapenémico ni combinación.',
    });
  }

  if (p === 'trasplantado') {
    r.push({
      titulo: 'Inmunosuprimido no es sinónimo de peor pronóstico',
      detalle:
        'En una cohorte alemana de 538 pacientes con sepsis, los trasplantados de órgano abdominal tuvieron mejor sobrevida a 30 días (84% vs 66%; HR ajustado 0,49). Es un análisis post hoc: puede pesar que consulten antes y estén más controlados.',
    });
    r.push({
      titulo: 'Revisar interacciones antes de la primera dosis',
      detalle:
        'Los azoles y varios antibióticos modifican los niveles de los inmunosupresores. Y hay que pensar en oportunistas: hongos, virus, Pneumocystis, Nocardia.',
    });
  }

  if (p === 'anciano') {
    r.push({
      titulo: 'Meta de PAM 60–65 mmHg',
      detalle:
        'En el 65 trial (2.600 pacientes de 65 años o más con hipotensión vasodilatadora), la hipotensión permisiva bajó la exposición a vasopresores de 26,4 a 17,7 mg de equivalentes de noradrenalina, con mortalidad a 90 días de 41,0% vs 43,8%.',
    });
    r.push({
      titulo: 'La fragilidad no es criterio para negar la UTI',
      detalle:
        'En una revisión de 48 ECA (50.779 participantes), ninguno encontró efecto diferencial por fragilidad ni multimorbilidad, y la mayoría ni lo analizó. Es un dato para decidir con el paciente y la familia, y para planear la rehabilitación desde el día uno.',
    });
  }

  if (p === 'cirrotico') {
    if (raw.ascitis) {
      r.push({
        titulo: 'Paracentesis diagnóstica, siempre',
        detalle:
          'Todo cirrótico con ascitis que se interna o se descompensa necesita paracentesis: confirma la PBE, orienta el germen y descarta una peritonitis secundaria, que necesita control de foco.',
      });
    }
    r.push({
      titulo: 'El VExUS está confundido por la hipertensión portal',
      detalle:
        'La congestión venosa del cirrótico no se lee con el mismo algoritmo. Mismo problema con el INR, que está prolongado sin medir el riesgo real de sangrado.',
    });
    r.push({
      titulo: 'La conversación sobre trasplante va temprano',
      detalle:
        'En el cirrótico con sepsis y varias fallas orgánicas, el pronóstico depende de si es candidato a trasplante hepático. Esa charla con Hepatología no se deja para el final.',
    });
  }

  return r;
}

export function simulateM18(raw: M18Inputs): M18Output {
  const p = raw.poblacion;
  const pam = (raw.pas + 2 * raw.pad) / 3;
  const presionPulso = raw.pas - raw.pad;

  const q = calcularQsofa(raw.fr, raw.pas, raw.mentalAlterado);
  const obstetrica = esObstetrica(p);
  const qp = obstetrica ? calcularQsofaP(raw.fr, raw.pas) : null;

  const signos = leerSignos(raw, pam, presionPulso);
  const recordatorios = armarRecordatorios(raw);

  // --- Pronostico para la conversacion ---
  const pronostico: M18Output['pronostico'] = [];
  if (p === 'anciano') {
    if (raw.cfs >= 7) {
      pronostico.push({
        dato: 'Mortalidad al año en los muy frágiles',
        valor: '75,9%',
        fuente: 'Dong 2023, UTI geriátrica, 211 pacientes (HR ajustado 1,70)',
      });
    }
    pronostico.push({
      dato: 'Sobrevivientes que no vuelven a su calidad de vida previa',
      valor: 'la mitad',
      fuente: 'Dong 2023, entre los que respondieron la encuesta',
    });
    pronostico.push({
      dato: 'Fragilidad grave (CFS ≥ 7) a los 90 días del shock',
      valor: '36%',
      fuente: 'Yamamoto 2026, post hoc de un ECA japonés (OR 2,03 por punto de CFS previo)',
    });
    pronostico.push({
      dato: 'Sarcopenia y mortalidad hospitalaria',
      valor: 'OR 1,54',
      fuente: 'Ni 2025, 30 estudios; la fragilidad quedó no significativa (OR 1,68; 0,92–3,05)',
    });
  }
  if (p === 'cirrotico') {
    pronostico.push({
      dato: 'Mortalidad a 28 días con ACLF frente a sin ACLF',
      valor: '33,9% vs 1,9%',
      fuente: 'CANONIC, 1.343 cirróticos descompensados',
    });
    pronostico.push({
      dato: 'Sepsis como gatillo de la ACLF',
      valor: '62,8%',
      fuente: 'von Maldeghem 2025, 188 cirróticos alcohólicos en UTI',
    });
    pronostico.push({
      dato: 'Mortalidad hospitalaria si el gatillo es infeccioso',
      valor: '60,2% vs 20,0%',
      fuente: 'von Maldeghem 2025',
    });
    pronostico.push({
      dato: 'Mortalidad a 28 días del SDRA en el cirrótico',
      valor: '75,2%',
      fuente: 'Celier 2026, 621 cirróticos ventilados; sin mejora en 15 años',
    });
  }
  if (p === 'neutropenico' && raw.neutrofilos < 500) {
    pronostico.push({
      dato: 'Mediana de sobrevida con menos de 500 neutrófilos',
      valor: '13 vs 106 días',
      fuente: 'Shirodkar 2026, 1.083 pacientes con tumores sólidos y shock séptico',
    });
  }

  // --- Alertas ---
  const alerts: M18Output['alerts'] = [];

  if (obstetrica && q.puntaje >= 2 && (qp?.puntaje ?? 0) === 0) {
    alerts.push({
      tono: 'cyan',
      titulo: 'El qSOFA da positivo y el qSOFA-P no',
      detalle:
        'Es exactamente el problema del puntaje estándar en esta población: con la fisiología del embarazo se positiviza sin discriminar. El AUC del qSOFA fue 0,54 frente a 0,77 del qSOFA-P.',
    });
  }
  // Un puntaje negativo nunca descarta: es el error del Caso 1.
  if (obstetrica && (qp?.puntaje ?? 0) === 0 && (raw.lactato > 2 || raw.fc > 120)) {
    alerts.push({
      tono: 'red',
      titulo: 'Puntaje negativo con hipoperfusión: igual es sepsis materna',
      detalle: `El qSOFA-P discrimina mejor, pero ningún puntaje descarta nada. ${
        raw.lactato > 2 ? `Un lactato de ${raw.lactato.toFixed(1)} ` : `Una frecuencia de ${raw.fc} lpm `
      }no la explica el embarazo: hay disfunción orgánica. Antibiótico IV inmediato, cultivos, fluidos y Obstetricia.`,
    });
  }
  if (obstetrica && (qp?.puntaje ?? 0) >= 1) {
    alerts.push({
      tono: 'red',
      titulo: `qSOFA-P positivo (${qp?.puntaje} de 2)`,
      detalle:
        'Tratar como sepsis materna: antibiótico IV inmediato, hemocultivos y urocultivo, fluidos, y aviso a Obstetricia. El antibiótico no espera a los cultivos.',
    });
  }
  if (p === 'embarazada' && raw.trimestre >= 2 && raw.decubitoSupino) {
    alerts.push({
      tono: 'red',
      titulo: 'Acostada boca arriba después de la mitad del embarazo',
      detalle:
        'El útero comprime la vena cava y la hipotensión empeora por una razón mecánica, no séptica. Desplazarlo a la izquierda antes de interpretar la presión.',
    });
  }

  if (p === 'neutropenico') {
    if (raw.temperatura >= 38 && raw.neutrofilos < 500) {
      alerts.push({
        tono: 'red',
        titulo: `Neutropenia febril: ${raw.neutrofilos}/µL`,
        detalle:
          'Antibiótico de amplio espectro ya. No hay que esperar la radiografía, el sedimento ni los cultivos: sin neutrófilos esos estudios pueden ser normales con una infección grave en curso.',
      });
    }
    if (raw.horasAfebril >= 72 && raw.temperatura < 38) {
      alerts.push({
        tono: 'cyan',
        titulo: `${raw.horasAfebril} h afebril: se puede suspender el empírico`,
        detalle:
          'How Long: en la fiebre sin foco, suspender tras 72 h afebril y con recuperación clínica, sin esperar los 500 neutrófilos, dio más días libres de antibiótico (16,1 vs 13,6) y fue seguro (1 muerte frente a 3). Coincide con ECIL-4.',
      });
    }
    if (raw.neutrofilos < 100) {
      alerts.push({
        tono: 'amber',
        titulo: 'Neutropenia profunda',
        detalle:
          'Cuanto más profunda, peor: con menos de 500 neutrófilos la mediana de sobrevida fue de 13 días frente a 106 con neutropenia leve a moderada, con más bacteriemias.',
      });
    }
  }

  if (p === 'cirrotico') {
    if (raw.ascitis && raw.pmnAscitis >= 250) {
      alerts.push({
        tono: 'red',
        titulo: `PBE confirmada: ${raw.pmnAscitis} polimorfonucleares/mm³`,
        detalle:
          'Además del antibiótico, albúmina IV 1,5 g/kg al diagnóstico y 1 g/kg el día 3. En Sort 1999 bajó la insuficiencia renal del 33% al 10% y la mortalidad hospitalaria del 29% al 10%. Es la indicación de albúmina mejor respaldada en el cirrótico infectado.',
      });
    }
    if (raw.ascitis && raw.pmnAscitis < 250) {
      alerts.push({
        tono: 'amber',
        titulo: 'No es PBE por el recuento, y la albúmina ya no está respaldada',
        detalle:
          'Fuera de la PBE, el beneficio de la albúmina es incierto: en la Cochrane 2026 (11 ECA, 1.273 cirróticos) la mortalidad fue RR 0,80 (0,53–1,20) con certeza muy baja. Hay que buscar el foco en otro lado.',
      });
    }
    if (raw.child === 'C') {
      alerts.push({
        tono: 'amber',
        titulo: 'Child C: evaluar ACLF con el CLIF-SOFA',
        detalle:
          'La sepsis fue el gatillo de la ACLF en el 62,8% de los cirróticos alcohólicos en UTI, y la mortalidad hospitalaria fue del 60,2% cuando el gatillo era infeccioso frente al 20,0% cuando no.',
      });
    }
  }

  if (p === 'anciano') {
    if (pam >= 60 && pam <= 70 && raw.lactato <= 2) {
      alerts.push({
        tono: 'ok',
        titulo: 'PAM en el rango del 65 trial',
        detalle:
          'Con la perfusión andando, no hace falta subir el vasopresor. Cada escalón de más es exposición sin beneficio demostrado en esta población.',
      });
    }
    if (raw.cfs >= 5) {
      alerts.push({
        tono: 'cyan',
        titulo: `Clinical Frailty Scale ${raw.cfs}: fragilidad`,
        detalle:
          'La CFS gradúa la función de las 2 semanas previas a la enfermedad aguda, no la edad. Sirve para la conversación sobre expectativas y para planear la rehabilitación, no para decidir el ingreso.',
      });
    }
  }

  if (p === 'estandar') {
    alerts.push({
      tono: 'cyan',
      titulo: 'La población de los ensayos',
      detalle:
        'Acá los puntajes y los umbrales funcionan como fueron validados. Cambiá de población arriba para ver cuánto se mueve la lectura de los mismos signos vitales.',
    });
  }

  return {
    nombrePoblacion: POBLACION_NOMBRE[p],
    fisiologia: FISIOLOGIA[p],
    qsofa: q.puntaje,
    qsofaItems: q.items,
    usaQsofaP: obstetrica,
    qsofaP: qp ? qp.puntaje : null,
    qsofaPItems: qp ? qp.items : null,
    pam,
    presionPulso,
    signos,
    recordatorios,
    pronostico,
    alerts,
  };
}

export interface M18Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M18Inputs;
}

const BASE: M18Inputs = {
  poblacion: 'estandar',
  fc: 104,
  pas: 96,
  pad: 58,
  fr: 24,
  temperatura: 38.4,
  lactato: 2.6,
  mentalAlterado: false,
  trimestre: 3,
  decubitoSupino: false,
  neutrofilos: 4000,
  colonizadoResistentes: false,
  horasAfebril: 0,
  edad: 58,
  cfs: 2,
  child: 'B',
  ascitis: false,
  pmnAscitis: 120,
};

export const M18_PRESETS: M18Preset[] = [
  {
    id: 'estandar',
    nombre: 'Adulto estándar',
    resumen: 'El punto de comparación: los mismos signos vitales leídos como en los ensayos.',
    inputs: { ...BASE },
  },
  {
    id: 'embarazada',
    nombre: 'Embarazada de 32 semanas',
    resumen: 'Disuria, FC 125, FR 30, 88/50 y lactato 3,8, acostada boca arriba. El error del Caso 1.',
    inputs: {
      ...BASE,
      poblacion: 'embarazada',
      trimestre: 3,
      decubitoSupino: true,
      fc: 125,
      pas: 88,
      pad: 50,
      fr: 30,
      temperatura: 38.6,
      lactato: 3.8,
    },
  },
  {
    id: 'puerpera',
    nombre: 'Puérpera día 4 poscesárea',
    resumen: 'FR 36 y sistólica 84, lúcida: el qSOFA-P da positivo donde el estándar no ayuda.',
    inputs: {
      ...BASE,
      poblacion: 'puerpera',
      fc: 118,
      pas: 84,
      pad: 52,
      fr: 36,
      temperatura: 38.9,
      lactato: 3.1,
    },
  },
  {
    id: 'neutropenico',
    nombre: 'Neutropenia febril, 200/µL',
    resumen: 'Leucemia en quimioterapia, estable, sin colonización conocida: estrategia de escalada.',
    inputs: {
      ...BASE,
      poblacion: 'neutropenico',
      neutrofilos: 200,
      temperatura: 38.6,
      fc: 110,
      pas: 108,
      pad: 64,
      fr: 20,
      lactato: 1.6,
    },
  },
  {
    id: 'neutropenico_afebril',
    nombre: '72 h afebril con 300 neutrófilos',
    resumen: 'El mismo paciente, estable y sin foco. How Long permite cortar sin esperar la aplasia.',
    inputs: {
      ...BASE,
      poblacion: 'neutropenico',
      neutrofilos: 300,
      temperatura: 36.8,
      horasAfebril: 76,
      fc: 84,
      pas: 118,
      pad: 70,
      fr: 16,
      lactato: 1.1,
    },
  },
  {
    id: 'anciano',
    nombre: 'Anciano frágil, 81 años',
    resumen: 'Shock urinario, CFS 5, PAM 62 con noradrenalina y lactato en descenso. El 65 trial.',
    inputs: {
      ...BASE,
      poblacion: 'anciano',
      edad: 81,
      cfs: 5,
      fc: 92,
      pas: 104,
      pad: 41,
      fr: 20,
      temperatura: 36.5,
      lactato: 1.8,
      mentalAlterado: true,
    },
  },
  {
    id: 'cirrotico_pbe',
    nombre: 'Cirrótico Child C con PBE',
    resumen: 'Ascitis a tensión, 900 polimorfonucleares y encefalopatía. El error del Caso 3.',
    inputs: {
      ...BASE,
      poblacion: 'cirrotico',
      child: 'C',
      ascitis: true,
      pmnAscitis: 900,
      fc: 108,
      pas: 86,
      pad: 48,
      fr: 24,
      temperatura: 38.2,
      lactato: 4.2,
      mentalAlterado: true,
    },
  },
  {
    id: 'trasplantado',
    nombre: 'Trasplantado hepático con sepsis',
    resumen: 'Inmunosuprimido no es sinónimo de peor pronóstico: la cohorte alemana lo dio vuelta.',
    inputs: {
      ...BASE,
      poblacion: 'trasplantado',
      fc: 102,
      pas: 98,
      pad: 56,
      fr: 22,
      temperatura: 37.6,
      lactato: 2.2,
    },
  },
];
