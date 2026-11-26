import React, { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, HeartPulse, ShieldAlert } from 'lucide-react';
import {
  M05_PRESETS,
  NA_FORMULATION_LABEL,
  simulateM05,
  type M05Inputs,
  type NaFormulation,
} from '../../engines/m05Engine';
import { construirGuyton, crearEscalas } from '../../engines/m05Guyton';

export const HemodynamicLab: React.FC = () => {
  const [inputs, setInputs] = useState<M05Inputs>(M05_PRESETS[0].inputs);
  const [activePresetId, setActivePresetId] = useState<string>(M05_PRESETS[0].id);

  const out = useMemo(() => simulateM05(inputs), [inputs]);

  const setField = <K extends keyof M05Inputs>(key: K, val: M05Inputs[K]) => {
    setActivePresetId('custom');
    setInputs((prev) => {
      const next = { ...prev, [key]: val };
      if (key === 'pas' && Number(val) < prev.pad + 10) {
        next.pad = Math.max(25, Number(val) - 10);
      }
      if (key === 'pad' && Number(val) > prev.pas - 10) {
        next.pas = Math.min(190, Number(val) + 10);
      }
      return next;
    });
  };

  const applyPreset = (id: string) => {
    const p = M05_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setActivePresetId(p.id);
    setInputs(p.inputs);
  };

  // Escala para SVG Windkessel (Y 20..180 mmHg -> SVG 155..18)
  const mapPressToY = (mmhg: number) => 155 - ((Math.min(180, Math.max(20, mmhg)) - 20) / 160) * 135;
  const waveformPath = out.waveformPoints
    .map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${(28 + pt.x * 3.4).toFixed(1)} ${mapPressToY(pt.y).toFixed(1)}`)
    .join(' ');

  // Escala curva J invertida VNERi (X: 0..15 -> 30..360)
  const mapVneriToX = (v: number) => 30 + (Math.min(15, Math.max(0, v)) / 15) * 330;
  const vneriCurvePts = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 60; i++) {
      const v = (i / 60) * 15;
      // Nadir en ~6.7 (~28% mort), subida hacia 0 (~56-65%), subida suave >10.8 (~39-44%)
      const mort =
        v < 6.7
          ? 28 + Math.pow((6.7 - v) / 6.7, 1.8) * 36
          : 28 + Math.pow((v - 6.7) / 8.3, 1.5) * 18;
      const x = mapVneriToX(v);
      const y = 152 - ((mort - 15) / 60) * 128;
      pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }, []);

  const vneriClamped = out.vneri !== null ? Math.min(15, Math.max(0, out.vneri)) : null;
  const vneriMarkerMort =
    vneriClamped === null
      ? 28
      : vneriClamped < 6.7
        ? 28 + Math.pow((6.7 - vneriClamped) / 6.7, 1.8) * 36
        : 28 + Math.pow((vneriClamped - 6.7) / 8.3, 1.5) * 18;
  const vneriMarkerY = 152 - ((vneriMarkerMort - 15) / 60) * 128;

  // Panel C: un solo sistema de ejes (RAP en mmHg x flujo en L/min).
  const guyton = useMemo(
    () => construirGuyton(inputs.pvc, out.guytonPoints.pmsf, out.guytonPoints.overPlateau),
    [inputs.pvc, out.guytonPoints.pmsf, out.guytonPoints.overPlateau],
  );
  const gEsc = useMemo(() => crearEscalas(guyton.ejes), [guyton.ejes]);
  const guytonCardiacPath = useMemo(
    () =>
      guyton.curvaCardiaca
        .map((p, i) => `${i === 0 ? 'M' : 'L'} ${gEsc.x(p.rap).toFixed(1)} ${gEsc.y(p.flujo).toFixed(1)}`)
        .join(' '),
    [guyton.curvaCardiaca, gEsc],
  );
  const guytonTicksRap = useMemo(() => {
    const paso = guyton.ejes.rapMax > 24 ? 8 : 4;
    const t: number[] = [];
    for (let v = 0; v <= guyton.ejes.rapMax; v += paso) t.push(v);
    return t;
  }, [guyton.ejes.rapMax]);

  const ppColor =
    out.ppZona === 'segura' ? 'var(--ok)' : 'var(--prot)';
  const vneriColor =
    out.vneriBand === 'critica'
      ? 'var(--alert)'
      : out.vneriBand === 'estable'
        ? 'var(--gag)'
        : out.vneriBand === 'sobreexposicion'
          ? 'var(--prot)'
          : 'var(--muted)';

  const activePreset = useMemo(
    () => M05_PRESETS.find((x) => x.id === activePresetId) || null,
    [activePresetId]
  );

  const verdict = useMemo(() => {
    if (out.guytonPoints.overPlateau) {
      return {
        border: 'rgba(255, 92, 122, 0.5)',
        bg: 'rgba(255, 92, 122, 0.08)',
        color: 'var(--alert)',
        title: 'Meseta de Frank-Starling / Congestión venosa',
        detail: 'Agregar volumen empuja edema sin ganar gasto cardíaco: priorizá vasopresor si PAD < 50 mmHg o descongestión.',
      };
    }
    if (inputs.pad < 50 || out.vneriBand === 'critica') {
      return {
        border: 'rgba(255, 92, 122, 0.5)',
        bg: 'rgba(255, 92, 122, 0.08)',
        color: 'var(--alert)',
        title: 'Vasoplejia crítica (PAD < 50 mmHg o VNERi < 2,6)',
        detail: 'Tono vascular severamente caído: riesgo de hipoperfusión coronaria y shock refractario; titulá noradrenalina temprana.',
      };
    }
    if (inputs.crt > 3) {
      return {
        border: 'rgba(233, 180, 76, 0.5)',
        bg: 'rgba(233, 180, 76, 0.08)',
        color: 'var(--prot)',
        title: 'Hipoperfusión periférica persistente (CRT > 3 s)',
        detail: 'Evaluá respuesta real a fluidos antes de expandir (PLR o PPV válida) y corregí presión diastólica si corresponde.',
      };
    }
    return {
      border: 'rgba(52, 211, 153, 0.45)',
      bg: 'rgba(52, 211, 153, 0.07)',
      color: 'var(--ok)',
      title: 'Perfil hemodinámico estabilizado',
      detail: `PAD ${inputs.pad} mmHg, PP ${out.pp} mmHg y perfusión capilar conservada${out.vneri !== null ? ` (VNERi ${out.vneri.toFixed(2)})` : ''}.`,
    };
  }, [inputs.pad, inputs.crt, out.guytonPoints.overPlateau, out.pp, out.vneri, out.vneriBand]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Cabecera y Presets */}
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
            <div className="eyebrow">Simulador Interactivo M05 · Hemodinamia de Guardia, Windkessel y VNERi</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              Simulador Hemodinámico de Guardia (PAD, PP, Fluido-Tolerancia y Base vs. Bitartrato)
            </h2>
          </div>
          <span className={`badge ${inputs.crt > 3 ? 'badge-red' : 'badge-green'}`}>
            CRT {inputs.crt.toFixed(1)} s {inputs.crt > 3 ? '· Hipoperfusión' : '· Perfusión preservada'}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {M05_PRESETS.map((p) => (
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
          {activePreset
            ? activePreset.resumen
            : 'Escenario personalizado — ajustá signos vitales, droga vasoactiva y contexto de guardia.'}
        </div>
      </div>

      {/* Grilla Controles + Dashboards */}
      <div className="lab-grid">
        {/* Panel Controles */}
        <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="eyebrow">Signos, Bomba y Contexto</div>

          <div className="slider-control">
            <div className="slider-head">
              <label>PAS (Sistólica)</label>
              <span className="val">{inputs.pas} mmHg</span>
            </div>
            <input
              type="range"
              min={60}
              max={190}
              step={1}
              value={inputs.pas}
              onChange={(e) => setField('pas', Number(e.target.value))}
            />
            <div className="slider-help">Refleja volumen sistólico + rigidez arterial (PP = PAS − PAD).</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>PAD (Diastólica · corte &lt;50)</label>
              <span className="val" style={{ color: inputs.pad < 50 ? 'var(--alert)' : 'var(--gag)' }}>
                {inputs.pad} mmHg
              </span>
            </div>
            <input
              type="range"
              min={25}
              max={100}
              step={1}
              value={inputs.pad}
              onChange={(e) => setField('pad', Number(e.target.value))}
            />
            <div className="slider-help">Marca el tono arterial basal; &lt;50 mmHg indica vasoplejia y caída de perfusión coronaria.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Frecuencia Cardíaca (FC)</label>
              <span className="val">{inputs.fc} lpm</span>
            </div>
            <input
              type="range"
              min={45}
              max={160}
              step={1}
              value={inputs.fc}
              onChange={(e) => setField('fc', Number(e.target.value))}
            />
            <div className="slider-help">Taquicardia con PAD baja eleva el índice DSI (FC/PAD) y empeora el VNERi.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>PVC / RAP</label>
              <span className="val">{inputs.pvc} mmHg</span>
            </div>
            <input
              type="range"
              min={0}
              max={26}
              step={1}
              value={inputs.pvc}
              onChange={(e) => setField('pvc', Number(e.target.value))}
            />
            <div className="slider-help">Presión de retorno venoso; ≥12 mmHg acerca la curva al punto z de meseta (stop fluidos).</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Peso real</label>
              <span className="val">{inputs.pesoKg} kg</span>
            </div>
            <input
              type="range"
              min={40}
              max={150}
              step={1}
              value={inputs.pesoKg}
              onChange={(e) => setField('pesoKg', Number(e.target.value))}
            />
          </div>

          <div className="slider-control">
            <label style={{ fontSize: 12, color: 'var(--ink-2)', marginBottom: 4 }}>
              Formulación de Noradrenalina (etiqueta local)
            </label>
            <select
              className="icu-select"
              value={inputs.formulacion}
              onChange={(e) => setField('formulacion', e.target.value as NaFormulation)}
            >
              {(Object.keys(NA_FORMULATION_LABEL) as NaFormulation[]).map((k) => (
                <option key={k} value={k}>
                  {NA_FORMULATION_LABEL[k]}
                </option>
              ))}
            </select>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Dosis NA (en etiqueta elegida)</label>
              <span className="val">{inputs.dosisNa.toFixed(2)} µg/kg/min</span>
            </div>
            <input
              type="range"
              min={0}
              max={2}
              step={0.01}
              value={inputs.dosisNa}
              onChange={(e) => setField('dosisNa', Number(e.target.value))}
            />
            <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--f-mono)' }}>
              Equiv.: {out.naBaseEq.toFixed(2)} Base · {out.naBitEq.toFixed(2)} Bitartrato ({out.naUgMinBase.toFixed(1)} µg/min base)
            </div>
            <div className="slider-help">1 mg de noradrenalina base equivale a 2 mg de bitartrato monohidrato.</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div className="slider-control">
              <div className="slider-head">
                <label>PPV</label>
                <span className="val">{inputs.ppv}%</span>
              </div>
              <input
                type="range"
                min={2}
                max={30}
                step={1}
                value={inputs.ppv}
                onChange={(e) => setField('ppv', Number(e.target.value))}
              />
            </div>

            <div className="slider-control">
              <div className="slider-head">
                <label>SVV</label>
                <span className="val">{inputs.svv}%</span>
              </div>
              <input
                type="range"
                min={2}
                max={30}
                step={1}
                value={inputs.svv}
                onChange={(e) => setField('svv', Number(e.target.value))}
              />
            </div>
          </div>
          <div className="slider-help" style={{ marginTop: -4 }}>
            PPV y SVV definen la elastancia dinámica (E_adyn = PPV/SVV) y predicen respuesta a volumen solo en ritmo sinusal sin HIA ni disfunción VD.
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Tiempo Llenado Capilar (CRT)</label>
              <span className="val" style={{ color: inputs.crt > 3 ? 'var(--alert)' : 'var(--ok)' }}>
                {inputs.crt.toFixed(1)} s
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={8}
              step={0.2}
              value={inputs.crt}
              onChange={(e) => setField('crt', Number(e.target.value))}
            />
            <div className="slider-help">Meta clínica ≤ 3 s (ANDROMEDA-SHOCK-2): guía cuándo frenar o intensificar reanimación.</div>
          </div>

          <div className="eyebrow" style={{ marginTop: 6 }}>Confusores y Contexto Fisiológico</div>
          {(
            [
              ['htaCronica', 'HTA crónica conocida'],
              ['piaAlta', 'PIA ≥ 12 mmHg (HIA · invalida PLR/PPV)'],
              ['disfuncionVd', 'Disfunción VD / HTP (falso+ PPV)'],
              ['vexusCongestion', 'VExUS ≥ 2 / Pulmón B+ (intolerante)'],
              ['sinusalVmVt8', 'Ritmo sinusal + VM controlada Vt ≥ 8'],
            ] as const
          ).map(([key, label]) => (
            <label
              key={key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12.5,
                color: 'var(--ink-2)',
                cursor: 'pointer',
                padding: '3px 0',
              }}
            >
              <input
                type="checkbox"
                checked={inputs[key]}
                onChange={(e) => setField(key, e.target.checked)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        {/* Panel Derecho: KPIs + 4 SVG + Conducta ANDROMEDA-2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-label">PAM / PP</div>
              <div className="kpi-value">
                <span style={{ color: out.pam < 65 ? 'var(--alert)' : 'var(--ink)' }}>
                  {out.pam.toFixed(0)}
                </span>{' '}
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>/</span>{' '}
                <span style={{ color: ppColor }}>{out.pp}</span>
              </div>
              <div className="kpi-sub">Zona PP segura Ji 2026: 40–70 mmHg</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">DSI (FC / PAD)</div>
              <div className="kpi-value" style={{ color: out.dsi >= 2.2 ? 'var(--alert)' : 'var(--gag)' }}>
                {out.dsi.toFixed(2)}
              </div>
              <div className="kpi-sub">≥2,2 alerta mixta/vasoplejia (Paiva)</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">VNERi (Bitartrato)</div>
              <div className="kpi-value" style={{ color: vneriColor }}>
                {out.vneri !== null ? out.vneri.toFixed(2) : '—'}
              </div>
              <div className="kpi-sub">Nadir 6,7 · Crítico &lt;2,6 · Exceso &gt;10,8</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">MPP / DPP</div>
              <div className="kpi-value">
                <span style={{ color: out.mpp < 55 ? 'var(--alert)' : 'var(--hyal)' }}>
                  {out.mpp.toFixed(0)}
                </span>{' '}
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>/</span>{' '}
                <span style={{ color: out.dpp < 37 ? 'var(--prot)' : 'var(--ink)' }}>
                  {out.dpp.toFixed(0)}
                </span>
              </div>
              <div className="kpi-sub">MPP = PAM−PVC · DPP = PAD−PVC</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">E_adyn (PPV / SVV)</div>
              <div
                className="kpi-value"
                style={{ color: out.alertaDesteteNa ? 'var(--prot)' : 'var(--ok)' }}
              >
                {out.eadyn !== null ? out.eadyn.toFixed(2) : '—'}
              </div>
              <div className="kpi-sub">
                {out.alertaDesteteNa ? '<0,94 riesgo destete NA (Guinot)' : '≥0,94 tono acoplado'}
              </div>
            </div>
          </div>

          {/* Veredicto rápido de guardia */}
          <div
            className="verdict-banner"
            style={{
              border: `1px solid ${verdict.border}`,
              background: verdict.bg,
            }}
          >
            <div>
              <strong style={{ color: verdict.color }}>{verdict.title}:</strong>{' '}
              <span style={{ color: 'var(--ink-2)' }}>{verdict.detail}</span>
            </div>
          </div>

          {/* Grilla 2x2 de Gráficos SVG */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: 14 }}>
            {/* SVG A: Onda Arterial Windkessel */}
            <div className="panel-dark" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                A · Osciloscopio Windkessel (2 latidos)
              </div>
              <svg viewBox="0 0 380 180" style={{ width: '100%', height: 'auto' }}>
                <rect
                  x="28"
                  y={mapPressToY(50)}
                  width="342"
                  height={155 - mapPressToY(50)}
                  fill="rgba(255, 92, 122, 0.1)"
                />
                <line
                  x1="28"
                  y1={mapPressToY(50)}
                  x2="370"
                  y2={mapPressToY(50)}
                  stroke="#FF5C7A"
                  strokeDasharray="4 4"
                />
                <line
                  x1="28"
                  y1={mapPressToY(out.pam)}
                  x2="370"
                  y2={mapPressToY(out.pam)}
                  stroke="#E9B44C"
                  strokeDasharray="2 3"
                  opacity="0.7"
                />
                <path
                  d={waveformPath}
                  fill="none"
                  stroke={inputs.pad < 50 ? '#FF5C7A' : '#3FD8C8'}
                  strokeWidth="2.6"
                />
                <text x="32" y={mapPressToY(50) - 4} fill="#FF5C7A" fontSize="10" fontFamily="IBM Plex Mono">
                  Umbral PAD 50 mmHg (Ko 2026)
                </text>
                <text x="305" y={mapPressToY(inputs.pas) - 4} fill="#DEE9F5" fontSize="10" fontFamily="IBM Plex Mono">
                  PAS {inputs.pas}
                </text>
                <text x="305" y={mapPressToY(inputs.pad) + 12} fill="#3FD8C8" fontSize="10" fontFamily="IBM Plex Mono">
                  PAD {inputs.pad}
                </text>
              </svg>
            </div>

            {/* SVG B: Curva en J invertida VNERi */}
            <div className="panel-dark" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                B · Curva J invertida VNERi (Goury 2025)
              </div>
              <svg viewBox="0 0 380 180" style={{ width: '100%', height: 'auto' }}>
                <rect x="30" y="20" width={mapVneriToX(2.6) - 30} height="132" fill="rgba(255,92,122,0.12)" />
                <rect
                  x={mapVneriToX(2.6)}
                  y="20"
                  width={mapVneriToX(10.8) - mapVneriToX(2.6)}
                  height="132"
                  fill="rgba(63,216,200,0.08)"
                />
                <rect
                  x={mapVneriToX(10.8)}
                  y="20"
                  width={360 - mapVneriToX(10.8)}
                  height="132"
                  fill="rgba(233,180,76,0.1)"
                />
                <line x1={mapVneriToX(6.7)} y1="20" x2={mapVneriToX(6.7)} y2="152" stroke="#3FD8C8" strokeDasharray="3 3" />
                <path d={vneriCurvePts} fill="none" stroke="#9A87F5" strokeWidth="2.5" />
                {vneriClamped !== null && (
                  <g>
                    <circle
                      cx={mapVneriToX(vneriClamped)}
                      cy={vneriMarkerY}
                      r="6"
                      fill={vneriColor}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <text
                      x={Math.min(315, mapVneriToX(vneriClamped) + 8)}
                      y={Math.max(32, vneriMarkerY - 8)}
                      fill="#FFFFFF"
                      fontSize="10.5"
                      fontFamily="IBM Plex Mono"
                    >
                      {out.vneri?.toFixed(2)}
                    </text>
                  </g>
                )}
                <text x="34" y="168" fill="#FF5C7A" fontSize="10" fontFamily="IBM Plex Mono">
                  &lt;2,6 (56%)
                </text>
                <text x={mapVneriToX(6.7) - 32} y="168" fill="#3FD8C8" fontSize="10" fontFamily="IBM Plex Mono">
                  Nadir 6,7 (28%)
                </text>
                <text x={mapVneriToX(10.8)} y="168" fill="#E9B44C" fontSize="10" fontFamily="IBM Plex Mono">
                  &gt;10,8 (39%)
                </text>
              </svg>
            </div>

            {/* SVG C: Guyton + Frank-Starling */}
            <div className="panel-dark" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                C · Retorno Venoso Guyton + Punto z Magder
              </div>
              <svg viewBox="0 0 380 180" style={{ width: '100%', height: 'auto' }}>
                {/* Ejes: X = RAP (mmHg), Y = flujo (L/min) */}
                <line x1={gEsc.X0} y1={gEsc.Y0} x2={gEsc.X1} y2={gEsc.Y0} stroke="#2B4260" />
                <line x1={gEsc.X0} y1={gEsc.Y1} x2={gEsc.X0} y2={gEsc.Y0} stroke="#2B4260" />
                {guytonTicksRap.map((v) => (
                  <g key={v}>
                    <line x1={gEsc.x(v)} y1={gEsc.Y0} x2={gEsc.x(v)} y2={gEsc.Y0 + 4} stroke="#2B4260" />
                    <text
                      x={gEsc.x(v)}
                      y={gEsc.Y0 + 14}
                      fill="#6F8BA8"
                      fontSize="9"
                      fontFamily="IBM Plex Mono"
                      textAnchor="middle"
                    >
                      {v}
                    </text>
                  </g>
                ))}
                <text x={gEsc.X1} y={gEsc.Y0 + 14} fill="#6F8BA8" fontSize="9" fontFamily="IBM Plex Mono" textAnchor="end">
                  RAP mmHg
                </text>
                <text
                  x={gEsc.X0 - 6}
                  y={gEsc.Y1 + 4}
                  fill="#6F8BA8"
                  fontSize="9"
                  fontFamily="IBM Plex Mono"
                  textAnchor="end"
                >
                  L/min
                </text>

                {/* Curva de funcion cardiaca (Frank-Starling): pasa por el punto de trabajo */}
                <path d={guytonCardiacPath} fill="none" stroke="#4FA9F7" strokeWidth="2.5" />

                {/* Retorno venoso: rampa que corta flujo cero en la Pmsf, y meseta en cero */}
                <polyline
                  points={guyton.retornoVenoso
                    .map((p) => `${gEsc.x(p.rap).toFixed(1)},${gEsc.y(p.flujo).toFixed(1)}`)
                    .join(' ')}
                  fill="none"
                  stroke="#3FD8C8"
                  strokeWidth="2.3"
                />
                {/* Pmsf: donde el retorno venoso se hace cero */}
                <text
                  x={gEsc.x(guyton.retornoVenoso[1].rap)}
                  y={gEsc.Y0 - 6}
                  fill="#3FD8C8"
                  fontSize="9"
                  fontFamily="IBM Plex Mono"
                  textAnchor="middle"
                >
                  Pmsf
                </text>

                {/* Punto de trabajo: interseccion de ambas curvas */}
                <circle
                  cx={gEsc.x(guyton.puntoTrabajo.rap)}
                  cy={gEsc.y(guyton.puntoTrabajo.flujo)}
                  r="6"
                  fill={out.guytonPoints.overPlateau ? '#FF5C7A' : '#34D399'}
                  stroke="#FFF"
                  strokeWidth="2"
                />
                <text
                  x={Math.min(gEsc.x(guyton.puntoTrabajo.rap) + 9, 300)}
                  y={Math.max(gEsc.y(guyton.puntoTrabajo.flujo) - 8, gEsc.Y1 + 8)}
                  fill="#FFFFFF"
                  fontSize="10"
                  fontFamily="IBM Plex Mono"
                >
                  {guyton.puntoTrabajo.flujo.toFixed(1)} L/min
                </text>

                <text x={gEsc.X0} y="172" fill="#9DB1C8" fontSize="10" fontFamily="IBM Plex Mono">
                  PVC {inputs.pvc} mmHg · P_msf est. {out.guytonPoints.pmsf.toFixed(1)} mmHg
                </text>
                {out.guytonPoints.overPlateau && (
                  <text x="200" y={gEsc.Y1 + 2} fill="#FF5C7A" fontSize="10.5" fontFamily="IBM Plex Mono">
                    Meseta / Punto z: STOP fluidos
                  </text>
                )}
              </svg>
            </div>

            {/* D: Matriz Táctica 2x3 PAD x PP */}
            <div className="panel-dark" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 8 }}>
                D · Matriz Táctica PAD × Presión de Pulso
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr 1fr 1fr', gap: 6, fontSize: 11.5 }}>
                <div />
                <div className="font-mono" style={{ textAlign: 'center', color: 'var(--prot)' }}>
                  PP &lt; 40
                </div>
                <div className="font-mono" style={{ textAlign: 'center', color: 'var(--ok)' }}>
                  PP 40–70
                </div>
                <div className="font-mono" style={{ textAlign: 'center', color: 'var(--prot)' }}>
                  PP &gt; 70
                </div>

                {[
                  { label: 'PAD < 50', isLowPad: true },
                  { label: 'PAD ≥ 50', isLowPad: false },
                ].map((row) => (
                  <React.Fragment key={row.label}>
                    <div
                      className="font-mono"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: row.isLowPad ? 'var(--alert)' : 'var(--gag)',
                      }}
                    >
                      {row.label}
                    </div>
                    {(
                      [
                        ['bajo_vs', row.isLowPad ? 'Vasoplejia + Bajo VS' : 'Bajo VS aislado'],
                        ['segura', row.isLowPad ? 'Vasoplejia pura (NA)' : 'Zona equilibrada'],
                        ['rigidez_alta', row.isLowPad ? 'Rígido + Vasoplejia!' : 'Rigidez / Estrés >65a'],
                      ] as const
                    ).map(([ppZoneKey, text]) => {
                      const active =
                        (inputs.pad < 50) === row.isLowPad && out.ppZona === ppZoneKey;
                      return (
                        <div
                          key={ppZoneKey}
                          style={{
                            padding: '10px 6px',
                            borderRadius: 6,
                            textAlign: 'center',
                            border: active ? '1.5px solid var(--gag)' : '1px solid var(--line)',
                            background: active ? 'rgba(63, 216, 200, 0.16)' : 'var(--bg-2)',
                            color: active ? '#FFF' : 'var(--muted)',
                            fontWeight: active ? 600 : 400,
                          }}
                        >
                          {text}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Algoritmo ANDROMEDA-2 y Alertas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
            <div className="panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <HeartPulse size={16} color="#3FD8C8" />
                <span className="eyebrow" style={{ color: 'var(--gag)' }}>
                  Lectura didáctica · ANDROMEDA-SHOCK-2 &amp; fluido-tolerancia
                </span>
              </div>
              <p style={{ margin: '0 0 8px', fontSize: 12, color: 'var(--muted)' }}>
                Razonamiento del modelo para estudiar, no una indicación. Cifras y citas pendientes de verificación.
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-2)', fontSize: 13.5 }}>
                {out.andromedaSteps.map((step, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <ShieldAlert size={16} color="#FF5C7A" />
                <span className="eyebrow" style={{ color: 'var(--ink)' }}>
                  Alertas Activas y Confusores Mecánicos ({out.alerts.length})
                </span>
              </div>
              {out.alerts.length === 0 ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ok)', fontSize: 13.5 }}>
                  <CheckCircle2 size={16} /> Sin alertas críticas ni confusores mecánicos activos.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {out.alerts.map((al, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '8px 10px',
                        borderRadius: 8,
                        border: `1px solid ${
                          al.tone === 'red'
                            ? 'rgba(255,92,122,0.45)'
                            : al.tone === 'amber'
                              ? 'rgba(233,180,76,0.4)'
                              : al.tone === 'purple'
                                ? 'rgba(154,135,245,0.4)'
                                : 'rgba(63,216,200,0.4)'
                        }`,
                        background: 'var(--bg-2)',
                        fontSize: 12.5,
                      }}
                    >
                      <div style={{ fontWeight: 600, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <AlertTriangle size={13} /> {al.title}
                      </div>
                      <div style={{ color: 'var(--ink-2)', marginTop: 2 }}>{al.detail}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
