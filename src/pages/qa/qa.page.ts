// @ts-nocheck
import { Page, Locator, FrameLocator } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage } from '../popup.page';

export class QAPage {
  private page: Page;
  private browserHelpers: BrowserHelpers;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
  }

  async SwitchToQuestionnarie() {
    return this.browserHelpers.switchToPageByTitle('Questionnaire');
  }

  async SwitchToQuestionDataEntry() {
    return this.browserHelpers.switchToPageByTitle('Question Data Entry');
  }

  async SwitchToQAFormEntry() {
    return this.browserHelpers.switchToPageByTitle('QA Form Entry');
  }

  async SwitchToQAFormEntrybyURL() {
    return this.browserHelpers.switchToPageByUrl('frmQnPDFForm');
  }

  async SwitchToQAFormSectionEntry() {
    return this.browserHelpers.switchToPageByTitle('QA Form Section');
  }

  async SwitchToManageQuestionsEntry() {
    return this.browserHelpers.switchToPageByTitle('Manage Questions');
  }

  async SwitchToQuestionMasterEntry() {
    return this.browserHelpers.switchToPageByTitle('Question Master');
  }

  async SwitchToQuestionReviewEntry() {
    return this.browserHelpers.switchToPageByTitle('Question Review');
  }

  async switchToQAFormEntryCopyJuris() {
    return this.browserHelpers.switchToPageByUrl('&QAFormVersion');
  }

  async switchToPDFFormScreen() {
    return this.browserHelpers.switchToPageByUrl('frmShowPDFForm.aspx');
  }

  async switchToQuestionnaireRepository() {
    return this.browserHelpers.switchToPageByTitle('Questionnaire Repository');
  }

  async SwitchToQAForm() {
    return this.browserHelpers.switchToPageByTitle('QA Forms');
  }

  async switchToSharedCodes() {
    return this.browserHelpers.switchToPageByTitle('Shared Codes');
  }

}

export class QuestionnariePage {
  readonly page: Page;
  readonly selectFormComboBox: Locator;
  readonly fillFormButton: Locator;
  readonly refreshButton: Locator;
  readonly resultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectFormComboBox = page.locator('#cddForm_DropDown');
    this.fillFormButton = page.locator('#cmdTakeTest');
    this.refreshButton = page.locator('#cmdrefresh');
    this.resultTable = page.locator('#grdQAForms');
  }

  async SelectFormAsTest(): Promise<void> {
    // uIMapQA.questionnarie.uIRefreshButton.click();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.questionnarie.uISelectFormComboBox,
    // "Test");
    // uIMapQA.questionnarie.uISelectFormComboBox.sendKeys(Keys.TAB);
  }

  async SelectAtForm(): Promise<void> {
    // // uIMapQA.questionnarie.uIRefreshButton.click();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.questionnarie.uISelectFormComboBox,
    // BaseData.getQAFormValue("FormName"));
    // uIMapQA.questionnarie.uISelectFormComboBox.sendKeys(Keys.TAB);
  }

  async ClickFillFormButton(): Promise<void> {
    // uIMapQA.questionnarie.uIFillFormButton.click();
  }

  async ClickRefreshButton(): Promise<void> {
    // uIMapQA.questionnarie.uIRefreshButton.click();
    // Playback.pageLoadThreadWait();
  }

  async VerifySingleQAFormInGrid(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapQA.questionnarie.uIResultTable) == 1);
  }

  async VerifyDoubleQAFormInGrid(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapQA.questionnarie.uIResultTable) == 2);
  }

  async CloseTheScreen(): Promise<void> {
    // uIMapQA.questionnarie.driver.close();
  }

  async verifyFormNameInGrid(rowIndex: number): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // String name = objectIdentification.manualIdentify.getGridCellInnerText(uIMapQA.questionnarie.uIResultTable,
    // "Form Name", rowIndex);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("FormName"), name);
  }

  async verifyAtFormNameInGrid(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // String name = objectIdentification.manualIdentify.getGridCell(uIMapQA.questionnarie.uIResultTable,
    // BaseData.getQAFormValue("FormName")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("FormName"), name);
  }

  async verifyFormNameContainingInGrid(rowIndex: number): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // String name = objectIdentification.manualIdentify.getGridCellInnerText(uIMapQA.questionnarie.uIResultTable,
    // "Form Name", rowIndex);
    // verify.ExpectedValueIsTrue(BaseData.getQAFormValue("FormName").contains(name));
  }

  async selectAtForm(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.questionnarie.uISelectFormComboBox,
    // BaseData.getQAFormValue("Form"));
  }

  async clickEmailIconByFormName(formName: string): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapQA.questionnarie.uIResultTable, formName, "Email");
    // gridCell.findElement(By.xpath(".//input[@title='Email']")).click();
  }

  async verifyAtFormNameInGrid(jsonIndex: number): Promise<void> {
    // String formName = objectIdentification.manualIdentify.getGridCell(uIMapQA.questionnarie.uIResultTable, BaseData.getQAFormValue("FormName"+jsonIndex)).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("FormName"+jsonIndex),formName);
  }

  async deleteAtFormNameInGrid(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapQA.questionnarie.uIResultTable, BaseData.getQAFormValue("FormName"+jsonIndex));
    // popup.confirm.yes();
  }

  async verifyAtFormNameNotInGrid(jsonIndex: number): Promise<void> {
    // List<String> cells = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapQA.questionnarie.uIResultTable, "Form Name");
    // System.out.println(cells);
    // verify.ExpectedValueIsFalse(cells.contains(BaseData.getAccountingModuleValue("FormName"+jsonIndex)),"Form name is present in the grid-->");
  }

}

export class QuestionDataEntryPage {
  readonly page: Page;
  readonly pFCodeEdit: Locator;
  readonly pFNumberLookupButton: Locator;
  readonly lockButton: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly divQuestionTable: Locator;
  readonly reportSave: Locator;
  readonly reportSaveExit: Locator;
  readonly reportReset: Locator;
  readonly reportLastName: Locator;
  readonly reportFirstName: Locator;
  readonly yesButton: Locator;
  readonly batteryOperatedButtons: Locator;
  readonly statusLabel: Locator;
  readonly closeButton: Locator;
  readonly nameEdit: Locator;
  readonly recordNum: Locator;
  readonly reportReason: Locator;
  readonly pFLookupIcon: Locator;
  readonly yesOption1: Locator;
  readonly yesOption2: Locator;
  readonly yesOption3: Locator;
  readonly noOption4: Locator;
  readonly bottomMessage: Locator;
  readonly scoreField: Locator;
  readonly printIcon: Locator;
  readonly downloadIcon: Locator;
  readonly toEdit: Locator;
  readonly subjectEndit: Locator;
  readonly messageEdit: Locator;
  readonly sendButton: Locator;
  readonly emailIcon: Locator;
  readonly signatureField: Locator;
  readonly prescribingDoctorTextEdit: Locator;
  readonly victimCellTextEdit: Locator;
  readonly form2Field: Locator;
  readonly fileSavedLabelMessage: Locator;
  readonly addressEdit: Locator;
  readonly savePDfInAttachmentButton: Locator;
  readonly samplePDFFormNameEdit: Locator;
  readonly maximizeButton: Locator;
  readonly clickToSignButton: Locator;
  readonly signatureOfReporter: Locator;
  readonly fileNameEdit: Locator;
  readonly question1: Locator;
  readonly question2: Locator;
  readonly question3: Locator;
  readonly question4: Locator;
  readonly textFileNameEdit: Locator;
  readonly printIcon1: Locator;
  readonly clickHereToSignField: Locator;
  readonly deleteIcon: Locator;
  readonly saveIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFCodeEdit = page.locator('#lupEntryOfficer_CodeValue');
    this.pFNumberLookupButton = page.locator('#lupEntryOfficer_imgBtn');
    this.lockButton = page.locator('#imgLock');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.divQuestionTable = page.locator('#ArpQuestion');
    this.reportSave = page.locator('#btnSave');
    this.reportSaveExit = page.locator('#saveExit');
    this.reportReset = page.locator('#btnReset');
    this.reportLastName = page.locator('#pdfViewerinput_0_0');
    this.reportFirstName = page.locator('#pdfViewerinput_0_1');
    this.yesButton = page.locator("//label[text()=\'Yes\']/../input");
    this.batteryOperatedButtons = page.locator("//td//label[contains(text(),\'Battery Operated\')]/../input");
    this.statusLabel = page.locator('#lblFormDetails');
    this.closeButton = page.locator('#btnClose');
    this.nameEdit = page.locator('#pdfViewerinput_0_0');
    this.recordNum = page.locator('#lblRecordValue');
    this.reportReason = page.locator('#txtReason');
    this.pFLookupIcon = page.locator('#lupEntryOfficer_imgBtn');
    this.yesOption1 = page.locator("//input[@id=\'rdo100010000284148_0\']");
    this.yesOption2 = page.locator("//input[@id=\'rdo100010000284152_0\']");
    this.yesOption3 = page.locator("//input[@id=\'rdo100010000284158_0\']");
    this.noOption4 = page.locator("//input[@id=\'rdo100010000284164_1\']");
    this.bottomMessage = page.locator("//td[@class=\'statusBar\']/b");
    this.scoreField = page.locator('#lbltotScore');
    this.printIcon = page.locator('#pdfViewer_printIcon');
    this.downloadIcon = page.locator('#pdfViewer_downloadIcon');
    this.toEdit = page.locator('#pdfViewer_downloadIcon');
    this.subjectEndit = page.locator('#pdfViewer_downloadIcon');
    this.messageEdit = page.locator('#pdfViewer_downloadIcon');
    this.sendButton = page.locator("//button[text()='Send']");
    this.emailIcon = page.locator('#cmdGrdQAFormsEmail');
    this.signatureField = page.locator("//input[contains(@id,\'Img1000100002\')]");
    this.prescribingDoctorTextEdit = page.locator('#pdfViewerinput_0_100');
    this.victimCellTextEdit = page.locator('#pdfViewerinput_0_17');
    this.form2Field = page.locator("//body");
    this.fileSavedLabelMessage = page.locator('#lblmessage');
    this.addressEdit = page.locator('#pdfViewerinput_0_1');
    this.savePDfInAttachmentButton = page.locator('#btnSave');
    this.samplePDFFormNameEdit = page.locator('#pdfViewerinput_0_9');
    this.maximizeButton = page.locator('#imgMax');
    this.clickToSignButton = page.locator('#pdfViewerinput_1_55');
    this.signatureOfReporter = page.locator("//textarea[@id=\'pdfViewerinput_1_57\']");
    this.fileNameEdit = page.locator('#lblFormDetails');
    this.question1 = page.locator("//span/div[contains(text(), \'Automation Test\')]");
    this.question2 = page.locator("//span/div[contains(text(), \'What is Automation\')]");
    this.question3 = page.locator("//span/div[contains(text(), \'What is Automation DemoWhat\')]");
    this.question4 = page.locator("//span[contains(text(), \'In todayâ€™s fast-paced world, the ability to adapt \')]");
    this.textFileNameEdit = page.locator('#txtFileName');
    this.printIcon1 = page.locator('#cmdQAFormPrint');
    this.clickHereToSignField = page.locator('#pdfViewerinput_0_3');
    this.deleteIcon = page.locator('#cmdDelete');
    this.saveIcon = page.locator('#cmdSave');
  }

  async TabOutPF(): Promise<void> {
    // uIMapQA.questionDataEntry.uIPFCodeEdit.click();
    // uIMapQA.questionDataEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async FillTheQAForm(): Promise<void> {
    // Playback.popupThreadWait();
    // List<WebElement> uIRadoButtonCollection = uIMapQA.questionDataEntry.uIDivQuestionTable
    // .findElements(By.xpath("//input[@type='radio']"));
    // int RadioButtonCount = uIRadoButtonCollection.size();
    // int yesRadioIndex = Randomized.getRandomEvenNumber(uIRadoButtonCollection.size() - 1);
    // uIRadoButtonCollection.get(yesRadioIndex).click();
    // // dot in the xpath syntax only collects the child controls of the parent
    // // element.
    // List<WebElement> uITextEditCollection = uIMapQA.questionDataEntry.uIDivQuestionTable
    // .findElements(By.xpath(".//input[@type='text']"));
    // int textBoxEdit = yesRadioIndex / 2;
    // uITextEditCollection.get(textBoxEdit).sendKeys(Randomized.randomString(9));
  }

  async clickBatteryOperatedButtons(): Promise<void> {
    // List<WebElement> batteryButtons = uIMapQA.questionDataEntry.uIBatteryOperatedButtons;
    // for (WebElement button : batteryButtons) {
    // objectIdentification.manualIdentify.scrollIntoView(button);
    // if (button.isDisplayed()) {
    // button.click();
  }

  async FillTheMentalIntakeQAForm(): Promise<void> {
    // //			List<WebElement> uIRadoButtonCollection = uIMapQA.questionDataEntry.uIDivQuestionTable
    // //					.findElements(By.xpath("//input[@type='radio']"));
    // //			int RadioButtonCount = uIRadoButtonCollection.size();
    // //
    // //			int yesRadioIndex = Randomized.getRandomEvenNumber(uIRadoButtonCollection.size() - 1);
    // //			uIRadoButtonCollection.get(yesRadioIndex).click();
    // //			// dot in the xpath syntax only collects the child controls of the parent
    // //			// element.
    // //			List<WebElement> uITextEditCollection = uIMapQA.questionDataEntry.uIDivQuestionTable
    // //					.findElements(By.xpath(".//textarea[@class='textbox']"));
    // //			int textBoxEdit = yesRadioIndex / 2;
    // //
    // //			uITextEditCollection.get(textBoxEdit).sendKeys(Randomized.randomString(9));
    // //
    // //			List<WebElement> uICheckBoxCollection = uIMapQA.questionDataEntry.uIDivQuestionTable
    // //					.findElements(By.xpath(".//input[@type='checkbox']"));
    // //			int CheckBoxCount = uICheckBoxCollection.size();
    // //
    // //			int CheckBoxIndex = Randomized.getRandomNumber(uICheckBoxCollection.size() - 1);
    // //			uICheckBoxCollection.get(CheckBoxIndex).click();
    // Playback.driver.findElement(By.xpath("(//div[@id='ArpQuestion']//input[@type='radio'])[1]")).click();
    // Playback.driver.findElement(By.xpath("//div[@id='ArpQuestion']//input[@type='text']"))
    // .sendKeys(Randomized.randomString(10));
  }

  async SaveNClose(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // uIMapQA.questionDataEntry.uISaveAndCloseButton.click();
    // popup.confirm.yes();
  }

  async clickSaveNClose(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // uIMapQA.questionDataEntry.uISaveAndCloseButton.click();
  }

  async saveButton(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // uIMapQA.questionDataEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSave(): Promise<void> {
    // uIMapQA.questionDataEntry.uISaveButton.click();
  }

  async clickMaximizeButton(): Promise<void> {
    // uIMapQA.questionDataEntry.uIMaximizeButton.click();
    // //Playback.driver.manage().window().maximize();
  }

  async lockForm(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // uIMapQA.questionDataEntry.uILockButton.click();
    // popup.confirm.yes();
  }

  async CloseScreen(): Promise<void> {
    // uIMapQA.questionDataEntry.driver.close();
  }

  async enterAtLastName(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapQA.questionDataEntry.uIReportLastName.sendKeys(BaseData.getQAFormValue("LastName"));
  }

  async enterAtFirstName(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapQA.questionDataEntry.uIReportFirstName.sendKeys(BaseData.getQAFormValue("FirstName"));
  }

  async clickReportSave(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapQA.questionDataEntry.uIReportSave.click();
    // popup.confirm.yes();
  }

  async clickReportSaveNExit(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapQA.questionDataEntry.uIReportSaveExit.click();
  }

  async clickYesButtonInQuestion1(): Promise<void> {
    // uIMapQA.questionDataEntry.uIYesButton.click();
  }

  async clickSaveNCloseButton(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.waitForPageLoad();
    // uIMapQA.questionDataEntry.uISaveAndCloseButton.click();
  }

  async verifyAtStatusLabelBindsWithFormDetails(): Promise<void> {
    // String text = uIMapQA.questionDataEntry.uIStatusLabel.getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getQAFormValue("FormRefNo") + " / "
    // + BaseData.getQAFormValue("FormName") + " - " + BaseData.getQAFormValue("Version"));
  }

  async verifyCloseButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.questionDataEntry.uICloseButton.isDisplayed());
  }

  async verifyAtFormRefNoInStatusLabel(): Promise<void> {
    // String text = uIMapQA.questionDataEntry.uIStatusLabel.getText();
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getQAFormValue("FormRef")));
  }

  async EnterAtName(): Promise<void> {
    // uIMapQA.questionDataEntry.uINameEdit.sendKeys(BaseData.getHomeModuleValue("Name"));
  }

  async verifyRecordNumIsNotNull(): Promise<void> {
    // String text = uIMapQA.questionDataEntry.uIRecordNum.getText();
    // boolean b = (!text.equals(""));
    // System.out.println(b);
    // verify.ExpectedValueIsTrue(!text.equals(""));
  }

  async EnterAtReason(): Promise<void> {
    // uIMapQA.questionDataEntry.uIReportReason.sendKeys(BaseData.getHomeModuleValue("Reason"));
  }

  async clickPFLookupIcon(): Promise<void> {
    // uIMapQA.questionDataEntry.uIPFLookupIcon.click();
  }

  async clickFacilityClassificationOptions(): Promise<void> {
    // uIMapQA.questionDataEntry.uIYesOption1.click();
    // uIMapQA.questionDataEntry.uIYesOption2.click();
    // uIMapQA.questionDataEntry.uIYesOption3.click();
    // uIMapQA.questionDataEntry.uINoOption4.click();
  }

  async verifyAdditionaSuccessFull(): Promise<void> {
    // String message = uIMapQA.questionDataEntry.uIBottomMessage.getText();
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful", message);
  }

  async getScoreValue(): Promise<string> {
    // String Score = uIMapQA.questionDataEntry.uIscoreField.getText();
    // return Score;
  }

  async clickYesButtonbyIndex(idx: number): Promise<void> {
    // Playback.driver.findElement(By.xpath("(//label[text()='Yes']/../input)[" + idx + "]")).click();
  }

  async clickDownloadButton(): Promise<void> {
    // Actions ac = new Actions(Playback.driver);
    // ac.click(uIMapQA.questionDataEntry.uIDownloadIcon).build().perform();
    // // uIMapQA.questionDataEntry.uIDownloadIcon.click();
  }

  async enterTextAtallEditFields(): Promise<void> {
    // List<WebElement> allTextBoxes = Playback.driver
    // .findElements(By.xpath("//input[contains(@style,'!important')and@type='text']"));
    // for (WebElement textBox : allTextBoxes) {
    // textBox.sendKeys("Automation");
    // break;
  }

  async verifyRecordNumberIsGenerated(): Promise<void> {
    // String text = uIMapQA.questionDataEntry.uIRecordNum.getText();
    // String currentYear = Randomized.getCurrentYear();
    // System.out.println(currentYear);
    // String year = text.substring(0, 2);
    // verify.ExpectedValueIsTrue(currentYear.contains(year));
  }

  async clickEmailIcon(): Promise<void> {
    // uIMapQA.questionDataEntry.uIEmailIcon.click();
  }

  async clickSignatureField(): Promise<void> {
    // uIMapQA.questionDataEntry.uISignatureField.click();
  }

  async verifySignatureFieldIsNull(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.questionDataEntry.uISignatureField.getAttribute("value").isBlank());
  }

  async verifySignatureFieldIsNotNull(): Promise<void> {
    // System.out.println(uIMapQA.questionDataEntry.uISignatureField.getAttribute("value"));
    // verify.ExpectedValueIsFalse(uIMapQA.questionDataEntry.uISignatureField.getAttribute("value").isBlank());
  }

  async enterAtForm2(): Promise<void> {
    // objectIdentification.windowHandle.switchToFrameUsingID("contentIframe");
    // uIMapQA.questionDataEntry.uIForm2Field.sendKeys("jack Sparrow");
  }

  async verifyForm2value(): Promise<void> {
    // objectIdentification.windowHandle.switchToFrameUsingID("contentIframe");
    // String value= uIMapQA.questionDataEntry.uIForm2Field.getAttribute("value");
    // System.out.println(value);
  }

  async verifyFileSavedYouMayContinueToEditLabelMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapQA.questionDataEntry.uIFileSavedLabelMessage.getText(),"File Saved. You may continue to edit");
  }

  async enterAtAddress(): Promise<void> {
    // uIMapQA.questionDataEntry.uIAddressEdit.sendKeys(BaseData.getNamesModuleValue("QAFromAddress"));
  }

  async enterAtName(): Promise<void> {
    // uIMapQA.questionDataEntry.uISamplePDFFormNameEdit.sendKeys(BaseData.getQAFormValue("Name"));
  }

  async clickSaveInQAForm(): Promise<void> {
    // uIMapQA.questionDataEntry.uISavePDfInAttachmentButton.click();
  }

  async verifyQuestionDataEntryScreenIsNotOpenedTwice(): Promise<void> {
    // Set<String> windowHandles = Playback.driver.getWindowHandles();
    // int i = 0;
    // for (String windowHandle : windowHandles) {
    // String title = Playback.driver.switchTo().window(windowHandle).getTitle();
    // if (title.contains("Question Data Entry")) {
    // i++;
    // verify.ExpectedIntergerValueIsEqualToActual(1, i, "Same Question Data Entry window opened twice --> ");
  }

  async verifyAtName(): Promise<void> {
    // String txt = uIMapQA.questionDataEntry.uISamplePDFFormNameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(txt,BaseData.getQAFormValue("Name"));
  }

  async clickClickToSign(): Promise<void> {
    // uIMapQA.questionDataEntry.uIClickToSignButton.click();
  }

  async verifySignatureOfReporterIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.questionDataEntry.uISignatureOfReporter.isDisplayed());
  }

  async verify30004AnswerMissingAcknowledgePopupNotContainsHTMLTags(): Promise<void> {
    // popup.switchToAcknowledge();
    // verify.ExpectedValueIsFalse(uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText().contains("</font>"),
    // "Acknowledge popup message having HTML tags");
    // popup.acknowledge.ok();
  }

  async verifyAtFileName(): Promise<void> {
    // String value = uIMapQA.questionDataEntry.uITextFileNameEdit.getAttribute("value");
    // System.out.println(value);
    // verify.ExpectedValueIsTrue(
    // value.contains(BaseData.getQAFormValue("FileName")));
  }

  async verifyAtFirstName(): Promise<void> {
    // String text = uIMapQA.questionDataEntry.uINameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("Name"));
  }

  async clickReportSaveNExitWithConfirm(): Promise<void> {
    // uIMapQA.questionDataEntry.uIReportSaveExit.click();
    // popup.confirm.yes();
  }

  async verifyAtQuestion1(): Promise<void> {
    // String Question = uIMapQA.questionDataEntry.uIQuestion1.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question1"), Question);
  }

  async verifyAtQuestion2(): Promise<void> {
    // String Question = uIMapQA.questionDataEntry.uIQuestion2.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question2"), Question);
  }

  async verifyAtQuestion3(): Promise<void> {
    // String Question = uIMapQA.questionDataEntry.uIQuestion3.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question3"), Question);
  }

  async verifyAtQuestion4(): Promise<void> {
    // String Question = uIMapQA.questionDataEntry.uIQuestion4.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question4"), Question);
  }

  async saveNExit(): Promise<void> {
    // uIMapQA.questionDataEntry.uIReportSaveExit.click();
    // popup.confirm.yes();
  }

  async clickHereToSignField(): Promise<void> {
    // uIMapQA.questionDataEntry.uIClickHereToSignField.click();
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapQA.questionDataEntry.uIPrintIcon1.click();
  }

  async verifyDeleteIconIsEnabled(): Promise<void> {
    // uIMapQA.questionDataEntry.uIDeleteIcon.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapQA.questionDataEntry.uISaveIcon.click();
    // popup.confirm.yes();
  }

}

export class QAFormEntryPage {
  readonly page: Page;
  readonly formRefNoEdit: Locator;
  readonly formNameEdit: Locator;
  readonly versionEdit: Locator;
  readonly activeAsofEdit: Locator;
  readonly captureScoreCheckBox: Locator;
  readonly showReasonCheckBox: Locator;
  readonly allowSupervisorResponseCheckBox: Locator;
  readonly lockWhenSaveCheckBox: Locator;
  readonly notesEdit: Locator;
  readonly isMultipleRecordsCheckBox: Locator;
  readonly readyforUseCheckBox: Locator;
  readonly sharedCheckBox: Locator;
  readonly createNewCheckBox: Locator;
  readonly newVersionEdit: Locator;
  readonly manageQuestionsButton: Locator;
  readonly manageSectionButton: Locator;
  readonly reviewButton: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly copytoSameJurisButton: Locator;
  readonly pDFRadioButton: Locator;
  readonly phoenixFormRadioButton: Locator;
  readonly selectPDFFileButton: Locator;
  readonly pDFLink: Locator;
  readonly bottomMesssageTextView: Locator;
  readonly selectCategoryButton: Locator;
  readonly selectButton: Locator;
  readonly sortOrder: Locator;
  readonly resetButton: Locator;
  readonly formName: Locator;
  readonly chooseFileButton: Locator;
  readonly adobeCheckBox: Locator;
  readonly deleteButton: Locator;
  readonly mainTab: Locator;
  readonly formNameDropdown: Locator;
  readonly repositoryTab: Locator;
  readonly sampleCheckbox: Locator;
  readonly evalutionRadioButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formRefNoEdit = page.locator('#txtFormID');
    this.formNameEdit = page.locator('#txtFormName');
    this.versionEdit = page.locator('#txtVersion');
    this.activeAsofEdit = page.locator('#dttActive_KPIDttmCtrl');
    this.captureScoreCheckBox = page.locator('#chkCaptureScore');
    this.showReasonCheckBox = page.locator('#chkShowReason');
    this.allowSupervisorResponseCheckBox = page.locator('#chkSupervisor');
    this.lockWhenSaveCheckBox = page.locator('#Chklckwhnsave');
    this.notesEdit = page.locator('#txtNotes');
    this.isMultipleRecordsCheckBox = page.locator('#chkMultiple');
    this.readyforUseCheckBox = page.locator('#chkReady');
    this.sharedCheckBox = page.locator('#chkShared');
    this.createNewCheckBox = page.locator('#chkCreateNew');
    this.newVersionEdit = page.locator('#txtNewVersion');
    this.manageQuestionsButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_cmdMgQuestion');
    this.manageSectionButton = page.locator('#cmdMgSection');
    this.reviewButton = page.locator('#cmdReview');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.copytoSameJurisButton = page.locator('#CmdCopyQA');
    this.pDFRadioButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkFormType_1');
    this.phoenixFormRadioButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkFormType_0');
    this.selectPDFFileButton = page.locator('#FileUploadFileType');
    this.pDFLink = page.locator('#lnkpdfFileopen');
    this.bottomMesssageTextView = page.locator("//td[@class = \'statusBar\']//b");
    this.selectCategoryButton = page.locator('#cddFrmCat_DropDown');
    this.selectButton = page.locator("//ul[@id=\'uploadfileListContainer\']");
    this.sortOrder = page.locator('#txtSortSeqNo');
    this.resetButton = page.locator('#cmdRefresh');
    this.formName = page.locator('#txtFormName');
    this.chooseFileButton = page.locator('#FileUploadFileType');
    this.adobeCheckBox = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkIsOpenAdobe');
    this.deleteButton = page.locator('#cmdDelete');
    this.mainTab = page.locator("//span[text()=\'Main\']");
    this.formNameDropdown = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_cddEvalForm');
    this.repositoryTab = page.locator("//span[text()=\'Repository\']");
    this.sampleCheckbox = page.locator("//input[@id=\'chkIsSample\']");
    this.evalutionRadioButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkFormType_2');
  }

  async EnterAtFormRefNo(): Promise<void> {
    // uIMapQA.qAFormEntry.uIFormRefNoEdit.sendKeys(BaseData.getQAFormValue("FormRefNo"));
    // uIMapQA.qAFormEntry.uIFormRefNoEdit.sendKeys(Keys.TAB);
  }

  async EnterAtFormName1(): Promise<void> {
    // uIMapQA.qAFormEntry.uIFormNameEdit.click();
    // uIMapQA.qAFormEntry.uIFormNameEdit.clear();
    // uIMapQA.qAFormEntry.uIFormNameEdit.sendKeys(BaseData.getQAFormValue("FormName1"));
  }

  async EnterAtFormName(): Promise<void> {
    // uIMapQA.qAFormEntry.uIFormName.click();
    // uIMapQA.qAFormEntry.uIFormName.clear();
    // uIMapQA.qAFormEntry.uIFormName.sendKeys(BaseData.getQAFormValue("FormName"));
  }

  async EnterAtVersion(): Promise<void> {
    // uIMapQA.qAFormEntry.uIVersionEdit.click();
    // uIMapQA.qAFormEntry.uIVersionEdit.clear();
    // uIMapQA.qAFormEntry.uIVersionEdit.sendKeys(BaseData.getQAFormValue("Version"));
  }

  async EnterActiveAsOfDateAsCurrentDate(): Promise<void> {
    // uIMapQA.qAFormEntry.uIActiveAsofEdit.click();
    // uIMapQA.qAFormEntry.uIActiveAsofEdit.clear();
    // uIMapQA.qAFormEntry.uIActiveAsofEdit.sendKeys(Randomized.getCurrentDate());
  }

  async SelectCaptureScoreCheckBox(): Promise<void> {
    // uIMapQA.qAFormEntry.uICaptureScoreCheckBox.click();
  }

  async SelectLockWhenSaveCheckBox(): Promise<void> {
    // uIMapQA.qAFormEntry.uILockWhenSaveCheckBox.click();
  }

  async EnterAtNotes(): Promise<void> {
    // uIMapQA.qAFormEntry.uINotesEdit.click();
  }

  async SelectIsMultipleRecordsCheckBox(): Promise<void> {
    // uIMapQA.qAFormEntry.uIIsMultipleRecordsCheckBox.click();
  }

  async SelectReadyForUseCheckBox(): Promise<void> {
    // uIMapQA.qAFormEntry.uIReadyforUseCheckBox.click();
    // popup.confirm.yesWithExpectedMessage(
    // "(3500) This action will lock the form and no further updates will be allowed. Are you sure you want to continue?");
  }

  async SelectCreateNewCheckBox(): Promise<void> {
    // uIMapQA.qAFormEntry.uICreateNewCheckBox.click();
  }

  async ClickManageQuestionsButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uIManageQuestionsButton.click();
    // Playback.controlReadyThreadWait();
  }

  async ClickManageSectionButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uIManageSectionButton.click();
    // Playback.controlReadyThreadWait();
  }

  async ClickReviewButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uIReviewButton.click();
  }

  async EnterAtNewVersion(): Promise<void> {
    // uIMapQA.qAFormEntry.uIVersionEdit.sendKeys(BaseData.getQAFormValue("Version"));
  }

  async SaveScreen(): Promise<void> {
    // uIMapQA.qAFormEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async ClickSaveNCloseButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uISaveAndCloseButton.click();
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async ClickCopyToSameJurisButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uICopytoSameJurisButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickPDFRadioButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uIPDFRadioButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickPhoenixFormRadioButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uIPhoenixFormRadioButton.click();
  }

  async clickPDFLink(): Promise<void> {
    // uIMapQA.qAFormEntry.uIPDFLink.click();
    // Playback.pageLoadThreadWait();
  }

  async selectPdfFile(): Promise<void> {
    // uIMapQA.qAFormEntry.uISelectPDFFileButton.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.filesHandle.fileAttach.fileUpload("Candidate form.pdf");
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapQA.qAFormEntry.uIBottomMesssageTextView.getText());
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful",
    // uIMapQA.qAFormEntry.uIBottomMesssageTextView.getText());
  }

  async getFormName(): Promise<string> {
    // String text = uIMapQA.qAFormEntry.uIFormNameEdit.getAttribute("value");
    // return text;
  }

  async getVersion(): Promise<string> {
    // String text = uIMapQA.qAFormEntry.uIVersionEdit.getAttribute("value");
    // return text;
  }

  async getActiveAsOf(): Promise<string> {
    // String text = uIMapQA.qAFormEntry.uIActiveAsofEdit.getAttribute("value");
    // return text;
  }

  async verifyActiveFormName(formName: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(formName, uIMapQA.qAFormEntry.uIFormNameEdit.getAttribute("value"));
  }

  async verifyActiveVersion(version: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(version, uIMapQA.qAFormEntry.uIVersionEdit.getAttribute("value"));
  }

  async verifyActiveActiveAsOf(date: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(date, uIMapQA.qAFormEntry.uIActiveAsofEdit.getAttribute("value"));
  }

  async SelectCategoryAsAdministration(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // // uIMapQA.qAFormEntry.uISelectButton.click();
    // uIMapQA.qAFormEntry.uISelectCategoryButton.click();
    // // objectIdentification.manualIdentify.selectDropDownOption(, 0);
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.qAFormEntry.uISelectCategoryButton,
    // "Administration");
    // uIMapQA.qAFormEntry.uISelectCategoryButton.click();
    // Playback.pageLoadThreadWait();
  }

  async clickSelect(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapQA.qAFormEntry.uISelectButton.click();
    // Playback.pageLoadThreadWait();
  }

  async EnterAtSortOrder(): Promise<void> {
    // uIMapQA.qAFormEntry.uISortOrder.sendKeys(BaseData.getQAFormValue("SortOrder"));
  }

  async SelectAtCategory(): Promise<void> {
    // uIMapQA.qAFormEntry.uISelectCategoryButton.click();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.qAFormEntry.uISelectCategoryButton,
    // BaseData.getHomeModuleValue("Category"));
  }

  async clickReset(): Promise<void> {
    // uIMapQA.qAFormEntry.uIResetButton.click();
  }

  async verifyCodeValueDescriptionIsDisplayedFirstInCategoryDropdown(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.qAFormEntry.uISelectCategoryButton, 1);
    // String text = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapQA.qAFormEntry.uISelectCategoryButton);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getHomeModuleValue("CodeValueDescription"), text);
  }

  async clickWindowMaximize(): Promise<void> {
    // uIMapQA.qAFormEntry.driver.manage().window().maximize();
  }

  async clickChooseFile(): Promise<void> {
    // uIMapQA.qAFormEntry.uIChooseFileButton.click();
  }

  async CloseScreen(): Promise<void> {
    // uIMapQA.qAFormEntry.driver.close();
  }

  async verifyOpenUsingAdobeCheckBoxIsNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapQA.qAFormEntry.uIAdobeCheckBox);
    // // boolean b = uIMapQA.qAFormEntry.uIAdobeCheckBox.isDisplayed();
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async verifyOpenUsingAdobeCheckBoxIsDisplayed(): Promise<void> {
    // boolean b = uIMapQA.qAFormEntry.uIAdobeCheckBox.isDisplayed();
    // verify.ExpectedValueIsTrue(b);
  }

  async clickSaveNAddNew(): Promise<void> {
    // uIMapQA.qAFormEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify6071LargerFilePopup(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // popup.confirm.yesWithExpectedMessage("(6071)  The file is larger than 500 KB. Click 'OK' to upload the file as is. Or click 'Cancel' to cancel the upload, then try to reduce the file size. ");
  }

  async clickSharedCheckBox(): Promise<void> {
    // uIMapQA.qAFormEntry.uISharedCheckBox.click();
  }

  async EnterAtFormRefNo1(): Promise<void> {
    // uIMapQA.qAFormEntry.uIFormRefNoEdit.sendKeys(BaseData.getQAFormValue("FormRefNo1"));
  }

  async verifyUpdateSuccessFulMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual(" 1003 - Update Successful",
    // uIMapQA.qAFormEntry.uIBottomMesssageTextView.getText());
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(" 1003 - Update Successful",
    // uIMapQA.qAFormEntry.uIBottomMesssageTextView.getText());
  }

  async verifyDeleteIconIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(!uIMapQA.qAFormEntry.uIDeleteButton.isEnabled());
  }

  async verifySortOrderFieldIsBlank(): Promise<void> {
    // boolean blank = uIMapQA.qAFormEntry.uISortOrder.getAttribute("title").isBlank();
    // verify.ExpectedValueIsTrue(blank);
  }

  async clickSaveButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uISaveButton.click();
  }

  async clickDeleteIcon(): Promise<void> {
    // uIMapQA.qAFormEntry.uIDeleteButton.click();
    // popup.confirm.acceptPopup();
  }

  async verify3501FormIDAlreadyExistNotOccursAcknowledge(): Promise<void> {
    // popup.acknowledge.verifyAcknowledgeWindowNotOpened("(3501)Form ID already exist");
  }

  async verifyPDFRadioButtonIsSelected(): Promise<void> {
    // boolean selected = uIMapQA.qAFormEntry.uIPDFRadioButton.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyPhoenixFormRadioButtonIsSelected(): Promise<void> {
    // boolean selected = uIMapQA.qAFormEntry.uIPhoenixFormRadioButton.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async selectPDFRadioButton(): Promise<void> {
    // uIMapQA.qAFormEntry.uIPDFRadioButton.click();
  }

  async verifyDeleteIconIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.qAFormEntry.uIDeleteButton.isEnabled());
  }

  async clickSampleCheckbox(): Promise<void> {
    // uIMapQA.qAFormEntry.uISampleCheckbox.click();
  }

  async SelectReadyForUseCheckBoxForFire(): Promise<void> {
    // uIMapQA.qAFormEntry.uIReadyforUseCheckBox.click();
    // popup.confirm.yesWithExpectedMessage(
    // "(3500) This action will lock the form from editing. Are you sure want to continue?");
  }

}

export class MainTabPage {
  readonly page: Page;
  readonly evaluationFormRadioButton: Locator;
  readonly phoenixFormRadioButton: Locator;
  readonly pDFRadioButton: Locator;
  readonly chooseFilesButton: Locator;
  readonly openUsingAdobeCheckBox: Locator;
  readonly manageQuestionButton: Locator;
  readonly manageSectionButton: Locator;
  readonly reviewButton: Locator;
  readonly copyToSameJurisButton: Locator;
  readonly allowMultipleRecordsCheckbox: Locator;
  readonly sharedCheckbox: Locator;
  readonly lockWhenSaveCheckbox: Locator;
  readonly captureScoreCheckbox: Locator;
  readonly pDFLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.evaluationFormRadioButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkFormType_2');
    this.phoenixFormRadioButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkFormType_0');
    this.pDFRadioButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkFormType_1');
    this.chooseFilesButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_FileUploadFileType');
    this.openUsingAdobeCheckBox = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkIsOpenAdobe');
    this.manageQuestionButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_cmdMgQuestion');
    this.manageSectionButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_cmdMgSection');
    this.reviewButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_cmdReview');
    this.copyToSameJurisButton = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_CmdCopyQA');
    this.allowMultipleRecordsCheckbox = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkMultiple');
    this.sharedCheckbox = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkShared');
    this.lockWhenSaveCheckbox = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_Chklckwhnsave');
    this.captureScoreCheckbox = page.locator('#QAEvalForm_tmpl0_usrQAFormMain_chkCaptureScore');
    this.pDFLink = page.locator('#lnkpdfFileopen');
  }

  async clickEvaluationFormRadioButton(): Promise<void> {
    // uIMapQA.qAFormEntry.mainTab.uIEvaluationFormRadioButton.click();
  }

  async selectAtFormName(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.qAFormEntry.uIFormNameDropdown,
    // BaseData.getSettingsModuleValue("EvaluationFormName"));
  }

  async clickPhoenixFormRadioButton(): Promise<void> {
    // uIMapQA.qAFormEntry.mainTab.uIPhoenixFormRadioButton.click();
  }

  async clickPDFRadioButton(): Promise<void> {
    // uIMapQA.qAFormEntry.mainTab.uIPDFRadioButton.click();
  }

  async clickChooseFileButton(): Promise<void> {
    // uIMapQA.qAFormEntry.mainTab.uIChooseFilesButton.click();
  }

  async clickOpenUsingAdobeCheckBox(): Promise<void> {
    // uIMapQA.qAFormEntry.mainTab.uIOpenUsingAdobeCheckBox.click();
  }

  async verifyOpenUsingAdobeCheckBoxIsChecked(): Promise<void> {
    // boolean selected = uIMapQA.qAFormEntry.mainTab.uIOpenUsingAdobeCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyManageQuestionsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.qAFormEntry.mainTab.uIManageQuestionButton.isEnabled());
  }

  async verifyManageSectionEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.qAFormEntry.mainTab.uIManageSectionButton.isEnabled());
  }

  async verifyReviewEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.qAFormEntry.mainTab.uIReviewButton.isEnabled());
  }

  async verifyCopyToSameJurisEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.qAFormEntry.mainTab.uICopyToSameJurisButton.isEnabled());
  }

  async verifyAllowMultipleRecordsCheckboxDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.qAFormEntry.mainTab.uIAllowMultipleRecordsCheckbox.isEnabled());
  }

  async verifySharedCheckboxDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.qAFormEntry.mainTab.uISharedCheckbox.isEnabled());
  }

  async verifyLockWhenSaveCheckboxDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.qAFormEntry.mainTab.uILockWhenSaveCheckbox.isEnabled());
  }

  async verifyCaptureScoreCheckboxDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.qAFormEntry.mainTab.uICaptureScoreCheckbox.isEnabled());
  }

  async verifyPhoenixFormRadioButtonDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.qAFormEntry.mainTab.uIPhoenixFormRadioButton.isEnabled());
  }

  async verifyPDFRadioButtonDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.qAFormEntry.mainTab.uIPDFRadioButton.isEnabled());
  }

  async verifyEvaluationFormRadioButtonDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.qAFormEntry.mainTab.uIEvaluationFormRadioButton.isEnabled());
  }

  async verifyPDFLinkIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapQA.qAFormEntry.mainTab.uIPDFLink.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifySharedCheckboxIsChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.qAFormEntry.mainTab.uISharedCheckbox.isSelected());
  }

  async clickManageSectionButton(): Promise<void> {
    // uIMapQA.qAFormEntry.mainTab.uIManageSectionButton.click();
  }

  async ClickUsingAdobeCheckBox(): Promise<void> {
    // uIMapQA.qAFormEntry.uIAdobeCheckBox.click();
  }

  async clickMainTab(): Promise<void> {
    // uIMapQA.qAFormEntry.uIMainTab.click();
  }

  async clickRepositoryTab(): Promise<void> {
    // uIMapQA.qAFormEntry.uIRepositoryTab.click();
  }

  async saveAndCloseScreen(): Promise<void> {
    // uIMapQA.qAFormEntry.uISaveAndCloseButton.click();
    // popup.confirm.yes();
  }

}

export class RepositoryTabPage {
  readonly page: Page;
  readonly repositoryIDEdit: Locator;
  readonly add: Locator;
  readonly repositoryTabGrid: Locator;
  readonly fTOTrainingTypeLabel: Locator;
  readonly fTOTestLabel: Locator;
  readonly fTOTrainingTypeDropdown: Locator;
  readonly fTOTestDropdown: Locator;
  readonly activityTypeDropDown: Locator;
  readonly activityTypeTreeViewIcon: Locator;
  readonly savePDFAsPartOfTheAttachmentTabDropDown: Locator;
  readonly categoryDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.repositoryIDEdit = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_lupReportID_CodeValue');
    this.add = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_cmdAdd');
    this.repositoryTabGrid = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_grdQARepository');
    this.fTOTrainingTypeLabel = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_lblftoTrainingType');
    this.fTOTestLabel = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_lblTaskgrp');
    this.fTOTrainingTypeDropdown = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_cddFtoTrainingType_DropDown');
    this.fTOTestDropdown = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_cddChecklist');
    this.activityTypeDropDown = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_cddActivityType_DropDown');
    this.activityTypeTreeViewIcon = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_imgActivityTview');
    this.savePDFAsPartOfTheAttachmentTabDropDown = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_cddPdfAttachmentOptions_DropDown');
    this.categoryDropDown = page.locator('#QAEvalForm_tmpl1_usrQAFormRepository_cddFrmCat_DropDown');
  }

  async enterAtRepositoryID(): Promise<void> {
    // uIMapQA.qAFormEntry.repositoryTab.uIRepositoryIDEdit.sendKeys(BaseData.getSettingsModuleValue("RepositoryID"));
    // uIMapQA.qAFormEntry.repositoryTab.uIRepositoryIDEdit.sendKeys(Keys.TAB);
  }

  async clickAdd(): Promise<void> {
    // uIMapQA.qAFormEntry.repositoryTab.uIAdd.click();
  }

  async verifyAtRepositoryIDInGrid(): Promise<void> {
    // String gridCellInnerText = objectIdentification.manualIdentify.getGridCellInnerText(uIMapQA.qAFormEntry.repositoryTab.uIRepositoryTabGrid,
    // "Repository ID", 0);
    // verify.ExpectedPropertyValueIsEqual(gridCellInnerText, BaseData.getHomeModuleValue("RepositoryID"));
  }

  async verify3514QAFormsCannotBeAddedToTheRepositoryAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3514) QA forms cannot be added to the Repository");
  }

  async verifyFTOTrainingTypeLabelIsDisplayed(): Promise<void> {
    // String text = uIMapQA.qAFormEntry.repositoryTab.uIFTOTrainingTypeLabel.getText();
    // verify.ExpectedPropertyValueIsEqual("FTO Training Type", text);
  }

  async verifyFTOTestLabel(): Promise<void> {
    // String text = uIMapQA.qAFormEntry.repositoryTab.uIFTOTestLabel.getText();
    // verify.ExpectedPropertyValueIsEqual("FTO Test", text);
  }

  async selectAtFTOTrainingType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapQA.qAFormEntry.repositoryTab.uIFTOTrainingTypeDropdown, BaseData.getSettingsModuleValue("FTOTrainingType"));
  }

  async verifyAtFTOTrainingTypeDropDown(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapQA.qAFormEntry.repositoryTab.uIFTOTrainingTypeDropdown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("FTOTrainingType"));
  }

  async selectAtFTOTest(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapQA.qAFormEntry.repositoryTab.uIFTOTestDropdown, BaseData.getSettingsModuleValue("FTOTest"));
  }

  async verifyAtFTOTestDropDown(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapQA.qAFormEntry.repositoryTab.uIFTOTestDropdown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("FTOTest"));
  }

  async selectAtRepositoryIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapQA.qAFormEntry.repositoryTab.uIRepositoryTabGrid, BaseData.getSettingsModuleValue("RepositoryID"));
  }

  async verifyAtRepositoryIDInGrid(i: number): Promise<void> {
    // WebElement id = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapQA.qAFormEntry.repositoryTab.uIRepositoryTabGrid, BaseData.getQAFormValue("RepositoryID" + i));
    // verify.ExpectedValueIsTrue(id.getText().contains(BaseData.getQAFormValue("RepositoryID" + i)));
  }

  async enterAtRepositoryID(i: number): Promise<void> {
    // uIMapQA.qAFormEntry.repositoryTab.uIRepositoryIDEdit.sendKeys(BaseData.getSettingsModuleValue("RepositoryID" + i));
    // uIMapQA.qAFormEntry.repositoryTab.uIRepositoryIDEdit.sendKeys(Keys.TAB);
  }

  async verifyActivityTypeFieldIsEnabled(): Promise<void> {
    // boolean enabled = uIMapQA.qAFormEntry.repositoryTab.uIActivityTypeDropDown.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async clickActivityTypeTreeViewIcon(): Promise<void> {
    // uIMapQA.qAFormEntry.repositoryTab.uIActivityTypeTreeViewIcon.click();
  }

  async verifyActivityTypeFieldNotVanished(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist
    // (uIMapQA.qAFormEntry.repositoryTab.uIActivityTypeDropDown);
    // verify.ExpectedValueIsTrue(controlExist);
  }

  async selectAtPDFAsPartOFTheAttachmentTab(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.qAFormEntry.repositoryTab.uISavePDFAsPartOfTheAttachmentTabDropDown, BaseData.getSettingsModuleValue("SavePDFAsPartOfTheAttachmentTab"));
  }

  async selectAtCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapQA.qAFormEntry.repositoryTab.uICategoryDropDown,BaseData.getSettingsModuleValue("Category"));
  }

  async clickCancelConfirmationPopup(): Promise<void> {
    // popup.confirm.dismissPopup();
  }

  async verifyBottomMessageNotAppears(): Promise<void> {
    // verify.ExpectedValueIsFalse(objectIdentification.manualIdentify.controlExist(
    // uIMapQA.qAFormEntry.uIBottomMesssageTextView));
  }

  async verifyReadyForUseCheckboxEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.qAFormEntry.uIReadyforUseCheckBox.isEnabled());
  }

  async selectReadyForUseCheckBoxWithCancelConfirmPopup(): Promise<void> {
    // uIMapQA.qAFormEntry.uIReadyforUseCheckBox.click();
    // popup.confirm.noWithExpectedMessage(
    // "(3500) This action will lock the form and no further updates will be allowed. Are you sure you want to continue?");
  }

  async verifyReadyForUseCheckBoxUnchecked(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.qAFormEntry.uIReadyforUseCheckBox.isSelected());
  }

  async verifyPleaseRemoveLinkedRepositoryToMakeSampleQAFormAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("Please remove Linked Repository to make Sample QA form.");
  }

  async verifyEvaluationFormRadioButtonIsSelected(): Promise<void> {
    // boolean selected = uIMapQA.qAFormEntry.uIEvalutionRadioButton.isSelected();
    // verify.ExpectedValueIsTrue(selected, "Evaluation Form Radio button is not selected --> ");
  }

  async verifySampleCheckboxIsChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.qAFormEntry.uISampleCheckbox.isSelected());
  }

  async clearFormName(): Promise<void> {
    // uIMapQA.qAFormEntry.uIFormNameEdit.click();
    // uIMapQA.qAFormEntry.uIFormNameEdit.clear();
  }

}

export class QAFormSectionPage {
  readonly page: Page;
  readonly sectionNameEdit: Locator;
  readonly sortEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly formIDEdit: Locator;
  readonly qAFormSectionResultTable: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sectionNameEdit = page.locator('#txtSectionName');
    this.sortEdit = page.locator('#txtSort');
    this.addButton = page.locator('#cmdAdd');
    this.clearButton = page.locator('#cmdClear');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.formIDEdit = page.locator('#txtFormID');
    this.qAFormSectionResultTable = page.locator('#grdQASection');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async EnterAtSectionName(): Promise<void> {
    // uIMapQA.qAFormSection.uISectionNameEdit.sendKeys(BaseData.getQAFormValue("SectionName"));
  }

  async EnterAtSectionName(i: number): Promise<void> {
    // uIMapQA.qAFormSection.uISectionNameEdit.sendKeys(BaseData.getQAFormValue("SectionName"+i));
  }

  async EnterAtSort(): Promise<void> {
    // uIMapQA.qAFormSection.uISortEdit.sendKeys(BaseData.getQAFormValue("Sort"));
  }

  async EnterAtSort(i: number): Promise<void> {
    // uIMapQA.qAFormSection.uISortEdit.sendKeys(BaseData.getQAFormValue("Sort"+i));
  }

  async ClickAddButton(): Promise<void> {
    // uIMapQA.qAFormSection.uIAddButton.click();
  }

  async ClickClearButton(): Promise<void> {
    // uIMapQA.qAFormSection.uIClearButton.click();
  }

  async SaveScreen(): Promise<void> {
    // uIMapQA.qAFormSection.uISaveButton.click();
    // popup.confirm.yes();
  }

  async ClickSaveNCloseButton(): Promise<void> {
    // uIMapQA.qAFormSection.uISaveAndCloseButton.click();
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async VerifyFormRefNo(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("FormRefNo"),
    // uIMapQA.qAFormSection.uIFormIDEdit.getAttribute("value"));
  }

  async VerifyAtSectionNameInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("SectionName"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapQA.qAFormSection.uIQAFormSectionResultTable, "Section Name", rowIndex));
  }

  async CloseScreen(): Promise<void> {
    // uIMapQA.qAFormSection.driver.close();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapQA.qAFormSection.uIBottomLeftSideStatusBar.getText());
  }

  async EnterAtSectionName1(): Promise<void> {
    // uIMapQA.qAFormSection.uISectionNameEdit.sendKeys(BaseData.getQAFormValue("SectionName1"));
  }

  async EnterAtSort1(): Promise<void> {
    // uIMapQA.qAFormSection.uISortEdit.sendKeys(BaseData.getQAFormValue("Sort1"));
  }

  async verifyAtSectionNameInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapQA.qAFormSection.uIQAFormSectionResultTable,
    // BaseData.getSettingsModuleValue("SectionName"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("SectionName")));
  }

}

export class ManageQuestionsPage {
  readonly page: Page;
  readonly refreshButton: Locator;
  readonly addNewQuestionButton: Locator;
  readonly reviewButton: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly addNewSectionButton: Locator;
  readonly managegrdQuestionResultTable: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly upArrow: Locator;
  readonly downArrow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refreshButton = page.locator('#cmdPostrefresh');
    this.addNewQuestionButton = page.locator('#cmdAddNewQues');
    this.reviewButton = page.locator('#cmdReview');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.addNewSectionButton = page.locator('#cmdSection');
    this.managegrdQuestionResultTable = page.locator('#grdQuestion');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.upArrow = page.locator('#imgSwapUp');
    this.downArrow = page.locator('#imgSwapDown');
  }

  async ClickReviewButton(): Promise<void> {
    // uIMapQA.manageQuestions.uIReviewButton.click();
  }

  async ClickRefreshButton(): Promise<void> {
    // uIMapQA.manageQuestions.uIRefreshButton.click();
    // Playback.pageLoadThreadWait();
  }

  async ClickAddNewQuestionButton(): Promise<void> {
    // uIMapQA.manageQuestions.uIAddNewQuestionButton.click();
  }

  async ClickSaveButton(): Promise<void> {
    // uIMapQA.manageQuestions.uISaveButton.click();
    // // popup.confirm.yesWithExpectedMessage("(3) Do you want to save all of the
    // // entered details?");
  }

  async ClickSaveNCloseButton(): Promise<void> {
    // uIMapQA.manageQuestions.uISaveAndCloseButton.click();
    // // popup.confirm.yesWithExpectedMessage("(3) Do you want to save all of the
    // // entered details?");
  }

  async ClickAddNewSectionButton(): Promise<void> {
    // uIMapQA.manageQuestions.uIAddNewSectionButton.click();
  }

  async VerifyAtSectionInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Section"), objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapQA.manageQuestions.uIManagegrdQuestionResultTable, "Section", rowIndex));
  }

  async VerifyAtSectionInGrid(rowIndex: number, i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Section"+i), objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapQA.manageQuestions.uIManagegrdQuestionResultTable, "Section", rowIndex));
  }

  async VerifyAtDisplayAsInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("DisplayAs"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapQA.manageQuestions.uIManagegrdQuestionResultTable, "Display As", rowIndex));
  }

  async VerifyAtQuestionInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapQA.manageQuestions.uIManagegrdQuestionResultTable, "Question", rowIndex));
  }

  async Close(): Promise<void> {
    // uIMapQA.manageQuestions.driver.close();
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapQA.manageQuestions.uIBottomLeftSideStatusBar.getText());
  }

  async clickUpArrow(): Promise<void> {
    // uIMapQA.manageQuestions.uIUpArrow.click();
  }

  async clickDownArrow(): Promise<void> {
    // uIMapQA.manageQuestions.uIDownArrow.click();
  }

  async verifyUpArrowIsDisplayed(): Promise<void> {
    // boolean UpArrowDisplayed = uIMapQA.manageQuestions.uIUpArrow.isDisplayed();
    // verify.ExpectedValueIsTrue(UpArrowDisplayed);
  }

  async verifyDownArrowIsDisplayed(): Promise<void> {
    // boolean DownArrowDisplayed = uIMapQA.manageQuestions.uIDownArrow.isDisplayed();
    // verify.ExpectedValueIsTrue(DownArrowDisplayed);
  }

  async selectAtSectionInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapQA.manageQuestions.uIManagegrdQuestionResultTable,BaseData.getSettingsModuleValue("Section"));
  }

}

export class QuestionMasterPage {
  readonly page: Page;
  readonly sectionDropdown: Locator;
  readonly displayAsEdit: Locator;
  readonly questionsEdit: Locator;
  readonly answerTypeDropdown: Locator;
  readonly codeTypeLookup: Locator;
  readonly responserequiredCheckbox: Locator;
  readonly allowMultipleAnswerCheckbox: Locator;
  readonly hideCheckbox: Locator;
  readonly scoreYesEdit: Locator;
  readonly scoreNoEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly codeTypeLookupButton: Locator;
  readonly boldCheckbox: Locator;
  readonly underlineCheckbox: Locator;
  readonly leadingSpacesEdit: Locator;
  readonly columnNoEdit: Locator;
  readonly yesNoTab: Locator;
  readonly trueFalseTab: Locator;
  readonly multipleChoiceTab: Locator;
  readonly includeGraphicEdit: Locator;
  readonly selectButton: Locator;
  readonly clearButton: Locator;
  readonly questionsCommentEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sectionDropdown = page.locator('#cddSection_DropDown');
    this.displayAsEdit = page.locator('#txtdispAs');
    this.questionsEdit = page.locator('#txtQuestion');
    this.answerTypeDropdown = page.locator('#cddAnsType_DropDown');
    this.codeTypeLookup = page.locator('#lupCodetype_CodeValue');
    this.responserequiredCheckbox = page.locator('#chkRespReq');
    this.allowMultipleAnswerCheckbox = page.locator('#ChkAllowMulti');
    this.hideCheckbox = page.locator('#ChkIsHide');
    this.scoreYesEdit = page.locator('#tabQuestion_tmpl0_UsrQuesMastYesNo2_txtYScore');
    this.scoreNoEdit = page.locator('#tabQuestion_tmpl0_UsrQuesMastYesNo2_txtNScore');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.codeTypeLookupButton = page.locator('#lupCodetype_imgBtn');
    this.boldCheckbox = page.locator('#chkBold');
    this.underlineCheckbox = page.locator('#chkunderline');
    this.leadingSpacesEdit = page.locator('#txtleadingspaces');
    this.columnNoEdit = page.locator('#txtcolumn');
    this.yesNoTab = page.locator("(//span[contains(text(),\'Yes/No\')])");
    this.trueFalseTab = page.locator("(//span[contains(text(),\'True/False\')])");
    this.multipleChoiceTab = page.locator("(//span[contains(text(),\'Multiple Choice\')])");
    this.includeGraphicEdit = page.locator('#uploadGraphicfileTextBox0');
    this.selectButton = page.locator("//input[@class=\'ruButton ruBrowse\']");
    this.clearButton = page.locator('#uploadGraphicfileclear0');
    this.questionsCommentEdit = page.locator('#txtQuestion_contentIframe');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.resetButton = page.locator('#cmdRefresh');
  }

}

export class YesOrNoTabPage {
  readonly page: Page;
  readonly controlQuestionLookupIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.controlQuestionLookupIcon = page.locator('#tabQuestion_tmpl0_UsrQuesMastYesNo2_lupYQuestions_imgBtn');
  }

  async clickControlQuestionLookupIcon(): Promise<void> {
    // uIMapQA.questionMaster.yesOrNoTab.uIControlQuestionLookupIcon.click();
  }

  async SelectAtSection(): Promise<void> {
    // uIMapQA.questionMaster.uISectionDropdown.sendKeys(BaseData.getQAFormValue("Section"));
  }

  async SelectAtSection(i: number): Promise<void> {
    // uIMapQA.questionMaster.uISectionDropdown.sendKeys(BaseData.getQAFormValue("Section"+i));
  }

  async EnterAtDisplayAs(): Promise<void> {
    // uIMapQA.questionMaster.uIDisplayAsEdit.sendKeys(BaseData.getQAFormValue("DisplayAs"));
  }

  async EnterAtQuestion(): Promise<void> {
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.ENTER);
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.click();
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(BaseData.getQAFormValue("Question"));
  }

  async EnterAtQuestion(i: number): Promise<void> {
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.ENTER);
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.click();
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(BaseData.getQAFormValue("Question"+i));
  }

  async SelectAtAnswerType(): Promise<void> {
    // uIMapQA.questionMaster.uIAnswerTypeDropdown.sendKeys(BaseData.getQAFormValue("AnswerType"));
    // uIMapQA.questionMaster.uIAnswerTypeDropdown.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async SelectAtAnswerType(i: number): Promise<void> {
    // uIMapQA.questionMaster.uIAnswerTypeDropdown.sendKeys(BaseData.getQAFormValue("AnswerType"+i));
    // uIMapQA.questionMaster.uIAnswerTypeDropdown.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async EnterAtCodedType(): Promise<void> {
    // uIMapQA.questionMaster.uICodeTypeLookup.sendKeys(BaseData.getQAFormValue("CodedType"));
    // uIMapQA.questionMaster.uICodeTypeLookup.sendKeys(Keys.TAB);
  }

  async SelectResponseRequiredChecbox(): Promise<void> {
    // uIMapQA.questionMaster.uIResponserequiredCheckbox.click();
  }

  async ClickAllowMultipleAnswerChecbox(): Promise<void> {
    // uIMapQA.questionMaster.uIAllowMultipleAnswerCheckbox.click();
  }

  async SelectHideChecbox(): Promise<void> {
    // uIMapQA.questionMaster.uIHideCheckbox.click();
  }

  async EnterAtScore(): Promise<void> {
    // uIMapQA.questionMaster.uIScoreYesEdit.sendKeys(BaseData.getQAFormValue("ScoreYes"));
    // uIMapQA.questionMaster.uIScoreNoEdit.sendKeys(BaseData.getQAFormValue("ScoreNo"));
  }

  async SaveScreen(): Promise<void> {
    // uIMapQA.questionMaster.uISaveButton.click();
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async ClickSaveNCloseButton(): Promise<void> {
    // uIMapQA.questionMaster.uISaveAndCloseButton.click();
    // if (Playback.browserType.equals("Chrome")) {
    // popup.confirm.yesWithExpectedMessage("(3)     Do You Want To Save All Of The Entered Details?");
    // } else
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async VerifyCodedTypeEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.questionMaster.uICodeTypeLookup.isEnabled());
  }

  async ClickCodedTypeLookup(): Promise<void> {
    // uIMapQA.questionMaster.uICodeTypeLookupButton.click();
    // Playback.controlReadyThreadWait();
  }

  async VerifyAtCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Code"),
    // uIMapQA.questionMaster.uICodeTypeLookup.getAttribute("value"));
  }

  async SelectSection(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapQA.questionMaster.uISectionDropdown);
  }

  async EnterQuestion(): Promise<void> {
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.ENTER);
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.click();
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Randomized.randomString(100));
  }

  async EnterAtColumnNo(): Promise<void> {
    // uIMapQA.questionMaster.uIColumnNoEdit.clear();
    // uIMapQA.questionMaster.uIColumnNoEdit.sendKeys(BaseData.getQAFormValue("ColumnNo"));
  }

  async ClickBoldCheckBox(): Promise<void> {
    // uIMapQA.questionMaster.uIBoldCheckbox.click();
  }

  async EnterAtLeadingSpace(): Promise<void> {
    // uIMapQA.questionMaster.uILeadingSpacesEdit.clear();
    // uIMapQA.questionMaster.uILeadingSpacesEdit.sendKeys(BaseData.getQAFormValue("LeadingSpace"));
  }

  async ClickUnderlineCheckBox(): Promise<void> {
    // uIMapQA.questionMaster.uIUnderlineCheckbox.click();
  }

  async VerifyYesNoMultipleChoiceTabDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.questionMaster.uIYesNoTab.getAttribute("class").contains("Dis"));
    // verify.ExpectedValueIsTrue(
    // uIMapQA.questionMaster.uIMultipleChoiceTab.getAttribute("class").contains("Dis"));
  }

  async Close(): Promise<void> {
    // uIMapQA.questionMaster.driver.close();
  }

  async EnterAtDisplayAs(i: number): Promise<void> {
    // uIMapQA.questionMaster.uIDisplayAsEdit.sendKeys(BaseData.getQAFormValue("DisplayAs"+i));
  }

  async EnterAtQuestion1(): Promise<void> {
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.ENTER);
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.click();
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(BaseData.getQAFormValue("Question1"));
  }

  async VerifyLeadingSpaceAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3515) Leading Spaces value must be less than 7");
  }

  async VerifyColumnNoAcknowledgeMessage(): Promise<void> {
    // if (Playback.browserType.equals("Chrome")) {
    // popup.acknowledge.okWithExpectedMessage("(3516) Column No value must be less than 6");
    // } else {
    // popup.acknowledge.okWithExpectedMessage("(3516) Column# value must be less than 6");
  }

  async EnterColumnNoMoreThan6(): Promise<void> {
    // uIMapQA.questionMaster.uIColumnNoEdit.sendKeys("7");
  }

  async EnterLeadingSpaceMoreThan7(): Promise<void> {
    // uIMapQA.questionMaster.uILeadingSpacesEdit.click();
    // uIMapQA.questionMaster.uILeadingSpacesEdit.sendKeys("8");
  }

  async ClickSave(): Promise<void> {
    // uIMapQA.questionMaster.uISaveButton.click();
  }

  async VerifyYesNoTrueFalseTabDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.questionMaster.uIYesNoTab.getAttribute("class").contains("Dis"));
    // verify.ExpectedValueIsTrue(uIMapQA.questionMaster.uITrueFalseTab.getAttribute("class").contains("Dis"));
  }

  async ClickIncludeGraphicText(): Promise<void> {
    // uIMapQA.questionMaster.uIIncludeGraphicEdit.click();
    // Playback.controlReadyThreadWait();
  }

  async SelectJPGFile(): Promise<void> {
    // objectIdentification.actionBuilder.Click(uIMapQA.questionMaster.uISelectButton);
    // Playback.pageLoadThreadWait();
    // Playback.pageLoadThreadWait();
    // // WindowsControl.FileBrowserWindow.EnterOpenFileName(Playback.TestResourceFolderPath
    // // + "img3.jpg");
    // Playback.pageLoadThreadWait();
    // // WindowsControl.FileBrowserWindow.ClickOpen();
  }

  async SelectTextDocuments(): Promise<void> {
    // objectIdentification.actionBuilder.Click(uIMapQA.questionMaster.uISelectButton);
    // Playback.pageLoadThreadWait();
    // Playback.pageLoadThreadWait();
    // // WindowsControl.FileBrowserWindow.EnterOpenFileName(PlayBack.TestResourceFolderPath
    // // + "TextDoc1.txt");
    // Playback.pageLoadThreadWait();
    // // WindowsControl.FileBrowserWindow.ClickOpen();
    // // WindowsControl.FileBrowserWindow.ClickCancel();
  }

  async VerifyInvalidFileNameeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1045) Invalid File Name");
  }

  async ClickClear(): Promise<void> {
    // uIMapQA.questionMaster.uIClearButton.click();
    // Playback.pageLoadThreadWait();
  }

  async ClickSelect(): Promise<void> {
    // uIMapQA.questionMaster.uISelectButton.click();
    // Playback.pageLoadThreadWait();
  }

  async EnterIncludeGraphicImage(): Promise<void> {
    // // uIMapQA.questionMaster.uIIncludeGraphicEdit.sendKeys(PlayBack.TestResourceFolderPath
    // // + "img3.jpg");
    // Playback.controlReadyThreadWait();
    // uIMapQA.questionMaster.uIIncludeGraphicEdit.sendKeys(Keys.TAB);
  }

  async EnterIncludeGraphicText(): Promise<void> {
    // // uIMapQA.questionMaster.uIIncludeGraphicEdit.sendKeys(PlayBack.TestResourceFolderPath
    // // +"TextDoc1.txt");
    // Playback.controlReadyThreadWait();
    // uIMapQA.questionMaster.uIIncludeGraphicEdit.sendKeys(Keys.TAB);
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapQA.questionMaster.uIBottomLeftSideStatusBar.getText());
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful",
    // uIMapQA.questionMaster.uIBottomLeftSideStatusBar.getText());
  }

  async SelectAtSection1(i: number): Promise<void> {
    // uIMapQA.questionMaster.uISectionDropdown.sendKeys(BaseData.getQAFormValue("Section"+i));
  }

  async SelectAtAnswerType1(): Promise<void> {
    // uIMapQA.questionMaster.uIAnswerTypeDropdown.sendKeys(BaseData.getQAFormValue("AnswerType1"));
    // uIMapQA.questionMaster.uIAnswerTypeDropdown.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapQA.questionMaster.uIResetButton.click();
  }

  async verifyAtSectionAsDefault(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapQA.questionMaster.uISectionDropdown);
    // verify.ExpectedValueIsTrue(dropDownSelectedItem.contains(BaseData.getQAFormValue("Section1")));
  }

  async verifyQuestionIsBlank(): Promise<void> {
    // String value = uIMapQA.questionMaster.uIQuestionsCommentEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(value == null);
  }

  async verifyAtAnswerTypeAsDefault(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapQA.questionMaster.uIAnswerTypeDropdown);
    // verify.ExpectedValueIsTrue(dropDownSelectedItem.contains(BaseData.getQAFormValue("AnswerType1")));
  }

  async clickYesOrNoTab(): Promise<void> {
    // uIMapQA.questionMaster.uIYesNoTab.click();
  }

  async SelectAtSection2(): Promise<void> {
    // uIMapQA.questionMaster.uISectionDropdown.sendKeys(BaseData.getQAFormValue("Section2"));
  }

  async EnterAtDisplayAs2(): Promise<void> {
    // uIMapQA.questionMaster.uIDisplayAsEdit.sendKeys(BaseData.getQAFormValue("DisplayAs2"));
  }

  async EnterAtQuestion2(): Promise<void> {
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.ENTER);
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.click();
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(BaseData.getQAFormValue("Question2"));
  }

  async SelectAtAnswerType2(): Promise<void> {
    // uIMapQA.questionMaster.uIAnswerTypeDropdown.sendKeys(BaseData.getQAFormValue("AnswerType2"));
    // uIMapQA.questionMaster.uIAnswerTypeDropdown.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async EnterAtQuestionWithTab(): Promise<void> {
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.ENTER);
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.click();
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(BaseData.getQAFormValue("Question"));
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.TAB);
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(BaseData.getQAFormValue("Question"));
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.TAB);
  }

  async enterAtQuestion3WithCopyPast(): Promise<void> {
    // String settingsModuleValue = BaseData.getSettingsModuleValue("Text");
    // StringSelection selection = new StringSelection(settingsModuleValue);
    // Toolkit.getDefaultToolkit().getSystemClipboard().setContents(selection, null);
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.click();
    // uIMapQA.questionMaster.uIQuestionsCommentEdit.sendKeys(Keys.CONTROL);
    // Actions actions = new Actions(Playback.driver);
    // actions.keyDown(Keys.CONTROL).sendKeys("v").keyUp(Keys.CONTROL).perform();
  }

}

export class QuestionReviewPage {
  readonly page: Page;
  readonly showAllQuestionsCheckbox: Locator;
  readonly comments1Edit: Locator;
  readonly comments2Edit: Locator;
  readonly imageView: Locator;
  readonly signHere: Locator;
  readonly question1: Locator;
  readonly section: Locator;
  readonly answerType: Locator;
  readonly question2: Locator;
  readonly question: Locator;
  readonly question3: Locator;
  readonly question4: Locator;

  constructor(page: Page) {
    this.page = page;
    this.showAllQuestionsCheckbox = page.locator('#chkShowAll');
    this.comments1Edit = page.locator('#txt100010000021191');
    this.comments2Edit = page.locator('#txt100010000021196');
    this.imageView = page.locator("//input[@class=\'imageView\']");
    this.signHere = page.locator("//input[@class=\'menuItem\']");
    this.question1 = page.locator("//span/div[contains(text(), \'Automation Test\')]");
    this.section = page.locator("//span[text()=\'MCP\']");
    this.answerType = page.locator("//input[@type=\'radio\']");
    this.question2 = page.locator("//span/div[contains(text(), \'What is Automation\')]");
    this.question = page.locator("//span//div[contains(text(), \'Automation Testing\')]");
    this.question3 = page.locator("//span/div[contains(text(), \'What is Automation DemoWhat\')]");
    this.question4 = page.locator("//span[contains(text(), \'In todayâ€™s fast-paced world, the ability to adapt to change has become more important than ever\')]");
  }

  async ClickShowAllQuestionsCheckbox(): Promise<void> {
    // uIMapQA.questionReview.uIShowAllQuestionsCheckbox.click();
    // Playback.controlReadyThreadWait();
  }

  async VerifyCommentsFieldDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.questionReview.uIComments1Edit.isDisplayed());
    // verify.ExpectedValueIsTrue(uIMapQA.questionReview.uIComments2Edit.isDisplayed());
  }

  async VerifyCommentsFieldNotDisplayed(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapQA.questionReview.uIComments1Edit.isDisplayed());
    // verify.ExpectedValueIsFalse(uIMapQA.questionReview.uIComments2Edit.isDisplayed());
  }

  async Close(): Promise<void> {
    // uIMapQA.questionReview.driver.close();
  }

  async VerifyBoldUndelineAsObviousNeedforEMS(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Playback.driver.findElement(By.xpath("//span[contains(text(),'Obvious Need for EMS?')]"))
    // .getAttribute("style").contains("bold"));
    // verify.ExpectedValueIsTrue(
    // Playback.driver.findElement(By.xpath("//span[contains(text(),'Obvious Need for EMS?')]"))
    // .getAttribute("style").contains("underline"));
  }

  async VerifyBoldUndelineAsUnderInfluenceAlcohol(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Playback.driver.findElement(By.xpath("//span[contains(text(),'Under influence-Alcohol?')]"))
    // .getAttribute("style").contains("bold"));
    // verify.ExpectedValueIsTrue(
    // Playback.driver.findElement(By.xpath("//span[contains(text(),'Under influence-Alcohol?')]"))
    // .getAttribute("style").contains("underline"));
  }

  async VerifyNonSplitColumn(): Promise<void> {
    // verify.ExpectedValueIsTrue(Playback.driver.findElement(By.xpath("//td[@class='bordercls']"))
    // .getAttribute("style").contains("width: 100%"));
  }

  async VerifySplitColumn(): Promise<void> {
    // verify.ExpectedValueIsTrue(Playback.driver.findElement(By.xpath("//td[@class='bordercls']"))
    // .getAttribute("style").contains("width: 50%"));
    // // verify.ExpectedPropertyValueIsEqual("width:50%",
    // // PnxBaseTest.driver.FindElement(By.XPath("//tr/td[@class='bordercls']")).getAttribute("style"));
  }

  async VerifyImageView(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapQA.questionReview.uIimageView.getAttribute("type").contains("image"));
  }

  async clickSignHereField(): Promise<void> {
    // uIMapQA.questionReview.uIsignHere.click();
  }

  async verifyAtQuestion2(): Promise<void> {
    // String Question = uIMapQA.questionReview.uIQuestion2.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question2"), Question);
  }

  async verifyAtQuestion1(): Promise<void> {
    // String Question = uIMapQA.questionReview.uIQuestion1.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question1"), Question);
  }

  async verifyAtAnswerType(): Promise<void> {
    // String attribute = uIMapQA.questionReview.uIAnswerType.getAttribute("type");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Answer"),attribute);
  }

  async verifyAtSectionIsDisplayed(): Promise<void> {
    // String Section = uIMapQA.questionReview.uISection.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Section"),Section);
  }

  async verifyAtQuestion(): Promise<void> {
    // String Question = uIMapQA.questionReview.uIQuestion.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question"), Question);
  }

  async verifyAtQuestion3(): Promise<void> {
    // String Question = uIMapQA.questionReview.uIQuestion3.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question3"), Question);
  }

  async verifyAtQuestion4(): Promise<void> {
    // String Question = uIMapQA.questionReview.uIQuestion4.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("Question4"), Question);
  }

}

export class PDFFormScreenPage {
  readonly page: Page;
  readonly printIcon: Locator;
  readonly printIconIsEnabledInPrintPopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.printIcon = page.locator('#cmdQAFormPrint');
    this.printIconIsEnabledInPrintPopup = page.locator('#cmdQAFormPrint');
  }

  async close(): Promise<void> {
    // uIMapQA.pdfFormScreen.driver.close();
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapQA.pdfFormScreen.uIPrintIcon.click();
  }

  async verifPrintIconIsEnabledInPrintPopup(): Promise<void> {
    // JavascriptExecutor js = (JavascriptExecutor) Playback.driver;
    // String str="return document.querySelector('body > print-preview-app').shadowRoot.querySelector('#sidebar').shadowRoot.querySelector('print-preview-button-strip').shadowRoot.querySelector('cr-button.action-button')";
    // WebDriver driver = Playback.driver;
    // WebElement executeScript =(WebElement)js.executeScript(str);
    // boolean enabled = executeScript.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

}

export class QuestionnarieRepositoryPage {
  readonly page: Page;
  readonly selectJurisDropdown: Locator;
  readonly repositoryIDEdit: Locator;
  readonly clearButton: Locator;
  readonly mandatoryCheckbox: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly sharedCheckbox: Locator;
  readonly roleLookupButton: Locator;
  readonly repositoryIDLookupButton: Locator;
  readonly qARepositoryTable: Locator;
  readonly formIDEdit: Locator;
  readonly formIDLookupButton: Locator;
  readonly pDFAttachmentComboBox: Locator;
  readonly activityTypeComboBox: Locator;
  readonly roleDropdown: Locator;
  readonly bottomMessageTextView: Locator;
  readonly selectCategoryButton: Locator;
  readonly nameFlagDropDown: Locator;
  readonly sortOrderEdit: Locator;
  readonly questionnaireRepositoryTable: Locator;
  readonly updateButton: Locator;
  readonly resetButton: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectJurisDropdown = page.locator('#lstJuris');
    this.repositoryIDEdit = page.locator('#usrQAFormRepository_lupReportID_CodeValue');
    this.clearButton = page.locator('#usrQAFormRepository_cmdClear');
    this.mandatoryCheckbox = page.locator('#chkmandatory');
    this.addButton = page.locator('#usrQAFormRepository_cmdAdd');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.sharedCheckbox = page.locator('#chkShared');
    this.roleLookupButton = page.locator('#lupsecurityid_imgBtn');
    this.repositoryIDLookupButton = page.locator('#lupReportID_imgBtn');
    this.qARepositoryTable = page.locator('#usrQAFormRepository_grdQARepository');
    this.formIDEdit = page.locator('#txtFormID');
    this.formIDLookupButton = page.locator('#lupReportID_imgBtn');
    this.pDFAttachmentComboBox = page.locator('#cddPdfAttachmentOptions_DropDown');
    this.activityTypeComboBox = page.locator('#cddActivityType_DropDown');
    this.roleDropdown = page.locator('#usrQAFormRepository_cddsecurityid_DropDown');
    this.bottomMessageTextView = page.locator("//td[@class = \'statusBar\']//b");
    this.selectCategoryButton = page.locator('#usrQAFormRepository_cddFrmCat_DropDown');
    this.nameFlagDropDown = page.locator('#cddNameFlag_DropDown');
    this.sortOrderEdit = page.locator('#usrQAFormRepository_txtSort');
    this.questionnaireRepositoryTable = page.locator('#usrQAFormRepository_grdQARepository');
    this.updateButton = page.locator('#usrQAFormRepository_cmdAdd');
    this.resetButton = page.locator('#cmdRefresh');
    this.printIcon = page.locator('#cmdPrint');
  }

  async EnterAtRepositoryID(): Promise<void> {
    // uIMapQA.questionnarieRepository.uIRepositoryIDEdit.sendKeys(BaseData.getQAFormValue("RepositoryID"));
    // uIMapQA.questionnarieRepository.uIRepositoryIDEdit.sendKeys(Keys.TAB);
  }

  async EnterAtRepositoryID(i: number): Promise<void> {
    // uIMapQA.questionnarieRepository.uIRepositoryIDEdit.sendKeys(BaseData.getQAFormValue("RepositoryID"+i));
    // uIMapQA.questionnarieRepository.uIRepositoryIDEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapQA.questionnarieRepository.uIAddButton.click();
  }

  async clickSaveButton(): Promise<void> {
    // uIMapQA.questionnarieRepository.uISaveButton.click();
  }

  async save(): Promise<void> {
    // uIMapQA.questionnarieRepository.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveNClose(): Promise<void> {
    // uIMapQA.questionnarieRepository.uISaveAndCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyAtRepositoryIDAddedInGrid(): Promise<void> {
    // WebElement id = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapQA.questionnarieRepository.uIQARepositoryTable, BaseData.getQAFormValue("RepositoryID"));
    // verify.ExpectedValueIsTrue(id.getText().contains(BaseData.getQAFormValue("RepositoryID")));
  }

  async verifyAtRepositoryIDAddedInGrid(i: number): Promise<void> {
    // WebElement id = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapQA.questionnarieRepository.uIQARepositoryTable, BaseData.getQAFormValue("RepositoryID"+i));
    // verify.ExpectedValueIsTrue(id.getText().contains(BaseData.getQAFormValue("RepositoryID"+i)));
  }

  async clickAtRepositoryIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapQA.questionnarieRepository.uIQARepositoryTable,
    // BaseData.getQAFormValue("RepositoryID"))
    // .click();
  }

  async selectAtPDFAttachmentComboBox(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapQA.questionnarieRepository.uIPDFAttachmentComboBox, BaseData.getQAFormValue("PDFAttachment"));
  }

  async selectAtActivityType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapQA.questionnarieRepository.uIActivityTypeComboBox,
    // BaseData.getSettingsModuleValue("ActivityType"));
  }

  async selectAtRole(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.questionnarieRepository.uIRoleDropdown,
    // BaseData.getQAFormValue("Role"));
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapQA.questionnarieRepository.uIBottomMessageTextView.getText(),
    // "1002 - Addition Successful");
  }

  async selectAtCategory(): Promise<void> {
    // //			uIMapQA.questionnarieRepository.uISelectCategoryButton.click();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapQA.questionnarieRepository.uISelectCategoryButton, BaseData.getQAFormValue("Category"));
  }

  async clickSharedCheckBox(): Promise<void> {
    // uIMapQA.questionnarieRepository.uISharedCheckbox.click();
  }

  async selectAtNameFlag(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.questionnarieRepository.uINameFlagDropDown,BaseData.getNamesModuleValue("NameFlag"));
  }

  async selectRowByAtRepositoryID(): Promise<void> {
    // WebElement row = objectIdentification.manualIdentify.getGridCell(
    // uIMapQA.questionnarieRepository.uIQuestionnaireRepositoryTable,
    // BaseData.getSettingsModuleValue("RepositoryID"), "Repository ID");
    // row.click();
  }

  async enterAtSortOrder(): Promise<void> {
    // uIMapQA.questionnarieRepository.uISortOrderEdit.sendKeys(BaseData.getSettingsModuleValue("SortOrder"));
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapQA.questionnarieRepository.uIUpdateButton.click();
  }

  async verifyAtSortOrderInGrid(): Promise<void> {
    // WebElement id = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapQA.questionnarieRepository.uIQuestionnaireRepositoryTable, BaseData.getQAFormValue("SortOrder"));
    // verify.ExpectedValueIsTrue(id.getText().contains(BaseData.getQAFormValue("SortOrder")));
  }

  async clearSortOrder(): Promise<void> {
    // uIMapQA.questionnarieRepository.uISortOrderEdit.clear();
  }

  async clickClearButton(): Promise<void> {
    // uIMapQA.questionnarieRepository.uIClearButton.click();
  }

  async clickResetButton(): Promise<void> {
    // uIMapQA.questionnarieRepository.uIResetButton.click();
  }

  async verifyGridCountIsZero(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapQA.questionnarieRepository.uIQuestionnaireRepositoryTable);
    // verify.ExpectedIntergerValueIsEqualToActual(gridTableRowsCount, 0);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapQA.questionnarieRepository.uIPrintIcon.click();
  }

  async verify1051Acknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedContainMessage("(1051) Updated data exists in the Display Screen tab. You must save or reset.");
  }

  async verifyAtScreenNameInGrid(): Promise<void> {
    // String ScreenName = objectIdentification.manualIdentify.getGridCell
    // (uIMapQA.questionnarieRepository.uIQuestionnaireRepositoryTable,BaseData.getSettingsModuleValue("ScreenName")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ScreenName"),ScreenName);
  }

  async verifyAtRoleNameInGrid(): Promise<void> {
    // String RoleName = objectIdentification.manualIdentify.getGridCell
    // (uIMapQA.questionnarieRepository.uIQuestionnaireRepositoryTable,BaseData.getSettingsModuleValue("RoleName")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RoleName"),RoleName);
  }

}

export class QAFormsPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly formSearchTable: Locator;
  readonly formNameEdit: Locator;
  readonly dateFromEdit: Locator;
  readonly dateFromTimeEdit: Locator;
  readonly dateToEdit: Locator;
  readonly dateToTimeEdit: Locator;
  readonly jurisDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#cmdSearch');
    this.formSearchTable = page.locator("//div[@id=\'grdFormSrch\']");
    this.formNameEdit = page.locator('#txtFormName');
    this.dateFromEdit = page.locator('#DttmFrom_Date_KPIDttmCtrl');
    this.dateFromTimeEdit = page.locator("//table[@id=\'DttmFrom_Time\']//input");
    this.dateToEdit = page.locator('#DttmEnd_Date_KPIDttmCtrl');
    this.dateToTimeEdit = page.locator("//table[@id=\'DttmEnd_Time\']//input");
    this.jurisDropdown = page.locator('#lstJuris');
  }

  async clickSearch(): Promise<void> {
    // uIMapQA.qAForms.uISearchButton.click();
  }

  async verifyAtFormNameInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getHomeModuleValue("FormName"),
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapQA.qAForms.uIFormSearchTable,
    // "Form Name", rowIndex));
  }

  async EnterAtFormName(): Promise<void> {
    // uIMapQA.qAForms.uIFormNameEdit.sendKeys(BaseData.getHomeModuleValue("FormName"));
  }

  async EnterFromDateAsPreviousDateAndTime(): Promise<void> {
    // uIMapQA.qAForms.uIDateFromEdit.click();
    // uIMapQA.qAForms.uIDateFromEdit.clear();
    // uIMapQA.qAForms.uIDateFromEdit.sendKeys(Randomized.getPreviousDate(1, "MM/dd/yyyy"));
    // Playback.pageLoadThreadWait();
    // uIMapQA.qAForms.uIDateFromTimeEdit.click();
    // uIMapQA.qAForms.uIDateFromTimeEdit.sendKeys(Randomized.getCurrentTime());
  }

  async EnterToDateAsCurrentDateAndTime(): Promise<void> {
    // uIMapQA.qAForms.uIDateToEdit.click();
    // uIMapQA.qAForms.uIDateToEdit.clear();
    // uIMapQA.qAForms.uIDateToEdit.sendKeys(Randomized.getCurrentDate("MM/dd/yyyy"));
    // Playback.pageLoadThreadWait();
    // uIMapQA.qAForms.uIDateToTimeEdit.click();
    // uIMapQA.qAForms.uIDateToTimeEdit.sendKeys(Randomized.getCurrentTime());
  }

  async CloseScreen(): Promise<void> {
    // uIMapQA.qAForms.driver.close();
  }

  async SelectAtFormName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapQA.qAForms.uIFormSearchTable,
    // BaseData.getHomeModuleValue("FormName"));
  }

  async verifyRowCountInGridIsNotNull(): Promise<void> {
    // int count = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapQA.qAForms.uIFormSearchTable);
    // verify.ExpectedValueIsTrue(count>0);
  }

  async selectJurisAsNull(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.qAForms.uIJurisDropdown, "--");
  }

  async switchToFieldNamePDF(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindowUsingURL("frmFieldNameDtl.aspx");
  }

}

export class FieldNamePDFPage {
  readonly page: Page;
  readonly fieldNameTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fieldNameTable = page.locator('#divFieldDtl');
  }

  async verifyAtHairColorDesc(): Promise<void> {
    // WebElement HairColor = Playback.driver.findElement(By.xpath("//div[@id='divFieldDtl']//table/tbody/tr/td[text()='HairColorDesc']/following-sibling::td"));
    // System.out.println(HairColor.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("HairColorDesc"), HairColor.getText());
  }

  async verifyAtEmpPhone(): Promise<void> {
    // WebElement empPhoneNo = Playback.driver.findElement(By.xpath("//div[@id='divFieldDtl']//table/tbody/tr/td[text()='EmployerPhone#']/following-sibling::td"));
    // System.out.println(empPhoneNo.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("EmployerPhone#"), empPhoneNo.getText());
  }

  async verifyAtEmail(): Promise<void> {
    // WebElement email = Playback.driver.findElement(By.xpath("//div[@id='divFieldDtl']//table/tbody/tr/td[text()='email']/following-sibling::td"));
    // System.out.println(email.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("email"), email.getText());
  }

  async closeScreen(): Promise<void> {
    // Playback.driver.close();
  }

  async verifyAtFields(fieldName: string, i: number): Promise<void> {
    // WebElement fieldNames = Playback.driver.findElement(By.xpath("//div[@id='divFieldDtl']//table/tbody/tr/td[text()='"+fieldName+"']/following-sibling::td"));
    // System.out.println(fieldNames.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("fieldName"+i), fieldNames.getText());
  }

  async verifyAtFields(fieldName: string, fieldValue: string): Promise<void> {
    // WebElement fieldNames = Playback.driver.findElement(By.xpath("//div[@id='divFieldDtl']//table/tbody/tr/td[text()='"+fieldName+"']/following-sibling::td"));
    // System.out.println(fieldNames.getText());
    // verify.ExpectedPropertyValueIsEqual(fieldValue, fieldNames.getText());
  }

  async verifyAtNamePhoneNumber(): Promise<void> {
    // WebElement empPhoneNo = Playback.driver.findElement(By.xpath("//div[@id='divFieldDtl']//table/tbody/tr/td[text()='NamePhoneNumber1']/following-sibling::td"));
    // System.out.println(empPhoneNo.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getQAFormValue("NamePhoneNumber#"), empPhoneNo.getText());
  }

}

export class SendEmailPopUpPage {
  readonly page: Page;
  readonly toedit: Locator;
  readonly subjectEdit: Locator;
  readonly messageEdit: Locator;
  readonly attachmentLabel: Locator;
  readonly sendButton: Locator;
  readonly closeButton: Locator;
  readonly gangTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toedit = page.locator("//input[@id=\'email\']");
    this.subjectEdit = page.locator('#subject');
    this.messageEdit = page.locator("//textarea[@id=\'txtareaMsg\']");
    this.attachmentLabel = page.locator('#lblAttachment');
    this.sendButton = page.locator('#btnSendMail');
    this.closeButton = page.locator('#btnclose');
    this.gangTab = page.locator("//span[contains(text(), \'Gang\')");
  }

  async enterAtTo(): Promise<void> {
    // uIMapQA.sendEmailPopUp.uIToedit.clear();
    // uIMapQA.sendEmailPopUp.uIToedit.sendKeys(BaseData.getQAFormValue("To"));
    // uIMapQA.sendEmailPopUp.uIToedit.sendKeys(Keys.TAB);
  }

  async enterAtMessage(): Promise<void> {
    // uIMapQA.sendEmailPopUp.uIMessageEdit.sendKeys(BaseData.getQAFormValue("Message"));
  }

  async enterAtSubject(): Promise<void> {
    // uIMapQA.sendEmailPopUp.uIsubjectEdit.click();
    // uIMapQA.sendEmailPopUp.uIsubjectEdit.clear();
    // uIMapQA.sendEmailPopUp.uIsubjectEdit.sendKeys(BaseData.getQAFormValue("Subject"));
  }

  async clickSend(): Promise<void> {
    // uIMapQA.sendEmailPopUp.uISendButton.click();
  }

  async verifyEmailHasBeenSentAlertPopup(): Promise<void> {
    // Playback.popupThreadWait();
    // Playback.popupThreadWait();
    // Playback.threadWait(20000);
    // popup.confirm.yesWithExpectedMessage("Email has been sent");
  }

}

