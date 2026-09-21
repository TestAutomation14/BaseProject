import { Page } from '@playwright/test';
import {
  RecordsPage,
  CallEntryPage, CallEntryMainTabPage, CallEntryNamesTabPage, CallEntryNotesTabPage,
  CallEntrySummaryTabPage, CallEntryVehicleTabPage, CallEntryUnitsTabPage,
  CallEntryRelatedCallsTabPage, CallEntrySuspectsTabPage, CallEntryMapTabPage,
  CallEntryRequestTabPage, CallEntryEditTabPage, CallEntryANCATabPage,
  CallEntryDispositionTabPage, CallEntryApprovalTabPage, CallEntryTaskTabPage,
  CallSearchPage, CaseSearchPage,
  CaseUpdatePage, CaseUpdateReportingTabPage, CaseUpdateNamesTabPage,
  CaseUpdateCaseDataTabPage, CaseUpdateMapTabPage,
  WalkInEntryPage, ReportManagerPage,
  ReportStatusPage, ReportStatusScreenTabPage, BoloScreenTabPage,
  IBRSubmissionScreenTabPage, IBRSubmissionEntryPage,
  ACDPage, FTCPage, CaseNamesPage, NameVictimPage, VictimOffenderPage,
  DomesticViolencePage, LeokaPage, CaseVehiclePage, CaseSuspectPage,
  QuestionnairePage, QuestionDataEntryPage, RecordsNarrativePage,
  IBRSearchPage, DVEntryPage, DVSearchPage, DVSearchHelpWindowPage,
  UOFSearchHelpWindowPage, UOFEntryPage, TypeOfForceTabPage,
  IncidentSubjectInformationTabPage, OfficerInformationTabPage,
  UOFDispositionTabPage, InjuryReportTabPage, UOFApprovalTabPage,
  UOFSearchPage, UCRPage, ALCScreenPage,
  OpenRecordsRequestPage, OpenRecordRequestEntryPage,
  ComplaintEntryPage, PursuitCaseEntryPage,
  ProfileSearchPage, VehicleProfilePage, ViewTextFileEntryPage,
  RedactStatusPage, SendEmailPage, NIBRSCheckPage, UOFDetailPage,
  ReportStatusNarrativePage, ReportStatusForRedactPage, RedactExpungementPage,
  ReportStatusViewRedactReportPage, UseOfForceReportEntryPage,
  RepositoryEntryPage, PursuitReportEntryPage, DirectReportEntryPage,
  RecordsSuspectSearchPage, UnitHistorySearchPage,
  DrugOverdoseSearchPage, DrugOverdoseEntryPage,
  AtRiskPersonEntryPage, AtRiskPersonSearchPage, AtRiskEffortsEntryPage,
  PermitSearchPage, PermitEntryPage, NCICQueryPage, NCICSearchPage,
  DAPackagePage, PursuitSearchPage, InvestigationDetailsPage,
  ReportCommentsPage, EvaluationCallReceiptPage, WeatherPage, QAFormTabPage,
} from '../pages/records';

// ── Type ─────────────────────────────────────────────────────────────────────

export type RecordsFixture = {
  records: {
    module: RecordsPage;
    callEntry: CallEntryPage & {
      callEntryMainTab: CallEntryMainTabPage;
      callEntryNamesTab: CallEntryNamesTabPage;
      callEntryNotesTab: CallEntryNotesTabPage;
      callEntrySummaryTab: CallEntrySummaryTabPage;
      callEntryVehicleTab: CallEntryVehicleTabPage;
      callEntryUnitsTab: CallEntryUnitsTabPage;
      callEntryRelatedCallsTab: CallEntryRelatedCallsTabPage;
      callEntrySuspectsTab: CallEntrySuspectsTabPage;
      callEntryMapTab: CallEntryMapTabPage;
      callEntryRequestTab: CallEntryRequestTabPage;
      callEntryEditTab: CallEntryEditTabPage;
      callEntryANCATab: CallEntryANCATabPage;
      callEntryDispositionTab: CallEntryDispositionTabPage;
      callEntryApprovalTab: CallEntryApprovalTabPage;
      callEntryTaskTab: CallEntryTaskTabPage;
    };
    callSearch: CallSearchPage;
    caseSearch: CaseSearchPage;
    caseUpdate: CaseUpdatePage & {
      reportingTab: CaseUpdateReportingTabPage;
      namesTab: CaseUpdateNamesTabPage;
      caseDataTab: CaseUpdateCaseDataTabPage;
      mapTab: CaseUpdateMapTabPage;
    };
    walkInEntry: WalkInEntryPage;
    reportManager: ReportManagerPage;
    reportStatus: ReportStatusPage & {
      reportStatusScreenTab: ReportStatusScreenTabPage;
      boloScreenTab: BoloScreenTabPage;
      iBRSubmissionScreenTab: IBRSubmissionScreenTabPage;
    };
    reportSearch: ReportStatusPage;
    aCD: ACDPage;
    fTC: FTCPage;
    caseNames: CaseNamesPage;
    nameVictim: NameVictimPage;
    victimOffender: VictimOffenderPage;
    domesticViolence: DomesticViolencePage;
    leoka: LeokaPage;
    caseVehicle: CaseVehiclePage;
    caseSuspect: CaseSuspectPage;
    questionnaire: QuestionnairePage;
    questionnarie: QuestionnairePage;
    questionDataEntry: QuestionDataEntryPage;
    recordsNarrative: RecordsNarrativePage;
    iBRSearch: IBRSearchPage;
    iBRSubmissionEntry: IBRSubmissionEntryPage;
    dVEntry: DVEntryPage;
    dVSearch: DVSearchPage;
    dVSearchHelpWindow: DVSearchHelpWindowPage;
    uOFSearchHelpWindow: UOFSearchHelpWindowPage;
    uOFEntry: UOFEntryPage & {
      typeOfForceTab: TypeOfForceTabPage;
      incidentSubjectInformationTab: IncidentSubjectInformationTabPage;
      officerInformationTab: OfficerInformationTabPage;
      uOFDispositionTab: UOFDispositionTabPage;
      injuryReportTab: InjuryReportTabPage;
      uOFApprovalTab: UOFApprovalTabPage;
    };
    uOFSearch: UOFSearchPage;
    uCR: UCRPage;
    aLCScreen: ALCScreenPage;
    openRecordsRequest: OpenRecordsRequestPage;
    openRecordsRequestEntry: OpenRecordRequestEntryPage;
    complaintEntry: ComplaintEntryPage;
    pursuitCaseEntry: PursuitCaseEntryPage;
    profileSearch: ProfileSearchPage;
    vehicleProfile: VehicleProfilePage;
    viewTextFileEntry: ViewTextFileEntryPage;
    redactStatus: RedactStatusPage;
    sendEmail: SendEmailPage;
    nIBRSCheck: NIBRSCheckPage;
    uOFDetail: UOFDetailPage;
    reportStatusNarrative: ReportStatusNarrativePage;
    reportStatusForRedact: ReportStatusForRedactPage;
    redactExpungement: RedactExpungementPage;
    reportStatusViewRedactReport: ReportStatusViewRedactReportPage;
    useOfForceReportEntry: UseOfForceReportEntryPage;
    repositoryEntry: RepositoryEntryPage;
    pursuitReportEntry: PursuitReportEntryPage;
    directReportEntry: DirectReportEntryPage;
    suspectSearch: RecordsSuspectSearchPage;
    unitHistorySearch: UnitHistorySearchPage;
    drugOverdoseSearch: DrugOverdoseSearchPage;
    drugOverdoseEntry: DrugOverdoseEntryPage;
    atRiskPersonEntry: AtRiskPersonEntryPage;
    atRiskPersonSearch: AtRiskPersonSearchPage;
    atRiskEffortsEntry: AtRiskEffortsEntryPage;
    permitSearch: PermitSearchPage;
    permitEntry: PermitEntryPage;
    nCICQuery: NCICQueryPage;
    nCICSearch: NCICSearchPage;
    daPackage: DAPackagePage;
    pursuitSearch: PursuitSearchPage;
    investigationDetails: InvestigationDetailsPage;
    reportComments: ReportCommentsPage;
    evaluationCallReceipt: EvaluationCallReceiptPage;
    weather: WeatherPage;
    qAFormTab: QAFormTabPage;
    policeForceUsed: any;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const recordsFixtureDefs = {
  records: async ({ page }: { page: Page }, use: (v: RecordsFixture['records']) => Promise<void>) => {
    const callEntry = Object.assign(new CallEntryPage(page), {
      callEntryMainTab: new CallEntryMainTabPage(page),
      callEntryNamesTab: new CallEntryNamesTabPage(page),
      callEntryNotesTab: new CallEntryNotesTabPage(page),
      callEntrySummaryTab: new CallEntrySummaryTabPage(page),
      callEntryVehicleTab: new CallEntryVehicleTabPage(page),
      callEntryUnitsTab: new CallEntryUnitsTabPage(page),
      callEntryRelatedCallsTab: new CallEntryRelatedCallsTabPage(page),
      callEntrySuspectsTab: new CallEntrySuspectsTabPage(page),
      callEntryMapTab: new CallEntryMapTabPage(page),
      callEntryRequestTab: new CallEntryRequestTabPage(page),
      callEntryEditTab: new CallEntryEditTabPage(page),
      callEntryANCATab: new CallEntryANCATabPage(page),
      callEntryDispositionTab: new CallEntryDispositionTabPage(page),
      callEntryApprovalTab: new CallEntryApprovalTabPage(page),
      callEntryTaskTab: new CallEntryTaskTabPage(page),
    });
    const caseUpdate = Object.assign(new CaseUpdatePage(page), {
      reportingTab: new CaseUpdateReportingTabPage(page),
      namesTab: new CaseUpdateNamesTabPage(page),
      caseDataTab: new CaseUpdateCaseDataTabPage(page),
      mapTab: new CaseUpdateMapTabPage(page),
    });
    const reportStatus = Object.assign(new ReportStatusPage(page), {
      reportStatusScreenTab: new ReportStatusScreenTabPage(page),
      boloScreenTab: new BoloScreenTabPage(page),
      iBRSubmissionScreenTab: new IBRSubmissionScreenTabPage(page),
    });
    const uOFEntry = Object.assign(new UOFEntryPage(page), {
      typeOfForceTab: new TypeOfForceTabPage(page),
      incidentSubjectInformationTab: new IncidentSubjectInformationTabPage(page),
      officerInformationTab: new OfficerInformationTabPage(page),
      uOFDispositionTab: new UOFDispositionTabPage(page),
      injuryReportTab: new InjuryReportTabPage(page),
      uOFApprovalTab: new UOFApprovalTabPage(page),
    });
    const questionnaire = new QuestionnairePage(page);
    await use({
      module: new RecordsPage(page),
      callEntry,
      callSearch: new CallSearchPage(page),
      caseSearch: new CaseSearchPage(page),
      caseUpdate,
      walkInEntry: new WalkInEntryPage(page),
      reportManager: new ReportManagerPage(page),
      reportStatus,
      reportSearch: new ReportStatusPage(page),
      aCD: new ACDPage(page),
      fTC: new FTCPage(page),
      caseNames: new CaseNamesPage(page),
      nameVictim: new NameVictimPage(page),
      victimOffender: new VictimOffenderPage(page),
      domesticViolence: new DomesticViolencePage(page),
      leoka: new LeokaPage(page),
      caseVehicle: new CaseVehiclePage(page),
      caseSuspect: new CaseSuspectPage(page),
      questionnaire,
      questionnarie: questionnaire,
      questionDataEntry: new QuestionDataEntryPage(page),
      recordsNarrative: new RecordsNarrativePage(page),
      iBRSearch: new IBRSearchPage(page),
      iBRSubmissionEntry: new IBRSubmissionEntryPage(page),
      dVEntry: new DVEntryPage(page),
      dVSearch: new DVSearchPage(page),
      dVSearchHelpWindow: new DVSearchHelpWindowPage(page),
      uOFSearchHelpWindow: new UOFSearchHelpWindowPage(page),
      uOFEntry,
      uOFSearch: new UOFSearchPage(page),
      uCR: new UCRPage(page),
      aLCScreen: new ALCScreenPage(page),
      openRecordsRequest: new OpenRecordsRequestPage(page),
      openRecordsRequestEntry: new OpenRecordRequestEntryPage(page),
      complaintEntry: new ComplaintEntryPage(page),
      pursuitCaseEntry: new PursuitCaseEntryPage(page),
      profileSearch: new ProfileSearchPage(page),
      vehicleProfile: new VehicleProfilePage(page),
      viewTextFileEntry: new ViewTextFileEntryPage(page),
      redactStatus: new RedactStatusPage(page),
      sendEmail: new SendEmailPage(page),
      nIBRSCheck: new NIBRSCheckPage(page),
      uOFDetail: new UOFDetailPage(page),
      reportStatusNarrative: new ReportStatusNarrativePage(page),
      reportStatusForRedact: new ReportStatusForRedactPage(page),
      redactExpungement: new RedactExpungementPage(page),
      reportStatusViewRedactReport: new ReportStatusViewRedactReportPage(page),
      useOfForceReportEntry: new UseOfForceReportEntryPage(page),
      repositoryEntry: new RepositoryEntryPage(page),
      pursuitReportEntry: new PursuitReportEntryPage(page),
      directReportEntry: new DirectReportEntryPage(page),
      suspectSearch: new RecordsSuspectSearchPage(page),
      unitHistorySearch: new UnitHistorySearchPage(page),
      drugOverdoseSearch: new DrugOverdoseSearchPage(page),
      drugOverdoseEntry: new DrugOverdoseEntryPage(page),
      atRiskPersonEntry: new AtRiskPersonEntryPage(page),
      atRiskPersonSearch: new AtRiskPersonSearchPage(page),
      atRiskEffortsEntry: new AtRiskEffortsEntryPage(page),
      permitSearch: new PermitSearchPage(page),
      permitEntry: new PermitEntryPage(page),
      nCICQuery: new NCICQueryPage(page),
      nCICSearch: new NCICSearchPage(page),
      daPackage: new DAPackagePage(page),
      pursuitSearch: new PursuitSearchPage(page),
      investigationDetails: new InvestigationDetailsPage(page),
      reportComments: new ReportCommentsPage(page),
      evaluationCallReceipt: new EvaluationCallReceiptPage(page),
      weather: new WeatherPage(page),
      qAFormTab: new QAFormTabPage(page),
      policeForceUsed: {} as any,
    });
  },
};
