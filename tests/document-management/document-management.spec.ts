// @ts-nocheck
import { test, expect, withTestContext } from '../../src/fixtures/test-fixtures';

test.describe('Document Management Entry Smoke @documentMgmntEntrySmoke', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('DocumentEntry_DocmntEnt', async ({ testData, loaderPage, documentManagement, popupPage }) => {
    withTestContext(testData, 'DocmntEnt', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Entry');
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.SelectDocumentCategory();
    await documentManagement.documentEntry.EnterDocumentTitle();
    await documentManagement.documentEntry.SelectDocumentType();
    await documentManagement.documentEntry.EnterAtCurrentVersionNo(testData.documentMgmt('CurrentVersion'));
    await documentManagement.documentEntry.EnterAtCurrentVersionDate();
    await documentManagement.documentEntry.save();
    await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
    await documentManagement.documentEntry.verifyAdditionSuccessful();
    await documentManagement.module.SwitchToDocumentEntry();
  });

  test('AccreditationEntry_AccredtnEnt', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, 'DocmntEnt', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Accreditation Search');
    await documentManagement.module.switchToAccreditationSearch();
    await documentManagement.accreditationSearch.clickAddGuideBook();
    await documentManagement.module.switchToAccreditationEntry();
    await documentManagement.accreditationSearchEntry.enterBookName();
    await documentManagement.accreditationSearchEntry.enterdisplayOrder();
    await documentManagement.accreditationSearchEntry.saveScreen();
    await documentManagement.accreditationSearchEntry.verifyAdditionSuccessful();
  });
});

test.describe('Document Management Defect @DocumentMgmtDefect', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('ToVerifyTheJurisDropDownEnabledAfterUncheckSharedCheckBox_35417', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '35417', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Accreditation Search');
    await documentManagement.module.switchToAccreditationSearch();
    await documentManagement.accreditationSearch.verifyNoRecordFoundAcknowlege();
    await loaderPage.navigateToScreen('Accreditation Search');
    await documentManagement.module.switchToAccreditationSearch();
    await documentManagement.accreditationSearch.selectGuideName();
    await documentManagement.accreditationSearch.clickEditGuideButton();
    await documentManagement.module.switchToAccreditationEntry();
    await documentManagement.accreditationSearch.verifyJurisDropdownIsDisabled();
    await documentManagement.accreditationSearch.clickSharedCheckbox();
    await documentManagement.accreditationSearch.selectAtJuris(testData.documentMgmt('Juris'));
    await documentManagement.accreditationSearch.verifyAtJuris(testData.documentMgmt('Juris'));
    await documentManagement.accreditationSearchEntry.saveTheScreenWithConfirm();
    await documentManagement.accreditationSearchEntry.verifyUpdateSuccessful();
    await documentManagement.module.switchToAccreditationEntry();
  });

  test('DocumentManagementMyDocumentsQAFormSignTheForm1006ValidationFailed_48855', async ({ testData, loaderPage, documentManagement, homePage }) => {
    withTestContext(testData, '48855', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('My Documents');
    await documentManagement.module.SwitchToMyDocumentSearch();
    await documentManagement.myDocumentsSearch.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.myDocumentsSearch.clickSearchButton();
    await documentManagement.myDocumentsSearch.SelectMyDocumentfromGrid();
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.switchToQAFormsTab();
    await documentManagement.myDocumentEntry.qAFormsTab.selectAtSelectForm(testData.documentMgmt('SelectForm'));
  });

  test('CRM179311DocumentManagementDocumentDetailReportIssue_48828', async ({ testData, loaderPage, documentManagement, homePage }) => {
    withTestContext(testData, '48828', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Entry');
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.clickPrintIcon();
    await homePage.switchToSelectReport();
    await homePage.selectReport.verifyReportNameInGrid();
    await homePage.selectReport.selectAtReportNameInGrid();
    await homePage.selectReport.verifyReportWindowOpens();
    await homePage.switchToSelectReport();
  });

  test('DocumentManagementDocumentEntryUnderBlogTabEnterTheCommentsWithoutClickingTheInternalSaveUserCanAbleToSaveTheScreen_55271', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '55271', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Entry');
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.SelectAtDocumentCategory(testData.documentMgmt('Documentcategory'));
    await documentManagement.documentEntry.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentEntry.SelectAtDocumentType(testData.documentMgmt('DocumentType'));
    await documentManagement.documentEntry.EnterAtCurrentVersionNo(testData.documentMgmt('CurrentVersion'));
    await documentManagement.documentEntry.EnterAtCurrentVersionDate();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyAdditionSuccessful();
    await documentManagement.documentEntry.NavigateToBlogTab();
    await documentManagement.documentEntry.blogTab.EnterAtUpdateDateTime();
    await documentManagement.documentEntry.blogTab.EnterAtUpdatedBy(testData.documentMgmt('UpdateBy'));
    await documentManagement.documentEntry.blogTab.enterAtComments(testData.documentMgmt('Comment'));
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.clickSaveButton();
    await documentManagement.documentEntry.verifyUpdateDataInBlogTabAcknMessage();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToBlogTab();
    await documentManagement.documentEntry.blogTab.clickSaveButton();
    await documentManagement.documentEntry.blogTab.verifyAtCommentsInGrid();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyUpdateSuccessful();
  });

  test('CRM185748DocumentMgmtModuleDocumentManagementDocumentEntryScreenUnderBlogTabTheUserIsAbleToSaveThePageWithoutSavingTheComments_58302', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '58302', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('My Documents');
    await documentManagement.module.SwitchToMyDocumentSearch();
    await documentManagement.myDocumentsSearch.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.myDocumentsSearch.clickSearchButton();
    await documentManagement.myDocumentsSearch.SelectMyDocumentfromGrid();
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.NavigateToBlogTab();
    await documentManagement.myDocumentEntry.myBlogTab.EnterUpdateDateTime();
    await documentManagement.myDocumentEntry.myBlogTab.EnterAtComments(testData.documentMgmt('Comments'));
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.clickSaveButton();
    await documentManagement.myDocumentEntry.verifyUpdateDataInBlogTabAcknMessage();
    await documentManagement.module.SwitchToMyDocumentEntry();
  });

  test('CRM180663DocumentManagmentDocAssignSearchAcknowledgeCheckboxNotGetCheck_60279', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '60279', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.selectDocIconInGridByAtTitle(testData.documentMgmt('Title'));
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.verifyIAcknowledgeLabelTextIsRed();
    await documentManagement.myDocumentEntry.SelectAcknowledgeCheckbox();
    await documentManagement.myDocumentEntry.verifyIAcknowledgeLabelTextIsChecked();
    await documentManagement.myDocumentEntry.verifyIAcknowledgeLabelTextIsGreen();
    await documentManagement.myDocumentEntry.save();
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.verifyAdditionSuccessful();
    await documentManagement.myDocumentEntry.verifyIAcknowledgeLabelTextIsGreen();
    await documentManagement.myDocumentEntry.NavigateToBlogTab();
    await documentManagement.myDocumentEntry.myBlogTab.verifyIsPrivateCheckBoxIsUncheked();
    await documentManagement.myDocumentEntry.myBlogTab.SelectIsPrivateCheckbox();
    await documentManagement.myDocumentEntry.myBlogTab.verifyIsPrivateCheckBoxIscheked();
  });

  test('CRM187065DocumentEntryWhileClickingOnDeleteIconItIsAllowToDeleteTheScreenWithoutAddingData_60404', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '60404', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Entry');
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyDeleteIconIsDiabled();
    await documentManagement.documentEntry.SelectAtDocumentCategory(testData.documentMgmt('Documentcategory'));
    await documentManagement.documentEntry.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentEntry.SelectAtDocumentType(testData.documentMgmt('DocumentType'));
    await documentManagement.documentEntry.EnterAtCurrentVersionNo(testData.documentMgmt('CurrentVersion'));
    await documentManagement.documentEntry.EnterAtCurrentVersionDate();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyDeleteIconIsEnabled();
    await documentManagement.documentEntry.clickDelete();
    await documentManagement.documentEntry.verifyDeleteConfirmationPopupAppearsAndClickCancel();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToDistributedtoPFTab();
    await documentManagement.documentEntry.distributedToPFTab.selectAtDivision(testData.documentMgmt('Division'));
    await documentManagement.documentEntry.distributedToPFTab.selectAtSection(testData.documentMgmt('Section'));
    await documentManagement.documentEntry.distributedToPFTab.selectAtSquad(testData.documentMgmt('Squad'));
    await documentManagement.documentEntry.distributedToPFTab.clickAddButton1();
    await documentManagement.documentEntry.distributedToPFTab.verifyAtSquadInGrid();
  });

  test('CRM181958DocumentManagementMyDocumentDeserializationFailureInvalidResponse_62701', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '62701', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('My Documents');
    await documentManagement.module.SwitchToMyDocumentSearch();
    await documentManagement.myDocumentsSearch.clickSearchButton();
    await documentManagement.myDocumentsSearch.clickExcelIcon();
    await documentManagement.myDocumentsSearch.verifyRecentDownloadedFileFormat('.xls');
    await documentManagement.module.SwitchToMyDocumentSearch();
    const columnCellsByColumnName = await documentManagement.myDocumentsSearch.getColumnCellTextByAtColumnName(testData.documentMgmt('ColumnName'));
    await documentManagement.myDocumentsSearch.verifyAtColumnValuesAreSortedAscending(columnCellsByColumnName);
  });

  test('CRM146122ToVerifyTheAddLogicToRemoveInactivePFFromListOfAssigneesOnDocuments_63550', async ({ testData, loaderPage, documentManagement, personnel }) => {
    withTestContext(testData, '63550', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Entry');
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.SelectAtDocumentCategory(testData.documentMgmt('Documentcategory'));
    await documentManagement.documentEntry.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentEntry.SelectAtDocumentType(testData.documentMgmt('DocumentType'));
    await documentManagement.documentEntry.EnterAtCurrentVersionNo(testData.documentMgmt('CurrentVersion'));
    await documentManagement.documentEntry.EnterAtCurrentVersionDate();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyAdditionSuccessful();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToDistributedtoPFTab();
    await documentManagement.documentEntry.distributedToPFTab.EnterAtDocumentToBeReadByPF(testData.documentMgmt('DocumentToReadBy'));
    await documentManagement.documentEntry.distributedToPFTab.clickAddButton2();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.save();
    await documentManagement.documentEntry.verifyUpdateSuccessful();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToAssignmentTab();
    await documentManagement.documentEntry.assignmentTab.SelectDistributeCheckBox();
    await documentManagement.documentEntry.assignmentTab.EnterAtAssignedDate();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.clickSaveNCloseButton();
    await loaderPage.navigateToScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.EnterAtDistributionPFNo(testData.documentMgmt('DistributionPFNo'));
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.verifyAtDocumentTitleInGrid();
    await loaderPage.navigateToModule('Personnel');
    await loaderPage.navigateToScreen('Personnel Search');
    await personnel.module.switchToPersonnelSearch();
    await personnel.personnelSearch.enterAtPF(testData.documentMgmt('PFCode'));
    await personnel.personnelSearch.clickSearchButton();
    await personnel.personnelSearch.verifyAtPFCodeInGrid(0);
    await personnel.personnelSearch.selectRowAtPFCode();
    await personnel.module.switchToPersonnelEntry();
    await personnel.personnelEntry.clickInactiveCheckBox();
    await personnel.personnelEntry.saveNClose();
    await personnel.module.switchToPersonnelSearch();
    await personnel.personnelSearch.verifyNoRecordFoundAcknowledgeMessage();
    await personnel.module.switchToPersonnelSearch();
    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.enterAtTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.verifyNoRecordFoundAcknowledgeMessage();
    await documentManagement.module.SwitchToDocumentAssignSearch();
  });

  test('CRM151867ToVerifyTheDocumentmgmtDocumentManagementWhileClickingSelectAllCheckBoxWeAreGettingJSError_63646', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '63646', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Management');
    await documentManagement.module.SwitchToDocumentManagementSearch();
    await documentManagement.documentManagementSearch.clickSearchLink();
    await documentManagement.documentManagementSearch.clickSelectAllCheckBox();
    await documentManagement.documentManagementSearch.verifyJSErrorNotAppear();
    await documentManagement.documentManagementSearch.verifyAllCheckboxesAreCheckedInGrid();
    await documentManagement.documentManagementSearch.clickSelectAllCheckBox();
    await documentManagement.documentManagementSearch.verifyJSErrorNotAppear();
    await documentManagement.documentManagementSearch.verifyAllCheckboxesAreNotCheckedInGrid();
  });
});

test.describe('Document Management Enhancement 2024 @DocumentMgmtEnhancement2024', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('CRM_171278TOVerifyTheDocumentMgmntDocAssignSearchReportsNotAvailable_42055', async ({ testData, loaderPage, documentManagement, homePage }) => {
    withTestContext(testData, '42055', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.clickPrintIcon();
    await homePage.switchToSelectReport();
    await homePage.selectReport.selectAtReportNameInGrid();
    await homePage.switchToPnxReportSSRSPDFScreen();
    await homePage.pnxReportSSRSPDFScreen.downloadReports();
    await homePage.pnxReportSSRSPDFScreen.verifyContentInPDF(testData.documentMgmt('Title'));
  });
});

test.describe('Document Management Print Report @Q1Attachment2024', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('CRM_173890ToVerifyTheDocumentManagementPrintReportRecordCountMisMatch_42005', async ({ testData, loaderPage, documentManagement, homePage, settings }) => {
    withTestContext(testData, '42005', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Entry');
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.SelectAtDocumentCategory(testData.documentMgmt('Documentcategory'));
    await documentManagement.documentEntry.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentEntry.SelectAtDocumentType(testData.documentMgmt('DocumentType'));
    await documentManagement.documentEntry.EnterAtCurrentVersionNo(testData.documentMgmt('CurrentVersion'));
    await documentManagement.documentEntry.EnterAtCurrentVersionDate();
    await documentManagement.documentEntry.save();
    await documentManagement.documentEntry.NavigateToDocumentTab();
    await documentManagement.documentEntry.documentTab.clickUploadaFileRadioButton();
    await documentManagement.documentEntry.documentTab.clickSelectButton();
    await homePage.attachment.SelectPDFFile();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToAssignmentTab();
    await documentManagement.documentEntry.assignmentTab.SelectDistributeCheckBox();
    await documentManagement.documentEntry.assignmentTab.EnterAtAssignedDate();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToReviewbyPFTab();
    await documentManagement.documentEntry.reviewbyPFTab.EnterAtReviewByPF(testData.documentMgmt('ReviewerPF'));
    await documentManagement.documentEntry.reviewbyPFTab.clickAddButton2();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToDistributedtoPFTab();
    await documentManagement.documentEntry.distributedToPFTab.EnterAtDocumentToBeReadByPF(testData.documentMgmt('DocumentToReadBy'));
    await documentManagement.documentEntry.distributedToPFTab.clickAddButton2();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.save();
    await documentManagement.documentEntry.verifyUpdateSuccessful();
    await loaderPage.logout();
    await loaderPage.loginUsingTestContext(testData.documentMgmt('UserName'), testData.documentMgmt('Password'));
    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('My Documents');
    await documentManagement.module.SwitchToMyDocumentSearch();
    await documentManagement.myDocumentsSearch.SelectShowUnreadOnlyRadioBox();
    await documentManagement.myDocumentsSearch.clickSearchButton();
    await documentManagement.myDocumentsSearch.verifyAtDocumentNameInGrid(1);
    const size = await documentManagement.myDocumentsSearch.getDocumentNameCountInGrid();
    await documentManagement.module.SwitchToMyDocumentSearch();
    await documentManagement.myDocumentsSearch.clicPrintIcon();
    await homePage.switchToSelectReport();
    await homePage.selectReport.VerifyRecordCount(size);
    await homePage.selectReport.CloseTheScreen();
    await documentManagement.module.SwitchToMyDocumentSearch();
    await documentManagement.myDocumentsSearch.SelectShowAllRadioBox();
    await documentManagement.myDocumentsSearch.clickSearchButton();
    await documentManagement.myDocumentsSearch.verifyAtDocumentNameInGrid(1);
    const size1 = await documentManagement.myDocumentsSearch.getDocumentNameCountInGrid();
    await documentManagement.myDocumentsSearch.clicPrintIcon();
    await homePage.switchToSelectReport();
    await homePage.selectReport.VerifyRecordCount(size1);
  });
});

test.describe('Daily Defect CRM Document Management @DailyDefectCRMDocumentManagement', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('verifyDocumentMangementRecordCountAndCheckboxIsChecked_65764', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '65764', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Management');
    await documentManagement.module.SwitchToDocumentManagementSearch();
    await documentManagement.documentManagementSearch.clickSearchLink();
    await documentManagement.documentManagementSearch.clickSelectAllCheckBox();
    const count = await documentManagement.documentManagementSearch.getRecordCountInGrid();
    await documentManagement.documentManagementSearch.verifyRecordCountInGrid(count);
    await documentManagement.documentManagementSearch.verifyListedRecordIsChecked();
  });
});

test.describe('Q4 Document Management Legacy 2025 @Q4DocumentMgmtLegacy2025', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('DocAssignSearchScreenFunctionality_74506', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '74506', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.EnterAtDistributionPFNo(testData.documentMgmt('DistributionPFNo'));
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.verifyAtOfficerInGrid();
    await loaderPage.ReLoadScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.enterAtAssignedPFNo(testData.documentMgmt('AssignedPFNo1'));
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.selectRandomGridRow();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToAssignmentTab();
    await documentManagement.documentEntry.assignmentTab.verifyAtDocumentAuthorPFCode(testData.documentMgmt('DocumentAuthor1'));
    await documentManagement.documentEntry.assignmentTab.verifyAtDocumentAuthorPFDescription(testData.documentMgmt('DocumentAuthorDescription1'));
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.closeScreen();
    await loaderPage.ReLoadScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.SelectAtDocumentType(testData.documentMgmt('Type'));
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.verifyAtTypeInGrid();
    await loaderPage.ReLoadScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.enterAtTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.verifyAtDocumentTitleInGrid();
    await loaderPage.ReLoadScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.enterAtFromDateTime(testData.documentMgmt('FromDate'));
    await documentManagement.documentAssignSearch.enterAtToDateTime(testData.documentMgmt('ToDate'));
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.verifyDatesBetweenFromAndToDatesInGrid();
    await loaderPage.ReLoadScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.SelectReadCheckBox();
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.selectRandomGridRowDocIcon();
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.verifyIAcknowledgeLabelTextIsChecked();
    await documentManagement.myDocumentEntry.closeScreen();
    await loaderPage.ReLoadScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.SelectUnreadCheckBox();
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.selectRandomGridRowDocIcon();
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.verifyIAcknowledgeCheckboxIsUnselected();
  });

  test('DocumentManagementScreenFunctionality_74788', async ({ testData, loaderPage, documentManagement, homePage }) => {
    withTestContext(testData, '74788', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Management');
    await documentManagement.module.SwitchToDocumentManagementSearch();
    await documentManagement.documentManagementSearch.SelectAtDocumentCategory(testData.documentMgmt('DocumentCategory'));
    await documentManagement.documentManagementSearch.clickSearchLink();
    await documentManagement.documentManagementSearch.verifyAtDocumentCategoryInGrid(1);
    await documentManagement.documentManagementSearch.clickAddNewButton();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.clickCancelButton();
    await documentManagement.module.SwitchToDocumentManagementSearch();
    await documentManagement.documentManagementSearch.clickBackLink();
    await documentManagement.documentManagementSearch.clickResetLink();
    await documentManagement.documentManagementSearch.SelectAtDocumentCategory(testData.documentMgmt('DocumentCategory'));
    await documentManagement.documentManagementSearch.SelectAtDocumentType(testData.documentMgmt('Type'));
    await documentManagement.documentManagementSearch.clickSearchLink();
    await documentManagement.documentManagementSearch.verifyAtDocumentCategoryInGrid(1);
    await documentManagement.documentManagementSearch.verifyAtDocumentTypeInGrid(1);
    await documentManagement.documentManagementSearch.clickBackLink();
    await documentManagement.documentManagementSearch.clickResetLink();
    await documentManagement.documentManagementSearch.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentManagementSearch.clickSearchLink();
    await documentManagement.documentManagementSearch.verifyAtDocumentNameInGrid(1);
    await documentManagement.documentManagementSearch.clickBackLink();
    await documentManagement.documentManagementSearch.clickResetLink();
    await documentManagement.documentManagementSearch.SelectAtDocumentCategory(testData.documentMgmt('DocumentCategory'));
    await documentManagement.documentManagementSearch.SelectAtDocumentType(testData.documentMgmt('Type'));
    await documentManagement.documentManagementSearch.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentManagementSearch.EnterAtDocumentNo(testData.documentMgmt('DocumentNo'));
    await documentManagement.documentManagementSearch.EnterAtAssignedByPFNo(testData.documentMgmt('AssignedByPFNo'));
    await documentManagement.documentManagementSearch.enterAtKeywords(testData.documentMgmt('Keywords1'));
    await documentManagement.documentManagementSearch.EnterAtAssignedDate(testData.documentMgmt('Date'));
    await documentManagement.documentManagementSearch.SelectCriticalCheckBox();
    await documentManagement.documentManagementSearch.clickReadStatusAllRadioButton();
    await documentManagement.documentManagementSearch.SelectInculdeInactiveCheckBox();
    await documentManagement.documentManagementSearch.clickDivisionAccordionArrow();
    await documentManagement.documentManagementSearch.selectAtDivision(testData.documentMgmt('Division1'));
    await documentManagement.documentManagementSearch.selectAtSection(testData.documentMgmt('Section1'));
    await documentManagement.documentManagementSearch.enterAtSquad(testData.documentMgmt('Squad1'));
    await documentManagement.documentManagementSearch.clickMultiplePFAccordionArrow();
    await documentManagement.documentManagementSearch.clickAssignedToButton();
    await homePage.switchToAddMultiplePFScreen();
    await homePage.addMultiplePF.ClickSelectAll();
    await homePage.addMultiplePF.ClickAddTheSelectPFToList();
    await documentManagement.module.SwitchToDocumentManagementSearch();
    await documentManagement.documentManagementSearch.clickResetLink();
    await documentManagement.documentManagementSearch.verifyAtDocumentCategory(testData.documentMgmt('DocumentCategory2'));
    await documentManagement.documentManagementSearch.verifyAtType(testData.documentMgmt('DocumentType2'));
    await documentManagement.documentManagementSearch.verifyDocumentTitleAsBlank();
    await documentManagement.documentManagementSearch.verifyDocumentNoAsBlank();
    await documentManagement.documentManagementSearch.verifyAssignedByPFAsBlank();
    await documentManagement.documentManagementSearch.verifyKeywordsAsBlank();
    await documentManagement.documentManagementSearch.verifyAssignedDateAsBlank();
    await documentManagement.documentManagementSearch.verifyCriticalCheckboxIsUnselected();
    await documentManagement.documentManagementSearch.verifyIncludeInactiveCheckboxIsUnselected();
    await documentManagement.documentManagementSearch.verifyReadStatusAllRadioButtonIsUnselected();
    await documentManagement.documentManagementSearch.clickDivisionAccordionArrow();
    await documentManagement.documentManagementSearch.verifyAtDivision(testData.documentMgmt('Division2'));
    await documentManagement.documentManagementSearch.verifyAtSection(testData.documentMgmt('Section2'));
    await documentManagement.documentManagementSearch.verifySquadAsBlank();
    await documentManagement.documentManagementSearch.clickMultiplePFAccordionArrow();
    await documentManagement.documentManagementSearch.verifyMultiplePFGridAsEmpty();
    await documentManagement.documentManagementSearch.clickSearchLink();
    await documentManagement.documentManagementSearch.verifyAtDocumentNameInGrid(1);
    await documentManagement.documentManagementSearch.verifyAtDocumentNameInGrid(2);
    await documentManagement.documentManagementSearch.verifyAtDocumentNameInGrid(3);
  });
});

test.describe('Q4 Document Management Defect 2025 @Q4DocumentMgmtDefect2025', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('DocumentEntryUnderAssignmentTabEnterMoreThan10NumbersInScoreToMarkAsReadFieldAndClickOnSaveGetting1006ObjectFailedPopupCRM195070_74417', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '74417', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Entry');
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.SelectAtDocumentCategory(testData.documentMgmt('Documentcategory'));
    await documentManagement.documentEntry.SelectAtDocumentType(testData.documentMgmt('DocumentType'));
    await documentManagement.documentEntry.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentEntry.EnterAtCurrentVersionNo(testData.documentMgmt('CurrentVersion'));
    await documentManagement.documentEntry.EnterAtCurrentVersionDate();
    await documentManagement.documentEntry.clickSaveNContinuetheDocumentButton();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToAssignmentTab();
    await documentManagement.documentEntry.assignmentTab.enterAtScoreToMarkAsRead(testData.documentMgmt('ScoreToMarkAsRead1'));
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyUpdateSuccessful();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToAssignmentTab();
    await documentManagement.documentEntry.assignmentTab.verifyScoreToMarkAsRead(testData.documentMgmt('ScoreToMarkAsRead2'));
    await documentManagement.documentEntry.assignmentTab.SelectAtChangeStatus(testData.documentMgmt('ChangeStatusTo'));
    await documentManagement.documentEntry.assignmentTab.EnterAtAssignedDate();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyUpdateSuccessful();
    await documentManagement.documentEntry.verifyNewVersionFieldIsDisplayed();
    await documentManagement.documentEntry.verifyCreateNewVersionButtonIsDisplayed();
  });

  test('DocumentManagementDocAssignSearchClickDocIconMyDocumentsBlogTabAddDataThenByClickingOnSaveIconWeAreGettingBlueScreenErrorCRM200722_74501', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '74501', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Doc Assign Search');
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await documentManagement.documentAssignSearch.enterAtTitle(testData.documentMgmt('Title'));
    await documentManagement.documentAssignSearch.clickSearchButton();
    await documentManagement.documentAssignSearch.selectDocIconInGridByAtTitle(testData.documentMgmt('Title'));
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.NavigateToBlogTab();
    await documentManagement.myDocumentEntry.myBlogTab.EnterAtComments(testData.documentMgmt('Comments'));
    await documentManagement.myDocumentEntry.myBlogTab.clickSaveButton();
    await documentManagement.myDocumentEntry.myBlogTab.verifyAtCommentsInGrid();
    // 74815
    await documentManagement.module.SwitchToMyDocumentEntry();
    await documentManagement.myDocumentEntry.closeScreen();
    await documentManagement.module.SwitchToDocumentAssignSearch();
    await loaderPage.navigateToScreen('My Documents');
    await documentManagement.module.SwitchToMyDocumentSearch();
    await documentManagement.myDocumentsSearch.SelectShowAllRadioBox();
    await documentManagement.myDocumentsSearch.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.myDocumentsSearch.clickSearchButton();
    await documentManagement.myDocumentsSearch.SelectMyDocumentfromGrid();
    await documentManagement.module.SwitchToMyDocumentEntry();
    // 74834
    await documentManagement.myDocumentEntry.clickDocumentTab();
    await documentManagement.myDocumentEntry.documentTab.verifyResizeButtonIsNotDisplayed();
    await documentManagement.module.SwitchToMyDocumentEntry();
    // - 74834 -
    await documentManagement.myDocumentEntry.saveAndCloseScreen();
    await documentManagement.module.SwitchToMyDocumentSearch();
    // - 74815 -
  });

  test('GettingJSErrorInDocumentManagementCRM195994_74717', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '74717', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Management');
    await documentManagement.module.SwitchToDocumentManagementSearch();
    await documentManagement.documentManagementSearch.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentManagementSearch.SelectInculdeInactiveCheckBox();
    await documentManagement.documentManagementSearch.clickSearchLink();
    await documentManagement.documentManagementSearch.clickExpandCollapseCheckbox();
    await documentManagement.documentManagementSearch.selectAtDocumentCategoryCheckboxInGrid(1);
    await documentManagement.documentManagementSearch.verifyJSErrorNotAppear();
    await documentManagement.module.SwitchToDocumentManagementSearch();
    // 74777
    await documentManagement.documentManagementSearch.clickBackLink();
    await documentManagement.documentManagementSearch.clickResetLink();
    await documentManagement.documentManagementSearch.enterAtKeywords(testData.documentMgmt('Keywords1'));
    await documentManagement.documentManagementSearch.clickSearchLink();
    await documentManagement.documentManagementSearch.verifyAtDocumentNameInGrid(1);
  });

  test('DocumentEntrySelectTheExistingEntryAddTheDistributedPFAndCheckTheShowUnreadyOnlyCheckBoxWhileClickOnSaveButtonCRM177648_74855', async ({ testData, loaderPage, documentManagement }) => {
    withTestContext(testData, '74855', 'DocumentMgmt');

    await loaderPage.navigateToModule('Document Mgmt');
    await loaderPage.navigateToScreen('Document Entry');
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.SelectAtDocumentCategory(testData.documentMgmt('Documentcategory'));
    await documentManagement.documentEntry.EnterAtDocumentTitle(testData.documentMgmt('DocumentTitle'));
    await documentManagement.documentEntry.SelectAtDocumentType(testData.documentMgmt('DocumentType'));
    await documentManagement.documentEntry.EnterAtCurrentVersionNo(testData.documentMgmt('CurrentVersion'));
    await documentManagement.documentEntry.EnterAtCurrentVersionDate();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyAdditionSuccessful();
    await documentManagement.documentEntry.NavigateToDistributedtoPFTab();
    await documentManagement.documentEntry.distributedToPFTab.enterAtDocumentToBeReadByPF(testData.documentMgmt('DocumentToReadBy1'));
    await documentManagement.documentEntry.distributedToPFTab.selectShowUnreadyOnlyCheckbox();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToDistributedtoPFTab();
    await documentManagement.documentEntry.distributedToPFTab.clickAddButton2();
    await documentManagement.documentEntry.distributedToPFTab.verifyAtPFInGrid2(testData.documentMgmt('PF1'));
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyUpdateSuccessful();
    await documentManagement.documentEntry.NavigateToDistributedtoPFTab();
    await documentManagement.documentEntry.distributedToPFTab.verifyAtPFInGrid2(testData.documentMgmt('PF1'));
    await documentManagement.documentEntry.distributedToPFTab.enterAtDocumentToBeReadByPF(testData.documentMgmt('DocumentToReadBy2'));
    await documentManagement.documentEntry.distributedToPFTab.selectShowUnreadyOnlyCheckbox();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.NavigateToDistributedtoPFTab();
    await documentManagement.documentEntry.distributedToPFTab.clickAddButton2();
    await documentManagement.documentEntry.distributedToPFTab.verifyAtPFInGrid2(testData.documentMgmt('PF2'));
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.save();
    await documentManagement.module.SwitchToDocumentEntry();
    await documentManagement.documentEntry.verifyUpdateSuccessful();
    await documentManagement.documentEntry.NavigateToDistributedtoPFTab();
    await documentManagement.documentEntry.distributedToPFTab.verifyAtPFInGrid2(testData.documentMgmt('PF2'));
  });
});
