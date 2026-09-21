import { Page } from '@playwright/test';
import {
  FacilityManagementPage, MaillogSearchPage, MaillogEntryPage, GrievanceSearchPage,
  GrievanceEntryPage, GrievanceDetailsTabPage, GrievanceResponseTabPage,
  GrievanceAppealTabPage, GrievanceAttachmentTabPage, GrievanceTextEditorPage,
  LibraryLogEntryPage, LibrarySearchPage, DisciplinaryEntryPage,
  DisciplinaryOffenceTabPage, DisciplinaryDetailsTabPage, DisciplinaryWitnessesTabPage,
  DisciplinaryEvIDenceTabPage, DisciplinaryInvestigationTabPage, DisciplinaryDispositionTabPage,
  DisciplinaryHearingTabPage, DisciplinaryAttachmentTabPage,
  StipulationTabPage as FMStipulationTabPage,
  DisciplinaryLinkedViolatorsTabPage, DisciplinaryHearingNoticePage, DisciplinaryNotifyPage,
  DisciplinaryTxteditorPage, SanctionEntryPage, HearingIncidentEntryPage,
  HearingIncidentDispostionTabPage, HearingIncidentDetailsTabPage,
  HearingIncidentWitnessesTabPage, HearingIncidentAppealTabPage,
  HearingIncidentAttachmentTabPage, IncidentSearchPage, AdvancedTabPage,
  ClassificationEntryPage, ClassificationSearchPage, OutOfServiceCellEntryPage,
  OutOfServiceCellSearchPage, ActivityLogEntryPage, ActivityLogEntryTabPage,
  ActivityNamesTabPage, ActivityLogHistoryTabPage, ActivitySearchPage as FMActivitySearchPage,
  ActivityQuickEntryPage, QuickActivityLogPage, NamesPopupPage,
  InmateManagementEntryPage, CellAssignmentTabPage, EventScheduleTabPage,
  InmateVisitingTabPage, ContactLoggingTabPage, DisciplinaryIncidentTabPage,
  GrievanceTabPage, MailLogTabPage, InmAssociationsTabPage, InmAttachmentTabPage,
  InmatePropertyEntryPage, PersonalPropertyTabPage, IssuedPropertyTabPage,
  InitialInmatePropertyPage, BuildingSearchPage, BuildingEntryPage, BuildingMainTabPage,
  BuildingDefaultTabPage, FloorConfigPage, BuildingPodPage, BuildingPodEntryPage,
  CellNumberEntryPage, CellBiddingPage, BuildingConfigurationPage,
  HousingHistorySearchPage, ReleaseSearchPage as FMReleaseSearchPage, ReleaseEntryPage,
  ReleaseEntryMainTabPage, ReleaseEntryReleaseTabPage, ReleaseEntryReturnTabPage,
  ReleaseEntryHistoryTabPage, VisitationRulesEntryPage, VisitationSearchPage,
  VisitationStatusPage, VisitorLogEntryPage, FacilityVisitorLogEntryPage,
  TxtEditorPage, VerifyNameEntryPage, PropertyEntryPage, SanctionPage,
  CMSAssociationPage, SharedCodesPage as FMSharedCodesPage,
  InsideSignOutInPage as FMInsideSignOutInPage, OutsideSignOutInPage as FMOutsideSignOutInPage,
  BuildingImageDisplayPage, PersonalPropertyPage, StipulationEntryPage,
  SelectSanctionPage, OccupancyOverviewPage, InmateMovementEntryPage,
  CMSUOFSearchPage, BookingHistoryPage, PreviousVisitOpenPage, JailCellStatusPage,
} from '../pages/facility-management';

// ── Type ─────────────────────────────────────────────────────────────────────

export type FacilityManagementFixture = {
  facilityManagement: {
    module: FacilityManagementPage;
    maillogSearch: MaillogSearchPage;
    maillogEntry: MaillogEntryPage;
    grievanceSearch: GrievanceSearchPage;
    grievanceEntry: GrievanceEntryPage & { grievanceDetailsTab: GrievanceDetailsTabPage; grievanceResponseTab: GrievanceResponseTabPage; grievanceAppealTab: GrievanceAppealTabPage; grievanceAttachmentTab: GrievanceAttachmentTabPage };
    grievanceTextEditor: GrievanceTextEditorPage;
    librarySearch: LibrarySearchPage;
    libraryLogEntry: LibraryLogEntryPage;
    disciplinaryEntry: DisciplinaryEntryPage & { disciplinaryOffenceTab: DisciplinaryOffenceTabPage; disciplinaryDetailsTab: DisciplinaryDetailsTabPage; disciplinaryWitnessesTab: DisciplinaryWitnessesTabPage; disciplinaryEvIDenceTab: DisciplinaryEvIDenceTabPage; disciplinaryInvestigationTab: DisciplinaryInvestigationTabPage; disciplinaryDispositionTab: DisciplinaryDispositionTabPage; disciplinaryHearingTab: DisciplinaryHearingTabPage; disciplinaryAttachmentTab: DisciplinaryAttachmentTabPage; stipulationTab: FMStipulationTabPage; disciplinaryLinkedViolatorsTab: DisciplinaryLinkedViolatorsTabPage };
    disciplinaryHearingNotice: DisciplinaryHearingNoticePage;
    disciplinaryNotify: DisciplinaryNotifyPage;
    disciplinaryTxteditor: DisciplinaryTxteditorPage;
    sanctionEntry: SanctionEntryPage;
    hearingIncidentEntry: HearingIncidentEntryPage & { hearingIncidentDispostionTab: HearingIncidentDispostionTabPage; hearingIncidentDetailsTab: HearingIncidentDetailsTabPage; hearingIncidentWitnessesTab: HearingIncidentWitnessesTabPage; hearingIncidentAppealTab: HearingIncidentAppealTabPage; hearingIncidentAttachmentTab: HearingIncidentAttachmentTabPage };
    incidentSearch: IncidentSearchPage & { advancedTab: AdvancedTabPage };
    classificationSearch: ClassificationSearchPage;
    classificationEntry: ClassificationEntryPage;
    outOfServiceCellSearch: OutOfServiceCellSearchPage;
    outOfServiceCellEntry: OutOfServiceCellEntryPage;
    activityLogEntry: ActivityLogEntryPage & { activityLogEntryTab: ActivityLogEntryTabPage; activityNamesTab: ActivityNamesTabPage; activityLogHistoryTab: ActivityLogHistoryTabPage };
    activitySearch: FMActivitySearchPage;
    activityQuickEntry: ActivityQuickEntryPage & { quickActivityLog: QuickActivityLogPage; namesPopup: NamesPopupPage };
    inmateManagementEntry: InmateManagementEntryPage & { cellAssignmentTab: CellAssignmentTabPage; eventScheduleTab: EventScheduleTabPage; inmateVisitingTab: InmateVisitingTabPage; contactLoggingTab: ContactLoggingTabPage; disciplinaryIncidentTab: DisciplinaryIncidentTabPage; grievanceTab: GrievanceTabPage; mailLogTab: MailLogTabPage; inmAssociationsTab: InmAssociationsTabPage; inmAttachmentTab: InmAttachmentTabPage };
    inmatePropertyEntry: InmatePropertyEntryPage & { personalPropertyTab: PersonalPropertyTabPage; issuedPropertyTab: IssuedPropertyTabPage };
    initialInmateProperty: InitialInmatePropertyPage;
    inmateMovementEntry: InmateMovementEntryPage;
    buildingSearch: BuildingSearchPage;
    buildingEntry: BuildingEntryPage & { buildingMainTab: BuildingMainTabPage; buildingDefaultTab: BuildingDefaultTabPage };
    buildingConfiguration: BuildingConfigurationPage;
    buildingPod: BuildingPodPage;
    buildingPodEntry: BuildingPodEntryPage;
    buildingImageDisplay: BuildingImageDisplayPage;
    cellNumberEntry: CellNumberEntryPage;
    cellBidding: CellBiddingPage;
    floorConfig: FloorConfigPage;
    housingHistorySearch: HousingHistorySearchPage;
    releaseSearch: FMReleaseSearchPage;
    releaseEntry: ReleaseEntryPage & { releaseEntryMainTab: ReleaseEntryMainTabPage; releaseEntryReleaseTab: ReleaseEntryReleaseTabPage; releaseEntryReturnTab: ReleaseEntryReturnTabPage; releaseEntryHistoryTab: ReleaseEntryHistoryTabPage };
    visitationSearch: VisitationSearchPage;
    visitationRulesEntry: VisitationRulesEntryPage;
    visitationStatus: VisitationStatusPage;
    visitorLogEntry: VisitorLogEntryPage;
    facilityVisitorLogEntry: FacilityVisitorLogEntryPage;
    txtEditor: TxtEditorPage;
    verifyNameEntry: VerifyNameEntryPage;
    propertyEntry: PropertyEntryPage;
    sanctionPage: SanctionPage;
    cmsAssociation: CMSAssociationPage;
    sharedCodes: FMSharedCodesPage;
    insideSignOutIn: FMInsideSignOutInPage;
    outsideSignOutIn: FMOutsideSignOutInPage;
    personalProperty: PersonalPropertyPage;
    stipulationEntry: StipulationEntryPage;
    selectSanction: SelectSanctionPage;
    occupancyOverview: OccupancyOverviewPage;
    cmsUOFSearch: CMSUOFSearchPage;
    bookingHistory: BookingHistoryPage;
    previousVisitOpen: PreviousVisitOpenPage;
    jailCellStatus: JailCellStatusPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const facilityManagementFixtureDefs = {
  facilityManagement: async ({ page }: { page: Page }, use: (v: FacilityManagementFixture['facilityManagement']) => Promise<void>) => {
    await use({
      module: new FacilityManagementPage(page),
      maillogSearch: new MaillogSearchPage(page),
      maillogEntry: new MaillogEntryPage(page),
      grievanceSearch: new GrievanceSearchPage(page),
      grievanceEntry: Object.assign(new GrievanceEntryPage(page), {
        grievanceDetailsTab: new GrievanceDetailsTabPage(page),
        grievanceResponseTab: new GrievanceResponseTabPage(page),
        grievanceAppealTab: new GrievanceAppealTabPage(page),
        grievanceAttachmentTab: new GrievanceAttachmentTabPage(page),
      }),
      grievanceTextEditor: new GrievanceTextEditorPage(page),
      librarySearch: new LibrarySearchPage(page),
      libraryLogEntry: new LibraryLogEntryPage(page),
      disciplinaryEntry: Object.assign(new DisciplinaryEntryPage(page), {
        disciplinaryOffenceTab: new DisciplinaryOffenceTabPage(page),
        disciplinaryDetailsTab: new DisciplinaryDetailsTabPage(page),
        disciplinaryWitnessesTab: new DisciplinaryWitnessesTabPage(page),
        disciplinaryEvIDenceTab: new DisciplinaryEvIDenceTabPage(page),
        disciplinaryInvestigationTab: new DisciplinaryInvestigationTabPage(page),
        disciplinaryDispositionTab: new DisciplinaryDispositionTabPage(page),
        disciplinaryHearingTab: new DisciplinaryHearingTabPage(page),
        disciplinaryAttachmentTab: new DisciplinaryAttachmentTabPage(page),
        stipulationTab: new FMStipulationTabPage(page),
        disciplinaryLinkedViolatorsTab: new DisciplinaryLinkedViolatorsTabPage(page),
      }),
      disciplinaryHearingNotice: new DisciplinaryHearingNoticePage(page),
      disciplinaryNotify: new DisciplinaryNotifyPage(page),
      disciplinaryTxteditor: new DisciplinaryTxteditorPage(page),
      sanctionEntry: new SanctionEntryPage(page),
      hearingIncidentEntry: Object.assign(new HearingIncidentEntryPage(page), {
        hearingIncidentDispostionTab: new HearingIncidentDispostionTabPage(page),
        hearingIncidentDetailsTab: new HearingIncidentDetailsTabPage(page),
        hearingIncidentWitnessesTab: new HearingIncidentWitnessesTabPage(page),
        hearingIncidentAppealTab: new HearingIncidentAppealTabPage(page),
        hearingIncidentAttachmentTab: new HearingIncidentAttachmentTabPage(page),
      }),
      incidentSearch: Object.assign(new IncidentSearchPage(page), {
        advancedTab: new AdvancedTabPage(page),
      }),
      classificationSearch: new ClassificationSearchPage(page),
      classificationEntry: new ClassificationEntryPage(page),
      outOfServiceCellSearch: new OutOfServiceCellSearchPage(page),
      outOfServiceCellEntry: new OutOfServiceCellEntryPage(page),
      activityLogEntry: Object.assign(new ActivityLogEntryPage(page), {
        activityLogEntryTab: new ActivityLogEntryTabPage(page),
        activityNamesTab: new ActivityNamesTabPage(page),
        activityLogHistoryTab: new ActivityLogHistoryTabPage(page),
      }),
      activitySearch: new FMActivitySearchPage(page),
      activityQuickEntry: Object.assign(new ActivityQuickEntryPage(page), {
        quickActivityLog: new QuickActivityLogPage(page),
        namesPopup: new NamesPopupPage(page),
      }),
      inmateManagementEntry: Object.assign(new InmateManagementEntryPage(page), {
        cellAssignmentTab: new CellAssignmentTabPage(page),
        eventScheduleTab: new EventScheduleTabPage(page),
        inmateVisitingTab: new InmateVisitingTabPage(page),
        contactLoggingTab: new ContactLoggingTabPage(page),
        disciplinaryIncidentTab: new DisciplinaryIncidentTabPage(page),
        grievanceTab: new GrievanceTabPage(page),
        mailLogTab: new MailLogTabPage(page),
        inmAssociationsTab: new InmAssociationsTabPage(page),
        inmAttachmentTab: new InmAttachmentTabPage(page),
      }),
      inmatePropertyEntry: Object.assign(new InmatePropertyEntryPage(page), {
        personalPropertyTab: new PersonalPropertyTabPage(page),
        issuedPropertyTab: new IssuedPropertyTabPage(page),
      }),
      initialInmateProperty: new InitialInmatePropertyPage(page),
      inmateMovementEntry: new InmateMovementEntryPage(page),
      buildingSearch: new BuildingSearchPage(page),
      buildingEntry: Object.assign(new BuildingEntryPage(page), {
        buildingMainTab: new BuildingMainTabPage(page),
        buildingDefaultTab: new BuildingDefaultTabPage(page),
      }),
      buildingConfiguration: new BuildingConfigurationPage(page),
      buildingPod: new BuildingPodPage(page),
      buildingPodEntry: new BuildingPodEntryPage(page),
      buildingImageDisplay: new BuildingImageDisplayPage(page),
      cellNumberEntry: new CellNumberEntryPage(page),
      cellBidding: new CellBiddingPage(page),
      floorConfig: new FloorConfigPage(page),
      housingHistorySearch: new HousingHistorySearchPage(page),
      releaseSearch: new FMReleaseSearchPage(page),
      releaseEntry: Object.assign(new ReleaseEntryPage(page), {
        releaseEntryMainTab: new ReleaseEntryMainTabPage(page),
        releaseEntryReleaseTab: new ReleaseEntryReleaseTabPage(page),
        releaseEntryReturnTab: new ReleaseEntryReturnTabPage(page),
        releaseEntryHistoryTab: new ReleaseEntryHistoryTabPage(page),
      }),
      visitationSearch: new VisitationSearchPage(page),
      visitationRulesEntry: new VisitationRulesEntryPage(page),
      visitationStatus: new VisitationStatusPage(page),
      visitorLogEntry: new VisitorLogEntryPage(page),
      facilityVisitorLogEntry: new FacilityVisitorLogEntryPage(page),
      txtEditor: new TxtEditorPage(page),
      verifyNameEntry: new VerifyNameEntryPage(page),
      propertyEntry: new PropertyEntryPage(page),
      sanctionPage: new SanctionPage(page),
      cmsAssociation: new CMSAssociationPage(page),
      sharedCodes: new FMSharedCodesPage(page),
      insideSignOutIn: new FMInsideSignOutInPage(page),
      outsideSignOutIn: new FMOutsideSignOutInPage(page),
      personalProperty: new PersonalPropertyPage(page),
      stipulationEntry: new StipulationEntryPage(page),
      selectSanction: new SelectSanctionPage(page),
      occupancyOverview: new OccupancyOverviewPage(page),
      cmsUOFSearch: new CMSUOFSearchPage(page),
      bookingHistory: new BookingHistoryPage(page),
      previousVisitOpen: new PreviousVisitOpenPage(page),
      jailCellStatus: new JailCellStatusPage(page),
    });
  },
};
