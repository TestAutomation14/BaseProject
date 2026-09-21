// @ts-nocheck
import { test, expect, withTestContext } from '../../src/fixtures/test-fixtures';

test.describe('Detail Work Functional @DetailWorkFunctional', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('DetailEntryFunctionality_189980', async ({ testData, loaderPage, detailWork }) => {
    withTestContext(testData, '189980', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.clickAddNew();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickSave();
    await detailWork.detailEntry.verifyDeailDateTimeAcknowledgeMessage();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.enterDateTimeDetailAsCurrentDateTime();
    await detailWork.detailEntry.enterAtExpectedDuration(testData.detailWork('ExpectedDuration'));
    await detailWork.detailEntry.selectAtTypeOfDetailWork(testData.detailWork('TypeOfDetailWork'));
    await detailWork.detailEntry.enterAtLocationOfDetail(testData.detailWork('LocationOfDetail'));
    await detailWork.detailEntry.clickHighRiskCheckBox();
    await detailWork.detailEntry.clickSupervisorRequiredCheckBox();
    await detailWork.detailEntry.enterAtNoOfOfficersRequested(testData.detailWork('NoOfOfficersRequested'));
    await detailWork.detailEntry.clickPriorityDetailYesRadiobutton();
    await detailWork.detailEntry.clickSave();
    await detailWork.detailEntry.verifyDateTimeRequestAcknowledgeMessage();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.tabDateTimeOfRequested();
    await detailWork.detailEntry.detailRequestedByTab.tabOfficerTakingRequest();
    await detailWork.detailEntry.detailRequestedByTab.enterAtBusinessNameID(testData.detailWork('BusinessNameID'));
    await detailWork.detailEntry.detailRequestedByTab.enterAtContactLastName(testData.detailWork('ContactLastName'));
    await detailWork.detailEntry.detailRequestedByTab.enterAtContactFirstName(testData.detailWork('ContactFirstName'));
    await detailWork.detailEntry.detailRequestedByTab.selectName();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickSave();
    await detailWork.detailEntry.verifyBillToaAccountAcknowledgeMessage();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickBillToTab();
    await detailWork.detailEntry.detailBillToTab.clickSamAsBusinessAccountCheckBox();
    await detailWork.detailEntry.detailBillToTab.verifyAtLastNameFirstName(testData.detailWork('LastNameFirstName'));
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.verifyStatusAsNotFilled();
    await detailWork.detailEntry.verifyCopyButtonEnabled();
    await detailWork.detailEntry.closeScreen();
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.verifyAtLocationUsingTypeOfDetail();
    await detailWork.detailSearch.verifyAtDurationUsingTypeOfDetail();
    await detailWork.detailSearch.verifyDateAsCurrentUsingTypeOfDetail();
    await detailWork.detailSearch.verifyRowColorAsRedUsingLocation();
  });

  test('DetailEntryStatusUpdateTabFunctionality_189981', async ({ testData, loaderPage, detailWork }) => {
    withTestContext(testData, '189981', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.enterAtDetailNo(testData.detailWork('DetailNo'));
    await detailWork.detailSearch.clickPriorityDetailNoRadioButton();
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.verifyAtDetailNo(0);
    await detailWork.detailSearch.verifyAtLocationUsingDetailNo();
    await detailWork.detailSearch.clickAtTypeOfDetailInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    const expectedDuration = await detailWork.detailEntry.getExpectedDuration();
    await detailWork.detailEntry.clickOfficersTab();
    await detailWork.detailEntry.detailOfficersTab.tabScheduledFrom();
    await detailWork.detailEntry.detailOfficersTab.tabScheduledTo();
    await detailWork.detailEntry.detailOfficersTab.verifyDuration(expectedDuration);
    await detailWork.detailEntry.detailOfficersTab.tabOfficerPF();
    await detailWork.detailEntry.detailOfficersTab.verifyHigherPriorityDetailAcknowledgeMessage();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickStatusUpdateTab();
    await detailWork.detailEntry.detailStatusUpdateTab.tabUpdateDateTime();
    await detailWork.detailEntry.detailStatusUpdateTab.tabUpdateBy();
    await detailWork.detailEntry.detailStatusUpdateTab.enterAtComments(testData.detailWork('Comments'));
    await detailWork.detailEntry.detailStatusUpdateTab.clickSaveButton();
    await detailWork.detailEntry.detailStatusUpdateTab.verifyAtCommentsInListGrid();
    await detailWork.detailEntry.detailStatusUpdateTab.verifyDateAsCurrentDateListGrid();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
  });

  test('DetailEntryOfficerTabFunctionality_189982', async ({ testData, loaderPage, detailWork }) => {
    withTestContext(testData, '189982', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.enterAtLocationOfDetail(testData.detailWork('LocationOfDetail'));
    await detailWork.detailSearch.clickNotFilledCheckbox();
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.verifyAtDetailNo(0);
    await detailWork.detailSearch.verifyAtLocationUsingDetailNo();
    await detailWork.detailSearch.clickAtTypeOfDetailInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    const expectedDuration = await detailWork.detailEntry.getExpectedDuration();
    await detailWork.detailEntry.clickOfficersTab();
    await detailWork.detailEntry.detailOfficersTab.tabScheduledFrom();
    await detailWork.detailEntry.detailOfficersTab.tabScheduledTo();
    await detailWork.detailEntry.detailOfficersTab.verifyDuration(expectedDuration);
    await detailWork.detailEntry.detailOfficersTab.clickOfficerPFLookup();
    await detailWork.module.switchToOfficerPFHelpSearch();
    await detailWork.officerPeckingOrderSearch.clickAtPFNoUsingCheckbox();
    await detailWork.officerPeckingOrderSearch.clickAddTheSelectedPF();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.detailOfficersTab.verifyAtOfficer(0);
    await detailWork.detailEntry.detailOfficersTab.clickReferredToPFLookup();
    await detailWork.module.switchToReferedToSearch();
    await detailWork.referedToSearch.clickAtFullNameInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.detailOfficersTab.verifyAtOfficer1(1);
    await detailWork.detailEntry.detailOfficersTab.clickAtOfficerInGrid();
    await detailWork.detailEntry.detailOfficersTab.verifyReferedToFieldDisabled();
    await detailWork.detailEntry.detailOfficersTab.tabDateFrom();
    await detailWork.detailEntry.detailOfficersTab.selectAtRadeCode(testData.detailWork('RateCode'));
    await detailWork.detailEntry.detailOfficersTab.enterAtAmountToPaid(testData.detailWork('AmountToPaid'));
    await detailWork.detailEntry.detailOfficersTab.enterAtAmountToBilled(testData.detailWork('AmountToBilled'));
    await detailWork.detailEntry.detailOfficersTab.clickAddButton();
    await detailWork.detailEntry.detailOfficersTab.verifyAtRateCode(0);
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.verifyStatusAsCompletedBilled();
    await detailWork.detailEntry.closeScreen();
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.verifyNoRecordFoundAcknowledgeMessage();
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.clickBack();
    await detailWork.detailSearch.clickReset();
    await detailWork.detailSearch.enterAtLocationOfDetail(testData.detailWork('LocationOfDetail'));
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.verifyRowColorAsBlueUsingLocation();
  });

  test('DetailEntryFeesTabFunctionality_189983', async ({ testData, loaderPage, detailWork, accounting }) => {
    withTestContext(testData, '189983', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.clickCompletedBilledCheckbox();
    await detailWork.detailSearch.selectAtTypeOfDetailWork(testData.detailWork('TypeOfDetailWork'));
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.verifyAtTypeOfDetailUsingDetailNo();
    await detailWork.detailSearch.verifyAtLocationUsingDetailNo();
    await detailWork.detailSearch.clickAtDetailNoInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickFeesTab();
    await detailWork.detailEntry.detailFeesTab.selectItemCode();
    await detailWork.detailEntry.detailFeesTab.enterConditionsNotes();
    await detailWork.detailEntry.detailFeesTab.clickPrintContionsNotesCheckbox();
    await detailWork.detailEntry.detailFeesTab.clickAddButton();
    await detailWork.detailEntry.detailFeesTab.selectItemCode1();
    await detailWork.detailEntry.detailFeesTab.enterConditionsNotes();
    await detailWork.detailEntry.detailFeesTab.clickAddButton();
    await detailWork.detailEntry.detailFeesTab.verifyAtItemCodeDescription(0);
    await detailWork.detailEntry.detailFeesTab.verifyPrintCheckboxesChecked(0);
    await detailWork.detailEntry.detailFeesTab.verifyAtItemCode1(1);
    await detailWork.detailEntry.detailFeesTab.saveTab();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickFeesTab();
    const balanceAmount = await detailWork.detailEntry.detailFeesTab.getBalanceAmount();
    await detailWork.detailEntry.detailFeesTab.clickReceivePaymentButton();
    await accounting.module.SwitchToReceivePayment();
    await accounting.receivePayment.enterAmount(balanceAmount);
    await accounting.receivePayment.selectPaymentMethodAsCash();
    await accounting.receivePayment.invoicesTab.ClickSelectAllCheckbox();
    await accounting.receivePayment.clickSave();
    await accounting.module.SwitchToReceivePaymentOption();
    await accounting.receivePaymentOption.clickCloseButton();
    await accounting.module.SwitchToReceivePayment();
    await accounting.receivePayment.CloseScreen();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickFeesTab();
    await detailWork.detailEntry.detailFeesTab.verifyBalanceInvoiceAmountAs0();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.verifyStatusAsCompletedBilled();
  });

  test('DetailEntryInvoiceTabFunctionality_189984', async ({ testData, loaderPage, detailWork, accounting }) => {
    withTestContext(testData, '189984', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.clickCompletedBilledCheckbox();
    await detailWork.detailSearch.selectAtTypeOfDetailWork(testData.detailWork('TypeOfDetailWork'));
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.verifyAtTypeOfDetailUsingDetailNo();
    await detailWork.detailSearch.verifyAtLocationUsingDetailNo();
    await detailWork.detailSearch.clickAtDetailNoInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickInvoiceTab();
    await detailWork.detailEntry.detailInvoiceTab.selectAtInvoiceType(testData.detailWork('InvoiceType'));
    await detailWork.detailEntry.detailInvoiceTab.clickSearch();
    await detailWork.detailEntry.detailInvoiceTab.verifyAtInvoiceTypeInGrid(0);
    await detailWork.detailEntry.detailInvoiceTab.clickAtInvoiceTypeInGrid();
    await accounting.module.SwitchToInvoiceEntry();
    await accounting.invoiceEntry.verifyAtInVoiceType(testData.detailWork('InvoiceType'));
    await accounting.invoiceEntry.close();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
  });

  test('CancelDetailEntryFunctionality_189985', async ({ testData, loaderPage, detailWork }) => {
    withTestContext(testData, '189985', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.enterAtDetailNo(testData.detailWork('DetailNo'));
    await detailWork.detailSearch.clickPriorityDetailNoRadioButton();
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.verifyAtDetailNo(0);
    await detailWork.detailSearch.verifyAtLocationUsingDetailNo();
    await detailWork.detailSearch.clickAtDetailNoInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickDetailCancelledCheckbox();
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.tabCancelledDateTime();
    await detailWork.detailEntry.detailRequestedByTab.tabBy();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.verifyStatusAsCancelled();
    await detailWork.detailEntry.closeScreen();
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.verifyStatusAsCancelledUsingDetailNo();
    await detailWork.detailSearch.verifyRowColorAsGrayUsingDetailNo();
  });

  test('verifyTheDurationFieldAndActualWorkedHoursFieldAreChangedIntoCustomFieldInDetailEntryScreen_277260', async ({ testData, loaderPage, detailWork, settings }) => {
    withTestContext(testData, '277260', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.clickAtDetailNoInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickOfficersTab();
    await detailWork.detailEntry.detailOfficersTab.verifyDurationLabelIsCustomField();
    await detailWork.detailEntry.detailOfficersTab.verifyActualWorkedHoursLabelIsCustomField();
    await detailWork.detailEntry.detailOfficersTab.clickOnDurationLabel();
    await settings.module.switchToRepositoryEntry();
    await settings.repositoryEntry.clearCustomName();
    await settings.repositoryEntry.enterAtCustomName(testData.detailWork('CustomName'));
    await settings.repositoryEntry.saveNClose();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickOfficersTab();
    await detailWork.detailEntry.detailOfficersTab.verifyDurationFieldLabelNameChangedAsCustomName();
    await detailWork.detailEntry.detailOfficersTab.clickOnActualWorkedHoursLabel();
    await settings.module.switchToRepositoryEntry();
    await settings.repositoryEntry.clearCustomName();
    await settings.repositoryEntry.enterAtCustomName1(testData.detailWork('CustomName1'));
    await settings.repositoryEntry.saveNClose();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickOfficersTab();
    await detailWork.detailEntry.detailOfficersTab.verifyActualWorkedHoursFieldLabelNameChangedAsCustomName1();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
  });

  test('CopyButtonFunctionality_281998', async ({ testData, loaderPage, detailWork }) => {
    withTestContext(testData, '281998', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.enterAtDetailNo(testData.detailWork('DetailNo'));
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.verifyAtDetailNo(0);
    await detailWork.detailSearch.clickAtDetailNoInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickDetailCancelledCheckbox();
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.verifyCancellDateAndByFieldsEnabled();
    await detailWork.detailEntry.detailRequestedByTab.tabCancelledDateTime();
    await detailWork.detailEntry.detailRequestedByTab.tabBy();
    await detailWork.detailEntry.clickBillToTab();
    await detailWork.detailEntry.detailBillToTab.verifyAtBillToAccountLastName();
    await detailWork.detailEntry.clickOfficersTab();
    await detailWork.detailEntry.detailOfficersTab.tabOfficerPF();
    await detailWork.detailEntry.detailOfficersTab.verifyHigherPriorityDetailAcknowledgeMessage();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickPriorityDetailYesRadiobutton();
    await detailWork.detailEntry.clickOfficersTab();
    await detailWork.detailEntry.detailOfficersTab.tabDateFrom();
    await detailWork.detailEntry.detailOfficersTab.tabOfficerPF();
    await detailWork.module.switchToOfficerPFHelpSearch();
    await detailWork.officerPeckingOrderSearch.clickAtPFNoUsingCheckbox();
    await detailWork.officerPeckingOrderSearch.clickAddTheSelectedPF();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickOfficersTab();
    await detailWork.detailEntry.detailOfficersTab.verifyAtOfficer(0);
    await detailWork.detailEntry.clickFeesTab();
    await detailWork.detailEntry.detailFeesTab.verifyAtItemCode(0);
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickCopyButton();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.verifyCopiedSuccessfullyMessage();
    await detailWork.detailEntry.verifyDateOfDetailFieldIsEmpty();
    await detailWork.detailEntry.enterDateTimeDetailAsCurrentDateTime();
    await detailWork.detailEntry.clickDetailCancelledCheckbox();
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.tabDateTimeOfRequested();
    await detailWork.detailEntry.detailRequestedByTab.tabOfficerTakingRequest();
    await detailWork.detailEntry.detailRequestedByTab.tabCancelledDateTime();
    await detailWork.detailEntry.detailRequestedByTab.tabBy();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickAttachmentsTab();
    await detailWork.detailEntry.verifyAddedAttachmentInTheFolderGrid(1);
  });

  test('VerifyTheCancelledDateAndTimeShowsProperlyOnDetailEntryScreen_288319', async ({ testData, loaderPage, detailWork }) => {
    withTestContext(testData, '288319', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.enterAtDetailNo(testData.detailWork('DetailNo'));
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.clickAtDetailNoInGrid();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.detailRequestedByTab.verifyCancellDateAndByFieldsNotDispalyed();
    await detailWork.detailEntry.clickDetailCancelledCheckbox();
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.verifyCancellDateAndByFieldsEnabled();
    await detailWork.module.switchToDetailEntryScreen();
  });

  test('verifyTheRadioButtonsAreResettingInTheDetailEntryScreen_284673', async ({ testData, loaderPage, detailWork }) => {
    withTestContext(testData, '284673', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Entry');
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.enterDateTimeDetailAsCurrentDateTime();
    await detailWork.detailEntry.enterAtExpectedDuration(testData.detailWork('ExpectedDuration'));
    await detailWork.detailEntry.selectAtTypeOfDetailWork(testData.detailWork('TypeOfDetailWork'));
    await detailWork.detailEntry.enterAtLocationOfDetail(testData.detailWork('LocationOfDetail'));
    await detailWork.detailEntry.enterAtNoOfOfficersRequested(testData.detailWork('NoOfOfficersRequested'));
    await detailWork.detailEntry.clickDetailCancelledRadioButton();
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.tabDateTimeOfRequested();
    await detailWork.detailEntry.detailRequestedByTab.tabOfficerTakingRequest();
    await detailWork.detailEntry.detailRequestedByTab.enterAtBusinessNameID(testData.detailWork('BusinessNameID'));
    await detailWork.detailEntry.detailRequestedByTab.tabCancelledDateTime();
    await detailWork.detailEntry.detailRequestedByTab.tabBy();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickResetButton();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.verifyDateOfDetailFieldIsEmpty();
    await detailWork.detailEntry.verifyExpectedDurationIsEmpty();
    await detailWork.detailEntry.verifyTypeOfDetailWorkAsEmpty();
    await detailWork.detailEntry.verifyNoOfOfficersRequestedAsEmpty();
    await detailWork.detailEntry.verifyDetailCancelledRadioButtonIsNotSelected();
    await detailWork.detailEntry.verifyPriorityDetailRadioButtonsAreNotSelected();
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.verifyDateOfRequestFieldIsEmpty();
    await detailWork.detailEntry.detailRequestedByTab.verifyOfficerTakingRequestFieldIsEmpty();
    await detailWork.detailEntry.detailRequestedByTab.verifyLastNameIsEmpty();
    await detailWork.detailEntry.detailRequestedByTab.verifyBusinessNameBubbleIconIsNotDisplayed();
  });
});

test.describe('Detail Work Entry Screen Smoke @EntryScreenSmokeScripts', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('DetailEntryScreenSmoke_DESmoke', async ({ testData, loaderPage, detailWork, popupPage }) => {
    withTestContext(testData, 'DESmoke', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.clickAddNew();
    await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.enterDateTimeDetailAsCurrentDateTime();
    await detailWork.detailEntry.enterAtExpectedDuration(testData.detailWork('ExpectedDuration'));
    await detailWork.detailEntry.selectAtTypeOfDetailWork(testData.detailWork('TypeOfDetailWork'));
    await detailWork.detailEntry.enterAtLocationOfDetail(testData.detailWork('LocationOfDetail'));
    await detailWork.detailEntry.clickHighRiskCheckBox();
    await detailWork.detailEntry.clickSupervisorRequiredCheckBox();
    await detailWork.detailEntry.enterAtNoOfOfficersRequested(testData.detailWork('NoOfOfficersRequested'));
    await detailWork.detailEntry.clickPriorityDetailYesRadiobutton();
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.tabDateTimeOfRequested();
    await detailWork.detailEntry.detailRequestedByTab.tabOfficerTakingRequest();
    await detailWork.detailEntry.detailRequestedByTab.enterAtBusinessNameID(testData.detailWork('BusinessNameID'));
    await detailWork.detailEntry.detailRequestedByTab.enterAtContactLastName(testData.detailWork('ContactLastName'));
    await detailWork.detailEntry.detailRequestedByTab.enterAtContactFirstName(testData.detailWork('ContactFirstName'));
    await detailWork.detailEntry.detailRequestedByTab.selectName();
    await detailWork.detailEntry.clickBillToTab();
    await detailWork.detailEntry.detailBillToTab.clickSamAsBusinessAccountCheckBox();
    await detailWork.detailEntry.detailBillToTab.verifyAtLastNameFirstName(testData.detailWork('LastNameFirstName'));
    await detailWork.detailEntry.Save();
    await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.verifyAdditionSuccesslMessage();
    await detailWork.detailEntry.verifyStatusAsNotFilled();
    await detailWork.detailEntry.verifyCopyButtonEnabled();
    await detailWork.module.switchToDetailEntryScreen();
  });

  test('PersonnelSearchAndEntrySmoke', async ({ testData, loaderPage, personnel, popupPage }) => {
    withTestContext(testData, 'PersonnelEntry', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Personnel Search');
    await personnel.module.switchToPersonnelSearch();
    await personnel.personnelSearch.clickAddNewButton();
    await popupPage.acknowledge.okIfWindowExist('After Click Addnew');
    await personnel.module.switchToPersonnelEntry();
    await personnel.personnelEntry.enterAtPFCode(testData.detailWork('PFCode'));
    await personnel.personnelEntry.enterAtLastName(testData.detailWork('LastName'));
    await personnel.personnelEntry.enterAtFirstName(testData.detailWork('FirstName'));
    await personnel.personnelEntry.save();
    await popupPage.acknowledge.okIfWindowExist('After Save');
    await personnel.module.switchToPersonnelEntry();
    await personnel.personnelEntry.verifyAdditionSuccessfulAcknowledgeMessage();
  });

  test('BusinessNameSmokeScripts_BNameSmoke', async ({ testData, loaderPage, namesEntry, popupPage }) => {
    withTestContext(testData, 'BNameSmoke', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Business Names');
    await namesEntry.switchToNameSearch();
    await namesEntry.ClickAddNewButton();
    await popupPage.acknowledge.okIfWindowExist('After Click Addnew');
    await namesEntry.switchToNameEntry();
    await namesEntry.EnterNameIDAsB();
    await namesEntry.EnterAtLastName(testData.detailWork('BusinessLastName'));
    await namesEntry.EnterAtAddress(testData.detailWork('Address'));
    await namesEntry.saveTheScreenWithConfirm();
    await namesEntry.switchToNameEntry();
    await popupPage.acknowledge.okIfWindowExist('After Save');
    await namesEntry.switchToNameEntry();
    await namesEntry.VerifyAtNameType();
  });
});

test.describe('Q1 Detail Work Defect 2024 @Q1DetailWorkDefect2024', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('CRM_166301_DetailEntryFlagsTabSelectExistingEntryInGridClickSaveButtonGetting_1005_error_50778', async ({ testData, loaderPage, detailWork, popupPage }) => {
    withTestContext(testData, '50778', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Search');
    await detailWork.module.switchToDetailSearch();
    await detailWork.detailSearch.enterAtDetailNo(testData.detailWork('DetailNo'));
    await detailWork.detailSearch.clickSearch();
    await detailWork.detailSearch.selectAtDetailNo();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickFlagsTab();
    await detailWork.detailEntry.flagsTab.selectAtRemarks(testData.detailWork('Remarks'));
    await popupPage.acknowledge.verifyAcknowledgeWindowNotOpened('1005 - Error');
    await detailWork.detailEntry.flagsTab.SaveScreen();
    await popupPage.acknowledge.verifyAcknowledgeWindowNotOpened('1005 - Error');
    await detailWork.detailEntry.flagsTab.verifyUpdateSuccessful();
    await detailWork.module.switchToDetailSearch();
  });

  test('CRM186622_DetailWorkDetailEntryFeesTabEnterRateMoreThan_9_DigitIntegerValueShouldHave_9_DigitPopUpIsArisingTwice_58191', async ({ testData, loaderPage, detailWork }) => {
    withTestContext(testData, '58191', 'DetailWork');

    await loaderPage.navigateToModule('Detail Work');
    await loaderPage.navigateToScreen('Detail Entry');
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.enterDateTimeDetailAsCurrentDateTime();
    await detailWork.detailEntry.enterAtExpectedDuration(testData.detailWork('ExpectedDuration'));
    await detailWork.detailEntry.selectAtTypeOfDetailWork(testData.detailWork('TypeOfDetailWork'));
    await detailWork.detailEntry.enterAtLocationOfDetail(testData.detailWork('LocationOfDetail'));
    await detailWork.detailEntry.enterAtNoOfOfficersRequested(testData.detailWork('NoOfOfficersRequested'));
    await detailWork.detailEntry.clickDetailRequestedByTab();
    await detailWork.detailEntry.detailRequestedByTab.tabDateTimeOfRequested();
    await detailWork.detailEntry.detailRequestedByTab.tabOfficerTakingRequest();
    await detailWork.detailEntry.detailRequestedByTab.enterAtBusinessNameID(testData.detailWork('BusinessNameID'));
    await detailWork.detailEntry.clickBillToTab();
    await detailWork.detailEntry.detailBillToTab.clickSamAsBusinessAccountCheckBox();
    await detailWork.detailEntry.Save();
    await detailWork.module.switchToDetailEntryScreen();
    await detailWork.detailEntry.clickFeesTab();
    await detailWork.detailEntry.detailFeesTab.enterAtRate(testData.detailWork('Rate'));
    await detailWork.detailEntry.detailFeesTab.verify1146IntegerValueAcknowledge();
    await detailWork.module.switchToDetailEntryScreen();
  });
});
