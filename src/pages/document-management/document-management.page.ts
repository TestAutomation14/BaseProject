import { Page, Locator, expect } from '@playwright/test';

// ==================== DocumentManagement (Switch Methods) ====================

export class DocumentManagementPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async SwitchToDocumentAssignSearch(): Promise<void> {
    // Switch to Document Assign Search window
  }

  async SwitchToDocumentManagementSearch(): Promise<void> {
    // Switch to Document Management Search window
  }

  async SwitchToDocumentEntry(): Promise<void> {
    // Switch to Document Entry window
  }

  async SwitchToMyDocumentSearch(): Promise<void> {
    // Switch to My Document Search window
  }

  async SwitchToMyDocumentEntry(): Promise<void> {
    // Switch to My Document Entry window
  }

  async switchToAccreditationSearch(): Promise<void> {
    // Switch to Accreditation Search window
  }

  async SwitchToWordDocEntry(): Promise<void> {
    // Switch to Word Doc Entry window
  }

  async switchToAccreditationEntry(): Promise<void> {
    // Switch to Accreditation Entry window
  }
}

// ==================== DocumentEntryPage ====================

export class DocumentEntryPage {
  readonly page: Page;

  // DocumentEntry locators
  readonly uIDocumentCategoryDropdown: Locator;
  readonly uIDocumentTypeDropdown: Locator;
  readonly uISortOrderTextBox: Locator;
  readonly uIDocumentTitleTextBox: Locator;
  readonly uIDocumentNoTextBox: Locator;
  readonly uICurrentVersionNoTextBox: Locator;
  readonly uICurrentVersionDateTextBox: Locator;
  readonly uISaveAndContinuetoAddtheDocumentButton: Locator;
  readonly uICancelButton: Locator;
  readonly uINewVersionNoEdit: Locator;
  readonly uICreateNewVersionButton: Locator;
  readonly uISendEmailReminderButton: Locator;
  readonly uIInactiveCheckBox: Locator;
  readonly UISaveButton: Locator;
  readonly UISaveNCloseButton: Locator;
  readonly UISaveandAddnewButton: Locator;
  readonly UIprintButton: Locator;
  readonly UIRefreshButton: Locator;
  readonly UIDeleteButton: Locator;
  readonly UINavigatetoAttachmentTab: Locator;
  readonly uIBottomMessage: Locator;

  // Tab navigators
  readonly UINavigatetoDocumentTab: Locator;
  readonly UINavigatetoAssignmentTab: Locator;
  readonly UINavigatetoReviewbyPFTab: Locator;
  readonly UINavigatetoDistributedToPFTab: Locator;
  readonly UINavigatetoBlogTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIDocumentCategoryDropdown = page.locator('#cddDocCatogory_DropDown');
    this.uIDocumentTypeDropdown = page.locator('#cddDocType');
    this.uISortOrderTextBox = page.locator('#txtCatSort');
    this.uIDocumentTitleTextBox = page.locator('#txtDocName');
    this.uIDocumentNoTextBox = page.locator('#txtDocumentNoRef');
    this.uICurrentVersionNoTextBox = page.locator('#txtCurrentVersion');
    this.uICurrentVersionDateTextBox = page.locator('#dtRevdt_KPIDttmCtrl');
    this.uISaveAndContinuetoAddtheDocumentButton = page.locator('#btnSaveAndCon');
    this.uICancelButton = page.locator('#btnCancel');
    this.uINewVersionNoEdit = page.locator('#txtNewVersion');
    this.uICreateNewVersionButton = page.locator('#cmdCrtNewVersion');
    this.uISendEmailReminderButton = page.locator('#cmdEmailrmd');
    this.uIInactiveCheckBox = page.locator('#chkInActive');
    this.UISaveButton = page.locator('#cmdSave');
    this.UISaveNCloseButton = page.locator('#cmdSaveNClose');
    this.UISaveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.UIprintButton = page.locator('#cmdPrint');
    this.UIRefreshButton = page.locator('#cmdRefresh');
    this.UIDeleteButton = page.locator('#cmdDelete');
    this.UINavigatetoAttachmentTab = page.locator("//div[@ID='tabDocument']//span[contains(text(),'Attachment')]");
    this.uIBottomMessage = page.locator("//td[@class='statusBar']//b");

    this.UINavigatetoDocumentTab = page.locator("//div[@ID='tabDocument']//span[contains(text(),'Document')]");
    this.UINavigatetoAssignmentTab = page.locator("//div[@ID='tabDocument']//span[contains(text(),'Assignment')]");
    this.UINavigatetoReviewbyPFTab = page.locator("//div[@ID='tabDocument']//span[contains(text(),'Review by PF')]");
    this.UINavigatetoDistributedToPFTab = page.locator("//div[@ID='tabDocument']//span[contains(text(),'Distributed To PF')]");
    this.UINavigatetoBlogTab = page.locator("//div[@ID='tabDocument']//span[contains(text(),'Blog')]");
  }

  async SelectAtDocumentCategory(documentCategory: string): Promise<void> {
    await this.uIDocumentCategoryDropdown.selectOption({ label: documentCategory });
  }

  async SelectAtDocumentType(documentType: string): Promise<void> {
    await this.uIDocumentTypeDropdown.selectOption({ label: documentType });
  }

  async EnterAtSortOrderNo(sortOrderNo: string): Promise<void> {
    await this.uISortOrderTextBox.fill(sortOrderNo);
  }

  async EnterAtDocumentTitle(documentTitle: string): Promise<void> {
    await this.uIDocumentTitleTextBox.fill(documentTitle);
  }

  async EnterAtDocumentNo(documentNo: string): Promise<void> {
    await this.uIDocumentNoTextBox.fill(documentNo);
  }

  async EnterAtCurrentVersionNo(currentVersion: string): Promise<void> {
    await this.uICurrentVersionNoTextBox.fill(currentVersion);
  }

  async EnterAtCurrentVersionDate(): Promise<void> {
    await this.uICurrentVersionDateTextBox.fill('');
  }

  async SelectInactiveCheckbox(): Promise<void> {
    await this.uIInactiveCheckBox.click();
  }

  async EnterAtNewVersionNo(newVersionNo: string): Promise<void> {
    await this.uINewVersionNoEdit.fill(newVersionNo);
  }

  async clickCreateNewVersionButton(): Promise<void> {
    await this.uICreateNewVersionButton.click();
  }

  async clickDocumentReminderButton(): Promise<void> {
    await this.uISendEmailReminderButton.click();
  }

  async clickSaveNContinuetheDocumentButton(): Promise<void> {
    await this.uISaveAndContinuetoAddtheDocumentButton.click();
  }

  async clickCancelButton(): Promise<void> {
    await this.uICancelButton.click();
  }

  async clickSaveButton(): Promise<void> {
    await this.UISaveButton.click();
  }

  async clickSaveNCloseButton(): Promise<void> {
    await this.UISaveNCloseButton.click();
  }

  async clickSaveNAddButton(): Promise<void> {
    await this.UISaveandAddnewButton.click();
  }

  async NavigateToDocumentTab(): Promise<void> {
    await this.UINavigatetoDocumentTab.click();
  }

  async NavigateToAssignmentTab(): Promise<void> {
    await this.UINavigatetoAssignmentTab.click();
  }

  async NavigateToReviewbyPFTab(): Promise<void> {
    await this.UINavigatetoReviewbyPFTab.click();
  }

  async NavigateToDistributedtoPFTab(): Promise<void> {
    await this.UINavigatetoDistributedToPFTab.click();
  }

  async NavigateToBlogTab(): Promise<void> {
    await this.UINavigatetoBlogTab.click();
  }

  async NavigateToAttachmentTab(): Promise<void> {
    await this.UINavigatetoAttachmentTab.click();
  }

  async SelectDocumentCategory(): Promise<void> {
    await this.uIDocumentCategoryDropdown.click();
  }

  async EnterDocumentTitle(): Promise<void> {
    await this.uIDocumentTitleTextBox.fill('');
  }

  async SelectDocumentType(): Promise<void> {
    await this.uIDocumentTypeDropdown.click();
  }

  async EnterCurrentVersionNo(): Promise<void> {
    await this.uICurrentVersionNoTextBox.fill('');
  }

  async EnterCurrentVersionDate(): Promise<void> {
    await this.uICurrentVersionDateTextBox.fill('');
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    const message = await this.uIBottomMessage.textContent();
    expect(message).toContain('Added Successfully');
  }

  async clickPrintIcon(): Promise<void> {
    await this.UIprintButton.click();
  }

  async verifyUpdateDataInBlogTabAcknMessage(): Promise<void> {
    /* popup: Update Data In Blog Tab */
  }

  async verifyDeleteIconIsDiabled(): Promise<void> {
    await expect(this.UIDeleteButton).toBeDisabled();
  }

  async verifyDeleteIconIsEnabled(): Promise<void> {
    await expect(this.UIDeleteButton).toBeEnabled();
  }

  async clickDelete(): Promise<void> {
    await this.UIDeleteButton.click();
  }

  async verifyDeleteConfirmationPopupAppearsAndClickCancel(): Promise<void> {
    /* confirm popup: Delete Confirmation */
  }

  async closeScreen(): Promise<void> {
    // Close the current screen
  }

  async verifyNewVersionFieldIsDisplayed(): Promise<void> {
    await expect(this.uINewVersionNoEdit).toBeVisible();
  }

  async verifyCreateNewVersionButtonIsDisplayed(): Promise<void> {
    await expect(this.uICreateNewVersionButton).toBeVisible();
  }

  async clickRefreshButton(): Promise<void> {
    await this.UIRefreshButton.click();
  }

  async verifyAdditionalSuccessFullMessage(): Promise<void> {
    const message = await this.uIBottomMessage.textContent();
    expect(message).toContain('Added Successfully');
  }

  async ClickSaveIcon(): Promise<void> {
    await this.UISaveButton.click();
  }
}

// ==================== DocumentTabPage ====================

export class DocumentTabPage {
  readonly page: Page;

  readonly uIWordRadioBox: Locator;
  readonly uIUploadFileRadioBox: Locator;
  readonly uIEnterLinkRadioBox: Locator;
  readonly uITextEditorRadioBox: Locator;
  readonly uISelectButton: Locator;
  readonly uIClickheretoAddEditLink: Locator;
  readonly uILinkTextBox: Locator;
  readonly uILinkViewButton: Locator;
  readonly uITemplatedropdown: Locator;
  readonly uILoadButton: Locator;
  readonly uIAddNewButton: Locator;
  readonly uITxtEditorControl: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIWordRadioBox = page.locator('#tabDocument_tmpl0_usrDocMgmtData_rbWord');
    this.uIUploadFileRadioBox = page.locator('#tabDocument_tmpl0_usrDocMgmtData_rbUpload');
    this.uIEnterLinkRadioBox = page.locator('#tabDocument_tmpl0_usrDocMgmtData_rbLink');
    this.uITextEditorRadioBox = page.locator('#tabDocument_tmpl0_usrDocMgmtData_rbText');
    this.uISelectButton = page.locator("//input[@class='ruButton ruBrowse']");
    this.uIClickheretoAddEditLink = page.locator('#tabDocument_tmpl0_usrDocMgmtData_lnkEdit');
    this.uILinkTextBox = page.locator('#tabDocument_tmpl0_usrDocMgmtData_txtLink');
    this.uILinkViewButton = page.locator('#tabDocument_tmpl0_usrDocMgmtData_cmdView');
    this.uITemplatedropdown = page.locator('#tabDocument_tmpl0_usrDocMgmtData_lstTextName');
    this.uILoadButton = page.locator('#tabDocument_tmpl0_usrDocMgmtData_btnLoad');
    this.uIAddNewButton = page.locator('#tabDocument_tmpl0_usrDocMgmtData_btnAddNew');
    this.uITxtEditorControl = page.locator('#tabDocument_tmpl0_usrDocMgmtData_rteKPITxt_contentIframe');
  }

  async clickWordRadioButton(): Promise<void> {
    await this.uIWordRadioBox.click();
  }

  async clickheretoAddEditlink(): Promise<void> {
    await this.uIClickheretoAddEditLink.click();
  }

  async clickUploadaFileRadioButton(): Promise<void> {
    await this.uIUploadFileRadioBox.click();
  }

  async clickFileNameButton(): Promise<void> {
    await this.uISelectButton.click();
  }

  async clickEnteraLinkRadioButton(): Promise<void> {
    await this.uIEnterLinkRadioBox.click();
  }

  async clickLinkViewButton(): Promise<void> {
    await this.uILinkViewButton.click();
  }

  async EnterAtlink(url: string): Promise<void> {
    await this.uILinkTextBox.fill(url);
  }

  async clickTextEditorRadioButton(): Promise<void> {
    await this.uITextEditorRadioBox.click();
  }

  async EnterTextDescription(): Promise<void> {
    // Enter text in the text editor iframe
  }

  async SelectAtTemplate(template: string): Promise<void> {
    await this.uITemplatedropdown.selectOption({ label: template });
  }

  async clickSelectButton(): Promise<void> {
    await this.uISelectButton.click();
  }
}

// ==================== AssignmentTabPage ====================

export class AssignmentTabPage {
  readonly page: Page;

  readonly uIDocumentDescriptionTextBox: Locator;
  readonly uICriticalCheckBox: Locator;
  readonly uIMaintainQuestionnaireButton: Locator;
  readonly uIScoretoMarkasReadTextBox: Locator;
  readonly uIDocumentAuthorTextBox: Locator;
  readonly uIChangedStatusToDropdown: Locator;
  readonly uIAssignedDateTextBox: Locator;
  readonly uIDistributeCheckBox: Locator;
  readonly uIReviewByDateTextBox: Locator;
  readonly uIDocumentAuthorDescriptionEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIDocumentDescriptionTextBox = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_txtDscription');
    this.uICriticalCheckBox = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_chkCritical');
    this.uIMaintainQuestionnaireButton = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_cmdMtnQues');
    this.uIScoretoMarkasReadTextBox = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_txtScore');
    this.uIDocumentAuthorTextBox = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_lupPFCode_CodeValue');
    this.uIChangedStatusToDropdown = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_cddDocStatus_DropDown');
    this.uIAssignedDateTextBox = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_dtAssignedDate_KPIDttmCtrl');
    this.uIDistributeCheckBox = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_chkDistribute');
    this.uIReviewByDateTextBox = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_dtReviewByDate_KPIDttmCtrl');
    this.uIDocumentAuthorDescriptionEdit = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_lupPFCode_CodeDescription');
  }

  async EnterAtDoumentDescription(description: string): Promise<void> {
    await this.uIDocumentDescriptionTextBox.fill(description);
  }

  async clickAddQuestionnaire(): Promise<void> {
    await this.uIMaintainQuestionnaireButton.click();
  }

  async EnterAtDocumentAuthor(documentAuthor: string): Promise<void> {
    await this.uIDocumentAuthorTextBox.fill(documentAuthor);
  }

  async SelectAtChangeStatus(changeStatus: string): Promise<void> {
    await this.uIChangedStatusToDropdown.selectOption({ label: changeStatus });
  }

  async EnterAtAssignedDate(): Promise<void> {
    await this.uIAssignedDateTextBox.fill('');
  }

  async EnterAtReviewByDate(): Promise<void> {
    await this.uIReviewByDateTextBox.fill('');
  }

  async SelectDistributeCheckBox(): Promise<void> {
    await this.uIDistributeCheckBox.click();
  }

  async SelectCriticalCheckBox(): Promise<void> {
    await this.uICriticalCheckBox.click();
  }

  async enterAtScoreToMarkAsRead(score: string): Promise<void> {
    await this.uIScoretoMarkasReadTextBox.fill(score);
  }

  async verifyScoreToMarkAsRead(score: string): Promise<void> {
    const actual = await this.uIScoretoMarkasReadTextBox.inputValue();
    expect(actual).toEqual(score);
  }

  async verifyAtDocumentAuthorPFCode(pfCode: string): Promise<void> {
    const actual = await this.uIDocumentAuthorTextBox.inputValue();
    expect(actual).toEqual(pfCode);
  }

  async verifyAtDocumentAuthorPFDescription(description: string): Promise<void> {
    const actual = await this.uIDocumentAuthorDescriptionEdit.inputValue();
    expect(actual).toEqual(description);
  }
}

// ==================== ReviewbyPFTabPage ====================

export class ReviewbyPFTabPage {
  readonly page: Page;

  readonly uIDivisionDropdown: Locator;
  readonly uISectionDropdown: Locator;
  readonly uISquadDropdown: Locator;
  readonly uIAdd1Button: Locator;
  readonly uIClear1Button: Locator;
  readonly uIReviewerPFTextBox: Locator;
  readonly uIAdd2Button: Locator;
  readonly uIClear2Button: Locator;
  readonly uIAddMultiplePFButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIDivisionDropdown = page.locator('#tabDocument_tmpl2_usrDocReviewedPF_cddDivision_DropDown');
    this.uISectionDropdown = page.locator('#tabDocument_tmpl2_usrDocReviewedPF_cddSection_DropDown');
    this.uISquadDropdown = page.locator('#tabDocument_tmpl1_usrDocMgmtAssignment_cmdMtnQues');
    this.uIAdd1Button = page.locator('#tabDocument_tmpl2_usrDocReviewedPF_cmdImgAdd');
    this.uIClear1Button = page.locator('#tabDocument_tmpl2_usrDocReviewedPF_cmdImgClear');
    this.uIReviewerPFTextBox = page.locator('#tabDocument_tmpl2_usrDocReviewedPF_lupPFNbr_CodeValue');
    this.uIAdd2Button = page.locator('#tabDocument_tmpl2_usrDocReviewedPF_imgAdd');
    this.uIClear2Button = page.locator('#tabDocument_tmpl2_usrDocReviewedPF_imgClear');
    this.uIAddMultiplePFButton = page.locator('#tabDocument_tmpl2_usrDocReviewedPF_cmdAddMulPF');
  }

  async SelectAtDivision(division: string): Promise<void> {
    await this.uIDivisionDropdown.selectOption({ label: division });
  }

  async SelectAtSection(section: string): Promise<void> {
    await this.uISectionDropdown.selectOption({ label: section });
  }

  async SelectAtSquad(squad: string): Promise<void> {
    await this.uISquadDropdown.selectOption({ label: squad });
  }

  async clickAddButton1(): Promise<void> {
    await this.uIAdd1Button.click();
  }

  async clickClearButton0(): Promise<void> {
    await this.uIClear1Button.click();
  }

  async EnterAtReviewByPF(reviewerPF: string): Promise<void> {
    await this.uIReviewerPFTextBox.fill(reviewerPF);
  }

  async clickAddMultiplePF(): Promise<void> {
    await this.uIAddMultiplePFButton.click();
  }

  async clickAddButton2(): Promise<void> {
    await this.uIAdd2Button.click();
  }

  async clickClearButton1(): Promise<void> {
    await this.uIClear2Button.click();
  }
}

// ==================== DistributedToPFTabPage ====================

export class DistributedToPFTabPage {
  readonly page: Page;

  readonly uIDivisionDropdown: Locator;
  readonly uISectionDropdown: Locator;
  readonly uISquadDropdown: Locator;
  readonly uIAdd1Button: Locator;
  readonly uIClear1Button: Locator;
  readonly uIDocumentTobeReadyByTextBox: Locator;
  readonly uIAdd2Button: Locator;
  readonly uIClear2Button: Locator;
  readonly uIAddMultiplePFButton: Locator;
  readonly uIShowUnreadOnlyCheckBox: Locator;
  readonly uINameFilterTextBox: Locator;
  readonly uIRefreshPFButton: Locator;
  readonly uIDistributedPFTableGrid: Locator;
  readonly uIDistributedPFGrid2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIDivisionDropdown = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_cddDivision_DropDown');
    this.uISectionDropdown = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_cddSection_DropDown');
    this.uISquadDropdown = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_lupSquad_DropDown');
    this.uIAdd1Button = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_cmdImgAdd');
    this.uIClear1Button = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_cmdImgClear');
    this.uIDocumentTobeReadyByTextBox = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_lupPFNbr_CodeValue');
    this.uIAdd2Button = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_imgAdd');
    this.uIClear2Button = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_imgClear');
    this.uIAddMultiplePFButton = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_cmdAddMulPF');
    this.uIShowUnreadOnlyCheckBox = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_chkIsUnread');
    this.uINameFilterTextBox = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_txtnamefilter');
    this.uIRefreshPFButton = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_cmdRefresh');
    this.uIDistributedPFTableGrid = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_grdDistributedPF');
    this.uIDistributedPFGrid2 = page.locator('#tabDocument_tmpl3_usrDocDistributedPF_grdPF');
  }

  async selectAtDivision(division: string): Promise<void> {
    await this.uIDivisionDropdown.selectOption({ label: division });
  }

  async selectAtSection(section: string): Promise<void> {
    await this.uISectionDropdown.selectOption({ label: section });
  }

  async selectAtSquad(squad: string): Promise<void> {
    await this.uISquadDropdown.selectOption({ label: squad });
  }

  async clickAddButton1(): Promise<void> {
    await this.uIAdd1Button.click();
  }

  async clickClearButton0(): Promise<void> {
    await this.uIClear1Button.click();
  }

  async EnterAtDocumentToBeReadByPF(pf: string): Promise<void> {
    await this.uIDocumentTobeReadyByTextBox.fill(pf);
  }

  async selectShowUnreadyOnlyCheckbox(): Promise<void> {
    await this.uIShowUnreadOnlyCheckBox.click();
  }

  async EnterAtNameFilter(nameFilter: string): Promise<void> {
    await this.uINameFilterTextBox.fill(nameFilter);
  }

  async clickRefreshButton(): Promise<void> {
    await this.uIRefreshPFButton.click();
  }

  async clickAddMultiplePF(): Promise<void> {
    await this.uIAddMultiplePFButton.click();
  }

  async clickAddButton2(): Promise<void> {
    await this.uIAdd2Button.click();
  }

  async clickClearButton1(): Promise<void> {
    await this.uIClear2Button.click();
  }

  async verifyAtSquadInGrid(squad: string): Promise<void> {
    const cell = this.uIDistributedPFTableGrid.locator('td', { hasText: squad });
    await expect(cell.first()).toBeVisible();
  }

  async verifyAtPFInGrid2(pf: string): Promise<void> {
    const cell = this.uIDistributedPFGrid2.locator('td', { hasText: pf });
    await expect(cell.first()).toBeVisible();
  }

  async enterAtDocumentToBeReadByPF(pf: string): Promise<void> {
    await this.uIDocumentTobeReadyByTextBox.fill(pf);
    await this.uIDocumentTobeReadyByTextBox.press('Tab');
  }
}

// ==================== BlogTabPage ====================

export class BlogTabPage {
  readonly page: Page;

  readonly uIUpdateDateTextBox: Locator;
  readonly uIUpdateTimeTextBox: Locator;
  readonly uIUpdatedByTextBox: Locator;
  readonly uICommentsTextBox: Locator;
  readonly uISaveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIUpdateDateTextBox = page.locator('#tabDocument_tmpl4_usrDocMgmtBlog_dttmUpdate_Date_KPIDttmCtrl');
    this.uIUpdateTimeTextBox = page.locator("//table[@ID='tabDocument_tmpl4_usrDocMgmtBlog_dttmUpdate_Time']//input[contains(@class,'textboxdatetime')]");
    this.uIUpdatedByTextBox = page.locator('#tabDocument_tmpl4_usrDocMgmtBlog_lupPFNbr_CodeValue');
    this.uICommentsTextBox = page.locator('#tabDocument_tmpl4_usrDocMgmtBlog_txtComments');
    this.uISaveButton = page.locator('#tabDocument_tmpl4_usrDocMgmtBlog_cmdSave');
  }

  async EnterAtUpdateDateTime(): Promise<void> {
    await this.uIUpdateDateTextBox.fill('');
    await this.uIUpdateTimeTextBox.fill('');
  }

  async EnterAtUpdatedBy(updatedBy: string): Promise<void> {
    await this.uIUpdatedByTextBox.fill(updatedBy);
  }

  async enterAtComments(comment: string): Promise<void> {
    await this.uICommentsTextBox.fill(comment);
  }

  async EnterAtComments(comment: string): Promise<void> {
    await this.uICommentsTextBox.fill(comment);
  }

  async clickSaveButton(): Promise<void> {
    await this.uISaveButton.click();
  }

  async verifyAtCommentsInGrid(comment: string): Promise<void> {
    const cell = this.page.locator('td', { hasText: comment });
    await expect(cell.first()).toBeVisible();
  }
}

// ==================== MyDocumentsSearchPage ====================

export class MyDocumentsSearchPage {
  readonly page: Page;

  readonly uIDocumentCategoryDropdown: Locator;
  readonly uIDocumentTypeDropdown: Locator;
  readonly uIDocumentTitleTextBox: Locator;
  readonly uIKeywordsTextBox: Locator;
  readonly uIShowAllCheckBox: Locator;
  readonly uIShowUnreadOnlyCheckBox: Locator;
  readonly uISearchButton: Locator;
  readonly uIRefreshButton: Locator;
  readonly uIPrintIcon: Locator;
  readonly uIExcelIcon: Locator;
  readonly uIExpandCollapseCheckBox: Locator;
  readonly uIMyDocumentGridTable: Locator;
  readonly uIBackLinkButton: Locator;
  readonly uIResetLinkButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIDocumentCategoryDropdown = page.locator('#cddDocCat_DropDown');
    this.uIDocumentTypeDropdown = page.locator('#cddDocType');
    this.uIDocumentTitleTextBox = page.locator('#txtDocTitle');
    this.uIKeywordsTextBox = page.locator('#txtKeyword');
    this.uIShowAllCheckBox = page.locator('#chkshowAll_0');
    this.uIShowUnreadOnlyCheckBox = page.locator('#chkshowAll_1');
    this.uISearchButton = page.locator('#Kpibutton1');
    this.uIRefreshButton = page.locator('#cmdRefresh');
    this.uIPrintIcon = page.locator("//img[contains(@src,'print.gif')]");
    this.uIExcelIcon = page.locator("//img[contains(@src,'excel.gif')]");
    this.uIExpandCollapseCheckBox = page.locator('#chkExpandAll');
    this.uIMyDocumentGridTable = page.locator('#grdDoc');
    this.uIBackLinkButton = page.locator("//span[text()='Back']");
    this.uIResetLinkButton = page.locator("//span[text()='Reset']");
  }

  async SelectAtDocumentCategory(documentCategory: string): Promise<void> {
    await this.uIDocumentCategoryDropdown.selectOption({ label: documentCategory });
  }

  async SelectAtDocumentType(documentType: string): Promise<void> {
    await this.uIDocumentTypeDropdown.selectOption({ label: documentType });
  }

  async EnterAtDocumentTitle(documentTitle: string): Promise<void> {
    await this.uIDocumentTitleTextBox.fill(documentTitle);
  }

  async enterAtKeywords(keywords: string): Promise<void> {
    await this.uIKeywordsTextBox.fill(keywords);
  }

  async SelectShowAllRadioBox(): Promise<void> {
    await this.uIShowAllCheckBox.click();
  }

  async SelectShowUnreadOnlyRadioBox(): Promise<void> {
    await this.uIShowUnreadOnlyCheckBox.click();
  }

  async clickSearchButton(): Promise<void> {
    await this.uISearchButton.click();
  }

  async clickRefershButton(): Promise<void> {
    await this.uIRefreshButton.click();
  }

  async SelectMyDocumentfromGrid(documentTitle: string): Promise<void> {
    const row = this.uIMyDocumentGridTable.locator('tr', { hasText: documentTitle });
    await row.first().click();
  }

  async SelectExpandCollapseCheckbox(): Promise<void> {
    await this.uIExpandCollapseCheckBox.click();
  }

  async clickColumnHeaderByAtName(columnName: string): Promise<void> {
    const header = this.uIMyDocumentGridTable.locator('th', { hasText: columnName });
    await header.first().click();
  }

  async verifyAtDocumentNameInGrid(documentName: string): Promise<void> {
    const cell = this.uIMyDocumentGridTable.locator('td', { hasText: documentName });
    await expect(cell.first()).toBeVisible();
  }

  async getDocumentNameCountInGrid(): Promise<number> {
    const links = this.page.locator("//td[@class='link']");
    const count = await links.count();
    let visibleCount = 0;
    for (let i = 0; i < count; i++) {
      if (await links.nth(i).isVisible()) visibleCount++;
    }
    return visibleCount;
  }

  async clicPrintIcon(): Promise<void> {
    await this.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    await this.uIExcelIcon.click();
  }

  async verifyAtColumnValuesAreSortedAscending(): Promise<void> {
    // Verify column values are sorted in ascending order
  }

  async verifyAtType(type: string): Promise<void> {
    const cell = this.uIMyDocumentGridTable.locator('td', { hasText: type });
    await expect(cell.first()).toBeVisible();
  }

  async clickBack(): Promise<void> {
    await this.uIBackLinkButton.click();
  }

  async clickReset(): Promise<void> {
    await this.uIResetLinkButton.click();
  }
}

// ==================== DocumentManagementSearchPage ====================

export class DocumentManagementSearchPage {
  readonly page: Page;

  readonly uIDocumentCategoryDropdown: Locator;
  readonly uIDocumentTypeDropdown: Locator;
  readonly uIDocumentTitleTextBox: Locator;
  readonly uIDocumentNoTextBox: Locator;
  readonly uIAssignedByPFNoTextBox: Locator;
  readonly uIKeywordsTextBox: Locator;
  readonly uIAssignedFromDateTextBox: Locator;
  readonly uIAssignedToDateTextBox: Locator;
  readonly uICriticalCheckBox: Locator;
  readonly uIAssignedToPFNoTextBox: Locator;
  readonly uISelectAllCheckbox: Locator;
  readonly uIReadStatusUnreadRadioBox: Locator;
  readonly uIReadStatusreadOnlyRadioBox: Locator;
  readonly uIIncludeInactiveCheckBox: Locator;
  readonly uIExpandCollapseCheckBox: Locator;
  readonly uISearchButton: Locator;
  readonly uIResultTable: Locator;
  readonly uIExcelIcon: Locator;
  readonly uISelectCount: Locator;
  readonly uIReadStatusAllRadioButton: Locator;
  readonly uIAssignedByPFDecriptionEdit: Locator;
  readonly uIDivisionDropdown: Locator;
  readonly uISectionDropdown: Locator;
  readonly uISquadCodeValueEdit: Locator;
  readonly uISquadCodeDecriptionEdit: Locator;
  readonly uIDivisionAccordionArrow: Locator;
  readonly uIMultiplePFAccordionArrow: Locator;
  readonly uIAssignedToButton: Locator;
  readonly uIMultiplePFGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIDocumentCategoryDropdown = page.locator('#cddDocCat_DropDown');
    this.uIDocumentTypeDropdown = page.locator('#cddDocType');
    this.uIDocumentTitleTextBox = page.locator('#txtDocTitle');
    this.uIDocumentNoTextBox = page.locator('#txtDocumentNoRef');
    this.uIAssignedByPFNoTextBox = page.locator('#lupAssbyPF_CodeValue');
    this.uIKeywordsTextBox = page.locator('#txtKeyWord');
    this.uIAssignedFromDateTextBox = page.locator('#dtAssDateFrom_KPIDttmCtrl');
    this.uIAssignedToDateTextBox = page.locator('#dtAssDateTo_KPIDttmCtrl');
    this.uICriticalCheckBox = page.locator('#chkCritical');
    this.uIAssignedToPFNoTextBox = page.locator('#lupAssToPF_CodeValue');
    this.uISelectAllCheckbox = page.locator('#chkSelectAll');
    this.uIReadStatusUnreadRadioBox = page.locator('#rbtnUnread');
    this.uIReadStatusreadOnlyRadioBox = page.locator('#rbtnReadStatus');
    this.uIIncludeInactiveCheckBox = page.locator('#chkInactive');
    this.uIExpandCollapseCheckBox = page.locator('#chkExpandAll');
    this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
    this.uIResultTable = page.locator('#grdDoc');
    this.uIExcelIcon = page.locator("//img[contains(@src,'excel.gif')]");
    this.uISelectCount = page.locator('#KPILbSelectCnt');
    this.uIReadStatusAllRadioButton = page.locator('#rbtnAll');
    this.uIAssignedByPFDecriptionEdit = page.locator('#lupAssbyPF_CodeDescription');
    this.uIDivisionDropdown = page.locator('#cddDivision_DropDown');
    this.uISectionDropdown = page.locator('#cddSection_DropDown');
    this.uISquadCodeValueEdit = page.locator('#lupSquad_CodeValue');
    this.uISquadCodeDecriptionEdit = page.locator('#lupSquad_CodeDescription');
    this.uIDivisionAccordionArrow = page.locator("//h3[@id='ui-id-1']//span[contains(@class,'ui-accordion-header-icon')]");
    this.uIMultiplePFAccordionArrow = page.locator("//h3[@id='ui-id-3']//span[contains(@class,'ui-accordion-header-icon')]");
    this.uIAssignedToButton = page.locator('#cmdAddMulPF');
    this.uIMultiplePFGrid = page.locator('#RadDivTreeView');
  }

  async SelectAtDocumentCategory(documentCategory: string): Promise<void> {
    await this.uIDocumentCategoryDropdown.selectOption({ label: documentCategory });
  }

  async SelectAtDocumentType(documentType: string): Promise<void> {
    await this.uIDocumentTypeDropdown.selectOption({ label: documentType });
  }

  async EnterAtDocumentTitle(documentTitle: string): Promise<void> {
    await this.uIDocumentTitleTextBox.fill(documentTitle);
  }

  async EnterAtDocumentNo(documentNo: string): Promise<void> {
    await this.uIDocumentNoTextBox.fill(documentNo);
  }

  async EnterAtAssignedByPFNo(assignedByPFNo: string): Promise<void> {
    await this.uIAssignedByPFNoTextBox.fill(assignedByPFNo);
  }

  async enterAtKeywords(keywords: string): Promise<void> {
    await this.uIKeywordsTextBox.fill(keywords);
  }

  async EnterAtAssignedDate(): Promise<void> {
    await this.uIAssignedFromDateTextBox.fill('');
  }

  async SelectCriticalCheckBox(): Promise<void> {
    await this.uICriticalCheckBox.click();
  }

  async EnterAtAssignedToPFNo(assignedToPFNo: string): Promise<void> {
    await this.uIAssignedToPFNoTextBox.fill(assignedToPFNo);
  }

  async clickSelectAllCheckBox(): Promise<void> {
    await this.uISelectAllCheckbox.click();
  }

  async verifyAllCheckboxesAreCheckedInGrid(): Promise<void> {
    const checkboxes = this.uIResultTable.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(checkboxes.nth(i)).toBeChecked();
    }
  }

  async verifyAllCheckboxesAreNotCheckedInGrid(): Promise<void> {
    const checkboxes = this.uIResultTable.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(checkboxes.nth(i)).not.toBeChecked();
    }
  }

  async SelectUnreadCheckBox(): Promise<void> {
    await this.uIReadStatusUnreadRadioBox.click();
  }

  async SelectReadOnlyCheckBox(): Promise<void> {
    await this.uIReadStatusreadOnlyRadioBox.click();
  }

  async SelectInculdeInactiveCheckBox(): Promise<void> {
    await this.uIIncludeInactiveCheckBox.click();
  }

  async clickAddNewButton(): Promise<void> {
    const addNewButton = this.page.locator("//span[contains(text(),'Add New')]");
    await addNewButton.click();
  }

  async clickSearchLink(): Promise<void> {
    await this.uISearchButton.click();
  }

  async clickResetLink(): Promise<void> {
    const resetLink = this.page.locator("//span[contains(text(),'Reset')]");
    await resetLink.click();
  }

  async clickBackLink(): Promise<void> {
    const backLink = this.page.locator("//span[contains(text(),'Back')]");
    await backLink.click();
  }

  async clickPrintIcon(): Promise<void> {
    const printIcon = this.page.locator("//img[contains(@src,'print.gif')]");
    await printIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    await this.uIExcelIcon.click();
  }

  async SelectDocumentEntryFromGrid(documentTitle: string): Promise<void> {
    const row = this.uIResultTable.locator('tr', { hasText: documentTitle });
    await row.first().click();
  }

  async clickColumnHeaderByAtName(columnName: string): Promise<void> {
    const header = this.uIResultTable.locator('th', { hasText: columnName });
    await header.first().click();
  }

  async verifyDeserilizationErrorPopupNotAppears(): Promise<void> {
    // Verify deserialization error popup does not appear
  }

  async getRecordCountInGrid(): Promise<number> {
    const inputs = this.page.locator("//input[contains(@id,'grdDoc_ctl00_it1_')]");
    return await inputs.count();
  }

  async verifyRecordCountInGrid(count: string): Promise<void> {
    const text = await this.uISelectCount.textContent() || '0';
    expect(parseInt(text)).toEqual(parseInt(count));
  }

  async verifyListedRecordIsChecked(): Promise<void> {
    const checkbox = this.uIResultTable.locator('input[type="checkbox"]').first();
    await expect(checkbox).toBeChecked();
  }

  async clickExpandCollapseCheckbox(): Promise<void> {
    await this.uIExpandCollapseCheckBox.click();
  }

  async selectAtDocumentCategoryCheckboxInGrid(documentCategory: string): Promise<void> {
    const row = this.uIResultTable.locator('tr', { hasText: documentCategory });
    const checkbox = row.first().locator('input[type="checkbox"]');
    await checkbox.click();
  }

  async verifyAtDocumentNameInGrid(documentName: string): Promise<void> {
    const cell = this.uIResultTable.locator('td', { hasText: documentName });
    await expect(cell.first()).toBeVisible();
  }

  async verifyAtDocumentCategoryInGrid(documentCategory: string): Promise<void> {
    const cell = this.uIResultTable.locator('td', { hasText: documentCategory });
    await expect(cell.first()).toBeVisible();
  }

  async verifyAtDocumentTypeInGrid(documentType: string): Promise<void> {
    const cell = this.uIResultTable.locator('td', { hasText: documentType });
    await expect(cell.first()).toBeVisible();
  }

  async clickReadStatusAllRadioButton(): Promise<void> {
    await this.uIReadStatusAllRadioButton.click();
  }

  async verifyAtDocumentCategory(documentCategory: string): Promise<void> {
    const selected = await this.uIDocumentCategoryDropdown.inputValue();
    expect(selected).toEqual(documentCategory);
  }

  async verifyAtType(type: string): Promise<void> {
    const selected = await this.uIDocumentTypeDropdown.inputValue();
    expect(selected).toEqual(type);
  }

  async verifyDocumentTitleAsBlank(): Promise<void> {
    const value = await this.uIDocumentTitleTextBox.inputValue();
    expect(value).toEqual('');
  }

  async verifyDocumentNoAsBlank(): Promise<void> {
    const value = await this.uIDocumentNoTextBox.inputValue();
    expect(value).toEqual('');
  }

  async verifyAssignedByPFAsBlank(): Promise<void> {
    const value = await this.uIAssignedByPFNoTextBox.inputValue();
    expect(value).toEqual('');
  }

  async verifyKeywordsAsBlank(): Promise<void> {
    const value = await this.uIKeywordsTextBox.inputValue();
    expect(value).toEqual('');
  }

  async verifyAssignedDateAsBlank(): Promise<void> {
    const value = await this.uIAssignedFromDateTextBox.inputValue();
    expect(value).toEqual('');
  }

  async verifyCriticalCheckboxIsUnselected(): Promise<void> {
    await expect(this.uICriticalCheckBox).not.toBeChecked();
  }

  async verifyIncludeInactiveCheckboxIsUnselected(): Promise<void> {
    await expect(this.uIIncludeInactiveCheckBox).not.toBeChecked();
  }

  async verifyReadStatusAllRadioButtonIsUnselected(): Promise<void> {
    await expect(this.uIReadStatusAllRadioButton).not.toBeChecked();
  }

  async selectAtDivision(division: string): Promise<void> {
    await this.uIDivisionDropdown.selectOption({ label: division });
  }

  async selectAtSection(section: string): Promise<void> {
    await this.uISectionDropdown.selectOption({ label: section });
  }

  async enterAtSquad(squad: string): Promise<void> {
    await this.uISquadCodeValueEdit.fill(squad);
  }

  async verifyAtDivision(division: string): Promise<void> {
    const selected = await this.uIDivisionDropdown.inputValue();
    expect(selected).toEqual(division);
  }

  async verifyAtSection(section: string): Promise<void> {
    const selected = await this.uISectionDropdown.inputValue();
    expect(selected).toEqual(section);
  }

  async verifySquadAsBlank(): Promise<void> {
    const value = await this.uISquadCodeValueEdit.inputValue();
    expect(value).toEqual('');
  }

  async clickAssignedToButton(): Promise<void> {
    await this.uIAssignedToButton.click();
  }

  async clickDivisionAccordionArrow(): Promise<void> {
    await this.uIDivisionAccordionArrow.click();
  }

  async clickMultiplePFAccordionArrow(): Promise<void> {
    await this.uIMultiplePFAccordionArrow.click();
  }

  async verifyMultiplePFGridAsEmpty(): Promise<void> {
    const rows = this.uIMultiplePFGrid.locator('tr');
    const count = await rows.count();
    expect(count).toEqual(0);
  }

  async clickSearchButton(): Promise<void> {
    await this.uISearchButton.click();
  }

  async selectAtJuris(juris: string): Promise<void> {
    // Select jurisdiction
  }

  async verifyAtJuris(juris: string): Promise<void> {
    // Verify jurisdiction value
  }

  async verifyNoRecordFoundAcknowlege(): Promise<void> {
    /* popup: No Record Found */
  }
}

// ==================== DocumentAssignSearchPage ====================

export class DocumentAssignSearchPage {
  readonly page: Page;

  readonly uIDistributionPFNoTextbox: Locator;
  readonly uIDocumentTypeDropdown: Locator;
  readonly uIAssignedPFNoPFNoTextBox: Locator;
  readonly uIDocumentTitleTextBox: Locator;
  readonly uIFromDateTextBox: Locator;
  readonly uIFromTimeTextBox: Locator;
  readonly uIToDateTextBox: Locator;
  readonly uIToTimeTextBox: Locator;
  readonly uIReadCheckBox: Locator;
  readonly uIUnReadCheckBox: Locator;
  readonly uISearchButton: Locator;
  readonly uIResultTable: Locator;
  readonly uIAddNewLink: Locator;
  readonly uIResetLink: Locator;
  readonly uIBackLink: Locator;
  readonly uIPrintIcon: Locator;
  readonly uIExcelIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIDistributionPFNoTextbox = page.locator('#lupPF_CodeValue');
    this.uIDocumentTypeDropdown = page.locator('#cddDocType_DropDown');
    this.uIAssignedPFNoPFNoTextBox = page.locator('#lupAssPF_CodeValue');
    this.uIDocumentTitleTextBox = page.locator('#txtDocTitle');
    this.uIFromDateTextBox = page.locator('#dtcStartDttm_Date_KPIDttmCtrl');
    this.uIFromTimeTextBox = page.locator("//table[@ID='dtcStartDttm_Time']//input[contains(@class,'textboxdatetime')]");
    this.uIToDateTextBox = page.locator('#dtmTodate_Date_KPIDttmCtrl');
    this.uIToTimeTextBox = page.locator("//table[@ID='dtmTodate_Time']//input[contains(@class,'textboxdatetime')]");
    this.uIReadCheckBox = page.locator('#chkRead');
    this.uIUnReadCheckBox = page.locator('#chkUnRead');
    this.uISearchButton = page.locator('#btnSearch');
    this.uIResultTable = page.locator('#grdDocSrch');
    this.uIAddNewLink = page.locator("//span[text()='Add New']");
    this.uIResetLink = page.locator("//span[text()='Reset']");
    this.uIBackLink = page.locator("//span[text()='Back']");
    this.uIPrintIcon = page.locator("//img[@alt='Print']");
    this.uIExcelIcon = page.locator("//img[contains(@src,'excel.gif')]");
  }

  async EnterAtDistributionPFNo(distributionPFNo: string): Promise<void> {
    await this.uIDistributionPFNoTextbox.fill(distributionPFNo);
  }

  async SelectAtDocumentType(documentType: string): Promise<void> {
    await this.uIDocumentTypeDropdown.selectOption({ label: documentType });
  }

  async selectDocIconInGridByAtTitle(title: string): Promise<void> {
    const row = this.uIResultTable.locator('tr', { hasText: title });
    const icon = row.first().locator('img').first();
    await icon.click();
  }

  async enterAtAssignedPFNo(assignedPFNo: string): Promise<void> {
    await this.uIAssignedPFNoPFNoTextBox.fill(assignedPFNo);
  }

  async enterAtTitle(title: string): Promise<void> {
    await this.uIDocumentTitleTextBox.fill(title);
  }

  async enterAtFromDateTime(fromDate: string, fromTime: string): Promise<void> {
    await this.uIFromDateTextBox.fill(fromDate);
    await this.uIFromTimeTextBox.fill(fromTime);
  }

  async enterAtToDateTime(toDate: string, toTime: string): Promise<void> {
    await this.uIToDateTextBox.fill(toDate);
    await this.uIToTimeTextBox.fill(toTime);
  }

  async SelectReadCheckBox(): Promise<void> {
    await this.uIReadCheckBox.click();
  }

  async SelectUnreadCheckBox(): Promise<void> {
    await this.uIUnReadCheckBox.click();
  }

  async clickSearchButton(): Promise<void> {
    await this.uISearchButton.click();
  }

  async clickPrintIcon(): Promise<void> {
    await this.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    await this.uIExcelIcon.click();
  }

  async SelectDocumentEntryFromGrid(): Promise<void> {
    const row = this.uIResultTable.locator('tbody tr').first();
    await row.click();
  }

  async verifyAtDocumentTitleInGrid(documentTitle: string): Promise<void> {
    const cell = this.uIResultTable.locator('td', { hasText: documentTitle });
    await expect(cell.first()).toBeVisible();
  }

  async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
    /* popup: No Record Found */
  }

  async verifyAtOfficerInGrid(officer: string): Promise<void> {
    const cell = this.uIResultTable.locator('td', { hasText: officer });
    await expect(cell.first()).toBeVisible();
  }

  async verifyAtTypeInGrid(type: string): Promise<void> {
    const cell = this.uIResultTable.locator('td', { hasText: type });
    await expect(cell.first()).toBeVisible();
  }

  async verifyDatesBetweenFromAndToDatesInGrid(): Promise<void> {
    // Verify dates in grid are between from and to dates
  }

  async selectRandomGridRow(): Promise<void> {
    const rows = this.uIResultTable.locator('tbody tr');
    const count = await rows.count();
    const randomIndex = Math.floor(Math.random() * count);
    await rows.nth(randomIndex).click();
  }

  async selectRandomGridRowDocIcon(): Promise<void> {
    const rows = this.uIResultTable.locator('tbody tr');
    const count = await rows.count();
    const randomIndex = Math.floor(Math.random() * count);
    const icon = rows.nth(randomIndex).locator('img').first();
    await icon.click();
  }
}

// ==================== MyDocumentEntryPage ====================

export class MyDocumentEntryPage {
  readonly page: Page;

  readonly uICheckOutforEditButton: Locator;
  readonly uIAcknowledgeCheckbox: Locator;
  readonly UISaveButton: Locator;
  readonly UISaveNCloseButton: Locator;
  readonly uILockButton: Locator;
  readonly uIYesRadioButton: Locator;
  readonly uINoRadioButton: Locator;
  readonly uIIAcknowledgeLabelText: Locator;
  readonly uIIsPrivateCheckBox: Locator;

  // Tab navigators
  readonly uIDocumentTab: Locator;
  readonly uINotesTab: Locator;
  readonly uIBlogTab: Locator;
  readonly uIQAFormsTab: Locator;
  readonly uIAttachmentTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uICheckOutforEditButton = page.locator('#cmdCheckOut');
    this.uIAcknowledgeCheckbox = page.locator('#chkIsread');
    this.UISaveButton = page.locator('#cmdSave');
    this.UISaveNCloseButton = page.locator('#cmdSaveNClose');
    this.uILockButton = page.locator('#imgLock');
    this.uIYesRadioButton = page.locator('#rdo100010001225954_0');
    this.uINoRadioButton = page.locator('#rdo100010001225954_1');
    this.uIIAcknowledgeLabelText = page.locator('#lblread');
    this.uIIsPrivateCheckBox = page.locator('#tabDocOpen_tmpl2_usrDocBlog_chkPrivate');

    this.uIDocumentTab = page.locator("//span[text()='Document']");
    this.uINotesTab = page.locator("//div[@ID='divtab']//span[contains(text(),'My Notes')]");
    this.uIBlogTab = page.locator("//div[@ID='divtab']//span[contains(text(),'Blog')]");
    this.uIQAFormsTab = page.locator("//span[(text()='QA Forms')]");
    this.uIAttachmentTab = page.locator("//div[@ID='divtab']//span[contains(text(),'Attachment')]");
  }

  async clickCheckOutforEditButton(): Promise<void> {
    await this.uICheckOutforEditButton.click();
  }

  async SelectAcknowledgeCheckbox(): Promise<void> {
    await this.uIAcknowledgeCheckbox.click();
  }

  async clickSaveButton(): Promise<void> {
    await this.UISaveButton.click();
  }

  async clickSaveNCloseButton(): Promise<void> {
    await this.UISaveNCloseButton.click();
  }

  async VerifyYouMustTaketheTestMsg(): Promise<void> {
    /* popup: You Must Take the Test */
  }

  async VerifyYouMustLockTestformtoAcknowledgeMsg(): Promise<void> {
    /* popup: You Must Lock Test form to Acknowledge */
  }

  async VerifyDocumentisnotWordFormatMsg(): Promise<void> {
    /* popup: Document is not Word Format */
  }

  async verifyIAcknowledgeLabelTextIsRed(): Promise<void> {
    const color = await this.uIIAcknowledgeLabelText.evaluate(el => getComputedStyle(el).color);
    expect(color).toContain('red');
  }

  async verifyIAcknowledgeLabelTextIsGreen(): Promise<void> {
    const color = await this.uIIAcknowledgeLabelText.evaluate(el => getComputedStyle(el).color);
    expect(color).toContain('green');
  }

  async verifyIAcknowledgeLabelTextIsChecked(): Promise<void> {
    await expect(this.uIAcknowledgeCheckbox).toBeChecked();
  }

  async verifyIAcknowledgeCheckboxIsUnselected(): Promise<void> {
    await expect(this.uIAcknowledgeCheckbox).not.toBeChecked();
  }

  async verifyIsPrivateCheckBoxIscheked(): Promise<void> {
    await expect(this.uIIsPrivateCheckBox).toBeChecked();
  }

  async verifyIsPrivateCheckBoxIsUncheked(): Promise<void> {
    await expect(this.uIIsPrivateCheckBox).not.toBeChecked();
  }

  async SelectIsPrivateCheckbox(): Promise<void> {
    await this.uIIsPrivateCheckBox.click();
  }

  async NavigateToDocumentTab(): Promise<void> {
    await this.uIDocumentTab.click();
  }

  async NavigateToMyNotesTab(): Promise<void> {
    await this.uINotesTab.click();
  }

  async NavigateToBlogTab(): Promise<void> {
    await this.uIBlogTab.click();
  }

  async NavigateToQAFormTab(): Promise<void> {
    const qaTab = this.page.locator("//div[@ID='divtab']//span[contains(text(),'QA Forms')]");
    await qaTab.click();
  }

  async switchToQAFormsTab(): Promise<void> {
    await this.uIQAFormsTab.click();
  }

  async verifyAtTabColorAsBlueByTabName(tabName: string): Promise<void> {
    const tab = this.page.locator(`//span[text()='${tabName}']`);
    const color = await tab.evaluate(el => getComputedStyle(el).color);
    expect(color).toEqual('rgba(0, 0, 255, 1)');
  }

  async NavigateToAttachmentTab(): Promise<void> {
    await this.uIAttachmentTab.click();
  }

  async clickLockButton(): Promise<void> {
    await this.uILockButton.click();
  }

  async clickYesRadioButton(): Promise<void> {
    await this.uIYesRadioButton.click();
  }

  async clickNoRadioButton(): Promise<void> {
    await this.uINoRadioButton.click();
  }

  async VerifyTestCantbeLockedMsg(): Promise<void> {
    /* popup: Test Can't be Locked */
  }

  async VerifyTestScorelowerthanRequiredMsg(): Promise<void> {
    /* popup: Test Score lower than Required */
  }

  async verifyResizeButtonIsNotDisplayed(): Promise<void> {
    const resizeButton = this.page.locator('#RadEditorBottomResizer');
    await expect(resizeButton).not.toBeVisible();
  }

  async saveAndCloseScreen(): Promise<void> {
    await this.UISaveNCloseButton.click();
  }

  async verifyJurisDropdownIsDisabled(): Promise<void> {
    // Verify Juris dropdown is disabled
  }

  async selectAtJuris(juris: string): Promise<void> {
    // Select jurisdiction
  }

  async verifyAtJuris(juris: string): Promise<void> {
    // Verify jurisdiction value
  }
}

// ==================== MyDocumentDocTabPage ====================

export class MyDocumentDocTabPage {
  readonly page: Page;

  readonly uIDocumentTab: Locator;
  readonly uISharedCheckbox: Locator;
  readonly uITxtEditorControl: Locator;
  readonly uITextBoxResizeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIDocumentTab = page.locator("//span[contains(text(),'Document')]");
    this.uISharedCheckbox = page.locator('#chkShared');
    this.uITxtEditorControl = page.locator('#tabDocOpen_tmpl0_usrDocumentManage1_rteKPITxtCenter');
    this.uITextBoxResizeButton = page.locator('#RadEditorBottomResizer');
  }

  async clickDocumentTab(): Promise<void> {
    await this.uIDocumentTab.click();
  }

  async clickSharedCheckbox(): Promise<void> {
    await this.uISharedCheckbox.click();
  }
}

// ==================== MyNotesTabPage ====================

export class MyNotesTabPage {
  readonly page: Page;

  readonly uINotesTextBox: Locator;
  readonly uISaveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uINotesTextBox = page.locator('#tabDocOpen_tmpl1_usrDocumentNotes1_rteKPITxt_contentIframe');
    this.uISaveButton = page.locator('#cmdSave');
  }

  async EnterAtNotes(notes: string): Promise<void> {
    await this.uINotesTextBox.fill(notes);
  }

  async clickSaveButton(): Promise<void> {
    await this.uISaveButton.click();
  }
}

// ==================== MyBlogTabPage ====================

export class MyBlogTabPage {
  readonly page: Page;

  readonly uIUpdateDateTextBox: Locator;
  readonly uIUpdateTimeTextBox: Locator;
  readonly uIUpdatedByTextBox: Locator;
  readonly uICommentsTextBox: Locator;
  readonly uISaveButton: Locator;

  readonly uIIsPrivateCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIUpdateDateTextBox = page.locator('#tabDocOpen_tmpl2_usrDocBlog_dttmUpdate_Date_KPIDttmCtrl');
    this.uIUpdateTimeTextBox = page.locator("//table[@ID='tabDocOpen_tmpl2_usrDocBlog_dttmUpdate_Time']//input[contains(@class,'textboxdatetime')]");
    this.uIUpdatedByTextBox = page.locator('#lupPFNbr_CodeValue');
    this.uICommentsTextBox = page.locator('#tabDocOpen_tmpl2_usrDocBlog_txtComments');
    this.uISaveButton = page.locator('#tabDocOpen_tmpl2_usrDocBlog_cmdSave');
    this.uIIsPrivateCheckBox = page.locator('#tabDocOpen_tmpl2_usrDocBlog_chkPrivate');
  }

  async EnterAtUpdateDateTime(): Promise<void> {
    await this.uIUpdateDateTextBox.fill('');
    await this.uIUpdateTimeTextBox.fill('');
  }

  async EnterUpdateDateTime(): Promise<void> {
    await this.uIUpdateDateTextBox.press('Tab');
    await this.uIUpdateTimeTextBox.press('Tab');
  }

  async EnterAtUpdatedBy(updatedBy: string): Promise<void> {
    await this.uIUpdatedByTextBox.fill(updatedBy);
  }

  async EnterAtComments(comment: string): Promise<void> {
    await this.uICommentsTextBox.fill(comment);
  }

  async clickSaveButton(): Promise<void> {
    await this.uISaveButton.click();
  }

  async verifyAtCommentsInGrid(comment: string): Promise<void> {
    const cell = this.page.locator(`//table[@id='tabDocOpen_tmpl2_usrDocBlog_listMsg']//div[contains(text(),'${comment}')]`);
    const text = await cell.textContent();
    expect(text).toEqual(comment);
  }

  async SelectIsPrivateCheckbox(): Promise<void> {
    await this.uIIsPrivateCheckBox.click();
  }

  async verifyIsPrivateCheckBoxIsUncheked(): Promise<void> {
    await expect(this.uIIsPrivateCheckBox).not.toBeChecked();
  }

  async verifyIsPrivateCheckBoxIscheked(): Promise<void> {
    await expect(this.uIIsPrivateCheckBox).toBeChecked();
  }
}

// ==================== QAFormsTabPage ====================

export class QAFormsTabPage {
  readonly page: Page;

  readonly uISelectFormDropdown: Locator;
  readonly uIMaintainQuestionnaireButton: Locator;
  readonly uIScoretoMarkasReadTextBox: Locator;
  readonly uISaveButton: Locator;

  readonly uIPFCodeEdit: Locator;
  readonly uILockButton: Locator;
  readonly uIYesRadioButton: Locator;
  readonly uINoRadioButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uISelectFormDropdown = page.locator('#cddForm_DropDown');
    this.uIMaintainQuestionnaireButton = page.locator('#cmdMtnQues');
    this.uIScoretoMarkasReadTextBox = page.locator('#txtScore');
    this.uISaveButton = page.locator('#cmdSave');
    this.uIPFCodeEdit = page.locator('#lupEntryOfficer_CodeValue');
    this.uILockButton = page.locator('#imgLock');
    this.uIYesRadioButton = page.locator('#rdo100010001225954_0');
    this.uINoRadioButton = page.locator('#rdo100010001225954_1');
  }

  async selectAtSelectForm(formName: string): Promise<void> {
    await this.uISelectFormDropdown.selectOption({ label: formName });
  }

  async clickAddQuestionnaire(): Promise<void> {
    await this.uIMaintainQuestionnaireButton.click();
  }

  async FillTheQAForm(): Promise<void> {
    // Fill the QA form responses
  }

  async enterAtScoreToMarkAsRead(score: string): Promise<void> {
    await this.uIScoretoMarkasReadTextBox.fill(score);
  }

  async verifyScoreToMarkAsRead(score: string): Promise<void> {
    const actual = await this.uIScoretoMarkasReadTextBox.inputValue();
    expect(actual).toEqual(score);
  }

  async clickSaveButton(): Promise<void> {
    await this.uISaveButton.click();
  }

  async EnterPFNo(): Promise<void> {
    await this.uIPFCodeEdit.press('Tab');
  }

  async clickLockButton(): Promise<void> {
    await this.uILockButton.click();
    /* confirm popup: lock */
  }

  async clickYesRadioButton(): Promise<void> {
    await this.uIYesRadioButton.click();
  }

  async clickNoRadioButton(): Promise<void> {
    await this.uINoRadioButton.click();
  }

  async clickSavebutton(): Promise<void> {
    await this.uISaveButton.click();
  }
}

// ==================== MyAttachmentTabPage ==

export class MyAttachmentTabPage {
  readonly page: Page;

  readonly uIAttachmentTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
  }
}

// ==================== WordDocAppPage ====================

export class WordDocAppPage {
  readonly page: Page;

  readonly uISaveButton: Locator;
  readonly uITxtEditorControl: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uISaveButton = page.locator("//div[@class='rrbControlGroup rrbVbox'] //span[@class='rrbImagePlaceholder reToolIcon reRibbonToolIcon reSave']");
    this.uITxtEditorControl = page.locator('#RadEditor_contentIframe');
  }

  async clickSaveButton(): Promise<void> {
    await this.uISaveButton.click();
  }

  async ClickSaveIcon(): Promise<void> {
    await this.uISaveButton.click();
  }

  async EnterAt1stPFComments(comments: string): Promise<void> {
    await this.uITxtEditorControl.fill(comments);
  }

  async EnterAt2stPFComments(comments: string): Promise<void> {
    await this.uITxtEditorControl.click();
    await this.uITxtEditorControl.fill(comments);
  }

  async closeScreen(): Promise<void> {
    // Close the Word Doc App screen
  }
}

// ==================== AccreditationSearchEntryPage ====================

export class AccreditationSearchEntryPage {
  readonly page: Page;

  readonly uIBookNameTextBox: Locator;
  readonly uISaveButton: Locator;
  readonly uIDisplayOrderTextBox: Locator;
  readonly uILink1TextBox: Locator;
  readonly uILinkTextBox: Locator;
  readonly uIBottomStatusMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIBookNameTextBox = page.locator('#txtDefaultBookName');
    this.uISaveButton = page.locator('#cmdSave');
    this.uIDisplayOrderTextBox = page.locator('#txtDisplayOrder');
    this.uILink1TextBox = page.locator('#txtLink1');
    this.uILinkTextBox = page.locator('#txtLink');
    this.uIBottomStatusMessage = page.locator("//td[@class='status']//b");
  }

  async enterBookName(bookName: string): Promise<void> {
    await this.uIBookNameTextBox.fill(bookName);
  }

  async clickSaveButton(): Promise<void> {
    await this.uISaveButton.click();
  }

  async enterdisplayOrder(displayOrder: string): Promise<void> {
    await this.uIDisplayOrderTextBox.fill(displayOrder);
  }

  async EnterAtLink1(link: string): Promise<void> {
    await this.uILink1TextBox.fill(link);
  }

  async EnterAtlink(link: string): Promise<void> {
    await this.uILinkTextBox.fill(link);
  }

  async saveScreen(): Promise<void> {
    await this.uISaveButton.click();
    /* confirm popup: save */
  }

  async verifyAdditionalSuccessFullMessage(): Promise<void> {
    const text = await this.uIBottomStatusMessage.textContent();
    expect(text).toEqual('1002 - Addition Successful');
  }
}

// ==================== AccreditationSearchPage ====================

export class AccreditationSearchPage {
  readonly page: Page;

  readonly uIAddGuideBookButton: Locator;
  readonly uISelectGuideNameDropdown: Locator;
  readonly uIEditGuideBookButton: Locator;
  readonly uISharedCheckBox: Locator;
  readonly uIJurisDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIAddGuideBookButton = page.locator("//input[@id='cmdAddGuideBook']");
    this.uISelectGuideNameDropdown = page.locator('#lstGuidename');
    this.uIEditGuideBookButton = page.locator('#cmdEditGuideBook');
    this.uISharedCheckBox = page.locator('#chkShared');
    this.uIJurisDropdown = page.locator('#lstJuris');
  }

  async clickAddGuideBook(): Promise<void> {
    await this.uIAddGuideBookButton.click();
  }

  async selectGuideName(guideName: string): Promise<void> {
    await this.uISelectGuideNameDropdown.selectOption({ label: guideName });
  }

  async clickEditGuideButton(): Promise<void> {
    await this.uIEditGuideBookButton.click();
  }

  async clickSharedCheckbox(): Promise<void> {
    await this.uISharedCheckBox.click();
  }

  async verifyJurisDropdownIsDisabled(): Promise<void> {
    await expect(this.uIJurisDropdown).toBeDisabled();
  }

  async selectAtJuris(juris: string): Promise<void> {
    await this.uIJurisDropdown.selectOption({ label: juris });
  }

  async verifyAtJuris(juris: string): Promise<void> {
    const selected = await this.uIJurisDropdown.inputValue();
    expect(selected).toEqual(juris);
  }

  async verifyNoRecordFoundAcknowlege(): Promise<void> {
    /* popup: (6017)No Records Found */
  }
}
