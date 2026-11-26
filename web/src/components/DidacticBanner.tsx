import React from 'react';
import { Info } from 'lucide-react';

/** Cartel fijo en todas las pantallas: el Atlas es material de estudio, no apoyo a la decisión. */
export const DidacticBanner: React.FC = () => (
  <div
    role="note"
    className="panel"
    style={{
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      borderColor: 'rgba(233, 180, 76, 0.45)',
      background: 'rgba(233, 180, 76, 0.07)',
      padding: '10px 14px',
      marginBottom: 16,
    }}
  >
    <Info size={16} color="#E9B44C" style={{ flexShrink: 0, marginTop: 2 }} />
    <p style={{ margin: 0, fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
      <strong>Material de estudio para residentes, no una herramienta de apoyo a la decisión clínica.</strong>{' '}
      Los simuladores usan modelos simplificados con algunas constantes ilustrativas, y parte de las cifras y
      citas está pendiente de verificación. Ante un paciente real, guiate por el juicio clínico, las guías
      vigentes y el protocolo de tu servicio.
    </p>
  </div>
);
