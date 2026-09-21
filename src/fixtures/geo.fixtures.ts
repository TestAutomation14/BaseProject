import { Page } from '@playwright/test';
import { StreetSearchPage, StreetEntryPage } from '../pages/geo';

// ── Type ─────────────────────────────────────────────────────────────────────

export type GeoFixture = {
  geoStreetSearch: StreetSearchPage;
  geoStreetEntry: StreetEntryPage;
  geo: {
    module: { switchToContactEntry: () => Promise<void> };
    contactEntryScreen: any;
    streetSearch: StreetSearchPage;
    streetEntry: StreetEntryPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const geoFixtureDefs = {
  geoStreetSearch: async ({ page }: { page: Page }, use: (v: StreetSearchPage) => Promise<void>) => {
    await use(new StreetSearchPage(page));
  },

  geoStreetEntry: async ({ page }: { page: Page }, use: (v: StreetEntryPage) => Promise<void>) => {
    await use(new StreetEntryPage(page));
  },

  geo: async ({ page }: { page: Page }, use: (v: GeoFixture['geo']) => Promise<void>) => {
    await use({
      module: { switchToContactEntry: async () => { /* frame switch handled by page */ } },
      contactEntryScreen: page,
      streetSearch: new StreetSearchPage(page),
      streetEntry: new StreetEntryPage(page),
    });
  },
};
