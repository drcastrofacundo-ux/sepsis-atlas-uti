import React, { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, Stethoscope, Wind } from 'lucide-react';
import {
  M15_PRESETS,
  simulateM15,
  type CausaSdra,
  type M15Inputs,
  type Sexo,
  type Soporte,
} from '../../engines/m15Engine';
import { Glosario } from '../Glosario';

const SOPORTE_LABEL: Record<Soporte, string> = {
  alto_flujo: 'Cánula de alto flujo',
  vni: 'Ventilación no invasiva',
  invasiva: 'Ventilación invasiva',
};

const SEVERIDAD_LABEL: Record<string, string> = {
  sin_criterio: 'No clasifica por Berlín',
  leve: 'Leve',
  moderado: 'Moderado',
  grave: 'Grave',
};

export const LungLab: React.FC = () => {
  const [inputs, setInputs] = useState<M15Inputs>(M15_PRESETS[0].inputs);
  const [activePresetId, setActivePresetId] = useState<string>(M15_PRESETS[0].id);

  const out = useMemo(() => simulateM15(inputs), [inputs]);

  const setField = <K extends keyof M15Inputs>(key: K, val: M15Inputs[K]) => {
    setActivePresetId('custom');
    setInputs((prev) => ({ ...prev, [key]: val }));
  };

  const applyPreset = (id: string) => {
    const p = M15_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setActivePresetId(p.id);
    setInputs(p.inputs);
  };

  const activePreset = useMemo(
    () => M15_PRESETS.find((x) => x.id === activePresetId) || null,
    [activePresetId],
  );

  const vtColor = out.vtPorKgPcp > 8 ? 'var(--alert)' : out.vtPorKgPcp > 6.5 ? 'var(--prot)' : 'var(--ok)';
  const dpColor = out.driving >= 18 ? 'var(--alert)' : out.driving >= 15 ? 'var(--prot)' : 'var(--ok)';
  const invasiva = inputs.soporte === 'invasiva';

  // Esquema del pulmon chico: la fraccion aireada se achica con la distensibilidad.
  // Es ilustrativo, no una medicion de volumen pulmonar.
  const fraccionAireada = out.compliance === null ? 1 : Math.min(1, Math.max(0.15, out.compliance / 60));
  const anchoTotal = 250;
  const anchoAireado = anchoTotal * fraccionAireada;
  // Cuanto del pulmon aireado ocupa este volumen corriente, tomando 6 mL/kg como referencia.
  const ocupacion = Math.min(1.6, out.vtPorKgPcp / 6 / Math.max(0.3, fraccionAireada) / 2.2);

  const verdict = useMemo(() => {
    if (out.vtPorKgPcp > 8 || out.driving >= 18) {
      return {
        border: 'rgba(255, 92, 122, 0.5)',
        bg: 'rgba(255, 92, 122, 0.08)',
        color: 'var(--alert)',
        title: 'Ventilación fuera del rango protector',
        detail: `${out.vtPorKgPcp.toFixed(1)} mL/kg de peso predicho y ΔP de ${out.driving.toFixed(0)} cmH₂O. Bajar el volumen corriente es lo primero.`,
      };
    }
    if (out.pafi < 150) {
      return {
        border: 'rgba(233, 180, 76, 0.5)',
        bg: 'rgba(233, 180, 76, 0.08)',
        color: 'var(--prot)',
        title: 'Hipoxemia en rango de prono',
        detail: 'Con PaO₂/FiO₂ < 150, PROSEVA bajó la mortalidad a 28 días de 32,8% a 16,0%. El prono es temprano, no de rescate.',
      };
    }
    return {
      border: 'rgba(52, 211, 153, 0.45)',
      bg: 'rgba(52, 211, 153, 0.07)',
      color: 'var(--ok)',
      title: 'Ventilación dentro del rango protector',
      detail: `${out.vtPorKgPcp.toFixed(1)} mL/kg de peso predicho, ΔP ${out.driving.toFixed(0)} cmH₂O y meseta ${inputs.presionMeseta} cmH₂O.`,
    };
  }, [out.vtPorKgPcp, out.driving, out.pafi, inputs.presionMeseta]);

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
            <div className="eyebrow">Simulador Interactivo M15 · Pulmón Séptico y SDRA</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              El pulmón chico: ventilador, presión de distensión y ventrículo derecho
            </h2>
          </div>
          <span className={`badge ${out.pafi < 150 ? 'badge-red' : out.pafi < 300 ? 'badge-amber' : 'badge-green'}`}>
            {out.indiceUsado} {out.indiceUsado === 'SpO2/FiO2' && out.safi !== null ? out.safi.toFixed(0) : out.pafi.toFixed(0)}
            {' · '}
            {SEVERIDAD_LABEL[out.severidadBerlin]}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {M15_PRESETS.map((p) => (
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
          {activePreset ? activePreset.resumen : 'Escenario personalizado — ajustá talla, ventilador y gases.'}
        </div>
      </div>

      <div className="lab-grid">
        {/* Controles */}
        <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="eyebrow">Paciente y Ventilador</div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Sexo y talla</label>
              <span className="val">PCP {out.pcpKg.toFixed(0)} kg</span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
              {(['varon', 'mujer'] as Sexo[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.sexo === s}
                  onClick={() => setField('sexo', s)}
                >
                  {s === 'varon' ? 'Varón' : 'Mujer'}
                </button>
              ))}
            </div>
            <input
              type="range"
              min={140}
              max={200}
              step={1}
              value={inputs.tallaCm}
              onChange={(e) => setField('tallaCm', Number(e.target.value))}
            />
            <div className="slider-help">
              Talla {inputs.tallaCm} cm. El peso predicho sale de acá, no de la balanza: 6 mL/kg son{' '}
              {(6 * out.pcpKg).toFixed(0)} mL.
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Peso real (en la balanza)</label>
              <span className="val">{inputs.pesoRealKg} kg</span>
            </div>
            <input
              type="range"
              min={40}
              max={160}
              step={1}
              value={inputs.pesoRealKg}
              onChange={(e) => setField('pesoRealKg', Number(e.target.value))}
            />
            <div className="slider-help">Solo para mostrar la trampa: con este peso, 6 mL/kg darían {out.vtSiUsaraPesoRealMl.toFixed(0)} mL.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Volumen corriente</label>
              <span className="val" style={{ color: vtColor }}>
                {inputs.vtMl} mL · {out.vtPorKgPcp.toFixed(1)} mL/kg PCP
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={800}
              step={10}
              value={inputs.vtMl}
              onChange={(e) => setField('vtMl', Number(e.target.value))}
            />
            <div className="slider-help">ARMA: 6 mL/kg de peso predicho frente a 12 bajó la mortalidad de 39,8% a 31,0%.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>PEEP</label>
              <span className="val">{inputs.peep} cmH₂O</span>
            </div>
            <input
              type="range"
              min={0}
              max={24}
              step={1}
              value={inputs.peep}
              onChange={(e) => setField('peep', Number(e.target.value))}
            />
            <div className="slider-help">En ART, reclutar y titular la PEEP aumentó la mortalidad: subirla no es gratis.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Presión meseta (pausa inspiratoria)</label>
              <span className="val" style={{ color: inputs.presionMeseta > 30 ? 'var(--alert)' : 'var(--gag)' }}>
                {inputs.presionMeseta} cmH₂O
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={45}
              step={1}
              value={inputs.presionMeseta}
              onChange={(e) => setField('presionMeseta', Number(e.target.value))}
            />
            <div className="slider-help">Sin medirla con pausa y sin esfuerzo del paciente, no hay ΔP.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>PaO₂</label>
              <span className="val">{inputs.pao2} mmHg</span>
            </div>
            <input
              type="range"
              min={35}
              max={160}
              step={1}
              value={inputs.pao2}
              onChange={(e) => setField('pao2', Number(e.target.value))}
            />
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>FiO₂</label>
              <span className="val">{(inputs.fio2 * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min={21}
              max={100}
              step={1}
              value={Math.round(inputs.fio2 * 100)}
              onChange={(e) => setField('fio2', Number(e.target.value) / 100)}
            />
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>SpO₂ (para el índice SpO₂/FiO₂)</label>
              <span className="val" style={{ color: inputs.spo2 > 97 ? 'var(--muted)' : 'var(--gag)' }}>
                {inputs.spo2}%
              </span>
            </div>
            <input
              type="range"
              min={80}
              max={100}
              step={1}
              value={inputs.spo2}
              onChange={(e) => setField('spo2', Number(e.target.value))}
            />
            <div className="slider-help">
              {inputs.spo2 > 97
                ? 'Por encima de 97% el índice no sirve: la curva está en meseta.'
                : `SpO₂/FiO₂ ${out.safi?.toFixed(0)} · la definición global 2024 usa ≤ 315.`}
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>PaCO₂</label>
              <span className="val" style={{ color: inputs.paco2 >= 48 ? 'var(--prot)' : 'var(--gag)' }}>
                {inputs.paco2} mmHg
              </span>
            </div>
            <input
              type="range"
              min={25}
              max={90}
              step={1}
              value={inputs.paco2}
              onChange={(e) => setField('paco2', Number(e.target.value))}
            />
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Soporte actual</label>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {(['alto_flujo', 'vni', 'invasiva'] as Soporte[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.soporte === s}
                  onClick={() => setField('soporte', s)}
                >
                  {SOPORTE_LABEL[s]}
                </button>
              ))}
            </div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Causa del SDRA</label>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {(['neumonia', 'extrapulmonar'] as CausaSdra[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  className="btn-preset"
                  data-active={inputs.causa === c}
                  onClick={() => setField('causa', c)}
                >
                  {c === 'neumonia' ? 'Neumonía' : 'Extrapulmonar'}
                </button>
              ))}
            </div>
            <div className="slider-help">La neumonía es uno de los 4 predictores de cor pulmonale agudo.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Horas desde el inicio</label>
              <span className="val">{inputs.horasDeEvolucion} h</span>
            </div>
            <input
              type="range"
              min={0}
              max={120}
              step={1}
              value={inputs.horasDeEvolucion}
              onChange={(e) => setField('horasDeEvolucion', Number(e.target.value))}
            />
            <div className="slider-help">El bloqueo neuromuscular se discute solo en el SDRA grave temprano (≤ 48 h).</div>
          </div>
        </div>

        {/* Resultados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-label">Peso predicho</div>
              <div className="kpi-value">{out.pcpKg.toFixed(0)}</div>
              <div className="kpi-sub">kg · por talla, no por balanza</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">VT / kg de PCP</div>
              <div className="kpi-value" style={{ color: vtColor }}>
                {out.vtPorKgPcp.toFixed(1)}
              </div>
              <div className="kpi-sub">Meta ≈ 6 · alerta &gt; 8</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Presión de distensión</div>
              <div className="kpi-value" style={{ color: dpColor }}>
                {out.driving.toFixed(0)}
              </div>
              <div className="kpi-sub">ΔP = meseta − PEEP</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Distensibilidad</div>
              <div className="kpi-value">{out.compliance !== null ? out.compliance.toFixed(0) : '—'}</div>
              <div className="kpi-sub">mL/cmH₂O · C_rs = VT / ΔP</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">PaO₂ / FiO₂</div>
              <div className="kpi-value" style={{ color: out.pafi < 150 ? 'var(--alert)' : 'var(--ink)' }}>
                {out.pafi.toFixed(0)}
              </div>
              <div className="kpi-sub">{SEVERIDAD_LABEL[out.severidadBerlin]} (Berlín)</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Cor pulmonale</div>
              <div
                className="kpi-value"
                style={{ color: out.corPulmonale.puntaje >= 2 ? 'var(--prot)' : 'var(--ok)' }}
              >
                {out.corPulmonale.puntaje}/4
              </div>
              <div className="kpi-sub">Mekontso Dessap 2016</div>
            </div>
          </div>

          <div
            className="verdict-banner"
            style={{ border: `1px solid ${verdict.border}`, background: verdict.bg }}
          >
            <div>
              <strong style={{ color: verdict.color }}>{verdict.title}:</strong>{' '}
              <span style={{ color: 'var(--ink-2)' }}>{verdict.detail}</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: 14 }}>
            {/* Esquema del pulmón chico */}
            <div className="panel-dark" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                A · El pulmón chico (esquema)
              </div>
              <svg viewBox="0 0 380 180" style={{ width: '100%', height: 'auto' }}>
                <text x="20" y="22" fill="#6F8BA8" fontSize="9.5" fontFamily="IBM Plex Mono">
                  Capacidad total del pulmón sano
                </text>
                <rect x="20" y="30" width={anchoTotal} height="42" rx="6" fill="rgba(79,169,247,0.12)" stroke="#2B4260" />

                <text x="20" y="92" fill="#3FD8C8" fontSize="9.5" fontFamily="IBM Plex Mono">
                  Pulmón aireado que queda (C_rs {out.compliance !== null ? out.compliance.toFixed(0) : '—'} mL/cmH₂O)
                </text>
                <rect x="20" y="100" width={anchoAireado} height="42" rx="6" fill="rgba(63,216,200,0.22)" stroke="#3FD8C8" />

                {/* Volumen corriente sobre el pulmón aireado */}
                <rect
                  x="20"
                  y="100"
                  width={Math.min(anchoAireado, anchoAireado * ocupacion)}
                  height="42"
                  rx="6"
                  fill={out.vtPorKgPcp > 8 ? 'rgba(255,92,122,0.55)' : 'rgba(52,211,153,0.45)'}
                />
                {ocupacion > 1 && (
                  <rect
                    x={20 + anchoAireado}
                    y="100"
                    width={Math.min(80, anchoAireado * (ocupacion - 1))}
                    height="42"
                    rx="6"
                    fill="rgba(255,92,122,0.75)"
                  />
                )}
                <text x="20" y="160" fill="#9DB1C8" fontSize="9.5" fontFamily="IBM Plex Mono">
                  VT {inputs.vtMl} mL = {out.vtPorKgPcp.toFixed(1)} mL/kg de PCP
                </text>
                <text x="20" y="172" fill="#6F8BA8" fontSize="8.5" fontFamily="IBM Plex Mono">
                  Esquema didáctico: el mismo volumen ocupa una fracción mayor cuanto menos pulmón queda.
                </text>
              </svg>
            </div>

            {/* Cor pulmonale */}
            <div className="panel-dark" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 8 }}>
                B · Riesgo de cor pulmonale agudo
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {out.corPulmonale.factores.map((f) => (
                  <div
                    key={f.nombre}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5 }}
                  >
                    {f.presente ? (
                      <AlertTriangle size={14} color="#E9B44C" />
                    ) : (
                      <CheckCircle2 size={14} color="#34D399" />
                    )}
                    <span style={{ color: f.presente ? 'var(--ink)' : 'var(--muted)' }}>{f.nombre}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 10, fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.5 }}>
                Prevalencia del 22% en SDRA ventilado. El cor pulmonale grave tuvo 57% de mortalidad frente a 42%,
                y el prono fue protector. Con 2 o más factores conviene mirar el VD con eco antes de subir la PEEP.
              </div>
            </div>
          </div>

          {/* Definición global */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              C · Berlín 2012 vs. definición global 2024
            </div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 12.5 }}>
              <div>
                <div style={{ color: 'var(--muted)', fontSize: 11 }}>Berlín</div>
                <div style={{ color: out.severidadBerlin === 'sin_criterio' ? 'var(--muted)' : 'var(--ink)' }}>
                  {SEVERIDAD_LABEL[out.severidadBerlin]}
                </div>
                {!invasiva && (
                  <div style={{ fontSize: 10.5, color: 'var(--muted)' }}>Exige PEEP ≥ 5 y soporte ventilatorio</div>
                )}
              </div>
              <div>
                <div style={{ color: 'var(--muted)', fontSize: 11 }}>Global 2024</div>
                <div style={{ color: out.cumpleGlobal ? 'var(--gag)' : 'var(--muted)' }}>
                  {out.cumpleGlobal ? 'Cumple criterios' : 'No cumple'}
                </div>
                <div style={{ fontSize: 10.5, color: 'var(--muted)' }}>{out.motivoGlobal}</div>
              </div>
            </div>
          </div>

          {/* Conductas */}
          <div className="panel-dark" style={{ padding: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              D · Semáforo de medidas (lectura didáctica)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {out.conductas.map((c) => (
                <div key={c.titulo} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  {c.tono === 'red' ? (
                    <Wind size={15} color="#FF5C7A" style={{ marginTop: 2, flexShrink: 0 }} />
                  ) : c.tono === 'amber' ? (
                    <Stethoscope size={15} color="#E9B44C" style={{ marginTop: 2, flexShrink: 0 }} />
                  ) : (
                    <CheckCircle2 size={15} color="#34D399" style={{ marginTop: 2, flexShrink: 0 }} />
                  )}
                  <div style={{ fontSize: 12.5 }}>
                    <strong
                      style={{
                        color: c.tono === 'red' ? 'var(--alert)' : c.tono === 'amber' ? 'var(--prot)' : 'var(--ok)',
                      }}
                    >
                      {c.titulo}
                    </strong>
                    <div style={{ color: 'var(--ink-2)', lineHeight: 1.5 }}>{c.detalle}</div>
                  </div>
                </div>
              ))}
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

      <Glosario claves={['SDRA', 'PCP', 'VT', 'PEEP', 'ΔP', 'PaO₂/FiO₂', 'SpO₂/FiO₂', 'EOLIA']} />
    </div>
  );
};
