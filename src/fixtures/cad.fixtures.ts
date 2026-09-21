import { Page } from '@playwright/test';
import {
  CADModule, CCSearchPage, LORSearchPage, LOREntryPage,
  NPASearchPage, NPAEntryPage, TriggerSearchPage, TriggerEntryPage,
  ZetronToneSearchPage, CADToneEntryPage,
} from '../pages/cad';

// ── Type ─────────────────────────────────────────────────────────────────────

export type CADFixture = {
  cad: {
    module: CADModule;
    ccSearch: CCSearchPage;
    lorSearch: LORSearchPage;
    lorEntry: LOREntryPage;
    npaSearch: NPASearchPage;
    npaEntry: NPAEntryPage;
    triggerSearch: TriggerSearchPage;
    triggerEntry: TriggerEntryPage;
    zetronToneSearch: ZetronToneSearchPage;
    cadToneEntry: CADToneEntryPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const cadFixtureDefs = {
  cad: async ({ page }: { page: Page }, use: (v: CADFixture['cad']) => Promise<void>) => {
    await use({
      module: new CADModule(page),
      ccSearch: new CCSearchPage(page),
      lorSearch: new LORSearchPage(page),
      lorEntry: new LOREntryPage(page),
      npaSearch: new NPASearchPage(page),
      npaEntry: new NPAEntryPage(page),
      triggerSearch: new TriggerSearchPage(page),
      triggerEntry: new TriggerEntryPage(page),
      zetronToneSearch: new ZetronToneSearchPage(page),
      cadToneEntry: new CADToneEntryPage(page),
    });
  },
};
