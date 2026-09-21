import { Page } from '@playwright/test';
import {
  AnimalControlPage,
  AnimalNameSearchPage, AnimalNameSearchHelpWindowPage,
  AnimalNameEntryPage, AnimalNameEntryMainTabPage, AnimalNameEntryOwnerDetailsTabPage,
  AnimalNameEntryActivityTabPage, AnimalNameEntryAddressesTabPage,
  AnimalNameEntryCommentsTabPage, AnimalNameEntryMedicalTabPage,
  AnimalNameEntryMedicalProcedurePage,
  AnimalCaseSearchPage, AnimalCaseSearchAdvancedTabPage,
  AnimalCaseEntryPage, AnimalCaseEntryMainTabPage, AnimalCaseEntryAnimalInfoTabPage,
  AnimalCaseEntryObservationsTabPage, AnimalCaseEntryResolutionsTabPage,
  AnimalCaseEntryBiteReportTabPage,
  NarrativeTabPage as AnimalNarrativeTabPage,
  ReportingTabPage as AnimalReportingTabPage,
  AnimalCaseEntryApprovalTabPage,
  AnimalLostOrFoundSearchPage, AnimalLostOrFoundEntryPage,
  AnimalRegistrationSearchPage, AnimalRegistrationEntryPage,
  AnimalRegistrationEntryApplicantTabPage, AnimalRegistrationEntryFeesTabPage,
  AnimalRegistrationEntryNotesOrConditionsTabPage, AnimalRegistrationFlagsTabPage,
  AnimalRegistrationContactsTabPage, AnimalRegistrationHistoryTabPage,
  AnimalRegistrationEntryMapTabPage,
  AnimalCageRentalPage, AnimalCageRentalInventoryItemTabPage,
  AnimalCageRentalFeesTabPage, AnimalCageRentalInvoiceTabPage,
  AnimalNameMergePage, AnimalNameMergeHelpWindowPage,
} from '../pages/animalControl';

// ── Type ─────────────────────────────────────────────────────────────────────

export type AnimalControlFixture = {
  animalControl: {
    module: AnimalControlPage;
    animalNameSearch: AnimalNameSearchPage;
    animalNameSearchHelpWindow: AnimalNameSearchHelpWindowPage;
    animalNameEntry: AnimalNameEntryPage & {
      animalNameEntryMainTab: AnimalNameEntryMainTabPage;
      animalNameEntryOwnerDetailsTab: AnimalNameEntryOwnerDetailsTabPage;
      animalNameEntryActivityTab: AnimalNameEntryActivityTabPage;
      animalNameEntryAddressesTab: AnimalNameEntryAddressesTabPage;
      animalNameEntryCommentsTab: AnimalNameEntryCommentsTabPage;
      animalNameEntryMedicalTab: AnimalNameEntryMedicalTabPage;
    };
    animalNameEntryMedicalProcedure: AnimalNameEntryMedicalProcedurePage;
    animalCaseSearch: AnimalCaseSearchPage & {
      animalCaseSearchAdvancedTab: AnimalCaseSearchAdvancedTabPage;
    };
    animalCaseEntry: AnimalCaseEntryPage & {
      animalCaseEntryMainTab: AnimalCaseEntryMainTabPage;
      animalCaseEntryAnimalInfoTab: AnimalCaseEntryAnimalInfoTabPage;
      animalCaseEntryObservationsTab: AnimalCaseEntryObservationsTabPage;
      animalCaseEntryResolutionsTab: AnimalCaseEntryResolutionsTabPage;
      animalCaseEntryBiteReportTab: AnimalCaseEntryBiteReportTabPage;
      narrativeTab: AnimalNarrativeTabPage;
      reportingTab: AnimalReportingTabPage;
      animalCaseEntryApprovalTab: AnimalCaseEntryApprovalTabPage;
    };
    animalLostOrFoundSearch: AnimalLostOrFoundSearchPage;
    animalLostOrFoundEntry: AnimalLostOrFoundEntryPage;
    animalRegistrationSearch: AnimalRegistrationSearchPage;
    animalRegistrationEntry: AnimalRegistrationEntryPage & {
      animalRegistrationEntryApplicantTab: AnimalRegistrationEntryApplicantTabPage;
      animalRegistrationEntryFeesTab: AnimalRegistrationEntryFeesTabPage;
      animalRegistrationEntryNotesOrConditionsTab: AnimalRegistrationEntryNotesOrConditionsTabPage;
      animalRegistrationFlagsTab: AnimalRegistrationFlagsTabPage;
      animalRegistrationContactsTab: AnimalRegistrationContactsTabPage;
      animalRegistrationHistoryTab: AnimalRegistrationHistoryTabPage;
      animalRegistrationEntryMapTab: AnimalRegistrationEntryMapTabPage;
    };
    animalCageRental: AnimalCageRentalPage & {
      animalCageRentalInventoryItemTab: AnimalCageRentalInventoryItemTabPage;
      animalCageRentalFeesTab: AnimalCageRentalFeesTabPage;
      animalCageRentalInvoiceTab: AnimalCageRentalInvoiceTabPage;
    };
    animalNameMerge: AnimalNameMergePage;
    animalNameMergeHelpWindow: AnimalNameMergeHelpWindowPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const animalControlFixtureDefs = {
  animalControl: async ({ page }: { page: Page }, use: (v: AnimalControlFixture['animalControl']) => Promise<void>) => {
    const animalNameEntry = Object.assign(new AnimalNameEntryPage(page), {
      animalNameEntryMainTab: new AnimalNameEntryMainTabPage(page),
      animalNameEntryOwnerDetailsTab: new AnimalNameEntryOwnerDetailsTabPage(page),
      animalNameEntryActivityTab: new AnimalNameEntryActivityTabPage(page),
      animalNameEntryAddressesTab: new AnimalNameEntryAddressesTabPage(page),
      animalNameEntryCommentsTab: new AnimalNameEntryCommentsTabPage(page),
      animalNameEntryMedicalTab: new AnimalNameEntryMedicalTabPage(page),
    });
    const animalCaseSearch = Object.assign(new AnimalCaseSearchPage(page), {
      animalCaseSearchAdvancedTab: new AnimalCaseSearchAdvancedTabPage(page),
    });
    const animalCaseEntry = Object.assign(new AnimalCaseEntryPage(page), {
      animalCaseEntryMainTab: new AnimalCaseEntryMainTabPage(page),
      animalCaseEntryAnimalInfoTab: new AnimalCaseEntryAnimalInfoTabPage(page),
      animalCaseEntryObservationsTab: new AnimalCaseEntryObservationsTabPage(page),
      animalCaseEntryResolutionsTab: new AnimalCaseEntryResolutionsTabPage(page),
      animalCaseEntryBiteReportTab: new AnimalCaseEntryBiteReportTabPage(page),
      narrativeTab: new AnimalNarrativeTabPage(page),
      reportingTab: new AnimalReportingTabPage(page),
      animalCaseEntryApprovalTab: new AnimalCaseEntryApprovalTabPage(page),
    });
    const animalRegistrationEntry = Object.assign(new AnimalRegistrationEntryPage(page), {
      animalRegistrationEntryApplicantTab: new AnimalRegistrationEntryApplicantTabPage(page),
      animalRegistrationEntryFeesTab: new AnimalRegistrationEntryFeesTabPage(page),
      animalRegistrationEntryNotesOrConditionsTab: new AnimalRegistrationEntryNotesOrConditionsTabPage(page),
      animalRegistrationFlagsTab: new AnimalRegistrationFlagsTabPage(page),
      animalRegistrationContactsTab: new AnimalRegistrationContactsTabPage(page),
      animalRegistrationHistoryTab: new AnimalRegistrationHistoryTabPage(page),
      animalRegistrationEntryMapTab: new AnimalRegistrationEntryMapTabPage(page),
    });
    const animalCageRental = Object.assign(new AnimalCageRentalPage(page), {
      animalCageRentalInventoryItemTab: new AnimalCageRentalInventoryItemTabPage(page),
      animalCageRentalFeesTab: new AnimalCageRentalFeesTabPage(page),
      animalCageRentalInvoiceTab: new AnimalCageRentalInvoiceTabPage(page),
    });
    await use({
      module: new AnimalControlPage(page),
      animalNameSearch: new AnimalNameSearchPage(page),
      animalNameSearchHelpWindow: new AnimalNameSearchHelpWindowPage(page),
      animalNameEntry,
      animalNameEntryMedicalProcedure: new AnimalNameEntryMedicalProcedurePage(page),
      animalCaseSearch,
      animalCaseEntry,
      animalLostOrFoundSearch: new AnimalLostOrFoundSearchPage(page),
      animalLostOrFoundEntry: new AnimalLostOrFoundEntryPage(page),
      animalRegistrationSearch: new AnimalRegistrationSearchPage(page),
      animalRegistrationEntry,
      animalCageRental,
      animalNameMerge: new AnimalNameMergePage(page),
      animalNameMergeHelpWindow: new AnimalNameMergeHelpWindowPage(page),
    });
  },
};
