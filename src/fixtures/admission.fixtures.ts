import { Page, BrowserContext } from '@playwright/test';
import {
  AdmissionModule, BillingSearchPage, BondSearchPage, ClassificationRatingsPage,
  InmateSearchPage, AdvancedTabPage as AdmissionAdvancedTabPage, PaytoStaySearchPage,
  PropertyHistorySearchPage, RARatingsPage, RiskAssessmentSearchPage,
  ScheduledBookingSearchPage, SSAReportPage, SupervisorStatusPage,
  AdmissionEntryPage, MainTabPage as AdmissionMainTabPage, BookingTabPage,
  ChargeTabPage, DetainerTabPage, PayToStayTabPage, MugShotTabPage,
  FingerPrintTabPage, AssociationsTabPage as AdmissionAssociationsTabPage,
  JailAlertTabPage, CommentsTabPage as AdmissionCommentsTabPage,
  NotificationTabPage as AdmissionNotificationTabPage,
  QAFormsTabPage as AdmissionQAFormsTabPage, DeleteSentenceTabPage, ReleaseTabPage,
  MedicalScreeningTabPage, PrisonerPropertyTabPage,
  BondEntryPage, ScheduledBookingEntryPage, PaytoStayEntryPage,
  PaymentEntryPage, InvoiceHistoryPage, InitialInmatePropertyEntryPage,
  VictimNotificationEntryPage, AdditionalDataEntryPage, PhysicalEntryPage,
  RiskAssessmentEntryPage, IntakeFormTabPage, CCAPSFormTabPage, RiskCommentsTabPage,
  RAInterviewEntryPage, LivingSituationTabPage, EEMSTabPage,
  MentalAndDisabilityTabPage, SubstanceAbuseTabPage, BondInformationTabPage,
  ReferenceTabPage, PropertyStorageEntryPage, SharedBondEntryPage,
  InmateMovementEntryPage as AdmissionInmateMovementEntryPage,
  SentenceEntryPage, AdjustmentsTabPage as AdmissionAdjustmentsTabPage,
  SPNNoChangePage, TxtEditorPage as AdmissionTxtEditorPage, ChargesHistoryPage,
  SpecialNeedsEntryPage, SpecialNeedsPage, PreBookingQueueDetailsPage,
  PreBookingQueuePage, AdmissionChargesPage, DenominationsPage,
  BookingAdditionalDataPage, SpecialNeedsTextMgrPage, AliasHistoryPage,
  InmateImageArchivePage, UploadInmateImagePage,
} from '../pages/admission';

// ── Type ─────────────────────────────────────────────────────────────────────

export type AdmissionFixture = {
  admission: {
    module: AdmissionModule;
    admissionEntry: AdmissionEntryPage & {
      mainTab: AdmissionMainTabPage;
      bookingTab: BookingTabPage;
      chargeTab: ChargeTabPage;
      detainerTab: DetainerTabPage;
      payToStayTab: PayToStayTabPage;
      mugShotTab: MugShotTabPage;
      fingerPrintTab: FingerPrintTabPage;
      associationsTab: AdmissionAssociationsTabPage;
      jailAlertTab: JailAlertTabPage;
      commentsTab: AdmissionCommentsTabPage;
      notificationTab: AdmissionNotificationTabPage;
      qAFormsTab: AdmissionQAFormsTabPage;
      deleteSentenceTab: DeleteSentenceTabPage;
      releaseTab: ReleaseTabPage;
      medicalScreeningTab: MedicalScreeningTabPage;
      prisonerPropertyTab: PrisonerPropertyTabPage;
    };
    inmateSearchScreen: InmateSearchPage & { advancedTab: AdmissionAdvancedTabPage };
    billingSearchScreen: BillingSearchPage;
    bondSearchScreen: BondSearchPage;
    bondEntryScreen: BondEntryPage;
    sharedBondEntryScreen: SharedBondEntryPage;
    classificationRatingsScreen: ClassificationRatingsPage;
    paytoStaySearchScreen: PaytoStaySearchPage;
    paytoStayEntryScreen: PaytoStayEntryPage;
    paymentEntryScreen: PaymentEntryPage;
    propertyHistorySearchScreen: PropertyHistorySearchPage;
    propertyStorageEntryScreen: PropertyStorageEntryPage;
    rARatingsScreen: RARatingsPage;
    riskAssessmentSearchScreen: RiskAssessmentSearchPage;
    riskAssessmentEntryScreen: RiskAssessmentEntryPage & { intakeFormTab: IntakeFormTabPage; cCAPSFormTab: CCAPSFormTabPage; riskCommentsTab: RiskCommentsTabPage };
    rAInterviewEntryScreen: RAInterviewEntryPage & { livingSituationTab: LivingSituationTabPage; eEMSTab: EEMSTabPage; mentalandDisabilityTab: MentalAndDisabilityTabPage; substanceAbuseTab: SubstanceAbuseTabPage; bondInformationTab: BondInformationTabPage; referenceTab: ReferenceTabPage };
    scheduledBookingSearchScreen: ScheduledBookingSearchPage;
    scheduledbookingEntryScreen: ScheduledBookingEntryPage;
    sentenceEntryscreen: SentenceEntryPage & { adjustmentsTab: AdmissionAdjustmentsTabPage };
    sSAReportScreen: SSAReportPage;
    supervisorStatusScreen: SupervisorStatusPage;
    inmateMovementEntryScreen: AdmissionInmateMovementEntryPage;
    inmateImageArchiveScreen: InmateImageArchivePage;
    uploadInmateImageScreen: UploadInmateImagePage;
    initialInmateProPertyEntryScreen: InitialInmatePropertyEntryPage;
    victimNotificationEntryScreen: VictimNotificationEntryPage;
    additionalDataEntryScreen: AdditionalDataEntryPage;
    bookingAdditionalData: BookingAdditionalDataPage;
    physicalEntry: PhysicalEntryPage;
    preBookingQueue: PreBookingQueuePage;
    preBookingQueueDetails: PreBookingQueueDetailsPage;
    admissionCharges: AdmissionChargesPage;
    chargesHistory: ChargesHistoryPage;
    denominations: DenominationsPage;
    specialNeedsEntryScreen: SpecialNeedsEntryPage;
    specialNeedsTextMgr: SpecialNeedsTextMgrPage;
    sPNNOChange: SPNNoChangePage;
    txtEditor: AdmissionTxtEditorPage;
    aliasHistory: AliasHistoryPage;
    PaymentEntry: PaymentEntryPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const admissionFixtureDefs = {
  admission: async ({ page, context }: { page: Page; context: BrowserContext }, use: (v: AdmissionFixture['admission']) => Promise<void>) => {
    const admissionEntry = Object.assign(new AdmissionEntryPage(page), {
      mainTab: new AdmissionMainTabPage(page),
      bookingTab: new BookingTabPage(page),
      chargeTab: new ChargeTabPage(page),
      detainerTab: new DetainerTabPage(page),
      payToStayTab: new PayToStayTabPage(page),
      mugShotTab: new MugShotTabPage(page),
      fingerPrintTab: new FingerPrintTabPage(page),
      associationsTab: new AdmissionAssociationsTabPage(page),
      jailAlertTab: new JailAlertTabPage(page),
      commentsTab: new AdmissionCommentsTabPage(page),
      notificationTab: new AdmissionNotificationTabPage(page),
      qAFormsTab: new AdmissionQAFormsTabPage(page),
      deleteSentenceTab: new DeleteSentenceTabPage(page),
      releaseTab: new ReleaseTabPage(page),
      medicalScreeningTab: new MedicalScreeningTabPage(page),
      prisonerPropertyTab: new PrisonerPropertyTabPage(page),
    });
    const inmateSearchScreen = Object.assign(new InmateSearchPage(page), {
      advancedTab: new AdmissionAdvancedTabPage(page),
    });
    const riskAssessmentEntryScreen = Object.assign(new RiskAssessmentEntryPage(page), {
      intakeFormTab: new IntakeFormTabPage(page),
      cCAPSFormTab: new CCAPSFormTabPage(page),
      riskCommentsTab: new RiskCommentsTabPage(page),
    });
    const rAInterviewEntryScreen = Object.assign(new RAInterviewEntryPage(page), {
      livingSituationTab: new LivingSituationTabPage(page),
      eEMSTab: new EEMSTabPage(page),
      mentalandDisabilityTab: new MentalAndDisabilityTabPage(page),
      substanceAbuseTab: new SubstanceAbuseTabPage(page),
      bondInformationTab: new BondInformationTabPage(page),
      referenceTab: new ReferenceTabPage(page),
    });
    const sentenceEntryscreen = Object.assign(new SentenceEntryPage(page), {
      adjustmentsTab: new AdmissionAdjustmentsTabPage(page),
    });
    await use({
      module: new AdmissionModule(context),
      admissionEntry,
      inmateSearchScreen,
      billingSearchScreen: new BillingSearchPage(page),
      bondSearchScreen: new BondSearchPage(page),
      bondEntryScreen: new BondEntryPage(page),
      sharedBondEntryScreen: new SharedBondEntryPage(page),
      classificationRatingsScreen: new ClassificationRatingsPage(page),
      paytoStaySearchScreen: new PaytoStaySearchPage(page),
      paytoStayEntryScreen: new PaytoStayEntryPage(page),
      paymentEntryScreen: new PaymentEntryPage(page),
      propertyHistorySearchScreen: new PropertyHistorySearchPage(page),
      propertyStorageEntryScreen: new PropertyStorageEntryPage(page),
      rARatingsScreen: new RARatingsPage(page),
      riskAssessmentSearchScreen: new RiskAssessmentSearchPage(page),
      riskAssessmentEntryScreen,
      rAInterviewEntryScreen,
      scheduledBookingSearchScreen: new ScheduledBookingSearchPage(page),
      scheduledbookingEntryScreen: new ScheduledBookingEntryPage(page),
      sentenceEntryscreen,
      sSAReportScreen: new SSAReportPage(page),
      supervisorStatusScreen: new SupervisorStatusPage(page),
      inmateMovementEntryScreen: new AdmissionInmateMovementEntryPage(page),
      inmateImageArchiveScreen: new InmateImageArchivePage(page),
      uploadInmateImageScreen: new UploadInmateImagePage(page),
      initialInmateProPertyEntryScreen: new InitialInmatePropertyEntryPage(page),
      victimNotificationEntryScreen: new VictimNotificationEntryPage(page),
      additionalDataEntryScreen: new AdditionalDataEntryPage(page),
      bookingAdditionalData: new BookingAdditionalDataPage(page),
      physicalEntry: new PhysicalEntryPage(page),
      preBookingQueue: new PreBookingQueuePage(page),
      preBookingQueueDetails: new PreBookingQueueDetailsPage(page),
      admissionCharges: new AdmissionChargesPage(page),
      chargesHistory: new ChargesHistoryPage(page),
      denominations: new DenominationsPage(page),
      specialNeedsEntryScreen: new SpecialNeedsEntryPage(page),
      specialNeedsTextMgr: new SpecialNeedsTextMgrPage(page),
      sPNNOChange: new SPNNoChangePage(page),
      txtEditor: new AdmissionTxtEditorPage(page),
      aliasHistory: new AliasHistoryPage(page),
      PaymentEntry: new PaymentEntryPage(page),
    });
  },
};
