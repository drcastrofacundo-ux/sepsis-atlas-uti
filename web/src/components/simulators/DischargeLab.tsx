import React, { useMemo, useState } from 'react';
import { CheckSquare, Flag, FileText, TrendingDown } from 'lucide-react';
import {
  DESTINO_LABEL,
  BANDA_LABEL,
  M19_PRESETS,
  simulateM19,
  type Banda,
  type Destino,
  type M19Inputs,
} from '../../engines/m19Engine';
import { Glosario } from '../Glosario';

const BANDA_COLOR: Record<Banda, string> = {
  bajo: '#34D399',
  intermedio: '#3FD8C8',
  alto: '#E9B44C',
  muy_alto: '#FF5C7A',
};

const BANDA_VAR: Record<Banda, string> = {
  bajo: 'var(--ok)',
  intermedio: 'var(--gag)',
  alto: 'var(--prot)',
  muy_alto: 'var(--alert)',
};

const TONO_COLOR: Record<'red' | 'amber' | 'cyan', string> = {
  red: '#FF5C7A',
  amber: '#E9B44C',
  cyan: '#3FD8C8',
};

const TONO_VAR: Record<'red' | 'amber' | 'cyan', string> = {
  red: 'var(--alert)',
  amber: 'var(--prot)',
  cyan: 'var(--gag)',
};

// Geometria de la curva de sobrevida.
const X0 = 40;
const X1 = 368;
const Y0 = 128;
const Y1 = 16;
const MESES_MAX = 120;
const SOBREVIDA_MIN = 40;

const escalaX = (meses: number) => X0 + (meses / MESES_MAX) * (X1 - X0);
const escalaY = (s: number) =>
  Y0 - ((s - SOBREVIDA_MIN) / (100 - SOBREVIDA_MIN)) * (Y0 - Y1);

interface SliderProps {
  label: string;
  valor: number;
  min: number;
  max: number;
  paso: number;
  unidad: string;
  decimales?: number;
  onChange: (v: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  label,
  valor,
  min,
  max,
  paso,
  unidad,
  decimales = 0,
  onChange,
}) => (
  <div className="slider-control">
    <div className="slider-head">
      <label>{label}</label>
      <span className="slider-value">
        {valor.toFixed(decimales)} {unidad}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={paso}
      value={valor}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </div>
);

export const DischargeLab: React.FC = () => {
  const [inputs, setInputs] = useState<M19Inputs>(M19_PRESETS[0].inputs);
  const [presetActivo, setPresetActivo] = useState<string>(M19_PRESETS[0].id);

  const out = useMemo(() => simulateM19(inputs), [inputs]);

  const setField = <K extends keyof M19Inputs>(key: K, val: M19Inputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
    setPresetActivo('');
  };

  const aplicarPreset = (id: string) => {
    const p = M19_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setInputs({ ...p.inputs });
    setPresetActivo(id);
  };

  const presetResumen = M19_PRESETS.find((p) => p.id === presetActivo)?.resumen;
  const banderasActivas = out.banderas.filter((b) => b.activa);

  const puntos = out.curvaSobrevida
    .map((p) => `${escalaX(p.meses).toFixed(1)},${escalaY(p.sobrevida).toFixed(1)}`)
    .join(' ');

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
            <div className="eyebrow">Simulador Interactivo M19 · Después de la UTI</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              La epicrisis que sirve: del alta de UTI a los 3 meses
            </h2>
          </div>
          <span className="badge badge-purple">{BANDA_LABEL[out.subtipo.banda]}</span>
        </div>
        <div className="preset-summary">
          Para el paciente,{' '}
          <strong style={{ color: 'var(--gag)' }}>el día 28 es el principio de otra etapa</strong>.
          El 42% de los sobrevivientes al alta murió después: la sobrevida fue del 76% al año, 57% a
          5 años y 48% a 10.
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
          {M19_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className="btn-preset"
              data-active={presetActivo === p.id}
              onClick={() => aplicarPreset(p.id)}
            >
              {p.nombre}
            </button>
          ))}
        </div>
        {presetResumen && (
          <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 8, lineHeight: 1.5 }}>
            {presetResumen}
          </div>
        )}
      </div>

      <div className="lab-grid">
        {/* Controles */}
        <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div className="eyebrow">Los tres ejes de Flick 2026</div>
          <Slider
            label="Índice de Charlson"
            valor={inputs.charlson}
            min={0}
            max={12}
            paso={1}
            unidad=""
            onChange={(v) => setField('charlson', v)}
          />
          <Slider
            label="Días de internación"
            valor={inputs.diasInternacion}
            min={1}
            max={60}
            paso={1}
            unidad="días"
            onChange={(v) => setField('diasInternacion', v)}
          />
          <div className="slider-control">
            <div className="slider-head">
              <label>Destino al alta</label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {(Object.keys(DESTINO_LABEL) as Destino[]).map((d) => (
                <button
                  key={d}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.destino === d}
                  onClick={() => setField('destino', d)}
                  style={{ textAlign: 'left', fontSize: 11.5 }}
                >
                  {DESTINO_LABEL[d]}
                </button>
              ))}
            </div>
          </div>

          <div className="eyebrow" style={{ marginTop: 8 }}>
            Lo que pasó en la UTI
          </div>
          <Slider
            label="Días de ventilación invasiva"
            valor={inputs.diasVentilacion}
            min={0}
            max={40}
            paso={1}
            unidad="días"
            onChange={(v) => setField('diasVentilacion', v)}
          />
          <Slider
            label="Días de delirium"
            valor={inputs.diasDelirium}
            min={0}
            max={20}
            paso={1}
            unidad="días"
            onChange={(v) => setField('diasDelirium', v)}
          />
          <div className="slider-control">
            <button
              type="button"
              className="btn-preset"
              data-active={inputs.corticoides}
              onClick={() => setField('corticoides', !inputs.corticoides)}
              style={{ textAlign: 'left', fontSize: 11.5 }}
            >
              {inputs.corticoides ? '● ' : '○ '}
              Recibió corticoides
            </button>
          </div>

          <div className="eyebrow" style={{ marginTop: 8 }}>
            Datos del alta
          </div>
          <Slider
            label="Hemoglobina al alta"
            valor={inputs.hbAlta}
            min={6}
            max={15}
            paso={0.1}
            unidad="g/dL"
            decimales={1}
            onChange={(v) => setField('hbAlta', v)}
          />
          <Slider
            label="Edad"
            valor={inputs.edad}
            min={18}
            max={95}
            paso={1}
            unidad="años"
            onChange={(v) => setField('edad', v)}
          />
        </div>

        {/* Resultados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Subtipo */}
          <div
            className="panel-dark"
            style={{ padding: 14, borderLeft: `3px solid ${BANDA_COLOR[out.subtipo.banda]}` }}
          >
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              Subtipo de sobreviviente
            </div>
            <div
              className="font-display"
              style={{ fontSize: 17, color: BANDA_VAR[out.subtipo.banda] }}
            >
              {out.subtipo.nombre}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55, marginTop: 6 }}>
              {out.subtipo.descripcion}
            </div>
            <div
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
                marginTop: 10,
                paddingTop: 10,
                borderTop: '1px solid rgba(111,139,168,0.2)',
              }}
            >
              <div>
                <div style={{ fontSize: 10.5, color: 'var(--muted)' }}>Mortalidad a 3 meses</div>
                <div style={{ fontSize: 12, color: 'var(--ink-1)' }}>{out.subtipo.mortalidadTexto}</div>
              </div>
              {out.subtipo.orPublicado && (
                <div>
                  <div style={{ fontSize: 10.5, color: 'var(--muted)' }}>Publicado en el abstract</div>
                  <div className="font-display" style={{ fontSize: 13, color: 'var(--prot)' }}>
                    {out.subtipo.orPublicado}
                  </div>
                </div>
              )}
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginTop: 9 }}>
              Flick 2026 separó cinco subtipos con el Charlson, los días de internación y el destino
              al alta, con mortalidad a 3 meses entre 5,1% y 45,5%.{' '}
              <strong style={{ color: 'var(--prot)' }}>No predice reingreso.</strong> El abstract
              publica el OR de dos subtipos y el rango global, no el valor de cada uno: las etiquetas
              intermedias de acá son descriptivas de los tres ejes, no nombres del paper, y por eso
              el simulador devuelve una banda y no un porcentaje.
            </div>
          </div>

          {/* Curva de sobrevida */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}
            >
              <TrendingDown size={14} color="#FF5C7A" />
              <span className="eyebrow">Sobrevida después del alta (Engoren 2023, n = 32.244)</span>
            </div>
            <svg viewBox="0 0 380 148" style={{ width: '100%', height: 'auto' }}>
              {/* Grilla */}
              {[40, 60, 80, 100].map((s) => (
                <g key={s}>
                  <line
                    x1={X0}
                    y1={escalaY(s)}
                    x2={X1}
                    y2={escalaY(s)}
                    stroke="rgba(111,139,168,0.18)"
                    strokeWidth="1"
                  />
                  <text
                    x={X0 - 6}
                    y={escalaY(s) + 3}
                    fill="#6F8BA8"
                    fontSize="8"
                    fontFamily="IBM Plex Mono"
                    textAnchor="end"
                  >
                    {s}%
                  </text>
                </g>
              ))}
              {/* Eje x */}
              {[0, 12, 60, 120].map((m) => (
                <text
                  key={m}
                  x={escalaX(m)}
                  y={Y0 + 13}
                  fill="#6F8BA8"
                  fontSize="8"
                  fontFamily="IBM Plex Mono"
                  textAnchor="middle"
                >
                  {m === 0 ? 'alta' : m === 12 ? '1 año' : `${m / 12} años`}
                </text>
              ))}
              {/* Curva */}
              <polyline points={puntos} fill="none" stroke="#FF5C7A" strokeWidth="2" />
              {/* Anclas publicadas */}
              {out.curvaSobrevida
                .filter((p) => p.publicado)
                .map((p) => (
                  <g key={p.meses}>
                    <circle
                      cx={escalaX(p.meses)}
                      cy={escalaY(p.sobrevida)}
                      r="3"
                      fill="#FF5C7A"
                      stroke="#0E1621"
                      strokeWidth="1.5"
                    />
                    <text
                      x={escalaX(p.meses) + (p.meses === 120 ? -4 : 5)}
                      y={escalaY(p.sobrevida) - 6}
                      fill="#E8EEF6"
                      fontSize="8.5"
                      fontFamily="IBM Plex Mono"
                      textAnchor={p.meses === 120 ? 'end' : 'start'}
                    >
                      {p.sobrevida.toFixed(0)}%
                    </text>
                  </g>
                ))}
              <text
                x={escalaX(1) + 6}
                y={Y1 + 22}
                fill="#E9B44C"
                fontSize="8.5"
                fontFamily="IBM Plex Mono"
              >
                8,7% el primer mes
              </text>
            </svg>
            <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginTop: 2 }}>
              Los puntos marcados son los publicados (alta, 1 mes, 1 año, 5 y 10 años); el trazo
              entre ellos está interpolado para mostrar la forma. La mortalidad mensual se concentra
              en las primeras semanas (8,7% el primer mes, 1,1% en el mes 12) y después se aplana.
            </div>
          </div>

          {/* Checklist de epicrisis */}
          <div className="panel-dark" style={{ padding: 12, borderLeft: '3px solid #9A87F5' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
              <FileText size={14} color="#9A87F5" />
              <span className="eyebrow" style={{ color: 'var(--gag)' }}>
                Lo que la epicrisis tiene que decir (SSC 2026, buena práctica)
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {out.checklist.map((i) => (
                <div key={i.titulo} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <CheckSquare size={14} color="#9A87F5" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div style={{ fontSize: 12.5 }}>
                    <strong>{i.titulo}</strong>
                    <div style={{ color: 'var(--ink-2)', lineHeight: 1.5, fontSize: 11.5 }}>
                      {i.detalle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginTop: 9 }}>
              Es el nivel más alto que alcanzó cualquier recomendación de este capítulo: ninguna de
              las de seguimiento es fuerte, y ENCOMPASS y Yende 2026 las tensionan.
            </div>
          </div>

          {/* Banderas */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
              <Flag size={14} color="#E9B44C" />
              <span className="eyebrow">
                Banderas de seguimiento: {banderasActivas.length} de {out.banderas.length}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {out.banderas.map((b) => (
                <div
                  key={b.titulo}
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'flex-start',
                    opacity: b.activa ? 1 : 0.4,
                  }}
                >
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: '50%',
                      flexShrink: 0,
                      marginTop: 4,
                      background: b.activa ? TONO_COLOR[b.tono] : 'transparent',
                      border: b.activa ? 'none' : '1px solid rgba(111,139,168,0.5)',
                    }}
                  />
                  <div style={{ fontSize: 12.5, flex: 1 }}>
                    <div
                      style={{ display: 'flex', gap: 7, flexWrap: 'wrap', alignItems: 'baseline' }}
                    >
                      <strong style={{ color: b.activa ? TONO_VAR[b.tono] : 'var(--muted)' }}>
                        {b.titulo}
                      </strong>
                      {b.activa && (
                        <span style={{ fontSize: 10.5, color: 'var(--muted)' }}>— {b.motivo}</span>
                      )}
                    </div>
                    {b.activa && (
                      <div style={{ color: 'var(--ink-2)', lineHeight: 1.5, fontSize: 11.5 }}>
                        {b.detalle}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alertas */}
          {out.alerts.map((a) => (
            <div
              key={a.titulo}
              className="panel-dark"
              style={{ padding: '10px 12px', borderLeft: `3px solid ${TONO_COLOR[a.tono]}` }}
            >
              <strong style={{ fontSize: 12.5, color: TONO_VAR[a.tono] }}>{a.titulo}</strong>
              <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 2 }}>
                {a.detalle}
              </div>
            </div>
          ))}

          <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.55 }}>
            Material de estudio. Lo que se previene adentro de la UTI —sedación liviana, delirium y
            el paquete ABCDEF— está en el M11; los programas de seguimiento post-alta no mostraron
            beneficio en su desenlace primario en PRaCTICaL, RECOVER, ENCOMPASS ni Yende 2026.
          </div>
        </div>
      </div>

      <Glosario claves={['PICS', 'PICS-F', 'MRC', 'SDRA', 'SSC', 'HR']} />
    </div>
  );
};
