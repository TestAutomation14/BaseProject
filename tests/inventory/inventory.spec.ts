// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';

const testData = TestDataReader.loadData('Inventory');

test.describe('expandableItem', () => {
  test('expandableItem_119985', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '119985', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.TabEntryDate()
      await inventory.inventoryEntry.verifyCurrentDateAutoPopulatesInEntryDate()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.verifyExpendableItemAppears()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.enterAtModel()
      await inventory.inventoryEntry.enterAtDescription()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      //		Set<String> handles = objectIdentification.windowHandle.collectWindowHandles();
      //		inventory.inventoryEntry.clickBarCodeButton();
      //		objectIdentification.windowHandle.switchToNewlyOpenedWindow(handles);
      //		Playback.gridLoadThreadWait();
      //		Playback.actionDriver.sendKeys(Keys.TAB).build().perform();
      //		Playback.actionDriver.sendKeys(Keys.ENTER).build().perform();
      //		inventory.SwitchToInventoryEntry();
      await inventory.inventoryEntry.verifyBarCodeImage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('expandableItem_119993', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '119993', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.inventoryEntryMainTab.enterAtComment()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectAtCheckOutType()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterCheckout()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtExistingDeptTracking()
      await inventory.inventoryEntry.inventoryEntryMainTab.Verify1046AcknowledgeMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtNewDeptTracking()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtReorderQuantity()
      await inventory.inventoryEntry.inventoryEntryMainTab.clickLogEquipmentCheckBox()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('expandableItem_120005', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '120005', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyCurrentDateAutoPopulatesInPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyDefaultLoggedPfAutoPopulatesInByField()
      await inventory.inventoryEntry.purchaseHistoryTab.SelectAtInventoryLocation()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtVendorName()
      await inventory.inventoryEntry.purchaseHistoryTab.SelectAtHowAccquired()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.inventoryEntry.purchaseHistoryTab.Verify3032EnterQtyReceivedAckMsg()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyAcknowledgeCostMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyTotalCostByMultiplyQtyAndUnitCost()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsQtyReceived()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyTotalQuantityAtQtyReceived()
    });
  });

  test('expandableItem_121369', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '121369', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.clickRowByAtVendorName()
      await inventory.inventoryEntry.purchaseHistoryTab.clearScanBarCode()
      await inventory.inventoryEntry.purchaseHistoryTab.clickBatchScanItemButton()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtPopUpScanBarCode()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtPopUpScanBarCode()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyAcknowledgeDuplicateMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtPopUpScanBarCode2()
      await inventory.inventoryEntry.purchaseHistoryTab.clickUpdateButton()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.clickRowByAtVendorName()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyBatchScanButtonGreen()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('expandableItem_121373', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '121373', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDateAutopopulatesInProcessedDateField()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyLoggedPFAutopopulates()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDateAutopopulatesInProcessedDateField()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyLoggedPFAutopopulates()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickFleetRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtFleetNo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtLocation()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.verify11028InvalidReturnAckMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickPersonnelRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('expandableItem_121374', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '121374', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearReorderQuantity()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtReorderQuantity()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDateAutopopulatesInProcessedDateField()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyLoggedPFAutopopulates()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickFleetRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtFleetNo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtLocation()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickFleetRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtFleetNo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtLocation()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterQuantityAs3()
      await inventory.inventoryEntry.verify11027AbleToReturnOnly2AckMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clearQuantity()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.verify11039ConfirmMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('expandableItem_121376', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '121376', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDateAutopopulatesInProcessedDateField()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyLoggedPFAutopopulates()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickDivisionRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtDivision()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickDivisionRadioButton()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.verify3032EnterQtyAckMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.verify3032EnterDivisionAckMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtDivision()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('expandableItem_121377', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '121377', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDateAutopopulatesInProcessedDateField()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyLoggedPFAutopopulates()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickStationRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.verify3032EnterStationAckMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtStation()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickStationRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtStation1()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.verify11028InvalidReturnAckMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtStation()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('expandableItem_126713', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '126713', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyCopyButtonDisabled()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyCurrentDateAutoPopulatesInPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyDefaultLoggedPfAutoPopulatesInByField()
      await inventory.inventoryEntry.purchaseHistoryTab.SelectInventoryLocation()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyTotalCostByMultiplyQtyAndUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyCurrentDateAutoPopulatesInPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyDefaultLoggedPfAutoPopulatesInByField()
      await inventory.inventoryEntry.purchaseHistoryTab.SelectInventoryLocation()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyTotalCostByMultiplyQtyAndUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAllTabsEnabledAndDispositionTabDisabled()
    });
  });

  test('expandableItem_254472', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '254472', async () => {
      await loginPage.loginScreen.logonUsingTestContextOtherDB()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.clickInactiveCheckbox()
      await vehicle.fleetEntry.clickIsFireCheckbox()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.selectUsageType()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.fleetEntryMainTab.clickLockableCheckbox()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtVendorName()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.selectActionAsDisposition()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy()
      await vehicle.fleetEntry.assignmentsTab.enterAtPFCode()
      await vehicle.fleetEntry.assignmentsTab.selectAtDisposition()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.ClickDeleteIconInGrid()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.verifyActionFieldEnable()
      await vehicle.fleetEntry.assignmentsTab.verifyAssignedDateFieldEnable()
      await vehicle.fleetEntry.assignmentsTab.verifyByFieldEnable()
      await vehicle.fleetEntry.assignmentsTab.verifyPFFieldEnable()
    });
  });

});

test.describe('inventoryConfig', () => {
  test('inventoryConfig_118716', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118716', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      await settings.maintainCodeValue.selectAtItemType()
      await settings.maintainCodeValue.selectAtPanelType()
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.enterAtCodeValue()
      await settings.maintainCodeValue.enterAtDescription()
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValueInGrid()
    });
  });

  test('inventoryConfig_118718', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118718', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      await settings.maintainCodeValue.selectAtItemCategory()
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.enterAtCodeValue()
      await settings.maintainCodeValue.enterAtDescription()
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValueInGrid()
    });
  });

  test('inventoryConfig_118721', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118721', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      await settings.maintainCodeValue.selectAtInventoryType()
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.enterAtCodeValue()
      await settings.maintainCodeValue.enterAtDescription()
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValueInGrid()
    });
  });

  test('inventoryConfig_118723', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118723', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.enterAtCodeValue()
      await settings.maintainCodeValue.enterAtDescription()
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValueInGrid()
    });
  });

  test('inventoryConfig_118724', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118724', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      // settings.maintainCodeValue.ClickSystemCheckBox(); No check box available in
      // screen
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.enterAtCodeValue()
      await settings.maintainCodeValue.enterAtDescription()
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValueInGrid()
      await settings.maintainCodeValue.closeTheScreen()
      await settings.module.switchToCodedScreen()
    });
  });

  test('inventoryConfig_118725', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118725', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.enterAtCodeValue()
      await settings.maintainCodeValue.enterAtDescription()
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValueInGrid()
      await settings.maintainCodeValue.closeTheScreen()
      // objectIdentification.windowHandle.switchToMainWindow()
    });
  });

  test('inventoryConfig_118729', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118729', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Storage Location')
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.clickAddNewButton()
      await inventory.module.SwitchToStorageLocationEntry()
      await inventory.storageLocationEntry.EnterAtDescription()
      await inventory.storageLocationEntry.SelectAtLocationUseFor()
      await inventory.storageLocationEntry.clickLockerCheckbox()
      await inventory.storageLocationEntry.SaveNClose()
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.EnterAtDescription()
      await inventory.storageLocation.clickSearchButton()
      await inventory.storageLocation.VerifyAtDescriptionInGrid()
    });
  });

  test('inventoryConfig_118730', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118730', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Names')
      await loaderPage.navigateToScreen('Name Entry')
      await names.module.switchToNameEntry()
      await names.nameEntry.EnterNameIDAsB()
      await names.nameEntry.EnterAtLastName()
      await names.nameEntry.EnterAtAddress()
      await names.nameEntry.SaveWithConfirmMessage()
      // names.nameEntry.Verify6031ConfirmMessage();
      await names.nameEntry.switchToBusinessTab()
      await names.nameEntry.businessTab.SelectBusinessType()
      await names.nameEntry.businessTab.EnterAtBusinessID()
      await names.nameEntry.businessTab.SelectAtState()
      await names.nameEntry.businessTab.ClickInventoryVendorCheckbox()
      await names.nameEntry.businessTab.EnterLicenseNo()
      await names.nameEntry.businessTab.ClickAddButton()
      await names.nameEntry.businessTab.SaveWithConfirm()
      await names.module.switchToNameEntry()
      await names.nameEntry.SaveWithConfirmMessage()
      await names.module.switchToNameEntry()
      //Updated By :- Kiran Date :-11/19/2024 Sprint :-11 Quarter:- 4 Testcase ID:-42347
    });
  });

  test('inventoryConfig_119497', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '119497', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verify1002AdditionSuccessfulFooterMessage()
      await vehicle.module.switchToFleetEntry();                   //Testcase ID:42347
      await vehicle.fleetEntry.clickInactiveCheckbox()
      await vehicle.fleetEntry.verifyInactiveDateAsCurrentDate()
      await vehicle.fleetEntry.clickResetIcon()
      await vehicle.fleetEntry.verifyInactiveCheckBoxIsUnchecked()
      await vehicle.fleetEntry.verifyInActiveDateFieldIsEmpty();  //Testcase ID:42347-End
    });
  });

  test('inventoryConfig_121378', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '121378', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.enterAtCodeValue()
      await settings.maintainCodeValue.enterAtDescription()
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValueInGrid()
      await settings.maintainCodeValue.clickRowByAtCodeValue()
      await settings.maintainCodeValue.clickPopUpCancelButton()
      await settings.module.switchToMaintainCodeValue()
    });
  });

  test('inventoryConfig_127726', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '127726', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Vehicle Make Model')
      await vehicle.module.switchToVehicleMakeModel()
      await vehicle.vehicleMakeModel.enterAtMake()
      await vehicle.vehicleMakeModel.enterAtModelCode()
      await vehicle.vehicleMakeModel.enterAtModelDescription()
      await vehicle.vehicleMakeModel.clickAddButton()
      await vehicle.vehicleMakeModel.verifyModelAppearInGridByModel()
      await vehicle.vehicleMakeModel.save()
      await vehicle.module.switchToVehicleMakeModel()
      //verification method added for this testcases 47649 and 47660 by sarath 01/17/2025 //old testID:-123011
    });
  });

});

test.describe('InventoryCheckList', () => {
  test('InventoryCheckList_123011', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123011', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.selectAtColor()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      //verification method added below
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await vehicle.module.switchToFleetEntry()
      const fleetID = await vehicle.fleetEntry.readFleetID()
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickBackButton()
      await vehicle.fleetSearch.enterFleetId(fleetID)
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyAtFleetId()
      await vehicle.fleetSearch.verifyAtDescriptionByFleetID()
      await vehicle.fleetSearch.verifyAtMakeDescriptionByFleetID()
      await vehicle.fleetSearch.verifyAtModelDescriptionByFleetID()
      await vehicle.fleetSearch.verifyAtYearByFleetID()
      await vehicle.fleetSearch.verifyAtVinByFleetID()
      await vehicle.fleetSearch.verifyAtDefUnitByFleetID()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyAtFleetID()
      await vehicle.fleetEntry.verifyAtDescription()
      await vehicle.fleetEntry.verifyAtMake()
      await vehicle.fleetEntry.verifyAtModel()
      await vehicle.fleetEntry.verifyAtYear()
      await vehicle.fleetEntry.verifyAtVINNo()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.clickActivityLogTab()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.clickNotesTab()
      await vehicle.fleetEntry.clickAttachmentsTab()
      await vehicle.fleetEntry.clickTriggersTab()
      await vehicle.module.switchToFleetSearch()
    });
  });

  test('InventoryCheckList_48782', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '48782', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log')
      await inventory.module.switchToMileageLog()
      await inventory.mileageLog.selectAtFleetID()
      await inventory.mileageLog.clickUpdateMileage()
      await inventory.mileageEntry.tabOutDateInPopup()
      await inventory.mileageEntry.enterAtFuelInPopup()
      await inventory.mileageEntry.enterAtOilInPopup()
      await inventory.mileageEntry.tabOutDateInPopup()
      await inventory.mileageEntry.enterAtCurrentMileageInPopup()
      await inventory.mileageEntry.clickSaveInPopup()
      await inventory.mileageEntry.verifyAdditionSuccessfulAcknowledge()
      await inventory.module.switchToMileageLog()
      await inventory.mileageEntry.verifyMileageEntryPopupScreenClosed();//created
      await inventory.module.switchToMileageLog()
      await inventory.mileageLog.verifyAtMileageInGridWithFleet()
      await inventory.module.switchToMileageLog()
      await inventory.mileageLog.selectAtFleetIDInGrid()
      await inventory.mileageEntry.tabOutDateInPopup()
      await inventory.mileageEntry.enterAtFuelInPopup()
      await inventory.mileageEntry.enterAtOilInPopup()
      await inventory.mileageEntry.tabOutDateInPopup()
      await inventory.mileageEntry.enterAtCurrentMileageInPopup()
      await inventory.mileageEntry.clickSaveInPopup()
      await inventory.mileageEntry.verify3032GreaterThanLastMileageAckMsg()
      await inventory.module.switchToMileageLog()
      await inventory.mileageEntry.clickCancelInPopup()
      await inventory.mileageEntry.verifyMileageEntryPopupScreenClosed()
      await inventory.module.switchToMileageLog()
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId(1)
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId(1)
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickViewMileageLogButton()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.verifyAtFleetID(1)
      await vehicle.mileageLogEntry.clickUpdateMileage()
      await vehicle.fuelLogEntry.verifyAtFleetId(1)
      await vehicle.fuelLogEntry.tabOutPopupDate()
      await vehicle.fuelLogEntry.enterOilAs10()
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs20()
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify1002AdditionalSuccessfulAckMsg()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.verifyAtMileageInGrid()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.clickUpdateMileage()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.verifyAtFleetID(1);//created
      await vehicle.fuelLogEntry.clickUpdateMileageButton()
      await vehicle.fuelLogEntry.verifyAtFleetId(1);//created
      await vehicle.fuelLogEntry.tabOutPopupDate()
      await vehicle.fuelLogEntry.enterOilAs10()
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs20()
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify3032GreaterThanLstMileageAckMsg()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.fuelLogEntry.clickCancelInPopup()
      await vehicle.module.switchToMileageLogEntryWindow()
      //Automated by  :-Sarath  Date :-01/27/2025  Quarter:-1  Sprint-1  Module:-Inventory&Fleet  Type:-Enhancement
    });
  });

});

test.describe('fleet', () => {
  test('fleet_123012', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123012', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.enterAtMake()
      await vehicle.fleetSearch.enterAtYear()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyAtFleetId()
      await vehicle.fleetSearch.verifyAtDescriptionByFleetID()
      await vehicle.fleetSearch.verifyAtMakeDescriptionByFleetID()
      await vehicle.fleetSearch.verifyAtModelDescriptionByFleetID()
      await vehicle.fleetSearch.verifyAtYearByFleetID()
      await vehicle.fleetSearch.verifyAtVinByFleetID()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtTag()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtUsageType()
      await vehicle.fleetEntry.fleetEntryMainTab.clickMarkedCheckbox()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtFuelTye()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtVendorName()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtVendorRef()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtPO()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickSaveButton()
      await vehicle.fleetEntry.verify1051UpdatedDataExistsInMainTabAckMsg()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_123013', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123013', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtTag()
      await vehicle.fleetSearch.enterAtMake()
      await vehicle.fleetSearch.enterAtModel()
      await vehicle.fleetSearch.enterAtVin()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtVendorRef()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.clickAddNewEquipmentOrSupplyItemButton()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo()
      await inventory.inventorySearch.clickAssignButton()
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.clickSaveButton()
      await inventory.batchAssignReturn.Verify3032EnterLocationAcknowledgeMessage()
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.SelectAtFleetLocation()
      await inventory.batchAssignReturn.Save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      //		vehicle.fleetEntry.equipmentSuppliesTab.verifyAtFleetLocationInGrid();
      //		vehicle.fleetEntry.equipmentSuppliesTab.clickExpandCheckbox();
      await vehicle.fleetEntry.equipmentSuppliesTab.verifyAssertItemGridDisapeared()
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_123014', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123014', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtPO()
      await vehicle.fleetSearch.enterAtVendorRef()
      await vehicle.fleetSearch.clickMarkedCheckbox()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtVendorRef()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.clickPerformEquipmentServiceButton()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.enterNotes()
      await vehicle.equipmentService.tabOutServicedTestedBy()
      await vehicle.equipmentService.tabOutDate()
      await vehicle.equipmentService.clickSelectAllCheckbox()
      await vehicle.equipmentService.clickSaveButton()
      await popupPage.acknowledge.ok()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.verifyGridDisappeared()
    });
  });

  test('fleet_123015', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123015', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAs1Month()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.maintenanceScheduleTab.verifyNextDueDateAsCurrentDateOfFutureMonths(1)
      await vehicle.fleetEntry.maintenanceScheduleTab.selectRowByAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAs3Month()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.maintenanceScheduleTab.verifyNextDueDateAsCurrentDateOfFutureMonths(3)
      await vehicle.fleetEntry.maintenanceScheduleTab.selectRowByAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAs4Month()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.maintenanceScheduleTab.verifyNextDueDateAsCurrentDateOfFutureMonths(4)
      await vehicle.fleetEntry.maintenanceScheduleTab.selectRowByAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAsYear()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.maintenanceScheduleTab.verifyNextDueDateAsCurrentDateOfFutureMonths(12)
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_123016', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123016', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.enterAtMiles()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectRowByAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickViewMileageLogButton()
      await vehicle.module.switchToFuelLogEntry()
      await vehicle.fuelLogEntry.verifyAtFleetId()
      await vehicle.fuelLogEntry.clickUpdateMileageButton()
      await vehicle.fuelLogEntry.tabOutPopupDate()
      await vehicle.fuelLogEntry.enterQuantityAs10()
      await vehicle.fuelLogEntry.enterOilAs10()
      await vehicle.fuelLogEntry.enterHours('2')
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs10()
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify1002AdditionalSuccessfulAckMsg()
      await vehicle.module.switchToFuelLogEntry()
      await vehicle.fuelLogEntry.clickUpdateMileageButton()
      await vehicle.fuelLogEntry.tabOutPopupDate()
      await vehicle.fuelLogEntry.verifyMileageAppearAs10()
      await vehicle.fuelLogEntry.enterOilAs10()
      await vehicle.fuelLogEntry.enterHours('2')
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs9()
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify3032GreaterThanLstMileageAckMsg()
      await vehicle.module.switchToFuelLogEntry()
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs50()
      await vehicle.fuelLogEntry.enterHours('3')
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify1002AdditionalSuccessfulAckMsg()
      await vehicle.module.switchToFuelLogEntry()
      await vehicle.fuelLogEntry.saveNClose()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_123017', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123017', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.clickTrackHourCheckbox()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAs1Month()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectRowByAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickViewMileageLogButton()
      await vehicle.module.switchToFuelLogEntry()
    });
  });

  test('fleet_123018', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123018', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtMake()
      await vehicle.fleetSearch.enterAtModel()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.selectActionAsAssigned()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedTime()
      await vehicle.fleetEntry.clickSaveButton()
      await vehicle.fleetEntry.verify3032EnterByAcknowledgeMessage()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy(); // tabbing out value is not populating
      await vehicle.fleetEntry.assignmentsTab.verifyCurrentDateAutoPopulatesInAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.verifyDefaultLoggedPfAutoPopulatesInByField()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickSaveButton()
      await vehicle.fleetEntry.verify3032EnterPFAcknowledgeMessage()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.enterAtPFCode()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.selectActionAsReturned()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedTime()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy()
      await vehicle.fleetEntry.assignmentsTab.verifyDivisionStationRadioButtonDisabled()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.enterAtPFCode()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_123019', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123019', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtVin()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.selectActionAsAssigned()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy()
      await vehicle.fleetEntry.assignmentsTab.verifyCurrentDateAutoPopulatesInAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.verifyDefaultLoggedPfAutoPopulatesInByField()
      await vehicle.fleetEntry.assignmentsTab.clickDivisionRadioButton()
      await vehicle.fleetEntry.assignmentsTab.selectAtDivision()
      await vehicle.fleetEntry.assignmentsTab.selectSection()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.selectActionAsReturned()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy()
      await vehicle.fleetEntry.assignmentsTab.verifyDivisionStationRadioButtonDisabled()
      await vehicle.fleetEntry.assignmentsTab.enterAtPFCode()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_123020', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123020', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      // vehicle.fleetSearch.enterAtVendorName();
      await vehicle.fleetSearch.enterAtVendorRef()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.selectAtAction()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy()
      await vehicle.fleetEntry.assignmentsTab.verifyCurrentDateAutoPopulatesInAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.verifyDefaultLoggedPfAutoPopulatesInByField()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.clickStationRadioButton()
      await vehicle.fleetEntry.clickSaveButton()
      await vehicle.fleetEntry.verify3032EnterStationAcknowledgeMessage()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.assignmentsTab.selectAtStation()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.assignmentsTab.selectActionAsReturned()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy()
      await vehicle.fleetEntry.assignmentsTab.verifyDivisionStationRadioButtonDisabled()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.assignmentsTab.enterAtPFCode()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_123021', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123021', async () => {
      const comments = null
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtTag()
      await vehicle.fleetSearch.enterAtVendorName()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.switchToNotesTab()
      await vehicle.fleetEntry.fleetEntryNotesTab.tabOutUpdatedDateTime()
      await vehicle.fleetEntry.fleetEntryNotesTab.verifyCurrentDateAutopopulatesInUpdatedDateField()
      await vehicle.fleetEntry.fleetEntryNotesTab.save()
      await vehicle.fleetEntry.verify1018RequiredEntriesAreMissingAckMsg()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.switchToNotesTab()
      await vehicle.fleetEntry.fleetEntryNotesTab.enterComments(comments)
      await vehicle.fleetEntry.fleetEntryNotesTab.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAttachmentsTab()
      await vehicle.fleetEntry.switchToNotesTab()
      // vehicle.fleetEntry.fleetEntryNotesTab.verifyAddedInGrid(Playback.getTestContextAttribute('comments'))
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_123022', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '123022', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log')
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.clickSearchButton()
      await vehicle.mileageLogEntry.clickDeleteCellByFleetId()
      await vehicle.mileageLogEntry.verifingDoYouWantToDeleteAcknowledgeMessage()
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.save()
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.verifyNoRecordExists()
      await vehicle.mileageLogEntry.verifyNoRecordFoundAcknowledgeMessage()
      await vehicle.module.switchToMileageLogEntry()
    });
  });

  test('fleet_126968', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '126968', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.clickAddNewEquipmentOrSupplyItemButton()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo()
      const qty = await inventory.inventorySearch.readQuantityValueByAtInventoryNo()
      await inventory.inventorySearch.clickAssignButton()
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.DoubleclickQuantityCellByAtInventoryNo()
      await inventory.batchAssignReturn.EnterQuantityInGridByAtInventoryNo(qty)
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.SelectAtLocation()
      await inventory.batchAssignReturn.Save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.verifyExpendableItemByAtLocationInGrid()
    });
  });

  test('fleet_259719', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '259719', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.selectAtColor()
      await vehicle.fleetEntry.selectInactiveCheckBox()
      await vehicle.fleetEntry.verifyInactiveDateAsCurrentDate()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtTag()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtUsageType()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtComments()
      await vehicle.fleetEntry.fleetEntryMainTab.selectLockableCheckBox()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtVendorName()
      await vehicle.module.switchToFleetEntry(); //
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickAssignmentTab()
      await vehicle.fleetEntry.assignmentsTab.selectAtAction()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy()
      await vehicle.fleetEntry.assignmentsTab.verifyDefaultLoggedPfAutoPopulatesInByField()
      await vehicle.fleetEntry.assignmentsTab.enterAtPFCode()
      await vehicle.fleetEntry.assignmentsTab.selectDispositionAsDismantle()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      // vehicle.fleetEntry.verifySaveFunctionalitiesDisabled(); // App is not
      // disabling the Save button
      await vehicle.fleetEntry.assignmentsTab.verifyAtActionFromTable(0)
      await vehicle.fleetEntry.assignmentsTab.deleteGridRowByAction(); // Method Updated
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifySaveFunctionalitiesEnabled()
      await vehicle.module.switchToFleetEntry()
    });
  });

  test('fleet_292509', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '292509', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickAddNewButton()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.enterAtAuditName()
      await inventory.inventoryAuditEntry.selectAtAuditType()
      await inventory.inventoryAuditEntry.taboutAuditByField()
      await inventory.inventoryAuditEntry.taboutAuditDateAndTime()
      //		inventory.inventoryAuditEntry.selectAtInventoryLocation();
      await inventory.inventoryAuditEntry.clickCreateAuditButton()
      await inventory.module.switchToInventoryAuditEntry()
      const auditNo = await inventory.inventoryAuditEntry.readAuditNo()
      await inventory.inventoryAuditEntry.clickDeleteIcon()
      await inventory.inventoryAuditEntry.verifyDoYouReallyWantToDeleteConfirmPopup()
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.enterAuditNo(auditNo)
      //		inventory.inventoryAuditSearch.clickSearchButton();
      await inventory.inventoryAuditSearch.verifyNumberDoesNotExistsAcknowledgementMessage()
      await inventory.module.switchToInventoryAuditSearch()
      // @Test(groups = { '2021DefectTestCases' }) // Automated by Stalin
    });
  });

});

test.describe('assertItem', () => {
  test('assertItem_133950', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '133950', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.verifyCurrentDate()
      await inventory.inventoryEntry.selectAtInventoryName(); // No function written
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.verifyAssertItemLableAppears()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.enterAtModel()
      await inventory.inventoryEntry.enterAtDescription()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyInventoryNoAutoPopulate()
      await inventory.inventoryEntry.verifyAllTabEnabled()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDate()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyAsByPF()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.verifyAcknowledgePurchaseHistory()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // Set<String> handles =
      // objectIdentification.windowHandle.collectWindowHandles();
      // inventory.inventoryEntry.clickBarCodeButton();
      //		objectIdentification.windowHandle.switchToNewlyOpenedWindow(handles);
      //		Playback.gridLoadThreadWait();
      //		Playback.actionDriver.sendKeys(Keys.TAB).build().perform();
      //		Playback.actionDriver.sendKeys(Keys.ENTER).build().perform();
      // inventory.SwitchToInventoryEntry();
      // inventory.inventoryEntry.verifyBarCodeImage();
      // inventory.SwitchToInventoryEntry();
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterReplaceByAsCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyCurrentDateAutopopulatesInReplaceBy()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // Linked Testcase ID - 9131 2023 Q1 Sprint 4
    });
  });

  test('assertItem_134023', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '134023', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectAtInventoryName()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectServiceAsMonth()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearLastServiceDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastDateAsCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyNextDueDateAsMonthLater()
      await inventory.inventoryEntry.clickReset()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectSelectServiceAsQuarterly()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearLastServiceDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastDateAsCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyNextDueDateAsQuarterlyLater()
      await inventory.inventoryEntry.clickReset()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectSelectServiceAsSemiAnnual()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearLastServiceDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastDateAsCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyNextDueDateAsSemiannualLater()
      await inventory.inventoryEntry.clickReset()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectServiceAsMonth()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectSelectServiceAsAnnual()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectBaseMonthAsCurrentMonth()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastDateAsCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyNextDueAsNextYearCurrentMonthFirstDay()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectServiceCycleAs10Year()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectBaseMonthAsCurrentMonth()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastDateAsCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyNextDueAs10YearsCurrentMonthFirstDay()
      await inventory.module.SwitchToInventoryEntry()
      //Updated by:- Sarathkumar L  Quarter: 3 Sprint:9 Date :09/29/2025 Testcase ID: 68305
    });
  });

  test('assertItem_134026', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '134026', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.SelectAtInventoryLocation()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtVendorName()
      await inventory.inventoryEntry.purchaseHistoryTab.SelectAtHowAccquired()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyAcknowledgeCostMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyAtTotalCost()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('assertItem_134027', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '134027', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterWarrantyExpirationAs30DayFutureFromCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyWarrantyExpirationAs30DayFutureFromCurrentDate()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.clearScanBarCode()
      await inventory.inventoryEntry.purchaseHistoryTab.clickBatchScanItemButton()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterScanBarCodeAs2000()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterScanBarCodeAs2000()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyAcknowledgeDuplicateMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterScanBarCodeAs1001()
      await inventory.inventoryEntry.purchaseHistoryTab.clickUpdateButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.verifyAcknowledgePurchaseHistory()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.enterUnitCostAcknowledgeMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost();// Check here
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyBatchScanButtonGreen()
      await inventory.inventoryEntry.verifyStatusAsAvaliable()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('assertItem_118903', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118903', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDate()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyAsByPF()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.verifyStatusAsPersonnelAssignedTo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyFleetDivisionStationDisabled()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsAvaliable()
    });
  });

  test('assertItem_134028', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '134028', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDate()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyAsByPF()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickFleetCheckBox()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtFleetNo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtLocation()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.verifyStatusAsFleetAssignedTo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyFleetDivisionStationDisabled()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsAvaliable()
    });
  });

  test('assertItem_134034', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '134034', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDate()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyAsByPF()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickDivisionCheckBox()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtDivision()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.verifyStatusAsDivisionAssignedTo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyFleetDivisionStationDisabled()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsAvaliable()
    });
  });

  test('assertItem_119496', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '119496', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyCurrentDate()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyAsByPF()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickStationCheckBox()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyAcknowledgeStationMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtStation()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.verifyStatusAsStationAssignedTo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyFleetDivisionStationDisabled()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyAcknowledgePFMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsAvaliable()
      await inventory.module.SwitchToInventoryEntry()
      //	@Test(groups = { 'assertItem1' })
    });
  });

  test('assertItem_118906', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118906', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.selectAtFleetID()
      await inventory.inventorySearch.selectAtLocation()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.switchToNotesTab()
      await inventory.inventoryEntry.inventoryEntryNotesTab.EnterUpdatedDateTime(); ///testcase ID updation :41538
      await inventory.inventoryEntry.inventoryEntryNotesTab.enterAtUpdatedBy()
      await inventory.inventoryEntry.inventoryEntryNotesTab.EnterComments()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickReset()
      await inventory.inventoryEntry.switchToNotesTab()
      await inventory.inventoryEntry.inventoryEntryNotesTab.verifyCommentsAsNull()
      await inventory.inventoryEntry.inventoryEntryNotesTab.verifyUpdatedByAsNull()
      await inventory.inventoryEntry.inventoryEntryNotesTab.verifyUpdatedDateAndTimeAsNull(); ///testcase ID updation :41538- end
      await inventory.inventoryEntry.inventoryEntryNotesTab.EnterUpdatedDateTime()
      await inventory.inventoryEntry.inventoryEntryNotesTab.clickSaveButton()
      await inventory.inventoryEntry.inventoryEntryNotesTab.VerifyAcknowledgeRequiredMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.switchToNotesTab()
      await inventory.inventoryEntry.inventoryEntryNotesTab.EnterComments()
      await inventory.inventoryEntry.inventoryEntryNotesTab.clickSaveButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAttachmentTab()
      await inventory.inventoryEntry.switchToNotesTab()
      await inventory.inventoryEntry.inventoryEntryNotesTab.VerifyNotesAdded()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('assertItem_118908', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118908', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickCopyButton()
      await inventory.inventoryEntry.verifyConfirmCopyMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyCopyScreenTabs()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtSerialNo()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterCheckout()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAllTabEnabled()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('assertItem_118939', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118939', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtDeptTracking()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyAcknowledgeDeptTrackingMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectAtCheckoutType()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtCheckoutNo()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyAcknowledgeCheckOutMessage()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('assertItem_118902', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118902', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtScanBarCode()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyConfirmDuplicateScanBarcodeMessage()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('assertItem_126721', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '126721', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyQuantityReceivedFieldAsDisabledAndValueAs1()
      // inventory.inventoryEntry.verifyDispositionTabEnabled();
      // inventory.inventoryEntry.clickDispositionTab();
    });
  });

  test('assertItem_256428', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '256428', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickFleetRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtFleetNo()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtLocation()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtStatusInMenuBar()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.clickExpandCheckbox()
      await vehicle.fleetEntry.equipmentSuppliesTab.verifyAtModelInGrid()
      await vehicle.fleetEntry.equipmentSuppliesTab.verifyAtDateAcqAsCurrentDate()
      await vehicle.fleetEntry.close()
      await vehicle.module.switchToFleetSearch()
      // objectIdentification.windowHandle.switchToMainWindow()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearchII()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailable()
      //	@Test(groups = { 'assertItem1' }, priority = 3)//ServiceHistoryTab not available
    });
  });

});

test.describe('assertItem1', () => {
  test('assertItem1_134024', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '134024', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectAtLadderType()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLadderLength()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectServiceAsMonth()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastServiceDateAsLastMonthCurrentDate(); // Added by sarath
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterNextDueAsCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.enterInServiceDateAsCurrentDate();//updated
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectColor()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtSerialNo()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtCustom1()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterWarrantyExpirationAsCurrentDate()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.verifyInServiceDateAsCurrentDate();//updated
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyCurrentDateAutopopulatesInWarrantyExpiration()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectAtCheckoutType()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtCheckoutNo()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtDeptTracking()
      await inventory.inventoryEntry.inventoryEntryMainTab.clickLogEquipmentCheckBox()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

  test('assertItem1_118904', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '118904', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.selectAtInventoryLocation()
      await inventory.inventorySearch.enterAtPFNo()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtAssigedUsingInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickServiceHistoryTab();// service history tab not available
      await inventory.inventoryEntry.serviceHistoryTab.clickAddServiceHistoryButton()
      await inventory.inventoryEntry.serviceHistoryTab.EnterDate()
      await inventory.inventoryEntry.serviceHistoryTab.VerifyCurrentDate()
      await inventory.inventoryEntry.serviceHistoryTab.EnterAtServicedTestedBy()
      await inventory.inventoryEntry.serviceHistoryTab.SelectCondition()
      await inventory.inventoryEntry.serviceHistoryTab.EnterNotes()
      await inventory.inventoryEntry.serviceHistoryTab.clickAddButton()
      await inventory.inventoryEntry.serviceHistoryTab.VerifyServiceAdded(0)
      await inventory.inventoryEntry.save()
      //Updated by:- Kiran  Quarter: 4 Sprint:11 Date :-11/13/2024 Testcase ID:-41538
    });
  });

  test('assertItem1_126724', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '126724', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyQuantityOneAppearInGridByAtInventoryNo()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectAtLadderType()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearLastServiceDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearNextDueDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastServiceDateAsLastMonthCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterNextDueAsCurrentDate()
      await inventory.inventoryEntry.saveNClose()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.RightclickRowByAtInventoryNoAndclickEquipmentServiceLink()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.clickSaveButton()
      await vehicle.equipmentService.verify3032EnterTestedByAcknowledgeMessage()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.tabOutServicedTestedBy()
      await vehicle.equipmentService.verifyLoggedPFAppear()
      await vehicle.equipmentService.clickSaveButton()
      await vehicle.equipmentService.verify3032EnterDateAcknowledgeMessage()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.tabOutDate()
      await vehicle.equipmentService.verifyCurrentDateAutopopulates()
      await vehicle.equipmentService.verifyAssertItemAppearInGridByAtLadderType()
      await vehicle.equipmentService.clickServicedCheckboxByLadderType()
      await vehicle.equipmentService.clickSaveButton()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.verifyNoRecordsFoundAcknowledgeMessage()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.verifyAssertItemDisAppearInGrid()
    });
  });

  test('assertItem1_126725', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '126725', async () => {
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearLastServiceDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearNextDueDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastServiceDateAsLastMonthCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterNextDueAsCurrentDate()
      await inventory.inventoryEntry.saveNClose()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickShowDueCheckbox()
      await inventory.inventorySearch.enterServiceDueAsCurrentDate()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckbox()
      await inventory.inventorySearch.verifyPerformBatchServiceLinkEnables()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo()
      await inventory.inventorySearch.clickPerformBatchServiceButton()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.uncheckExpandCollapseCheckbox()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.clickExpandCollapseCheckbox()
      await vehicle.equipmentService.clickSelectAllCheckbox()
      await vehicle.equipmentService.tabOutServicedTestedBy()
      await vehicle.equipmentService.tabOutDate()
      await vehicle.equipmentService.clickSaveButton()
      await vehicle.equipmentService.verifyNoRecordsFoundAcknowledgeMessage()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.verifyNoEntriesAvailableInGrid()
    });
  });

  test('assertItem1_258915', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '258915', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickShowDueCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(0)
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(1)
      await inventory.inventorySearch.VerifyPerformBatchServiceLinkEnables()
      await inventory.inventorySearch.clickPerformBatchServiceButton()
      await inventory.module.switchToEquipmentServiceWindow()
      await inventory.equipmentService.verifyServiceDueByAsCurrentDate()
      await inventory.equipmentService.tabAtServicedBy()
      await inventory.equipmentService.tabAtServiceDate()
      await inventory.equipmentService.enterAtVendor()
      await inventory.equipmentService.enterAtCost()
      await inventory.equipmentService.enterAtNotes()
      const count = await inventory.equipmentService.grtRowsCount()
      await inventory.equipmentService.selectAtSevicedCheckBoxByItemType()
      await inventory.equipmentService.clickSave()
      await inventory.module.switchToEquipmentServiceWindow()
      await inventory.equipmentService.verifyRowNotAvailableAfterSave(count)
      await inventory.equipmentService.clickSaveNClose()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectRowByAtInventoryNo();// changed by sarath
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtActivityTypeInGrid(0)
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtDateInGrid(0)
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtSubjectInGrid(0)
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.selectRowByActivityType()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.switchToServiceHistoryTab()
      await activity.activityEntry.activityEntryServiceHistoryTab.verifyAtVendorCode()
      await activity.activityEntry.activityEntryServiceHistoryTab.verifyAtCost()
      await activity.activityEntry.activityEntryServiceHistoryTab.verifyAtNotes()
    });
  });

});

test.describe('InventorySysParameter', () => {
  test('InventorySysParameter_261420', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '261420', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter1203AsVEHCK()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickActivityLogTab()
      await vehicle.fleetEntry.activityLogTab.clickAddNewActivity()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.verifyAtCategory()
      await activity.activityEntry.selectAtActivityType()
      await activity.activityEntry.VerifyAtActivityStatus()
      await activity.activityEntry.TabOutActivityFromDateAndTime()
      await activity.activityEntry.enterSubject()
      await activity.activityEntry.verifyFleetNoIsDisabled()
      await activity.activityEntry.clickFleetIBubble()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.NavigateToPFTab()
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo()
      await activity.activityEntry.activityEntryPFTab.clickAddButton()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.Save()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.Close()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      await vehicle.module.switchToFleetSearch()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreenByScreenID('1383 - Activity Search')
      await activity.module.switchToActivitySearch()
      await activity.activitySearch.ClickSearchLink()
      await activity.activitySearch.ClickAtActivityTypeInGrid()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.VerifyAtActivityType()
      await activity.module.SwitchToActivityEntry()
      // Automated by TesterName :- Vijay Date :- Sprint:- Quarter:- Module:-
    });
  });

  test('InventorySysParameter_140511', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '140511', async () => {
      await loginPage.loginScreen.Logon()
      //		loader.navigateToModule('Settings');
      //		loader.navigateToScreen('System Parameter'); // Due to CRM#184538 the SP-1211 was disabled permanently with True
      //		settings.switchToSystemParamter();            // Commented by Absar
      //		settings.sysParameter.setSystemparameter1211AsTrue();
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAssignedAssetsCheckboxIsDisplayed()
      await inventory.inventorySearch.verifyUnassignedAssetsCheckboxIsDisplayed()
      await inventory.inventorySearch.verifyAvailableForCheckoutCheckboxIsDisplayed()
      await inventory.inventorySearch.verifyCheckedOutItemsCheckboxIsDisplayed()
      await inventory.inventorySearch.verifyCheckedInItemsCheckboxIsDisplayed()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyColumnCheckedIsDisplayed()
      await inventory.inventorySearch.selectInventory()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyCheckOutAndCheckInTabIsDisplayed()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickAssignedAssetsCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyValuesInAssignedColumnIsNotNull()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickUnassignedAssetsCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtPFNameInAssignedColumnByAtInventoryNo()
      // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText('Inventory Search', 'Close Tab')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickCheckedInOnlyCheckbox()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyValuesInCheckedColumnIsIn()
      await vehicle.fleetSearch.clickBackButton()
      await vehicle.fleetSearch.clickCheckedInOnlyCheckbox()
      await vehicle.fleetSearch.clickCheckedOutOnlyCheckbox()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyValuesInCheckedColumnIsOut()
      // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText('Fleet Search', 'Close Tab')
      // objectIdentification.windowHandle.switchToMainWindow()
      //		loader.navigateToModule('Settings'); // Commented below lines by Absar due to CRM#184538
      //		loader.navigateToScreen('System Parameter');
      //		settings.switchToSystemParamter();
      //		settings.sysParameter.setSystemparameter1211AsFalse();
      //		loader.navigateToModule('Inventory & Fleet');
      //		loader.navigateToScreen('Inventory Search');
      //		inventory.SwitchToInventorySearch();
      //		inventory.inventorySearch.verifyAvailableForCheckoutCheckboxIsNotDisplayed();
      //		inventory.inventorySearch.verifyCheckedOutItemsCheckboxIsNotDisplayed();
      //		inventory.inventorySearch.verifyCheckedInItemsCheckboxIsNotDisplayed();
      //		inventory.inventorySearch.clickSearchButton();
      //		inventory.inventorySearch.verifyColumnCheckedIsNotDisplayed();
      //		inventory.inventorySearch.selectInventory();
      //		inventory.SwitchToInventoryEntry();
      //		inventory.inventoryEntry.verifyCheckOutAndCheckInTabIsNotDisplayed();
      //		inventory.SwitchToInventorySearch();
    });
  });

  test('InventorySysParameter_145447', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '145447', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameter55()
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameter1205()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      const readInventoryNo = await inventory.inventoryEntry.readInventoryNo(); //
      await inventory.inventoryEntry.verifyAdditionSuccessFullMessage()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectServiceAsMonth()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectBaseMonthAsJanuary()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterLastServiceDateAsLastMonthCurrentDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.clearNextDueDate()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterNextDueAsCurrentDate()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.saveNClose()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory1()
      await inventory.inventoryEntry.selectAtMake1()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.verifyAtBy(); //
      await inventory.inventoryEntry.purchaseHistoryTab.EnterExpirationDateAsOneDayFutureFromCurrentDate()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton(); //
      await inventory.module.SwitchToInventoryEntry(); //
      await inventory.inventoryEntry.save(); //
      const readInventoryNo1 = await inventory.inventoryEntry.readInventoryNo(); //
      await inventory.inventoryEntry.saveNClose()
      await inventory.module.SwitchToInventorySearch()
      // objectIdentification.windowHandle.phoenixMainWindow()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.myHome.SwitchToMyRemindersTab()
      await home.myHome.myRemindersTab.ClickInventoryAccordation()
      await home.myHome.myRemindersTab.verifyAtServiceDueByActiveInventoryNo(readInventoryNo)
      await home.myHome.myRemindersTab.verifyServiceDueAsRedColorByActiveInventoryNo(readInventoryNo)
      await home.myHome.myRemindersTab.verifyExpiredDateByActiveInventoryNo(readInventoryNo1)
      await home.module.switchToMyHomeScreen()
      // Automated By : Stalin
      // Year : 2023Â  Quarter: 01Â  Sprint: 03
      // Type of Test case - Defect
    });
  });

  test('InventorySysParameter_23153', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '23153', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparamete1202AsTrue()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtDescription()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.clickSaveButton()
      await vehicle.fleetEntry.verify3032EnterVendorNameAcknowldgeMessage()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyAtVendorNameAsMandatory();//application issue
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparamete1202AsFalse()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtDescription()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyAtVendorNameAsNonMandatory()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verify1002AdditionSuccessfulFooterMessage()
      //Automated by  :-Kiran  Date :-11/25/2024  Quarter:-4  Sprint-11  Module:-Inventory&Fleet  Type:-Defect   SetUp:-68
    });
  });

  test('InventorySysParameter_63537', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63537', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter20AsTrue()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAdditionSuccessFullMessage()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.switchToNotesTab()
      await inventory.inventoryEntry.inventoryEntryNotesTab.EnterComments()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.verify1051UpdatedDataExistInTheNotesTabAcknowledgeMessage();//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.switchToNotesTab()
      await inventory.inventoryEntry.inventoryEntryNotesTab.clickSaveButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      // Automated By :- Sarathkumar L on 07/25/2025
      // Sprint :- Q3 Sprint 7 2025
      // Type of Test case :- Defect
    });
  });

  test('InventorySysParameter_65806', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '65806', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter1206AsTrue()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickTrackHoursCheckBox()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyTrackHourCheckboxChecked()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickViewMileageLogButton()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.clickUpdateMileage()
      await vehicle.fuelLogEntry.tabOutPopupDate()
      await vehicle.fuelLogEntry.enterAtFuel(1)
      await vehicle.fuelLogEntry.enterAtOil(1)
      await vehicle.fuelLogEntry.enterAtDEF(1)
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs10()
      await vehicle.fuelLogEntry.enterHours('10')
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify1002AdditionalSuccessfulAckMsg()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.verifyAtFleetIDInGrid(1)
      await vehicle.mileageLogEntry.verifyAtDateInGrid(1)
      await vehicle.mileageLogEntry.verifyAtColumnValueInGrid(1)
      await vehicle.mileageLogEntry.verifyAtColumnValueInGrid(2)
      await vehicle.mileageLogEntry.verifyAtColumnValueInGrid(3)
      await vehicle.mileageLogEntry.verifyAtColumnValueInGrid(4)
      await vehicle.mileageLogEntry.verifyAtColumnValueInGrid(5)
      await vehicle.mileageLogEntry.verifyAtColumnValueInGrid(6)
      await vehicle.mileageLogEntry.verifyAtColumnValueInGrid(7)
      await vehicle.mileageLogEntry.verifyAtColumnValueInGrid(8)
      await vehicle.mileageLogEntry.verifyAtFleetID(1)
      await vehicle.mileageLogEntry.selectAtFleetIDInGrid()
      await vehicle.fuelLogEntry.verifyAtMileage()
      await vehicle.fuelLogEntry.verifyAtHours()
      // Automated By :- Sarathkumar L on 02/02/2026
      // Sprint :-Â Quarter 1 :Â  Sprint 2 : year 2026
      // Type of Test case :- CheckList
    });
  });

});

test.describe('ReleaseBrokenQ122', () => {
  test('ReleaseBrokenQ122_292511', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '292511', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickPictureImage()
      await home.module.switchToAllImageScreen()
      await home.allImagesScreen.clickMobileDeviceCameraButton()
      await home.allImagesScreen.verifyNoErrorWindowOpens()
      await home.module.switchToMobileDeviceOTPScreen()
      await home.mobileDeviceOTPScreen.enterAtMobileNo()
      await home.mobileDeviceOTPScreen.clickSendLinkToMobileButton()
      await home.mobileDeviceOTPScreen.VerifyAtAuthenticaionCodeGeneratedAs6Digit()
      // Automated by TesterName :- Vijay Date :- 02/17/2022 Sprint:-Sprint 4
      // Quarter:- Q1 Module:- Inventory
    });
  });

});

test.describe('2021DefectTestCases', () => {
  test('2021DefectTestCases_275264', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '275264', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAs1Month()
      await vehicle.fleetEntry.maintenanceScheduleTab.enterDateAsCurrentDate()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verify1003UpdateSuccessfulFooterMessage()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.myHome.SwitchToMyRemindersTab()
      await home.myHome.myRemindersTab.ClickFleetAccordation()
      await home.myHome.myRemindersTab.VerifyAtFleetId()
      await home.module.switchToMyHomeScreen()
    });
  });

});

test.describe('InventoryEntrySmoke', () => {
  test('InventoryEntrySmoke_FltEnt', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, 'FltEnt', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick Addbutton')
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterFleetID()
      await vehicle.fleetEntry.enterDescription()
      await vehicle.fleetEntry.selectMake()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterModel()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterYear()
      await vehicle.fleetEntry.enterVin()
      await vehicle.fleetEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick SaveScreen')
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verify1002AdditionSuccessfulFooterMessage()
      // objectIdentification.smokeTest.clickOnEntryScreensTabsWithCheckWindowOpens('Shared Codes');//updated by ranjith
    });
  });

  test('InventoryEntrySmoke_InvEnt', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, 'InvEnt', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await popupPage.acknowledge.okIfWindowExist('AfterClick Addbutton')
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.verifyCurrentDate()
      await inventory.inventoryEntry.selectInvName()
      await inventory.inventoryEntry.selectCategory()
      await inventory.inventoryEntry.selectMake()
      await inventory.inventoryEntry.enterDescription()
      await inventory.inventoryEntry.save()
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save')
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('Inventory Entry')
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyinInvNoISNotNull()
      await inventory.inventoryEntry.verifyAdditionSuccessFullMessage()
    });
  });

  test('InventoryEntrySmoke_mlgeEnt', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, 'mlgeEnt', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log');//updated by ranjith
      await inventory.module.switchToMileageLog()
      await inventory.mileageLog.clickUpdateMileage()
      //inventory.switchToMileageLogEntry();
      await inventory.mileageEntry.selectFleetIDInPopup()
      await inventory.mileageEntry.tabOutDateInPopup()
      await inventory.mileageEntry.enterCurrentMileageInPopup()
      await inventory.mileageEntry.clickSaveInPopup()
      //popup.acknowledge.okIfWindowExist('AfterClick Save');
      await inventory.module.switchToMileageLog()
      await inventory.mileageEntry.verifyAdditionSuccessfulAcknowledge()
      await inventory.module.switchToMileageLog()
      // Automated by:-Bavithra , Date :-12/02/2022 , Quarter:-4 , Sprint:-20 ,
      // Module:Inventory
    });
  });

});

test.describe('inventoryFunctionality', () => {
  test('inventoryFunctionality_9111', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '9111', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtPFNo()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtPFNameInAssignedColumnByAtInventoryNo()
      await inventory.inventorySearch.verifyRowCountIsNotEqualsToZero()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.enterAtPFNo()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAssignedColumnHavingPFName()
      await inventory.inventorySearch.verifyRowCountIsNotEqualsToZero()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.enterAtPFNo()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickAssignedAssetsCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAssignedColumnHavingPFName()
      await inventory.inventorySearch.verifyRowCountIsNotEqualsToZero()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      // Automated by:-Bavithra , Date :-1/04/2023 , Quarter:-1 , Sprint:-1 ,
      // Module:Inventory
      // Linked Test case - 9126
    });
  });

  test('inventoryFunctionality_9116', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '9116', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log')
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.clickUpdateMileage()
      await vehicle.mileageLogEntry.taboutDateNTime()
      await vehicle.mileageLogEntry.enterAtQuantity()
      await vehicle.mileageLogEntry.enterAtOil()
      await vehicle.mileageLogEntry.enterAtCurrentMileage()
      await vehicle.mileageLogEntry.saveWithConfirmMessage()
      await vehicle.mileageLogEntry.verifyAdditionSuccessfulAcknowledgeMessage()
      await vehicle.module.switchToMileageLogEntry()
      // Automated By : - Abinaya M on 02/13/2023
      // Sprint :-Â 2023 :Â Quarter 1 :Â  Sprint 3
      // Type of Test case : - Enhancement - CRM # :- 135129
    });
  });

  test('inventoryFunctionality_9135', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '9135', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verify1002AdditionSuccessfulFooterMessage()
      // To verify the Out Of Service functionality
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.verifyOutOfServiceNotExistInPF()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickOutOfServiceCheckbox()
      await vehicle.fleetEntry.verifyOutOfServiceDateAsMandatory()
      await vehicle.fleetEntry.selectAtLocation()
      await vehicle.fleetEntry.verifyOutOfServiceAsCurrentDate()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verify1003UpdateSuccessfulFooterMessage()
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.verifyOutOfServiceInCADUnit()
      await vehicle.fleetSearch.verifyOutOfServiceNotExistInPF()
      //inventory.inventorySearch.enterAtInventoryNo();
      // Automated By : - Manikandan on 06/13/2023
      // Sprint :-Â 2023 :Â Quarter 2 :Â  Sprint 11
      // Type of Test case : - defect - CRM # :-
    });
  });

  test('inventoryFunctionality_12379', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '12379', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAssertItemLableAppears();    //Method Updated
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.verifyAtPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.enterPreviousDateFromPurchaseDate(2)
      const readPreviousDate = await inventory.inventoryEntry.purchaseHistoryTab.readPreviousDate()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.VerifyUpdteSuccessfullMessage()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickRefreshButton()
      await inventory.inventorySearch.verifyActivePurchaseDateByAtInventoryNo(readPreviousDate)
      await inventory.inventorySearch.selectRowByAtInventoryNo1()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyExpendableItemAppears()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      //inventory.inventoryEntry.purchaseHistoryTab.verifyAtDateInGrid();
      //inventory.inventoryEntry.purchaseHistoryTab.EnterPurchaseDate();
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.inventoryEntry.purchaseHistoryTab.verifyAtDate1InGrid()
      // String CurentDate = inventory.inventoryEntry.purchaseHistoryTab.verifyAtDate1InGrid();
      await inventory.inventoryEntry.purchaseHistoryTab.SelectRowByAtDate()
      const Date = await inventory.inventoryEntry.purchaseHistoryTab.readPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.VerifyUpdteSuccessfullMessage()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickRefreshButton()
      await inventory.inventorySearch.verifyActivePurchaseDateByAtInventoryNo1(Date)
      // Automated By : - Sarathkumar L on 06/13/2023
      // Sprint :-Â 2023 :Â Quarter 2 :Â  Sprint 11
      // Type of Test case : - Enhancement - CRM # :-
    });
  });

  test('inventoryFunctionality_12378', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '12378', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verify1002AdditionSuccessfulFooterMessage()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreenByScreenID('5031 - Unit Search')
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickAddnew()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.enterAtUnit()
      await settings.unitEntry.selectAtDispatchUnitType()
      await settings.unitEntry.enterAtVehicle()
      await settings.unitEntry.saveScreen()
      await settings.unitEntry.verify1002AdditionSuccessfulMessage()
      await settings.unitEntry.close()
      await settings.module.switchToUnits()
      await settings.unitsScreen.enterAtDefaultVehicle()
      await settings.unitsScreen.clickSearch()
      await settings.unitsScreen.clickUnitInGridRow()
      //		settings.unitsScreen.selectRowAtUnitTypeInGrid();
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.verifyAtDefaultVehicle()
      await settings.unitEntry.close()
      await settings.module.switchToUnits()
      await settings.unitsScreen.clickAddnew()
      await settings.module.switchToUnitEntry()
      await settings.unitEntry.enterAtUnit()
      await settings.unitEntry.selectAtDispatchUnitType()
      await settings.unitEntry.enterAtVehicle()
      await settings.unitEntry.saveScreen()
      await settings.unitEntry.verify5502vehicleAlreadyAssignedAcknowledgeMessage()
      await settings.module.switchToUnitEntry()
      //Automated By : - Abinaya M on 08/23/2023
      //Sprint :-Â  :Â Quarter  3 :Â  Sprint 16
      //Type of Test case : - Defect - CRM # :-
    });
  });

  test('inventoryFunctionality_32722', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '32722', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log')
      await inventory.module.switchToMileageLog()
      await inventory.mileageLog.clickUpdateMileage()
      await inventory.mileageEntry.clickSaveInPopup()
      await inventory.mileageEntry.verify1018RequiredEntriesAreMissingAcknowledgePopupAppears()
      // Automated By :- Sarathkumar L on 07/23/2025
      // Sprint :- Q3 Sprint 7 2025
      // Type of Test case :- Defect
    });
  });

});

test.describe('Ungrouped', () => {
  test('Ungrouped_14913', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '14913', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Batch Assign/Return')
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      await inventory.batchAssignReturn.enterAtIssueByPF()
      await inventory.batchAssignReturn.tabOutIssuedDateTime()
      await inventory.batchAssignReturn.enterAtPF()
      await inventory.batchAssignReturn.selectPersonnelRadioButton()
      await inventory.batchAssignReturn.enterAtComment()
      await inventory.batchAssignReturn.clickInventoryLookupIcon()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo()
      await inventory.inventorySearch.clickAssignButton()
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      await inventory.batchAssignReturn.VerifyAtInventoryNoItemsSelectedInGrid()
      await inventory.batchAssignReturn.Save()
      await inventory.batchAssignReturn.verifyUpdateSuccessfulAck()
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      // Automated by KIRAN :- Date :-10/19/2023 Quarter:-4 Sprint:-20 Module:-Inventory
    });
  });

  test('Ungrouped_20100', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '20100', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Batch Assign/Return')
      await inventory.module.SwitchToBatchAssignReturn()
      await inventory.batchAssignReturn.enterAtIssueByPF()
      await inventory.batchAssignReturn.tabOutIssuedDateTime()
      await inventory.batchAssignReturn.enterAtPF()
      await inventory.batchAssignReturn.clickResetButton()
      await inventory.batchAssignReturn.verifyIssueByPfIsEmpty()
      await inventory.batchAssignReturn.verifyPfIsEmpty()
      await inventory.batchAssignReturn.verifyIssuedDateIsEmpty()
      // Automated By :- Mohamed Absar on 12/14/2023
      // Sprint :-Â Quarter 4 :Â  Sprint 23 : year 2023
      // Type of Test case :- Defect CRM#153714
    });
  });

});

test.describe('Q4Defect2024', () => {
  test('Q4Defect2024_17014', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '17014', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickSearchButton()
      await inventory.inventoryAuditSearch.selectAtAuditInGrid()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyAtAuditName()
      await inventory.inventoryAuditEntry.clearAuditName()
      await inventory.inventoryAuditEntry.save()
      // boolean Displayed = objectIdentification.windowHandle.windowExist('Acknowledge')
      await inventory.inventoryEntry.verifyErrorAcknowledgePopupNotAvailable(Displayed)
      //Automated By : - manikandan on 11/10/2023
      //Sprint :-  : Quarter  4 :  Sprint 21
      //Type of Test case : - Defect - CRM # :-160315 //need to create suitefile
    });
  });

  test('Q4Defect2024_42031', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '42031', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log')
      await inventory.module.switchToMileageLog()
      await inventory.mileageLog.clickUpdateMileage()
      await inventory.mileageEntry.selectAtFleetIDInPopup()
      await inventory.mileageEntry.tabOutDateInPopup()
      await inventory.mileageEntry.enterAtCurrentMileageInPopup()
      await inventory.mileageEntry.clickSaveInPopup()
      await inventory.module.switchToMileageLog()
      await inventory.mileageEntry.verifyAdditionSuccessfulAcknowledge()
      await inventory.module.switchToMileageLog()
      await inventory.mileageLog.verifyAtMileageInGridWithFleet()
      //Automated by  :-Sarath  Date :-01/24/2025  Quarter:-1  Sprint-1  Module:-Inventory&Fleet  Type:-Defect
      // Updated script lines for TC - 55002 By : Mohamed Absar A on 05/16/2025 // Q2 Sprint 5 2025
    });
  });

  test('Q4Defect2024_48743', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '48743', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Equipment Service')
      await vehicle.module.switchToEquipmentServiceScreenTab()
      const columnValues = await vehicle.equipmentService.readColumnValue('Item Type')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickShowDueCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectAllCheckbox()
      await inventory.inventorySearch.clickPerformBatchServiceButton()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.verifyAtColumnValueInGrid(columnValues,'Item Type')
      // objectIdentification.windowHandle.closeTheScreen()
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickShowDueCheckbox()
      await vehicle.fleetSearch.clickSearchButton()
      // 55002
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Fleet Search ')
      await vehicle.module.switchToFleetSearch()
      // - 55002 -
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.clickPerformEquipmentServiceButton()
      await vehicle.module.switchToEquipmentService()
      await vehicle.equipmentService.selectAtLocatedOnlyInFleetID()
      await vehicle.equipmentService.clickSearchButton()
      await vehicle.equipmentService.verifyAtColumnValueInGrid(columnValues,'Item Type')
      //Automated by  :-Sarath  Date :-01/24/2025  Quarter:-1  Sprint-1  Module:-Inventory&Fleet  Type:-Defect
    });
  });

  test('Q4Defect2024_57928', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '57928', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      // Inventory Search Screen
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtDescription()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectAtInventoryNoInGrid(1)
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectAtInventoryNoInGrid(2)
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectAtInventoryNoInGrid(3)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles)
      await inventory.inventoryEntry.verifyAtInventoryNo(1)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles2)
      await inventory.inventoryEntry.verifyAtInventoryNo(2)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles3)
      await inventory.inventoryEntry.verifyAtInventoryNo(3)
      // objectIdentification.windowHandle.closeAllTheWindowsExceptMainWindow()
      // Check Out/In Search Screen
      await loaderPage.navigateToScreen('Check Out/In Search')
      await inventory.module.switchToCheckOutInSearch();//
      await inventory.checkOutInSearch.clickSearch()
      await inventory.checkOutInSearch.selectAtDescriptionInGrid(1)
      await inventory.module.switchToCheckOutInSearch()
      await inventory.checkOutInSearch.selectAtDescriptionInGrid(2)
      await inventory.module.switchToCheckOutInSearch()
      await inventory.checkOutInSearch.selectAtDescriptionInGrid(3)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles4)
      await inventory.checkOutInEntry.verifyAtInventoryNoInGrid1(1)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles5)
      await inventory.checkOutInEntry.verifyAtInventoryNoInGrid1(2)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles6)
      await inventory.checkOutInEntry.verifyAtInventoryNoInGrid1(3)
      // objectIdentification.windowHandle.closeAllTheWindowsExceptMainWindow()
      // Storage Location Screen
      await loaderPage.navigateToScreen('Storage Location')
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.EnterAtDescription()
      await inventory.storageLocation.clickSearchButton()
      await inventory.storageLocation.selectAtDescriptionInGrid(1)
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.selectAtDescriptionInGrid(2)
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.selectAtDescriptionInGrid(3)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles7)
      await inventory.storageLocationEntry.verifyAtDescription(1)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles8)
      await inventory.storageLocationEntry.verifyAtDescription(2)
      // objectIdentification.windowHandle.switchToNewlyOpenedWindow(collectWindowHandles9)
      await inventory.storageLocationEntry.verifyAtDescription(3)
      //Automated By :- Mohamed Absar A on 05/20/2025 // Type:- Enhancement // Q2 Sprint 5 2025 CRM#183413
    });
  });

  test('Q4Defect2024_55164', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '55164', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtInventoryNo(1)
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.enterAtComment()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.inventoryEntry.verifyTabColorAsBlue('Main')
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.verifyAtComment()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyTabColorAsBlue('Purchase History')
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.verifyAtBy()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsAvaliable()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtComments()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.inventoryEntry.verifyTabColorAsBlue('Assigned/Issued History')
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtCommentsToolTipByTitleInGrid()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.clickAddServiceHistoryButton()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.TabOutActivityDateAndTime()
      await activity.activityEntry.Save()
      await activity.module.SwitchToActivityEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await activity.activityEntry.saveNClose()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyTabColorAsBlue('Activity Log')
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtDateInGrid(0)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.switchToNotesTab()
      await inventory.inventoryEntry.inventoryEntryNotesTab.EnterUpdatedDateTime()
      await inventory.inventoryEntry.inventoryEntryNotesTab.enterAtUpdatedBy()
      await inventory.inventoryEntry.inventoryEntryNotesTab.EnterComments()
      await inventory.inventoryEntry.inventoryEntryNotesTab.clickSaveButton()
      await inventory.inventoryEntry.inventoryEntryNotesTab.VerifyNotesAdded()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.inventoryEntry.verifyTabColorAsBlue('Activity Log')
      await inventory.inventoryEntry.verifyTabColorAsBlue('Notes')
      await inventory.inventoryEntry.verifyTabColorAsBlue('Attachments');// document added in dataset
      await inventory.inventoryEntry.switchToNotesTab()
      await inventory.inventoryEntry.inventoryEntryNotesTab.VerifyNotesAdded()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.switchToAttchmentTab()
      // objectIdentification.attachmentsTab.VerifyAtFileName()
      //Automated By :- Mohamed Absar A on 05/22/2025 // Type:- Defect // Q2 Sprint 5 2025 CRM#183981
    });
  });

  test('Q4Defect2024_55760', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '55760', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAtInventoryName(1)
      await inventory.inventorySearch.verifyAtInventoryName(2)
      await loaderPage.navigateToScreen('Check Out/In Search')
      await inventory.module.switchToCheckOutInSearch()
      await inventory.checkOutInSearch.verifyAtInvName(1)
      await inventory.checkOutInSearch.verifyAtInvName(2)
      // Automated By :- Mohamed Absar A on 05/23/2025 // Type:- Functional // Q2 Sprint 5 2025
    });
  });

  test('Q4Defect2024_55592', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '55592', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Inventory Entry ')
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRandomGridRow();//
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Inventory Entry ')
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyinInvNoISNotNull()
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickAddNewButton()
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Inventory Audit Entry ')
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.closeScreen();//
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickSearchButton()
      await inventory.inventoryAuditSearch.selectRandomGridRow();//
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Inventory Audit Entry ')
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyAuditNoIsNotNull();//
      // Automated By :- Mohamed Absar A on 05/26/2025 // Type:- Functional // Q2 Sprint 5 2025
    });
  });

  test('Q4Defect2024_55492', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '55492', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtComments()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await vehicle.fleetEntry.verifyTabColorAsBlue(1)
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.clickAddNewEquipmentOrSupplyItemButton()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo()
      await inventory.inventorySearch.clickAssignButton()
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.SelectAtLocation()
      await inventory.batchAssignReturn.Save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.verifyAtFleetLocationInGrid()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyTabColorAsBlue(2)
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAs1Month()
      await vehicle.fleetEntry.maintenanceScheduleTab.enterAtMiles()
      await vehicle.fleetEntry.maintenanceScheduleTab.enterDateAsCurrentDate()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await vehicle.fleetEntry.verifyTabColorAsBlue(3)
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.verifyServiceTypeInGrid()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickActivityLogTab()
      await vehicle.fleetEntry.activityLogTab.selectAtActivityType(1)
      await vehicle.fleetEntry.activityLogTab.clickAddNewActivity()
      await activity.module.SwitchToActivityEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await activity.activityEntry.close()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyTabColorAsBlue(4)
      await vehicle.fleetEntry.clickHistoryTab()
      await vehicle.fleetEntry.assignmentsTab.clickActionButton()
      await vehicle.fleetEntry.assignmentsTab.selectAtAction()
      await vehicle.fleetEntry.assignmentsTab.tabOutAssignedDate()
      await vehicle.fleetEntry.assignmentsTab.tabOutBy()
      await vehicle.fleetEntry.assignmentsTab.enterAtPFCode()
      await vehicle.fleetEntry.assignmentsTab.clickSubmitButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyTabColorAsBlue(5)
      await vehicle.fleetEntry.clickHistoryTab()
      await vehicle.fleetEntry.assignmentsTab.verifyAtStatusInGrid(0)
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyTabColorAsBlue(6);//Notes tab
      await vehicle.fleetEntry.switchToAttachmentsTab()
      // objectIdentification.attachmentsTab.clickAddFiles()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.selectCategoryAsDocumentFile()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.ClickLinkRadioButton()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.EnterAtLink()
      // objectIdentification.attachmentsTab.attachmentsCategoryPopup.clickAdd()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.switchToTriggersTab()
      await vehicle.fleetEntry.triggersTab.selectAtTrigger()
      await vehicle.fleetEntry.triggersTab.enterAtVehicleSlot()
      await vehicle.fleetEntry.triggersTab.clickAddButton()
      await vehicle.fleetEntry.triggersTab.verifyAtTriggerNameInGrid()
      await vehicle.fleetEntry.triggersTab.internalSave()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyTabColorAsBlue(7)
      await vehicle.fleetEntry.verifyTabColorAsBlue(8)
      await vehicle.fleetEntry.switchToTriggersTab()
      await vehicle.fleetEntry.triggersTab.verifyAtTriggerNameInGrid()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      // Issue 2
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickBackButton()
      await vehicle.fleetSearch.selectAtVendor()
      await vehicle.fleetSearch.clickRefreshButton()
      await vehicle.fleetSearch.verifyVendorDropdownIsNull()
      // Issue 3
      await loaderPage.navigateToScreen('Equipment Service')
      await inventory.module.switchToEquipmentServiceScreenTab()
      await inventory.equipmentService.verifyUnAssignedGridRowsAreNonEditable()
      // Automated By : Stalin
      // Year : 2023Â  Quarter: 01Â  Sprint: 03
      // Type of Test case - Defect
    });
  });

});

test.describe('2023DefectTestCases', () => {
  test('2023DefectTestCases_18668', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '18668', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verify1002AdditionSuccessfulFooterMessage()
      await vehicle.fleetEntry.clickInactiveCheckbox()
      await vehicle.fleetEntry.verifyInactiveDateAsCurrentDate()
      await vehicle.fleetEntry.clickResetIcon()
      //Automated By : - chandrasekar.v on 09/11/2023
      //Sprint :-Â  :Â Quarter  4 :Â  Sprint 21
      //Type of Test case : - Defect
      // TC - 50307 Updated By :- Mohamed Absar A on 02/25/2025 // Type:- CheckList  // Q1 Sprint 2 2025
    });
  });

  test('2023DefectTestCases_18598', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '18598', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterAtDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation(1)
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation(2)
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyStorageLocationSNOAsAscendingOrder()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyStorageLocationSNOAsAscendingOrder()
      await vehicle.module.switchToFleetEntry()
      // Automated By : - chandrasekar.v on 14/12/2023
      // Sprint :-Â  :Â Quarter 4 :Â  Sprint 23
      // Type of Test case : - Defect
    });
  });

  test('2023DefectTestCases_20290', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '20290', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.TabEntryDate()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.enterAtDescription()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAdditionSuccessFullMessage()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtDescription()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.VerifyFleetDivisionStationDisabled()
      // Automated By :- Mohamed Absar on 12/14/2023
      // Sprint :-Â Quarter 4 :Â  Sprint 23 : year 2023
      // Type of Test case :- Defect CRM#161714
    });
  });

  test('2023DefectTestCases_20236', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '20236', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Check Out/In Entry')
      await inventory.module.SwitchToCheckOutInEntry()
      await inventory.checkOutInEntry.clickToCitizenLookupIcon()
      await names.module.switchToNameSearchHelpWindow()
      await names.nameSearch.SelectNameTypeAsAdult()
      await names.nameSearch.clickSearchButton()
      await names.nameSearch.verifyNameIDAsA()
      await names.nameSearch.selectRowByAtAtypeNameID()
      await inventory.module.SwitchToCheckOutInEntry()
      await inventory.checkOutInEntry.verifyAtToCitizenNameID()
      await inventory.checkOutInEntry.clickScanInventoryOrPartLookupIcon()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.clickAvailableForCheckoutCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo()
      await inventory.inventorySearch.clickAssignButton()
      await inventory.module.SwitchToCheckOutInEntry()
      await inventory.checkOutInEntry.verifyAtInventoryNoInGrid(0)
      await inventory.checkOutInEntry.clickCheckOutButton()
      await inventory.checkOutInEntry.verifyErrorPopupNotArised()
      // Automated by KIRAN :- Date :-02/09/2024 Quarter:-1 Sprint:-2 Module:-Inventory
      // Updated script lines for TC - 53083 by Mohamed Absar A on 03/14/2025 CRM#182830 Q1 Sprint 3 2025
    });
  });

  test('2023DefectTestCases_21781', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '21781', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.verifyAssertItemLableAppears()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtSerialNo()
      await inventory.inventoryEntry.save()
      await inventory.inventoryEntry.verifyAdditionSuccessFullMessage()
      await inventory.inventoryEntry.saveNClose()
      // 53083
      // objectIdentification.windowHandle.verifyWindowNotExists('Inventory Entry')
      // - 53083 -
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.verifyAssertItemLableAppears()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterAtSerialNo()
      await inventory.inventoryEntry.clickSaveButton()
      await inventory.inventoryEntry.verify6071SerialNoAlreadyExistAckPopUP()
      await inventory.module.SwitchToInventorySearch()
      //updated By Kiran  Date :-11/19/2024 Sprint : 11 Quarter:-4  Testcase ID :44281
      // Automated By :- Bavithra on 1/19/2024
      // Sprint :- Quarter 1 :  Sprint 1
      // Type of Test case :- Defect
    });
  });

  test('2023DefectTestCases_21728', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '21728', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickExpendableItemOnlyCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailableQuantity(10)
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterQuantityAs3()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtComments();   //Updated Testcase ID:44281
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtCommentsToolTipByTitleInGrid();//Updated Testcase ID:44281 -end
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailableQuantity(7)
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterQuantityAs3()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailableQuantity(4)
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterQuantityAs3()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailableQuantity(7);//7
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutDispositionDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutAuthorizeByPF()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterQuantityAs3()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtDisposition()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailableQuantity(4);//4
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutDispositionDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutAuthorizeByPF()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterQuantityAs3()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtDisposition()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailableQuantity(1);//1
      await inventory.module.SwitchToInventoryEntry()
      // Automated By :- Sarathkumar L on 01/18/2023
      // Sprint :- Quarter 1 :  Sprint 1 : Year 2024
      // Type of Test case :- Defect
    });
  });

  test('2023DefectTestCases_21722', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '21722', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtTypeDropDown()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.clickPictureIcon()
      await inventory.inventoryEntry.verifyAcknowledgeSaveTheRecordBeforeAddingAPhotoMsg()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtTypeDropdown()
      // Automated By :- Mohamed Absar on 2/15/2024
      // Sprint :-Â Quarter 1 :Â  Sprint 2 : year 2024
      // Type of Test case :-   Defect CRM#158545
    });
  });

  test('2023DefectTestCases_23149', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '23149', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await vehicle.module.switchToFleetEntry()
      //		vehicle.fleetEntry.clickBarcode();
      //		// Need to Add print
      //		vehicle.fleetEntry.switchToPrintScreen();//
      //		vehicle.switchToFleetEntry();
      await vehicle.fleetEntry.verifyAtFleetID()
      await vehicle.fleetEntry.close()
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickRefreshButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickViewMileageLogButton()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.fuelLogEntry.clickUpdateMileageButton()
      await vehicle.fuelLogEntry.tabOutPopupDate()
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs10()
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify1002AdditionalSuccessfulAckMsg()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.verifyAtMileageInGrid()
      await vehicle.mileageLogEntry.saveWithConfirmMessage()
      await vehicle.module.switchToMileageLogEntryWindow()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();//bottom message does not arise
      // objectIdentification.manualIdentify.saveAndCloseTheScreenWithConfirm()
      await vehicle.module.switchToFleetEntry()
      await loaderPage.navigateToScreen('Equipment Service')
      await inventory.module.switchToEquipmentServiceScreenTab()
      await inventory.equipmentService.entratAtServicedBy()
      await inventory.equipmentService.tabAtServiceDate()
      await inventory.equipmentService.save()
      await inventory.equipmentService.verifyNoRecordFoundAcknowledgeNotArise();//app issue
      await inventory.equipmentService.saveNClose()
      // objectIdentification.windowHandle.switchToMainWindow()
      await inventory.equipmentService.verifyNoRecordFoundAcknowledgeNotArise()
      // objectIdentification.windowHandle.verifyClosedScreenTabsAreNotOpenedAgain('Equipment Service')
      // Automated By :- Manikandan k on 2/21/2023
      // Sprint :- Quarter 1 :  Sprint 2 : Year 2024
      // Type of Test case :- Defect : crm# 153749
    });
  });

  test('2023DefectTestCases_23336', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '23336', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log')
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.enterAtFromDate()
      await vehicle.mileageLogEntry.enterAtToDate()
      await vehicle.mileageLogEntry.saveWithConfirmMessage()
      await vehicle.mileageLogEntry.verifyAdditionSuccessfulAcknowledgeMessage();//productissue
      await vehicle.mileageLogEntry.verifyNoRecordExists()
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.clickReset()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.enterAtFromDate()
      await vehicle.mileageLogEntry.enterAtToDate()
      await vehicle.mileageLogEntry.clickSearchButton()
      //Automated by  :-Kiran  Date :-02/13/2023  Quarter:-1 Sprint: 2 Module:- inventory
    });
  });

});

test.describe('Q1InventoryChecklist2025', () => {
  test('Q1InventoryChecklist2025_18603', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '18603', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.verifyAssertItemLableAppears()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionDropDown()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyValueInActionDropDown()
      //  Below lines added for TC - 50307
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.selectAtCategory1()
      await inventory.inventoryEntry.verifyExpendableItemAppears()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //Automated by Bavithra :- Date :-11/09/2023 Quarter:-4 Sprint:-21
    });
  });

  test('Q1InventoryChecklist2025_63381', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63381', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtInventoryNoInGrid(1);//created
      await inventory.inventorySearch.verifyAtStatusByInventoryNoInGrid(1);//created
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.enterAtInventoryNo(2)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtInventoryNoInGrid(2);//created
      await inventory.inventorySearch.verifyAtStatusByInventoryNoInGrid(2);//created
      // Automated By :- Sarathkumar L on 07/24/2025
      // Sprint :- Q3 Sprint 7 2025
      // Type of Test case :- Functional
    });
  });

  test('Q1InventoryChecklist2025_76473', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '76473', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyQuantityReceivedFieldAsDisabledAndValueAs1()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailable()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.verifyAtBy()
      await inventory.inventoryEntry.purchaseHistoryTab.verifyAtByPFDescription();//created
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyQuantityReceivedFieldAsDisabledAndValueAs1()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyPersonnelRadioButtonChecked();//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtLabel(1)
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickPersonnelRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyPersonnelRadioButtonChecked();//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtInventoryLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsAvaliable()
      // Automated By :- Sarathkumar L on 02/02/2026
      // Sprint :-Â Quarter 1 :Â  Sprint 2 : year 2026
      // Type of Test case :- CheckList
    });
  });

  test('Q1InventoryChecklist2025_76473A', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '76473A', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtVendorName()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.inventoryEntry.purchaseHistoryTab.verifyAtQuantityInGrid(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailableQuantity(10)
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.verifyAtQuantityInGrid(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyPersonnelRadioButtonChecked()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtQuantity()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAssignedIssueToLabelIsDisplayed()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtLabel(1)
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickPersonnelRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyPersonnelRadioButtonChecked()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterQuantityAs3()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyReturnedByLabelIsDisplayed()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.module.SwitchToInventoryEntry()
    });
  });

});

test.describe('Q1S1Enhancement2025', () => {
  test('Q1S1Enhancement2025_46103', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '46103', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Batch Assign/Return')
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      await inventory.batchAssignReturn.verifyAtMakeColumnNameIsDisplayed()
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.verifyAtMakeColumnNameIsDisplayed()
      await loaderPage.navigateToScreen('Equipment Service')
      await vehicle.module.switchToEquipmentServiceScreenTab()
      await vehicle.equipmentService.verifyAtMakeColumnNameIsDisplayed()
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.RightclickRowByAtInventoryNoAndclickEquipmentServiceLink()
      await inventory.module.switchToEquipmentServiceWindow()
      await inventory.equipmentService.verifyAtMakeColumnNameIsDisplayed()
      await inventory.module.SwitchToInventorySearch()
      //Automated by :- Mohamed Absar A  Date :-03/17/2025 Q1 Sprint 3 2025 Type : Functional
    });
  });

  test('Q1S1Enhancement2025_60466', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '60466', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.enterAtParameterID()
      await settings.sysParameter.clickSearchButton()
      await settings.sysParameter.verifyNoRecordFoundAcknowledgeMessage()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyAvailableForCheckoutCheckboxIsDisplayed()
      await inventory.inventorySearch.clickAvailableForCheckoutCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyQuantityMoreThanZeroInGrid()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.verifyAvailableForCheckOutCheckboxIsSelected()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.verifyCheckedOutItemsCheckboxIsDisplayed()
      await inventory.inventorySearch.clickCheckedOutItemsCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyCheckedColumnValueAsOutInGrid()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.verifyCheckedOutItemsCheckboxIsSelected()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.verifyCheckedInItemsCheckboxIsDisplayed()
      await inventory.inventorySearch.clickCheckedInItemsCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyCheckedColumnValueAsInInGrid()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.verifyCheckedInItemsCheckboxIsSelected()
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.verifyCheckedOutOnlyCheckboxIsDisplayed()
      await vehicle.fleetSearch.clickCheckedOutOnlyCheckbox()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyValuesInCheckedColumnIsOut()
      await vehicle.fleetSearch.clickBackButton()
      await vehicle.fleetSearch.verifyCheckedOutOnlyCheckboxIsSelected()
      await vehicle.fleetSearch.clickRefreshButton()
      await vehicle.fleetSearch.verifyCheckedInOnlyCheckboxIsDisplayed()
      await vehicle.fleetSearch.clickCheckedInOnlyCheckbox()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyValuesInCheckedColumnIsIn()
      await vehicle.fleetSearch.clickBackButton()
      await vehicle.fleetSearch.verifyCheckedInOnlyCheckboxIsSelected()
      //Automated By :- Mohamed Absar A on 06/23/2025 // Type:- Defect // Q2 Sprint 6 2025 CRM#178292
    });
  });

});

test.describe('Q1S1Functional2025', () => {
  test('Q1S1Functional2025_51612', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '51612', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.clickAddServiceHistoryButton()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.TabOutActivityDateAndTime()
      await activity.activityEntry.Save()
      await activity.module.SwitchToActivityEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await activity.activityEntry.close()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtDateInGrid(0)
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtActivityTypeInGrid(0)
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtSubjectInGrid(0)
      // Automated By :- Mohamed Absar A on 05/20/2025 // Type:- Defect // Q2 Sprint 5 2025 CRM#184920
    });
  });

  test('Q1S1Functional2025_63186', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63186', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Batch Assign/Return')
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      //		inventory.batchAssignReturn.enterAtIssueByPF();
      //		inventory.batchAssignReturn.tabOutIssuedDateTime();
      await inventory.batchAssignReturn.enterAtPF()
      await inventory.batchAssignReturn.selectPersonnelRadioButton()
      await inventory.batchAssignReturn.enterAtComment()
      await inventory.batchAssignReturn.clickInventoryLookupIcon()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.verifyInventorySearchWindowExist()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtStatus();//created
      await inventory.inventorySearch.clickReturnButton();//created
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      await inventory.batchAssignReturn.verifyAtAvailableQtyInGrid(0);//created
      await inventory.batchAssignReturn.Save()
      await inventory.batchAssignReturn.verifyUpdateSuccessfulAck()
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      // Automated By :- Sarathkumar L on 07/25/2025
      // Sprint :- Q3 Sprint 7 2025
      // Type of Test case :- Backlog
    });
  });

});

test.describe('InventoryEnhancements2024R2', () => {
  test('InventoryEnhancements2024R2_55856', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '55856', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtInventoryNo(1)
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.selectAtActivityType(1)
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.clickAddNewActivityButton()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.verifyAtCategory(1)
      await activity.activityEntry.verifyAtActivityType(1)
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await activity.activityEntry.saveNClose()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtActivityTypeInGridBySubject(1)
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtDateInGrid(0)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyAtFleetID()
      await vehicle.fleetEntry.clickActivityLogTab()
      await vehicle.fleetEntry.activityLogTab.selectAtActivityType(2)
      await vehicle.fleetEntry.activityLogTab.clickAddNewActivity()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.verifyAtCategory(2)
      await activity.activityEntry.verifyAtActivityType(2)
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await activity.activityEntry.saveNClose()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickActivityLogTab()
      await vehicle.fleetEntry.activityLogTab.verifyAtActivityTypeInGridBySubject(2)
      await vehicle.fleetEntry.activityLogTab.verifyAtDateAsCurrentDateInGridByActivityType(2)
      // Automated By :- Mohamed Absar A on 05/22/2025 // Type:- Product Backlog // Q2 Sprint 5 2025 CRM#183655
    });
  });

  test('InventoryEnhancements2024R2_65835', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '65835', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter1212AsTrue();//created
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId(1)
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId(1)
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyAtStorageLocationLabelAsMandatory();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickSaveButton()
      await vehicle.fleetEntry.verify3032EnterStorageLocationAcknowledgePopup();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      await vehicle.module.switchToFleetSearch()
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickRefreshButton()
      await settings.sysParameter.setSystemparameter1212AsFalse();//created
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickBackButton()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId(1)
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyAtStorageLocationLabelAsNonMandatory();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verify1003UpdateSuccessfulFooterMessage()
      await vehicle.module.switchToFleetSearch()
      // Automated By :- Sarathkumar L on 08/14/2025
      // Sprint :- Q3 Sprint 8 2025
      // Type of Test case :- Functional
    });
  });

});

test.describe('PBInventory2024R2', () => {
  test('PBInventory2024R2_55031', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '55031', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectMake()
      await inventory.inventoryEntry.enterAtDescription()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verify6071PleaseUpdateThePurchaseHistoryAcknowledgePopup()
      await inventory.module.SwitchToInventoryEntry()
      // Automated By :- Mohamed Absar A on 05/22/2025 // Type:- Defect // Q2 Sprint 5 2025 CRM#179817
    });
  });

});

test.describe('InventoryFunctional2024R2', () => {
  test('InventoryFunctional2024R2_55741', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '55741', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.enterAuditNo(BaseData.getInventoryModuleValue('Audit'))
      await inventory.inventoryAuditSearch.clickSearchButton()
      await inventory.inventoryAuditSearch.selectAtAuditInGrid()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.switchToAuditTab()
      await inventory.inventoryAuditEntry.auditTab.selectAtShow(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedInGrid(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedInGrid(2)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedInGrid(3)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedInGrid(4)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedNotContainsInGrid(5)
      await inventory.inventoryAuditEntry.auditTab.selectAtShow(2)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedInGrid(5)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedNotContainsInGrid(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedNotContainsInGrid(2)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedNotContainsInGrid(3)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedNotContainsInGrid(4)
      // Automated By :- Mohamed Absar A on 05/23/2025 // Type:- Defect // Q2 Sprint 5 2025 CRM#184919
    });
  });

  test('InventoryFunctional2024R2_58232', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '58232', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickAddNewButton()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.taboutAuditByField()
      await inventory.inventoryAuditEntry.taboutAuditDateAndTime()
      await inventory.inventoryAuditEntry.enterAtDescription(1)
      await inventory.inventoryAuditEntry.clickInventoryRoomRadioButton()
      await inventory.inventoryAuditEntry.clickCreateAuditButton()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.switchToAuditTab()
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditResultValueIsNotContains(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditResultValueIsNotContains(2)
      await inventory.inventoryAuditEntry.auditTab.verifyAtShowNotContains(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAtShowNotContains(2)
      await inventory.inventoryAuditEntry.auditTab.verifyAtDisplayFilterNotContains(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAtDisplayFilterNotContains(2)
      //Automated By :- Mohamed Absar A on 06/16/2025 // Type:- Enhancement // Q2 Sprint 6 2025
    });
  });

  test('InventoryFunctional2024R2_65875', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '65875', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Batch Assign/Return')
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      await inventory.batchAssignReturn.verifyAtMakeColumnNameIsDisplayed()
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId(1)
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId(1)
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.clickAddNewEquipmentOrSupplyItemButton()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(1)
      await inventory.inventorySearch.clickAssignButton()
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.SelectAtFleetLocation()
      await inventory.batchAssignReturn.Save()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickEquipmentSuppliesTab()
      await vehicle.fleetEntry.equipmentSuppliesTab.verifyAtFleetLocationInGrid()
      await vehicle.module.switchToFleetEntry()
      // Automated By :- Sarathkumar L on 08/14/2025
      // Sprint :- Q3 Sprint 8 2025
      // Type of Test case :- Defect
    });
  });

});

test.describe('DailyDefectCRM', () => {
  test('DailyDefectCRM_63932', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63932', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtProcessDate(1);// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickPersonnelRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton();// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtDateByStatusInGrid(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtProcessDate(2);// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickPersonnelRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton();// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtDateByStatusInGrid(3)
      // Automated By :- Sarathkumar L on 07/23/2025
      // Sprint :- Q3 Sprint 7 2025
      // Type of Test case :- Defect
    });
  });

  test('DailyDefectCRM_63932A', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63932A', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(1);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtProcessDate(1);// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtOutOfServiceSince();//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton();// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtToFromSinceDispByStatusInGrid(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtProcessDate(2);// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtInServiceSince(1);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verify6071InServiceSinceDateMustBeGreaterThanLastTransactionAcknowledgePopupAppears();//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtInServiceSince(2);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verify6071InServiceSinceDateMustBeGreaterThanLastTransactionAcknowledgePopupNotExist();//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton();// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtToFromSinceDispByStatusInGrid(3)
      // Automated By :- Sarathkumar L on 07/23/2025
      // Sprint :- Q3 Sprint 7 2025
      // Type of Test case :- Defect
    });
  });

  test('DailyDefectCRM_63932B', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63932B', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(1);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtCheckedOutDate(1);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtTo();//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton();// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtDateByStatusInGrid(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtCheckedInDate(1);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verify6071CheckedInDateMustBeGreaterThanLastTransactionAcknowledgePopupAppears();//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtCheckedInDate(2);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verify6071CheckedInDateMustBeGreaterThanLastTransactionAcknowledgePopupNotExist();//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtTo();//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton();// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtDateByStatusInGrid(3)
      // Automated By :- Sarathkumar L on 07/24/2025
      // Sprint :- Q3 Sprint 7 2025
      // Type of Test case :- Checklist
    });
  });

  test('DailyDefectCRM_64245', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '64245', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtProcessDate(1);// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickPersonnelRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.doubleClickSubmitButton();// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyRowCountInGrid(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtProcessDate(2);// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickPersonnelRadioButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.doubleClickSubmitButton();// created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyRowCountInGrid(2)
      // Automated By :- Sarathkumar L on 07/31/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 7 : year 2025
      // Type of Test case :-   Defect CRM#180982
      //Updated by:- Sarathkumar L  Quarter: 3 Sprint:9 Date :10/01/2025 Testcase ID: 68651
    });
  });

  test('DailyDefectCRM_65786', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '65786', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      const inventoryNo = await inventory.inventoryEntry.readInventoryNo()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.saveNClose()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToSharedCodes()
      await settings.sharedCodes.clickSearchButton()
      await settings.sharedCodes.clickAtCodeValueDescription()
      await settings.sharedCodes.verifyAtPopupItemCategory();//created
      await settings.sharedCodes.selectAtPopupItemType();//created
      await settings.sharedCodes.clickUpdateButton()
      await settings.sharedCodes.closeScreen()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectRowByInventoryNo(inventoryNo);//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyExpendableItemLinkAppears();//created
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.inventoryEntry.verifyAcknowledgePopupNotAvailable();//created
      // objectIdentification.smokeTest.checkAckExist()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.VerifyTotalQuantityAtQtyReceived()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyStatusAsGreenAndAvailableQuantity(30)
      // Automated By :- Sarathkumar L on 08/14/2025
      // Sprint :- Q3 Sprint 8 2025
      // Type of Test case :- Enhancement
    });
  });

  test('DailyDefectCRM_67704', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '67704', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await inventory.inventoryEntry.verifyAtLabel(1)
      //assigned
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsAssigned()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtLabel(2)
      //returned
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtInventoryLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(2)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtLabel(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      //checkout
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterCheckedOutDateAndTimeAsFuture(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtTo(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(3)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtLabel(3)
      //checkIn
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction(3)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterCheckedInDateAsFuture(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterAtFrom(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(4)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtLabel(1)
      //Out of service
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction(4)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterProcessedDateAndTimeAsFuture(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterOutOfServiceSinceDateAndTimeAsFuture(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtServiceLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(5)
      await inventory.module.SwitchToInventoryEntry()
      const date = await inventory.inventoryEntry.assignedIssuedHistoryTab.readOutOfServiceSinceDate()
      const time = await inventory.inventoryEntry.assignedIssuedHistoryTab.readOutOfServiceSinceTime()
      await inventory.inventoryEntry.verifyAtOutOfServiceLabel(5,date,time)
      //In-Service
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction(5)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterProcessedDateAndTimeAsFuture(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterInServiceDateAndTimeAsFuture(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtServiceLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(6)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtLabel(1)
      //Disposition
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction(6)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterDispositionDateAndTimeAsFuture(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutAuthorizeByPF()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtDisposition()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(7)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtLabel(4)
      await inventory.module.SwitchToInventoryEntry()
      //Automated By : - chandrasekar.v on 7/28/2025
      //Sprint :-  : Quarter  4  :  Sprint 7
      //Type of Test case : - Defect 2025
    });
  });

  test('DailyDefectCRM_69322', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '69322', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtVendorName()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verify1002AdditionSuccessfulFooterMessage()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.saveNAddNew()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.enterAtFleetID()
      await vehicle.fleetEntry.enterDescription()
      await vehicle.fleetEntry.enterAtMake()
      await vehicle.fleetEntry.enterAtModel()
      await vehicle.fleetEntry.enterAtYear()
      await vehicle.fleetEntry.enterAtVin()
      await vehicle.fleetEntry.fleetEntryMainTab.enterAtVendorName()
      await vehicle.fleetEntry.fleetEntryMainTab.selectAtStorageLocation()
      await vehicle.fleetEntry.fleetEntryMainTab.clickAddButton()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verify1046RecordAlreadyExistAcknowledgePopup()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickBackButton()
      await vehicle.fleetSearch.clickResetButton()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyRowCountAsOne();//created
      await vehicle.fleetSearch.verifyAtFleetId()
      await vehicle.module.switchToFleetSearch()
      //Automated By : - Sarathkumar L on 10/8/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('DailyDefectCRM_69368', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '69368', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter65AsTrue()
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      await settings.maintainCodeValue.clickAddNewButton()
      await settings.maintainCodeValue.enterAtPopUpCodeValue()
      await settings.maintainCodeValue.enterAtPopUpDescription()
      await settings.maintainCodeValue.selectAtItemCategory()
      await settings.maintainCodeValue.clickAddButton()
      await settings.maintainCodeValue.clickPopUpCancelButton()
      await settings.maintainCodeValue.enterAtCodeValue()
      await settings.maintainCodeValue.enterAtCodeValueDescription();//created
      await settings.maintainCodeValue.clickSearchButton()
      await settings.maintainCodeValue.verifyAtCodeValueInGrid()
      await settings.maintainCodeValue.clearCodeValue();//created
      await settings.maintainCodeValue.clearDescription();//created
      await settings.maintainCodeValue.clickSearchButton()
      const codeValueListInGrid = await settings.maintainCodeValue.getFleetCodeValueListInGrid();//created
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId(1)
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId(1)
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickActivityLogTab()
      await vehicle.fleetEntry.activityLogTab.clickAddNewActivity()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.verifyAtActivityTypeDropdownList(codeValueListInGrid)
      //Automated By : - Sarathkumar L on 10/8/2025
      //Sprint :-  : Quarter  4  :  Sprint 10
      //Type of Test case : - Defect 2025
    });
  });

  test('DailyDefectCRM_69555', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '69555', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickAddNewButton()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyFleetEntryScreenExist();//created
      await vehicle.fleetEntry.verify1005ErrorPopupDoesNotAppears();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRandomGridRow();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyFleetEntryScreenExist();//created
      await vehicle.fleetEntry.verify1005ErrorPopupDoesNotAppears();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      await vehicle.module.switchToFleetSearch()
      //Automated By : - Sarathkumar L on 10/14/2025
      //Sprint :-  : Quarter  4  :  Sprint 10  2025
      //Type of Test case : - Defect
    });
  });

});

test.describe('Q3S7InventoryDefect2025', () => {
  test('Q3S7InventoryDefect2025_63319', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63319', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectAtServiceType()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectPeriodAs1Month()
      await vehicle.fleetEntry.maintenanceScheduleTab.enterAtMiles()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickSaveButton()
      await vehicle.fleetEntry.verify1051UpdatedDataExistsInTheMaintenanceScheduleTabAcknowledgeMessagePopup();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickAddButton()
      await vehicle.fleetEntry.maintenanceScheduleTab.selectRowByAtServiceType();//updated
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickSaveButton();//updated
      await vehicle.fleetEntry.verify1051UpdatedDataExistsInTheMaintenanceScheduleTabAcknowledgeMessagePopup();//updated
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickUpdateButton();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.save()
      await vehicle.module.switchToFleetEntry()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.switchToNotesTab()
      await vehicle.fleetEntry.fleetEntryNotesTab.tabOutUpdatedDateTime()
      await vehicle.fleetEntry.fleetEntryNotesTab.enterAtUpdatedBy();//created
      await vehicle.fleetEntry.fleetEntryNotesTab.enterAtComments()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickResetIcon()
      await vehicle.fleetEntry.switchToNotesTab()
      await vehicle.fleetEntry.fleetEntryNotesTab.verifyUpdatedDateAndTimeAsNull();//created
      await vehicle.fleetEntry.fleetEntryNotesTab.verifyUpdatedByAsNull();//created
      await vehicle.fleetEntry.fleetEntryNotesTab.verifyCommentsAsNull();//created
      // Automated By :- Sarathkumar L on 08/01/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 7 : Year 2025
      // Type of Test case :-   Defect CRM#183801
    });
  });

  test('Q3S7InventoryDefect2025_62756', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '62756', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.clickAddNewActivityButton()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.selectAtActivityType()
      await activity.activityEntry.Save()
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.close()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtActivityTypeInGridBySubject(1)
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtDateInGrid(0)
      await inventory.module.SwitchToInventoryEntry()
      // Automated By :- Sarathkumar L on 08/07/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 8 : Year 2025
      // Type of Test case :-   Defect
    });
  });

  test('Q3S7InventoryDefect2025_63446', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63446', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtLocationColumnInGrid();//created
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectAtAction()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickPFLookupIcon();//created
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.selectAtPFCode(1);//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(1);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.SelectActionAsReturened()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.EnterAtPFCode()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtInventoryLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtInventoryLocation(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid(2);//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.saveNClose()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtLocationColumnInGrid()
      // Automated By :- Sarathkumar L on 08/07/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 8 : Year 2025
      // Type of Test case :-   Defect
    });
  });

  test('Q3S7InventoryDefect2025_63535', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '63535', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickBarcode()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.verifyBarcodeImage();//created
      await vehicle.module.switchToFleetEntry()
      // Automated By : Sarathkumar L on 08/11/2025
      // Quarter 3 : Sprint 8 : Inventory
      // Type of Test case : - Defect
    });
  });

  test('Q3S7InventoryDefect2025_65542', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '65542', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.inventorySearch.verifyInventoryIBubbleIconIsNotDisplayed()
      await inventory.inventorySearch.verifyNoDoesNotExistAcknowledge()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.enterAtInventoryNo(1)
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.verifyInventoryIBubbleIconDisplayed();//created
      await inventory.inventorySearch.clickInventoryIBubbleIcon();//created
      await inventory.inventorySearch.verifyInventryEntryScreenExist();//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtInventoryNo(1)
      // Automated By : Sarathkumar L on 08/13/2025
      // Quarter 3 : Sprint 8 : Inventory
      // Type of Test case : - DailyDefectCRM
    });
  });

  test('Q3S7InventoryDefect2025_65882', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '65882', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.verifyCountAsNullInGrid();//created
      await inventory.inventoryAuditSearch.clickGridHeader(1)
      await inventory.inventoryAuditSearch.verifyCountAsNullInGrid();//created
      await inventory.inventoryAuditSearch.clickSearchButton()
      await inventory.inventoryAuditSearch.verifyCountNotNullInGrid();//created
      // Automated By :- Sarathkumar L on 08/22/2025
      // Sprint :- Q3 Sprint 8 2025
      // Type of Test case :- Defect
    });
  });

  test('Q3S7InventoryDefect2025_62534', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '62534', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickPurchaseHistoryTab()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutPurchaseDate()
      await inventory.inventoryEntry.purchaseHistoryTab.TabOutByPF()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtQtyReceived()
      await inventory.inventoryEntry.purchaseHistoryTab.EnterAtUnitCost()
      await inventory.inventoryEntry.purchaseHistoryTab.clickAddButton()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterOutOfServiceDateAsPreviousDate(2);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtDurationByStatusInGrid(1);//created
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickActionButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtAction(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutProcessedDateTime()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.TabOutBy()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.enterOutOfServiceDateAsPreviousDate(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.selectAtLocation(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.clickSubmitButton()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtDurationByStatusInGrid(2);//created
      await inventory.module.SwitchToInventoryEntry()
      //Automated By: Ranjith Kumar V K, Q3 Sprint 09 2025
      //Type of testcase: Defect
      //Date: 09/18/2025
    });
  });

  test('Q3S7InventoryDefect2025_64307', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '64307', async () => {
      await loginPage.loginScreen.Logon()
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
      await settings.sharedCodes.selectAtPopUpCategory()
      await settings.sharedCodes.selectAtPopUpItemType()
      await settings.sharedCodes.clickAddButtonInPopUp()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtCategory()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.verifyAtType()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.selectAtInvName()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      // Automated By :- Sarathkumar L on 09/19/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 8 : year 2025
      // Type of Test case :- Defect
    });
  });

  test('Q3S7InventoryDefect2025_67966', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '67966', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Check Out/In Entry')
      await inventory.module.SwitchToCheckOutInEntry()
      await inventory.checkOutInEntry.enterAtCheckedOutToOrCheckInByPF();//created
      await inventory.checkOutInEntry.clickScanInventoryOrPartLookupIcon()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventorySearch.clickAvailableForCheckoutCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo()
      await inventory.inventorySearch.clickAssignButton()
      await inventory.module.SwitchToCheckOutInEntry()
      await inventory.checkOutInEntry.clickPrintIcon();//created
      await inventory.module.SwitchToCheckOutInEntry()
      await inventory.checkOutInEntry.verifyAtInventoryNoInGrid(0)
      await inventory.checkOutInEntry.clickCheckOutButton()
      await inventory.checkOutInEntry.verifyErrorPopupNotArised()
      await inventory.module.SwitchToCheckOutInEntry()
      await inventory.checkOutInEntry.verifyGridCountAsZero();//created
      // Automated By :- Sarathkumar L on 09/25/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 9 : year 2025
      // Type of Test case :- Defect
    });
  });

});

test.describe('Q4S10InventoryDefect2025', () => {
  test('Q4S10InventoryDefect2025_68197', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '68197', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Equipment Service')
      await inventory.module.switchToEquipmentServiceScreenTab()
      await inventory.equipmentService.enterAtServiceDueBy(1);//created
      await inventory.equipmentService.clickSearch()
      await inventory.equipmentService.verifyAtLastTestDateIsLessOrEqualToDateInGrid();//created
      await inventory.module.switchToEquipmentServiceScreenTab()
      // Automated By :- Sarathkumar L on 09/23/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 9 : year 2025
      // Type of Test case :- Defect
    });
  });

  test('Q4S10InventoryDefect2025_68035', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '68035', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickSearchButton()
      await inventory.inventoryAuditSearch.selectAtAuditInGrid()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.switchToMainTab();//created
      await inventory.inventoryAuditEntry.mainTab.enterAtAcceptedBy();//created
      await inventory.inventoryAuditEntry.mainTab.taboutDateTime();//created
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.save()
      await inventory.inventoryAuditEntry.verifyUpdateSuccessfulAckMessage();//created
      await inventory.module.switchToInventoryAuditEntry()
      // Automated By :- Sarathkumar L on 09/29/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 9 : year 2025
      // Type of Test case :- Legacy
    });
  });

});

test.describe('Q3S9InventoryLegacy2025', () => {
  test('Q3S9InventoryLegacy2025_68306', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '68306', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickAddNewButton()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyJurisFieldIsEnabled();//Created
      await inventory.inventoryAuditEntry.verifyAtJurisDropdown();//Created
      await inventory.inventoryAuditEntry.taboutAuditByField()
      await inventory.inventoryAuditEntry.taboutAuditDateAndTime()
      await inventory.inventoryAuditEntry.enterAtDescription(1)
      await inventory.inventoryAuditEntry.clickFleetRadioButton();//created
      await inventory.inventoryAuditEntry.verifyFleetIDLookUpIsDisplayed()
      await inventory.inventoryAuditEntry.enterAtFleetID();//created
      await inventory.inventoryAuditEntry.clickCreateAuditButton()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyAuditTabIsEnabled();//created
      await inventory.inventoryAuditEntry.verifyAuditNoFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAuditTypeFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAuditByIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyDateTimeFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyDescriptionFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyFleetIDFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.switchToAuditTab()
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditResultDropDown(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAuditResultIsEnabled()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.switchToMainTab()
      await inventory.inventoryAuditEntry.mainTab.verifyAuditByFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAuditDateTimeFieldIsDisabled();//created
      // Automated By :- Sarathkumar L on 10/01/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 9 : year 2025
      // Type of Test case :-   Legacy
    });
  });

  test('Q3S9InventoryLegacy2025_68397', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '68397', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRowByAtFleetId()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickInactiveCheckbox()
      await vehicle.fleetEntry.verifyInactiveDateAsCurrentDate()
      await vehicle.fleetEntry.save()
      await vehicle.fleetEntry.verifyNoRecordsFoundAcknowledgeMessage()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.close()
      await vehicle.module.switchToFleetSearch()
      //			vehicle.fleetSearch.clickBackButton();
      await vehicle.fleetSearch.clickResetButton();//created
      await vehicle.fleetSearch.enterAtFleetId()
      await popupPage.switchToCodedSearch()
      await popupPage.kPICodedLookup.verifyRowCountEqualsToZero()
      await popupPage.kPICodedLookup.clickIncludeInactiveCheckBox()
      await popupPage.kPICodedLookup.verifyAtDescription();//created
      await popupPage.kPICodedLookup.verifyAtRowAsGreyOut();//created
      await popupPage.kPICodedLookup.selectAtDescription()
      await vehicle.fleetSearch.verifyInactiveCodeAcknowledgeMessage();//created
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyNoRecordsFoundAcknowledgeMessage();//Created
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickInactiveCheckbox();//created
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.verifyAtRowAsGreyOut()
      // Automated By :- Sarathkumar L on 10/01/2025
      // Sprint :-Â Quarter 3 :Â  Sprint 9 : Year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q3S9InventoryLegacy2025_68460', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '68460', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickInactiveCheckbox();//created
      await inventory.inventoryEntry.verifyInactiveDateAsCurrentDate();//created
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.clickIncludeInactiveCheckbox();//created
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtRowAsGreyOut()
      // Automated By :- Sarathkumar L on 10/06/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : Year 2025
      // Type of Test case :- Defect
    });
  });

  test('Q3S9InventoryLegacy2025_69888', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '69888', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickShowDueCheckbox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.selectAtInventoryNoInGrid(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.verifyNextDueAsPreviousDate();//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.close()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(1)
      await inventory.inventorySearch.clickPerformBatchServiceButton()
      await inventory.module.switchToEquipmentServiceWindow()
      await inventory.equipmentService.verifyServiceDueByAsCurrentDate()
      await inventory.equipmentService.tabAtServicedBy()
      await inventory.equipmentService.tabAtServiceDate()
      await inventory.equipmentService.enterAtVendor()
      await inventory.equipmentService.enterAtCost()
      await inventory.equipmentService.enterAtNotes()
      await inventory.equipmentService.selectAtSevicedCheckBoxByItemType()
      await inventory.equipmentService.doubleClickEnterCondition();//created
      await inventory.equipmentService.saveNClose()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectAtInventoryNoInGrid(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.verifyLastDateAsCurrentDate();//created
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyNextDueDateAsMonthLater()
      //Automated By : - Sarathkumar L on 10/14/2025
      //Sprint :-  : Quarter  4  :  Sprint 10  2025
      //Type of Test case : - Legacy
    });
  });

  test('Q3S9InventoryLegacy2025_69900', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '69900', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Storage Location')
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.selectAtLocationUseFor(1);//created
      await inventory.storageLocation.clickSearchButton()
      await inventory.storageLocation.verifyAtLocationUseForInGrid(1);//created
      await inventory.storageLocation.selectRandomGridRow();//created
      await inventory.module.SwitchToStorageLocationEntry()
      await inventory.storageLocationEntry.verifyStorageLocationEntryScreenExist()
      await inventory.storageLocationEntry.verifyAtLocationUseForDropdown(1)
      await inventory.storageLocationEntry.CloseTheScreen()
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.verifyStorageLocationScreenExist();//created
      await inventory.module.SwitchToStorageLocation()
      //Automated By : - Sarathkumar L on 10/15/2025
      //Sprint :-  : Quarter  4  :  Sprint 10  2025
      //Type of Test case : - Legacy
    });
  });

  test('Q3S9InventoryLegacy2025_69914', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '69914', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Storage Location')
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.selectAtLocationUseFor(1);//created
      await inventory.storageLocation.clickSearchButton()
      await inventory.storageLocation.verifyAtLocationUseForInGrid(1);//created
      await inventory.storageLocation.selectRandomGridRow();//created
      await inventory.module.SwitchToStorageLocationEntry()
      await inventory.storageLocationEntry.verifyStorageLocationEntryScreenExist()
      await inventory.storageLocationEntry.verifyAtLocationUseForDropdown(1)
      await inventory.storageLocationEntry.CloseTheScreen()
      await inventory.module.SwitchToStorageLocation()
      await inventory.storageLocation.verifyStorageLocationScreenExist();//created
      await inventory.module.SwitchToStorageLocation()
      // Automated By :- Sarathkumar L on 10/15/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q3S9InventoryLegacy2025_69923', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '69923', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickAddNewButton()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyJurisFieldIsEnabled();//Created
      await inventory.inventoryAuditEntry.verifyAtJurisDropdown();//Created
      await inventory.inventoryAuditEntry.taboutAuditByField()
      await inventory.inventoryAuditEntry.taboutAuditDateAndTime()
      await inventory.inventoryAuditEntry.enterAtDescription(1)
      await inventory.inventoryAuditEntry.clickInventoryRadioButton();//created
      await inventory.inventoryAuditEntry.verifyIncludeNotInInventoryRoomItemsCheckboxIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyStorageBuildingIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyStorageRoomIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyStorageRowIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyStorageShelfIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyCategoryIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyTypeIsDisplayed();//created
      await inventory.inventoryAuditEntry.selectAtStorageBuilding();//created
      await inventory.inventoryAuditEntry.selectAtStorageRoom();//created
      await inventory.inventoryAuditEntry.selectAtStorageRow();//created
      await inventory.inventoryAuditEntry.selectAtStorageShelf();//created
      await inventory.inventoryAuditEntry.selectAtCategory();//created
      await inventory.inventoryAuditEntry.selectTypeAsCheckAll();//created
      await inventory.inventoryAuditEntry.clickCreateAuditButton();//created
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyAuditTabIsEnabled();//created
      await inventory.inventoryAuditEntry.verifyJurisFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtJurisHeadDropdown();//created
      await inventory.inventoryAuditEntry.verifyAuditNoFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAuditNoIsNotNull()
      await inventory.inventoryAuditEntry.verifyAuditTypeFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtAuditType();//created
      await inventory.inventoryAuditEntry.verifyAuditByIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtAuditBy();//created
      await inventory.inventoryAuditEntry.verifyDateTimeFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtDateTime();//created
      await inventory.inventoryAuditEntry.verifyDescriptionFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtDescription();//created
      await inventory.inventoryAuditEntry.switchToAuditTab()
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditResultDropDown(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAuditResultIsEnabled()
      await inventory.inventoryAuditEntry.auditTab.verifyAtTotalItems();//created
      await inventory.inventoryAuditEntry.auditTab.verifyTotalItemsIsDisabled();//created
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedColumnValueNotListed(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedColumnValueNotListed(2)
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.switchToMainTab()
      await inventory.inventoryAuditEntry.mainTab.verifyAuditByFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtAuditBy();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAuditDateTimeFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtAuditDateTime();//created
      await inventory.inventoryAuditEntry.mainTab.verifyIncludeNotInInventoryRoomItemsCheckboxIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyStorageBuildingFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyStorageRoomFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyStorageRowFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyStorageShelfFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtStorageBuildingDropdown();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtStorageRoomDropdown();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtStorageRowDropdown();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtStorageShelfDropdown();//created
      // Automated By :- Sarathkumar L on 10/16/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q3S9InventoryLegacy2025_70015', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70015', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickAddNewButton()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyJurisFieldIsEnabled();//Created
      await inventory.inventoryAuditEntry.verifyAtJurisDropdown();//Created
      await inventory.inventoryAuditEntry.taboutAuditByField()
      await inventory.inventoryAuditEntry.taboutAuditDateAndTime()
      await inventory.inventoryAuditEntry.enterAtDescription(1)
      await inventory.inventoryAuditEntry.clickInventoryRadioButton();//created
      await inventory.inventoryAuditEntry.verifyIncludeNotInInventoryRoomItemsCheckboxIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyStorageBuildingIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyStorageRoomIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyStorageRowIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyStorageShelfIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyCategoryIsDisplayed();//created
      await inventory.inventoryAuditEntry.verifyTypeIsDisplayed();//created
      await inventory.inventoryAuditEntry.clickIncludeNotInInventoryRoomItemsCheckbox();//created
      await inventory.inventoryAuditEntry.selectAtStorageBuilding();//created
      await inventory.inventoryAuditEntry.selectAtStorageRoom();//created
      await inventory.inventoryAuditEntry.selectAtStorageRow();//created
      await inventory.inventoryAuditEntry.selectAtStorageShelf();//created
      await inventory.inventoryAuditEntry.selectAtCategory();//created
      await inventory.inventoryAuditEntry.selectTypeAsCheckAll();//created
      await inventory.inventoryAuditEntry.clickCreateAuditButton();//created
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyAuditTabIsEnabled();//created
      await inventory.inventoryAuditEntry.verifyJurisFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtJurisHeadDropdown();//created
      await inventory.inventoryAuditEntry.verifyAuditNoFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAuditNoIsNotNull()
      await inventory.inventoryAuditEntry.verifyAuditTypeFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtAuditType();//created
      await inventory.inventoryAuditEntry.verifyAuditByIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtAuditBy();//created
      await inventory.inventoryAuditEntry.verifyDateTimeFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtDateTime();//created
      await inventory.inventoryAuditEntry.verifyDescriptionFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.verifyAtDescription();//created
      await inventory.inventoryAuditEntry.switchToAuditTab()
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditResultDropDown(1)
      await inventory.inventoryAuditEntry.auditTab.verifyAuditResultIsEnabled()
      await inventory.inventoryAuditEntry.auditTab.verifyAtTotalItems();//created
      await inventory.inventoryAuditEntry.auditTab.verifyTotalItemsIsDisabled();//created
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.switchToMainTab()
      await inventory.inventoryAuditEntry.mainTab.verifyIncludeNotInInventoryRoomItemsCheckboxIsChecked();//created
      await inventory.inventoryAuditEntry.mainTab.verifyIncludeNotInInventoryRoomItemsCheckboxIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAuditByFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtAuditBy();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAuditDateTimeFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtAuditDateTime();//created
      await inventory.inventoryAuditEntry.mainTab.verifyIncludeNotInInventoryRoomItemsCheckboxIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyStorageBuildingFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyStorageRoomFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyStorageRowFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyStorageShelfFieldIsDisabled();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtStorageBuildingDropdown();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtStorageRoomDropdown();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtStorageRowDropdown();//created
      await inventory.inventoryAuditEntry.mainTab.verifyAtStorageShelfDropdown();//created
      await inventory.module.switchToInventoryAuditEntry()
      //				inventory.inventoryAuditEntry.switchToAuditTab();
      //				inventory.inventoryAuditEntry.auditTab.verifyAtAuditedInGrid(1);
      //				inventory.inventoryAuditEntry.auditTab.verifyAtAuditedInGrid(2);
      // Automated By :- Sarathkumar L on 10/16/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q3S9InventoryLegacy2025_70038', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70038', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAssertOnlyCheckBox()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectRowByAtInventoryNo1()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectServiceAsMonth()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterNextDueAs1DayFutureDateFromCurrentDate()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.saveNClose()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.RightclickRowByAtInventoryNoAndclickEquipmentServiceLink(1)
      await inventory.module.switchToEquipmentServiceWindow()
      await inventory.equipmentService.verifyServiceDueByAsCurrentDate()
      await inventory.equipmentService.verifyGridRowCountNull();//created
      await inventory.equipmentService.verifyAtMakeColumnNameIsDisplayed()
      await inventory.equipmentService.closeScreen()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.SelectServiceAsMonth()
      await inventory.inventoryEntry.inventoryEntryMainTab.EnterNextDueAs1DayPreviousDateFromCurrentDate();//created
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.saveNClose()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.RightclickRowByAtInventoryNoAndclickEquipmentServiceLink(2)
      await inventory.module.switchToEquipmentServiceWindow()
      await inventory.equipmentService.tabAtServicedBy()
      await inventory.equipmentService.tabAtServiceDate()
      await inventory.equipmentService.enterAtVendor()
      await inventory.equipmentService.enterAtCost()
      await inventory.equipmentService.verifyGridRowCountNotNullForWindow();//created
      await inventory.equipmentService.selectAtServicedCheckBoxByMake();//created
      await inventory.equipmentService.doubleClickEnterConditionAsEAndTabout();//created
      await inventory.equipmentService.save()
      await inventory.equipmentService.verifyNoRecordFoundAcknowledgeNotArise()
      await inventory.module.switchToEquipmentServiceWindow()
      await inventory.equipmentService.closeScreen()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.selectRowByAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyNextDueAs1MonthFutureDateFromCurrentDate()
      // Automated By :- Sarathkumar L on 10/23/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q3S9InventoryLegacy2025_70288', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70288', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Equipment Service')
      await inventory.module.switchToEquipmentServiceScreenTab()
      await inventory.equipmentService.verifyServiceDueByAsCurrentDate()
      await inventory.equipmentService.tabAtServicedBy()
      await inventory.equipmentService.tabAtServiceDate()
      await inventory.equipmentService.enterAtVendor()
      await inventory.equipmentService.enterAtCost()
      await inventory.equipmentService.clickSelectAllCheckbox();//created
      await inventory.equipmentService.verifyAllCheckboxesAreCheckedInGrid();//created
      await inventory.equipmentService.clickSelectAllCheckbox();//created
      await inventory.equipmentService.selectAtSevicedCheckBoxByItemType()
      await inventory.equipmentService.doubleClickEnterCondition();//created
      await inventory.equipmentService.enterAtNotes()
      await inventory.equipmentService.save()
      await inventory.module.switchToEquipmentServiceScreenTab()
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickMainTab()
      await inventory.inventoryEntry.inventoryEntryMainTab.verifyAtServiceCycle(1)
      await inventory.inventoryEntry.inventoryEntryMainTab.VerifyNextDueAs1MonthFutureDateFromCurrentDate()
      await inventory.module.SwitchToInventorySearch()
      // Automated By :- Sarathkumar L on 10/23/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

});

test.describe('Q4S10InventoryLegacy2025', () => {
  test('Q4S10InventoryLegacy2025_70303', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70303', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(1)
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(2)
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(3)
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(4)
      await inventory.inventorySearch.clickAssignButton()
      await inventory.inventorySearch.verify11033InvalidAssignmentRemovedFromSelectedListAcknowledgePopupAppears();//created
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.selectPersonnelRadioButton()
      await inventory.batchAssignReturn.enterAtPF()
      await inventory.batchAssignReturn.enterAtComment()
      await inventory.batchAssignReturn.DoubleclickQuantityCellByAtMakeAndEnterAtQuantity(1, 1);//created
      await inventory.batchAssignReturn.verify11025AvailableQuantityAcknowledgePopupAppears(10);//created
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.DoubleclickQuantityCellByAtMakeAndEnterAtQuantity(2, 1);//created
      await inventory.batchAssignReturn.Save()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.enterAtPFNo()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.verifyAtInventoryNoInGrid(1)
      await inventory.inventorySearch.verifyAtInventoryNoInGrid(2)
      // Automated By :- Sarathkumar L on 10/23/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q4S10InventoryLegacy2025_70315', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70315', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickSearchButton()
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(1)
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(2)
      await inventory.inventorySearch.clickSelectCheckboxByAtInventoryNo(3)
      await inventory.inventorySearch.clickReturnButton()
      await inventory.inventorySearch.verify11034UnassignedInventoryRemovedFromSelectedListAcknowledgeAcknowledgePopupAppears();//created
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.verifyAtInventoryNoItemsSelectedInGrid(1);//created
      await inventory.batchAssignReturn.verifyAtInventoryNoItemsSelectedInGrid(2);//created
      await inventory.batchAssignReturn.verifyPersonnelRadioButtonChecked();//created
      await inventory.batchAssignReturn.verifyFleetRadioButtonIsDisabled();//created
      await inventory.batchAssignReturn.verifyDivisionRadioButtonIsDisabled();//created
      await inventory.batchAssignReturn.verifyStationRadioButtonIsDisabled();//created
      await inventory.batchAssignReturn.enterAtPF()
      await inventory.batchAssignReturn.enterAtComment()
      await inventory.batchAssignReturn.DoubleclickQuantityCellByAtMakeAndEnterAtQuantity(1, 1);//created
      await inventory.batchAssignReturn.verify11027AbleToReturnOnlyAcknowledgePopupAppears(10);//created
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.DoubleclickQuantityCellByAtMakeAndEnterAtQuantity(2, 1);//created
      await inventory.batchAssignReturn.DoubleclickQuantityCellByAtMakeAndEnterAtQuantity(1, 2);//created
      await inventory.batchAssignReturn.verify11027AbleToReturnOnlyAcknowledgePopupAppears(10);//created
      await inventory.module.SwitchToBatchAssignReturnWindow()
      await inventory.batchAssignReturn.DoubleclickQuantityCellByAtMakeAndEnterAtQuantity(2, 2);//created
      await inventory.batchAssignReturn.Save()
      await inventory.batchAssignReturn.verifyUpdateSuccessFulAcknowledge()
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickBackButton()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.enterAtInventoryNo(1)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickServiceHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid1(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtToFromSinceDispByStatusInGrid(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtQualityByStatusInGrid(1)
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickResetButton()
      await inventory.inventorySearch.enterAtInventoryNo(2)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickServiceHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtStatusInGrid1(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtToFromSinceDispByStatusInGrid(2)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtQualityByStatusInGrid(2)
      // Automated By :- Sarathkumar L on 10/23/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q4S10InventoryLegacy2025_70342', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70342', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.clickAddNew()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.enterEntryDate()
      await inventory.inventoryEntry.verifyCurrentDate()
      await inventory.inventoryEntry.selectAtInventoryName()
      await inventory.inventoryEntry.selectAtCategory()
      await inventory.inventoryEntry.selectAtType()
      await inventory.inventoryEntry.selectAtMake()
      await inventory.inventoryEntry.enterAtModel()
      await inventory.inventoryEntry.enterAtDescription()
      await inventory.inventoryEntry.clickPictureIcon()
      await inventory.inventoryEntry.verifyAcknowledgeSaveTheRecordBeforeAddingAPhotoMsg()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.verifyAtType()
      await inventory.inventoryEntry.save()
      await inventory.inventoryEntry.verifyAdditionSuccessFullMessage()
      await inventory.module.SwitchToInventoryEntry()
      // Automated By :- Sarathkumar L on 10/28/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q4S10InventoryLegacy2025_70496', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70496', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Batch Assign/Return')
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      await inventory.batchAssignReturn.verifyPersonnelRadioButtonChecked()
      await inventory.batchAssignReturn.enterAtPF()
      await inventory.batchAssignReturn.enterAtScanInventoryOrPartNo();//created
      await inventory.batchAssignReturn.verifyAssignedLabelIsDisplayed();//created
      await inventory.batchAssignReturn.clickAddButton();//created
      await inventory.batchAssignReturn.verify6071AlreadyAssignedConfirmPopup();//created
      await inventory.batchAssignReturn.VerifyAtInventoryNoItemsSelectedInGrid()
      await inventory.batchAssignReturn.Save()
      await inventory.batchAssignReturn.verifyUpdateSuccessfulAck()
      await inventory.module.SwitchToBatchAssignReturnScreenTab()
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickAssignedIssuedHistoryTab()
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtToFromSinceDispByStatusInGrid(1)
      await inventory.inventoryEntry.assignedIssuedHistoryTab.verifyAtToFromSinceDispByStatusInGrid(2)
      // Automated By :- Sarathkumar L on 10/28/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q4S10InventoryLegacy2025_72221', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '72221', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      const codeValueListInGrid = await settings.maintainCodeValue.getAssetCodeValueListInGrid();//created
      await settings.maintainCodeValue.closeTheScreen()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.clickAddNewActivityButton()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.verifyAtCategory(1)
      await activity.activityEntry.verifyActivityTypeDropdownList(codeValueListInGrid)
      await activity.activityEntry.selectAtActivityType(1)
      await activity.activityEntry.saveNClose()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickReset()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtActivityTypeInGrid(0)
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.save()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.VerifyUpdteSuccessfullMessage()
      await inventory.module.SwitchToInventoryEntry()
      // Automated By :- Sarathkumar L on 11/14/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 11 : year 2025
      // Type of Test case :- Defect
    });
  });

  test('Q4S10InventoryLegacy2025_72221A', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '72221A', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('Coded')
      await settings.module.switchToCodedScreen()
      await settings.coded.enterAtCodeID()
      await settings.coded.clickSearchButton()
      await settings.coded.verifyAtCodeIDInGrid(0)
      await settings.coded.clickRowByAtCodeID()
      await settings.module.switchToMaintainCodeValue()
      const codeValueListInGrid = await settings.maintainCodeValue.getAssetCodeValueListInGrid();//created
      await settings.maintainCodeValue.closeTheScreen()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Search')
      await inventory.module.SwitchToInventorySearch()
      await inventory.inventorySearch.enterAtInventoryNo()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.clickAddNewActivityButton()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.verifyAtCategory(1)
      await activity.activityEntry.verifyActivityTypeDropdownList(codeValueListInGrid)
      await activity.activityEntry.selectAtActivityType(1)
      await activity.activityEntry.Save()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.NavigateToPFTab()
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo(1)
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked()
      await activity.activityEntry.activityEntryPFTab.enterAtPoints()
      await activity.activityEntry.activityEntryPFTab.clickAddButton()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.Save()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.NavigateToPFTab()
      await activity.activityEntry.activityEntryPFTab.deleteAtPFInGrid(1)
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.Save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.NavigateToPFTab()
      await activity.activityEntry.activityEntryPFTab.verifyCountInGrid(0)
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.NavigateToPFTab()
      await activity.activityEntry.activityEntryPFTab.enterAtPFNo(2)
      await activity.activityEntry.activityEntryPFTab.EnterAtHoursWorked()
      await activity.activityEntry.activityEntryPFTab.enterAtPoints()
      await activity.activityEntry.activityEntryPFTab.clickAddButton()
      await activity.activityEntry.activityEntryPFTab.deleteAtPFInGrid(2)
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.Save()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.NavigateToPFTab()
      await activity.activityEntry.activityEntryPFTab.verifyCountInGrid(0)
      await activity.module.SwitchToActivityEntry()
      await activity.activityEntry.saveNClose()
      await inventory.module.SwitchToInventoryEntry()
      await inventory.inventoryEntry.clickReset()
      await inventory.inventoryEntry.clickActivityLogTab()
      await inventory.inventoryEntry.inventoryEntryActivityLogTab.verifyAtActivityTypeInGrid(0)
      await inventory.module.SwitchToInventoryEntry()
      // Automated By :- Sarathkumar L on 11/14/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 11 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q4S10InventoryLegacy2025_72090', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '72090', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.clickFindDuplicates();//created
      await vehicle.fleetSearch.verifyDuplicatesFleetIDInGrid();//created
      await vehicle.module.switchToFleetSearch()
      // Automated By :- Sarathkumar L on 10/28/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

});

test.describe('Q4S11InventoryLegacySP2025', () => {
  test('Q4S11InventoryLegacySP2025_70513', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70513', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter1206AsTrue();//created
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log')
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.clickUpdateMileage()
      await vehicle.fuelLogEntry.verifyDEFFieldIsDisplayed();//created
      await vehicle.fuelLogEntry.verifyAtFleetId(1)
      await vehicle.fuelLogEntry.tabOutPopupDate()
      await vehicle.fuelLogEntry.enterAtFuel(1);//created
      await vehicle.fuelLogEntry.enterOilAs10()
      await vehicle.fuelLogEntry.enterAtDEF(1);//created
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs10()
      await vehicle.fuelLogEntry.enterHours('10')
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify1002AdditionalSuccessfulAckMsg()
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.verifyAtDEFByMileageInGrid(1);//created
      await loaderPage.navigateToModule(' Inventory & Fleet')
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRandomGridRow()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyTrackHourCheckboxChecked();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickViewMileageLogButton()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.clickUpdateMileage()
      await vehicle.fuelLogEntry.verifyDEFFieldIsDisplayed();//created
      await vehicle.fuelLogEntry.verifyHoursFieldIsDisplayed();//created
      await vehicle.fuelLogEntry.verifyAtFleetId(1)
      await vehicle.fuelLogEntry.tabOutPopupDate()
      await vehicle.fuelLogEntry.enterAtFuel(2);//created
      await vehicle.fuelLogEntry.enterAtOil(2);//created
      await vehicle.fuelLogEntry.enterAtDEF(2);//created
      await vehicle.fuelLogEntry.enterPopupCurrentMileageAs20()
      await vehicle.fuelLogEntry.enterHours('20')
      await vehicle.fuelLogEntry.savePopup()
      await vehicle.fuelLogEntry.verify1002AdditionalSuccessfulAckMsg()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.verifyAtDEFByMileageInGrid(2);//created
      // Automated By :- Sarathkumar L on 10/28/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 10 : year 2025
      // Type of Test case :- Legacy
    });
  });

  test('Q4S11InventoryLegacySP2025_70552', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '70552', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.setSystemparameter1206AsFalse();//created
      await settings.module.switchToSystemParamter()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Mileage Log')
      await vehicle.module.switchToMileageLogEntry()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.clickUpdateMileage()
      await vehicle.fuelLogEntry.verifyAtFleetId(1)
      await vehicle.fuelLogEntry.verifyDEFFieldIsNotDisplayed();//created
      await vehicle.fuelLogEntry.clickCancelInPopup()
      await vehicle.module.switchToMileageLogEntry()
      await loaderPage.navigateToScreen('Fleet Search')
      await vehicle.module.switchToFleetSearch()
      await vehicle.fleetSearch.enterAtFleetId()
      await vehicle.fleetSearch.clickSearchButton()
      await vehicle.fleetSearch.selectRandomGridRow()
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMainTab()
      await vehicle.fleetEntry.fleetEntryMainTab.verifyTrackHourCheckboxChecked();//created
      await vehicle.module.switchToFleetEntry()
      await vehicle.fleetEntry.clickMaintainenceScheduleTab()
      await vehicle.fleetEntry.maintenanceScheduleTab.clickViewMileageLogButton()
      await vehicle.module.switchToMileageLogEntryWindow()
      await vehicle.mileageLogEntry.selectAtFleedId()
      await vehicle.mileageLogEntry.clickUpdateMileage()
      await vehicle.fuelLogEntry.verifyDEFFieldIsNotDisplayed();//created
      await vehicle.fuelLogEntry.verifyHoursFieldIsDisplayed();//created
      await vehicle.fuelLogEntry.clickCancelInPopup()
      await vehicle.module.switchToMileageLogEntryWindow()
      // Automated By :- Sarathkumar L on 11/14/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 11 : year 2025
      // Type of Test case :- DailyDefect
    });
  });

});

test.describe('DailyDefectInventorySP2025', () => {
  test('DailyDefectInventorySP2025_72165', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {
    await withTestContext(testData, '72165', async () => {
      await loginPage.loginScreen.Logon()
      await loaderPage.navigateToModule('Settings')
      await loaderPage.navigateToScreen('System Parameter')
      await settings.module.switchToSystemParamter()
      await settings.sysParameter.clickApprovalParameterButton()
      await settings.module.switchToApprovalParameterWindowFor2024R2()
      await settings.approvalParameter.selectAtModuleInGrid()
      await settings.module.switchToApprovalParameterWindow()
      await settings.approvalParameter.setEnableApprovalProcessAsTrue()
      await settings.approvalParameter.saveScreen()
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.clickAddNewButton()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyJurisFieldIsEnabled()
      await inventory.inventoryAuditEntry.verifyAtJurisDropdown()
      await inventory.inventoryAuditEntry.taboutAuditByField()
      await inventory.inventoryAuditEntry.taboutAuditDateAndTime()
      await inventory.inventoryAuditEntry.enterAtDescription(1)
      await inventory.inventoryAuditEntry.clickInventoryRadioButton()
      await inventory.inventoryAuditEntry.selectAtType(1);//created
      await inventory.inventoryAuditEntry.clickCreateAuditButton()
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventoryAuditEntry.switchToAuditTab()
      await inventory.inventoryAuditEntry.auditTab.selectAtTypeInGrid(1);//created
      await inventory.inventoryAuditEntry.auditTab.verifyAtEnterInventoryOrScan();//created
      await inventory.inventoryAuditEntry.auditTab.clickUpdateButton();//created
      await inventory.inventoryAuditEntry.auditTab.verifyAtAuditedByTypeInGrid(1);//created
      await inventory.module.SwitchToInventorySearchEntryWindow()
      await inventory.inventoryAuditEntry.verifyApprovalTabEnabled()
      await inventory.inventoryAuditEntry.switchToApprovalTab();//created
      await inventory.inventoryAuditEntry.approvalTab.selectAtNewAction(1);//created
      await inventory.inventoryAuditEntry.approvalTab.taboutDateAndTime();//created
      await inventory.inventoryAuditEntry.approvalTab.clickLookupIcon()
      await inventory.inventoryAuditEntry.approvalTab.enterAtSupervisor()
      await inventory.inventoryAuditEntry.approvalTab.saveInternal()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.verifyStatusAsSubmitted();//updated
      await loaderPage.logout()
      await loginPage.loginScreen.logonUsingTestContext()
      await loaderPage.navigateToModule('Home')
      await loaderPage.navigateToScreen('My Home')
      await home.module.switchToMyHomeScreen()
      await home.myHome.SwitchToMyReportsTab()
      await home.myHome.myReportsTab.SelectAtItemType()
      await home.myHome.myReportsTab.ClickSearchButton()
      await home.myHome.myReportsTab.verifyAtStatusUsingItemType(1);//created
      await loaderPage.navigateToModule('Inventory & Fleet')
      await loaderPage.navigateToScreen('Inventory Audit Search')
      await inventory.module.switchToInventoryAuditSearch()
      await inventory.inventoryAuditSearch.selectAtAuditInGrid()
      await inventory.module.switchToInventoryAuditEntry()
      await inventory.inventoryAuditEntry.approvalTab.selectAtNewAction(2);//created
      await inventory.inventoryAuditEntry.approvalTab.taboutDateAndTime();//created
      await inventory.inventoryAuditEntry.approvalTab.saveInternal()
      await inventory.module.switchToInventoryAuditEntry()
      // Automated By :- Sarathkumar L on 11/14/2025
      // Sprint :-Â Quarter 4 :Â  Sprint 11 : year 2025
      // Type of Test case :- Defect
    });
  });

});

