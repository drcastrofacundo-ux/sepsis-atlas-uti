import assert from 'node:assert/strict';
import { calcDualAliIfc, M03_PRESETS, simulateM03 } from '../src/engines/m03Engine.ts';
import { simulateM05 } from '../src/engines/m05Engine.ts';
import { simulateM09 } from '../src/engines/m09Engine.ts';

// ---- M03 Verification ----
const aliA = calcDualAliIfc(180, 'mg/L', 20, 'g/L');
const aliB = calcDualAliIfc(18, 'mg/dL', 2.0, 'g/dL');
assert.equal(aliA.aliDirecto, 9.0, 'M03 ALI directo 180 mg/L / 20 g/L debe ser 9.0');
assert.equal(aliA.ifcPalacios, 90.0, 'M03 IFC Palacios debe ser 90.0');
assert.equal(aliB.aliDirecto, 9.0, 'M03 equivalencia mg/dL + g/dL debe dar 9.0');
assert.equal(aliB.ifcPalacios, 90.0, 'M03 equivalencia Palacios debe dar 90.0');

const outSano = simulateM03(M03_PRESETS[0].inputs);
assert.ok(outSano.igc > 0.94, `M03 sano I_gc > 0.94 (got ${outSano.igc})`);
assert.ok(outSano.sigma > 0.78, `M03 sano sigma > 0.78 (got ${outSano.sigma})`);

const outShock = simulateM03(M03_PRESETS[2].inputs);
assert.ok(outShock.igc < 0.35, `M03 shock I_gc < 0.35 (got ${outShock.igc})`);
assert.ok(outShock.tera > 13, `M03 shock TERA > 13%/h (got ${outShock.tera})`);

// ---- M05 Verification ----
const m05Bit = simulateM05({
  pas: 108,
  pad: 44,
  fc: 120,
  pvc: 8,
  pesoKg: 75,
  formulacion: 'bitartrato_mono',
  dosisNa: 0.48,
  ppv: 14,
  svv: 12,
  crt: 4.1,
  htaCronica: false,
  piaAlta: false,
  disfuncionVd: false,
  vexusCongestion: false,
  sinusalVmVt8: true,
});
assert.ok(Math.abs(m05Bit.naBaseEq - 0.24) < 1e-6, 'M05 conversion bitartrato->base 0.48 debe dar 0.24');
assert.ok(Math.abs(m05Bit.pam - 65.333) < 0.05, `M05 PAM debe ser ~65.33 (got ${m05Bit.pam})`);
assert.equal(m05Bit.pp, 64, 'M05 PP debe ser 64');
assert.ok(Math.abs(m05Bit.dsi - 2.727) < 0.01, `M05 DSI debe ser ~2.73 (got ${m05Bit.dsi})`);
assert.ok(m05Bit.vneri !== null && Math.abs(m05Bit.vneri - 44 / (0.48 * 120)) < 1e-4, 'M05 VNERi debe coincidir');
assert.equal(m05Bit.vneriBand, 'critica', 'M05 VNERi 0.76 debe caer en banda critica (<2.6)');

const m05Base = simulateM05({
  pas: 108,
  pad: 44,
  fc: 120,
  pvc: 8,
  pesoKg: 75,
  formulacion: 'base',
  dosisNa: 0.24,
  ppv: 14,
  svv: 12,
  crt: 4.1,
  htaCronica: false,
  piaAlta: false,
  disfuncionVd: false,
  vexusCongestion: false,
  sinusalVmVt8: true,
});
assert.ok(
  m05Bit.vneri !== null && m05Base.vneri !== null && Math.abs(m05Bit.vneri - m05Base.vneri) < 1e-6,
  'M05 VNERi debe ser identico entre 0.48 bitartrato y 0.24 base'
);

const m05Pia = simulateM05({
  pas: 100,
  pad: 48,
  fc: 110,
  pvc: 14,
  pesoKg: 75,
  formulacion: 'base',
  dosisNa: 0.2,
  ppv: 18,
  svv: 15,
  crt: 3.5,
  htaCronica: false,
  piaAlta: true,
  disfuncionVd: false,
  vexusCongestion: false,
  sinusalVmVt8: true,
});
assert.equal(m05Pia.ppvValida, false, 'PIA >= 12 debe invalidar PPV');
assert.equal(m05Pia.plrConfiable, false, 'PIA >= 12 debe marcar PLR no confiable (AUROC 0.71)');

// ---- M09 Verification ----
const baseArc = {
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
};
const m09Cont = simulateM09(baseArc);
const m09Bolus = simulateM09({ ...baseArc, modalidad: 'bolo_30m', conCarga: false });
assert.ok(
  m09Cont.pctFt4xMic_24_48 > m09Bolus.pctFt4xMic_24_48,
  `M09 ARC continua (${m09Cont.pctFt4xMic_24_48.toFixed(1)}%) debe superar bolo (${m09Bolus.pctFt4xMic_24_48.toFixed(1)}%)`
);

const meroStable = simulateM09({
  farmaco: 'meropenem',
  modalidad: 'continua_24h',
  conCarga: true,
  dosisCargaMg: 2000,
  dosisDiariaMg: 3000,
  pesoKg: 75,
  uClcrMlMin: 30,
  sepsisVdExp: true,
  ckrtEfluenteMlKgH: 25,
  adsorcion: 'ninguna',
  albuminaGdL: 2.5,
  micMgL: 2,
  bolsaMeropenem: 'cambio_6_8h',
});
const meroDegraded = simulateM09({
  farmaco: 'meropenem',
  modalidad: 'continua_24h',
  conCarga: true,
  dosisCargaMg: 2000,
  dosisDiariaMg: 3000,
  pesoKg: 75,
  uClcrMlMin: 30,
  sepsisVdExp: true,
  ckrtEfluenteMlKgH: 25,
  adsorcion: 'ninguna',
  albuminaGdL: 2.5,
  micMgL: 2,
  bolsaMeropenem: 'unica_24h',
});
assert.ok(
  meroDegraded.troughFree48h < meroStable.troughFree48h,
  `M09 Meropenem bolsa 24h (${meroDegraded.troughFree48h.toFixed(2)}) debe caer respecto a recambio 6-8h (${meroStable.troughFree48h.toFixed(2)})`
);

const cefLra = simulateM09({
  farmaco: 'cefepime',
  modalidad: 'extendida_3h',
  conCarga: true,
  dosisCargaMg: 2000,
  dosisDiariaMg: 6000,
  pesoKg: 75,
  uClcrMlMin: 15,
  sepsisVdExp: true,
  ckrtEfluenteMlKgH: 0,
  adsorcion: 'ninguna',
  albuminaGdL: 2.5,
  micMgL: 4,
  bolsaMeropenem: 'cambio_6_8h',
});
assert.ok(cefLra.troughTotal48h > 20, `M09 Cefepime LRA valle > 20 mg/L (got ${cefLra.troughTotal48h.toFixed(1)})`);
assert.ok(
  cefLra.alerts.some((a) => a.title.includes('NEUROTOXICIDAD CEFEPIME')),
  'M09 Cefepime valle > 20 mg/L debe disparar alerta de neurotoxicidad'
);

console.log(
  `OK verify-engines: M03(ALI=${aliA.aliDirecto}/IFC=${aliA.ifcPalacios}), M05(VNERi=${m05Bit.vneri?.toFixed(2)}, PIA block=OK), M09(ARC ${m09Cont.pctFt4xMic_24_48.toFixed(0)}% vs ${m09Bolus.pctFt4xMic_24_48.toFixed(0)}%, Cefepime trough=${cefLra.troughTotal48h.toFixed(1)} mg/L)`
);
