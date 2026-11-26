export type NaFormulation = 'base' | 'bitartrato_mono' | 'bitartrato_anhidro' | 'hcl';

export interface M05Inputs {
  pas: number;
  pad: number;
  fc: number;
  pvc: number;
  pesoKg: number;
  formulacion: NaFormulation;
  dosisNa: number;
  ppv: number;
  svv: number;
  crt: number;
  htaCronica: boolean;
  piaAlta: boolean;
  disfuncionVd: boolean;
  vexusCongestion: boolean;
  sinusalVmVt8: boolean;
}

export interface M05Outputs {
  pam: number;
  pp: number;
  mpp: number;
  dpp: number;
  dsi: number;
  naBitEq: number;
  naBaseEq: number;
  naUgMinBit: number;
  naUgMinBase: number;
  vneri: number | null;
  vneriBand: 'sin_na' | 'critica' | 'estable' | 'sobreexposicion';
  eadyn: number | null;
  alertaDesteteNa: boolean;
  ppvValida: boolean;
  plrConfiable: boolean;
  ppZona: 'bajo_vs' | 'segura' | 'rigidez_alta';
  andromedaSteps: string[];
  alerts: Array<{ tone: 'red' | 'amber' | 'cyan' | 'purple'; title: string; detail: string }>;
  waveformPoints: Array<{ x: number; y: number }>;
  guytonPoints: { pmsf: number; padPoint: number; overPlateau: boolean };
}

export interface M05Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M05Inputs;
}

export const NA_TO_BITARTRATO_FACTOR: Record<NaFormulation, number> = {
  base: 2.0,
  bitartrato_mono: 1.0,
  bitartrato_anhidro: 2.0 / 1.89,
  hcl: 2.0 / 1.22,
};

export const NA_FORMULATION_LABEL: Record<NaFormulation, string> = {
  base: 'Noradrenalina Base (×2,00 a bitartrato)',
  bitartrato_mono: 'Bitartrato Monohidrato (×1,00 ref. Goury)',
  bitartrato_anhidro: 'Bitartrato Anhidro (×1,058 a bitartrato)',
  hcl: 'Clorhidrato / HCl (×1,639 a bitartrato)',
};

export function simulateM05(raw: M05Inputs): M05Outputs {
  const pas = Math.max(raw.pas, raw.pad + 10);
  const pad = Math.min(raw.pad, pas - 10);
  const { fc, pvc, pesoKg, formulacion, dosisNa, ppv, svv, crt } = raw;

  const pam = pad + (pas - pad) / 3;
  const pp = pas - pad;
  const mpp = pam - pvc;
  const dpp = pad - pvc;
  const dsi = pad > 0 ? fc / pad : 0;

  const factor = NA_TO_BITARTRATO_FACTOR[formulacion];
  const naBitEq = dosisNa * factor;
  const naBaseEq = naBitEq / 2.0;
  const naUgMinBit = naBitEq * pesoKg;
  const naUgMinBase = naBaseEq * pesoKg;

  const vneri = naBitEq > 0 && fc > 0 ? pad / (naBitEq * fc) : null;
  let vneriBand: M05Outputs['vneriBand'] = 'sin_na';
  if (vneri !== null) {
    if (vneri < 2.6) vneriBand = 'critica';
    else if (vneri <= 10.8) vneriBand = 'estable';
    else vneriBand = 'sobreexposicion';
  }

  const eadyn = svv > 0 ? ppv / svv : null;
  const alertaDesteteNa = naBitEq > 0 && eadyn !== null && eadyn < 0.94;
  const ppvValida = raw.sinusalVmVt8 && !raw.disfuncionVd && !raw.piaAlta;
  const plrConfiable = !raw.piaAlta;

  const ppZona: M05Outputs['ppZona'] =
    pp < 40 ? 'bajo_vs' : pp <= 70 ? 'segura' : 'rigidez_alta';

  const alerts: M05Outputs['alerts'] = [];
  const andromedaSteps: string[] = [];

  if (crt > 3.0) {
    andromedaSteps.push(`Hipoperfusión (CRT ${crt.toFixed(1)} s > 3,0 s): es el escenario en que ANDROMEDA-SHOCK-2 propone reanimación guiada por perfusión.`);
  } else {
    andromedaSteps.push(`CRT normal (${crt.toFixed(1)} s ≤ 3,0 s): con la lógica de ANDROMEDA-SHOCK, seguir con bolos empíricos aportaría poco; el lactato residual por sí solo no justificaría más volumen (Kattan 2020, aOR 3,3).`);
  }

  if (pad < 50) {
    andromedaSteps.push('Tier 1 · PAD < 50 mmHg: sugiere vasoplejia arterial; la evidencia observacional (Ko 2026, aOR 0,48) apoya considerar noradrenalina precoz en lugar de insistir solo con cristaloides.');
    alerts.push({
      tone: 'red',
      title: 'Vasoplejia diastólica (PAD < 50 mmHg)',
      detail: `PAD ${pad} mmHg con FC ${fc} lpm (DSI ${dsi.toFixed(2)}). Posible riesgo de hipoperfusión coronaria y renal; el módulo cita ARISE FLUIDS 2026 a favor de priorizar el sostén α₁ sobre el volumen.`,
    });
  }

  if (pp < 40) {
    andromedaSteps.push('Tier 1 · PP < 40 mmHg: podría reflejar bajo volumen sistólico; correspondería evaluar la respuesta a fluidos con un método válido y ecocardiografía.');
    alerts.push({
      tone: 'amber',
      title: 'Presión de pulso estrecha (PP < 40 mmHg)',
      detail: `PP ${pp} mmHg fuera de la zona 40–70 (Ji 2026, aOR 1,476, predominante en ≤65 años). Considerar hipovolemia, disfunción miocárdica o taponamiento.`,
    });
  } else if (pp > 70) {
    alerts.push({
      tone: 'amber',
      title: 'Presión de pulso amplia (PP > 70 mmHg)',
      detail: `PP ${pp} mmHg (Ji 2026 aOR 1,656, mayor riesgo en >65 años por rigidez arterial/estrés pulsátil). Vigilar que la PAS aceptable no oculte PAD baja.`,
    });
  }

  if (raw.vexusCongestion || (raw.piaAlta && pvc >= 12)) {
    andromedaSteps.push('Posible intolerancia a fluidos: con congestión orgánica / VExUS ≥ 2, los bolos podrían agravar la congestión aun con PLR o PPV positivas (Muñoz 2024; Si 2026).');
    alerts.push({
      tone: 'red',
      title: 'Posible intolerancia a fluidos (congestión)',
      detail: `El 53% de FR+ ya tienen congestión (Muñoz 2024) y en SDRA aumenta EVLWI tras bolos (Si 2026). MPP = ${mpp.toFixed(0)} mmHg.`,
    });
  }

  if (!ppvValida) {
    alerts.push({
      tone: 'purple',
      title: 'PPV poco confiable en este contexto',
      detail: raw.disfuncionVd
        ? 'Falso positivo en disfunción de VD / HTP (Wyler von Ballmoos 2010, AUC 0,555).'
        : raw.piaAlta
          ? 'Confusión por HIA (PIA ≥ 12 mmHg) sobre presiones transmurales.'
          : 'Exige ritmo sinusal y ventilación mecánica controlada sin esfuerzo con Vt adecuado.',
    });
  }

  if (!plrConfiable) {
    alerts.push({
      tone: 'purple',
      title: 'PLR pierde sensibilidad en PIA ≥ 12 mmHg',
      detail: 'La hipertensión intraabdominal colapsa el retorno cava inferior y desploma la AUROC de PLR de 0,96 a 0,71 (falsos negativos).',
    });
  }

  if (vneri !== null && vneri < 2.6) {
    alerts.push({
      tone: 'red',
      title: `VNERi crítico (${vneri.toFixed(2)} < 2,6 · ref. bitartrato)`,
      detail: 'Zona inferior de la curva en J invertida de Goury 2025 (mortalidad 56±6%). En ese contexto se discute un segundo vasopresor (vasopresina) y la búsqueda de confusores.',
    });
  } else if (vneri !== null && vneri > 10.8) {
    alerts.push({
      tone: 'amber',
      title: `VNERi elevado (${vneri.toFixed(2)} > 10,8)`,
      detail: 'Rama derecha de Goury 2025 (mortalidad 39±19%): podría reflejar bradicardia relativa o una exposición vasopresora mayor que la necesaria.',
    });
  }

  if (alertaDesteteNa && eadyn !== null) {
    alerts.push({
      tone: 'amber',
      title: `Riesgo en destete vasopresor (Eadyn ${eadyn.toFixed(2)} < 0,94)`,
      detail: 'Guinot 2015 (AUC 0,87) lo asocia a mayor probabilidad de caída ≥15% de la PAM al bajar la noradrenalina.',
    });
  }

  if (raw.htaCronica && pam >= 65 && pam <= 72) {
    alerts.push({
      tone: 'cyan',
      title: 'Recordatorio OPTPRESS 2025 en HTA crónica',
      detail: 'OPTPRESS 2025 no mostró beneficio de apuntar a PAM 80–85 mmHg solo por el antecedente (mortalidad 39,3% vs 28,6% en hipertensos). Una prueba corta con PAM más alta se consideraría solo en Tier 2 y con CRT > 3 s.',
    });
  }

  if (dpp < 37) {
    alerts.push({
      tone: 'amber',
      title: `DPP reducida (${dpp.toFixed(0)} mmHg < 37)`,
      detail: 'Umbral pronóstico descripto por Lim 2025 en una cohorte cardiogénica/ECMO (no séptica); orienta a vigilar el riesgo coronario-renal si hay disfunción miocárdica o congestión venosa.',
    });
  }

  // Generate 2 cardiac cycles of Windkessel arterial waveform (0..200 normalized X, 0..100 Y)
  const waveformPoints: Array<{ x: number; y: number }> = [];
  const totalSamples = 120;
  for (let i = 0; i <= totalSamples; i++) {
    const phase = (i % 60) / 60; // 0..1 per beat
    let pVal: number;
    if (phase < 0.16) {
      // Systolic upstroke
      const u = phase / 0.16;
      pVal = pad + (pas - pad) * Math.sin((u * Math.PI) / 2);
    } else if (phase < 0.30) {
      // Late systole to dicrotic notch
      const u = (phase - 0.16) / 0.14;
      const notchP = pad + (pas - pad) * (pad < 50 ? 0.38 : 0.52);
      pVal = pas - (pas - notchP) * u;
    } else {
      // Windkessel exponential diastolic decay modulated by PAD & FC
      const u = (phase - 0.30) / 0.70;
      const notchP = pad + (pas - pad) * (pad < 50 ? 0.38 : 0.52);
      const decayStrength = pad < 50 ? 2.4 : 1.3;
      pVal = pad + (notchP - pad) * Math.exp(-decayStrength * u);
    }
    waveformPoints.push({ x: (i / totalSamples) * 100, y: pVal });
  }

  const pmsf = Math.min(22, Math.max(7, 8 + pvc * 0.45 + naBaseEq * 7));
  const overPlateau = pvc >= 12 || raw.vexusCongestion;

  return {
    pam,
    pp,
    mpp,
    dpp,
    dsi,
    naBitEq,
    naBaseEq,
    naUgMinBit,
    naUgMinBase,
    vneri,
    vneriBand,
    eadyn,
    alertaDesteteNa,
    ppvValida,
    plrConfiable,
    ppZona,
    andromedaSteps,
    alerts,
    waveformPoints,
    guytonPoints: { pmsf, padPoint: pvc, overPlateau },
  };
}

export const M05_PRESETS: M05Preset[] = [
  {
    id: 'ko_vasoplejia',
    nombre: '1 · Vasoplejia Temprana (Ko 2026)',
    resumen: 'PAD 40 + FC 120 → DSI 3,00 · VNERi crítico · Tier 1 NA precoz',
    inputs: {
      pas: 96,
      pad: 40,
      fc: 120,
      pvc: 6,
      pesoKg: 75,
      formulacion: 'bitartrato_mono',
      dosisNa: 0.18,
      ppv: 14,
      svv: 12,
      crt: 4.0,
      htaCronica: false,
      piaAlta: false,
      disfuncionVd: false,
      vexusCongestion: false,
      sinusalVmVt8: true,
    },
  },
  {
    id: 'anciano_rigido',
    nombre: '2 · Anciano Rígido (PP > 70 mmHg)',
    resumen: 'PAM engañosa 78 con PAD 48 + PP 90 · Cuidado OPTPRESS 2025',
    inputs: {
      pas: 138,
      pad: 48,
      fc: 104,
      pvc: 10,
      pesoKg: 75,
      formulacion: 'bitartrato_mono',
      dosisNa: 0.25,
      ppv: 11,
      svv: 11,
      crt: 3.8,
      htaCronica: true,
      piaAlta: false,
      disfuncionVd: false,
      vexusCongestion: false,
      sinusalVmVt8: true,
    },
  },
  {
    id: 'bajo_vs',
    nombre: '3 · Bajo Volumen Sistólico (PP < 40)',
    resumen: 'PAS 78 / PAD 46 (PP 32) · Eadyn 1,31 · Evaluar FR + Eco',
    inputs: {
      pas: 78,
      pad: 46,
      fc: 128,
      pvc: 4,
      pesoKg: 75,
      formulacion: 'bitartrato_mono',
      dosisNa: 0.1,
      ppv: 21,
      svv: 16,
      crt: 4.8,
      htaCronica: false,
      piaAlta: false,
      disfuncionVd: false,
      vexusCongestion: false,
      sinusalVmVt8: true,
    },
  },
  {
    id: 'shock_pia_vexus',
    nombre: '4 · Refractario + PIA ≥ 12 + VExUS ≥ 2',
    resumen: 'MPP 39 · DPP 24 · PLR y PPV inválidas · Bloqueo volumen',
    inputs: {
      pas: 88,
      pad: 42,
      fc: 124,
      pvc: 18,
      pesoKg: 75,
      formulacion: 'bitartrato_mono',
      dosisNa: 0.9,
      ppv: 18,
      svv: 15,
      crt: 5.2,
      htaCronica: false,
      piaAlta: true,
      disfuncionVd: false,
      vexusCongestion: true,
      sinusalVmVt8: true,
    },
  },
  {
    id: 'trampa_sal_base',
    nombre: '5 · Trampa Base vs. Bitartrato (0,18 Base)',
    resumen: 'Misma cifra nominal en Base → VNERi real 0,93 (vs 1,85 falso)',
    inputs: {
      pas: 96,
      pad: 40,
      fc: 120,
      pvc: 6,
      pesoKg: 75,
      formulacion: 'base',
      dosisNa: 0.18,
      ppv: 14,
      svv: 12,
      crt: 4.0,
      htaCronica: false,
      piaAlta: false,
      disfuncionVd: false,
      vexusCongestion: false,
      sinusalVmVt8: true,
    },
  },
];
