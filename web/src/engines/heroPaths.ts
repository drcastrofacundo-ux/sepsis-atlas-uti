/**
 * Trazados de las cabeceras ilustradas.
 *
 * Son funciones puras que devuelven el atributo `d` de un <path>, o listas de
 * elementos, para que el motivo de cada modulo se pueda testear como cualquier
 * otro calculo. Donde el motivo representa algo que el Atlas ya modela
 * (la onda arterial, la curva concentracion-tiempo, la sobrevida post-alta),
 * el trazado sale de la misma formula y no de un dibujo a ojo: si el dato
 * cambia, el dibujo cambia.
 *
 * El lienzo es siempre 1200 x 120, y se recorta a lo ancho segun la pantalla.
 */

export const ANCHO = 1200;
export const ALTO = 120;

function puntos(xs: number[], ys: number[]): string {
  return xs.map((x, i) => `${x.toFixed(1)},${ys[i].toFixed(1)}`).join(' ');
}

function polilinea(xs: number[], ys: number[]): string {
  return 'M ' + puntos(xs, ys).replace(/ /g, ' L ').replace('L ', '');
}

/**
 * Onda arterial de un ciclo (modelo Windkessel de 2 elementos):
 * eyeccion rapida, muesca dicrota al cerrar la aortica, y decaimiento
 * exponencial en diastole con constante tau = R x C.
 */
export function ondaArterial(
  ciclos: number,
  pas = 120,
  pad = 60,
  opts: { tau?: number; fraccionSistole?: number } = {}
): string {
  const tau = opts.tau ?? 0.22;
  const fs = opts.fraccionSistole ?? 0.33;
  const porCiclo = 60;
  const xs: number[] = [];
  const ys: number[] = [];
  const escalaY = (p: number) => ALTO - 10 - ((p - 40) / (140 - 40)) * (ALTO - 24);

  for (let c = 0; c < ciclos; c++) {
    for (let i = 0; i <= porCiclo; i++) {
      const t = i / porCiclo; // 0..1 dentro del ciclo
      let p: number;
      if (t < fs * 0.45) {
        // Eyeccion: subida rapida.
        p = pad + (pas - pad) * Math.sin((t / (fs * 0.45)) * (Math.PI / 2));
      } else if (t < fs) {
        // Descenso sistolico hasta la muesca.
        const u = (t - fs * 0.45) / (fs * 0.55);
        p = pas - (pas - pad) * 0.55 * u;
      } else {
        // Diastole: decaimiento exponencial hacia la presion de equilibrio.
        const u = (t - fs) / (1 - fs);
        const pMuesca = pas - (pas - pad) * 0.55;
        p = pad + (pMuesca - pad) * Math.exp(-u / tau);
      }
      xs.push((c + t) * (ANCHO / ciclos));
      ys.push(escalaY(p));
    }
  }
  return polilinea(xs, ys);
}

/**
 * Concentracion-tiempo de un antibiotico: absorcion/distribucion rapida y
 * eliminacion monoexponencial, repetida por cada dosis.
 */
export function curvaConcentracion(dosis: number, vidaMedia = 0.45, pico = 95): string {
  const porDosis = 48;
  const xs: number[] = [];
  const ys: number[] = [];
  const escalaY = (c: number) => ALTO - 8 - (c / 100) * (ALTO - 20);
  for (let d = 0; d < dosis; d++) {
    for (let i = 0; i <= porDosis; i++) {
      const t = i / porDosis;
      const subida = Math.min(1, t / 0.12);
      const caida = Math.exp(-(Math.max(0, t - 0.12) / vidaMedia));
      xs.push((d + t) * (ANCHO / dosis));
      ys.push(escalaY(pico * subida * caida));
    }
  }
  return polilinea(xs, ys);
}

/** Curva presion-volumen del pulmon, con los dos puntos de inflexion y la histeresis. */
export function curvaPresionVolumen(desplazamiento = 0): string {
  const n = 80;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= n; i++) {
    const p = (i / n) * 40; // cmH2O
    // Sigmoidea de Venegas: V = a + b / (1 + exp(-(P - c)/d))
    const v = 5 + 90 / (1 + Math.exp(-(p - (16 + desplazamiento)) / 4.5));
    xs.push((p / 40) * ANCHO);
    ys.push(ALTO - 8 - (v / 100) * (ALTO - 20));
  }
  return polilinea(xs, ys);
}

/** Curva de sobrevida post-alta, a partir de anclas publicadas (mes, %). */
export function curvaSobrevida(anclas: Array<[number, number]>): string {
  const maxMes = Math.max(...anclas.map((a) => a[0]));
  const xs = anclas.map(([m]) => (m / maxMes) * ANCHO);
  const ys = anclas.map(([, s]) => ALTO - 8 - ((s - 40) / 60) * (ALTO - 20));
  return polilinea(xs, ys);
}

/** Dosis-respuesta sigmoidea (Emax), para los vasoactivos. */
export function curvaDosisRespuesta(ec50 = 0.4, hill = 2.2): string {
  const n = 80;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= n; i++) {
    const d = (i / n) * 1.2;
    const e = Math.pow(d, hill) / (Math.pow(ec50, hill) + Math.pow(d, hill));
    xs.push((d / 1.2) * ANCHO);
    ys.push(ALTO - 10 - e * (ALTO - 24));
  }
  return polilinea(xs, ys);
}

/** Doppler de vena suprahepatica: ondas S y D por ciclo (patron de congestion). */
export function dopplerVenoso(ciclos: number, relacionSD = 1.6): string {
  const porCiclo = 60;
  const xs: number[] = [];
  const ys: number[] = [];
  const base = ALTO / 2;
  for (let c = 0; c < ciclos; c++) {
    for (let i = 0; i <= porCiclo; i++) {
      const t = i / porCiclo;
      const s = Math.exp(-Math.pow((t - 0.22) / 0.1, 2)) * relacionSD;
      const d = Math.exp(-Math.pow((t - 0.62) / 0.12, 2));
      xs.push((c + t) * (ANCHO / ciclos));
      ys.push(base + (s + d) * 32);
    }
  }
  return polilinea(xs, ys);
}

/** Curva de glucemia con oscilacion: la variabilidad es el motivo del M17. */
export function curvaGlucemia(amplitud = 55, media = 170): string {
  const n = 160;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const g =
      media + amplitud * Math.sin(t * Math.PI * 3.1) * (0.55 + 0.45 * Math.sin(t * Math.PI * 1.3));
    xs.push(t * ANCHO);
    ys.push(ALTO - 8 - ((g - 60) / 220) * (ALTO - 20));
  }
  return polilinea(xs, ys);
}

/** Barras de los dominios del SOFA (6 organos). */
export function barrasSofa(valores: number[]): Array<{ x: number; y: number; w: number; h: number }> {
  const w = ANCHO / (valores.length * 2.1);
  return valores.map((v, i) => {
    const h = (v / 4) * (ALTO - 26);
    return { x: 40 + i * w * 2.05, y: ALTO - 10 - h, w, h };
  });
}

/** Red capilar: segmentos, algunos "apagados" para mostrar la heterogeneidad. */
export function redCapilar(
  n: number,
  fraccionApagada: number
): Array<{ d: string; activo: boolean }> {
  const segs: Array<{ d: string; activo: boolean }> = [];
  for (let i = 0; i < n; i++) {
    // Determinista a proposito: el mismo dibujo en cada render.
    const r1 = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
    const r2 = Math.abs(Math.sin(i * 78.233) * 43758.5453) % 1;
    const r3 = Math.abs(Math.sin(i * 39.425) * 43758.5453) % 1;
    const x = r1 * ANCHO;
    const y = 18 + r2 * (ALTO - 36);
    const largo = 30 + r3 * 70;
    const curva = (r1 - 0.5) * 40;
    segs.push({
      d: `M ${x.toFixed(1)},${y.toFixed(1)} Q ${(x + largo / 2).toFixed(1)},${(y + curva).toFixed(1)} ${(x + largo).toFixed(1)},${y.toFixed(1)}`,
      activo: r3 > fraccionApagada,
    });
  }
  return segs;
}

/** Cepillo del glicocalix sobre el endotelio, con un tramo desprendido. */
export function cepilloGlicocalix(
  n: number,
  inicioDesprendido: number,
  finDesprendido: number
): Array<{ d: string; intacto: boolean }> {
  const paso = ANCHO / n;
  const base = ALTO - 22;
  const pelos: Array<{ d: string; intacto: boolean }> = [];
  for (let i = 0; i < n; i++) {
    const x = i * paso + paso / 2;
    const frac = i / n;
    const intacto = frac < inicioDesprendido || frac > finDesprendido;
    const alto = intacto ? 30 + 10 * Math.sin(i * 1.7) : 7 + 4 * Math.sin(i * 2.3);
    const inclinacion = 5 * Math.sin(i * 0.9);
    pelos.push({
      d: `M ${x.toFixed(1)},${base} Q ${(x + inclinacion).toFixed(1)},${(base - alto / 2).toFixed(1)} ${(x + inclinacion * 1.6).toFixed(1)},${(base - alto).toFixed(1)}`,
      intacto,
    });
  }
  return pelos;
}

/** Malla de fibrina: nodos unidos, para la inmunotrombosis. */
export function mallaFibrina(n: number): string[] {
  const lineas: string[] = [];
  for (let i = 0; i < n; i++) {
    const r1 = Math.abs(Math.sin(i * 23.14) * 11311.7) % 1;
    const r2 = Math.abs(Math.sin(i * 51.77) * 11311.7) % 1;
    const r3 = Math.abs(Math.sin(i * 9.31) * 11311.7) % 1;
    const r4 = Math.abs(Math.sin(i * 67.19) * 11311.7) % 1;
    const x1 = r1 * ANCHO;
    const y1 = 14 + r2 * (ALTO - 28);
    const x2 = x1 + (r3 - 0.5) * 120;
    const y2 = 14 + r4 * (ALTO - 28);
    lineas.push(`M ${x1.toFixed(1)},${y1.toFixed(1)} L ${x2.toFixed(1)},${y2.toFixed(1)}`);
  }
  return lineas;
}

/**
 * Derivación II del ECG: P, QRS y T. La P es una onda ancha y baja, el QRS un
 * complejo rápido con Q y S negativas alrededor de una R alta, y la T una onda
 * ancha del mismo signo que la R. Las proporciones son las del trazado normal,
 * no un garabato: la P mide alrededor del 15% de la R y la T, un tercio.
 */
// `alto` es la amplitud de la R. Con la línea de base en el medio del carril,
// no puede pasar de ALTO/2 menos un margen, o la punta de la R se recorta.
export function ecgDerivacionII(ciclos: number, alto = 52): string {
  const porCiclo = 100;
  const xs: number[] = [];
  const ys: number[] = [];
  const base = ALTO / 2;
  const g = (t: number, centro: number, ancho: number) =>
    Math.exp(-Math.pow((t - centro) / ancho, 2));

  for (let c = 0; c < ciclos; c++) {
    for (let i = 0; i <= porCiclo; i++) {
      const t = i / porCiclo;
      const p = 0.15 * g(t, 0.16, 0.035);
      const q = -0.1 * g(t, 0.3, 0.008);
      const r = 1.0 * g(t, 0.33, 0.012);
      const s = -0.22 * g(t, 0.37, 0.012);
      const onda = 0.33 * g(t, 0.56, 0.055);
      const v = p + q + r + s + onda;
      xs.push((c + t) * (ANCHO / ciclos));
      ys.push(base - v * alto);
    }
  }
  return polilinea(xs, ys);
}

/** Pletismografía del oxímetro: como la arterial pero redondeada. */
export function pletismografia(ciclos: number, alto = 34): string {
  const porCiclo = 70;
  const xs: number[] = [];
  const ys: number[] = [];
  const base = ALTO / 2;
  for (let c = 0; c < ciclos; c++) {
    for (let i = 0; i <= porCiclo; i++) {
      const t = i / porCiclo;
      const subida = Math.exp(-Math.pow((t - 0.2) / 0.14, 2));
      const dicrota = 0.33 * Math.exp(-Math.pow((t - 0.52) / 0.12, 2));
      xs.push((c + t) * (ANCHO / ciclos));
      ys.push(base - (subida + dicrota) * alto);
    }
  }
  return polilinea(xs, ys);
}

/**
 * Presión en la vía aérea en volumen control: rampa inspiratoria hasta el pico,
 * meseta durante la pausa, y caída a la PEEP en la espiración.
 */
export function presionViaAerea(ciclos: number, peep = 10, meseta = 24, pico = 30): string {
  const porCiclo = 60;
  const xs: number[] = [];
  const ys: number[] = [];
  const escalaY = (p: number) => ALTO - 12 - (p / 40) * (ALTO - 24);
  for (let c = 0; c < ciclos; c++) {
    for (let i = 0; i <= porCiclo; i++) {
      const t = i / porCiclo;
      let p: number;
      // Rampa hasta el pico, que se sostiene hasta que termina el flujo. La
      // caida brusca del pico a la meseta es real: es el componente resistivo,
      // que desaparece apenas el flujo se detiene.
      if (t < 0.28) p = peep + (pico - peep) * Math.min(1, t / 0.24);
      else if (t < 0.42) p = meseta; // pausa inspiratoria
      else p = peep + (meseta - peep) * Math.exp(-(t - 0.42) / 0.12); // espiración
      xs.push((c + t) * (ANCHO / ciclos));
      ys.push(escalaY(p));
    }
  }
  return polilinea(xs, ys);
}

/** Grilla de monitor, de fondo, como en cualquier cabecera de UTI. */
export function grillaMonitor(paso: number): string {
  const partes: string[] = [];
  for (let x = 0; x <= ANCHO; x += paso) partes.push(`M ${x},0 L ${x},${ALTO}`);
  for (let y = 0; y <= ALTO; y += paso) partes.push(`M 0,${y} L ${ANCHO},${y}`);
  return partes.join(' ');
}
