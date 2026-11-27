/**
 * Motor del simulador del M15: el pulmon chico.
 *
 * Calcula peso predicho, volumen corriente indexado, presion de distension,
 * distensibilidad, categoria de SDRA (Berlin y definicion global 2024) y el
 * puntaje de riesgo de cor pulmonale agudo de Mekontso Dessap 2016.
 *
 * Es material de estudio, no una herramienta de decision: las conductas que
 * devuelve son lectura didactica de la evidencia citada en el modulo.
 */

export type Sexo = 'varon' | 'mujer';
export type Soporte = 'alto_flujo' | 'vni' | 'invasiva';
export type CausaSdra = 'neumonia' | 'extrapulmonar';

export interface M15Inputs {
  sexo: Sexo;
  tallaCm: number;
  pesoRealKg: number;
  vtMl: number;
  peep: number;
  presionMeseta: number;
  frecuencia: number;
  pao2: number;
  fio2: number; // fraccion 0.21..1
  spo2: number;
  usarSpo2: boolean;
  soporte: Soporte;
  paco2: number;
  causa: CausaSdra;
  ph: number;
  horasDeEvolucion: number;
}

export type Severidad = 'sin_criterio' | 'leve' | 'moderado' | 'grave';

export interface M15Output {
  pcpKg: number;
  vtPorKgPcp: number;
  vtPorKgReal: number;
  vtSiUsaraPesoRealMl: number;
  driving: number;
  compliance: number | null;
  pafi: number;
  safi: number | null;
  indiceUsado: 'PaO2/FiO2' | 'SpO2/FiO2';
  severidadBerlin: Severidad;
  cumpleGlobal: boolean;
  motivoGlobal: string;
  corPulmonale: { puntaje: number; factores: Array<{ nombre: string; presente: boolean }> };
  criterioEolia: boolean;
  conductas: Array<{ tono: 'ok' | 'amber' | 'red'; titulo: string; detalle: string }>;
  alerts: Array<{ tono: 'red' | 'amber' | 'cyan'; titulo: string; detalle: string }>;
}

/** Peso corporal predicho (ARDSNet). Se calcula con la talla, nunca con el peso real. */
export function pesoPredicho(sexo: Sexo, tallaCm: number): number {
  const base = sexo === 'varon' ? 50 : 45.5;
  return Math.max(1, base + 0.91 * (tallaCm - 152.4));
}

export function severidadBerlin(pafi: number, peep: number, soporte: Soporte): Severidad {
  // Berlin exige PEEP/CPAP >= 5 y soporte ventilatorio.
  if (soporte === 'alto_flujo' || peep < 5) return 'sin_criterio';
  if (pafi > 300) return 'sin_criterio';
  if (pafi > 200) return 'leve';
  if (pafi > 100) return 'moderado';
  return 'grave';
}

export function simulateM15(raw: M15Inputs): M15Output {
  const fio2 = Math.min(1, Math.max(0.21, raw.fio2));
  const pcpKg = pesoPredicho(raw.sexo, raw.tallaCm);
  const vtPorKgPcp = raw.vtMl / pcpKg;
  const vtPorKgReal = raw.vtMl / Math.max(1, raw.pesoRealKg);
  const vtSiUsaraPesoRealMl = 6 * raw.pesoRealKg;

  const driving = raw.presionMeseta - raw.peep;
  const compliance = driving > 0 ? raw.vtMl / driving : null;

  const pafi = raw.pao2 / fio2;
  const safi = raw.spo2 <= 97 ? raw.spo2 / fio2 : null;
  const indiceUsado = raw.usarSpo2 && safi !== null ? 'SpO2/FiO2' : 'PaO2/FiO2';

  const sev = severidadBerlin(pafi, raw.peep, raw.soporte);

  // Definicion global 2024: suma alto flujo >= 30 L/min y SpO2/FiO2 <= 315 con SpO2 <= 97.
  let cumpleGlobal = false;
  let motivoGlobal = 'No alcanza el umbral de hipoxemia';
  if (pafi <= 300) {
    cumpleGlobal = true;
    motivoGlobal = `PaO₂/FiO₂ ${pafi.toFixed(0)} ≤ 300`;
  } else if (safi !== null && safi <= 315) {
    cumpleGlobal = true;
    motivoGlobal = `SpO₂/FiO₂ ${safi.toFixed(0)} ≤ 315 (SpO₂ ${raw.spo2}% ≤ 97%)`;
  }
  if (cumpleGlobal && raw.soporte === 'alto_flujo') {
    motivoGlobal += ' · alto flujo ≥ 30 L/min, que la definición global ya admite';
  }

  // Cor pulmonale agudo (Mekontso Dessap 2016): 4 factores, prevalencia del 22%.
  const factores = [
    { nombre: 'Neumonía como causa', presente: raw.causa === 'neumonia' },
    { nombre: 'ΔP ≥ 18 cmH₂O', presente: driving >= 18 },
    { nombre: 'PaO₂/FiO₂ < 150', presente: pafi < 150 },
    { nombre: 'PaCO₂ ≥ 48 mmHg', presente: raw.paco2 >= 48 },
  ];
  const puntaje = factores.filter((f) => f.presente).length;

  // Criterios de EOLIA para ECMO venovenosa.
  const criterioEolia =
    raw.soporte === 'invasiva' &&
    (pafi < 50 || (pafi < 80 && raw.horasDeEvolucion >= 6) || (raw.ph < 7.25 && raw.paco2 >= 60));

  const alerts: M15Output['alerts'] = [];
  if (vtPorKgPcp > 8) {
    alerts.push({
      tono: 'red',
      titulo: `Volumen corriente ${vtPorKgPcp.toFixed(1)} mL/kg de peso predicho`,
      detalle: `ARMA usó 6 mL/kg de PCP con meseta ≤ 30 y bajó la mortalidad de 39,8% a 31,0%. Con esta talla, 6 mL/kg son ${(6 * pcpKg).toFixed(0)} mL.`,
    });
  }
  if (Math.abs(vtPorKgPcp - vtPorKgReal) > 1) {
    alerts.push({
      tono: 'cyan',
      titulo: 'El peso real y el predicho no coinciden',
      detalle: `Con el peso real serían ${vtPorKgReal.toFixed(1)} mL/kg y 6 mL/kg darían ${vtSiUsaraPesoRealMl.toFixed(0)} mL. El volumen se calcula por la talla: el pulmón no crece con el peso.`,
    });
  }
  if (driving >= 18) {
    alerts.push({
      tono: 'red',
      titulo: `Presión de distensión ${driving.toFixed(0)} cmH₂O`,
      detalle: 'Cada 7 cmH₂O más se asociaron a un RR de mortalidad de 1,41 (Amato 2015), incluso con meseta y volumen protectores. Además es predictor de cor pulmonale.',
    });
  } else if (driving >= 15) {
    alerts.push({
      tono: 'amber',
      titulo: `Presión de distensión ${driving.toFixed(0)} cmH₂O`,
      detalle: 'Zona de atención: conviene bajar el volumen corriente antes que subir la PEEP.',
    });
  }
  if (raw.presionMeseta > 30) {
    alerts.push({
      tono: 'red',
      titulo: `Presión meseta ${raw.presionMeseta} cmH₂O`,
      detalle: 'Por encima de 30 se sale del rango de ARMA. Sin medirla con pausa inspiratoria no se puede calcular la ΔP.',
    });
  }
  if (puntaje >= 2) {
    alerts.push({
      tono: 'amber',
      titulo: `Riesgo de cor pulmonale agudo: ${puntaje} de 4 factores`,
      detalle: 'El cor pulmonale apareció en el 22% de los SDRA ventilados y el grave tuvo 57% de mortalidad frente a 42%. Conviene mirar el VD con eco antes de subir la PEEP o dar volumen.',
    });
  }

  const conductas: M15Output['conductas'] = [
    {
      tono: vtPorKgPcp <= 8 && driving < 15 && raw.presionMeseta <= 30 ? 'ok' : 'red',
      titulo: 'Ventilación protectora',
      detalle: 'Siempre: 6 mL/kg de peso predicho, meseta ≤ 30 y la ΔP lo más baja posible (ARMA, Amato).',
    },
    {
      tono: pafi < 150 ? 'red' : 'ok',
      titulo: 'Prono',
      detalle:
        pafi < 150
          ? 'Indicado: con PaO₂/FiO₂ < 150, PROSEVA bajó la mortalidad a 28 días de 32,8% a 16,0% con sesiones de al menos 16 h. Es temprano, no un último recurso.'
          : 'Todavía no: PROSEVA incluyó PaO₂/FiO₂ < 150 con FiO₂ ≥ 0,6 y PEEP ≥ 5.',
    },
    {
      tono: sev === 'grave' && raw.horasDeEvolucion <= 48 ? 'amber' : 'ok',
      titulo: 'Bloqueo neuromuscular',
      detalle:
        sev === 'grave' && raw.horasDeEvolucion <= 48
          ? 'Solo a considerar: la ATS 2024 lo sugiere en el SDRA grave temprano (condicional, certeza baja). En ROSE, frente a sedación liviana, no cambió la mortalidad.'
          : 'No de rutina: en ROSE no cambió la mortalidad (42,5% vs 42,8%) y sumó eventos cardiovasculares.',
    },
    {
      tono: criterioEolia ? 'amber' : 'ok',
      titulo: 'ECMO venovenosa',
      detalle: criterioEolia
        ? 'Cumple criterios de EOLIA. Es para centros con experiencia y después de haber hecho bien la ventilación protectora y el prono.'
        : 'No cumple criterios de EOLIA (PaO₂/FiO₂ < 50, o < 80 por más de 6 h, o pH < 7,25 con PaCO₂ ≥ 60).',
    },
  ];

  return {
    pcpKg,
    vtPorKgPcp,
    vtPorKgReal,
    vtSiUsaraPesoRealMl,
    driving,
    compliance,
    pafi,
    safi,
    indiceUsado,
    severidadBerlin: sev,
    cumpleGlobal,
    motivoGlobal,
    corPulmonale: { puntaje, factores },
    criterioEolia,
    conductas,
    alerts,
  };
}

export interface M15Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M15Inputs;
}

export const M15_PRESETS: M15Preset[] = [
  {
    id: 'protegido',
    nombre: 'SDRA moderado bien ventilado',
    resumen: 'Mujer de 1,62 m, 6 mL/kg de peso predicho, ΔP 12. El objetivo al que hay que llegar.',
    inputs: {
      sexo: 'mujer',
      tallaCm: 162,
      pesoRealKg: 68,
      vtMl: 330,
      peep: 10,
      presionMeseta: 22,
      frecuencia: 24,
      pao2: 95,
      fio2: 0.5,
      spo2: 95,
      usarSpo2: false,
      soporte: 'invasiva',
      paco2: 42,
      causa: 'neumonia',
      ph: 7.36,
      horasDeEvolucion: 20,
    },
  },
  {
    id: 'trampa_peso',
    nombre: 'La trampa del peso real',
    resumen: 'Varón de 1,70 m y 110 kg ventilado con 6 mL/kg del peso real: casi 10 mL/kg de peso predicho.',
    inputs: {
      sexo: 'varon',
      tallaCm: 170,
      pesoRealKg: 110,
      vtMl: 660,
      peep: 10,
      presionMeseta: 32,
      frecuencia: 22,
      pao2: 80,
      fio2: 0.7,
      spo2: 93,
      usarSpo2: false,
      soporte: 'invasiva',
      paco2: 44,
      causa: 'neumonia',
      ph: 7.3,
      horasDeEvolucion: 18,
    },
  },
  {
    id: 'grave_vd',
    nombre: 'SDRA grave con riesgo de VD',
    resumen: 'Neumonía, ΔP 19, PaO₂/FiO₂ 95 y PaCO₂ 52: los cuatro factores de cor pulmonale.',
    inputs: {
      sexo: 'varon',
      tallaCm: 175,
      pesoRealKg: 80,
      vtMl: 420,
      peep: 14,
      presionMeseta: 33,
      frecuencia: 28,
      pao2: 76,
      fio2: 0.8,
      spo2: 91,
      usarSpo2: false,
      soporte: 'invasiva',
      paco2: 52,
      causa: 'neumonia',
      ph: 7.24,
      horasDeEvolucion: 12,
    },
  },
  {
    id: 'alto_flujo',
    nombre: 'Alto flujo y definición global',
    resumen: 'Sin intubar, con cánula de alto flujo: Berlín no lo clasifica, la definición global 2024 sí.',
    inputs: {
      sexo: 'mujer',
      tallaCm: 158,
      pesoRealKg: 60,
      vtMl: 0,
      peep: 0,
      presionMeseta: 0,
      frecuencia: 30,
      pao2: 70,
      fio2: 0.6,
      spo2: 92,
      usarSpo2: true,
      soporte: 'alto_flujo',
      paco2: 36,
      causa: 'neumonia',
      ph: 7.44,
      horasDeEvolucion: 8,
    },
  },
];
