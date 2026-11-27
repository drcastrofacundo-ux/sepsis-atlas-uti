import React, { useMemo, useState } from 'react';
import { CheckCircle2, KeyRound, ShieldAlert, XCircle } from 'lucide-react';
import {
  MECANISMOS,
  RECAPT_AR,
  nombreMecanismo,
  simulateM16,
  type Foco,
  type FuncionRenal,
  type M16Inputs,
} from '../../engines/m16Engine';

const FOCO_LABEL: Record<Foco, string> = {
  bacteriemia: 'Bacteriemia',
  neumonia: 'Neumonía',
  urinario: 'Urinario',
  abdominal: 'Abdominal',
};

const RENAL_LABEL: Record<FuncionRenal, string> = {
  normal: 'Función renal normal',
  lra: 'Lesión renal aguda',
  ckrt: 'En CKRT',
};

export const ResistanceLab: React.FC = () => {
  const [inputs, setInputs] = useState<M16Inputs>({
    mecanismo: 'ndm',
    foco: 'bacteriemia',
    renal: 'normal',
    shock: true,
  });

  const out = useMemo(() => simulateM16(inputs), [inputs]);

  const setField = <K extends keyof M16Inputs>(key: K, val: M16Inputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="panel" style={{ padding: '14px 18px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 10,
          }}
        >
          <div>
            <div className="eyebrow">Simulador Interactivo M16 · Patógenos Difíciles</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              La llave y la cerradura: enzima → antibiótico
            </h2>
          </div>
          <span className="badge badge-purple">{out.clase}</span>
        </div>
        <div className="preset-summary">
          <strong style={{ color: 'var(--gag)' }}>La pregunta útil</strong> frente a un gramnegativo resistente no es
          «¿a qué es resistente?» sino <strong style={{ color: 'var(--gag)' }}>«¿qué enzima tiene?»</strong>. Las dosis
          y los puntos de corte locales están en el M09.
        </div>
      </div>

      <div className="lab-grid">
        {/* Controles */}
        <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="eyebrow">Mecanismo y Contexto</div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Mecanismo de resistencia</label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {MECANISMOS.map((m) => (
                <button
                  key={m}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.mecanismo === m}
                  onClick={() => setField('mecanismo', m)}
                  style={{ textAlign: 'left', fontSize: 11.5 }}
                >
                  {nombreMecanismo(m)}
                </button>
              ))}
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Foco</label>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {(Object.keys(FOCO_LABEL) as Foco[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.foco === f}
                  onClick={() => setField('foco', f)}
                >
                  {FOCO_LABEL[f]}
                </button>
              ))}
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Función renal</label>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {(Object.keys(RENAL_LABEL) as FuncionRenal[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.renal === r}
                  onClick={() => setField('renal', r)}
                >
                  {RENAL_LABEL[r]}
                </button>
              ))}
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Estado hemodinámico</label>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                className="btn-preset"
                data-active={!inputs.shock}
                onClick={() => setField('shock', false)}
              >
                Sin shock
              </button>
              <button
                type="button"
                className="btn-preset"
                data-active={inputs.shock}
                onClick={() => setField('shock', true)}
              >
                Shock séptico
              </button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="panel-dark" style={{ padding: 14 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <KeyRound size={18} color="#9A87F5" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div className="font-display" style={{ fontSize: 16 }}>
                  {out.nombre}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{out.clase}</div>
              </div>
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55, marginTop: 9 }}>{out.nota}</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
            {/* Activas */}
            <div
              className="panel-dark"
              style={{ padding: 12, borderLeft: '3px solid #34D399' }}
            >
              <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--ok)' }}>
                Abre la cerradura
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {out.activas.map((o) => (
                  <div key={o.droga} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <CheckCircle2 size={15} color="#34D399" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div style={{ fontSize: 12.5 }}>
                      <strong style={{ color: 'var(--ok)' }}>{o.droga}</strong>
                      <div style={{ color: 'var(--ink-2)', lineHeight: 1.5, fontSize: 11.5 }}>{o.evidencia}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* No activas */}
            <div className="panel-dark" style={{ padding: 12, borderLeft: '3px solid #FF5C7A' }}>
              <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--alert)' }}>
                No abre, aunque lo parezca
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {out.noActivas.map((o) => (
                  <div key={o.droga} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <XCircle size={15} color="#FF5C7A" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div style={{ fontSize: 12.5 }}>
                      <strong style={{ color: 'var(--alert)' }}>{o.droga}</strong>
                      <div style={{ color: 'var(--ink-2)', lineHeight: 1.5, fontSize: 11.5 }}>{o.evidencia}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Epidemiología argentina */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Carbapenemasas en Argentina (RECAPT-AR, 821 aislamientos)
            </div>
            <svg viewBox="0 0 380 92" style={{ width: '100%', height: 'auto' }}>
              {RECAPT_AR.map((r, i) => {
                const y = 8 + i * 21;
                const ancho = (r.pct / 45) * 210;
                const activo = r.mecanismo === inputs.mecanismo;
                return (
                  <g key={r.enzima}>
                    <rect
                      x="150"
                      y={y}
                      width={ancho}
                      height="13"
                      rx="3"
                      fill={activo ? '#9A87F5' : 'rgba(111,139,168,0.35)'}
                    />
                    <text
                      x="144"
                      y={y + 10}
                      fill={activo ? '#FFFFFF' : '#9DB1C8'}
                      fontSize="9"
                      fontFamily="IBM Plex Mono"
                      textAnchor="end"
                    >
                      {r.enzima.length > 22 ? r.enzima.slice(0, 21) + '…' : r.enzima}
                    </text>
                    <text
                      x={154 + ancho}
                      y={y + 10}
                      fill={activo ? '#9A87F5' : '#6F8BA8'}
                      fontSize="9"
                      fontFamily="IBM Plex Mono"
                    >
                      {r.pct.toFixed(1)}%
                    </text>
                  </g>
                );
              })}
            </svg>
            <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginTop: 4 }}>
              La NDM ya circula al mismo nivel que la KPC. Por eso no alcanza con suponer el mecanismo: hay que
              tipificarlo antes de elegir la droga.
            </div>
          </div>

          {/* Toxicidad */}
          {out.toxicidad.length > 0 && (
            <div className="panel-dark" style={{ padding: 12, borderLeft: '3px solid #E9B44C' }}>
              <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--prot)' }}>
                Lo que hay que vigilar
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {out.toxicidad.map((t) => (
                  <div key={t} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12.5 }}>
                    <ShieldAlert size={14} color="#E9B44C" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: 'var(--ink-2)', lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alertas */}
          {out.alerts.map((a) => (
            <div
              key={a.titulo}
              className="panel-dark"
              style={{
                padding: '10px 12px',
                borderLeft: `3px solid ${a.tono === 'red' ? '#FF5C7A' : a.tono === 'amber' ? '#E9B44C' : '#3FD8C8'}`,
              }}
            >
              <strong
                style={{
                  fontSize: 12.5,
                  color: a.tono === 'red' ? 'var(--alert)' : a.tono === 'amber' ? 'var(--prot)' : 'var(--gag)',
                }}
              >
                {a.titulo}
              </strong>
              <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 2 }}>{a.detalle}</div>
            </div>
          ))}

          <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.55 }}>
            Material de estudio. Frente a una infección por un germen multirresistente, la consulta con Infectología
            sigue siendo la regla, y las dosis locales están en el M09.
          </div>
        </div>
      </div>
    </div>
  );
};
