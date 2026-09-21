// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';

const testData = TestDataReader.loadData('Settings');

test.describe('SettingsFunctional', () => {
  test('SettingsFunctional_135733', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '135733', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loginPage.loginScreen.verifyLoginFailedPopup()
      await loginPage.loginScreen.clickResetButton()
      //		login.loginScreen.clearUserName();
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.tabTheFromDateAndTime()
      await settings.accessLog.verifyCurrentDateAsFrom()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.verifyCurrentDateAsTo()
      await settings.accessLog.selectAccessLogAsLoginFailed()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyActivityDateAsCurrentDate(0)
      await settings.accessLog.verifyAccessAsLoginFailed(0)
      await settings.accessLog.verifyDescriptionAtUserName(0)
      await settings.accessLog.verifyDescriptionAsLoginFailed(0)
    });
  });

  test('SettingsFunctional_149106', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '149106', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('FTP Interface Search')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.clickAddButton()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.selectAtInterface()
      await settings.fTPInterfaceEntry.selectDBName()
      //		settings.fTPInterfaceEntry.enterFolderPath();
      await settings.fTPInterfaceEntry.enterUserName()
      await settings.fTPInterfaceEntry.enterPassword()
      await settings.fTPInterfaceEntry.enterPort()
      await settings.fTPInterfaceEntry.selectLocationType()
      await settings.fTPInterfaceEntry.enterCustom1()
      await settings.fTPInterfaceEntry.enterKeepLog()
      await settings.fTPInterfaceEntry.selectType()
      await settings.fTPInterfaceEntry.selectNonPeakHrs()
      await settings.fTPInterfaceEntry.enterFrom()
      await settings.fTPInterfaceEntry.enterTo()
      await settings.fTPInterfaceEntry.enterSubject()
      await settings.fTPInterfaceEntry.enterFolderPath()
      await settings.fTPInterfaceEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();//updated
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.clickCustom1Text()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.selectFieldUsageAsHide()
      await settings.repositoryEntry.saveScreen()
      await settings.repositoryEntry.verifyAdditionSuccessFullMessage()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.closeScreen()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.verifyCustom1Disabled()
      await settings.fTPInterfaceEntry.clickCustom1Text()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.selectFieldUsageAsMandatory()
      await settings.repositoryEntry.saveScreen()
      await settings.repositoryEntry.verifyUpdateSuccessFullMessage()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.closeScreen()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.verifyCustom1Mandatory()
      await settings.fTPInterfaceEntry.closeScreen()
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.selectAtInterface()
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.verifyAtInterfaceInGrid(0)
    });
  });

  test('SettingsFunctional_149124', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '149124', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('5031')
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickAddnew()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.enterAtUnit()
      await settings.unitEntry.selectAtDispatchUnitType()
      await settings.unitEntry.enterVehicle()
      //		settings.unitEntry.selectDispatchUnit();
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.clickOnDutyNoReqCheckBox()
      await settings.unitEntry.enterAtOnCallOfficer()
      await settings.unitEntry.selectPatrolAreaAsPatrolZone()
      await settings.unitEntry.clickAdd()
      await settings.unitEntry.verifyAtPatrolZoneInGrid(0)
      await settings.unitEntry.selectPatrolAreaAsPatrolZone()
      await settings.unitEntry.clickAdd()
      await settings.unitEntry.verifyRecordExistAcknowledgeMessage()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.selectPatrolAreaAsPatrolZone1()
      await settings.unitEntry.clickAdd()
      await settings.unitEntry.verifyAtPatrolZoneInGrid(1)
      await settings.unitEntry.saveScreen()
      await settings.unitEntry.verify1002AdditionSuccessfulMessage()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.close()
      await settings.module.switchToUnits()
      await settings.unitsScreen.enterAtUnit()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.verifyAtUnitInRow(0)
      await settings.unitsScreen.clickUnitInGridRow()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.clickPatrolZone1InGrid()
      await settings.unitEntry.verifyPatrolZone1()
      await settings.unitEntry.clickUpdateButton();//added
      await settings.unitEntry.clickInactiveCheckBox()
      await settings.unitEntry.verifyInactiveDate()
      await settings.unitEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.close()
      await settings.module.switchToUnits()
      await settings.unitsScreen.verifyNoRecordAcknowledgeMessgage()
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickIncludeInactiveCheckBox()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.verifyAtUnitInRow(0)
    });
  });

  test('SettingsFunctional_147351', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '147351', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Repository')
      await settings.module.switchToRepository()
      await settings.repository.enterScreenIDAs2275()
      await settings.repository.clickSearch()
      await settings.repository.verifyRepositoryIDAs2275(0)
      await settings.repository.verifyDefaultNameAsCellStatus(0)
      await settings.repository.selectCheckBoxInGrid()
      await settings.repository.clickGOTOScreenLink()
      await settings.module.switchToRepositoryUnNameScreen()
      // Names.CellStatus.clickShowOnlyOccupiedCheckBox();
      await settings.repository.close()
      await settings.module.switchToRepository()
      await settings.repository.enterScreenIDAs1387()
      await settings.repository.clickSearch()
      await settings.repository.verifyRepositoryIDAs1387(0)
      await settings.repository.verifyDefaultNameAsJailCell(0)
      await settings.repository.selectCheckBoxInGrid()
      await settings.repository.clickGOTOScreenLink()
      await settings.module.switchToRepositoryUnNameScreen()
      await settings.jailCell.clickAddNew()
      await settings.module.switchToJailCellEntry()
      await settings.jailCellEntry.closeScreen()
      await settings.module.switchToRepositoryUnNameScreen()
    });
  });

  test('SettingsFunctional_158776', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '158776', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Charge')
      await settings.module.switchToCharge()
      await settings.chargeScreen.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtChargeCode()
      await settings.sharedCodes.selectAtChargeType()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.enterAtRelatedCFSCode()
      //		settings.sharedCodes.enterRelatedMOCCode();
      await settings.sharedCodes.enterAtNIBRSCode()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.verifyAtNIBRSCodeinGrid(0)
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCharge()
      await settings.chargeScreen.selectAtState();//added
      await settings.chargeScreen.enterAtChargeCode()
      await settings.chargeScreen.clickSearchButton()
      await settings.chargeScreen.verifyAtChargeCode(0)
      await settings.chargeScreen.verifyAtCFSCode(0)
      await settings.chargeScreen.verifyAtNIBRS(0)
      await settings.chargeScreen.clickAtChargeCodeinGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickInactiveCheckBox()
      await settings.sharedCodes.verifyInactiveDateAsCurrentDate()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.ok()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyUpdateSuccessfulMessage()
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCharge()
      await settings.chargeScreen.clickInactiveCheckbox()
      await settings.chargeScreen.clickSearchButton()
      await settings.chargeScreen.verifyAtChargeCode(0)
      await settings.chargeScreen.verifyAtCFSCode(0)
      await settings.chargeScreen.verifyAtNIBRS(0)
      await settings.chargeScreen.verifyInactiveChargeRowColor(0)
      //Automated by : Ranjith Kumar V K
      //Testcase ID: 46231 Scenario 2
      //Date: Q1 Sprint 1 2025
      //Type of Testcase: Defect
    });
  });

  test('SettingsFunctional_163448', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '163448', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Action Search')
      await settings.module.switchToActionSearch()
      await settings.actionSearch.clickAddNewButton()
      await settings.module.switchToActionEntry()
      await settings.actionEntry.clickSaveButton()
      await settings.actionEntry.verify1011NoMessagePresentAckMsg()
      await settings.module.switchToActionEntry()
      await settings.actionEntry.enterAtActionNo()
      await settings.actionEntry.enterAtActionName()
      await settings.actionEntry.enterDescription()
      await settings.actionEntry.enterVerifySPName()
      await settings.actionEntry.enterAtProcessSPName()
      await settings.actionEntry.enterInputParameterName()
      await settings.actionEntry.selectAtValueType()
      await settings.actionEntry.clickAddButton()
      await settings.actionEntry.verifyAtValueTypeInGrid()
      //46231 sceanrio 2 lines added starts
      await settings.actionEntry.save()
      await settings.module.switchToActionEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.actionEntry.verifyAtValueTypeInGrid()
      //46231 sceanrio 2 lines added starts
      await settings.actionEntry.saveNClose()
      await settings.module.switchToActionSearch()
      await settings.actionSearch.enterAtActionNo()
      await settings.actionSearch.clickSearchButton()
      await settings.actionSearch.verifyAtActionNoInGrid()
      await settings.actionSearch.verifyAtProcessSPNameInGrid()
      await settings.actionSearch.selectRowByAtActionName()
      await settings.module.switchToActionEntry()
      await settings.actionEntry.enterAtInputParameterName()
      await settings.actionEntry.selectValueType()
      await settings.actionEntry.clickAddButton()
      await settings.actionEntry.verifyAtInputParameterNameInGrid()
      await settings.actionEntry.selectRowByAtValueType()
      await settings.actionEntry.clearInputParameterName()
      await settings.actionEntry.enterAtInputParameterName1()
      await settings.actionEntry.selectAtValueType1()
      await settings.actionEntry.clickAddButton()
      await settings.actionEntry.save()
      await settings.module.switchToActionEntry()
      await settings.actionEntry.verifyAtInputParameterName1InGrid()
      await settings.actionEntry.verifyAtValueType1InGrid()
    });
  });

  test('SettingsFunctional_180961', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '180961', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Disposition')
      await settings.module.switchToDisposition()
      await settings.disposition.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtDisposition()
      await settings.sharedCodes.enterDescriptionAsQualityAssurance()
      await settings.disposition.selectAtType()
      await settings.sharedCodes.verifyManagementTabDisabled()
      await settings.sharedCodes.clickCADTab()
      await settings.sharedCodes.clickCaseGereratedNoCheckBox()
      await settings.sharedCodes.selectAtReportCode()
      await settings.sharedCodes.selectBackupUnitReportCodeAsIncidentReport()
      await settings.sharedCodes.clickSave()
      await settings.sharedCodes.verifyReportCodeBackupUnitReportCodeAcknowledgeMessage()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.selectBackupUnitReportCodeAsArrestReport()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToDisposition()
      await settings.disposition.enterAtDisposition()
      await settings.disposition.selectAtType()
      await settings.disposition.clickSearchButton()
      await settings.disposition.verifyAtDispoationInGrid(0)
      await settings.disposition.verifyAtTypeInGrid(0)
      // Terminal
    });
  });

  test('SettingsFunctional_252888', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '252888', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5011 - CFSCode Search')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.clickAddNewButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtCFSCode()
      await settings.sharedCodes.selectAtCFSType()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.clickCADTab()
      await settings.sharedCodes.verifyAlertTypeOptions()
      await settings.sharedCodes.selectAtAlertType()
      await settings.sharedCodes.saveNClose()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToScreenByScreenID('5011 - CFSCode Search')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.enterAtCFSCode()
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.VerifyTypeUsingCFSCode()
      //Mithun
    });
  });

  test('SettingsFunctional_289921', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '289921', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearchButton()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickReportRepositoryEntryEditPermissionButton()
      await settings.module.switchToRolesEntryEditScreen()
      //below line added
      await settings.rolesEntry.verifyJurisFieldIsDisabled();//Method Added from this testcase 55562
      await settings.rolesEntry.verifyAtRoleName();//added
      await settings.rolesEntry.clickAtAddNewCheckbox()
      await settings.rolesEntry.save();//updated by Sarath
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.verifyUpdateSuccessfulMessage()
      await settings.rolesEntry.saveAndClose();//updated by sarath
      await settings.module.switchToRoles()
      // since concurrent required module is not covered as per Mahesha intimated
      // stopped TC flow here.
      // Automated by TesterName :- Vijay Date :- 02/03/2022 Sprint:-Sprint 3
      // Quarter:- 2022 Q1 Module:- Settings
    });
  });

  test('SettingsFunctional_293143', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '293143', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAtCodeValueDescription()
      await settings.sharedCodes.enterAtSortOrderInPopUp()
      await settings.sharedCodes.clickUpdateButton(); // UI Updated
      //		settings.sharedCodes.minimizeTheScreen();
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.reloadMainWindow()
      await loaderPage.mouseOverFormsLink()
      await loaderPage.verifyAtFirstElementInFormsLink()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAtCodeValueDescription()
      await settings.sharedCodes.clearSortOrder()
      await settings.sharedCodes.clickUpdateButton()
      await settings.sharedCodes.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.reloadMainWindow()
      await loaderPage.mouseOverFormsLink()
      await loaderPage.verifyFirstElementInFormsLinkIsNotAsTemplates()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Report Repository')
      await settings.module.switchToReportRepository()
      await settings.reportRepository.selectAtCategory()
      await settings.reportRepository.enterAtReportOrFormName()
      await settings.reportRepository.clickSearch()
      await settings.reportRepository.verifyAtNameInGrid()
      await settings.reportRepository.selectAtGridrowByName()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtSortOrderInPopUp()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyUpdateSuccessfulMessage()
      //settings.sharedCodes.minimizeTheScreen();
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.reloadMainWindow()
      // objectIdentification.windowHandle.switchToMainWindow()
      await home.printIcon.clickPrintIcon()
      //		loader.mouseOverReportsLink(); //Screen changed, So hide this line.
      await loaderPage.mouseOverReports()
      await loaderPage.verifyAtFirstElementInReportsLink()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clearSortOrder()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.reloadMainWindow()
      // objectIdentification.windowHandle.switchToMainWindow()
      await home.printIcon.clickPrintIcon()
      //		loader.mouseOverReportsLink();
      await loaderPage.mouseOverReports()
      await loaderPage.verifyFirstElementInReportsLinkIsNotAsCADToneLogList()
      await loaderPage.verifyFirstElementInReportsLinkAsAccountabilityID()
      // objectIdentification.windowHandle.switchToMainWindow()
      //SmokeEntryScripts
    });
  });

});

test.describe('SettingsFunctional3', () => {
  test('SettingsFunctional3_149200', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '149200', async () => {
      // 14.43 Police MJ DB only
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.verifyAtRoleInGrid(0)
      await settings.roles.selectAtRoleRowCheckBox()
      await settings.roles.clickCopyToMultiJuris()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickOverRideSelectAllCheckBox()
      await settings.rolesEntry.clickSaveButton()
      await settings.rolesEntry.verifyOverRideConfirmMessage()
      await settings.rolesEntry.verifyRoleInactiveConfirmMessage()
    });
  });

  test('SettingsFunctional3_149210', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '149210', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Repository')
      await settings.module.switchToRepository()
      await settings.repository.selectTypeAsScreen()
      await settings.repository.clickSearch()
      await settings.repository.clickNextButton()
      await settings.repository.selectGoToScreenMenuUsingRepositoryID()
      await settings.module.switchToRepositoryUnNameScreen()
      await settings.repository.verifyScreenShowsError()
      await settings.module.switchToRepository()
      await settings.repository.clickNextButton()
      await settings.repository.selectGoToScreenMenuUsingDefaultName()
      await settings.module.switchToRepositoryUnNameScreen()
      await settings.repository.verifyScreenShowsError()
    });
  });

  test('SettingsFunctional3_150443', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '150443', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearchButton()
      await settings.roles.verifyAtRoleNameInGrid()
      await settings.roles.rightClickByAtRoleName()
      await settings.roles.verifyContainerCopyToSameJurisIsEnabled()
      await settings.roles.clickContainerCopyToSameJuris()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyAtRoleName()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesScreen()
      await settings.roles.selectAtRoleRowCheckBox()
      await settings.roles.clickCopyToSameJuris()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyAtRoleName()
    });
  });

  test('SettingsFunctional3_8988', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '8988', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.selectAtJuris()
      await settings.distributionList.clickSearch()
      const distributionListName = await settings.distributionList.getDescriptionColumnValue();                 // Lines added Based on TC no  - 60597
      const distributionListName1 = await settings.distributionList.getDistributionListColumnValue()
      await home.textSearch.clickExportToExcelIcon()
      // objectIdentification.windowHandle.switchToDownloadExcelWindow(oldHandles)
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> ExcelColumnValue = objectIdentification.readExcel.getColumnvaluesByColumnName(ExcelName,'Description')
      // List<String> ExcelColumnValue1 = objectIdentification.readExcel.getColumnvaluesByColumnName(ExcelName,'Distribution List Name')
      await settings.distributionList.verifyTextColumnValueBetweenExcelAndGrid(ExcelColumnValue,distributionListName)
      await settings.distributionList.verifyTextColumnValueBetweenExcelAndGrid(ExcelColumnValue1,distributionListName1);// Lines added Based on TC no  - 60597
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickSearch()
      await settings.distributionList.selectByDistributionName()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.verifyAtReportName(0)
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToDistributionEntry()
      // Automated By : Stalin
      // Type of Test case - Enhancement
    });
  });

  test('SettingsFunctional3_9119', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '9119', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('BI')
      await loaderPage.navigateToScreen('DashBoard Config')
      bi.switchToDashBoardConfig()
      bi.dashBoardConfig.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickDistributedToTab()
      await settings.sharedCodes.distributedToTab.clickRolesRadDropdownArrow()
      await settings.sharedCodes.distributedToTab.verifyRolesDropdownAsRadicalDropdown()
      await settings.sharedCodes.distributedToTab.clickRolesCheckAllCheckbox()
      await settings.sharedCodes.distributedToTab.clickRolesRadDropdownArrow()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      vehicle.switchToFleetSearch()
      vehicle.fleetSearch.clickSearchButton()
      vehicle.fleetSearch.selectRowByIndex(0)
      vehicle.switchToFleetEntry()
      vehicle.fleetEntry.clickMainTab()
      vehicle.fleetEntry.fleetEntryMainTab.verifyStorageLocationDropdownAsRadicalDropdown()
      vehicle.fleetEntry.fleetEntryMainTab.selectStorageLocationAsCheckAll()
      vehicle.switchToFleetEntry()
      vehicle.fleetEntry.close()
      //
      await loaderPage.navigateToScreen('Inventory Search')
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.verifyDispositionDropdownAsRadicalDropdown()
      inventory.inventorySearch.selectDispositionAsCheckAll()
      // calendar
      await loaderPage.navigateToModule('Scheduling')
      await loaderPage.navigateToScreen('Calendar')
      await scheduling.module.switchToCalendarScreen()
      await scheduling.calendar.clickSearchAppointments()
      await scheduling.calendar.appointmentsPopup.verifyDivisionDropdownAsRadicalDropdown()
      await scheduling.calendar.appointmentsPopup.verifySectionDropdownAsRadicalDropdown()
      await scheduling.calendar.appointmentsPopup.verifySquadDropdownAsRadicalDropdown()
      await scheduling.calendar.appointmentsPopup.verifyResourceDropdownAsRadicalDropdown()
      await scheduling.calendar.appointmentsPopup.verifyEventTypeDropdownAsRadicalDropdown()
      // scheduling.calendar.appointmentsPopup.selectDivisionAsCheckAll();
      await scheduling.calendar.appointmentsPopup.selectSectionAsCheckAll()
      await scheduling.calendar.appointmentsPopup.selectSquadAsCheckAll()
      await scheduling.calendar.appointmentsPopup.selectResourceAsCheckAll()
      await scheduling.calendar.appointmentsPopup.selectEventTypeAsCheckAll()
      await scheduling.calendar.appointmentsPopup.clickCancel()
      await scheduling.module.switchToCalendarScreen()
      await scheduling.calendar.close()
      // Time Search
      await loaderPage.navigateToScreen('Time Search')
      await scheduling.module.switchToTimeSearch()
      await scheduling.timeSearch.verifyTimeCategoryDropdownAsRadicalDropdown()
      await scheduling.timeSearch.verifyTimeTypeDropdownAsRadicalDropdown()
      await scheduling.timeSearch.selectTimeCategoryAsCheckAll()
      await scheduling.timeSearch.selectTimeTypeAsCheckAll()
      await scheduling.timeSearch.clickTimeSheetRadioButton()
      await scheduling.timeSearch.verifyEarningCodeDropdownAsRadicalDropdown()
      //	scheduling.timeSearch.selectEarningCodeAsCheckAll();
      // Sys Para
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifyCustomCategoryDropdownAsRadicalDropdown()
      await settings.sysParameter.verifySystemCategoryDropdownAsRadicalDropdown()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectCustomCategoryAsCheckAll()
      await settings.sysParameter.selectSystemCategoryAsCheckAll()
      // text
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.verifyTemplateForDropdownAsRadicalDropdown()
      await settings.textScreen.selectTemplateForAsCheckAll()
      await settings.module.switchToText()
      await settings.textScreen.verifyTemplateForDropdownAsRadicalDropdown()
      await settings.textScreen.selectTemplateForAsCheckAll()
      await settings.module.switchToText()
      // Automated By : Stalin
      // Year : 2023Â  Quarter: 01Â  Sprint: 03
      // Type of Test case - Enhancement
    });
  });

  test('SettingsFunctional3_9120', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '9120', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      //settings.sysParameter.verifyAtSortBy();
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.selectModuleAsNull()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.clearParameteraName()
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.clearParameteraName(); // needed line
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectCustomCategoryAsCheckAll()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.selectCustomCategoryAsCheckAll()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectSystemCategoryAsCheckAll()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      // Module and Parameter name
      await settings.sysParameter.selectSystemCategoryAsCheckAll()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectAtModule1()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      // App not supporting
      await settings.sysParameter.clearParameteraName()
      await settings.sysParameter.selectAtModule1()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectCustomCategoryAsCheckAll()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      //
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      //
      await settings.sysParameter.selectModuleAsNull()
      await settings.sysParameter.selectCustomCategoryAsCheckAll()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.selectSystemCategoryAsCheckAll()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      //
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      //
      await settings.sysParameter.selectSystemCategoryAsCheckAll()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.clearParameteraName()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.selectCustomCategoryAsCheckAll()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      //
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      // system & custom category
      await settings.sysParameter.clearParameteraName()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectSystemCategoryAsCheckAll()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      //
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      await settings.sysParameter.selectCustomCategoryAsCheckAll()
      await settings.sysParameter.selectSystemCategoryAsCheckAll()
      //
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectAtModule1()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      //
      await settings.sysParameter.selectSortByAsFeatureGroup()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameterDropdownsDisplayed()
      // objectIdentification.windowHandle.switchToMainWindow()
      // Automated By : - Abinaya M
      // Sprint :-Â 2023 :Â Quarter 1 :Â  Sprint 4
      // Type of Test case : -Defect - CRM # :-143621
    });
  });

  test('SettingsFunctional3_8985', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '8985', async () => {
      // police2017SprintSettingsModule_158772
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.verifyAtCodedID()
      // settings.maintainCodeValue.selectJurisAsSO();
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.verifyAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.enterAtCodeValue1()
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValue1InGrid()
      //		settings.maintainCodeValue.selectJurisAsBL();
      //		settings.maintainCodeValue.clickSearchButton();
      //		settings.maintainCodeValue.verifyAtCodedID();
      //		settings.maintainCodeValue.clickAddNewButton();
      //		settings.maintainCodeValue.enterAtCodeValue1();
      //		settings.maintainCodeValue.enterAtDescription();
      //		settings.maintainCodeValue.clickAddButton();
      //		settings.maintainCodeValue.verifyAtCodeValue1InGrid(0);
      //
      //		settings.maintainCodeValue.selectJurisAsBE();
      //		settings.maintainCodeValue.clickSearchButton();
      //		settings.maintainCodeValue.verifyAtCodedID();
      //		settings.maintainCodeValue.clickAddNewButton();
      //		settings.maintainCodeValue.enterAtCodeValue2();
      //		settings.maintainCodeValue.enterAtDescription();
      //		settings.maintainCodeValue.clickAddButton();
      //		settings.maintainCodeValue.verifyAtCodeValue2InGrid(0);
      // Automated By : - Vijay
      // Sprint :-Â 2023 :Â Quarter 2 :Â  Sprint 7
      // Same scenario occurs in the testcase : 46202
    });
  });

  test('SettingsFunctional3_10860', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '10860', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Report Repository')
      await settings.module.switchToReportRepository()
      await settings.reportRepository.clickSearch()
      await settings.reportRepository.verifyNextButtonIsDisplayedAndClick()
      // Automated By : - Vijay
      // Sprint :-Â 2023 :Â Quarter 2 :Â  Sprint 7
    });
  });

  test('SettingsFunctional3_8986', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '8986', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.enterAtTextName()
      await settings.textScreen.clickSearch()
      await settings.textScreen.clickAtTextNameInGrid()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.clickDetailTab()
      await home.textMgmt.detailsTab.clickPasteFromWord()
      await home.textMgmt.detailsTab.enterTextInPasteFromWordPopUp()
      await home.textMgmt.detailsTab.clickPasteButtonInPopup()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.SaveScreen()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.verifyUpdateSucessfulStatusMsg()
      await home.textMgmt.clickDetailTab()
      //String text = home.textMgmt.detailsTab.readRichTextEdit();
      await settings.module.switchToTextMgmt()
      await home.textMgmt.clickDetailTab()
      await home.textMgmt.detailsTab.clickPasteFromWord()
      await home.textMgmt.detailsTab.enterTextInPasteFromWordPopUp()
      await home.textMgmt.detailsTab.clickPasteButtonInPopup()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.SaveScreen()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.verifyUpdateSucessfulStatusMsg()
      await home.textMgmt.clickDetailTab()
      const text1 = await home.textMgmt.detailsTab.readRichTextEdit()
      //		settings.switchToTextMgmt();
      //		home.textMgmt.SaveScreen();
      //		settings.switchToTextMgmt();
      //		home.textMgmt.verifyUpdateSucessfulStatusMsg();
      await home.textMgmt.verifyLineBreaks(text1);//need to verify
      // Automated By : Stalin
      // Sprint :-Â 2023 :Â Quarter 2 :Â  Sprint 11
      //NJ DB
    });
  });

});

test.describe('TerminalFunctional', () => {
  test('TerminalFunctional_166734', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166734', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickAddNewButton()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickSaveButton()
      await settings.terminalEntry.verify1018RequiredEntriesAreMissingAckMsg()
      await settings.terminalEntry.enterAtTerminalName()
      await settings.terminalEntry.verifyDispatchTabDisabled()
      await settings.terminalEntry.clickIPAddressTab()
      await settings.terminalEntry.clickSaveButton()
      await settings.terminalEntry.verify1018RequiredEntriesAreMissingAckMsg()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickIPAddressTab()
      await settings.terminalEntry.iPAddressTab.enterLocation()
      await settings.terminalEntry.iPAddressTab.enterAtIPAddress()
      await settings.terminalEntry.iPAddressTab.enterDeviceName()
      await settings.terminalEntry.iPAddressTab.clickUsedForCADCheckbox()
      await settings.terminalEntry.verifyDispatchTabEnabled()
      await settings.terminalEntry.iPAddressTab.enterDefaultPrinter()
      await settings.terminalEntry.iPAddressTab.enterBarCodePrinter()
      await settings.terminalEntry.iPAddressTab.selectIdentixLocation()
      await settings.terminalEntry.iPAddressTab.enterReceiptPrinter()
      await settings.terminalEntry.iPAddressTab.selectPOSMaxCharLine()
      await settings.terminalEntry.iPAddressTab.enterValidationPrinter()
      await settings.terminalEntry.iPAddressTab.enterCheckPrinter()
      await settings.terminalEntry.iPAddressTab.selectZetronDevice()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.verify1002AdditionSuccessfulMessage()
      await settings.terminalEntry.clickAllTabs()
    });
  });

  test('TerminalFunctional_166735', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166735', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.enterAtTerminalName()
      await settings.terminal.enterAtIPAddress()
      await settings.terminal.clickSearchButton()
      await settings.terminal.selectRowByAtTerminalName()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickDispatchTab()
      await settings.terminalEntry.dispatchTab.clickPoliceTakeNewCallsCheckbox()
      await settings.terminalEntry.dispatchTab.clickPoliceUsedForDispatchCheckbox()
      await settings.terminalEntry.dispatchTab.clickPoliceReceivedCallsCheckbox()
      await settings.terminalEntry.dispatchTab.clickFireTakeNewCallsCheckbox()
      await settings.terminalEntry.dispatchTab.clickFireUsedForDispatchCheckbox()
      await settings.terminalEntry.dispatchTab.clickFireReceivedCallsCheckbox()
      await settings.terminalEntry.dispatchTab.clickEMSTakeNewCallsCheckbox()
      await settings.terminalEntry.dispatchTab.clickOthersTakeNewCallsCheckbox()
      await settings.terminalEntry.dispatchTab.selectAtDispatchRoute()
      await settings.terminalEntry.dispatchTab.clickAddButton()
      await settings.terminalEntry.dispatchTab.verifyAtDispatchRouteInGrid()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickNCICTab()
      await settings.terminalEntry.nCICTab.enterORINo()
      await settings.terminalEntry.nCICTab.enterMnemonic()
      await settings.terminalEntry.nCICTab.enterWorkStationName()
      await settings.terminalEntry.nCICTab.clickReceiveUnsolicitedMessageCheckbox()
      await settings.terminalEntry.nCICTab.clickReceiveUndeliveredMessageCheckbox()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickE911Tab()
      await settings.terminalEntry.e911Tab.enterPositionID()
      await settings.terminalEntry.save()
    });
  });

  test('TerminalFunctional_166736', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166736', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.enterAtTerminalName()
      await settings.terminal.enterAtIPAddress()
      await settings.terminal.clickSearchButton()
      await settings.terminal.selectRowByAtTerminalName()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickScreensTab()
      await settings.terminalEntry.screensTab.selectAtMonitor()
      await settings.terminalEntry.screensTab.selectAtScreen()
      await settings.terminalEntry.screensTab.selectCustomStatus()
      await settings.terminalEntry.screensTab.clickAddButton()
      await settings.terminalEntry.screensTab.verifyAtMonitorInGrid()
      await settings.terminalEntry.screensTab.verifyAtScreenNameInGrid()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickScreensTab()
      await settings.terminalEntry.screensTab.deleteAtMonitorInGrid()
      await popupPage.confirm.yes()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickScreensTab()
      await settings.terminalEntry.screensTab.veriftAtMonitorRowDeleted()
      await settings.terminalEntry.clickInventoryTab()
      await settings.terminalEntry.inventoryTab.clickCounterCheckOutRadioButton()
      await settings.terminalEntry.inventoryTab.verifyAllCheckboxDisabled()
      await settings.terminalEntry.inventoryTab.clickSelfCheckOutRadioButton()
      await settings.terminalEntry.inventoryTab.verifyAllCheckboxEnabled()
      await settings.terminalEntry.inventoryTab.clickAllCheckbox()
      await settings.terminalEntry.save()
    });
  });

  test('TerminalFunctional_166737', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166737', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.enterAtTerminalName()
      await settings.terminal.clickSearchButton()
      await settings.terminal.selectRowByAtTerminalName()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickDevicesTab()
      await settings.terminalEntry.deviceTab.clickTerminalTypeComputerRadioButton()
      await settings.terminalEntry.deviceTab.selectDeviceType()
      await settings.terminalEntry.deviceTab.enterSWDANotifyAddress()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickInterfaceTab()
      await settings.terminalEntry.interfaceTab.selectAtInterfaceName()
      await settings.terminalEntry.interfaceTab.enterAtLocationHostSite()
      await settings.terminalEntry.interfaceTab.enterCustom1()
      await settings.terminalEntry.interfaceTab.clickAddButton()
      await settings.terminalEntry.interfaceTab.verifyAtInterfaceNameInGrid()
      await settings.terminalEntry.interfaceTab.verifyAtLocationHostSiteInGrid()
      await settings.terminalEntry.save()
    });
  });

  test('TerminalFunctional_166738', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166738', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.enterAtTerminalName()
      await settings.terminal.clickSearchButton()
      await settings.terminal.verify1011NoRecordFoundAcknowledgeMessage()
      await settings.terminal.clickIncludeInactiveCheckbox()
      await settings.terminal.clickSearchButton()
      await settings.terminal.verifyAtTerminalNameInGrid()
      await settings.terminal.verifyAtTerminalNameRowAppearGrayColor()
      await settings.terminal.selectRowByAtTerminalName()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickAllTabs()
      await settings.terminalEntry.saveNClose()
      await settings.module.switchToTerminalScreen()
      await settings.terminal.reloadTerminalScreen()
      await settings.terminal.enterAtTerminalName1()
      await settings.terminal.clickSearchButton()
      await settings.terminal.verify1011NoRecordFoundAcknowledgeMessage()
      await settings.terminal.clickIncludeFireCheckbox()
      await settings.terminal.clickSearchButton()
      await settings.terminal.verifyAtTerminalName1InGrid()
      await settings.terminal.verifyAtTerminalName1RowAppearRedColor()
      await settings.terminal.selectRowByAtTerminalName1()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickAllTabs()
    });
  });

});

test.describe('TextMgmtFunctional', () => {
  test('TextMgmtFunctional_166741', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166741', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.clickAddNew()
      await settings.module.switchToTextEntry()
      await settings.textEntry.clickSave()
      await settings.textEntry.verifyRequiredAcknowledgeMessage()
      await settings.textEntry.clickSubjectTab()
      await settings.textEntry.textSubjectTab.enterAtTextName()
      await settings.textEntry.textSubjectTab.enterAtRemarks()
      await settings.textEntry.textSubjectTab.enterSearchWords()
      await settings.textEntry.textSubjectTab.enterRichText()
      await settings.textEntry.saveScreen()
      await settings.module.switchToTextEntry()
      await settings.textEntry.verifyAttachmentTabEnabled()
      await settings.textEntry.clickAllTabs()
      await settings.textEntry.clickTemplatesForTab()
      await settings.textEntry.templateForTab.clickAddButton()
      await settings.textEntry.templateForTab.verifyRequiredAcknowledgeMessage()
      await settings.textEntry.templateForTab.enterAtScreenID()
      await settings.textEntry.templateForTab.clickAddButton()
      await settings.textEntry.templateForTab.verifyAtScreenID(0)
      await settings.textEntry.saveScreen()
      await settings.module.switchToTextEntry()
      await settings.textEntry.clickReportsThatUseThisTextTab()
      await settings.textEntry.reportsThatUseThisTextTab.clickAddButton()
      await settings.textEntry.reportsThatUseThisTextTab.verifyRequiredAcknowledgeMessage()
      await settings.textEntry.reportsThatUseThisTextTab.selectAtScreenID()
      await settings.module.switchToTextEntry()
      await settings.textEntry.reportsThatUseThisTextTab.clickAddButton()
      await settings.textEntry.reportsThatUseThisTextTab.verifyAtReportName(0)
      await settings.textEntry.reportsThatUseThisTextTab.verifyAtScreenID(0)
      await settings.textEntry.saveScreen()
      await settings.module.switchToTextEntry()
      await settings.textEntry.close()
    });
  });

  test('TextMgmtFunctional_166742', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166742', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.enterAtTextName()
      await settings.textScreen.clickSearch()
      await settings.textScreen.verifyAtTextName(0)
      await settings.textScreen.verifyAtExpiryDate(0)
      await settings.textScreen.clickAtTextNameInGrid()
      await settings.module.switchToTextEntry()
      await settings.textEntry.clickDeleteIcon()
      await settings.textEntry.verifyDeleteConfirmMessage()
      await settings.module.switchToText()
      await settings.textScreen.verifyNoRecordFoundAcknowledgeMessage()
    });
  });

});

test.describe('UnitScreenFunctional', () => {
  test('UnitScreenFunctional_166739', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166739', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5031 - Unit Search')
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickAddnew()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.clickSaveButton()
      await settings.unitEntry.verify1018RequiredEntriesAreMissingAckMsg()
      await settings.unitEntry.enterAtUnit()
      await settings.unitEntry.selectAtDispatchUnitType()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.verifyOnCallOfficerFieldDisabled()
      await settings.unitEntry.clickOnDutyNoReqCheckBox()
      await settings.unitEntry.verifyOnCallOfficerFieldEnabled()
      await settings.unitEntry.verifyPreAssignOfficer1FieldDisabled()
      await settings.unitEntry.verifyPreAssignOfficer2FieldDisabled()
      await settings.unitEntry.enterAtOnCallOfficer()
      await settings.unitEntry.clickIsTrackableCheckBox()
      await settings.unitEntry.selectWDAGroup()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.selectCustomIcon()
      await settings.unitEntry.selectAtPatrolArea()
      await settings.unitEntry.clickAdd()
      await settings.unitEntry.saveScreen()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.verify1002AdditionSuccessfulMessage()
      await settings.unitEntry.close()
      await settings.module.switchToUnits()
      await settings.unitsScreen.enterAtUnit()
      await settings.unitsScreen.enterAtOfficer()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.verifyAtUnitInRow(0)
      await settings.unitsScreen.verifyTrackCheckBoxChecked(0)
    });
  });

  test('UnitScreenFunctional_166740', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '166740', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5031 - Unit Search')
      await settings.module.switchToUnits()
      await settings.unitsScreen.enterAtUnit()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.verifyNoRecordAcknowledgeMessgage()
      await settings.unitsScreen.clickIncludeInactiveCheckBox()
      await settings.unitsScreen.selectAtPatrolArea()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.verifyAtUnitInRow(0)
      await settings.unitsScreen.verifyInactiveCheckBoxChecked(0)
      await settings.unitsScreen.verifyInactiveUnitRowColor(0)
      /*
      */
      // available as discussed with mahesha.
    });
  });

});

test.describe('2020DefectSharedCodesSystemParameter', () => {
  test('2020DefectSharedCodesSystemParameter_243683', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '243683', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Disposition')
      await settings.module.switchToDisposition()
      await settings.disposition.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtDisposition()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.selectAtType()
      await settings.sharedCodes.clickManagementTab()
      await settings.sharedCodes.managementTab.selectAtCaseStatus()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifySuccessfulBottomMessage()
      await settings.module.switchToSharedCodes()
    });
  });

  test('2020DefectSharedCodesSystemParameter_250103', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '250103', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Charge')
      await settings.module.switchToCharge()
      await settings.chargeScreen.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtChargeCode()
      await settings.sharedCodes.selectAtChargeType()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.enterAtRelatedCFSCode()
      await settings.sharedCodes.enterAtNIBRSCode()
      await settings.sharedCodes.clickAddButton(); // UI Updated
      await settings.sharedCodes.verifyAtNIBRSCodeinGrid(0)
      await settings.sharedCodes.saveNClose()
      await settings.module.switchToCharge()
      await settings.chargeScreen.enterAtNIBRS()
      await settings.chargeScreen.clickNIBRSSearchIcon()
      await popupPage.kPICodedLookup.verifyNIBRSInCodedScreen(0)
      await popupPage.kPICodedLookup.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectSharedCodesSystemParameter_253689', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '253689', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Charge')
      await settings.module.switchToCharge()
      await settings.chargeScreen.enterAtChargeCode()
      await settings.chargeScreen.clickSearchButton()
      await settings.chargeScreen.verifyAtChargeCode(0)
      await settings.chargeScreen.clickAtChargeCodeinGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtNIBRSCodeinGrid(0)
      await settings.sharedCodes.verifyAtChargeCode()
      await settings.sharedCodes.enterAtNIBRSCode1()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.enterAtNIBRSCode()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.verify1019DuplicationOfDataFound()
      await settings.module.switchToSharedCodes(); //
      await settings.sharedCodes.clickSave()
      await settings.sharedCodes.verifyUpdatedDataExistsAcknowledgeMessage(); //
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickClearButton()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyUpdateSuccessfulMessage()
      await settings.sharedCodes.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectSharedCodesSystemParameter_254465', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '254465', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Disposition')
      await settings.module.switchToDisposition()
      await settings.disposition.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtDisposition()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.selectAtType()
      await settings.sharedCodes.clickCADTab()
      await settings.sharedCodes.clickCaseGereratedNoCheckBox()
      await settings.sharedCodes.selectAtReportCode()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifySuccessfulBottomMessage()
      await settings.module.switchToSharedCodes()
    });
  });

  test('2020DefectSharedCodesSystemParameter_258280', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '258280', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtDescriptionInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue(); // Script Method Name Updated //
      await settings.sharedCodes.enterAtLayerDescription()
      await settings.sharedCodes.selectAtLayerIcon()
      await settings.sharedCodes.clickCodeAddButton()
      await settings.sharedCodes.enterAtCodeValueSearch()
      await settings.sharedCodes.clickSearchButton()
      await settings.sharedCodes.verifyAtCodeValueinGrid(0)
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.clickAddnewButton()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.selectAtLayerType()
      await geo.mapLayerEntry.selectAtLayerName(0)
      await geo.mapLayerEntry.enterAtFeatureName()
      await geo.mapLayerEntry.selectIsFireCheckBox()
      await geo.mapLayerEntry.enterAtAddress()
      await geo.mapLayerEntry.SaveScreen()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.verifyAdditionSuccessfulBottomMessage()
      await geo.mapLayerEntry.verifyIsFireCheckBoxSelectedAndDisabled()
      await geo.mapLayerEntry.clickRefershButton()
      await geo.mapLayerEntry.verifyAttachmentTabEnabled()
      await geo.module.switchToMapLayerEntry()
      //Issue in Fire to police Sync map layers
    });
  });

  test('2020DefectSharedCodesSystemParameter_260394', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '260394', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await settings.sharedCodes.verifyAtCodeValue()
      await settings.sharedCodes.verifyAtCodeValueDescription()
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCodedScreen()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Entry')
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickMainTab()
      personnel.personnelEntry.personnelEntryMainTab.verifyAddedPhoneTypeValueIsDisplayed()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.close()
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRowInGrid(0)
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickMainTab()
      personnel.personnelEntry.personnelEntryMainTab.selectAtPhoneType()
      personnel.personnelEntry.personnelEntryMainTab.enterPhoneNo()
      personnel.personnelEntry.personnelEntryMainTab.clickAddButton()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.save()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.verifyUpdateSuccessfulMessage()
      personnel.switchToPersonnelEntry()
    });
  });

});

test.describe('2020DefectTestCases', () => {
  test('2020DefectTestCases_243682', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '243682', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('5031')
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickAddnew()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.enterAtUnit();//updated
      await settings.unitEntry.enterAtVehicle()
      await settings.unitEntry.selectAtDispatchUnitType(1);//updated
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.clickOnDutyNoReqCheckBox()
      await settings.unitEntry.enterAtOnCallOfficer()
      await settings.unitEntry.clickIsTrackableCheckBox()
      await settings.unitEntry.clickAdd()
      await settings.unitEntry.saveScreen()
      await settings.unitEntry.verify1002AdditionSuccessfulMessage()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.close()
      await settings.module.switchToUnits()
      await settings.unitsScreen.enterAtUnit()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.verifyAtUnitTypeInGrid()
      await settings.module.switchToUnits()
    });
  });

  test('2020DefectTestCases_250422', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '250422', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5031 - Unit Search')
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickAddnew()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.enterAtUnit()
      await settings.unitEntry.selectAtDispatchUnitType(); // Method and UI Updated
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.saveScreen()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.verify1002AdditionSuccessfulMessage(); //
      await settings.unitEntry.close()
      await settings.module.switchToUnits()
      await settings.unitsScreen.enterAtUnit()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.verifyAtUnitInRow(0)
      await settings.unitsScreen.clickUnitInGridRow()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.ClickDeleteIcon()
      await popupPage.acknowledge.okWithExpectedMessage('1011 - No Record Found')
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectTestCases_255526', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '255526', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtCodeValue(); // UI Changed
      await settings.sharedCodes.clickSearchButton()
      await settings.sharedCodes.verifyAtCodeValueDescription(0)
      await settings.module.switchToSharedCodes()
    });
  });

  test('2020DefectTestCases_256104', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '256104', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectRowAtRoleName()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyAtRoleName()
      await settings.rolesEntry.verifyDeleteIconEnabledToClick()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.verifyDeleteCheckBoxNotCheckedForLoginUser()
      await settings.rolesEntry.mouseHoverOnDeleteIconAndVerifyDeleteRole()
      await settings.rolesEntry.clickDeleteIconWithConfirmPopup();//updated
      await settings.roles.verifyNoRecordsFound()
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName1()
      await settings.roles.clickSearch()
      await settings.roles.selectRowAtRoleName1()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyDeleteIconNotEnabledToClick()
      await settings.rolesEntry.mouseHoverOnDeleteIconAndVerifyDeleteRoleNotAllowed()
      await settings.module.switchToRolesEntry()
    });
  });

  test('2020DefectTestCases_256105', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '256105', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleRowCheckBoxByIndex(0)
      await settings.roles.verifyCopyToSameJurisIsEnabled()
      await settings.roles.verifyCopyToMultiJurisIsEnabled()
      // 1
      await settings.roles.clickCopyToSameJuris()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyAtRoleName()
      await settings.rolesEntry.enterAtCopyRoleName()
      await settings.rolesEntry.enterAtCopyRoleNameDescription()
      await settings.rolesEntry.clickSaveNClose()
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtCopyRoleName()
      await settings.roles.clickSearch()
      await settings.roles.verifyAtCopyRoleNameInGrid()
      // 2
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName1()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleRowCheckBoxByIndex(0)
      await settings.roles.clickCopyToMultiJuris()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickCopyNameSelectAllCheckbox()
      await settings.rolesEntry.clickSaveButton()
      await settings.rolesEntry.verifyCopyRoleConfirmMessage(); // Method Updated
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyAdditionSuccessfulBottomMessage()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesScreen()
      await settings.roles.selectAtJurisAsBC()
      await settings.roles.enterAtRoleName1()
      await settings.roles.clickSearch()
      await settings.roles.verifyAtRoleName1InGrid()
      // 3
      await settings.module.switchToRolesScreen()
      await settings.roles.selectAtJurisAsPX()
      await settings.roles.enterAtRoleName2()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleRowCheckBoxByIndex(0)
      await settings.roles.clickCopyToMultiJuris()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickOverRideSelectAllCheckBox()
      await settings.rolesEntry.clickSaveButton()
      await settings.rolesEntry.verifyOverRideConfirmMessage(); // Method Updated
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyUpdateSuccessfulMessage()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesScreen()
      await settings.roles.selectAtJurisAsBC()
      await settings.roles.enterAtRoleName2()
      await settings.roles.clickSearch()
      await settings.roles.verifyAtRoleName2InGrid()
      await settings.module.switchToRolesScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectTestCases_260157', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '260157', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('5011')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.enterAtCFSCode()
      await settings.cFSCode.selectAtType()
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.VerifyTypeUsingCFSCode()
      await settings.cFSCode.clickAtCFSCodeInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.clickNotificationIcon()
      await home.module.switchToNotificationScreen()
      await home.notification.verifyAtNotificationSetupCFSCode()
      await home.notification.verifyPatrolAreaDropdownDisplayed()
      await home.notification.verifyAtRequestPFCode()
      await home.notification.selectAtDistributionList()
      await home.notification.selectAtReportingPeriod()
      await home.notification.selectAtNotifyEvent(); // Method Updated
      await home.notification.selectAtPatrolArea(); // Method Updated
      await home.notification.clickAddButton()
      await home.notification.SaveScreen()
      await home.module.switchToNotificationScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('2020DefectTestCases_250097', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '250097', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('1276')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.clickAddNew()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName()
      await settings.jobEntry.selectAtJobType()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.tabStartDate()
      await settings.jobEntry.enterAtEndDate()
      await settings.jobEntry.saveScreen()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterEveryMinutesAs10()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickInactiveCheckBox()
      await settings.jobEntry.saveScreen()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.close()
      await settings.module.switchToJobs()
      await settings.jobsScreen.enterAtJobName()
      await settings.jobsScreen.clickIncludeInactiveCheckBox()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobNameInGrid()
      await settings.module.switchToJobs()
    });
  });

  test('2020DefectTestCases_259724', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '259724', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectManageRepositoryUsingFormRef()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.save()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.verifyAdditionSuccessfulBottomMessage()
      await qa.questionnarieRepository.saveNClose()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Gun Permit entry')
      await names.module.switchToGunPermitEntry()
      await names.gunPermitEntry.enterAtNameID()
      await names.gunPermitEntry.selectAtPermitType()
      await names.gunPermitEntry.selectAtPermitStatus()
      await names.gunPermitEntry.SaveScreen()
      await names.module.switchToGunPermitEntry()
      await names.gunPermitEntry.verifyAdditionsuccessFullMessage()
      await names.gunPermitEntry.switchToQAFormsTab(); // Method Updated
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.verifyAtFormRefNoInStatusLabel()
      await qa.questionDataEntry.CloseScreen()
      await names.module.switchToGunPermitEntry()
      await names.gunPermitEntry.SaveScreen()
      await names.module.switchToGunPermitEntry()
      await names.gunPermitEntry.verifyUpdatesuccessFullMessage()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

});

test.describe('2020DefectRolesAndReportRepository', () => {
  test('2020DefectRolesAndReportRepository_244232', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '244232', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      await qa.module.SwitchToQAFormEntry()
      const formName = await qa.qAFormEntry.getFormName()
      const version = await qa.qAFormEntry.getVersion()
      const activeAsOf = await qa.qAFormEntry.getActiveAsOf()
      await qa.qAFormEntry.ClickCopyToSameJurisButton()
      await qa.module.switchToQAFormEntryCopyJuris()
      await qa.qAFormEntry.verifyActiveFormName(formName)
      await qa.qAFormEntry.verifyActiveVersion(version)
      await qa.qAFormEntry.verifyActiveActiveAsOf(activeAsOf)
      await qa.qAFormEntry.EnterAtFormRefNo()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.switchToQAFormEntryCopyJuris()
      await qa.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      await qa.qAFormEntry.ClickReviewButton()
      await qa.module.SwitchToQuestionReviewEntry()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

});

test.describe('SettingsSystemParameter', () => {
  test('SettingsSystemParameter_251301', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '251301', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameter705AsNotEmpty()
      await settings.sysParameter.setSystemParameter705AsEmpty()
      await settings.sysParameter.saveScreen()
      await popupPage.acknowledge.ok()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifySystemParameter705AsEmpty()
      await settings.sysParameter.setSystemParameter705AsYes()
      await settings.sysParameter.saveScreen()
      await popupPage.acknowledge.ok()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifySystemParameter705AsNotEmpty()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('SettingsSystemParameter_252295', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '252295', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter736AsDIVSEC()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickRefreshButton()
      await settings.sysParameter.setSystemparameter745AsFalse()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.myHome.SwitchToMyReportApprovalTab()
      await home.myHome.myReportsTab.SelectStatusAsKeypunch()
      await home.myHome.myReportsTab.ClickSearchButton()
      await home.myHome.myReportsTab.VerifyGridRowStatusAsTranscriber()
      await home.myHome.myReportsTab.SelectStatusAsSubmitted()
      await home.myHome.myReportsTab.ClickShowMyItemsOnly()
      await home.myHome.myReportsTab.ClickSearchButton()
      await home.myHome.myReportsTab.VerifyAtOfficerInColumnValues()
      await home.module.switchToMyHomeScreen()
    });
  });

  test('SettingsSystemParameter_257059', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '257059', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter540AsFalse()
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter549AsFalse()
      await loaderPage.logout()
      await loginPage.loginScreen.loginToFireInNewTab()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifySytemParameter540SelectedValueAsFalse()
      await settings.sysParameter.verifySytemParameter540Disabled()
      await settings.sysParameter.verifySytemParameter549SelectedValueAsFalse()
      await settings.sysParameter.verifySytemParameter549Disabled()
    });
  });

  test('SettingsSystemParameter_263425', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '263425', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await settings.sharedCodes.verifyAtCodeValueDescription()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.enterAtPopUpCodeValue1()
      await settings.sharedCodes.enterAtPopUpDescription1()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await settings.sharedCodes.verifyAtCodeValueDescription1()
      await settings.module.switchToSharedCodes()
      //Testcase ID â€“ 263434
    });
  });

  test('SettingsSystemParameter_273490', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '273490', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter801AsDATransmit()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.ClickCaseNotificationeButton()
      await home.module.switchToNotificationScreen()
      await home.notification.selectAtDistributionList()
      await home.notification.selectAtReportingPeriod()
      await home.notification.selectAtNotifyEvent1(); // error detected by dinesh
      await home.notification.clickAddButton()
      await home.notification.verifyAtRequestedByInGrid()
      await home.notification.clickEMailRadioButton()
      await home.notification.enterAtEmail()
      await home.notification.enterAtName()
      await home.notification.selectAtReportingPeriod()
      await home.notification.selectAtNotifyEvent2()
      await home.notification.clickAddButton()
      await home.notification.verifyAtRequestedByInGrid()
      await home.notification.SaveScreen()
      await home.module.switchToNotificationScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await home.module.switchToNotificationScreen()
    });
  });

  test('SettingsSystemParameter_273491', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '273491', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter801AsAlways()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.ClickCaseNotificationeButton()
      await home.module.switchToNotificationScreen()
      await home.notification.selectAtDistributionList(); // error detected by dinesh.
      await home.notification.selectAtReportingPeriod()
      await home.notification.selectAtNotifyEvent1()
      await home.notification.clickAddButton()
      await home.notification.verifyAtRequestedByInGrid(); // error detected by dinesh
      await home.notification.clickEMailRadioButton()
      await home.notification.enterAtEmail()
      await home.notification.enterAtName()
      await home.notification.selectAtReportingPeriod()
      await home.notification.selectAtNotifyEvent2()
      await home.notification.clickAddButton()
      await home.notification.SaveScreen()
      await home.module.switchToNotificationScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await home.module.switchToNotificationScreen()
      //Automated by KIRAN :-     Date :-10/12/2021  Quarter:-4  Sprint:-1
    });
  });

  test('SettingsSystemParameter_292508', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '292508', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyComboBoxSystemParametersListedInScreen()
      await settings.sysParameter.verifyEditSystemParametersListedInScreen()
      await settings.sysParameter.selectModuleAsNull()
      await settings.sysParameter.clickRefreshButton()
      await settings.sysParameter.setSystemparameter5909AsFalse()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.resetParameterID()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyComboBoxSystemParametersListedInScreen()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter5909AsTrue()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickViewHistoryButton()
      await settings.sysParameter.switchToHistoryWindow()
      await settings.viewHistoryWindow.enterAtParameterID()
      await settings.viewHistoryWindow.clickSearchButton()
      const oldValue1 = await settings.viewHistoryWindow.readValuesInGrid('Old Value', 8)
      const newValue1 = await settings.viewHistoryWindow.readValuesInGrid('New Value', 8)
      const oldPF = await settings.viewHistoryWindow.readValuesInGrid('PF Code', 8)
      await settings.viewHistoryWindow.verifyCellValueWithExpectedData(oldPF, BaseData.getSettingsModuleValue('OldPFCode'))
      await settings.viewHistoryWindow.verifyCellValueWithExpectedData(oldValue1,
      BaseData.getSettingsModuleValue('OldValue1'))
      await settings.viewHistoryWindow.verifyCellValueWithExpectedData(newValue1,
      BaseData.getSettingsModuleValue('NewValue1'))
      const NewPF = await settings.viewHistoryWindow.readValuesInGrid('PF Code', 8)
      const oldValue2 = await settings.viewHistoryWindow.readValuesInGrid('Old Value', 8)
      const newValue2 = await settings.viewHistoryWindow.readValuesInGrid('New Value', 8)
      await settings.viewHistoryWindow.verifyCellValueWithExpectedData(NewPF, BaseData.getSettingsModuleValue('NewPFCode'))
      await settings.viewHistoryWindow.verifyCellValueWithExpectedData(oldValue2,
      BaseData.getSettingsModuleValue('OldValue2'))
      await settings.viewHistoryWindow.verifyCellValueWithExpectedData(newValue2,
      BaseData.getSettingsModuleValue('NewValue2'))
      await settings.viewHistoryWindow.verifyPFColumnCheckboxDisplayed(1)
      await settings.viewHistoryWindow.verifyPFColumnCheckboxDisplayed(2)
      // Automated by Stalin // Date :02/16/2022 //Quarter:01 // Sprint:04
      // //Module:Settings
    });
  });

  test('SettingsSystemParameter_135129', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '135129', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.clickOnParameterID1205()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.navigateToMainTab()
      await settings.parameterNameEntry.selectAtMJCategory()
      await settings.parameterNameEntry.SaveScreen()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.maximizeWindow()
      await settings.parameterNameEntry.VerifyUpdateSuccessfulStatusMessage()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.close()
      await loaderPage.logout()
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameter1205Disabled()
      await settings.sysParameter.verifyTooltipMsgForParameter1205()
      await settings.module.switchToSystemParamter()
      //
      await loaderPage.logout()
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameter1205IsEnabled()
      await settings.sysParameter.clickOnParameterID1205()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.navigateToMainTab()
      await settings.parameterNameEntry.selectMJCategoryAsShared()
      await settings.parameterNameEntry.SaveScreen()
      await settings.module.switchToParameterNameEntry()
      // Automated by:-Bavithra , Date :-11/30/2022 , Quarter:-4 , Sprint:-19 ,
      // Module:-Settings
      // Linked TestCase ID - 9143
      //Automated by:- Ranjith Kumar V K, Date : 01/16/2025, Quarter:1, Sprint: 1 Testcase ID: 48771
      //Type of testcase : Defect
      //Automated by:- Ranjith Kumar V K, Date: 01/16/2025, Quarter:1, Sprint:1 Testcase ID: 48770
      //Type of testcase: Defect
    });
  });

  test('SettingsSystemParameter_53071', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '53071', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameter1128()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyNoRecordFoundAcknowledgeMessage()
      await settings.module.switchToSystemParamter()
      //Automated By : - chandrasekar.v on 3/13/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('SettingsSystemParameter_55925', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55925', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter219AsTrue()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.whiteBoard.clickMaximizeButton()
      await home.module.switchToWhiteBoardWindow()
      await home.whiteBoard.selectRowByAtSubject(1)
      await home.module.switchToActivityEntry()
      // objectIdentification.windowHandle.verifyWindowExists('Activity Log')
      // objectIdentification.windowHandle.verifySameScreenNotOpenedTwice('Activity Log')
      await home.module.switchToActivityEntry()
      //Automated By : Sarathkumar L on 04/21/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Defect
    });
  });

  test('SettingsSystemParameter_55742', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55742', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyAtSMTPServerPassword205()
      await settings.sysParameter.clickSMTPServerPasswordLabel()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.navigateToMainTab()
      await settings.parameterNameEntry.mainTab.verifyPasswordCheckboxDisabled()
      await settings.parameterNameEntry.mainTab.verifyPasswordCheckboxNotSelected()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.mainTab.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.ClickLogginUserLink()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.switchToPreferenceTab()
      personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.saveNClose()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyAtSMTPServerPassword205()
      await settings.sysParameter.clickSMTPServerPasswordLabel()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.navigateToMainTab()
      await settings.parameterNameEntry.mainTab.verifyPasswordCheckboxEnabled()
      await settings.parameterNameEntry.mainTab.clickPasswordCheckbox()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.saveAndClose()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySMTPServerPasswordHidden()
      //Automated By :- Sarathkumar L on 05/22/2025
      //Sprint :- Q2 Sprint 04 2025
      //Type of Test case :- Defect
    });
  });

  test('SettingsSystemParameter_70101', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70101', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setAtSystemParameter4349(1)
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifyAtMaximumNegativeLeaveHoursAllowed(1)
      await settings.sysParameter.setAtSystemParameter4349(2)
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifyAtMaximumNegativeLeaveHoursAllowed(2)
      //Automated By : - chandrasekar.v on 9/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('SettingsSystemParameter_70441', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70441', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.setAtSystemparameter6704AsFalse()
      await loaderPage.navigateToModule('Help Desk')
      await loaderPage.navigateToScreen('Internal Ticket Search')
      helpdesk.switchToInternalTicketSearchScreen()
      helpdesk.internalTicketSearch.clickSearchButton()
      helpdesk.internalTicketSearch.selectRandomRow()
      helpdesk.switchToInternalTicketEntry()
      helpdesk.internalTicketEntry.switchToActivitiesTab()
      helpdesk.internalTicketEntry.activitiesTab.verifyShowSystemEntriesCheckBoxIsUnChecked()
      helpdesk.switchToInternalTicketEntry()
      //Automated By : - chandrasekar.v on 10/28/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('Ungrouped', () => {
  test('Ungrouped_258281', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '258281', async () => {
      //String url = PropertiesFile.readPropertiesFile('Fire82');
      await loginPage.loginScreen.logonUsingTestContextOtherDB()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.selectAtLayerName(0)
      await geo.mapLayerSearch.clickSearchButton()
      await geo.mapLayerSearch.verifyAtNameInGrid(0)
      await geo.mapLayerSearch.selectGridRowByLayerName(0)
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.selectAtLayerName(1)
      await geo.mapLayerEntry.enterAtFeatureName()
      await geo.mapLayerEntry.enterAtAddress()
      await geo.mapLayerEntry.switchToRemarksTab()
      await geo.mapLayerEntry.enterAtRemarks()
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.clickSaveNCloseScreen()
      await geo.module.switchToMapLayerSearch()
      //Issue in Fire to police Sync map layers
    });
  });

  test('Ungrouped_258282', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '258282', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Geo')
      await loaderPage.navigateToScreen('Map Layer Search')
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.selectAtLayerName(0)
      await geo.mapLayerSearch.selectIncludeFireCheckBox()
      await geo.mapLayerSearch.clickSearchButton()
      await geo.mapLayerSearch.verifyNoRecordsFoundAck()
      await geo.module.switchToMapLayerSearch()
      await geo.mapLayerSearch.selectAtLayerName(1)
      await geo.mapLayerSearch.selectIncludeFireCheckBox()
      await geo.mapLayerSearch.clickSearchButton()
      await geo.mapLayerSearch.verifyAtNameInGrid(0)
      await geo.mapLayerSearch.selectGridRowByLayerName(1)
      await geo.module.switchToMapLayerEntry()
      await geo.mapLayerEntry.switchToRemarksTab()
      await geo.mapLayerEntry.verifyAtRemarksEntered()
    });
  });

  test('Ungrouped_50917', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '50917', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickAlarmEntryEditPermission()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickAtSearchCheckBoxByScreenNameInGrid()
      await settings.rolesEntry.save()
      await settings.module.switchToRolesEntryEditScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.rolesEntry.saveAndClose()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickViewHistoryButton()
      await settings.module.switchToPermissionHistory()
      await settings.permissionHistory.selectAtModule()
      await settings.permissionHistory.enterAtScreenID()
      await settings.permissionHistory.clickSearch()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Permission History Screen')
      await settings.permissionHistory.verifyAtPFCodeByScreenIDInGrid()
      await settings.permissionHistory.verifyAtScreenIDByModuleInGrid()
      await settings.permissionHistory.verifyAtScreenNameByModuleInGrid()
      await settings.permissionHistory.verifyAtNewValueIsCheckedByScreenIDInGrid(0)
      await settings.permissionHistory.closeScreen()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickResetIcon()
      await settings.rolesEntry.clickExpandIconByModuleInGrid()
      await settings.rolesEntry.verifyInfoIconIsDisplayedForAllScreensInGrid()
      await settings.rolesEntry.verifyAtToolTipByScreenIDInGrid()
      await settings.rolesEntry.verifyAtToolTipByScreenNameInGrid()
      await settings.rolesEntry.verifyInfoIconToolTipByScreenIDInGrid()
      await settings.rolesEntry.clickInfoIconByScreenIDInGrid()
      // objectIdentification.windowHandle.verifyWindowExists('Repository Entry')
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.switchToHelpTab()
      await settings.repositoryEntry.helpTab.verifyRichTextBoxIsDisabled()
      //Automated By : - chandrasekar.v on 3/13/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('Ungrouped_70354', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70354', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickEditPermissionButtonByModule('Facility Management')
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.save()
      await loaderPage.navigateToModule('Facility Management')
      await loaderPage.navigateToScreenByScreenID('8241 - Activity Search')
      facilityManagement.SwitchToActivitySearch()
      facilityManagement.activitySearch.ClickDateResetButton()
      facilityManagement.activitySearch.enterAtPFNo(1)
      facilityManagement.activitySearch.ClickSearchLink()
      facilityManagement.activitySearch.selectAtReportedPfInGrid(1)
      facilityManagement.SwitchToActivityLogEntry()
      await activity.activityEntry.clickDeleteIconWithConfirmPopupMessage()
      facilityManagement.SwitchToActivitySearch()
      facilityManagement.activitySearch.ClickBackLink()
      facilityManagement.activitySearch.ClickResetLink()
      facilityManagement.activitySearch.EnterAtPFNo()
      facilityManagement.activitySearch.ClickSearchLink()
      await activity.activitySearch.verifyNoRecordFoundAcknowledge()
      facilityManagement.SwitchToActivitySearch()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickEditPermissionButtonByModule('Facility Management')
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.save()
      await loaderPage.navigateToModule('Facility Management')
      await loaderPage.navigateToScreenByScreenID('8241 - Activity Search')
      facilityManagement.SwitchToActivitySearch()
      facilityManagement.activitySearch.ClickDateResetButton()
      facilityManagement.activitySearch.enterAtPFNo(2)
      facilityManagement.activitySearch.ClickSearchLink()
      facilityManagement.activitySearch.selectAtReportedPfInGrid(2)
      facilityManagement.SwitchToActivityLogEntry()
      facilityManagement.activityLogEntry.verifyDeleteIconDisabled()
      facilityManagement.SwitchToActivityLogEntry()
      //Automated By : - chandrasekar.v on 10/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Ungrouped_76365', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '76365', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setAtSystemParameter1611()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToScreenByScreenIDWithContains('5011')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.selectAtType()
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.selectAtCFSCodeInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickSOPTab()
      await settings.cFSCodeEntry.cFSCodeSOPTab.SelectAtSOPType(1)
      await settings.cFSCodeEntry.cFSCodeSOPTab.SelectTextName()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickSOPTab()
      await settings.cFSCodeEntry.cFSCodeSOPTab.ClickAdd()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.save()
      await settings.module.switchToCFSCodeEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToCFSCodeEntry()
      // Automated By : - Sarathkumar L on 02/06/2026
      // Sprint :- : Quarter 1 : Sprint 2
      // Type of Test case : - Defect
    });
  });

});

test.describe('2020DefectJobsAndJuris', () => {
  test('2020DefectJobsAndJuris_256807', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '256807', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.clickAtJobNameInGrid()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.selectAtFormName()
      await settings.jobEntry.verifyInactivePopupAcknowledgeMessage()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.close()
    });
  });

  test('2020DefectJobsAndJuris_256107', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '256107', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Juris')
      await settings.module.switchToJurisEntry()
      await settings.juris.clickAddressTab()
      await settings.juris.jusrisAddressTab.selectAtAddressType()
      await settings.juris.jusrisAddressTab.enterAtAddress()
      await settings.juris.jusrisAddressTab.clickAddBUtton()
      await settings.module.switchToJurisEntry()
      await settings.juris.saveButton()
      await settings.module.switchToJurisEntry()
      await settings.juris.verifyUpdateSuccessfulMessage()
      await settings.juris.clickAddressTab()
      await settings.juris.jusrisAddressTab.verifyAtAddressInGrid()
      await settings.module.switchToJurisEntry()
    });
  });

  test('2020DefectJobsAndJuris_256108', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '256108', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.clickAtJobNameInGrid()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.clickWeeklyRadiobutton()
      await settings.jobEntry.enterAtEvery()
      await settings.jobEntry.clickMondayCheckBox()
      await settings.jobEntry.clickTuesdayCheckBox()
      await settings.jobEntry.clickWednesdayCheckBox()
      await settings.jobEntry.clickThursdayCheckBox()
      await settings.jobEntry.clickFridayCheckBox()
      await settings.jobEntry.clickReCalculateCheckbox()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveScreen()
      await settings.module.switchToJobEntry()
      // Mithun
    });
  });

});

test.describe('2021DefectTestCases', () => {
  test('2021DefectTestCases_263937', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '263937', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtDescriptionInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      // settings.sharedCodes.verifyAtDescription(); // Not Possible
      await settings.sharedCodes.verifyAtCodeValueinGrid(0)
      await settings.sharedCodes.verifyAtCodeValueDescriptionInGrid(0)
      await settings.sharedCodes.verifyInactiveCheckboxUnChecked(0)
      //		settings.sharedCodes.verifyAtCodeValue1inGrid(1);
      //		settings.sharedCodes.verifyAtCodeValueDescription1InGrid(1);
      //		settings.sharedCodes.verifyInactiveCheckboxChecked();
      await settings.module.switchToSharedCodes()
    });
  });

  test('2021DefectTestCases_265269', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '265269', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('5011')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.enterAtCFSCode()
      await settings.cFSCode.selectAtType()
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.verifyAtCFSCodeInGrid(); //
      await settings.cFSCode.verifyAtTypeInGrid(); //
      await settings.cFSCode.clickAtCFSCodeInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.verifyAtCFSCode(); //
      await settings.cFSCodeEntry.verifyAtType(); //
      await settings.cFSCodeEntry.verifyTasksTabDisplayed()
      await settings.cFSCodeEntry.ClickTasksTab()
      await settings.cFSCodeEntry.cFSCodeTasksTab.selectAtCopyTaskFromComboBox()
      await settings.cFSCodeEntry.cFSCodeTasksTab.clickCopyButton()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.saveScreen();//updated
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.verifyUpdateSuccessfulBottomMessage()
      await settings.cFSCodeEntry.ClickTasksTab()
      //	settings.cFSCodeEntry.cFSCodeTasksTab.verifyAtTaskDescriptionInGrid();
      await settings.module.switchToCFSCodeEntry()
    });
  });

  test('2021DefectTestCases_263422', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '263422', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Charge')
      await settings.module.switchToCharge()
      await settings.chargeScreen.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyStatutoryLimitationToRetainEvidenceIsEnabled()
      await settings.sharedCodes.enterAtChargeCode()
      await settings.sharedCodes.selectAtChargeType()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.enterAtRelatedCFSCode()
      await settings.sharedCodes.enterAtStatutoryLimitationToRetainEvidence()
      await settings.sharedCodes.enterAtNIBRSCode()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.verifyAtNIBRSCodeinGrid(0)
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifySuccessfulBottomMessage()
      await settings.module.switchToSharedCodes()
      //Testcase ID â€“ 263423
    });
  });

  test('2021DefectTestCases_263423', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '263423', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('5011')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.clickAddNewButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtCFSCode()
      await settings.sharedCodes.selectAtCFSType()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.enterAtCFSClass()
      await settings.sharedCodes.clickManagementTab()
      await settings.sharedCodes.managementTab.verifyStatutoryLimitationToRetainEvidenceIsEnabled()
      await settings.sharedCodes.managementTab.enterAtStatutoryLimitationToRetainEvidence()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifySuccessfulBottomMessage()
      await settings.module.switchToSharedCodes()
      //Testcase ID â€“ 263425
    });
  });

  test('2021DefectTestCases_263434', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '263434', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded Map')
      await settings.module.switchToCodedMapScreen()
      await settings.codedMap.selectAtInterface()
      await settings.codedMap.verifyAtInterfaceDropdownList()
      await settings.codedMap.clickAddNewButton()
      await settings.module.switchToCodedMapDetail()
      await settings.codedMapDetail.verifyAtInterfaceDropDown()
      await settings.codedMapDetail.enterAtCodeType()
      await settings.codedMapDetail.clickAddNew()
      await settings.codedMapDetail.clickPopUpPhoenixValueSearchIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid()
      await settings.module.switchToCodedMapDetail()
      await settings.codedMapDetail.enterAtMapCodeValue()
      await settings.codedMapDetail.enterAtMapDescription()
      await settings.codedMapDetail.clickPopUpAddButton()
      await settings.codedMapDetail.verifyAtMapCodeValueInGrid()
      await settings.codedMapDetail.clickAddNew()
      await settings.codedMapDetail.clickPopUpPhoenixValueSearchIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid()
      await settings.module.switchToCodedMapDetail()
      await settings.codedMapDetail.enterAtMapCodeValue1()
      await settings.codedMapDetail.enterAtMapDescription1()
      await settings.codedMapDetail.clickPopUpAddButton()
      await settings.codedMapDetail.verifyAtMapCodeValue1InGrid()
      await settings.module.switchToCodedMapDetail()
    });
  });

  test('2021DefectTestCases_263927', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '263927', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded Map')
      await settings.module.switchToCodedMapScreen()
      await settings.codedMap.selectAtInterface()
      await settings.codedMap.verifyAtInterfaceDropdownList()
      await settings.codedMap.clickAddNewButton()
      await settings.module.switchToCodedMapDetail()
      await settings.codedMapDetail.verifyAtInterfaceDropDown()
      await settings.codedMapDetail.enterAtCodeType()
      await settings.codedMapDetail.clickAddNew()
      await settings.codedMapDetail.clickPopUpPhoenixValueSearchIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid()
      await settings.module.switchToCodedMapDetail()
      await settings.codedMapDetail.enterAtMapCodeValue()
      await settings.codedMapDetail.enterAtMapDescription()
      await settings.codedMapDetail.clickPopUpAddButton()
      await settings.codedMapDetail.verifyUpdatedSuccessfullyBottomMessage()
      await settings.codedMapDetail.verifyAtMapCodeValueInGrid()
      await settings.codedMapDetail.clickAddNew()
      await settings.codedMapDetail.clickPopUpPhoenixValueSearchIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid()
      await settings.module.switchToCodedMapDetail()
      await settings.codedMapDetail.enterAtMapCodeValue1()
      await settings.codedMapDetail.enterAtMapDescription1()
      await settings.codedMapDetail.clickPopUpAddButton()
      await settings.codedMapDetail.verifyAtMapCodeValue1InGrid()
      await settings.module.switchToCodedMapDetail()
    });
  });

  test('2021DefectTestCases_272999', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '272999', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.selectAtMJCategory()
      await settings.coded.clickSearchButton()
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.verifyAtCodedID()
      await settings.maintainCodeValue.verifyJurisEnabled()
      await settings.maintainCodeValue.closeTheScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID1()
      await settings.coded.selectAtMJCategory1()
      await settings.coded.clickSearchButton()
      await settings.coded.clickRowByAtCodeID1()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.verifyAtCodedID1()
      await settings.maintainCodeValue.verifyJurisDisabled()
      await settings.module.switchToMaintainCodeValue()
    });
  });

  test('2021DefectTestCases_265270', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '265270', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('5011')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.enterAtCFSCode()
      await settings.cFSCode.selectAtType()
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.verifyAtCFSCodeInGrid()
      await settings.cFSCode.verifyAtTypeInGrid()
      await settings.cFSCode.clickAtCFSCodeInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickTasksTab()
      await settings.cFSCodeEntry.cFSCodeTasksTab.verifyTaskCodeAsMandatory()
      await settings.cFSCodeEntry.cFSCodeTasksTab.EnterAtDueNoOfDays()
      await settings.cFSCodeEntry.cFSCodeTasksTab.EnterSortOrderAs0()
      await settings.cFSCodeEntry.cFSCodeTasksTab.enterAtTaskDetails()
      await settings.cFSCodeEntry.cFSCodeTasksTab.clickAddButton()
      await settings.cFSCodeEntry.cFSCodeTasksTab.verifyRequiredEntriesAreMissingAcknowledge()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickTasksTab()
      await settings.cFSCodeEntry.cFSCodeTasksTab.SelectAtTaskCode()
      await settings.cFSCodeEntry.cFSCodeTasksTab.clickAddButton()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.SaveScreen()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.verifyUpdateSuccessfulBottomMessage()
      await settings.cFSCodeEntry.ClickTasksTab()
      await settings.cFSCodeEntry.cFSCodeTasksTab.verifyTaskDetailsAsMandatory()
      await settings.cFSCodeEntry.cFSCodeTasksTab.SelectAtTaskCode1()
      await settings.cFSCodeEntry.cFSCodeTasksTab.EnterAtDueNoOfDays()
      await settings.cFSCodeEntry.cFSCodeTasksTab.EnterSortOrderAs1()
      await settings.cFSCodeEntry.cFSCodeTasksTab.clickAddButton()
      await settings.cFSCodeEntry.cFSCodeTasksTab.verifyRequiredEntriesAreMissingAcknowledge()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickTasksTab()
      await settings.cFSCodeEntry.cFSCodeTasksTab.enterAtTaskDetails()
      await settings.cFSCodeEntry.cFSCodeTasksTab.clickAddButton()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.SaveScreen()
      await settings.module.switchToCFSCodeEntry()
    });
  });

});

test.describe('2022DefectTestCasesKIRAN', () => {
  test('2022DefectTestCasesKIRAN_283634', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '283634', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtScreenID()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.VerifyNoRecordAcknowledgeMessage()
      await loaderPage.navigateToModule('BI')
      await loaderPage.navigateToScreen('DashBoard Config')
      bi.switchToDashBoardConfig()
      bi.dashBoardConfig.SelectRandomValueInGrid()
      bi.switchToDashBoardEntry()
      bi.dashBoardEntry.verifyQaFormTabIsNotAvailable()
      //Automated by KIRAN :-     Date :-26/11/2021  Quarter:-4  Sprint:-4  Module:-Settings
    });
  });

});

test.describe('ReleaseBrokenQ421', () => {
  test('ReleaseBrokenQ421_285052', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '285052', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickSearch()
      await settings.distributionList.selectByDistributionName()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.verifyAtDistributionListName()
      await settings.distributionEntry.verifyPFNameInGrid()
      await settings.distributionEntry.saveScreen()
      await settings.distributionEntry.verifyUpdateSuccessfulMessage()
      await settings.distributionEntry.closeSreen()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.enterAtPF()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRowAtPFCode()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickInactiveCheckBox()
      personnel.personnelEntry.save()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickSearch()
      await settings.distributionList.selectByDistributionName()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.verifyAtDistributionListNameIsNotPresent()
      //Automated by:-Dinesh , Date :-02/09/2022 , Quarter:-1 , Sprint:-3 , Module:-Settings .
      //Method Added from this testcase 55562 by Sarath 04/22/2025 Q2 Sprint 4 2025
    });
  });

});

test.describe('ReleaseBrokenQ122', () => {
  test('ReleaseBrokenQ122_292512', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '292512', async () => {
      await loginPage.loginScreen.logon()
      //loader.ClickTextMsgSrchImageIcon();
      await loaderPage.EnterAutomationinTextMsgSrchTextBox()
      await loaderPage.pressEnterInTextMsgSrchTextBox()
      await settings.module.switchToTextSearchHelpWindow()
      const text = await settings.textSearchHelpWindow.readSearchWord()
      const concat = text.concat('sdjbfsdjfnsdjkf')
      System.out.println(concat)
      await settings.textSearchHelpWindow.verifyTheTextInGrid(concat)
      await settings.textSearchHelpWindow.clickExcelIcon()
      // objectIdentification.readPDF.savePDFfileFromUnTitleDocumentWindow()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // Automated by TesterName :- Vijay Date :-02/09/2022 Sprint:-Sprint 3
      // Quarter:-Q1 Module:- Settings
    });
  });

  test('ReleaseBrokenQ122_293131', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '293131', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormRefNo()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.ClickSaveNCloseButton(); // Action Updated
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormRefNoInGrid()
      await settings.qaForms.selectCheckBoxOfTheRowByFormRefNO()
      await settings.qaForms.clickManageRepository()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.selectAtRole()
      // qa.questionnarieRepository.selectAtActivityType();
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qa.questionnarieRepository.save()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.verifyAdditionSuccessfulBottomMessage()
      await qa.questionnarieRepository.saveNClose()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreenByScreenID('1383 - Activity Search')
      await home.module.switchToActivitySearch()
      await activity.activitySearch.ClickSearchLink()
      await activity.activitySearch.selectRowByAtSubjectInGrid()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.verifyQAFormsIsDisplayed()
      await activity.activityEntry.clickQAFormsTab()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.verifyAtStatusLabelBindsWithFormDetails()
      await qa.module.SwitchToQuestionDataEntry()
      // Regarding Job server
      // Our Automation DB doesn't have the Job server. So we can't run the script in Automation DB.
    });
  });

});

test.describe('EntryScreenSmokeScriptSettings', () => {
  test('EntryScreenSmokeScriptSettings_ActionEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'ActionEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Action search')
      await settings.module.switchToActionSearch()
      await settings.actionSearch.clickAddNewButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToActionEntry()
      await settings.actionEntry.enterAtActionNo()
      await settings.actionEntry.enterAtActionName()
      await settings.actionEntry.enterAtProcessSPName()
      await settings.actionEntry.enterInputParameterName()
      await settings.actionEntry.selectValueType()
      await settings.actionEntry.clickAddButton()
      await settings.actionEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToActionEntry()
      await settings.actionEntry.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Action Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings_CADStatusConfigEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'CADStatusConfigEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('CAD Status Config')
      await settings.module.switchToCADStatusConfig()
      await settings.cadStatusConfig.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToCADStatusConfigEntry()
      await settings.cadStatusConfigEntry.enterName()
      await settings.cadStatusConfigEntry.selectScreenType()
      await settings.cadStatusConfigEntry.clickMainTab()
      await settings.cadStatusConfigEntry.mainTab.clickAllStatusCheckBox()
      await settings.module.switchToCADStatusConfigEntry()
      await settings.cadStatusConfigEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToCADStatusConfigEntry()
      await settings.cadStatusConfigEntry.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('CAD Status Config Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings_CameraConfigEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'CameraConfigEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Camera Config')
      await settings.module.switchToCameraConfig()
      await settings.cameraConfig.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.enterAtName()
      await settings.cameraConfigEntry.enterAtDescription()
      await settings.cameraConfigEntry.selectAtCameraUse()
      await settings.cameraConfigEntry.selectAtCameraType()
      await settings.cameraConfigEntry.enterAtCameraIP()
      await settings.cameraConfigEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Camera Config Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings_CFSCodeSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'CFSCodeSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5011 - CFSCode Search')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.clickAddNewButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtCFSCode()
      await settings.sharedCodes.selectAtCFSType();//updated by ranjith
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('CFS Code')
    });
  });

  test('EntryScreenSmokeScriptSettings_ChargeSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'ChargeSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Charge')
      await settings.module.switchToCharge()
      await settings.chargeScreen.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtChargeCode()
      await settings.sharedCodes.selectAtChargeType()
      await settings.sharedCodes.enterDescriptionAsQualityAssurance()
      await settings.sharedCodes.enterAtRelatedCFSCode()
      //settings.sharedCodes.enterEffectiveDateAsFutureDate();
      await settings.sharedCodes.enterAtNIBRSCode()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('CFS Code')
    });
  });

  test('EntryScreenSmokeScriptSettings_ChargeDispositionsSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'ChargeDispositionsSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Charge Dispositions')
      await settings.module.switchToChargeDisposition()
      await settings.chargeDisposition.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterDipositionCode()
      await settings.sharedCodes.enterDescriptionAsQualityAssurance()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Charge Dispositions SharedCodes Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings_CodedSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'CodedSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterCodeIDAs9889()
      await settings.sharedCodes.enterDescriptionAsQualityAssurance()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Coded Shared Codes Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings_CodedMapDetailEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'CodedMapDetailEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded Map')
      await settings.module.switchToCodedMapScreen()
      await settings.codedMap.selectAtInterface()
      await settings.codedMap.clickAddNewButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToCodedMapDetail()
      await settings.codedMapDetail.verifyAtInterfaceDropDown()
      await settings.codedMapDetail.enterAtCodeType()
      await settings.codedMapDetail.clickAddNew()
      await settings.codedMapDetail.enterAtPopUpPhoenixValue()
      await settings.codedMapDetail.enterAtMapCodeValue()
      await settings.codedMapDetail.enterAtMapDescription()
      await settings.codedMapDetail.clickPopUpAddButton()
      await settings.codedMapDetail.verifyAtMapCodeValueInGrid()
      await settings.codedMapDetail.verifyUpdatedSuccessfullyBottomMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Coded Map Detail Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings_CodedDocHelpEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'CodedDocHelpEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.enterAtScreenID()
      await settings.customDocHelpEntry.enterAtDocumentTitle()
      await settings.customDocHelpEntry.enterAtLink()
      await settings.customDocHelpEntry.clickAdd()
      await settings.customDocHelpEntry.verifyAtDocumentTitleInGrid()
      await settings.customDocHelpEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.verifyAdditionSuccessfulMessage()
      //objectIdentification.smokeTest.clickOnEntryScreensTabs('Coded Doc Help Entry');
    });
  });

  test('EntryScreenSmokeScriptSettings_DispatchZoneEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'DispatchZoneEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Dispatch Zone')
      await settings.module.switchToDispatchZone()
      await settings.dispatchZoneScreen.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToDispatchZoneEntry()
      await settings.dispatchZone.enterAtZoneName()
      await settings.dispatchZone.enterAtDescription()
      await settings.dispatchZone.selectAtProduct()
      await settings.dispatchZone.enterAtPatrolArea()
      await settings.dispatchZone.clickAddButton()
      await settings.dispatchZone.clickSave()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.dispatchZone.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Dispatch Zone')
    });
  });

  test('EntryScreenSmokeScriptSettings_DispositionSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'DispositionSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Disposition')
      await settings.module.switchToDisposition()
      await settings.disposition.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtDisposition()
      await settings.sharedCodes.enterDescriptionAsQualityAssurance()
      await settings.sharedCodes.selectAtType()
      await settings.sharedCodes.clickCADTab()
      await settings.sharedCodes.clickCaseGereratedNoCheckBox()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Disposition Shared Codes Entry')
    });
  });

});

test.describe('EntryScreenSmokeScriptSettings1', () => {
  test('EntryScreenSmokeScriptSettings1_Distribution', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'Distribution', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.enterDistributionListName()
      await settings.distributionEntry.clickPFNOCheckBox()
      await settings.distributionEntry.enterPFNo()
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToDistributionEntry()
      // settings.distributionEntry.verifyAdditionSuccessfulMessage();.
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Disposition Shared Codes Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_DocumentCodeSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'DocumentCodeSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Document Codes')
      await settings.module.switchToDocumentCodes()
      await settings.documentCodes.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterDocumentType()
      await settings.sharedCodes.enterDescriptionAsQualityAssurance()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Document Codes Shared Codes Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_ExternalInterfaceEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'ExternalInterfaceEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('External Interface Srch')
      await settings.module.switchToExternalInterfaceSearch()
      System.out.println('After switch')
      await settings.externalInterfaceSearch.clickAddNew()
      System.out.println('after click add new')
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.enterInterface()
      await settings.externalInterfaceEntry.selectInterfaceType()
      await settings.externalInterfaceEntry.selectPrimeTrigger()
      await settings.externalInterfaceEntry.selectFileType()
      await settings.externalInterfaceEntry.enterXMLMasterFileAsAraCommissary()
      await settings.externalInterfaceEntry.enterField1()
      await settings.externalInterfaceEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('External Interface Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_FTPInterfaceEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'FTPInterfaceEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('FTP Interface Search')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.clickAddButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.selectInterface()
      await settings.fTPInterfaceEntry.enterFolderPath()
      await settings.fTPInterfaceEntry.selectLocationType()
      await settings.fTPInterfaceEntry.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToFTPInterfaceEntry()
      // settings.fTPInterfaceEntry.verifyAdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('FTP Interface Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_JailCellEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'JailCellEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Jail Cell')
      await settings.module.switchToJailCell()
      await settings.jailCell.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToJailCellEntry()
      await settings.jailCellEntry.enterCellNo()
      await settings.jailCellEntry.selectCellType()
      await settings.jailCellEntry.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToJailCellEntry()
      await settings.jailCellEntry.verifyFooterStatusMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Jail Cell Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_JobEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'JobEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName()
      await settings.jobEntry.selectAtJobType()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.tabStartDate()
      await settings.jobEntry.enterEndDateAsFutureDate()
      await settings.jobEntry.enterEveryMinutesAs10()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToJobEntry()
      // settings.jobEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Job Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_JurisEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'JurisEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Juris')
      await settings.module.switchToJurisEntry()
      await settings.juris.saveButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToJurisEntry()
      await settings.juris.verifyUpdateSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Juris Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_NotificationFormatEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'NotificationFormatEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Notification Format')
      await settings.module.switchToNotificationFormat()
      await settings.notificationFormat.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToNotificationFormatEntry()
      await settings.notificationFormatEntry.selectNotifyType()
      await settings.notificationFormatEntry.enterDataMasterAsCallSummary()
      await settings.notificationFormatEntry.enterRecipientMasterAsCallSummary()
      await settings.notificationFormatEntry.enterFormatterFileName()
      await settings.notificationFormatEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToNotificationFormatEntry()
      await settings.notificationFormatEntry.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Notification Format Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_OffenseCodesSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'OffenseCodesSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Offense Codes')
      await settings.module.switchToOffenseCodes()
      // objectIdentification.manualIdentify.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtOffenseCode()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Notification Format Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_PropertyNCICCodeSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'PropertyNCICCodeSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Property NCIC Code')
      await settings.module.switchToPropertyNCICCode()
      // objectIdentification.manualIdentify.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.selectPropertyCategory()
      await settings.sharedCodes.enterPropertyCode()
      await settings.sharedCodes.enterPropertyCode()
      await settings.sharedCodes.enterDescriptionAsQualityAssurance()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('PropertyNCIC Code Shared Codes Entry')
    });
  });

  test('EntryScreenSmokeScriptSettings1_QAFormEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'QAFormEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickPhoenixFormRadioButton()
      await qa.qAFormEntry.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('QA Form Entry')
      await qa.module.SwitchToQAFormEntry()
      // qa.qAFormEntry.ClickSaveNCloseButton();
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.clickManageSections()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await qa.module.SwitchToQAFormSectionEntry()
      await qa.qAFormSection.EnterAtSectionName()
      await qa.qAFormSection.EnterAtSort()
      await qa.qAFormSection.ClickAddButton()
      await qa.qAFormSection.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await qa.module.SwitchToQAFormSectionEntry()
      await qa.qAFormSection.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('QA Form Entry')
      await qa.qAFormSection.CloseScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.clickManageQuestions()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectSection()
      await qa.questionMaster.EnterQuestion()
      await qa.questionMaster.SelectAtAnswerType()
      await qa.questionMaster.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Question Master')
      await qa.questionMaster.Close()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickSaveButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await qa.mManageQuestions.verifyUpdateSuccessfulBottomMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Manage Questions')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.clickManageRepository()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.selectAtRole()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.verifyAdditionSuccessfulBottomMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Questionnaire Repository')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.clickCopyToSameJuris()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('QA Form Entry')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.clickCopyToMultiJuris()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await qa.module.SwitchToQAFormEntry()
      // qa.qAFormEntry.verifyAdditionSuccessfulBottomMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('QA Form Entry')
    });
  });

});

test.describe('EntryScreenSmokeScriptSettingsII', () => {
  test('EntryScreenSmokeScriptSettingsII_QueryConfigEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'QueryConfigEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Query Config')
      await settings.module.switchToQueryConfig()
      // objectIdentification.manualIdentify.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToQueryMasterEntry()
      await settings.queryMasterEntry.enterAtQueryNo()
      await settings.queryMasterEntry.enterAtQueryName()
      await settings.queryMasterEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToQueryMasterEntry()
      await settings.queryMasterEntry.verifyAdditionSuccessfulBottomMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Query Master')
      await settings.module.switchToQueryConfig()
      await settings.queryConfig.enterAtQueryNo()
      await settings.queryConfig.clickSearch()
      await settings.queryConfig.selectCheckBoxInGrid()
      await settings.queryConfig.clickManageSections()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToManageSectionEntry()
      await settings.manageSectionEntry.enterAtSectionName()
      await settings.manageSectionEntry.clickAddButton()
      await settings.manageSectionEntry.clickSave()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToManageSectionEntry()
      // settings.manageSectionEntry.verifyAdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Manage Section Entry')
      await settings.module.switchToQueryConfig()
      await settings.queryConfig.clickSearch()
      await settings.queryConfig.selectCheckBoxInGrid()
      await settings.queryConfig.selectCheckBoxInGrid(); // added
      await settings.queryConfig.clickManageTables()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToManageTableEntry()
      await settings.managetableEntry.enterAtTableName()
      await settings.managetableEntry.clickAddButton()
      await settings.managetableEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToManageTableEntry()
      // settings.managetableEntry.verifyAdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Manage Table Entry')
      await settings.module.switchToQueryConfig()
      await settings.queryConfig.clickSearch()
      await settings.queryConfig.selectCheckBoxInGrid()
      await settings.queryConfig.clickManageJoins()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToJoinsLinkingTablesEntry()
      await settings.joinsLinkingTablesEntry.enterAtMainTableName()
      await popupPage.kPICodedLookup.randomKPIHelpSelect()
      await settings.module.switchToJoinsLinkingTablesEntry()
      await settings.joinsLinkingTablesEntry.enterAtLinkTableName()
      await popupPage.kPICodedLookup.randomKPIHelpSelect()
      await settings.module.switchToJoinsLinkingTablesEntry()
      await settings.joinsLinkingTablesEntry.selectJoinType()
      await settings.joinsLinkingTablesEntry.enterAtMainKey1()
      await popupPage.kPICodedLookup.randomKPIHelpSelect(); //
      await settings.module.switchToJoinsLinkingTablesEntry();//
      await settings.joinsLinkingTablesEntry.enterAtLinkKey1()
      await popupPage.kPICodedLookup.randomKPIHelpSelect(); //
      await settings.module.switchToJoinsLinkingTablesEntry(); //
      await settings.joinsLinkingTablesEntry.clickAddButton()
      await settings.joinsLinkingTablesEntry.clickSave()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToJoinsLinkingTablesEntry()
      // settings.joinsLinkingTablesEntry.verifyAdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('joins Entry')
      await settings.module.switchToQueryConfig()
      await settings.queryConfig.clickSearch()
      await settings.queryConfig.selectCheckBoxInGrid()
      await settings.queryConfig.selectCheckBoxInGrid(); // added
      await settings.queryConfig.clickManageRepository()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToQueryRepositoryEntry()
      await settings.queryRepositoryEntry.enterAtRepository()
      await settings.queryRepositoryEntry.clickAddButton()
      await settings.queryRepositoryEntry.clickSave()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToQueryRepositoryEntry()
      // settings.queryRepositoryEntry.verifyAdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Query Repository')
      // Copy screen
      //		settings.switchToQueryConfig();
      //		settings.queryConfig.clickSearch();
      //		settings.queryConfig.selectCheckBoxInGrid();
      //		settings.queryConfig.clickCopy();
      //		popup.acknowledge.okIfWindowExist('AfterClick AddNew');
      //		settings.switchToQueryMasterEntry();
      //		settings.queryMasterEntry.enterAtQueryNo();
      //		settings.queryMasterEntry.enterAtMainTableName();
      //		popup.kPICodedLookup.randomKPIHelpSelect();
      //		settings.switchToQueryMasterEntry();
      //		settings.queryMasterEntry.enterAtKey1();
      //		popup.kPICodedLookup.randomKPIHelpSelect();
      //		settings.switchToQueryMasterEntry();
      //		settings.queryMasterEntry.save();
      //		popup.acknowledge.okIfWindowExist('AfterClick SaveScreen');
      //		settings.switchToQueryMasterEntry();
      //		//settings.queryMasterEntry.verifyAdditionSuccessfulBottomMessage();
      //		objectIdentification.smokeTest.clickOnEntryScreensTabs('Query Master');
      //		ExtentReport.getScreenShotOnRequest(true);
    });
  });

  test('EntryScreenSmokeScriptSettingsII_SubCategoryMappingEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'SubCategoryMappingEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Quick Activity Config')
      await settings.module.switchToQuickActivityConfig()
      await settings.quickActivityConfig.clickSubCategory()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSubCategoryMappingEntry()
      await settings.subCategoryMapping.enterCategory()
      await settings.subCategoryMapping.enterSubCategory()
      await settings.subCategoryMapping.enterSeqNo()
      await settings.subCategoryMapping.clickAddButton()
      await settings.subCategoryMapping.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSubCategoryMappingEntry()
      // settings.subCategoryMapping.verifyAdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('SubCategory Mapping Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_ReleaseCodesSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'ReleaseCodesSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Release Codes')
      await settings.module.switchToReleaseCodes()
      // objectIdentification.manualIdentify.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterStatusCode()
      await settings.sharedCodes.enterDescriptionAsQualityAssurance()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('SubCategory Mapping Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_ReportRepoSharedCodesEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'ReportRepoSharedCodesEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Report Repository')
      await settings.module.switchToReportRepository()
      await settings.reportRepository.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtScreenID()
      await settings.sharedCodes.selectAtReportType()
      await settings.sharedCodes.selectAtScreenCategory()
      await settings.sharedCodes.enterAtFormName()
      await settings.sharedCodes.enterAtFileName()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Report RepositoryShared codes Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_RoleEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'RoleEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtRoleName()
      await settings.rolesEntry.enterAtRoleDescription()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.clickSaveButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyAdditionSuccessfulBottomMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Role Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_StorageLocationEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'StorageLocationEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      inventory.SwitchToStorageLocation()
      inventory.storageLocation.clickAddNewButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      inventory.SwitchToStorageLocationEntry()
      inventory.storageLocationEntry.enterDescription()
      inventory.storageLocationEntry.selectLocationUseFor()
      inventory.storageLocationEntry.Save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      inventory.storageLocationEntry.verifyAdditionSuccessfulBottomMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Storage Location Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_TerminalEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'TerminalEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickAddNewButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.enterAtTerminalName()
      await settings.terminalEntry.clickIPAddressTab()
      await settings.terminalEntry.iPAddressTab.enterAtIPAddress()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.verify1002AdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Terminal Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_TextMgmt', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'TextMgmt', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.enterTextName()
      await settings.textMgmt.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('TextMgmt Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_TextMgmt', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'TextMgmt', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text (F)')
      await settings.module.switchToText()
      await settings.textScreen.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.enterTextName()
      await settings.textMgmt.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('TextMgmtF Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_UnitEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'UnitEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5031 - Unit Search')
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickAddnew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.enterAtUnit();//updated by ranjith
      await settings.unitEntry.selectAtDispatchUnitType()
      await settings.unitEntry.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToUnitEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      //objectIdentification.smokeTest.clickOnEntryScreensTabs('Unit Entry');
    });
  });

  test('EntryScreenSmokeScriptSettingsII_UserQueryEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'UserQueryEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('User query search')
      await settings.module.switchToUserQuerySearch()
      // objectIdentification.manualIdentify.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToCreateUserQuery()
      await settings.createUserQuery.enterUseryQueryName()
      await settings.createUserQuery.enterDescription()
      await settings.createUserQuery.clickMasterQueryTab()
      await settings.createUserQuery.masterQueryTab.enterMasterQueryName()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.closeScreen()
      await settings.module.switchToCreateUserQuery()
      await settings.createUserQuery.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToCreateUserQuery()
      await settings.createUserQuery.verify1002AdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Create User Query Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_VehicleMakeModelEntry', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'VehicleMakeModelEntry', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Vehicle Make Model')
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtMake()
      await settings.sharedCodes.enterAtModelCode()
      await settings.sharedCodes.enterAtModelDescription()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.saveScreen()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Vehicle Make Model Entry')
    });
  });

  test('EntryScreenSmokeScriptSettingsII_XMLExporterMaster', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, 'XMLExporterMaster', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('XML Export Config')
      await settings.module.switchToXMLExportConfig()
      await settings.xmlExportConfig.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToXMLExporterMaster()
      await settings.xmlExporterMaster.enterAtMasterFile()
      await settings.xmlExporterMaster.enterAtRootNodeName()
      await settings.xmlExporterMaster.enterRootTagNamespace()
      await settings.xmlExporterMaster.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToXMLExporterMaster()
      await settings.xmlExporterMaster.verify1002AdditionSuccessfulMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('XMLExporterMaster Entry')
      await settings.module.switchToXMLExportConfig()
      await settings.xmlExportConfig.enterAtMasterFile()
      await settings.xmlExportConfig.clickSearch()
      await settings.xmlExportConfig.selectGridChexkBox()
      await settings.xmlExportConfig.clickManageParentNodesLink()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToXMLExporterParentNodes()
      await settings.xmlExporterParentNodes.enterAtNodeName()
      await settings.xmlExporterParentNodes.enterAtParentNode()
      await popupPage.kPICodedLookup.randomKPIHelpSelect()
      await settings.module.switchToXMLExporterParentNodes()
      await settings.xmlExporterParentNodes.clickAddButton()
      await settings.xmlExporterParentNodes.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToXMLExporterParentNodes()
      // settings.xmlExporterParentNodes.verify1002AdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Manage Parent Nodes Entry')
      await settings.module.switchToXMLExportConfig()
      await settings.xmlExportConfig.clickManageDataTablesLink()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToXMLExporterDataTable()
      await settings.xmlExporterDataTable.enterAtTableName()
      await settings.xmlExporterDataTable.enterAtNodeName()
      await popupPage.kPICodedLookup.randomKPIHelpSelect(); // added
      await settings.module.switchToXMLExporterDataTable(); // added
      await settings.xmlExporterDataTable.enterComplexQuery()
      await settings.xmlExporterDataTable.clickAddButton()
      await settings.xmlExporterDataTable.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToXMLExporterDataTable()
      // settings.xmlExporterDataTable.verify1002AdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Manage Data Table Entry')
      await settings.module.switchToXMLExportConfig()
      await settings.xmlExportConfig.clickManageWhereClauseLink()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToXMLExporterWhereClause()
      await settings.xmlExporterWhereClause.enterAtTable()
      await popupPage.kPICodedLookup.randomKPIHelpSelect()
      await settings.module.switchToXMLExporterWhereClause()
      await settings.xmlExporterWhereClause.enterAtWhereField()
      await settings.xmlExporterWhereClause.clickAddButton()
      await settings.xmlExporterWhereClause.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToXMLExporterWhereClause()
      // settings.xmlExporterWhereClause.verify1002AdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Manage Where Clause Entry')
      await settings.module.switchToXMLExportConfig()
      await settings.xmlExportConfig.clickManageDisplayFieldsLink()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToXMLExporterTableDisplay()
      await settings.xmlExporterTableDisplay.enterAtXMLTagName()
      await settings.xmlExporterTableDisplay.enterAtTable()
      await popupPage.kPICodedLookup.randomKPIHelpSelect()
      await settings.module.switchToXMLExporterTableDisplay()
      await settings.xmlExporterTableDisplay.enterAtDataField()
      await settings.xmlExporterTableDisplay.clickAddButton()
      await settings.xmlExporterTableDisplay.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await settings.module.switchToXMLExporterTableDisplay()
      // settings.xmlExporterTableDisplay.verify1002AdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Manage Display Fields Entry')
      await settings.module.switchToXMLExportConfig()
      await settings.xmlExportConfig.clickManageStaticNodesLink()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew')
      await settings.module.switchToXMLExporterStaticNode()
      await settings.xmlExporterStaticNode.enterAtNodeName()
      await settings.xmlExporterStaticNode.enterParentNode()
      await popupPage.kPICodedLookup.randomKPIHelpSelect()
      await settings.module.switchToXMLExporterStaticNode()
      await settings.xmlExporterStaticNode.clickAddButton()
      await settings.xmlExporterStaticNode.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      // settings.xmlExporterStaticNode.verify1002AdditionSuccessfulMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Manage Static Nodes Entry')
      // Automated by:-Bavithra , Date :-11/16/2022 , Quarter:-4 , Sprint:-18 ,
      // Module:-Settings
      // Linked TestCaseID : 9145
    });
  });

});

test.describe('2022Q4Enhancement', () => {
  test('2022Q4Enhancement_145794', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '145794', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      //lines added for testcase 48770 start
      await settings.textScreen.enterTextName();//created by ranjith
      await settings.textScreen.enterSearchWords();//created by ranjith
      await settings.textScreen.enterDescription();//created by ranjith
      await settings.textScreen.verifyTextNameAcceptMoreThan500Characters();//created by ranjith
      await settings.textScreen.verifySearchWordsAcceptMoreThan500Characters();//created by ranjith
      await settings.textScreen.verifyDescriptionAcceptMoreThan500Characters();//created by ranjith
      await settings.textScreen.clearTextName();//created by ranjith
      await settings.textScreen.clearSearchWords();//created by ranjith
      await settings.textScreen.clearDescription();//created by ranjith
      //lines added for testcase 48770 end
      await settings.textScreen.clickSearch()
      await settings.textScreen.selectTextNameInGrid()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.selectTemplate()
      await settings.textMgmt.verifyTextNameColor()
      await settings.textMgmt.close()
      //lines added for testcase 48771 starts
      await settings.module.switchToText()
      await settings.textScreen.clickAddNew()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.enterTextName()
      await settings.textMgmt.saveAndClose();//created by ranjith
      // objectIdentification.windowHandle.verifyWindowNotExists('Text Mgmt')
      //lines added for testcase 48771 end
      await settings.module.switchToText()
      await settings.textScreen.clickAddNew()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.enterAtTextName()
      await settings.textMgmt.selectMultipleTemplate()
      await settings.textMgmt.verifyTextNameColor()
      await settings.textMgmt.save()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.verifyAdditionSuccessfulMessage()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.enterAtTextName()
      await settings.textMgmt.save()
      await settings.textMgmt.verifyUpdateSuccessFullMessage()
      await settings.module.switchToText()
      await settings.textScreen.enterAtTextName()
      await settings.textScreen.clickSearch()
      await settings.textScreen.verifyAtTextName(0)
      // Automated By : Stalin
      // Year : 2023Â  Quarter: 01Â  Sprint: 03
      // Type of Test case - Defect
    });
  });

  test('2022Q4Enhancement_48810', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '48810', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      // objectIdentification.windowHandle.windowExist('QA Form Entry')
      await settings.module.switchToQAFormsHelpWindow()
      await settings.qaForms.verifySampleCheckboxIsDisabled();// created by ranjith
      await settings.qaForms.closeScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyRecordsListed();// created by ranjith
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      // objectIdentification.windowHandle.windowExist('QA Form Entry')
      await settings.module.switchToQAFormsHelpWindow()
      await settings.qaForms.verifySampleCheckboxIsDisabled();// created by ranjith
      await settings.qaForms.closeScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.clearFormName();// created by ranjith
      await settings.qaForms.clickSampleCheckbox();// created by ranjith
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      await settings.module.switchToQAFormsHelpWindow()
      await settings.qaForms.verifySampleCheckboxIsChecked();// created by ranjith
      await settings.qaForms.verifySaveButtonDisabled();// created by ranjith
      await settings.qaForms.verifySaveAndCloseButtonDisabled();// created by ranjith
      await settings.qaForms.verifySaveAndNewButtonDisabled()
      await settings.qaForms.verifyDeleteButtonDisabled()
      await settings.qaForms.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.ClickLogginUserLink()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.switchToPreferenceTab()
      personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox()
      personnel.personnelEntry.saveNClose()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      // objectIdentification.windowHandle.windowExist('QA Form Entry')
      await settings.module.switchToQAFormsHelpWindow()
      await settings.qaForms.verifySampleCheckboxIsEnabled();// created by ranjith
      await settings.qaForms.closeScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyRecordsListed();// created by ranjith
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      // objectIdentification.windowHandle.windowExist('QA Form Entry')
      await settings.module.switchToQAFormsHelpWindow()
      await settings.qaForms.verifySampleCheckboxIsEnabled()
      await settings.qaForms.closeScreen()
      await settings.module.switchToQAForms()
      //Automated by: Ranjith Kumar V K
      //Date: 01/17/2025
      //Type of testcase: Defect
      //Quarter: 1 Sprint: 1 2025
      //Updated by: Ranjith Kumar V K
      //Date: 01/21/2025
      //Type of testcase: Defect
      //Quarter: 1 Sprint: 1 2025
      //TC ID: 46300 CRM#174426
    });
  });

  test('2022Q4Enhancement_57951', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '57951', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('5031')
      await settings.module.switchToUnits()
      await settings.unitsScreen.verifyOfficer2ColumnDisplayed()
      await settings.unitsScreen.enterAtUnit()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.selectRowAtUnitInGrid()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.verifyAtPreAssignedOfficer1()
      await settings.unitEntry.verifyAtPreAssignedOfficer2()
      await settings.unitEntry.saveScreen()
      await settings.unitEntry.close()
      await settings.module.switchToUnits()
      await settings.unitsScreen.verifyAtOfficerInGrid()
      await settings.unitsScreen.verifyAtOfficer2InGrid()
      await settings.module.switchToUnits()
      //Automated by  :-Kiran  Date :-05/26/2025  Quarter:-2  Sprint-5  Module:-settings  Type:-Product Backlog SetUp:-1.118
    });
  });

  test('2022Q4Enhancement_60335', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60335', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('1276')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickAddNew()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName()
      await settings.jobEntry.selectAtJobType()
      await settings.jobEntry.verifyInterfaceDropdownIsDisplayed()
      await settings.jobEntry.selectAtInterface()
      await settings.jobEntry.tabStartDate()
      await settings.jobEntry.enterEndDateAsFutureDate()
      await settings.jobEntry.clickReCalculateCheckbox()
      await settings.jobEntry.enterEveryMinutesAs10()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveScreen()
      await settings.jobEntry.verifyAdditionSuccessfulBottomMessage()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveNClose()
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickAddNew()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName()
      await settings.jobEntry.selectAtJobType()
      await settings.jobEntry.verifyInterfaceDropdownIsDisplayed()
      await settings.jobEntry.selectAtInterface()
      await settings.jobEntry.verify1005ErrorInterfaceNameBodyCameraInterfaceAlreadyExistsAcknowledgePopup();//updated
      await settings.module.switchToJobEntry()
      //Automated By : - Sarathkumar L on 06/17/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('2022Q4Enhancement_69830', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '69830', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await settings.sharedCodes.clickCodedCancelButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtCodeValue()
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      admission.switchToInmateSearch()
      admission.inmateSearchScreen.SelectAtBookingStatus()
      admission.inmateSearchScreen.EnterAtSPNNO();// enter SPN and select
      admission.inmateSearchScreen.Search()
      admission.inmateSearchScreen.selectAtSPNInGrid(BaseData.GetAdmissionModuleValue('SPNNo'))
      admission.switchToAdmissionEntry()
      admission.admissionEntry.NavigateToChargeTab()
      admission.admissionEntry.chargeTab.clickSentenceIcon()
      admission.switchToSentenceEntry()
      admission.sentenceEntryscreen.verifyAtDetentionType()
      admission.switchToSentenceEntry()
      admission.sentenceEntryscreen.closeScreen()
      admission.switchToAdmissionEntry()
      admission.admissionEntry.CloseAdmissionEntry()
      //for update
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription()
      await settings.sharedCodes.clearPopUpDescription()
      await settings.sharedCodes.enterAtPopUpDescription1()
      await settings.sharedCodes.clickUpdateButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtCodeValueDescription1()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      admission.switchToInmateSearch()
      admission.inmateSearchScreen.clickBackButton()
      admission.inmateSearchScreen.SelectAtBookingStatus()
      admission.inmateSearchScreen.clearSPN()
      admission.inmateSearchScreen.EnterAtSPNNO();// enter SPN and select
      admission.inmateSearchScreen.Search()
      admission.inmateSearchScreen.selectAtSPNInGrid(BaseData.GetAdmissionModuleValue('SPNNo'))
      admission.switchToAdmissionEntry()
      admission.admissionEntry.NavigateToChargeTab()
      admission.admissionEntry.chargeTab.clickSentenceIcon()
      admission.switchToSentenceEntry()
      admission.sentenceEntryscreen.verifyAtDetentionType(1)
      admission.switchToSentenceEntry()
      admission.sentenceEntryscreen.closeScreen()
      admission.switchToAdmissionEntry()
      admission.admissionEntry.CloseAdmissionEntry()
      // for delete
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription(1)
      await settings.sharedCodes.deleteInPopup()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtCodeValueNotInGrid()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      admission.switchToInmateSearch()
      admission.inmateSearchScreen.clickBackButton()
      admission.inmateSearchScreen.SelectAtBookingStatus()
      admission.inmateSearchScreen.clearSPN()
      admission.inmateSearchScreen.EnterAtSPNNO();// enter SPN and select
      admission.inmateSearchScreen.Search()
      admission.inmateSearchScreen.selectAtSPNInGrid(BaseData.GetAdmissionModuleValue('SPNNo'))
      admission.switchToAdmissionEntry()
      admission.admissionEntry.NavigateToChargeTab()
      admission.admissionEntry.chargeTab.clickSentenceIcon()
      admission.switchToSentenceEntry()
      admission.sentenceEntryscreen.verifyAtDetentionTypeNotListed(1)
      admission.switchToSentenceEntry()
      //Automated By : - chandrasekar.v on 10/21/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('2022Q4Enhancement_70527', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70527', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.setAtSystemparameter6704AsTrue()
      await loaderPage.navigateToModule('Help Desk')
      await loaderPage.navigateToScreen('Internal Ticket Search')
      helpdesk.switchToInternalTicketSearchScreen()
      helpdesk.internalTicketSearch.clickSearchButton()
      helpdesk.internalTicketSearch.selectRandomRow()
      helpdesk.switchToInternalTicketEntry()
      helpdesk.internalTicketEntry.switchToActivitiesTab()
      helpdesk.internalTicketEntry.activitiesTab.verifyShowSystemEntriesCheckBoxIsChecked()
      helpdesk.switchToInternalTicketEntry()
      helpdesk.internalTicketEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.setAtSystemparameter6704AsFalse()
      await settings.module.switchToSystemParamter()
      //Automated By : - chandrasekar.v on 10/28/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('2022Q4Enhancement_74108', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74108', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectRowAtRoleName()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickSettingsEditPermission()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.save()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.CloseScreen()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.enterAtPF()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRowAtPFCode()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickQAFormsTab()
      personnel.personnelEntry.NavigateToQAFormsTab1()
      personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.saveButton()
      await qa.questionDataEntry.verifyDeleteIconIsEnabled()
      //Automated By : - chandrasekar.v on 12/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
      //Verify the Individual Phoenix forms Delete option works if QA Form is locked
    });
  });

});

test.describe('SettingsFunctional2', () => {
  test('SettingsFunctional2_11053', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '11053', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickRecordEditPermissionButton()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.save();//updated
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.logoutRms2026()
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.enterAtLoginUserName()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRowAtPFCode()
      //		personnel.switchToPersonnelEntry();
      //		personnel.personnelEntry.verifyAccessDeniedPopupArises();
      //		personnel.personnelEntry.verifyAccessDeniedPopupArises();
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickQAFormsTab()
      personnel.personnelEntry.NavigateToQAFormsTab1()
      personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      personnel.personnelEntry.personnelEntryQAFormsTab.clickFillForm()
      personnel.personnelEntry.verifyAccessDeniedPopupArises()
      personnel.switchToPersonnelEntry()
      // Automated By : - Manikandan
      // Year :-Â 2023 :Â Quarter 2 :Â  Sprint 7
    });
  });

  test('SettingsFunctional2_10981', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '10981', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Repository')
      await settings.module.switchToRepository()
      await settings.repository.enterAtRepositoryID()
      await settings.repository.clickSearch()
      await settings.repository.selectAtRepositoryIDInGrid()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.enterAtCustomName();//updated
      await settings.repositoryEntry.saveScreen()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.verifyUpdateSuccessFullMessage()
      await settings.repositoryEntry.closeScreen()
      await settings.module.switchToRepository()
      await settings.repository.clickSearch()
      await settings.repository.verifyAtCustomNameInGrid()
      await settings.repository.selectAtRepositoryIDInGrid()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.VerifyAtCustomName()
      await settings.module.switchToRepositoryEntry()
      // Automated By : - chandrasekar.v
      // Sprint :-Â 2023 :Â Quarter 2 :Â  Sprint 9
    });
  });

  test('SettingsFunctional2_11944', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '11944', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await home.forms.clickFormsButton()
      await home.forms.VerifyAddNewOptionIsEnable()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearchButton()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickRecordEditPermissionButton()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.UnCheckSelectAllCheckBox()
      await settings.rolesEntry.clickSaveButton()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await loaderPage.logout()
      await loginPage.loginScreen.logonUsingTestContext()
      await home.forms.clickFormsButton()
      await home.forms.verifyViewFormDateIsEnable()
      await home.forms.VerifyAddNewOptionIsDisable()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearchButton()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickRecordEditPermissionButton()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.clickSaveButton()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      // objectIdentification.windowHandle.switchToMainWindow()
      // Automated by KIRAN :- Date :-06/15/2023 Quarter:-2 Sprint:-11 Module:-Settings
    });
  });

  test('SettingsFunctional2_11488', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '11488', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtDescription()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAtCodeValueDescription()
      await settings.sharedCodes.clickPopupInactiveCheckBox()
      await settings.sharedCodes.clickCodeAddButton()
      //settings.sharedCodes.verifyUpdateSuccessfulMessage();
      await settings.sharedCodes.clickInactiveCheckBox()
      await settings.sharedCodes.clickSearchButton()
      await settings.sharedCodes.verifyInactiveCheckboxChecked()
      await settings.sharedCodes.verifyAtRowIsInActiveByDescription()
      // Automated By : - Manikandan.k
      // Sprint :-Â 2023 :Â Quarter 2 :Â  Sprint 11
    });
  });

  test('SettingsFunctional2_12925', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '12925', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Vehicle Make Model')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtMake()
      await settings.sharedCodes.enterAtModelCode()
      await settings.sharedCodes.enterAtModelDescription()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.clickPrintIcon()
      await settings.sharedCodes.verifySaveTheEntryAndProceedAcknowledgePopup()
      await settings.module.switchToSharedCodes()
      //Automated By : - Abinaya M on 06/27/2023
      //Sprint :-Â  :Â Quarter  2 :Â  Sprint 12
      //Type of Test case : - Defect
    });
  });

  test('SettingsFunctional2_11564', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '11564', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.clickLoginUserProfileIcon2026();//created
      await loaderPage.clickMyPersonnelFileLink();//created
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.switchToPreferenceTab()
      personnel.personnelEntry.personnelEntryPreferencesTab.selectAtDefaultJuris()
      personnel.personnelEntry.save()
      personnel.personnelEntry.verifyUpdateSuccessfulStatusMessage()
      personnel.personnelEntry.saveNClose()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterCurrentDate()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyBCNotListedUnderJuris()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.clickLoginUserProfileIcon2026();//created
      await loaderPage.clickMyPersonnelFileLink();//created
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.switchToPreferenceTab()
      personnel.personnelEntry.personnelEntryPreferencesTab.selectAtDefaultJurisAsPX()
      personnel.personnelEntry.save()
      personnel.personnelEntry.verifyUpdateSuccessfulStatusMessage()
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      // objectIdentification.manualIdentify.reloadScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterCurrentDate()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyPXNotListedUnderJuris()
      //Automated By : - Manikandan.k on 07/10/2023
      //Sprint :-Â  :Â Quarter  3 :Â  Sprint 13
      //Type of Test case : - Defect
    });
  });

  test('SettingsFunctional2_13732', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '13732', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      //		loader.navigateToScreen('Jobs');
      await loaderPage.navigateToScreenByScreenIDWithContains('1276')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickPrintIcon();              //lines added Based on TC No - 69573
      await home.module.switchToSelectReport()
      // objectIdentification.windowHandle.windowExist('Select Report')
      await home.selectReport.verifyEditReportButtonIsDisplayed()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickAddNew()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName()
      await settings.jobEntry.selectAtJobType()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.tabStartDate()
      await settings.jobEntry.enterEndDateAsFutureDate()
      await settings.jobEntry.clickReCalculateCheckbox()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveScreen()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.verifyAdditionSuccessfulBottomMessage()
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx');//lines added Based on TC No - 69573
      //Automated By : - Sarathkumar L on 11/07/2023
      //Sprint :-Â  :Â Quarter  3 :Â  Sprint 13
      //Type of Test case : - Defect
    });
  });

  test('SettingsFunctional2_13854', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '13854', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.ClickFTPInterfaceButton()
      await settings.module.switchToFTPInterfaceSearchScreen()
      await settings.fTPInterfaceSearch.verifyAtInterfaceInGridTable(1)
      // Automated by :- Mohamed Absar A
      // Year :- 2023  Quarter :- 3  Sprint :- 13
      // Type of Test Case :- Functional     CRM#
    });
  });

  test('SettingsFunctional2_13856', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '13856', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.reloadCodedScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.selectAtSeries()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtSeriesInGrid()
      await settings.coded.reloadCodedScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.selectAtCodeCategory()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeCategoryInGrid()
      await settings.coded.reloadCodedScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtDescription()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtDescriptionInGrid(0)
      await settings.coded.reloadCodedScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.selectAtModule()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtModuleInGrid()
      await settings.coded.reloadCodedScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.selectAtMJCategory()
      await settings.coded.clickSearchButton()
      await settings.coded.selectRandomRowInGrid()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickEditCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtSelectedMJCategory()
      await settings.sharedCodes.saveNClose()
      await settings.module.switchToMaintainCodeValue()
      await settings.module.switchToCodedScreen()
      await settings.coded.reloadCodedScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeValue()
      await settings.coded.clickSearchButton()
      await settings.coded.selectRandomRowInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtCodeValue()
      await settings.sharedCodes.clickSearchButton()
      await settings.sharedCodes.verifyAtCodeValueinGrid(0)
      await settings.module.switchToSharedCodes()
      await settings.module.switchToCodedScreen()
      await settings.coded.reloadCodedScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeValueDescription()
      await settings.coded.clickSearchButton()
      await settings.coded.selectRandomRowInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtCodeValueDescription()
      await settings.sharedCodes.clickSearchButton()
      await settings.sharedCodes.verifyAtCodeValueDescription()
      await settings.closeActiveWindow()
      await settings.module.switchToCodedScreen()
      await settings.coded.clickAddNew()
      await settings.module.switchToSharedCodes()
      //Automated By : - Abinaya M on 07/11/2023
      //Sprint :-Â  :Â Quarter  2 :Â  Sprint 13
      //Type of Test case : - Functional
    });
  });

  test('SettingsFunctional2_13860', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '13860', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.clickRandomRowInGrid()
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.verifyCodeIsNotNull()
      await settings.storageLocationEntry.Save()
      await settings.storageLocationEntry.verifyUpdateSuccessfulStatusMessage()
      await settings.storageLocationEntry.CloseTheScreen()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.selectAtJuris()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtJurisInGrid();//
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.EnterAtCode()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtCodeInGrid()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.enterAtDescription()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.VerifyAtDescriptionInGrid()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.selectAtLocationUseFor()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtLocationUseForInGrid(2);//updated
      //		settings.storageLocation.reloadStorageLocation();
      //		settings.switchToStorageLocation();
      //		settings.storageLocation.clickLockerCheckBox();
      //		settings.storageLocation.clickSearchButton();
      //		settings.storageLocation.verifyLockerCheckedInGrid();
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.enterAtInactiveDescription()
      await settings.storageLocation.clickInactiveCheckBox()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyInactiveCheckedInGrid();//
      await settings.storageLocation.verifyRowInGrayColor();//updated
      await settings.storageLocation.clickAddNewButton()
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.EnterAtDescription()
      await settings.storageLocationEntry.SelectAtLocationUseFor()
      await settings.storageLocationEntry.Save()
      await settings.storageLocationEntry.verifyAdditionSuccessfulBottomMessage()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtLocationUseForBasedOnDescription();//updated
      //Automated By : - Abinaya M on 11/10/2023
      //Sprint :-Â  :Â Quarter 4  :Â  Sprint 21
      //Type of Test case : - Defect - CRM # :- 157833
    });
  });

});

test.describe('2023DefectTestCases', () => {
  test('2023DefectTestCases_18601', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '18601', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Juris')
      await settings.module.switchToJurisEntry()
      await settings.juris.selectAtJuris()
      await settings.juris.enterAtSortOrder()
      await settings.juris.saveButton()
      await settings.juris.saveNcloseButton()
      await loaderPage.navigateToScreen('Juris')
      await settings.module.switchToJurisEntry()
      await settings.juris.verifyJurisListedBasedOnSortOrder()
      await settings.juris.selectAtJuris()
      await settings.juris.clearSortOrder()
      await settings.juris.saveButton()
      await settings.juris.saveNcloseButton()
      await loaderPage.navigateToScreen('Juris')
      await settings.module.switchToJurisEntry()
      await settings.juris.verifyPxListedAsFirst()
      //Automated By : - Abinaya M on 11/10/2023
      //Sprint :-Â  :Â Quarter 4 :Â  Sprint 21
      //Type of Test case : - Defect - CRM # :-160780
    });
  });

  test('2023DefectTestCases_18630', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '18630', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormRefNo()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickPDFRadioButton()
      await qa.qAFormEntry.selectPdfFile()
      await qa.qAFormEntry.verify6071LargerFilePopup()
      await qa.qAFormEntry.clickSharedCheckBox()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.ClickSaveNCloseButton()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectJurisAsBlank()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormRefNoInGrid()
      //shared QA
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormRefNo1()
      await qa.qAFormEntry.EnterAtFormName1()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickPDFRadioButton()
      await qa.qAFormEntry.selectPdfFile()
      await qa.qAFormEntry.verify6071LargerFilePopup()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.ClickSaveNCloseButton()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectJurisAsBlank()
      await settings.qaForms.enterAtFormNameEdit1()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormRefNo1InGrid()
      // Automated by KIRAN :- Date :-11/10/2023  Quarter:-4 Sprint:-21 Module:-Records
    });
  });

  test('2023DefectTestCases_18604', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '18604', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtDescription()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtCodeValue()
      await settings.sharedCodes.clickSearchButton()
      await settings.sharedCodes.verifyNoRecordFoundAckwMsg()
      //Automated By : - Abinaya M on 11/22/2023
      //Sprint :-Â  :Â Quarter  4 :Â  Sprint 22
      //Type of Test case : - Defect - CRM # :-159928
    });
  });

  test('2023DefectTestCases_18773', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '18773', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('1276')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.clickAtJobNameInGrid()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.clickMinuteRadiobutton()
      await settings.jobEntry.enterEveryMinutesAs10()
      await settings.jobEntry.clickNotificationTab()
      await settings.jobEntry.notificationJobScreenTab.verifyBatchEmailEveryIsDisabled()
      // Automated by KIRAN :- Date :- 11/24/2023  Quarter:- 4  Sprint:-22  Module:-Settings  Type:Defect
    });
  });

  test('2023DefectTestCases_9152', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '9152', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.enterEffectiveDateAsCurrentDate()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await settings.sharedCodes.verifyAtCodeValue()
      //settings.sharedCodes.verifyUpdateSuccessfulMessage();
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID1()
      await settings.coded.clickSearchButton()
      await settings.coded.clickRowByAtCodeID1()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.enterAtPopUpCodeValue1()
      await settings.sharedCodes.enterAtPopUpDescription1()
      await settings.sharedCodes.selectAtPopUpCategory()
      await settings.sharedCodes.clickUpdateButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.enterAtPF()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRowAtPFCode()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.switchToWorkRecordTab()
      personnel.personnelEntry.personnelEntryWorkRecordTab.clickWorkHistoryTab()
      personnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.clickAddNew()
      personnel.switchToWorkHistoryEntry()
      personnel.workHistoryEntry.verifyAtCategory(true)
      personnel.workHistoryEntry.closeScreen()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.save()
      personnel.personnelEntry.verifyUpdateSuccessfulMessage()
      personnel.personnelEntry.saveNClose()
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickBackButton()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription()
      await settings.sharedCodes.enterExpireDateAsPastDate()
      await settings.sharedCodes.clearEffectiveDate()
      await settings.sharedCodes.clickUpdateButton()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.enterAtPF()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRowAtPFCode()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.switchToWorkRecordTab()
      personnel.personnelEntry.personnelEntryWorkRecordTab.clickWorkHistoryTab()
      personnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.clickAddNew()
      personnel.switchToWorkHistoryEntry()
      personnel.workHistoryEntry.verifyAtCategory(false)
      personnel.workHistoryEntry.closeScreen()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.save()
      personnel.personnelEntry.verifyUpdateSuccessfulMessage()
      personnel.personnelEntry.saveNClose()
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickBackButton()
      //Automated By : - Abinaya M on 12/27/2023
      //Sprint :-Â  :Â Quarter 4  :Â  Sprint 24
      //Type of Test case : - Defect - CRM # :-160138
      // TC - 44188 Added verification method by :-Sarath Date :-11/18/2024 Quarter:-4 Sprint:11 Module:-Settings
    });
  });

  test('2023DefectTestCases_18669', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '18669', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyDeleteIconIsDisabled()
      await qa.qAFormEntry.selectPDFRadioButton()
      await qa.qAFormEntry.verifyPDFRadioButtonIsSelected()
      await qa.qAFormEntry.clickReset()
      await qa.qAFormEntry.verifyPhoenixFormRadioButtonIsSelected()
      await qa.module.SwitchToQAFormEntry()
      // Automated By : - chandrasekar.v on 11/01/2024
      // Sprint :-Â  :Â Quarter - 1 :Â  Sprint - 1
      // Type of Test case : - Defect
    });
  });

  test('2023DefectTestCases_21714', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '21714', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Repository')
      await settings.module.switchToRepository()
      await settings.repository.clickSearch()
      await settings.repository.selectCheckBoxInGrid()
      await settings.repository.clickRepositoryLink()
      await settings.module.switchToRepositoryLink()
      await settings.repositoryLink.clickRepositoryIdLookUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtDefaultNameInGrid()
      await settings.module.switchToRepositoryLink()
      await settings.repositoryLink.clickAddButton()
      await settings.repositoryLink.Save()
      await settings.repositoryLink.verifyUpdateSuccessfulBottomMessage()
      await settings.repositoryLink.clickSaveNClose()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Repository Link')
      //Automated By : - Abinaya M on 01/23/2024
      //Sprint :-Â  :Â Quarter  1 :Â  Sprint  1
      //Type of Test case : - Defect - CRM # :-155876
    });
  });

  test('2023DefectTestCases_13864', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '13864', async () => {
      await loginPage.loginScreen.logon()
      //Verify the Distribution List bottom message is binding correctly
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickAddNew()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.enterAtDistributionListName()
      await settings.distributionEntry.enterAtPFNo(0)
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.saveScreen()
      await settings.distributionEntry.verifyAdditionSuccessfulMessage()
      await settings.distributionEntry.enterAtPFNo(1)
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.saveScreen()
      await settings.distributionEntry.verifyUpdateSuccessfulMessage()
      await settings.distributionEntry.saveAndCloseScreen()
      //Verify the Custom Doc Help Entry screen didn't throw any error
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickSearchButton()
      await settings.customHelp.selectRandomGrid()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.enterAtDocumentTitle()
      await settings.customDocHelpEntry.enterAtLink()
      await settings.customDocHelpEntry.clickAdd()
      await settings.customDocHelpEntry.clickPrintButton()
      await settings.customDocHelpEntry.verifyAtDocumentTitleInGridBasedOnFileName()
      // objectIdentification.windowHandle.windowExist('Select Report')
      await settings.module.switchToCustomDocHelpEntry()
      //Verify the search icon is working in Eernal Interface Screen
      await loaderPage.navigateToScreen('External Interface Srch')
      await settings.module.switchToExternalInterfaceSearch()
      await settings.externalInterfaceSearch.clickSearchButton()
      await settings.externalInterfaceSearch.selectRandomGridRow()
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.enterAtXMLMasterFile()
      await settings.externalInterfaceEntry.clickXMLMasterFileLookUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.verifyAtMasterFile()
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.enterAtXMLMasterFile()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.verifyAtMasterFile()
      //Automated By : - Bavithra on 1/18/2024
      //Â Quarter 1  :Â  Sprint 01
      //Type of Test case : - Defect
    });
  });

  test('2023DefectTestCases_21713', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '21713', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenIDWithContains('5011')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.enterAtCFSCode()
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.selectAtCFSCodeInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickSOPTab()
      await settings.cFSCodeEntry.cFSCodeSOPTab.SelectSOPTypeAsAllCondition()
      await settings.cFSCodeEntry.cFSCodeSOPTab.SelectTextName()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.clickSaveIcon()
      await settings.cFSCodeEntry.verifyUpdatedDataExistsAcknowledgeMsg()
      await settings.cFSCodeEntry.verifyCFSCodeEntryWindowExist()
      await settings.module.switchToCFSCodeEntry()
      //Automated By : - Bavithra on 05/20/2024
      //Â Quarter 2  :Â  Sprint 05
      //Type of Test case : - Defect
    });
  });

  test('2023DefectTestCases_29503', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '29503', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickAddNew()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.enterAtScreenID()
      await settings.customDocHelpEntry.enterAtDocumentTitle()
      await settings.customDocHelpEntry.enterAtLink()
      await settings.customDocHelpEntry.clickAdd()
      await settings.customDocHelpEntry.save()
      await settings.module.switchToCustomDocHelpEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful();//fail
      //Automated By : - chandrasekar.v on 16/07/2024
      //Sprint :-  : Quarter  3  :  Sprint 7
      //Type of Test case : - Defect 2024
    });
  });

});

test.describe('2024DefectTestCases', () => {
  test('2024DefectTestCases_29439', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '29439', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Query Config')
      await settings.module.switchToQueryConfig()
      // objectIdentification.manualIdentify.clickAddNew()
      await settings.module.switchToQueryMasterEntry()
      await settings.queryMasterEntry.enterAtQueryNo()
      await settings.queryMasterEntry.enterAtQueryName()
      await settings.queryMasterEntry.save()
      await settings.module.switchToQueryMasterEntry()
      await settings.queryMasterEntry.verifyAdditionSuccessfulBottomMessage()
      await settings.module.switchToQueryConfig()
      await settings.queryConfig.enterAtQueryNo()
      await settings.queryConfig.clickSearch()
      await settings.queryConfig.selectCheckBoxInGrid()
      await settings.queryConfig.clickManageTables()
      await settings.module.switchToManageTableEntry()
      await settings.managetableEntry.enterAtTableName()
      await settings.managetableEntry.clickAddButton()
      await settings.managetableEntry.save()
      await settings.module.switchToManageTableEntry()
      await settings.managetableEntry.verifyAdditionSuccessfulMessage()
      await settings.managetableEntry.verifyAtTableNameInGrid()
      await settings.managetableEntry.clickSelectionIcon()
      await settings.module.switchToSelectionsEntry()
      await settings.selectionsEntry.enterAtColumnName()
      await settings.selectionsEntry.clickAddButton()
      await settings.selectionsEntry.save()
      await settings.module.switchToSelectionsEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.selectionsEntry.closeScreen()
      await settings.module.switchToManageTableEntry()
      await settings.managetableEntry.closeScreen()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Query Config')
      await settings.module.switchToQueryConfig()
      await settings.queryConfig.enterAtQueryNo()
      await settings.queryConfig.clickSearch()
      await settings.queryConfig.selectCheckBoxInGrid()
      await settings.queryConfig.clickManageTables()
      await settings.module.switchToManageTableEntry()
      await settings.managetableEntry.save()
      await settings.module.switchToManageTableEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToManageTableEntry()
      await settings.managetableEntry.clickSelectionIcon()
      await settings.module.switchToSelectionsEntry()
      await settings.selectionsEntry.save()
      await settings.module.switchToSelectionsEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToSelectionsEntry()
      //Automated By : - manikandan.k  on 5/17/2024
      //Â Quarter 2  :Â  Sprint 05
      //Type of Test case : - Defect
    });
  });

  test('2024DefectTestCases_35504', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '35504', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('MFA Setting')
      await settings.mFASetting.verifyMFASettingsWindowExist()
      await settings.module.switchToMFASetting()
      await settings.mFASetting.selectAt2FAForApplication()
      await settings.mFASetting.selectAt2FAMethod()
      await settings.mFASetting.clickSaveButton()
      await settings.mFASetting.verifyDoYouWantToSaveAllConfirmPopup()
      await settings.mFASetting.clickCancelConfirmationPopup()
      await settings.mFASetting.verifyUpdateSuccessfulBottomMessageDoesNotAppear()
      await settings.mFASetting.clickResetIcon()
      await settings.mFASetting.verify2FAMethod(1)
      await settings.mFASetting.selectAt2FAForApplication()
      await settings.mFASetting.selectAt2FAMethod()
      await settings.mFASetting.clickSaveNClose()
      await settings.mFASetting.verifyDoYouWantToSaveAllConfirmPopup()
      await settings.mFASetting.clickCancelConfirmationPopup()
      await settings.mFASetting.clickResetIcon()
      await settings.mFASetting.verify2FAMethod(1)
      await settings.mFASetting.selectAt2FAForApplication()
      await settings.mFASetting.selectAt2FAMethod()
      await settings.mFASetting.save()
      await settings.mFASetting.verifyUpdateSuccessfulBottomMessage()
      await settings.mFASetting.verify2FAMethod(2)
      await settings.mFASetting.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      //Automated By : - Ranjith Kumar V K on 23/10/2024
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Enhancement 2024
    });
  });

  test('2024DefectTestCases_44146', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '44146', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormRefNo()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.ClickSaveNCloseButton()
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickDeleteIcon()
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormRefNo()
      await qa.qAFormEntry.verify3501FormIDAlreadyExistNotOccursAcknowledge()
      await qa.module.SwitchToQAFormEntry()
      //Automated by :-Sarath Date :-11/18/2024 Quarter:-4 Sprint:11 Module:-Settings
    });
  });

  test('2024DefectTestCases_43938', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '43938', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectAtCustomCategory(1)
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyNoRecordFoundAcknowledgeMessage()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickRefreshButton()
      await settings.sysParameter.selectAtCustomCategory(2)
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifySystemParameter1825IsTrue()
      await settings.module.switchToSystemParamter()
      //Automated by :-Sarath Date :-11/20/2024 Quarter:-4 Sprint:11 CRM: 174861 Module: Settings
    });
  });

  test('2024DefectTestCases_44240', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '44240', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickAddNew()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName()
      await settings.jobEntry.selectAtJobType()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.tabStartDate()
      await settings.jobEntry.enterEndDateAsFutureDate()
      await settings.jobEntry.clickReCalculateCheckbox()
      await settings.jobEntry.enterEveryMinutesAs10()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickSave()
      await settings.jobEntry.verify1005ErrorJobNameAckMsg()
      await settings.module.switchToJobEntry()
      //Automated by :-Sarath Date :-11/22/2024 Quarter:-4 Sprint:11 CRM: 158860  Module: Settings
    });
  });

  test('2024DefectTestCases_44090', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '44090', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.clickManageQuestions()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection()
      await qa.questionMaster.EnterAtQuestion()
      await qa.questionMaster.SelectAtAnswerType()
      await qa.questionMaster.clickResetIcon()
      await qa.questionMaster.verifyAtSectionAsDefault()
      await qa.questionMaster.verifyQuestionIsBlank()
      await qa.questionMaster.verifyAtAnswerTypeAsDefault()
      await qa.module.SwitchToQuestionMasterEntry()
      //Automated by :-Sarath Date :-11/27/2024 Quarter:-4 Sprint:11 CRM: 155535  Module: Settings
    });
  });

  test('2024DefectTestCases_44239', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '44239', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.clickSearch()
      await settings.textScreen.selectAtTextName()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.clickRelatedReportsTab()
      await home.textMgmt.relatedReportsTab.enterAtReportID()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.clickRelatedReportsTab()
      await home.textMgmt.relatedReportsTab.enterAtSeqNo()
      await home.textMgmt.relatedReportsTab.clickAddButton()
      await home.textMgmt.relatedReportsTab.verifyAtReportNameInGrid()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.clickPrintIcon()
      await home.textMgmt.verifyPleaseSaveAcknowledgeMsgPopup()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.SaveScreen()
      await settings.module.switchToTextMgmt()
      //Automated by :-Sarath Date :-12/16/2024 Quarter:-4 Sprint:12  Module: Settings
    });
  });

  test('2024DefectTestCases_43942', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '43942', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('MFA Setting')
      await settings.module.switchToMFASetting()
      await settings.mFASetting.verifyJurisDropdownIsDisplayed()
      await settings.mFASetting.selectAt2FAForApplication()
      await settings.mFASetting.selectAtEnable2FA()
      await settings.mFASetting.selectAt2FAMethod()
      await settings.mFASetting.selectAt2FAEnforcementFrequency()
      await settings.mFASetting.selectAtOTPEmailWhenPrimaryMethodIsNotAvailable()
      await settings.mFASetting.clickSaveButton();                              //Based on TC - 63471 Added this lines
      await popupPage.confirm.dismissPopup()
      await settings.mFASetting.verifyBottomMessageFieldIsEmpty()
      // objectIdentification.windowHandle.windowExist('MFA Setting')
      await settings.module.switchToMFASetting()
      await settings.mFASetting.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToMFASetting()
      await settings.mFASetting.selectAtJuris(0)
      await settings.mFASetting.verify2FAForApplication(1)
      await settings.mFASetting.verifyAtEnable2FA(1)
      await settings.mFASetting.verify2FAMethod(1)
      await settings.mFASetting.verifyAt2FAEnforcementFrequency(1)
      await settings.mFASetting.verifyAtOTPEmail(1)
      //Automated by :-Sarath Date :-12/19/2024 Quarter:-4 Sprint:12  Module: Settings
    });
  });

  test('2024DefectTestCases_46118', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '46118', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.clickManageRepository()
      await qa.module.switchToQuestionnaireRepository()
      // lines added for the testcase 46300 starts
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      //popup.acknowledge.okIfWindowExist('(1019) Duplication Of Data Found');
      await popupPage.acknowledge.okWithExpectedMessageIfWindowExist('(1019) Duplication Of Data Found')
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.clickClearButton();// created by ranjith
      // lines added for the testcase 46300 ends
      await qa.questionnarieRepository.selectRowByAtRepositoryID();//created by ranjith
      await qa.questionnarieRepository.clearSortOrder();//created by ranjith
      await qa.questionnarieRepository.enterAtSortOrder();//created by ranjith
      await qa.questionnarieRepository.clickUpdateButton();//created by ranjith
      await qa.questionnarieRepository.save()
      await qa.questionnarieRepository.verifyAtSortOrderInGrid();//created by ranjith
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated by: Ranjith Kumar V K
      //Date: 01/17/2025 Q1 Sprint 1 2025
      //Type of testcase: Defect
      //update by:Ranjith, TC ID: 46468
    });
  });

});

test.describe('SettingsEnhancement', () => {
  test('SettingsEnhancement_37730', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '37730', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickAddNewButton()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.enterAtTerminalName()
      await settings.terminalEntry.clickIPAddressTab()
      await settings.terminalEntry.iPAddressTab.enterAtIPAddress()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.terminalEntry.clickNCICTab()
      await settings.terminalEntry.nCICTab.clickAddMoreORI()
      await settings.module.switchToORITerminalEntry();//created by ranjith
      await settings.oRITerminalEntry.verifyReceiveUnsolicitedMessageCheckBoxIsEnabledAndDisplayed();//created by ranjith
      await settings.oRITerminalEntry.enterAtORINo();//created by ranjith
      await settings.oRITerminalEntry.clickReceiveUnsolicitedMessageCheckbox();//created by ranjith
      await settings.oRITerminalEntry.clickAdd();//created by ranjith
      await settings.oRITerminalEntry.save();//created by ranjith
      await settings.module.switchToORITerminalEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.oRITerminalEntry.verifyAtORIInGrid()
      await settings.oRITerminalEntry.verifyRcvUnSolCheckboxCheckedInTheGrid()
      await settings.oRITerminalEntry.selectAtORIFromTheGrid()
      await settings.oRITerminalEntry.enterAtDepartmentName()
      await settings.oRITerminalEntry.clickReset()
      await settings.oRITerminalEntry.verifyORIIsBlank()
      await settings.oRITerminalEntry.verifyDepartmentNameIsBlank()
      await settings.oRITerminalEntry.verifyRcvUnSolCheckboxIsUnChecked()
      await settings.oRITerminalEntry.selectAtORIFromTheGrid()
      await settings.oRITerminalEntry.enterAtDepartmentName()
      await settings.oRITerminalEntry.clickUpdate()
      await settings.oRITerminalEntry.verifyAtDeptNameInGrid()
      await settings.oRITerminalEntry.save()
      await settings.module.switchToORITerminalEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.oRITerminalEntry.clickPrint()
      await home.module.switchToSelectReport()
      await home.selectReport.verifyReportNameInGrid()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToORITerminalEntry()
      await settings.oRITerminalEntry.verifyAtHeaderRcvUnSolColumnName()
      await settings.oRITerminalEntry.enterAtORINo(0)
      await settings.oRITerminalEntry.clickAdd()
      await settings.oRITerminalEntry.save()
      await settings.module.switchToORITerminalEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.oRITerminalEntry.verifyAtORI0InGrid()
      const oriColumnValuesInitial = await settings.oRITerminalEntry.getORIColumnValues()
      System.out.println(oriColumnValuesInitial)
      await settings.oRITerminalEntry.clickRcvUnsolHeader()
      const oriColumnValues = await settings.oRITerminalEntry.getORIColumnValues()
      await settings.oRITerminalEntry.verifySortOrderIsWorking(oriColumnValues)
      System.out.println(oriColumnValues)
      //Automated by  :-Kiran  Date :-10/28/2024  Quarter:-4 Sprint:-10 Module:-Home
    });
  });

});

test.describe('Q4DefectHome2023', () => {
  test('Q4DefectHome2023_42288', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '42288', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Home')
      await loaderPage.clickOnPNXLogo()
      await loaderPage.mouseHoverOnPnxLogoAction('Tools')
      await loaderPage.mouseHoverAndClickOnPnxLogoAction('Setup Juris')
      await home.module.switchToMultipleJurisRoles()
      await home.multipleJurisRoles.verifyJurisDropDownIsDisplayed()
      await home.multipleJurisRoles.closeScreen();//Lines added based on TC NO  - 48881
      await loaderPage.navigateToModule('Home'); //Lines added based on TC NO  - 48881
      await loaderPage.mouseHoverOnPnxLogoAction('Tools');//Lines added based on TC NO  - 48881
      await loaderPage.mouseHoverAndClickOnPnxLogoAction('License Details');//Lines added based on TC NO  - 48881
      await home.module.switchToLicenseInfoScreen();//Lines added based on TC NO  - 48881
      await home.licenseInfoScreen.verifyResetIconIsDisplayed();//Lines added based on TC NO  - 48881
      // objectIdentification.windowHandle.phoenixMainWindow();//Lines added based on TC NO  - 48881
      //Automated By : - chandrasekar.v on 22/07/2024
      //Sprint :-  : Quarter  3  :  Sprint 7
      //Type of Test case : - Defect 2024
    });
  });

});

test.describe('Q4SettingsSystemParameter', () => {
  test('Q4SettingsSystemParameter_44103', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '44103', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.ClickUserName()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.switchToPreferenceTab()
      personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.saveNClose()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.clickOnParameterID1205()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.navigateToMainTab()
      await settings.parameterNameEntry.mainTab.selectAtGroupSort(1);//created
      await settings.parameterNameEntry.mainTab.enterAtSortNo();//created
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.saveAndClose()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifyCollapseAllIsDisplayed()
      await settings.sysParameter.verifyPhoenixAllBOTIsDisplayed()
      await settings.sysParameter.clickOnParameterID1205()
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.navigateToMainTab()
      await settings.parameterNameEntry.mainTab.selectAtGroupSort(2);//created
      await settings.parameterNameEntry.mainTab.clearSortNo();//created
      await settings.module.switchToParameterNameEntry()
      await settings.parameterNameEntry.saveAndClose()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifyCollapseAllNotDisplayed();//created
      await settings.sysParameter.verifyPhoenixAIBotNotDisplayed();//created
      await settings.module.switchToSystemParamter()
      //Automated by: RanjithKumar V K
      //Q1 Sprint 1 2025  Date: 01/10/2025
      //Type of testcase: Enhancement
    });
  });

});

test.describe('2025DefectTestCases', () => {
  test('2025DefectTestCases_46209', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '46209', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormRefNo()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickPhoenixFormRadioButton()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      //lines added for the testscript second scenario 46468 start
      await qa.qAFormEntry.verifyDeleteIconIsEnabled();//created by ranjith
      //lines added for the testscript second scenario 46468 end
      await qa.qAFormEntry.ClickManageQuestionsButton()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewSectionButton()
      await qa.module.SwitchToQAFormSectionEntry()
      await qa.qAFormSection.EnterAtSectionName()
      await qa.qAFormSection.EnterAtSort()
      await qa.qAFormSection.ClickAddButton()
      await qa.qAFormSection.SaveScreen()
      await qa.qAFormSection.verifyAtSectionNameInGrid();//created by ranjith
      await qa.module.SwitchToQAFormSectionEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await qa.qAFormSection.CloseScreen()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection()
      await qa.questionMaster.EnterAtQuestion()
      await qa.questionMaster.SelectAtAnswerType()
      await qa.questionMaster.SaveScreen()
      await qa.module.SwitchToQuestionMasterEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await qa.questionMaster.clickYesOrNoTab()
      await qa.questionMaster.yesOrNoTab.clickControlQuestionLookupIcon()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtQuestion()
      //Automated by: Ranjith Kumar V K
      //Date: 01/17/2025 Q1 Sprint 1 2025
      //Type of testcase: Functional
    });
  });

  test('2025DefectTestCases_46284', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '46284', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.selectRandomRowInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.selectAtInventoryType()
      await settings.maintainCodeValue.clickUpdate()
      await settings.module.switchToSharedCodes()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated By: Ranjith Kumar V K
      //Date: 01/27/2025
      //Type of Testcase: Defect
      //Q1 Sprint 1 2025
    });
  });

  test('2025DefectTestCases_46231', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '46231', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Batch Search')
      await settings.module.switchToBatchSearch();//created by ranjith
      await settings.batchSearch.clickExportToExcel()
      await popupPage.acknowledge.okWithExpectedMessage('(7) No data present')
      await settings.module.switchToBatchSearch()
      //Automated By: Ranjith Kumar V K
      //Date: 01/27/2024
      //Type of testcase: Defect
      //Q1 Sprint 1 2025
    });
  });

  test('2025DefectTestCases_48629', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '48629', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormRefNo()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickMainTab();//created by ranjith
      await qa.qAFormEntry.mainTab.clickEvaluationFormRadioButton();//created by ranjith
      await qa.qAFormEntry.mainTab.selectAtFormName();//created by ranjith
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.module.SwitchToQAFormEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await qa.qAFormEntry.clickRepositoryTab();//created by ranjith
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID();//created by ranjith
      await qa.qAFormEntry.repositoryTab.clickAdd();//created by ranjith
      await qa.qAFormEntry.repositoryTab.verifyAtRepositoryIDInGrid();//created by ranjith
      await qa.qAFormEntry.ClickSaveNCloseButton()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRandomRow()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.NavigateToQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.SaveNClose()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.NavigateToQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.verifyDateAsCurrentDateListGrid();//created by ranjith
      personnel.personnelEntry.personnelEntryQAFormsTab.verifyDateAsCurrentTimeListGrid();//created by ranjith
      //Automated By: Ranjith Kumar V K
      //Date: 01/28/2025
      //Q1 Sprint 1 2025
      //Type of testcase : Defect
    });
  });

  test('2025DefectTestCases_48549', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '48549', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate();//created by ranjith
      await settings.accessLog.enterAtToDate();//created by ranjith
      await settings.accessLog.enterAtRepositoryID()
      await settings.accessLog.clickSearch()
      await settings.accessLog.clickGridHeaderByColumnName('Activity Date');//created by ranjith
      await settings.accessLog.verifyDateAndTimeColumnAsAscendingOrder();//created by ranjith
      await settings.accessLog.clickGridHeaderByColumnName('Activity Date')
      await settings.accessLog.verifyDateAndTimeColumnAsDescendingOrder();//created by ranjith
      await settings.accessLog.verifyTheDatesBetweenFromAndToDates();//created by ranjith
      await settings.module.switchToAcessLog()
      //Automated By: Ranjith Kumar V K
      //Date: 01/20/2024
      //Type of testcase: Defect
      //Q1 Sprint 1 2025
    });
  });

  test('2025DefectTestCases_46196', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '46196', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.clickAddNew()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.enterAtTextName()
      await home.textMgmt.clickDetailTab()
      await home.textMgmt.detailsTab.EnterSummaryRichTextAsTestAutomation()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.clickMobileTextTab();//created by ranjith
      await settings.textMgmt.mobileTextTab.selectAtAvailableFieldsDropdown();//created by ranjith
      await settings.textMgmt.mobileTextTab.clickAddButton();//created by ranjith
      await settings.textMgmt.save()
      await settings.module.switchToTextMgmt()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.clickRelatedReportsTab()
      await home.textMgmt.relatedReportsTab.enterAtReportID()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtDescription()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.relatedReportsTab.clickAddButton()
      await settings.textMgmt.save()
      await settings.module.switchToTextMgmt()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToTextMgmt()
      await home.textMgmt.switchToTextTempletForm()
      await home.textMgmt.detailsTab.verifyAtTextAvailableInsideForm();//created by ranjith
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.clickMobileTextTab()
      await settings.textMgmt.mobileTextTab.switchToTextTempletForm();//created by ranjith
      await settings.textMgmt.mobileTextTab.verifyAtTextAvailableInsideForm();//created by ranjith
      await settings.module.switchToTextMgmt()
      await home.textMgmt.clickRelatedReportsTab()
      await home.textMgmt.relatedReportsTab.verifyAtReportNameInGrid()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.verifyDetailsTabColorInBlue();//created by ranjith
      await settings.textMgmt.verifyMobileTextTabColorInBlue();//created by ranjith
      await settings.textMgmt.clickMobileTextTab()
      await settings.textMgmt.verifyRelatedReportsTabColorInBlue();//created by ranjith
      await settings.module.switchToTextMgmt()
      // Automated By : Mohamed Absar A on 02/24/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#175435
    });
  });

  test('2025DefectTestCases_48845', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '48845', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      // Scenario 1
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterFromDateAndTimeAs2020()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToAcessLog()
      await settings.accessLog.verifyGridIsEmpty()
      await settings.accessLog.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // objectIdentification.windowHandle.switchToMainWindow()
      // objectIdentification.windowHandle.closeAllTheWindowsExceptMainWindow()
      await settings.module.switchToAcessLog()
      await settings.accessLog.verifyGridIsEmpty()
      // Scenario 2
      await loaderPage.navigateToScreen('Action search')
      await settings.module.switchToActionSearch()
      await settings.actionSearch.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToActionSearch()
      await settings.actionSearch.verifyGridIsEmpty()
      await settings.actionSearch.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // objectIdentification.windowHandle.switchToMainWindow()
      // objectIdentification.windowHandle.closeAllTheWindowsExceptMainWindow()
      await settings.module.switchToActionSearch()
      await settings.actionSearch.verifyGridIsEmpty()
      // Scenario 3
      await loaderPage.navigateToScreen('Batch Search')
      await settings.module.switchToBatchSearch()
      await settings.batchSearch.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToBatchSearch()
      await settings.batchSearch.verifyGridIsEmpty()
      await settings.batchSearch.clickExportToExcel()
      await popupPage.acknowledge.okWithExpectedMessage('(7) No data present')
      await settings.module.switchToBatchSearch()
      await settings.batchSearch.verifyGridIsEmpty()
      //Scenario 4
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.verifyGridIsEmpty()
      await settings.customHelp.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // objectIdentification.windowHandle.switchToMainWindow()
      // objectIdentification.windowHandle.closeAllTheWindowsExceptMainWindow()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.verifyGridIsEmpty()
      // Scenario 5
      await settings.customHelp.clickGridHeader('Juris')
      await settings.customHelp.verifyGridIsEmpty()
      await settings.customHelp.clickGridHeader('Screen ID')
      await settings.customHelp.verifyGridIsEmpty()
      await settings.customHelp.clickGridHeader('Document Title')
      await settings.customHelp.verifyGridIsEmpty()
      await settings.customHelp.clickGridHeader('Inactive')
      await settings.customHelp.verifyGridIsEmpty()
      // Scenario 6
      await settings.customHelp.clickAddNew()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.enterAtScreenID()
      await settings.customDocHelpEntry.enterAtDocumentTitle()
      await settings.customDocHelpEntry.enterAtLink()
      await settings.customDocHelpEntry.clickAdd()
      await settings.customDocHelpEntry.verifyAtDocumentTitleInGrid()
      await settings.customDocHelpEntry.deleteGridRowByDocumentTitle()
      await settings.customDocHelpEntry.clickCancelOnDeleteConfirmPopup()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.clickDeleteHeaderInGrid()
      await settings.customDocHelpEntry.verifyDeleteConfirmationPopupIsNotAppeared()
      // Scenario 7
      await settings.customDocHelpEntry.selectAtTitleInGridRow()
      await settings.customDocHelpEntry.enterAtDocumentTitle(1)
      await settings.customDocHelpEntry.clickUpdateButton()
      await settings.customDocHelpEntry.clickDeleteHeaderInGrid()
      await settings.customDocHelpEntry.verifyUpdateButtonNotDisplayed()
      await settings.customDocHelpEntry.closeScreen()
      // Scenario 8
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToDistributionList()
      await settings.distributionList.verifyGridIsEmpty()
      await settings.distributionList.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // objectIdentification.windowHandle.switchToMainWindow()
      // objectIdentification.windowHandle.closeAllTheWindowsExceptMainWindow()
      await settings.module.switchToDistributionList()
      await settings.distributionList.verifyGridIsEmpty()
      // Scenario 9
      await settings.distributionList.clickAddNew()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.enterAtDistributionListName()
      await settings.distributionEntry.enterAtPFNo(0)
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.verifyPFNameInGrid()
      await settings.distributionEntry.saveScreen()
      await settings.module.switchToDistributionEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.distributionEntry.deleteGridRowByKeyInGridWithConfirmPopup()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.verifyGridRowMarkedForDeleteByKey()
      await settings.distributionEntry.saveScreen()
      await settings.module.switchToDistributionEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.distributionEntry.verifyAtDistributionListNameIsNotPresent()
      await settings.distributionEntry.closeSreen()
      // Scenario 10
      await loaderPage.navigateToScreen('MFA Setting')
      await settings.module.switchToMFASetting()
      await settings.mFASetting.deleteGridRowByRemarksWithConfirmPopup()
      await settings.module.switchToMFASetting()
      await settings.mFASetting.verifyGridRowMarkedForDeleteByRemarks()
      await settings.mFASetting.selectAtRemarksInGrid()
      await settings.mFASetting.verifyRecordMarkedForDeletionAcknowledgePopup()
      await settings.module.switchToMFASetting()
      await settings.mFASetting.closeScreen()
      // Scenario 11
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.clickGridHeader('Juris')
      await settings.textScreen.verifyGridIsEmpty()
      await settings.textScreen.clickGridHeader('Text Name')
      await settings.textScreen.verifyGridIsEmpty()
      await settings.textScreen.clickGridHeader('Search Word')
      await settings.textScreen.verifyGridIsEmpty()
      await settings.textScreen.clickGridHeader('Description')
      await settings.textScreen.verifyGridIsEmpty()
      await settings.textScreen.clickGridHeader('Template For')
      await settings.textScreen.verifyGridIsEmpty()
      await settings.textScreen.clickGridHeader('Expiry Date')
      await settings.textScreen.verifyGridIsEmpty()
      //Automated By : Mohamed Absar A on 03/04/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#179558
    });
  });

  test('2025DefectTestCases_52874', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '52874', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickNextButton()
      await settings.qaForms.verifyPrevButtonIsEnable();   //Lines Added Based On TC ID - 63532
      await settings.qaForms.clickPrevButton()
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyNextButtonIsEnable()
      await settings.qaForms.selectAtFormType()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.clickOpenUsingAdobeCheckBox()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.verifyOpenUsingAdobeCheckBoxIsChecked()
      await qa.module.SwitchToQAFormEntry()
      await settings.module.switchToQAForms()
      //Automated By : - chandrasekar.v on 3/17/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('2025DefectTestCases_53036', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '53036', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxOfTheRowByFormName1()
      await settings.qaForms.verifyManageRepositoryButtonIsDisplayed()
      await settings.qaForms.clickManageRepository()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.clickResetButton()
      await qa.questionnarieRepository.verifyGridCountIsZero()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.selectAtRole()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.clickPrintIcon()
      await qa.questionnarieRepository.verify1051Acknowledge(); // lines added based on TC No - 62919
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qa.questionnarieRepository.verifyAtScreenNameInGrid()
      await qa.questionnarieRepository.verifyAtRoleNameInGrid()
      await qa.questionnarieRepository.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qa.module.switchToQuestionnaireRepository()
      //Automated By : - chandrasekar.v on 3/21/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('2025DefectTestCases_53019', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '53019', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickAddNew()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.enterAtScreenID()
      await settings.customDocHelpEntry.enterAtDocumentTitle()
      await settings.customDocHelpEntry.enterAtLink()
      await settings.customDocHelpEntry.clickAdd()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.save()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToCustomDocHelpEntry()
      const currentDate = await settings.customDocHelpEntry.getCurrentDate()
      const currentTime = await settings.customDocHelpEntry.getCurrentTime()
      await settings.customDocHelpEntry.clickInactiveCheckBox()
      await settings.customDocHelpEntry.verifyAtInactiveDateAndTimeAsCurrentDateAndTime(currentDate,currentTime)
      await settings.customDocHelpEntry.save()
      await settings.module.switchToCustomDocHelpEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.clickUploadeIcon();//lines Updated Based on TC NO -53042
      await settings.module.switchTocustomDocHelpEntryUploadeWindow()
      await settings.customDocHelpEntryUploadeWindow.enterAtDocumentTitle()
      await settings.customDocHelpEntryUploadeWindow.enterAtLink()
      await settings.customDocHelpEntryUploadeWindow.clickAddDocumentButton()
      // objectIdentification.manualIdentify.verifyAdditionSuccessfulAcknowledgeMessage()
      await settings.module.switchToCustomDocHelpEntry()
      await settings.customDocHelpEntry.clickUploadeIcon()
      await settings.module.switchTocustomDocHelpEntryUploadeWindow()
      await settings.customDocHelpEntryUploadeWindow.verifyUpdateAndAdditionalSuccessfulStatusBarIsEmpty()
      await settings.module.switchTocustomDocHelpEntryUploadeWindow()
      await settings.module.switchToCustomDocHelpEntry();       //lines Updated Based on TC NO -53042
      //Automated By : Sarathkumar L on 04/18/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Defect
    });
  });

});

test.describe('SettingsChecklist', () => {
  test('SettingsChecklist_46485', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '46485', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectRowAtRoleName()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickEditPermissionButtonByModule('Alarms')
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickAtSearchCheckBoxByScreenNameInGrid()
      await settings.rolesEntry.save()
      await settings.module.switchToRolesEntryEditScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.rolesEntry.clickAtSearchCheckBoxByScreenNameInGrid()
      await settings.rolesEntry.save()
      await settings.module.switchToRolesEntryEditScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated By: Ranjith Kumar V K
      //Date: 01/21/2025
      //Type of testcase: Functional
      //Q1 Sprint 1 2025
    });
  });

  test('SettingsChecklist_46304', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '46304', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.selectAtCodeCategory(0);//created by ranjith
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeCategoryInGrid(0);//created by ranjith
      await settings.coded.selectRandomRowInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAddNewButtonIsEnable()
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.selectAtCodeCategory(1);//created by ranjith
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeCategoryInGrid(1);//created by ranjith
      await settings.coded.selectRandomRowInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAddNewButtonIsDisable()
      await settings.sharedCodes.verifyLabelCodeStatusIsDisplayed();//created by ranjith
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.selectAtCodeCategory(2);//created by ranjith
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeCategoryInGrid(2);//created by ranjith
      await settings.coded.selectRandomRowInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAddNewButtonIsEnable()
      await settings.sharedCodes.verifyLabelCodeStatusIsDisplayed();//created by ranjith
      //Automated By: Ranjith Kumar V K
      //Date: 01/27/2024
      //Type: Defect
      //Q1 Sprint 1 2025
    });
  });

  test('SettingsChecklist_58062', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '58062', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType(1)
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectRandomGridRow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyEvaluationFormRadioButtonIsSelected()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType(2)
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtTypeColumnInGrid(2)
      await settings.qaForms.selectRandomGridRow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyPDFRadioButtonIsSelected()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType(3)
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectRandomGridRow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyPhoenixFormRadioButtonIsSelected()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      //Automated By : - Sarathkumar L on 06/18/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('SettingsChecklist_63634', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63634', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyTheDatesBetweenFromAndToDates()
      await settings.accessLog.verifyAtPFCodeInGrid(1)
      await settings.accessLog.verifyAtIPAddressInGrid()
      // objectIdentification.windowHandle.switchToMainWindow()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('Q1Sprint3SettingsDefect2025', () => {
  test('Q1Sprint3SettingsDefect2025_53072', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '53072', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickViewHistoryButton()
      await settings.sysParameter.switchToHistoryWindow()
      await settings.viewHistoryWindow.clickModuleDropDownArrow()
      await settings.viewHistoryWindow.selectAtModule()
      await settings.viewHistoryWindow.clickSearchButton()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.CloseScreen('System Parameter')
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.tabTheFromDateAndTime()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtIPAddressByDescription(1)
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.CloseScreen('Access Log')
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickEntraIDButton()
      await settings.module.switchToEntraSettingWindow()
      await settings.entraSettingWindow.selectAtEntraIDForApplication()
      await settings.entraSettingWindow.save()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.CloseScreen('System Parameter')
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.tabTheFromDateAndTime()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtIPAddressByDescription(2)
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.CloseScreen('Access Log')
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickMFASettingsButton()
      await settings.module.switchToMFASetting()
      await settings.mFASetting.selectAt2FAForApplication()
      await settings.mFASetting.clickOverridesTab()
      await settings.mFASetting.overridesTab.enterAtIpAddressFrom()
      await settings.mFASetting.overridesTab.clickAddButton()
      await settings.module.switchToMFASetting()
      await settings.mFASetting.save()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.CloseScreen('System Parameter')
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.tabTheFromDateAndTime()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtIPAddressByDescription(3)
      await settings.module.switchToAcessLog()
      //Automated By : - chandrasekar.v on 3/13/2025
      //Sprint :-  : Quarter  1  :  Sprint 3
      //Type of Test case : - Defect 2025
    });
  });

  test('Q1Sprint3SettingsDefect2025_55952', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55952', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Select Report')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickExcelIcon()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Untitled')
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      await settings.module.switchToJobs()
      //Automated By : Sarathkumar L on 04/18/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Defect
    });
  });

  test('Q1Sprint3SettingsDefect2025_54866', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '54866', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickApprovalParameterButton()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.clickPrintIcon()
      // objectIdentification.windowHandle.windowExist('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.verifyApprovalProcessLabelIsDisplayed()
      await settings.approvalParameter.verifyEnableApprovalProcessLabelIsDisplayed()
      await settings.approvalParameter.verifyApprovalRoutingDefaultIsDisplayed()
      await settings.approvalParameter.verifyAllowRoutingDefaultsOverrideIsDisplayed()
      await settings.approvalParameter.verifyReportLockingProcedureIsDisplayed()
      await settings.approvalParameter.verifySupervisorsMayApproveTheirOwnReportsIsDisplayed()
      await settings.approvalParameter.verifySupervisorsCanViewReportsForAllStatusIsDisplayed()
      await settings.approvalParameter.verifyOfficerSignatureRequiredIsDisplayed()
      await settings.approvalParameter.verifySupervisorsCanEditReportsForAllStatusIsDisplayed()
      await settings.approvalParameter.verifySupervisorSignatureRequiredIsDisplayed()
      //Automated By : Sarathkumar L on 04/21/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Defect
    });
  });

  test('Q1Sprint3SettingsDefect2025_55690', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55690', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text (F)')
      await settings.module.switchToText()
      await settings.textScreen.verifyColumnNameTemplateForShows()
      await settings.module.switchToText()
      //Automated By : Sarathkumar L on 04/22/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Defect
    });
  });

  test('Q1Sprint3SettingsDefect2025_55692', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55692', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit1()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxOfTheRowByFormName1()
      await settings.qaForms.verifyManageRepositoryButtonIsDisplayed()
      await settings.qaForms.clickManageRepository()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Questionnaire Repository')
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.save()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Questionnaire Repository')
      await qa.module.switchToQuestionnaireRepository()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated By : Sarathkumar L on 04/22/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Defect
    });
  });

  test('Q1Sprint3SettingsDefect2025_55698', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55698', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('MFA Setting')
      await settings.module.switchToMFASetting()
      await settings.mFASetting.selectAt2FAForApplication()
      await settings.mFASetting.clickOverridesTab()
      await settings.mFASetting.overridesTab.enterAtIpAddressFrom()
      await settings.mFASetting.overridesTab.clickAddButton()
      await settings.module.switchToMFASetting()
      await settings.mFASetting.saveNClose()
      // objectIdentification.windowHandle.verifyWindowNotExists('MFA Setting')
      await loaderPage.navigateToScreen('MFA Setting')
      await settings.module.switchToMFASetting()
      await settings.mFASetting.selectAt2FAForApplication()
      await settings.mFASetting.clickOverridesTab()
      await settings.mFASetting.overridesTab.verifyAtIPAddressRangeOrPFInGrid()
      //Automated By : Sarathkumar L on 04/24/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Product Backlog
    });
  });

  test('Q1Sprint3SettingsDefect2025_55004', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55004', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.ClickUserName()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.switchToPreferenceTab()
      personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox()
      personnel.personnelEntry.save()
      personnel.personnelEntry.verifyUpdateSuccessfulStatusMessage()
      personnel.personnelEntry.saveNClose()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickSampleCheckbox()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.qAFormEntry.repositoryTab.verify3514QAFormsCannotBeAddedToTheRepositoryAcknowledgeMessage()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtScreenID()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickSampleCheckbox()
      await qa.qAFormEntry.verifyPleaseRemoveLinkedRepositoryToMakeSampleQAFormAcknowledgeMessage()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.reloadScreen()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickSampleCheckbox()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormNameInGrid()
      await settings.qaForms.clickSampleCheckbox()
      await settings.qaForms.enterAtScreenID()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormNameInGrid(1)
      await settings.module.switchToQAForms()
      //Automated By : - Sarathkumar L  on 04/28/2023
      //Sprint :-Â  :Â Quarter  2 :Â  Sprint 4
      //Type of Test case : - Defect
    });
  });

  test('Q1Sprint3SettingsDefect2025_55535', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55535', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.qAFormEntry.repositoryTab.verifyAtRepositoryIDInGrid()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.saveAndCloseScreen()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRandomRow()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.NavigateToQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtFormNameContainsInSelectForm(1)
      personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.verifyAtFileName();//created
      await qa.questionDataEntry.SaveNClose()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.NavigateToQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtFormNameInGrid(1);//created
      personnel.switchToPersonnelEntry()
      //Automated By : - Sarathkumar L  on 05/19/2025
      //Sprint :-Â  :Â Quarter  2 :Â  Sprint 5
      //Type of Test case : - Defect //CRM#184581
    });
  });

  test('Q1Sprint3SettingsDefect2025_55570', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55570', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.verifyFTOTrainingTypeLabelIsDisplayed()
      await qa.qAFormEntry.repositoryTab.verifyFTOTestLabel()
      await qa.qAFormEntry.repositoryTab.selectAtFTOTrainingType()
      await qa.qAFormEntry.repositoryTab.verifyAtFTOTrainingTypeDropDown()
      await qa.qAFormEntry.repositoryTab.selectAtFTOTest()
      await qa.qAFormEntry.repositoryTab.verifyAtFTOTestDropDown()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.selectAtRepositoryIDInGrid()
      await qa.qAFormEntry.repositoryTab.verifyAtFTOTestDropDown()
      await qa.module.SwitchToQAFormEntry()
      //Automated By : - Sarathkumar L  on 05/19/2025
      //Sprint :-Â  :Â Quarter  2 :Â  Sprint 5
      //Type of Test case : - Defect
    });
  });

  test('Q1Sprint3SettingsDefect2025_60165', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60165', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Query Config')
      await settings.module.switchToQueryConfig()
      await settings.queryConfig.clickAddNew()
      await settings.module.switchToQueryMasterEntry()
      await settings.queryMasterEntry.enterAtQueryNo()
      await settings.queryMasterEntry.enterAtQueryName()
      await settings.queryMasterEntry.clickSaveIcon()
      await settings.queryMasterEntry.verify3DoYouWantToSaveAllTheEnteredDetailsConfirmationPopupWithCancel()
      await settings.queryMasterEntry.verifyBottomMessageNotAppear()
      await settings.module.switchToQueryMasterEntry()
      //Automated By : - Sarathkumar L on 06/12/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Defect
    });
  });

});

test.describe('Q1S4SettingsProductBacklog2025', () => {
  test('Q1S4SettingsProductBacklog2025_55893', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55893', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickSaveButton()
      await qa.qAFormEntry.clickCancelConfirmationPopup()
      await qa.qAFormEntry.verifyBottomMessageNotAppears()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.verifyManageQuestionsEnabled()
      await qa.qAFormEntry.mainTab.verifyManageSectionEnabled()
      await qa.qAFormEntry.mainTab.verifyReviewEnabled()
      await qa.qAFormEntry.mainTab.verifyCopyToSameJurisEnabled()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyReadyForUseCheckboxEnabled()
      await qa.qAFormEntry.selectReadyForUseCheckBoxWithCancelConfirmPopup()
      await qa.qAFormEntry.verifyReadyForUseCheckBoxUnchecked()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.verifyAllowMultipleRecordsCheckboxDisabled()
      await qa.qAFormEntry.mainTab.verifySharedCheckboxDisabled()
      await qa.qAFormEntry.mainTab.verifyLockWhenSaveCheckboxDisabled()
      await qa.qAFormEntry.mainTab.verifyCaptureScoreCheckboxDisabled()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.verifyPhoenixFormRadioButtonDisabled()
      await qa.qAFormEntry.mainTab.verifyPDFRadioButtonDisabled()
      await qa.qAFormEntry.mainTab.verifyEvaluationFormRadioButtonDisabled()
      await qa.module.SwitchToQAFormEntry()
      //Automated By : Sarathkumar L on 04/24/2025
      //Sprint :-  : Quarter  2  :  Sprint 4  2025
      //Type of Test case : - Product Backlog
    });
  });

  test('Q1S4SettingsProductBacklog2025_55887', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55887', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.clickEvaluationFormRadioButton()
      await qa.qAFormEntry.mainTab.selectAtFormName()
      await qa.qAFormEntry.clickSaveButton()
      await qa.qAFormEntry.clickCancelConfirmationPopup()
      await qa.qAFormEntry.verifyBottomMessageNotAppears()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.verifyAdditionSuccessfulBottomMessage()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyReadyForUseCheckboxEnabled()
      await qa.qAFormEntry.selectReadyForUseCheckBoxWithCancelConfirmPopup()
      await qa.qAFormEntry.verifyReadyForUseCheckBoxUnchecked()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.verifyAllowMultipleRecordsCheckboxDisabled()
      await qa.qAFormEntry.mainTab.verifySharedCheckboxDisabled()
      await qa.qAFormEntry.mainTab.verifyLockWhenSaveCheckboxDisabled()
      await qa.qAFormEntry.mainTab.verifyCaptureScoreCheckboxDisabled()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.verifyPhoenixFormRadioButtonDisabled()
      await qa.qAFormEntry.mainTab.verifyPDFRadioButtonDisabled()
      await qa.qAFormEntry.mainTab.verifyEvaluationFormRadioButtonDisabled()
      await qa.module.SwitchToQAFormEntry()
      //Automated By : - Sarathkumar L  on 04/28/2023
      //Sprint :-Â  :Â Quarter  2 :Â  Sprint 4
      //Type of Test case : - Defect
    });
  });

  test('Q1S4SettingsProductBacklog2025_55871', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55871', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.clickAddNew()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName()
      await settings.jobEntry.selectAtJobType()
      await settings.jobEntry.clickInactiveCheckBox()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.tabStartDate()
      await settings.jobEntry.enterAtEndDate()
      await settings.jobEntry.enterEveryMinutesAs10()
      await settings.jobEntry.clickSave()
      await settings.jobEntry.clickCancelConfirmationPopup()
      await settings.jobEntry.verifyBottomMessageNotAppears()
      await settings.jobEntry.saveScreen()
      await settings.jobEntry.verifyAdditionSuccessfulBottomMessage()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveNClose()
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickIncludeInactiveCheckBox()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyInActiveCheckBoxCheckedInGrid()
      await settings.jobsScreen.enterAtJobName()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyInActiveCheckBoxCheckedInGrid()
      await settings.jobsScreen.clickAtJobNameInGrid()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickInactiveCheckBox()
      await settings.jobEntry.saveNClose()
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyInActiveCheckBoxUnCheckedInGrid()
      await settings.module.switchToJobs()
      //Automated By :- Sarathkumar L on 05/23/2025
      //Sprint :- Q2 Sprint 05 2025
      //Type of Test case :- Product Backlog
    });
  });

  test('Q1S4SettingsProductBacklog2025_55540', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55540', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.tabTheFromDateAndTime()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.selectAccessLogAsSearch()
      await settings.accessLog.clickSearch()
      const accessColumnValues = await settings.accessLog.getColumnValues(BaseData.getSettingsModuleValue('ColumnName'))
      await settings.accessLog.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> columnValuesByColumnName = objectIdentification.readExcel.getColumnvaluesByColumnName(ExcelName,BaseData.getSettingsModuleValue('ColumnName'))
      // objectIdentification.readExcel.comparerRMSDataAndExcelDataList(columnValuesByColumnName, accessColumnValues)
      //Automated By :- Sarathkumar L on 05/23/2025
      //Sprint :- Q2 Sprint 05 2025
      //Type of Test case :- Product Backlog
    });
  });

  test('Q1S4SettingsProductBacklog2025_55499', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55499', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.verifyJurisLabelIsDisplayed()
      await settings.textScreen.verifyTextNameLabelIsDisplayed()
      await settings.textScreen.verifyTemplateForLabelIsDisplayed()
      await settings.textScreen.verifySearchWordsLabelIsDisplayed()
      await settings.textScreen.verifyIncludeInactiveLabelIsDisplayed()
      await settings.textScreen.verifyDescriptionLabelIsDisplayed()
      await settings.textScreen.enterAtTextName()
      await settings.textScreen.clickSearch()
      await settings.textScreen.verifyAtTextNameInGrid()
      const getGridTableColumnValues = await settings.textScreen.getGridTableTextNameColumnValues()
      await settings.textScreen.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String recentDownloadedExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> excelData = objectIdentification.readExcel.getColumnvaluesByColumnName(recentDownloadedExcelName,BaseData.getSettingsModuleValue('TextName'))
      // objectIdentification.readExcel.comparerRMSDataAndExcelDataList(excelData, getGridTableColumnValues)
      //Automated By : Sarathkumar L on 05/26/2025
      //Sprint :- Q2 Sprint 05 2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('Q1S4SettingsProductBacklog2025_55406', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55406', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickSearch()
      const jobNameColumnValues = await settings.jobsScreen.getJobNameColumnValues()
      await settings.jobsScreen.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.VerifySelectReportScreenOpened()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String ExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> coulmnvaluesByColumnName = objectIdentification.readExcel.getColumnvaluesByColumnName(ExcelName,
      // 'Job Name')
      // objectIdentification.readExcel.comparerRMSDataAndExcelDatawithEquals(coulmnvaluesByColumnName, jobNameColumnValues)
      //Automated by  :-Manikandan .k   Date :-06/11/2025  Quarter:-2  Sprint-6   Type:-Defect SetUp:-1.118
    });
  });

  test('Q1S4SettingsProductBacklog2025_55462', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55462', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleRowCheckBox()
      await settings.roles.verifyCopyToSameJurisIsEnabled()
      await settings.roles.clickCopyToSameJuris()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtCopyRoleName()
      await settings.rolesEntry.enterAtCopyRoleNameDescription()
      await settings.rolesEntry.saveAndClose()
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtCopyRoleName()
      await settings.roles.clickSearch()
      await settings.roles.verifyAtCopyRoleNameInGrid()
      await settings.roles.selectRowAtRoleName()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyAtModuleInGrid()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Entry')
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.enterAtPFCode()
      personnel.personnelEntry.enterAtFirstName()
      personnel.personnelEntry.enterAtLastName()
      personnel.personnelEntry.switchToSecurityTab()
      personnel.personnelEntry.personnelEntrySecurityTab.enterAtUserName()
      personnel.personnelEntry.personnelEntrySecurityTab.enterAtPassword()
      personnel.personnelEntry.personnelEntrySecurityTab.enterReenterAtPassword()
      personnel.personnelEntry.personnelEntrySecurityTab.selectAtRoleAssignment()
      personnel.personnelEntry.personnelEntrySecurityTab.clickAddButton()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.save()
      await loaderPage.logout()
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.verifyModuleIsDisplayed('Property')
      //Automated By :- Sarathkumar L on 06/19/2025
      //Sprint :- Q2 Sprint 06 2025
      //Type of Test case :- Product Backlog
    });
  });

  test('Q1S4SettingsProductBacklog2025_55531', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55531', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyGridCountMoreThanZero()
      await settings.jobsScreen.clickIncludeInactiveCheckBox()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAllJobsIncludeInactiveListedInGrid()
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.enterAtJobName(1)
      await settings.jobsScreen.selectAtJobType(1)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobNameInGrid(1)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.enterAtJobName(2)
      await settings.jobsScreen.selectAtJobType(2)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobNameInGrid(2)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.enterAtJobName(3)
      await settings.jobsScreen.selectAtJobType(3)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobNameInGrid(3)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.enterAtJobName(4)
      await settings.jobsScreen.selectAtJobType(4)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobNameInGrid(4)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.enterAtScreenID(1)
      await settings.jobsScreen.selectAtJobType(3)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobNameInGrid(3)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickIncludeInactiveCheckBox()
      await settings.jobsScreen.enterAtJobName(3)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobNameInGrid(3)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.selectAtJobType(1)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobTypeInGrid(1)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.selectAtJobType(2)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobTypeInGrid(2)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.selectAtJobType(3)
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJobTypeInGrid(3)
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.selectAtJobType(1)
      await settings.jobsScreen.clickIncludeInactiveCheckBox()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAllJobsIncludeInactiveListedInGrid()
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.selectAtJobType(2)
      await settings.jobsScreen.clickIncludeInactiveCheckBox()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAllJobsIncludeInactiveListedInGrid()
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.selectAtJobType(3)
      await settings.jobsScreen.clickIncludeInactiveCheckBox()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAllJobsIncludeInactiveListedInGrid()
      await settings.jobsScreen.reloadJobsScreen()
      await settings.module.switchToJobs()
      await settings.jobsScreen.selectAtJobType(4)
      await settings.jobsScreen.clickIncludeInactiveCheckBox()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAllJobsIncludeInactiveListedInGrid()
      //Automated By :- Sarathkumar L on 06/23/2025
      //Sprint :- Q2 Sprint 06 2025
      //Type of Test case :- Legacy Testcase
    });
  });

  test('Q1S4SettingsProductBacklog2025_55687', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55687', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickAddNew()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName(1)
      await settings.jobEntry.selectAtJobType(1)
      await settings.jobEntry.verifyExportDropdownIsDisplayed()
      await settings.jobEntry.verifyAtExportDropdownList(1)
      await settings.jobEntry.verifyAtExportDropdownList(2)
      await settings.jobEntry.verifyAtExportDropdownList(3)
      await settings.jobEntry.verifyAtExportDropdownList(4)
      await settings.jobEntry.verifyScreenIDAsMandatory()
      await settings.jobEntry.verifyScreenIDIsEnabled()
      await settings.jobEntry.verifyReportNameAsMandatory()
      await settings.jobEntry.verifyReportNameIsEnabled()
      await settings.jobEntry.enterAtScreenID()
      await settings.jobEntry.selectAtReportName()
      await settings.jobEntry.enterAtCustomJobName()
      await settings.jobEntry.selectAtJobType(2)
      await settings.jobEntry.verifyInterfaceDropdownIsDisplayed()
      await settings.jobEntry.verifyAtInterfaceDropdownList(1)
      await settings.jobEntry.verifyAtInterfaceDropdownList(2)
      await settings.jobEntry.verifyAtInterfaceDropdownList(3)
      await settings.jobEntry.verifyAtInterfaceDropdownList(4)
      await settings.jobEntry.verifyScreenIDAsMandatory()
      await settings.jobEntry.verifyScreenIDIsEnabled()
      await settings.jobEntry.verifyReportNameAsMandatory()
      await settings.jobEntry.verifyReportNameIsEnabled()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.scheduleJobScreenTab.tabStartDate()
      await settings.jobEntry.scheduleJobScreenTab.enterEndDateAsFutureDate()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.selectAtInterface()
      await settings.jobEntry.saveScreen()
      await settings.module.switchToJobEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.close()
      await settings.module.switchToJobs()
      await settings.jobsScreen.clickAddNew()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.enterAtJobName(2)
      await settings.jobEntry.selectAtJobType(1)
      await settings.jobEntry.selectAtExport(1)
      await settings.jobEntry.enterAtScreenID()
      //Report Name
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.scheduleJobScreenTab.tabStartDate()
      await settings.jobEntry.scheduleJobScreenTab.enterEndDateAsFutureDate()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickSave()
      await settings.jobEntry.verify1018RequiredEntriesAreMissingAcknowledgePopup()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickResetIcon()
      await settings.jobEntry.enterAtJobName(3)
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.scheduleJobScreenTab.tabStartDate()
      await settings.jobEntry.scheduleJobScreenTab.enterEndDateAsFutureDate()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickSave()
      await settings.jobEntry.verify1018RequiredEntriesAreMissingAcknowledgePopup()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickResetIcon()
      await settings.jobEntry.enterAtJobName(3)
      await settings.jobEntry.selectAtJobType(2)
      await settings.jobEntry.selectAtInterface()
      await settings.jobEntry.clickSave()
      await settings.jobEntry.verify1018RequiredEntriesAreMissingAcknowledgePopup()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.scheduleJobScreenTab.tabStartDate()
      await settings.jobEntry.scheduleJobScreenTab.enterEndDateAsFutureDate()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveScreen()
      await settings.module.switchToJobEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      //Automated By : - Sarathkumar L on 06/24/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('Q1S4SettingsProductBacklog2025_55567', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55567', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.verifyJurisLabelIsDisplayed()
      await settings.accessLog.verifyFromDateLabelIsDisplayed()
      await settings.accessLog.verifyToDateLabelIsDisplayed()
      await settings.accessLog.verifyAccessTypeLabelIsDisplayed()
      await settings.accessLog.verifyRepositoryLabelIsDisplayed()
      await settings.accessLog.verifyPFCodeLabelIsDisplayed()
      await settings.accessLog.verifyNameIDLabelIsDisplayed()
      await settings.accessLog.verifyDescriptionLabelIsDisplayed()
      await settings.accessLog.verifyCallLabelIsDisplayed()
      await settings.accessLog.verifyCaseLabelIsDisplayed()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyTheDatesBetweenFromAndToDates()
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.enterAtRepositoryID()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtScreenIDScreenNameInGrid(1)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.enterAtPFCode()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtPFCodeInGrid(1)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.enterAtDescription()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtDescriptionInGrid()
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(1)
      await settings.module.switchToAcessLog()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(1)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(2)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(2)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(3)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(3)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(4)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(4)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(5)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(5)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(6)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(6)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(7)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(7)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(8)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(8)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(9)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(9)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(10)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(10)
      await settings.accessLog.reloadAccessLogTab()
      await settings.module.switchToAcessLog()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterAtToDate()
      await settings.accessLog.selectAtAccessType(11)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(11)
      await settings.module.switchToAcessLog()
      //Automated By : - chandrasekar.v on 8/04/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q1S4SettingsProductBacklog2025_77536', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '77536', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyDefaultClosedStatusTootTip()
      await settings.sysParameter.verifyDefaultReopenedStatusTootTip()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickEditPermissionButtonByModule('Names')
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.rolesEntryPermissionWindow.enterAtScreenId1()
      await settings.rolesEntry.rolesEntryPermissionWindow.clickSearchButton()
      await settings.rolesEntry.rolesEntryPermissionWindow.verifyVehicleActivityToolTipInGrid()
      await settings.module.switchToRolesEntryEditScreen()
      // Automated By : - Sarathkumar L on 02/12/2026
      // Sprint :- : Quarter 1 : Sprint 2
      // Type of Test case : - Legacy
    });
  });

});

test.describe('Q2S5SettingsDefect2025', () => {
  test('Q2S5SettingsDefect2025_56055', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '56055', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      //Scenario1
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickEntraIDButton()
      await settings.module.switchToEntraSettingWindow()
      await settings.entraSettingWindow.selectAtEntraIDForApplication()
      await settings.entraSettingWindow.enterAtApplicationID();//created
      await settings.entraSettingWindow.enterAtDirectoryID();//created
      await settings.entraSettingWindow.enterAtResponseUserAttributeKey();//created
      await settings.entraSettingWindow.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.entraSettingWindow.clickPrintIcon();//created
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToEntraSettingWindow()
      await settings.entraSettingWindow.closeScreen();//created
      await settings.module.switchToSystemParamter()
      //Scenario2
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.enterAtJobName()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.clickAtJobNameInGrid()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickSave()
      await settings.jobEntry.verifySaveConfirmationPopupAppears();//created
      await settings.module.switchToJobEntry()
      //Scenario3
      await settings.jobEntry.verifyReportNameLabel();//created
      await settings.jobEntry.saveNClose()
      //Scenario4
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickAddNew()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.enterDistributionListName()
      await settings.distributionEntry.clickPFNOCheckBox()
      await settings.distributionEntry.enterPFNo()
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.verifyPFNameInGrid()
      await settings.module.switchToDistributionEntry()
      //Automated By :- Sarathkumar L on 05/22/2025
      //Sprint :- Q2 Sprint 05 2025
      //Type of Test case :- Product Backlog
    });
  });

  test('Q2S5SettingsDefect2025_60339', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60339', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Jail Cell')
      await settings.module.switchToJailCell()
      await settings.jailCell.clickAddNew()
      await settings.module.switchToJailCellEntry()
      await settings.jailCellEntry.selectAtFacility()
      await settings.jailCellEntry.enterAtCellNo()
      await settings.jailCellEntry.selectAtCellType()
      await settings.jailCellEntry.enterAtCapacity()
      await settings.jailCellEntry.selectAtCameraName()
      await settings.jailCellEntry.enterAtNotes()
      await settings.jailCellEntry.clickResetButton()
      await settings.module.switchToJailCellEntry()
      await settings.jailCellEntry.verifyCellNoIsEmpty()
      await settings.jailCellEntry.verifyNotesIsEmpty()
      await settings.jailCellEntry.verifyCameraNameISEmpty()
      //Automated By : - Sarathkumar L on 06/12/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Defect
    });
  });

  test('Q2S5SettingsDefect2025_60128', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60128', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.clickCodeAddButton()
      await settings.sharedCodes.clickCodedCancelButton();// Issue, if fail in this line remove this line
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtCodeValue()
      await settings.sharedCodes.verifyAtCodeValueDescription()
      await settings.module.switchToSharedCodes()
      //Automated By : - Sarathkumar L on 06/12/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('Q2S5SettingsDefect2025_66075', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '66075', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxOfTheRowByFormName()
      await settings.qaForms.clickManageRepository()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qa.questionnarieRepository.saveNClose()
      await settings.module.switchToQAForms()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRandomRow()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.NavigateToQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtFormNameContainsInSelectForm(1)
      personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.verifyAtFileName();//created
      await qa.questionDataEntry.saveNExit();//created
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.NavigateToQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtFormNameInGrid(1);//created
      personnel.switchToPersonnelEntry()
      //Automated By : - Sarathkumar L on 08/20/2025
      //Quarter 3  :Â  Sprint 08 2025
      //Type of Test case : - Defect Scenario 2 & 7 Covered this TC - 48845
    });
  });

  test('Q2S5SettingsDefect2025_66105', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '66105', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Notification Format')
      //scenario1
      await settings.module.switchToNotificationFormat()
      await settings.notificationFormat.clickGridHeader('Notification type');//created
      await settings.notificationFormat.verifyGridIsEmpty();//created
      await settings.notificationFormat.clickGridHeader('Data master')
      await settings.notificationFormat.verifyGridIsEmpty()
      await settings.notificationFormat.clickGridHeader('Recipient master')
      await settings.notificationFormat.verifyGridIsEmpty()
      await settings.notificationFormat.clickGridHeader('Formatter file name')
      await settings.notificationFormat.verifyGridIsEmpty()
      await settings.notificationFormat.clickGridHeader('Inactive')
      await settings.notificationFormat.verifyGridIsEmpty()
      //scenario3
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.clickGridHeader('Juris');//created
      await settings.roles.verifyGridIsEmpty();//created
      await settings.roles.clickGridHeader('Role Name')
      await settings.roles.verifyGridIsEmpty()
      await settings.roles.clickGridHeader('Description')
      await settings.roles.verifyGridIsEmpty()
      await settings.roles.clickGridHeader('Inactive')
      await settings.roles.verifyGridIsEmpty()
      await settings.roles.clickGridHeader('Linked Role')
      await settings.roles.verifyGridIsEmpty()
      //scenario4
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickGridHeader('Juris');//created
      await settings.terminal.verifyGridIsEmpty();//created
      await settings.terminal.clickGridHeader('Terminal Name')
      await settings.terminal.verifyGridIsEmpty()
      await settings.terminal.clickGridHeader('Description')
      await settings.terminal.verifyGridIsEmpty()
      await settings.terminal.clickGridHeader('IP Address')
      await settings.terminal.verifyGridIsEmpty()
      await settings.terminal.clickGridHeader('CAD')
      await settings.terminal.verifyGridIsEmpty()
      await settings.terminal.clickGridHeader('Vehicle')
      await settings.terminal.verifyGridIsEmpty()
      //scenario5
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Message')
      await settings.module.switchToMessage()
      await settings.message.clickGridHeader('ID');//created
      await settings.message.verifyGridIsEmpty();//created
      await settings.message.clickGridHeader('Name')
      await settings.message.verifyGridIsEmpty()
      await settings.message.clickGridHeader('Module Name')
      await settings.message.verifyGridIsEmpty()
      await settings.message.clickGridHeader('Type')
      await settings.message.verifyGridIsEmpty()
      await settings.message.clickGridHeader('Ack')
      await settings.message.verifyGridIsEmpty()
      await settings.message.clickGridHeader('Default Message')
      await settings.message.verifyGridIsEmpty()
      await settings.message.clickGridHeader('Custom')
      await settings.message.verifyGridIsEmpty()
      //scenario6
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Repository')
      await settings.module.switchToRepository()
      await settings.repository.clickGridHeader('Repository ID');//created
      await settings.repository.verifyGridIsEmpty();//created
      await settings.repository.clickGridHeader('Repository Type')
      await settings.repository.verifyGridIsEmpty()
      await settings.repository.clickGridHeader('Default Name')
      await settings.repository.verifyGridIsEmpty()
      await settings.repository.clickGridHeader('Custom Name')
      await settings.repository.verifyGridIsEmpty()
      //Automated By : - Sarathkumar L on 08/21/2025
      //Quarter 3  :Â  Sprint 08 2025
      //Type of Test case : - Defect
    });
  });

  test('Q2S5SettingsDefect2025_55677', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55677', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectRowAtRoleName()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickAlarmEntryEditPermission()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickAtSearchCheckBoxByScreenNameInGrid()
      await settings.rolesEntry.save()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickViewHistoryButton()
      await settings.module.switchToPermissionHistory()
      await settings.permissionHistory.selectAtModule()
      await settings.permissionHistory.enterAtScreenID()
      await settings.permissionHistory.clickSearch()
      await settings.permissionHistory.verifyAtNewValueIsUnCheckedByScreenIDInGrid(0)
      await settings.permissionHistory.verifyAtOldValueIsCheckedByScreenIDInGrid(0)
      await settings.permissionHistory.closeScreen()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clearScreenID()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickAlarmEntryEditPermission()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickAtSearchCheckBoxByScreenNameInGrid()
      await settings.rolesEntry.save()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickViewHistoryButton()
      await settings.module.switchToPermissionHistory()
      await settings.permissionHistory.selectAtModule()
      await settings.permissionHistory.enterAtScreenID()
      await settings.permissionHistory.clickSearch()
      await settings.permissionHistory.verifyAtNewValueIsCheckedByScreenIDInGrid(4)
      await settings.permissionHistory.verifyAtOldValueIsCheckedByScreenIDInGrid(4);//
      await settings.permissionHistory.verifyAtRowCountInGrid()
      await settings.permissionHistory.verifyAtDateInGrid()
      await settings.permissionHistory.closeScreen()
      //Automated By : - chandrasekar.v on 7/23/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q2S5SettingsDefect2025_58273', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '58273', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.clickManageSectionButton()
      await qa.module.SwitchToQAFormSectionEntry()
      await qa.qAFormSection.EnterAtSectionName(1)
      await qa.qAFormSection.EnterAtSort(1)
      await qa.qAFormSection.ClickAddButton()
      await qa.qAFormSection.EnterAtSectionName(2)
      await qa.qAFormSection.EnterAtSort(2)
      await qa.qAFormSection.ClickAddButton()
      await qa.qAFormSection.SaveScreen()
      await qa.qAFormSection.ClickSaveNCloseButton()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.ClickManageQuestionsButton()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection(1)
      await qa.questionMaster.EnterAtQuestion(1)
      await qa.questionMaster.SelectAtAnswerType(1)
      await qa.questionMaster.SaveScreen()
      await qa.questionMaster.SelectAtSection(2)
      await qa.questionMaster.EnterAtQuestion(2)
      await qa.questionMaster.SelectAtAnswerType(2)
      await qa.questionMaster.SelectHideChecbox()
      await qa.questionMaster.SaveScreen()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.verifyUpArrowIsDisplayed()
      await qa.mManageQuestions.verifyDownArrowIsDisplayed()
      await qa.mManageQuestions.clickUpArrow()
      await qa.mManageQuestions.VerifyAtSectionInGrid(0,1)
      await qa.mManageQuestions.clickDownArrow()
      await qa.mManageQuestions.VerifyAtSectionInGrid(1,1)
      await qa.module.SwitchToManageQuestionsEntry()
      //Automated By : - chandrasekar.v on 7/23/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q2S5SettingsDefect2025_64219', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '64219', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.clickPhoenixFormRadioButton()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.clickManageSectionButton()
      await qa.module.SwitchToQAFormSectionEntry()
      await qa.qAFormSection.EnterAtSectionName()
      await qa.qAFormSection.EnterAtSort()
      await qa.qAFormSection.ClickAddButton()
      await qa.qAFormSection.SaveScreen()
      await qa.qAFormSection.CloseScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.ClickManageQuestionsButton()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection()
      await qa.questionMaster.EnterAtDisplayAs()
      await qa.questionMaster.EnterAtQuestion1()
      await qa.questionMaster.SelectAtAnswerType()
      await qa.questionMaster.SaveScreen()
      await qa.questionMaster.Close()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.qAFormEntry.ClickReviewButton()
      await qa.module.SwitchToQuestionReviewEntry()
      await qa.questionReview.verifyAtQuestion1()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.ClickManageQuestionsButton()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection(1)
      await qa.questionMaster.EnterAtDisplayAs(1)
      await qa.questionMaster.EnterAtQuestion2()
      await qa.questionMaster.SelectAtAnswerType(1)
      await qa.questionMaster.SaveScreen()
      await qa.questionMaster.Close()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.qAFormEntry.ClickReviewButton()
      await qa.module.SwitchToQuestionReviewEntry()
      await qa.questionReview.verifyAtQuestion2()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.ClickManageQuestionsButton()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection(2)
      await qa.questionMaster.EnterAtDisplayAs(2)
      await qa.questionMaster.EnterAtQuestionWithTab()
      await qa.questionMaster.SelectAtAnswerType(2)
      await qa.questionMaster.SaveScreen()
      await qa.questionMaster.Close()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.qAFormEntry.ClickReviewButton()
      await qa.module.SwitchToQuestionReviewEntry()
      await qa.questionReview.verifyAtQuestion3()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.ClickManageQuestionsButton()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection(2)
      await qa.questionMaster.EnterAtDisplayAs(2)
      await qa.questionMaster.enterAtQuestion3WithCopyPast()
      await qa.questionMaster.SelectAtAnswerType(2)
      await qa.questionMaster.SaveScreen()
      await qa.questionMaster.Close()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.qAFormEntry.ClickReviewButton()
      await qa.module.SwitchToQuestionReviewEntry()
      await qa.questionReview.verifyAtQuestion4()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.CloseScreen()
      await qa.module.SwitchToQAFormEntry()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      admission.switchToInmateSearch()
      admission.inmateSearchScreen.EnterAtSPNNO()
      admission.inmateSearchScreen.Search()
      admission.inmateSearchScreen.selectAtSPNInGrid()
      admission.switchToAdmissionEntry()
      admission.admissionEntry.navigateToQAFormsTab()
      admission.admissionEntry.qAFormsTab.selectAtSelectForm()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.verifyAtQuestion1()
      await qa.questionDataEntry.verifyAtQuestion2()
      await qa.questionDataEntry.verifyAtQuestion3()
      await qa.questionDataEntry.verifyAtQuestion4()
      await qa.questionDataEntry.SaveNClose()
      admission.switchToAdmissionEntry()
      admission.admissionEntry.navigateToQAFormsTab()
      admission.admissionEntry.qAFormsTab.verifyAtFormNameInGrid()
      admission.admissionEntry.qAFormsTab.selectAtFromInGrid()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.verifyAtQuestion1()
      await qa.questionDataEntry.verifyAtQuestion2()
      await qa.questionDataEntry.verifyAtQuestion3()
      await qa.questionDataEntry.verifyAtQuestion4()
      admission.switchToInmateSearch()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q2S5SettingsDefect2025_58296', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '58296', async () => {
      await loginPage.loginScreen.logon()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.ClickSystemParameterIcon()
      await settings.module.switchToSystemParamterScreen()
      await settings.sysParameter.clickApprovalParameterButton()
      await settings.module.switchToApprovalParameterWindow()
      //		settings.approvalParameter.selectAtModuleInGrid();
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.saveScreen()
      await settings.approvalParameter.closeScreen()
      await settings.module.switchToSystemParamterScreen()
      await settings.sysParameter.saveScreen()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.selectAtCodeValueDescription()
      await settings.maintainCodeValue.checkEnableApprovalRoutingCheckbox()
      await settings.maintainCodeValue.clickUpdate()
      await loaderPage.navigateToScreen('Activity Entry')
      await home.module.switchToActivityEntry()
      await activity.activityEntry.verifyAtActivityCategoryGroup()
      await activity.activityEntry.verifyAtCategory()
      await activity.activityEntry.VerifyAtActivityType()
      await activity.activityEntry.selectAtCategoryGroup()
      await activity.activityEntry.selectAtCategory()
      await activity.activityEntry.selectAtActivityType()
      await activity.activityEntry.tabActivityDateTime()
      await activity.activityEntry.selectAtActivityStatus()
      await activity.activityEntry.enterAtSubject()
      await activity.activityEntry.NavigateToPFTab()
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo()
      await home.module.switchToActivityEntry()
      await activity.activityEntry.clickSave()
      await activity.module.switchToActivityEntryApprovalRequest()
      await activity.activityEntryApprovalRequest.clickApproveNowRadioButton()
      await activity.activityEntryApprovalRequest.enterAtSupervisor()
      await activity.activityEntryApprovalRequest.saveScreen()
      await home.module.switchToActivityEntry()
      //Automated By : - chandrasekar.v on 8/04/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('Q2S5SettingsLegacy2025', () => {
  test('Q2S5SettingsLegacy2025_55752', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55752', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Juris')
      await settings.module.switchToJurisEntry()
      await settings.juris.enterAtJurisName()
      await settings.juris.enterAtAlias()
      await settings.juris.clickPoliceTab()
      await settings.juris.policeTab.enterAtCountyName()
      await settings.juris.policeTab.enterAtAddress()
      await settings.module.switchToJurisEntry()
      await settings.juris.saveButton()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToJurisEntry()
      //Automated By : Sarathkumar L on 05/26/2025
      //Sprint :-  : Quarter  2  :  Sprint 5  2025
      //Type of Test case : - Product Backlog SP
    });
  });

  test('Q2S5SettingsLegacy2025_58074', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '58074', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('FTP Interface Search')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.selectAtInterface()
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.verifyAtInterfaceInGrid(0)
      await settings.module.switchToFTPInterfaceSearch()
      //Automated By : Sarathkumar L on 05/27/2025
      //Sprint :-  : Quarter  2  :  Sprint 5  2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('Q2S5SettingsLegacy2025_57964', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '57964', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.ClickCaseNotificationeButton()
      await home.module.switchToNotificationScreen()
      await home.notification.selectAtDistributionList()
      await home.notification.selectAtNotifyEvent()
      await home.notification.verifyAllNotificationGridColumnName()
      await home.notification.clickAddButton()
      await home.notification.SaveScreen()
      await home.module.switchToNotificationScreen()
      await home.notification.verifyRequestedNoGeneratedInGrid()
      await home.notification.verifyAtNotificationListDetailsInGrid(0)
      await home.notification.VerifyAtPeriod(0)
      await home.notification.VerifyAtNotifyEvent(0)
      await home.notification.verifyAtRequestedByInGrid()
      //Automated By : Sarathkumar L on 05/28/2025
      //Sprint :-  : Quarter  2  :  Sprint 5  2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('Q2S5SettingsLegacy2025_58055', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '58055', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('FTP Interface Search')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.clickAddButton()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.selectAtInterface()
      await settings.fTPInterfaceEntry.enterAtFolderPath()
      await settings.fTPInterfaceEntry.selectDBName()
      await settings.fTPInterfaceEntry.enterUserName()
      await settings.fTPInterfaceEntry.enterPassword()
      await settings.fTPInterfaceEntry.enterPort()
      await settings.fTPInterfaceEntry.selectLocationType()
      await settings.fTPInterfaceEntry.saveScreen()
      await settings.fTPInterfaceEntry.verifyAdditionSuccessfulMessage()
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.selectAtInterface()
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.verifyAtHostSiteInGrid()
      // Automated By : - Sarathkumar L on 05/28/2025
      //Sprint :-  : Quarter  2  :  Sprint 5  2025
      // Type of Test case : Legacy Testcase
    });
  });

  test('Q2S5SettingsLegacy2025_58051', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '58051', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.clickSystemCheckbox()
      await settings.sharedCodes.selectAtMJCategory()
      await settings.sharedCodes.clickAccountModuleCheckbox()
      await settings.sharedCodes.enterAtCodeValueLength()
      await settings.sharedCodes.saveScreen()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      await settings.sharedCodes.saveNClose()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtDescription()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeCategoryInGrid(1)
      await settings.coded.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtDescription(1)
      await settings.sharedCodes.clickUserAndSystemCheckbox()
      await settings.sharedCodes.selectAtMJCategory()
      await settings.sharedCodes.clickAccountModuleCheckbox()
      await settings.sharedCodes.enterAtCodeValueLength()
      await settings.sharedCodes.saveScreen()
      await settings.sharedCodes.verifyAdditionSuccessfulMessage()
      await settings.sharedCodes.saveNClose()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtDescription(1)
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeCategoryInGrid(2)
      await settings.module.switchToCodedScreen()
      // Automated By : - Sarathkumar L on 05/29/2025
      //Sprint :-  : Quarter  2  :  Sprint 5  2025
      // Type of Test case : Enhancement
    });
  });

  test('Q2S5SettingsLegacy2025_60245', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60245', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Notification Format')
      await settings.module.switchToNotificationFormat()
      await settings.notificationFormat.verifyNotificationTypeDropdownIsDisplayed()
      await settings.notificationFormat.verifyFormatterFileNameFieldIsDisplayed()
      await settings.notificationFormat.verifyIncludeInactiveFieldIsDisplayed()
      await settings.notificationFormat.verifyDataMasterFieldIsDisplayed()
      await settings.notificationFormat.verifyRecipientMasterFieldIsDisplayed()
      await settings.notificationFormat.selectAtNotificationType()
      await settings.notificationFormat.enterAtFormatterFileName()
      await settings.notificationFormat.enterAtDataMaster()
      await settings.notificationFormat.enterAtRecipientMaster()
      await settings.notificationFormat.clickSearch()
      await settings.notificationFormat.verifyAtNotificationTypeInGrid()
      await settings.notificationFormat.verifyAtDataMasterInGrid()
      await settings.notificationFormat.verifyAtRecipientMasterInGrid()
      await settings.notificationFormat.verifyAtFormatterFileNameInGrid()
      //Automated By : - Sarathkumar L on 06/12/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('Q2S5SettingsLegacy2025_60316', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60316', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickAddNew()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.enterAtDistributionListName()
      await settings.distributionEntry.enterAtDescription()
      await settings.distributionEntry.verifyPFRadioButtonIsDisplayed()
      await settings.distributionEntry.verifyPFIsDisplayed()
      await settings.distributionEntry.enterAtPFNo(1)
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.verifyPFNameInGrid()
      await settings.distributionEntry.saveScreen()
      await settings.distributionEntry.verifyAdditionSuccessfulMessage()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.verifyPFNameInGrid()
      //Automated By : - Sarathkumar L on 06/12/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('Q2S5SettingsLegacy2025_60234', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60234', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickAddNew()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.enterAtDistributionListName()
      await settings.distributionEntry.enterAtDescription()
      await settings.distributionEntry.clickEmailRadioButton()
      await settings.distributionEntry.verifyEmailTextboxIsDisplayed()
      await settings.distributionEntry.verifyNameTextboxIsDisplayed()
      await settings.distributionEntry.enterAtEmail(1)
      await settings.distributionEntry.enterAtName()
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.verifyAtKeyByTypeInGrid()
      await settings.distributionEntry.saveScreen()
      await settings.distributionEntry.verifyAdditionSuccessfulMessage()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.clickEmailRadioButton()
      await settings.distributionEntry.enterAtEmail(2)
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.verify1014NotAValidEmailAddress()
      await settings.module.switchToDistributionEntry()
      //Automated By : - Sarathkumar L on 06/13/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('Q2S5SettingsLegacy2025_60238', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60238', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickAddNew()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.enterAtDistributionListName()
      await settings.distributionEntry.enterAtDescription()
      await settings.distributionEntry.clickOtherRadioButton()
      await settings.distributionEntry.verifyInterfaceTypeIsDisplayed()
      await settings.distributionEntry.verifyKeyIsDisplayed()
      await settings.distributionEntry.verifyMemberDescriptionIsDisplayed()
      await settings.distributionEntry.selectAtInterfaceType()
      await settings.distributionEntry.enterAtKey()
      await settings.distributionEntry.enterAtMemberDescription()
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.verifyAtTypeInGrid()
      await settings.distributionEntry.verifyAtKeyInGrid()
      await settings.distributionEntry.verifyAtTextInGrid()
      await settings.distributionEntry.saveScreen()
      await settings.distributionEntry.verifyAdditionSuccessfulMessage()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.verifyAtTypeInGrid()
      await settings.distributionEntry.verifyAtKeyInGrid()
      await settings.distributionEntry.verifyAtTextInGrid()
      //Automated By : - Sarathkumar L on 06/13/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Enhancement
    });
  });

  test('Q2S5SettingsLegacy2025_60462A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60462A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyGridRowCount()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.selectAtLocationUseFor()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtLocationUseForColumnValuesInGrid();//created
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.EnterAtCode()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtCodeColumnValueInGrid();//created
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.EnterAtCode()
      await settings.storageLocation.selectAtLocationUseFor()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtLocationCodeInGrid()
      await settings.storageLocation.verifyAtLocationUseForColumnValuesInGrid()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.EnterAtCode()
      await settings.storageLocation.enterAtDescription()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtLocationCodeInGrid()
      await settings.storageLocation.VerifyAtDescriptionInGrid()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.selectAtLocationUseFor()
      await settings.storageLocation.enterAtDescription()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtLocationUseForColumnValuesInGrid()
      await settings.storageLocation.VerifyAtDescriptionInGrid()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.EnterAtCode()
      await settings.storageLocation.selectAtLocationUseFor()
      await settings.storageLocation.enterAtDescription()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.verifyAtLocationCodeInGrid()
      await settings.storageLocation.verifyAtLocationUseForColumnValuesInGrid()
      await settings.storageLocation.VerifyAtDescriptionInGrid()
      await settings.storageLocation.reloadStorageLocation()
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickSearchButton()
      await settings.storageLocation.clickGridHeader(1)
      await settings.storageLocation.verifyColumnsSortingAsAscending('Code')
      await settings.storageLocation.verifyColumnsSortingAsDescending('Code')
      await settings.storageLocation.clickGridHeader(2)
      await settings.storageLocation.verifyColumnsSortingAsAscending('Location Use For')
      await settings.storageLocation.verifyColumnsSortingAsDescending('Location Use For')
      await settings.storageLocation.clickGridHeader(3)
      await settings.storageLocation.verifyColumnsSortingAsAscending('Description')
      await settings.storageLocation.verifyColumnsSortingAsDescending('Description')
      //Automated By : - Sarathkumar L on 08/20/2025
      //Quarter 3  :Â  Sprint 08 2025
      //Type of Test case : - Defect
    });
  });

});

test.describe('Q2S5SettingsPBSP2025', () => {
  test('Q2S5SettingsPBSP2025_55897', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55897', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter200AsFalse()
      await settings.sysParameter.clickViewHistoryButton()
      await settings.sysParameter.switchToHistoryWindow()
      await settings.viewHistoryWindow.enterAtParameterID()
      await settings.viewHistoryWindow.clickSearchButton()
      await settings.viewHistoryWindow.verifyAtParameterIDByModuleInGrid()
      await settings.viewHistoryWindow.verifyAtParameterNameByModuleInGrid()
      await settings.viewHistoryWindow.verifyAtNewValueByParameterIDInGrid()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter200AsTrue()
      await settings.module.switchToSystemParamter()
      //Automated By : Sarathkumar L on 05/26/2025
      //Sprint :-  : Quarter  2  :  Sprint 5  2025
      //Type of Test case : - Product Backlog SP
    });
  });

  test('Q2S5SettingsPBSP2025_55899', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55899', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectAtCustomCategory(1)
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyAtAIMugMatchAPIURL199()
      await settings.sysParameter.selectAtModule1()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyNoRecordFoundAcknowledgeMessage()
      await settings.module.switchToSystemParamter()
      //Automated By : Sarathkumar L on 05/27/2025
      //Sprint :-  : Quarter  2  :  Sprint 5  2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('Q2S5SettingsPBSP2025_63573', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63573', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Juris')
      await settings.module.switchToJurisEntry()
      await settings.juris.clickReportHeaderFooterTab()
      await settings.juris.reportHeaderFooter.verifyProsecutorsOfficeSealDeleteIconIsDisplayed()
      await settings.juris.reportHeaderFooter.clickProsecutorsOfficeSealDeleteIcon()
      await settings.juris.reportHeaderFooter.verify6071ConfirmPopup()
      await settings.module.switchToJurisEntry()
      await settings.juris.clickReportHeaderFooterTab()
      await settings.juris.reportHeaderFooter.clickReportHeaderField()
      // objectIdentification.windowHandle.switchToMainWindow()
      await settings.module.switchToJurisEntry()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q2S5SettingsPBSP2025_63726', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63726', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.clickAddNew()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.selectAtTemplate()
      await settings.textMgmt.clickTextName()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.save()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.verifyAtText()
      await settings.textMgmt.verifyAtSelectedTemplate()
      await settings.textMgmt.clickDetailsTab()
      await settings.textMgmt.detailsTab.enterAtRichText()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.save()
      await settings.module.switchToTextMgmt()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('Q2S6SettingsLegacy2025', () => {
  test('Q2S6SettingsLegacy2025_60474', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60474', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickAddNewButton()
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.SelectAtLocationUseFor()
      await settings.storageLocationEntry.selectAtStorageBuilding()
      await settings.storageLocationEntry.selectAtStorageRoom()
      await settings.storageLocationEntry.selectAtStorageRow()
      await settings.storageLocationEntry.selectAtStorageShelf()
      await settings.storageLocationEntry.EnterAtDescription()
      await settings.storageLocationEntry.clickNotInInventoryRoom()
      await settings.storageLocationEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.verifyLocationCodeGeneratedAs16Digit()
      await settings.storageLocationEntry.verifyBarcodeGeneratedAs16Digit()
      await settings.module.switchToStorageLocationEntry()
      //Automated By : - Sarathkumar L on 06/17/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

  test('Q2S6SettingsLegacy2025_60464', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60464', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickAddNewButton()
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.SelectAtLocationUseFor()
      await settings.storageLocationEntry.EnterAtDescription()
      await settings.storageLocationEntry.enterAtNotes()
      await settings.storageLocationEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.verifyLocationCodeGeneratedAs16Digit()
      await settings.storageLocationEntry.verifyBarcodeGeneratedAs16Digit()
      //			String barcode = settings.storageLocationEntry.getBarcode();
      //			settings.storageLocationEntry.clickBarcodeIcon();
      //			settings.storageLocationEntry.downloadBarcode();//created
      //			int randomNumber = Randomized.getRandomNumber(100);
      //			objectIdentification.readPDF.SaveAsPDFfileToLocation('Barcode' + randomNumber);
      //			String readPDF = objectIdentification.readPDF.ReadPDF('Barcode' + randomNumber);
      //			objectIdentification.readPDF.verifyContentInsidePDF(readPDF, barcode);
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.clickInactiveCheckBox()
      await settings.storageLocationEntry.clickResetIcon()
      await settings.storageLocationEntry.verifyInactiveCheckboxNotSelected()
      await settings.storageLocationEntry.SaveNClose()
      // objectIdentification.windowHandle.verifyWindowNotExists('Storage Location Entry')
      await settings.module.switchToStorageLocation()
      //Automated By : - Sarathkumar L on 06/17/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Checklist
    });
  });

  test('Q2S6SettingsLegacy2025_60024', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60024', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleRowCheckBox()
      await settings.roles.clickPFAllowedLink()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtPF()
      await settings.rolesEntry.clickAddButton()
      await settings.rolesEntry.verifyAtPFCodeInGrid()
      await settings.rolesEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.selectAtPFRowCheckBoxInGrid()
      await settings.rolesEntry.clickDeleteSelectedButton()
      await settings.rolesEntry.verify4DoYouReallyWantToDeleteConfirmationPopup()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyRecordNotExistInGrid()
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.tabTheFromDateAndTime()
      await settings.accessLog.tabTheToDateAndTime()
      await settings.accessLog.enterAtRepositoryID()
      await settings.accessLog.selectAtAccessType(1)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(1)
      await settings.accessLog.verifyAtDescriptionByAccessInGrid(1)
      await settings.accessLog.verifyAtPFCodeByAccessInGrid(1)
      await settings.accessLog.selectAtAccessType(2)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(2)
      await settings.accessLog.verifyAtDescriptionByAccessInGrid(2)
      await settings.accessLog.verifyAtPFCodeByAccessInGrid(2)
      await settings.accessLog.selectAtAccessType(3)
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyAtAccessInGrid(3)
      await settings.accessLog.verifyAtDescriptionByAccessInGrid(3)
      await settings.accessLog.verifyAtPFCodeByAccessInGrid(3)
      // need to verify the delete access log
      //Automated By : - Sarathkumar L on 06/18/2025
      //Sprint :-Â  :Â Quarter  2:Â  Sprint  6 2025
      //Type of Test case : - Legacy
    });
  });

  test('Q2S6SettingsLegacy2025_60225', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60225', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Distribution List')
      await settings.module.switchToDistributionList()
      await settings.distributionList.clickAddNew()
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.enterAtDistributionListName()
      await settings.distributionEntry.enterAtDescription()
      await settings.distributionEntry.verifyPFRadioButtonIsDisplayed()
      await settings.distributionEntry.verifyPFIsDisplayed();//Need to change as PF field verify//updated
      await settings.distributionEntry.enterAtPFNo(0)
      await settings.distributionEntry.clickAddButton()
      await settings.distributionEntry.verifyAtTypeInGridByKey(1)
      await settings.distributionEntry.verifyAtKeyInGrid(1)
      await settings.distributionEntry.verifyAtTextInGrid(1)
      await settings.distributionEntry.clickAddMultiplePFButton()
      await home.module.switchToAddMultiplePFScreen()
      await home.addMultiplePF.enterAtLastName()
      await home.addMultiplePF.clickSearchButton()
      await home.addMultiplePF.clickSelectedPFCheckboxByName(1)
      await home.addMultiplePF.clickSelectedPFCheckboxByName(2)
      await home.addMultiplePF.ClickSelectAll();// ensure this need or not
      await home.addMultiplePF.ClickAddTheSelectPFToList()
      // objectIdentification.windowHandle.verifyWindowNotExistsByURL('frmAddMultiPF.aspx')
      await settings.module.switchToDistributionEntry()
      await settings.distributionEntry.verifyAtKeyInGrid(2)
      await settings.distributionEntry.verifyAtTextInGrid(2)
      await settings.distributionEntry.verifyAtKeyInGrid(3)
      await settings.distributionEntry.verifyAtTextInGrid(3)
      await settings.distributionEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToDistributionEntry()
      //Automated By : - Sarathkumar L on 06/18/2025
      //Sprint :-Â  :Â Quarter  2:Â  Sprint  6 2025
      //Type of Test case : - Legacy
    });
  });

  test('Q2S6SettingsLegacy2025_58268', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '58268', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.enterAtJobName()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.clickAtJobNameInGrid()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickScheduleTab()
      await settings.jobEntry.scheduleJobScreenTab.verifyMinuteRadioButtonIsEnabled()
      await settings.jobEntry.scheduleJobScreenTab.verifyHourRadioButtonIsEnabled()
      await settings.jobEntry.scheduleJobScreenTab.verifyDailyRadioButtonIsEnabled()
      await settings.jobEntry.scheduleJobScreenTab.verifyWeeklyRadioButtonIsEnabled()
      await settings.jobEntry.scheduleJobScreenTab.verifyMonthlyRadioButtonIsEnabled()
      await settings.jobEntry.scheduleJobScreenTab.verifyYearlyRadioButtonIsEnabled()
      await settings.jobEntry.clickNotificationTab()
      await settings.jobEntry.notificationJobScreenTab.enterAtNotifyToPF(1)
      await settings.jobEntry.notificationJobScreenTab.clickAdd()
      await settings.jobEntry.notificationJobScreenTab.verifyAtNotifyPFInGrid(1)
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToJobEntry()
      await settings.jobEntry.clickNotificationTab()
      await settings.jobEntry.notificationJobScreenTab.enterAtNotifyEmail()
      await settings.jobEntry.notificationJobScreenTab.clickAdd()
      await settings.jobEntry.notificationJobScreenTab.verifyAtNotifyPFInGrid(2)
      await settings.module.switchToJobEntry()
      await settings.jobEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated By : - Sarathkumar L on 06/19/2025
      //Sprint :-Â  :Â Quarter  2:Â  Sprint  6 2025
      //Type of Test case : - Product Backlog
    });
  });

  test('Q2S6SettingsLegacy2025_58174', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '58174', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.enterAtTextName(1)
      await settings.textScreen.checkIncludeInactiveCheckBox();// Lines updated Based on TC  - 72667
      await settings.textScreen.clickSearch()
      await settings.textScreen.verifyAtInactiveRecordInGridByTextName(1)
      await settings.textScreen.checkIncludeInactiveCheckBox()
      await settings.textScreen.clearTextName()
      await settings.textScreen.enterAtTextName()
      await settings.textScreen.clickSearch()
      await settings.textScreen.selectAtTextName()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.clickDetailsTab()
      await settings.textMgmt.detailsTab.verifyPasswordFontAsConsolas()
      //Automated By : - Sarathkumar L on 06/23/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('Q2S6SettingsLegacy2025_55889', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55889', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      //Scenario1
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormNameInGrid()
      //Scenario2
      await settings.qaForms.reloadQAFormsTab()
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormRefNoInGrid()
      //Scenario3
      await settings.qaForms.reloadQAFormsTab()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType(1)
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtTypeColumnInGrid(1)
      await settings.qaForms.selectRandomGridRow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyEvaluationFormRadioButtonIsSelected()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      //Scenario4
      await settings.qaForms.reloadQAFormsTab()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType(2)
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtTypeColumnInGrid(2)
      await settings.qaForms.selectRandomGridRow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyPDFRadioButtonIsSelected()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      //Scenario5
      await settings.qaForms.reloadQAFormsTab()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType(3)
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtTypeColumnInGrid(3)
      await settings.qaForms.selectRandomGridRow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifyPhoenixFormRadioButtonIsSelected()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      //Scenario6
      await settings.qaForms.reloadQAFormsTab()
      await settings.module.switchToQAForms()
      await settings.qaForms.clickSampleCheckbox()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.verifySampleCheckboxIsChecked()
      await qa.qAFormEntry.CloseScreen()
      await settings.module.switchToQAForms()
      //Scenario7
      await settings.qaForms.reloadQAFormsTab()
      await settings.module.switchToQAForms()
      await settings.qaForms.selectIncludeSharedCheckbox()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtJurisInGrid(1)
      await settings.qaForms.verifyAtJurisInGrid(2)
      await settings.qaForms.verifyAtJurisInGrid(3)
      await settings.qaForms.verifyAtJurisInGrid(4)
      await settings.qaForms.verifyAtJurisInGrid(5)
      //Scenario8
      await settings.qaForms.reloadQAFormsTab()
      await settings.module.switchToQAForms()
      await settings.qaForms.clickIncludeInactiveCheckbox()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyIncludingInactiveFormsIsAvailableInGrid()
      await settings.module.switchToQAForms()
      //Automated By : - Sarathkumar L on 06/23/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('Q2S6SettingsLegacy2025_55902', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55902', async () => {
      await loginPage.loginScreen.logon()
      //scenario1
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.verifyManageRepositoryButtonIsEnabled()
      await settings.qaForms.clickManageRepository()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.save()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qa.questionnarieRepository.saveNClose()
      //scenario2
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.rightClickVerifyOptionsByFormNameInGrid()
      await settings.qaForms.rightClickAndSelectOptionByFormNameInGrid(1)
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.save()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qa.questionnarieRepository.saveNClose()
      //scennario3
      await settings.module.switchToQAForms()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.clickOnGridrow()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID(1)
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.verifyAtRepositoryIDInGrid(1)
      await qa.module.SwitchToQAFormEntry()
      //Automated By : - Sarathkumar L on 06/24/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Functional
    });
  });

  test('Q2S6SettingsLegacy2025_60403', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60403', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.clickCodeAddButton()
      await settings.sharedCodes.clickCodedCancelButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtCodeValue()
      await settings.sharedCodes.verifyAtCodeValueDescription()
      await settings.sharedCodes.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Injury Rpt Search')
      personnel.switchToInjuryRptSearch()
      personnel.injuryRptSearch.clickAddNew()
      personnel.switchToInjuryReportEntry()
      personnel.injuryReportEntry.tabOutPFNo()
      personnel.injuryReportEntry.tabOutDateOfInjury()
      personnel.injuryReportEntry.verifyAtTypeOfInjury()
      personnel.injuryReportEntry.selectAtTypeOfInjury()
      personnel.injuryReportEntry.save()
      personnel.switchToInjuryReportEntry()
      //Automated By : - Sarathkumar L on 06/25/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy Testcase
    });
  });

  test('Q2S6SettingsLegacy2025_60398', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60398', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('FTP Interface Search')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.clickAddButton()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.selectAtInterface()
      await settings.fTPInterfaceEntry.selectAtDBName()
      await settings.fTPInterfaceEntry.enterAtFolderPath()
      await settings.fTPInterfaceEntry.enterAtUserName()
      await settings.fTPInterfaceEntry.enterAtPassword()
      await settings.fTPInterfaceEntry.enterAtPort()
      await settings.fTPInterfaceEntry.selectAtProduct()
      await settings.fTPInterfaceEntry.selectAtLocationType()
      await settings.fTPInterfaceEntry.clickJobServerCheckbox()
      await settings.fTPInterfaceEntry.selectAtLogonType()
      await settings.fTPInterfaceEntry.enterAtJobPath()
      await settings.fTPInterfaceEntry.selectAtFileType()
      await settings.fTPInterfaceEntry.selectAtAgencyType()
      await settings.fTPInterfaceEntry.selectAtKeyFile()
      await settings.fTPInterfaceEntry.selectAtKeyID()
      await settings.fTPInterfaceEntry.enterAtPassPhraseKey()
      await settings.fTPInterfaceEntry.selectAtParent()
      await settings.fTPInterfaceEntry.enterFromStartDateAsCurrentDate()
      await settings.fTPInterfaceEntry.enterAtSchemaVersion()
      await settings.fTPInterfaceEntry.enterAtReceivePath()
      await settings.fTPInterfaceEntry.enterAtSubPath()
      await settings.fTPInterfaceEntry.enterAtCustom1()
      await settings.fTPInterfaceEntry.enterAtCustom2()
      await settings.fTPInterfaceEntry.enterAtCustom3()
      await settings.fTPInterfaceEntry.enterAtCustom4()
      await settings.fTPInterfaceEntry.enterAtCustom5()
      await settings.fTPInterfaceEntry.enterKeepLog()
      await settings.fTPInterfaceEntry.selectType()
      await settings.fTPInterfaceEntry.selectNonPeakHrs()
      await settings.fTPInterfaceEntry.enterFrom()
      await settings.fTPInterfaceEntry.enterTo()
      await settings.fTPInterfaceEntry.enterCC()
      await settings.fTPInterfaceEntry.enterSubject()
      //			settings.fTPInterfaceEntry.selectAtEmailTemplate();
      await settings.fTPInterfaceEntry.saveScreen()
      await settings.fTPInterfaceEntry.verifyAdditionSuccessfulMessage()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.clickResetIcon()
      await settings.fTPInterfaceEntry.verifyAtJobPath()
      await settings.fTPInterfaceEntry.verifyAtPassPhraseKey()
      await settings.fTPInterfaceEntry.verifyAtKeyFileDropdown()
      await settings.fTPInterfaceEntry.verifyAtKeyIDDropdown()
      await settings.fTPInterfaceEntry.clickPrintIcon()
      await home.module.switchToSelectReport()
      await home.selectReport.VerifySelectReportScreenOpened()
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.clickInActiveCheckbox()
      await settings.fTPInterfaceEntry.verifyInactiveDate()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.saveNClose()
      await settings.module.switchToFTPInterfaceSearch()
      // objectIdentification.windowHandle.verifyWindowNotExists('FTP Intertface Entry')
      await settings.module.switchToFTPInterfaceSearch()
      //Automated By : - Sarathkumar L on 06/16/2025
      //Quarter 2  :Â  Sprint 06 2025
      //Type of Test case : - Legacy
    });
  });

});

test.describe('Q1SettingsFunctional2025', () => {
  test('Q1SettingsFunctional2025_57952', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '57952', async () => {
      await loginPage.loginScreen.logonUsingTestContextOtherDB()
      //scenario1
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxInGrid()
      await settings.qaForms.verifyManageRepositoryButtonIsEnabled()
      await settings.qaForms.clickManageRepository()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid()
      await qa.questionnarieRepository.saveNClose()
      await loaderPage.navigateToScreenByScreenIDWithContains('5011')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.selectAtType()
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.verifyAtTypeInColumnValues()
      await settings.cFSCode.selectRandomRowInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickOthersTab()
      await settings.cFSCodeEntry.cFSCodeOthersTab.selectAtQuestionnaireForCalltaker()
      await settings.cFSCodeEntry.cFSCodeOthersTab.verifyAtQuestionnaireForCalltakerDropDown()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.saveScreen()
      await settings.module.switchToCFSCodeEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToCFSCodeEntry()
      //Automated By : - Sarathkumar L on 06/24/2025
      //Sprint :-Â  :Â Quarter  2:Â  Sprint  6 2025
      //Type of Test case : - Product Backlog
    });
  });

});

test.describe('Q3S8SettingsDefect2025', () => {
  test('Q3S8SettingsDefect2025_66185', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '66185', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.selectAtCodeCategory()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAtCodeValueDescription()
      await settings.sharedCodes.clearSortOrder();//created
      await settings.sharedCodes.enterAtSortOrderInPopUp()
      await settings.sharedCodes.clickUpdateButton()
      await settings.sharedCodes.closeScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRandomRow()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickRefreshIcon()
      personnel.personnelEntry.clickMainTab()
      personnel.personnelEntry.personnelEntryMainTab.verifyHairDropdownIsEnabled()
      personnel.personnelEntry.personnelEntryMainTab.verifyCodeValueDescriptionIsDisplayedFirstInHairDropdown();//created
      personnel.switchToPersonnelEntry()
      //Automated By : - chandrasekar.v on 7/23/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_63702', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63702', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Repository')
      await settings.module.switchToRepository()
      await settings.repository.clickSearch()
      await settings.repository.verifyAtColumnValuesAreSortedAscendingOrder(1)
      await settings.repository.verifyAtColumnValuesAreSortedDescendingOrder(1)
      await settings.repository.verifyAtColumnValuesAreSortedAscendingOrder(2)
      await settings.repository.verifyAtColumnValuesAreSortedDescendingOrder(2)
      await settings.repository.verifyAtColumnValuesAreSortedAscendingOrder(3)
      await settings.repository.verifyAtColumnValuesAreSortedDescendingOrder(3)
      await settings.module.switchToRepository()
      await settings.repository.selectAtRepositoryType()
      await settings.repository.clickSearch()
      await settings.repository.verifyAtColumnValuesAreSortedAscendingOrder(1)
      await settings.repository.verifyAtColumnValuesAreSortedDescendingOrder(1)
      await settings.repository.verifyAtColumnValuesAreSortedAscendingOrder(2)
      await settings.repository.verifyAtColumnValuesAreSortedDescendingOrder(2)
      await settings.repository.verifyAtColumnValuesAreSortedAscendingOrder(3)
      await settings.repository.verifyAtColumnValuesAreSortedDescendingOrder(3)
      //Automated By : - chandrasekar.v on 8/13/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_60592', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60592', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Offense Codes')
      await settings.module.switchToOffenseCodes()
      await settings.offenseCodes.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtOffenseCode()
      await settings.sharedCodes.saveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.sharedCodes.verifyAtOffenseCode()
      await settings.sharedCodes.clickPrintIcon()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtOffenseCode()
      await settings.module.switchToSharedCodes()
      //Automated By : - chandrasekar.v on 8/18/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_62529', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '62529', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Vehicle Make Model')
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtMake()
      await settings.sharedCodes.enterSpaceInModelCode()
      await settings.sharedCodes.enterAtModelDescription()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.verify1018Acknowledge()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickReset()
      await settings.sharedCodes.enterAtMake()
      await settings.sharedCodes.enterAtModelCode()
      await settings.sharedCodes.enterSpaceInModelDescription()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.verify1018Acknowledge()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickSave()
      await settings.sharedCodes.verify1018Acknowledge()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickReset()
      await settings.sharedCodes.enterAtMake()
      await settings.sharedCodes.enterAtModelCode()
      await settings.sharedCodes.enterAtModelDescription()
      await settings.sharedCodes.clickAddButton()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToSharedCodes()
      //Automated By : - chandrasekar.v on 8/18/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_60525', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60525', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Offense Codes')
      await settings.module.switchToOffenseCodes()
      await settings.offenseCodes.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterSpaceInOffenseCode()
      await settings.sharedCodes.clickSave()
      await settings.sharedCodes.verify1018Acknowledge()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtOffenseCode()
      await settings.sharedCodes.saveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToSharedCodes()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_62902', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '62902', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Quick Activity Config')
      await settings.module.switchToQuickActivityConfig()
      await settings.quickActivityConfig.clickActivityArrow()
      await settings.quickActivityConfig.selectAtSubCategoryInGrid()
      await settings.quickActivityConfig.clickActivityType()
      await settings.module.switchToActivityTypeMapping()
      await settings.activityTypeMapping.enterAtActivityType()
      await settings.activityTypeMapping.enterAtSeq()
      await settings.activityTypeMapping.clickAddbutton()
      await settings.activityTypeMapping.selectAtActivityTypeInGrid()
      await settings.activityTypeMapping.clickInactiveCheckBox()
      await settings.activityTypeMapping.clickUpdateButton()
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await settings.module.switchToActivityTypeMapping()
      await settings.activityTypeMapping.verifyAtInactiveCheckBoxIsCheckedInGrid()
      await settings.activityTypeMapping.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToActivityTypeMapping()
      //Automated By : - chandrasekar.v on 8/21/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_63565', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63565', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Release Codes')
      await settings.module.switchToReleaseCodes()
      await settings.releaseCodes.clickSearch()
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrder(1)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrder(1)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrder(2)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrder(2)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(3)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(3)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(4)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(4)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(5)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(5)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(6)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(6)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(7)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(7)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(8)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(8)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(9)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(9)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(10)
      await settings.releaseCodes.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(10)
      await settings.module.switchToReleaseCodes()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_63690', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63690', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.CloseScreen()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Performance Review')
      personnel.switchToPerformanceReview()
      personnel.performanceReview.enterAtPFCode()
      personnel.performanceReview.clickSearchButton()
      personnel.performanceReview.selectRowAtPFCode()
      personnel.switchToPerformanceReviewEntry()
      personnel.performanceReviewEntry.clickQAFormTab()
      personnel.performanceReviewEntry.qAFormTab.selectAtForm()
      await qa.module.SwitchToQuestionDataEntry()
      // objectIdentification.windowHandle.windowExist('Question Data Entry')
      await qa.questionDataEntry.verifyAtFileName()
      await qa.questionDataEntry.clickReportSaveNExit()
      personnel.switchToPerformanceReviewEntry()
      personnel.performanceReviewEntry.clickQAFormTab()
      personnel.performanceReviewEntry.qAFormTab.verifyAtPfInGrid()
      personnel.performanceReviewEntry.qAFormTab.verifyAtFormName()
      personnel.switchToPerformanceReviewEntry()
      //Automated By : - chandrasekar.v on 8/25/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_63565A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63565A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Report Repository')
      await settings.module.switchToReportRepository()
      await settings.reportRepository.clickSearch()
      await settings.reportRepository.verifyAtColumnValuesAreSortedAscendingOrderForInteger(1)
      await settings.reportRepository.verifyAtColumnValuesAreSortedDescendingOrderForInteger(1)
      await settings.reportRepository.verifyAtColumnValuesAreSortedAscendingOrder(2)
      await settings.reportRepository.verifyAtColumnValuesAreSortedDescendingOrder(2)
      //		settings.reportRepository.verifyAtColumnValuesAreSortedAscendingOrder(3);  // Type field don't have Sorting functionality
      //		settings.reportRepository.verifyAtColumnValuesAreSortedDescendingOrder(3);
      await settings.reportRepository.verifyAtColumnValuesAreSortedAscendingOrder(4)
      await settings.reportRepository.verifyAtColumnValuesAreSortedDescendingOrder(4)
      await settings.reportRepository.verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(5)
      await settings.reportRepository.verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(5)
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsDefect2025_63565C', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63565C', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('User query search')
      await settings.module.switchToUserQuerySearch()
      await settings.userQuerySearch.clickSearchButton()
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedAscendingOrder(1)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedDescendingOrder(1)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedAscendingOrder(2)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedDescendingOrder(2)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedAscendingOrder(3)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedDescendingOrder(3)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedAscendingOrder(4)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedDescendingOrder(4)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedAscendingOrder(5)
      await settings.userQuerySearch.verifyAtColumnValuesAreSortedDescendingOrder(5)
      await settings.module.switchToUserQuerySearch()
      //Automated By : - Bavithra on 08/21/2025
      //Sprint :-Â  :Â Quarter  3 :Â  Sprint 08
    });
  });

});

test.describe('Q3DailyDefectCRM2025', () => {
  test('Q3DailyDefectCRM2025_64127', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '64127', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Repository')
      await settings.module.switchToRepository()
      await settings.repository.enterAtRepositoryID()
      await settings.repository.clickSearch()
      await settings.repository.selectGoToScreenMenuUsingRepositoryID()
      admission.switchToBookingAdditionalData()
      admission.bookingAdditionalData.verifyUnemploymentCompensation()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Booking Additional Data')
      await settings.module.switchToRepository()
      await settings.repository.clearRepositoryID()
      await settings.repository.enterAtRepositoryID1()
      await settings.repository.clickSearch()
      await settings.repository.selectCheckBoxInGrid()
      await settings.repository.clickGOTOScreenLink()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('RA Interview')
      admission.switchToRAInterviewEntry()
      admission.rAInterviewEntryScreen.verifySPNFieldIsEnabled()
      //Automated By : - chandrasekar.v on 9/18/2025
      //Sprint :-  : Quarter  3  :  Sprint 9
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_66225', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '66225', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtNewVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.verifyActivityTypeFieldIsEnabled()
      await qa.qAFormEntry.repositoryTab.clickActivityTypeTreeViewIcon()
      await qa.qAFormEntry.repositoryTab.verifyActivityTypeFieldNotVanished()
      await popupPage.switchToTreeViewHelp()
      await popupPage.treeViewHelp.selectAtActivityType()
      await popupPage.treeViewHelp.clickSelect()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await qa.module.SwitchToQAFormEntry()
      //Automated By : - chandrasekar.v on 7/30/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_66314', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '66314', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription(1)
      await settings.sharedCodes.clearSortOrder()
      await settings.sharedCodes.enterAtSortOrderInPopUp()
      await settings.sharedCodes.clickUpdateButton()
      await settings.sharedCodes.verifyOrderInGridByCodeValueDiscription(1,1)
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID(1)
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid(1)
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription(2)
      await settings.sharedCodes.clearSortOrder()
      await settings.sharedCodes.enterAtSortOrderInPopUp(1)
      await settings.sharedCodes.clickUpdateButton()
      await settings.sharedCodes.verifyOrderInGridByCodeValueDiscription(2,2)
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID(2)
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid(2)
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription(3)
      await settings.sharedCodes.clearSortOrder()
      await settings.sharedCodes.enterAtSortOrderInPopUp(2)
      await settings.sharedCodes.clickUpdateButton()
      await settings.sharedCodes.verifyOrderInGridByCodeValueDiscription(3,3)
      await settings.sharedCodes.closeScreen()
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID(3)
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid(3)
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription(4)
      await settings.sharedCodes.clearSortOrder()
      await settings.sharedCodes.enterAtSortOrderInPopUp(3)
      await settings.sharedCodes.clickUpdateButton()
      await settings.sharedCodes.verifyOrderInGridByCodeValueDiscription(4,4)
      //Automated By : - chandrasekar.v on 7/22/2025
      //Sprint :-  : Quarter  3  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_66123', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '66123', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.ClickSystemParameterIcon()
      await settings.module.switchToSystemParamterScreen()
      await settings.sysParameter.ClickFTPInterfaceButton()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('System Parameter')
      // objectIdentification.windowHandle.windowExist('FTP Interface Search')
      await settings.module.switchToFTPInterfaceSearchScreen()
      // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscending(null, null, null)
      //Automated By : - chandrasekar.v on 9/30/2025
      //Sprint :-  : Quarter  3  :  Sprint 9
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_72716', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '72716', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.ClickUsingAdobeCheckBox()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.selectAtCategory()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.qAFormEntry.repositoryTab.verifyAtRepositoryIDInGrid()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.CloseScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.reloadMainWindow()
      await loaderPage.mouseOverFormsLink()
      await home.forms.MouseHoverOnFormNameAndClickSubFormName()
      await qa.module.SwitchToQAFormEntrybyURL()
      // objectIdentification.windowHandle.verifyWindowExistsByURL('https://ch175.prophoenix.com/Law/KPITemp')
      // objectIdentification.windowHandle.switchToMainWindow()
      //Automated By : - chandrasekar.v on 12/12/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_56092', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '56092', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.selectAtJurisAsBC()
      await settings.roles.clickSearch()
      await settings.roles.verifyAtJurisColumnValues()
      await settings.roles.selectAtCheckBoxByRoleName()
      await settings.roles.verifyCopyToMultiJurisIsEnabled()
      await settings.roles.clickCopyToMultiJuris()
      // objectIdentification.windowHandle.windowExist('Roles Entry')
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyRoleNameFieldIsDisabled()
      await settings.rolesEntry.clickAtAvailableRoleButtonByJurisName(1,1)
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await settings.rolesEntry.clickAtAvailableRoleButtonByJurisName(2,2)
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await settings.rolesEntry.clickAtAvailableRoleButtonByJurisName(3,3)
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await settings.rolesEntry.clickAtAvailableRoleButtonByJurisName(4,4)
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await settings.rolesEntry.clickAtAvailableRoleButtonByJurisName(5,5)
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectRowAtRoleName()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickAlarmEntryEditPermission()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      //Automated By : - chandrasekar.v on 12/16/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_74724', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74724', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5011 - CFSCode Search')
      await settings.module.switchToCFSCode()
      await settings.cFSCode.enterAtCallForService(1)
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.selectAtCFSCodeInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickOthersTab()
      await settings.cFSCodeEntry.cFSCodeOthersTab.selectAtQuestionnaireForCalltaker()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.save()
      await settings.cFSCodeEntry.Close()
      await settings.module.switchToCFSCode()
      await settings.cFSCode.clearCallForService()
      await settings.cFSCode.enterAtCallForService(1)
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.selectAtCFSCodeInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickOthersTab()
      await settings.cFSCodeEntry.cFSCodeOthersTab.verifyAtQuestionnaireForCalltakerDropDown()
      await settings.cFSCodeEntry.cFSCodeOthersTab.selectAtQuestionnaireForCalltaker(1)
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.save()
      await settings.cFSCodeEntry.Close()
      await settings.module.switchToCFSCode()
      await settings.cFSCode.clearCallForService()
      await settings.cFSCode.enterAtCallForService(1)
      await settings.cFSCode.clickSearch()
      await settings.cFSCode.selectAtCFSCodeInGrid()
      await settings.module.switchToCFSCodeEntry()
      await settings.cFSCodeEntry.ClickOthersTab()
      await settings.cFSCodeEntry.cFSCodeOthersTab.verifyAtQuestionnaireForCalltakerDropDown(1)
      await settings.module.switchToCFSCodeEntry()
      //Automated By : - chandrasekar.v on 12/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_17013', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '17013', async () => {
      await loginPage.loginScreen.logonUsingTestContextOtherDB()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.selectAtCodeValue()
      await settings.sharedCodes.verify1018Acknowledge()
      //Automated By : - chandrasekar.v on 12/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_74802', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74802', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickApprovalParameterButton()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.selectAtModuleInGrid()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.setEnableApprovalProcessAsFalse()
      await settings.approvalParameter.saveScreen()
      await settings.approvalParameter.closeScreen()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.closeScreen()
      await loaderPage.navigateToModule('Scheduling')
      await loaderPage.navigateToScreen('Time Search')
      await scheduling.module.switchToTimeSearch()
      await scheduling.timeSearch.selectAtApprovalStatus()
      await scheduling.timeSearch.clickSearchButton()
      await scheduling.timeSearch.selectAtPFCodeInGrid()
      await scheduling.module.switchToTimeEntryScreen()
      await scheduling.timeEntry.verifyApprovalTabIsEnabled()
      await scheduling.timeEntry.closeScreen()
      await scheduling.module.switchToTimeSearch()
      //Automated By : - chandrasekar.v on 12/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3DailyDefectCRM2025_74832', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74832', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickApprovalParameterButton()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.selectAtModuleInGrid()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.setEnableApprovalProcessAsTrue()
      await settings.approvalParameter.saveScreen()
      await settings.approvalParameter.closeScreen()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.closeScreen()
      await loaderPage.navigateToModule('Scheduling')
      await loaderPage.navigateToScreen('Time Search')
      await scheduling.module.switchToTimeSearch()
      await scheduling.timeSearch.selectAtApprovalStatus()
      await scheduling.timeSearch.clickSearchButton()
      await scheduling.timeSearch.selectAtPFCodeInGrid()
      await scheduling.module.switchToTimeEntryScreen()
      await scheduling.timeEntry.verifyApprovalTabIsEnabled()
      await scheduling.timeEntry.closeScreen()
      await scheduling.module.switchToTimeSearch()
      // Automated By : - Sarathkumar L on 12/29/2025
      // Sprint :- : Quarter 4 : Sprint 12
      // Type of Test case : - Defect
    });
  });

});

test.describe('Q3S8SettingsLegacyTestCase', () => {
  test('Q3S8SettingsLegacyTestCase_60317', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60317', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Show Users')
      await settings.module.switchToShowUsers()
      await settings.showUsers.enterAtPFCode()
      await settings.showUsers.clickSearchButton()
      await settings.showUsers.verifyAtPFCodeIngrid()
      await settings.showUsers.reloadShowUsersScreenTab()
      await settings.module.switchToShowUsers()
      await settings.showUsers.enterAtTerminalName()
      await settings.showUsers.clickSearchButton()
      await settings.showUsers.verifyAtTerminalNameInGrid()
      await settings.showUsers.reloadShowUsersScreenTab()
      await settings.module.switchToShowUsers()
      await settings.showUsers.enterAtIPAddress(1)
      await settings.showUsers.clickSearchButton()
      await settings.showUsers.verifyAtIPAddress(1)
      await settings.showUsers.reloadShowUsersScreenTab()
      await settings.module.switchToShowUsers()
      await settings.showUsers.enterFromDate()
      await settings.showUsers.taboutToDate()
      await settings.showUsers.verifyDateBetweenFromAndTo()
      await settings.showUsers.reloadShowUsersScreenTab()
      await settings.module.switchToShowUsers()
      await settings.showUsers.enterAtIPAddress(2)
      await settings.showUsers.clickSearchButton()
      await settings.showUsers.verify1011NoRecordFoundAcknowledge()
      await settings.showUsers.reloadShowUsersScreenTab()
      await settings.module.switchToShowUsers()
      await settings.showUsers.enterAtPFCode()
      await settings.showUsers.enterAtIPAddress(3)
      await settings.showUsers.clickSearchButton()
      await settings.showUsers.verifyAtPFCodeIngrid()
      await settings.showUsers.verifyAtIPAddress(3)
      await settings.showUsers.reloadShowUsersScreenTab()
      await settings.module.switchToShowUsers()
      await settings.showUsers.clickSearchButton()
      await settings.showUsers.verifyColumnsSortingAsAscending('IP Address')
      await settings.showUsers.verifyColumnsSortingAsDescending('IP Address')
      await settings.showUsers.verifyColumnsSortingAsAscending('Terminal Name')
      await settings.showUsers.verifyColumnsSortingAsDescending('Terminal Name')
      await settings.showUsers.verifyColumnsSortingAsAscending('PF')
      await settings.showUsers.verifyColumnsSortingAsDescending('PF')
      await settings.showUsers.verifyColumnsSortingAsAscending('Message Count')
      await settings.showUsers.verifyColumnsSortingAsDescending('Message Count')
      await settings.showUsers.verifyColumnsSortingAsAscending('NCIC Message Count')
      await settings.showUsers.verifyColumnsSortingAsDescending('NCIC Message Count')
      await settings.showUsers.verifyColumnsSortingAsAscending('NCIC Hit Count')
      await settings.showUsers.verifyColumnsSortingAsDescending('NCIC Hit Count')
      await settings.showUsers.verifyColumnsSortingAsAscending('Last Action Dttm')
      await settings.showUsers.verifyColumnsSortingAsDescending('Last Action Dttm')
      await settings.showUsers.verifyColumnsSortingAsAscending('LastName')
      await settings.showUsers.verifyColumnsSortingAsDescending('LastName')
      await settings.showUsers.verifyColumnsSortingAsAscending('FirstName')
      await settings.showUsers.verifyColumnsSortingAsDescending('FirstName')
      await settings.showUsers.verifyColumnsSortingAsAscending('MiddleName')
      await settings.showUsers.verifyColumnsSortingAsDescending('MiddleName')
      await settings.showUsers.verifyColumnsSortingAsAscending('PFCode')
      await settings.showUsers.verifyColumnsSortingAsDescending('PFCode')
      await settings.showUsers.clickProductHelpIcon()
      // objectIdentification.windowHandle.windowExist('Product Help')
      await settings.module.switchToShowUsers()
      await settings.showUsers.clickNextButton()
      await settings.showUsers.verifyPrevButtonIsDisplayed()
      await settings.showUsers.clickPrevButton()
      await settings.showUsers.verifyNextButtonIsDisplayed()
      await settings.module.switchToShowUsers()
      //Automated By : - chandrasekar.v on 8/13/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsLegacyTestCase_63299', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63299', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtNewVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.SaveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxOfTheRowByFormName()
      await settings.qaForms.clickManageQuestions()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewSectionButton()
      await qa.module.SwitchToQAFormSectionEntry()
      await qa.qAFormSection.EnterAtSectionName()
      await qa.qAFormSection.EnterAtSort()
      await qa.qAFormSection.ClickAddButton()
      await qa.qAFormSection.SaveScreen()
      await qa.qAFormSection.CloseScreen()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection()
      await qa.questionMaster.EnterAtQuestion()
      await qa.questionMaster.SelectAtAnswerType()
      await qa.questionMaster.SaveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await qa.questionMaster.Close()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickReviewButton()
      await qa.module.SwitchToQuestionReviewEntry()
      await qa.questionReview.verifyAtSectionIsDisplayed()
      await qa.questionReview.verifyAtQuestion()
      await qa.questionReview.verifyAtAnswerType()
      await qa.module.SwitchToManageQuestionsEntry()
      //Automated By : - chandrasekar.v on 8/14/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
      //updated based on testcase 62882
    });
  });

  test('Q3S8SettingsLegacyTestCase_62839', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '62839', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickSearchButton()
      await settings.terminal.verifyGridCountIsNotNull()
      const terminalColumnValuesInGrid = await settings.terminal.getTerminalColumnValuesInGrid('Terminal Name')
      await settings.terminal.clickExportToExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // String recentDownloadedExcelName = objectIdentification.filesHandle.getRecentDownloadedExcelName()
      // List<String> excelData = objectIdentification.readExcel.getColumnvaluesByColumnName(recentDownloadedExcelName,'Terminal Name')
      await home.textSearch.verifyTextColumnValueBetweenExcelAndGrid(excelData,terminalColumnValuesInGrid)
      await settings.module.switchToTerminalScreen()
      //Automated By : - chandrasekar.v on 8/14/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsLegacyTestCase_63303', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63303', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormNameEdit()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxOfTheRowByFormName()
      await settings.qaForms.clickManageSections()
      await qa.module.SwitchToQAFormSectionEntry()
      await qa.qAFormSection.EnterAtSectionName()
      await qa.qAFormSection.EnterAtSort()
      await qa.qAFormSection.ClickAddButton()
      await qa.qAFormSection.verifyAtSectionNameInGrid()
      await qa.qAFormSection.SaveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await qa.module.SwitchToQAFormSectionEntry()
      //Automated By : - chandrasekar.v on 8/18/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsLegacyTestCase_60325', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60325', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Custom Help')
      await settings.module.switchToCustomHelp()
      await settings.customHelp.enterAtScreenID()
      await settings.customHelp.clickSearchButton()
      await settings.customHelp.verifyScreenIDInGrid()
      await settings.customHelp.enterAtFileName()
      await settings.customHelp.clickSearchButton()
      await settings.customHelp.verifyAtFileNameInGrid()
      await settings.customHelp.enterAtDocumentTitle()
      await settings.customHelp.clickSearchButton()
      await settings.customHelp.verifyDocumentTitleInGrid()
      await settings.customHelp.reloadCustomHelpTab()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickIncludeInactiveCheckBox()
      await settings.customHelp.clickSearchButton()
      await settings.customHelp.verifyAtRowViewedAsGrayColor(1)
      await settings.customHelp.reloadCustomHelpTab()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickSearchButton()
      await settings.customHelp.verifyAtColumnValuesAreSortedDescendingOrder(1)
      await settings.customHelp.clickPrintIcon()
      // objectIdentification.windowHandle.windowExist('Select Report')
      await home.module.switchToSelectReport()
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await settings.module.switchToCustomHelp()
      await settings.customHelp.clickAddNew()
      await settings.module.switchToCustomDocHelpEntry()
      // objectIdentification.windowHandle.windowExist('Custom Doc Help Entry')
      await settings.module.switchToCustomHelp()
      //Automated By : - chandrasekar.v on 8/20/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsLegacyTestCase_60595', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60595', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Notification Format')
      await settings.module.switchToNotificationFormat()
      await settings.notificationFormat.clickAddNew()
      await settings.module.switchToNotificationFormatEntry()
      await settings.notificationFormatEntry.selectAtNotifyType()
      await settings.notificationFormatEntry.enterAtDetails()
      await settings.notificationFormatEntry.enterDataMasterAsCallSummary()
      await settings.notificationFormatEntry.enterRecipientMasterAsCallSummary()
      await settings.notificationFormatEntry.enterFormatterFileName()
      await settings.notificationFormatEntry.selectAtNotifyEvent()
      await settings.notificationFormatEntry.save()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToNotificationFormat()
      await settings.notificationFormat.enterAtFormatterFileName()
      await settings.notificationFormat.clickSearch()
      await settings.notificationFormat.selectAtFormatterFileName()
      await settings.module.switchToNotificationFormatEntry()
      await settings.notificationFormatEntry.checkInactiveCheckBox()
      await settings.notificationFormatEntry.save()
      await settings.notificationFormatEntry.close()
      await settings.module.switchToNotificationFormat()
      // objectIdentification.windowHandle.switchToMainWindow()
      //		settings.notificationFormat.reloadNotificationFormat();
      await settings.module.switchToNotificationFormat()
      await settings.notificationFormat.enterAtFormatterFileName()
      await settings.notificationFormat.checkInactiveCheckBox()
      await settings.notificationFormat.clickSearch()
      await settings.notificationFormat.verifyGridRowCount()
      await settings.notificationFormat.verifyAtRowViewedAsGrayColor()
      await settings.module.switchToNotificationFormat()
      //Automated By : - chandrasekar.v on 8/21/2025
      //Sprint :-  : Quarter  3  :  Sprint 8
      //Type of Test case : - Defect 2025
    });
  });

  test('Q3S8SettingsLegacyTestCase_60368', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60368', async () => {
      await loginPage.loginScreen.logonUsingTestContextOtherDB()
      // objectIdentification.windowHandle.switchToMainWindow()
      await home.myHome.clickSelfProfileLink()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.clearPassword()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.switchToPreferenceTab()
      personnel.personnelEntry.personnelEntryPreferencesTab.selectAtDefaultJuris()
      personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.save()
      personnel.personnelEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyUserLoginOption4340IsEnable()
      await settings.sysParameter.setAtSystemparameter4340('Email Only')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifyAtUserLoginOption4340()
      await settings.sysParameter.setAtSystemparameter4340('User Name Only')
      await settings.module.switchToSystemParamter()
      //Automated By : - chandrasekar.v on 12/15/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
      //Verify the Individual Phoenix forms Delete option works
    });
  });

});

test.describe('Q4S10SettingsLegacy2025', () => {
  test('Q4S10SettingsLegacy2025_60337', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60337', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickAddNewButton()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.enterAtTerminalName()
      await settings.terminalEntry.enterAtDescription()
      await settings.terminalEntry.clickIPAddressTab()
      await settings.terminalEntry.iPAddressTab.enterLocation()
      await settings.terminalEntry.iPAddressTab.enterDeviceName()
      await settings.terminalEntry.iPAddressTab.enterAtIPAddress()
      await settings.terminalEntry.iPAddressTab.clickUsedForCADCheckbox()
      await settings.terminalEntry.iPAddressTab.clickIsVehicleCheckBox()
      await settings.terminalEntry.iPAddressTab.enterDefaultPrinter()
      await settings.terminalEntry.iPAddressTab.enterBarCodePrinter()
      await settings.terminalEntry.iPAddressTab.enterReceiptPrinter()
      await settings.terminalEntry.iPAddressTab.enterAtIQEyeIP()
      await settings.terminalEntry.iPAddressTab.selectZetronDevice()
      await settings.terminalEntry.iPAddressTab.selectIdentixLocation()
      await settings.terminalEntry.iPAddressTab.selectPOSMaxCharLine()
      await settings.terminalEntry.iPAddressTab.enterValidationPrinter()
      await settings.terminalEntry.iPAddressTab.enterCheckPrinter()
      await settings.terminalEntry.iPAddressTab.enterAtCustom()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickNCICTab()
      await settings.terminalEntry.nCICTab.enterAtORINo()
      await settings.terminalEntry.nCICTab.enterWorkStationName()
      await settings.terminalEntry.nCICTab.clickReceiveUnsolicitedMessageCheckbox()
      await settings.terminalEntry.nCICTab.clickReceiveUndeliveredMessageCheckbox()
      await settings.terminalEntry.nCICTab.verifyAddMoreORILinkIsDisplayed()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickE911Tab()
      await settings.terminalEntry.e911Tab.enterPositionID()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.terminalEntry.verifyTabColorAsBlue(1)
      await settings.terminalEntry.verifyTabColorAsBlue(2)
      await settings.terminalEntry.verifyTabColorAsBlue(3)
      await settings.module.switchToTerminalEntry()
      //Automated By : - chandrasekar.v on 9/30/2025
      //Sprint :-  : Quarter  3  :  Sprint 9
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsLegacy2025_60337A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60337A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickAddNewButton()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.enterAtTerminalName()
      await settings.terminalEntry.clickIPAddressTab()
      await settings.terminalEntry.iPAddressTab.enterAtIPAddress()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickScreensTab()
      await settings.terminalEntry.screensTab.selectAtMonitor()
      await settings.terminalEntry.screensTab.selectAtScreen()
      await settings.terminalEntry.screensTab.selectCustomStatus()
      await settings.terminalEntry.screensTab.clickAddButton()
      await settings.terminalEntry.screensTab.verifyAtMonitorInGrid()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickInventoryTab()
      await settings.terminalEntry.inventoryTab.clickCounterCheckOutRadioButton()
      await settings.terminalEntry.inventoryTab.verifyAllCheckboxDisabled()
      await settings.terminalEntry.inventoryTab.clickSelfCheckOutRadioButton()
      await settings.terminalEntry.inventoryTab.verifyAllCheckboxEnabled()
      await settings.terminalEntry.inventoryTab.clickAllCheckbox()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickDevicesTab()
      await settings.terminalEntry.deviceTab.clickTerminalTypeComputerRadioButton()
      await settings.terminalEntry.deviceTab.selectDeviceType()
      await settings.terminalEntry.deviceTab.verifyDeviceIDIsDisabled()
      await settings.terminalEntry.deviceTab.enterSWDANotifyAddress()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickInterfaceTab()
      await settings.terminalEntry.interfaceTab.selectAtInterfaceName()
      await settings.terminalEntry.interfaceTab.enterAtLocationHostSite()
      await settings.terminalEntry.interfaceTab.enterCustom1()
      await settings.terminalEntry.interfaceTab.enterCustom2()
      await settings.terminalEntry.interfaceTab.clickAddButton()
      await settings.terminalEntry.interfaceTab.verifyAtInterfaceNameInGrid()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickCMSTab()
      await settings.terminalEntry.cMSTab.selectAtLocationBuilding()
      await settings.terminalEntry.cMSTab.enterAtFloor()
      await settings.terminalEntry.cMSTab.clickPodLookupIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtPodCode(1)
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.terminalEntry.verifyTabColorAsBlue(1)
      await settings.terminalEntry.verifyTabColorAsBlue(2)
      await settings.terminalEntry.verifyTabColorAsBlue(3)
      await settings.terminalEntry.verifyTabColorAsBlue(4)
      await settings.terminalEntry.verifyTabColorAsBlue(5)
      //Automated By : - chandrasekar.v on 9/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsLegacy2025_60361', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60361', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickAddNewButton()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.enterAtTerminalName()
      await settings.terminalEntry.enterAtDescription()
      await settings.terminalEntry.clickIPAddressTab()
      await settings.terminalEntry.iPAddressTab.enterLocation()
      await settings.terminalEntry.iPAddressTab.enterDeviceName()
      await settings.terminalEntry.iPAddressTab.enterAtIPAddress()
      await settings.terminalEntry.iPAddressTab.clickUsedForCADCheckbox()
      await settings.terminalEntry.iPAddressTab.clickIsVehicleCheckBox()
      await settings.terminalEntry.iPAddressTab.enterDefaultPrinter()
      await settings.terminalEntry.iPAddressTab.selectIdentixLocation()
      await settings.terminalEntry.iPAddressTab.enterBarCodePrinter()
      await settings.terminalEntry.iPAddressTab.enterReceiptPrinter()
      await settings.terminalEntry.iPAddressTab.selectPOSMaxCharLine()
      await settings.terminalEntry.iPAddressTab.enterAtIQEyeIP()
      await settings.terminalEntry.iPAddressTab.enterValidationPrinter()
      await settings.terminalEntry.iPAddressTab.enterValidationPrinter()
      await settings.terminalEntry.iPAddressTab.enterCheckPrinter()
      await settings.terminalEntry.iPAddressTab.selectZetronDevice()
      await settings.terminalEntry.iPAddressTab.enterAtCustom()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickNCICTab()
      await settings.terminalEntry.nCICTab.enterAtORINo()
      await settings.terminalEntry.nCICTab.enterMnemonic()
      await settings.terminalEntry.nCICTab.enterWorkStationName()
      await settings.terminalEntry.nCICTab.clickReceiveUnsolicitedMessageCheckbox()
      await settings.terminalEntry.nCICTab.clickReceiveUndeliveredMessageCheckbox()
      await settings.terminalEntry.nCICTab.verifyAddMoreORILinkIsDisplayed()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickE911Tab()
      await settings.terminalEntry.e911Tab.enterPositionID()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickScreensTab()
      await settings.terminalEntry.screensTab.selectAtMonitor()
      await settings.terminalEntry.screensTab.selectAtScreen()
      await settings.terminalEntry.screensTab.selectCustomStatus()
      await settings.terminalEntry.screensTab.clickAddButton()
      await settings.terminalEntry.screensTab.verifyAtMonitorInGrid()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickInventoryTab()
      await settings.terminalEntry.inventoryTab.clickCounterCheckOutRadioButton()
      await settings.terminalEntry.inventoryTab.verifyAllCheckboxDisabled()
      await settings.terminalEntry.inventoryTab.clickSelfCheckOutRadioButton()
      await settings.terminalEntry.inventoryTab.verifyAllCheckboxEnabled()
      await settings.terminalEntry.inventoryTab.clickAllCheckbox()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickDevicesTab()
      await settings.terminalEntry.deviceTab.clickTerminalTypeComputerRadioButton()
      await settings.terminalEntry.deviceTab.selectDeviceType()
      await settings.terminalEntry.deviceTab.verifyDeviceIDIsDisabled()
      await settings.terminalEntry.deviceTab.enterSWDANotifyAddress()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickInterfaceTab()
      await settings.terminalEntry.interfaceTab.selectAtInterfaceName()
      await settings.terminalEntry.interfaceTab.enterAtLocationHostSite()
      await settings.terminalEntry.interfaceTab.enterCustom1()
      await settings.terminalEntry.interfaceTab.enterCustom2()
      await settings.terminalEntry.interfaceTab.clickAddButton()
      await settings.terminalEntry.interfaceTab.verifyAtInterfaceNameInGrid()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickCMSTab()
      await settings.terminalEntry.cMSTab.selectAtLocationBuilding()
      await settings.terminalEntry.cMSTab.enterAtFloor()
      await settings.terminalEntry.cMSTab.clickPodLookupIcon()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.save()
      await settings.module.switchToTerminalEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.terminalEntry.checkFireCheckBox()
      await settings.terminalEntry.saveNClose()
      // objectIdentification.windowHandle.verifyWindowNotExists('Terminal Entry')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clickIncludeFireCheckbox()
      await settings.terminal.clickSearchButton()
      await settings.terminal.verifyAtTerminalNameInGrid()
      await settings.terminal.selectRowByAtTerminalName()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.verifyFireCheckBoxIsSelected()
      await settings.terminalEntry.close()
      await loaderPage.logout()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loginPage.loginScreen.LogonForFire()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.enterAtTerminalName()
      await settings.terminal.clickSearchButton()
      await settings.terminal.verifyAtTerminalNameInGrid()
      await settings.terminal.selectRowByAtTerminalName()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.verifyAtDescription()
      await settings.module.switchToTerminalEntry()
      //Automated By : - chandrasekar.v on 11/13/2025
      //Sprint :-  : Quarter  4  :  Sprint 11
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsLegacy2025_60360', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60360', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('FTP Interface Search')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.selectAtJuris(1)
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.selectRandomRecordInGrid()
      await settings.module.switchToFTPInterfaceEntry()
      await settings.fTPInterfaceEntry.verifyAtJuris()
      await settings.fTPInterfaceEntry.closeScreen()
      await settings.module.switchToFTPInterfaceSearch()
      // objectIdentification.manualIdentify.reloadScreen('FTP Interface Se..')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.selectAtJuris(2)
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.clickNextButton()
      await settings.fTPInterfaceSearch.verifyAtJurisColumnValues(1)
      await settings.fTPInterfaceSearch.verifyAtJurisColumnValues(2)
      await settings.fTPInterfaceSearch.verifyAtJurisColumnValues(3)
      await settings.fTPInterfaceSearch.verifyAtJurisColumnValues(4)
      await settings.fTPInterfaceSearch.verifyAtJurisColumnValues(5)
      await settings.fTPInterfaceSearch.clickPrevButton()
      await settings.module.switchToFTPInterfaceSearch()
      // objectIdentification.manualIdentify.reloadScreen('FTP Interface Se..')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.selectAtDBName(1)
      await settings.fTPInterfaceSearch.selectAtInterface(1)
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.verifyAtInterfaceColumnValuesInGrid(1,1)
      // objectIdentification.manualIdentify.reloadScreen('FTP Interface Se..')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.selectAtDBName(2)
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.verifyDBNameColumnValueInGrid(2,2)
      // objectIdentification.manualIdentify.reloadScreen('FTP Interface Se..')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.checkIncludeInactiveCheckBox()
      await settings.fTPInterfaceSearch.clickSearch()
      await settings.fTPInterfaceSearch.verifyInActiveRecordInGrid();//
      // objectIdentification.manualIdentify.reloadScreen('FTP Interface Se..')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.selectAtInterface(2)
      await settings.fTPInterfaceSearch.selectAtDBName(2)
      await settings.fTPInterfaceSearch.verifyAtInterfaceColumnValuesInGrid(2,2)
      await settings.fTPInterfaceSearch.verifyDBNameColumnValueInGrid(2,2)
      await settings.fTPInterfaceSearch.verifyAtColumnValuesAreSortedAscendingOrder(1)
      await settings.fTPInterfaceSearch.verifyAtColumnValuesAreSortedDescendingOrder(1)
      await settings.fTPInterfaceSearch.verifyAtColumnValuesAreSortedAscendingOrder(2)
      await settings.fTPInterfaceSearch.verifyAtColumnValuesAreSortedDescendingOrder(2)
      await settings.fTPInterfaceSearch.verifyAtColumnValuesAreSortedAscendingOrder(3)
      await settings.fTPInterfaceSearch.verifyAtColumnValuesAreSortedDescendingOrder(3)
      await settings.fTPInterfaceSearch.verifyAtColumnValuesAreSortedAscendingOrder(4)
      await settings.fTPInterfaceSearch.verifyAtColumnValuesAreSortedDescendingOrder(4)
      await settings.fTPInterfaceSearch.clickAddButton()
      await settings.module.switchToFTPInterfaceEntry()
      // objectIdentification.windowHandle.windowExist('FTP Interface Entry')
      await settings.fTPInterfaceEntry.closeScreen()
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.clickPrintIcon();//
      // objectIdentification.windowHandle.windowExist('Select Report');//
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.clickExcelIcon()
      // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat('.xlsx')
      await settings.module.switchToFTPInterfaceSearch()
      await settings.fTPInterfaceSearch.clickProductHelpIcon();//
      // objectIdentification.windowHandle.windowExist('Product Help');//
      await settings.module.switchToFTPInterfaceSearch()
      //Automated By : - chandrasekar.v on 11/13/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsLegacy2025_77671', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '77671', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Camera Config')
      await settings.module.switchToCameraConfig()
      await settings.cameraConfig.clickAddNew()
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.enterAtName(1)
      await settings.cameraConfigEntry.enterAtDescription()
      await settings.cameraConfigEntry.selectAtCameraUse(1)
      await settings.cameraConfigEntry.selectAtCameraType()
      await settings.cameraConfigEntry.verifyCameraGroupIsDisabled()
      await settings.cameraConfigEntry.verifyCameraURLCameraIPIsDisabled()
      await settings.cameraConfigEntry.enterAtUMediaAxisCameraStationIPAddress(1)
      await settings.cameraConfigEntry.verifyPhoenixVideoServerIPIsDisabled()
      await settings.cameraConfigEntry.verifyPortIsDisabled()
      await settings.cameraConfigEntry.enterAtFleetNo(1)
      await settings.cameraConfigEntry.save()
      await settings.module.switchToCameraConfigEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.saveAndCloseScreen()
      //second scenario
      await settings.module.switchToCameraConfig()
      await settings.cameraConfig.clickAddNew()
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.enterAtName(2)
      await settings.cameraConfigEntry.enterAtDescription()
      await settings.cameraConfigEntry.selectAtCameraUse(2)
      await settings.cameraConfigEntry.selectAtCameraType()
      await settings.cameraConfigEntry.verifyCameraURLCameraIPAsMandatory()
      await settings.cameraConfigEntry.verifyFleetIsDisabled()
      await settings.cameraConfigEntry.enterAtCameraIP()
      await settings.cameraConfigEntry.enterAtPhoenixVideoServerIP(1)
      await settings.cameraConfigEntry.enterAtUMediaAxisCameraStationIPAddress(1)
      await settings.cameraConfigEntry.enterAtPortNo(1)
      await settings.cameraConfigEntry.save()
      await settings.module.switchToCameraConfigEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.module.switchToCameraConfigEntry()
      // Automated By : - Sarathkumar L on 02/17/2026
      // Sprint :- : Quarter 1 : Sprint 2
      // Type of Test case : - Legacy
    });
  });

});

test.describe('Q4S10SettingsDefect2025', () => {
  test('Q4S10SettingsDefect2025_69572', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '69572', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Repository')
      await settings.module.switchToRepository()
      await settings.repository.enterAtRepositoryID()
      await settings.repository.clickSearch()
      await settings.repository.selectAtRepositoryIDInGrid()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEditEntry.mainTab.clearCustomName()
      await settings.repositoryEditEntry.mainTab.enterAtCustomName()
      await settings.repositoryEntry.saveScreen()
      await settings.repositoryEntry.closeScreen()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.clickDeptTrackCustomFieldLabel()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.VerifyAtCustomName()
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.verifyAtDeptTrackCustomFieldAsChanged()
      inventory.inventorySearch.clickSearchButton()
      inventory.inventorySearch.selectInventory()
      inventory.SwitchToInventoryEntry()
      inventory.inventoryEntry.clickMainTab()
      inventory.inventoryEntry.inventoryEntryMainTab.clickDeptTrackCustomFieldLabel()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.VerifyAtCustomName()
      await settings.repositoryEntry.closeScreen()
      inventory.SwitchToInventoryEntry()
      inventory.inventoryEntry.close()
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.clickAddNew()
      inventory.SwitchToInventoryEntry()
      inventory.inventoryEntry.clickMainTab()
      inventory.inventoryEntry.inventoryEntryMainTab.clickDeptTrackCustomFieldLabel()
      await settings.module.switchToRepositoryEntry()
      await settings.repositoryEntry.VerifyAtCustomName()
      await settings.repositoryEntry.closeScreen()
      inventory.SwitchToInventoryEntry()
      //Automated By : - chandrasekar.v on 9/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsDefect2025_69658', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '69658', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('External Interface Srch')
      await settings.module.switchToExternalInterfaceSearch()
      await settings.externalInterfaceSearch.clickAddNew()
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.enterAtInterface()
      await settings.externalInterfaceEntry.selectInterfaceType()
      await settings.externalInterfaceEntry.selectPrimeTrigger()
      await settings.externalInterfaceEntry.selectFileType()
      await settings.externalInterfaceEntry.enterAtXMLMasterFile()
      await settings.externalInterfaceEntry.enterField1()
      await settings.externalInterfaceEntry.save()
      await settings.externalInterfaceEntry.verifyErrorAcknowledgeIsNotArise()
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.verifyAdditionSuccessfulMessage()
      await settings.module.switchToExternalInterfaceEntry()
      //Automated By : - chandrasekar.v on 10/16/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsDefect2025_69779', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '69779', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.selectAtModule()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.enterAtParameterName()
      await settings.sysParameter.selectAtSortBy()
      await settings.sysParameter.selectAtCustomCategory(1)
      await settings.sysParameter.selectAtSystemCategory()
      await settings.sysParameter.clickResetIcon()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.verifyAtModule(1)
      await settings.sysParameter.verifyParameterIDIsEmpty()
      await settings.sysParameter.verifyParameterNameIsEmpty()
      await settings.sysParameter.verifyAtSortBy(1)
      await settings.sysParameter.verifyAtCustomCategory(2)
      await settings.sysParameter.verifyAtSystemCategory(1)
      await settings.module.switchToSystemParamter()
      //Automated By : - chandrasekar.v on 10/16/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsDefect2025_69818', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '69818', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickEnterKeyInDescriptionField()
      // objectIdentification.manualIdentify.verifyJSErrorNotAppear()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyCodeIDFieldIsEnable()
      //scenario 2
      await loaderPage.navigateToScreen('Terminal')
      await settings.module.switchToTerminalScreen()
      await settings.terminal.enterAtTerminalName()
      await settings.terminal.clickSearchButton()
      await settings.terminal.selectRowByAtTerminalName()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickInterfaceTab()
      await settings.terminalEntry.interfaceTab.selectAtInterfaceName()
      await settings.terminalEntry.interfaceTab.enterAtLocationHostSite()
      await settings.terminalEntry.interfaceTab.enterCustom1()
      await settings.terminalEntry.interfaceTab.enterCustom2()
      await settings.terminalEntry.interfaceTab.clickAddButton()
      await settings.terminalEntry.interfaceTab.selectAtInterfaceName()
      await settings.terminalEntry.interfaceTab.enterAtLocationHostSite()
      await settings.terminalEntry.interfaceTab.enterCustom1()
      await settings.terminalEntry.interfaceTab.enterCustom2()
      await settings.terminalEntry.interfaceTab.clickAddButton()
      await settings.terminalEntry.interfaceTab.verify1019DuplicationOfDataFound()
      //scenario 3
      await settings.module.switchToTerminalScreen()
      await settings.terminal.clearTerminalName()
      await settings.terminal.enterAtTerminalName1()
      await settings.terminal.clickSearchButton()
      await settings.terminal.selectRowByAtTerminalName1()
      await settings.module.switchToTerminalEntry()
      await settings.terminalEntry.clickInterfaceTab()
      await settings.terminalEntry.interfaceTab.selectAtInterfaceName()
      await settings.terminalEntry.interfaceTab.enterAtLocationHostSite()
      await settings.terminalEntry.interfaceTab.enterCustom1()
      await settings.terminalEntry.interfaceTab.enterCustom2()
      await settings.terminalEntry.clickSaveButton()
      await settings.terminalEntry.verify1051UpdatedDataExistAcknowledge()
      await settings.module.switchToTerminalEntry()
      //Automated By : - chandrasekar.v on 9/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsDefect2025_70162', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70162', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      await settings.module.switchToStorageLocation()
      await settings.storageLocation.clickAddNewButton()
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.SelectAtLocationUseFor()
      await settings.storageLocationEntry.EnterAtDescription()
      await settings.storageLocationEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      // String locationCode = settings.storageLocationEntry.getLocationCode()
      await settings.module.switchToStorageLocationEntry()
      await settings.storageLocationEntry.verifyBarcodeGeneratedAs16Digit()
      await settings.storageLocationEntry.verifyCodeIsNotNull()
      await settings.storageLocationEntry.verifyLocationCode(locationCode)
      await settings.storageLocationEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToStorageLocation()
      //Automated By : - chandrasekar.v on 10/21/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsDefect2025_70158', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70158', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.SelectAtCodeValueDescription()
      await settings.sharedCodes.selectAtIsDefault()
      await settings.sharedCodes.clickUpdateButton()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.verifyAtDefaultInGrid()
      await settings.sharedCodes.SelectAtCodeValueDescription()
      await settings.sharedCodes.verifyAtIsDefault()
      await settings.module.switchToSharedCodes()
      //Automated By : - chandrasekar.v on 10/23/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsDefect2025_70355', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70355', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickEditPermissionButtonByModule('Home')
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.save()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreenByScreenID('1383 - Activity Search')
      await activity.module.switchToActivitySearch()
      await activity.activitySearch.ClickSearchLink()
      await activity.activitySearch.selectGridRow()
      await activity.module.SwitchToActivityEntry()
      const getActivityNo = await activity.activityEntry.GetActivityNo()
      await activity.activityEntry.clickDeleteIconWithConfirmPopupMessage()
      await home.module.switchToActivitySearch()
      await activity.activitySearch.clickBackButton()
      await activity.activitySearch.enterAtActivityNo(getActivityNo)
      await activity.activitySearch.ClickSearchLink()
      await activity.activitySearch.verifyNoRecordFoundAcknowledge()
      await home.module.switchToActivitySearch()
      //Automated By : - chandrasekar.v on 10/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsDefect2025_70403', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70403', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('External Interface Srch')
      await settings.module.switchToExternalInterfaceSearch()
      await settings.externalInterfaceSearch.enterAtInterface()
      await settings.externalInterfaceSearch.clickSearchButton()
      await settings.externalInterfaceSearch.selectAtInterFaceInGrid()
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.clickFormatter1LookupIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid(1)
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.checkData1CheckBox()
      await settings.externalInterfaceEntry.clickFormatter2LookupIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtCodeValueInGrid(2)
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.checkData2CheckBox()
      await settings.externalInterfaceEntry.save()
      await settings.externalInterfaceEntry.verifyFormatter1LookupIconIsDisabled()
      await settings.externalInterfaceEntry.verifyFormatter2LookupIconIsDisabled()
      await settings.externalInterfaceEntry.save()
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.verifyFormatter1LookupIconIsDisabled()
      await settings.externalInterfaceEntry.verifyFormatter2LookupIconIsDisabled()
      await settings.externalInterfaceEntry.saveAndClose()
      await settings.module.switchToExternalInterfaceSearch()
      await settings.externalInterfaceSearch.clearInterface()
      await settings.externalInterfaceSearch.enterAtInterface()
      await settings.externalInterfaceSearch.clickSearchButton()
      await settings.externalInterfaceSearch.selectAtInterFaceInGrid()
      await settings.module.switchToExternalInterfaceEntry()
      await settings.externalInterfaceEntry.verifyFormatter1LookupIconIsDisabled()
      await settings.externalInterfaceEntry.verifyFormatter2LookupIconIsDisabled()
      await settings.module.switchToExternalInterfaceEntry()
      //Automated By : - chandrasekar.v on 10/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4S10SettingsDefect2025_72457', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '72457', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.SaveScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.clearFormRef()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectCheckBoxOfTheRowByFormName()
      await settings.qaForms.clickManageRepository()
      await qa.module.switchToQuestionnaireRepository()
      await qa.questionnarieRepository.EnterAtRepositoryID()
      await qa.questionnarieRepository.clickAddButton()
      await qa.questionnarieRepository.saveNClose()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRandomRow()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.NavigateToQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtFormName()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clearFormRef()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clearFormName()
      await qa.qAFormEntry.EnterAtFormName1()
      await qa.qAFormEntry.SaveScreen()
      await settings.module.switchToQAForms()
      await settings.qaForms.clearFormRef()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.verifyAtFormNameInGrid(1)
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickBackButton()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRandomRow()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.NavigateToQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.verifyAtFormName(1)
      personnel.switchToPersonnelEntry()
      //Automated By : - chandrasekar.v on 11/17/2025
      //Sprint :-  : Quarter  4  :  Sprint 11
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('Q4Sprint10SettingsDefect2025', () => {
  test('Q4Sprint10SettingsDefect2025_70438', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70438', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.enterAtSortOrderInPopUp()
      await settings.sharedCodes.enterEffectiveDateAsCurrentDate()
      await settings.sharedCodes.enterExpireDateAsFuterDateDate()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await loaderPage.navigateToModule('Inventory')
      await loaderPage.navigateToScreen('Inventory Search')
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.clickSearchButton()
      inventory.inventorySearch.selectRandomGridRow()
      inventory.SwitchToInventoryEntry()
      inventory.inventoryEntry.verifySortOrderInMakeDropDown()
      //Automated By : - chandrasekar.v on 10/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint10SettingsDefect2025_70438A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70438A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.enterAtSortOrderInPopUp()
      await settings.sharedCodes.enterEffectiveDateAsPreviousDate()
      await settings.sharedCodes.enterExpireDateAsPastDate()
      await loaderPage.navigateToModule('Inventory')
      await loaderPage.navigateToScreen('Inventory Search')
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.clickSearchButton()
      inventory.inventorySearch.selectRandomGridRow()
      inventory.SwitchToInventoryEntry()
      inventory.inventoryEntry.verifyAtMakeValueIsNotListed()
      //Automated By : - chandrasekar.v on 10/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint10SettingsDefect2025_70438B', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70438B', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.enterAtSortOrderInPopUp()
      await settings.sharedCodes.enterEffectiveDateAsCurrentDate()
      await settings.sharedCodes.enterExpireDateAsCurrentDate()
      await loaderPage.navigateToModule('Inventory')
      await loaderPage.navigateToScreen('Inventory Search')
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.clickSearchButton()
      inventory.inventorySearch.selectRandomGridRow()
      inventory.SwitchToInventoryEntry()
      inventory.inventoryEntry.verifySortOrderInMakeDropDown()
      //Automated By : - chandrasekar.v on 10/28/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint10SettingsDefect2025_70546', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70546', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.enterAtTextName()
      await settings.textScreen.clickSearch()
      await settings.textScreen.selectAtTextName()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.clickRelatedReportsTab()
      await settings.textMgmt.relatedReportsTab.clickReportNameLookUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.enterAtCode()
      await popupPage.kPICodedLookup.clickSearchIcon()
      await popupPage.kPICodedLookup.verifyAtCodeInGrid()
      await popupPage.kPICodedLookup.clickResetIcon()
      await popupPage.kPICodedLookup.enterAtDescription()
      await popupPage.kPICodedLookup.clickSearchIcon()
      await popupPage.kPICodedLookup.verifyAtDescriptionInGrid()
      //Automated By : - chandrasekar.v on 10/28/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint10SettingsDefect2025_70546A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70546A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.clickAddNew()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.enterAtTextName()
      await settings.textMgmt.save()
      await settings.module.switchToTextMgmt()
      await settings.textMgmt.clickRelatedReportsTab()
      await settings.textMgmt.relatedReportsTab.clickReportNameLookUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.enterAtCode()
      await popupPage.kPICodedLookup.clickSearchIcon()
      await popupPage.kPICodedLookup.verifyAtCodeInGrid()
      await popupPage.kPICodedLookup.clickResetIcon()
      await popupPage.kPICodedLookup.enterAtDescription()
      await popupPage.kPICodedLookup.clickSearchIcon()
      await popupPage.kPICodedLookup.verifyAtDescriptionInGrid()
      //Automated By : - chandrasekar.v on 7/22/2025
      //Sprint :-  : Quarter  3  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint10SettingsDefect2025_70164', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '70164', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Text')
      await settings.module.switchToText()
      await settings.textScreen.selectAtTemplateFor()
      await settings.textScreen.enterSearchWords()
      await settings.module.switchToText()
      await settings.textScreen.verifyAtSearchWordsLength()
      await settings.module.switchToText()
      //Automated By : - chandrasekar.v on 11/10/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint10SettingsDefect2025_72113', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '72113', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleRowCheckBox()
      await settings.roles.clickLinkedRoleColumnHeader()
      await settings.module.switchToRolesScreen()
      //			objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
      await settings.roles.verifyCopyToSameJurisIsEnabled()
      await settings.roles.clickDescriptionColumnHeader()
      await settings.module.switchToRolesScreen()
      //			objectIdentification.manualIdentify.verifyBuildIssueIsNotAppeared();
      await settings.roles.verifyCopyToSameJurisIsEnabled()
      await settings.module.switchToRolesScreen()
      //Automated By : - chandrasekar.v on 11/13/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint10SettingsDefect2025_63312', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63312', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Access Log')
      await settings.module.switchToAcessLog()
      await settings.accessLog.clickRepositoryLookUpIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.enterAtRepositryID()
      await popupPage.kPICodedLookup.clickSearchIcon()
      await popupPage.kPICodedLookup.verifyAtRepositoryColumnValues()
      await popupPage.kPICodedLookup.clickResetIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.clickNextButton()
      await popupPage.kPICodedLookup.verifyAtColumnValuesAreSortedAscendingOrderForInteger(1)
      await popupPage.kPICodedLookup.verifyAtColumnValuesAreSortedDescendingOrderForInteger(1)
      await popupPage.kPICodedLookup.verifyAtColumnValuesAreSortedAscendingOrder(2)
      await popupPage.kPICodedLookup.verifyAtColumnValuesAreSortedDescendingOrder(2)
      await popupPage.switchToCodedSearch()
      await settings.module.switchToAcessLog()
      await settings.accessLog.selectAtJuris()
      await settings.accessLog.enterAtFromDate()
      await settings.accessLog.enterToDate()
      await settings.accessLog.clickSearch()
      await settings.accessLog.verifyPrintIconIsDisplayed()
      await settings.accessLog.verifyPrintIconIsEnabled()
      await settings.accessLog.verifyExportToExcelIconIsDisplayed()
      await settings.accessLog.verifyExportToExcelIconIsEnabled()
      await popupPage.switchToCodedSearch()
      //Automated By : - chandrasekar.v on 11/17/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('Q4Sprint11SettingsDefectTestcases2025', () => {
  test('Q4Sprint11SettingsDefectTestcases2025_72247', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '72247', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Offense Codes')
      await settings.module.switchToOffenseCodes()
      await settings.offenseCodes.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtOffenseCode()
      await settings.sharedCodes.enterAtDescription()
      await settings.sharedCodes.saveScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickPrintIcon()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Shared Codes')
      // objectIdentification.windowHandle.windowExist('Select Report')
      await home.selectReport.CloseTheScreen()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('MFA Setting')
      await settings.module.switchToMFASetting()
      await settings.mFASetting.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('User query search')
      await settings.module.switchToUserQuerySearch()
      await settings.userQuerySearch.clickAddNewButton()
      await settings.module.switchToCreateUserQuery()
      await settings.createUserQuery.enterUseryQueryName()
      await settings.createUserQuery.clickResetIcon()
      await settings.createUserQuery.verifyUserQueryNameIsEmpty()
      await settings.createUserQuery.clickPrintIcon()
      // objectIdentification.windowHandle.windowExist('Select Report')
      //Automated By : - chandrasekar.v on 11/13/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint11SettingsDefectTestcases2025_72297', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '72297', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtCheckBoxByRoleName()
      await settings.roles.clickCopyToSameJuris()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickSaveButton()
      await settings.rolesEntry.verifyEnterMandatoryDataAcknowledge()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtCopyRoleName()
      await settings.rolesEntry.clickSaveNClose()
      // objectIdentification.windowHandle.verifyWindowNotExists('Roles Entry')
      await settings.module.switchToRoles()
      //Automated By : - chandrasekar.v on 11/17/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint11SettingsDefectTestcases2025_63312A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63312A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToScreen('Action Search')
      await settings.module.switchToActionSearch()
      await settings.actionSearch.clickAddNewButton()
      await settings.module.switchToActionEntry()
      await settings.actionEntry.enterAtActionNo()
      await settings.actionEntry.enterAtActionName()
      await settings.actionEntry.enterDescription()
      await settings.actionEntry.enterAtProcessSPName()
      await settings.actionEntry.enterAtInputParameterName()
      await settings.actionEntry.selectAtValueType()
      await settings.actionEntry.clickSaveButton()
      await settings.actionEntry.verify1018RequiredEntriesAreMissingAcknowledge()
      await settings.module.switchToActionEntry()
      await settings.actionEntry.clickAddButton()
      await settings.actionEntry.verifyAtInputParameterNameInGrid()
      await settings.actionEntry.selectRowByAtValueType()
      await settings.actionEntry.verifyUpdateButtonIsDisplayed()
      await settings.actionEntry.clickSaveButton()
      await settings.actionEntry.verify1051UpdatedDataExistsAcknowledg()
      await settings.module.switchToActionEntry()
      await settings.actionEntry.clickUpdateButton()
      await settings.actionEntry.save()
      await settings.module.switchToActionEntry()
      //Automated By : - chandrasekar.v on 11/17/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint11SettingsDefectTestcases2025_72340', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '72340', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('1276 - Jobs')
      await settings.module.switchToJobs()
      await settings.jobsScreen.selectAtJobType()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.clickLogLink()
      await settings.module.switchToJobsScreen()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.selectAtDBName()
      await settings.module.switchToJobsScreen()
      await settings.jobsScreen.clickSearch()
      await settings.jobsScreen.verifyAtJurisColumnInGrid()
      await settings.module.switchToJobsScreen()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickViewHistoryButton()
      await settings.module.switchToPermissionHistory()
      await settings.permissionHistory.selectAtModule()
      await settings.permissionHistory.clearFromDateAndTime()
      await settings.permissionHistory.enterFromDateAndTime()
      //    		settings.permissionHistory.enterToDateAndTime(); // As of Now to Date and Time Are default in the fields
      await settings.permissionHistory.enterAtParameterId()
      await settings.permissionHistory.clickSearch()
      await settings.permissionHistory.verifyAtJurisColumnInGrid()
      await settings.module.switchToPermissionHistory()
      //Automated By : - chandrasekar.v on 11/17/2025
      //Sprint :-  : Quarter  4  :  Sprint 11
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint11SettingsDefectTestcases2025_74318', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74318', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.clickAddNew()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.EnterAtFormRefNo()
      await qa.qAFormEntry.EnterAtFormName()
      await qa.qAFormEntry.EnterAtVersion()
      await qa.qAFormEntry.EnterActiveAsOfDateAsCurrentDate()
      await qa.qAFormEntry.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.mainTab.clickManageSectionButton()
      await qa.module.SwitchToQAFormSectionEntry()
      await qa.qAFormSection.EnterAtSectionName()
      await qa.qAFormSection.EnterAtSort()
      await qa.qAFormSection.ClickAddButton()
      await qa.qAFormSection.SaveScreen()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickMainTab()
      await qa.qAFormEntry.ClickManageQuestionsButton()
      await qa.module.SwitchToManageQuestionsEntry()
      await qa.mManageQuestions.ClickAddNewQuestionButton()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.SelectAtSection()
      await qa.questionMaster.EnterAtQuestion()
      await qa.questionMaster.SelectAtAnswerType()
      await qa.questionMaster.SaveScreen()
      await qa.module.SwitchToQuestionMasterEntry()
      await qa.questionMaster.clickYesOrNoTab()
      await qa.questionMaster.yesOrNoTab.clickControlQuestionLookupIcon()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.verifyAtQuestionInGrid()
      await popupPage.switchToCodedSearch()
      //Automated By : - chandrasekar.v on 12/16/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint11SettingsDefectTestcases2025_74346', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74346', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5031 - Unit Search')
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickIncludeInactiveCheckBox()
      await settings.unitsScreen.clickSearch()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Units')
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await settings.module.switchToUnits()
      await settings.unitsScreen.verifyAtInactiveCheckBoxCheckedInGrid()
      await settings.unitsScreen.verifyInactiveUnitRowColor()
      await settings.unitsScreen.verifyGridCount()
      await settings.module.switchToUnits()
      //Automated By : - chandrasekar.v on 12/22/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint11SettingsDefectTestcases2025_74378', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74378', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      //			settings.switchToQAForms();
      //			settings.qaForms.enterAtFormNameEdit();
      //			settings.qaForms.clickOnSearch();
      //			settings.qaForms.selectCheckBoxOfTheRowByFormName();
      //			settings.qaForms.clickManageRepository();
      //			qa.SwitchToQuestionnarie();
      //			qa.questionnarieRepository.EnterAtRepositoryID(1);
      //			qa.questionnarieRepository.clickAddButton();
      //			qa.SwitchToQuestionnarie();
      //			qa.questionnarieRepository.save();
      //			qa.questionnarieRepository.EnterAtRepositoryID(2);
      //			qa.questionnarieRepository.selectAtCategory();
      //			qa.questionnarieRepository.clickAddButton();
      //			qa.SwitchToQuestionnarie();
      //			qa.questionnarieRepository.save();
      //			qa.SwitchToQuestionnarie();
      //			qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid(1);
      //			qa.questionnarieRepository.verifyAtRepositoryIDAddedInGrid(2);
      //			qa.questionnarieRepository.saveNClose();
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.mouseOverFormsLink()
      await home.forms.MouseHoverOnFormNameAndClickSubFormName(1)
      await qa.module.SwitchToQAFormEntrybyURL()
      await qa.module.switchToPDFFormScreen()
      await qa.pdfFormScreen.clickPrintIcon()
      await qa.pdfFormScreen.verifPrintIconIsEnabledInPrintPopup()
      await qa.pdfFormScreen.close()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRandomRow()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickQAFormsTab()
      personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      await qa.questionnarieRepository.clickPrintIcon()
      await qa.pdfFormScreen.verifPrintIconIsEnabledInPrintPopup()
      //Automated By : - chandrasekar.v on 12/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint11SettingsDefectTestcases2025_74605', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74605', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.clickAddNew()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtRoleName()
      await settings.rolesEntry.enterAtRoleDescription()
      await settings.rolesEntry.save()
      await settings.rolesEntry.close()
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verify6017NoRecordsFoundAcknowledge()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickPrintIcon()
      // objectIdentification.manualIdentify.verifyJSErrorNotAppear()
      await home.module.switchToSelectReport()
      // objectIdentification.windowHandle.verifyWindowExists('Select Report')
      // objectIdentification.smokeTest.checkAckExist()
      await settings.module.switchToRoles()
      //Automated By : - chandrasekar.v on 12/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('Q4Sprint11SettingsDefectTestcases2025_74621', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74621', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5031 - Unit Search')
      await settings.module.switchToUnits()
      await settings.unitsScreen.enterAtUnit()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.selectRowAtUnitInGrid()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.selectAtPatrolArea()
      await settings.unitEntry.clickAdd()
      await settings.unitEntry.verifyAtPatrolAreaInGrid()
      await settings.unitEntry.selectAtPatrolAreaInGrid()
      await settings.unitEntry.clickSaveButton()
      await settings.unitEntry.verify1051UpdatedDataExistsAcknowledge()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.clickUpdateButton()
      await settings.unitEntry.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToUnitEntry()
      //Automated By : - chandrasekar.v on 12/24/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('SettingsSystemParameter1210', () => {
  test('SettingsSystemParameter1210_72246', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '72246', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter1210AsTrue()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.selectAtInventoryType()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.clickAddNew()
      inventory.SwitchToInventoryEntry()
      inventory.inventoryEntry.verifyMakeDropDownCount()
      inventory.inventoryEntry.selectAtCategory()
      inventory.inventoryEntry.selectAtType()
      inventory.inventoryEntry.selectAtMake()
      inventory.inventoryEntry.selectAtInvName()
      inventory.inventoryEntry.enterEntryDate()
      inventory.inventoryEntry.save()
      inventory.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      //Automated By : - chandrasekar.v on 11/17/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

});

test.describe('2025Q4Sprint12Enhancement', () => {
  test('2025Q4Sprint12Enhancement_73258', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '73258', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.setSystemparameter1210AsFalse()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.selectAtInventoryType()
      await settings.sharedCodes.verifyAtInventoryType(1)
      await settings.sharedCodes.clickAddButtonInPopUp()
      await settings.module.switchToSharedCodes()
      const tableRowCount = await settings.sharedCodes.getTableRowCount()
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      inventory.SwitchToInventorySearch()
      inventory.inventorySearch.clickAddNew()
      inventory.SwitchToInventoryEntry()
      inventory.inventoryEntry.selectAtInvName()
      inventory.inventoryEntry.selectAtCategory()
      inventory.inventoryEntry.selectAtType()
      inventory.inventoryEntry.verifyAtMake()
      inventory.inventoryEntry.verifyMakeDropDownCount(tableRowCount)
      inventory.SwitchToInventoryEntry()
      //Automated By : - chandrasekar.v on 12/12/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('2025Q4Sprint12Enhancement_73358', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '73358', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickAddNewButton()
      await settings.sharedCodes.EnterAtPopUpCodeValue()
      await settings.sharedCodes.EnterAtPopUpDescription()
      await settings.sharedCodes.verifyCourtAddressFieldIsEnable()
      await settings.sharedCodes.enterAtCourtAddress(1)
      await settings.sharedCodes.clickAddButtonInPopUp()
      await settings.sharedCodes.verifyAtCodeValue()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      admission.switchToInmateSearch()
      admission.inmateSearchScreen.SelectAtBookingStatus()
      admission.inmateSearchScreen.Search()
      admission.inmateSearchScreen.selectAtSPNInGrid()
      admission.switchToAdmissionEntry()
      admission.admissionEntry.NavigateToChargeTab()
      admission.admissionEntry.chargeTab.SelectAtArrestingAgency1()
      admission.admissionEntry.chargeTab.EnterAtAgencyCaseNo()
      admission.admissionEntry.chargeTab.EnterAtArrestingOfficer()
      admission.admissionEntry.chargeTab.EnterArrestDate()
      admission.admissionEntry.chargeTab.EnterAtCharge()
      admission.admissionEntry.chargeTab.SelectAtCourt()
      admission.admissionEntry.chargeTab.SelectAtDocumentType()
      admission.admissionEntry.chargeTab.clickAddButton()
      admission.admissionEntry.chargeTab.ClickClearButton()
      admission.admissionEntry.chargeTab.InternalsaveTab()
      admission.switchToAdmissionEntry()
      admission.admissionEntry.SaveScreen()
      admission.admissionEntry.clickCustomizeIcon()
      admission.admissionEntry.clickFieldNamesForPDFWordForm()
      await qa.module.switchToFieldNamePDF()
      await qa.fieldNamePDF.verifyAtFields('CourtAddress1',1)
      await qa.fieldNamePDF.verifyAtFields('Description1',2)
      await qa.fieldNamePDF.verifyAtFields('Statute1',3)
      await qa.fieldNamePDF.closeScreen()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.selectAtcodeIDInGrid()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.selectAtCodeValue()
      await settings.sharedCodes.verifyCourtAddressFieldIsEnable()
      await settings.sharedCodes.clearCourtAddress()
      await settings.sharedCodes.enterAtCourtAddress(2)
      await settings.sharedCodes.clickUpdateButton()
      await settings.sharedCodes.verifyAtCodeValue()
      await loaderPage.navigateToModule('Admission / Booking')
      await loaderPage.navigateToScreen('Inmate Search')
      admission.switchToInmateSearch()
      admission.inmateSearchScreen.clickBackButton()
      admission.inmateSearchScreen.SelectAtBookingStatus()
      admission.inmateSearchScreen.Search()
      admission.inmateSearchScreen.selectAtSPNInGrid()
      admission.switchToAdmissionEntry()
      admission.admissionEntry.clickCustomizeIcon()
      admission.admissionEntry.clickFieldNamesForPDFWordForm()
      await qa.module.switchToFieldNamePDF()
      await qa.fieldNamePDF.verifyAtFields('CourtAddress1',4)
      await qa.fieldNamePDF.verifyAtFields('Description1',2)
      await qa.fieldNamePDF.verifyAtFields('Statute1',3)
      admission.switchToAdmissionEntry()
      //Automated By : - chandrasekar.v on 12/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
    });
  });

  test('2025Q4Sprint12Enhancement_74108A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74108A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.CloseScreen()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectRowAtRoleName()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickAlarmEntryEditPermission()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.verifyDeleteCheckBoxCheckedForLoginUser()
      await settings.rolesEntry.save()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.enterAtPF()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRowAtPFCode()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickQAFormsTab()
      personnel.personnelEntry.NavigateToQAFormsTab1()
      personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.saveButton()
      await qa.questionDataEntry.verifyDeleteIconIsEnabled()
      //Automated By : - chandrasekar.v on 12/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
      //Verify the Individual Phoenix forms Delete option works
    });
  });

  test('2025Q4Sprint12Enhancement_74108B', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74108B', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRolesScreen()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.selectRowAtRoleName()
      await settings.rolesEntry.enterAtScreenID()
      await settings.rolesEntry.clickSearchButton()
      await settings.rolesEntry.clickAlarmEntryEditPermission()
      await settings.module.switchToRolesEntryEditScreen()
      await settings.rolesEntry.clickSelectAllScheckBox()
      await settings.rolesEntry.save()
      await settings.rolesEntry.close()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('QA Forms')
      await settings.module.switchToQAForms()
      await settings.qaForms.selectAtFormType()
      await settings.qaForms.enterAtFormRef()
      await settings.qaForms.clickOnSearch()
      await settings.qaForms.selectAtGridRowByFormRef()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.clickRepositoryTab()
      await qa.qAFormEntry.repositoryTab.enterAtRepositoryID()
      await qa.qAFormEntry.repositoryTab.clickAdd()
      await qa.module.SwitchToQAFormEntry()
      await qa.qAFormEntry.SelectReadyForUseCheckBox()
      await qa.qAFormEntry.SaveScreen()
      await qa.qAFormEntry.CloseScreen()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.enterAtPF()
      personnel.personnelSearch.clickSearchButton()
      personnel.personnelSearch.selectRowAtPFCode()
      personnel.switchToPersonnelEntry()
      personnel.personnelEntry.clickQAFormsTab()
      personnel.personnelEntry.NavigateToQAFormsTab1()
      personnel.personnelEntry.personnelEntryQAFormsTab.selectAtSelectForm()
      await qa.module.SwitchToQuestionDataEntry()
      await qa.questionDataEntry.saveButton()
      await qa.questionDataEntry.verifyDeleteIconIsEnabled()
      //Automated By : - chandrasekar.v on 12/15/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
      //Verify the Individual Phoenix forms Delete option works
    });
  });

});

test.describe('SettingsDefectQ4Sprint12', () => {
  test('SettingsDefectQ4Sprint12_63324', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '63324', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Report Repository')
      await settings.module.switchToReportRepository()
      await settings.reportRepository.enterAtScreenID()
      await settings.reportRepository.enterAtReportOrFormName()
      await settings.reportRepository.clickSearch()
      await settings.reportRepository.verifyAtNameInGrid()
      await settings.reportRepository.selectAtGridrowByName()
      await settings.module.switchToReportRepositoryEntry()
      await settings.reportRepositoryEntry.checkPasswordRequiredCheckBox()
      await settings.reportRepositoryEntry.save()
      await settings.reportRepositoryEntry.close()
      await settings.module.switchToReportRepository()
      await loaderPage.navigateToModule('Personnel')
      await loaderPage.navigateToScreen('Personnel Search')
      personnel.switchToPersonnelSearch()
      personnel.personnelSearch.clickPrintButton()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.clearPassword()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Select Report')
      // objectIdentification.windowHandle.verifyWindowExistsByURL('frmPnxSQLRpt.aspx?')
      await home.selectReport.ClosePnxReportScreen()
      await home.module.switchToSelectReport()
      await home.selectReport.selectAtReportNameInGrid()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.clearPassword()
      await settings.phoenixAuthenticatorWindow.enterAtInvalidPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      await settings.phoenixAuthenticatorWindow.verify2023InvalidUserNamePasswordAckMsg()
      await home.module.switchToSelectReport()
      //Automated By : - chandrasekar.v on 12/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - PB  2025
    });
  });

  test('SettingsDefectQ4Sprint12_74694', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74694', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Camera Config')
      await settings.module.switchToCameraConfig()
      await settings.cameraConfig.clickAddNew()
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.enterAtName()
      await settings.cameraConfigEntry.enterAtDescription()
      await settings.cameraConfigEntry.selectAtCameraUse()
      await settings.cameraConfigEntry.selectAtCameraType()
      await settings.cameraConfigEntry.enterAtCameraIP()
      await settings.cameraConfigEntry.save()
      await settings.module.switchToCameraConfigEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.cameraConfigEntry.enterAtCameraIP(1);//created
      await settings.cameraConfigEntry.save()
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.verify1152ThisCameraNameAlreadyExistBottomMessageNotAppears()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.saveAndCloseScreen()
      await settings.module.switchToCameraConfig()
      await settings.cameraConfig.selectAtNameInGrid(1)
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.save()
      await settings.module.switchToCameraConfigEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await settings.cameraConfigEntry.enterAtCameraIP(2);//created
      await settings.cameraConfigEntry.save()
      await settings.module.switchToCameraConfigEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      // Automated By : - Sarathkumar L on 12/29/2025
      // Sprint :- : Quarter 4 : Sprint 12
      // Type of Test case : - Defect
    });
  });

  test('SettingsDefectQ4Sprint12_74694A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '74694A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Camera Config')
      await settings.module.switchToCameraConfig()
      await settings.cameraConfig.clickAddNew()
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.enterAtName()
      await settings.cameraConfigEntry.enterAtDescription()
      await settings.cameraConfigEntry.selectAtCameraUse()
      await settings.cameraConfigEntry.selectAtCameraType()
      await settings.cameraConfigEntry.enterAtCameraIP()
      await settings.cameraConfigEntry.save()
      await settings.module.switchToCameraConfigEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await settings.cameraConfigEntry.enterAtCameraIP(1);//created
      await settings.cameraConfigEntry.save()
      await settings.module.switchToCameraConfigEntry()
      await settings.cameraConfigEntry.verify1152ThisCameraNameAlreadyExistBottomMessageNotAppears()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated By : - chandrasekar.v on 1/29/2025
      //Sprint :-  : Quarter 1  :  Sprint 01
      //Type of Test case : - Defect 2026
    });
  });

  test('SettingsDefectQ4Sprint12_77520', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '77520', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Charge Dispositions')
      //Scenario 1
      await settings.module.switchToChargeDisposition()
      await settings.chargeDisposition.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.enterAtDispositionCode(3)
      await settings.sharedCodes.verifyDispositionCodeIsEmpty()
      await settings.sharedCodes.closeScreen()
      //Scenario 2
      await settings.module.switchToChargeDisposition()
      await settings.chargeDisposition.enterAtDispositionCode(3)
      await settings.chargeDisposition.verifyDispositionCodeIsEmpty()
      await settings.chargeDisposition.enterAtDispositionCode(1)
      await settings.chargeDisposition.verifyAtDispositionCode(2)
      await settings.chargeDisposition.clickSearchButton()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Charge Disposition')
      await settings.module.switchToChargeDisposition()
      await settings.chargeDisposition.verify1011NoRecordFoundAcknowledgePopupAppears()
      await settings.module.switchToChargeDisposition()
      // objectIdentification.manualIdentify.reloadScreen('Charge Dispositi..')
      await settings.module.switchToChargeDisposition()
      await settings.chargeDisposition.enterAtDescriptionCode(1)
      await settings.chargeDisposition.clickSearchButton()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Charge Disposition')
      await settings.module.switchToChargeDisposition()
      await settings.chargeDisposition.verify1011NoRecordFoundAcknowledgePopupAppears()
      await settings.module.switchToChargeDisposition()
      // objectIdentification.manualIdentify.reloadScreen('Charge Dispositi..')
      await settings.module.switchToChargeDisposition()
      await settings.chargeDisposition.enterAtDispositionCode(1)
      await settings.chargeDisposition.verifyAtDispositionCode(2)
      await settings.chargeDisposition.enterAtDescriptionCode(1)
      await settings.chargeDisposition.clickSearchButton()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Charge Disposition')
      await settings.module.switchToChargeDisposition()
      await settings.chargeDisposition.verify1011NoRecordFoundAcknowledgePopupAppears()
      await settings.module.switchToChargeDisposition()
      // Automated By : - Sarathkumar L on 02/06/2026
      // Sprint :- : Quarter 1 : Sprint 2
      // Type of Test case : - Defect
    });
  });

  test('SettingsDefectQ4Sprint12_77520A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '77520A', async () => {
      await loginPage.loginScreen.logon()
      //Scenario 3
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Offense Codes')
      await settings.module.switchToOffenseCodes()
      await settings.offenseCodes.enterAtOffenseCode(1)
      await settings.offenseCodes.verifyAtOffenseCode(2)
      await settings.offenseCodes.clickSearch()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Offense Codes')
      await settings.module.switchToOffenseCodes()
      await settings.offenseCodes.verify1011NoRecordFoundAcknowledgePopup()
      //Scenario 4
      await loaderPage.navigateToScreen('Release Codes')
      await settings.module.switchToReleaseCodes()
      await settings.releaseCodes.enterAtStatusCode(1)
      await settings.releaseCodes.verifyAtStatusCode(2)
      await settings.releaseCodes.clickSearch()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Offense Codes')
      await settings.module.switchToReleaseCodes()
      await settings.releaseCodes.verify1011NoRecordFoundAcknowledgePopup()
      //Scenario 5
      await loaderPage.navigateToScreen('Document Type')
      await settings.module.switchToDocumentCodes()
      await settings.documentCodes.enterAtDocumentType(3)
      await settings.documentCodes.verifyDocumentTypeIsEmpty()
      await settings.documentCodes.enterAtDocumentType(1)
      await settings.documentCodes.verifyAtDocumentType(2)
      await settings.releaseCodes.clickSearch()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Offense Codes')
      await settings.module.switchToDocumentCodes()
      await settings.documentCodes.verify1011NoRecordFoundAcknowledgePopup()
      await settings.module.switchToDocumentCodes()
      // Automated By : - Sarathkumar L on 02/06/2026
      // Sprint :- : Quarter 1 : Sprint 2
      // Type of Test case : - PB
    });
  });

  test('SettingsDefectQ4Sprint12_79785', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '79785', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Action Search')
      await settings.module.switchToActionSearch()
      await settings.actionSearch.clickIncludeInactiveLabel()
      await settings.actionSearch.verifyIncludeInactiveCheckboxIsNotChecked()
      await settings.actionSearch.clickIncludeInactiveCheckbox()
      await settings.actionSearch.verifyIncludeInactiveCheckboxIsChecked()
      await settings.actionSearch.clickIncludeInactiveCheckbox()
      await settings.actionSearch.clickAddNewButton()
      await settings.module.switchToActionEntry()
      await settings.actionEntry.clickInactiveLabel()
      await settings.actionEntry.verifyInactiveCheckboxIsNotChecked()
      await settings.actionEntry.clickInactiveCheckbox()
      await settings.actionEntry.verifyInactiveCheckboxIsChecked()
      await settings.actionEntry.verifyInactiveDateTimeAsCurrentDateTime()
      await settings.actionEntry.close()
      // objectIdentification.windowHandle.phoenixMainWindow()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Charge')
      await settings.module.switchToCharge()
      await settings.chargeScreen.clickAddNew()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickInactiveCheckBox()
      await settings.sharedCodes.verifyInactiveCheckboxChecked()
      await settings.sharedCodes.verifyInactiveDateAsCurrentDateTime()
      await settings.sharedCodes.closeScreen()
      // objectIdentification.windowHandle.phoenixMainWindow()
    });
  });

});

test.describe('PBSettingsSystemParameter264', () => {
  test('PBSettingsSystemParameter264_60704', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '60704', async () => {
      await loginPage.loginScreen.logonUsingTestContextOtherDB()
      // objectIdentification.windowHandle.switchToMainWindow()
      await home.myHome.clickSelfProfileLink()
      await settings.module.switchToPhoenixAuthenticatorWindow()
      await settings.phoenixAuthenticatorWindow.enterAtPassword()
      await settings.phoenixAuthenticatorWindow.clickAcceptButton()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.switchToPreferenceTab()
      personnel.personnelEntry.personnelEntryPreferencesTab.clickDebugCheckBox()
      personnel.switchToPersonnelEntryURL()
      personnel.personnelEntry.save()
      personnel.personnelEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyUserLoginOption4340IsEnable()
      await settings.sysParameter.clickResetIcon()
      await settings.sysParameter.setSystemparameter264AsTrue()
      await loaderPage.logout()
      await loginPage.loginScreen.logon()
      await loginPage.loginScreen.verifyCJISSecurityPolicySystemUseNotificationAck()
      await loginPage.loginScreen.logonUsingTestContextOtherDB()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter264AsFalse()
      await settings.module.switchToSystemParamter()
      //Automated By : - chandrasekar.v on 12/9/2025
      //Sprint :-  : Quarter  4  :  Sprint 12
      //Type of Test case : - Defect 2025
      //Verify the Individual Phoenix forms Delete option works
    });
  });

});

test.describe('Q3S7SettingsLegacy2025', () => {
  test('Q3S7SettingsLegacy2025_55490', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55490', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(1)
      await settings.roles.clickSearch()
      await settings.roles.selectAtRoleNameInGrid()
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.verifyAtJuris(1);//created
      await settings.rolesEntry.close()
      await settings.module.switchToRoles()
      await settings.roles.clickSearch()
      await settings.roles.verifyAtJurisColumnValues(6);//created
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(2)
      await settings.roles.clickSearch()
      await settings.roles.verifyAtJurisColumnValues(7);//created
      await settings.roles.verifyAtRoleNameByJurisInGrid(7);//created
      await settings.roles.verifyAtDescriptionByJurisInGrid(7);//created
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(3)
      await settings.roles.clickSearch()
      await settings.roles.verifyAtJurisColumnValues(8);//created
      await settings.roles.verifyAtRoleNameByJurisInGrid(8)
      await settings.roles.verifyAtDescriptionByJurisInGrid(8)
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(4)
      await settings.roles.clickSearch()
      await settings.roles.verifyAtJurisColumnValues(9);//created
      await settings.roles.verifyAtRoleNameByJurisInGrid(9)
      await settings.roles.verifyAtDescriptionByJurisInGrid(9)
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(5)
      await settings.roles.clickSearch()
      await settings.roles.verifyAtJurisColumnValues(10);//created
      await settings.roles.verifyAtRoleNameByJurisInGrid(10)
      await settings.roles.verifyAtDescriptionByJurisInGrid(10)
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(0)
      await settings.roles.clickSearch()
      await settings.roles.verifyAtJurisColumnValues(11);//created
      await settings.roles.verifyAtRoleNameByJurisInGrid(11)
      await settings.roles.verifyAtDescriptionByJurisInGrid(11)
      // Automated By : - Sarathkumar L on 02/18/2026
      // Sprint :- : Quarter 1 : Sprint 2
      // Type of Test case : - Legacy
    });
  });

  test('Q3S7SettingsLegacy2025_55490A', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {
    await withTestContext(testData, '55490A', async () => {
      await loginPage.loginScreen.logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Roles')
      await settings.module.switchToRoles()
      await settings.roles.enterAtRoleName()
      await settings.roles.clickSearch()
      await settings.roles.verifyLinkedRolePresentInGrid();//created
      await settings.roles.clickLinkedRoleIconInGrid();//created
      await settings.module.switchToRolesEntry()
      await settings.rolesEntry.clickColumnHeaderByAtColumnName(1);//created
      await settings.rolesEntry.verifyAtColumnValuesSortedAscendingOrder(1)
      await settings.rolesEntry.verifyAtColumnValuesSortedDescendingOrder(1)
      await settings.rolesEntry.clickColumnHeaderByAtColumnName(2);//created
      await settings.rolesEntry.verifyAtColumnValuesSortedAscendingOrder(2)
      await settings.rolesEntry.verifyAtColumnValuesSortedDescendingOrder(2)
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(1)
      await settings.roles.clickSearch()
      await settings. roles.clickRandomRowCheckbox();//created
      await settings. roles.verifyCopyToSameJurisIsEnabled()
      await settings. roles.verifyCopyToMultiJurisIsEnabled()
      await settings. roles.verifyLinkedRoleIsEnabled();//created
      await settings. roles.verifyModulePermissionsIsEnabled();//created
      await settings. roles.verifyPFAllowedIsEnabled();//created
      await settings. roles.verifyAddNewIsEnabled();//created
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(2)
      await settings.roles.clickSearch()
      await settings. roles.clickRandomRowCheckbox()
      await settings. roles.verifyCopyToSameJurisIsEnabled()
      await settings. roles.verifyCopyToMultiJurisIsEnabled()
      await settings. roles.verifyLinkedRoleIsEnabled();//created
      await settings. roles.verifyModulePermissionsIsEnabled();//created
      await settings. roles.verifyPFAllowedIsEnabled();//created
      await settings. roles.verifyAddNewIsEnabled();//created
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(3)
      await settings.roles.clickSearch()
      await settings. roles.clickRandomRowCheckbox()
      await settings. roles.verifyCopyToSameJurisIsEnabled()
      await settings. roles.verifyCopyToMultiJurisIsEnabled()
      await settings. roles.verifyLinkedRoleIsEnabled();//created
      await settings. roles.verifyModulePermissionsIsEnabled();//created
      await settings. roles.verifyPFAllowedIsEnabled();//created
      await settings. roles.verifyAddNewIsEnabled();//created
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(4)
      await settings.roles.clickSearch()
      await settings. roles.clickRandomRowCheckbox()
      await settings. roles.verifyCopyToSameJurisIsEnabled()
      await settings. roles.verifyCopyToMultiJurisIsEnabled()
      await settings. roles.verifyLinkedRoleIsEnabled();//created
      await settings. roles.verifyModulePermissionsIsEnabled();//created
      await settings. roles.verifyPFAllowedIsEnabled();//created
      await settings. roles.verifyAddNewIsEnabled();//created
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(5)
      await settings.roles.clickSearch()
      await settings. roles.clickRandomRowCheckbox()
      await settings. roles.verifyCopyToSameJurisIsEnabled()
      await settings. roles.verifyCopyToMultiJurisIsEnabled()
      await settings. roles.verifyLinkedRoleIsEnabled();//created
      await settings. roles.verifyModulePermissionsIsEnabled();//created
      await settings. roles.verifyPFAllowedIsEnabled();//created
      await settings. roles.verifyAddNewIsEnabled();//created
      await settings.module.switchToRoles()
      await settings.roles.selectAtJuris(6)
      await settings.roles.clickSearch()
      await settings. roles.clickRandomRowCheckbox()
      await settings. roles.verifyCopyToSameJurisIsEnabled()
      await settings. roles.verifyCopyToMultiJurisIsEnabled()
      await settings. roles.verifyLinkedRoleIsEnabled();//created
      await settings. roles.verifyModulePermissionsIsEnabled();//created
      await settings. roles.verifyPFAllowedIsEnabled();//created
      await settings. roles.verifyAddNewIsEnabled();//created
      // Automated By : - Ranjith Kumar V K on 03/11/2026
      // Sprint :- : Quarter 1 : Sprint 3
      // Type of Test case : - Defect
    });
  });

});

