import React, { useMemo, useState } from 'react';
import { Activity, AlertTriangle, Droplets, Info, Scale, Sparkles } from 'lucide-react';
import {
  M03_HOTSPOTS,
  M03_PRESETS,
  calcDualAliIfc,
  simulateM03,
  type AlbUnit,
  type M03Inputs,
  type M03Outputs,
  type PcrUnit,
} from '../../engines/m03Engine';
import { GlycocalyxCanvasScene, type ActiveControlHint } from './GlycocalyxCanvasScene';

interface SliderMetaItem {
  key: keyof M03Inputs;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  decimals: number;
  whatIs: string;
  whenUp: string;
  whenDown: string;
}

const SLIDER_META: SliderMetaItem[] = [
  {
    key: 'inflamacion',
    label: 'Tormenta Inflamatoria (TNF-α / HPA-1 / MMPs)',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
    decimals: 0,
    whatIs: 'Carga de citoquinas y enzimas sheddasas que degradan las cadenas de heparán sulfato e hialuronano.',
    whenUp: '↑ Sube: sheddasas (en rosa/coral) mutilan el glicocálix, baja σ y se adhieren neutrófilos.',
    whenDown: '↓ Baja: se preserva la malla densa (ESL), σ alto (~0,85) y mínima adhesión leucocitaria.',
  },
  {
    key: 'pc',
    label: 'Presión Hidrostática Capilar (P_c)',
    unit: ' mmHg',
    min: 10,
    max: 45,
    step: 1,
    decimals: 0,
    whatIs: 'Fuerza mecánica que empuja agua desde el lumen capilar al intersticio (hipervolemia o congestión venosa).',
    whenUp: '↑ Sube: crecen las flechas verticales (ámbar/rojo), se abre VE-cadherina y dispara J_v/edema.',
    whenDown: '↓ Baja: cae el empuje hidrostático y disminuye la fuga paracelular de agua.',
  },
  {
    key: 'shearStress',
    label: 'Shear Stress Laminar (τ_w)',
    unit: ' dyn/cm²',
    min: 1,
    max: 25,
    step: 0.5,
    decimals: 1,
    whatIs: 'Roce tangencial del flujo laminar Poiseuille sobre el glicocálix mecanosensor.',
    whenUp: '↑ Sube (10–20 óptimo): flujo rápido, cadenas inclinadas y liberación verde protectora de NO (eNOS).',
    whenDown: '↓ Baja (<6 estasis): flujo lento/oscilante, cae eNOS/NO y favorece margen leucocitario.',
  },
  {
    key: 'albumina',
    label: 'Albúmina Sérica',
    unit: ' g/dL',
    min: 1.2,
    max: 4.8,
    step: 0.1,
    decimals: 1,
    whatIs: 'Proteína oncótica principal (π_p) y estabilizadora electrostática dentro de los poros del glicocálix.',
    whenUp: '↑ Sube: más esferas doradas atrapadas en la malla, mayor π_p y defensa frente a la filtración.',
    whenDown: '↓ Baja: menos esferas protectoras, caen π_p y σ, y aumentan ALI/IFC y TERA.',
  },
  {
    key: 'pcr',
    label: 'PCR Sérica (inflamación sistémica)',
    unit: ' mg/L',
    min: 2,
    max: 400,
    step: 2,
    decimals: 0,
    whatIs: 'Reactante hepático IL-6 que junto a la albúmina cuantifica el riesgo clínico ALI e IFC.',
    whenUp: '↑ Sube: eleva ALI (García Uribe) e IFC (Palacios) al instante; no produce shedding directo aislado.',
    whenDown: '↓ Baja: desciende el índice PCR/Albúmina y el riesgo sistémico en la calculadora.',
  },
];

function getSliderTone(key: keyof M03Inputs, value: number): 'green' | 'amber' | 'red' {
  switch (key) {
    case 'inflamacion':
      return value < 20 ? 'green' : value < 55 ? 'amber' : 'red';
    case 'pc':
      return value < 24 ? 'green' : value < 30 ? 'amber' : 'red';
    case 'shearStress':
      return value >= 10 && value <= 20 ? 'green' : value >= 6 && value <= 22 ? 'amber' : 'red';
    case 'albumina':
      return value >= 3.2 ? 'green' : value >= 2.2 ? 'amber' : 'red';
    case 'pcr':
      return value < 30 ? 'green' : value < 120 ? 'amber' : 'red';
  }
}

function toneCssColor(tone: 'green' | 'amber' | 'red'): string {
  if (tone === 'green') return 'var(--gag)';
  if (tone === 'amber') return 'var(--prot)';
  return 'var(--alert)';
}

function buildControlHint(key: keyof M03Inputs, inputs: M03Inputs, out: M03Outputs): ActiveControlHint {
  switch (key) {
    case 'inflamacion':
      return {
        label: `Tormenta Inflamatoria (${inputs.inflamacion}%)`,
        detail: `Espesor ESL ${out.espesorUm.toFixed(2)} µm (I_gc ${(out.igc * 100).toFixed(0)}%), σ ${out.sigma.toFixed(2)} — más sheddasas mordiendo cadenas e ICAM-1 expuesta.`,
      };
    case 'pc':
      return {
        label: `Presión Hidrostática P_c (${inputs.pc} mmHg)`,
        detail: `Flechas verticales hacia la bicapa · filtración neta J_v ${out.jv.toFixed(1)} · TERA ${out.tera.toFixed(1)}%/h.`,
      };
    case 'shearStress':
      return {
        label: `Shear Stress τ_w (${inputs.shearStress.toFixed(1)} dyn/cm²)`,
        detail: `${inputs.shearStress < 6 ? 'Estasis sanguínea / riesgo de marginación' : 'Flujo laminar Poiseuille'} · inclinación GAG y eNOS/NO ${out.eNosPct.toFixed(0)}%.`,
      };
    case 'albumina':
      return {
        label: `Albúmina Sérica (${inputs.albumina.toFixed(1)} g/dL)`,
        detail: `Densidad de esferas doradas en la malla ESL · π_p ${out.piP.toFixed(1)} vs π_sg ${out.piSg.toFixed(1)} mmHg · ALI ${out.aliDirecto.toFixed(2)}.`,
      };
    case 'pcr':
      return {
        label: `PCR Sérica (${inputs.pcr} mg/L)`,
        detail: `Sincronizada con la Calculadora Dual: ALI ${out.aliDirecto.toFixed(2)} · IFC ${out.ifcPalacios.toFixed(1)} (biomarcador sistémico).`,
      };
  }
}

export const GlycocalyxLab: React.FC = () => {
  const [inputs, setInputs] = useState<M03Inputs>(M03_PRESETS[0].inputs);
  const [activePresetId, setActivePresetId] = useState<string>(M03_PRESETS[0].id);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>('sindecano');
  const [inspectorMode, setInspectorMode] = useState<'base' | 'frontera'>('frontera');
  const [activeControlKey, setActiveControlKey] = useState<keyof M03Inputs>('inflamacion');

  const [calcPcr, setCalcPcr] = useState<number>(M03_PRESETS[0].inputs.pcr);
  const [calcPcrUnit, setCalcPcrUnit] = useState<PcrUnit>('mg/L');
  const [calcAlb, setCalcAlb] = useState<number>(M03_PRESETS[0].inputs.albumina);
  const [calcAlbUnit, setCalcAlbUnit] = useState<AlbUnit>('g/dL');

  const out = useMemo(() => simulateM03(inputs), [inputs]);
  const dualResult = useMemo(
    () => calcDualAliIfc(calcPcr, calcPcrUnit, calcAlb, calcAlbUnit),
    [calcPcr, calcPcrUnit, calcAlb, calcAlbUnit]
  );

  const selectedHotspot = useMemo(
    () => M03_HOTSPOTS.find((h) => h.id === selectedHotspotId) || M03_HOTSPOTS[0],
    [selectedHotspotId]
  );

  const activeControlHint = useMemo(
    () => buildControlHint(activeControlKey, inputs, out),
    [activeControlKey, inputs, out]
  );

  const updateInput = <K extends keyof M03Inputs>(key: K, val: M03Inputs[K]) => {
    setActivePresetId('custom');
    setActiveControlKey(key);
    setInputs((prev) => ({ ...prev, [key]: val }));
    if (key === 'pcr') {
      setCalcPcr(Number(val));
      setCalcPcrUnit('mg/L');
    } else if (key === 'albumina') {
      setCalcAlb(Number(val));
      setCalcAlbUnit('g/dL');
    }
  };

  const applyPreset = (id: string) => {
    const p = M03_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setActivePresetId(p.id);
    setInputs(p.inputs);
    setCalcPcr(p.inputs.pcr);
    setCalcPcrUnit('mg/L');
    setCalcAlb(p.inputs.albumina);
    setCalcAlbUnit('g/dL');
  };

  const activePreset = useMemo(
    () => M03_PRESETS.find((p) => p.id === activePresetId) || null,
    [activePresetId]
  );

  const statusBadgeClass =
    out.estadoBarrera === 'Intacta'
      ? 'badge-green'
      : out.estadoBarrera === 'Shedding moderado'
        ? 'badge-amber'
        : 'badge-red';

  // Balanza de fuerzas de Starling revisada (P_i = -2 mmHg)
  const hydroPush = inputs.pc + 2;
  const oncoBrake = out.sigma * (out.piP - out.piSg);
  const netPressure = hydroPush - oncoBrake;
  const pushWidthPct = Math.min(100, Math.max(8, (hydroPush / 50) * 100));
  const brakeWidthPct = Math.min(100, Math.max(6, (oncoBrake / 50) * 100));
  const starlingVerdict =
    netPressure > 18
      ? { text: 'Fuga neta intensa → edema intersticial', tone: 'red' as const }
      : netPressure > 7
        ? { text: 'Filtración aumentada (exige drenaje linfático)', tone: 'amber' as const }
        : { text: 'Equilibrio Starling basal (sin reabsorción venosa)', tone: 'green' as const };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Barra de Presets */}
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
            <div className="eyebrow">Simulador Interactivo M03 · Endotelio, Glicocálix y Starling Revisado</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              Laboratorio Endotelial Continuo, Starling Revisado y Calculadora Dual ALI/IFC
            </h2>
          </div>
          <span className={`badge ${statusBadgeClass}`}>{out.estadoBarrera}</span>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {M03_PRESETS.map((p) => (
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
            : 'Escenario personalizado — mové cualquier variable y observá su efecto inmediato en la animación y la balanza.'}
        </div>
      </div>

      {/* Grilla principal: Controles + Simulador Biofísico 60 FPS / Inspector */}
      <div className="lab-grid">
        {/* Panel Izquierdo de Sliders + Calculadora ALI/IFC */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="panel">
            <div className="eyebrow" style={{ marginBottom: 6 }}>Variables Hemodinámico-Endoteliales</div>

            {SLIDER_META.map((item) => {
              const rawVal = inputs[item.key];
              const tone = getSliderTone(item.key, rawVal);
              const isFocused = activeControlKey === item.key;
              return (
                <div
                  key={item.key}
                  className="slider-control"
                  style={{
                    background: isFocused ? 'rgba(63, 216, 200, 0.04)' : undefined,
                    borderRadius: 6,
                    padding: '6px 6px 8px',
                  }}
                >
                  <div className="slider-head">
                    <label>{item.label}</label>
                    <span className="val" style={{ color: toneCssColor(tone) }}>
                      {rawVal.toFixed(item.decimals)}
                      {item.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={item.step}
                    value={rawVal}
                    onFocus={() => setActiveControlKey(item.key)}
                    onChange={(e) => updateInput(item.key, Number(e.target.value))}
                  />
                  <div style={{ fontSize: 11.2, lineHeight: 1.38, color: 'var(--muted)' }}>
                    <div style={{ color: 'var(--ink-2)', marginBottom: 2 }}>{item.whatIs}</div>
                    <div>{item.whenUp}</div>
                    <div>{item.whenDown}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calculadora Dual ALI / IFC */}
          <div className="panel" style={{ borderColor: 'rgba(233, 180, 76, 0.35)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
              <AlertTriangle size={15} color="#E9B44C" />
              <span className="eyebrow" style={{ color: '#E9B44C' }}>
                Calculadora Dual Anti-Trampa ×10 / ×100
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 92px', gap: 8, marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-2)', marginBottom: 3 }}>PCR</div>
                <input
                  type="number"
                  min={0}
                  step={0.5}
                  className="icu-input"
                  value={calcPcr}
                  onChange={(e) => setCalcPcr(Number(e.target.value) || 0)}
                />
              </div>
              <div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-2)', marginBottom: 3 }}>Unidad</div>
                <select
                  className="icu-select"
                  value={calcPcrUnit}
                  onChange={(e) => setCalcPcrUnit(e.target.value as PcrUnit)}
                >
                  <option value="mg/L">mg/L</option>
                  <option value="mg/dL">mg/dL</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 92px', gap: 8, marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-2)', marginBottom: 3 }}>Albúmina</div>
                <input
                  type="number"
                  min={0.1}
                  step={0.1}
                  className="icu-input"
                  value={calcAlb}
                  onChange={(e) => setCalcAlb(Number(e.target.value) || 0.1)}
                />
              </div>
              <div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-2)', marginBottom: 3 }}>Unidad</div>
                <select
                  className="icu-select"
                  value={calcAlbUnit}
                  onChange={(e) => setCalcAlbUnit(e.target.value as AlbUnit)}
                >
                  <option value="g/L">g/L</option>
                  <option value="g/dL">g/dL</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div className="kpi-card">
                <div className="kpi-label">ALI (García Uribe)</div>
                <div className="kpi-value" style={{ color: 'var(--hyal)' }}>
                  {dualResult.aliDirecto.toFixed(2)}
                </div>
                <div className="kpi-sub">Corte D3 ≥ 7,41</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">IFC (Palacios)</div>
                <div className="kpi-value" style={{ color: 'var(--prot)' }}>
                  {dualResult.ifcPalacios.toFixed(1)}
                </div>
                <div className="kpi-sub">Cordemans &gt;61 · ≥85,55</div>
              </div>
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 12,
                color: 'var(--ink-2)',
                background: 'var(--bg-2)',
                padding: '8px 10px',
                borderRadius: 8,
                border: '1px solid var(--line-soft)',
              }}
            >
              <strong style={{ color: 'var(--ink)' }}>{dualResult.riesgoPalacios}.</strong>{' '}
              {dualResult.riesgoGarciaUribe}.
              <div style={{ marginTop: 4, color: 'var(--muted)' }}>{dualResult.notaEscala}</div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: KPIs + Balanza Starling + Canvas 60 FPS + Inspector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-label">Integridad Glicocálix (I_gc)</div>
              <div
                className="kpi-value"
                style={{
                  color:
                    out.igc >= 0.78 ? 'var(--gag)' : out.igc >= 0.45 ? 'var(--prot)' : 'var(--alert)',
                }}
              >
                {(out.igc * 100).toFixed(0)}%
              </div>
              <div className="kpi-sub">Espesor est.: {out.espesorUm.toFixed(2)} µm</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Coef. Reflexión (σ)</div>
              <div className="kpi-value" style={{ color: out.sigma > 0.55 ? 'var(--gag)' : 'var(--alert)' }}>
                {out.sigma.toFixed(2)}
              </div>
              <div className="kpi-sub">Tamiz oncótico (sano ~0,85)</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Gradiente (π_p − π_sg)</div>
              <div className="kpi-value" style={{ color: 'var(--prot)' }}>
                {(out.piP - out.piSg).toFixed(1)}
              </div>
              <div className="kpi-sub">
                π_p {out.piP.toFixed(1)} · π_sg {out.piSg.toFixed(1)} mmHg
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Filtración Neta (J_v)</div>
              <div className="kpi-value" style={{ color: out.jv > 45 ? 'var(--alert)' : 'var(--hyal)' }}>
                {out.jv.toFixed(1)}
              </div>
              <div className="kpi-sub">L_pS rel: ×{out.lpSrel.toFixed(2)} · eNOS {out.eNosPct.toFixed(0)}%</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">TERA albúmina est.</div>
              <div className="kpi-value" style={{ color: out.tera > 11 ? 'var(--alert)' : 'var(--ink)' }}>
                {out.tera.toFixed(1)}%/h
              </div>
              <div className="kpi-sub">Normal ~5%/h · Sepsis &gt;15%/h</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">ALI / IFC (Sistema)</div>
              <div
                className="kpi-value"
                style={{
                  color:
                    out.ifcPalacios >= 85.55
                      ? 'var(--alert)'
                      : out.ifcPalacios > 61
                        ? 'var(--prot)'
                        : 'var(--gag)',
                }}
              >
                {out.aliDirecto.toFixed(1)} / {out.ifcPalacios.toFixed(0)}
              </div>
              <div className="kpi-sub">PCR {inputs.pcr} mg/L · Alb {inputs.albumina.toFixed(1)} g/dL</div>
            </div>
          </div>

          {/* Balanza de Fuerzas de Starling Revisada */}
          <div className="panel" style={{ padding: '12px 16px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <Scale size={15} color="#3FD8C8" />
                <span className="eyebrow">Balanza de Starling Revisada (J_v = L_pS · [(P_c − P_i) − σ·(π_p − π_sg)])</span>
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: 'IBM Plex Mono',
                  color: toneCssColor(starlingVerdict.tone),
                  fontWeight: 600,
                }}
              >
                Presión neta: {netPressure >= 0 ? `+${netPressure.toFixed(1)}` : netPressure.toFixed(1)} mmHg · {starlingVerdict.text}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, marginBottom: 4 }}>
                  <span style={{ color: 'var(--ink-2)' }}>Empuje Hidrostático (P_c − P_i)</span>
                  <strong style={{ fontFamily: 'IBM Plex Mono', color: '#FF5C7A' }}>
                    {hydroPush.toFixed(1)} mmHg
                  </strong>
                </div>
                <div style={{ height: 8, borderRadius: 99, background: 'var(--bg-2)', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${pushWidthPct}%`,
                      background: 'linear-gradient(90deg, #4FA9F7, #FF5C7A)',
                      transition: 'width 140ms ease-out',
                    }}
                  />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, marginBottom: 4 }}>
                  <span style={{ color: 'var(--ink-2)' }}>Freno Oncótico ESL σ·(π_p − π_sg)</span>
                  <strong style={{ fontFamily: 'IBM Plex Mono', color: '#3FD8C8' }}>
                    {oncoBrake.toFixed(1)} mmHg
                  </strong>
                </div>
                <div style={{ height: 8, borderRadius: 99, background: 'var(--bg-2)', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${brakeWidthPct}%`,
                      background: 'linear-gradient(90deg, #3FD8C8, #E9B44C)',
                      transition: 'width 140ms ease-out',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <GlycocalyxCanvasScene
            inputs={inputs}
            out={out}
            selectedHotspotId={selectedHotspotId}
            onSelectHotspot={setSelectedHotspotId}
            activeControlHint={activeControlHint}
          />

          {/* Inspector Dual del Hotspot Seleccionado */}
          <div className="panel">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 10,
                marginBottom: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Info size={16} color="#3FD8C8" />
                <h3 className="font-display" style={{ margin: 0, fontSize: 17 }}>
                  {selectedHotspot.nombre}
                </h3>
              </div>

              <div className="pill-switch">
                <button
                  type="button"
                  data-active={inspectorMode === 'base'}
                  onClick={() => setInspectorMode('base')}
                >
                  <Droplets size={13} /> Capa Base
                </button>
                <button
                  type="button"
                  data-tone="purple"
                  data-active={inspectorMode === 'frontera'}
                  onClick={() => setInspectorMode('frontera')}
                >
                  <Sparkles size={13} /> Frontera 2025–2026
                </button>
              </div>
            </div>

            <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14 }}>
              {inspectorMode === 'base' ? selectedHotspot.capaBase : selectedHotspot.capaFrontera}
            </p>
            <div
              style={{
                marginTop: 10,
                paddingTop: 10,
                borderTop: '1px solid var(--line-soft)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12,
                color: 'var(--muted)',
              }}
            >
              <Activity size={14} />
              <span>
                Auditoría integrada: Daniyarova 2025 (OR SYN-1 vs Endocan) · Wang 2026 · CLOVERS 2025 · EDGE &amp; Beltrán 2026 · ARISS 2026.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
