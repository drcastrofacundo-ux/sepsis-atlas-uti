import assert from 'node:assert/strict';
import { calcDualAliIfc, M03_PRESETS, simulateM03 } from '../src/engines/m03Engine.ts';
import { simulateM05 } from '../src/engines/m05Engine.ts';
import { construirGuyton, crearEscalas, flujoRetornoVenoso } from '../src/engines/m05Guyton.ts';
import { M15_PRESETS, pesoPredicho, simulateM15 } from '../src/engines/m15Engine.ts';
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

// ---- M05 panel C: diagrama de Guyton ----
// Regresion: el punto de trabajo tiene que caer SOBRE las dos curvas y bajar de
// flujo cuando sube la PVC. Antes flotaba entre ambas y se movia al reves.
function distanciaAPolilinea(puntos, px, py) {
  let min = Infinity;
  for (let i = 1; i < puntos.length; i++) {
    const [x1, y1] = puntos[i - 1];
    const [x2, y2] = puntos[i];
    const dx = x2 - x1;
    const dy = y2 - y1;
    const largo2 = dx * dx + dy * dy;
    const t = largo2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / largo2));
    min = Math.min(min, Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy)));
  }
  return min;
}

let flujoPrevio = Infinity;
for (const pvc of [0, 2, 6, 9, 12, 16]) {
  const enMeseta = pvc >= 12;
  const g = construirGuyton(pvc, 8 + pvc * 0.45 + 0.24 * 7, enMeseta);
  const e = crearEscalas(g.ejes);

  const px = e.x(g.puntoTrabajo.rap);
  const py = e.y(g.puntoTrabajo.flujo);

  const rectaVr = g.retornoVenoso.map((p) => [e.x(p.rap), e.y(p.flujo)]);
  const curvaCard = g.curvaCardiaca.map((p) => [e.x(p.rap), e.y(p.flujo)]);

  const dVr = distanciaAPolilinea(rectaVr, px, py);
  const dCard = distanciaAPolilinea(curvaCard, px, py);
  assert.ok(dVr < 1, `M05 Guyton PVC ${pvc}: el punto debe caer sobre el retorno venoso (dist ${dVr.toFixed(2)})`);
  assert.ok(dCard < 1.5, `M05 Guyton PVC ${pvc}: el punto debe caer sobre la curva cardiaca (dist ${dCard.toFixed(2)})`);

  // Subir la RAP siempre baja el retorno venoso.
  assert.ok(
    g.puntoTrabajo.flujo < flujoPrevio,
    `M05 Guyton: subir la PVC a ${pvc} debe bajar el flujo (${g.puntoTrabajo.flujo.toFixed(2)} vs ${flujoPrevio.toFixed(2)})`
  );
  flujoPrevio = g.puntoTrabajo.flujo;

  // El retorno venoso corta flujo cero exactamente en la Pmsf.
  assert.ok(
    Math.abs(flujoRetornoVenoso(g.retornoVenoso[1].rap, g.retornoVenoso[1].rap)) < 1e-9,
    'M05 Guyton: el retorno venoso debe valer 0 cuando la RAP iguala la Pmsf'
  );
}

// Caso borde: si la RAP supera la Pmsf no hay gradiente, el flujo es 0 y el
// punto tiene que seguir apoyado en la meseta de la curva de retorno venoso.
const gSinGradiente = construirGuyton(18, 15.4, true);
const eBorde = crearEscalas(gSinGradiente.ejes);
assert.equal(gSinGradiente.puntoTrabajo.flujo, 0, 'M05 Guyton: RAP > Pmsf debe dar flujo 0');
const dBorde = distanciaAPolilinea(
  gSinGradiente.retornoVenoso.map((p) => [eBorde.x(p.rap), eBorde.y(p.flujo)]),
  eBorde.x(gSinGradiente.puntoTrabajo.rap),
  eBorde.y(gSinGradiente.puntoTrabajo.flujo)
);
assert.ok(dBorde < 1, `M05 Guyton RAP > Pmsf: el punto debe seguir sobre la curva (dist ${dBorde.toFixed(2)})`);

// Un corazon en meseta casi no gana flujo si sigue subiendo la RAP.
const gMeseta = construirGuyton(13, 16, true);
const gReserva = construirGuyton(7, 13, false);
const gananciaMeseta = gMeseta.curvaCardiaca.at(-1).flujo / gMeseta.puntoTrabajo.flujo;
const gananciaReserva = gReserva.curvaCardiaca.at(-1).flujo / gReserva.puntoTrabajo.flujo;
assert.ok(gananciaMeseta < 1.1, `M05 Guyton meseta: ganancia residual < 1.1 (got ${gananciaMeseta.toFixed(2)})`);
assert.ok(gananciaReserva > 1.2, `M05 Guyton con reserva: ganancia > 1.2 (got ${gananciaReserva.toFixed(2)})`);

// ---- M15 Verification ----
// Peso predicho (ARDSNet): varon 50 + 0.91*(talla-152.4), mujer 45.5 + 0.91*(...)
assert.ok(Math.abs(pesoPredicho('varon', 170) - 66.0) < 0.1, `M15 PCP varon 170 cm ~66 kg (got ${pesoPredicho('varon', 170).toFixed(1)})`);
assert.ok(Math.abs(pesoPredicho('mujer', 155) - 47.9) < 0.1, `M15 PCP mujer 155 cm ~47.9 kg (got ${pesoPredicho('mujer', 155).toFixed(1)})`);

// La trampa del peso real: 6 mL/kg reales en un obeso son ~10 mL/kg de peso predicho.
const m15Trampa = simulateM15(M15_PRESETS.find((p) => p.id === 'trampa_peso').inputs);
assert.ok(Math.abs(m15Trampa.vtPorKgReal - 6) < 0.1, 'M15 el preset usa 6 mL/kg de peso real');
assert.ok(m15Trampa.vtPorKgPcp > 9.5, `M15 eso debe dar > 9.5 mL/kg de PCP (got ${m15Trampa.vtPorKgPcp.toFixed(1)})`);
assert.ok(
  m15Trampa.alerts.some((a) => a.titulo.includes('Volumen corriente')),
  'M15 debe alertar por volumen corriente alto'
);

// Presion de distension y distensibilidad.
const m15Prot = simulateM15(M15_PRESETS.find((p) => p.id === 'protegido').inputs);
assert.equal(m15Prot.driving, 12, 'M15 ΔP = meseta - PEEP = 22 - 10');
assert.ok(Math.abs(m15Prot.compliance - 330 / 12) < 1e-6, 'M15 Crs = VT / ΔP');
assert.equal(m15Prot.severidadBerlin, 'moderado', `M15 PaO2/FiO2 190 es moderado (got ${m15Prot.severidadBerlin})`);
assert.ok(!m15Prot.criterioEolia, 'M15 el caso protegido no cumple EOLIA');

// Cor pulmonale: los 4 factores de Mekontso Dessap.
const m15Vd = simulateM15(M15_PRESETS.find((p) => p.id === 'grave_vd').inputs);
assert.equal(m15Vd.corPulmonale.puntaje, 4, `M15 el caso de VD debe tener los 4 factores (got ${m15Vd.corPulmonale.puntaje})`);
assert.equal(m15Vd.severidadBerlin, 'grave', 'M15 PaO2/FiO2 95 es grave');
assert.ok(
  m15Vd.conductas.find((c) => c.titulo === 'Prono').tono === 'red',
  'M15 con PaO2/FiO2 < 150 el prono debe quedar indicado'
);

// Definicion global 2024: el alto flujo entra aunque Berlin no lo clasifique.
const m15Hf = simulateM15(M15_PRESETS.find((p) => p.id === 'alto_flujo').inputs);
assert.equal(m15Hf.severidadBerlin, 'sin_criterio', 'M15 Berlin no clasifica al paciente en alto flujo');
assert.ok(m15Hf.cumpleGlobal, 'M15 la definicion global 2024 si lo toma');

// SpO2 > 97 invalida el indice SpO2/FiO2 (no se puede leer en la meseta de la curva).
const m15Sat = simulateM15({ ...M15_PRESETS[0].inputs, spo2: 99 });
assert.equal(m15Sat.safi, null, 'M15 con SpO2 > 97 el indice SpO2/FiO2 no es valido');

console.log(
  `OK verify-engines: M03(ALI=${aliA.aliDirecto}/IFC=${aliA.ifcPalacios}), M05(VNERi=${m05Bit.vneri?.toFixed(2)}, PIA block=OK, Guyton punto sobre ambas curvas), M09(ARC ${m09Cont.pctFt4xMic_24_48.toFixed(0)}% vs ${m09Bolus.pctFt4xMic_24_48.toFixed(0)}%, Cefepime trough=${cefLra.troughTotal48h.toFixed(1)} mg/L), M15(PCP=${m15Trampa.pcpKg.toFixed(0)} kg, VT=${m15Trampa.vtPorKgPcp.toFixed(1)} mL/kg, cor pulmonale ${m15Vd.corPulmonale.puntaje}/4)`
);
