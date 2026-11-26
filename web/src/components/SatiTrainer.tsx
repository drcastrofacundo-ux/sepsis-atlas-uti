import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import type { AtlasModule } from '../types/atlas';
import type { McqAnswerState } from '../hooks/useProgress';
import { RichMarkdown } from './RichMarkdown';

interface SatiTrainerProps {
  moduleData: AtlasModule;
  mcqAnswers: Record<string, McqAnswerState>;
  reviewedCases: Record<string, boolean>;
  masteredFlashcards: Record<string, boolean>;
  onAnswerMcq: (mcqId: string, selected: string, isCorrect: boolean) => void;
  onResetMcqs: (mcqIds: string[]) => void;
  onReviewCase: (caseId: string) => void;
  onToggleFlashcard: (fcId: string, value?: boolean) => void;
  onNavigateModule: (moduleId: string) => void;
}

export const SatiTrainer: React.FC<SatiTrainerProps> = ({
  moduleData,
  mcqAnswers,
  reviewedCases,
  masteredFlashcards,
  onAnswerMcq,
  onResetMcqs,
  onReviewCase,
  onToggleFlashcard,
  onNavigateModule,
}) => {
  const [subTab, setSubTab] = useState<'mcqs' | 'casos' | 'flashcards'>('mcqs');
  const [fcIndex, setFcIndex] = useState<number>(0);
  const [fcFlipped, setFcFlipped] = useState<boolean>(false);

  const mcqScore = useMemo(() => {
    let answered = 0;
    let correct = 0;
    for (const q of moduleData.mcqs) {
      const a = mcqAnswers[q.id];
      if (a) {
        answered += 1;
        if (a.correct) correct += 1;
      }
    }
    return { answered, correct, total: moduleData.mcqs.length };
  }, [moduleData.mcqs, mcqAnswers]);

  const currentFc =
    moduleData.flashcards.length > 0
      ? moduleData.flashcards[Math.min(fcIndex, moduleData.flashcards.length - 1)]
      : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Barra superior del Entrenador */}
      <div
        className="panel"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div className="pill-switch">
          <button
            type="button"
            data-active={subTab === 'mcqs'}
            onClick={() => setSubTab('mcqs')}
          >
            Examen SATI ({mcqScore.correct}/{mcqScore.total})
          </button>
          {moduleData.casosError.length > 0 && (
            <button
              type="button"
              data-tone="purple"
              data-active={subTab === 'casos'}
              onClick={() => setSubTab('casos')}
            >
              Detectá el Error ({moduleData.casosError.length})
            </button>
          )}
          {moduleData.flashcards.length > 0 && (
            <button
              type="button"
              data-tone="blue"
              data-active={subTab === 'flashcards'}
              onClick={() => setSubTab('flashcards')}
            >
              Flashcards ({moduleData.flashcards.length})
            </button>
          )}
        </div>

        {subTab === 'mcqs' && mcqScore.answered > 0 && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => onResetMcqs(moduleData.mcqs.map((q) => q.id))}
          >
            <RotateCcw size={14} /> Reiniciar preguntas
          </button>
        )}
      </div>

      {/* Tab MCQs */}
      {subTab === 'mcqs' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {moduleData.mcqs.map((q) => {
            const state = mcqAnswers[q.id];
            const isAnswered = Boolean(state);

            return (
              <div key={q.id} className="panel">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <span className="badge badge-cyan">{q.etiqueta}</span>
                  {isAnswered && (
                    <span className={`badge ${state.correct ? 'badge-green' : 'badge-red'}`}>
                      {state.correct ? (
                        <>
                          <CheckCircle2 size={12} /> Correcta ({q.correcta})
                        </>
                      ) : (
                        <>
                          <XCircle size={12} /> Elegiste {state.selected} · Correcta: {q.correcta}
                        </>
                      )}
                    </span>
                  )}
                </div>

                <RichMarkdown markdown={q.enunciado} onNavigateModule={onNavigateModule} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                  {q.opciones.map((opt) => {
                    const isSelected = state?.selected === opt.letra;
                    const isCorrectOpt = opt.letra === q.correcta;

                    let borderCol = 'var(--line)';
                    let bgCol = 'var(--bg-2)';
                    if (isAnswered) {
                      if (isCorrectOpt) {
                        borderCol = 'rgba(52, 211, 153, 0.7)';
                        bgCol = 'rgba(52, 211, 153, 0.1)';
                      } else if (isSelected && !isCorrectOpt) {
                        borderCol = 'rgba(255, 92, 122, 0.7)';
                        bgCol = 'rgba(255, 92, 122, 0.1)';
                      }
                    }

                    return (
                      <button
                        key={opt.letra}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => onAnswerMcq(q.id, opt.letra, opt.letra === q.correcta)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                          textAlign: 'left',
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: 8,
                          border: `1px solid ${borderCol}`,
                          background: bgCol,
                          color: 'var(--ink)',
                          cursor: isAnswered ? 'default' : 'pointer',
                        }}
                      >
                        <span
                          className="font-mono"
                          style={{
                            fontWeight: 700,
                            color: isAnswered && isCorrectOpt ? 'var(--ok)' : 'var(--gag)',
                            minWidth: 22,
                          }}
                        >
                          {opt.letra})
                        </span>
                        <div style={{ flex: 1 }}>
                          <RichMarkdown
                            markdown={opt.texto}
                            onNavigateModule={onNavigateModule}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && q.justificacion && (
                  <div
                    style={{
                      marginTop: 12,
                      padding: '10px 12px',
                      borderRadius: 8,
                      borderLeft: '3px solid var(--gag)',
                      background: 'rgba(63, 216, 200, 0.08)',
                    }}
                  >
                    <div className="eyebrow" style={{ color: 'var(--gag)', marginBottom: 4 }}>
                      Justificación R2–R3
                    </div>
                    <RichMarkdown
                      markdown={q.justificacion}
                      onNavigateModule={onNavigateModule}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab Casos de Error */}
      {subTab === 'casos' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {moduleData.casosError.map((c) => {
            const revealed = Boolean(reviewedCases[c.id]);
            return (
              <div key={c.id} className="panel">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <AlertTriangle size={16} color="#E9B44C" />
                    <h4 className="font-display" style={{ margin: 0, fontSize: 16 }}>
                      {c.titulo}
                    </h4>
                  </div>
                  {revealed && <span className="badge badge-green">Revisado</span>}
                </div>

                <RichMarkdown markdown={c.escenario} onNavigateModule={onNavigateModule} />

                {!revealed ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: 10 }}
                    onClick={() => onReviewCase(c.id)}
                  >
                    <Eye size={14} /> Revelar error oculto y conducta correcta
                  </button>
                ) : (
                  <div
                    style={{
                      marginTop: 12,
                      padding: '10px 12px',
                      borderRadius: 8,
                      borderLeft: '3px solid var(--alert)',
                      background: 'rgba(255, 92, 122, 0.08)',
                    }}
                  >
                    <div className="eyebrow" style={{ color: 'var(--alert)', marginBottom: 4 }}>
                      Análisis de Guardia
                    </div>
                    <RichMarkdown
                      markdown={c.resolucion || 'Caso marcado como analizado.'}
                      onNavigateModule={onNavigateModule}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab Flashcards */}
      {subTab === 'flashcards' && currentFc && (
        <div className="panel" style={{ maxWidth: 820 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 14,
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            <span className="eyebrow">
              Tarjeta {fcIndex + 1} de {moduleData.flashcards.length}
            </span>
            <button
              type="button"
              className="btn-preset"
              data-active={Boolean(masteredFlashcards[currentFc.id])}
              onClick={() => onToggleFlashcard(currentFc.id)}
            >
              <Award size={13} />{' '}
              {masteredFlashcards[currentFc.id] ? 'Dominada' : 'Marcar como dominada'}
            </button>
          </div>

          <div
            onClick={() => setFcFlipped((prev) => !prev)}
            style={{
              minHeight: 190,
              padding: '22px 24px',
              borderRadius: 12,
              border: `1.5px solid ${fcFlipped ? 'var(--core)' : 'var(--gag)'}`,
              background: fcFlipped ? 'rgba(154, 135, 245, 0.08)' : 'var(--bg-2)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              className="eyebrow"
              style={{ color: fcFlipped ? 'var(--core)' : 'var(--gag)', marginBottom: 10 }}
            >
              {fcFlipped ? 'Reverso · Respuesta / Evidencia (clic para volver)' : 'Anverso · Pregunta Rápida (clic para voltear)'}
            </div>
            <div style={{ fontSize: 16 }}>
              <RichMarkdown
                markdown={fcFlipped ? currentFc.dorso : currentFc.frente}
                onNavigateModule={onNavigateModule}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 14,
              gap: 10,
            }}
          >
            <button
              type="button"
              className="btn"
              disabled={fcIndex === 0}
              onClick={() => {
                setFcFlipped(false);
                setFcIndex((i) => Math.max(0, i - 1));
              }}
            >
              <ChevronLeft size={15} /> Anterior
            </button>

            <button
              type="button"
              className="btn"
              disabled={fcIndex >= moduleData.flashcards.length - 1}
              onClick={() => {
                setFcFlipped(false);
                setFcIndex((i) => Math.min(moduleData.flashcards.length - 1, i + 1));
              }}
            >
              Siguiente <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
