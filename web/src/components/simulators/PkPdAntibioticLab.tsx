import React, { useMemo, useState } from 'react';
import { AlertTriangle, Beaker, CheckCircle2, ShieldAlert } from 'lucide-react';
import {
  DRUG_CONFIGS,
  M09_PRESETS,
  simulateM09,
  type AdsorptionFilter,
  type AntibioticId,
  type InfusionMode,
  type M09Inputs,
  type MeropenemBagPolicy,
} from '../../engines/m09Engine';

export const PkPdAntibioticLab: React.FC = () => {
  const [inputs, setInputs] = useState<M09Inputs>(M09_PRESETS[0].inputs);
  const [activePresetId, setActivePresetId] = useState<string>(M09_PRESETS[0].id);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const drugCfg = DRUG_CONFIGS[inputs.farmaco];
  const out = useMemo(() => simulateM09(inputs), [inputs]);

  const setField = <K extends keyof M09Inputs>(key: K, val: M09Inputs[K]) => {
    setActivePresetId('custom');
    setInputs((prev) => {
      if (key === 'farmaco') {
        const nextDrug = DRUG_CONFIGS[val as AntibioticId];
        return {
          ...prev,
          farmaco: val as AntibioticId,
          dosisCargaMg:
            nextDrug.id === 'vancomicina'
              ? Math.min(3000, Math.round((25 * prev.pesoKg) / 250) * 250)
              : nextDrug.defaultLoadMg,
          dosisDiariaMg: nextDrug.defaultDailyMg,
        };
      }
      return { ...prev, [key]: val };
    });
  };

  const applyPreset = (id: string) => {
    const p = M09_PRESETS.find((x) => x.id === id);
    if (!p) return;
    setActivePresetId(p.id);
    setInputs(p.inputs);
  };

  // Escala gráfica SVG compartimental 0–48 h
  const svgW = 840;
  const svgH = 330;
  const padL = 56;
  const padR = 24;
  const padT = 26;
  const padB = 42;
  const plotW = svgW - padL - padR;
  const plotH = svgH - padT - padB;

  const yMax = useMemo(() => {
    const maxCurve = out.points.reduce(
      (acc, p) => Math.max(acc, p.cFreeMain, p.cFreeRefBolus),
      0
    );
    const toxicFreeRef =
      drugCfg.toxicTroughTotalMgL !== null ? drugCfg.toxicTroughTotalMgL * out.fu : 0;
    return Math.max(4 * inputs.micMgL * 1.4, maxCurve * 1.12, toxicFreeRef * 1.25, 24);
  }, [out.points, out.fu, inputs.micMgL, drugCfg.toxicTroughTotalMgL]);

  const toX = (h: number) => padL + (h / 48) * plotW;
  const toY = (mgL: number) => padT + plotH - (Math.min(yMax, Math.max(0, mgL)) / yMax) * plotH;

  const mainPath = useMemo(
    () =>
      out.points
        .map((p, i) => `${i === 0 ? 'M' : 'L'} ${toX(p.tHour).toFixed(1)} ${toY(p.cFreeMain).toFixed(1)}`)
        .join(' '),
    [out.points, yMax]
  );

  const refPath = useMemo(
    () =>
      out.points
        .map((p, i) => `${i === 0 ? 'M' : 'L'} ${toX(p.tHour).toFixed(1)} ${toY(p.cFreeRefBolus).toFixed(1)}`)
        .join(' '),
    [out.points, yMax]
  );

  const mainAreaPath = useMemo(() => {
    if (out.points.length === 0) return '';
    return `${mainPath} L ${toX(48).toFixed(1)} ${toY(0).toFixed(1)} L ${toX(0).toFixed(1)} ${toY(0).toFixed(1)} Z`;
  }, [mainPath, yMax]);

  const hoveredPoint = hoverIdx !== null ? out.points[hoverIdx] : null;
  const activePreset = useMemo(
    () => M09_PRESETS.find((x) => x.id === activePresetId) || null,
    [activePresetId]
  );

  const toxicFreeThreshold =
    drugCfg.toxicTroughTotalMgL !== null ? drugCfg.toxicTroughTotalMgL * out.fu : null;

  const pkVerdict = useMemo(() => {
    if (drugCfg.toxicTroughTotalMgL !== null && out.troughTotal48h > drugCfg.toxicTroughTotalMgL) {
      return {
        border: 'rgba(255, 92, 122, 0.5)',
        bg: 'rgba(255, 92, 122, 0.08)',
        color: 'var(--alert)',
        title: `Alerta de acumulación y toxicidad (${drugCfg.nombre})`,
        detail: `Valle total a las 48 h en ${out.troughTotal48h.toFixed(1)} mg/L (supera el umbral ${drugCfg.toxicTroughTotalMgL} mg/L): ajustá mantenimiento tras las primeras 48 h.`,
      };
    }
    if (out.pctFt4xMic_24_48 >= 99) {
      return {
        border: 'rgba(52, 211, 153, 0.45)',
        bg: 'rgba(52, 211, 153, 0.07)',
        color: 'var(--ok)',
        title: 'Meta PK/PD alcanzada (≥99% fT > 4×MIC en 24–48 h)',
        detail: `Esquema óptimo frente a MIC ${inputs.micMgL} mg/L con dosis de carga ${inputs.conCarga ? 'activa' : 'omitida'}.`,
      };
    }
    if (out.pctFt4xMic_24_48 >= 70) {
      return {
        border: 'rgba(233, 180, 76, 0.5)',
        bg: 'rgba(233, 180, 76, 0.08)',
        color: 'var(--prot)',
        title: `Cobertura subóptima (${out.pctFt4xMic_24_48.toFixed(0)}% fT > 4×MIC en 24–48 h)`,
        detail: 'Evaluá prolongar la infusión (3–4 h o continua 24 h) o aumentar la dosis diaria si el paciente tiene ARC.',
      };
    }
    return {
      border: 'rgba(255, 92, 122, 0.5)',
      bg: 'rgba(255, 92, 122, 0.08)',
      color: 'var(--alert)',
      title: `Subdosificación crítica (${out.pctFt4xMic_24_48.toFixed(0)}% fT > 4×MIC)`,
      detail: 'Concentración libre insuficiente frente a la MIC elegida: alto riesgo de falla clínica y selección resistente.',
    };
  }, [drugCfg.nombre, drugCfg.toxicTroughTotalMgL, inputs.conCarga, inputs.micMgL, out.pctFt4xMic_24_48, out.troughTotal48h]);

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
            <div className="eyebrow">Simulador Interactivo M09 · Farmacocinética y Farmacodinamia (PK/PD 0–48 h)</div>
            <h2 className="font-display" style={{ margin: '3px 0 0', fontSize: 20 }}>
              Curvas C_libre(t) en Sepsis, ARC (Ulldemolins 2026), LRA &lt;48 h y CKRT
            </h2>
          </div>
          <span className="badge badge-cyan">{drugCfg.nombre}</span>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {M09_PRESETS.map((p) => (
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
            : 'Escenario personalizado — compará el esquema elegido (cian) frente al bolo estándar sin carga (línea punteada).'}
        </div>
      </div>

      <div className="lab-grid">
        {/* Panel Controles */}
        <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="eyebrow">Parámetros del Antimicrobiano y Paciente</div>

          <div className="slider-control">
            <label style={{ fontSize: 12, color: 'var(--ink-2)', marginBottom: 3 }}>Fármaco</label>
            <select
              className="icu-select"
              value={inputs.farmaco}
              onChange={(e) => setField('farmaco', e.target.value as AntibioticId)}
            >
              {(Object.keys(DRUG_CONFIGS) as AntibioticId[]).map((id) => (
                <option key={id} value={id}>
                  {DRUG_CONFIGS[id].nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="slider-control">
            <label style={{ fontSize: 12, color: 'var(--ink-2)', marginBottom: 3 }}>
              Modalidad de Administración
            </label>
            <select
              className="icu-select"
              value={inputs.modalidad}
              onChange={(e) => setField('modalidad', e.target.value as InfusionMode)}
            >
              <option value="bolo_30m">Bolo intermitente (30 min)</option>
              <option value="extendida_3h">Infusión extendida (3 h)</option>
              <option value="extendida_4h">Infusión extendida (4 h)</option>
              <option value="continua_24h">Infusión continua 24 h (BLING III)</option>
            </select>
          </div>

          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12.5,
              color: 'var(--ink)',
              padding: '6px 0',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              checked={inputs.conCarga}
              onChange={(e) => setField('conCarga', e.target.checked)}
            />
            <span>Administrar Dosis de Carga inicial (D = C_target × V_d)</span>
          </label>

          {inputs.conCarga && (
            <div className="slider-control">
              <div className="slider-head">
                <label>Dosis de carga</label>
                <span className="val">{inputs.dosisCargaMg} mg</span>
              </div>
              <input
                type="range"
                min={500}
                max={4500}
                step={250}
                value={inputs.dosisCargaMg}
                onChange={(e) => setField('dosisCargaMg', Number(e.target.value))}
              />
              <div className="slider-help">Compensa la expansión del V_d en las primeras horas y no depende del clearence renal.</div>
            </div>
          )}

          <div className="slider-control">
            <div className="slider-head">
              <label>Dosis diaria mantenimiento</label>
              <span className="val">{(inputs.dosisDiariaMg / 1000).toFixed(2)} g/día</span>
            </div>
            <input
              type="range"
              min={drugCfg.minDailyMg}
              max={drugCfg.maxDailyMg}
              step={drugCfg.stepDailyMg}
              value={inputs.dosisDiariaMg}
              onChange={(e) => setField('dosisDiariaMg', Number(e.target.value))}
            />
            <div className="slider-help">Sube el nivel meseta C_libre(t) en 24–48 h; vigilá acumulación si cae el filtrado renal.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Aclaramiento renal real (uCLcr 8 h)</label>
              <span
                className="val"
                style={{
                  color:
                    inputs.uClcrMlMin > 130
                      ? 'var(--prot)'
                      : inputs.uClcrMlMin <= 40
                        ? 'var(--hyal)'
                        : 'var(--gag)',
                }}
              >
                {inputs.uClcrMlMin} mL/min
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={220}
              step={5}
              value={inputs.uClcrMlMin}
              onChange={(e) => setField('uClcrMlMin', Number(e.target.value))}
            />
            <div className="slider-help">&gt;130 mL/min = aclaramiento renal aumentado (ARC): barre β-lactámicos y exige infusión extendida/continua.</div>
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Peso corporal real</label>
              <span className="val">{inputs.pesoKg} kg</span>
            </div>
            <input
              type="range"
              min={45}
              max={140}
              step={1}
              value={inputs.pesoKg}
              onChange={(e) => setField('pesoKg', Number(e.target.value))}
            />
          </div>

          <div className="slider-control">
            <div className="slider-head">
              <label>Efluente CKRT</label>
              <span className="val">{inputs.ckrtEfluenteMlKgH} mL/kg/h</span>
            </div>
            <input
              type="range"
              min={0}
              max={45}
              step={5}
              value={inputs.ckrtEfluenteMlKgH}
              onChange={(e) => setField('ckrtEfluenteMlKgH', Number(e.target.value))}
            />
            <div className="slider-help">Aumenta la depuración extracorpórea de la fracción libre (especialmente &gt;25 mL/kg/h).</div>
          </div>

          <div className="slider-control">
            <label style={{ fontSize: 12, color: 'var(--ink-2)', marginBottom: 3 }}>
              Adsorción en membrana / hemoperfusión
            </label>
            <select
              className="icu-select"
              value={inputs.adsorcion}
              onChange={(e) => setField('adsorcion', e.target.value as AdsorptionFilter)}
            >
              <option value="ninguna">Membrana estándar (sin adsorción extra)</option>
              <option value="oxiris">AN69 / oXiris (+10% CL)</option>
              <option value="cytosorb_pmx">CytoSorb / PMX (+25% CL)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div className="slider-control">
              <div className="slider-head">
                <label>Albúmina</label>
                <span className="val">{inputs.albuminaGdL.toFixed(1)} g/dL</span>
              </div>
              <input
                type="range"
                min={1.2}
                max={4.5}
                step={0.1}
                value={inputs.albuminaGdL}
                onChange={(e) => setField('albuminaGdL', Number(e.target.value))}
              />
            </div>

            <div className="slider-control">
              <label style={{ fontSize: 12, color: 'var(--ink-2)', marginBottom: 3 }}>MIC (mg/L)</label>
              <select
                className="icu-select"
                value={inputs.micMgL}
                onChange={(e) => setField('micMgL', Number(e.target.value))}
              >
                {[0.25, 0.5, 1, 2, 4, 8, 16].map((m) => (
                  <option key={m} value={m}>
                    {m} mg/L
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="slider-help" style={{ marginTop: -4 }}>
            Hipoalbuminemia aumenta la fracción libre f_u (clave en cefazolina/ceftriaxona); subir MIC exige 4×MIC más alto.
          </div>

          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12.5,
              color: 'var(--ink-2)',
              cursor: 'pointer',
              padding: '4px 0',
            }}
          >
            <input
              type="checkbox"
              checked={inputs.sepsisVdExp}
              onChange={(e) => setField('sepsisVdExp', e.target.checked)}
            />
            <span>Sepsis aguda: expansión V_d +35% por fuga capilar</span>
          </label>

          {inputs.farmaco === 'meropenem' && inputs.modalidad === 'continua_24h' && (
            <div className="slider-control">
              <label style={{ fontSize: 12, color: 'var(--prot)', marginBottom: 3 }}>
                Estabilidad bolsa Meropenem (&gt;25 °C)
              </label>
              <select
                className="icu-select"
                value={inputs.bolsaMeropenem}
                onChange={(e) => setField('bolsaMeropenem', e.target.value as MeropenemBagPolicy)}
              >
                <option value="cambio_6_8h">Recambio cada 6–8 h (potencia intacta)</option>
                <option value="unica_24h">Bolsa única 24 h (degradación térmica &gt;10%)</option>
              </select>
            </div>
          )}
        </div>

        {/* Columna Derecha: KPIs + Gráfico 48h + Alertas + Malbrán */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-label">% fT &gt; 4×MIC (24–48 h)</div>
              <div
                className="kpi-value"
                style={{ color: out.pctFt4xMic_24_48 >= 99 ? 'var(--ok)' : out.pctFt4xMic_24_48 >= 70 ? 'var(--prot)' : 'var(--alert)' }}
              >
                {out.pctFt4xMic_24_48.toFixed(0)}%
              </div>
              <div className="kpi-sub">
                0–24 h: {out.pctFt4xMic_0_24.toFixed(0)}% vs Bolo ref {out.pctFt4xMic_RefBolus_0_24.toFixed(0)}%
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">% fT &gt; 1×MIC (24–48 h)</div>
              <div className="kpi-value" style={{ color: out.pctFt1xMic_24_48 >= 99 ? 'var(--gag)' : 'var(--alert)' }}>
                {out.pctFt1xMic_24_48.toFixed(0)}%
              </div>
              <div className="kpi-sub">0–24 h: {out.pctFt1xMic_0_24.toFixed(0)}%</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">AUC₂₄₋₄₈ / MIC (total)</div>
              <div className="kpi-value" style={{ color: 'var(--hyal)' }}>
                {out.auc48OverMic.toFixed(0)}
              </div>
              <div className="kpi-sub">0–24 h: {out.auc24OverMic.toFixed(0)} · meta Vanco 400–600</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Valle 48 h (Total / Libre)</div>
              <div
                className="kpi-value"
                style={{
                  color:
                    drugCfg.toxicTroughTotalMgL !== null && out.troughTotal48h > drugCfg.toxicTroughTotalMgL
                      ? 'var(--alert)'
                      : 'var(--ink)',
                }}
              >
                {out.troughTotal48h.toFixed(1)} <span style={{ fontSize: 13 }}>/ {out.troughFree48h.toFixed(1)}</span>
              </div>
              <div className="kpi-sub">mg/L · Pico libre {out.peakFree.toFixed(1)} mg/L</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Parámetros PK reales</div>
              <div className="kpi-value" style={{ fontSize: 17 }}>
                CL {out.clTotalLH.toFixed(1)} L/h
              </div>
              <div className="kpi-sub">
                V_d {out.vdL.toFixed(1)} L · f_u {(out.fu * 100).toFixed(0)}% · t½ {out.tHalfH.toFixed(1)} h
              </div>
            </div>
          </div>

          {/* Veredicto rápido PK/PD */}
          <div
            className="verdict-banner"
            style={{
              border: `1px solid ${pkVerdict.border}`,
              background: pkVerdict.bg,
            }}
          >
            <div>
              <strong style={{ color: pkVerdict.color }}>{pkVerdict.title}:</strong>{' '}
              <span style={{ color: 'var(--ink-2)' }}>{pkVerdict.detail}</span>
            </div>
          </div>

          {/* Gráfico SVG Compartimental 0-48h */}
          <div className="panel-dark">
            <div
              style={{
                padding: '10px 16px',
                borderBottom: '1px solid var(--line)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              <span className="eyebrow">Perfil Compartimental 0–48 h · Concentración Libre C_free(t)</span>
              <div style={{ display: 'flex', gap: 12, fontSize: 11.5, fontFamily: 'IBM Plex Mono' }}>
                <span style={{ color: 'var(--gag)' }}>━ Esquema actual</span>
                <span style={{ color: '#94A3B8' }}>┅ Bolo 30m sin carga (ref.)</span>
                <span style={{ color: 'var(--hyal)' }}>─ 4×MIC ({4 * inputs.micMgL} mg/L)</span>
              </div>
            </div>

            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              style={{ width: '100%', height: 'auto', display: 'block', cursor: 'crosshair' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const relX = ((e.clientX - rect.left) / rect.width) * svgW;
                const h = ((relX - padL) / plotW) * 48;
                if (h >= 0 && h <= 48) {
                  const idx = Math.min(
                    out.points.length - 1,
                    Math.max(0, Math.round((h / 48) * (out.points.length - 1)))
                  );
                  setHoverIdx(idx);
                } else {
                  setHoverIdx(null);
                }
              }}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <defs>
                <linearGradient id="pkAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3FD8C8" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#3FD8C8" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Ejes y divisor 24 h */}
              <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#2B4260" />
              <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="#2B4260" />
              <line
                x1={toX(24)}
                y1={padT}
                x2={toX(24)}
                y2={padT + plotH}
                stroke="#2B4260"
                strokeDasharray="4 4"
              />
              <text x={toX(24) + 5} y={padT + 12} fill="#6C819B" fontSize="10.5" fontFamily="IBM Plex Mono">
                24 h (evaluar ajuste LRA/ARC)
              </text>

              {/* Banda tóxica superior si existe umbral */}
              {toxicFreeThreshold !== null && toxicFreeThreshold < yMax && (
                <>
                  <rect
                    x={padL}
                    y={padT}
                    width={plotW}
                    height={Math.max(0, toY(toxicFreeThreshold) - padT)}
                    fill="rgba(255, 92, 122, 0.13)"
                  />
                  <line
                    x1={padL}
                    y1={toY(toxicFreeThreshold)}
                    x2={padL + plotW}
                    y2={toY(toxicFreeThreshold)}
                    stroke="#FF5C7A"
                    strokeDasharray="5 4"
                  />
                  <text
                    x={padL + 8}
                    y={Math.max(padT + 14, toY(toxicFreeThreshold) - 5)}
                    fill="#FF5C7A"
                    fontSize="10"
                    fontFamily="IBM Plex Mono"
                  >
                    Umbral Toxicidad (valle total &gt; {drugCfg.toxicTroughTotalMgL} mg/L)
                  </text>
                </>
              )}

              {/* Líneas 4xMIC y 1xMIC */}
              <line
                x1={padL}
                y1={toY(4 * inputs.micMgL)}
                x2={padL + plotW}
                y2={toY(4 * inputs.micMgL)}
                stroke="#4FA9F7"
                strokeDasharray="6 4"
              />
              <text
                x={padL + plotW - 140}
                y={toY(4 * inputs.micMgL) - 5}
                fill="#4FA9F7"
                fontSize="10"
                fontFamily="IBM Plex Mono"
              >
                4×MIC ({(4 * inputs.micMgL).toFixed(1)} mg/L)
              </text>

              <line
                x1={padL}
                y1={toY(inputs.micMgL)}
                x2={padL + plotW}
                y2={toY(inputs.micMgL)}
                stroke="#E9B44C"
                strokeDasharray="3 3"
              />
              <text
                x={padL + 6}
                y={toY(inputs.micMgL) - 4}
                fill="#E9B44C"
                fontSize="10"
                fontFamily="IBM Plex Mono"
              >
                1×MIC ({inputs.micMgL} mg/L)
              </text>

              {/* Curva referencia bolo */}
              <path d={refPath} fill="none" stroke="#94A3B8" strokeWidth="1.7" strokeDasharray="4 4" opacity="0.7" />

              {/* Área y curva principal */}
              <path d={mainAreaPath} fill="url(#pkAreaGrad)" />
              <path d={mainPath} fill="none" stroke="#3FD8C8" strokeWidth="2.6" />

              {/* Marcas eje X y eje Y */}
              {[0, 8, 16, 24, 32, 40, 48].map((h) => (
                <text
                  key={`xh-${h}`}
                  x={toX(h)}
                  y={svgH - 14}
                  textAnchor="middle"
                  fill="#6C819B"
                  fontSize="10.5"
                  fontFamily="IBM Plex Mono"
                >
                  {h}h
                </text>
              ))}
              {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
                const v = yMax * frac;
                return (
                  <text
                    key={`yv-${frac}`}
                    x={padL - 8}
                    y={toY(v) + 4}
                    textAnchor="end"
                    fill="#6C819B"
                    fontSize="10"
                    fontFamily="IBM Plex Mono"
                  >
                    {v.toFixed(0)}
                  </text>
                );
              })}

              {/* Cursor interactivo hover */}
              {hoveredPoint && (
                <g>
                  <line
                    x1={toX(hoveredPoint.tHour)}
                    y1={padT}
                    x2={toX(hoveredPoint.tHour)}
                    y2={padT + plotH}
                    stroke="#DEE9F5"
                    strokeOpacity="0.45"
                  />
                  <circle
                    cx={toX(hoveredPoint.tHour)}
                    cy={toY(hoveredPoint.cFreeMain)}
                    r="5"
                    fill="#3FD8C8"
                    stroke="#070C14"
                    strokeWidth="1.5"
                  />
                  <g
                    transform={`translate(${
                      hoveredPoint.tHour > 34 ? toX(hoveredPoint.tHour) - 185 : toX(hoveredPoint.tHour) + 10
                    }, ${padT + 14})`}
                  >
                    <rect
                      width="175"
                      height="54"
                      rx="6"
                      fill="#0A1220"
                      stroke="#3FD8C8"
                      strokeOpacity="0.6"
                    />
                    <text x="8" y="16" fill="#DEE9F5" fontSize="10.5" fontFamily="IBM Plex Mono">
                      t = {hoveredPoint.tHour.toFixed(1)} h
                    </text>
                    <text x="8" y="32" fill="#3FD8C8" fontSize="10.5" fontFamily="IBM Plex Mono">
                      Esquema: {hoveredPoint.cFreeMain.toFixed(1)} mg/L
                    </text>
                    <text x="8" y="47" fill="#9DB1C8" fontSize="10.5" fontFamily="IBM Plex Mono">
                      Bolo ref: {hoveredPoint.cFreeRefBolus.toFixed(1)} mg/L
                    </text>
                  </g>
                </g>
              )}
            </svg>
          </div>

          {/* Alertas dinámicas + Perlas Malbrán 2025 & Fluconazol CKRT */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
            <div className="panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <ShieldAlert size={16} color="#FF5C7A" />
                <span className="eyebrow" style={{ color: 'var(--ink)' }}>
                  Lectura PK/PD del modelo ({out.alerts.length})
                </span>
              </div>
              <p style={{ margin: '0 0 8px', fontSize: 12, color: 'var(--muted)' }}>
                Modelo monocompartimental simplificado para estudiar, no para dosificar. Cifras y citas pendientes de verificación.
              </p>
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
                            : al.tone === 'green'
                              ? 'rgba(52,211,153,0.4)'
                              : 'rgba(63,216,200,0.4)'
                      }`,
                      background: 'var(--bg-2)',
                      fontSize: 12.5,
                    }}
                  >
                    <div style={{ fontWeight: 600, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      {al.tone === 'green' ? <CheckCircle2 size={13} color="#34D399" /> : <AlertTriangle size={13} />}
                      {al.title}
                    </div>
                    <div style={{ color: 'var(--ink-2)', marginTop: 2 }}>{al.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel" style={{ borderColor: 'rgba(79, 169, 247, 0.35)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <Beaker size={16} color="#4FA9F7" />
                <span className="eyebrow" style={{ color: 'var(--hyal)' }}>
                  Reglas Rápidas ANLIS Malbrán 2025, SSC 2026 y CKRT
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-2)', fontSize: 13 }}>
                <li style={{ marginBottom: 6 }}>
                  <strong style={{ color: 'var(--ink)' }}>CRAB (Malbrán · Pasteran &amp; Corso):</strong> usar{' '}
                  <strong>sulbactam 9 g/día</strong> (SDD hasta CIM 16–32 mg/L; el disco estándar de 4 g/d produce 33% de error).
                </li>
                <li style={{ marginBottom: 6 }}>
                  <strong style={{ color: 'var(--ink)' }}>MBL (Ceftaz/Avi + Aztreonam):</strong> NO extrapolar puntos de corte comerciales de <em>Emblaveo®</em> a la combinación artesanal.
                </li>
                <li style={{ marginBottom: 6 }}>
                  <strong style={{ color: 'var(--ink)' }}>Fluconazol en CKRT:</strong> el filtro carece de reabsorción tubular → <strong>800 mg carga → 800 mg/día</strong> (no bajar a 200 mg).
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Duración y Antianaeróbicos:</strong> 7 d no inferior a 14 d en bacteriemias (BALANCE 2025); usar PCT (ADAPT-Sepsis) y evitar antianaeróbicos empíricos en pulmón/ITU de bajo riesgo (SSC 2026).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
