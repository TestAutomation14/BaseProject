import { Page } from '@playwright/test';
import {
  SettingsPage, SysParameterPage, ORITerminalEntryPage, CFSCodePage, AccessLogPage,
  PhoenixAuthenticatorWindowPage, CodedPage, MaintainCodeValuePage, JailCellPage,
  JailCellHelpWindowPage, JailCellEntryPage, RepositoryEntryPage, HelpTabPage,
  RoleEntryPage, CustomFieldsScreenPage, RolesPage, FTPInterfaceSearchPage,
  FTPInterfaceEntryPage, UnitsScreenPage, UnitEntryPage, CADTabPage, StaffingTabPage,
  PositionTabPage, RolesEntryPage, RolesEntryPermissionWindowPage, RepositoryPage,
  ChargeScreenPage, SharedCodesPage, CADTab2Page, MainTabPage, LinkedCFSTabPage,
  SOPTabPage, ManagementTabPage, DistributedToTabPage, ActionSearchPage, ActionEntryPage,
  TerminalPage, TerminalEntryPage, CMSTabPage, IPAddressTabPage, DispatchTabPage,
  NCICTabPage, E911TabPage, ScreensTabPage, InventoryTabPage, DeviceTabPage,
  InterfaceTabPage, TextScreenPage, TextEntryPage, JurisPage, PoliceTabPage,
  LogoTabPage, ReportHeaderFooterPage, JurisSubAgencyTabPage,
  JurisSubAgencyDetailsTabPage, JurisAddressTabPage,
  JurisSADetailsContactDetailsTabPage, JurisSADetailsLogoTabPage,
  JurisSADetailsAddressTabPage, JurisSADetailsReportHeaderFooterTabPage,
  TextSubjectTabPage, TemplateForTabPage, ReportsThatUseThisTextTabPage,
  DispositionPage, JobsScreenPage, JobEntryPage as SettingsJobEntryPage,
  ParameterJobScreenTabPage, NotificationJobScreenTabPage, ScheduleJobScreenTabPage,
  EmailTemplatePage, EmailTemplateEntryPage, FormRepositoryScreenPage,
  FireStationSearchPage, FireStationEntryPage, CFSCodeEntryPage, CFSCodeEntryMainTabPage,
  CFSCodeManagementTabPage, CFSCodeTasksTabPage, CFSCodeCADTabPage,
  CFSCodeOthersTabPage, CFSCodeSOPTabPage, CFSCodeLinkedCFSTabPage,
  HazMatGuidePage, HazMatEntryPage, QAFormsPage, ApprovalParameterPage,
  ReportRepositoryPage, ReportRepositoryEntryPage, CodedMapPage, CodedMapDetailPage,
  DistributionListPage, DistributionEntryPage, TextSearchHelpWindowPage,
  ViewHistoryWindowPage, CADStatusConfigPage, CADStatusConfigEntryPage, MainTab2Page,
  CameraConfigPage, CameraConfigEntryPage, ChargeDispositionPage, CustomHelpPage,
  CustomDocHelpEntryPage, DispatchZoneScreenPage, DispatchZonePage, DocumentCodesPage,
  ExternalInterfaceSearchPage, ExternalInterfaceEntryPage, NotificationFormatPage,
  NotificationFormatEntryPage, QueryMasterEntryPage, QueryConfigPage,
  ManageSectionEntryPage, ManagetableEntryPage, JoinsLinkingTablesEntryPage,
  QueryRepositoryEntryPage, QuickActivityConfigPage, SubCategoryMappingPage,
  TextMgmtPage, MobileTextTabPage, DetailsTabPage, RelatedReportsTabPage,
  CreateUserQueryPage, MasterQueryTabPage, XMLExporterMasterPage, XMLExportConfigPage,
  XMLExporterParentNodesPage, XMLExporterDataTablePage, XMLExporterWhereClausePage,
  XMLExporterTableDisplayPage, XMLExporterStaticNodePage, ParameterNameEntryPage,
  MainTab3Page, HelpTab2Page, StorageLocationPage, StorageLocationEntryPage,
  CoronerCustomFieldsPage, RepositoryLinkPage, SelectionsEntryPage, MFASettingPage,
  RTDashboardPage, OverridesTabPage, SelectReportPage as SettingsSelectReportPage,
  RTDashboard2Page, BatchSearchPage, PermissionHistoryPage,
  CustomDocHelpEntryUploadeWindowPage, EntraSettingWindowPage,
  ParameterNameSearchPage, ShowUsersPage, MessagePage, OffenseCodesPage,
  ActivityTypeMappingPage, ReleaseCodesPage, UserQuerySearchPage, Message2Page,
  CustomTabPage, RepositoryEditEntryPage, MainTab4Page, ExternalInterfaceLogPage,
} from '../pages/settings';
import { createFrameProxy, createPopupProxy } from '../helpers/browser-helpers';

// ── Type ─────────────────────────────────────────────────────────────────────

export type SettingsFixture = {
  settings: {
    module: SettingsPage;
    sysParameter: SysParameterPage;
    oRITerminalEntry: ORITerminalEntryPage;
    cFSCode: CFSCodePage;
    accessLog: AccessLogPage;
    phoenixAuthenticatorWindow: PhoenixAuthenticatorWindowPage;
    coded: CodedPage;
    maintainCodeValue: MaintainCodeValuePage;
    jailCell: JailCellPage;
    jailCellHelpWindow: JailCellHelpWindowPage;
    jailCellEntry: JailCellEntryPage;
    repositoryEntry: RepositoryEntryPage & { helpTab: HelpTabPage };
    roleEntry: RoleEntryPage;
    customFieldsScreen: CustomFieldsScreenPage;
    roles: RolesPage;
    fTPInterfaceSearch: FTPInterfaceSearchPage;
    fTPInterfaceEntry: FTPInterfaceEntryPage;
    unitsScreen: UnitsScreenPage;
    unitEntry: UnitEntryPage;
    rolesEntry: RolesEntryPage & { rolesEntryPermissionWindow: RolesEntryPermissionWindowPage };
    repository: RepositoryPage;
    chargeScreen: ChargeScreenPage;
    sharedCodes: SharedCodesPage & { distributedToTab: DistributedToTabPage; managementTab: ManagementTabPage };
    actionSearch: ActionSearchPage;
    actionEntry: ActionEntryPage;
    terminal: TerminalPage;
    terminalEntry: TerminalEntryPage & { cMSTab: CMSTabPage; iPAddressTab: IPAddressTabPage; dispatchTab: DispatchTabPage; nCICTab: NCICTabPage; e911Tab: E911TabPage; screensTab: ScreensTabPage; inventoryTab: InventoryTabPage; deviceTab: DeviceTabPage; interfaceTab: InterfaceTabPage };
    textScreen: TextScreenPage;
    textEntry: TextEntryPage & { textSubjectTab: TextSubjectTabPage; templateForTab: TemplateForTabPage; reportsThatUseThisTextTab: ReportsThatUseThisTextTabPage };
    juris: JurisPage & { jusrisAddressTab: JurisAddressTabPage; policeTab: PoliceTabPage; reportHeaderFooter: ReportHeaderFooterPage };
    disposition: DispositionPage;
    jobsScreen: JobsScreenPage;
    jobEntry: SettingsJobEntryPage & { notificationJobScreenTab: NotificationJobScreenTabPage; scheduleJobScreenTab: ScheduleJobScreenTabPage };
    emailTemplate: EmailTemplatePage;
    emailTemplateEntry: EmailTemplateEntryPage;
    formRepositoryScreen: FormRepositoryScreenPage;
    fireStationSearch: FireStationSearchPage;
    fireStationEntry: FireStationEntryPage;
    cFSCodeEntry: CFSCodeEntryPage & { cFSCodeOthersTab: CFSCodeOthersTabPage; cFSCodeSOPTab: CFSCodeSOPTabPage; cFSCodeTasksTab: CFSCodeTasksTabPage };
    hazMatGuide: HazMatGuidePage;
    hazMatEntry: HazMatEntryPage;
    qaForms: QAFormsPage;
    approvalParameter: ApprovalParameterPage;
    reportRepository: ReportRepositoryPage;
    reportRepositoryEntry: ReportRepositoryEntryPage;
    codedMap: CodedMapPage;
    codedMapDetail: CodedMapDetailPage;
    distributionList: DistributionListPage;
    distributionEntry: DistributionEntryPage;
    textSearchHelpWindow: TextSearchHelpWindowPage;
    viewHistoryWindow: ViewHistoryWindowPage;
    cadStatusConfig: CADStatusConfigPage;
    cadStatusConfigEntry: CADStatusConfigEntryPage & { mainTab: MainTab2Page };
    cameraConfig: CameraConfigPage;
    cameraConfigEntry: CameraConfigEntryPage;
    chargeDisposition: ChargeDispositionPage;
    customHelp: CustomHelpPage;
    customDocHelpEntry: CustomDocHelpEntryPage;
    customDocHelpEntryUploadeWindow: CustomDocHelpEntryUploadeWindowPage;
    dispatchZoneScreen: DispatchZoneScreenPage;
    dispatchZone: DispatchZonePage;
    documentCodes: DocumentCodesPage;
    externalInterfaceSearch: ExternalInterfaceSearchPage;
    externalInterfaceEntry: ExternalInterfaceEntryPage;
    notificationFormat: NotificationFormatPage;
    notificationFormatEntry: NotificationFormatEntryPage;
    queryMasterEntry: QueryMasterEntryPage;
    queryConfig: QueryConfigPage;
    manageSectionEntry: ManageSectionEntryPage;
    managetableEntry: ManagetableEntryPage;
    joinsLinkingTablesEntry: JoinsLinkingTablesEntryPage;
    queryRepositoryEntry: QueryRepositoryEntryPage;
    quickActivityConfig: QuickActivityConfigPage;
    subCategoryMapping: SubCategoryMappingPage;
    textMgmt: TextMgmtPage & { detailsTab: DetailsTabPage; mobileTextTab: MobileTextTabPage; relatedReportsTab: RelatedReportsTabPage };
    createUserQuery: CreateUserQueryPage & { masterQueryTab: MasterQueryTabPage };
    xmlExporterMaster: XMLExporterMasterPage;
    xmlExportConfig: XMLExportConfigPage;
    xmlExporterParentNodes: XMLExporterParentNodesPage;
    xmlExporterDataTable: XMLExporterDataTablePage;
    xmlExporterWhereClause: XMLExporterWhereClausePage;
    xmlExporterTableDisplay: XMLExporterTableDisplayPage;
    xmlExporterStaticNode: XMLExporterStaticNodePage;
    parameterNameEntry: ParameterNameEntryPage & { mainTab: MainTab3Page };
    parameterNameSearch: ParameterNameSearchPage;
    storageLocation: StorageLocationPage;
    storageLocationEntry: StorageLocationEntryPage;
    repositoryLink: RepositoryLinkPage;
    selectionsEntry: SelectionsEntryPage;
    mFASetting: MFASettingPage & { overridesTab: OverridesTabPage };
    permissionHistory: PermissionHistoryPage;
    batchSearch: BatchSearchPage;
    showUsers: ShowUsersPage;
    message: MessagePage;
    offenseCodes: OffenseCodesPage;
    activityTypeMapping: ActivityTypeMappingPage;
    releaseCodes: ReleaseCodesPage;
    userQuerySearch: UserQuerySearchPage;
    repositoryEditEntry: RepositoryEditEntryPage & { mainTab: MainTab4Page };
    entraSettingWindow: EntraSettingWindowPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const settingsFixtureDefs = {
  settings: async ({ page }: { page: Page }, use: (v: SettingsFixture['settings']) => Promise<void>) => {
    const terminalEntry = Object.assign(new TerminalEntryPage(page), {
      cMSTab: new CMSTabPage(page),
      iPAddressTab: new IPAddressTabPage(page),
      dispatchTab: new DispatchTabPage(page),
      nCICTab: new NCICTabPage(page),
      e911Tab: new E911TabPage(page),
      screensTab: new ScreensTabPage(page),
      inventoryTab: new InventoryTabPage(page),
      deviceTab: new DeviceTabPage(page),
      interfaceTab: new InterfaceTabPage(page),
    });
    const textEntry = Object.assign(new TextEntryPage(page), {
      textSubjectTab: new TextSubjectTabPage(page),
      templateForTab: new TemplateForTabPage(page),
      reportsThatUseThisTextTab: new ReportsThatUseThisTextTabPage(page),
    });
    const juris = Object.assign(new JurisPage(page), {
      jusrisAddressTab: new JurisAddressTabPage(page),
      policeTab: new PoliceTabPage(page),
      reportHeaderFooter: new ReportHeaderFooterPage(page),
    });
    const jobEntry = Object.assign(new SettingsJobEntryPage(page), {
      notificationJobScreenTab: new NotificationJobScreenTabPage(page),
      scheduleJobScreenTab: new ScheduleJobScreenTabPage(page),
    });
    const cFSCodeEntry = Object.assign(new CFSCodeEntryPage(page), {
      cFSCodeOthersTab: new CFSCodeOthersTabPage(page),
      cFSCodeSOPTab: new CFSCodeSOPTabPage(page),
      cFSCodeTasksTab: new CFSCodeTasksTabPage(page),
    });
    const sharedCodes = Object.assign(new SharedCodesPage(page), {
      distributedToTab: new DistributedToTabPage(page),
      managementTab: new ManagementTabPage(page),
    });
    const textMgmt = Object.assign(new TextMgmtPage(page), {
      detailsTab: new DetailsTabPage(page),
      mobileTextTab: new MobileTextTabPage(page),
      relatedReportsTab: new RelatedReportsTabPage(page),
    });
    const rolesEntry = Object.assign(new RolesEntryPage(page), {
      rolesEntryPermissionWindow: new RolesEntryPermissionWindowPage(page),
    });
    const repositoryEntry = Object.assign(new RepositoryEntryPage(page), {
      helpTab: new HelpTabPage(page),
    });
    const cadStatusConfigEntry = Object.assign(new CADStatusConfigEntryPage(page), {
      mainTab: new MainTab2Page(page),
    });
    const parameterNameEntry = Object.assign(new ParameterNameEntryPage(page), {
      mainTab: new MainTab3Page(page),
    });
    const repositoryEditEntry = Object.assign(new RepositoryEditEntryPage(page), {
      mainTab: new MainTab4Page(page),
    });
    const mFASetting = Object.assign(new MFASettingPage(page), {
      overridesTab: new OverridesTabPage(page),
    });
    const createUserQuery = Object.assign(new CreateUserQueryPage(page), {
      masterQueryTab: new MasterQueryTabPage(page),
    });
    await use({
      module: new SettingsPage(page),
      sysParameter: new SysParameterPage(page),
      oRITerminalEntry: new ORITerminalEntryPage(page),
      cFSCode: new CFSCodePage(page),
      accessLog: new AccessLogPage(page),
      phoenixAuthenticatorWindow: new PhoenixAuthenticatorWindowPage(createPopupProxy(page, 'Authenticat')),
      coded: new CodedPage(page),
      maintainCodeValue: new MaintainCodeValuePage(page),
      jailCell: new JailCellPage(page),
      jailCellHelpWindow: new JailCellHelpWindowPage(page),
      jailCellEntry: new JailCellEntryPage(page),
      repositoryEntry,
      roleEntry: new RoleEntryPage(page),
      customFieldsScreen: new CustomFieldsScreenPage(page),
      roles: new RolesPage(page),
      fTPInterfaceSearch: new FTPInterfaceSearchPage(page),
      fTPInterfaceEntry: new FTPInterfaceEntryPage(page),
      unitsScreen: new UnitsScreenPage(page),
      unitEntry: new UnitEntryPage(page),
      rolesEntry,
      repository: new RepositoryPage(page),
      chargeScreen: new ChargeScreenPage(page),
      sharedCodes,
      actionSearch: new ActionSearchPage(page),
      actionEntry: new ActionEntryPage(page),
      terminal: new TerminalPage(page),
      terminalEntry,
      textScreen: new TextScreenPage(createFrameProxy(page, 'frmTextSrch')),
      textEntry,
      juris,
      disposition: new DispositionPage(page),
      jobsScreen: new JobsScreenPage(page),
      jobEntry,
      emailTemplate: new EmailTemplatePage(page),
      emailTemplateEntry: new EmailTemplateEntryPage(page),
      formRepositoryScreen: new FormRepositoryScreenPage(page),
      fireStationSearch: new FireStationSearchPage(page),
      fireStationEntry: new FireStationEntryPage(page),
      cFSCodeEntry,
      hazMatGuide: new HazMatGuidePage(page),
      hazMatEntry: new HazMatEntryPage(page),
      qaForms: new QAFormsPage(page),
      approvalParameter: new ApprovalParameterPage(page),
      reportRepository: new ReportRepositoryPage(page),
      reportRepositoryEntry: new ReportRepositoryEntryPage(page),
      codedMap: new CodedMapPage(page),
      codedMapDetail: new CodedMapDetailPage(page),
      distributionList: new DistributionListPage(page),
      distributionEntry: new DistributionEntryPage(page),
      textSearchHelpWindow: new TextSearchHelpWindowPage(page),
      viewHistoryWindow: new ViewHistoryWindowPage(page),
      cadStatusConfig: new CADStatusConfigPage(page),
      cadStatusConfigEntry,
      cameraConfig: new CameraConfigPage(page),
      cameraConfigEntry: new CameraConfigEntryPage(page),
      chargeDisposition: new ChargeDispositionPage(page),
      customHelp: new CustomHelpPage(page),
      customDocHelpEntry: new CustomDocHelpEntryPage(page),
      customDocHelpEntryUploadeWindow: new CustomDocHelpEntryUploadeWindowPage(page),
      dispatchZoneScreen: new DispatchZoneScreenPage(page),
      dispatchZone: new DispatchZonePage(page),
      documentCodes: new DocumentCodesPage(page),
      externalInterfaceSearch: new ExternalInterfaceSearchPage(page),
      externalInterfaceEntry: new ExternalInterfaceEntryPage(page),
      notificationFormat: new NotificationFormatPage(page),
      notificationFormatEntry: new NotificationFormatEntryPage(page),
      queryMasterEntry: new QueryMasterEntryPage(page),
      queryConfig: new QueryConfigPage(page),
      manageSectionEntry: new ManageSectionEntryPage(page),
      managetableEntry: new ManagetableEntryPage(page),
      joinsLinkingTablesEntry: new JoinsLinkingTablesEntryPage(page),
      queryRepositoryEntry: new QueryRepositoryEntryPage(page),
      quickActivityConfig: new QuickActivityConfigPage(page),
      subCategoryMapping: new SubCategoryMappingPage(page),
      textMgmt,
      createUserQuery,
      xmlExporterMaster: new XMLExporterMasterPage(page),
      xmlExportConfig: new XMLExportConfigPage(page),
      xmlExporterParentNodes: new XMLExporterParentNodesPage(page),
      xmlExporterDataTable: new XMLExporterDataTablePage(page),
      xmlExporterWhereClause: new XMLExporterWhereClausePage(page),
      xmlExporterTableDisplay: new XMLExporterTableDisplayPage(page),
      xmlExporterStaticNode: new XMLExporterStaticNodePage(page),
      parameterNameEntry,
      parameterNameSearch: new ParameterNameSearchPage(page),
      storageLocation: new StorageLocationPage(page),
      storageLocationEntry: new StorageLocationEntryPage(page),
      repositoryLink: new RepositoryLinkPage(page),
      selectionsEntry: new SelectionsEntryPage(page),
      mFASetting,
      permissionHistory: new PermissionHistoryPage(page),
      batchSearch: new BatchSearchPage(page),
      showUsers: new ShowUsersPage(page),
      message: new MessagePage(page),
      offenseCodes: new OffenseCodesPage(page),
      activityTypeMapping: new ActivityTypeMappingPage(page),
      releaseCodes: new ReleaseCodesPage(page),
      userQuerySearch: new UserQuerySearchPage(page),
      repositoryEditEntry,
      entraSettingWindow: new EntraSettingWindowPage(page),
    });
  },
};
