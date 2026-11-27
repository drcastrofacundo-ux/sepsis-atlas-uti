import React, { useMemo, useState } from 'react';
import { Activity, Droplets, Pill, ShieldAlert, Utensils } from 'lucide-react';
import {
  M17_PRESETS,
  simulateM17,
  type EstadoEnteral,
  type M17Inputs,
  type Muestra,
  type Tono,
} from '../../engines/m17Engine';

const MUESTRA_LABEL: Record<Muestra, string> = {
  capilar: 'Capilar',
  arterial: 'Arterial',
  laboratorio: 'Laboratorio',
};

const ENTERAL_LABEL: Record<EstadoEnteral, string> = {
  activa: 'Activa',
  interrumpida: 'Interrumpida',
  ninguna: 'Sin nutrición',
};

const FASE_LABEL: Record<string, string> = {
  aguda_temprana: 'Fase aguda temprana (días 1–3)',
  aguda_tardia: 'Fase aguda tardía (días 4–7)',
  recuperacion: 'Recuperación (día 8 en adelante)',
};

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

const ICONO: Record<string, React.ReactNode> = {
  Glucemia: <Activity size={15} />,
  Nutrición: <Utensils size={15} />,
  Sangre: <Droplets size={15} />,
  Estómago: <Pill size={15} />,
};

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

const Toggle: React.FC<{ label: string; activo: boolean; onChange: (v: boolean) => void }> = ({
  label,
  activo,
  onChange,
}) => (
  <button
    type="button"
    className="btn-preset"
    data-active={activo}
    onClick={() => onChange(!activo)}
    style={{ textAlign: 'left', fontSize: 11.5 }}
  >
    {activo ? '● ' : '○ '}
    {label}
  </button>
);

export const SupportDashboard: React.FC = () => {
  const [inputs, setInputs] = useState<M17Inputs>(M17_PRESETS[0].inputs);
  const [presetActivo, setPresetActivo] = useState<string>(M17_PRESETS[0].id);

  const out = useMemo(() => simulateM17(inputs), [inputs]);

  const setField = <K extends keyof M17Inputs>(key: K, val: M17Inputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
    setPresetActivo('');
  };

  const aplicarPreset = (id: string) => {
    const p = M17_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setInputs({ ...p.inputs });
    setPresetActivo(id);
  };

  const presetResumen = M17_PRESETS.find((p) => p.id === presetActivo)?.resumen;

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
            <div className="eyebrow">Simulador Interactivo M17 · Soporte Endocrino-Metabólico</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              El tablero de soporte: glucemia, nutrición, sangre y estómago
            </h2>
          </div>
          <span className="badge badge-purple">{FASE_LABEL[out.fase]}</span>
        </div>
        <div className="preset-summary">
          En los cuatro soportes, la intuición fue llevar el número a lo normal, y los ensayos
          grandes mostraron casi siempre lo mismo:{' '}
          <strong style={{ color: 'var(--gag)' }}>
            la estrategia más prudente iguala o supera a la más agresiva
          </strong>
          , con menos efectos adversos.
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
          {M17_PRESETS.map((p) => (
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
          <div className="eyebrow">Glucemia</div>
          <Slider
            label="Glucemia actual"
            valor={inputs.glucemia}
            min={30}
            max={400}
            paso={5}
            unidad="mg/dL"
            onChange={(v) => setField('glucemia', v)}
          />
          <Slider
            label="Control previo"
            valor={inputs.glucemiaPrevia}
            min={30}
            max={400}
            paso={5}
            unidad="mg/dL"
            onChange={(v) => setField('glucemiaPrevia', v)}
          />
          <div className="slider-control">
            <div className="slider-head">
              <label>Tipo de muestra</label>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {(Object.keys(MUESTRA_LABEL) as Muestra[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.muestra === m}
                  onClick={() => setField('muestra', m)}
                >
                  {MUESTRA_LABEL[m]}
                </button>
              ))}
            </div>
          </div>
          <Slider
            label="Goteo de insulina"
            valor={inputs.insulinaUh}
            min={0}
            max={20}
            paso={0.5}
            unidad="U/h"
            decimales={1}
            onChange={(v) => setField('insulinaUh', v)}
          />

          <div className="eyebrow" style={{ marginTop: 8 }}>
            Contexto
          </div>
          <Slider
            label="Peso"
            valor={inputs.pesoKg}
            min={40}
            max={140}
            paso={1}
            unidad="kg"
            onChange={(v) => setField('pesoKg', v)}
          />
          <Slider
            label="Día de UTI"
            valor={inputs.diaUti}
            min={1}
            max={21}
            paso={1}
            unidad=""
            onChange={(v) => setField('diaUti', v)}
          />
          <Slider
            label="Noradrenalina"
            valor={inputs.dosisNad}
            min={0}
            max={1.5}
            paso={0.05}
            unidad="µg/kg/min"
            decimales={2}
            onChange={(v) => {
              setInputs((prev) => ({ ...prev, dosisNad: v, vasopresores: v > 0 }));
              setPresetActivo('');
            }}
          />
          <Slider
            label="Fósforo"
            valor={inputs.fosforo}
            min={0.5}
            max={6}
            paso={0.1}
            unidad="mg/dL"
            decimales={1}
            onChange={(v) => setField('fosforo', v)}
          />
          <div className="slider-control">
            <div className="slider-head">
              <label>Nutrición enteral</label>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {(Object.keys(ENTERAL_LABEL) as EstadoEnteral[]).map((e) => (
                <button
                  key={e}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.enteral === e}
                  onClick={() => setField('enteral', e)}
                >
                  {ENTERAL_LABEL[e]}
                </button>
              ))}
            </div>
          </div>
          <div className="slider-control">
            <div className="slider-head">
              <label>Modificadores</label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <Toggle
                label="Hidrocortisona en curso"
                activo={inputs.corticoides}
                onChange={(v) => setField('corticoides', v)}
              />
              <Toggle
                label="Insuficiencia renal"
                activo={inputs.insufRenal}
                onChange={(v) => setField('insufRenal', v)}
              />
              <Toggle
                label="Vitamina C IV"
                activo={inputs.vitaminaC}
                onChange={(v) => setField('vitaminaC', v)}
              />
              <Toggle
                label="Diabético tipo 2"
                activo={inputs.diabetico2}
                onChange={(v) => setField('diabetico2', v)}
              />
            </div>
          </div>

          <div className="eyebrow" style={{ marginTop: 8 }}>
            Sangre
          </div>
          <Slider
            label="Hemoglobina"
            valor={inputs.hb}
            min={4}
            max={14}
            paso={0.1}
            unidad="g/dL"
            decimales={1}
            onChange={(v) => setField('hb', v)}
          />
          <Slider
            label="Plaquetas"
            valor={inputs.plaquetas}
            min={5}
            max={300}
            paso={5}
            unidad="mil/µL"
            onChange={(v) => setField('plaquetas', v)}
          />
          <div className="slider-control">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <Toggle
                label="Coloca catéter central"
                activo={inputs.colocaCateterCentral}
                onChange={(v) => setField('colocaCateterCentral', v)}
              />
              <Toggle
                label="Isquemia miocárdica o sangrado activo"
                activo={inputs.isquemiaOSangrado}
                onChange={(v) => setField('isquemiaOSangrado', v)}
              />
            </div>
          </div>

          <div className="eyebrow" style={{ marginTop: 8 }}>
            Estómago
          </div>
          <div className="slider-control">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <Toggle
                label="Coagulopatía"
                activo={inputs.coagulopatia}
                onChange={(v) => setField('coagulopatia', v)}
              />
              <Toggle
                label="Hepatopatía crónica"
                activo={inputs.hepatopatia}
                onChange={(v) => setField('hepatopatia', v)}
              />
              <Toggle
                label="Ventilación mecánica"
                activo={inputs.ventilacion}
                onChange={(v) => setField('ventilacion', v)}
              />
              <Toggle
                label="Ya recibe profilaxis"
                activo={inputs.recibeProfilaxis}
                onChange={(v) => setField('recibeProfilaxis', v)}
              />
              <Toggle
                label="Pasa a sala"
                activo={inputs.pasaASala}
                onChange={(v) => setField('pasaASala', v)}
              />
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Los cuatro bloques */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 12,
            }}
          >
            {out.bloques.map((b) => (
              <div
                key={b.titulo}
                className="panel-dark"
                style={{ padding: 12, borderLeft: `3px solid ${TONO_COLOR[b.tono]}` }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    color: TONO_VAR[b.tono],
                    marginBottom: 6,
                  }}
                >
                  {ICONO[b.titulo]}
                  <span className="eyebrow" style={{ color: 'inherit' }}>
                    {b.titulo}
                  </span>
                </div>
                <div
                  className="font-display"
                  style={{ fontSize: 13.5, lineHeight: 1.4, color: TONO_VAR[b.tono] }}
                >
                  {b.veredicto}
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 6 }}>
                  {b.detalle}
                </div>
              </div>
            ))}
          </div>

          {/* Numeros duros */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 10,
            }}
          >
            <div className="kpi-card">
              <div className="kpi-label">Meta glucémica</div>
              <div className="kpi-value">{out.metaTexto}</div>
              <div className="kpi-note">SSC 2021 · ADA 2026</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">Variabilidad</div>
              <div className="kpi-value">{out.variabilidad} mg/dL</div>
              <div className="kpi-note">entre los dos controles</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">Aporte calórico</div>
              <div className="kpi-value">{out.kcalDia} kcal/día</div>
              <div className="kpi-note">{out.kcalKgDia} kcal/kg/día</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-label">Proteína</div>
              <div className="kpi-value">
                {out.proteinaGDia[0]}–{out.proteinaGDia[1]} g
              </div>
              <div className="kpi-note">
                {out.proteinaGKgDia[0].toFixed(1)}–{out.proteinaGKgDia[1].toFixed(1)} g/kg/día
              </div>
            </div>
          </div>

          {/* Transicion a subcutanea */}
          {inputs.insulinaUh > 0 && (
            <div className="panel-dark" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 8 }}>
                Transición del goteo a la insulina subcutánea
              </div>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>Requerimiento de 24 h</div>
                  <div className="font-display" style={{ fontSize: 17 }}>
                    {out.transicion.requerimiento24h.toFixed(0)} U
                  </div>
                </div>
                <div style={{ fontSize: 15, color: 'var(--muted)' }}>× 50% →</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>Basal subcutánea</div>
                  <div className="font-display" style={{ fontSize: 22, color: 'var(--gag)' }}>
                    {out.transicion.basalUi} U
                  </div>
                </div>
                <div style={{ paddingLeft: 10, borderLeft: '1px solid rgba(111,139,168,0.3)' }}>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                    Glargina temprana (0,25 U/kg)
                  </div>
                  <div className="font-display" style={{ fontSize: 17 }}>
                    {out.transicion.glarginaTempranaUi} U
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--ink-2)', lineHeight: 1.55, marginTop: 9 }}>
                La basal va <strong>2 h antes</strong> de cortar el goteo, calculada sobre las últimas
                6–8 h estables. El 50% viene de Dungan 2011 (posoperatorio cardíaco) y Doolin 2016
                (UTI mixta), y la glargina temprana de Hsia 2012, que bajó el rebote de más de 180 del
                93,5% al 33,3%.{' '}
                <strong style={{ color: 'var(--prot)' }}>
                  Ningún porcentaje está validado en la UTI médica
                </strong>
                : los ensayos son de cirugía cardíaca, no de shock séptico.
              </div>
            </div>
          )}

          {/* Factores de sangrado digestivo */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Factores de riesgo de sangrado digestivo (SCCM/ASHP 2024)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {out.factoresSangrado.map((f) => (
                <div
                  key={f.nombre}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 12.5,
                    opacity: f.presente ? 1 : 0.45,
                  }}
                >
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: '50%',
                      flexShrink: 0,
                      background: f.presente
                        ? f.firme
                          ? '#E9B44C'
                          : 'rgba(111,139,168,0.6)'
                        : 'transparent',
                      border: f.presente ? 'none' : '1px solid rgba(111,139,168,0.5)',
                    }}
                  />
                  <span style={{ color: f.firme ? 'var(--ink-1)' : 'var(--muted)' }}>{f.nombre}</span>
                  {!f.firme && (
                    <span style={{ fontSize: 10.5, color: 'var(--muted)' }}>
                      — no es factor firme
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginTop: 8 }}>
              Solo shock, coagulopatía y hepatopatía crónica probablemente aumentan el sangrado
              clínicamente importante. La ventilación sola no tiene evidencia firme, y la enteral
              probablemente protege.
            </div>
          </div>

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
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <ShieldAlert
                  size={14}
                  color={a.tono === 'red' ? '#FF5C7A' : a.tono === 'amber' ? '#E9B44C' : '#3FD8C8'}
                  style={{ marginTop: 3, flexShrink: 0 }}
                />
                <div>
                  <strong
                    style={{
                      fontSize: 12.5,
                      color:
                        a.tono === 'red'
                          ? 'var(--alert)'
                          : a.tono === 'amber'
                            ? 'var(--prot)'
                            : 'var(--gag)',
                    }}
                  >
                    {a.titulo}
                  </strong>
                  <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 2 }}>
                    {a.detalle}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.55 }}>
            Material de estudio. Los números son lectura didáctica de los ensayos citados en el
            módulo; el protocolo de insulina, el aporte nutricional y los umbrales de transfusión de
            cada servicio manda sobre esto.
          </div>
        </div>
      </div>
    </div>
  );
};
