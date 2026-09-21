import { Page } from '@playwright/test';
import {
  StateDemoPage,
  StateCodedPage, MaintainCodeValuePage,
  DemoSearchPage, DemoEntryPage,
  StateORIPage, StateORIEntryPage,
} from '../pages/stateDemo';

// ── Type ─────────────────────────────────────────────────────────────────────

export type StateDemoFixture = {
  stateDemo: {
    module: StateDemoPage;
    stateCoded: StateCodedPage;
    maintainCodeValue: MaintainCodeValuePage;
    demoSearch: DemoSearchPage;
    demoEntry: DemoEntryPage;
    stateORI: StateORIPage;
    stateORIEntry: StateORIEntryPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const stateDemoFixtureDefs = {
  stateDemo: async ({ page }: { page: Page }, use: (v: StateDemoFixture['stateDemo']) => Promise<void>) => {
    await use({
      module: new StateDemoPage(page),
      stateCoded: new StateCodedPage(page),
      maintainCodeValue: new MaintainCodeValuePage(page),
      demoSearch: new DemoSearchPage(page),
      demoEntry: new DemoEntryPage(page),
      stateORI: new StateORIPage(page),
      stateORIEntry: new StateORIEntryPage(page),
    });
  },
};
