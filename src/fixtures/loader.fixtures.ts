import { Page } from '@playwright/test';
import { LoaderPage } from '../pages/loader.page';

// ── Type ─────────────────────────────────────────────────────────────────────

export type LoaderFixture = {
  loaderPage: LoaderPage;
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const loaderFixtureDefs = {
  loaderPage: async ({ page }: { page: Page }, use: (v: LoaderPage) => Promise<void>) => {
    await use(new LoaderPage(page));
  },
};
