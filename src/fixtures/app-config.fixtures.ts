import { config } from '../config/environment';

// ── Type ─────────────────────────────────────────────────────────────────────

export type AppConfigFixture = {
  appConfig: typeof config;
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const appConfigFixtureDefs = {
  appConfig: async ({}: any, use: (v: typeof config) => Promise<void>) => {
    await use(config);
  },
};
