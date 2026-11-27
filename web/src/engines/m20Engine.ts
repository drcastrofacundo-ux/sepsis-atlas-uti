/**
 * Motor del simulador del M20: el tablero del servicio.
 *
 * Cuatro cuentas que se hacen a nivel de servicio, no de paciente:
 *
 *  1. Urgencia del antibiotico segun shock y NEWS2 (Rhee 2026, Pak 2023,
 *     Kumar 2006). La urgencia horaria esta demostrada en el shock y con
 *     NEWS2 alto, no en la sospecha sin gravedad.
 *  2. Cumplimiento del paquete de la hora 1, con la advertencia del SEP-1:
 *     cumplir se asocia a mejores resultados, imponerlo como metrica no
 *     bajo la mortalidad.
 *  3. El efecto codificacion (Rhee 2017): aritmetica pura de como cae la
 *     mortalidad aparente al sumar casos leves al denominador.
 *  4. La carga de alertas de un algoritmo (Epic Sepsis Model, Wong 2021):
 *     tabla de 2x2 a partir de sensibilidad, especificidad y prevalencia.
 *
 * Es material de estudio, no una herramienta de decision ni de gestion.
 */

export type Urgencia = 'primera_hora' | 'tres_horas' | 'evaluar';

export interface ElementosPaquete {
  lactato: boolean;
  cultivos: boolean;
  antibiotico: boolean;
  fluidos: boolean;
  vasopresor: boolean;
  identificacion: boolean;
}

export interface M20Inputs {
  // Urgencia del antibiotico
  shock: boolean;
  news2: number;
  horasHastaAntibiotico: number;
  // Paquete
  paquete: ElementosPaquete;
  // Efecto codificacion
  casosClinicos: number;
  mortalidadClinica: number; // %
  casosAgregados: number;
  mortalidadAgregados: number; // %
  // Algoritmo de alerta
  sensibilidad: number; // %
  especificidad: number; // %
  prevalencia: number; // %
  pacientesPorDia: number;
}

export interface M20Output {
  // Urgencia
  urgencia: Urgencia;
  urgenciaTitulo: string;
  urgenciaDetalle: string;
  orPorHora: number | null;
  orAcumulado: number | null;
  excesoAbsoluto: number | null;
  fueraDeVentana: boolean;
  // Paquete
  cumplidos: number;
  totalPaquete: number;
  porcentajePaquete: number;
  // Codificacion
  mortalidadAparente: number;
  caidaAparente: number;
  casosTotales: number;
  // Alertas
  verdaderosPositivos: number;
  falsosPositivos: number;
  falsosNegativos: number;
  alertasPorDia: number;
  vpp: number;
  alertasPorSepsisDetectada: number | null;
  sepsisNoDetectadas: number;
  alerts: Array<{ tono: 'red' | 'amber' | 'cyan'; titulo: string; detalle: string }>;
}

export const ELEMENTOS_LABEL: Record<keyof ElementosPaquete, string> = {
  identificacion: 'Identificar (NEWS2 ≥ 5 o índice de shock > 0,9)',
  lactato: 'Lactato basal',
  cultivos: '2 pares de hemocultivos y urocultivo',
  antibiotico: 'Antibiótico con dosis de carga',
  fluidos: 'Fluidos guiados por respuesta a volumen',
  vasopresor: 'Vasopresor si la PAM sigue baja',
};

/** OR de mortalidad por hora de demora, segun quien sea el paciente. */
export const OR_POR_HORA_SHOCK = 1.15; // Rhee 2026
export const OR_POR_HORA_NEWS2_ALTO = 1.07; // Rhee 2026
/** Exceso absoluto por hora en el shock (Rhee 2026): 1,5 puntos. */
export const EXCESO_ABSOLUTO_SHOCK = 1.5;
export const NEWS2_ALTO = 7;

export function clasificarUrgencia(shock: boolean, news2: number): Urgencia {
  if (shock) return 'primera_hora';
  if (news2 >= NEWS2_ALTO) return 'primera_hora';
  return 'evaluar';
}

/** Mortalidad aparente al sumar casos al denominador (aritmetica de Rhee 2017). */
export function mortalidadAparente(
  casosClinicos: number,
  mortalidadClinica: number,
  casosAgregados: number,
  mortalidadAgregados: number
): number {
  const total = casosClinicos + casosAgregados;
  if (total <= 0) return 0;
  const muertes =
    (casosClinicos * mortalidadClinica) / 100 + (casosAgregados * mortalidadAgregados) / 100;
  return (muertes / total) * 100;
}

/** Tabla de 2x2 de un algoritmo de alerta. */
export function cargaDeAlertas(
  sensibilidad: number,
  especificidad: number,
  prevalencia: number,
  pacientesPorDia: number
) {
  const sepsis = (pacientesPorDia * prevalencia) / 100;
  const noSepsis = pacientesPorDia - sepsis;
  const vp = (sepsis * sensibilidad) / 100;
  const fn = sepsis - vp;
  const fp = (noSepsis * (100 - especificidad)) / 100;
  const alertas = vp + fp;
  return {
    verdaderosPositivos: vp,
    falsosNegativos: fn,
    falsosPositivos: fp,
    alertasPorDia: alertas,
    vpp: alertas > 0 ? (vp / alertas) * 100 : 0,
    alertasPorSepsisDetectada: vp > 0 ? alertas / vp : null,
    sepsisNoDetectadas: fn,
  };
}

export function simulateM20(raw: M20Inputs): M20Output {
  // --- 1. Urgencia del antibiotico ---
  const urgencia = clasificarUrgencia(raw.shock, raw.news2);
  let orPorHora: number | null = null;
  let urgenciaTitulo: string;
  let urgenciaDetalle: string;

  if (raw.shock) {
    orPorHora = OR_POR_HORA_SHOCK;
    urgenciaTitulo = 'Antibiótico en la primera hora';
    urgenciaDetalle =
      'En el shock, cada hora de demora se asoció a más mortalidad (OR 1,15 por hora, 1,5 puntos absolutos por hora en Rhee 2026). Kumar 2006: con antibiótico en la primera hora la sobrevida fue del 79,9% y cayó alrededor del 7,6% por cada hora de las 6 siguientes.';
  } else if (raw.news2 >= NEWS2_ALTO) {
    orPorHora = OR_POR_HORA_NEWS2_ALTO;
    urgenciaTitulo = 'Antibiótico en la primera hora, aunque no haya shock';
    urgenciaDetalle = `Con NEWS2 ampliado de ${NEWS2_ALTO} o más, cada hora se asoció a más mortalidad (OR 1,07) incluso en el 86% de esos pacientes que no estaba en shock. Es el aporte de Rhee 2026: el puntaje identifica a quién apurar sin esperar el shock.`;
  } else {
    urgenciaTitulo = 'Hay margen para evaluar antes del amplio espectro';
    urgenciaDetalle =
      'Con NEWS2 menor de 7 y sin shock no hubo asociación entre cada hora de demora y la mortalidad (Rhee 2026), y en Pak 2023 solo empeoraban las demoras de más de 6 h. La SSC 2021 plantea evaluación rápida y antibiótico dentro de las 3 h si la sospecha persiste.';
  }

  const orAcumulado =
    orPorHora !== null ? Math.pow(orPorHora, Math.max(0, raw.horasHastaAntibiotico)) : null;
  const excesoAbsoluto = raw.shock
    ? EXCESO_ABSOLUTO_SHOCK * Math.max(0, raw.horasHastaAntibiotico)
    : null;
  const fueraDeVentana =
    urgencia === 'primera_hora' ? raw.horasHastaAntibiotico > 1 : raw.horasHastaAntibiotico > 3;

  // --- 2. Paquete de la hora 1 ---
  const claves = Object.keys(raw.paquete) as Array<keyof ElementosPaquete>;
  const cumplidos = claves.filter((k) => raw.paquete[k]).length;
  const totalPaquete = claves.length;

  // --- 3. Efecto codificacion ---
  const aparente = mortalidadAparente(
    raw.casosClinicos,
    raw.mortalidadClinica,
    raw.casosAgregados,
    raw.mortalidadAgregados
  );

  // --- 4. Carga de alertas ---
  const carga = cargaDeAlertas(
    raw.sensibilidad,
    raw.especificidad,
    raw.prevalencia,
    raw.pacientesPorDia
  );

  // --- Alertas ---
  const alerts: M20Output['alerts'] = [];

  if (urgencia === 'primera_hora' && fueraDeVentana) {
    alerts.push({
      tono: 'red',
      titulo: `${raw.horasHastaAntibiotico.toFixed(1)} h hasta el antibiótico en un paciente que había que apurar`,
      detalle: raw.shock
        ? `Con OR ${OR_POR_HORA_SHOCK} por hora, la demora acumulada da un OR de ${orAcumulado?.toFixed(2)}, y el exceso absoluto estimado de forma lineal es de unos ${excesoAbsoluto?.toFixed(1)} puntos. Son datos observacionales, no un efecto causal medido en un ensayo.`
        : `Con NEWS2 ${raw.news2} y OR ${OR_POR_HORA_NEWS2_ALTO} por hora, la demora acumulada da un OR de ${orAcumulado?.toFixed(2)}. Observacional.`,
    });
  }

  if (urgencia === 'evaluar' && raw.horasHastaAntibiotico <= 1 && cumplidos >= 5) {
    alerts.push({
      tono: 'amber',
      titulo: 'Amplio espectro en la primera hora a un paciente sin gravedad',
      detalle:
        'Es el error del Caso 2: la urgencia horaria está demostrada en el shock y con NEWS2 alto, no en la sospecha sin gravedad. El SEP-1 mostró que forzar la métrica aumentó el uso de antibióticos un 24,4% sin cambiar la mortalidad, y el costo es resistencia y toxicidad.',
    });
  }

  if (cumplidos === totalPaquete) {
    alerts.push({
      tono: 'cyan',
      titulo: 'Paquete completo: cuidado con leerlo como garantía',
      detalle:
        'Cumplir el paquete se asoció a menor mortalidad a 30 días (21,8% vs 27,5%; OR 0,83 en Townsend 2022), pero es observacional: los pacientes a los que se les puede completar todo pueden ser distintos. Con el SEP-1 obligatorio, la mortalidad no se movió (20,3% vs 20,4%).',
    });
  }

  if (!raw.paquete.antibiotico && (raw.shock || raw.news2 >= NEWS2_ALTO)) {
    alerts.push({
      tono: 'red',
      titulo: 'Falta el antibiótico justamente en el paciente que había que apurar',
      detalle:
        'De todos los elementos del paquete, el antibiótico y el tiempo total al paquete de 3 h fueron los que se asociaron a la mortalidad en Seymour 2017 (OR 1,04 por hora cada uno). El bolo de fluidos no (OR 1,01).',
    });
  }

  if (raw.casosAgregados > 0) {
    const caida = raw.mortalidadClinica - aparente;
    alerts.push({
      tono: caida >= 5 ? 'red' : 'amber',
      titulo: `Efecto codificación: la mortalidad aparente baja ${caida.toFixed(1)} puntos`,
      detalle: `Sumando ${raw.casosAgregados} casos leves al denominador, el indicador pasa de ${raw.mortalidadClinica.toFixed(1)}% a ${aparente.toFixed(1)}% sin que haya cambiado la atención de nadie. En Rhee 2017, la incidencia por códigos subía 10,3% por año mientras la clínica era estable.`,
    });
  }

  if (carga.alertasPorSepsisDetectada !== null && carga.alertasPorSepsisDetectada >= 5) {
    alerts.push({
      tono: 'red',
      titulo: `${carga.alertasPorSepsisDetectada.toFixed(1)} alertas por cada sepsis detectada`,
      detalle: `Con un VPP del ${carga.vpp.toFixed(1)}%, enfermería silencia las alertas y el algoritmo deja de existir. Es el error del Caso 3: antes de instalarlo hay que validarlo con datos propios y medir esta cuenta.`,
    });
  }

  if (raw.sensibilidad <= 40) {
    alerts.push({
      tono: 'amber',
      titulo: `Sensibilidad del ${raw.sensibilidad.toFixed(0)}%: se le escapan ${carga.sepsisNoDetectadas.toFixed(1)} sepsis por día`,
      detalle:
        'El Epic Sepsis Model, el más usado en EE. UU., tuvo un AUC de 0,63 en la validación externa y no detectó el 67% de las sepsis. El AUC del folleto no se reproduce afuera del lugar donde se entrenó el modelo.',
    });
  }

  if (raw.sensibilidad >= 70 && carga.alertasPorSepsisDetectada !== null && carga.alertasPorSepsisDetectada < 5) {
    alerts.push({
      tono: 'cyan',
      titulo: 'Un algoritmo usable todavía necesita que alguien actúe',
      detalle:
        'En TREWS, el beneficio apareció cuando un médico confirmaba la alerta dentro de las 3 h (3,3 puntos menos de mortalidad), y en COMPOSER la alerta iba dirigida a enfermería. Todavía no hay ensayos aleatorizados grandes que muestren que una alerta de sepsis salva vidas.',
    });
  }

  return {
    urgencia,
    urgenciaTitulo,
    urgenciaDetalle,
    orPorHora,
    orAcumulado,
    excesoAbsoluto,
    fueraDeVentana,
    cumplidos,
    totalPaquete,
    porcentajePaquete: (cumplidos / totalPaquete) * 100,
    mortalidadAparente: aparente,
    caidaAparente: raw.mortalidadClinica - aparente,
    casosTotales: raw.casosClinicos + raw.casosAgregados,
    ...carga,
    alerts,
  };
}

export interface M20Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M20Inputs;
}

const PAQUETE_COMPLETO: ElementosPaquete = {
  identificacion: true,
  lactato: true,
  cultivos: true,
  antibiotico: true,
  fluidos: true,
  vasopresor: true,
};

const BASE: M20Inputs = {
  shock: true,
  news2: 9,
  horasHastaAntibiotico: 0.8,
  paquete: { ...PAQUETE_COMPLETO },
  casosClinicos: 300,
  mortalidadClinica: 30,
  casosAgregados: 0,
  mortalidadAgregados: 4,
  sensibilidad: 33,
  especificidad: 83,
  prevalencia: 6,
  pacientesPorDia: 200,
};

export const M20_PRESETS: M20Preset[] = [
  {
    id: 'shock_a_tiempo',
    nombre: 'Shock con antibiótico en 48 min',
    resumen: 'El paciente en el que cada minuto está demostrado, y el servicio llegó. Paquete completo.',
    inputs: { ...BASE },
  },
  {
    id: 'shock_demorado',
    nombre: 'Shock con 4 h de demora',
    resumen: 'El mismo paciente, cuatro horas después: OR acumulado y exceso absoluto estimado.',
    inputs: { ...BASE, horasHastaAntibiotico: 4, paquete: { ...PAQUETE_COMPLETO, antibiotico: false } },
  },
  {
    id: 'sin_gravedad',
    nombre: 'Fiebre con NEWS2 bajo',
    resumen: 'Estable, NEWS2 4, sin foco. Amplio espectro en 1 hora «para cumplir la meta»: el Caso 2.',
    inputs: {
      ...BASE,
      shock: false,
      news2: 4,
      horasHastaAntibiotico: 0.7,
    },
  },
  {
    id: 'news2_alto',
    nombre: 'NEWS2 8 sin shock',
    resumen: 'El aporte de Rhee 2026: apurar sin esperar el shock, porque el puntaje ya lo marca.',
    inputs: {
      ...BASE,
      shock: false,
      news2: 8,
      horasHastaAntibiotico: 2.5,
      paquete: { ...PAQUETE_COMPLETO, antibiotico: false, vasopresor: false },
    },
  },
  {
    id: 'efecto_codificacion',
    nombre: 'El indicador que «mejoró»',
    resumen: '300 casos clínicos con 30% de mortalidad, más 300 casos leves codificados: el Caso 1.',
    inputs: {
      ...BASE,
      casosClinicos: 300,
      mortalidadClinica: 30,
      casosAgregados: 300,
      mortalidadAgregados: 4,
    },
  },
  {
    id: 'epic',
    nombre: 'El algoritmo del folleto',
    resumen: 'Epic Sepsis Model en validación externa: sensibilidad 33%, el 67% de las sepsis sin detectar.',
    inputs: {
      ...BASE,
      sensibilidad: 33,
      especificidad: 83,
      prevalencia: 6,
      pacientesPorDia: 200,
    },
  },
  {
    id: 'algoritmo_usable',
    nombre: 'Un algoritmo usable',
    resumen: 'Sensibilidad 75% y especificidad 97%: pocas alertas por sepsis, pero alguien tiene que actuar.',
    inputs: {
      ...BASE,
      sensibilidad: 75,
      especificidad: 97,
      prevalencia: 6,
      pacientesPorDia: 200,
    },
  },
];
