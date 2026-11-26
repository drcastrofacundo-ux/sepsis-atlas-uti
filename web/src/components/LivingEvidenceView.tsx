import React, { useMemo, useState } from 'react';
import { AlertOctagon, ExternalLink, Radar, Search, Sparkles, Terminal } from 'lucide-react';
import type { LivingEvidenceData } from '../types/atlas';
import { RichMarkdown } from './RichMarkdown';

interface LivingEvidenceViewProps {
  data: LivingEvidenceData;
  initialModuleFilter?: string;
  onNavigateModule: (moduleId: string) => void;
}

export const LivingEvidenceView: React.FC<LivingEvidenceViewProps> = ({
  data,
  initialModuleFilter = 'ALL',
  onNavigateModule,
}) => {
  const [query, setQuery] = useState('');
  const [modFilter, setModFilter] = useState(initialModuleFilter);
  const [flagFilter, setFlagFilter] = useState<'all' | 'senal' | 'alerta'>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.entradas.filter((e) => {
      if (modFilter !== 'ALL' && !e.modulos.includes(modFilter)) return false;
      if (flagFilter === 'senal' && !e.senal_practica) return false;
      if (flagFilter === 'alerta' && !e.es_alerta_metodologica) return false;
      if (!q) return true;
      const haystack = `${e.titulo} ${e.cita} ${e.resultado_clave} ${e.impacto_uti} ${e.no_sobreinterpretar} ${e.pmid ?? ''}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [data.entradas, query, modFilter, flagFilter]);

  const moduleKeys = ['M01', 'M02', 'M03', 'M04', 'M05', 'M06', 'M07', 'M08', 'M09', 'M10', 'M11', 'M14', 'M15', 'M16', 'M17', 'M18', 'M19', 'M20'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Header & Actualización Automática */}
      <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: 'var(--gag)' }}>
              Motor de Actualización Continua · Radar Bibliográfico ({data.rango_fechas.desde} → {data.rango_fechas.hasta})
            </div>
            <h1 className="font-display" style={{ margin: '4px 0 6px', fontSize: 26 }}>
              Evidencia Viva en Sepsis y Shock Séptico ({data.total_entradas} artículos indexados)
            </h1>
            <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 13.5, maxWidth: '72ch' }}>
              Ingestado automáticamente desde las entregas semanales del Radar Bibliográfico ({data.radars_procesados} archivos procesados; {data.omitidas_solo_cardiologia} artículos exclusivamente cardiológicos filtrados).
            </p>
          </div>
          <div
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--line)',
              borderRadius: 10,
              padding: '10px 14px',
              maxWidth: 370,
              fontSize: 12,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gag)', fontWeight: 600 }}>
              <Terminal size={13} /> Actualizar al salir artículos nuevos:
            </div>
            <code style={{ display: 'block', marginTop: 6, color: 'var(--ink)', fontSize: 11.5 }}>
              python scripts/ingestar_radar.py --check-pubmed-days 7
            </code>
            <code style={{ display: 'block', marginTop: 4, color: 'var(--hyal)', fontSize: 11.5 }}>
              npm --prefix web run sync-data
            </code>
          </div>
        </div>

        {/* Barra de filtros */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 1fr) 170px auto',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'relative' }}>
            <Search
              size={15}
              style={{ position: 'absolute', left: 10, top: 10, color: 'var(--muted)' }}
            />
            <input
              type="text"
              className="icu-input"
              style={{ paddingLeft: 32 }}
              placeholder="Buscar ensayo, PMID, fármaco, biomarcador..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <select
            className="icu-select"
            value={modFilter}
            onChange={(e) => setModFilter(e.target.value)}
          >
            <option value="ALL">Todos los módulos ({data.total_entradas})</option>
            {moduleKeys.map((m) => (
              <option key={m} value={m}>
                {m} ({data.conteo_por_modulo[m] ?? 0})
              </option>
            ))}
          </select>

          <div className="pill-switch">
            <button type="button" data-active={flagFilter === 'all'} onClick={() => setFlagFilter('all')}>
              Todas ({filtered.length})
            </button>
            <button
              type="button"
              data-active={flagFilter === 'senal'}
              onClick={() => setFlagFilter('senal')}
            >
              <Sparkles size={12} /> Señal Práctica
            </button>
            <button
              type="button"
              data-tone="purple"
              data-active={flagFilter === 'alerta'}
              onClick={() => setFlagFilter('alerta')}
            >
              <AlertOctagon size={12} /> Alerta Metodológica
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Entradas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map((entry) => (
          <div key={entry.id} className="panel" style={{ padding: '16px 18px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
                marginBottom: 6,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span className="badge badge-cyan">
                  <Radar size={11} /> {entry.fecha_radar}
                </span>
                {entry.pmid && (
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${entry.pmid}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge"
                    style={{ color: 'var(--hyal)' }}
                  >
                    PMID {entry.pmid} <ExternalLink size={10} />
                  </a>
                )}
                {entry.senal_practica && <span className="badge badge-green">SEÑAL PRÁCTICA</span>}
                {entry.es_alerta_metodologica && (
                  <span className="badge badge-red">ALERTA METODOLÓGICA</span>
                )}
              </div>

              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {entry.modulos.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className="btn-preset"
                    style={{ padding: '3px 8px', fontSize: 11 }}
                    onClick={() => onNavigateModule(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <h3 className="font-display" style={{ margin: '4px 0 6px', fontSize: 17 }}>
              {entry.titulo}
            </h3>

            <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 8 }}>
              <RichMarkdown markdown={entry.cita} />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 10,
                fontSize: 13,
              }}
            >
              <div
                style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--line-soft)',
                  borderRadius: 8,
                  padding: '9px 11px',
                }}
              >
                <div className="eyebrow" style={{ color: 'var(--gag)', marginBottom: 3 }}>
                  Resultado e Impacto UTI
                </div>
                <div style={{ color: 'var(--ink-2)' }}>{entry.resultado_clave}</div>
                {entry.impacto_uti && (
                  <div style={{ color: 'var(--ink)', marginTop: 4 }}>{entry.impacto_uti}</div>
                )}
              </div>

              <div
                style={{
                  background: 'rgba(255, 92, 122, 0.06)',
                  border: '1px solid rgba(255, 92, 122, 0.25)',
                  borderRadius: 8,
                  padding: '9px 11px',
                }}
              >
                <div className="eyebrow" style={{ color: 'var(--alert)', marginBottom: 3 }}>
                  Cómo NO sobreinterpretarlo
                </div>
                <div style={{ color: 'var(--ink-2)' }}>{entry.no_sobreinterpretar}</div>
                {entry.limitaciones && (
                  <div style={{ color: 'var(--muted)', marginTop: 4, fontSize: 12 }}>
                    Límites: {entry.limitaciones}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
