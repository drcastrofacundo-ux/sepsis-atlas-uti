import React, { useMemo } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Cpu,
  ExternalLink,
  GraduationCap,
  Radar,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import {
  MODULE_AXIS_MAP,
  type AtlasModule,
  type AuditEntry,
  type DepthMode,
  type LivingEvidenceEntry,
  type ModuleTab,
} from '../types/atlas';
import type { ProgressStore } from '../hooks/useProgress';
import { RichMarkdown } from './RichMarkdown';
import { Glosario } from './Glosario';
import { siglasEnTexto } from '../data/glosario';
import { SatiTrainer } from './SatiTrainer';
import { UtiToolsLinks } from './UtiToolsLinks';
import { GlycocalyxLab } from './simulators/GlycocalyxLab';
import { HemodynamicLab } from './simulators/HemodynamicLab';
import { PkPdAntibioticLab } from './simulators/PkPdAntibioticLab';
import { LungLab } from './simulators/LungLab';
import { SourceControlLab } from './simulators/SourceControlLab';
import { ResistanceLab } from './simulators/ResistanceLab';
import { SupportDashboard } from './simulators/SupportDashboard';
import { PopulationLab } from './simulators/PopulationLab';
import { DischargeLab } from './simulators/DischargeLab';
import { SystemLab } from './simulators/SystemLab';

interface ModuleViewProps {
  moduleData: AtlasModule;
  modules: AtlasModule[];
  depthMode: DepthMode;
  activeTab: ModuleTab;
  onChangeTab: (tab: ModuleTab) => void;
  onChangeDepthMode: (mode: DepthMode) => void;
  onGoHome: () => void;
  evidenciaEntries: LivingEvidenceEntry[];
  auditEntries: AuditEntry[];
  store: ProgressStore;
  onAnswerMcq: (mcqId: string, selected: string, isCorrect: boolean) => void;
  onResetMcqs: (mcqIds: string[]) => void;
  onReviewCase: (caseId: string) => void;
  onToggleFlashcard: (fcId: string, value?: boolean) => void;
  onNavigateModule: (moduleId: string, tab?: ModuleTab) => void;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  moduleData,
  modules,
  depthMode,
  activeTab,
  onChangeTab,
  onChangeDepthMode,
  onGoHome,
  evidenciaEntries,
  auditEntries,
  store,
  onAnswerMcq,
  onResetMcqs,
  onReviewCase,
  onToggleFlashcard,
  onNavigateModule,
}) => {
  const isPilot = moduleData.pilotoFase2;
  const isM12 = moduleData.id === 'M12';
  const axisLabel = MODULE_AXIS_MAP[moduleData.id]?.label || '';

  const tabs = useMemo(() => {
    if (isM12) {
      return [
        { id: 'entrenamiento' as ModuleTab, label: `Simulacro Integrador (${moduleData.mcqs.length} MCQs)`, icon: GraduationCap },
        { id: 'estudio' as ModuleTab, label: 'Caso T · Monitor Puede Mentir', icon: BookOpen },
        { id: 'simulador' as ModuleTab, label: 'Progreso & Evidencia Viva', icon: Sparkles },
        { id: 'referencias' as ModuleTab, label: 'Referencias', icon: ShieldCheck },
      ];
    }
    const items: Array<{ id: ModuleTab; label: string; icon: LucideIcon }> = [];
    if (isPilot) {
      items.push({ id: 'simulador', label: 'Simulador en vivo', icon: Sparkles });
    }
    items.push({ id: 'estudio', label: 'Estudio', icon: BookOpen });
    items.push({
      id: 'entrenamiento',
      label: `Practicar (${moduleData.mcqs.length + moduleData.casosError.length + moduleData.flashcards.length})`,
      icon: GraduationCap,
    });
    items.push({ id: 'evidencia', label: `Evidencia Viva (${evidenciaEntries.length})`, icon: Radar });
    items.push({ id: 'referencias', label: `Referencias (${auditEntries.length})`, icon: ShieldCheck });
    if (!isPilot) {
      items.push({ id: 'simulador', label: 'Diseño simulador (próximo)', icon: Cpu });
    }
    return items;
  }, [isM12, isPilot, moduleData, evidenciaEntries.length, auditEntries.length]);

  // Siglas que realmente aparecen en el texto de este módulo. Se detectan solas,
  // así que al agregar una entrada al glosario se enciende en todos los módulos
  // donde esa sigla ya estaba escrita, sin tocar el markdown.
  const siglasDelModulo = useMemo(
    () =>
      siglasEnTexto(
        [
          moduleData.titulo,
          moduleData.subtitulo,
          moduleData.capaBaseMd,
          moduleData.capaFronteraMd,
          moduleData.mitosMd,
          moduleData.casoTMd,
          moduleData.monitorMienteMd,
          moduleData.simuladorSpecMd,
        ]
          .filter(Boolean)
          .join('\n')
      ),
    [moduleData]
  );

  const effectiveTab: ModuleTab = tabs.some((t) => t.id === activeTab)
    ? activeTab
    : isM12
      ? 'entrenamiento'
      : isPilot
        ? 'simulador'
        : 'estudio';

  const currentIdx = modules.findIndex((m) => m.id === moduleData.id);
  const prevMod = currentIdx > 0 ? modules[currentIdx - 1] : null;
  const nextMod = currentIdx >= 0 && currentIdx < modules.length - 1 ? modules[currentIdx + 1] : null;

  const jumpToSection = (sectionId: 'sec-base' | 'sec-frontera' | 'sec-mitos') => {
    if (sectionId === 'sec-base' && depthMode === 'frontera') {
      onChangeDepthMode('dual');
    } else if (sectionId === 'sec-frontera' && depthMode === 'base') {
      onChangeDepthMode('dual');
    }
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  const renderSimulator = () => {
    if (moduleData.id === 'M03') return <GlycocalyxLab />;
    if (moduleData.id === 'M05') return <HemodynamicLab />;
    if (moduleData.id === 'M09') return <PkPdAntibioticLab />;
    if (moduleData.id === 'M14') return <SourceControlLab />;
    if (moduleData.id === 'M15') return <LungLab />;
    if (moduleData.id === 'M16') return <ResistanceLab />;
    if (moduleData.id === 'M17') return <SupportDashboard />;
    if (moduleData.id === 'M18') return <PopulationLab />;
    if (moduleData.id === 'M19') return <DischargeLab />;
    if (moduleData.id === 'M20') return <SystemLab />;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          className="panel"
          style={{
            borderColor: 'rgba(154, 135, 245, 0.4)',
            background: 'rgba(154, 135, 245, 0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <Cpu size={16} color="#9A87F5" />
            <span className="eyebrow" style={{ color: 'var(--core)' }}>
              {isM12
                ? 'Seguimiento de Progreso R2 → R3 → Staff SATI'
                : 'Especificación de Simulador Interactivo · Próxima entrega'}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 13.5, color: 'var(--ink-2)' }}>
            {isM12
              ? 'Tu avance en MCQs, casos clínicos y flashcards queda guardado en este navegador. Los 10 simuladores ejecutables en vivo están en M03 (Glicocálix), M05 (Hemodinamia), M09 (PK/PD Antibióticos), M14 (Control de Foco), M15 (Pulmón Séptico), M16 (Patógenos Difíciles), M17 (Tablero de Soporte), M18 (Poblaciones Especiales), M19 (Después de la UTI) y M20 (La Sepsis como Sistema).'
              : 'Este módulo ya cuenta con toda su teoría, práctica SATI y especificación clínica. Si querés probar los simuladores interactivos en vivo hoy, abrí M03, M05, M09, M14, M15, M16, M17, M18, M19 o M20.'}
          </p>
        </div>

        <div className="panel">
          <RichMarkdown markdown={moduleData.simuladorSpecMd} onNavigateModule={(m) => onNavigateModule(m)} />
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Header del Módulo */}
      <div className="panel">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            flexWrap: 'wrap',
            marginBottom: 10,
          }}
        >
          <button
            type="button"
            className="btn-preset"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
            onClick={onGoHome}
          >
            <ArrowLeft size={12} /> Volver al inicio
          </button>
          {axisLabel && (
            <span className="eyebrow" style={{ color: 'var(--muted)' }}>
              {axisLabel}
            </span>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
              <span className="badge badge-cyan">{moduleData.id}</span>
              {isPilot && (
                <span className="badge badge-green">
                  <Sparkles size={11} /> Simulador interactivo
                </span>
              )}
              <span className="badge">Actualizado {moduleData.ultimaActualizacion}</span>
              {evidenciaEntries.length > 0 && (
                <span className="badge badge-purple">{evidenciaEntries.length} papers recientes</span>
              )}
            </div>
            <h1 className="font-display" style={{ margin: '0 0 6px', fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
              {moduleData.titulo}
            </h1>
            <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14 }}>{moduleData.subtitulo}</p>
          </div>
        </div>

        {/* Navegación por Tabs del Módulo */}
        <div
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            marginTop: 16,
            paddingTop: 14,
            borderTop: '1px solid var(--line-soft)',
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                className="btn-preset"
                data-active={effectiveTab === tab.id}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                onClick={() => onChangeTab(tab.id)}
              >
                <Icon size={13} /> {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <UtiToolsLinks moduleId={moduleData.id} />

      {/* Tab 1: Simulador */}
      {effectiveTab === 'simulador' && renderSimulator()}

      {/* Tab 2: Estudio Dual / Caso T */}
      {effectiveTab === 'estudio' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {isM12 ? (
            <>
              <div className="panel">
                <RichMarkdown
                  markdown={moduleData.casoTMd || ''}
                  onNavigateModule={(m) => onNavigateModule(m)}
                />
              </div>
              <div className="panel">
                <RichMarkdown
                  markdown={moduleData.monitorMienteMd || ''}
                  onNavigateModule={(m) => onNavigateModule(m)}
                />
              </div>
            </>
          ) : (
            <>
              {/* Barra de Nivel de Lectura + Saltos Rápidos */}
              <div
                className="panel"
                style={{
                  padding: '10px 14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 10,
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span className="eyebrow">Nivel de lectura:</span>
                  <div className="pill-switch">
                    <button
                      type="button"
                      data-active={depthMode === 'base'}
                      onClick={() => onChangeDepthMode('base')}
                    >
                      Desde cero
                    </button>
                    <button
                      type="button"
                      data-tone="purple"
                      data-active={depthMode === 'frontera'}
                      onClick={() => onChangeDepthMode('frontera')}
                    >
                      R2–R3
                    </button>
                    <button
                      type="button"
                      data-tone="blue"
                      data-active={depthMode === 'dual'}
                      onClick={() => onChangeDepthMode('dual')}
                    >
                      Completo
                    </button>
                  </div>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <span className="eyebrow">Ir a:</span>
                  <button
                    type="button"
                    className="btn-preset"
                    onClick={() => jumpToSection('sec-base')}
                  >
                    1. Capa Base
                  </button>
                  <button
                    type="button"
                    className="btn-preset"
                    onClick={() => jumpToSection('sec-frontera')}
                  >
                    2. Frontera R2–R3
                  </button>
                  {moduleData.mitosMd && (
                    <button
                      type="button"
                      className="btn-preset"
                      onClick={() => jumpToSection('sec-mitos')}
                    >
                      3. Mitos vs. Evidencia
                    </button>
                  )}
                </div>
              </div>

              {(depthMode === 'base' || depthMode === 'dual') && (
                <div
                  id="sec-base"
                  className="panel"
                  style={{ borderColor: 'rgba(63, 216, 200, 0.35)', scrollMarginTop: 72 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <BookOpen size={16} color="#3FD8C8" />
                    <span className="eyebrow" style={{ color: 'var(--gag)' }}>
                      Capa Base · Desde cero (Fisiología, Histología y Fundamentos)
                    </span>
                  </div>
                  <RichMarkdown
                    markdown={moduleData.capaBaseMd}
                    onNavigateModule={(m) => onNavigateModule(m)}
                  />
                </div>
              )}

              {(depthMode === 'frontera' || depthMode === 'dual') && (
                <div
                  id="sec-frontera"
                  className="panel"
                  style={{ borderColor: 'rgba(154, 135, 245, 0.38)', scrollMarginTop: 72 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <GraduationCap size={16} color="#9A87F5" />
                    <span className="eyebrow" style={{ color: 'var(--core)' }}>
                      Capa Profundidad R2–R3 &amp; Frontera 2022–2026
                    </span>
                  </div>
                  <RichMarkdown
                    markdown={moduleData.capaFronteraMd}
                    onNavigateModule={(m) => onNavigateModule(m)}
                  />
                </div>
              )}

              {moduleData.mitosMd && (
                <div
                  id="sec-mitos"
                  className="panel"
                  style={{ borderColor: 'rgba(255, 92, 122, 0.38)', scrollMarginTop: 72 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <AlertTriangle size={16} color="#FF5C7A" />
                    <span className="eyebrow" style={{ color: 'var(--alert)' }}>
                      Mitos vs. Evidencia · Cómo NO sobreinterpretarlo
                    </span>
                  </div>
                  <RichMarkdown
                    markdown={moduleData.mitosMd}
                    onNavigateModule={(m) => onNavigateModule(m)}
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Tab 3: Entrenamiento SATI */}
      {effectiveTab === 'entrenamiento' && (
        <SatiTrainer
          moduleData={moduleData}
          mcqAnswers={store.mcqAnswers}
          reviewedCases={store.reviewedCases}
          masteredFlashcards={store.masteredFlashcards}
          onAnswerMcq={onAnswerMcq}
          onResetMcqs={onResetMcqs}
          onReviewCase={onReviewCase}
          onToggleFlashcard={onToggleFlashcard}
          onNavigateModule={(m) => onNavigateModule(m)}
        />
      )}

      {/* Tab 4: Evidencia Viva del Módulo */}
      {effectiveTab === 'evidencia' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {evidenciaEntries.length === 0 ? (
            <div className="panel" style={{ color: 'var(--muted)' }}>
              Este módulo no tiene entregas adicionales recientes del Radar fuera de su bibliografía base.
            </div>
          ) : (
            evidenciaEntries.map((e) => (
              <div key={e.id} className="panel">
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span className="badge badge-purple">
                    <Radar size={11} /> {e.fecha_radar}
                  </span>
                  {e.pmid && (
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${e.pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge"
                      style={{ color: 'var(--hyal)' }}
                    >
                      PMID {e.pmid} <ExternalLink size={10} />
                    </a>
                  )}
                  {e.senal_practica && <span className="badge badge-green">SEÑAL PRÁCTICA</span>}
                  {e.es_alerta_metodologica && <span className="badge badge-red">ALERTA METODOLÓGICA</span>}
                </div>
                <h4 className="font-display" style={{ margin: '2px 0 6px', fontSize: 16 }}>
                  {e.titulo}
                </h4>
                <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 6 }}>
                  <RichMarkdown markdown={e.cita} />
                </div>
                <p style={{ margin: '0 0 6px', fontSize: 13.5, color: 'var(--ink-2)' }}>
                  <strong style={{ color: 'var(--ink)' }}>Resultado clave:</strong> {e.resultado_clave}
                </p>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--alert)' }}>
                  <strong>Cómo NO sobreinterpretarlo:</strong> {e.no_sobreinterpretar}
                </p>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 5: Referencias y Auditoría */}
      {effectiveTab === 'referencias' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {auditEntries.length > 0 && (
            <div className="panel" style={{ borderColor: 'rgba(233, 180, 76, 0.35)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <ShieldCheck size={16} color="#E9B44C" />
                <span className="eyebrow" style={{ color: 'var(--prot)' }}>
                  Correcciones de Auditoría vinculadas a {moduleData.id}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {auditEntries.map((a) => (
                  <div
                    key={a.numero}
                    style={{
                      background: 'var(--bg-2)',
                      padding: '8px 11px',
                      borderRadius: 8,
                      border: '1px solid var(--line-soft)',
                      fontSize: 13,
                    }}
                  >
                    <strong style={{ color: 'var(--prot)' }}>Ítem #{a.numero}:</strong>{' '}
                    <span style={{ color: 'var(--ink-2)' }}>{a.correccionVerificada}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="panel">
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Fuentes de referencia: {moduleData.fuentesNlm.join(' · ')}
            </div>
            <RichMarkdown
              markdown={moduleData.referenciasMd}
              onNavigateModule={(m) => onNavigateModule(m)}
            />
          </div>
        </div>
      )}

      {/* Siglas del módulo. En la pestaña del simulador no va, porque cada
          simulador ya trae el suyo, acotado a lo que muestra esa pantalla. */}
      {effectiveTab !== 'simulador' && <Glosario claves={siglasDelModulo} />}

      {/* Navegación Secuencial entre Módulos */}
      <div
        className="panel"
        style={{
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',
        }}
      >
        {prevMod ? (
          <button
            type="button"
            className="btn"
            onClick={() => onNavigateModule(prevMod.id)}
          >
            <ArrowLeft size={14} /> {prevMod.id}: {prevMod.titulo}
          </button>
        ) : (
          <div />
        )}

        {nextMod && (
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: 'auto' }}
            onClick={() => onNavigateModule(nextMod.id)}
          >
            {nextMod.id}: {nextMod.titulo} <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
};
