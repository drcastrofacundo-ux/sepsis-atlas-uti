/**
 * Motor del simulador del M17: el tablero de soporte.
 *
 * Cuatro soportes de todos los dias en una sola pantalla: glucemia, nutricion,
 * sangre y estomago. En los cuatro, los ensayos grandes mostraron que la
 * estrategia mas prudente iguala o supera a la mas agresiva.
 *
 * Es material de estudio, no una herramienta de decision: los numeros que
 * devuelve son lectura didactica de la evidencia citada en el modulo.
 */

export type Muestra = 'capilar' | 'arterial' | 'laboratorio';
export type EstadoEnteral = 'activa' | 'interrumpida' | 'ninguna';

export interface M17Inputs {
  // Glucemia
  glucemia: number;
  glucemiaPrevia: number;
  muestra: Muestra;
  diabetico2: boolean;
  corticoides: boolean;
  insulinaUh: number;
  // Contexto
  pesoKg: number;
  diaUti: number;
  vasopresores: boolean;
  dosisNad: number; // ug/kg/min
  insufRenal: boolean;
  vitaminaC: boolean;
  enteral: EstadoEnteral;
  fosforo: number; // mg/dL
  // Sangre
  hb: number;
  plaquetas: number; // x1000/uL
  colocaCateterCentral: boolean;
  isquemiaOSangrado: boolean;
  // Estomago
  coagulopatia: boolean;
  hepatopatia: boolean;
  ventilacion: boolean;
  recibeProfilaxis: boolean;
  pasaASala: boolean;
}

export type Tono = 'ok' | 'amber' | 'red' | 'cyan';
export type FaseNutricional = 'aguda_temprana' | 'aguda_tardia' | 'recuperacion';

export interface Bloque {
  titulo: string;
  tono: Tono;
  veredicto: string;
  detalle: string;
}

export interface M17Output {
  // Glucemia
  iniciarInsulina: boolean;
  metaTexto: string;
  nivelHipoglucemia: 0 | 1 | 2;
  variabilidad: number;
  muestraConfiable: boolean;
  motivoMuestra: string | null;
  transicion: { requerimiento24h: number; basalUi: number; glarginaTempranaUi: number };
  // Nutricion
  fase: FaseNutricional;
  restriccionInicial: boolean;
  kcalKgDia: number;
  kcalDia: number;
  proteinaGKgDia: [number, number];
  proteinaGDia: [number, number];
  realimentacion: boolean;
  // Sangre
  transfundirGr: boolean;
  transfundirPlaquetas: boolean;
  // Estomago
  profilaxisIndicada: boolean;
  factoresSangrado: Array<{ nombre: string; presente: boolean; firme: boolean }>;
  bloques: Bloque[];
  alerts: Array<{ tono: 'red' | 'amber' | 'cyan'; titulo: string; detalle: string }>;
}

/** Niveles de hipoglucemia de la ADA 2026 (PMID 41358892). */
export function nivelHipoglucemia(glucemia: number): 0 | 1 | 2 {
  if (glucemia < 54) return 2;
  if (glucemia < 70) return 1;
  return 0;
}

/** Fase nutricional segun el dia de UTI (ESPEN 2023, PMID 37517372). */
export function faseNutricional(diaUti: number): FaseNutricional {
  if (diaUti <= 3) return 'aguda_temprana';
  if (diaUti <= 7) return 'aguda_tardia';
  return 'recuperacion';
}

/**
 * Transicion del goteo a la basal subcutanea. 50% del requerimiento de 24 h,
 * extrapolado de las ultimas horas estables (Dungan PMID 21550950, Doolin
 * PMID 26908569). No esta validado en la UTI medica.
 */
export function transicionSubcutanea(insulinaUh: number, pesoKg: number) {
  const requerimiento24h = Math.max(0, insulinaUh) * 24;
  return {
    requerimiento24h,
    basalUi: Math.round(requerimiento24h * 0.5),
    glarginaTempranaUi: Math.round(0.25 * Math.max(1, pesoKg)),
  };
}

export function simulateM17(raw: M17Inputs): M17Output {
  // --- Glucemia ---
  const nivel = nivelHipoglucemia(raw.glucemia);
  const iniciarInsulina = raw.glucemia >= 180;
  const variabilidad = Math.abs(raw.glucemia - raw.glucemiaPrevia);

  const motivosMuestra: string[] = [];
  if (raw.vasopresores) motivosMuestra.push('vasopresores');
  if (raw.insufRenal) motivosMuestra.push('insuficiencia renal');
  if (raw.vitaminaC) motivosMuestra.push('vitamina C');
  const muestraConfiable = raw.muestra !== 'capilar' || motivosMuestra.length === 0;
  const motivoMuestra = muestraConfiable ? null : motivosMuestra.join(', ');

  const transicion = transicionSubcutanea(raw.insulinaUh, raw.pesoKg);

  // --- Nutricion ---
  const fase = faseNutricional(raw.diaUti);
  const shockAlto = raw.vasopresores && raw.dosisNad >= 0.3;
  const restriccionInicial = fase === 'aguda_temprana' || shockAlto;
  const kcalKgDia = restriccionInicial ? 6 : fase === 'aguda_tardia' ? 20 : 25;
  const proteinaGKgDia: [number, number] = restriccionInicial ? [0.2, 0.4] : [1.0, 1.3];
  const peso = Math.max(1, raw.pesoKg);
  const realimentacion = raw.fosforo < 2 && raw.enteral !== 'ninguna';

  // --- Sangre ---
  const transfundirGr = raw.hb < 7 || (raw.hb < 9 && raw.isquemiaOSangrado);
  const transfundirPlaquetas =
    raw.colocaCateterCentral && raw.plaquetas >= 10 && raw.plaquetas < 50;

  // --- Estomago ---
  const factoresSangrado = [
    { nombre: 'Shock', presente: raw.vasopresores, firme: true },
    { nombre: 'Coagulopatía', presente: raw.coagulopatia, firme: true },
    { nombre: 'Hepatopatía crónica', presente: raw.hepatopatia, firme: true },
    { nombre: 'Ventilación mecánica sola', presente: raw.ventilacion, firme: false },
    { nombre: 'Nutrición enteral (protege)', presente: raw.enteral === 'activa', firme: false },
  ];
  const profilaxisIndicada = raw.vasopresores || raw.coagulopatia || raw.hepatopatia;

  // --- Alertas ---
  const alerts: M17Output['alerts'] = [];

  if (nivel === 2) {
    alerts.push({
      tono: 'red',
      titulo: `Hipoglucemia nivel 2: ${raw.glucemia} mg/dL`,
      detalle:
        'Por debajo de 54 mg/dL es el umbral neuroglucopénico (ADA 2026). Cortar el goteo, dar dextrosa IV y controlar cada 15 min hasta que la insulina activa se agote.',
    });
  } else if (nivel === 1) {
    alerts.push({
      tono: 'amber',
      titulo: `Hipoglucemia nivel 1: ${raw.glucemia} mg/dL`,
      detalle:
        'Entre 54 y 69 mg/dL. En NICE-SUGAR, la meta de 81–108 multiplicó por 13 la hipoglucemia grave y aumentó la mortalidad (27,5% vs 24,9%).',
    });
  }

  if (raw.enteral === 'interrumpida' && raw.insulinaUh > 0) {
    alerts.push({
      tono: 'red',
      titulo: 'Se cortó la enteral con el goteo de insulina activo',
      detalle:
        'Es el gatillo más frecuente de hipoglucemia en UTI. Hay que bajar o suspender el goteo, adelantar el control y cubrir con dextrosa mientras dure la insulina activa.',
    });
  }

  if (!muestraConfiable) {
    alerts.push({
      tono: 'amber',
      titulo: 'El glucómetro capilar no es confiable acá',
      detalle: `Con ${motivoMuestra}, el capilar concordó mal con el laboratorio en un metaanálisis de 32 estudios (PMID 37474427). Con línea arterial, se mide en sangre arterial.`,
    });
  }

  if (raw.corticoides && raw.insulinaUh > 0) {
    alerts.push({
      tono: 'cyan',
      titulo: 'Hidrocortisona en curso: anticipar el descenso',
      detalle:
        'Los corticoides del shock suben el requerimiento de insulina. Al bajarlos o suspenderlos, el requerimiento cae y la hipoglucemia aparece si el goteo no se ajusta antes.',
    });
  }

  if (variabilidad >= 70) {
    alerts.push({
      tono: 'amber',
      titulo: `Variabilidad glucémica de ${variabilidad} mg/dL entre controles`,
      detalle:
        'La variabilidad se asocia a mortalidad igual que la hiperglucemia y la hipoglucemia (SSC 2021). Cumplir el intervalo de control es lo que más la bajó en la familia Yale.',
    });
  }

  if (realimentacion) {
    alerts.push({
      tono: 'red',
      titulo: `Fósforo ${raw.fosforo.toFixed(1)} mg/dL: síndrome de realimentación`,
      detalle:
        'Doig 2015: restringir las calorías de forma protocolizada al detectar el fósforo bajo subió la sobrevida a 60 días (91% vs 78%). Reponer fósforo, potasio y magnesio.',
    });
  }

  if (shockAlto && !restriccionInicial) {
    alerts.push({
      tono: 'amber',
      titulo: 'Vasopresores en dosis alta con aporte pleno',
      detalle:
        'En NUTRIREA-2, la enteral plena en el shock dio más isquemia intestinal (2% vs <1%; HR 3,84). El intestino hipoperfundido no tolera calorías.',
    });
  }

  if (!restriccionInicial && raw.insufRenal) {
    alerts.push({
      tono: 'cyan',
      titulo: 'Mirar la urea con la proteína',
      detalle:
        'En RE-EFFORT, el mayor riesgo del grupo de proteína alta se explicaría por más actividad del ciclo de la urea. Con lesión renal conviene seguir la urea antes de subir el aporte.',
    });
  }

  if (raw.hb >= 7 && raw.hb < 9 && !raw.isquemiaOSangrado) {
    alerts.push({
      tono: 'cyan',
      titulo: `Hemoglobina ${raw.hb.toFixed(1)} g/dL: la zona de la tentación`,
      detalle:
        'En TRISS (shock séptico), el umbral de 7 tuvo la misma mortalidad a 90 días (43,0% vs 45,0%) y el grupo restrictivo recibió una mediana de 1 unidad frente a 4.',
    });
  }

  if (raw.colocaCateterCentral && raw.plaquetas < 10) {
    alerts.push({
      tono: 'amber',
      titulo: 'Plaquetas por debajo del rango de PACER',
      detalle:
        'PACER aleatorizó entre 10.000 y 50.000 plaquetas. Por debajo de 10.000 no hay dato del ensayo: se transfunde por el umbral general de la plaquetopenia grave.',
    });
  }

  if (raw.recibeProfilaxis && !profilaxisIndicada) {
    alerts.push({
      tono: 'red',
      titulo: 'Profilaxis sin factor de riesgo firme',
      detalle:
        'La SCCM/ASHP 2024 solo la indica con shock, coagulopatía o hepatopatía crónica. Con enteral tolerada, un metaanálisis no mostró menos sangrado y sí más neumonía (RR 1,53).',
    });
  }

  if (raw.recibeProfilaxis && raw.pasaASala) {
    alerts.push({
      tono: 'amber',
      titulo: 'Pasa a sala con la profilaxis puesta',
      detalle:
        'La guía pide suspenderla antes del pase a sala, justamente para que no termine como IBP crónico de por vida.',
    });
  }

  // --- Bloques ---
  const bloques: Bloque[] = [
    {
      titulo: 'Glucemia',
      tono: nivel > 0 ? 'red' : iniciarInsulina ? 'amber' : 'ok',
      veredicto:
        nivel > 0
          ? `Hipoglucemia nivel ${nivel}: corregir ahora`
          : iniciarInsulina
            ? 'Iniciar insulina IV por protocolo · meta 140–180 mg/dL'
            : raw.glucemia >= 140
              ? 'En meta (140–180): seguir controlando'
              : 'Por debajo de 140: sin indicación de insulina',
      detalle: iniciarInsulina
        ? 'SSC 2021 y ADA 2026: se inicia con 180 o más confirmado, con infusión titulada por un protocolo validado y controles horarios mientras haya inestabilidad.'
        : 'La meta no es la normoglucemia. En NICE-SUGAR, apuntar a 81–108 aumentó la mortalidad; en TGC-fast, el control estricto sin parenteral precoz no aportó nada.',
    },
    {
      titulo: 'Nutrición',
      tono: realimentacion ? 'red' : restriccionInicial ? 'amber' : 'ok',
      veredicto: `${kcalKgDia} kcal/kg/día (${Math.round(kcalKgDia * peso)} kcal) · proteína ${proteinaGKgDia[0].toFixed(1)}–${proteinaGKgDia[1].toFixed(1)} g/kg/día`,
      detalle: restriccionInicial
        ? 'NUTRIREA-3: 6 kcal/kg/día y 0,2–0,4 g/kg/día la primera semana en el shock dieron igual mortalidad, alta de UTI más rápida y menos isquemia intestinal, vómitos y diarrea.'
        : 'Fuera de la fase aguda se progresa el aporte. La proteína alta no acortó el tiempo al alta con vida en EFFORT Protein.',
    },
    {
      titulo: 'Sangre',
      tono: transfundirGr || transfundirPlaquetas ? 'amber' : 'ok',
      veredicto: transfundirGr
        ? raw.hb < 7
          ? `Transfundir: Hb ${raw.hb.toFixed(1)} < 7 g/dL`
          : `Transfundir por isquemia o sangrado activo con Hb ${raw.hb.toFixed(1)}`
        : `No transfundir con Hb ${raw.hb.toFixed(1)} g/dL`,
      detalle: transfundirPlaquetas
        ? `Antes del catéter central, con ${raw.plaquetas}.000 plaquetas sí se transfunde: en PACER, no hacerlo dio más sangrado por el catéter (11,9% vs 4,8%) y no cumplió la no inferioridad.`
        : 'Umbral restrictivo de 7 g/dL (TRISS, AABB 2023). Las excepciones son la isquemia miocárdica activa y el sangrado activo.',
    },
    {
      titulo: 'Estómago',
      tono: profilaxisIndicada ? 'amber' : raw.recibeProfilaxis ? 'red' : 'ok',
      veredicto: profilaxisIndicada
        ? 'Profilaxis indicada (IBP o anti-H2 en dosis baja)'
        : 'Sin indicación de profilaxis',
      detalle: profilaxisIndicada
        ? 'REVISE: el pantoprazol bajó el sangrado clínicamente importante (1,0% vs 3,5%) sin cambiar la mortalidad. Se suspende cuando el factor de riesgo desaparece.'
        : 'La ventilación sola no es un factor de riesgo firme y la enteral probablemente protege (SCCM/ASHP 2024).',
    },
  ];

  return {
    iniciarInsulina,
    metaTexto: '140–180 mg/dL',
    nivelHipoglucemia: nivel,
    variabilidad,
    muestraConfiable,
    motivoMuestra,
    transicion,
    fase,
    restriccionInicial,
    kcalKgDia,
    kcalDia: Math.round(kcalKgDia * peso),
    proteinaGKgDia,
    proteinaGDia: [
      Math.round(proteinaGKgDia[0] * peso * 10) / 10,
      Math.round(proteinaGKgDia[1] * peso * 10) / 10,
    ],
    realimentacion,
    transfundirGr,
    transfundirPlaquetas,
    profilaxisIndicada,
    factoresSangrado,
    bloques,
    alerts,
  };
}

export interface M17Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M17Inputs;
}

const BASE: M17Inputs = {
  glucemia: 210,
  glucemiaPrevia: 190,
  muestra: 'arterial',
  diabetico2: false,
  corticoides: true,
  insulinaUh: 4,
  pesoKg: 75,
  diaUti: 2,
  vasopresores: true,
  dosisNad: 0.35,
  insufRenal: false,
  vitaminaC: false,
  enteral: 'activa',
  fosforo: 3.2,
  hb: 8.2,
  plaquetas: 180,
  colocaCateterCentral: false,
  isquemiaOSangrado: false,
  coagulopatia: false,
  hepatopatia: false,
  ventilacion: true,
  recibeProfilaxis: true,
  pasaASala: false,
};

export const M17_PRESETS: M17Preset[] = [
  {
    id: 'shock_dia2',
    nombre: 'Shock séptico, día 2',
    resumen: 'Noradrenalina 0,35, hidrocortisona, glucemia 210, Hb 8,2. El tablero completo en fase aguda.',
    inputs: { ...BASE },
  },
  {
    id: 'enteral_cortada',
    nombre: 'Se cortó la enteral a las 3 AM',
    resumen: 'Goteo de insulina a 6 U/h, enteral suspendida por residuo. El error del Caso 1.',
    inputs: { ...BASE, insulinaUh: 6, enteral: 'interrumpida', glucemia: 95, glucemiaPrevia: 165 },
  },
  {
    id: 'capilar_enganosa',
    nombre: 'Capilar engañoso',
    resumen: 'Vasopresores, lesión renal y vitamina C: el glucómetro capilar no sirve acá.',
    inputs: {
      ...BASE,
      muestra: 'capilar',
      insufRenal: true,
      vitaminaC: true,
      glucemia: 230,
      glucemiaPrevia: 150,
    },
  },
  {
    id: 'ventilado_sin_riesgo',
    nombre: 'Ventilado sin factores de riesgo',
    resumen: 'Sin shock ni coagulopatía, con enteral tolerada, y pasa a sala con pantoprazol. El error del Caso 3.',
    inputs: {
      ...BASE,
      vasopresores: false,
      dosisNad: 0,
      corticoides: false,
      insulinaUh: 0,
      glucemia: 140,
      glucemiaPrevia: 150,
      diaUti: 6,
      hb: 9.4,
      recibeProfilaxis: true,
      pasaASala: true,
    },
  },
  {
    id: 'realimentacion',
    nombre: 'Fósforo bajo al reiniciar',
    resumen: 'Día 5, se reinició la nutrición y el fósforo cayó a 1,4: síndrome de realimentación.',
    inputs: {
      ...BASE,
      diaUti: 5,
      vasopresores: false,
      dosisNad: 0,
      fosforo: 1.4,
      glucemia: 160,
      glucemiaPrevia: 170,
      insulinaUh: 2,
      recibeProfilaxis: false,
    },
  },
  {
    id: 'cateter_plaquetas',
    nombre: 'Catéter central con 25.000 plaquetas',
    resumen: 'Coagulopatía de la sepsis y hay que poner una vía central. PACER cambió la respuesta.',
    inputs: {
      ...BASE,
      plaquetas: 25,
      colocaCateterCentral: true,
      coagulopatia: true,
      hb: 6.6,
    },
  },
];
