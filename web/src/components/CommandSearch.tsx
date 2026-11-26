import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, Radar, Search, ShieldCheck, Sparkles, X } from 'lucide-react';
import type { AtlasModule, AuditEntry, LivingEvidenceEntry } from '../types/atlas';

interface CommandSearchProps {
  open: boolean;
  onClose: () => void;
  modules: AtlasModule[];
  evidencia: LivingEvidenceEntry[];
  auditoria: AuditEntry[];
  onSelectModule: (moduleId: string) => void;
  onSelectEvidence: () => void;
  onSelectAudit: () => void;
}

const QUICK_CHIPS = [
  'Glicocálix',
  'VNERi',
  'ANDROMEDA-2',
  'ARC',
  'Cefepime',
  'SOFA-2',
  'VExUS',
  'Fluconazol',
];

export const CommandSearch: React.FC<CommandSearchProps> = ({
  open,
  onClose,
  modules,
  evidencia,
  auditoria,
  onSelectModule,
  onSelectEvidence,
  onSelectAudit,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        mods: modules.slice(0, 6),
        ev: evidencia.slice(0, 4),
        aud: auditoria.slice(0, 3),
      };
    }

    const mods = modules
      .filter((m) =>
        `${m.id} ${m.titulo} ${m.subtitulo} ${m.palabrasClave.join(' ')} ${m.capaBaseMd.slice(0, 1200)} ${m.capaFronteraMd.slice(0, 1200)} ${m.mitosMd}`
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 8);

    const ev = evidencia
      .filter((e) =>
        `${e.titulo} ${e.pmid ?? ''} ${e.resultado_clave} ${e.impacto_uti} ${e.no_sobreinterpretar}`
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 6);

    const aud = auditoria
      .filter((a) =>
        `${a.fuenteError} ${a.afirmacionErronea} ${a.correccionVerificada}`
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 5);

    return { mods, ev, aud };
  }, [query, modules, evidencia, auditoria]);

  const openFirstMatch = () => {
    if (results.mods.length > 0) {
      onSelectModule(results.mods[0].id);
      onClose();
      return;
    }
    if (results.ev.length > 0) {
      if (results.ev[0].modulos[0]) onSelectModule(results.ev[0].modulos[0]);
      else onSelectEvidence();
      onClose();
      return;
    }
    if (results.aud.length > 0) {
      onSelectAudit();
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'rgba(4, 8, 15, 0.78)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '64px 16px 24px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="panel"
        style={{
          width: '100%',
          maxWidth: 740,
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          padding: 16,
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Search size={17} color="#3FD8C8" />
          <input
            ref={inputRef}
            type="text"
            className="icu-input"
            style={{ flex: 1, fontSize: 14.5 }}
            placeholder="Buscar tema, ensayo, fármaco o trampa (Enter para abrir el primero)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                openFirstMatch();
              }
            }}
          />
          <button type="button" className="btn btn-ghost" onClick={onClose} aria-label="Cerrar buscador">
            <X size={16} />
          </button>
        </div>

        {!query.trim() && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            <span className="eyebrow" style={{ fontSize: 10 }}>Sugeridos:</span>
            {QUICK_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                className="btn-preset"
                style={{ padding: '3px 9px', fontSize: 11.5 }}
                onClick={() => setQuery(chip)}
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, paddingRight: 4 }}>
          {results.mods.length > 0 && (
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                Módulos ({results.mods.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {results.mods.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className="nav-item"
                    style={{
                      borderColor: 'var(--line)',
                      background: 'var(--bg-2)',
                      alignItems: 'flex-start',
                    }}
                    onClick={() => {
                      onSelectModule(m.id);
                      onClose();
                    }}
                  >
                    <BookOpen size={15} color="#3FD8C8" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span className="font-mono" style={{ color: 'var(--gag)', fontWeight: 700, minWidth: 30 }}>
                      {m.id}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: 'var(--ink)', fontWeight: 600 }}>{m.titulo}</div>
                      <div
                        style={{
                          fontSize: 11.5,
                          color: 'var(--muted)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {m.subtitulo}
                      </div>
                    </div>
                    {m.pilotoFase2 && (
                      <span className="badge badge-cyan" style={{ flexShrink: 0 }}>
                        <Sparkles size={10} /> Simulador
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.ev.length > 0 && (
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                Evidencia Viva ({results.ev.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {results.ev.map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    className="nav-item"
                    style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}
                    onClick={() => {
                      if (e.modulos[0]) onSelectModule(e.modulos[0]);
                      else onSelectEvidence();
                      onClose();
                    }}
                  >
                    <Radar size={15} color="#9A87F5" />
                    <span className="font-mono" style={{ color: 'var(--core)', fontSize: 11 }}>
                      {e.fecha_radar}
                    </span>
                    <span style={{ color: 'var(--ink)', flex: 1 }}>{e.titulo}</span>
                    {e.modulos[0] && <span className="badge">{e.modulos[0]}</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.aud.length > 0 && (
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                Auditoría Metodológica ({results.aud.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {results.aud.map((a) => (
                  <button
                    key={a.numero}
                    type="button"
                    className="nav-item"
                    style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}
                    onClick={() => {
                      onSelectAudit();
                      onClose();
                    }}
                  >
                    <ShieldCheck size={15} color="#E9B44C" />
                    <span className="font-mono" style={{ color: 'var(--prot)' }}>
                      #{a.numero}
                    </span>
                    <span style={{ color: 'var(--ink-2)', flex: 1 }}>
                      {a.correccionVerificada.slice(0, 120)}...
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.mods.length === 0 && results.ev.length === 0 && results.aud.length === 0 && (
            <div style={{ padding: 20, textAlign: 'center', color: 'var(--muted)' }}>
              Sin coincidencias para &ldquo;{query}&rdquo;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
