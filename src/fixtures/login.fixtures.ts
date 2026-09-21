import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// ── Type ─────────────────────────────────────────────────────────────────────

export type LoginFixture = {
  loginPage: LoginPage;
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const loginFixtureDefs = {
  loginPage: async ({ page }: { page: Page }, use: (v: LoginPage) => Promise<void>) => {
    await use(new LoginPage(page));
  },
};
