/**
 * Geometria del diagrama de Guyton del M05 (panel C).
 *
 * Todo el panel se dibuja sobre UN solo sistema de ejes:
 *   X = presion de auricula derecha (RAP, que es la PVC medida), en mmHg
 *   Y = flujo (retorno venoso = gasto cardiaco en estado estable), en L/min
 *
 * Antes cada elemento tenia su propia formula de pixeles inventada, asi que el
 * punto de trabajo no caia sobre ninguna de las dos curvas y al subir la PVC se
 * movia en sentido contrario a la recta de retorno venoso.
 *
 * Fisiologia que sostiene el dibujo:
 *   - Retorno venoso (Guyton):  Q = (Pmsf - RAP) / Rvr
 *     Es una recta que corta el eje de flujo cero justo en RAP = Pmsf.
 *     Subir la RAP baja el gradiente de retorno y, por lo tanto, el flujo.
 *   - En estado estable el gasto cardiaco iguala al retorno venoso, asi que la
 *     curva cardiaca (Frank-Starling) DEBE pasar por el mismo punto de trabajo.
 *     Lo que cambia entre un corazon con reserva y uno en meseta no es el punto,
 *     sino cuanto mas flujo entregaria si siguiera subiendo la RAP.
 */

/** Resistencia al retorno venoso, en mmHg por L/min. Valor tipico de adulto. */
export const RVR_MMHG_POR_L_MIN = 1.4;

/** Reserva de la curva cardiaca por encima del punto de trabajo. */
const RESERVA_CON_RESPUESTA = 0.35;
const RESERVA_EN_MESETA = 0.03;

/**
 * RAP a la que la curva cardiaca cruza flujo cero. Es negativa (tipico -2 a -4
 * mmHg): con la presion intratoracica normal el corazon todavia eyecta con una
 * RAP de 0. Si se la forzara a pasar por el origen, un paciente con PVC 0 tendria
 * flujo 0, que es justo lo contrario de lo que pasa.
 */
const RAP_FLUJO_CERO = -4;

export interface GuytonGeom {
  /** Punto de trabajo en unidades fisiologicas. */
  puntoTrabajo: { rap: number; flujo: number };
  /**
   * Curva de retorno venoso, en unidades fisiologicas. Son dos tramos: la rampa
   * que baja hasta cortar flujo cero en la Pmsf, y la meseta en cero para RAP
   * mayores (si la RAP supera la Pmsf no hay gradiente y el retorno se detiene).
   */
  retornoVenoso: Array<{ rap: number; flujo: number }>;
  /** Curva de funcion cardiaca muestreada, en unidades fisiologicas. */
  curvaCardiaca: Array<{ rap: number; flujo: number }>;
  /** Limites de los ejes usados para dibujar. */
  ejes: { rapMax: number; flujoMax: number };
}

/** Flujo de retorno venoso para una RAP dada (Guyton). Nunca negativo. */
export function flujoRetornoVenoso(pmsf: number, rap: number, rvr = RVR_MMHG_POR_L_MIN): number {
  return Math.max(0, (pmsf - rap) / rvr);
}

/**
 * Curva cardiaca que pasa por el punto de trabajo.
 * Q(rap) = qMax * (1 - exp(-rap / k)), con k resuelto para que Q(rapOp) = qOp.
 */
export function construirCurvaCardiaca(
  rapOp: number,
  qOp: number,
  enMeseta: boolean,
): { qMax: number; k: number; rap0: number } {
  const reserva = enMeseta ? RESERVA_EN_MESETA : RESERVA_CON_RESPUESTA;
  const qMax = Math.max(qOp * (1 + reserva), 0.1);
  const rap0 = RAP_FLUJO_CERO;
  const fraccion = Math.min(0.999, qOp / qMax);
  const k = -(rapOp - rap0) / Math.log(1 - fraccion);
  return { qMax, k, rap0 };
}

export function flujoCardiaco(rap: number, qMax: number, k: number, rap0 = RAP_FLUJO_CERO): number {
  if (rap <= rap0) return 0;
  return qMax * (1 - Math.exp(-(rap - rap0) / k));
}

/** Arma toda la geometria del panel a partir de la PVC medida y la Pmsf estimada. */
export function construirGuyton(
  pvc: number,
  pmsf: number,
  enMeseta: boolean,
  rvr = RVR_MMHG_POR_L_MIN,
): GuytonGeom {
  // El punto de trabajo esta sobre la recta de retorno venoso, a la RAP medida.
  const rapOp = Math.max(0, pvc);
  const qOp = flujoRetornoVenoso(pmsf, rapOp, rvr);
  const { qMax, k, rap0 } = construirCurvaCardiaca(rapOp, qOp, enMeseta);

  const rapMax = Math.max(20, Math.ceil(pmsf + 2));
  const flujoMax = Math.max(flujoRetornoVenoso(pmsf, 0, rvr), qMax) * 1.12;

  const curvaCardiaca: Array<{ rap: number; flujo: number }> = [];
  const pasos = 60;
  for (let i = 0; i <= pasos; i++) {
    const rap = (i / pasos) * rapMax;
    curvaCardiaca.push({ rap, flujo: flujoCardiaco(rap, qMax, k, rap0) });
  }

  return {
    puntoTrabajo: { rap: rapOp, flujo: qOp },
    retornoVenoso: [
      { rap: 0, flujo: flujoRetornoVenoso(pmsf, 0, rvr) },
      { rap: Math.min(pmsf, rapMax), flujo: 0 },
      { rap: rapMax, flujo: 0 },
    ],
    curvaCardiaca,
    ejes: { rapMax, flujoMax },
  };
}

/** Convierte unidades fisiologicas a coordenadas del viewBox 380x180. */
export function crearEscalas(ejes: { rapMax: number; flujoMax: number }) {
  const X0 = 42;
  const X1 = 358;
  const Y0 = 150; // flujo 0
  const Y1 = 24; // flujo maximo
  return {
    X0,
    X1,
    Y0,
    Y1,
    x: (rap: number) => X0 + (Math.min(ejes.rapMax, Math.max(0, rap)) / ejes.rapMax) * (X1 - X0),
    y: (flujo: number) =>
      Y0 - (Math.min(ejes.flujoMax, Math.max(0, flujo)) / ejes.flujoMax) * (Y0 - Y1),
  };
}
