export interface M03Inputs {
  inflamacion: number; // 0 - 100 %
  pc: number; // 10 - 45 mmHg
  shearStress: number; // 1 - 25 dyn/cm2
  albumina: number; // 1.2 - 4.8 g/dL
  pcr: number; // 2 - 400 mg/L
}

export interface M03Outputs {
  igc: number;
  espesorUm: number;
  sigma: number;
  piP: number;
  piSg: number;
  lpSrel: number;
  jv: number;
  tera: number;
  eNosPct: number;
  aliDirecto: number;
  ifcPalacios: number;
  estadoBarrera: 'Intacta' | 'Shedding moderado' | 'Colapso endotelial + fuga';
}

export type PcrUnit = 'mg/L' | 'mg/dL';
export type AlbUnit = 'g/L' | 'g/dL';

export interface DualAliIfcResult {
  pcrMgL: number;
  albGL: number;
  aliDirecto: number;
  ifcPalacios: number;
  riesgoPalacios: string;
  riesgoGarciaUribe: string;
  colorTone: 'green' | 'amber' | 'red';
  notaEscala: string;
}

export interface M03Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M03Inputs;
}

export interface M03Hotspot {
  id: string;
  nombre: string;
  etiqueta: string;
  x: number;
  y: number;
  capaBase: string;
  capaFrontera: string;
}

const PI_INTERSTICIAL = -2;

export function simulateM03(inputs: M03Inputs): M03Outputs {
  const { inflamacion, pc, shearStress, albumina, pcr } = inputs;

  const igc = Math.max(
    0.15,
    1 - 0.0085 * inflamacion * (1 - 0.12 * Math.max(0, albumina - 2.5))
  );
  const espesorUm = 0.35 + 1.65 * igc;
  const sigma = 0.85 * Math.pow(igc, 1.35);
  const piP = 5.54 * albumina;
  const piSg = piP * Math.pow(1 - igc, 1.1);
  const lpSrel = 1 + 2.5 * (1 - igc);
  const jv = lpSrel * (pc - PI_INTERSTICIAL - sigma * (piP - piSg));
  const tera = 5 + 13 * (1 - igc);

  const shearOpt =
    shearStress >= 10 && shearStress <= 20
      ? 100
      : shearStress < 10
        ? (shearStress / 10) * 100
        : Math.max(55, 100 - (shearStress - 20) * 6);
  const eNosPct = Math.min(100, Math.max(5, shearOpt * igc));

  const albGL = albumina * 10;
  const aliDirecto = albGL > 0 ? pcr / albGL : 0;
  const ifcPalacios = 10 * aliDirecto;

  let estadoBarrera: M03Outputs['estadoBarrera'] = 'Intacta';
  if (igc < 0.45 || jv > 65) {
    estadoBarrera = 'Colapso endotelial + fuga';
  } else if (igc < 0.78 || jv > 22) {
    estadoBarrera = 'Shedding moderado';
  }

  return {
    igc,
    espesorUm,
    sigma,
    piP,
    piSg,
    lpSrel,
    jv,
    tera,
    eNosPct,
    aliDirecto,
    ifcPalacios,
    estadoBarrera,
  };
}

export function calcDualAliIfc(
  pcrValue: number,
  pcrUnit: PcrUnit,
  albValue: number,
  albUnit: AlbUnit
): DualAliIfcResult {
  const safePcr = Math.max(0, pcrValue);
  const safeAlb = Math.max(0.1, albValue);
  const pcrMgL = pcrUnit === 'mg/dL' ? safePcr * 10 : safePcr;
  const albGL = albUnit === 'g/dL' ? safeAlb * 10 : safeAlb;

  const aliDirecto = pcrMgL / albGL;
  const ifcPalacios = 10 * aliDirecto;

  let riesgoPalacios = 'Rango basal (2,5–25)';
  let colorTone: 'green' | 'amber' | 'red' = 'green';
  if (ifcPalacios >= 85.55) {
    riesgoPalacios = 'Alto riesgo fuga / Palacios ≥ 85,55 (AUC 0,88–0,95)';
    colorTone = 'red';
  } else if (ifcPalacios > 61) {
    riesgoPalacios = 'Fuga activa / Corte Cordemans > 61';
    colorTone = 'amber';
  } else if (ifcPalacios > 25) {
    riesgoPalacios = 'Zona intermedia (25–61)';
    colorTone = 'amber';
  }

  const riesgoGarciaUribe =
    aliDirecto >= 7.41
      ? 'Supera corte García Uribe Día 3 (ALI ≥ 7,41)'
      : 'Por debajo del umbral Día 3 (< 7,41)';

  const notaEscala = `Con ${pcrValue} ${pcrUnit} y ${albValue} ${albUnit}, la misma química arroja ${aliDirecto.toFixed(2)} en escala directa (García Uribe) y ${ifcPalacios.toFixed(1)} en escala ×10/×100 (Palacios/Cordemans). Nunca comparar ambas escalas sin homogeneizar.`;

  return {
    pcrMgL,
    albGL,
    aliDirecto,
    ifcPalacios,
    riesgoPalacios,
    riesgoGarciaUribe,
    colorTone,
    notaEscala,
  };
}

export const M03_PRESETS: M03Preset[] = [
  {
    id: 'sano',
    nombre: 'Endotelio Sano',
    resumen: 'I_gc ~0,97 · σ ~0,81 · TERA ~5%/h · ALI 0,13',
    inputs: { inflamacion: 5, pc: 20, shearStress: 15, albumina: 4.0, pcr: 5 },
  },
  {
    id: 'sepsis_temprana',
    nombre: 'Sepsis Temprana',
    resumen: 'Shedding inicial moderado · π_sg en ascenso · ALI 4,8',
    inputs: { inflamacion: 45, pc: 24, shearStress: 9, albumina: 2.9, pcr: 140 },
  },
  {
    id: 'shock_edema',
    nombre: 'Shock + Sobrecarga Hídrica',
    resumen: 'Colapso σ → 0,13 · fuga J_v masiva · IFC 147 (≥85,55)',
    inputs: { inflamacion: 88, pc: 38, shearStress: 4, albumina: 1.9, pcr: 280 },
  },
  {
    id: 'hipoalb_no_infl',
    nombre: 'Hipoalbuminemia sin Inflamación',
    resumen: 'Barrera intacta pese a Alb 2,2 g/dL · ALI 0,36',
    inputs: { inflamacion: 10, pc: 18, shearStress: 14, albumina: 2.2, pcr: 8 },
  },
];

export const M03_HOTSPOTS: M03Hotspot[] = [
  {
    id: 'membrana',
    nombre: 'Membrana Endotelial y VE-Cadherina',
    etiqueta: 'Bordes intercelulares',
    x: 580,
    y: 430,
    capaBase:
      'La monocapa endotelial regula el paso paracelular mediante uniones adherentes (VE-cadherina) y estrechas (claudinas/ZO-1). En salud mantienen mínima permeabilidad proteica.',
    capaFrontera:
      'En sepsis, fosforilación de VE-cadherina mediada por Angiopoyetina-2 (Zhuo 2024 AUC 0,76) y VEGF abre poros interendoteliales, multiplicando L_pS y permitiendo fuga proteica.',
  },
  {
    id: 'sindecano',
    nombre: 'Sindecano-1 (Proteoglicano Transmembrana)',
    etiqueta: 'Anclaje estructural',
    x: 290,
    y: 392,
    capaBase:
      'Proteína transmembrana anclada al citoesqueleto de actina. Sus 5 sitios de glicosilación sostienen cadenas de heparán sulfato y condroitín sulfato formando el andamiaje principal.',
    capaFrontera:
      'Auditoría 2025–2026: MMP-2/9 y ADAM17 clivan Sindecano-1, pero Daniyarova 2025 (n=4.529) demostró que SYN-1 predice mortalidad (OR 2,04) mas NO MODS (OR 2,35 NS) ni falla respiratoria (OR 1,05 NS), superado por Endocan (OR 5,06). Wang 2026 confirmó que la tormenta inmune precede al shedding.',
  },
  {
    id: 'glipicano',
    nombre: 'Glipicano-1 y Caveolas eNOS',
    etiqueta: 'Mecanotransducción NO',
    x: 680,
    y: 405,
    capaBase:
      'Anclado mediante GPI en microdominios lipídicos (caveolas). Transmite el roce del flujo sanguíneo (shear stress) para activar la óxido nítrico sintasa endotelial (eNOS).',
    capaFrontera:
      'El desprendimiento de glipicano y heparán sulfato desacopla la eNOS fisiológica mientras la vía inflamatoria sobreexpresa iNOS, generando pérdida de autorregulación arteriolar y peroxinitrito.',
  },
  {
    id: 'heparan',
    nombre: 'Heparán Sulfato (50–90% de GAGs)',
    etiqueta: 'Carga negativa + AT-III',
    x: 155,
    y: 285,
    capaBase:
      'Glicosaminoglicano altamente sulfatado (~50–90% del glicocálix) que provee fuerte carga negativa repeliendo albúmina y leucocitos, además de fijar Antitrombina III y SOD.',
    capaFrontera:
      'CLOVERS 2025 (Oshima, n=574 LC-MS): los terciles basales de HS predijeron mortalidad a 90d en gradiente 9,9% → 20,4% → 44,2% (aHR 3,12), pero el manejo liberal vs. restrictivo de fluidos NO alteró el shedding de HS ni SYN-1 a 24 h.',
  },
  {
    id: 'condroitin',
    nombre: 'Condroitín Sulfato',
    etiqueta: 'Malla elástica',
    x: 450,
    y: 322,
    capaBase:
      'Segundo glicosaminoglicano en abundancia (~10–20%); estabiliza junto al hialuronano la hidratación y porosidad uniforme de la capa superficial endotelial.',
    capaFrontera:
      'La pérdida conjunta de condroitín y heparán sulfato colapsa el coeficiente de reflexión σ desde ~0,85 hacia <0,15, destruyendo el tamiz oncótico protector.',
  },
  {
    id: 'hialuronano',
    nombre: 'Hialuronano + Receptor CD44',
    etiqueta: 'Red de cribado largo',
    x: 825,
    y: 250,
    capaBase:
      'Polímero glucosaminoglicano no sulfatado de muy alto peso molecular fijado por receptores CD44, atrapando agua estructural para formar una matriz gelatinosa estable.',
    capaFrontera:
      'La hialuronidasa y ROS lo fragmentan en oligómeros de bajo peso molecular que actúan paradójicamente como DAMPs proinflamatorios sobre TLR2/TLR4 y CD44 endotelial.',
  },
  {
    id: 'albumina',
    nombre: 'Albúmina Adsorbida y Presión Oncótica π_sg',
    etiqueta: 'Capa superficial ESL',
    x: 365,
    y: 240,
    capaBase:
      'Aunque negativa en carga neta, la albúmina contiene residuos cargados positivamente (arginina/lisina) que se intercalan en la red de GAGs estabilizando la porosidad del glicocálix y generando π_p.',
    capaFrontera:
      'ARISS 2026 (n=440): titular albúmina 20% para meta ≥3,0 g/dL fue neutra a 90d (43,3% vs 45,9%, p=0,71). Cuando σ cae en shock, la TERA sube >15%/h y la albúmina exógena fuga al intersticio (y está contraindicada en TCE por SAFE-TBI RR 1,88).',
  },
  {
    id: 'antitrombina',
    nombre: 'Antitrombina III, TFPI y ecSOD',
    etiqueta: 'Escudo antitrombótico',
    x: 235,
    y: 225,
    capaBase:
      'El heparán sulfato fija Antitrombina III acelerando ×1.000 la neutralización de trombina/FXa, junto con TFPI y superóxido dismutasa extracelular.',
    capaFrontera:
      'Su pérdida expone moléculas de adhesión (ICAM-1/VCAM-1/P-selectina) iniciando inmunotrombosis microvascular, resistencia a heparina (AT <50%) y atrapamiento de NETs (M08).',
  },
  {
    id: 'flujo',
    nombre: 'Zona de Exclusión Eritrocitaria y PBR',
    etiqueta: 'Flujo laminar + GlycoCheck',
    x: 760,
    y: 105,
    capaBase:
      'En flujo laminar sano, los eritrocitos circulan por el eje central dejando un margen plasmático libre respecto al endotelio.',
    capaFrontera:
      'Auditoría 2026: Rovas & Kümpers (Crit Care 30:413) reconocen que PBR NO mide grosor anatómico ni fuga. En EDGE 2026 (n=299) el PBR no sobrevivió al multivariable (p=0,1; ruido dentro de CoV 5,26%), y en Beltrán 2026 (n=239) no difirió entre clusters (p=0,753).',
  },
  {
    id: 'intersticio',
    nombre: 'Espacio Subglicocálix e Intersticio (Starling Moderno)',
    etiqueta: 'Ecuación Levick-Michel',
    x: 580,
    y: 520,
    capaBase:
      'Modelo clásico obsoleto asumía reabsorción venular. El modelo revisado de Levick-Michel demuestra que la fuerza oncótica actúa entre el plasma luminal y el espacio subglicocálix protegido (π_p - π_sg), sin reabsorción venular neta.',
    capaFrontera:
      'Cuando se degrada el glicocálix, π_sg iguala a π_p y desaparece la barrera oncótica: la filtración J_v queda gobernada por la presión hidrostática capilar Pc (edema refractario ante balances positivos sostenidos).',
  },
];
