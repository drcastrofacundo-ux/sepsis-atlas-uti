export type AntibioticId =
  | 'meropenem'
  | 'piperacilina'
  | 'cefepime'
  | 'cefazolina'
  | 'vancomicina';

export type InfusionMode = 'bolo_30m' | 'extendida_3h' | 'extendida_4h' | 'continua_24h';
export type AdsorptionFilter = 'ninguna' | 'oxiris' | 'cytosorb_pmx';
export type MeropenemBagPolicy = 'cambio_6_8h' | 'unica_24h';

export interface DrugConfig {
  id: AntibioticId;
  nombre: string;
  clase: 'tiempo' | 'auc';
  vdBaseLKg: number;
  fuRef: number;
  clNoRenalLH: number;
  kRenal: number;
  defaultLoadMg: number;
  defaultDailyMg: number;
  minDailyMg: number;
  maxDailyMg: number;
  stepDailyMg: number;
  intervaloH: number;
  toxicTroughTotalMgL: number | null;
  criticalTroughTotalMgL: number | null;
  fuScaleByAlbuminInRenal: boolean;
  notaFarmaco: string;
}

export const DRUG_CONFIGS: Record<AntibioticId, DrugConfig> = {
  meropenem: {
    id: 'meropenem',
    nombre: 'Meropenem',
    clase: 'tiempo',
    vdBaseLKg: 0.3,
    fuRef: 0.98,
    clNoRenalLH: 1.2,
    kRenal: 0.078,
    defaultLoadMg: 2000,
    defaultDailyMg: 3000,
    minDailyMg: 1000,
    maxDailyMg: 6000,
    stepDailyMg: 500,
    intervaloH: 8,
    toxicTroughTotalMgL: null,
    criticalTroughTotalMgL: null,
    fuScaleByAlbuminInRenal: false,
    notaFarmaco: 'Inestable >10% tras 6–8 h a >25 °C: recambiar bolsa c/6–8 h en infusión continua.',
  },
  piperacilina: {
    id: 'piperacilina',
    nombre: 'Piperacilina (comp. Pip/Tazo)',
    clase: 'tiempo',
    vdBaseLKg: 0.28,
    fuRef: 0.7,
    clNoRenalLH: 1.6,
    kRenal: 0.065,
    defaultLoadMg: 4000,
    defaultDailyMg: 16000,
    minDailyMg: 8000,
    maxDailyMg: 18000,
    stepDailyMg: 2000,
    intervaloH: 6,
    toxicTroughTotalMgL: null,
    criticalTroughTotalMgL: null,
    fuScaleByAlbuminInRenal: false,
    notaFarmaco: 'Estable 24 h; en ARC (Ulldemolins 2026) falló >53–75% con esquemas intermitentes.',
  },
  cefepime: {
    id: 'cefepime',
    nombre: 'Cefepime',
    clase: 'tiempo',
    vdBaseLKg: 0.28,
    fuRef: 0.8,
    clNoRenalLH: 0.7,
    kRenal: 0.068,
    defaultLoadMg: 2000,
    defaultDailyMg: 6000,
    minDailyMg: 2000,
    maxDailyMg: 6000,
    stepDailyMg: 1000,
    intervaloH: 8,
    toxicTroughTotalMgL: 20,
    criticalTroughTotalMgL: 32,
    fuScaleByAlbuminInRenal: false,
    notaFarmaco: 'No reducir <48 h en LRA inicial (Kuwana 2026); ajustar ≥48–72 h si persiste LRA (neurotoxicidad valle >20 mg/L).',
  },
  cefazolina: {
    id: 'cefazolina',
    nombre: 'Cefazolina',
    clase: 'tiempo',
    vdBaseLKg: 0.2,
    fuRef: 0.2,
    clNoRenalLH: 0.3,
    kRenal: 0.05,
    defaultLoadMg: 2000,
    defaultDailyMg: 6000,
    minDailyMg: 2000,
    maxDailyMg: 8000,
    stepDailyMg: 1000,
    intervaloH: 8,
    toxicTroughTotalMgL: null,
    criticalTroughTotalMgL: null,
    fuScaleByAlbuminInRenal: true,
    notaFarmaco: 'Alta unión a proteínas (80%): hipoalbuminemia eleva f_u y acelera aclaramiento (Ulldemolins 2026).',
  },
  vancomicina: {
    id: 'vancomicina',
    nombre: 'Vancomicina',
    clase: 'auc',
    vdBaseLKg: 0.7,
    fuRef: 0.5,
    clNoRenalLH: 0.3,
    kRenal: 0.048,
    defaultLoadMg: 2000,
    defaultDailyMg: 2000,
    minDailyMg: 1000,
    maxDailyMg: 4000,
    stepDailyMg: 250,
    intervaloH: 12,
    toxicTroughTotalMgL: 20,
    criticalTroughTotalMgL: 25,
    fuScaleByAlbuminInRenal: false,
    notaFarmaco: 'Carga 20–35 mg/kg peso real (máx 3.000 mg); objetivo AUC₂₄/MIC 400–600 (Rybak 2020).',
  },
};

export interface M09Inputs {
  farmaco: AntibioticId;
  modalidad: InfusionMode;
  conCarga: boolean;
  dosisCargaMg: number;
  dosisDiariaMg: number;
  pesoKg: number;
  uClcrMlMin: number;
  sepsisVdExp: boolean;
  ckrtEfluenteMlKgH: number;
  adsorcion: AdsorptionFilter;
  albuminaGdL: number;
  micMgL: number;
  bolsaMeropenem: MeropenemBagPolicy;
}

export interface PkPoint {
  tHour: number;
  cFreeMain: number;
  cFreeRefBolus: number;
  cTotalMain: number;
}

export interface M09Alert {
  tone: 'red' | 'amber' | 'cyan' | 'green';
  title: string;
  detail: string;
}

export interface M09Outputs {
  vdL: number;
  fu: number;
  clRenalLH: number;
  clCkrtLH: number;
  clTotalLH: number;
  ke: number;
  tHalfH: number;
  points: PkPoint[];
  pctFt1xMic_0_24: number;
  pctFt4xMic_0_24: number;
  pctFt1xMic_24_48: number;
  pctFt4xMic_24_48: number;
  pctFt4xMic_RefBolus_0_24: number;
  auc24Total: number;
  auc24OverMic: number;
  auc48Total: number;
  auc48OverMic: number;
  troughFree48h: number;
  troughTotal48h: number;
  peakFree: number;
  alerts: M09Alert[];
}

export interface M09Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M09Inputs;
}

function runCompartmentCurve(
  cfg: DrugConfig,
  inputs: M09Inputs,
  modalidadOverride: InfusionMode,
  conCargaOverride: boolean,
  vdL: number,
  fu: number,
  ke: number
): { cFree: number[]; cTotal: number[] } {
  const dt = 5 / 60; // 5 minutos en horas
  const steps = Math.round(48 / dt); // 576 pasos -> 577 puntos
  const cFree: number[] = new Array(steps + 1);
  const cTotal: number[] = new Array(steps + 1);

  const numDosesPerDay = 24 / cfg.intervaloH;
  const maintDoseMg = inputs.dosisDiariaMg / numDosesPerDay;
  const infDurationH =
    modalidadOverride === 'bolo_30m'
      ? 0.5
      : modalidadOverride === 'extendida_3h'
        ? 3.0
        : modalidadOverride === 'extendida_4h'
          ? 4.0
          : 24.0;

  let amountMg = 0;
  cFree[0] = 0;
  cTotal[0] = 0;

  for (let i = 0; i < steps; i++) {
    const tMid = (i + 0.5) * dt;
    let rateMgH = 0;

    if (modalidadOverride === 'continua_24h') {
      if (conCargaOverride && tMid < 0.5) {
        rateMgH = inputs.dosisCargaMg / 0.5;
      } else {
        let baseRate = inputs.dosisDiariaMg / 24;
        if (cfg.id === 'meropenem' && inputs.bolsaMeropenem === 'unica_24h') {
          const tBolsa = tMid % 24;
          if (tBolsa > 6) {
            baseRate *= Math.exp(-0.018 * (tBolsa - 6));
          }
        }
        rateMgH = baseRate;
      }
    } else {
      const doseIdx = Math.floor(tMid / cfg.intervaloH);
      const tInInterval = tMid - doseIdx * cfg.intervaloH;
      if (tInInterval < infDurationH) {
        const doseThisCycle =
          doseIdx === 0 && conCargaOverride ? inputs.dosisCargaMg : maintDoseMg;
        rateMgH = doseThisCycle / infDurationH;
      }
    }

    const expTerm = Math.exp(-ke * dt);
    amountMg = amountMg * expTerm + (rateMgH / ke) * (1 - expTerm);

    const totalConc = amountMg / vdL;
    cTotal[i + 1] = totalConc;
    cFree[i + 1] = totalConc * fu;
  }

  return { cFree, cTotal };
}

export function simulateM09(inputs: M09Inputs): M09Outputs {
  const cfg = DRUG_CONFIGS[inputs.farmaco];

  const vdFactor =
    cfg.id === 'vancomicina' ? 1.0 : inputs.sepsisVdExp ? 1.35 : 1.0;
  const vdL = cfg.vdBaseLKg * inputs.pesoKg * vdFactor;

  const fu =
    1 /
    (1 +
      (inputs.albuminaGdL / 4.0) * ((1 - cfg.fuRef) / Math.max(0.01, cfg.fuRef)));

  const renalAlbFactor = cfg.fuScaleByAlbuminInRenal ? fu / cfg.fuRef : 1.0;
  const clRenalLH = cfg.kRenal * renalAlbFactor * inputs.uClcrMlMin;

  const clCkrtLH =
    ((inputs.ckrtEfluenteMlKgH * inputs.pesoKg) / 1000) * fu;

  const adsorptionMultiplier =
    inputs.adsorcion === 'cytosorb_pmx'
      ? 1.25
      : inputs.adsorcion === 'oxiris'
        ? 1.1
        : 1.0;

  const clTotalLH =
    (cfg.clNoRenalLH + clRenalLH + clCkrtLH) * adsorptionMultiplier;
  const ke = Math.max(0.015, clTotalLH / vdL);
  const tHalfH = Math.LN2 / ke;

  const mainCurve = runCompartmentCurve(
    cfg,
    inputs,
    inputs.modalidad,
    inputs.conCarga,
    vdL,
    fu,
    ke
  );
  const refBolusCurve = runCompartmentCurve(
    cfg,
    inputs,
    'bolo_30m',
    false,
    vdL,
    fu,
    ke
  );

  const dt = 5 / 60;
  const steps = mainCurve.cFree.length - 1;
  const points: PkPoint[] = [];

  let count1x_0_24 = 0;
  let count4x_0_24 = 0;
  let count4xRef_0_24 = 0;
  let count1x_24_48 = 0;
  let count4x_24_48 = 0;
  let samples_0_24 = 0;
  let samples_24_48 = 0;
  let auc24Total = 0;
  let auc48Total = 0;
  let peakFree = 0;

  for (let i = 0; i <= steps; i++) {
    const tHour = i * dt;
    const cf = mainCurve.cFree[i];
    const ct = mainCurve.cTotal[i];
    const cfRef = refBolusCurve.cFree[i];
    if (cf > peakFree) peakFree = cf;

    points.push({
      tHour,
      cFreeMain: cf,
      cFreeRefBolus: cfRef,
      cTotalMain: ct,
    });

    if (i > 0) {
      if (tHour <= 24.0001) {
        samples_0_24 += 1;
        if (cf >= inputs.micMgL) count1x_0_24 += 1;
        if (cf >= 4 * inputs.micMgL) count4x_0_24 += 1;
        if (cfRef >= 4 * inputs.micMgL) count4xRef_0_24 += 1;
        auc24Total += 0.5 * (mainCurve.cTotal[i - 1] + ct) * dt;
      } else {
        samples_24_48 += 1;
        if (cf >= inputs.micMgL) count1x_24_48 += 1;
        if (cf >= 4 * inputs.micMgL) count4x_24_48 += 1;
        auc48Total += 0.5 * (mainCurve.cTotal[i - 1] + ct) * dt;
      }
    }
  }

  const pctFt1xMic_0_24 = (count1x_0_24 / samples_0_24) * 100;
  const pctFt4xMic_0_24 = (count4x_0_24 / samples_0_24) * 100;
  const pctFt4xMic_RefBolus_0_24 = (count4xRef_0_24 / samples_0_24) * 100;
  const pctFt1xMic_24_48 = (count1x_24_48 / samples_24_48) * 100;
  const pctFt4xMic_24_48 = (count4x_24_48 / samples_24_48) * 100;

  const auc24OverMic = auc24Total / inputs.micMgL;
  const auc48OverMic = auc48Total / inputs.micMgL;
  const troughFree48h = mainCurve.cFree[steps];
  const troughTotal48h = mainCurve.cTotal[steps];

  const alerts: M09Alert[] = [];

  if (inputs.uClcrMlMin > 130) {
    alerts.push({
      tone: 'amber',
      title: `ARC activo (uCLcr ${inputs.uClcrMlMin} mL/min > 130)`,
      detail:
        'Ulldemolins 2026 asocia el ARC a mayor riesgo de fracaso PK/PD (OR 7,7–10,9). Según Beijer 2025, aun la infusión extendida de 3 h no alcanzaría la meta en 45% (meropenem) y 38% (pip-tazo) sin carga, infusión continua y TDM.',
    });
  }

  if (inputs.uClcrMlMin <= 40 && inputs.ckrtEfluenteMlKgH === 0) {
    alerts.push({
      tone: 'cyan',
      title: 'Ventana LRA 0–48 h vs ≥48–72 h',
      detail:
        'Aldardeer 2024 (HR 0,588) y Kuwana 2026 (94% vs 61%) sugieren no reducir los β-lactámicos en las primeras 24–48 h tras la carga, y reevaluar el ajuste a las 48–72 h si la LRA persiste.',
    });
  }

  if (
    cfg.id === 'cefepime' &&
    cfg.toxicTroughTotalMgL !== null &&
    troughTotal48h > cfg.toxicTroughTotalMgL
  ) {
    alerts.push({
      tone: 'red',
      title: `ALERTA NEUROTOXICIDAD CEFEPIME (valle modelado a 48 h: ${troughTotal48h.toFixed(1)} mg/L)`,
      detail:
        'Supera el umbral de 20–32 mg/L asociado a neurotoxicidad (incidencia 10–15% en UCI: encefalopatía, mioclonías, estatus no convulsivo). Si la LRA persiste al día 2–3, correspondería considerar reducir la dosis o rotar.',
    });
  }

  if (cfg.id === 'vancomicina') {
    if (auc48OverMic < 400) {
      alerts.push({
        tone: 'amber',
        title: `Vancomicina subexpuesta (AUC₂₄₋₄₈/MIC: ${auc48OverMic.toFixed(0)} < 400)`,
        detail: 'Rybak 2020 recomienda carga por peso real (20–35 mg/kg, máx 3.000 mg) y ajuste hacia una meta de 400–600.',
      });
    } else if (auc48OverMic > 600 || troughTotal48h > 20) {
      alerts.push({
        tone: 'red',
        title: `Riesgo nefrotoxicidad Vancomicina (AUC/MIC: ${auc48OverMic.toFixed(0)})`,
        detail: 'Supera el rango de Rybak 2020 (400–600). En la práctica, el ajuste se guía por AUC₂₄/MIC con estimación bayesiana.',
      });
    } else {
      alerts.push({
        tone: 'green',
        title: `Vancomicina en rango óptimo (AUC/MIC: ${auc48OverMic.toFixed(0)})`,
        detail: 'Dentro de la ventana terapéutica 400–600 mg·h/L.',
      });
    }
  } else {
    if (pctFt4xMic_24_48 < 100) {
      alerts.push({
        tone: pctFt1xMic_24_48 < 90 ? 'red' : 'amber',
        title: `Meta Gatti & Pea (100% fT > 4×MIC) incompleta: ${pctFt4xMic_24_48.toFixed(0)}%`,
        detail: 'La subexposición <4×MIC se asocia a fracaso terapéutico y emergencia de resistencia. En el modelo podés probar infusión continua tras la carga completa o una dosis mayor.',
      });
    } else {
      alerts.push({
        tone: 'green',
        title: 'Meta crítica cumplida: 100% fT > 4×MIC',
        detail: 'Cobertura bactericida óptima sostenida (Gatti & Pea 2024; BLING III).',
      });
    }
  }

  if (
    cfg.id === 'meropenem' &&
    inputs.modalidad === 'continua_24h' &&
    inputs.bolsaMeropenem === 'unica_24h'
  ) {
    alerts.push({
      tone: 'red',
      title: 'Inestabilidad térmica Meropenem (Bolsa única 24 h)',
      detail: 'Se describe pérdida >10% de potencia después de 6–8 h a >25 °C; por eso se recomienda recambiar bolsas o jeringas de 50 mL cada 6–8 h. La caída de la curva es una aproximación del modelo.',
    });
  }

  if (inputs.adsorcion !== 'ninguna') {
    alerts.push({
      tone: 'amber',
      title: 'Hemoperfusión adsortiva activa',
      detail: 'Recordar captura en cartuchos (PMX adsorbe hasta 55% linezolid; Seraph 62% tobramicina / 59% gentamicina; CytoSorb glucopéptidos): considerar dosis suplementaria y TDM.',
    });
  }

  return {
    vdL,
    fu,
    clRenalLH,
    clCkrtLH,
    clTotalLH,
    ke,
    tHalfH,
    points,
    pctFt1xMic_0_24,
    pctFt4xMic_0_24,
    pctFt1xMic_24_48,
    pctFt4xMic_24_48,
    pctFt4xMic_RefBolus_0_24,
    auc24Total,
    auc24OverMic,
    auc48Total,
    auc48OverMic,
    troughFree48h,
    troughTotal48h,
    peakFree,
    alerts,
  };
}

export const M09_PRESETS: M09Preset[] = [
  {
    id: 'arc_trauma',
    nombre: '1 · Sepsis/Trauma con ARC (uCLcr 175)',
    resumen: 'Pip/Tazo 18 g/d Continua vs Bolo 30 min frente a P. aeruginosa MIC 4',
    inputs: {
      farmaco: 'piperacilina',
      modalidad: 'continua_24h',
      conCarga: true,
      dosisCargaMg: 4000,
      dosisDiariaMg: 18000,
      pesoKg: 80,
      uClcrMlMin: 175,
      sepsisVdExp: true,
      ckrtEfluenteMlKgH: 0,
      adsorcion: 'ninguna',
      albuminaGdL: 2.8,
      micMgL: 4,
      bolsaMeropenem: 'cambio_6_8h',
    },
  },
  {
    id: 'lra_temprana',
    nombre: '2 · LRA Séptica 0–48 h (Cefepime pleno)',
    resumen: 'uCLcr 25 · 6 g/d sin reducir las primeras 48 h → dispara alerta revaluación día 2',
    inputs: {
      farmaco: 'cefepime',
      modalidad: 'extendida_3h',
      conCarga: true,
      dosisCargaMg: 2000,
      dosisDiariaMg: 6000,
      pesoKg: 75,
      uClcrMlMin: 25,
      sepsisVdExp: true,
      ckrtEfluenteMlKgH: 0,
      adsorcion: 'ninguna',
      albuminaGdL: 2.4,
      micMgL: 4,
      bolsaMeropenem: 'cambio_6_8h',
    },
  },
  {
    id: 'ckrt_meropenem',
    nombre: '3 · CKRT + Meropenem Bolsa 24 h (Trampa)',
    resumen: 'Efluente 35 mL/kg/h + degradación vespertina >25 °C en bolsa única',
    inputs: {
      farmaco: 'meropenem',
      modalidad: 'continua_24h',
      conCarga: true,
      dosisCargaMg: 2000,
      dosisDiariaMg: 3000,
      pesoKg: 75,
      uClcrMlMin: 5,
      sepsisVdExp: true,
      ckrtEfluenteMlKgH: 35,
      adsorcion: 'oxiris',
      albuminaGdL: 2.2,
      micMgL: 2,
      bolsaMeropenem: 'unica_24h',
    },
  },
  {
    id: 'hipoalb_vanco',
    nombre: '4 · Hipoalbuminemia 1,5 + Cefazolina (ARC)',
    resumen: 'Alb 1,5 eleva f_u y aclaramiento (Ulldemolins 2026) · Probar vs Bolo',
    inputs: {
      farmaco: 'cefazolina',
      modalidad: 'extendida_3h',
      conCarga: true,
      dosisCargaMg: 2000,
      dosisDiariaMg: 6000,
      pesoKg: 85,
      uClcrMlMin: 140,
      sepsisVdExp: true,
      ckrtEfluenteMlKgH: 0,
      adsorcion: 'ninguna',
      albuminaGdL: 1.5,
      micMgL: 2,
      bolsaMeropenem: 'cambio_6_8h',
    },
  },
];
