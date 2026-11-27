import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Activity,
  Beaker,
  BookOpen,
  ChevronRight,
  Clock,
  Droplets,
  FileText,
  HeartPulse,
  HelpCircle,
  Home,
  KeyRound,
  LayoutDashboard,
  Menu,
  Radar,
  Search,
  Users,
  ShieldCheck,
  Sparkles,
  Wind,
  X,
} from 'lucide-react';
import modulesRaw from './data/generated/modules.json';
import evidenciaRaw from './data/generated/evidencia-viva.json';
import auditoriaRaw from './data/generated/auditoria.json';
import {
  MODULE_AXIS_MAP,
  type ActiveRoute,
  type AtlasModule,
  type AuditEntry,
  type DepthMode,
  type LivingEvidenceData,
  type ModuleTab,
} from './types/atlas';
import { useProgress } from './hooks/useProgress';
import { DashboardView } from './components/DashboardView';
import { ModuleView } from './components/ModuleView';
import { LivingEvidenceView } from './components/LivingEvidenceView';
import { AuditView } from './components/AuditView';
import { CommandSearch } from './components/CommandSearch';
import { DidacticBanner } from './components/DidacticBanner';

const modules = modulesRaw as AtlasModule[];
const evidencia = evidenciaRaw as LivingEvidenceData;
const auditoria = auditoriaRaw as AuditEntry[];

function parseHashRoute(): ActiveRoute {
  const h = window.location.hash.replace(/^#/, '');
  if (!h || h === '/') return { kind: 'dashboard' };
  if (h === '/evidencia') return { kind: 'evidence' };
  if (h === '/auditoria') return { kind: 'audit' };
  const modMatch = h.match(/^\/module\/(M\d{2})(?:\/([a-z]+))?$/i);
  if (modMatch) {
    return {
      kind: 'module',
      moduleId: modMatch[1].toUpperCase(),
      tab: (modMatch[2] as ModuleTab | undefined) || undefined,
    };
  }
  return { kind: 'dashboard' };
}

function buildHash(route: ActiveRoute): string {
  if (route.kind === 'dashboard') return '#/';
  if (route.kind === 'evidence') return '#/evidencia';
  if (route.kind === 'audit') return '#/auditoria';
  return `#/module/${route.moduleId}${route.tab ? `/${route.tab}` : ''}`;
}

export const App: React.FC = () => {
  const [route, setRoute] = useState<ActiveRoute>(parseHashRoute);
  const [depthMode, setDepthMode] = useState<DepthMode>('dual');
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const {
    store,
    stats,
    answerMcq,
    resetModuleMcqs,
    markCaseReviewed,
    toggleFlashcardMastered,
    markModuleVisited,
  } = useProgress(modules);

  const navigate = useCallback((next: ActiveRoute) => {
    setRoute(next);
    const targetHash = buildHash(next);
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openModule = useCallback(
    (moduleId: string, tab?: ModuleTab) => {
      const targetMod = modules.find((m) => m.id === moduleId);
      const defaultTab: ModuleTab = targetMod?.id === 'M12'
        ? 'entrenamiento'
        : targetMod?.pilotoFase2
          ? 'simulador'
          : 'estudio';
      markModuleVisited(moduleId);
      navigate({ kind: 'module', moduleId, tab: tab ?? defaultTab });
    },
    [markModuleVisited, navigate]
  );

  useEffect(() => {
    const onHashChange = () => setRoute(parseHashRoute());
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape' && helpOpen) {
        setHelpOpen(false);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [helpOpen]);

  const activeModule = useMemo(() => {
    if (route.kind !== 'module') return null;
    return modules.find((m) => m.id === route.moduleId) || modules[0];
  }, [route]);

  const moduleEvidence = useMemo(() => {
    if (!activeModule) return [];
    return evidencia.entradas.filter((e) => e.modulos.includes(activeModule.id));
  }, [activeModule]);

  const moduleAudit = useMemo(() => {
    if (!activeModule) return [];
    return auditoria.filter((a) => a.modulos.includes(activeModule.id));
  }, [activeModule]);

  return (
    <div className="app-shell">
      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar de Navegación */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 10,
            borderBottom: '1px solid var(--line)',
          }}
        >
          <button
            type="button"
            onClick={() => navigate({ kind: 'dashboard' })}
            style={{
              background: 'none',
              border: 0,
              padding: 0,
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <div className="eyebrow" style={{ color: 'var(--gag)' }}>
              Sepsis Atlas UTI
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
              {modules.length} Módulos · Evidencia Viva
            </div>
          </button>
          {sidebarOpen && (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setSidebarOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Vistas Generales */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <button
            type="button"
            className="nav-item"
            data-active={route.kind === 'dashboard'}
            onClick={() => navigate({ kind: 'dashboard' })}
          >
            <Home size={15} color="#3FD8C8" /> Inicio
          </button>
          <button
            type="button"
            className="nav-item"
            data-active={route.kind === 'evidence'}
            onClick={() => navigate({ kind: 'evidence' })}
          >
            <Radar size={15} color="#9A87F5" />
            <span style={{ flex: 1 }}>Evidencia Viva</span>
            <span className="badge badge-purple">{evidencia.total_entradas}</span>
          </button>
          <button
            type="button"
            className="nav-item"
            data-active={route.kind === 'audit'}
            onClick={() => navigate({ kind: 'audit' })}
          >
            <ShieldCheck size={15} color="#E9B44C" />
            <span style={{ flex: 1 }}>Auditoría y Mitos</span>
            <span className="badge badge-amber">{auditoria.length}</span>
          </button>
        </div>

        {/* Simuladores Interactivos */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>
            Simuladores Interactivos
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M03' && route.tab === 'simulador'}
              onClick={() => openModule('M03', 'simulador')}
            >
              <Droplets size={15} color="#3FD8C8" /> M03 · Glicocálix &amp; Starling
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M05' && route.tab === 'simulador'}
              onClick={() => openModule('M05', 'simulador')}
            >
              <HeartPulse size={15} color="#3FD8C8" /> M05 · Hemodinamia &amp; VNERi
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M09' && route.tab === 'simulador'}
              onClick={() => openModule('M09', 'simulador')}
            >
              <Beaker size={15} color="#4FA9F7" /> M09 · Motor PK/PD 48 h
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M14' && route.tab === 'simulador'}
              onClick={() => openModule('M14', 'simulador')}
            >
              <Clock size={15} color="#E9B44C" /> M14 · El reloj del foco
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M15' && route.tab === 'simulador'}
              onClick={() => openModule('M15', 'simulador')}
            >
              <Wind size={15} color="#9A87F5" /> M15 · El pulmón chico
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M16' && route.tab === 'simulador'}
              onClick={() => openModule('M16', 'simulador')}
            >
              <KeyRound size={15} color="#E9B44C" /> M16 · Enzima → antibiótico
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M17' && route.tab === 'simulador'}
              onClick={() => openModule('M17', 'simulador')}
            >
              <LayoutDashboard size={15} color="#3FD8C8" /> M17 · Tablero de soporte
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M18' && route.tab === 'simulador'}
              onClick={() => openModule('M18', 'simulador')}
            >
              <Users size={15} color="#9A87F5" /> M18 · Valores normales
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={route.kind === 'module' && route.moduleId === 'M19' && route.tab === 'simulador'}
              onClick={() => openModule('M19', 'simulador')}
            >
              <FileText size={15} color="#FF5C7A" /> M19 · La epicrisis que sirve
            </button>
          </div>
        </div>

        {/* Lista de módulos */}
        <div style={{ flex: 1 }}>
          <div className="eyebrow" style={{ marginBottom: 6 }}>
            Programa de Estudio ({modules.length} Módulos)
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {modules.map((m) => {
              const isActive = route.kind === 'module' && route.moduleId === m.id;
              const pMod = stats.perModule[m.id];
              return (
                <button
                  key={m.id}
                  type="button"
                  className="nav-item"
                  data-active={isActive}
                  onClick={() => openModule(m.id)}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      color: m.pilotoFase2 ? 'var(--gag)' : 'var(--hyal)',
                      minWidth: 28,
                    }}
                  >
                    {m.id}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {MODULE_AXIS_MAP[m.id]?.short || m.titulo}
                  </span>
                  {m.pilotoFase2 && <Sparkles size={11} color="#3FD8C8" />}
                  {pMod?.pct > 0 && (
                    <span className="font-mono" style={{ fontSize: 10.5, color: 'var(--ok)' }}>
                      {pMod.pct}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer compacto de progreso */}
        <div
          style={{
            marginTop: 'auto',
            padding: '10px 11px',
            borderRadius: 10,
            background: 'var(--bg-2)',
            border: '1px solid var(--line-soft)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, marginBottom: 5 }}>
            <span style={{ color: 'var(--ink-2)', fontWeight: 600 }}>{stats.rank}</span>
            <span className="font-mono" style={{ color: 'var(--gag)' }}>
              {stats.globalPct}%
            </span>
          </div>
          <div style={{ height: 5, borderRadius: 99, background: 'var(--panel-2)', overflow: 'hidden' }}>
            <div
              style={{
                width: `${stats.globalPct}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--gag), var(--core))',
              }}
            />
          </div>
        </div>
      </aside>

      {/* Columna Principal */}
      <div className="main-column">
        <header className="topbar">
          <button
            type="button"
            className="btn mobile-menu-btn"
            style={{ padding: '7px 10px' }}
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Abrir menú de módulos"
          >
            <Menu size={16} />
          </button>

          {route.kind !== 'dashboard' && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12.5 }}>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: '5px 8px', color: 'var(--gag)' }}
                onClick={() => navigate({ kind: 'dashboard' })}
              >
                <Home size={13} /> Inicio
              </button>
              <ChevronRight size={13} color="#6C819B" />
              <span className="font-mono" style={{ color: 'var(--ink)', fontWeight: 600 }}>
                {route.kind === 'evidence'
                  ? 'Evidencia Viva'
                  : route.kind === 'audit'
                    ? 'Auditoría y Mitos'
                    : activeModule?.id}
              </span>
            </div>
          )}

          <button
            type="button"
            className="btn"
            style={{ flex: '1 1 220px', maxWidth: 400, justifyContent: 'space-between', color: 'var(--ink-2)' }}
            onClick={() => setSearchOpen(true)}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Search size={14} color="#3FD8C8" /> Buscar tema, droga o ensayo...
            </span>
            <span className="badge" style={{ fontSize: 10 }}>Ctrl+K</span>
          </button>

          <div
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
            title="Elegí cuánta profundidad querés ver en la pestaña Estudio"
          >
            <span className="eyebrow" style={{ fontSize: 10 }}>Nivel:</span>
            <div className="pill-switch">
              <button
                type="button"
                data-active={depthMode === 'base'}
                onClick={() => setDepthMode('base')}
                title="Solo fundamentos: fisiología, histología y bases desde cero"
              >
                <BookOpen size={12} /> Desde cero
              </button>
              <button
                type="button"
                data-tone="purple"
                data-active={depthMode === 'frontera'}
                onClick={() => setDepthMode('frontera')}
                title="Solo evidencia reciente 2022–2026 y perlas R2–R3"
              >
                R2–R3
              </button>
              <button
                type="button"
                data-tone="blue"
                data-active={depthMode === 'dual'}
                onClick={() => setDepthMode('dual')}
                title="Mostrar Capa Base y Capa R2–R3 integradas"
              >
                Completo
              </button>
            </div>
          </div>

          <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              className="btn"
              style={{ padding: '7px 11px' }}
              onClick={() => setHelpOpen(true)}
              title="Guía rápida de uso para residentes"
            >
              <HelpCircle size={14} color="#3FD8C8" /> Guía
            </button>

            <div
              className="badge badge-cyan"
              style={{ padding: '5px 10px' }}
              title="Progreso SATI acumulado automáticamente en este navegador"
            >
              <Activity size={12} /> {stats.rank} ({stats.globalPct}%)
            </div>
          </div>
        </header>

        <main className="main-content">
          <DidacticBanner />

          {route.kind === 'dashboard' && (
            <DashboardView
              modules={modules}
              evidencia={evidencia}
              auditCount={auditoria.length}
              stats={stats}
              onOpenModule={openModule}
              onOpenEvidence={() => navigate({ kind: 'evidence' })}
              onOpenAudit={() => navigate({ kind: 'audit' })}
              onOpenSearch={() => setSearchOpen(true)}
            />
          )}

          {route.kind === 'evidence' && (
            <LivingEvidenceView
              data={evidencia}
              onNavigateModule={(m) => openModule(m)}
            />
          )}

          {route.kind === 'audit' && (
            <AuditView
              entries={auditoria}
              onNavigateModule={(m) => openModule(m)}
            />
          )}

          {route.kind === 'module' && activeModule && (
            <ModuleView
              moduleData={activeModule}
              modules={modules}
              depthMode={depthMode}
              activeTab={route.tab || (activeModule.id === 'M12' ? 'entrenamiento' : activeModule.pilotoFase2 ? 'simulador' : 'estudio')}
              onChangeTab={(tab) =>
                navigate({ kind: 'module', moduleId: activeModule.id, tab })
              }
              onChangeDepthMode={setDepthMode}
              onGoHome={() => navigate({ kind: 'dashboard' })}
              evidenciaEntries={moduleEvidence}
              auditEntries={moduleAudit}
              store={store}
              onAnswerMcq={answerMcq}
              onResetMcqs={resetModuleMcqs}
              onReviewCase={markCaseReviewed}
              onToggleFlashcard={toggleFlashcardMastered}
              onNavigateModule={openModule}
            />
          )}
        </main>
      </div>

      <CommandSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        modules={modules}
        evidencia={evidencia.entradas}
        auditoria={auditoria}
        onSelectModule={(m) => openModule(m)}
        onSelectEvidence={() => navigate({ kind: 'evidence' })}
        onSelectAudit={() => navigate({ kind: 'audit' })}
      />

      {helpOpen && (
        <div
          onClick={() => setHelpOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 95,
            background: 'rgba(4, 8, 15, 0.78)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
          }}
        >
          <div
            className="panel"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 580,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <HelpCircle size={18} color="#3FD8C8" />
                <h2 className="font-display" style={{ margin: 0, fontSize: 19 }}>
                  Cómo aprovechar Sepsis Atlas UTI
                </h2>
              </div>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setHelpOpen(false)}
                aria-label="Cerrar guía"
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: 'var(--ink-2)' }}>
              <div style={{ background: 'var(--bg-2)', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--line-soft)' }}>
                <strong style={{ color: 'var(--gag)' }}>1. Elegí tu nivel de lectura arriba:</strong> usá{' '}
                <strong>Desde cero</strong> si querés fisiología e histología pura, <strong>R2–R3</strong> para ir directo a ensayos 2022–2026 o <strong>Completo</strong> para ver ambas capas juntas.
              </div>
              <div style={{ background: 'var(--bg-2)', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--line-soft)' }}>
                <strong style={{ color: 'var(--gag)' }}>2. Experimentá con los 3 simuladores en vivo:</strong> en{' '}
                <strong>M03 (Glicocálix)</strong>, <strong>M05 (Hemodinamia)</strong> y <strong>M09 (PK/PD Antibióticos)</strong> cargá un escenario clínico arriba y mové los controles para ver qué cambia.
              </div>
              <div style={{ background: 'var(--bg-2)', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--line-soft)' }}>
                <strong style={{ color: 'var(--gag)' }}>3. Entrená para guardias y examen SATI:</strong> cada módulo incluye MCQs comentados, casos de &ldquo;Detectá el Error&rdquo; y flashcards que guardan tu progreso.
              </div>
              <div style={{ background: 'var(--bg-2)', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--line-soft)' }}>
                <strong style={{ color: 'var(--gag)' }}>4. Buscá en segundos (Ctrl+K) y revisá Evidencia Viva:</strong> escribí cualquier droga, score o ensayo para saltar directo al módulo correspondiente.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-primary" onClick={() => setHelpOpen(false)}>
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
