import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Award,
  Beaker,
  BookOpen,
  Compass,
  Droplets,
  GraduationCap,
  HeartPulse,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  MODULE_AXIS_MAP,
  type AtlasModule,
  type LivingEvidenceData,
  type ModuleAxis,
  type ModuleTab,
} from '../types/atlas';

interface DashboardViewProps {
  modules: AtlasModule[];
  evidencia: LivingEvidenceData;
  auditCount: number;
  stats: {
    totalMcqs: number;
    correctMcqs: number;
    totalFlashcards: number;
    masteredFlashcards: number;
    totalCases: number;
    reviewedCases: number;
    globalPct: number;
    rank: string;
    perModule: Record<
      string,
      { totalItems: number; completedItems: number; pct: number; mcqCorrect: number; mcqTotal: number }
    >;
  };
  onOpenModule: (moduleId: string, tab?: ModuleTab) => void;
  onOpenEvidence: () => void;
  onOpenAudit: () => void;
  onOpenSearch: () => void;
}

const AXIS_GROUPS: Array<{ axis: ModuleAxis; shortTab: string; titulo: string; desc: string }> = [
  {
    axis: 'bases',
    shortTab: 'Eje I · Bases',
    titulo: 'Eje I · Definición, Inmunopatología y Endotelio',
    desc: 'Sepsis-3, SOFA-2, inflamasoma-mitocondria, glicocálix endotelial y la sepsis como sistema',
  },
  {
    axis: 'hemodinamia',
    shortTab: 'Eje II · Hemodinamia',
    titulo: 'Eje II · Microcirculación, Hemodinamia, Vasoactivos y POCUS',
    desc: 'Perfusión, Windkessel, ANDROMEDA-SHOCK-2, farmacología vasoactiva y ecografía crítica',
  },
  {
    axis: 'antimicrobianos',
    shortTab: 'Eje III · Infección',
    titulo: 'Eje III · Diagnóstico, Control de Foco y Antimicrobianos PK/PD',
    desc: 'Hemocultivos, biomarcadores y control de foco; BLING III, reglas ANLIS Malbrán; KPC, NDM, Acinetobacter, hongos y virus',
  },
  {
    axis: 'organos_sati',
    shortTab: 'Eje IV · Órganos & SATI',
    titulo: 'Eje IV · Coagulación, Disfunciones Orgánicas y Entrenamiento SATI',
    desc: 'SIC-2, SA-AKI, hígado-intestino-SAE-sedación, pulmón séptico y SDRA, glucemia-nutrición-transfusión, poblaciones especiales, después de la UTI e integrador R2–R3',
  },
];

export const DashboardView: React.FC<DashboardViewProps> = ({
  modules,
  evidencia,
  auditCount,
  stats,
  onOpenModule,
  onOpenEvidence,
  onOpenAudit,
  onOpenSearch,
}) => {
  const [axisFilter, setAxisFilter] = useState<'all' | ModuleAxis>('all');
  const latestEvidence = evidencia.entradas.slice(0, 3);

  const visibleAxes =
    axisFilter === 'all' ? AXIS_GROUPS : AXIS_GROUPS.filter((g) => g.axis === axisFilter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      {/* Hero Principal */}
      <div
        className="panel"
        style={{
          background:
            'linear-gradient(135deg, rgba(13, 23, 37, 0.96) 0%, rgba(10, 18, 32, 0.98) 65%, rgba(63, 216, 200, 0.08) 100%)',
          padding: '24px 26px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow" style={{ color: 'var(--gag)' }}>
              Plataforma Interactiva de Terapia Intensiva · Residencia R2–R3 SATI
            </div>
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                margin: '6px 0 8px',
                lineHeight: 1.08,
              }}
            >
              Sepsis Atlas <span style={{ color: 'var(--gag)' }}>UTI</span>
            </h1>
            <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14.5 }}>
              Estudiá sepsis desde cero —fisiología, histología y microcirculación— hasta las decisiones de guardia y ensayos 2025–2026 (<strong>SOFA-2</strong>, <strong>ANDROMEDA-SHOCK-2</strong>, <strong>ARISE FLUIDS</strong>, <strong>BLING III</strong> y <strong>ANLIS Malbrán</strong>). Cada módulo combina teoría en dos niveles, simuladores interactivos y práctica SATI.
            </p>
          </div>

          <div
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              padding: '14px 16px',
              minWidth: 235,
            }}
          >
            <div className="eyebrow" style={{ color: 'var(--core)' }}>
              Tu Progreso SATI
            </div>
            <div
              className="font-display"
              style={{ fontSize: 17, fontWeight: 700, marginTop: 4, color: 'var(--ink)' }}
            >
              {stats.rank}
            </div>
            <div
              style={{
                height: 7,
                background: 'var(--panel-2)',
                borderRadius: 999,
                overflow: 'hidden',
                margin: '9px 0 6px',
              }}
            >
              <div
                style={{
                  width: `${stats.globalPct}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--gag), var(--core))',
                }}
              />
            </div>
            <div className="font-mono" style={{ fontSize: 11.5, color: 'var(--ink-2)' }}>
              {stats.globalPct}% global · {stats.correctMcqs}/{stats.totalMcqs} MCQs · {stats.masteredFlashcards}/{stats.totalFlashcards} cards
            </div>
          </div>
        </div>
      </div>

      {/* ¿Qué querés hacer hoy? — Accesos rápidos intuitivos */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Compass size={16} color="#3FD8C8" />
          <span className="eyebrow" style={{ color: 'var(--ink)' }}>
            ¿Por dónde querés empezar hoy?
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(245px, 1fr))', gap: 12 }}>
          <div
            className="panel quick-start-card"
            onClick={() => onOpenModule('M01', 'estudio')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <BookOpen size={17} color="#3FD8C8" />
                <strong className="font-display" style={{ fontSize: 16 }}>
                  Aprender desde cero
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: 12.8, color: 'var(--ink-2)' }}>
                Empezá por definiciones Sepsis-3 / SOFA-2 e inmunopatología con explicaciones paso a paso.
              </p>
            </div>
            <span className="font-mono" style={{ fontSize: 11.5, color: 'var(--gag)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Ir a M01 · Definición y Bases <ArrowRight size={13} />
            </span>
          </div>

          <div
            className="panel quick-start-card"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <Sparkles size={17} color="#3FD8C8" />
                <strong className="font-display" style={{ fontSize: 16 }}>
                  Simuladores en vivo
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: 12.8, color: 'var(--ink-2)' }}>
                Probá fisiología y dosis en tiempo real con casos de guardia prearmados:
              </p>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-preset"
                data-active="true"
                onClick={() => onOpenModule('M03', 'simulador')}
              >
                <Droplets size={12} /> M03 Glicocálix
              </button>
              <button
                type="button"
                className="btn-preset"
                onClick={() => onOpenModule('M05', 'simulador')}
              >
                <HeartPulse size={12} /> M05 Hemodinamia
              </button>
              <button
                type="button"
                className="btn-preset"
                onClick={() => onOpenModule('M09', 'simulador')}
              >
                <Beaker size={12} /> M09 PK/PD
              </button>
            </div>
          </div>

          <div
            className="panel quick-start-card"
            onClick={() => onOpenModule('M12', 'entrenamiento')}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <GraduationCap size={17} color="#9A87F5" />
                <strong className="font-display" style={{ fontSize: 16 }}>
                  Practicar Examen SATI
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: 12.8, color: 'var(--ink-2)' }}>
                Resolvé {stats.totalMcqs} MCQs comentados, {stats.totalCases} casos clínicos con trampa y {stats.totalFlashcards} flashcards.
              </p>
            </div>
            <span className="font-mono" style={{ fontSize: 11.5, color: 'var(--core)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Abrir Simulacro M12 <ArrowRight size={13} />
            </span>
          </div>

          <div
            className="panel quick-start-card"
            onClick={onOpenSearch}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <Search size={17} color="#4FA9F7" />
                <strong className="font-display" style={{ fontSize: 16 }}>
                  Buscar una duda de guardia
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: 12.8, color: 'var(--ink-2)' }}>
                Buscá cualquier ensayo, droga, score o mito en los {modules.length} módulos y {evidencia.total_entradas} papers recientes.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <span className="font-mono" style={{ fontSize: 11.5, color: 'var(--hyal)' }}>
                Abrir buscador (Ctrl+K)
              </span>
              <button
                type="button"
                className="btn-preset"
                style={{ padding: '3px 8px', fontSize: 11 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenAudit();
                }}
              >
                <ShieldCheck size={11} /> Auditoría ({auditCount})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Últimas entregas de Evidencia Viva */}
      <div className="panel">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            flexWrap: 'wrap',
            marginBottom: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Radar size={16} color="#9A87F5" />
            <span className="eyebrow" style={{ color: 'var(--ink)' }}>
              Evidencia Viva · Últimas incorporaciones ({evidencia.rango_fechas.hasta})
            </span>
          </div>
          <button type="button" className="btn-preset" onClick={onOpenEvidence}>
            Ver los {evidencia.total_entradas} artículos →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 12 }}>
          {latestEvidence.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--line)',
                borderRadius: 10,
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 8,
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span className="badge badge-purple">{item.fecha_radar}</span>
                  {item.pmid && <span className="badge">PMID {item.pmid}</span>}
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink)', marginBottom: 4 }}>
                  {item.titulo}
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-2)' }}>{item.impacto_uti}</div>
              </div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {item.modulos.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className="btn-preset"
                    style={{ padding: '2px 7px', fontSize: 11 }}
                    onClick={() => onOpenModule(m)}
                  >
                    Ir a {m}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filtro por Eje + Grilla Curricular */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            flexWrap: 'wrap',
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--ink)' }}>
            Explorá los {modules.length} Módulos por Área Temática
          </span>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-preset"
              data-active={axisFilter === 'all'}
              onClick={() => setAxisFilter('all')}
            >
              Todos (12)
            </button>
            {AXIS_GROUPS.map((g) => (
              <button
                key={g.axis}
                type="button"
                className="btn-preset"
                data-active={axisFilter === g.axis}
                onClick={() => setAxisFilter(g.axis)}
              >
                {g.shortTab}
              </button>
            ))}
          </div>
        </div>

        {visibleAxes.map((group) => {
          const groupModules = modules.filter((m) => MODULE_AXIS_MAP[m.id]?.axis === group.axis);
          if (groupModules.length === 0) return null;

          return (
            <div key={group.axis} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div>
                <h2 className="font-display" style={{ margin: 0, fontSize: 19 }}>
                  {group.titulo}
                </h2>
                <p style={{ margin: '2px 0 0', color: 'var(--muted)', fontSize: 13 }}>{group.desc}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(295px, 1fr))', gap: 12 }}>
                {groupModules.map((mod) => {
                  const evCount = evidencia.conteo_por_modulo[mod.id] ?? 0;
                  const pStats = stats.perModule[mod.id];

                  return (
                    <div
                      key={mod.id}
                      className="panel module-card"
                      onClick={() => onOpenModule(mod.id)}
                      style={{
                        cursor: 'pointer',
                        padding: '15px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 12,
                        borderColor: mod.pilotoFase2 ? 'rgba(63, 216, 200, 0.4)' : 'var(--line)',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 6,
                            marginBottom: 8,
                          }}
                        >
                          <span className="font-mono" style={{ fontWeight: 700, color: 'var(--gag)' }}>
                            {mod.id}
                          </span>
                          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                            {mod.pilotoFase2 && (
                              <span className="badge badge-cyan">
                                <Sparkles size={10} /> Simulador en vivo
                              </span>
                            )}
                            {evCount > 0 && <span className="badge">{evCount} papers</span>}
                          </div>
                        </div>

                        <h3 className="font-display" style={{ margin: '0 0 5px', fontSize: 16 }}>
                          {mod.titulo}
                        </h3>
                        <p style={{ margin: 0, fontSize: 12.5, color: 'var(--ink-2)' }}>
                          {mod.subtitulo}
                        </p>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: 11.5,
                              color: 'var(--muted)',
                              fontFamily: 'var(--f-mono)',
                              marginBottom: 5,
                            }}
                          >
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                              <BookOpen size={12} /> {mod.mcqs.length} MCQs · {mod.flashcards.length} cards
                            </span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                              {pStats?.pct ? <Award size={12} color="#34D399" /> : <Activity size={12} />}
                              {pStats?.pct ?? 0}%
                            </span>
                          </div>
                          <div
                            style={{
                              height: 4,
                              background: 'var(--panel-2)',
                              borderRadius: 999,
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                width: `${pStats?.pct ?? 0}%`,
                                height: '100%',
                                background: mod.pilotoFase2 ? 'var(--gag)' : 'var(--hyal)',
                              }}
                            />
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: 6, paddingTop: 2 }}>
                          {mod.pilotoFase2 ? (
                            <>
                              <button
                                type="button"
                                className="btn-preset"
                                data-active="true"
                                style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenModule(mod.id, 'simulador');
                                }}
                              >
                                <Sparkles size={11} /> Simulador
                              </button>
                              <button
                                type="button"
                                className="btn-preset"
                                style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenModule(mod.id, 'estudio');
                                }}
                              >
                                <BookOpen size={11} /> Estudiar
                              </button>
                            </>
                          ) : mod.id === 'M12' ? (
                            <>
                              <button
                                type="button"
                                className="btn-preset"
                                data-active="true"
                                style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenModule('M12', 'entrenamiento');
                                }}
                              >
                                <GraduationCap size={11} /> Simulacro SATI
                              </button>
                              <button
                                type="button"
                                className="btn-preset"
                                style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenModule('M12', 'estudio');
                                }}
                              >
                                <BookOpen size={11} /> Caso T
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                className="btn-preset"
                                data-active="true"
                                style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenModule(mod.id, 'estudio');
                                }}
                              >
                                <BookOpen size={11} /> Estudiar
                              </button>
                              <button
                                type="button"
                                className="btn-preset"
                                style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenModule(mod.id, 'entrenamiento');
                                }}
                              >
                                <GraduationCap size={11} /> Practicar
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
