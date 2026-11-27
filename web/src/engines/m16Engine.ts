/**
 * Motor del simulador del M16: la llave y la cerradura.
 *
 * La pregunta util frente a un gramnegativo resistente no es "a que es
 * resistente" sino "que enzima tiene". Dado el mecanismo, devuelve que drogas
 * lo cubren, cuales NO (que es la parte que se olvida) y el ensayo que sostiene
 * cada opcion.
 *
 * Material de estudio. Las dosis y los puntos de corte locales estan en el M09,
 * y frente a un multirresistente la consulta con Infectologia sigue siendo la regla.
 */

export type Mecanismo =
  | 'blee'
  | 'ampc'
  | 'kpc'
  | 'ndm'
  | 'oxa48'
  | 'kpc_ndm'
  | 'crab'
  | 'dtr_pseudomonas'
  | 'samr'
  | 'candida';

export type Foco = 'bacteriemia' | 'neumonia' | 'urinario' | 'abdominal';
export type FuncionRenal = 'normal' | 'lra' | 'ckrt';

export interface M16Inputs {
  mecanismo: Mecanismo;
  foco: Foco;
  renal: FuncionRenal;
  shock: boolean;
}

export interface Opcion {
  droga: string;
  evidencia: string;
}

export interface M16Output {
  nombre: string;
  clase: string;
  activas: Opcion[];
  noActivas: Opcion[];
  nota: string;
  toxicidad: string[];
  alerts: Array<{ tono: 'red' | 'amber' | 'cyan'; titulo: string; detalle: string }>;
}

interface Ficha {
  nombre: string;
  clase: string;
  activas: Opcion[];
  noActivas: Opcion[];
  nota: string;
}

const FICHAS: Record<Mecanismo, Ficha> = {
  blee: {
    nombre: 'BLEE (betalactamasa de espectro extendido, CTX-M)',
    clase: 'Ambler A',
    activas: [
      { droga: 'Meropenem o imipenem', evidencia: 'MERINO: mortalidad a 30 días de 3,7% con meropenem.' },
      { droga: 'Ertapenem (si no hay shock ni Pseudomonas)', evidencia: 'Alternativa para desescalar fuera de la UTI.' },
    ],
    noActivas: [
      {
        droga: 'Piperacilina-tazobactam',
        evidencia: 'MERINO: 12,3% de mortalidad frente a 3,7%, aunque el antibiograma la informe sensible.',
      },
      { droga: 'Cefalosporinas de 3ª generación', evidencia: 'Hidrolizadas por la BLEE.' },
    ],
    nota: 'La trampa clásica: el antibiograma dice "sensible" a piperacilina-tazobactam y el paciente igual evoluciona peor.',
  },
  ampc: {
    nombre: 'AmpC (Enterobacter, Citrobacter, Serratia, Morganella)',
    clase: 'Ambler C',
    activas: [
      { droga: 'Cefepime', evidencia: 'Estable frente a la AmpC; opción de elección si la CIM es baja.' },
      { droga: 'Meropenem', evidencia: 'En MERINO-2 no hubo fracasos microbiológicos con meropenem.' },
    ],
    noActivas: [
      {
        droga: 'Piperacilina-tazobactam',
        evidencia: 'MERINO-2 (piloto): más fracaso microbiológico (13% vs 0%). Genera hipótesis, no es definitivo.',
      },
      { droga: 'Ceftriaxona', evidencia: 'Riesgo de desrepresión de la AmpC durante el tratamiento.' },
    ],
    nota: 'El riesgo es la desrepresión: empieza sensible y se vuelve resistente con el tratamiento.',
  },
  kpc: {
    nombre: 'KPC (carbapenemasa de clase A)',
    clase: 'Ambler A · serino-carbapenemasa',
    activas: [
      {
        droga: 'Ceftazidima-avibactam',
        evidencia: 'CRACKLE: mortalidad ajustada del 9% frente a 32% con colistina (observacional).',
      },
      { droga: 'Meropenem-vaborbactam', evidencia: 'Inhibidor activo sobre serino-carbapenemasas.' },
      { droga: 'Imipenem-relebactam', evidencia: 'RECAPT-AR: 98% de sensibilidad frente a serino-carbapenemasas en Argentina.' },
    ],
    noActivas: [
      { droga: 'Carbapenémicos solos', evidencia: 'Hidrolizados por la KPC.' },
      { droga: 'Aztreonam solo', evidencia: 'La KPC también lo hidroliza.' },
    ],
    nota: 'La ceftazidima-avibactam desplazó a la colistina como primera opción.',
  },
  ndm: {
    nombre: 'Metalo-betalactamasa (NDM, VIM, IMP)',
    clase: 'Ambler B · metaloenzima',
    activas: [
      {
        droga: 'Aztreonam-avibactam',
        evidencia: 'RECAPT-AR: 96–98% de sensibilidad frente a todas las clases. REVISIT: curación del 68,4% (estudio descriptivo).',
      },
      {
        droga: 'Ceftazidima-avibactam + aztreonam',
        evidencia: 'Falcone 2021: mortalidad a 30 días del 19,2% frente a 44% (HR ajustado 0,37).',
      },
      { droga: 'Cefiderocol', evidencia: 'Activo sobre MBL, pero ver la advertencia de CREDIBLE-CR.' },
    ],
    noActivas: [
      {
        droga: 'Ceftazidima-avibactam sola',
        evidencia: 'El avibactam NO inhibe las metalo-betalactamasas. Es el error más frecuente.',
      },
      { droga: 'Meropenem-vaborbactam e imipenem-relebactam', evidencia: 'Tampoco inhiben las MBL.' },
    ],
    nota: 'El aztreonam resiste la hidrólisis por MBL, pero el germen casi siempre trae además una BLEE o AmpC que lo destruye: por eso se le suma el avibactam.',
  },
  oxa48: {
    nombre: 'OXA-48 / OXA-163',
    clase: 'Ambler D',
    activas: [
      { droga: 'Ceftazidima-avibactam', evidencia: 'RECAPT-AR: 92% de sensibilidad frente a serino-carbapenemasas, OXA-163 incluida.' },
    ],
    noActivas: [
      { droga: 'Meropenem-vaborbactam', evidencia: 'Actividad limitada sobre OXA-48.' },
      { droga: 'Cefalosporinas solas', evidencia: 'La OXA-163 suma actividad sobre cefalosporinas de espectro extendido.' },
    ],
    nota: 'En Argentina la OXA-163 es el 7,4% de las carbapenemasas (RECAPT-AR).',
  },
  kpc_ndm: {
    nombre: 'Coproducción KPC + NDM',
    clase: 'Ambler A + B',
    activas: [
      {
        droga: 'Aztreonam-avibactam',
        evidencia: 'RECAPT-AR: 96–98% frente a todas las clases. Es la combinación que cubre ambas enzimas.',
      },
    ],
    noActivas: [
      { droga: 'Ceftazidima-avibactam sola', evidencia: 'No cubre la NDM.' },
      { droga: 'Aztreonam solo', evidencia: 'La KPC lo hidroliza.' },
    ],
    nota: 'En Argentina la coproducción NDM + KPC es el 3,4% de las carbapenemasas y crece: por eso hay que tipificar la enzima, no suponerla.',
  },
  crab: {
    nombre: 'Acinetobacter baumannii resistente a carbapenémicos',
    clase: 'OXA-23 y otras',
    activas: [
      {
        droga: 'Sulbactam en dosis alta (9 g/día)',
        evidencia: 'Consenso ANLIS Malbrán 2025: cubre hasta CIM 16–32 mg/L en categoría sensible dosis-dependiente. Dosis en el M09.',
      },
      {
        droga: 'Sulbactam-durlobactam',
        evidencia: 'ATTACK: mortalidad a 28 días del 19% frente a 32% con colistina, y nefrotoxicidad del 13% frente a 38%.',
      },
    ],
    noActivas: [
      {
        droga: 'Colistina + meropenem',
        evidencia: 'AIDA y OVERCOME: sumar meropenem no mejoró nada (fracaso 79% vs 73%; mortalidad 43% vs 37%).',
      },
      {
        droga: 'Cefiderocol como primera opción',
        evidencia: 'CREDIBLE-CR: más muertes con cefiderocol (34% vs 18%), sobre todo en Acinetobacter.',
      },
    ],
    nota: 'Acá la combinación no suma: lo que cambia el resultado es la droga correcta en dosis correcta.',
  },
  dtr_pseudomonas: {
    nombre: 'Pseudomonas aeruginosa con resistencia difícil de tratar (DTR)',
    clase: 'Resistencia a todos los betalactámicos de 1ª línea y quinolonas',
    activas: [
      {
        droga: 'Ceftolozano-tazobactam en dosis alta',
        evidencia: 'ASPECT-NP: 3 g cada 8 h, no inferior a meropenem en neumonía intrahospitalaria (mortalidad 24,0% vs 25,3%).',
      },
      { droga: 'Ceftazidima-avibactam', evidencia: 'Según sensibilidad (IDSA 2024).' },
      { droga: 'Imipenem-relebactam', evidencia: 'Según sensibilidad (IDSA 2024).' },
    ],
    noActivas: [
      { droga: 'Doble cobertura empírica sostenida', evidencia: 'Se desescala con el antibiograma; prolongarla no mejora el desenlace.' },
    ],
    nota: 'La dosis importa tanto como la molécula: ASPECT-NP usó el doble de la dosis habitual.',
  },
  samr: {
    nombre: 'Staphylococcus aureus resistente a meticilina',
    clase: 'Grampositivo · PBP2a',
    activas: [
      { droga: 'Vancomicina (con AUC/CIM 400–600)', evidencia: 'Estándar; el monitoreo está en el M09.' },
      { droga: 'Daptomicina', evidencia: 'Alternativa; no sirve en neumonía porque la inactiva el surfactante.' },
    ],
    noActivas: [
      {
        droga: 'Sumar un betalactámico antiestafilocócico',
        evidencia: 'CAMERA2: no mejoró el compuesto y la lesión renal aguda pasó de 6% a 23%. Se cortó por seguridad.',
      },
      { droga: 'Rifampicina adyuvante', evidencia: 'ARREST: sin beneficio (17% vs 18%) y más interacciones.' },
    ],
    nota: 'Si la bacteriemia persiste más de 48 h, hay que buscar un foco no controlado: endocarditis, absceso o material protésico.',
  },
  candida: {
    nombre: 'Candidemia',
    clase: 'Hongo levaduriforme',
    activas: [
      { droga: 'Equinocandina (anidulafungina, caspofungina, micafungina)', evidencia: 'Tratamiento inicial en el paciente crítico (IDSA 2016, guía global 2025).' },
      { droga: 'Rezafungina', evidencia: 'ReSTORE: no inferior a caspofungina, con una dosis semanal.' },
      { droga: 'Retirar el catéter venoso central', evidencia: 'Parte del tratamiento, no un accesorio.' },
    ],
    noActivas: [
      {
        droga: 'Antifúngico empírico por colonización',
        evidencia: 'EMPIRICUS: la micafungina empírica en el colonizado no mejoró la sobrevida libre de infección fúngica.',
      },
      { droga: 'Fluconazol en dosis renal reducida con CKRT', evidencia: 'Se fracasa: el hemofiltro lo depura más rápido que un riñón normal.' },
    ],
    nota: 'Sumar fondo de ojo y hemocultivos de control; 14 días desde el primer hemocultivo negativo.',
  },
};

export function simulateM16(raw: M16Inputs): M16Output {
  const f = FICHAS[raw.mecanismo];
  const alerts: M16Output['alerts'] = [];
  const toxicidad: string[] = [];

  if (raw.mecanismo === 'ndm' || raw.mecanismo === 'kpc_ndm') {
    alerts.push({
      tono: 'red',
      titulo: 'El avibactam solo no alcanza',
      detalle:
        'En Argentina las metalo-betalactamasas son el 42% de las carbapenemasas y la KPC el 39,8% (RECAPT-AR): casi la mitad no responde a ceftazidima-avibactam sola. Hay que tipificar la enzima antes de elegir.',
    });
    alerts.push({
      tono: 'amber',
      titulo: 'No extrapolar los puntos de corte',
      detalle:
        'Malbrán prohíbe usar los puntos de corte del aztreonam-avibactam coformulado para validar la mezcla artesanal de ceftazidima-avibactam + aztreonam. Detalle en el M09.',
    });
  }

  if (raw.mecanismo === 'samr' && raw.foco === 'neumonia') {
    alerts.push({
      tono: 'red',
      titulo: 'Daptomicina no sirve en neumonía',
      detalle: 'El surfactante pulmonar la inactiva. En la neumonía por SAMR se usa vancomicina o linezolid.',
    });
  }

  if (raw.mecanismo === 'candida' && raw.renal === 'ckrt') {
    alerts.push({
      tono: 'red',
      titulo: 'Fluconazol en CKRT: dosis plena',
      detalle:
        'El hemofiltro no reabsorbe en el túbulo, así que depura el fluconazol más rápido que un riñón sano: 800 mg de carga y 800 mg/día. Con dosis renal reducida se fracasa.',
    });
  }

  if (raw.renal !== 'normal') {
    toxicidad.push('Colistina y aminoglucósidos: nefrotoxicidad, ya con la función renal comprometida.');
    if (raw.renal === 'ckrt') {
      toxicidad.push('En CKRT hay que recalcular casi todo: dosis y ajustes en el M09.');
    }
  }
  if (raw.mecanismo === 'crab') {
    toxicidad.push('Colistina: nefrotoxicidad del 38% en ATTACK frente al 13% con sulbactam-durlobactam.');
  }
  if (raw.mecanismo === 'samr') {
    toxicidad.push('Vancomicina más betalactámico: lesión renal aguda del 23% frente al 6% (CAMERA2).');
  }

  if (raw.shock) {
    alerts.push({
      tono: 'cyan',
      titulo: 'En shock, el antibiótico no espera',
      detalle:
        'Cada hora de demora se asoció a más mortalidad en el shock séptico (OR 1,15 por hora). Se empieza amplio según la epidemiología local y se desescala a las 48–72 h con el cultivo.',
    });
  }

  return {
    nombre: f.nombre,
    clase: f.clase,
    activas: f.activas,
    noActivas: f.noActivas,
    nota: f.nota,
    toxicidad,
    alerts,
  };
}

export const MECANISMOS: Mecanismo[] = [
  'blee',
  'ampc',
  'kpc',
  'ndm',
  'oxa48',
  'kpc_ndm',
  'crab',
  'dtr_pseudomonas',
  'samr',
  'candida',
];

export function nombreMecanismo(m: Mecanismo): string {
  return FICHAS[m].nombre;
}

/** Reparto de carbapenemasas en Argentina (RECAPT-AR, 821 aislamientos, 2021). */
export const RECAPT_AR: Array<{ enzima: string; pct: number; mecanismo?: Mecanismo }> = [
  { enzima: 'Metalo-betalactamasas (NDM, VIM)', pct: 42.0, mecanismo: 'ndm' },
  { enzima: 'KPC', pct: 39.8, mecanismo: 'kpc' },
  { enzima: 'OXA-163', pct: 7.4, mecanismo: 'oxa48' },
  { enzima: 'Combinaciones (NDM+KPC y otras)', pct: 8.3, mecanismo: 'kpc_ndm' },
];
