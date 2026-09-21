// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { TestDataReader } from '../../src/data/test-data-reader';
import { withTestContext } from '../../src/data/test-context';
import { BrowserHelpers, ElementHelpers, WaitHelpers } from '../../src/helpers';

const testData = TestDataReader.loadData('Commissary');

test.describe('Q1CommissaryDefect', () => {
    // Automated By : - Abinaya M on 03/12/2024
    // Sprint :- : Quarter 1 : Sprint 3  
    // Type of Test case : - Defect - CRM # :- 158934
    test('CRM158934ToVerifyTheCanteenOrderSearchAfterEnteredAllMandatoryDataAndClickOnAddStillItIsShowingEnterTheMandatoryData_24836', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '24836', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Canteen Order Search');
            await commissary.switchToCanteenOrderSearch();
            await commissary.canteenOrderSearch.clickAddNew();
            await commissary.switchToCanteenOrderEntry();
            await commissary.canteenOrderEntry.clickSaveButton();
            await commissary.canteenOrderEntry.verify6001NameMandatoryAck();
            await commissary.switchToCanteenOrderEntry();
            await commissary.canteenOrderEntry.enterAtSPN();
            await commissary.canteenOrderEntry.enterAtFacilityStockCode();
            await commissary.canteenOrderEntry.enterAtQuantity();
            await commissary.canteenOrderEntry.clickAdd();
            await commissary.canteenOrderEntry.verify32532HygieneOrderExceedsDollarLimitConfirmPopup();
            await commissary.canteenOrderEntry.verify32504OrderExceedsAmtConfirmPopup();
            await commissary.canteenOrderEntry.verifyAtFacilityStockCodeInGrid();
            await commissary.canteenOrderEntry.saveScreen();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
        });
    });

    // Automated By : - Abinaya M on 03/12/2024
    // Sprint :- : Quarter 1 : Sprint 3  
    // Type of Test case : - Defect - CRM # :-162150 
    test('CRM162150ToVerifyPurchaseSearchAllowToSaveScreenWithoutAddingTheFields_24851', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '24851', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Purchase Search');
            await commissary.switchToPurchaseSearch();
            await commissary.purchaseSearch.clickAddNew();
            await commissary.switchToPurchase();
            await commissary.purchase.clickSaveButton();
            await commissary.purchase.verify6001NameMandatoryAck();
            await commissary.switchToPurchase();
            await commissary.purchase.enterAtVendorName();
            await commissary.purchase.clickSaveButton();
            await commissary.purchase.verifyNoDataPresentAck();
            await commissary.switchToPurchase();
            await commissary.purchase.clickAdd();
            await commissary.purchase.verifyEnterMandatoryDataAck();
            await commissary.switchToPurchase();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.enterAtFacilityStock();
            await commissary.purchase.tabOutOrderedDateAndTime();
            await commissary.purchase.enterOrderQuantity();
            await commissary.purchase.clickAdd();
            await commissary.purchase.saveScreen();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
        });
    });

    // Automated by Mohamed Absar on 3/12/2024
    // Year : 2024 Quarter: 1 Sprint: 3
    // Type of Test case - Defect CRM#165232
    test('CRM165232ToVerifyTheCategoryRestrictionAfterSelectingTheDataInTheGridWithoutClickingOnUpdateButtonItsAllowToSaveTheScreen_24844', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '24844', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Category Restriction');
            await commissary.switchToCategoryRestriction();
            await commissary.categoryRestriction.selectGridRowByCategory();
            await commissary.categoryRestriction.clickSave();
            await commissary.categoryRestriction.verifyUpdatedDataExistsAcknowledgePopup();
            await commissary.switchToCategoryRestriction();
        });
    });

    // Automated by :-Kiran Date :-3/12/2024 Quarter:-1 Sprint:-3 Module:-Commissary
    test('CRM164354ToVerifyTheCommisaryAccountHIstoryWhileClickingPrintIconGettingBuildError_24845', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '24845', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.SelectAtAccountType();
            await commissary.accountHistory.clickPrintIcon();
            await home.module.switchToSelectReport();
            await home.selectReport.CloseTheScreen();
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.verifyAccountTypeDropDownIsDisplayed();
        });
    });

    // Automated By : - Sarathkumar L on 12/03/2024
    // Sprint :- : Quarter 1 : Sprint 1 2024  
    // Type of Test case : - Defect 	
    // Updated By:Bavithra on 04/04/2024
    // Sprint :- : Quarter 2 : Sprint 4 2024  
    // Type of Test case : - Defect 	
    test('CRM165234ToVerifyTheCommissaryCategoryRestrictionAfterClickingOnEmptyCategoryTypeAndAddingInTheGridThenClickOnSaveWeAreGettingBlueScreenError_24843', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '24843', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Category Restriction');
            await commissary.switchToCategoryRestriction();
            await commissary.categoryRestriction.selectAtCategoryByIndex();
            await commissary.categoryRestriction.enterAtDollarAmount();
            await commissary.categoryRestriction.clickAddButton();
            await commissary.categoryRestriction.verifySelectCategoryAcknowledgePopup();
            await commissary.switchToCategoryRestriction();
            await commissary.categoryRestriction.clickResetButton();
            await commissary.switchToCategoryRestriction();
            await commissary.categoryRestriction.selectAtCategory();
            await commissary.categoryRestriction.enterAtDollarAmount();
            await commissary.categoryRestriction.clickAddButton();
            await commissary.switchToCategoryRestriction();
            await commissary.categoryRestriction.save();
            await commissary.switchToCategoryRestriction();
            await commissary.categoryRestriction.verifyUpdateSuccessfulMsg();
            await commissary.switchToCategoryRestriction();
            await commissary.categoryRestriction.verifyDollarAmountInGrid();
            await commissary.switchToCategoryRestriction();
        });
    });

    // Automated By:Bavithra on 05/21/2024
    // Quarter 2 : Sprint 5 2024 //Type of Test case : - Defect 	
    test('verifyPendingDeliveryWhileClickingResetDataShouldNotListInGrid_29380', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '29380', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Canteen Order Search');
            await commissary.switchToCanteenOrderSearch();
            await commissary.canteenOrderSearch.clickSearch();
            const namesInGrid = await commissary.canteenOrderSearch.getNamesInGrid();
            await commissary.canteenOrderSearch.clickPendingDelivery();
            await commissary.switchToPendingDelivery();
            await commissary.pendingDelivery.verifyAtGridIsNull();
            await commissary.pendingDelivery.clickResetIcon();
            await commissary.pendingDelivery.verifyAtGridIsNull();
            await commissary.pendingDelivery.clickListOrder();
            await commissary.pendingDelivery.verifyAtGridIsNotNull();
            const namesInGrid2 = await commissary.pendingDelivery.getNamesInGrid();
            await commissary.pendingDelivery.verifyAtNames(namesInGrid, namesInGrid2);
            await commissary.switchToPendingDelivery();
        });
    });

    // Automated By : - chandrasekar.v on 19/06/2023
    // Sprint :- : Quarter 2 : Sprint 6  
    // Type of Test case : - Defect 2024
    test('ToVerifyTheCommissaryAccountHistoryCreateNewAccountWhileAddingTheInmateAccountAfterAddingAllMandatoryFieldItIsShowingThe8EnterMandatory_32688', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '32688', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.clickCreateNewAccount();
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.selectAtAccountType();
            await commissary.accountMaster.enterAtSPN();
            await commissary.accountMaster.enterAtOpeningBalance();
            await commissary.accountMaster.saveScreen();
            await commissary.accountMaster.verifyEnterMandatoryAcknowledgePopupDoesNotArise();
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.verifyAdditionSuccessfulBottomMessage();
            await commissary.switchToAccountMaster();
        });
    });

    // Automated By : - chandrasekar.v on 20/06/2023
    // Sprint :- : Quarter 2 : Sprint 6  
    // Type of Test case : - Defect 2024
    test('CRM_165236_ToVerifyTheCommissaryFundTransferAfterAddingTheDataClickOnSaveBottomMessageReflectedAs1003_UpdateSuccessfulMessageInsteadOf1002_32686', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '32686', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Fund Transfer');
            await commissary.switchToFundTransfer();
            await commissary.fundTransfer.selectAtAccountType();
            await commissary.fundTransfer.enterAtSrcSPN();
            await commissary.fundTransfer.verifyAtAccountName();
            await commissary.fundTransfer.enterAtToSPN();
            await commissary.fundTransfer.tabOutDateAndTime();
            await commissary.fundTransfer.enterAtAmountToBeTransferred();
            await commissary.fundTransfer.saveScreen();
            await commissary.fundTransfer.verify1002AdditionalSuccessfulAcknowledge();
            await commissary.switchToFundTransfer();
        });
    });

    // Automated By:Bavithra on 07/05/2024
    // Quarter 3 : Sprint 7 2024 //Type of Test case : - Defect 	
    // Updated By: Sarathkumar L on 08/11/2025 Testcase ID: 65559 Quarter 3 : Sprint 8 2025 
    test('verifyVendorEntryScreenBottomMessage_34908', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '34908', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Vendor Search');
            await commissary.switchToVendorSearch();
            await commissary.vendorSearch.clickAddNew();
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.enterAtNameID();
            await commissary.vendorEntry.switchToProductTab();
            await commissary.vendorEntry.productTab.enterAtVendorItemStockCode();
            await commissary.vendorEntry.productTab.clickAddButton();
            await commissary.vendorEntry.productTab.selectAtViscNoInGrid(); // updated
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.clickSave(); // updated
            await commissary.vendorEntry.verify1051UpdateDataExistsInTheProductTabAcknowledgePopupMessage(); // updated
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.switchToProductTab();
            await commissary.vendorEntry.productTab.clickUpdateButton(); // updated
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.save();
            await commissary.switchToVendorEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.switchToVendorEntry();
        });
    });

    // Automated By : - Bavithra on 07/12/2024
    // Sprint :- : Quarter 3 : Sprint 7  
    // Type of Test case : - Defect - 
    test('verifyPurchaseEntryBottomMessage_34939', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '34939', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Purchase Search');
            await commissary.switchToPurchaseSearch();
            await commissary.purchaseSearch.clickAddNew();
            await commissary.switchToPurchase();
            await commissary.purchase.enterAtVendorName();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.enterAtFacilityStock();
            await commissary.purchase.tabOutOrderedDateAndTime();
            await commissary.purchase.enterOrderQuantity();
            await commissary.purchase.clickAdd();
            await commissary.purchase.saveScreen();
            await commissary.switchToPurchase();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.switchToPurchase();
        });
    });

    // Automated By : - Manikandan.k on 17/16/2024
    // Sprint :- : Quarter 3 : Sprint 7  
    // Type of Test case : - Defect 2024
    test('ToVerifyTheCommissaryInmateDetailsClickAnyIconsNextToRefreshIconGettingJsError_34531', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '34531', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            // commissary.switchToInmateDetails();
            await commissary.inmateDetails.clickAdmissionIcon();
            await commissary.inmateDetails.verifyWindowExists('Admission');
            await admission.switchToAdmissionEntry();
            await admission.admissionEntry.CloseAdmissionEntry();
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.clickFacilityIcon();
            await commissary.inmateDetails.verifyWindowExists('Inmate Management');
            await facilityManagement.SwitchToInmateManagementEntry();
            await facilityManagement.inmateManagementEntry.close();
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.clickPropertyIcon();
            await commissary.inmateDetails.verifyWindowExists('Inmate Property');
            await facilityManagement.SwitchToInmatepropertyEntry();
            await facilityManagement.inmatePropertyEntry.CloseInmatepropertyEntry();
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.clickScheduleIcon();
            await commissary.inmateDetails.verifyWindowExists('Individual Scheduling');
            await activity.switchToIndividualScheduling();
            await activity.individualScheduling.close();
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.clickNameMineIcon();
            await commissary.inmateDetails.verifyWindowExists('NameMining');
            await names.switchToNamesMiningScreen();
            await names.nameMining.CloseNameMiningScreen();
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.clickWorkReleaseIcon();
            await commissary.inmateDetails.verifyWindowExists('WorkRelease');
            await activity.switchToWorkRelease();
            await activity.workRelease.close();
            // objectIdentification.windowHandle.switchToMainWindow()
        });
    });

    // Automated By :- Sarathkumar L on 04/22/2025
    // Sprint : 2 Quarter : 4 Year : 2025
    // Type of Test Case : Defect 
    test('CRM184129ToVerifyTheCommissaryAccountHistorySelectAnyExistingDataFromTheGridBatchBillingWindowDoubleClickTheDataAndClearTheDataFromTheGrid_55935', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '55935', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.SelectAtAccountType();
            await commissary.accountHistory.clickSearch();
            await commissary.accountHistory.selectAtBookingNoInGrid();
            await commissary.switchToBatchBillingEntry();
            await commissary.batchBillingEntry.verifyGridCellNotEditable();
            await commissary.batchBillingEntry.clickResetIcon();
            await commissary.batchBillingEntry.verifyJurisFieldIsDisabled();
            await commissary.batchBillingEntry.clickPrintReceiptButton();
            await commissary.batchBillingEntry.verifyJurisFieldIsDisabled();
        });
    });
});

test.describe('Q1CommissaryEnhancement', () => {
    // Automated By : - Abinaya M on 03/13/2024
    // Sprint :- : Quarter 1 : Sprint 3  
    // Type of Test case : - Enhancement - CRM # :-157872
    test('CRM157872ToVerifyTheNeedAnAccountHistoryReportForScreen8431_24848', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '24848', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.clickCreateNewAccount();
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.selectAtAccountType();
            await commissary.accountMaster.enterAtSPN();
            await commissary.accountMaster.enterAtOpeningBalance();
            await commissary.accountMaster.saveScreen();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.accountMaster.closeScreen();
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.verifyAtBalanceAmount();
            await commissary.inmateDetails.clickPrintIcon();
            await home.module.switchToSelectReport();
            await home.selectReport.selectReportInCategoryTable();
            // objectIdentification.readPDF.DownloadReports()
            // objectIdentification.readPDF.SaveAsPDFfileToLocation('24848')
            // String pdfcontent = objectIdentification.readPDF.ReadPDFUsingApache('24848')
            // await home.kPITempPDFScreen.verifyContentInPDF(pdfcontent, PoliceData.getCommissaryModuleValue('ValueInPDF'))
        });
    });

    // Automated by :-Kiran Date :-7/09/2024 Quarter:-3 Sprint:7 Module:-Commisary
    test('ToVerifyTheAccountHitoryCreateNewAccount_AccountMAsterSelectTypeAsCallingCardAmountAddMorevalueInOpeningBalanceThenClickOnSave_34945', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '34945', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.clickCreateNewAccount();
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.selectAtAccountType();
            await commissary.accountMaster.enterAtSPN();
            await commissary.accountMaster.enterAtOpeningBalance();
            await commissary.accountMaster.saveScreen();
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.verifyAdditionSuccessfulBottomMessage();
            await commissary.accountMaster.verify1008ErrorPopUpIsNotArised();
            await commissary.switchToAccountMaster();
        });
    });

    // Automated by Sarathkumar on 11/21/2025
    // Year : 2025 Quarter: 4 Sprint: 11
    // Type of Testcase - Enhancement
    test('CRM177388ModificationToUserFieldsAddedToCoded4206_72576', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '72576', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.switchToDepositReleaseFundsTab();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtAction();
            await settings.module.switchToSharedCodes();
            await settings.sharedCodes.clickAddNewButton();
            await settings.sharedCodes.EnterAtPopUpCodeValue();
            await settings.sharedCodes.EnterAtPopUpDescription();
            await settings.sharedCodes.clickIsNegativeCheckbox(); // created
            await settings.sharedCodes.clickCodeAddButton();
            await settings.sharedCodes.closeScreen();
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.clickResetIcon();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.switchToDepositReleaseFundsTab();
            await commissary.inmateDetails.depositReleaseFundsTab.verifyAtActionDropdown(1); // created
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtAction(1);
            await commissary.inmateDetails.depositReleaseFundsTab.verifyCheckNoFieldIsNotMandatory(); // created
            await commissary.inmateDetails.depositReleaseFundsTab.verifyNameFieldIsNotMandatory(); // created
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtAction(2);
            await commissary.inmateDetails.depositReleaseFundsTab.verifyCheckNoFieldIsMandatory(); // created
            await commissary.inmateDetails.depositReleaseFundsTab.verifyNameFieldIsMandatory(); // created
        });
    });
});

test.describe('CommissaryEntryScreen', () => {
    test('BankReconcilationSmokeEntry', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, 'BankStatement', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Bank Reconciliation');
            await commissary.switchToBankReconciliation();
            await commissary.bankReconciliation.clickAddNew();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Bank Reconciliation')
            await commissary.switchToBankStatementEntry();
            await commissary.bankStatement.enterAtBeginningBalance();
            await commissary.bankStatement.enterAtEndingBalance();
            await commissary.bankStatement.clickContinueButton();
            await commissary.switchToBankReconciliationWindow();
            await commissary.bankReconciliation.clickSave();
            await commissary.bankReconciliation.verifyAcknowledgeAdditionSuccessful();
            await commissary.switchToBankReconciliation();
        });
    });

    test('BatchBillingSearchSmokeEntry', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, 'BatchBilling', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Batch Billing Search');
            await commissary.switchToBatchBillingSearch();
            await commissary.batchBillingSearch.clickAddNew();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Batch Billing Search')
            await commissary.switchToBatchBillingEntry();
            await commissary.batchBillingEntry.selectAtFeeType();
            await commissary.batchBillingEntry.tabOutDateAndTime();
            await commissary.batchBillingEntry.enterAtAmount();
            await commissary.batchBillingEntry.enterAtLastName();
            await commissary.batchBillingEntry.enterAtFirstName();
            await commissary.batchBillingEntry.clickAddButton();
            // objectIdentification.manualIdentify.saveTheScreenWithConfirm()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Batch Billing Search')
            await commissary.switchToBatchBillingEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
        });
    });

    test('ItemSearchSmokeEntry', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, 'ItemEntry', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Item Search');
            await commissary.switchToItemSearch();
            await commissary.itemSearch.clickAddNew();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Item Search')
            await commissary.switchToItemEntry();
            await commissary.itemEntry.enterAtFacilityStock();
            await commissary.itemEntry.enterAtVendorItemStockCode();
            await commissary.itemEntry.enterAtItemName();
            await commissary.itemEntry.selectAtCategory();
            await commissary.itemEntry.selectAtContainerType();
            await commissary.itemEntry.enterAtContainerQuantity();
            await commissary.itemEntry.enterAtContainerCost();
            await commissary.itemEntry.enterAtCurrentItemCount();
            await commissary.itemEntry.clickSave();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Item Search')
            await commissary.switchToItemEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
        });
    });

    test('PurchaseSearchSmokeEntry', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, 'PurchaseEntry', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Purchase Search');
            await commissary.switchToPurchaseSearch();
            await commissary.purchaseSearch.clickAddNew();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Purchase Search')
            await commissary.switchToPurchase();
            await commissary.purchase.enterAtVendorName();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.tabOutOrderedDateAndTime();
            await commissary.purchase.enterAtFacilityStock();
            await commissary.purchase.enterOrderQuantity();
            await commissary.purchase.clickAdd();
            await commissary.purchase.verifyAtFacilityInGrid();
            // objectIdentification.manualIdentify.saveTheScreenWithConfirm()
            await commissary.purchase.verifyAtFacilityInGrid();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Purchase Search')
            await commissary.switchToPurchase();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
        });
    });

    test('VendorSearchSmokeEntry', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, 'VendorEntry', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Vendor Search');
            await commissary.switchToVendorSearch();
            await commissary.vendorSearch.clickAddNew();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Vendor Entry')
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.enterAtNameID();
            await commissary.vendorEntry.navigateToProductTab();
            await commissary.vendorEntry.productTab.enterAtVendorItemStockCode();
            await commissary.vendorEntry.productTab.clickAddButton();
            await commissary.vendorEntry.verifyAtVISCNoInGrid();
            await commissary.switchToVendorEntry();
            // objectIdentification.manualIdentify.saveTheScreenWithConfirm()
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Vendor Entry')
            await commissary.switchToVendorEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            // objectIdentification.smokeTest.clickOnEntryScreensTabsWithCheckWindowOpens('Vendor Entry')
        });
    });
});

test.describe('Q4CommissaryDefect', () => {
    // Automated by Ranjithkumar on 11/19/2024
    // Year : 2024 Quarter: 4 Sprint: 11
    // Type of Test case - Defect 
    // CRM# 161015
    test('ToVerifyTheCommissaryInmateDetailsItsAllowToSaveTheScreenWithoutEnterTheData_42219', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '42219', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.switchToDepositReleaseFundsTab();
            await commissary.inmateDetails.depositReleaseFundsTab.clicksave();
            await popupPage.acknowledge.okWithExpectedMessage('(30033) Enter SPN No');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.saveScreen();
            await popupPage.acknowledge.okWithExpectedMessage('(30033) Enter SPN No');
        });
    });

    // Automated by :-Sarath Date :-01/16/2025 Quarter:-1 Sprint:1 CRM:-180429 Module:-Commissary	
    test('CommissaryInmateDetailsDepositAndReleaseFundsEntryMandatoryDataInAllFieldsExceptDrawerClickOnSave1008Error_48860', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '48860', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.switchToDepositReleaseFundsTab();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtAction(); // created
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtDrawer();
            await commissary.inmateDetails.depositReleaseFundsTab.tabOutDateTime();
            await commissary.inmateDetails.depositReleaseFundsTab.enterAtOfficer();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtPaymentMethod();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtMedia();
            await commissary.inmateDetails.depositReleaseFundsTab.enterAtAmount();
            await commissary.inmateDetails.depositReleaseFundsTab.clicksave();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.switchToDepositReleaseFundsTab();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtAction();
            await commissary.inmateDetails.depositReleaseFundsTab.tabOutDateTime();
            await commissary.inmateDetails.depositReleaseFundsTab.enterAtOfficer();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtPaymentMethod();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtMedia();
            await commissary.inmateDetails.depositReleaseFundsTab.enterAtAmount();
            await commissary.inmateDetails.depositReleaseFundsTab.clicksave();
            await commissary.inmateDetails.depositReleaseFundsTab.verify30033EnterDrawerAckPopup();
            await commissary.switchToInmateDetails();
        });
    });

    // Automated by :-Sarath Date :-01/17/2025 Quarter:-1 Sprint:1 Module:-Commissary
    test('CRM180420CommissaryItemSearchSelectCategoryAsUniformAndClickSearch1008PageErrorAcknowledgePopupOccurs_48823', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '48823', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Item Search');
            await commissary.switchToItemSearch();
            await commissary.itemSearch.selectAtCategory();
            await commissary.itemSearch.clickSearch();
            // objectIdentification.smokeTest.checkAckExist()
            await commissary.switchToItemSearch();
            await commissary.itemSearch.verifyAtItemNameByCategoryName();
            await commissary.switchToItemSearch();
        });
    });

    // Automated by :-Sarath Date :-01/20/2024 Quarter:-1 Sprint:1 Module:-Commissary
    test('CRM177143CommissaryInmateDetailsBillingTabAfterAddedTheDataIntoTheGridClickTheResetButtonTheBlueScreenErrorOccurs_48859', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '48859', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.switchToBillingTab();
            await commissary.inmateDetails.billingTab.selectAtFeeType();
            await commissary.inmateDetails.billingTab.enterAtFeeDescription();
            await commissary.inmateDetails.billingTab.enterAtAmount();
            await commissary.inmateDetails.billingTab.tabOutDateAndTime();
            await commissary.inmateDetails.billingTab.enterAtOfficer();
            await commissary.inmateDetails.billingTab.clickAddButton();
            await commissary.inmateDetails.billingTab.verifyAtFeesDescriptionInGrid();
            await commissary.inmateDetails.billingTab.clickResetButton();
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.switchToBillingTab();
            await commissary.inmateDetails.billingTab.verifyFeeTypeAsNull();
            await commissary.inmateDetails.billingTab.verifyAmountIsBlank();
            await commissary.inmateDetails.billingTab.verifyDateAndTimeFieldIsBlank();
            await commissary.inmateDetails.billingTab.selectAtFeeType();
            await commissary.inmateDetails.billingTab.enterAtFeeDescription();
            await commissary.inmateDetails.billingTab.enterAtAmount();
            await commissary.inmateDetails.billingTab.tabOutDateAndTime();
            await commissary.inmateDetails.billingTab.enterAtOfficer();
            await commissary.inmateDetails.billingTab.clickAddButton();
            await commissary.inmateDetails.billingTab.verifyAtFeesDescriptionInGrid();
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.clickResetIcon();
            await commissary.inmateDetails.switchToBillingTab();
            await commissary.inmateDetails.billingTab.verifyFeeTypeAsNull();
            await commissary.inmateDetails.billingTab.verifyAmountIsBlank();
            await commissary.inmateDetails.billingTab.verifyDateAndTimeFieldIsBlank();
        });
    });

    // Automated By : Mohamed Absar A on 02/18/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#172430
    test('ToVerifyTheVendorEntryAfterCreatingANewEntryProductPurchaseHistoryAndNotesTabContainsDataButTabColorIsNotChangedToBlueColorCRM172430_51159', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '51159', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Vendor Search');
            await commissary.switchToVendorSearch();
            await commissary.vendorSearch.clickAddNew();
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.enterAtNameID();
            await commissary.vendorEntry.save();
            await commissary.switchToVendorEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.vendorEntry.switchToProductTab();
            await commissary.vendorEntry.productTab.enterAtVendorItemStockCode();
            await commissary.vendorEntry.productTab.clickAddButton();
            await commissary.vendorEntry.productTab.verifyAtVISCInGrid();
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.save();
            await commissary.switchToVendorEntry();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await commissary.vendorEntry.verifyTabColorAsBlue(1);
            await commissary.vendorEntry.clickPurchaseHistoryTab();
            await commissary.vendorEntry.purchaseHistoryTab.clickCreateOrderButton();
            await commissary.switchToPurchase();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.tabOutOrderedDateAndTime();
            await commissary.purchase.enterAtFacilityStock();
            await commissary.purchase.enterOrderQuantity();
            await commissary.purchase.clickAdd();
            await commissary.purchase.verifyAtFacilityInGrid();
            await commissary.purchase.saveScreen();
            await commissary.switchToPurchase();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.purchase.closeScreen();
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.save();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await commissary.vendorEntry.verifyTabColorAsBlue(2);
            await commissary.vendorEntry.clickPurchaseHistoryTab();
            await commissary.vendorEntry.purchaseHistoryTab.verifyAtOfficerInGrid(1);
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.switchToNotesTab();
            await commissary.vendorEntry.notesTab.tabOutDateAndTime();
            await commissary.vendorEntry.notesTab.enterAtNotes();
            await commissary.vendorEntry.notesTab.clickAddButton();
            await commissary.vendorEntry.notesTab.verifyAtNotesInGrid();
            await commissary.vendorEntry.notesTab.internalSave();
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.switchToNotesTab();
            await commissary.vendorEntry.notesTab.verifyUpdateSuccessfulHeaderMessage();
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.save();
            await commissary.switchToVendorEntry();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await commissary.vendorEntry.verifyTabColorAsBlue(3);
        });
    });

    // Automated By : Mohamed Absar A on 02/19/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#165825
    test('bankDepositSearchClickAddNewChangePriorCloseAsPreviousDateAndTabOutGettingBuildErrorCRM165825_50817', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '50817', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Bank Deposit Search');
            await commissary.switchToBankDepositSearch();
            await commissary.bankDepositSearch.clickAddNew();
            await commissary.switchToBankDeposit();
            await commissary.bankDeposit.enterPriorCloseDateAsPreviousDateAndTabOut(2);
            await commissary.bankDeposit.verifyPriorCloseDateIsFieldDisplayed();
        });
    });

    // Automated By : Mohamed Absar A on 02/25/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#181787
    test('commissaryAccountHistoryDepositReleaseFundsJSErrorCRM181787_50641', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '50641', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.clickDepositReleaseFunds();
            await commissary.switchToDepositReleaseFunds();
            await commissary.depositReleaseFunds.selectAtAction(1);
            await settings.module.switchToSharedCodes();
            await settings.sharedCodes.clickAddNewButton();
            await settings.sharedCodes.EnterAtPopUpCodeValue();
            await settings.sharedCodes.EnterAtPopUpDescription();
            await settings.sharedCodes.clickAddButtonInPopUp();
            await settings.sharedCodes.closeScreen();
            await commissary.switchToDepositReleaseFunds();
            await commissary.depositReleaseFunds.closeScreen();
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.clickDepositReleaseFunds();
            await commissary.switchToDepositReleaseFunds();
            await commissary.depositReleaseFunds.enterAtSPN();
            await commissary.depositReleaseFunds.selectAtAction(2);
            await commissary.depositReleaseFunds.selectAtDrawer();
            await commissary.depositReleaseFunds.tabOutDateAndTime();
            await commissary.depositReleaseFunds.enterAtOfficer();
            await commissary.depositReleaseFunds.selectAtPaymentMethod();
            await commissary.depositReleaseFunds.selectAtMedia();
            await commissary.depositReleaseFunds.enterAtAmount();
            await commissary.depositReleaseFunds.clickSave();
            await commissary.depositReleaseFunds.verifyAdditionSuccessfulStatusMessage();
            await commissary.depositReleaseFunds.clickSave();
            await commissary.depositReleaseFunds.verify30033EnterSPNNoAcknowledgePopup();
            await commissary.switchToDepositReleaseFunds();
            await commissary.depositReleaseFunds.clickSaveAndClose();
            await commissary.depositReleaseFunds.verify30033EnterSPNNoAcknowledgePopup();
            await commissary.switchToDepositReleaseFunds();
        });
    });

    // Automated By : Mohamed Absar A on 02/26/2025 //Test Case Type:- Defect //Q1 Sprint 2 2025 CRM#181793
    test('commissaryCashSearchSelectADataFromTheGridWithoutBookingNumberCashDrawerWindowOpensWith1006ValidationFailedCRM181793_50818', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '50818', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Cash Search');
            await commissary.switchToCashSearch();
            await commissary.cashSearch.clickSearch();
            await commissary.cashSearch.selectRandomGridRow();
            await commissary.cashSearch.verify18016NoRecordAvailableAcknowledgePopup();
            await commissary.switchToCashSearch();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Cash Drawer')
            await commissary.switchToCashSearch();
        });
    });

    // Automated By :- Sarathkumar L on 03/18/2025
    // Sprint : 1 Quarter : 3 Year : 2025
    // Type of Test Case : Defect 
    test('CRM176880CommissaryPurchaseSearchScreenAllowingPastDateInAction_52879', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '52879', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Purchase Search');
            await commissary.switchToPurchaseSearch();
            await commissary.purchaseSearch.clickSearchButton();
            await commissary.purchaseSearch.selectAtOrderNoInGrid();
            await commissary.switchToPurchase();
            await commissary.purchase.selectAtAction(1);
            await commissary.purchase.selectAtFacilityNoInGrid();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.enterReceivedDateAsPreviousDate();
            await commissary.purchase.enterAtContainersReceived(1);
            await commissary.purchase.clickUpdateButton();
            await commissary.purchase.verify32528ReceiveddDateCannotBeLessThanLastOrderedDateAcknowledgePopup();
            await commissary.switchToPurchase();
            await commissary.purchase.clickResetIcon();
            await commissary.purchase.selectAtAction(1);
            await commissary.purchase.selectAtFacilityNoInGrid();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.tabOutReceivedDateAndTime();
            await commissary.purchase.clickUpdateButton();
            await commissary.purchase.verifyEnterMandatoryAcknowledgePopup();
            await commissary.switchToPurchase();
            await commissary.purchase.clickResetIcon();
            await commissary.purchase.selectAtAction(1);
            await commissary.purchase.selectAtFacilityNoInGrid();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.enterAtContainersReceived(2);
            await commissary.purchase.tabOutReceivedDateAndTime();
            await commissary.purchase.clickUpdateButton();
            await commissary.purchase.verify30033EnterAQuantityGreaterThanZeroAcknowledgePopup();
            await commissary.switchToPurchase();
            await commissary.purchase.clickResetIcon();
            await commissary.purchase.selectAtAction(1);
            await commissary.purchase.selectAtFacilityNoInGrid();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.enterAtContainersReceived(3);
            await commissary.purchase.tabOutReceivedDateAndTime();
            await commissary.purchase.clickUpdateButton();
            await commissary.purchase.verify18005ReceivedQuatityCannotBeGreaterThanOrderedQuantityAcknowledgePopup();
            await commissary.switchToPurchase();
            await commissary.purchase.enterAtContainersReceived(4);
            await commissary.purchase.clickUpdateButton();
            await commissary.purchase.verifyAtUnitReceivedInGrid();
            await commissary.switchToPurchase();
        });
    });

    // Automated By :- Sarathkumar L on 03/19/2025
    // Sprint : 1 Quarter : 3 Year : 2025
    // Type of Test Case : Defect 
    test('CRM181963CommissaryDrawerPermissionItAllowsToAddTheValueDirectlyIntoTheGrid_52898', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '52898', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Drawer Permission');
            await commissary.switchToDrawerPermission();
            await commissary.drawerPermission.selectAtDrawerInGrid();
            await commissary.drawerPermission.selectAtDrawer(1);
            await commissary.switchToCodedCombo();
            // objectIdentification.windowHandle.closeTheScreen()
            await commissary.switchToDrawerPermission();
            await commissary.drawerPermission.clickUpdateButton();
            await commissary.drawerPermission.verify30033EnterDrawerAcknowledgePopup();
            await commissary.switchToDrawerPermission();
        });
    });
});

test.describe('Q1S3CommissaryDefect2025', () => {
    // Automated By :- Sarathkumar L on 03/21/2025
    // Sprint : 1 Quarter : 3 Year : 2025
    // Type of Test Case : Defect 
    test('CRM184314CommissaryAccountHistoryDepositReleaseFunds1008PageError_52908', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '52908', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.clickDepositReleaseFunds();
            await commissary.switchToDepositReleaseFunds();
            await commissary.depositReleaseFunds.selectAtSuffix();
            await commissary.depositReleaseFunds.selectAtAction(1);
            await commissary.depositReleaseFunds.verify32513InsufficientBalanceAcknowledgePopup();
            await commissary.switchToDepositReleaseFunds();
            await commissary.depositReleaseFunds.tabOutDateAndTime();
            await commissary.depositReleaseFunds.enterAtOfficer();
            await commissary.depositReleaseFunds.clickSave();
            await commissary.depositReleaseFunds.verify30033EnterSPNNoAcknowledgePopup();
            await commissary.switchToDepositReleaseFunds();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Deposit Release Funds')
            await commissary.switchToDepositReleaseFunds();
            await commissary.depositReleaseFunds.enterAtSPN();
            await commissary.depositReleaseFunds.verifyAtBalanceAmount();
            await commissary.depositReleaseFunds.clearSPN();
            await commissary.depositReleaseFunds.verifyBalanceAmountNotDisplayed();
        });
    });

    // Automated By :- Sarathkumar L on 03/24/2025
    // Sprint : 1 Quarter : 3 Year : 2025
    // Type of Test Case : Defect 
    test('CRM183569ToVerifyTheCommissaryPurchaseAddNewPurchaseWindowInNameFieldJustEnterTheCharacterAndEnterMandatoryFieldsAddTheDataIntoTheGrid_52907', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '52907', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Purchase Search');
            await commissary.switchToPurchaseSearch();
            await commissary.purchaseSearch.clickAddNew();
            await commissary.switchToPurchase();
            await commissary.purchase.enterAtFirstName();
            await names.module.switchToNameSearchHelpWindow();
            await names.nameSearchHelpWindow.CloseScreen();
            await commissary.switchToPurchase();
            await commissary.purchase.enterAtOfficer();
            await commissary.purchase.tabOutOrderedDateAndTime();
            await commissary.purchase.enterAtFacilityStock();
            await commissary.purchase.enterOrderQuantity();
            await commissary.purchase.clickAdd();
            await commissary.purchase.verify6020InvalidNameIDAcknowledgePopup();
            await commissary.switchToPurchase();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Purchase')
            await commissary.switchToPurchase();
        });
    });

    // Automated By : - chandrasekar.v on 5/26/2025
    // Sprint :- : Quarter 2 : Sprint 5  
    // Type of Test case : - Defect 2025
    test('CRM186687_CommissaryInmateDetailsAccountHistoryTabAutomationReportedIssue_58358', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '58358', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.clickAccountHistoryTab();
            await commissary.inmateDetails.accountHistory.selectAtDescriptionInGrid(1);
            await commissary.switchToBatchBillingEntry();
            await commissary.batchBillingEntry.clickPrintIcon();
            await home.module.switchToSelectReport();
            // objectIdentification.windowHandle.verifyWindowExists('Select Report')
            // objectIdentification.windowHandle.verifyWindowNotExists('1008 - page Error')
            await home.selectReport.CloseTheScreen();
            await commissary.switchToBatchBillingEntry();
            await commissary.batchBillingEntry.closeTheScreen();
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.clickAccountHistoryTab();
            await commissary.inmateDetails.accountHistory.selectAtDescriptionInGrid(2);
            await commissary.switchToDepositReleaseFunds();
            await commissary.depositReleaseFunds.clickPrintReceiptButton();
            await home.module.switchToSelectReport();
            // objectIdentification.windowHandle.verifyWindowExists('Select Report')
            // objectIdentification.windowHandle.verifyWindowNotExists('1008 - page Error')
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.SelectAtAccountType();
            await commissary.accountHistory.clickSearch();
            await commissary.accountHistory.selectAtDescriptionInGrid();
            await commissary.switchToBatchBillingEntry();
            await commissary.batchBillingEntry.clickPrintReceiptButton();
            await home.module.switchToSelectReport();
            // objectIdentification.windowHandle.verifyWindowExists('Select Report')
            // objectIdentification.windowHandle.verifyWindowNotExists('1008 - page Error')
            await commissary.switchToBatchBillingEntry();
        });
    });

    // Automated by Sarathkumar on 05/14/2025
    // Year : 2025 Quarter: 2 Sprint: 5
    // Type of Testcase - Defect CRM#185752
    test('CommissaryCanteenOrderSearchCategoryRestriction_58391', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '58391', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Category Restriction');
            await commissary.switchToCategoryRestriction();
            await commissary.categoryRestriction.clickSave();
            await commissary.categoryRestriction.verify7NoDataPresentAcknowledgePopup();
            await commissary.switchToCategoryRestriction();
            await loaderPage.navigateToScreen('Canteen Order Search');
            await commissary.switchToCanteenOrderSearch();
            await commissary.canteenOrderSearch.clickSearch();
            await commissary.canteenOrderSearch.selectAtNameInGrid();
            await commissary.switchToCanteenOrderEntry();
            await commissary.canteenOrderEntry.verifyLastAndFirstNameDisabled();
            await commissary.canteenOrderEntry.clickNameIDAndTabout();
            await commissary.canteenOrderEntry.verifyLastAndFirstNameDisabled();
            await commissary.switchToCanteenOrderSearch();
        });
    });

    // Automated by Sarathkumar on 05/21/2025
    // Year : 2025 Quarter: 2 Sprint: 5
    // Type of Testcase - Defect 
    test('CRM181828CommissaryBankReconciliationBankReconciliationWindowWhileDoubleClickInsideTheGridAbleToEditTheValue_55881', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '55881', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Bank Reconciliation');
            await commissary.switchToBankReconciliation();
            await commissary.bankReconciliation.clickSearchButton();
            await commissary.bankReconciliation.selectAtReconciliationInGrid();
            await commissary.switchToBankReconciliationWindow();
            await commissary.bankReconciliation.doubleClickDepositsAndCreditsInGrid();
            await commissary.bankReconciliation.verifyAtBankDepNbrInGrid();
        });
    });

    // Automated by Sarathkumar on 06/13/2025
    // Year : 2025 Quarter: 2 Sprint: 6 
    // Type of Testcase - Defect 
    // Updated By: Sarathkumar L on 11/19/2025 Testcase ID: 72461 Quarter 4 : Sprint 11 2025 
    test('CRM187351CommissaryBatchBillingSearch1008PageErrorOccurs_60282', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '60282', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Batch Billing Search');
            await commissary.switchToBatchBillingSearch();
            await commissary.batchBillingSearch.clickAddNew();
            await commissary.switchToBatchBillingEntry();
            await commissary.batchBillingEntry.selectAtFeeType();
            await commissary.batchBillingEntry.tabOutDateAndTime();
            await commissary.batchBillingEntry.enterAtAmount();
            await commissary.batchBillingEntry.enterAtSPNName();
            await commissary.batchBillingEntry.clickAddButton();
            // below lines newly added till update button 
            await commissary.batchBillingEntry.selectAtSPNInGrid(); // updated
            await commissary.batchBillingEntry.clickSaveIcon(); // updated
            await commissary.batchBillingEntry.verify1056UpdatedDataExistsAcknowledgePopup(); // updated
            await commissary.switchToBatchBillingEntry();
            await commissary.batchBillingEntry.clickUpdateButton(); // updated
            await commissary.batchBillingEntry.saveScreen();
            await commissary.switchToBatchBillingEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.batchBillingEntry.verify1008ErrorPopUpIsNotArised();
            await commissary.switchToBatchBillingEntry();
            await commissary.batchBillingEntry.verifySaveIconIsDisabled();
            await commissary.batchBillingEntry.verifySaveAndCloseIconIsDisabled();
            await commissary.batchBillingEntry.verifyAddButtonIsDisabled();
        });
    });

    // Automated by Sarathkumar on 06/13/2025
    // Year : 2025 Quarter: 2 Sprint: 6
    // Type of Testcase - Defect 
    test('CRM181490CommissaryAccountHistoryClickCreateNewAccountAccountMasterWindowAccountTypeAsInmateAccountEnterMandatoryFieldsClickSave_60346', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '60346', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.clickCreateNewAccount();
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.selectAtAccountType();
            await commissary.accountMaster.enterAtOpeningBalance();
            await commissary.accountMaster.saveScreen();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.clickInactiveCheckbox();
            await commissary.switchToFreezeAccount();
            await commissary.freezeAccount.enterAtComments();
            await commissary.freezeAccount.saveScreen();
            await commissary.freezeAccount.verifyAccountDeactivatedSuccessfullyAcknowledgeMessage();
            await commissary.switchToFreezeAccount();
            await commissary.freezeAccount.closeScreen();
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.selectAtAccountType();
            await commissary.accountMaster.verifyInactiveDateAsCurrentDate();
        });
    });
});

test.describe('Q2S6CommissaryDefect2025', () => {
    // Automated by Sarathkumar on 06/13/2025
    // Year : 2025 Quarter: 2 Sprint: 6 
    // Type of Testcase - Defect 
    test('CRM188685CommissaryCashDrawerSelectDrawerSelectPFAndClickClose1006ValidationFailedOccurs_60278', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '60278', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Cash Drawer');
            await commissary.switchToCashDrawer();
            await commissary.cashDrawer.selectAtDrawer();
            await commissary.cashDrawer.enterAtPF();
            await commissary.cashDrawer.clickCloseButton();
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Cash Drawer')
            await commissary.switchToCashDrawer();
        });
    });

    // Automated by Sarathkumar on 06/16/2025
    // Year : 2025 Quarter: 2 Sprint: 6
    // Type of Testcase - Defect 
    test('CRM187349CommissaryCashSearchBuildIssueOccurs_60482', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '60482', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Cash Search');
            await commissary.switchToCashSearch();
            await commissary.cashSearch.clickSearch();
            await commissary.cashSearch.selectAtDrawer();
            await commissary.cashSearch.doubleClickAndVerifyRowCellsNotEditableInGrid();
            // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
            await commissary.switchToCashSearch();
            await commissary.cashSearch.clickAddNew();
            await commissary.cashSearch.verifyCashDrawerWindowExists();
            await commissary.switchToCashDrawerScreen();
            await commissary.cashDrawer.closeScreen();
            await commissary.switchToCashSearch();
            await commissary.cashSearch.clickSearch();
            await commissary.cashSearch.verifyAtBookingNoBySPNInGrid();
        });
    });

    // Automated by Sarathkumar on 06/25/2025
    // Year : 2025 Quarter: 2 Sprint: 6
    // Type of Testcase - Defect 
    test('CRM167168BankDepositSearchAfterCreatingANewEntryThenClickOnIsIncludeCheckboxJSErrorOccurs_58390', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '58390', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Bank Deposit Search');
            await commissary.switchToBankDepositSearch();
            await commissary.bankDepositSearch.clickAddNew();
            await commissary.switchToBankDeposit();
            await commissary.bankDeposit.verifyAtIsIncludedCheckboxNotCheckedByDrawerInGrid();
            await commissary.bankDeposit.clickResetIcon();
            await commissary.bankDeposit.verifyAtIsIncludedCheckboxNotCheckedByDrawerInGrid();
            await commissary.bankDeposit.selectIsIncludedCheckboxInGrid();
            await commissary.bankDeposit.clickPrintIcon();
            await home.selectReport.verifySelectReportWindowIsExist();
            await home.module.switchToSelectReport();
            await home.selectReport.CloseTheScreen();
            await commissary.switchToBankDeposit();
            await commissary.bankDeposit.verifyAtIsIncludedCheckboxIsCheckedByDrawerInGrid();
            await commissary.bankDeposit.saveScreen();
            await commissary.switchToBankDeposit();
            // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge()
            await commissary.switchToBankDeposit();
        });
    });

    // Automated by Sarathkumar on 08/11/2025
    // Year : 2025 Quarter: 3 Sprint: 8
    // Type of Testcase - Defect 
    test('CRM176062ToVerifyTheVendorSearchVendorEntryNotesTabEnterAllTheMandatoryDetailsWithoutClickOnAddButtonClickOnSaveExternallyOrInternallyItAllow_65593', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '65593', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Vendor Search');
            await commissary.switchToVendorSearch();
            await commissary.vendorSearch.clickAddNew();
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.enterAtNameID();
            await commissary.vendorEntry.save();
            await commissary.switchToVendorEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.vendorEntry.switchToNotesTab();
            await commissary.vendorEntry.notesTab.tabOutDateAndTime();
            await commissary.vendorEntry.notesTab.enterAtNotes();
            await commissary.vendorEntry.notesTab.clickSaveInternal();
            await commissary.vendorEntry.notesTab.verify7NoDataPresentAcknowledgePopupMessage(); // created
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.clickSave();
            await commissary.vendorEntry.verify1056UpdatedDataExistsInTheFieldsAcknowledgePopupMessage(); // created
            await commissary.vendorEntry.switchToNotesTab();
            await commissary.vendorEntry.notesTab.clickAddButton();
            await commissary.switchToVendorEntry();
            await commissary.vendorEntry.save();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
        });
    });

    // Automated by Sarathkumar on 08/11/2025
    // Year : 2025 Quarter: 3 Sprint: 8
    // Type of Testcase - Defect 
    test('CRM174085InmateDetailsAfterCreatingANewEntryClickOnSave1003UpdateSuccessfulBottomMessageNotReflected_65636', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '65636', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.switchToDepositReleaseFundsTab();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtAction(); // created
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtDrawer();
            await commissary.inmateDetails.depositReleaseFundsTab.tabOutDateTime();
            await commissary.inmateDetails.depositReleaseFundsTab.enterAtOfficer();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtPaymentMethod();
            await commissary.inmateDetails.depositReleaseFundsTab.selectAtMedia();
            await commissary.inmateDetails.depositReleaseFundsTab.enterAtAmount();
            await commissary.inmateDetails.depositReleaseFundsTab.clicksave();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.saveScreen();
            await commissary.inmateDetails.verify1003UpdateSuccessfulAcknowledgePopupMessage(); // created
            await commissary.switchToInmateDetails();
        });
    });

    // Automated by Sarathkumar on 08/18/2025
    // Year : 2025 Quarter: 3 Sprint: 8
    // Type of Testcase - Defect 
    // Updated By: Sarathkumar L on 11/19/2025 Testcase ID: 72465 Quarter 4 : Sprint 11 2025 
    test('CRM167877ToVerifyTheCommissaryCanteenOrderTabOutQuantityIssue_65904', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '65904', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Canteen Order Search');
            await commissary.switchToCanteenOrderSearch();
            await commissary.canteenOrderSearch.clickAddNew();
            await commissary.switchToCanteenOrderEntry();
            // below lines updated till switch canteen order entry
            await commissary.canteenOrderEntry.clickSaveIcon(); // updated
            await commissary.canteenOrderEntry.verifyNoDataPresentAcknowledgePopupMessage(); // updated 
            await commissary.switchToCanteenOrderEntry(); // updated

            await commissary.canteenOrderEntry.enterAtSPN();
            await commissary.canteenOrderEntry.enterAtFacilityStockCode();
            await commissary.canteenOrderEntry.verifyQuantityFieldIsEnabled(); // created
            await commissary.canteenOrderEntry.enterAtQuantity();
            await commissary.canteenOrderEntry.verifyAtQuantity(); // created 
            await commissary.canteenOrderEntry.clickAdd();
            await commissary.canteenOrderEntry.verify32532HygieneOrderExceedsDollarLimitConfirmPopup();
            await commissary.canteenOrderEntry.verify32504OrderExceedsAmtConfirmPopup();
            await commissary.switchToCanteenOrderEntry();
            await commissary.canteenOrderEntry.verifyAtQualityInGrid(); // created
            await commissary.canteenOrderEntry.saveScreen();
            await commissary.switchToCanteenOrderEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.switchToCanteenOrderEntry();
            await commissary.canteenOrderEntry.verifyAtQualityInGrid(); // created
        });
    });

    // Automated by Hemamalini V on 07/30/2025, Type: Defect, CRM: 184293, Sprint: Q3 Sprint 7 2025 
    test('VerifyTimeUpdatedProperlyWhileInactiveInItemEntryScreen_62754', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '62754', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Item Search');
            await commissary.switchToItemSearch();
            await commissary.itemSearch.clickSearch();
            await commissary.itemSearch.selectAtItemNameInGrid();
            await commissary.switchToItemEntry();
            await commissary.itemEntry.clickInactiveChkBox();
            await commissary.itemEntry.verifyInactiveDateTime();
            await commissary.itemEntry.saveNClose();
            // objectIdentification.windowHandle.phoenixMainWindow()
            await commissary.switchToItemSearch();
            await commissary.itemSearch.selectRandomRecord();
            await commissary.switchToItemEntry();
            await commissary.itemEntry.verifyInactiveChkboxIsUnchecked();
            await commissary.itemEntry.CloseTheScreen();
            await commissary.switchToItemSearch();
            await commissary.itemSearch.clickIncludeInactiveChkbox();
            await commissary.itemSearch.clickSearch();
            await commissary.itemSearch.selectRandomRecord();
            await commissary.switchToItemEntry();
            await commissary.itemEntry.verifyInactiveChkboxIschecked();
        });
    });

    // Automated by Hemamalini V on 08/01/2025, Type: Defect, CRM: 162157, Sprint: Q3 Sprint 8 2025 
    test('VerificationofNoBlueScreenErrorWhileclickingDataWithoutOfficerFromGrid_63640', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '63640', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Drawer Permission');
            await commissary.switchToDrawerPermission();
            await commissary.drawerPermission.selectAtDrawer();
            await commissary.drawerPermission.selectAtRoles();
            await commissary.drawerPermission.clickAdd();
            await commissary.drawerPermission.selectAtDrawerInGrid();
            await commissary.drawerPermission.clickSave();
            await commissary.drawerPermission.verify1056UpdatedDataExistsAcknowledgePopup();
            await commissary.switchToDrawerPermission();
            await commissary.drawerPermission.clickUpdateButton();
            await commissary.drawerPermission.save();
            // objectIdentification.manualIdentify.verifyUpdateSuccessFulAcknowledge()
            await commissary.switchToDrawerPermission();
            await commissary.drawerPermission.verifyAtDrawerInGrid();
            await commissary.drawerPermission.verifyAtRolesInGrid();
        });
    });

    // Automated by Hemamalini V on 08/08/2025, Type: Defect, CRM: 154782, Sprint: Q3 Sprint 8 2025
    test('VerifyingNoRecordFoundPopupWhenNoRecordIsFound_63635', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '63635', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Vendor Search');
            await commissary.switchToVendorSearch();
            await commissary.vendorSearch.enterAtVendorName();
            await commissary.vendorSearch.clickSearch();
            await commissary.vendorSearch.verify1011NoRecordFound();
            // objectIdentification.windowHandle.switchToMainWindow()
        });
    });

    // Automated by Hemamalini V on 08/14/2025, Type: Defect, CRM: 161019, Sprint: Q3 Sprint 8 2025
    test('ToVerifySaveAndSaveNCloseIconsAreDiabledInAccountHistory_63606', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '63606', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Account History');
            await commissary.switchToAccountHistory();
            await commissary.accountHistory.SelectAtAccountType();
            await commissary.accountHistory.clickSearch();
            await commissary.accountHistory.selectRandomRecord();
            await commissary.switchToAccountMaster();
            await commissary.accountMaster.verifySaveIconIsDisabled();
            await commissary.accountMaster.verifySaveNCloseIconIsDisabled();
        });
    });

    // Automated by Sarathkumar on 12/16/2025
    // Year : 2025 Quarter: 4 Sprint: 12
    // Type of Testcase - Defect 
    test('CRM175568ToverifytheCommissaryInmateDetailsRestrictionTabSelectTheDataFromTheGridWhileClickingTheUpdateButtonUpdateButtonIsNotWorking_74299', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '74299', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Inmate Details');
            await commissary.switchToInmateDetails();
            await commissary.inmateDetails.enterAtSPN();
            await commissary.inmateDetails.switchToRestrictionsTab(); // created
            await commissary.inmateDetails.restrictionsTab.selectAtRestriction(1); // created	
            await commissary.inmateDetails.restrictionsTab.enterAtComments(1); // created
            await commissary.inmateDetails.restrictionsTab.clickAddButton(); // created
            await commissary.inmateDetails.restrictionsTab.verifyAtRestrictionsInGrid(1); // created
            await commissary.inmateDetails.restrictionsTab.selectAtRestrictionsInGrid(1); // created
            await commissary.inmateDetails.restrictionsTab.selectAtRestriction(2); // created		
            await commissary.inmateDetails.restrictionsTab.enterAtComments(2); // created
            await commissary.inmateDetails.restrictionsTab.clickUpdateButton(); // created
            await commissary.inmateDetails.restrictionsTab.verifyAtRestrictionsInGrid(2); // created
            await commissary.inmateDetails.restrictionsTab.verifyAtCommentsInGrid(2); // created
            // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Inmate Details')
        });
    });
});

test.describe('Q3CommissaryDefect2025', () => {
    // Automated by Sarathkumar on 12/01/2025
    // Year : 2025 Quarter: 4 Sprint: 11
    // Type of Testcase - Defect
    test('CRM187397CommissaryItemSearchClickAddNewItemEntryEnterMandatoryFieldsClickInactiveCheckBoxInactiveDataAndTimeIsBindedWrongly_72957', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '72957', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Commissary');
            await loaderPage.navigateToScreen('Item Search');
            await commissary.switchToItemSearch();
            await commissary.itemSearch.clickAddNew();
            await commissary.switchToItemEntry();
            await commissary.itemEntry.enterAtFacilityStock();
            await commissary.itemEntry.enterAtVendorItemStockCode();
            await commissary.itemEntry.enterAtItemName();
            await commissary.itemEntry.selectAtCategory();
            await commissary.itemEntry.selectAtContainerType();
            await commissary.itemEntry.enterAtContainerQuantity();
            await commissary.itemEntry.enterAtContainerCost();
            await commissary.itemEntry.enterAtCurrentItemCount();
            await commissary.itemEntry.clickInactiveChkBox();
            await commissary.itemEntry.verifyInactiveChkboxIschecked();
            await commissary.itemEntry.verifyInactiveDate(); // created
            await commissary.itemEntry.saveScreen(); // created
            await commissary.switchToItemEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.switchToItemEntry();
            await commissary.itemEntry.verifyInactiveDateIsDisplayed(); // created
            await commissary.itemEntry.saveScreen(); // created
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await commissary.switchToItemEntry();
            await commissary.itemEntry.saveNClose();
            await commissary.switchToItemSearch();
            await commissary.itemSearch.clickAddNew();
            await commissary.switchToItemEntry();
            await commissary.itemEntry.enterAtFacilityStock(1);
            await commissary.itemEntry.verify1019DuplicationOfDataFoundAcknowledgePopupNotArisingTwice(); // created
            await commissary.switchToItemEntry();
            await commissary.itemEntry.enterAtFacilityStock(2);
            await commissary.itemEntry.enterAtVendorItemStockCode();
            await commissary.itemEntry.enterAtItemName();
            await commissary.itemEntry.selectAtCategory();
            await commissary.itemEntry.selectAtContainerType();
            await commissary.itemEntry.enterAtContainerQuantity();
            await commissary.itemEntry.enterAtContainerCost();
            await commissary.itemEntry.enterAtCurrentItemCount();
            await commissary.itemEntry.saveScreen(); // created
            await commissary.switchToItemEntry();
            // objectIdentification.manualIdentify.verifyAdditionSuccessful()
            await commissary.switchToItemEntry();
            await commissary.itemEntry.saveNClose();
            await commissary.switchToItemSearch();
            await commissary.itemSearch.clickPrintIcon(); // created
            // objectIdentification.windowHandle.verifyWindowExists('Select Report')
            await commissary.switchToItemSearch();
        });
    });
});

test.describe('Ungrouped', () => {
    // Automated by: Ranjith Kumar V K
    // Q4 Sprint 11 2025
    // Date: 25/11/2025 Type of testcase: Enhancement
    test('CRM119654ToVerifyTheInmateSignatureLine_72730', async ({ loginPage, loaderPage, popupPage, commissary, home, settings, names, activity, facilityManagement, admission }) => {
        await withTestContext(testData, '72730', async () => {
            await loginPage.loginScreen.Logon();
            await loaderPage.navigateToModule('Admission');
            await loaderPage.navigateToScreen('Inmate Search');
            await admission.switchToInmateSearch();
            await admission.inmateSearchScreen.enterAtSPN(1);
            await admission.inmateSearchScreen.SelectAtBookingStatus();
            await admission.inmateSearchScreen.Search();
            await admission.inmateSearchScreen.clickCheckBoxBySPNInGrid();
            await admission.inmateSearchScreen.clickRelease();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToMainTab();
            await facilityManagement.releaseEntry.releaseEntryMainTab.SelectAtReleaseType();
            await facilityManagement.releaseEntry.save();
            await facilityManagement.SwitchToInmateReleaseEntry();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.ClickBookingButton();
            await admission.switchToAdmissionEntry();
            await admission.admissionEntry.CloseAdmissionEntry();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.ClickPropertyButton();
            await facilityManagement.SwitchToInitialInmatepropertyEntry();
            await facilityManagement.initialInmateProperty.closeScreen();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.ClickScheduleButton();
            await facilityManagement.SwitchToInmateMovementEntry();
            await facilityManagement.inmateMovementEntry.close();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.ClickLibrayButton();
            await facilityManagement.SwitchToLibrarySearchWindow();
            await facilityManagement.librarySearch.closeScreen();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.ClickNotificationButton();
            await admission.switchToAdmissionEntry();
            await admission.admissionEntry.CloseAdmissionEntry();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.clickCommissaryButton();
            await commissary.switchToInmateDetailsWindow();
            await commissary.inmateDetails.close(); //
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.clickPendingOrders();
            await commissary.switchToPendingDelivery();
            await commissary.pendingDelivery.close(); //
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.enterAtReview();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.enterAtReviewDateAndTime();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.save();
            await facilityManagement.SwitchToInmateReleaseEntry();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.Enter2stReview();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.save();
            await facilityManagement.SwitchToInmateReleaseEntry();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.EnterFinalReview();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.save();
            await facilityManagement.SwitchToInmateReleaseEntry();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.verifyInmateSignatureIsEnabled();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.ClickSignOutButton();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.clickNoandVerify30652popup(); //
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.clickInmateSignature();
            await home.module.switchToSignatureScreen();
            await home.signatureScreen.clickTypeButton();
            await home.signatureScreen.enterAtSignTextArea('Automation');
            await home.signatureScreen.enterAtName();
            await home.signatureScreen.clickApplyButton();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.save();
            await facilityManagement.SwitchToInmateReleaseEntry();
            // objectIdentification.manualIdentify.verifyUpdateSuccessful()
            await facilityManagement.releaseEntry.NavigateToReleaseTab();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.verifyAtSignature();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.ClickSignOutButton();
            await facilityManagement.releaseEntry.releaseEntryReleaseTab.clickYesIn30652popup(); //
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.save();
            await facilityManagement.SwitchToInmateReleaseEntry();
            await facilityManagement.releaseEntry.verifyAtStatusLabel();
        });
    });
});