// @ts-nocheck
import { test, expect } from '../../src/fixtures/test-fixtures';
import { withTestContext } from '../../src/data/test-context';

test.describe('Q4BIDefect2023', () => {
  test('ToVerifyTheViewDashboardFunctionalitiesInPowerBIDesktop_13879', async ({ loginPage, loaderPage, bi, testData }) => {
    await withTestContext(testData, '13879', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('My DashBoard');
      await bi.module.switchToMyDashboard();
      await bi.myDashboard.clickPowerBI();
      await bi.myDashboard.powerBI.downloadFile();
      await bi.myDashboard.powerBI.verifyFileNotFound();
      await bi.module.switchToMyDashboard();
    });
  });

  test('CRM_160141_ToVerifyTheInActiveRecordFunctionalitiesInDashBoardConfigScreen_18683', async ({ loginPage, loaderPage, bi, testData }) => {
    await withTestContext(testData, '18683', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.clickAddNew();
      await bi.module.switchToDashBoardEntry();
      await bi.dashBoardEntry.enterAtDashBoardName();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.selectAtDasboardType();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.clickSelectButton();
      // fileUpload("Drug Form.pdf") - handled externally
      await bi.module.switchToDashBoardEntry();
      await bi.dashBoardEntry.clicksave();
      await bi.dashBoardEntry.clickInActiveCheckBox();
      await bi.dashBoardEntry.saveAndCloseScreen();
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.enterAtDashBoardName();
      await bi.dashBoardConfig.clickInactiveCheckBox();
      await bi.dashBoardConfig.clickSearch();
      await bi.dashBoardConfig.verifyAtRowAsGreyOut();
      await bi.dashBoardConfig.selectAtDashBoardNameInGrid();
      await bi.module.switchToDashBoardEntry();
      await bi.dashBoardEntry.verifyInactiveDateAndTime();
    });
  });

  test('VerifyTheMapLoadingForAllThreeTypesGoogleHereESRI_32657', async ({ loginPage, loaderPage, bi, settings, testData }) => {
    await withTestContext(testData, '32657', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sharedCodes.setSystemparameter512AsGoogleMap();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('GIS Analysis');
      await bi.module.switchToGISAnalysis();
      await bi.gisAnalysis.verifyMapWindowIsExist('GIS Analysis', 'frmGISAnalysisEntry.aspx');
      await bi.gisAnalysis.close();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sharedCodes.setSystemparameter512AsESRI();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('GIS Analysis');
      await bi.module.switchToGISAnalysis();
      await bi.gisAnalysis.verifyMapWindowIsExist('frmEsriGISAnalysis', 'frmEsriGISAnalysis.aspx');
      await bi.gisAnalysis.close();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sharedCodes.setSystemparameter512AsHEREMap();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('GIS Analysis');
      await bi.module.switchToGISAnalysis();
      await bi.gisAnalysis.verifyMapWindowIsExist('GIS Analysis', 'frmGISAnalysisEntryHERE.aspx');
      await bi.gisAnalysis.close();
    });
  });

  test('CRM171083_2024_AutomationTeamReportedIssuesInBIModule_44236', async ({ loginPage, loaderPage, bi, settings, testData }) => {
    await withTestContext(testData, '44236', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.selectAtDashBoardType();
      await bi.dashBoardConfig.clickSearch();
      await bi.dashBoardConfig.SelectRandomValueInGrid();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.clickDashBoardPreviewIcon();
      await settings.sharedCodes.switchToRTDashboard();
      await settings.sharedCodes.verify404FileNotFoundErrorNotArise();
      await settings.sharedCodes.clickNextArrowButton();
      await bi.module.switchToDashBoardConfig();
    });
  });

  test('CRM178309_IssuesEncounteredDuringIAModuleSetup_2024_R2_175_50456', async ({ loginPage, loaderPage, bi, settings, testData }) => {
    await withTestContext(testData, '50456', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.clickAddNew();
      await bi.module.switchToDashBoardEntryForFire();
      await bi.dashBoardEntry.enterAtDashBoardName();
      await bi.dashBoardEntry.clickMainTab();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.selectAtDasboardType();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.selectAtJobName();
      await bi.dashBoardEntry.clickIDistributedToTab();
      await bi.dashBoardEntry.dashBoardEnrtyDistributedToTab.enterAtDistributeReportTo();
      await bi.dashBoardEntry.dashBoardEnrtyDistributedToTab.clickAddButton();
      await bi.dashBoardEntry.clickDisplayScreenTab();
      await bi.dashBoardEntry.dashBoardEnrtyDisplayScreenTab.enterAtDisplayScreenID();
      await bi.dashBoardEntry.dashBoardEnrtyDisplayScreenTab.clickAddButton();
      await bi.dashBoardEntry.dashBoardEnrtyDisplayScreenTab.verifyAtScreenIdInGrid();
      await bi.module.switchToDashBoardEntryForFire();
      await bi.dashBoardEntry.clicksave();
      await bi.dashBoardEntry.verifyTabColorAsBlue('Main');
      await bi.dashBoardEntry.verifyTabColorAsBlue('Distributed To');
      await bi.dashBoardEntry.verifyTabColorAsBlue('Display Screen');
      await bi.module.switchToDashBoardEntryForFire();
      await bi.dashBoardEntry.closeScreen();
      // scenario 2
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.clickAddNew();
      await bi.module.switchToDashBoardEntryForFire();
      await bi.dashBoardEntry.enterAtDashBoardName();
      await bi.dashBoardEntry.enterAtVersion();
      await bi.dashBoardEntry.copyVersion();
      await bi.dashBoardEntry.clickMainTab();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.selectAtDasboardType(1);
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.PastAlphabetInSecondsField();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.PastAlphabetInSortSeqField();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.verifySecondsFieldIsEmpty();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.verifySortSeqFieldIsEmpty();
      await bi.module.switchToDashBoardEntryForFire();
      await bi.dashBoardEntry.closeScreen();
      // scenario 3
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.clickAddNew();
      await bi.module.switchToDashBoardEntryForFire();
      await bi.dashBoardEntry.enterAtDashBoardName();
      await bi.dashBoardEntry.clickIDistributedToTab();
      await bi.dashBoardEntry.dashBoardEnrtyDistributedToTab.selectAtDivision();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.closeScreen();
      await bi.module.switchToDashBoardEntry();
      await bi.dashBoardEntry.clickIDistributedToTab();
      await bi.dashBoardEntry.dashBoardEnrtyDistributedToTab.selectAtSection();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.closeScreen();
      await bi.module.switchToDashBoardEntry();
      await bi.dashBoardEntry.clickIDistributedToTab();
      await bi.dashBoardEntry.dashBoardEnrtyDistributedToTab.selectAtSquad();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.closeScreen();
      await bi.module.switchToDashBoardEntryForFire();
      await bi.dashBoardEntry.closeScreen();
    });
  });

  test('MydashboardScreenopensblankinRMS_74962', async ({ loginPage, loaderPage, bi, testData }) => {
    await withTestContext(testData, '74962', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('My DashBoard');
      await bi.module.switchToMyDashboard();
      await bi.myDashboard.verifyAtMyDashboardName(1);
    });
  });

  test('CRM178309_DashboardConfigScreenshowsJSErrorWhenIaddthedataunderMainTab_60600', async ({ loginPage, loaderPage, bi, settings, testData }) => {
    await withTestContext(testData, '60600', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.selectAtDashBoardType();
      await bi.dashBoardConfig.clickSearch();
      await bi.dashBoardConfig.SelectRandomValueInGrid();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.clickMainTab();
      const selectedDashboardName = await settings.sharedCodes.mainTab.getSelectedDashboardName();
      await settings.sharedCodes.mainTab.enterAtDashboardEntrySeconds();
      await settings.sharedCodes.mainTab.enterAtDashboardEntrySortSequence();
      await settings.sharedCodes.mainTab.clickDashboardEntryAddButton();
      await settings.sharedCodes.mainTab.verifyAtDashboardNameInGridUsingDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.verifyAtDashboardEntrySecondsInGridUsingDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.verifyAtDashboardEntrySortSequenceInGridUsingDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.selectAtDashboardEntryDashboardNameInGridUsingDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.clickDashboardEntryClearButton();
      await settings.sharedCodes.mainTab.verifyAtDashboardNameInGridUsingDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.verifyAtDashboardEntrySecondsInGridUsingDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.verifyAtDashboardEntrySortSequenceInGridUsingDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.selectAtDashboardEntryDashboardNameInGridUsingDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.verifyConfiguredDashboardName(selectedDashboardName);
      await settings.sharedCodes.mainTab.verifyAtDashboardEntrySeconds();
      await settings.sharedCodes.mainTab.verifyAtDashboardSortSeq();
    });
  });

  test('CRM_194297_ToVerifyTheDeleteIconFunctionalitiesInDashboardEntryScreen_74964', async ({ loginPage, loaderPage, bi, settings, testData }) => {
    await withTestContext(testData, '74964', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.enterAtDashBoardName();
      await bi.dashBoardConfig.clickSearch();
      await bi.dashBoardConfig.selectAtDashBoardNameInGrid();
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.deleteInPopup1();
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.verify1011NoRecordFoundAckMsg();
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.clickAddNew();
      await bi.module.switchToDashBoardEntryForFire();
      await settings.sharedCodes.verifyVersionFieldNotDisplayed();
      await bi.dashBoardEntry.enterAtDashBoardName();
      await bi.dashBoardEntry.clickMainTab();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.selectAtDasboardType();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.enterSecondsAs1();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.enterSortSeqAs1();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.clickAddButton();
      await bi.module.switchToDashBoardEntryForFire();
      await bi.dashBoardEntry.saveScreen();
      await bi.module.switchToDashBoardEntryForFire();
      const dashboardCode1 = await settings.sharedCodes.getDashboardCode();
      await settings.sharedCodes.deleteInPopup1();
      await bi.dashBoardConfig.verify1011NoRecordFoundAckMsg();
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.clickSearch();
      await bi.dashBoardConfig.verify1011NoRecordFoundAckMsg();
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.verifyAtDashboardCodeNotFound(dashboardCode1);
    });
  });
});

test.describe('BIEntryScreen', () => {
  test('DashBoardConfigSmokeEntry', async ({ loginPage, loaderPage, bi, testData }) => {
    await withTestContext(testData, 'DashBoardConfig', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.clickAddNew();
      await bi.module.switchToDashBoardEntry();
      await bi.dashBoardEntry.enterAtDashBoardName();
      await bi.dashBoardEntry.clickMainTab();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.selectAtDasboardType();
      await bi.dashBoardEntry.dashBoardEnrtyMainTab.selectAtJobName();
      await bi.module.switchToDashBoardEntry();
      await bi.dashBoardEntry.clicksave();
      await bi.module.switchToDashBoardEntry();
    });
  });

  test('StatisticalReportSmokeEntry', async ({ loginPage, loaderPage, bi, testData }) => {
    await withTestContext(testData, 'StatisticalReportEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('Statistical Report');
      await bi.module.switchToStatisticalReport();
      await bi.statisticalReport.clickBuildNewReport();
      await bi.module.switchToStatisticalReportEntry();
      await bi.statisticalReportEntry.enterAtReportName();
      await bi.statisticalReportEntry.selectAtDateRange();
      await bi.statisticalReportEntry.clickAddMoreItems();
      await bi.statisticalReportEntry.enterAtCategoryTitle();
      await bi.statisticalReportEntry.enterAtName();
      await bi.statisticalReportEntry.enterAtCriteriaNotes();
      await bi.statisticalReportEntry.selectAtDataSource();
      await bi.statisticalReportEntry.clickAddItemSave();
      await bi.statisticalReportEntry.save();
    });
  });
});

test.describe('Q4BIFunctional2025', () => {
  test('ToverifytheSortOrderfunctionalitiesbasedonDashboardName_74452', async ({ loginPage, loaderPage, bi, testData }) => {
    await withTestContext(testData, '74452', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.enterAtDashBoardName();
      await bi.dashBoardConfig.selectAtDashBoardType();
      await bi.dashBoardConfig.selectAtDashBoardCategory();
      await bi.dashBoardConfig.clickSearch();
      await bi.dashBoardConfig.verifyAtJurisInAscendingOrder();
      await bi.dashBoardConfig.verifyAtJurisInDescendingOrder();
      await bi.dashBoardConfig.verifyAtDashboardCodeInAscendingOrder();
      await bi.dashBoardConfig.verifyAtDashboardCodeInDescendingOrder();
      await bi.dashBoardConfig.verifyAtDashboardNameInAscendingOrder();
      await bi.dashBoardConfig.verifyAtDashboardNameInDescendingOrder();
      await bi.dashBoardConfig.verifyAtDashboardTypeInAscendingOrder();
      await bi.dashBoardConfig.verifyAtDashboardTypeInDescendingOrder();
      await bi.dashBoardConfig.verifyAtDashBoardCategoryInAscendingOrder();
      await bi.dashBoardConfig.verifyAtDashBoardCategoryInDescendingOrder();
      await bi.dashBoardConfig.verifyAtFromInAscendingOrder();
      await bi.dashBoardConfig.verifyAtFromInDescendingOrder();
      await bi.dashBoardConfig.verifyAtToInAscendingOrder();
      await bi.dashBoardConfig.verifyAtToInDescendingOrder();
      await bi.dashBoardConfig.verifyAtSortOrderInAscendingOrder();
      await bi.dashBoardConfig.verifyAtSortOrderInDescendingOrder();
    });
  });
});

test.describe('Q4BILegacy2025', () => {
  test('ToVerifyTheSearchFunctionalitiesInDashboardConfigScreenBasedOnMultipleJuris_74459', async ({ loginPage, loaderPage, bi, testData }) => {
    await withTestContext(testData, '74459', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.verifyAtJuris();
    });
  });

  test('ToVerifyTheSearchFunctionalitiesInDashboardConfigScreenBasedOnMultipleJuris_74460', async ({ loginPage, loaderPage, bi, settings, testData }) => {
    await withTestContext(testData, '74460', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('DashBoard Config');
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.verifyAtJuris();
      await bi.dashBoardConfig.selectAtJuris(1);
      await bi.dashBoardConfig.enterAtDashBoardName();
      await bi.dashBoardConfig.clickSearch();
      await bi.dashBoardConfig.selectAtDashBoardNameInGrid(1);
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.verifyAtJuris(1);
      await settings.sharedCodes.verifyAtCodeID();
      await settings.sharedCodes.verifyAtCodeValue();
      await settings.sharedCodes.closeScreen();
      await bi.module.switchToDashBoardConfig();
      await bi.module.switchToDashBoardConfig();
      await bi.dashBoardConfig.verifyAtJuris(1);
      await bi.dashBoardConfig.selectAtJuris(1);
      await bi.dashBoardConfig.selectAtDashBoardType();
      await bi.dashBoardConfig.clickSearch();
      await bi.dashBoardConfig.selectAtDashBoardTypeInGrid(1);
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.verifyAtJuris(1);
      await settings.sharedCodes.verifyAtDashboardCategory(1);
    });
  });
});

test.describe('Ungrouped', () => {
  test('MasterSearchEntry_259710', async ({ loginPage, loaderPage, bi, homePage, settings, testData }) => {
    await withTestContext(testData, '259710', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('Master Search');
      await bi.module.switchToMasterSearch();
      await bi.masterSearch.mouseHoverOnQueryBuilder();
      await bi.masterSearch.selectCaseFromQueryBuilder();
      await bi.module.switchToMasterSearchEntry();
      await bi.masterSearchEntry.enterAtReportName();
      await bi.masterSearchEntry.clickOnPeriodTab();
      await bi.masterSearchEntry.masterSearchEntryPeriodTab.selectAtDateRange();
      await bi.masterSearchEntry.masterSearchEntryPeriodTab.enterAtFromDate();
      await bi.masterSearchEntry.masterSearchEntryPeriodTab.enterAtToDate();
      await bi.masterSearchEntry.saveAndClose();
      await bi.module.switchToMasterSearch();
      await bi.masterSearch.enterAtReportName();
      await bi.masterSearch.clickSearchButton();
      await bi.masterSearch.verifyAtReportName(0);
      await bi.masterSearch.clickAtRowByReportName();
      await bi.module.switchToMasterSearchEntry();
      await bi.masterSearchEntry.clickPrintIcon();
      // home.switchToSelectReport / closeTheScreen
      await bi.module.switchToMasterSearchEntry();
      await bi.masterSearchEntry.clickDeleteIcon();
      await bi.module.switchToMasterSearch();
      await bi.masterSearch.enterAtReportName();
      await bi.masterSearch.clickSearchButton();
      await bi.masterSearch.verifyNoRecordFoundAcknowlege();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('Access Log');
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.tabTheFromDateAndTime();
      await settings.sharedCodes.verifyCurrentDateAsFrom();
      await settings.sharedCodes.tabTheToDateAndTime();
      await settings.sharedCodes.verifyCurrentDateAsTo();
      await settings.sharedCodes.enterAtPFCode();
      await settings.sharedCodes.clickSearch();
      await settings.sharedCodes.verifyActivityDateAsCurrentDate(0);
      await settings.sharedCodes.verifyDescriptionAtUserName(0);
    });
  });

  test('ToVerifyMyDashboardFunctionalitySpellingInMyDashboardScreen_10974', async ({ loginPage, loaderPage, bi, testData }) => {
    await withTestContext(testData, '10974', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('BI');
      await loaderPage.navigateToScreen('My DashBoard');
      await bi.module.switchToMyDashboard();
      await bi.myDashboard.verifyRealTimeDashboardText();
    });
  });
});
