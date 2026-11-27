import React, { useMemo, useState } from 'react';
import { BarChart3, Bell, Clock, ListChecks, TrendingDown } from 'lucide-react';
import {
  ELEMENTOS_LABEL,
  M20_PRESETS,
  simulateM20,
  type ElementosPaquete,
  type M20Inputs,
} from '../../engines/m20Engine';
import { Glosario } from '../Glosario';

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

export const SystemLab: React.FC = () => {
  const [inputs, setInputs] = useState<M20Inputs>(M20_PRESETS[0].inputs);
  const [presetActivo, setPresetActivo] = useState<string>(M20_PRESETS[0].id);

  const out = useMemo(() => simulateM20(inputs), [inputs]);

  const setField = <K extends keyof M20Inputs>(key: K, val: M20Inputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
    setPresetActivo('');
  };

  const togglePaquete = (k: keyof ElementosPaquete) => {
    setInputs((prev) => ({ ...prev, paquete: { ...prev.paquete, [k]: !prev.paquete[k] } }));
    setPresetActivo('');
  };

  const aplicarPreset = (id: string) => {
    const p = M20_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setInputs({ ...p.inputs, paquete: { ...p.inputs.paquete } });
    setPresetActivo(id);
  };

  const presetResumen = M20_PRESETS.find((p) => p.id === presetActivo)?.resumen;
  const clavesPaquete = Object.keys(ELEMENTOS_LABEL) as Array<keyof ElementosPaquete>;

  // Barras del efecto codificacion.
  const maxMort = Math.max(inputs.mortalidadClinica, out.mortalidadAparente, 1);
  const anchoBarra = (v: number) => (v / maxMort) * 190;

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
            <div className="eyebrow">Simulador Interactivo M20 · La Sepsis como Sistema</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              El tablero del servicio: de la guardia al indicador
            </h2>
          </div>
          <span className="badge badge-purple">
            Paquete {out.cumplidos}/{out.totalPaquete}
          </span>
        </div>
        <div className="preset-summary">
          Cuatro cuentas que no se hacen al lado de la cama:{' '}
          <strong style={{ color: 'var(--gag)' }}>a quién apurar</strong>, cuánto se cumple del
          paquete, cómo un indicador puede mejorar sin que mejore nadie, y cuántas alertas tolera un
          servicio antes de silenciarlas.
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
          {M20_PRESETS.map((p) => (
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
          <div className="eyebrow">A quién apurar</div>
          <div className="slider-control">
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
                Shock
              </button>
            </div>
          </div>
          <Slider
            label="NEWS2 ampliado"
            valor={inputs.news2}
            min={0}
            max={18}
            paso={1}
            unidad=""
            onChange={(v) => setField('news2', v)}
          />
          <Slider
            label="Horas hasta el antibiótico"
            valor={inputs.horasHastaAntibiotico}
            min={0}
            max={8}
            paso={0.1}
            unidad="h"
            decimales={1}
            onChange={(v) => setField('horasHastaAntibiotico', v)}
          />

          <div className="eyebrow" style={{ marginTop: 8 }}>
            Paquete de la hora 1
          </div>
          <div className="slider-control">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {clavesPaquete.map((k) => (
                <button
                  key={k}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.paquete[k]}
                  onClick={() => togglePaquete(k)}
                  style={{ textAlign: 'left', fontSize: 11 }}
                >
                  {inputs.paquete[k] ? '● ' : '○ '}
                  {ELEMENTOS_LABEL[k]}
                </button>
              ))}
            </div>
          </div>

          <div className="eyebrow" style={{ marginTop: 8 }}>
            El indicador del servicio
          </div>
          <Slider
            label="Casos por criterios clínicos"
            valor={inputs.casosClinicos}
            min={50}
            max={800}
            paso={10}
            unidad="casos"
            onChange={(v) => setField('casosClinicos', v)}
          />
          <Slider
            label="Mortalidad real de esos casos"
            valor={inputs.mortalidadClinica}
            min={5}
            max={60}
            paso={1}
            unidad="%"
            onChange={(v) => setField('mortalidadClinica', v)}
          />
          <Slider
            label="Casos leves que se suman al código"
            valor={inputs.casosAgregados}
            min={0}
            max={800}
            paso={10}
            unidad="casos"
            onChange={(v) => setField('casosAgregados', v)}
          />
          <Slider
            label="Mortalidad de los casos leves"
            valor={inputs.mortalidadAgregados}
            min={0}
            max={20}
            paso={1}
            unidad="%"
            onChange={(v) => setField('mortalidadAgregados', v)}
          />

          <div className="eyebrow" style={{ marginTop: 8 }}>
            El algoritmo de alerta
          </div>
          <Slider
            label="Sensibilidad"
            valor={inputs.sensibilidad}
            min={10}
            max={100}
            paso={1}
            unidad="%"
            onChange={(v) => setField('sensibilidad', v)}
          />
          <Slider
            label="Especificidad"
            valor={inputs.especificidad}
            min={50}
            max={100}
            paso={1}
            unidad="%"
            onChange={(v) => setField('especificidad', v)}
          />
          <Slider
            label="Prevalencia de sepsis"
            valor={inputs.prevalencia}
            min={1}
            max={25}
            paso={0.5}
            unidad="%"
            decimales={1}
            onChange={(v) => setField('prevalencia', v)}
          />
          <Slider
            label="Pacientes por día"
            valor={inputs.pacientesPorDia}
            min={20}
            max={600}
            paso={10}
            unidad=""
            onChange={(v) => setField('pacientesPorDia', v)}
          />
        </div>

        {/* Resultados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* 1. Urgencia */}
          <div
            className="panel-dark"
            style={{
              padding: 14,
              borderLeft: `3px solid ${out.fueraDeVentana ? '#FF5C7A' : out.urgencia === 'evaluar' ? '#3FD8C8' : '#34D399'}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
              <Clock size={14} color="#9A87F5" />
              <span className="eyebrow">1 · Urgencia del antibiótico</span>
            </div>
            <div
              className="font-display"
              style={{
                fontSize: 16,
                color: out.fueraDeVentana ? 'var(--alert)' : 'var(--ok)',
              }}
            >
              {out.urgenciaTitulo}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55, marginTop: 6 }}>
              {out.urgenciaDetalle}
            </div>
            {out.orPorHora !== null && (
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  flexWrap: 'wrap',
                  marginTop: 10,
                  paddingTop: 10,
                  borderTop: '1px solid rgba(111,139,168,0.2)',
                }}
              >
                <div>
                  <div style={{ fontSize: 10.5, color: 'var(--muted)' }}>OR por hora</div>
                  <div className="font-display" style={{ fontSize: 16 }}>
                    {out.orPorHora.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10.5, color: 'var(--muted)' }}>
                    OR acumulado a las {inputs.horasHastaAntibiotico.toFixed(1)} h
                  </div>
                  <div className="font-display" style={{ fontSize: 16, color: 'var(--prot)' }}>
                    {out.orAcumulado?.toFixed(2)}
                  </div>
                </div>
                {out.excesoAbsoluto !== null && (
                  <div>
                    <div style={{ fontSize: 10.5, color: 'var(--muted)' }}>
                      Exceso absoluto estimado
                    </div>
                    <div className="font-display" style={{ fontSize: 16, color: 'var(--alert)' }}>
                      +{out.excesoAbsoluto.toFixed(1)} pts
                    </div>
                  </div>
                )}
              </div>
            )}
            <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginTop: 9 }}>
              Todos estos números son <strong>observacionales</strong>. En Pak 2023, según qué
              variables se ajustan, la asociación entre tiempo y mortalidad cambia de magnitud, de
              dirección y de significación. El exceso absoluto se extrapola de forma lineal, que es
              una simplificación.
            </div>
          </div>

          {/* 2. Paquete */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
              <ListChecks size={14} color="#3FD8C8" />
              <span className="eyebrow">
                2 · Paquete de la hora 1: {out.cumplidos} de {out.totalPaquete} ·{' '}
                {out.porcentajePaquete.toFixed(0)}%
              </span>
            </div>
            <div style={{ display: 'flex', gap: 5, marginBottom: 9 }}>
              {clavesPaquete.map((k) => (
                <div
                  key={k}
                  title={ELEMENTOS_LABEL[k]}
                  style={{
                    flex: 1,
                    height: 7,
                    borderRadius: 4,
                    background: inputs.paquete[k] ? '#3FD8C8' : 'rgba(111,139,168,0.25)',
                  }}
                />
              ))}
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>
              Cumplir el paquete se asoció a menor mortalidad a 30 días (21,8% vs 27,5%; OR 0,83),
              pero es observacional. Cuando el SEP-1 se hizo obligatorio en 114 hospitales, los
              lactatos medidos pasaron del 55% al 77% y{' '}
              <strong style={{ color: 'var(--prot)' }}>la mortalidad no se movió</strong> (20,3% vs
              20,4%). Medir el proceso no es lo mismo que mejorar el desenlace.
            </div>
          </div>

          {/* 3. Efecto codificacion */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
              <TrendingDown size={14} color="#E9B44C" />
              <span className="eyebrow">3 · El efecto codificación</span>
            </div>
            <svg viewBox="0 0 380 76" style={{ width: '100%', height: 'auto' }}>
              {/* Barra real */}
              <text x="0" y="16" fill="#9DB1C8" fontSize="9" fontFamily="IBM Plex Mono">
                Criterios clínicos
              </text>
              <rect
                x="130"
                y="7"
                width={anchoBarra(inputs.mortalidadClinica)}
                height="14"
                rx="3"
                fill="#FF5C7A"
              />
              <text
                x={134 + anchoBarra(inputs.mortalidadClinica)}
                y="18"
                fill="#FF5C7A"
                fontSize="10"
                fontFamily="IBM Plex Mono"
              >
                {inputs.mortalidadClinica.toFixed(1)}%
              </text>
              <text x="0" y="31" fill="#6F8BA8" fontSize="8" fontFamily="IBM Plex Mono">
                {inputs.casosClinicos} casos
              </text>

              {/* Barra aparente */}
              <text x="0" y="56" fill="#9DB1C8" fontSize="9" fontFamily="IBM Plex Mono">
                Con los códigos
              </text>
              <rect
                x="130"
                y="47"
                width={anchoBarra(out.mortalidadAparente)}
                height="14"
                rx="3"
                fill="#E9B44C"
              />
              <text
                x={134 + anchoBarra(out.mortalidadAparente)}
                y="58"
                fill="#E9B44C"
                fontSize="10"
                fontFamily="IBM Plex Mono"
              >
                {out.mortalidadAparente.toFixed(1)}%
              </text>
              <text x="0" y="71" fill="#6F8BA8" fontSize="8" fontFamily="IBM Plex Mono">
                {out.casosTotales} casos
              </text>
            </svg>
            <div style={{ fontSize: 11.5, color: 'var(--ink-2)', lineHeight: 1.55, marginTop: 4 }}>
              Las mismas muertes, un denominador más grande. En Rhee 2017, con criterios clínicos la
              incidencia fue estable (6,0% de los ingresos) mientras que por códigos de facturación
              subía un 10,3% por año, y la caída de la mortalidad también era más pronunciada en los
              códigos.{' '}
              <strong style={{ color: 'var(--gag)' }}>
                Toda métrica de calidad tiene que mirar cómo se identifica el caso.
              </strong>
            </div>
          </div>

          {/* 4. Carga de alertas */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
              <Bell size={14} color="#9A87F5" />
              <span className="eyebrow">4 · La carga de alertas, por día</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: 10,
              }}
            >
              <div className="kpi-card">
                <div className="kpi-label">Alertas por día</div>
                <div className="kpi-value">{out.alertasPorDia.toFixed(0)}</div>
                <div className="kpi-note">
                  {out.verdaderosPositivos.toFixed(1)} reales · {out.falsosPositivos.toFixed(0)}{' '}
                  falsas
                </div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Por cada sepsis detectada</div>
                <div className="kpi-value">
                  {out.alertasPorSepsisDetectada !== null
                    ? out.alertasPorSepsisDetectada.toFixed(1)
                    : '—'}
                </div>
                <div className="kpi-note">alertas que alguien tiene que mirar</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Valor predictivo positivo</div>
                <div className="kpi-value">{out.vpp.toFixed(1)}%</div>
                <div className="kpi-note">de las alertas que suenan</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Sepsis que se le escapan</div>
                <div className="kpi-value">{out.sepsisNoDetectadas.toFixed(1)}</div>
                <div className="kpi-note">por día, sin alerta</div>
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--ink-2)', lineHeight: 1.55, marginTop: 9 }}>
              Un algoritmo sirve si se valida afuera de donde se creó, no inunda de alertas y alguien
              actúa con ellas. El Epic Sepsis Model, el más usado en EE. UU., tuvo un AUC de 0,63 en
              la validación externa y no detectó el 67% de las sepsis.{' '}
              <strong style={{ color: 'var(--prot)' }}>
                Todavía no hay ensayos aleatorizados grandes que muestren que una alerta de sepsis
                salva vidas.
              </strong>
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

          {/* Cierre del Atlas */}
          <div className="panel-dark" style={{ padding: 12, borderLeft: '3px solid #9A87F5' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
              <BarChart3 size={14} color="#9A87F5" />
              <span className="eyebrow" style={{ color: 'var(--gag)' }}>
                Lo que este módulo deja afuera del tablero
              </span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              En la Argentina, con el mismo tratamiento dentro de la UTI, la mortalidad a 28 días fue{' '}
              <strong style={{ color: 'var(--alert)' }}>42% en el hospital público frente a 24% en
              el privado</strong>: llegaban con 48 horas de síntomas en lugar de 24, más veces en
              shock y con más multirresistentes. Una parte grande de la mortalidad de la sepsis se
              decide antes de la UTI, y ningún indicador de proceso la mide.
            </div>
          </div>

          <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.55 }}>
            Material de estudio. Las cuentas de codificación y de carga de alertas son aritmética
            sobre los parámetros que elegís, no estimaciones de ningún servicio real.
          </div>
        </div>
      </div>

      <Glosario claves={['NEWS2', 'SEP-1', 'EGDT', 'VPP', 'AUC', 'OR', 'HR', 'SSC', 'UTI']} />
    </div>
  );
};
