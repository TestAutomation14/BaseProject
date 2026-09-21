import { Page } from '@playwright/test';
import {
  CMPage,
  CMSearchPage, CMSearchAdvancedTabPage,
  CaseFolderPage, CaseFolderAssignmentTabPage, CaseFolderTasksTabPage,
  TaskUpdatePage, CaseFolderHistoryTabPage, CaseFolderCustomTabPage,
  CaseFolderInvestigatorsTabPage, CaseFolderReviewTabPage, CaseFolderEffortsTabPage,
  CaseFolderMOTabPage, CaseFolderUCRTabPage, CaseFolderPropertyTabPage,
  CaseFolderReportingTabPage, CaseFolderLeadsTabPage,
  MOSearchPage, CaseReviewPage, CaseEffortsPage,
  LeadManagementPage,
  LeadEntryPage, LeadTasksTabPage, LeadLocationTabPage, LeadSummaryTabPage,
  LeadEntryEffortsTabPage, LeadEntryHistoryTabPage, LeadEntryNamesTabPage,
  LeadEntryVehicleTabPage,
  LeadTaskPage, DefaultTaskPage, LeadEffortPage,
  CaseSrchNewPage,
} from '../pages/cm';

// ── Type ─────────────────────────────────────────────────────────────────────

export type CMFixture = {
  cm: {
    module: CMPage;
    cMSearch: CMSearchPage & { cMSearchAdvancedTab: CMSearchAdvancedTabPage };
    caseFolder: CaseFolderPage & {
      caseFolderAssignmentTab: CaseFolderAssignmentTabPage;
      caseFolderTasksTab: CaseFolderTasksTabPage;
      caseFolderHistoryTab: CaseFolderHistoryTabPage;
      caseFolderCustomTab: CaseFolderCustomTabPage;
      caseFolderInvestigatorsTab: CaseFolderInvestigatorsTabPage;
      caseFolderReviewTab: CaseFolderReviewTabPage;
      caseFolderEffortsTab: CaseFolderEffortsTabPage;
      caseFolderMOTab: CaseFolderMOTabPage;
      caseFolderUCRTab: CaseFolderUCRTabPage;
      caseFolderPropertyTab: CaseFolderPropertyTabPage;
      caseFolderReportingTab: CaseFolderReportingTabPage;
      caseFolderLeadsTab: CaseFolderLeadsTabPage;
    };
    taskUpdate: TaskUpdatePage;
    mOSearch: MOSearchPage;
    caseReview: CaseReviewPage;
    caseEfforts: CaseEffortsPage;
    leadManagement: LeadManagementPage;
    leadEntry: LeadEntryPage & {
      leadTasksTab: LeadTasksTabPage;
      leadLocationTab: LeadLocationTabPage;
      leadSummaryTab: LeadSummaryTabPage;
      leadEntryEffortsTab: LeadEntryEffortsTabPage;
      leadEntryHistoryTab: LeadEntryHistoryTabPage;
      leadEntryNamesTab: LeadEntryNamesTabPage;
      leadEntryVehicleTab: LeadEntryVehicleTabPage;
    };
    leadTask: LeadTaskPage;
    defaultTask: DefaultTaskPage;
    leadEffort: LeadEffortPage;
    caseSrchNew: CaseSrchNewPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const cmFixtureDefs = {
  cm: async ({ page }: { page: Page }, use: (v: CMFixture['cm']) => Promise<void>) => {
    const cMSearch = Object.assign(new CMSearchPage(page), {
      cMSearchAdvancedTab: new CMSearchAdvancedTabPage(page),
    });
    const caseFolder = Object.assign(new CaseFolderPage(page), {
      caseFolderAssignmentTab: new CaseFolderAssignmentTabPage(page),
      caseFolderTasksTab: new CaseFolderTasksTabPage(page),
      caseFolderHistoryTab: new CaseFolderHistoryTabPage(page),
      caseFolderCustomTab: new CaseFolderCustomTabPage(page),
      caseFolderInvestigatorsTab: new CaseFolderInvestigatorsTabPage(page),
      caseFolderReviewTab: new CaseFolderReviewTabPage(page),
      caseFolderEffortsTab: new CaseFolderEffortsTabPage(page),
      caseFolderMOTab: new CaseFolderMOTabPage(page),
      caseFolderUCRTab: new CaseFolderUCRTabPage(page),
      caseFolderPropertyTab: new CaseFolderPropertyTabPage(page),
      caseFolderReportingTab: new CaseFolderReportingTabPage(page),
      caseFolderLeadsTab: new CaseFolderLeadsTabPage(page),
    });
    const leadEntry = Object.assign(new LeadEntryPage(page), {
      leadTasksTab: new LeadTasksTabPage(page),
      leadLocationTab: new LeadLocationTabPage(page),
      leadSummaryTab: new LeadSummaryTabPage(page),
      leadEntryEffortsTab: new LeadEntryEffortsTabPage(page),
      leadEntryHistoryTab: new LeadEntryHistoryTabPage(page),
      leadEntryNamesTab: new LeadEntryNamesTabPage(page),
      leadEntryVehicleTab: new LeadEntryVehicleTabPage(page),
    });
    await use({
      module: new CMPage(page),
      cMSearch,
      caseFolder,
      taskUpdate: new TaskUpdatePage(page),
      mOSearch: new MOSearchPage(page),
      caseReview: new CaseReviewPage(page),
      caseEfforts: new CaseEffortsPage(page),
      leadManagement: new LeadManagementPage(page),
      leadEntry,
      leadTask: new LeadTaskPage(page),
      defaultTask: new DefaultTaskPage(page),
      leadEffort: new LeadEffortPage(page),
      caseSrchNew: new CaseSrchNewPage(page),
    });
  },
};
