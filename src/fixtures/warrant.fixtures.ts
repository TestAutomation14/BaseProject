import { Page } from '@playwright/test';
import {
  WarrantsPage,
  WarrentEntryAuthenticatorWindowPage,
  WarrantEntryPage, WarrantEntryMainTabPage, ClearTabPage, StatusTabPage,
  ChargesTabPage, NarrativeTabPage as WarrantNarrativeTabPage,
  ServiceTabPage, MapTabPage as WarrantMapTabPage,
  WarrantEntryHistoryTabPage, WarrantEntryNotesTabPage,
  WarrantSearchPage, WarrantDetailsPage,
  WarrantNamesSearchPage, BatchClearancePage,
  WarrantTypePage, WarrantTypeEntryPage,
} from '../pages/warrant';

// ── Type ─────────────────────────────────────────────────────────────────────

export type WarrantFixture = {
  warrant: {
    module: WarrantsPage;
    warrentEntryAuthenticatorWindow: WarrentEntryAuthenticatorWindowPage;
    warrantEntry: WarrantEntryPage & {
      warrantEntryMainTab: WarrantEntryMainTabPage;
      clearTab: ClearTabPage;
      statusTab: StatusTabPage;
      chargesTab: ChargesTabPage;
      narrativeTab: WarrantNarrativeTabPage;
      serviceTab: ServiceTabPage;
      mapTab: WarrantMapTabPage;
      warrantEntryHistoryTab: WarrantEntryHistoryTabPage;
      warrantEntryNotesTab: WarrantEntryNotesTabPage;
    };
    warrantSearch: WarrantSearchPage;
    warrantDetails: WarrantDetailsPage;
    warrantNamesSearch: WarrantNamesSearchPage;
    batchClearance: BatchClearancePage;
    warrantType: WarrantTypePage;
    warrantTypeEntry: WarrantTypeEntryPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const warrantFixtureDefs = {
  warrant: async ({ page }: { page: Page }, use: (v: WarrantFixture['warrant']) => Promise<void>) => {
    const warrantEntry = Object.assign(new WarrantEntryPage(page), {
      warrantEntryMainTab: new WarrantEntryMainTabPage(page),
      clearTab: new ClearTabPage(page),
      statusTab: new StatusTabPage(page),
      chargesTab: new ChargesTabPage(page),
      narrativeTab: new WarrantNarrativeTabPage(page),
      serviceTab: new ServiceTabPage(page),
      mapTab: new WarrantMapTabPage(page),
      warrantEntryHistoryTab: new WarrantEntryHistoryTabPage(page),
      warrantEntryNotesTab: new WarrantEntryNotesTabPage(page),
    });
    await use({
      module: new WarrantsPage(page),
      warrentEntryAuthenticatorWindow: new WarrentEntryAuthenticatorWindowPage(page),
      warrantEntry,
      warrantSearch: new WarrantSearchPage(page),
      warrantDetails: new WarrantDetailsPage(page),
      warrantNamesSearch: new WarrantNamesSearchPage(page),
      batchClearance: new BatchClearancePage(page),
      warrantType: new WarrantTypePage(page),
      warrantTypeEntry: new WarrantTypeEntryPage(page),
    });
  },
};
