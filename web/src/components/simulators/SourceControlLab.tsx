import React, { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, Clock, Droplet } from 'lucide-react';
import {
  FOCOS_LISTA,
  M14_PRESETS,
  nombreFoco,
  simulateM14,
  type ContextoPct,
  type Foco,
  type M14Inputs,
  type VolumenSet,
} from '../../engines/m14Engine';

const CONTEXTO_LABEL: Record<ContextoPct, string> = {
  ninguno: 'Ninguno',
  posoperatorio: 'Posoperatorio',
  trauma: 'Trauma',
  pancreatitis: 'Pancreatitis',
  quemado: 'Quemado',
};

const URGENCIA_COLOR: Record<string, string> = {
  maxima: 'var(--alert)',
  alta: 'var(--alert)',
  moderada: 'var(--prot)',
  diferido: 'var(--gag)',
  sin_control: 'var(--muted)',
};

const URGENCIA_LABEL: Record<string, string> = {
  maxima: 'Máxima',
  alta: 'Alta',
  moderada: 'Moderada',
  diferido: 'Diferido a propósito',
  sin_control: 'Sin foco drenable',
};

export const SourceControlLab: React.FC = () => {
  const [inputs, setInputs] = useState<M14Inputs>(M14_PRESETS[0].inputs);
  const [activePresetId, setActivePresetId] = useState<string>(M14_PRESETS[0].id);

  const out = useMemo(() => simulateM14(inputs), [inputs]);

  const setField = <K extends keyof M14Inputs>(key: K, val: M14Inputs[K]) => {
    setActivePresetId('custom');
    setInputs((prev) => ({ ...prev, [key]: val }));
  };

  const applyPreset = (id: string) => {
    const p = M14_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setActivePresetId(p.id);
    setInputs(p.inputs);
  };

  const activePreset = useMemo(
    () => M14_PRESETS.find((x) => x.id === activePresetId) || null,
    [activePresetId],
  );

  const rendColor =
    out.rendimientoFinal >= 85 ? 'var(--ok)' : out.rendimientoFinal >= 50 ? 'var(--prot)' : 'var(--alert)';

  // Línea de tiempo de las primeras 24 h.
  const T_X0 = 40;
  const T_X1 = 350;
  const tx = (h: number) => T_X0 + (Math.min(24, Math.max(0, h)) / 24) * (T_X1 - T_X0);
  const diferido = out.urgencia === 'diferido' || out.urgencia === 'sin_control';

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
            <div className="eyebrow">Simulador Interactivo M14 · Diagnóstico y Control de Foco</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              El reloj del foco: hemocultivos, biomarcadores y control de foco
            </h2>
          </div>
          <span className={`badge ${out.rendimientoFinal >= 85 ? 'badge-green' : out.rendimientoFinal >= 50 ? 'badge-amber' : 'badge-red'}`}>
            Hemocultivos {out.rendimientoFinal.toFixed(0)}%
          </span>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {M14_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className="btn-preset"
              data-active={activePresetId === p.id}
              onClick={() => applyPreset(p.id)}
              title={p.resumen}
            >
              {p.nombre}
            </button>
          ))}
        </div>
        <div className="preset-summary">
          <strong style={{ color: 'var(--gag)' }}>Escenario activo:</strong>{' '}
          {activePreset ? activePreset.resumen : 'Escenario personalizado — ajustá cultivos, PCT y foco.'}
        </div>
      </div>

      <div className="lab-grid">
        {/* Controles */}
        <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="eyebrow">Cultivos, Biomarcador y Foco</div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Sets de hemocultivos</label>
              <span className="val">{inputs.sets} {inputs.sets === 1 ? 'set' : 'sets'}</span>
            </div>
            <input
              type="range"
              min={1}
              max={3}
              step={1}
              value={inputs.sets}
              onChange={(e) => setField('sets', Number(e.target.value) as 1 | 2 | 3)}
            />
            <div className="slider-help">Lee 2007: 1 set detecta el 73%, 2 el 90% y 3 el 98% de las bacteriemias.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Volumen por set</label>
              <span className="val" style={{ color: inputs.volumenPorSet < 20 ? 'var(--prot)' : 'var(--gag)' }}>
                {inputs.volumenPorSet} mL
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {([5, 10, 20] as VolumenSet[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.volumenPorSet === v}
                  onClick={() => setField('volumenPorSet', v)}
                >
                  {v} mL
                </button>
              ))}
            </div>
            <div className="slider-help">
              Estándar ~20 mL por set (10 mL por frasco). El efecto del volumen acá es una aproximación didáctica, no
              una cifra publicada.
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Momento de la toma</label>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                className="btn-preset"
                data-active={inputs.antesDelAntibiotico}
                onClick={() => setField('antesDelAntibiotico', true)}
              >
                Antes del antibiótico
              </button>
              <button
                type="button"
                className="btn-preset"
                data-active={!inputs.antesDelAntibiotico}
                onClick={() => setField('antesDelAntibiotico', false)}
              >
                Después
              </button>
            </div>
            <div className="slider-help">Cheng 2019: después del antibiótico la sensibilidad queda en 52,9%. Igual se toman.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>¿Se tomaron otros cultivos?</label>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                className="btn-preset"
                data-active={inputs.otrosCultivos}
                onClick={() => setField('otrosCultivos', true)}
              >
                Sí (orina, secreciones, líquidos)
              </button>
              <button
                type="button"
                className="btn-preset"
                data-active={!inputs.otrosCultivos}
                onClick={() => setField('otrosCultivos', false)}
              >
                No
              </button>
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Procalcitonina</label>
              <span className="val">{inputs.pct.toFixed(2)} ng/mL</span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              step={0.1}
              value={inputs.pct}
              onChange={(e) => setField('pct', Number(e.target.value))}
            />
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Contexto que sube la PCT sola</label>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {(Object.keys(CONTEXTO_LABEL) as ContextoPct[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.contextoPct === c}
                  onClick={() => setField('contextoPct', c)}
                >
                  {CONTEXTO_LABEL[c]}
                </button>
              ))}
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Foco</label>
            </div>
            <select
              value={inputs.foco}
              onChange={(e) => setField('foco', e.target.value as Foco)}
              style={{
                width: '100%',
                padding: '7px 9px',
                borderRadius: 7,
                background: 'var(--bg-2, #101A26)',
                color: 'var(--ink)',
                border: '1px solid #2B4260',
                fontSize: 12.5,
              }}
            >
              {FOCOS_LISTA.map((f) => (
                <option key={f} value={f}>
                  {nombreFoco(f)}
                </option>
              ))}
            </select>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Horas hasta el control de foco</label>
              <span
                className="val"
                style={{ color: !diferido && !out.dentroDeVentana ? 'var(--alert)' : 'var(--gag)' }}
              >
                {inputs.horasHastaControl} h
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={24}
              step={1}
              value={inputs.horasHastaControl}
              onChange={(e) => setField('horasHastaControl', Number(e.target.value))}
            />
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
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-label">Rendimiento de los hemocultivos</div>
              <div className="kpi-value" style={{ color: rendColor }}>
                {out.rendimientoFinal.toFixed(0)}%
              </div>
              <div className="kpi-sub">
                Base {out.rendimientoBase.toFixed(1)}% · volumen ×{out.factorVolumen}
                {!inputs.antesDelAntibiotico && ' · post-ATB ×0,53'}
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Sumando otros cultivos</div>
              <div className="kpi-value">
                {out.identificacionConOtrosCultivos !== null
                  ? `${out.identificacionConOtrosCultivos.toFixed(0)}%`
                  : '—'}
              </div>
              <div className="kpi-sub">Cheng 2019: 67,6% de identificación</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Urgencia del control</div>
              <div className="kpi-value" style={{ color: URGENCIA_COLOR[out.urgencia], fontSize: 17 }}>
                {URGENCIA_LABEL[out.urgencia]}
              </div>
              <div className="kpi-sub">{out.urgenciaTexto}</div>
            </div>
          </div>

          {/* Línea de tiempo */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              A · Las primeras 24 horas
            </div>
            <svg viewBox="0 0 380 148" style={{ width: '100%', height: 'auto' }}>
              {/* Ventana de 6 h */}
              {!diferido && (
                <rect x={tx(0)} y="38" width={tx(6) - tx(0)} height="34" fill="rgba(63,216,200,0.12)" />
              )}
              <line x1={T_X0} y1="72" x2={T_X1} y2="72" stroke="#2B4260" strokeWidth="1.5" />
              {[0, 6, 12, 18, 24].map((h) => (
                <g key={h}>
                  <line x1={tx(h)} y1="72" x2={tx(h)} y2="77" stroke="#2B4260" />
                  <text x={tx(h)} y="89" fill="#6F8BA8" fontSize="9" fontFamily="IBM Plex Mono" textAnchor="middle">
                    {h} h
                  </text>
                </g>
              ))}

              {/* Hitos */}
              <circle cx={tx(0.3)} cy="72" r="5" fill="#3FD8C8" stroke="#0B1119" strokeWidth="1.5" />
              <text x={tx(0.3)} y="60" fill="#3FD8C8" fontSize="9" fontFamily="IBM Plex Mono" textAnchor="middle">
                Cultivos
              </text>
              <circle cx={tx(1)} cy="72" r="5" fill="#4FA9F7" stroke="#0B1119" strokeWidth="1.5" />
              <text x={tx(1)} y="106" fill="#4FA9F7" fontSize="9" fontFamily="IBM Plex Mono" textAnchor="middle">
                Antibiótico
              </text>

              <circle
                cx={tx(inputs.horasHastaControl)}
                cy="72"
                r="7"
                fill={diferido ? '#9A87F5' : out.dentroDeVentana ? '#34D399' : '#FF5C7A'}
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              <text
                x={Math.min(tx(inputs.horasHastaControl), 320)}
                y="34"
                fill={diferido ? '#9A87F5' : out.dentroDeVentana ? '#34D399' : '#FF5C7A'}
                fontSize="10"
                fontFamily="IBM Plex Mono"
                textAnchor="middle"
              >
                Control de foco · {inputs.horasHastaControl} h
              </text>

              {!diferido && (
                <text x={tx(3)} y="26" fill="#3FD8C8" fontSize="8.5" fontFamily="IBM Plex Mono" textAnchor="middle">
                  ventana de 6 h
                </text>
              )}
              {(diferido
                ? ['Acá el reloj no corre:', 'apurarse no mejora el resultado.']
                : ['"Dentro de las 6 h" es una meta razonable,', 'no un dato demostrado: la evidencia es observacional.']
              ).map((linea, i) => (
                <text
                  key={linea}
                  x={T_X0}
                  y={120 + i * 11}
                  fill="#6F8BA8"
                  fontSize="8.5"
                  fontFamily="IBM Plex Mono"
                >
                  {linea}
                </text>
              ))}
            </svg>
          </div>

          {/* Lectura de la PCT */}
          <div
            className="panel-dark"
            style={{
              padding: 12,
              borderLeft: `3px solid ${
                out.pctLectura.tono === 'red' ? '#FF5C7A' : out.pctLectura.tono === 'amber' ? '#E9B44C' : '#34D399'
              }`,
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              B · Lectura de la procalcitonina
            </div>
            <strong
              style={{
                fontSize: 13,
                color:
                  out.pctLectura.tono === 'red'
                    ? 'var(--alert)'
                    : out.pctLectura.tono === 'amber'
                      ? 'var(--prot)'
                      : 'var(--ok)',
              }}
            >
              {out.pctLectura.titulo}
            </strong>
            <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55, marginTop: 3 }}>
              {out.pctLectura.detalle}
            </div>
          </div>

          {/* Foco y duración */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              C · {nombreFoco(inputs.foco)}
            </div>
            <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 9 }}>
              {out.urgencia === 'diferido' ? (
                <Clock size={15} color="#9A87F5" style={{ marginTop: 2, flexShrink: 0 }} />
              ) : out.urgencia === 'sin_control' ? (
                <Droplet size={15} color="#6F8BA8" style={{ marginTop: 2, flexShrink: 0 }} />
              ) : (
                <AlertTriangle size={15} color="#FF5C7A" style={{ marginTop: 2, flexShrink: 0 }} />
              )}
              <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>{out.focoDetalle}</div>
            </div>
            <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              <CheckCircle2 size={15} color="#34D399" style={{ marginTop: 2, flexShrink: 0 }} />
              <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--ok)' }}>Después del control de foco:</strong> {out.duracionAtb}
              </div>
            </div>
          </div>

          {/* Alertas */}
          {out.alerts.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
