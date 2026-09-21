import { Page } from '@playwright/test';
import { PopupPage } from '../pages/popup.page';

// ── Type ─────────────────────────────────────────────────────────────────────

export type PopupFixture = {
  popupPage: PopupPage;
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const popupFixtureDefs = {
  popupPage: async ({ page }: { page: Page }, use: (v: PopupPage) => Promise<void>) => {
    await use(new PopupPage(page));
  },
};
