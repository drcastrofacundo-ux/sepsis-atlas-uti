/**
 * Motor del simulador del M14: el reloj del foco.
 *
 * Tres preguntas de la primera hora:
 *   1. Los hemocultivos, cuanto rinden segun cuantos sets, que volumen y si se
 *      tomaron antes o despues del antibiotico.
 *   2. La procalcitonina leida con su contexto.
 *   3. El control de foco: cuan urgente es segun donde esta.
 *
 * Material de estudio, no una herramienta de decision.
 */

export type VolumenSet = 5 | 10 | 20;
export type ContextoPct = 'ninguno' | 'posoperatorio' | 'trauma' | 'pancreatitis' | 'quemado';
export type Foco =
  | 'perforacion'
  | 'fascitis'
  | 'urinario_obstructivo'
  | 'colangitis_moderada'
  | 'colangitis_grave'
  | 'absceso'
  | 'cateter'
  | 'necrosis_pancreatica'
  | 'neumonia';

export interface M14Inputs {
  sets: 1 | 2 | 3;
  volumenPorSet: VolumenSet;
  antesDelAntibiotico: boolean;
  otrosCultivos: boolean;
  pct: number;
  contextoPct: ContextoPct;
  foco: Foco;
  shock: boolean;
  horasHastaControl: number;
}

export type Urgencia = 'maxima' | 'alta' | 'moderada' | 'diferido' | 'sin_control';

export interface M14Output {
  rendimientoBase: number;
  rendimientoFinal: number;
  factorVolumen: number;
  identificacionConOtrosCultivos: number | null;
  pctLectura: { tono: 'ok' | 'amber' | 'red'; titulo: string; detalle: string };
  urgencia: Urgencia;
  urgenciaTexto: string;
  focoDetalle: string;
  duracionAtb: string;
  dentroDeVentana: boolean;
  alerts: Array<{ tono: 'red' | 'amber' | 'cyan'; titulo: string; detalle: string }>;
}

/** Lee 2007: con 20 mL por set, 1 set detecta 73,1%, 2 el 89,7% y 3 el 98,2%. */
export const RENDIMIENTO_LEE: Record<1 | 2 | 3, number> = { 1: 73.1, 2: 89.7, 3: 98.2 };

/**
 * Aproximacion didactica del efecto del volumen. El estandar es ~20 mL por set
 * (10 mL por frasco) y un frasco con poca sangre es la causa mas comun de falso
 * negativo, pero estos factores no son una cifra publicada.
 */
export const FACTOR_VOLUMEN: Record<VolumenSet, number> = { 20: 1, 10: 0.8, 5: 0.6 };

/** Cheng 2019 (FABLED): la sensibilidad tras el antibiotico fue del 52,9%. */
export const SENSIBILIDAD_POST_ATB = 0.529;

const FOCOS: Record<Foco, { nombre: string; urgencia: Urgencia; texto: string; detalle: string; duracion: string }> = {
  perforacion: {
    nombre: 'Perforación / peritonitis secundaria',
    urgencia: 'alta',
    texto: 'Quirófano cuanto antes',
    detalle: 'Reitz 2022 asoció el control antes de 6 h a menor mortalidad ajustada (aOR 0,71), con más efecto en el foco abdominal (aOR 0,56).',
    duracion: 'STOP-IT: 4 ± 1 días tras un control de foco adecuado, igual que 8 días (21,8% vs 22,3%).',
  },
  fascitis: {
    nombre: 'Infección necrotizante de partes blandas',
    urgencia: 'maxima',
    texto: 'Exploración quirúrgica ya',
    detalle: 'Operar dentro de las 6 h se asoció a 19% de mortalidad frente a 32% (Nawijn 2020). Un LRINEC < 6 no descarta: sensibilidad del 68%.',
    duracion: 'Según evolución y desbridamientos. Si es estreptococo del grupo A, sumar clindamicina al betalactámico.',
  },
  urinario_obstructivo: {
    nombre: 'Pielonefritis obstructiva',
    urgencia: 'alta',
    texto: 'Drenaje urgente (nefrostomía o doble J)',
    detalle: 'El antibiótico no resuelve una vía obstruida. Reitz 2022: el apuro pesa sobre todo en abdomen y partes blandas.',
    duracion: 'Se acorta una vez desobstruido; en bacteriemia, BALANCE avala 7 días.',
  },
  colangitis_moderada: {
    nombre: 'Colangitis aguda moderada (TG18 II)',
    urgencia: 'moderada',
    texto: 'Drenaje biliar precoz',
    detalle: 'Tokyo Guidelines 2018: en la moderada, drenaje precoz; en la leve alcanza con antibióticos.',
    duracion: 'Se acorta tras el drenaje; en bacteriemia, BALANCE avala 7 días.',
  },
  colangitis_grave: {
    nombre: 'Colangitis aguda grave (TG18 III)',
    urgencia: 'alta',
    texto: 'Drenaje apenas se estabilice',
    detalle: 'Tokyo Guidelines 2018: en la grave, drenaje apenas el paciente se estabiliza con soporte respiratorio y hemodinámico. No antes de reanimar.',
    duracion: 'Se acorta tras el drenaje; en bacteriemia, BALANCE avala 7 días.',
  },
  absceso: {
    nombre: 'Absceso (hepático, renal, psoas, intraabdominal)',
    urgencia: 'alta',
    texto: 'Drenaje percutáneo guiado por imágenes',
    detalle: 'La SSC 2021 pide el procedimiento menos invasivo que resuelva el foco: percutáneo antes que cirugía abierta cuando ambos sirven.',
    duracion: 'STOP-IT: 4 ± 1 días si el control fue adecuado.',
  },
  cateter: {
    nombre: 'Catéter venoso central infectado',
    urgencia: 'alta',
    texto: 'Retirar, tras asegurar otro acceso',
    detalle: 'La SSC 2021 pide retirar el acceso vascular posiblemente infectado después de asegurar otro. El biofilm no se cura con antibióticos.',
    duracion: 'Según germen; en bacteriemia no complicada, BALANCE avala 7 días.',
  },
  necrosis_pancreatica: {
    nombre: 'Necrosis pancreática infectada',
    urgencia: 'diferido',
    texto: 'Antibióticos y esperar el encapsulamiento',
    detalle: 'POINTER: drenar dentro de las 24 h no fue mejor que esperar (complicaciones 57 vs 58), sumó intervenciones (4,4 vs 2,6) y el 39% del grupo diferido se curó solo con antibióticos.',
    duracion: 'Prolongada, guiada por la evolución y el step-up.',
  },
  neumonia: {
    nombre: 'Neumonía sin colección',
    urgencia: 'sin_control',
    texto: 'No hay foco drenable',
    detalle: 'Sin empiema ni absceso no hay control de foco quirúrgico. Si hay derrame, hay que puncionarlo para descartar empiema.',
    duracion: 'Neumonía asociada a la ventilación: 8 días fueron iguales a 15 (Chastre), y un curso individualizado de ~6 días fue no inferior (REGARD-VAP).',
  },
};

export function simulateM14(raw: M14Inputs): M14Output {
  const base = RENDIMIENTO_LEE[raw.sets];
  const factorVolumen = FACTOR_VOLUMEN[raw.volumenPorSet];
  let rendimiento = base * factorVolumen;
  if (!raw.antesDelAntibiotico) rendimiento *= SENSIBILIDAD_POST_ATB;

  // Cheng 2019: sumando cultivos de otros sitios se identifico el germen en el 67,6%.
  const identificacionConOtrosCultivos = raw.otrosCultivos
    ? Math.min(99, rendimiento + (67.6 - 31.4) * (raw.antesDelAntibiotico ? 0.5 : 0.8))
    : null;

  const contextoSube = raw.contextoPct !== 'ninguno';
  let pctLectura: M14Output['pctLectura'];
  if (raw.pct >= 2 && contextoSube) {
    pctLectura = {
      tono: 'amber',
      titulo: `PCT ${raw.pct.toFixed(1)} ng/mL, pero hay un contexto que la sube sola`,
      detalle:
        'La procalcitonina sube sin infección en cirugía mayor, trauma, shock, pancreatitis, quemados y algunos tumores. Acá no confirma infección bacteriana: hay que leerla con la clínica y su tendencia.',
    };
  } else if (raw.pct >= 2) {
    pctLectura = {
      tono: 'amber',
      titulo: `PCT ${raw.pct.toFixed(1)} ng/mL`,
      detalle:
        'Compatible con infección bacteriana, pero su especificidad en UTI es de 0,65. No reemplaza al cultivo ni define el foco. Sirve sobre todo para decidir cuándo suspender.',
    };
  } else if (raw.pct < 0.5 && raw.shock) {
    pctLectura = {
      tono: 'red',
      titulo: `PCT ${raw.pct.toFixed(2)} ng/mL en shock: no sirve para no tratar`,
      detalle:
        'La SSC 2021 recomienda en contra de usar la PCT para decidir el inicio, y en PRONTO no cambió la prescripción. En el shock el antibiótico va igual, y en las primeras horas la PCT puede no haber subido todavía.',
    };
  } else {
    pctLectura = {
      tono: 'ok',
      titulo: `PCT ${raw.pct.toFixed(2)} ng/mL`,
      detalle:
        'Valor bajo. Útil para acortar antibióticos (ADAPT-Sepsis: −0,88 días; metaanálisis 2026: −2 días), no para decidir no empezarlos.',
    };
  }

  const f = FOCOS[raw.foco];
  const ventana = raw.foco === 'fascitis' ? 6 : 6;
  const dentroDeVentana = raw.horasHastaControl <= ventana;

  const alerts: M14Output['alerts'] = [];
  if (raw.sets < 2) {
    alerts.push({
      tono: 'amber',
      titulo: 'Un solo set de hemocultivos',
      detalle: 'Un set detecta el 73% de las bacteriemias; dos, el 90%; tres, el 98% (Lee 2007). Y un único positivo con un germen de piel no se puede interpretar.',
    });
  }
  if (raw.volumenPorSet < 20) {
    alerts.push({
      tono: 'amber',
      titulo: `${raw.volumenPorSet} mL por set`,
      detalle: 'El estándar es ~20 mL por set (10 mL por frasco en adultos). Un frasco con poca sangre es la causa más común de un falso negativo.',
    });
  }
  if (!raw.antesDelAntibiotico) {
    alerts.push({
      tono: 'cyan',
      titulo: 'Cultivos tomados después del antibiótico',
      detalle: 'La positividad cae de 31,4% a 19,4% y la sensibilidad queda en 52,9% (Cheng 2019). Igual se toman, cuanto antes: la mitad se sigue detectando. Nunca se suspende el antibiótico para cultivar.',
    });
  }
  if (raw.foco === 'necrosis_pancreatica' && raw.horasHastaControl < 24) {
    alerts.push({
      tono: 'red',
      titulo: 'Drenaje inmediato en necrosis pancreática infectada',
      detalle: 'En POINTER, drenar dentro de las 24 h no mejoró complicaciones ni mortalidad y sumó intervenciones. Acá el apuro juega en contra.',
    });
  }
  if ((f.urgencia === 'maxima' || f.urgencia === 'alta') && !dentroDeVentana) {
    alerts.push({
      tono: 'red',
      titulo: `Control de foco a las ${raw.horasHastaControl} h`,
      detalle:
        raw.foco === 'fascitis'
          ? 'En la infección necrotizante, operar después de 6 h se asoció a 32% de mortalidad frente a 19%.'
          : '"Dentro de las 6 h" es una meta razonable, no un dato demostrado: toda la evidencia es observacional y los estudios no coinciden en un umbral. Lo consistente es que hacer el control cuando hace falta se asocia siempre a menos mortalidad.',
    });
  }
  if (raw.shock && raw.foco === 'colangitis_grave' && raw.horasHastaControl <= 2) {
    alerts.push({
      tono: 'amber',
      titulo: 'Colangitis grave: primero estabilizar',
      detalle: 'Tokyo Guidelines 2018: en la colangitis grave el drenaje va apenas el paciente se estabiliza, no antes de reanimar.',
    });
  }

  return {
    rendimientoBase: base,
    rendimientoFinal: rendimiento,
    factorVolumen,
    identificacionConOtrosCultivos,
    pctLectura,
    urgencia: f.urgencia,
    urgenciaTexto: f.texto,
    focoDetalle: f.detalle,
    duracionAtb: f.duracion,
    dentroDeVentana,
    alerts,
  };
}

export function nombreFoco(f: Foco): string {
  return FOCOS[f].nombre;
}

export const FOCOS_LISTA = Object.keys(FOCOS) as Foco[];

export interface M14Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M14Inputs;
}

export const M14_PRESETS: M14Preset[] = [
  {
    id: 'bien_hecho',
    nombre: 'Hecho como corresponde',
    resumen: '3 sets de 20 mL antes del antibiótico, perforación al quirófano a las 4 h.',
    inputs: {
      sets: 3,
      volumenPorSet: 20,
      antesDelAntibiotico: true,
      otrosCultivos: true,
      pct: 8.4,
      contextoPct: 'ninguno',
      foco: 'perforacion',
      shock: true,
      horasHastaControl: 4,
    },
  },
  {
    id: 'un_set_tarde',
    nombre: 'Un set, poca sangre y tarde',
    resumen: '1 set de 5 mL después del antibiótico: el escenario del falso negativo.',
    inputs: {
      sets: 1,
      volumenPorSet: 5,
      antesDelAntibiotico: false,
      otrosCultivos: false,
      pct: 0.3,
      contextoPct: 'ninguno',
      foco: 'urinario_obstructivo',
      shock: true,
      horasHastaControl: 10,
    },
  },
  {
    id: 'fascitis',
    nombre: 'Fascitis: el tiempo es fascia',
    resumen: 'Partes blandas necrotizante con 10 h hasta el quirófano.',
    inputs: {
      sets: 2,
      volumenPorSet: 20,
      antesDelAntibiotico: true,
      otrosCultivos: false,
      pct: 14,
      contextoPct: 'ninguno',
      foco: 'fascitis',
      shock: true,
      horasHastaControl: 10,
    },
  },
  {
    id: 'pancreatitis',
    nombre: 'Necrosis pancreática: no apurarse',
    resumen: 'Gas en la colección, sin shock. Acá drenar enseguida no es mejor.',
    inputs: {
      sets: 2,
      volumenPorSet: 20,
      antesDelAntibiotico: true,
      otrosCultivos: true,
      pct: 3.2,
      contextoPct: 'pancreatitis',
      foco: 'necrosis_pancreatica',
      shock: false,
      horasHastaControl: 12,
    },
  },
];
