import React, { useMemo, useState } from 'react';
import { ShieldCheck, Search } from 'lucide-react';
import type { AuditEntry } from '../types/atlas';
import { RichMarkdown } from './RichMarkdown';

interface AuditViewProps {
  entries: AuditEntry[];
  onNavigateModule: (moduleId: string) => void;
}

export const AuditView: React.FC<AuditViewProps> = ({ entries, onNavigateModule }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((item) =>
      `${item.fuenteError} ${item.afirmacionErronea} ${item.correccionVerificada} ${item.modulos.join(' ')}`
        .toLowerCase()
        .includes(q)
    );
  }, [entries, query]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="panel">
        <div className="eyebrow" style={{ color: 'var(--prot)' }}>
          Control de Calidad · Base de Conocimiento Auditada
        </div>
        <h1 className="font-display" style={{ margin: '4px 0 6px', fontSize: 26 }}>
          Registro de Auditoría y Correcciones Maestras ({entries.length} ítems)
        </h1>
        <p style={{ margin: '0 0 12px', color: 'var(--ink-2)', fontSize: 13.5, maxWidth: '72ch' }}>
          Discrepancias, mitos obsoletos y trampas matemáticas detectadas al cruzar NotebookLM, notas de la bóveda local y literatura primaria 2024–2026. Ningún simulador ni módulo reproduce estas afirmaciones antiguas.
        </p>

        <div style={{ position: 'relative', maxWidth: 420 }}>
          <Search
            size={15}
            style={{ position: 'absolute', left: 10, top: 10, color: 'var(--muted)' }}
          />
          <input
            type="text"
            className="icu-input"
            style={{ paddingLeft: 32 }}
            placeholder="Filtrar auditoría (OPTPRESS, VNERi, SOFA-2, TIGRIS, zonulina...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map((item) => (
          <div key={item.numero} className="panel" style={{ padding: '14px 18px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
                marginBottom: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="badge badge-amber">Auditoría #{item.numero}</span>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>
                  <RichMarkdown markdown={item.fuenteError} />
                </span>
              </div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {item.modulos.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className="btn-preset"
                    style={{ padding: '3px 8px', fontSize: 11 }}
                    onClick={() => onNavigateModule(m)}
                  >
                    Ir a {m}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
                gap: 12,
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 92, 122, 0.06)',
                  border: '1px solid rgba(255, 92, 122, 0.28)',
                  borderRadius: 8,
                  padding: '9px 12px',
                }}
              >
                <div className="eyebrow" style={{ color: 'var(--alert)', marginBottom: 4 }}>
                  Afirmación errónea o incompleta previa
                </div>
                <RichMarkdown markdown={item.afirmacionErronea} onNavigateModule={onNavigateModule} />
              </div>

              <div
                style={{
                  background: 'rgba(52, 211, 153, 0.06)',
                  border: '1px solid rgba(52, 211, 153, 0.28)',
                  borderRadius: 8,
                  padding: '9px 12px',
                }}
              >
                <div
                  className="eyebrow"
                  style={{ color: 'var(--ok)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 5 }}
                >
                  <ShieldCheck size={12} /> Corrección verificada en fuente primaria
                </div>
                <RichMarkdown markdown={item.correccionVerificada} onNavigateModule={onNavigateModule} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
