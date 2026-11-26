import registry from './uti-tools.json';

export interface UtiTool {
  id: string;
  nombre: string;
  descripcion: string;
  url: string;
}

type ToolEntry = { nombre: string; path: string; descripcion: string };

const tools = registry.tools as Record<string, ToolEntry>;
const modulos = registry.modulos as Record<string, string[]>;

/** Calculadoras de UTI Tools relacionadas con un módulo del Atlas (vacío si no hay). */
export function utiToolsForModule(moduleId: string): UtiTool[] {
  return (modulos[moduleId] ?? [])
    .filter((id) => id in tools)
    .map((id) => ({
      id,
      nombre: tools[id].nombre,
      descripcion: tools[id].descripcion,
      url: `${registry.baseUrl}/${tools[id].path}`,
    }));
}
