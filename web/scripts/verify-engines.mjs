import assert from 'node:assert/strict';
import { calcDualAliIfc, M03_PRESETS, simulateM03 } from '../src/engines/m03Engine.ts';
import { simulateM05 } from '../src/engines/m05Engine.ts';
import { construirGuyton, crearEscalas, flujoRetornoVenoso } from '../src/engines/m05Guyton.ts';
import { M15_PRESETS, pesoPredicho, simulateM15 } from '../src/engines/m15Engine.ts';
import { M14_PRESETS, simulateM14 } from '../src/engines/m14Engine.ts';
import { RECAPT_AR, simulateM16 } from '../src/engines/m16Engine.ts';
import {
  M17_PRESETS,
  faseNutricional,
  nivelHipoglucemia,
  simulateM17,
  transicionSubcutanea,
} from '../src/engines/m17Engine.ts';
import {
  M18_PRESETS,
  calcularQsofa,
  calcularQsofaP,
  simulateM18,
} from '../src/engines/m18Engine.ts';
import {
  M19_PRESETS,
  SOBREVIDA_ENGOREN,
  clasificarSubtipo,
  simulateM19,
} from '../src/engines/m19Engine.ts';
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

// ---- M14 Verification ----
// Lee 2007: 1 set 73,1%, 2 sets 89,7%, 3 sets 98,2% con 20 mL por set.
const m14Ok = simulateM14(M14_PRESETS.find((p) => p.id === 'bien_hecho').inputs);
assert.ok(Math.abs(m14Ok.rendimientoFinal - 98.2) < 0.01, `M14 3 sets de 20 mL antes del ATB = 98,2% (got ${m14Ok.rendimientoFinal.toFixed(1)})`);
assert.equal(m14Ok.urgencia, 'alta', 'M14 la perforacion es de urgencia alta');
assert.ok(m14Ok.dentroDeVentana, 'M14 4 h cae dentro de la ventana de 6 h');
assert.ok(m14Ok.duracionAtb.includes('STOP-IT'), 'M14 tras control de foco abdominal debe citar STOP-IT');

// El peor escenario: 1 set, 5 mL y despues del antibiotico.
const m14Mal = simulateM14(M14_PRESETS.find((p) => p.id === 'un_set_tarde').inputs);
const esperado = 73.1 * 0.6 * 0.529;
assert.ok(Math.abs(m14Mal.rendimientoFinal - esperado) < 0.01, `M14 1 set/5 mL/post-ATB (got ${m14Mal.rendimientoFinal.toFixed(1)})`);
assert.ok(m14Mal.rendimientoFinal < 25, 'M14 ese escenario debe quedar por debajo del 25%');
assert.equal(m14Mal.alerts.length >= 3, true, 'M14 debe alertar por sets, volumen y momento');
// En shock, una PCT baja no autoriza a no tratar.
assert.equal(m14Mal.pctLectura.tono, 'red', 'M14 PCT baja en shock: no sirve para no tratar');

// Fascitis fuera de la ventana de 6 h.
const m14Fasc = simulateM14(M14_PRESETS.find((p) => p.id === 'fascitis').inputs);
assert.equal(m14Fasc.urgencia, 'maxima', 'M14 la fascitis es de urgencia maxima');
assert.ok(!m14Fasc.dentroDeVentana, 'M14 10 h queda fuera de la ventana');
assert.ok(
  m14Fasc.alerts.some((a) => a.detalle.includes('32%')),
  'M14 debe citar 19% vs 32% de mortalidad en la fascitis tardia'
);

// Necrosis pancreatica: el apuro juega en contra.
const inputsPanc = M14_PRESETS.find((p) => p.id === 'pancreatitis').inputs;
const m14Panc = simulateM14({ ...inputsPanc, horasHastaControl: 12 });
assert.equal(m14Panc.urgencia, 'diferido', 'M14 la necrosis pancreatica infectada es diferida');
assert.ok(m14Panc.focoDetalle.includes('POINTER'), 'M14 debe citar POINTER');
const m14PancApuro = simulateM14({ ...inputsPanc, horasHastaControl: 6 });
assert.ok(
  m14PancApuro.alerts.some((a) => a.titulo.includes('Drenaje inmediato')),
  'M14 drenar antes de 24 h en necrosis pancreatica debe alertar'
);
// Con pancreatitis como contexto, una PCT alta no confirma infeccion.
assert.ok(m14Panc.pctLectura.detalle.includes('sin infección'), 'M14 la PCT debe leerse con su contexto');

// ---- M16 Verification ----
// El error mas frecuente: creer que ceftazidima-avibactam cubre las MBL.
const m16Ndm = simulateM16({ mecanismo: 'ndm', foco: 'bacteriemia', renal: 'normal', shock: true });
assert.ok(
  m16Ndm.noActivas.some((o) => o.droga.includes('Ceftazidima-avibactam sola')),
  'M16 NDM: ceftazidima-avibactam sola debe figurar como NO activa'
);
assert.ok(
  m16Ndm.activas.some((o) => o.droga.includes('Aztreonam-avibactam')),
  'M16 NDM: aztreonam-avibactam debe figurar como activa'
);
assert.ok(
  m16Ndm.alerts.some((a) => a.titulo.includes('avibactam solo no alcanza')),
  'M16 NDM debe alertar sobre el avibactam'
);

// En KPC si es la opcion de primera linea.
const m16Kpc = simulateM16({ mecanismo: 'kpc', foco: 'bacteriemia', renal: 'normal', shock: false });
assert.ok(
  m16Kpc.activas.some((o) => o.droga.includes('Ceftazidima-avibactam')),
  'M16 KPC: ceftazidima-avibactam debe ser activa'
);

// BLEE: piperacilina-tazobactam no, aunque el antibiograma la informe sensible.
const m16Blee = simulateM16({ mecanismo: 'blee', foco: 'bacteriemia', renal: 'normal', shock: false });
assert.ok(
  m16Blee.noActivas.some((o) => o.droga.includes('Piperacilina-tazobactam') && o.evidencia.includes('12,3%')),
  'M16 BLEE debe citar MERINO contra piperacilina-tazobactam'
);

// CRAB: sumar meropenem a la colistina no suma.
const m16Crab = simulateM16({ mecanismo: 'crab', foco: 'neumonia', renal: 'lra', shock: true });
assert.ok(
  m16Crab.noActivas.some((o) => o.droga.includes('Colistina + meropenem')),
  'M16 CRAB: la combinacion con meropenem debe figurar como no util'
);
assert.ok(m16Crab.toxicidad.length >= 2, 'M16 CRAB con LRA debe advertir toxicidad');

// SAMR en neumonia: la daptomicina no sirve.
const m16Samr = simulateM16({ mecanismo: 'samr', foco: 'neumonia', renal: 'normal', shock: false });
assert.ok(
  m16Samr.alerts.some((a) => a.titulo.includes('Daptomicina no sirve en neumonía')),
  'M16 SAMR en neumonia debe alertar por daptomicina'
);

// Candidemia en CKRT: fluconazol a dosis plena.
const m16Cand = simulateM16({ mecanismo: 'candida', foco: 'bacteriemia', renal: 'ckrt', shock: false });
assert.ok(
  m16Cand.alerts.some((a) => a.detalle.includes('800 mg')),
  'M16 candidemia en CKRT debe pedir fluconazol a dosis plena'
);

// La epidemiologia argentina debe sumar ~100%.
const sumaRecapt = RECAPT_AR.reduce((s, r) => s + r.pct, 0);
assert.ok(Math.abs(sumaRecapt - 97.5) < 0.1, `M16 RECAPT-AR suma ~97,5% (got ${sumaRecapt.toFixed(1)})`);

// ---- M17 Verification ----

// Niveles de hipoglucemia de la ADA 2026.
assert.equal(nivelHipoglucemia(95), 0, 'M17 glucemia 95 no es hipoglucemia');
assert.equal(nivelHipoglucemia(69), 1, 'M17 glucemia 69 es nivel 1');
assert.equal(nivelHipoglucemia(54), 1, 'M17 glucemia 54 todavia es nivel 1');
assert.equal(nivelHipoglucemia(38), 2, 'M17 glucemia 38 es nivel 2');

// Fases nutricionales.
assert.equal(faseNutricional(1), 'aguda_temprana', 'M17 dia 1 es fase aguda temprana');
assert.equal(faseNutricional(5), 'aguda_tardia', 'M17 dia 5 es fase aguda tardia');
assert.equal(faseNutricional(12), 'recuperacion', 'M17 dia 12 es recuperacion');

// Transicion a subcutanea: 50% del requerimiento de 24 h.
const m17Trans = transicionSubcutanea(4, 80);
assert.equal(m17Trans.requerimiento24h, 96, 'M17 4 U/h son 96 U en 24 h');
assert.equal(m17Trans.basalUi, 48, 'M17 la basal es el 50% del requerimiento de 24 h');
assert.equal(m17Trans.glarginaTempranaUi, 20, 'M17 glargina temprana 0,25 U/kg en 80 kg = 20 U');

// Shock septico dia 2: insulina indicada y restriccion calorica.
const m17Shock = simulateM17(M17_PRESETS[0].inputs);
assert.ok(m17Shock.iniciarInsulina, 'M17 glucemia 210 debe indicar insulina');
assert.equal(m17Shock.metaTexto, '140–180 mg/dL', 'M17 la meta debe ser 140-180');
assert.ok(m17Shock.restriccionInicial, 'M17 dia 2 en shock debe restringir calorias');
assert.equal(m17Shock.kcalKgDia, 6, 'M17 NUTRIREA-3: 6 kcal/kg/dia en la fase aguda');
assert.deepEqual(m17Shock.proteinaGKgDia, [0.2, 0.4], 'M17 proteina 0,2-0,4 g/kg en fase aguda');
assert.ok(m17Shock.profilaxisIndicada, 'M17 shock es factor de riesgo de sangrado digestivo');
assert.ok(!m17Shock.transfundirGr, 'M17 Hb 8,2 sin isquemia no se transfunde');

// Se corto la enteral con el goteo activo: la alerta roja del Caso 1.
const m17Corte = simulateM17(M17_PRESETS[1].inputs);
assert.ok(
  m17Corte.alerts.some((a) => a.tono === 'red' && a.titulo.includes('cortó la enteral')),
  'M17 enteral interrumpida con goteo activo debe alertar en rojo'
);

// Capilar engañoso: tres motivos a la vez.
const m17Cap = simulateM17(M17_PRESETS[2].inputs);
assert.ok(!m17Cap.muestraConfiable, 'M17 capilar con vasopresores/renal/vitamina C no es confiable');
assert.ok(
  m17Cap.motivoMuestra.includes('vasopresores') &&
    m17Cap.motivoMuestra.includes('insuficiencia renal') &&
    m17Cap.motivoMuestra.includes('vitamina C'),
  'M17 debe nombrar los tres motivos que invalidan el capilar'
);
// La misma muestra en sangre arterial si es confiable.
const m17Art = simulateM17({ ...M17_PRESETS[2].inputs, muestra: 'arterial' });
assert.ok(m17Art.muestraConfiable, 'M17 la sangre arterial es confiable aun con vasopresores');

// Ventilado sin factores de riesgo que pasa a sala con profilaxis: el Caso 3.
const m17Vent = simulateM17(M17_PRESETS[3].inputs);
assert.ok(!m17Vent.profilaxisIndicada, 'M17 la ventilacion sola no indica profilaxis');
assert.ok(
  m17Vent.alerts.some((a) => a.tono === 'red' && a.titulo.includes('sin factor de riesgo')),
  'M17 profilaxis sin factor firme debe alertar en rojo'
);
assert.ok(
  m17Vent.alerts.some((a) => a.titulo.includes('Pasa a sala')),
  'M17 debe pedir suspender la profilaxis antes del pase a sala'
);

// Realimentacion: fosforo bajo al reiniciar la nutricion.
const m17Real = simulateM17(M17_PRESETS[4].inputs);
assert.ok(m17Real.realimentacion, 'M17 fosforo 1,4 con nutricion activa es realimentacion');
assert.ok(
  m17Real.alerts.some((a) => a.detalle.includes('91% vs 78%')),
  'M17 realimentacion debe citar la sobrevida de Doig 2015'
);

// Cateter central con 25.000 plaquetas: PACER.
const m17Pacer = simulateM17(M17_PRESETS[5].inputs);
assert.ok(m17Pacer.transfundirPlaquetas, 'M17 PACER: 25.000 plaquetas antes del cateter se transfunden');
assert.ok(m17Pacer.transfundirGr, 'M17 Hb 6,6 esta por debajo del umbral de 7');
// Sin procedimiento, las mismas plaquetas no se transfunden.
const m17SinProc = simulateM17({ ...M17_PRESETS[5].inputs, colocaCateterCentral: false });
assert.ok(!m17SinProc.transfundirPlaquetas, 'M17 sin procedimiento no se transfunden plaquetas');
// Por encima de 50.000, PACER no aplica.
const m17Plaq60 = simulateM17({ ...M17_PRESETS[5].inputs, plaquetas: 60 });
assert.ok(!m17Plaq60.transfundirPlaquetas, 'M17 con 60.000 plaquetas PACER no indica transfusion');

// Los seis presets deben devolver siempre los cuatro bloques.
for (const p of M17_PRESETS) {
  const out = simulateM17(p.inputs);
  assert.equal(out.bloques.length, 4, `M17 preset ${p.id} debe tener 4 bloques`);
  assert.equal(out.factoresSangrado.length, 5, `M17 preset ${p.id} debe listar 5 factores`);
}

// ---- M18 Verification ----

// qSOFA estandar: FR >= 22, PAS <= 100, estado mental.
assert.equal(calcularQsofa(24, 96, false).puntaje, 2, 'M18 qSOFA FR 24 + PAS 96 = 2');
assert.equal(calcularQsofa(24, 96, true).puntaje, 3, 'M18 qSOFA con alteracion mental = 3');
assert.equal(calcularQsofa(18, 120, false).puntaje, 0, 'M18 qSOFA normal = 0');
assert.equal(calcularQsofa(22, 100, false).puntaje, 2, 'M18 los umbrales 22 y 100 son inclusivos');

// qSOFA-P (Cagino 2022): FR >= 35 y PAS <= 85.
assert.equal(calcularQsofaP(36, 84).puntaje, 2, 'M18 qSOFA-P FR 36 + PAS 84 = 2');
assert.equal(calcularQsofaP(35, 85).puntaje, 2, 'M18 los umbrales 35 y 85 son inclusivos');
assert.equal(calcularQsofaP(30, 88).puntaje, 0, 'M18 FR 30 y PAS 88 no alcanzan el qSOFA-P');

// La divergencia entre los dos puntajes es el punto del modulo.
const m18Emb = simulateM18({ ...M18_PRESETS[1].inputs, fr: 30, pas: 95 });
assert.equal(m18Emb.qsofa, 2, 'M18 embarazada: el qSOFA estandar da 2 con FR 30 y PAS 95');
assert.equal(m18Emb.qsofaP, 0, 'M18 embarazada: el qSOFA-P no se positiviza con esos valores');
assert.ok(
  m18Emb.alerts.some((a) => a.titulo.includes('qSOFA da positivo y el qSOFA-P no')),
  'M18 debe senalar la divergencia entre los dos puntajes'
);

// Un puntaje negativo con hipoperfusion no descarta: el error del Caso 1.
assert.ok(
  m18Emb.alerts.some(
    (a) => a.tono === 'red' && a.titulo.includes('Puntaje negativo con hipoperfusión')
  ),
  'M18 qSOFA-P 0 con lactato alto debe advertir que igual es sepsis materna'
);
// Sin hipoperfusion ni taquicardia extrema, esa advertencia no corresponde.
const m18EmbOk = simulateM18({
  ...M18_PRESETS[1].inputs,
  fr: 20,
  pas: 110,
  fc: 96,
  lactato: 1.2,
  temperatura: 37,
});
assert.ok(
  !m18EmbOk.alerts.some((a) => a.titulo.includes('Puntaje negativo con hipoperfusión')),
  'M18 sin hipoperfusion no debe forzar la advertencia de sepsis materna'
);

// El adulto estandar no usa qSOFA-P.
const m18Std = simulateM18(M18_PRESETS[0].inputs);
assert.ok(!m18Std.usaQsofaP, 'M18 el adulto estandar no usa qSOFA-P');
assert.equal(m18Std.qsofaP, null, 'M18 sin poblacion obstetrica el qSOFA-P es null');

// Embarazada del Caso 1: utero sobre la cava.
const m18Caso1 = simulateM18(M18_PRESETS[1].inputs);
assert.ok(
  m18Caso1.alerts.some((a) => a.tono === 'red' && a.titulo.includes('boca arriba')),
  'M18 decubito supino en el 3er trimestre debe alertar en rojo'
);
assert.ok(
  m18Caso1.recordatorios.some((r) => r.titulo.includes('útero a la izquierda')),
  'M18 debe recordar desplazar el utero'
);

// Puerpera: qSOFA-P positivo con los dos componentes.
const m18Puer = simulateM18(M18_PRESETS[2].inputs);
assert.equal(m18Puer.qsofaP, 2, 'M18 puerpera con FR 36 y PAS 84: qSOFA-P 2 de 2');
assert.ok(
  m18Puer.alerts.some((a) => a.tono === 'red' && a.titulo.includes('qSOFA-P positivo')),
  'M18 qSOFA-P positivo debe pedir tratarla como sepsis materna'
);

// Neutropenia febril: antibiotico inmediato y estrategia de escalada.
const m18Neu = simulateM18(M18_PRESETS[3].inputs);
assert.ok(
  m18Neu.alerts.some((a) => a.tono === 'red' && a.titulo.includes('Neutropenia febril')),
  'M18 fiebre con menos de 500 neutrofilos debe alertar en rojo'
);
assert.ok(
  m18Neu.recordatorios.some((r) => r.titulo.includes('escalada')),
  'M18 sin colonizacion previa corresponde escalada'
);
const m18NeuRes = simulateM18({ ...M18_PRESETS[3].inputs, colonizadoResistentes: true });
assert.ok(
  m18NeuRes.recordatorios.some((r) => r.titulo.includes('desescalar')),
  'M18 con colonizacion por resistentes corresponde empezar amplio y desescalar'
);

// 72 h afebril: How Long permite cortar sin esperar la aplasia.
const m18Afeb = simulateM18(M18_PRESETS[4].inputs);
assert.ok(
  m18Afeb.alerts.some((a) => a.detalle.includes('16,1 vs 13,6')),
  'M18 a las 72 h afebril debe citar How Long'
);

// Anciano fragil: 65 trial y datos de pronostico.
const m18Anc = simulateM18(M18_PRESETS[5].inputs);
assert.ok(Math.abs(m18Anc.pam - 62) < 0.5, `M18 PAM de 104/41 es ~62 (got ${m18Anc.pam.toFixed(1)})`);
assert.equal(m18Anc.presionPulso, 63, 'M18 presion de pulso de 104/41 es 63');
assert.ok(
  m18Anc.recordatorios.some((r) => r.titulo.includes('60–65')),
  'M18 anciano debe traer la meta del 65 trial'
);
assert.ok(m18Anc.pronostico.length >= 3, 'M18 anciano fragil debe traer datos de pronostico');
// Con CFS 7 aparece la mortalidad al año de Dong 2023.
const m18Anc7 = simulateM18({ ...M18_PRESETS[5].inputs, cfs: 7 });
assert.ok(
  m18Anc7.pronostico.some((p) => p.valor === '75,9%'),
  'M18 con CFS >= 7 debe mostrar la mortalidad al año de los muy fragiles'
);
assert.ok(
  !m18Anc.pronostico.some((p) => p.valor === '75,9%'),
  'M18 con CFS 5 no corresponde el dato de los muy fragiles'
);

// Cirrotico con PBE: albumina de Sort 1999.
const m18Pbe = simulateM18(M18_PRESETS[6].inputs);
assert.ok(
  m18Pbe.alerts.some((a) => a.titulo.includes('PBE confirmada') && a.detalle.includes('1,5 g/kg')),
  'M18 con 900 PMN debe pedir albumina 1,5 g/kg'
);
// Por debajo de 250 PMN no es PBE y la albumina pierde respaldo.
const m18NoPbe = simulateM18({ ...M18_PRESETS[6].inputs, pmnAscitis: 180 });
assert.ok(
  m18NoPbe.alerts.some((a) => a.titulo.includes('ya no está respaldada')),
  'M18 sin PBE la albumina queda con beneficio incierto'
);
assert.ok(
  m18Pbe.recordatorios.some((r) => r.titulo.includes('Paracentesis')),
  'M18 cirrotico con ascitis debe pedir paracentesis'
);
// El umbral de 250 es inclusivo.
assert.ok(
  simulateM18({ ...M18_PRESETS[6].inputs, pmnAscitis: 250 }).alerts.some((a) =>
    a.titulo.includes('PBE confirmada')
  ),
  'M18 el umbral de 250 PMN es inclusivo'
);

// Trasplantado: el dato que rompe el reflejo.
const m18Tx = simulateM18(M18_PRESETS[7].inputs);
assert.ok(
  m18Tx.recordatorios.some((r) => r.detalle.includes('84% vs 66%')),
  'M18 trasplantado debe traer la cohorte alemana'
);

// Todos los presets devuelven los 6 signos leidos.
for (const p of M18_PRESETS) {
  const out = simulateM18(p.inputs);
  assert.equal(out.signos.length, 6, `M18 preset ${p.id} debe leer 6 signos`);
  assert.ok(out.fisiologia.length > 40, `M18 preset ${p.id} debe describir la fisiologia`);
  // Cada poblacion devuelve algo accionable: una alerta, un recordatorio o los dos.
  assert.ok(
    out.alerts.length + out.recordatorios.length >= 1,
    `M18 preset ${p.id} debe devolver al menos una alerta o un recordatorio`
  );
}

// ---- M19 Verification ----

// Los dos subtipos que el abstract de Flick 2026 nombra con su OR.
const m19Grave = clasificarSubtipo(M19_PRESETS[3].inputs);
assert.equal(m19Grave.id, 'basal_enfermo_enfermedad_grave', 'M19 Charlson alto + larga + institucion');
assert.equal(m19Grave.banda, 'muy_alto', 'M19 ese subtipo es el de riesgo muy alto');
assert.ok(m19Grave.orPublicado.includes('9,7'), 'M19 basal enfermo lleva el OR 9,7 publicado');

const m19Func = clasificarSubtipo(M19_PRESETS[2].inputs);
assert.equal(m19Func.id, 'bajo_estado_funcional', 'M19 no volver a casa define bajo estado funcional');
assert.ok(m19Func.orPublicado.includes('11,1'), 'M19 bajo estado funcional lleva el OR 11,1');

// El extremo favorable: los tres ejes a favor.
const m19Sano = clasificarSubtipo(M19_PRESETS[1].inputs);
assert.equal(m19Sano.id, 'basal_sano_corta', 'M19 los tres ejes a favor dan el extremo bajo');
assert.equal(m19Sano.banda, 'bajo', 'M19 ese subtipo es el de riesgo bajo');
assert.equal(m19Sano.orPublicado, null, 'M19 los subtipos intermedios no inventan OR');

// Los subtipos reconstruidos no se atribuyen un OR del paper.
for (const p of M19_PRESETS) {
  const s = clasificarSubtipo(p.inputs);
  if (s.id !== 'basal_enfermo_enfermedad_grave' && s.id !== 'bajo_estado_funcional') {
    assert.equal(s.orPublicado, null, `M19 ${s.id} no debe declarar un OR publicado`);
  }
  assert.ok(s.mortalidadTexto.includes('Flick 2026'), `M19 ${s.id} debe citar la fuente del rango`);
}

// Un solo eje en contra queda en la banda intermedia.
assert.equal(
  clasificarSubtipo({ ...M19_PRESETS[1].inputs, charlson: 4 }).banda,
  'intermedio',
  'M19 solo el Charlson alto queda en banda intermedia'
);
assert.equal(
  clasificarSubtipo({ ...M19_PRESETS[1].inputs, diasInternacion: 20 }).banda,
  'intermedio',
  'M19 solo la internacion prolongada queda en banda intermedia'
);
// Los dos ejes en contra, pero vuelve a casa.
assert.equal(
  clasificarSubtipo({ ...M19_PRESETS[1].inputs, charlson: 4, diasInternacion: 20 }).id,
  'comorbido_internacion_larga',
  'M19 dos ejes en contra con alta a domicilio'
);

// El destino manda sobre los otros dos ejes.
assert.equal(
  clasificarSubtipo({ ...M19_PRESETS[1].inputs, destino: 'institucion' }).id,
  'bajo_estado_funcional',
  'M19 sin comorbilidad ni internacion larga, el destino solo ya define el subtipo'
);

// Caso 1: las banderas que la epicrisis se olvido.
const m19Caso1 = simulateM19(M19_PRESETS[0].inputs);
const activas = m19Caso1.banderas.filter((b) => b.activa).map((b) => b.titulo);
assert.ok(activas.includes('Rehabilitación física'), 'M19 9 dias de ventilacion piden rehabilitacion');
assert.ok(activas.includes('Evaluación cognitiva'), 'M19 5 dias de delirium piden evaluacion cognitiva');
assert.ok(activas.includes('Debilidad adquirida en la UTI'), 'M19 ventilacion >= 7 dias con corticoides');
assert.ok(activas.includes('Control cardiovascular'), 'M19 42 años entra en el grupo de <= 45');
assert.ok(activas.includes('Revisar la hemoglobina al alta'), 'M19 Hb 9,2 por debajo de 10');
assert.equal(activas.length, 5, 'M19 el Caso 1 enciende las cinco banderas');

// El basal sano no enciende ninguna.
const m19SanoOut = simulateM19(M19_PRESETS[1].inputs);
assert.equal(
  m19SanoOut.banderas.filter((b) => b.activa).length,
  0,
  'M19 el basal sano sin ventilacion ni delirium no enciende banderas'
);

// El umbral de 48 h de ventilacion de la SSC 2026.
assert.ok(
  !simulateM19({ ...M19_PRESETS[1].inputs, diasVentilacion: 2 }).banderas.find(
    (b) => b.titulo === 'Rehabilitación física'
  ).activa,
  'M19 con 2 dias (48 h) todavia no se cumple el "mas de 48 h"'
);
assert.ok(
  simulateM19({ ...M19_PRESETS[1].inputs, diasVentilacion: 3 }).banderas.find(
    (b) => b.titulo === 'Rehabilitación física'
  ).activa,
  'M19 con 3 dias se pasa de las 48 h'
);

// El checklist de la SSC 2026 es el mismo para todos: es buena practica.
for (const p of M19_PRESETS) {
  const out = simulateM19(p.inputs);
  assert.equal(out.checklist.length, 5, `M19 preset ${p.id} debe traer los 5 items de epicrisis`);
  assert.ok(
    out.checklist.every((i) => i.obligatorio),
    `M19 preset ${p.id}: los 5 items son buena practica, no opcionales`
  );
  assert.equal(out.banderas.length, 5, `M19 preset ${p.id} debe evaluar las 5 banderas`);
}

// La curva de Engoren: los puntos publicados son los del paper.
const publicados = SOBREVIDA_ENGOREN.filter((p) => p.publicado);
// El alta (100%), el mes 1, el año 1, los 5 años y los 10 años.
assert.equal(publicados.length, 5, 'M19 la curva tiene 5 anclas publicadas');
assert.equal(
  SOBREVIDA_ENGOREN.filter((p) => !p.publicado).length,
  5,
  'M19 el resto de los puntos son interpolados para dibujar la forma'
);
assert.equal(SOBREVIDA_ENGOREN.find((p) => p.meses === 12).sobrevida, 76, 'M19 76% al año');
assert.equal(SOBREVIDA_ENGOREN.find((p) => p.meses === 60).sobrevida, 57, 'M19 57% a 5 años');
assert.equal(SOBREVIDA_ENGOREN.find((p) => p.meses === 120).sobrevida, 48, 'M19 48% a 10 años');
// La curva es monotonamente decreciente.
for (let i = 1; i < SOBREVIDA_ENGOREN.length; i++) {
  assert.ok(
    SOBREVIDA_ENGOREN[i].sobrevida < SOBREVIDA_ENGOREN[i - 1].sobrevida,
    `M19 la sobrevida debe caer en el mes ${SOBREVIDA_ENGOREN[i].meses}`
  );
}
// La caida del primer mes es la mas pronunciada por mes.
const pendiente = (a, b) => (a.sobrevida - b.sobrevida) / (b.meses - a.meses);
for (let i = 2; i < SOBREVIDA_ENGOREN.length; i++) {
  assert.ok(
    pendiente(SOBREVIDA_ENGOREN[0], SOBREVIDA_ENGOREN[1]) >
      pendiente(SOBREVIDA_ENGOREN[i - 1], SOBREVIDA_ENGOREN[i]),
    'M19 la mortalidad se concentra en el primer mes'
  );
}

// El joven previamente sano: riesgo relativo alto.
const m19Joven = simulateM19(M19_PRESETS[4].inputs);
assert.ok(
  m19Joven.alerts.some((a) => a.detalle.includes('HR 17,5')),
  'M19 el joven previamente sano debe traer el HR 17,5 de Inghammar'
);

console.log(
  `OK verify-engines: M03(ALI=${aliA.aliDirecto}/IFC=${aliA.ifcPalacios}), M05(VNERi=${m05Bit.vneri?.toFixed(2)}, PIA block=OK, Guyton punto sobre ambas curvas), M09(ARC ${m09Cont.pctFt4xMic_24_48.toFixed(0)}% vs ${m09Bolus.pctFt4xMic_24_48.toFixed(0)}%, Cefepime trough=${cefLra.troughTotal48h.toFixed(1)} mg/L), M14(hemocultivos ${m14Ok.rendimientoFinal.toFixed(1)}% vs ${m14Mal.rendimientoFinal.toFixed(1)}%), M15(PCP=${m15Trampa.pcpKg.toFixed(0)} kg, VT=${m15Trampa.vtPorKgPcp.toFixed(1)} mL/kg, cor pulmonale ${m15Vd.corPulmonale.puntaje}/4), M16(NDM ${m16Ndm.activas.length} activas / ${m16Ndm.noActivas.length} no activas), M17(${m17Shock.kcalKgDia} kcal/kg en shock, basal ${m17Trans.basalUi} U, PACER plaquetas=${m17Pacer.transfundirPlaquetas}), M18(qSOFA ${m18Emb.qsofa} vs qSOFA-P ${m18Emb.qsofaP} en la embarazada, PAM anciano=${m18Anc.pam.toFixed(0)}), M19(Caso 1 → ${m19Caso1.subtipo.nombre}, ${activas.length}/5 banderas)`
);
