import React, { useMemo, useState } from 'react';
import { CircleDot, Lightbulb, ShieldAlert, Users } from 'lucide-react';
import {
  M18_PRESETS,
  POBLACION_NOMBRE,
  simulateM18,
  type Child,
  type M18Inputs,
  type Poblacion,
  type Tono,
} from '../../engines/m18Engine';
import { Glosario } from '../Glosario';

const TONO_COLOR: Record<Tono, string> = {
  ok: '#34D399',
  amber: '#E9B44C',
  red: '#FF5C7A',
  cyan: '#3FD8C8',
};

const TONO_VAR: Record<Tono, string> = {
  ok: 'var(--ok)',
  amber: 'var(--prot)',
  red: 'var(--alert)',
  cyan: 'var(--gag)',
};

const POBLACIONES: Poblacion[] = [
  'estandar',
  'embarazada',
  'puerpera',
  'neutropenico',
  'trasplantado',
  'anciano',
  'cirrotico',
];

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

const PuntajeChip: React.FC<{
  nombre: string;
  puntaje: number;
  total: number;
  items: Array<{ nombre: string; presente: boolean }>;
  nota: string;
  atenuado?: boolean;
}> = ({ nombre, puntaje, total, items, nota, atenuado }) => {
  const tono: Tono = puntaje >= 2 ? 'red' : puntaje === 1 ? 'amber' : 'ok';
  return (
    <div
      className="panel-dark"
      style={{
        padding: 12,
        borderLeft: `3px solid ${atenuado ? 'rgba(111,139,168,0.4)' : TONO_COLOR[tono]}`,
        opacity: atenuado ? 0.62 : 1,
        flex: '1 1 240px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="eyebrow">{nombre}</span>
        <span
          className="font-display"
          style={{ fontSize: 20, color: atenuado ? 'var(--muted)' : TONO_VAR[tono] }}
        >
          {puntaje}/{total}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 7 }}>
        {items.map((i) => (
          <div
            key={i.nombre}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 11.5,
              color: i.presente ? 'var(--ink-1)' : 'var(--muted)',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                flexShrink: 0,
                background: i.presente ? TONO_COLOR[tono] : 'transparent',
                border: i.presente ? 'none' : '1px solid rgba(111,139,168,0.5)',
              }}
            />
            {i.nombre}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginTop: 8 }}>{nota}</div>
    </div>
  );
};

export const PopulationLab: React.FC = () => {
  const [inputs, setInputs] = useState<M18Inputs>(M18_PRESETS[1].inputs);
  const [presetActivo, setPresetActivo] = useState<string>(M18_PRESETS[1].id);

  const out = useMemo(() => simulateM18(inputs), [inputs]);

  const setField = <K extends keyof M18Inputs>(key: K, val: M18Inputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
    setPresetActivo('');
  };

  const aplicarPreset = (id: string) => {
    const p = M18_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setInputs({ ...p.inputs });
    setPresetActivo(id);
  };

  const presetResumen = M18_PRESETS.find((p) => p.id === presetActivo)?.resumen;
  const p = inputs.poblacion;

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
            <div className="eyebrow">Simulador Interactivo M18 · Poblaciones Especiales</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              Los valores normales de cada paciente
            </h2>
          </div>
          <span className="badge badge-purple">{out.nombrePoblacion}</span>
        </div>
        <div className="preset-summary">
          Los mismos signos vitales,{' '}
          <strong style={{ color: 'var(--gag)' }}>leídos en siete pacientes distintos</strong>.
          Cambiá la población arriba y mirá cuánto se mueve la interpretación sin que se mueva ningún
          número.
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
          {M18_PRESETS.map((pr) => (
            <button
              key={pr.id}
              type="button"
              className="btn-preset"
              data-active={presetActivo === pr.id}
              onClick={() => aplicarPreset(pr.id)}
            >
              {pr.nombre}
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
          <div className="eyebrow">Población</div>
          <div className="slider-control">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {POBLACIONES.map((pob) => (
                <button
                  key={pob}
                  type="button"
                  className="btn-preset"
                  data-active={p === pob}
                  onClick={() => setField('poblacion', pob)}
                  style={{ textAlign: 'left', fontSize: 11.5 }}
                >
                  {POBLACION_NOMBRE[pob]}
                </button>
              ))}
            </div>
          </div>

          <div className="eyebrow" style={{ marginTop: 8 }}>
            Signos vitales
          </div>
          <Slider
            label="Frecuencia cardíaca"
            valor={inputs.fc}
            min={40}
            max={180}
            paso={1}
            unidad="lpm"
            onChange={(v) => setField('fc', v)}
          />
          <Slider
            label="Presión sistólica"
            valor={inputs.pas}
            min={60}
            max={180}
            paso={1}
            unidad="mmHg"
            onChange={(v) => setField('pas', v)}
          />
          <Slider
            label="Presión diastólica"
            valor={inputs.pad}
            min={25}
            max={110}
            paso={1}
            unidad="mmHg"
            onChange={(v) => setField('pad', v)}
          />
          <Slider
            label="Frecuencia respiratoria"
            valor={inputs.fr}
            min={8}
            max={50}
            paso={1}
            unidad="/min"
            onChange={(v) => setField('fr', v)}
          />
          <Slider
            label="Temperatura"
            valor={inputs.temperatura}
            min={34}
            max={41}
            paso={0.1}
            unidad="°C"
            decimales={1}
            onChange={(v) => setField('temperatura', v)}
          />
          <Slider
            label="Lactato"
            valor={inputs.lactato}
            min={0.5}
            max={12}
            paso={0.1}
            unidad="mmol/L"
            decimales={1}
            onChange={(v) => setField('lactato', v)}
          />
          <div className="slider-control">
            <button
              type="button"
              className="btn-preset"
              data-active={inputs.mentalAlterado}
              onClick={() => setField('mentalAlterado', !inputs.mentalAlterado)}
              style={{ textAlign: 'left', fontSize: 11.5 }}
            >
              {inputs.mentalAlterado ? '● ' : '○ '}
              Alteración del estado mental
            </button>
          </div>

          {/* Modificadores por poblacion */}
          {p === 'embarazada' && (
            <>
              <div className="eyebrow" style={{ marginTop: 8 }}>
                Embarazo
              </div>
              <div className="slider-control">
                <div className="slider-head">
                  <label>Trimestre</label>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {([1, 2, 3] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="btn-preset"
                      data-active={inputs.trimestre === t}
                      onClick={() => setField('trimestre', t)}
                    >
                      {t}º
                    </button>
                  ))}
                </div>
              </div>
              <div className="slider-control">
                <button
                  type="button"
                  className="btn-preset"
                  data-active={inputs.decubitoSupino}
                  onClick={() => setField('decubitoSupino', !inputs.decubitoSupino)}
                  style={{ textAlign: 'left', fontSize: 11.5 }}
                >
                  {inputs.decubitoSupino ? '● ' : '○ '}
                  Acostada boca arriba
                </button>
              </div>
            </>
          )}

          {p === 'neutropenico' && (
            <>
              <div className="eyebrow" style={{ marginTop: 8 }}>
                Neutropenia
              </div>
              <Slider
                label="Neutrófilos"
                valor={inputs.neutrofilos}
                min={0}
                max={2000}
                paso={50}
                unidad="/µL"
                onChange={(v) => setField('neutrofilos', v)}
              />
              <Slider
                label="Horas afebril"
                valor={inputs.horasAfebril}
                min={0}
                max={120}
                paso={4}
                unidad="h"
                onChange={(v) => setField('horasAfebril', v)}
              />
              <div className="slider-control">
                <button
                  type="button"
                  className="btn-preset"
                  data-active={inputs.colonizadoResistentes}
                  onClick={() => setField('colonizadoResistentes', !inputs.colonizadoResistentes)}
                  style={{ textAlign: 'left', fontSize: 11.5 }}
                >
                  {inputs.colonizadoResistentes ? '● ' : '○ '}
                  Colonización o infección previa por resistentes
                </button>
              </div>
            </>
          )}

          {p === 'anciano' && (
            <>
              <div className="eyebrow" style={{ marginTop: 8 }}>
                Anciano
              </div>
              <Slider
                label="Edad"
                valor={inputs.edad}
                min={65}
                max={100}
                paso={1}
                unidad="años"
                onChange={(v) => setField('edad', v)}
              />
              <Slider
                label="Clinical Frailty Scale"
                valor={inputs.cfs}
                min={1}
                max={9}
                paso={1}
                unidad="/ 9"
                onChange={(v) => setField('cfs', v)}
              />
            </>
          )}

          {p === 'cirrotico' && (
            <>
              <div className="eyebrow" style={{ marginTop: 8 }}>
                Cirrosis
              </div>
              <div className="slider-control">
                <div className="slider-head">
                  <label>Child-Pugh</label>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {(['A', 'B', 'C'] as Child[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      className="btn-preset"
                      data-active={inputs.child === c}
                      onClick={() => setField('child', c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="slider-control">
                <button
                  type="button"
                  className="btn-preset"
                  data-active={inputs.ascitis}
                  onClick={() => setField('ascitis', !inputs.ascitis)}
                  style={{ textAlign: 'left', fontSize: 11.5 }}
                >
                  {inputs.ascitis ? '● ' : '○ '}
                  Ascitis
                </button>
              </div>
              {inputs.ascitis && (
                <Slider
                  label="Polimorfonucleares en ascitis"
                  valor={inputs.pmnAscitis}
                  min={0}
                  max={2000}
                  paso={10}
                  unidad="/mm³"
                  onChange={(v) => setField('pmnAscitis', v)}
                />
              )}
            </>
          )}
        </div>

        {/* Resultados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Fisiologia de la poblacion */}
          <div className="panel-dark" style={{ padding: 14 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <Users size={18} color="#9A87F5" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div className="font-display" style={{ fontSize: 16 }}>
                  {out.nombrePoblacion}
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55, marginTop: 5 }}>
                  {out.fisiologia}
                </div>
              </div>
            </div>
          </div>

          {/* Puntajes */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <PuntajeChip
              nombre="qSOFA"
              puntaje={out.qsofa}
              total={3}
              items={out.qsofaItems}
              nota={
                out.usaQsofaP
                  ? 'AUC 0,54 en embarazadas con infección grave: en esta población no discrimina.'
                  : 'Validado en adultos «promedio». Es el que corresponde acá.'
              }
              atenuado={out.usaQsofaP}
            />
            {out.qsofaPItems && (
              <PuntajeChip
                nombre="qSOFA-P"
                puntaje={out.qsofaP ?? 0}
                total={2}
                items={out.qsofaPItems}
                nota="AUC 0,77 (Cagino 2022). Unicéntrico y retrospectivo, pero el estándar directamente no discrimina."
              />
            )}
          </div>

          {/* Lectura de los signos */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 9 }}>
              Cómo se lee cada signo en {out.nombrePoblacion.toLowerCase()}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {out.signos.map((s) => (
                <div key={s.signo} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <CircleDot
                    size={13}
                    color={TONO_COLOR[s.tono]}
                    style={{ marginTop: 3, flexShrink: 0 }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: 8,
                        flexWrap: 'wrap',
                        alignItems: 'baseline',
                      }}
                    >
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>{s.signo}</span>
                      <strong
                        className="font-display"
                        style={{ fontSize: 13, color: TONO_VAR[s.tono] }}
                      >
                        {s.valor}
                      </strong>
                    </div>
                    <div style={{ fontSize: 11.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                      {s.lectura}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recordatorios */}
          {out.recordatorios.length > 0 && (
            <div className="panel-dark" style={{ padding: 12, borderLeft: '3px solid #9A87F5' }}>
              <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--gag)' }}>
                Lo que no hay que olvidarse en esta población
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {out.recordatorios.map((r) => (
                  <div key={r.titulo} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <Lightbulb size={14} color="#9A87F5" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div style={{ fontSize: 12.5 }}>
                      <strong>{r.titulo}</strong>
                      <div style={{ color: 'var(--ink-2)', lineHeight: 1.5, fontSize: 11.5 }}>
                        {r.detalle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pronostico para la conversacion */}
          {out.pronostico.length > 0 && (
            <div className="panel-dark" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 8 }}>
                Datos para la conversación con la familia
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {out.pronostico.map((pr) => (
                  <div key={pr.dato}>
                    <div
                      style={{
                        display: 'flex',
                        gap: 9,
                        flexWrap: 'wrap',
                        alignItems: 'baseline',
                      }}
                    >
                      <strong className="font-display" style={{ fontSize: 14, color: 'var(--prot)' }}>
                        {pr.valor}
                      </strong>
                      <span style={{ fontSize: 12, color: 'var(--ink-1)' }}>{pr.dato}</span>
                    </div>
                    <div style={{ fontSize: 10.5, color: 'var(--muted)', lineHeight: 1.45 }}>
                      {pr.fuente}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginTop: 9 }}>
                Son datos para decidir junto al paciente y la familia, y para planear la
                rehabilitación desde el primer día. Nunca un criterio para negar la UTI: en una
                revisión de 48 ECA, ninguno encontró que los tratamientos funcionen distinto según la
                fragilidad.
              </div>
            </div>
          )}

          {/* Alertas */}
          {out.alerts.map((a) => (
            <div
              key={a.titulo}
              className="panel-dark"
              style={{ padding: '10px 12px', borderLeft: `3px solid ${TONO_COLOR[a.tono]}` }}
            >
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <ShieldAlert
                  size={14}
                  color={TONO_COLOR[a.tono]}
                  style={{ marginTop: 3, flexShrink: 0 }}
                />
                <div>
                  <strong style={{ fontSize: 12.5, color: TONO_VAR[a.tono] }}>{a.titulo}</strong>
                  <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 2 }}>
                    {a.detalle}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.55 }}>
            Material de estudio. La obesidad (dosis de vasopresores y antibióticos) está en el M06 y
            el M09, y la ECMO en el M15.
          </div>
        </div>
      </div>

      <Glosario claves={['qSOFA', 'qSOFA-P', 'CFS', 'ACLF', 'PBE', 'PAM', 'UTI']} />
    </div>
  );
};
