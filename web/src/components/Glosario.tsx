import React, { useState } from 'react';
import { BookMarked, ChevronDown } from 'lucide-react';
import { entradas, type EntradaGlosario } from '../data/glosario';

/**
 * Panel de siglas de un simulador.
 *
 * No usa hover a proposito: en el celular no hay hover, y el Atlas se estudia
 * desde el celular. Cada sigla se abre con un toque y muestra el desarrollo,
 * que mide y por que importa.
 */

const Fila: React.FC<{ e: EntradaGlosario; abiertaInicial?: boolean }> = ({ e, abiertaInicial }) => {
  const [abierta, setAbierta] = useState(Boolean(abiertaInicial));
  return (
    <div style={{ borderTop: '1px solid rgba(111,139,168,0.18)' }}>
      <button
        type="button"
        onClick={() => setAbierta((v) => !v)}
        aria-expanded={abierta}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '9px 0',
          display: 'flex',
          alignItems: 'baseline',
          gap: 9,
          cursor: 'pointer',
          textAlign: 'left',
          color: 'inherit',
          font: 'inherit',
        }}
      >
        <ChevronDown
          size={13}
          color="#6F8BA8"
          style={{
            flexShrink: 0,
            alignSelf: 'center',
            transform: abierta ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.15s',
          }}
        />
        <strong
          className="font-display"
          style={{ fontSize: 13, color: 'var(--gag)', flexShrink: 0 }}
        >
          {e.sigla}
        </strong>
        <span style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4 }}>{e.expansion}</span>
      </button>
      {abierta && (
        <div style={{ padding: '0 0 11px 22px', display: 'flex', flexDirection: 'column', gap: 7 }}>
          {e.formula && (
            <div
              className="font-display"
              style={{
                fontSize: 12,
                color: 'var(--ink-1)',
                background: 'rgba(111,139,168,0.10)',
                padding: '6px 9px',
                borderRadius: 5,
                lineHeight: 1.5,
              }}
            >
              {e.formula}
            </div>
          )}
          <div style={{ fontSize: 12, lineHeight: 1.55 }}>
            <span style={{ color: 'var(--muted)' }}>Qué es: </span>
            <span style={{ color: 'var(--ink-2)' }}>{e.que}</span>
          </div>
          <div style={{ fontSize: 12, lineHeight: 1.55 }}>
            <span style={{ color: 'var(--prot)' }}>Por qué importa: </span>
            <span style={{ color: 'var(--ink-2)' }}>{e.porque}</span>
          </div>
          {e.fuente && (
            <div style={{ fontSize: 10.5, color: 'var(--muted)', lineHeight: 1.45 }}>{e.fuente}</div>
          )}
        </div>
      )}
    </div>
  );
};

export const Glosario: React.FC<{ claves: string[]; abrirPrimera?: boolean }> = ({
  claves,
  abrirPrimera,
}) => {
  const lista = entradas(claves);
  if (lista.length === 0) return null;

  return (
    <div className="panel-dark" style={{ padding: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 2 }}>
        <BookMarked size={14} color="#9A87F5" />
        <span className="eyebrow" style={{ color: 'var(--gag)' }}>
          Las siglas de esta pantalla ({lista.length})
        </span>
      </div>
      <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 4 }}>
        Tocá cualquiera para ver qué significa, qué mide y por qué importa.
      </div>
      {lista.map((e, i) => (
        <Fila key={e.sigla} e={e} abiertaInicial={abrirPrimera && i === 0} />
      ))}
    </div>
  );
};
