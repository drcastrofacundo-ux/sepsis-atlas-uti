export type DepthMode = 'base' | 'frontera' | 'dual';

export type ModuleAxis = 'bases' | 'hemodinamia' | 'antimicrobianos' | 'organos_sati';

export interface McqOption {
  letra: string;
  texto: string;
}

export interface McqItem {
  id: string;
  numero: number;
  etiqueta: string;
  enunciado: string;
  opciones: McqOption[];
  correcta: string;
  justificacion: string;
}

export interface ErrorCaseItem {
  id: string;
  numero: number;
  titulo: string;
  escenario: string;
  resolucion: string;
}

export interface FlashcardItem {
  id: string;
  numero: number;
  frente: string;
  dorso: string;
}

export interface AtlasModule {
  id: string;
  slug: string;
  fileName: string;
  titulo: string;
  subtitulo: string;
  ultimaActualizacion: string;
  pilotoFase2: boolean;
  fuentesNlm: string[];
  fuentesVault: string[];
  palabrasClave: string[];
  capaBaseMd: string;
  capaFronteraMd: string;
  mitosMd: string;
  simuladorSpecMd: string;
  actividadesMd: string;
  referenciasMd: string;
  casoTMd?: string;
  monitorMienteMd?: string;
  mcqs: McqItem[];
  casosError: ErrorCaseItem[];
  flashcards: FlashcardItem[];
}

export interface LivingEvidenceEntry {
  id: string;
  fecha_radar: string;
  fechas_radar: string[];
  titulo: string;
  cita: string;
  pmid: string | null;
  doi: string | null;
  tipo_pregunta: string;
  poblacion: string;
  resultado_clave: string;
  limitaciones: string;
  impacto_uti: string;
  no_sobreinterpretar: string;
  archivo_origen: string;
  seccion_radar: string;
  senal_practica: boolean;
  es_alerta_metodologica: boolean;
  relevancia_sepsis: string;
  modulos: string[];
}

export interface LivingEvidenceData {
  ultima_actualizacion: string;
  radars_procesados: number;
  rango_fechas: {
    desde: string;
    hasta: string;
  };
  total_entradas: number;
  omitidas_solo_cardiologia: number;
  conteo_por_modulo: Record<string, number>;
  chequeo_pubmed: unknown;
  entradas: LivingEvidenceEntry[];
}

export interface AuditEntry {
  numero: number;
  fuenteError: string;
  afirmacionErronea: string;
  correccionVerificada: string;
  modulos: string[];
}

export type ActiveRoute =
  | { kind: 'dashboard' }
  | { kind: 'evidence' }
  | { kind: 'audit' }
  | { kind: 'module'; moduleId: string; tab?: ModuleTab };

export type ModuleTab = 'simulador' | 'estudio' | 'entrenamiento' | 'evidencia' | 'referencias';

export const MODULE_AXIS_MAP: Record<string, { axis: ModuleAxis; label: string; short: string }> = {
  M01: { axis: 'bases', label: 'Eje I · Bases y Respuesta', short: 'Definición & SOFA-2' },
  M02: { axis: 'bases', label: 'Eje I · Bases y Respuesta', short: 'Inmunopatología & Endotipos' },
  M03: { axis: 'bases', label: 'Eje I · Bases y Respuesta', short: 'Glicocálix & Fuga Capilar' },
  M20: { axis: 'bases', label: 'Eje I · Bases y Respuesta', short: 'La Sepsis como Sistema' },
  M04: { axis: 'hemodinamia', label: 'Eje II · Perfusión y Hemodinamia', short: 'Microcirculación & Lactato' },
  M05: { axis: 'hemodinamia', label: 'Eje II · Perfusión y Hemodinamia', short: 'Hemodinamia PAD/PP & Fluidos' },
  M06: { axis: 'hemodinamia', label: 'Eje II · Perfusión y Hemodinamia', short: 'Vasoactivos & Corticoides' },
  M07: { axis: 'hemodinamia', label: 'Eje II · Perfusión y Hemodinamia', short: 'POCUS, SCM & VExUS' },
  M08: { axis: 'organos_sati', label: 'Eje IV · Coagulación, Órganos y SATI', short: 'Coagulopatía & SIC-2' },
  M09: { axis: 'antimicrobianos', label: 'Eje III · Infección, Foco y Antimicrobianos', short: 'ATB, PK/PD, ARC & CKRT' },
  M14: { axis: 'antimicrobianos', label: 'Eje III · Infección, Foco y Antimicrobianos', short: 'Diagnóstico & Control de Foco' },
  M16: { axis: 'antimicrobianos', label: 'Eje III · Infección, Foco y Antimicrobianos', short: 'Multirresistentes, Hongos & Virus' },
  M10: { axis: 'organos_sati', label: 'Eje IV · Coagulación, Órganos y SATI', short: 'Riñón SA-AKI & Extracorpóreo' },
  M11: { axis: 'organos_sati', label: 'Eje IV · Coagulación, Órganos y SATI', short: 'Hígado, Intestino, SAE & Sedación' },
  M15: { axis: 'organos_sati', label: 'Eje IV · Coagulación, Órganos y SATI', short: 'Pulmón Séptico & SDRA' },
  M17: { axis: 'organos_sati', label: 'Eje IV · Coagulación, Órganos y SATI', short: 'Glucemia, Nutrición & Soporte' },
  M18: { axis: 'organos_sati', label: 'Eje IV · Coagulación, Órganos y SATI', short: 'Poblaciones Especiales' },
  M19: { axis: 'organos_sati', label: 'Eje IV · Coagulación, Órganos y SATI', short: 'Después de la UTI & PICS' },
  M12: { axis: 'organos_sati', label: 'Eje IV · Coagulación, Órganos y SATI', short: 'Centro Integrador SATI' },
};
