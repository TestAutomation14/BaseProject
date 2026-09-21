import { Page } from '@playwright/test';
import {
  PersonnelPage, PersonnelSearchPage, PersonnelEntryPage,
  PersonnelEntryMainTabPage, PersonnelEntryAssignmentTabPage,
  RFIDTabPage, AboutMeTabPage, AssignmentHistoryScreenPage,
  PersonnelLockDetailsScreenPage, PersonnelEntryWorkRecordTabPage,
  CADQAEvaluationsTabPage, MeaningfulReviewTabPage,
  PerformanceEvaluationTabPage, InjuryReportTabPage,
  WorkHistoryTabPage, MedicalHistoryTabPage,
  PersonnelEntryPreferencesTabPage, PersonnelEntrySecurityTabPage,
  PersonnelEntryTimeTabPage, PersonnelEntryTrainingTabPage,
  CertificationTabPage, SpecialSkillsTabPage, InnerTrainingTabPage,
  FTOTabPage, PersonnelEntryInventoryTabPage,
  PersonnelEntryEmergencyDataTabPage, PersonnelEntryAllowanceTabPage,
  PersonnelEntryQAFormsTabPage, PerformanceReviewPage,
  PerformanceReviewEntryPage, QAFormTabPage as PersonnelQAFormTabPage,
  SupervisorReportTabPage, ApprovalTabPage as PersonnelApprovalTabPage,
  PersonnelBatchUpdatePage, BatchUpdateEntryPage,
  WorkHistorySearchPage, InjuryRptSearchPage, MedHistorySearchPage,
  AllowanceCodePage, AllowanceCodeEntryPage,
  WorkHistoryEntryPage, WorkHistoryEntryDispositionTabPage,
  ApprovalTabWHEPage, CommentsTabPage,
  SupervisorSearchPage, InjuryReportEntryPage,
  InjuryDetailTabPage, ApprovalTabIREPage,
  QaFormTab2Page, MedicalHistoryEntryPage,
  MeaningfulReviewSearchPage, MeaningfulReviewEntryPage,
  ApprovalTabMREPage, MainTabPage as MREMainTabPage,
  ProductHelpPage, OrganizationChartPage,
  ReportsDuePage, MultiJurisRolesPage,
  InjuryRptEntryApprovalPage, WorkHistoryEntryApprovalPage,
} from '../pages/personnel';

// ── Type ─────────────────────────────────────────────────────────────────────

export type PersonnelFixture = {
  personnel: {
    module: PersonnelPage;
    personnelSearch: PersonnelSearchPage;
    personnelEntry: PersonnelEntryPage & {
      personnelEntryMainTab: PersonnelEntryMainTabPage;
      personnelEntryAssignmentTab: PersonnelEntryAssignmentTabPage;
      rFIDTab: RFIDTabPage;
      aboutMeTab: AboutMeTabPage;
      personnelEntryWorkRecordTab: PersonnelEntryWorkRecordTabPage;
      personnelEntryPreferencesTab: PersonnelEntryPreferencesTabPage;
      personnelEntrySecurityTab: PersonnelEntrySecurityTabPage;
      personnelEntryTimeTab: PersonnelEntryTimeTabPage;
      personnelEntryTrainingTab: PersonnelEntryTrainingTabPage & {
        certificationTab: CertificationTabPage;
        specialSkillsTab: SpecialSkillsTabPage;
      };
      personnelEntryInventoryTab: PersonnelEntryInventoryTabPage;
      personnelEntryEmergencyDataTab: PersonnelEntryEmergencyDataTabPage;
      personnelEntryAllowanceTab: PersonnelEntryAllowanceTabPage;
      personnelEntryQAFormsTab: PersonnelEntryQAFormsTabPage;
    };
    assignmentHistoryScreen: AssignmentHistoryScreenPage;
    personnelLockDetailsScreen: PersonnelLockDetailsScreenPage;
    performanceReview: PerformanceReviewPage;
    performanceReviewEntry: PerformanceReviewEntryPage & {
      approvalTab: PersonnelApprovalTabPage;
      supervisorReportTab: SupervisorReportTabPage;
    };
    personnelBatchUpdate: PersonnelBatchUpdatePage;
    batchUpdateEntry: BatchUpdateEntryPage;
    workHistorySearch: WorkHistorySearchPage;
    workHistoryEntry: WorkHistoryEntryPage & {
      workHistoryEntryDispositionTab: WorkHistoryEntryDispositionTabPage;
      approvalTab: ApprovalTabWHEPage;
      commentsTab: CommentsTabPage;
    };
    workHistoryEntryApproval: WorkHistoryEntryApprovalPage;
    injuryRptSearch: InjuryRptSearchPage;
    injuryReportEntry: InjuryReportEntryPage & {
      injuryDetailTab: InjuryDetailTabPage;
      approvalTab: ApprovalTabIREPage;
    };
    injuryRptEntryApproval: InjuryRptEntryApprovalPage;
    medHistorySearch: MedHistorySearchPage;
    medicalHistoryEntry: MedicalHistoryEntryPage;
    allowanceCode: AllowanceCodePage;
    allowanceCodeEntry: AllowanceCodeEntryPage;
    supervisorSearch: SupervisorSearchPage;
    meaningfulReviewSearch: MeaningfulReviewSearchPage;
    meaningfulReviewEntry: MeaningfulReviewEntryPage & {
      approvalTab: ApprovalTabMREPage;
      mainTab: MREMainTabPage;
    };
    multiJurisRoles: MultiJurisRolesPage;
    productHelp: ProductHelpPage;
    organizationChart: OrganizationChartPage;
    reportsDue: ReportsDuePage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const personnelFixtureDefs = {
  personnel: async ({ page }: { page: Page }, use: (v: PersonnelFixture['personnel']) => Promise<void>) => {
    const personnelEntryTrainingTab = Object.assign(new PersonnelEntryTrainingTabPage(page), {
      certificationTab: new CertificationTabPage(page),
      specialSkillsTab: new SpecialSkillsTabPage(page),
    });
    const personnelEntry = Object.assign(new PersonnelEntryPage(page), {
      personnelEntryMainTab: new PersonnelEntryMainTabPage(page),
      personnelEntryAssignmentTab: new PersonnelEntryAssignmentTabPage(page),
      rFIDTab: new RFIDTabPage(page),
      aboutMeTab: new AboutMeTabPage(page),
      personnelEntryWorkRecordTab: new PersonnelEntryWorkRecordTabPage(page),
      personnelEntryPreferencesTab: new PersonnelEntryPreferencesTabPage(page),
      personnelEntrySecurityTab: new PersonnelEntrySecurityTabPage(page),
      personnelEntryTimeTab: new PersonnelEntryTimeTabPage(page),
      personnelEntryTrainingTab,
      personnelEntryInventoryTab: new PersonnelEntryInventoryTabPage(page),
      personnelEntryEmergencyDataTab: new PersonnelEntryEmergencyDataTabPage(page),
      personnelEntryAllowanceTab: new PersonnelEntryAllowanceTabPage(page),
      personnelEntryQAFormsTab: new PersonnelEntryQAFormsTabPage(page),
    });
    const performanceReviewEntry = Object.assign(new PerformanceReviewEntryPage(page), {
      approvalTab: new PersonnelApprovalTabPage(page),
      supervisorReportTab: new SupervisorReportTabPage(page),
    });
    const workHistoryEntry = Object.assign(new WorkHistoryEntryPage(page), {
      workHistoryEntryDispositionTab: new WorkHistoryEntryDispositionTabPage(page),
      approvalTab: new ApprovalTabWHEPage(page),
      commentsTab: new CommentsTabPage(page),
    });
    const injuryReportEntry = Object.assign(new InjuryReportEntryPage(page), {
      injuryDetailTab: new InjuryDetailTabPage(page),
      approvalTab: new ApprovalTabIREPage(page),
    });
    const meaningfulReviewEntry = Object.assign(new MeaningfulReviewEntryPage(page), {
      approvalTab: new ApprovalTabMREPage(page),
      mainTab: new MREMainTabPage(page),
    });
    await use({
      module: new PersonnelPage(page),
      personnelSearch: new PersonnelSearchPage(page),
      personnelEntry,
      assignmentHistoryScreen: new AssignmentHistoryScreenPage(page),
      personnelLockDetailsScreen: new PersonnelLockDetailsScreenPage(page),
      performanceReview: new PerformanceReviewPage(page),
      performanceReviewEntry,
      personnelBatchUpdate: new PersonnelBatchUpdatePage(page),
      batchUpdateEntry: new BatchUpdateEntryPage(page),
      workHistorySearch: new WorkHistorySearchPage(page),
      workHistoryEntry,
      workHistoryEntryApproval: new WorkHistoryEntryApprovalPage(page),
      injuryRptSearch: new InjuryRptSearchPage(page),
      injuryReportEntry,
      injuryRptEntryApproval: new InjuryRptEntryApprovalPage(page),
      medHistorySearch: new MedHistorySearchPage(page),
      medicalHistoryEntry: new MedicalHistoryEntryPage(page),
      allowanceCode: new AllowanceCodePage(page),
      allowanceCodeEntry: new AllowanceCodeEntryPage(page),
      supervisorSearch: new SupervisorSearchPage(page),
      meaningfulReviewSearch: new MeaningfulReviewSearchPage(page),
      meaningfulReviewEntry,
      multiJurisRoles: new MultiJurisRolesPage(page),
      productHelp: new ProductHelpPage(page),
      organizationChart: new OrganizationChartPage(page),
      reportsDue: new ReportsDuePage(page),
    });
  },
};
