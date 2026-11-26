import React from 'react';
import { Calculator, ExternalLink } from 'lucide-react';
import { utiToolsForModule } from '../data/utiTools';

interface UtiToolsLinksProps {
  moduleId: string;
}

/**
 * Enlaces del Atlas hacia las calculadoras de cabecera de UTI Tools.
 * No comparte código ni constantes con los simuladores: son herramientas distintas.
 */
export const UtiToolsLinks: React.FC<UtiToolsLinksProps> = ({ moduleId }) => {
  const tools = utiToolsForModule(moduleId);
  if (tools.length === 0) return null;

  return (
    <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Calculator size={15} color="var(--muted)" />
        <span className="eyebrow" style={{ color: 'var(--muted)' }}>
          Calculadoras relacionadas en UTI Tools
        </span>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-preset"
            title={tool.descripcion}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
          >
            {tool.nombre} <ExternalLink size={12} />
          </a>
        ))}
      </div>

      <p style={{ margin: 0, fontSize: 12.5, color: 'var(--muted)' }}>
        Se abren en otra pestaña. El Atlas es material de estudio y sus simuladores son didácticos: para
        calcular una dosis o un score de un paciente real usá la calculadora, y verificá en cada una la
        unidad y la sal de la noradrenalina antes de comparar valores.
      </p>
    </div>
  );
};
