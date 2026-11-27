/**
 * Motor del simulador del M19: la epicrisis que sirve.
 *
 * Toma los datos del alta y devuelve tres cosas: el subtipo de sobreviviente
 * segun los tres ejes de Flick 2026, el checklist de epicrisis que la SSC 2026
 * pide como buena practica, y las banderas de seguimiento que corresponden a
 * ESTE paciente.
 *
 * Sobre el subtipo: Flick 2026 (analisis secundario de CLOVERS, n = 1.368)
 * separo cinco subtipos con el indice de Charlson, los dias de internacion y
 * el destino al alta, con mortalidad a 3 meses entre 5,1% y 45,5%. El abstract
 * publica el OR de dos de ellos ("bajo estado funcional" 11,1 y "basal enfermo
 * con enfermedad grave" 9,7) y el rango global, no el valor de cada subtipo.
 * La clasificacion de abajo es una reconstruccion didactica de esos tres ejes:
 * las etiquetas intermedias son descriptivas, no nombres del paper, y por eso
 * el motor devuelve una banda de riesgo y no un porcentaje inventado.
 *
 * Es material de estudio, no una herramienta de decision.
 */

export type Destino = 'domicilio' | 'rehabilitacion' | 'institucion';
export type Banda = 'bajo' | 'intermedio' | 'alto' | 'muy_alto';

export interface M19Inputs {
  charlson: number;
  diasInternacion: number;
  destino: Destino;
  diasVentilacion: number;
  diasDelirium: number;
  corticoides: boolean;
  hbAlta: number;
  edad: number;
}

export interface Subtipo {
  id: string;
  nombre: string;
  banda: Banda;
  descripcion: string;
  mortalidadTexto: string;
  orPublicado: string | null;
}

export interface ItemChecklist {
  titulo: string;
  detalle: string;
  obligatorio: boolean;
}

export interface Bandera {
  titulo: string;
  detalle: string;
  tono: 'red' | 'amber' | 'cyan';
  activa: boolean;
  motivo: string;
}

export interface PuntoSobrevida {
  meses: number;
  sobrevida: number;
  publicado: boolean;
  etiqueta: string | null;
}

export interface M19Output {
  subtipo: Subtipo;
  charlsonAlto: boolean;
  internacionProlongada: boolean;
  vuelveACasa: boolean;
  checklist: ItemChecklist[];
  banderas: Bandera[];
  curvaSobrevida: PuntoSobrevida[];
  alerts: Array<{ tono: 'red' | 'amber' | 'cyan'; titulo: string; detalle: string }>;
}

export const DESTINO_LABEL: Record<Destino, string> = {
  domicilio: 'Domicilio',
  rehabilitacion: 'Centro de rehabilitación',
  institucion: 'Institución de cuidados prolongados',
};

export const BANDA_LABEL: Record<Banda, string> = {
  bajo: 'Riesgo bajo',
  intermedio: 'Riesgo intermedio',
  alto: 'Riesgo alto',
  muy_alto: 'Riesgo muy alto',
};

/** Umbrales didacticos de los tres ejes de Flick 2026. */
export const CHARLSON_ALTO = 3;
export const INTERNACION_PROLONGADA = 14;

/**
 * Curva de sobrevida post-alta de Engoren 2023 (32.244 sobrevivientes).
 * Solo los puntos marcados como publicados salen del paper; el resto se
 * interpola para dibujar la forma de la curva.
 */
export const SOBREVIDA_ENGOREN: PuntoSobrevida[] = [
  { meses: 0, sobrevida: 100, publicado: true, etiqueta: 'Alta' },
  { meses: 1, sobrevida: 91.3, publicado: true, etiqueta: '1 mes' },
  { meses: 3, sobrevida: 86, publicado: false, etiqueta: null },
  { meses: 6, sobrevida: 81, publicado: false, etiqueta: null },
  { meses: 12, sobrevida: 76, publicado: true, etiqueta: '1 año' },
  { meses: 24, sobrevida: 70, publicado: false, etiqueta: null },
  { meses: 36, sobrevida: 64, publicado: false, etiqueta: null },
  { meses: 60, sobrevida: 57, publicado: true, etiqueta: '5 años' },
  { meses: 90, sobrevida: 52, publicado: false, etiqueta: null },
  { meses: 120, sobrevida: 48, publicado: true, etiqueta: '10 años' },
];

export function clasificarSubtipo(raw: M19Inputs): Subtipo {
  const charlsonAlto = raw.charlson >= CHARLSON_ALTO;
  const internacionLarga = raw.diasInternacion >= INTERNACION_PROLONGADA;
  const vuelveACasa = raw.destino === 'domicilio';

  // Los dos subtipos que el abstract de Flick 2026 nombra con su OR.
  if (charlsonAlto && internacionLarga && !vuelveACasa) {
    return {
      id: 'basal_enfermo_enfermedad_grave',
      nombre: 'Basal enfermo con enfermedad grave',
      banda: 'muy_alto',
      descripcion:
        'Comorbilidad previa alta, internación prolongada y alta a un destino que no es la casa: los tres ejes apuntando al mismo lado.',
      mortalidadTexto: 'Extremo alto del rango de Flick 2026 (hasta 45,5% a 3 meses)',
      orPublicado: 'OR 9,7 de muerte o discapacidad',
    };
  }
  if (!vuelveACasa) {
    return {
      id: 'bajo_estado_funcional',
      nombre: 'Bajo estado funcional',
      banda: 'alto',
      descripcion:
        'El destino al alta es el eje que más pesa: no volver a la casa marca un estado funcional que no se recuperó durante la internación.',
      mortalidadTexto: 'Es el subtipo de mayor OR publicado en Flick 2026',
      orPublicado: 'OR 11,1 de muerte o discapacidad',
    };
  }

  // Etiquetas descriptivas de los tres ejes restantes (no son nombres del paper).
  if (charlsonAlto && internacionLarga) {
    return {
      id: 'comorbido_internacion_larga',
      nombre: 'Comórbido con internación prolongada',
      banda: 'alto',
      descripcion:
        'Vuelve a la casa, pero con comorbilidad alta y una internación larga detrás. Dos de los tres ejes en contra.',
      mortalidadTexto: 'Zona alta del rango de Flick 2026 (5,1% a 45,5% a 3 meses)',
      orPublicado: null,
    };
  }
  if (charlsonAlto || internacionLarga) {
    return {
      id: 'un_eje_en_contra',
      nombre: charlsonAlto ? 'Comórbido con internación corta' : 'Basal sano con internación prolongada',
      banda: 'intermedio',
      descripcion: charlsonAlto
        ? 'La comorbilidad previa es el peso: con el tiempo pesa más que la gravedad de la sepsis (Engoren 2023).'
        : 'Sin comorbilidad previa, pero la internación fue larga. El exceso de mortalidad frente a la población general es mayor justamente en los previamente sanos (HR 17,5 entre los meses 2 y 12).',
      mortalidadTexto: 'Zona media del rango de Flick 2026 (5,1% a 45,5% a 3 meses)',
      orPublicado: null,
    };
  }
  return {
    id: 'basal_sano_corta',
    nombre: 'Basal sano con internación corta',
    banda: 'bajo',
    descripcion:
      'Los tres ejes a favor: poca comorbilidad, internación corta y alta a la casa. Es el extremo favorable, no la ausencia de riesgo.',
    mortalidadTexto: 'Extremo bajo del rango de Flick 2026 (desde 5,1% a 3 meses)',
    orPublicado: null,
  };
}

export function simulateM19(raw: M19Inputs): M19Output {
  const subtipo = clasificarSubtipo(raw);
  const charlsonAlto = raw.charlson >= CHARLSON_ALTO;
  const internacionProlongada = raw.diasInternacion >= INTERNACION_PROLONGADA;
  const vuelveACasa = raw.destino === 'domicilio';

  // --- Checklist de epicrisis (SSC 2026, buena practica) ---
  const checklist: ItemChecklist[] = [
    {
      titulo: 'Nombrar la sepsis en la epicrisis',
      detalle:
        '«Shock séptico resuelto» no alcanza. La SSC 2026 pide informar en la epicrisis escrita y verbal qué pasó, qué tratamientos recibió y qué secuelas puede esperar.',
      obligatorio: true,
    },
    {
      titulo: 'Las secuelas esperables, con nombre',
      detalle:
        'Debilidad, fatiga, problemas de memoria y de atención, ánimo y ansiedad, y mayor riesgo de una nueva infección. Si no se nombran, el paciente las vive como algo que le pasa solo a él.',
      obligatorio: true,
    },
    {
      titulo: 'Los signos de alarma y a quién consultar',
      detalle:
        'La infección o una nueva sepsis fue la causa más frecuente de reingreso en 18 de 21 estudios: 4,7% a 30 días, 8,1% a 90 días y 16,4% al año.',
      obligatorio: true,
    },
    {
      titulo: 'Plan de alta en decisión compartida',
      detalle:
        'Con el paciente y la familia, no como una indicación entregada. Es buena práctica de la SSC 2026, el nivel más alto que alcanzó cualquier recomendación de este capítulo.',
      obligatorio: true,
    },
    {
      titulo: 'Riesgo de reinfección explicado al paciente',
      detalle:
        'El reingreso por infección sigue aumentado más de 5 años después del episodio (HR 2,1), y la infección fue la causa dominante del exceso de muerte tardía (HR 6,3).',
      obligatorio: true,
    },
  ];

  // --- Banderas de seguimiento para ESTE paciente ---
  const banderas: Bandera[] = [
    {
      titulo: 'Rehabilitación física',
      detalle:
        'La SSC 2026 la sugiere (condicional, certeza baja) a quien estuvo más de 48 h en ventilación invasiva. Ojo con la expectativa: en sobrevivientes de SDRA, a los 5 años la marcha seguía en el 76% de lo esperado y ningún grupo de edad volvió a lo normal.',
      tono: 'amber',
      activa: raw.diasVentilacion > 2,
      motivo: `${raw.diasVentilacion} días de ventilación invasiva`,
    },
    {
      titulo: 'Evaluación cognitiva',
      detalle:
        'En BRAIN-ICU, el 40% tenía a los 3 meses puntajes como un TCE moderado y el 26% como un Alzheimer leve, y más días de delirium se asociaron a peor cognición a los 3 y 12 meses. Afectó a jóvenes y a mayores. Ningún ensayo de seguimiento apuntó a este dominio.',
      tono: 'red',
      activa: raw.diasDelirium >= 3,
      motivo: `${raw.diasDelirium} días de delirium`,
    },
    {
      titulo: 'Debilidad adquirida en la UTI',
      detalle:
        'En De Jonghe 2002, el 25,3% de los ventilados 7 días o más tuvo debilidad grave al despertar, y los corticoides fueron el factor de riesgo más fuerte (OR 14,9). Duró una mediana de 21 días.',
      tono: 'amber',
      activa: raw.diasVentilacion >= 7 && raw.corticoides,
      motivo: `${raw.diasVentilacion} días de ventilación con corticoides`,
    },
    {
      titulo: 'Control cardiovascular',
      detalle:
        'Eventos cardiovasculares mayores en el 9% de los sobrevivientes (HR 1,54), con el mayor aumento relativo en los de 45 años o menos (HR 2,51). La heterogeneidad es muy alta: es una señal, no una cifra precisa.',
      tono: 'cyan',
      activa: raw.edad <= 45,
      motivo: `${raw.edad} años`,
    },
    {
      titulo: 'Revisar la hemoglobina al alta',
      detalle:
        'En Engoren 2023, cada g/dL menos de hemoglobina al alta se asoció a más mortalidad posterior (HR 0,92 por g/dL). Es una variable que casi nadie mira en la epicrisis.',
      tono: 'amber',
      activa: raw.hbAlta < 10,
      motivo: `hemoglobina de ${raw.hbAlta.toFixed(1)} g/dL`,
    },
  ];

  // --- Alertas ---
  const alerts: M19Output['alerts'] = [];

  if (raw.diasVentilacion > 2 && vuelveACasa) {
    alerts.push({
      tono: 'amber',
      titulo: 'Más de 48 h de ventilación y se va a la casa',
      detalle:
        'Es el punto donde la SSC 2026 sugiere rehabilitación física. Si el alta sale sin eso y sin seguimiento, el paciente queda solo con la debilidad y la fatiga, que es lo que los sobrevivientes de SDRA señalaron como su mayor limitación al año.',
    });
  }

  if (raw.diasDelirium >= 5) {
    alerts.push({
      tono: 'red',
      titulo: `${raw.diasDelirium} días de delirium: riesgo cognitivo alto`,
      detalle:
        'El delirium es la variable modificable que une lo que se hace en la UTI con la cognición posterior. Conviene dejarlo escrito en la epicrisis y avisarle a la familia qué puede aparecer, porque si no lo atribuyen a otra cosa.',
    });
  }

  if (raw.edad <= 45 && raw.charlson <= 1) {
    alerts.push({
      tono: 'cyan',
      titulo: 'Joven y previamente sano: el riesgo relativo es mayor, no menor',
      detalle:
        'Entre los meses 2 y 12, el exceso de mortalidad frente a la población general fue de HR 17,5 en los previamente sanos frente a 2,9 en los comórbidos. El riesgo absoluto es bajo, pero el relativo es el más alto de todos.',
    });
  }

  if (!vuelveACasa) {
    alerts.push({
      tono: 'red',
      titulo: `Destino al alta: ${DESTINO_LABEL[raw.destino].toLowerCase()}`,
      detalle:
        'En Flick 2026, el destino al alta es uno de los tres datos que más separan a los sobrevivientes, y «bajo estado funcional» fue el subtipo con el OR más alto (11,1) de muerte o discapacidad a 6 y 12 meses.',
    });
  }

  if (charlsonAlto) {
    alerts.push({
      tono: 'amber',
      titulo: `Índice de Charlson ${raw.charlson}`,
      detalle:
        'Con el tiempo, la gravedad de la sepsis pesa menos y las comorbilidades previas pesan más. La mortalidad mensual se concentra en las primeras semanas (8,7% el primer mes, 1,1% en el mes 12) y después se aplana.',
    });
  }

  return {
    subtipo,
    charlsonAlto,
    internacionProlongada,
    vuelveACasa,
    checklist,
    banderas,
    curvaSobrevida: SOBREVIDA_ENGOREN,
    alerts,
  };
}

export interface M19Preset {
  id: string;
  nombre: string;
  resumen: string;
  inputs: M19Inputs;
}

export const M19_PRESETS: M19Preset[] = [
  {
    id: 'caso1',
    nombre: 'Mujer de 42, 14 días de UTI',
    resumen:
      '9 días de ventilación y 5 de delirium, alta a domicilio con «shock séptico resuelto». El error del Caso 1.',
    inputs: {
      charlson: 1,
      diasInternacion: 14,
      destino: 'domicilio',
      diasVentilacion: 9,
      diasDelirium: 5,
      corticoides: true,
      hbAlta: 9.2,
      edad: 42,
    },
  },
  {
    id: 'basal_sano',
    nombre: 'Basal sano, internación corta',
    resumen: 'Sin comorbilidad, 5 días de internación, sin ventilación y alta a la casa: el extremo favorable.',
    inputs: {
      charlson: 0,
      diasInternacion: 5,
      destino: 'domicilio',
      diasVentilacion: 0,
      diasDelirium: 0,
      corticoides: false,
      hbAlta: 12.4,
      edad: 58,
    },
  },
  {
    id: 'bajo_estado_funcional',
    nombre: 'Alta a rehabilitación',
    resumen: 'Charlson 2 e internación de 11 días, pero no vuelve a la casa: el subtipo de mayor OR publicado.',
    inputs: {
      charlson: 2,
      diasInternacion: 11,
      destino: 'rehabilitacion',
      diasVentilacion: 6,
      diasDelirium: 2,
      corticoides: false,
      hbAlta: 10.4,
      edad: 67,
    },
  },
  {
    id: 'basal_enfermo',
    nombre: 'Basal enfermo con enfermedad grave',
    resumen: 'Charlson 6, 28 días de internación e institución de cuidados prolongados: los tres ejes en contra.',
    inputs: {
      charlson: 6,
      diasInternacion: 28,
      destino: 'institucion',
      diasVentilacion: 18,
      diasDelirium: 9,
      corticoides: true,
      hbAlta: 8.1,
      edad: 79,
    },
  },
  {
    id: 'joven_sano',
    nombre: 'Joven previamente sano',
    resumen: '31 años, sin comorbilidad: riesgo absoluto bajo y riesgo relativo el más alto de todos (HR 17,5).',
    inputs: {
      charlson: 0,
      diasInternacion: 9,
      destino: 'domicilio',
      diasVentilacion: 4,
      diasDelirium: 1,
      corticoides: false,
      hbAlta: 11.1,
      edad: 31,
    },
  },
];
