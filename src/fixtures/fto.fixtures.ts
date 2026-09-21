import { Page } from '@playwright/test';
import {
  FTOPage, FTOTestPage,
  TraineeSearchPage, TraineeEntryPage, TraineeEntryDORsTabPage, TraineeEntryTasksTabPage,
  FTOEvalFormPage, EvaluationFormEntryPage, EvaluationFormCategoryTabPage,
  EvaluationFormColumnsTabPage, EvaluationFormCategoryGroupTabPage,
  EvaluationFormGuidelinesWindowPage, EvaluationFormGuidelinesTabPage,
  EvaluationFormCategoryEntryPage,
  FTOCritiquePage, FTOCritiqueEntryPage, FTOCritiqueEvaluationTabPage,
  FTOCritiqueNarrativeTabPage, FTOCritiqueApprovalTabPage,
  DOREntryPage, DOREntryEvaluationTabPage, DOREntryCallsTabPage,
  DOREntryTasksTabPage, DOREntryFinalizationTabPage, DOREntryApprovalTabPage,
  TaskEntryPage, TaskEntryMainTabPage,
  ActivityEntryPage as FTOActivityEntryOldPage,
  ActivityEntryTasksTabPage as FTOActivityEntryTasksTabPage,
  AddTaskEntryPage, FTOCommentsPage,
  FTOFormsConfigPage, FTOTasksConfigPage, FTOTasksConfigEntryPage,
  FTOActivityEntryPage, ChecklistEntryPage,
} from '../pages/fto';

// ── Type ─────────────────────────────────────────────────────────────────────

export type FTOFixture = {
  fTO: {
    module: FTOPage;
    fTOTest: FTOTestPage;
    traineeSearch: TraineeSearchPage;
    traineeEntry: TraineeEntryPage & {
      traineeEntryDORsTab: TraineeEntryDORsTabPage;
      traineeEntryTasksTab: TraineeEntryTasksTabPage;
    };
    fTOEvalForm: FTOEvalFormPage;
    evaluationFormEntry: EvaluationFormEntryPage & {
      evaluationFormCategoryTab: EvaluationFormCategoryTabPage;
      evaluationFormColumnsTab: EvaluationFormColumnsTabPage;
      evaluationFormCategoryGroupTab: EvaluationFormCategoryGroupTabPage;
      evaluationFormGuidelinesTab: EvaluationFormGuidelinesTabPage;
    };
    evaluationFormGuidelinesWindow: EvaluationFormGuidelinesWindowPage;
    evaluationFormCategoryEntry: EvaluationFormCategoryEntryPage;
    fTOCritique: FTOCritiquePage;
    fTOCritiqueEntry: FTOCritiqueEntryPage & {
      fTOCritiqueEvaluationTab: FTOCritiqueEvaluationTabPage;
      fTOCritiqueNarrativeTab: FTOCritiqueNarrativeTabPage;
      fTOCritiqueApprovalTab: FTOCritiqueApprovalTabPage;
    };
    dOREntry: DOREntryPage & {
      dOREntryEvaluationTab: DOREntryEvaluationTabPage;
      dOREntryCallsTab: DOREntryCallsTabPage;
      dOREntryTasksTab: DOREntryTasksTabPage;
      dOREntryFinalizationTab: DOREntryFinalizationTabPage;
      dOREntryApprovalTab: DOREntryApprovalTabPage;
    };
    taskEntry: TaskEntryPage & { taskEntryMainTab: TaskEntryMainTabPage };
    ftoActivityEntryOld: FTOActivityEntryOldPage & {
      activityEntryTasksTab: FTOActivityEntryTasksTabPage;
    };
    addTaskEntry: AddTaskEntryPage;
    fTOComments: FTOCommentsPage;
    fTOFormsConfig: FTOFormsConfigPage;
    fTOTasksConfig: FTOTasksConfigPage;
    fTOTasksConfigEntry: FTOTasksConfigEntryPage;
    fTOActivityEntry: FTOActivityEntryPage;
    checklistEntry: ChecklistEntryPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const ftoFixtureDefs = {
  fTO: async ({ page }: { page: Page }, use: (v: FTOFixture['fTO']) => Promise<void>) => {
    const traineeEntry = Object.assign(new TraineeEntryPage(page), {
      traineeEntryDORsTab: new TraineeEntryDORsTabPage(page),
      traineeEntryTasksTab: new TraineeEntryTasksTabPage(page),
    });
    const evaluationFormEntry = Object.assign(new EvaluationFormEntryPage(page), {
      evaluationFormCategoryTab: new EvaluationFormCategoryTabPage(page),
      evaluationFormColumnsTab: new EvaluationFormColumnsTabPage(page),
      evaluationFormCategoryGroupTab: new EvaluationFormCategoryGroupTabPage(page),
      evaluationFormGuidelinesTab: new EvaluationFormGuidelinesTabPage(page),
    });
    const fTOCritiqueEntry = Object.assign(new FTOCritiqueEntryPage(page), {
      fTOCritiqueEvaluationTab: new FTOCritiqueEvaluationTabPage(page),
      fTOCritiqueNarrativeTab: new FTOCritiqueNarrativeTabPage(page),
      fTOCritiqueApprovalTab: new FTOCritiqueApprovalTabPage(page),
    });
    const dOREntry = Object.assign(new DOREntryPage(page), {
      dOREntryEvaluationTab: new DOREntryEvaluationTabPage(page),
      dOREntryCallsTab: new DOREntryCallsTabPage(page),
      dOREntryTasksTab: new DOREntryTasksTabPage(page),
      dOREntryFinalizationTab: new DOREntryFinalizationTabPage(page),
      dOREntryApprovalTab: new DOREntryApprovalTabPage(page),
    });
    const taskEntry = Object.assign(new TaskEntryPage(page), {
      taskEntryMainTab: new TaskEntryMainTabPage(page),
    });
    const ftoActivityEntryOld = Object.assign(new FTOActivityEntryOldPage(page), {
      activityEntryTasksTab: new FTOActivityEntryTasksTabPage(page),
    });
    await use({
      module: new FTOPage(page),
      fTOTest: new FTOTestPage(page),
      traineeSearch: new TraineeSearchPage(page),
      traineeEntry,
      fTOEvalForm: new FTOEvalFormPage(page),
      evaluationFormEntry,
      evaluationFormGuidelinesWindow: new EvaluationFormGuidelinesWindowPage(page),
      evaluationFormCategoryEntry: new EvaluationFormCategoryEntryPage(page),
      fTOCritique: new FTOCritiquePage(page),
      fTOCritiqueEntry,
      dOREntry,
      taskEntry,
      ftoActivityEntryOld,
      addTaskEntry: new AddTaskEntryPage(page),
      fTOComments: new FTOCommentsPage(page),
      fTOFormsConfig: new FTOFormsConfigPage(page),
      fTOTasksConfig: new FTOTasksConfigPage(page),
      fTOTasksConfigEntry: new FTOTasksConfigEntryPage(page),
      fTOActivityEntry: new FTOActivityEntryPage(page),
      checklistEntry: new ChecklistEntryPage(page),
    });
  },
};
