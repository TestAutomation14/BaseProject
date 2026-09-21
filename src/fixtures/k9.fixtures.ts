import { Page } from '@playwright/test';
import {
  K9Page, K9SearchPage, CPAPage, CPAEntryPage, K9ReportsSearchPage, K9ReportsPage,
  ReportEntryPage, ReportEntryDetectionTabPage, ReportEntryNamesTabPage,
  ReportEntryPreventiveActionTabPage, ReportEntrySearchTabPage,
  ReportEntryTrackingTabPage, ReportEntryNarrativeTabPage,
  ReportEntryApprovalTabPage, ReportEntryDetailsTabPage,
  K9PersonnelPage, K9PersonnelEntryPage, K9PersonnelEntryPhysicalTabPage,
  K9PersonnelEntryMedicalTabPage, K9PersonnelEntryReportsTabPage,
  K9PersonnelEntryTrainingTabPage, K9PersonnelEntryCommentsTabPage,
  K9PersonnelEntryCertificationsTabPage, K9PersonnelEntryAwardsTabPage,
  K9TrainingPage, K9TrainingEntryPage, K9TrainingEntryActivityTabPage,
  K9TrainingEntryApprovalTabPage, K9TrainingAidPage,
  K9ActivityEntryPage, K9ActivityEntryDetailsTabPage,
  K9ActivityEntryTrainingAidsTabPage, K9ActivityEntryParticipantsTabPage,
  K9ActivityEntryObjectivesTabPage, K9ActivityEntryCommentsTabPage,
  K9ActivityEntryTracksAndMapsTabPage,
  K9MedicalPage, MedicalVisitEntryPage, MedicalVisitEntryDetailsTabPage,
  K9TeamPage, K9TeamEntryPage,
} from '../pages/k9';

// ── Type ─────────────────────────────────────────────────────────────────────

export type K9Fixture = {
  k9: {
    module: K9Page;
    k9Search: K9SearchPage;
    cPA: CPAPage;
    cPAEntry: CPAEntryPage;
    k9ReportsSearch: K9ReportsSearchPage;
    k9Reports: K9ReportsPage;
    reportEntry: ReportEntryPage & {
      reportEntryDetectionTab: ReportEntryDetectionTabPage;
      reportEntryNamesTab: ReportEntryNamesTabPage;
      reportEntryPreventiveActionTab: ReportEntryPreventiveActionTabPage;
      reportEntrySearchTab: ReportEntrySearchTabPage;
      reportEntryTrackingTab: ReportEntryTrackingTabPage;
      reportEntryNarrativeTab: ReportEntryNarrativeTabPage;
      reportEntryApprovalTab: ReportEntryApprovalTabPage;
      reportEntryDetailsTab: ReportEntryDetailsTabPage;
    };
    k9Personnel: K9PersonnelPage;
    k9PersonnelEntry: K9PersonnelEntryPage & {
      k9PersonnelEntryPhysicalTab: K9PersonnelEntryPhysicalTabPage;
      k9PersonnelEntryMedicalTab: K9PersonnelEntryMedicalTabPage;
      k9PersonnelEntryReportsTab: K9PersonnelEntryReportsTabPage;
      k9PersonnelEntryTrainingTab: K9PersonnelEntryTrainingTabPage;
      k9PersonnelEntryCommentsTab: K9PersonnelEntryCommentsTabPage;
      k9PersonnelEntryCertificationsTab: K9PersonnelEntryCertificationsTabPage;
      k9PersonnelEntryAwardsTab: K9PersonnelEntryAwardsTabPage;
    };
    k9Training: K9TrainingPage;
    k9TrainingEntry: K9TrainingEntryPage & {
      k9TrainingEntryActivityTab: K9TrainingEntryActivityTabPage;
      k9TrainingEntryApprovalTab: K9TrainingEntryApprovalTabPage;
    };
    k9TrainingAid: K9TrainingAidPage;
    k9ActivityEntry: K9ActivityEntryPage & {
      k9ActivityEntryDetailsTab: K9ActivityEntryDetailsTabPage;
      k9ActivityEntryTrainingAidsTab: K9ActivityEntryTrainingAidsTabPage;
      k9ActivityEntryParticipantsTab: K9ActivityEntryParticipantsTabPage;
      k9ActivityEntryObjectivesTab: K9ActivityEntryObjectivesTabPage;
      k9ActivityEntryCommentsTab: K9ActivityEntryCommentsTabPage;
      k9ActivityEntryTracksAndMapsTab: K9ActivityEntryTracksAndMapsTabPage;
    };
    k9Medical: K9MedicalPage;
    medicalVisitEntry: MedicalVisitEntryPage & {
      medicalVisitEntryDetailsTab: MedicalVisitEntryDetailsTabPage;
    };
    k9Team: K9TeamPage;
    k9TeamEntry: K9TeamEntryPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const k9FixtureDefs = {
  k9: async ({ page }: { page: Page }, use: (v: K9Fixture['k9']) => Promise<void>) => {
    const reportEntry = Object.assign(new ReportEntryPage(page), {
      reportEntryDetectionTab: new ReportEntryDetectionTabPage(page),
      reportEntryNamesTab: new ReportEntryNamesTabPage(page),
      reportEntryPreventiveActionTab: new ReportEntryPreventiveActionTabPage(page),
      reportEntrySearchTab: new ReportEntrySearchTabPage(page),
      reportEntryTrackingTab: new ReportEntryTrackingTabPage(page),
      reportEntryNarrativeTab: new ReportEntryNarrativeTabPage(page),
      reportEntryApprovalTab: new ReportEntryApprovalTabPage(page),
      reportEntryDetailsTab: new ReportEntryDetailsTabPage(page),
    });
    const k9PersonnelEntry = Object.assign(new K9PersonnelEntryPage(page), {
      k9PersonnelEntryPhysicalTab: new K9PersonnelEntryPhysicalTabPage(page),
      k9PersonnelEntryMedicalTab: new K9PersonnelEntryMedicalTabPage(page),
      k9PersonnelEntryReportsTab: new K9PersonnelEntryReportsTabPage(page),
      k9PersonnelEntryTrainingTab: new K9PersonnelEntryTrainingTabPage(page),
      k9PersonnelEntryCommentsTab: new K9PersonnelEntryCommentsTabPage(page),
      k9PersonnelEntryCertificationsTab: new K9PersonnelEntryCertificationsTabPage(page),
      k9PersonnelEntryAwardsTab: new K9PersonnelEntryAwardsTabPage(page),
    });
    const k9TrainingEntry = Object.assign(new K9TrainingEntryPage(page), {
      k9TrainingEntryActivityTab: new K9TrainingEntryActivityTabPage(page),
      k9TrainingEntryApprovalTab: new K9TrainingEntryApprovalTabPage(page),
    });
    const k9ActivityEntry = Object.assign(new K9ActivityEntryPage(page), {
      k9ActivityEntryDetailsTab: new K9ActivityEntryDetailsTabPage(page),
      k9ActivityEntryTrainingAidsTab: new K9ActivityEntryTrainingAidsTabPage(page),
      k9ActivityEntryParticipantsTab: new K9ActivityEntryParticipantsTabPage(page),
      k9ActivityEntryObjectivesTab: new K9ActivityEntryObjectivesTabPage(page),
      k9ActivityEntryCommentsTab: new K9ActivityEntryCommentsTabPage(page),
      k9ActivityEntryTracksAndMapsTab: new K9ActivityEntryTracksAndMapsTabPage(page),
    });
    const medicalVisitEntry = Object.assign(new MedicalVisitEntryPage(page), {
      medicalVisitEntryDetailsTab: new MedicalVisitEntryDetailsTabPage(page),
    });
    await use({
      module: new K9Page(page),
      k9Search: new K9SearchPage(page),
      cPA: new CPAPage(page),
      cPAEntry: new CPAEntryPage(page),
      k9ReportsSearch: new K9ReportsSearchPage(page),
      k9Reports: new K9ReportsPage(page),
      reportEntry,
      k9Personnel: new K9PersonnelPage(page),
      k9PersonnelEntry,
      k9Training: new K9TrainingPage(page),
      k9TrainingEntry,
      k9TrainingAid: new K9TrainingAidPage(page),
      k9ActivityEntry,
      k9Medical: new K9MedicalPage(page),
      medicalVisitEntry,
      k9Team: new K9TeamPage(page),
      k9TeamEntry: new K9TeamEntryPage(page),
    });
  },
};
