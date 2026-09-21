import { Page } from '@playwright/test';
import {
  CADQAQIPage,
  CADQAEvalFormPage,
  EvaluationFormEntryPage as CQEvaluationFormEntryPage,
  EvaluationSearchPage,
  EvaluationFinalizationTabPage, EvaluationApprovalTabPage, EvaluationTabPage,
  EvaluationNarrativeTabPage, EvaluationEntryPage,
  SelectCallForQAPage, RandomListHistoryPage, RandomListHistoryScreenPage,
  RatingInstructionPage,
  EvaluationCallReceiptPage as CQEvaluationCallReceiptPage,
  QAEvaluationEntryPage,
} from '../pages/CADQAQI';

// ── Type ─────────────────────────────────────────────────────────────────────

export type CADQAQIFixture = {
  cADQAQI: {
    module: CADQAQIPage;
    cADQAEvalForm: CADQAEvalFormPage;
    evaluationFormEntry: CQEvaluationFormEntryPage;
    evaluationSearch: EvaluationSearchPage;
    evaluationEntry: EvaluationEntryPage & {
      evaluationFinalizationTab: EvaluationFinalizationTabPage;
      evaluationApprovalTab: EvaluationApprovalTabPage;
      evaluationTab: EvaluationTabPage;
      evaluationNarrativeTab: EvaluationNarrativeTabPage;
    };
    selectCallForQA: SelectCallForQAPage;
    randomListHistory: RandomListHistoryPage;
    randomListHistoryScreen: RandomListHistoryScreenPage;
    ratingInstruction: RatingInstructionPage;
    evaluationCallReceipt: CQEvaluationCallReceiptPage;
    qAEvaluationEntry: QAEvaluationEntryPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const cadqaqiFixtureDefs = {
  cADQAQI: async ({ page }: { page: Page }, use: (v: CADQAQIFixture['cADQAQI']) => Promise<void>) => {
    const evaluationEntry = Object.assign(new EvaluationEntryPage(page), {
      evaluationFinalizationTab: new EvaluationFinalizationTabPage(page),
      evaluationApprovalTab: new EvaluationApprovalTabPage(page),
      evaluationTab: new EvaluationTabPage(page),
      evaluationNarrativeTab: new EvaluationNarrativeTabPage(page),
    });
    await use({
      module: new CADQAQIPage(page),
      cADQAEvalForm: new CADQAEvalFormPage(page),
      evaluationFormEntry: new CQEvaluationFormEntryPage(page),
      evaluationSearch: new EvaluationSearchPage(page),
      evaluationEntry,
      selectCallForQA: new SelectCallForQAPage(page),
      randomListHistory: new RandomListHistoryPage(page),
      randomListHistoryScreen: new RandomListHistoryScreenPage(page),
      ratingInstruction: new RatingInstructionPage(page),
      evaluationCallReceipt: new CQEvaluationCallReceiptPage(page),
      qAEvaluationEntry: new QAEvaluationEntryPage(page),
    });
  },
};
