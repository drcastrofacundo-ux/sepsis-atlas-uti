import { useCallback, useEffect, useMemo, useState } from 'react';
import type { AtlasModule } from '../types/atlas';

export interface McqAnswerState {
  selected: string;
  correct: boolean;
  answeredAt: string;
}

export interface ProgressStore {
  mcqAnswers: Record<string, McqAnswerState>;
  reviewedCases: Record<string, boolean>;
  masteredFlashcards: Record<string, boolean>;
  visitedModules: Record<string, boolean>;
}

const STORAGE_KEY = 'sepsis_atlas_uti_progress_v1';

const EMPTY_STORE: ProgressStore = {
  mcqAnswers: {},
  reviewedCases: {},
  masteredFlashcards: {},
  visitedModules: {},
};

function loadInitialStore(): ProgressStore {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STORE;
    const parsed = JSON.parse(raw) as Partial<ProgressStore>;
    return {
      mcqAnswers: parsed.mcqAnswers ?? {},
      reviewedCases: parsed.reviewedCases ?? {},
      masteredFlashcards: parsed.masteredFlashcards ?? {},
      visitedModules: parsed.visitedModules ?? {},
    };
  } catch {
    return EMPTY_STORE;
  }
}

export function useProgress(modules: AtlasModule[]) {
  const [store, setStore] = useState<ProgressStore>(loadInitialStore);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      // Ignore quota errors cleanly
    }
  }, [store]);

  const answerMcq = useCallback((mcqId: string, selected: string, isCorrect: boolean) => {
    setStore((prev) => ({
      ...prev,
      mcqAnswers: {
        ...prev.mcqAnswers,
        [mcqId]: {
          selected,
          correct: isCorrect,
          answeredAt: new Date().toISOString(),
        },
      },
    }));
  }, []);

  const resetModuleMcqs = useCallback((mcqIds: string[]) => {
    setStore((prev) => {
      const next = { ...prev.mcqAnswers };
      for (const id of mcqIds) delete next[id];
      return { ...prev, mcqAnswers: next };
    });
  }, []);

  const markCaseReviewed = useCallback((caseId: string) => {
    setStore((prev) => ({
      ...prev,
      reviewedCases: { ...prev.reviewedCases, [caseId]: true },
    }));
  }, []);

  const toggleFlashcardMastered = useCallback((fcId: string, value?: boolean) => {
    setStore((prev) => ({
      ...prev,
      masteredFlashcards: {
        ...prev.masteredFlashcards,
        [fcId]: value !== undefined ? value : !prev.masteredFlashcards[fcId],
      },
    }));
  }, []);

  const markModuleVisited = useCallback((moduleId: string) => {
    setStore((prev) => {
      if (prev.visitedModules[moduleId]) return prev;
      return {
        ...prev,
        visitedModules: { ...prev.visitedModules, [moduleId]: true },
      };
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    setStore(EMPTY_STORE);
  }, []);

  const stats = useMemo(() => {
    let totalMcqs = 0;
    let answeredMcqs = 0;
    let correctMcqs = 0;
    let totalFlashcards = 0;
    let masteredFlashcards = 0;
    let totalCases = 0;
    let reviewedCases = 0;

    const perModule: Record<
      string,
      { totalItems: number; completedItems: number; pct: number; mcqCorrect: number; mcqTotal: number }
    > = {};

    for (const m of modules) {
      totalMcqs += m.mcqs.length;
      totalFlashcards += m.flashcards.length;
      totalCases += m.casosError.length;

      let mCompleted = 0;
      let mMcqCorrect = 0;
      const mTotal = m.mcqs.length + m.casosError.length + m.flashcards.length;

      for (const q of m.mcqs) {
        const ans = store.mcqAnswers[q.id];
        if (ans) {
          answeredMcqs += 1;
          if (ans.correct) {
            correctMcqs += 1;
            mMcqCorrect += 1;
            mCompleted += 1;
          }
        }
      }
      for (const c of m.casosError) {
        if (store.reviewedCases[c.id]) {
          reviewedCases += 1;
          mCompleted += 1;
        }
      }
      for (const fc of m.flashcards) {
        if (store.masteredFlashcards[fc.id]) {
          masteredFlashcards += 1;
          mCompleted += 1;
        }
      }

      perModule[m.id] = {
        totalItems: mTotal,
        completedItems: mCompleted,
        pct: mTotal > 0 ? Math.round((mCompleted / mTotal) * 100) : 0,
        mcqCorrect: mMcqCorrect,
        mcqTotal: m.mcqs.length,
      };
    }

    const totalAll = totalMcqs + totalCases + totalFlashcards;
    const doneAll = correctMcqs + reviewedCases + masteredFlashcards;
    const globalPct = totalAll > 0 ? Math.round((doneAll / totalAll) * 100) : 0;

    let rank = 'Residente R2 · Guardia Inicial';
    if (globalPct >= 75) {
      rank = 'Fellow / Staff SATI';
    } else if (globalPct >= 30) {
      rank = 'Residente R3 · Unidad Crítica';
    }

    return {
      totalMcqs,
      answeredMcqs,
      correctMcqs,
      totalFlashcards,
      masteredFlashcards,
      totalCases,
      reviewedCases,
      globalPct,
      rank,
      perModule,
    };
  }, [modules, store]);

  return {
    store,
    stats,
    answerMcq,
    resetModuleMcqs,
    markCaseReviewed,
    toggleFlashcardMastered,
    markModuleVisited,
    resetAllProgress,
  };
}
