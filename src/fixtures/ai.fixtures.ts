import { Page } from '@playwright/test';
import {
  AIPage, BOTQAManagerPage, BOTQAManagerEntryPage,
  AITranscriptionDashboardPage, AITranscriptionStatusMsgPage,
  AIMugmatchPage, PlayVideoPage, AIeRequestPage,
} from '../pages/ai';

// ── Type ─────────────────────────────────────────────────────────────────────

export type AIFixture = {
  ai: {
    module: AIPage;
    bOTQAManager: BOTQAManagerPage;
    bOTQAManagerEntry: BOTQAManagerEntryPage;
    aITranscriptionDashboard: AITranscriptionDashboardPage;
    aITranscriptionStatusMsg: AITranscriptionStatusMsgPage;
    aIMugmatch: AIMugmatchPage;
    playVideo: PlayVideoPage;
    aIeRequest: AIeRequestPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const aiFixtureDefs = {
  ai: async ({ page }: { page: Page }, use: (v: AIFixture['ai']) => Promise<void>) => {
    await use({
      module: new AIPage(page),
      bOTQAManager: new BOTQAManagerPage(page),
      bOTQAManagerEntry: new BOTQAManagerEntryPage(page),
      aITranscriptionDashboard: new AITranscriptionDashboardPage(page),
      aITranscriptionStatusMsg: new AITranscriptionStatusMsgPage(page),
      aIMugmatch: new AIMugmatchPage(page),
      playVideo: new PlayVideoPage(page),
      aIeRequest: new AIeRequestPage(page),
    });
  },
};
