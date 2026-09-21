import { Page } from '@playwright/test';
import {
  CoronerPage,
  CoronerCaseSearchPage, CoronerEvidenceSearchPage,
  CoronerCaseEntryPage, CoronerCaseEntryMainTabPage, CoronerCaseEntryNamesTabPage,
  CoronerCaseEntryReviewTabPage, CoronerCaseEntryEffortsTabPage,
  CoronerCaseEntryReportsTabPage, CoronerCaseEntryEvidenceTabPage,
  CoronerCaseEntryToxicologyTabPage, CoronerDrMedTabPage,
  CoronerReviewPage, CoronerEffortsPage, CoronerCaseReportEntryPage,
  CoronerEvidenceEntryPage, CoronerEvidenceHistoryPage,
} from '../pages/coroner';

// ── Type ─────────────────────────────────────────────────────────────────────

export type CoronerFixture = {
  coroner: {
    module: CoronerPage;
    coronerCaseSearch: CoronerCaseSearchPage;
    coronerEvidenceSearch: CoronerEvidenceSearchPage;
    coronerCaseEntry: CoronerCaseEntryPage & {
      coronerCaseEntryMainTab: CoronerCaseEntryMainTabPage;
      coronerCaseEntryNamesTab: CoronerCaseEntryNamesTabPage;
      coronerCaseEntryReviewTab: CoronerCaseEntryReviewTabPage;
      coronerCaseEntryEffortsTab: CoronerCaseEntryEffortsTabPage;
      coronerCaseEntryReportsTab: CoronerCaseEntryReportsTabPage;
      coronerCaseEntryEvidenceTab: CoronerCaseEntryEvidenceTabPage;
      coronerCaseEntryToxicologyTab: CoronerCaseEntryToxicologyTabPage;
      coronerDrMedTab: CoronerDrMedTabPage;
    };
    coronerReview: CoronerReviewPage;
    coronerEfforts: CoronerEffortsPage;
    coronerCaseReportEntry: CoronerCaseReportEntryPage;
    coronerEvidenceEntry: CoronerEvidenceEntryPage;
    coronerEvidenceHistory: CoronerEvidenceHistoryPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const coronerFixtureDefs = {
  coroner: async ({ page }: { page: Page }, use: (v: CoronerFixture['coroner']) => Promise<void>) => {
    const coronerCaseEntry = Object.assign(new CoronerCaseEntryPage(page), {
      coronerCaseEntryMainTab: new CoronerCaseEntryMainTabPage(page),
      coronerCaseEntryNamesTab: new CoronerCaseEntryNamesTabPage(page),
      coronerCaseEntryReviewTab: new CoronerCaseEntryReviewTabPage(page),
      coronerCaseEntryEffortsTab: new CoronerCaseEntryEffortsTabPage(page),
      coronerCaseEntryReportsTab: new CoronerCaseEntryReportsTabPage(page),
      coronerCaseEntryEvidenceTab: new CoronerCaseEntryEvidenceTabPage(page),
      coronerCaseEntryToxicologyTab: new CoronerCaseEntryToxicologyTabPage(page),
      coronerDrMedTab: new CoronerDrMedTabPage(page),
    });
    await use({
      module: new CoronerPage(page),
      coronerCaseSearch: new CoronerCaseSearchPage(page),
      coronerEvidenceSearch: new CoronerEvidenceSearchPage(page),
      coronerCaseEntry,
      coronerReview: new CoronerReviewPage(page),
      coronerEfforts: new CoronerEffortsPage(page),
      coronerCaseReportEntry: new CoronerCaseReportEntryPage(page),
      coronerEvidenceEntry: new CoronerEvidenceEntryPage(page),
      coronerEvidenceHistory: new CoronerEvidenceHistoryPage(page),
    });
  },
};
