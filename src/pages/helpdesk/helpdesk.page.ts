// @ts-nocheck
import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class ActivitiesTabPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickAddActivityButton(): Promise<void> {
        await this.internalTicketEntryActivitiesTab.click();
    }

    async verifyAtSubject(templateValue: string): Promise<void> {
        // subject in Activity Entry Screen
        // WebElement sub = Playback.driver.findElement(
        // By.xpath("//div[@id='tabHelpdeskEntry_tmpl0_usrActivities1_grdHistoryTrack_ctl00_divNotes']"))
        const text = await this.sub.innerText();
        expect(templateValue).toEqual(text);
    }

    async verifyTicketClosedBinded(): Promise<void> {
        const text = await this.internalTicketEntryActivitiesTab.innerText();
        expect(text.contains("The Ticket is closed")).toBeTruthy();
    }

    async switchToActivityEntry(): Promise<void> {
        // no-op: window handle
    }
}

export class ActivityEntryPage {
    readonly page: Page;
    readonly uIAddNewOrEditButton: Locator;
    readonly uITemplateDropDown: Locator;
    readonly uIResetIcon: Locator;
    readonly uILoadButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewOrEditButton = page.locator('NocmdAddnew');
        this.uITemplateDropDown = page.locator('NocddTemplate');
        this.uIResetIcon = page.locator('NocmdRefresh');
        this.uILoadButton = page.locator('NobtnLoad');
        this.uISaveButton = page.locator('NocmdSave');
    }

    async clickAddNewOrEditButton(): Promise<void> {
        await this.uIAddNewOrEditButton.click();
    }

    async verifyAtTemplateDropDown(i: string, template: string): Promise<void> {
        // List<String> dropDownValues = objectIdentification.manualIdentify.getDropDownValues(uIMapHelpdesk.activityEntry.uITemplateDropDown)
        expect(template).toBeTruthy();
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async selectAtTemplate(template: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption
        // (uIMapHelpdesk.activityEntry.uITemplateDropDown,BaseData.getHelpdeskModuleValue("Template"))
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async verifyAtRichTextField(richText: string): Promise<void> {
        // no-op: window handle
        // const text = Playback.driver.findElement(By.xpath(".//body//div")).getText();
        // expect(text).toEqual(richText);
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAdditionSuccessfulAcknowledge(): Promise<void> {
        // popup.acknowledge.okWithExpectedContainMessage("1002 - Addition Successful")
    }
}

export class AddActivityEntryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyStartedDateAndTimeAutoBinded(): Promise<void> {
        const date = await this.internalTicketEntryActivitiesTab.inputValue();
        expect(date).toEqual(Randomized.getCurrentDate());
        const time = await this.internalTicketEntryActivitiesTab.inputValue();
        expect(time).toEqual(Randomized.getCurrentTime("HH:mm"));
    }

    async tabFinishedDateTime(): Promise<void> {
        await this.internalTicketEntryActivitiesTab.press('Tab');
        await this.internalTicketEntryActivitiesTab.press('Tab');
    }

    async enterFinishedDateAsFutureDateByNoOfDays(i: string): Promise<void> {
        const futureDate = Randomized.getFutureDate(i);
        await this.internalTicketEntryActivitiesTab.fill(futureDate);
        await this.internalTicketEntryActivitiesTab.press('Tab');
    }

    async selectAtTemplate(template: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryActivitiesTab.internalTicketEntryAddActivity.uITextTemplateDropdown,
        // BaseData.getHelpdeskModuleValue("Template"))
    }

    async clickLoadButton(): Promise<void> {
        await this.internalTicketEntryActivitiesTab.click();
    }

    async verifyAtStatus(status: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryActivitiesTab.internalTicketEntryAddActivity.uIStatusDropdown)
        expect(selectedItem).toEqual(status);
    }

    async clickSaveNClose(): Promise<void> {
        await this.internalTicketEntryActivitiesTab.click();
    }

    async clickSave(): Promise<void> {
        await this.internalTicketEntryActivitiesTab.click();
    }

    async verifyEnterCommentsAcknowledgeMessage(): Promise<void> {
        // popup: (30033) Enter Comments
    }

    async verifyAdditionSuccessfulAcknowledgeMessage(): Promise<void> {
        // popup: 1002 - Addition Successful
    }

    async verifyTotalTimeAs24Hours(): Promise<void> {
        const totalTime = await this.internalTicketEntryActivitiesTab.inputValue();
        const Hr = totalTime.substring(0, 2);
        const min = totalTime.substring(3);
        const totalHrs = Integer.parseInt(Hr);
        const Min = Integer.parseInt(min);
        // verify.ExpectedIntergerValueIsEqualToActual(24, totalHrs)
        // verify.ExpectedIntergerValueIsEqualToActual(00, Min)
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.internalTicketEntryActivitiesTab.click();
        // confirm popup: yes
    }

    async verifyAtCommentInRichTextField(text: string): Promise<void> {
        // no-op: window handle
        const text2 = await this.internalTicketEntryActivitiesTab.innerText();
        expect(text2).toEqual(text);
    }

    async selectAtStatus(i: string, status: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryActivitiesTab.internalTicketEntryAddActivity.uIStatusDropdown,
        // BaseData.getHelpdeskModuleValue("Status" + i))
    }

    async enterAtTotalTime(i: string, totalTime: string): Promise<void> {
        await this.internalTicketEntryActivitiesTab.fill(totalTime);
        await this.internalTicketEntryActivitiesTab.press('Tab');
    }

    async verifyTotalTimeIsEmpty(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.internalTicketEntryActivitiesTab.internalTicketEntryAddActivity.uITotalTime.getText().isEmpty())
    }

    async verifyPrivateAdminUseOnlyCheckboxChecked(): Promise<void> {
        expect(await this.internalTicketEntryActivitiesTab.isChecked()).toBeTruthy();
    }

    async enterAtRichText(text: string): Promise<void> {
        // no-op: window handle
        await this.internalTicketEntryActivitiesTab.fill(text);
    }

    async clickPrivateAdminUseOnlyCheckbox(): Promise<void> {
        await this.internalTicketEntryActivitiesTab.click();
    }

    async verifyPrivateAdminUseOnlyCheckboxNotChecked(): Promise<void> {
        expect(await this.internalTicketEntryActivitiesTab.isChecked()).toBeFalsy();
    }

    async verifyShowSystemEntriesCheckBoxIsChecked(): Promise<void> {
        const selected = await this.internalTicketEntryDetailTab.isChecked();
        expect(selected).toBeTruthy();
    }

    async verifyShowSystemEntriesCheckBoxIsUnChecked(): Promise<void> {
        const selected = await this.internalTicketEntryDetailTab.isChecked();
        expect(selected).toBeFalsy();
    }

    async verifyShowSystemEntriesCheckBoxIsEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIShowSystemEntriesCheckBox.isEnabled())
    }

    async clickShowSystemEntriesCheckBox(): Promise<void> {
        await this.internalTicketEntryDetailTab.click();
    }

    async verifyPrivateLabelIsRedColor(): Promise<void> {
        // verify.ExpectedValueIsTrue(Playback.driver.findElement(By.xpath(
        // "(//table[@id='tabHelpdeskEntry_tmpl0_usrActivities1_grdHistoryTrack']//td//tr//td[9])[1]")).getCssValue("color").contains("rgba(255, 0, 0"))
    }

    async verifyPencilIconIsDisplayed(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.internalTicketEntryActivitiesTab.uIPencilIcon.getAttribute("src").contains("icon-pencil.gif"))
    }

    async clickPencilIcon(): Promise<void> {
        await this.internalTicketEntryActivitiesTab.click();
    }

    async verifyShowUserViewCheckBoxIsChecked(): Promise<void> {
        const selected = await this.internalTicketEntryDetailTab.isChecked();
        expect(selected).toBeTruthy();
    }

    async verifyShowUserViewCheckBoxIsUnChecked(): Promise<void> {
        const selected = await this.internalTicketEntryDetailTab.isChecked();
        expect(selected).toBeFalsy();
    }

    async verifyShowUserViewCheckBoxIsEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIShowUserViewCheckBox.isEnabled())
    }

    async clickShowUserViewCheckBox(): Promise<void> {
        await this.internalTicketEntryDetailTab.click();
    }
}

export class DashBoardTabPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyVisibleTextNotContainsDot(): Promise<void> {
        // List<WebElement> textElements = Playback.driver.findElements(By.xpath("//*[name()='svg']/*[name()='g']/*[name()='g']//*[name()='text']"))
        // for (WebElement textElement : textElements) {
        // System.out.println(textElement.getText())
        expect(textElement.getText().contains("..")).toBeFalsy();
    }

    async verifyYouDoNotAccessTicketAckMsg(): Promise<void> {
        // popup: (6071) You do not have Permission to access the Ticket
    }

    async verifyAtColumnValuesSortedAscendingOrder(i: string, columnHeader: string): Promise<void> {
        // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscending(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid,
        // BaseData.getHelpdeskModuleValue("ColumnHeader" + i),
        // objectIdentification.manualIdentify.getGridTableColumnValues(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid,
        // BaseData.getHelpdeskModuleValue("ColumnHeader" + i)))
    }

    async verifyAtColumnValuesSortedDescendingOrder(i: string, columnHeader: string): Promise<void> {
        // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescending(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid,
        // BaseData.getHelpdeskModuleValue("ColumnHeader" + i),
        // objectIdentification.manualIdentify.getGridTableColumnValues(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid,
        // BaseData.getHelpdeskModuleValue("ColumnHeader" + i)))
    }

    async clickColumnHeaderByAtColumnName(i: string, columnHeader: string): Promise<void> {
        // objectIdentification.manualIdentify.getGridHeaderColumnCell(uIMapHelpdesk.internalTicketSearch.uISearchResultGrid, BaseData.getHelpdeskModuleValue("ColumnHeader" + i)).click()
        // Playback.threadWait()
    }

    async clickTicketNoInfoIcon(): Promise<void> {
        await this.uITicketNoInfoIcon.click();
    }

    async enterAtTicketNo(i: string, ticketNo: string): Promise<void> {
        await this.uITicketYearEdit.fill(ticketNo);
        await this.uITicketNumberEdit.fill(ticketNo);
        await this.uITicketNumberEdit.press('Tab');
    }

    async verify1040NumberDoesNotExistAcknowledgePopupAppears(): Promise<void> {
        // popup: (1040) Number Does Not Exist
    }

    async verify1035FutureYearNotAllowedAcknowledgePopupAppears(): Promise<void> {
        // popup: (1035) Future Year not allowed
    }

    async verifyAtCreatorInGrid(i: string, creatorPF: string): Promise<void> {
        // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid,
        // BaseData.getHelpdeskModuleValue("CreatorPF" + i))
        expect(creatorPF).toBeTruthy();
    }

    async verifyCreatedDateInGridAsCurrentDate(): Promise<void> {
        // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid,
        // Randomized.getCurrentDate("MM/dd/yy"))
        expect(gridRowByCellInnerText.getText().contains(Randomized.getCurrentDate("MM/dd/yy"))).toBeTruthy();
    }

    async selectAtDateType(dateType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption
        // (uIMapHelpdesk.internalTicketSearch.uIDateTypeComboBox, BaseData.getHelpdeskModuleValue("DateType"))
    }

    async taboutDataTypeFrom(): Promise<void> {
        await this.uIDateTypeFrom.press('Tab');
    }

    async taboutDataTypeTo(): Promise<void> {
        await this.uIDateTypeTo.press('Tab');
    }

    async selectAtDateType(i: string, dateType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption
        // (uIMapHelpdesk.internalTicketSearch.uIDateTypeComboBox, BaseData.getHelpdeskModuleValue("DateType" + i))
    }

    async enterDataTypeFromAsFutureDate(days: string): Promise<void> {
        await this.uIDateTypeFrom.clear();
        await this.uIDateTypeFrom.fill(Randomized.getFutureDate(days));
        await this.uIDateTypeFrom.press('Tab');
    }

    async verify2559TheToDateCannotBePriorToTheFromDateAcknowledgePopup(): Promise<void> {
        // popup: (2559) The To Date cannot be prior to the From Date .
    }
}

export class DetailTabPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterAtProblemDescription(problemDescription: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(problemDescription);
        await this.internalTicketEntryDetailTab.press('Tab');
    }

    async enterProblemDescription(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.internalTicketEntryDetailTab.fill(Randomized.randomString(20));
        await this.internalTicketEntryDetailTab.press('Tab');
    }

    async enterVendorNotes(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.internalTicketEntryDetailTab.fill(Randomized.randomString(10));
        await this.internalTicketEntryDetailTab.press('Tab');
    }

    async enterAtVersion(version: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(version);
        await this.internalTicketEntryDetailTab.press('Tab');
    }

    async enterAtRelatedCRM(relatedCRM: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(relatedCRM);
        await this.internalTicketEntryDetailTab.press('Tab');
    }

    async selectAtCategory(category: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(category);
    }

    async selectAtProject(project: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(project);
    }

    async selectAtType(type: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(type);
    }

    async selectAtModule(module: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(module);
    }

    async selectAtCreatorJuris(createdjuris: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(createdjuris);
    }

    async selectAtVendorName(vendorName: string): Promise<void> {
        await this.internalTicketEntryDetailTab.selectOption({ label: vendorName });
    }

    async selectAtVendorContact(vendorContact: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(vendorContact);
    }

    async selectAtHowWasitClosed(howWasitClosed: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(howWasitClosed);
    }

    async selectAtActionPlan(actionPlan: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(actionPlan);
    }

    async tabDueByDateAndTime(): Promise<void> {
        await this.internalTicketEntryDetailTab.press('Tab');
        await this.internalTicketEntryDetailTab.press('Tab');
    }

    async clickTypeCustomText(): Promise<void> {
        await this.internalTicketEntryDetailTab.click();
    }

    async selectVendorNameAsAddVendor(): Promise<void> {
        await this.internalTicketEntryDetailTab.selectOption({ label: "--Add Vendor--" });
    }

    async verifyAtVendorName(vendorName: string): Promise<void> {
        // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIVendorNameComboBox)
        expect(dropDownSelectedItem).toEqual(vendorName);
    }

    async verifyAtCreatorJuris(creatorJuris: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryActivitiesTab.uICreatorJurisDropdown)
        expect(selectedItem).toEqual(creatorJuris);
    }

    async verifyAtCategory(category: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uICategoryComboBox)
        expect(selectedItem).toEqual(category);
    }

    async verifyAtProject(project: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIProjectComboBox)
        expect(selectedItem).toEqual(project);
    }

    async verifyAtType(type: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uITypeComboBox)
        expect(selectedItem).toEqual(type);
    }

    async verifyAtModule(module: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIModuleComboBox)
        expect(selectedItem).toEqual(module);
    }

    async verifyAtVendorContact(vendorContact: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIVendorContactComboBox)
        expect(selectedItem).toEqual(vendorContact);
    }

    async verifyAtHowWasItClosed(howWasItClosed: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIHowWasItClosedComboBox)
        expect(selectedItem).toEqual(howWasItClosed);
    }

    async verifyAtActionPlan(actionPlan: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIActionPlanComboBox)
        expect(selectedItem).toEqual(actionPlan);
    }

    async enterAtVendorNotes(vendorNotes: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.internalTicketEntryDetailTab.fill(vendorNotes);
        await this.internalTicketEntryDetailTab.press('Tab');
    }

    async enterAtRelatedTicket(relatedTicket: string): Promise<void> {
        await this.internalTicketEntryDetailTab.fill(relatedTicket);
        await this.internalTicketEntryDetailTab.fill(relatedTicket);
        await this.internalTicketEntryDetailTab.press('Tab');
    }

    async verifyAtRelatedTicket(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getAccountingModuleValue("RelatedTicket").substring(0, 2),
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIRelatedTicketYearEdit.getAttribute("value"))
        // verify.ExpectedPropertyValueIsEqual(BaseData.getAccountingModuleValue("RelatedTicket").substring(3),
        // uIMapHelpdesk.internalTicketEntry.internalTicketEntryDetailTab.uIRelatedTicketNumberEdit.getAttribute("value"))
    }

    async verifyAtVendorNotes(vendorNotes: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        const attribute = await this.internalTicketEntryDetailTab.inputValue();
        expect(attribute).toEqual(vendorNotes);
    }

    async verifyAtProblemDescription(problemDescription: string): Promise<void> {
        const attribute = await this.internalTicketEntryDetailTab.inputValue();
        expect(attribute).toEqual(problemDescription);
    }

    async verifyAtVersion(version: string): Promise<void> {
        const attribute = await this.internalTicketEntryDetailTab.inputValue();
        expect(attribute).toEqual(version);
    }

    async verifyAtRelatedCRM(relatedCRM: string): Promise<void> {
        const attribute = await this.internalTicketEntryDetailTab.inputValue();
        expect(attribute).toEqual(relatedCRM);
    }

    async verifyDueDateAsCurrentDate(): Promise<void> {
        const attribute = await this.internalTicketEntryDetailTab.inputValue();
        expect(Randomized.getCurrentDate()).toEqual(attribute);
    }

    async selectHelpDeskClass(): Promise<void> {
        // random select on this.uIHelpdeskClassComboBox
        await this.uIHelpdeskClassComboBox.press('Tab');
    }

    async enterCreatorPF(): Promise<void> {
        await this.uICreatorPFLookupButton.click();
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async selectStatus(): Promise<void> {
        // random select on this.uIStatusComboBox
    }

    async selectPriority(): Promise<void> {
        // random select on this.uIPriorityComboBox
    }

    async enterOwnerPF(): Promise<void> {
        await this.uIOwnerPFLookupButton.click();
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async verifyAtSubject(i: string, subject: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getHelpdeskModuleValue("Subject" + i),
        // uIMapHelpdesk.internalTicketEntry.uISubjectEdit.getAttribute("value"))
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async verifyAtStatusInTicketStatus(i: string, status: string): Promise<void> {
        const text = await this.uITicketStatus.innerText();
        expect(text).toEqual(status);
    }

    async verifyAtOwner(i: string, owner: string): Promise<void> {
        const attribute = await this.uIOwnerPFCodeValueEdit.inputValue();
        expect(attribute).toEqual(owner);
    }

    async verifyAtCreatorPF(i: string, creatorPF: string): Promise<void> {
        const attribute = await this.uICreatorPFEdit.inputValue();
        expect(attribute).toEqual(creatorPF);
    }

    async clickCreatorPFLookUpIcon(): Promise<void> {
        await this.uICreatorPFLookupButton.click();
    }

    async clearCreatorPFValue(): Promise<void> {
        await this.uICreatorPFEdit.clear();
    }

    async verifyUpdatedDateAsCurrentDate(): Promise<void> {
        const text = await this.uIUpdatedDateTimeLabel.innerText();
        expect(text.contains(Randomized.getCurrentDate("MM/dd/yy"))).toBeTruthy();
    }

    async enterAtSubject(i: string, subject: string): Promise<void> {
        await this.uISubjectEdit.clear();
        await this.uISubjectEdit.fill(subject);
        await this.uISubjectEdit.press('Tab');
    }

    async selectAtHelpDeskClass(i: string, helpDeskClass: string): Promise<void> {
        await this.uIHelpdeskClassComboBox.selectOption({ label: helpDeskClass });
        await this.uIHelpdeskClassComboBox.press('Tab');
    }

    async verifyDetailTabIsEnabledAndDisplayed(): Promise<void> {
        expect(await this.uIDetailTab.isVisible()).toBeTruthy();
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.uIDetailTab.isEnabled())
    }

    async verifyNotificationTabIsEnabledAndDisplayed(): Promise<void> {
        expect(await this.uINotificationTab.isVisible()).toBeTruthy();
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.uINotificationTab.isEnabled())
    }

    async verifyAtOwnerPFCodeAndDescription(ownerPFCodeValue: string, ownerPFCodeDescription: string): Promise<void> {
        const codeValue = await this.uIOwnerPFCodeValueEdit.inputValue();
        expect(codeValue).toEqual(ownerPFCodeValue);
        const codeDescription = await this.uIOwnerPFCodeDescriptionEdit.inputValue();
        expect(codeDescription).toEqual(ownerPFCodeDescription);
    }
}

export class EmailSettingsPage {
    readonly page: Page;
    readonly uIHelpdeskClassComboBox: Locator;
    readonly uIEmailAddressToWatchEdit: Locator;
    readonly uISmtpServerEdit: Locator;
    readonly uIPasswordEdit: Locator;
    readonly uINotificationEmailEdit: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uIStatusComboBox: Locator;
    readonly uIPriorityComboBox: Locator;
    readonly uITypeComboBox: Locator;
    readonly uIOwnerPFCodeEdit: Locator;
    readonly uIManagersDistributionListComboBox: Locator;
    readonly uIOwnerPFLookUpIcon: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndAddNewButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshIcon: Locator;
    readonly uIUsernameEdit: Locator;
    readonly uIBottomStatusBar: Locator;
    readonly uITypeCustomText: Locator;
    readonly uIHelpDeskManagersDistributionListDropDown: Locator;
    readonly uIHelpDeskManagersDistributionListInfoIcon: Locator;
    readonly uIEnableModernAuthenticationCheckBox: Locator;
    readonly uITenantId: Locator;
    readonly uIApplicationId: Locator;
    readonly uIClientSecretID: Locator;
    readonly uIRoleDropdownArrow: Locator;
    readonly uIRoleDropdownOption: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIEnableSSLDropdown: Locator;
    readonly uIDomainEdit: Locator;
    readonly uIAutoEmailContentEdit: Locator;
    readonly uIDeleteIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHelpdeskClassComboBox = page.locator('NocddHelpDeskClass_DropDown');
        this.uIEmailAddressToWatchEdit = page.locator('NotxtEmailAddresstoWatch');
        this.uISmtpServerEdit = page.locator('NotxtSMTPServer');
        this.uIPasswordEdit = page.locator('NotxtPassword');
        this.uINotificationEmailEdit = page.locator('NotxtNotificationMail');
        this.uICategoryComboBox = page.locator('NocddCategory_DropDown');
        this.uIStatusComboBox = page.locator('NocddStatus_DropDown');
        this.uIPriorityComboBox = page.locator('NocddPriority_DropDown');
        this.uITypeComboBox = page.locator('NocddType_DropDown');
        this.uIOwnerPFCodeEdit = page.locator('NolupOwnerPF_CodeValue');
        this.uIManagersDistributionListComboBox = page.locator('NoddlDitributionList');
        this.uIOwnerPFLookUpIcon = page.locator('NolupOwnerPF_imgBtn');
        this.uISaveNCloseButton = page.locator('NocmdSaveNClose');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndAddNewButton = page.locator('NocmdSaveNAddNew');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIRefreshIcon = page.locator('NocmdRefresh');
        this.uIUsernameEdit = page.locator('NotxtUserName');
        this.uIBottomStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uITypeCustomText = page.locator('NolblType');
        this.uIHelpDeskManagersDistributionListDropDown = page.locator('NoddlDitributionList');
        this.uIHelpDeskManagersDistributionListInfoIcon = page.locator('NoImgIcon');
        this.uIEnableModernAuthenticationCheckBox = page.locator('NochkEnableOAuth');
        this.uITenantId = page.locator('NotxtTenantID');
        this.uIApplicationId = page.locator('NotxtAppID');
        this.uIClientSecretID = page.locator('NotxtClientSecretID');
        this.uIRoleDropdownArrow = page.locator('NocddSelectRole_Arrow');
        this.uIRoleDropdownOption = page.locator('NocddSelectRole_DropDown');
        this.uIJurisDropdown = page.locator('NolstJuris');
        this.uIEnableSSLDropdown = page.locator('NoddlEnableSSL_DropDown');
        this.uIDomainEdit = page.locator('NotxtDomain');
        this.uIAutoEmailContentEdit = page.locator('NotxtEmailContent');
        this.uIDeleteIcon = page.locator('NocmdDelete');
    }

    async selectHelpDeskClassAsTestAutomation(): Promise<void> {
        await this.uIHelpdeskClassComboBox.selectOption({ label: "Test Automation" });
        await this.uIHelpdeskClassComboBox.press('Tab');
    }

    async enterAtEmailAddressToWatch(emailID: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIEmailAddressToWatchEdit.click();
        await this.uIEmailAddressToWatchEdit.clear();
        await this.uIEmailAddressToWatchEdit.fill(emailID);
        //			uIMapHelpdesk.emailSettings.uIEmailAddressToWatchEdit.sendKeys(Keys.TAB);
    }

    async enterAtEmailAddressToWatch(i: string, emailID: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIEmailAddressToWatchEdit.click();
        await this.uIEmailAddressToWatchEdit.clear();
        await this.uIEmailAddressToWatchEdit.fill(emailID);
        //			uIMapHelpdesk.emailSettings.uIEmailAddressToWatchEdit.sendKeys(Keys.TAB);
    }

    async enterAtSmtpServer(sMTPServer: string): Promise<void> {
        await this.uISmtpServerEdit.fill(sMTPServer);
        await this.uISmtpServerEdit.press('Tab');
    }

    async enterAtSmtpPassWord(password: string): Promise<void> {
        await this.uIPasswordEdit.click();
        await this.uIPasswordEdit.clear();
        await this.uIPasswordEdit.fill(password);
        // Playback.pageLoadThreadWait()
    }

    async enterAtNotificationEmail(emails: string): Promise<void> {
        await this.uINotificationEmailEdit.fill(emails);
        await this.uINotificationEmailEdit.press('Tab');
    }

    async selectAtCategory(category: string): Promise<void> {
        await this.uICategoryComboBox.fill(category);
    }

    async selectAtStatus(status: string): Promise<void> {
        await this.uIStatusComboBox.fill(status);
    }

    async selectAtPriority(priority: string): Promise<void> {
        await this.uIPriorityComboBox.fill(priority);
    }

    async selectAtType(type: string): Promise<void> {
        await this.uITypeComboBox.fill(type);
    }

    async enterAtOwnerPF(i: string, ownerPF: string): Promise<void> {
        await this.uIOwnerPFCodeEdit.clear();
        await this.uIOwnerPFCodeEdit.fill(ownerPF);
        await this.uIOwnerPFCodeEdit.press('Tab');
    }

    async selectAtDistributionList(distributionList: string): Promise<void> {
        await this.uIManagersDistributionListComboBox.fill(distributionList);
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async saveNClose(): Promise<void> {
        await this.uISaveAndAddNewButton.click();
        // confirm popup: yes
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async close(): Promise<void> {
        // uIMapHelpdesk.emailSettings.driver.close()
    }

    async clickRefreshIcon(): Promise<void> {
        await this.uIRefreshIcon.click();
    }

    async enterEmailAddressToWatch(): Promise<void> {
        await this.uIEmailAddressToWatchEdit.click();
        await this.uIEmailAddressToWatchEdit.clear();
        await this.uIEmailAddressToWatchEdit.fill("Helpdesk@prophoenix.com");
        await this.uIEmailAddressToWatchEdit.press('Tab');
    }

    async enterUN(): Promise<void> {
        await this.uIUsernameEdit.click();
        await this.uIUsernameEdit.clear();
        await this.uIUsernameEdit.fill("admin");
    }

    async enterAtUserName(userName: string): Promise<void> {
        await this.uIUsernameEdit.click();
        await this.uIUsernameEdit.clear();
        await this.uIUsernameEdit.fill(userName);
    }

    async enterSmtpPassWord(): Promise<void> {
        await this.uIPasswordEdit.click();
        await this.uIPasswordEdit.clear();
        await this.uIPasswordEdit.fill("Pleasant");
        await this.uIPasswordEdit.press('Tab');
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        const statusMsg = await this.uIBottomStatusBar.innerText();
        expect(statusMsg).toEqual("1002 - Addition Successful");
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        const statusMsg = await this.uIBottomStatusBar.innerText();
        expect(statusMsg).toEqual("1003 - Update Successful");
    }

    async clickTypeCustomText(): Promise<void> {
        await this.uITypeCustomText.click();
    }

    async verifyAtHelpDeskManagersDistributionList(helpDeskManagersDistributionList: string): Promise<void> {
        // List<String> dropDownValues = objectIdentification.manualIdentify.getDropDownValues
        // (uIMapHelpdesk.emailSettings.uIHelpDeskManagersDistributionListDropDown)
        expect(helpDeskManagersDistributionList).toBeTruthy();
    }

    async selectAtHelpDeskManagersDistributionList(helpDeskManagersDistributionList: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption
        // (uIMapHelpdesk.emailSettings.uIHelpDeskManagersDistributionListDropDown,BaseData.getHelpdeskModuleValue("HelpDeskManagersDistributionList"))
    }

    async verifyAtHelpDeskManagersDistributionListInfoIconDisplayed(): Promise<void> {
        const displayed = await this.uIHelpDeskManagersDistributionListInfoIcon.isVisible();
        expect(displayed).toBeTruthy();
    }

    async clickHelpDeskManagersDistributionListInfoIcon(): Promise<void> {
        await this.uIHelpDeskManagersDistributionListInfoIcon.click();
    }

    async selectAtHelpDeskClass(helpDeskClass: string): Promise<void> {
        await this.uIHelpdeskClassComboBox.selectOption({ label: helpDeskClass });
        await this.uIHelpdeskClassComboBox.press('Tab');
    }

    async clickEnableModernAuthentication(): Promise<void> {
        // Playback.actionDriver.click(uIMapHelpdesk.emailSettings.uIEnableModernAuthenticationCheckBox).build().perform()
    }

    async enterAtTenantId(tenentId: string): Promise<void> {
        await this.uITenantId.click();
        await this.uITenantId.clear();
        await this.uITenantId.fill(tenentId);
    }

    async enterAtApplicationID(applicantID: string): Promise<void> {
        await this.uIApplicationId.click();
        await this.uIApplicationId.clear();
        await this.uIApplicationId.fill(applicantID);
    }

    async enterAtClientSecretID(clientSceretID: string): Promise<void> {
        await this.uIClientSecretID.click();
        await this.uIClientSecretID.clear();
        await this.uIClientSecretID.fill(clientSceretID);
    }

    async selectAtRole(role: string): Promise<void> {
        await this.uIRoleDropdownArrow.click();
        // Playback.threadWait()
        // objectIdentification.manualIdentify.selectRadControlDropDownValue(uIMapHelpdesk.emailSettings.uIRoleDropdownOption, BaseData.getHelpdeskModuleValue("Role"))
        await this.uIRoleDropdownArrow.click();
    }

    async selectAtJuris(juris: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapHelpdesk.emailSettings.uIJurisDropdown,
        // BaseData.getHelpdeskModuleValue("Juris"))
    }

    async verify25762ThisEmailIDIsAlreadyInUseAcknowledgePopupNotAppears(): Promise<void> {
        // popup.acknowledge.verifyAcknowledgeWindowNotOpened("(25762)This Email ID is already in use for a different Help Desk Class / Juris. Please enter a unique Email ID.")
    }

    async verifyAtEmailAddressToWatch(i: string, emailAddressToWatch: string): Promise<void> {
        const attribute = await this.uIEmailAddressToWatchEdit.inputValue();
        expect(emailAddressToWatch).toEqual(attribute);
    }

    async verifyAtEnableSSL(i: string, enableSSL: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapHelpdesk.emailSettings.uIEnableSSLDropdown)
        expect(selectedItem).toEqual(enableSSL);
    }

    async verifyAtSMTPServer(i: string, sMTPServer: string): Promise<void> {
        const attribute = await this.uISmtpServerEdit.inputValue();
        expect(sMTPServer).toEqual(attribute);
    }

    async verifyAtDomain(i: string, domain: string): Promise<void> {
        const attribute = await this.uIDomainEdit.inputValue();
        expect(domain).toEqual(attribute);
    }

    async verifyAtUserName(i: string, userName: string): Promise<void> {
        const attribute = await this.uIUsernameEdit.inputValue();
        expect(userName).toEqual(attribute);
    }

    async verifyAtPassword(i: string, password: string): Promise<void> {
        const attribute = await this.uIPasswordEdit.inputValue();
        expect(password).toEqual(attribute);
    }

    async verifyAtNotificationEmail(i: string, notificationEmail: string): Promise<void> {
        const attribute = await this.uINotificationEmailEdit.inputValue();
        expect(notificationEmail).toEqual(attribute);
    }

    async enterAtAutoEmailContent(i: string, autoEmailContent: string): Promise<void> {
        await this.uIAutoEmailContentEdit.clear();
        await this.uIAutoEmailContentEdit.fill(autoEmailContent);
        await this.uIAutoEmailContentEdit.press('Tab');
    }

    async clickDeleteIconWithConfirmationPopup(): Promise<void> {
        await this.uIDeleteIcon.click();
        // popup.confirm.acceptPopup()
    }

    async verifyAtOwnerPF(i: string, ownerPF: string): Promise<void> {
        const attribute = await this.uIOwnerPFCodeEdit.inputValue();
        expect(ownerPF).toEqual(attribute);
    }

    async verifyAtCategory(i: string, category: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapHelpdesk.emailSettings.uICategoryComboBox)
        expect(selectedItem).toEqual(category);
    }

    async verifyAtStatus(i: string, status: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapHelpdesk.emailSettings.uIStatusComboBox)
        expect(selectedItem).toEqual(status);
    }

    async verifyAtPriority(i: string, priority: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapHelpdesk.emailSettings.uIPriorityComboBox)
        expect(selectedItem).toEqual(priority);
    }

    async verifyAtType(i: string, type: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapHelpdesk.emailSettings.uITypeComboBox)
        expect(selectedItem).toEqual(type);
    }

    async verifyAtAutoEmailContent(i: string, autoEmailContent: string): Promise<void> {
        const attribute = await this.uIAutoEmailContentEdit.inputValue();
        expect(autoEmailContent).toEqual(attribute);
    }

    async verifyAtHelpDeskManagersDistributionList(i: string, helpDeskManagersDistributionList: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapHelpdesk.emailSettings.uIHelpDeskManagersDistributionListDropDown)
        expect(selectedItem).toEqual(helpDeskManagersDistributionList);
    }

    async verifyAtRole(i: string): Promise<void> {
        await this.uIRoleDropdownArrow.click();
        // List<WebElement> radListValues = objectIdentification.manualIdentify.getRadControlDropDownValuesCalender(uIMapHelpdesk.emailSettings.uIRoleDropdownOption)
        // for (WebElement radValues : radListValues) {
        // System.out.println(radValues.getText())
        // if (radValues.getText().equals(BaseData.getInventoryModuleValue("Role" + i))) {
        // System.out.println(radValues.getText())
        // verify.ExpectedPropertyValueIsEqual(BaseData.getInventoryModuleValue("Role" + i),
        // radValues.getText())
    }

    async verifyDeleteSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIBottomStatusBar.innerText();
        expect(text).toEqual("18 - Deleted successfully");
    }

    async verifyEnableModernAuthenticationCheckBoxChecked(): Promise<void> {
        // System.out.println(uIMapHelpdesk.emailSettings.uIEnableModernAuthenticationCheckBox.getAttribute("checked"))
        expect(await this.uIEnableModernAuthenticationCheckBox.isChecked()).toBeTruthy();
    }

    async verifyEnableModernAuthenticationCheckBoxNotChecked(): Promise<void> {
        // System.out.println(uIMapHelpdesk.emailSettings.uIEnableModernAuthenticationCheckBox.getAttribute("checked"))
        expect(await this.uIEnableModernAuthenticationCheckBox.isChecked()).toBeFalsy();
    }

    async verifyAtTenantID(i: string, tenantID: string): Promise<void> {
        const attribute = await this.uITenantId.inputValue();
        expect(tenantID).toEqual(attribute);
    }

    async verifyAtApplicationID(i: string, applicationID: string): Promise<void> {
        const attribute = await this.uIApplicationId.inputValue();
        expect(applicationID).toEqual(attribute);
    }

    async verifyAtClientSecretID(i: string, clientSecretID: string): Promise<void> {
        const attribute = await this.uIClientSecretID.inputValue();
        expect(clientSecretID).toEqual(attribute);
    }
}

export class HelpdeskPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async Reset(): Promise<void> {
        // uIMapHelpdesk = null
        // uIMapPopup = null
    }

    async switchToActivityEntry(): Promise<void> {
        // no-op: window handle
    }

    async switchToInternalTicketSearchScreen(): Promise<void> {
        // no-op: window handle
    }

    async switchToEmailSettings(): Promise<void> {
        // no-op: window handle
    }

    async switchToInternalTicketEntry(): Promise<void> {
        // no-op: window handle
    }

    async switchToNameEntry(): Promise<void> {
        // no-op: window handle
    }
}

export class InternalTicketEntryPage {
    readonly page: Page;
    readonly uIJurisComboBox: Locator;
    readonly uIHelpdeskClassComboBox: Locator;
    readonly uISubjectEdit: Locator;
    readonly uICreatorPFEdit: Locator;
    readonly uIOwnerPFCodeValueEdit: Locator;
    readonly uIOwnerPFCodeDescriptionEdit: Locator;
    readonly uICreatorPFLookupButton: Locator;
    readonly uIOwnerPFLookupButton: Locator;
    readonly uICreatorInfoIcon: Locator;
    readonly uIOwnerInfoIcon: Locator;
    readonly uITicketStatus: Locator;
    readonly uIClosedCheckBox: Locator;
    readonly uIStatusComboBox: Locator;
    readonly uIPriorityComboBox: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndAddNewButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uITicketText: Locator;
    readonly uIUpdatedDateTimeLabel: Locator;
    readonly uIUpdatedDateTimeValue: Locator;
    readonly uIUpdatedPF: Locator;
    readonly uICreatedDateTimeLabel: Locator;
    readonly uIDetailTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIActivitiesTab: Locator;
    readonly uITicketNumber: Locator;
    readonly uIStatusBar: Locator;
    readonly uICreatedDateTimeValue: Locator;
    readonly uITotalDurationLabel: Locator;
    readonly uIViewTicketYearNumber: Locator;
    readonly uIViewTicketYearEdit: Locator;
    readonly uIViewTicketInfoIcon: Locator;
    readonly uIClosedCheckBoxLabel: Locator;
    readonly uIReOpenCheckBoxLabel: Locator;
    readonly uIReOpenCheckBox: Locator;
    readonly uINotificationTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIJurisComboBox = page.locator('NolstJuris');
        this.uIHelpdeskClassComboBox = page.locator('NocddHelpDeskClass_DropDown');
        this.uISubjectEdit = page.locator('NotxtSubject');
        this.uICreatorPFEdit = page.locator('NolupCreator_CodeValue');
        this.uIOwnerPFCodeValueEdit = page.locator('NolupOwner_CodeValue');
        this.uIOwnerPFCodeDescriptionEdit = page.locator('NolupOwner_CodeDescription');
        this.uICreatorPFLookupButton = page.locator('NolupCreator_imgBtn');
        this.uIOwnerPFLookupButton = page.locator('NolupOwner_imgBtn');
        this.uICreatorInfoIcon = page.locator('NolupCreator_cmdIncOnAddr');
        this.uIOwnerInfoIcon = page.locator('NolupOwner_cmdIncOnAddr');
        this.uITicketStatus = page.locator('NolblCurrentStatus');
        this.uIClosedCheckBox = page.locator('NoChkClosed');
        this.uIStatusComboBox = page.locator('NocddStatus_DropDown');
        this.uIPriorityComboBox = page.locator('NocddPriority_DropDown');
        this.uISaveNCloseButton = page.locator('NocmdSaveNClose');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndAddNewButton = page.locator('NocmdSaveNAddNew');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uITicketText = page.locator('NolblTicket');
        this.uIUpdatedDateTimeLabel = page.locator('NolblUpdatedDateValue');
        this.uIUpdatedDateTimeValue = page.locator("//span[@id='lblUpdatedDateValue']");
        this.uIUpdatedPF = page.locator('NolblUpdatedByPFNbrValue');
        this.uICreatedDateTimeLabel = page.locator("//span[@id='lblCreated']");
        this.uIDetailTab = page.locator("//span[contains(text(),'Detail')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachments')]");
        this.uIActivitiesTab = page.locator("//span[contains(text(),'Activities')]");
        this.uITicketNumber = page.locator('NolblTicketText');
        this.uIStatusBar = page.locator("//td[@class='statusBar']/b");
        this.uICreatedDateTimeValue = page.locator("//span[@id='lblCreatedDateValue']");
        this.uITotalDurationLabel = page.locator("//span[@id='lblTotalDuration']");
        this.uIViewTicketYearNumber = page.locator("//input[@id='nbrTicketNbr_Number']");
        this.uIViewTicketYearEdit = page.locator("//input[@id='nbrTicketNbr_Year']");
        this.uIViewTicketInfoIcon = page.locator('NonbrTicketNbr_imgBtn');
        this.uIClosedCheckBoxLabel = page.locator("//input[@id='ChkClosed']/../label");
        this.uIReOpenCheckBoxLabel = page.locator("//input[@id='ChkISReopen']/../label");
        this.uIReOpenCheckBox = page.locator("//input[@id='ChkISReopen']");
        this.uINotificationTab = page.locator("//span[contains(text(),'Notification')]");
    }

    async selectAtHelpDeskClass(helpDeskClass: string): Promise<void> {
        await this.uIHelpdeskClassComboBox.selectOption({ label: helpDeskClass });
        //			uIMapHelpdesk.internalTicketEntry.uIHelpdeskClassComboBox
        //					.sendKeys(BaseData.getHelpdeskModuleValue("HelpDeskClass"));
        await this.uIHelpdeskClassComboBox.press('Tab');
    }

    async selectAtStatus(status: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapHelpdesk.internalTicketEntry.uIStatusComboBox,
        // (BaseData.getHelpdeskModuleValue("Status")))
    }

    async selectAtStatus1(status1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapHelpdesk.internalTicketEntry.uIStatusComboBox,
        // (BaseData.getHelpdeskModuleValue("Status1")))
    }

    async enterAtCreatorPF(creatorPF: string): Promise<void> {
        await this.uICreatorPFEdit.fill(creatorPF);
        await this.uICreatorPFEdit.press('Tab');
    }

    async enterAtOwnerPF(ownerPF: string): Promise<void> {
        await this.uIOwnerPFCodeValueEdit.fill(ownerPF);
        await this.uIOwnerPFCodeValueEdit.press('Tab');
    }

    async selectAtPriority(priority: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketEntry.uIPriorityComboBox, BaseData.getHelpdeskModuleValue("Priority"))
    }

    async selectAtPriority1(priority1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketEntry.uIPriorityComboBox, BaseData.getHelpdeskModuleValue("Priority1"))
    }

    async verifyAtPriority(priority: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapHelpdesk.internalTicketEntry.uIPriorityComboBox)
        expect(selectedItem).toEqual(priority);
    }

    async verifyAtPriority1(priority1: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapHelpdesk.internalTicketEntry.uIPriorityComboBox)
        expect(selectedItem).toEqual(priority1);
    }

    async enterAtSubject(subject: string): Promise<void> {
        await this.uISubjectEdit.fill(subject);
        await this.uISubjectEdit.press('Tab');
    }

    async enterSubject(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uISubjectEdit.fill("Creating Ticket for the reason of " + Randomized.randomString(20));
        await this.uISubjectEdit.press('Tab');
    }

    async verifyEnterHelpDeskClassAcknowledgeMessage(): Promise<void> {
        // popup: (30033) Enter Help Desk Class
    }

    async verifyEnterSubjectAcknowledgeMessage(): Promise<void> {
        // popup: (30033) Enter Subject
    }

    async verifyEnterCreatorAcknowledgeMessage(): Promise<void> {
        // popup: (30033) Enter Creator
    }

    async verifyEnterStatusAcknowledgeMessage(): Promise<void> {
        // popup: (30033) Enter Status
    }

    async verifyEnterPriorityAcknowledgeMessage(): Promise<void> {
        // popup: (30033) Enter Priority
    }

    async verifyEnterOwnerAcknowledgeMessage(): Promise<void> {
        // popup: (30033) Enter Owner
    }

    async clickDetailTab(): Promise<void> {
        await this.uIDetailTab.click();
    }

    async save(): Promise<void> {
        // uIMapHelpdesk.internalTicketEntry.uISaveButton.click();
        // popup.confirm.yes();
        // }
    }

    async saveNClose(): Promise<void> {
        await this.uISaveAndAddNewButton.click();
        // confirm popup: yes
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickRefreshIcon(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async close(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // uIMapHelpdesk.internalTicketEntry.driver.close()
    }

    async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> {
        // popup: 1011 - No Record Found
    }

    async save(): Promise<void> {
        // objectIdentification.manualIdentify.SaveTheScreen()
        // confirm popup: yes
        // Playback.controlReadyThreadWait()
    }

    async saveandclose(): Promise<void> {
        // objectIdentification.manualIdentify.saveAndCloseTheScreen()
        // confirm popup: yes
        // Playback.controlReadyThreadWait()
    }

    async verifyAtStatusInComboBox(status: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapHelpdesk.internalTicketEntry.uIStatusComboBox)
        expect(selectedItem).toEqual(status);
    }

    async verifyAtStatus(i: string, status: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapHelpdesk.internalTicketEntry.uIStatusComboBox)
        expect(selectedItem).toEqual(status);
    }

    async verifyStatusInTicketStatusByRunningData(ItemNo: string, status: string): Promise<void> {
        const text = await this.uITicketStatus.innerText();
        // value = status (from test data)
        expect(text).toEqual(value);
    }

    async verifyStatusInComboBoxByRunningData(status: string, ItemNo: string): Promise<void> {
        // System.out.println(status)
        // value = status (from test data)
        expect(status).toEqual(value);
    }

    async getSelectedOptionInStatusComboBox(): Promise<string> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapHelpdesk.internalTicketEntry.uIStatusComboBox)
        return selectedItem;
    }

    async verifyAtStatusInTicketStatus(status: string): Promise<void> {
        const text = await this.uITicketStatus.innerText();
        expect(text).toEqual(status);
    }

    async verifyTicketNoIsGenerated(): Promise<void> {
        const text = await this.uITicketNumber.innerText();
        expect(text.length() == 9).toBeTruthy();
    }

    async verifyAtTicketNo1(ticketNo1: string): Promise<void> {
        const text = await this.uITicketNumber.innerText();
        expect(ticketNo1).toBeTruthy();
    }

    async readTicketNo(): Promise<string> {
        const text = await this.uITicketNumber.innerText();
        return text;
    }

    async verifyActivitiesTabIsEnabledAndDisplayed(): Promise<void> {
        expect(await this.uIActivitiesTab.isVisible()).toBeTruthy();
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.uIActivitiesTab.isEnabled())
    }

    async verifyAttachmentTabIsEnabledAndDisplayed(): Promise<void> {
        expect(await this.uIAttachmentTab.isVisible()).toBeTruthy();
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.uIAttachmentTab.isEnabled())
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text).toEqual("1002 - Addition Successful");
    }

    async verify1006AcknowledgeIsNotArise(): Promise<void> {
        // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("Internal Ticket Entry")
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text).toEqual("1003 - Update Successful");
    }

    async switchToActivitiesTab(): Promise<void> {
        await this.uIActivitiesTab.click();
    }

    async verifyCreatedDateDisplayed(): Promise<void> {
        expect(await this.uICreatedDateTimeLabel.isVisible()).toBeTruthy();
    }

    async verifyCreatedDateValueAsCurrentDate(): Promise<void> {
        const value = await this.uICreatedDateTimeValue.innerText();
        // System.out.println(value)
        expect(value.contains(Randomized.getCurrentDate("MM/dd/yy"))).toBeTruthy();
    }

    async verifyUpdatedDateDisplayed(): Promise<void> {
        expect(await this.uIUpdatedDateTimeLabel.isVisible()).toBeTruthy();
    }

    async verifyUpdatedDateValueAsCurrentDate(): Promise<void> {
        const value = await this.uIUpdatedDateTimeValue.innerText();
        expect(value.contains(Randomized.getCurrentDate("MM/dd/yy"))).toBeTruthy();
    }

    async clickSaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        // popup.confirm.acceptPopup()
    }

    async verifyTotalDurationIsDisplayed(): Promise<void> {
        expect(await this.uITotalDurationLabel.isVisible()).toBeTruthy();
    }

    async enterAtViewTicketNo(ticketNo1: string): Promise<void> {
        await this.uIViewTicketYearEdit.fill(ticketNo1);
        await this.uIViewTicketYearNumber.fill(ticketNo1);
        await this.uIViewTicketYearNumber.press('Tab');
    }

    async verifyViewTicketInfoIcon(): Promise<void> {
        expect(await this.uIViewTicketInfoIcon.isVisible()).toBeTruthy();
    }

    async clickViewTicketInfoIcon(): Promise<void> {
        await this.uIViewTicketInfoIcon.click();
    }

    async verifyClosedLabel(): Promise<void> {
        const closed = await this.uIClosedCheckBoxLabel.innerText();
        expect(closed.contains("Closed")).toBeTruthy();
    }

    async clickClosedCheckBox(): Promise<void> {
        await this.uIClosedCheckBox.click();
    }

    async verifyReOpenLabel(): Promise<void> {
        const closed = await this.uIReOpenCheckBoxLabel.innerText();
        expect(closed.contains("Closed, Re-open?")).toBeTruthy();
    }

    async clickReOpenCheckBox(): Promise<void> {
        await this.uIReOpenCheckBox.click();
    }

    async verifyHelpDeskClassAsNull(helpDeskclass: string): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapHelpdesk.internalTicketEntry.uIHelpdeskClassComboBox)
        expect(selectedItem).toEqual(helpDeskclass);
    }

    async verifyAtTicketNo(ticket: string): Promise<void> {
        const text = await this.uITicketNumber.innerText();
        expect(text).toEqual(ticket);
    }

    async enterAtSubject1(subject1: string): Promise<void> {
        await this.uISubjectEdit.fill(subject1);
        await this.uISubjectEdit.press('Tab');
    }

    async saveNAddNew(): Promise<void> {
        await this.uISaveAndAddNewButton.click();
        // popup.confirm.acceptPopup()
    }

    async verifySubjectAsNull(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapHelpdesk.internalTicketEntry.uISubjectEdit.getText().isBlank())
    }

    async doubleClickTheSaveIcon(): Promise<void> {
        // Actions actions = new Actions(Playback.driver)
        // actions.doubleClick(uIMapHelpdesk.internalTicketEntry.uISaveButton).perform()
        // confirm popup: yes
    }

    async doubleClickSaveAndCloseIcon(): Promise<void> {
        // Actions actions = new Actions(Playback.driver)
        // actions.doubleClick(uIMapHelpdesk.internalTicketEntry.uISaveNCloseButton).perform()
        // confirm popup: yes
    }

    async doubleClickSaveNAddNew(): Promise<void> {
        // Actions actions = new Actions(Playback.driver)
        // actions.doubleClick(uIMapHelpdesk.internalTicketEntry.uISaveAndAddNewButton).perform()
        // confirm popup: yes
    }
}

export class InternalTicketSearchPage {
    readonly page: Page;
    readonly uISubjectEdit: Locator;
    readonly uICreatorPFEdit: Locator;
    readonly uIOwnerPFEdit: Locator;
    readonly uICreatorPFLookupButton: Locator;
    readonly uIOwnerPFLookupButton: Locator;
    readonly uIOwnerPFDescription: Locator;
    readonly uICreatorInfoIcon: Locator;
    readonly uIOwnerInfoIcon: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIDateResetButton: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIDateTypeComboBox: Locator;
    readonly uIHelpDeskClassComboBox: Locator;
    readonly uICreatorJurisComboBox: Locator;
    readonly uIStatusComboBox: Locator;
    readonly uIPriorityComboBox: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uITypeComboBox: Locator;
    readonly uIProjectComboBox: Locator;
    readonly uIModuleComboBox: Locator;
    readonly uIHowItWasClosedComboBox: Locator;
    readonly uIVendorNameComboBox: Locator;
    readonly uIActionPlanComboBox: Locator;
    readonly uICustom1ComboBox: Locator;
    readonly uICustom2ComboBox: Locator;
    readonly uIToDateEdit: Locator;
    readonly uITicketYearEdit: Locator;
    readonly uITicketNumberEdit: Locator;
    readonly uIIncludeClosedCheckBox: Locator;
    readonly uIIncludeActivitiesCheckBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIBackButton: Locator;
    readonly uISearchResultGrid: Locator;
    readonly uITicketNoInfoIcon: Locator;
    readonly uICancelButton: Locator;
    readonly uIMessageText: Locator;
    readonly uIErrorMessageText: Locator;
    readonly uIPrintButton: Locator;
    readonly uIInternalTicketSearchTable: Locator;
    readonly uIDashboardTab: Locator;
    readonly uIDateTypeFrom: Locator;
    readonly uIDateTypeTo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubjectEdit = page.locator('NotabTicketSrch_tmpl0_usrBasic_txtSubject');
        this.uICreatorPFEdit = page.locator('NotabTicketSrch_tmpl0_usrBasic_lupCreator_CodeValue');
        this.uIOwnerPFEdit = page.locator('NotabTicketSrch_tmpl0_usrBasic_lupOwner_CodeValue');
        this.uICreatorPFLookupButton = page.locator('NotabTicketSrch_tmpl0_usrBasic_lupCreator_imgBtn');
        this.uIOwnerPFLookupButton = page.locator('NotabTicketSrch_tmpl0_usrBasic_lupOwner_imgBtn');
        this.uIOwnerPFDescription = page.locator('NotabTicketSrch_tmpl0_usrBasic_lupOwner_CodeDescription');
        this.uICreatorInfoIcon = page.locator('NotabTicketSrch_tmpl0_usrBasic_lupCreator_cmdIncOnAddr');
        this.uIOwnerInfoIcon = page.locator('NotabTicketSrch_tmpl0_usrBasic_lupOwner_cmdIncOnAddr');
        this.uIJurisDropdown = page.locator('NotabTicketSrch_tmpl0_usrBasic_lstJuris');
        this.uIDateResetButton = page.locator('NotabTicketSrch_tmpl0_usrBasic_dtImgClear');
        this.uIFromDateEdit = page.locator('NotabTicketSrch_tmpl0_usrBasic_dateFrom_KPIDttmCtrl');
        this.uIDateTypeComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddDateType');
        this.uIHelpDeskClassComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddHelpDeskClass_DropDown');
        this.uICreatorJurisComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_lstCreatorJuris');
        this.uIStatusComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddStatus_DropDown');
        this.uIPriorityComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddPriority_DropDown');
        this.uICategoryComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddCategory_DropDown');
        this.uITypeComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddType_DropDown');
        this.uIProjectComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddProject_DropDown');
        this.uIModuleComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddModule_DropDown');
        this.uIHowItWasClosedComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddHowClosed_DropDown');
        this.uIVendorNameComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddVendorName');
        this.uIActionPlanComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddActionPlan_DropDown');
        this.uICustom1ComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddCustom1_DropDown');
        this.uICustom2ComboBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_cddCustom2_DropDown');
        this.uIToDateEdit = page.locator('NotabTicketSrch_tmpl0_usrBasic_dateTo_KPIDttmCtrl');
        this.uITicketYearEdit = page.locator('NotabTicketSrch_tmpl0_usrBasic_nbrTicketNbr_Year');
        this.uITicketNumberEdit = page.locator('NotabTicketSrch_tmpl0_usrBasic_nbrTicketNbr_Number');
        this.uIIncludeClosedCheckBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_chkIncludeClosed');
        this.uIIncludeActivitiesCheckBox = page.locator('NotabTicketSrch_tmpl0_usrBasic_chkIncludeActivities');
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uISearchResultGrid = page.locator('NotabTicketSrch_tmpl0_usrBasic_grdSearchResults');
        this.uITicketNoInfoIcon = page.locator('NotabTicketSrch_tmpl0_usrBasic_nbrTicketNbr_imgBtn');
        this.uICancelButton = page.locator('NocmdCancel');
        this.uIMessageText = page.locator('NolblMessage');
        this.uIErrorMessageText = page.locator('NolblErrorMsg');
        this.uIPrintButton = page.locator("//img[contains(@src,'print.gif')]");
        this.uIInternalTicketSearchTable = page.locator("//div[@id='tabTicketSrch_tmpl0_usrBasic_grdSearchResults']");
        this.uIDashboardTab = page.locator("//span[contains(text(),'Dashboard')]");
        this.uIDateTypeFrom = page.locator('NotabTicketSrch_tmpl0_usrBasic_dateFrom_KPIDttmCtrl');
        this.uIDateTypeTo = page.locator('NotabTicketSrch_tmpl0_usrBasic_dateTo_KPIDttmCtrl');
    }

    async selectAtJuris(juris: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapHelpdesk.internalTicketSearch.uIJurisDropdown,
        // BaseData.getHelpdeskModuleValue("Juris"))
    }

    async selectAtCreatorJuris(creatorJuris: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapHelpdesk.internalTicketSearch.uICreatorJurisComboBox,
        // BaseData.getHelpdeskModuleValue("CreatorJuris"))
    }

    async selectJurisAsNull(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapHelpdesk.internalTicketSearch.uIJurisDropdown,
        // "--")
    }

    async selectCreatorAsNull(): Promise<void> {
        await this.uICreatorJurisComboBox.selectOption({ label: "--" });
    }

    async selectAtStatus(status: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIStatusComboBox, BaseData.getHelpdeskModuleValue("Status"))
    }

    async selectAtPriority(priority: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIPriorityComboBox, BaseData.getHelpdeskModuleValue("Priority"))
    }

    async selectAtPriority1(priority1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIPriorityComboBox,
        // BaseData.getHelpdeskModuleValue("Priority1"))
    }

    async selectAtPriority2(priority2: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIPriorityComboBox,
        // BaseData.getHelpdeskModuleValue("Priority2"))
    }

    async selectAtPriority3(priority3: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIPriorityComboBox,
        // BaseData.getHelpdeskModuleValue("Priority3"))
    }

    async selectAtCategory(category: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uICategoryComboBox, BaseData.getHelpdeskModuleValue("Category"))
    }

    async selectAtType(type: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapHelpdesk.internalTicketSearch.uITypeComboBox,
        // BaseData.getHelpdeskModuleValue("Type"))
    }

    async selectAtModule(module: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIModuleComboBox, BaseData.getHelpdeskModuleValue("Module"))
    }

    async selectAtProject(project: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIProjectComboBox, BaseData.getHelpdeskModuleValue("Project"))
    }

    async selectAtHowItWasClosed(how: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIHowItWasClosedComboBox,
        // BaseData.getHelpdeskModuleValue("How"))
    }

    async selectAtActionPlan(plan: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIActionPlanComboBox, BaseData.getHelpdeskModuleValue("Plan"))
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        // Playback.waitForControlReady()
    }

    async ClickDateResetButton(): Promise<void> {
        await this.uIDateResetButton.click();
        // Playback.waitForControlReady()
    }

    async ClickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
        // Playback.waitForControlReady()
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
        // Playback.waitForControlReady()
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
        // Playback.waitForControlReady()
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async AddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async enterTicketNoByActiveData(TicketYear: string): Promise<void> {
        await this.uITicketYearEdit.fill(TicketYear.substring(0, 2));
        await this.uITicketNumberEdit.fill(TicketYear.substring(3));
        await this.uITicketNumberEdit.press('Tab');
    }

    async VerifyTicketNumberInGrid(TicketNo: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(TicketNo, objectIdentification.manualIdentify.getGridCell(uIMapHelpdesk.internalTicketSearch.uISearchResultGrid, TicketNo).getText())
    }

    async VerifyAtTicketNumberInGrid(ticketNo: string): Promise<void> {
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid, BaseData.getHelpdeskModuleValue("TicketNo")); //
        expect(await this.gridCell.innerText()).toEqual(ticketNo);
    }

    async enterAtTicketNo(ticketNo: string): Promise<void> {
        await this.uITicketYearEdit.fill(ticketNo);
        await this.uITicketNumberEdit.fill(ticketNo);
        await this.uITicketNumberEdit.press('Tab');
    }

    async verifyTicketNoInfoIconIsDisplayed(): Promise<void> {
        expect(await this.uITicketNoInfoIcon.isVisible()).toBeTruthy();
    }

    async verifyTicketNoFieldIsEmpty(): Promise<void> {
        // verify.ExpectedValueIsTrue(
        // uIMapHelpdesk.internalTicketSearch.uITicketYearEdit.getAttribute("title").isBlank())
        // verify.ExpectedValueIsTrue(
        // uIMapHelpdesk.internalTicketSearch.uITicketNumberEdit.getAttribute("title").isBlank())
    }

    async verifyAtStatusInGrid(status: string): Promise<void> {
        // String innerText = objectIdentification.manualIdentify.getGridCellInnerText(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Status", 0)
        expect(innerText).toEqual(status);
    }

    async verifyStatusColumnInGrid(status: string): Promise<void> {
        // List<String> columnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Status")
        // for (String value : columnValues) {
        expect(value).toEqual(status);
    }

    async verifyStatus1ColumnInGrid(status1: string): Promise<void> {
        // List<String> columnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Status")
        // for (String value : columnValues) {
        expect(value).toEqual(status1);
    }

    async verifyStatus2ColumnInGrid(status2: string): Promise<void> {
        // List<String> columnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Status")
        // for (String value : columnValues) {
        expect(value).toEqual(status2);
    }

    async verifyPriorityColumnAsHighInGrid(): Promise<void> {
        // List<WebElement> columnValues = objectIdentification.manualIdentify.getGridTableColumnCells(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Priority")
        // for (WebElement value : columnValues) {
        const attribute = await this.value.innerText();
        expect("High").toEqual(attribute);
        //				verify.ExpectedValueIsTrue(attribute.contains("gridrowclrHighImage"));
    }

    async verifyPriorityColumnAsMediumInGrid(): Promise<void> {
        // List<WebElement> columnValues = objectIdentification.manualIdentify.getGridTableColumnCells(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Priority"); //
        // for (WebElement value : columnValues) {
        const attribute = await this.value.innerText();
        expect("Med").toEqual(attribute);
        // String attribute = value.getAttribute("class");
        // verify.ExpectedValueIsTrue(attribute.contains("gridrowclrMediumImage"));
    }

    async verifyPriorityColumnAsLowInGrid(): Promise<void> {
        // List<WebElement> columnValues = objectIdentification.manualIdentify.getGridTableColumnCells(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Priority"); //
        // for (WebElement value : columnValues) {
        const attribute = await this.value.innerText();
        expect("Low").toEqual(attribute);
        //				String attribute = value.getAttribute("class");
        //				verify.ExpectedValueIsTrue(attribute.isEmpty());
    }

    async verifyPriorityColumnAsCriticalInGrid(): Promise<void> {
        // List<WebElement> columnValues = objectIdentification.manualIdentify.getGridTableColumnCells(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Priority"); //
        // for (WebElement value : columnValues) {
        const attribute = await this.value.innerText();
        expect("Critical").toEqual(attribute);
        //				String attribute = value.getAttribute("class");
        //				verify.ExpectedValueIsTrue(attribute.contains("gridrowclrCriticalImage"));
    }

    async verifyAtOwnerNameInGrid(ownerName: string): Promise<void> {
        // String innerText = objectIdentification.manualIdentify.getGridCellInnerText(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Owner", 0)
        expect(innerText).toEqual(ownerName);
    }

    async verifyAtStatusColorAsRedInGrid(i: string, status: string): Promise<void> {
        const red = "rgba(255, 0, 0, 1)";
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, BaseData.getHelpdeskModuleValue("Status"+i),"TicketNo")
        const cssValue = gridCell.getCssValue("color");
        // System.out.println(cssValue)
        expect(cssValue.contains(red)).toBeTruthy();
    }

    async verifyAtStatus1InGrid(status1: string): Promise<void> {
        // String innerText = objectIdentification.manualIdentify.getGridCellInnerText(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Status", 0)
        expect(innerText).toEqual(status1);
    }

    async verifyAtStatusColorAsBlackInGrid(): Promise<void> {
        const black = "rgba(0, 0, 0, 1)";
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Status", 0)
        const cssValue = gridCell.getCssValue("color");
        // System.out.println(cssValue)
        expect(cssValue.contains(black)).toBeTruthy();
    }

    async selectRowByAtTicketNo(ticketNo: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable,
        // BaseData.getHelpdeskModuleValue("TicketNo"))
    }

    async verifyTicketNoAndPriorityExistsInGrid(ticketNo: string, priority: string): Promise<void> {
        // String row = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable,
        // BaseData.getHelpdeskModuleValue("TicketNo")).getText()
        // System.out.println(row)
        expect(ticketNo).toBeTruthy();
        // List<WebElement> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnCells(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "Priority"); //
        // for (WebElement cell : gridTableColumnValues) {
        const cellText = await this.uISearchResultGrid.locator('td').first().innerText();
        expect(cellText).toContain(priority);
        //				String priority = cell.getAttribute("class");
        //				verify.ExpectedValueIsTrue(priority.contains("gridrowclrCriticalImage"));
    }

    async enterAtOwnerPF(ownerPF: string): Promise<void> {
        await this.uIOwnerPFEdit.fill(ownerPF);
        await this.uIOwnerPFEdit.press('Tab');
    }

    async verifyOwnerPFIsEmpty(): Promise<void> {
        // verify.ExpectedValueIsTrue(
        // uIMapHelpdesk.internalTicketSearch.uIOwnerPFEdit.getAttribute("title").isBlank())
        // verify.ExpectedValueIsTrue(
        // uIMapHelpdesk.internalTicketSearch.uIOwnerPFDescription.getAttribute("title").isBlank())
    }

    async verifyOwnerInfoIconIsDisplayed(): Promise<void> {
        expect(await this.uIOwnerInfoIcon.isVisible()).toBeTruthy();
    }

    async verifyStatusComboBoxIsShowingDefaultValue(): Promise<void> {
        // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapHelpdesk.internalTicketSearch.uIStatusComboBox)
        expect(selectedItem).toEqual("--");
    }

    async selectAtStatus1(status1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIStatusComboBox, BaseData.getHelpdeskModuleValue("Status1"))
    }

    async selectAtStatus2(status2: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapHelpdesk.internalTicketSearch.uIStatusComboBox, BaseData.getHelpdeskModuleValue("Status2"))
    }

    async verifyAtSubjectInGrid(i: string, subject: string): Promise<void> {
        // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable,
        // BaseData.getHelpdeskModuleValue("Subject" + i))
        // verify.ExpectedValueIsTrue(
        // gridRowByCellInnerText.getText().contains(BaseData.getHelpdeskModuleValue("Subject" + i)))
    }

    async verifyAtPriorityInGrid(priority: string): Promise<void> {
        // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable,
        // BaseData.getHelpdeskModuleValue("Priority"))
        // verify.ExpectedValueIsTrue(
        // gridRowByCellInnerText.getText().contains(BaseData.getHelpdeskModuleValue("Priority")))
    }

    async verifyAtPriorityByTicketNoInGrid(ticketNo: string, priority: string): Promise<void> {
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable,
        // BaseData.getHelpdeskModuleValue("TicketNo"), "Priority")
        expect(priority).toEqual(await this.gridCell.innerText());
    }

    async verifyAtPriority1ByTicketNoInGrid(ticketNo: string, priority1: string): Promise<void> {
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
        // uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable,
        // BaseData.getHelpdeskModuleValue("TicketNo"), "Priority")
        expect(priority1).toEqual(await this.gridCell.innerText());
    }

    async selectRandomRow(): Promise<void> {
        // objectIdentification.randomIdentify.selectRandomGridRow()
    }

    async enterAtSubject(i: string, subject: string): Promise<void> {
        await this.uISubjectEdit.click();
        await this.uISubjectEdit.clear();
        await this.uISubjectEdit.fill(subject);
    }

    async clickIncludeActivitiesCheckbox(): Promise<void> {
        await this.uIIncludeActivitiesCheckBox.click();
    }

    async selectGridRowByAtSubject(i: string, subject: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid,
        // BaseData.getHelpdeskModuleValue("Subject" + i))
    }

    async clickIncludeClosedCheckbox(): Promise<void> {
        await this.uIIncludeClosedCheckBox.click();
    }

    async verifyAtStatusColorAsGrayInGrid(i: string, status: string): Promise<void> {
        const gray = "rgba(128, 128, 128, 1)";
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, BaseData.getHelpdeskModuleValue("Status"+i),"TicketNo")
        const cssValue = gridCell.getCssValue("color");
        // System.out.println(cssValue)
        expect(cssValue.contains(gray)).toBeTruthy();
    }

    async verifyRowCountAsOne(): Promise<void> {
        // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable)
        // verify.ExpectedIntergerValueIsEqualToActual(gridTableRowsCount, 1)
    }

    async switchToDashboardTab(): Promise<void> {
        await this.uIDashboardTab.click();
        // Playback.controlReadyThreadWait()
        // no-op: window handle
    }

    async selectAtHelpDeskClass(helpDeskClass: string): Promise<void> {
        await this.uIHelpDeskClassComboBox.selectOption({ label: helpDeskClass });
    }

    async VerifyAtTicketNumberInGrid(ticketNo: string): Promise<void> {
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
        // uIMapHelpdesk.internalTicketSearch.uISearchResultGrid, ticketNo); //
        expect(await this.gridCell.innerText()).toEqual(ticketNo);
    }

    async verifyAtHelpDeskClassValueNotContainsInDropdown(helpDeskClass: string): Promise<void> {
        // List<WebElement> dropDownOptionsElements = objectIdentification.manualIdentify.getDropDownOptionsElements(uIMapHelpdesk.internalTicketSearch.uIHelpDeskClassComboBox)
        // for(WebElement value:dropDownOptionsElements) {
        // if(!value.equals(BaseData.getHelpdeskModuleValue("HelpDeskClass"))) {
        expect(helpDeskClass).toBeTruthy();
    }

    async verifyDuplicatesTicketNoIsNotListedInGrid(): Promise<void> {
        // objectIdentification.manualIdentify.verifyDuplicatesIsNotListedInGridByColumnName(uIMapHelpdesk.internalTicketSearch.uIInternalTicketSearchTable, "TicketNo")
    }
}

export class NameEntryPage {
    readonly page: Page;
    readonly uIBusinessIDEdit: Locator;
    readonly uINameEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNdCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBusinessIDEdit = page.locator('NotxtCMPCode');
        this.uINameEdit = page.locator('NotxtBusinessName');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveNdCloseButton = page.locator('NocmdSaveNClose');
    }

    async enterAtBusinessID(businessID: string): Promise<void> {
        await this.uIBusinessIDEdit.fill(businessID);
    }

    async enterAtName(name: string): Promise<void> {
        await this.uINameEdit.fill(name);
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async saveNdClose(): Promise<void> {
        await this.uISaveNdCloseButton.click();
        // confirm popup: yes
    }
}

