// @ts-nocheck
import { test, expect, withTestContext } from '../../src/fixtures/test-fixtures';

test.describe('Accounting Functional 1 @AccountingFunctional1', () => {
  test.beforeEach(async ({ page, appConfig, loginPage, loaderPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('InvoiceTypeEntry_110299', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '110299', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Type');
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.clickAddNew();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.clickSave();
    await accounting.invoiceTypeEntry.verify8EnterMandatoryDataAcknowledgeMessage();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceTypeEntry.selectDisbursementAccount(testData.accounting('DisbursementAccount'));
    await accounting.invoiceTypeEntry.enterAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceTypeEntry.enterAtDescription(testData.accounting('Description'));
    await accounting.invoiceTypeEntry.selectAtInvoiceTemplate(testData.accounting('InvoiceTemplate'));
    await accounting.invoiceTypeEntry.enterAtSendFirstNoticeIn(testData.accounting('SendFirstNoticeIn'));
    await accounting.invoiceTypeEntry.selectTemplateAsInvoiceDue(testData.accounting('InvoiceDueTemplate'));
    await accounting.invoiceTypeEntry.enterAtSendSubsequentNoticeInEvery(testData.accounting('SendSubsequentNoticeInEvery'));
    await accounting.invoiceTypeEntry.selectTemplateAsInvoiceFinalNotice(testData.accounting('InvoiceFinalNoticeTemplate'));
    await accounting.invoiceTypeEntry.save();
    await accounting.invoiceTypeEntry.verifyAdditionSuccessfulMessage();
    await accounting.invoiceTypeEntry.clickAddNewItemCodeButton();
    await accounting.module.switchToItemCodeEntry();
    await accounting.itemCodeEntry.close();
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.verifyExpandCollapseCheckboxChecked();
    await accounting.invoiceType.verifyAtInvoiceType(testData.accounting('InvoiceType'));
  });

  test('InvoiceTypeEntry_110300', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '110300', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Type');
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.selectRowByInvoiceType(testData.accounting('InvoiceType'));
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.clickAddNewItemCodeButton();
    await accounting.module.switchToItemCodeEntry();
    await accounting.itemCodeEntry.verifyAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.itemCodeEntry.verifyAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.itemCodeEntry.enterAtItemCode(testData.accounting('ItemCode'));
    await accounting.itemCodeEntry.enterAtDescription(testData.accounting('Description'));
    await accounting.itemCodeEntry.saveNClose();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.itemCodeEntry.save();
    await accounting.invoiceTypeEntry.verifyAtItemCodeInGrid(testData.accounting('ItemCode'));
    await accounting.invoiceTypeEntry.verifyAtDescriptionInGrid(testData.accounting('Description'));
  });

  test('InvoiceTypeEntry_110301', async ({ testData, loaderPage, accounting, settings }) => {
    withTestContext(testData, '110301', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Type');
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.clickAddNew();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.verifyInvoiceClassDisplayedAsManualInvoice();
    await accounting.invoiceTypeEntry.verifyInvoiceClassDisplayedAsAlarms();
    await accounting.invoiceTypeEntry.selectAdd2990InInvoiceClassComboBox();
    // Settings shared codes interaction
    await settings.module.switchToSharedCodes();
    await settings.sharedCodes.clickAddNewButton();
    await settings.sharedCodes.enterAtPopUpCodeValue(testData.accounting('PopUpCodeValue'));
    await settings.sharedCodes.enterAtPopUpDescription(testData.accounting('PopUpDescription'));
    await settings.sharedCodes.clickCodeAddButton();
    await settings.sharedCodes.closeScreen();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.verifyInvoiceClassDisplayedAtDescription(testData.accounting('PopUpDescription'));
  });

  test('CreateInvoiceEntry_110275', async ({ testData, loaderPage, accounting, geo, names }) => {
    withTestContext(testData, '110275', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Entry');
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceEntry.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceEntry.enterAtBillToAccountNameID(testData.accounting('BillToAccountNameID'));
    await accounting.invoiceEntry.verifyAtAddress(testData.accounting('Address'));
    await accounting.invoiceEntry.clickAddANewContact();
    // Contact Entry interaction
    await geo.module.switchToContactEntry();
    await geo.contactEntryScreen.selectAtNameRelation(testData.accounting('NameRelation'));
    await geo.contactEntryScreen.enterAndSelectAtATypeName(testData.accounting('ATypeName'));
    await names.module.switchToNameSearchHelpWindow();
    await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName();
    await geo.module.switchToContactEntry();
    await geo.contactEntryScreen.selectPhoneType1AsHome();
    await geo.contactEntryScreen.enterAtPhoneNumber1(testData.accounting('PhoneNumber1'));
    await geo.contactEntryScreen.saveCloseScreen();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickSaveButton();
    await accounting.invoiceEntry.verify21811EnterTheInvoiceDateAckMsg();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.tabOutInvoiceDate();
    await accounting.invoiceEntry.verifyInvoiceDateAsCurrentDate();
    await accounting.invoiceEntry.verifyDueDateAsNextMonthCurrentDate();
    await accounting.invoiceEntry.verifyOriginalPaymentDueDateAsNextMonthCurrentDate();
    await accounting.invoiceEntry.invoiceDetailsTab.selectAtItemCode(testData.accounting('ItemCode'));
    await accounting.invoiceEntry.invoiceDetailsTab.verifyQualityAs1();
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtRate(testData.accounting('Rate'));
    await accounting.invoiceEntry.invoiceDetailsTab.clickAddButton();
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtDescription(0, testData.accounting('Description'));
    await accounting.invoiceEntry.saveScreen();
    await accounting.invoiceEntry.verifyAdditionSuccessfulStatusMessage();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.selectAtBillingContact(testData.accounting('BillingContact'));
    await accounting.invoiceEntry.verifyAtPhoneType(testData.accounting('PhoneType'));
    await accounting.invoiceEntry.verifyAtPhoneNumber(testData.accounting('PhoneNumber1'));
    await accounting.invoiceEntry.saveScreen();
    await accounting.invoiceEntry.verifyUpdateSuccessfulStatusMessage();
    await accounting.invoiceEntry.verifyReceivePaymentIconDisplayed();
    await accounting.invoiceEntry.verifyDeleteIconDisplayed();
    await accounting.invoiceEntry.verifyEmailInvoiceButtonEnabled();
    await accounting.invoiceEntry.verifyPrintInvoiceButtonEnabled();
    await accounting.invoiceEntry.verifyInvoiceTemplateIsDisplayed();
    await accounting.invoiceEntry.verifyVoidInvoiceButtonEnabled();
  });

  test('InvoiceTypeEntry_276779', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '276779', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Type');
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.clickAddNew();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceTypeEntry.selectDisbursementAccount(testData.accounting('DisbursementAccount'));
    await accounting.invoiceTypeEntry.enterAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceTypeEntry.enterAtDescription(testData.accounting('Description'));
    await accounting.invoiceTypeEntry.selectAtInvoiceTemplate(testData.accounting('InvoiceTemplate'));
    await accounting.invoiceTypeEntry.clickAddNewItemCodeButton();
    await accounting.invoiceTypeEntry.verify21813SaveAcknowledge();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.save();
    await accounting.invoiceTypeEntry.verifyAdditionSuccessfulMessage();
    await accounting.invoiceTypeEntry.clickAddNewItemCodeButton();
    await accounting.module.switchToItemCodeEntry();
    await accounting.itemCodeEntry.verifyAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.itemCodeEntry.verifyAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.itemCodeEntry.enterAtItemCode(testData.accounting('ItemCode'));
    await accounting.itemCodeEntry.enterAtDescription(testData.accounting('Description'));
    await accounting.itemCodeEntry.enterAtAmount(testData.accounting('Amount'));
    await accounting.itemCodeEntry.saveNClose();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.save();
    await accounting.invoiceTypeEntry.verifyAtItemCodeInGrid(testData.accounting('ItemCode'));
  });

  test('AddTransactionsHistory_110282', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '110282', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.invoiceSearch.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceSearch.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceSearch.enterAtAddress(testData.accounting('Address'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickTransactionsHistoryTab();
    await accounting.invoiceEntry.transactionHistoryTab.clickAddTransactionHistoryButton();
    await accounting.module.switchToTransactionAndAdjustment();
    await accounting.transactionAndAdjustment.verifyAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.transactionAndAdjustment.verifyDateOfActionAsCurrentDate();
    await accounting.transactionAndAdjustment.tabOutPFCode();
    await accounting.transactionAndAdjustment.verifyAtPFCode(testData.accounting('PFCode'));
    await accounting.transactionAndAdjustment.selectAtActionType(testData.accounting('ActionType'));
    await accounting.transactionAndAdjustment.enterAtAmount(testData.accounting('Amount'));
    await accounting.transactionAndAdjustment.enterTransactionNotes(testData.accounting('TransactionNotes'));
    await accounting.transactionAndAdjustment.saveNClose();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickTransactionsHistoryTab();
    await accounting.invoiceEntry.transactionHistoryTab.verifyAtActionTypeInGrid(1, testData.accounting('ActionType'));
    await accounting.invoiceEntry.transactionHistoryTab.verifyAtAdjustment(testData.accounting('Amount'));
  });

  test('DeleteItemCode_110217', async ({ testData, loaderPage, accounting, names }) => {
    withTestContext(testData, '110217', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceSearch.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceSearch.selectAtItemCode(1, testData.accounting('ItemCode'));
    await accounting.invoiceSearch.enterAtAddress(testData.accounting('Address'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.invoiceDetailsTab.deleteAtItemCodeInGrid(testData.accounting('ItemCode'));
    await accounting.invoiceEntry.invoiceDetailsTab.verify4DoYouWantToDeleteConfirmMsg();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.saveScreen();
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtItemCodeNotInGrid(testData.accounting('ItemCode'));
    await accounting.invoiceEntry.verifyAtTotalAmount(testData.accounting('TotalAmount'));
    await accounting.invoiceEntry.verifyAtInvoiceAmount(testData.accounting('InvoiceAmount'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.invoiceDetailsTab.deleteAtItemCode1InGrid(testData.accounting('ItemCode1'));
    await accounting.invoiceEntry.invoiceDetailsTab.verify4DoYouWantToDeleteConfirmMsg();
    await accounting.invoiceEntry.clickSaveButton();
    await accounting.invoiceEntry.verify21829ItemCodeDetailsMandatoryAckMsg();
    await accounting.module.switchToInvoiceEntry();
  });

  test('CreateMiscellaneousInvoiceEntry_110169', async ({ testData, loaderPage, accounting, names }) => {
    withTestContext(testData, '110169', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Entry');
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceEntry.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceEntry.enterAtBillToAccountLastName(testData.accounting('BillToAccountLastName'));
    await names.module.switchToNameSearchHelpWindow();
    await names.nameSearchHelpWindow.selectName();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.verifyAtAddress(testData.accounting('Address'));
    await accounting.invoiceEntry.tabOutInvoiceDate();
    await accounting.invoiceEntry.verifyInvoiceDateAsCurrentDate();
    await accounting.invoiceEntry.tabOutDueDate();
    await accounting.invoiceEntry.tabOutOriginalPaymentDueDate();
    await accounting.invoiceEntry.verifyOriginalPaymentDueDateAsNextMonthCurrentDate();
    await accounting.invoiceEntry.saveScreen();
    await accounting.invoiceEntry.verifyAdditionSuccessfulStatusMessage();
    await accounting.invoiceEntry.clickSaveButton();
    await accounting.invoiceEntry.verify21829ItemCodeDetailsMandatoryAckMsg();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickInvoiceDetailsTab();
    await accounting.invoiceEntry.invoiceDetailsTab.selectAtItemCode(testData.accounting('ItemCode'));
    await accounting.invoiceEntry.invoiceDetailsTab.verifyQualityAs1();
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtRate(testData.accounting('Rate'));
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtAmount(testData.accounting('Amount'));
    await accounting.invoiceEntry.invoiceDetailsTab.clearQuantity();
    await accounting.invoiceEntry.invoiceDetailsTab.enterAtQuantity(testData.accounting('Quantity'));
    await accounting.invoiceEntry.invoiceDetailsTab.tabOutRate();
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtRate(testData.accounting('Rate'));
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtAmount1(testData.accounting('Amount1'));
    await accounting.invoiceEntry.invoiceDetailsTab.clickAddButton();
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtItemCodeInGrid(1, testData.accounting('ItemCode'));
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtTotalAmount(testData.accounting('TotalAmount'));
    await accounting.invoiceEntry.verifyAtInvoiceAmount(testData.accounting('InvoiceAmount'));
    await accounting.invoiceEntry.saveScreen();
    await accounting.invoiceEntry.verifyUpdateSuccessfulStatusMessage();
  });

  test('DeleteInvoiceEntry_110297', async ({ testData, loaderPage, accounting, names }) => {
    withTestContext(testData, '110297', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.enterAtAccountLastName(testData.accounting('AccountLastName'));
    await names.module.switchToNameSearchHelpWindow();
    await names.nameSearchHelpWindow.selectName();
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.clickSearch();
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.selectRowByAtAccount(testData.accounting('Account'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickDeleteButton();
    await accounting.invoiceEntry.verify21827DoYouWantToDeleteInvoiceConfirmMsg();
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.clickBackButton();
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.verify1011NoRecordFoundAcknowledgeMessage();
    await accounting.module.switchToInvoiceSearch();
  });

  test('CreateItemCode_110322', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '110322', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Item Code');
    await accounting.module.switchToItemCode();
    await accounting.itemCode.verifyExpandCollapseCheckboxChecked();
    await accounting.itemCode.clickAddNewButton();
    await accounting.module.switchToItemCodeEntry();
    await accounting.itemCodeEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.itemCodeEntry.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.itemCodeEntry.enterAtItemCode(testData.accounting('ItemCode'));
    await accounting.itemCodeEntry.enterAtDescription(testData.accounting('Description'));
    await accounting.itemCodeEntry.enterAtConditionsNotes(testData.accounting('ConditionsNotes'));
    await accounting.itemCodeEntry.enterAtAmount(testData.accounting('Amount'));
    await accounting.itemCodeEntry.verifyDollarSymbol();
    await accounting.itemCodeEntry.saveNClose();
    await accounting.module.switchToItemCode();
    await accounting.itemCode.enterAtItemCode(testData.accounting('ItemCode'));
    await accounting.itemCode.clickSearchButton();
    await accounting.itemCode.verifyAtItemCodeInGrid(testData.accounting('ItemCode'));
  });
});

test.describe('Accounting Functional 2 @AccountingFunctional2', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('VerifyVoidInvoiceFunctionality_110207', async ({ testData, loaderPage, accounting, popupPage }) => {
    withTestContext(testData, '110207', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.invoiceSearch.clickInvoiceInfoIcon();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickVoidInvoiceButton();
    await popupPage.confirm.yes();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.verifyVoidStatus();
    await accounting.invoiceEntry.verifyVoidInvoiceButtonDisabled();
    await accounting.invoiceEntry.saveScreen();
    await accounting.invoiceEntry.verifyUpdateSuccessfulStatusMessage();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickTransactionsHistoryTab();
    await accounting.invoiceEntry.transactionHistoryTab.verifyVoidRowInGrid(1);
  });

  test('InactiveItemCode_159903', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '159903', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Item Code');
    await accounting.module.switchToItemCode();
    await accounting.itemCode.enterAtItemCode(testData.accounting('ItemCode'));
    await accounting.itemCode.enterAtDescription(testData.accounting('Description'));
    await accounting.itemCode.clickSearchButton();
    await accounting.itemCode.verifyAtItemCodeInGrid(testData.accounting('ItemCode'));
    await accounting.itemCode.verifyAtDescriptionInGrid(testData.accounting('Description'));
    await accounting.itemCode.selectRowByAtItemCode(testData.accounting('ItemCode'));
    await accounting.module.switchToItemCodeEntry();
    await accounting.itemCodeEntry.clickInactiveCheckbox();
    await accounting.itemCodeEntry.clickSaveButton();
    await accounting.itemCodeEntry.verify3DoYouWantToSavePopup();
    await accounting.module.switchToItemCode();
    await accounting.itemCode.clickSearchButton();
    await accounting.itemCode.verify6040NoRecordFoundMessage();
    await accounting.module.switchToItemCode();
    await accounting.itemCode.clickIncludeInactiveCheckbox();
    await accounting.itemCode.clickSearchButton();
    await accounting.itemCode.verifyAtItemCodeInGrid(testData.accounting('ItemCode'));
    await accounting.itemCode.verifyAtItemCodeAppearsGrayColor(testData.accounting('ItemCode'));
  });

  test('VerifyCashPayment_210379', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '210379', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Receive Payment');
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.verifyAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.receivePayment.verifyAtAccountBalance(testData.accounting('AccountBalance'));
    await accounting.receivePayment.verifyAtNameID(testData.accounting('NameID'));
    await accounting.receivePayment.invoicesTab.clickRowAtByInvoiceNoCheckBox(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.invoicesTab.enterAtPaymentAmountInGrid(testData.accounting('PaymentAmount'));
    await accounting.receivePayment.clickSave();
    await accounting.receivePayment.verify21815PleaseSelectPaymentMethodAckMsg();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.clickSave();
  });

  test('VerifyCreditCardPayment_210380', async ({ testData, loaderPage, accounting, home }) => {
    withTestContext(testData, '210380', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Receive Payment');
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.invoicesTab.clickRowAtByInvoiceNoCheckBox(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.invoicesTab.enterAtPaymentAmountInGrid(testData.accounting('PaymentAmount'));
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.clickSave();
    await accounting.receivePayment.verify8EnterMandatoryDataAckMsg();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtTransactionReference(testData.accounting('TransactionReference'));
    await accounting.receivePayment.clickSave();
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickPrintReceiptButton();
    // PDF report verification
    await home.module.switchToPnxReportSSRSPDFScreen();
    await home.pnxReportSSRSPDFScreen.closePnxReportSSRSPDFScreen();
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.closeScreen();
    await accounting.module.switchToReceivePayment();
  });

  test('VerifyCheckPayment_210390', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '210390', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Receive Payment');
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.tabDate();
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.enterAtCheckNo(testData.accounting('CheckNo'));
    await accounting.receivePayment.invoicesTab.clickSelectAllCheckbox();
    await accounting.receivePayment.invoicesTab.verifyAtPaymentInGrid(testData.accounting('Payment'));
    await accounting.receivePayment.invoicesTab.verifyAtApplied(testData.accounting('Applied'));
    await accounting.receivePayment.clickSave();
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickCloseButton();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.closeScreen();
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.enterAtInvoiceNoFromAndToFields(testData.accounting('InvoiceNo'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.verifyAtInvoiceNoAppearsGrayColor(testData.accounting('InvoiceNo'));
    await loaderPage.navigateToScreen('Payment Search');
    await accounting.module.switchToPaymentSearch();
    await accounting.paymentSearch.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.paymentSearch.clickSearchButton();
    await accounting.paymentSearch.verifyAtReferenceNoInGrid(0, testData.accounting('CheckNo'));
    await accounting.paymentSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.verifyAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.verifyAtCheckNo(testData.accounting('CheckNo'));
  });

  test('OverPaymentDue_210392', async ({ testData, loaderPage, accounting, home }) => {
    withTestContext(testData, '210392', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Receive Payment');
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.tabDate();
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.invoicesTab.clickSelectAllCheckbox();
    await accounting.receivePayment.invoicesTab.verifyApplyCheckboxChecked(0);
    await accounting.receivePayment.invoicesTab.verifyAtOverPayment(testData.accounting('OverPayment'));
    await accounting.receivePayment.invoicesTab.clickLeaveCreditUsedLaterRadioButton();
    await accounting.receivePayment.clickSave();
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickEmailReceiptButton();
    await home.module.switchToPnxCustomReportPDFScreen();
    await home.pnxCustomReportPDFScreen.closeScreen();
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickCloseButton();
    await accounting.module.switchToReceivePayment();
  });

  test('VoidPayment_210403', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '210403', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Payment Search');
    await accounting.module.switchToPaymentSearch();
    await accounting.paymentSearch.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.paymentSearch.clickSearchButton();
    await accounting.paymentSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.clickVoidPaymentButton();
    await accounting.receivePayment.verifyVoidPaymentConfMsg();
    await accounting.receivePayment.enterVoidPaymentAtReason(testData.accounting('Reason'));
    await accounting.receivePayment.clickVoidOKButton();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.verifyVoidAtReason(testData.accounting('Reason'));
    await accounting.receivePayment.verifyVoidReasonAppearsRedColor();
  });

  test('PastDueByCreditCard_210414', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '210414', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.clickOverDueCheckbox();
    await accounting.invoiceSearch.verifyUnpaidRadioButtonAsSelected();
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.verifyAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.invoiceEntry.verifyPastDueStatus();
    await accounting.invoiceEntry.clickReceivePaymentIcon();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.enterAtTransactionReference(testData.accounting('TransactionReference'));
    await accounting.receivePayment.invoicesTab.clickSelectAllCheckbox();
    await accounting.receivePayment.clickSave();
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickCloseButton();
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.clickBackButton();
    await accounting.invoiceSearch.clickResetButton();
    await accounting.invoiceSearch.enterAtInvoiceNoFromAndToFields(testData.accounting('InvoiceNo'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.verifyAtInvoiceNoAppearsGrayColor(testData.accounting('InvoiceNo'));
    await loaderPage.navigateToScreen('Payment Search');
    await accounting.module.switchToPaymentSearch();
    await accounting.paymentSearch.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.paymentSearch.clickSearchButton();
    await accounting.paymentSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.verifyAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.verifyAtTransactionReference(testData.accounting('TransactionReference'));
  });

  test('CRM81597VerifyPrintInInvoiceSearchAccounting_202598', async ({ testData, loaderPage, accounting, home }) => {
    withTestContext(testData, '202598', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceSearch.clickPrintButton();
    await home.module.switchToSelectReport();
    await home.selectReport.clickPrintBatchInQueueButton();
    await home.module.switchToPrintBatchScreen();
    await home.printBatchScreen.selectTwoRowsInGrid();
    await home.printBatchScreen.clickPrintBatchButton();
    await home.printBatchScreen.clickIndividualReportButton();
    await home.module.switchToPnxReportSSRSPDFScreen();
    await home.pnxReportSSRSPDFScreen.verifyContentInPDF('');
  });

  test('VerifyNegativeBalanceInInvoice_110298', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '110298', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.invoiceSearch.clickInvoiceInfoIcon();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickTransactionsHistoryTab();
    await accounting.invoiceEntry.transactionHistoryTab.clickAddTransactionHistoryButton();
    await accounting.module.switchToTransactionAndAdjustment();
    await accounting.transactionAndAdjustment.tabOutDateOfAction();
    await accounting.transactionAndAdjustment.tabOutPFCode();
    await accounting.transactionAndAdjustment.selectAtActionType(testData.accounting('ActionType'));
    await accounting.transactionAndAdjustment.enterAtAmount(testData.accounting('Amount'));
    await accounting.transactionAndAdjustment.enterTransactionNotes(testData.accounting('TransactionNotes'));
    await accounting.transactionAndAdjustment.saveScreen();
    // verifyAdditionSuccessful
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.transactionHistoryTab.verifyAtActionTypeInGrid(1, testData.accounting('ActionType'));
    await accounting.invoiceEntry.transactionHistoryTab.verifyAtCreditAmountDecreasedInGrid(1, testData.accounting('CreditAmount'));
    await accounting.invoiceEntry.transactionHistoryTab.verifyAtAdjustment(testData.accounting('Adjustment'));
  });
});

test.describe('Accounting Functional 3 @AccountingFunctional3', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('VerifyEmailTemplate_213733', async ({ testData, loaderPage, accounting, settings, home }) => {
    withTestContext(testData, '213733', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Type');
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.selectRowByInvoiceType(testData.accounting('InvoiceType'));
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.clickAttachReportTemplateButton();
    await settings.module.switchToFormRepositoryScreen();
    await settings.formRepositoryScreen.selectAtEmailTemplate(testData.accounting('EmailTemplate'));
    await settings.formRepositoryScreen.saveNClose();
    await loaderPage.navigateToScreen('Invoice Entry');
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceEntry.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceEntry.tabOutDueDate();
    await accounting.invoiceEntry.enterAtBillToAccountNameID(testData.accounting('BillToAccountNameID'));
    await accounting.invoiceEntry.tabOutInvoiceDate();
    await accounting.invoiceEntry.invoiceDetailsTab.selectAtItemCode(testData.accounting('ItemCode'));
    await accounting.invoiceEntry.invoiceDetailsTab.clickAddButton();
    await accounting.invoiceEntry.saveScreen();
    await accounting.invoiceEntry.clickEmailInvoiceButton();
    await home.module.switchToViewPrintHistoryScreen();
    await home.viewPrintHistory.verifyAtEmailTemplateText(testData.accounting('EmailTemplate'));
  });

  test('VerifyNoRecordFoundMessageInInvoiceSearch_216461', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '216461', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.enterAtAddress(testData.accounting('Address'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.verify1011NoRecordFoundAcknowledgeMessage();
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.clickResetButton();
    await accounting.invoiceSearch.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceSearch.enterAtAddress(testData.accounting('Address'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.verify1011NoRecordFoundAcknowledgeMessage();
    await accounting.module.switchToInvoiceSearch();
  });

  test('AccountingDefect_226226', async ({ testData, loaderPage, accounting, names }) => {
    withTestContext(testData, '226226', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Receive Payment');
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.receivePayment.enterAtAccountName(testData.accounting('AccountName'));
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.invoicesTab.clickSelectAllCheckbox();
    await accounting.receivePayment.saveScreen();
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickCloseButton();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.verifyAdditionSuccessfulMessage();
  });

  test('VerifyDetailBillingInvoiceClass_216463', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '216463', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.verifyAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceEntry.verifyAtDetailNo(testData.accounting('DetailNo'));
    await accounting.invoiceEntry.close();
    await loaderPage.navigateToScreen('Payment Search');
    await accounting.module.switchToPaymentSearch();
    await accounting.paymentSearch.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.paymentSearch.clickSearchButton();
    await accounting.paymentSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.verifyAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.receivePayment.invoicesTab.selectAtInvoiceNoInGrid(testData.accounting('InvoiceNo'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.verifyAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceEntry.verifyAtDetailNo(testData.accounting('DetailNo'));
  });

  test('VerifyPartialPaymentFromReceivePaymentScreen_243489', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '243489', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickReceivePaymentIcon();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.tabDate();
    await accounting.receivePayment.invoicesTab.clickSelectAllCheckbox();
    await accounting.receivePayment.clickSave();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.verify21821SelectOverPaymtAck();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.invoicesTab.clickLeaveCreditUsedLaterRadioButton();
    await accounting.receivePayment.saveScreen();
    await accounting.receivePayment.invoicesTab.verifyAtAccountBalanceAfterPayment(testData.accounting('AccountBalanceAfterPayment'));
  });

  test('DeleteInvoiceType_251401A', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '251401A', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Type');
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.selectRowByInvoiceType(testData.accounting('InvoiceType'));
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.clickDeleteIcon();
    await accounting.invoiceTypeEntry.verify4DoYouWantToDeleteConfirmMsg();
    await accounting.invoiceTypeEntry.verify21812InvoiceTypeCannotDeleteAckMsg();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.close();
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.verifyAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceType.selectRowByInvoiceType1(testData.accounting('InvoiceType1'));
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.clickDeleteIcon();
    await accounting.invoiceTypeEntry.verify4DoYouWantToDeleteConfirmMsg();
    await accounting.module.switchToInvoiceTypeScreen();
    await loaderPage.navigateToScreen('Invoice Entry');
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceEntry.verifyAtDeletedInvoiceType(testData.accounting('InvoiceType1'));
  });

  test('InactiveInvoiceType_259532A', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '259532A', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Type');
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.selectRowByInvoiceType(testData.accounting('InvoiceType'));
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.clickInactiveCheckbox();
    await accounting.invoiceTypeEntry.saveNClose();
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.clickIncludeInactive();
    await accounting.invoiceType.clickSearch();
    await accounting.invoiceType.verifyAtInvoiceTypeShowsGrayColor(testData.accounting('InvoiceType'));
    await accounting.invoiceType.selectRowByInvoiceType(testData.accounting('InvoiceType'));
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.clickInactiveCheckbox();
    await accounting.invoiceTypeEntry.saveNClose();
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.clickSearch();
    await accounting.invoiceType.verifyAtInvoiceTypeShowsBlackColor(testData.accounting('InvoiceType'));
  });

  test('verifyAccountNameShowingInPaymentSearchScreen_259715', async ({ testData, loaderPage, accounting, names }) => {
    withTestContext(testData, '259715', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Receive Payment');
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.receivePayment.enterAtLastName(testData.accounting('LastName'));
    await accounting.receivePayment.enterAtFirstName(testData.accounting('FirstName'));
    await names.module.switchToNameSearchHelpWindow();
    await names.nameSearchHelpWindow.selectNameByLastNameAndFirstName();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.selectRowCheckBoxByAtInvoiceNoInGrid(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.enterAtPaymentEditInGrid(testData.accounting('PaymentEdit'));
    await accounting.receivePayment.saveScreen();
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickPrintReceiptButton();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.clickSaveNClose();
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.enterAtInvoiceNoFromAndToFields(testData.accounting('InvoiceNo'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.verifyAtInvoiceNoInGrid(0, testData.accounting('InvoiceNo'));
  });

  test('UpdateItemCode_136914', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '136914', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.enterAtInvoiceNoFromAndToFields(testData.accounting('InvoiceNo'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.invoiceDetailsTab.selectRowByAtItemCode(testData.accounting('ItemCode'));
    await accounting.invoiceEntry.invoiceDetailsTab.clearRate();
    await accounting.invoiceEntry.invoiceDetailsTab.enterAtRate(testData.accounting('Rate'));
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtAmount(testData.accounting('Amount'));
    await accounting.invoiceEntry.invoiceDetailsTab.clickAddButton();
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtRateInGrid(0, testData.accounting('Rate'));
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtAmountInGrid(0, testData.accounting('Amount'));
    await accounting.invoiceEntry.invoiceDetailsTab.verifyAtTotalAmount(testData.accounting('TotalAmount'));
    await accounting.invoiceEntry.saveScreen();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.verifyAtInvoiceBalance(testData.accounting('InvoiceBalance'));
    await accounting.invoiceEntry.verifyUpdateSuccessfulStatusMessage();
    await accounting.invoiceEntry.clickTransactionsHistoryTab();
    await accounting.invoiceEntry.transactionHistoryTab.verifyActionAsCorrection(1);
  });

  test('verifyTheExpenseSearchGridValuesNotAllowsToEdit_288316', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '288316', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Expense Search');
    await accounting.module.switchToExpenseSearch();
    await accounting.expenseSearch.clickSearchButton();
    await accounting.expenseSearch.doubleClickRowByAtNameInGrid(testData.accounting('Name'));
    await accounting.expenseSearch.verifyExpenseEntryWindowOpened();
    await accounting.module.switchToExpenseEntry();
    await accounting.expenseEntry.saveNCloseScreen();
    await accounting.module.switchToExpenseEntry();
    await accounting.expenseEntry.saveNCloseScreen();
    await accounting.module.switchToExpenseSearch();
  });
});

test.describe('Accounting Entry Screen @AccountingEntryScreen', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('ExpenseEntrySmokeScreen', async ({ testData, loaderPage, accounting, popupPage }) => {
    withTestContext(testData, 'EEEntry', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Expense Search');
    await accounting.module.switchToExpenseSearch();
    await accounting.expenseSearch.clickAddNew();
    await popupPage.acknowledge.okIfWindowExist('After Add New');
    await accounting.module.switchToExpenseEntry();
    await accounting.expenseEntry.selectExpenseClass(testData.accounting('ExpenseClass'));
    await accounting.expenseEntry.selectCategory(testData.accounting('Category'));
    await accounting.expenseEntry.taboutPFAndVerifyBubbleIconIsDisplayed();
    await accounting.expenseEntry.switchToItemsTab();
    await accounting.expenseEntry.itemsTab.tabOutDate();
    await accounting.expenseEntry.itemsTab.selectExpenseItemCategory(testData.accounting('ExpenseItemCategory'));
    await accounting.expenseEntry.itemsTab.enterDescriptionAsTestAutomation();
    await accounting.expenseEntry.itemsTab.clickAddButton();
    await accounting.expenseEntry.itemsTab.verifyAtDescriptionInGrid(testData.accounting('ItemDescription'));
    await accounting.expenseEntry.save();
    await popupPage.acknowledge.okIfWindowExist('After Save');
    await accounting.expenseEntry.verifyAdditionSuccessfulMessage();
  });

  test('InvoiceEntrySmokeScripts', async ({ testData, loaderPage, accounting, popupPage }) => {
    withTestContext(testData, 'ISEntry', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.clickAddNewButton();
    await popupPage.acknowledge.okIfWindowExist('After Add New');
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceEntry.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceEntry.tabOutDueDate();
    await accounting.invoiceEntry.enterAtBillToAccountNameID(testData.accounting('BillToAccountNameID'));
    await accounting.invoiceEntry.tabOutInvoiceDate();
    await accounting.invoiceEntry.clickInvoiceDetailsTab();
    await accounting.invoiceEntry.invoiceDetailsTab.selectAtItemCode(testData.accounting('ItemCode'));
    await accounting.invoiceEntry.invoiceDetailsTab.enterAtQuantity(testData.accounting('Quantity'));
    await accounting.invoiceEntry.invoiceDetailsTab.enterAtRate(testData.accounting('Rate'));
    await accounting.invoiceEntry.invoiceDetailsTab.clickAddButton();
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.saveScreen();
    await popupPage.acknowledge.okIfWindowExist('After Save');
    await accounting.invoiceEntry.verifyAdditionSuccessfulStatusMessage();
  });

  test('ReceivePaymentSmokeScripts', async ({ testData, loaderPage, accounting, popupPage }) => {
    withTestContext(testData, 'RPEntry', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Payment Search');
    await accounting.module.switchToPaymentSearch();
    await accounting.paymentSearch.clickReceivePayment();
    await popupPage.acknowledge.okIfWindowExist('After click Receive Payment');
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.enterAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.selectPaymentMethodAsCash();
    await accounting.receivePayment.invoicesTab.clickRowByInvoiceNoCheckBox(testData.accounting('InvoiceNo'));
    await accounting.receivePayment.invoicesTab.enterAtPaymentAmountInGrid(testData.accounting('PaymentAmount'));
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.clickSave();
    await popupPage.acknowledge.okIfWindowExist('After Save');
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.verifyAdditionSuccessfulMessage();
  });

  test('invoiceTypeEntrySmokeScripts', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, 'ITEntry', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Type');
    await accounting.module.switchToInvoiceTypeScreen();
    await accounting.invoiceType.clickAddNew();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceTypeEntry.enterAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceTypeEntry.selectDisbursementAccount(testData.accounting('DisbursementAccount'));
    await accounting.invoiceTypeEntry.enterDescription(testData.accounting('Description'));
    await accounting.invoiceTypeEntry.selectAtInvoiceTemplate(testData.accounting('InvoiceTemplate'));
    await accounting.invoiceTypeEntry.save();
    await accounting.module.switchToInvoiceTypeEntry();
    await accounting.invoiceTypeEntry.verifyAdditionSuccessfulMessage();
  });

  test('ItemCodeEntry_ItmCdeEnt', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, 'ICEntry', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Item Code');
    await accounting.module.switchToItemCode();
    await accounting.itemCode.clickAddNewButton();
    await accounting.module.switchToItemCodeEntry();
    await accounting.itemCodeEntry.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.itemCodeEntry.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.itemCodeEntry.enterAtItemCode(testData.accounting('ItemCode'));
    await accounting.itemCodeEntry.enterAtDescription(testData.accounting('Description'));
    await accounting.itemCodeEntry.save();
    await accounting.module.switchToItemCodeEntry();
    await accounting.itemCodeEntry.verifyAdditionSuccessfulMessage();
  });
});

test.describe('Accounting Defect 2023 @2023AccountingDefect', () => {
  test('CRM_159071_ReceivePaymentScreenThrows1006_17780', async ({ page, appConfig, testData, loginPage, loaderPage, accounting }) => {
    withTestContext(testData, '17780', 'Accounting');

    await page.goto(appConfig.baseUrl);
    await loginPage.logonUsingTestContextOtherDB(
      testData.accounting('UserName'),
      testData.accounting('Password'),
      testData.accounting('Database')
    );
    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Invoice Search');
    await accounting.module.switchToInvoiceSearch();
    await accounting.invoiceSearch.selectAtInvoiceClass(testData.accounting('InvoiceClass'));
    await accounting.invoiceSearch.selectAtInvoiceType(testData.accounting('InvoiceType'));
    await accounting.invoiceSearch.clickSearch();
    await accounting.invoiceSearch.selectRowByAtInvoiceNo(testData.accounting('InvoiceNo'));
    await accounting.module.switchToInvoiceEntry();
    await accounting.invoiceEntry.clickReceivePaymentIcon();
    await accounting.module.switchToReceivePayment();
    await accounting.receivePayment.verifyAtJuris(testData.accounting('Juris'));
    await accounting.receivePayment.enterAtAmount(testData.accounting('Amount'));
    await accounting.receivePayment.selectAtPaymentMethod(testData.accounting('PaymentMethod'));
    await accounting.receivePayment.tabDate();
    await accounting.receivePayment.invoicesTab.clickSelectAllCheckbox();
    await accounting.receivePayment.saveScreen();
    // verifyAdditionSuccessful
    await accounting.module.switchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickCloseButton();
    await accounting.module.switchToReceivePayment();
  });
});

test.describe('Accounting Q4 Defect 2024 @Q4Defect2024', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('CRM187221ExpenseEntryApprovalTab_62696', async ({ testData, loaderPage, accounting }) => {
    withTestContext(testData, '62696', 'Accounting');

    await loaderPage.navigateToModule('Accounting');
    await loaderPage.navigateToScreen('Expense Search');
    await accounting.module.switchToExpenseSearch();
    await accounting.expenseSearch.clickAddNew();
    await accounting.module.switchToExpenseEntry();
    await accounting.expenseEntry.selectExpenseClass(testData.accounting('ExpenseClass'));
    await accounting.expenseEntry.selectCategory(testData.accounting('Category'));
    await accounting.expenseEntry.taboutPFAndVerifyBubbleIconIsDisplayed();
    await accounting.expenseEntry.switchToItemsTab();
    await accounting.expenseEntry.itemsTab.tabOutDate();
    await accounting.expenseEntry.itemsTab.selectAtExpenseItemCategory(1, testData.accounting('ExpenseItemCategory'));
    await accounting.expenseEntry.itemsTab.enterDescriptionAsTestAutomation();
    await accounting.expenseEntry.itemsTab.clickAddButton();
    await accounting.expenseEntry.itemsTab.verifyAtDescriptionInGrid(testData.accounting('ItemDescription'));
    await accounting.expenseEntry.itemsTab.verifyAtCategoryInGrid(1, testData.accounting('ExpenseItemCategory'));
    await accounting.expenseEntry.itemsTab.verifyCurrentDateInGrid();
    await accounting.module.switchToExpenseEntry();
    await accounting.expenseEntry.save();
    await accounting.expenseEntry.verifyAdditionSuccessful();
    await accounting.module.switchToExpenseEntry();
    await accounting.expenseEntry.verifyAtStatus(0);
    await accounting.expenseEntry.switchToApprovalTab();
    await accounting.expenseEntry.approvalTab.selectAtNewAction(1, testData.accounting('NewAction1'));
    await accounting.expenseEntry.approvalTab.taboutDateAndTime();
    await accounting.expenseEntry.approvalTab.saveInternal();
    await accounting.module.switchToExpenseEntry();
    await accounting.expenseEntry.switchToApprovalTab();
    await accounting.expenseEntry.approvalTab.verifyAtStatusInGrid(1, testData.accounting('Status1'));
    await accounting.module.switchToExpenseEntry();
    await accounting.expenseEntry.verifyAtStatus(1);
    await accounting.expenseEntry.switchToApprovalTab();
    await accounting.expenseEntry.approvalTab.verifyAtNewAction(2, testData.accounting('NewAction2'));
    await accounting.expenseEntry.approvalTab.verifyAtNewAction(3, testData.accounting('NewAction3'));
    await accounting.expenseEntry.approvalTab.verifyAtNewAction(4, testData.accounting('NewAction4'));
  });
});
