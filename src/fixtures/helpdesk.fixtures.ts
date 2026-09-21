import { Page } from '@playwright/test';
import {
  HelpdeskPage, InternalTicketSearchPage, InternalTicketEntryPage, EmailSettingsPage,
  ActivitiesTabPage, ActivityEntryPage as HelpdeskActivityEntryPage, AddActivityEntryPage,
  DashBoardTabPage, DetailTabPage, HelpdeskNameEntryPage,
} from '../pages/helpdesk';

// ── Type ─────────────────────────────────────────────────────────────────────

export type HelpdeskFixture = {
  helpdesk: {
    module: HelpdeskPage;
    internalTicketSearch: InternalTicketSearchPage & { dashBoardTab: DashBoardTabPage };
    internalTicketEntry: InternalTicketEntryPage & { activitiesTab: ActivitiesTabPage & { addActivityEntry: AddActivityEntryPage }; detailTab: DetailTabPage };
    emailSettings: EmailSettingsPage;
    activityEntry: HelpdeskActivityEntryPage;
    nameEntry: HelpdeskNameEntryPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const helpdeskFixtureDefs = {
  helpdesk: async ({ page }: { page: Page }, use: (v: HelpdeskFixture['helpdesk']) => Promise<void>) => {
    const activitiesTab = Object.assign(new ActivitiesTabPage(page), {
      addActivityEntry: new AddActivityEntryPage(page),
    });
    const internalTicketSearch = Object.assign(new InternalTicketSearchPage(page), {
      dashBoardTab: new DashBoardTabPage(page),
    });
    const internalTicketEntry = Object.assign(new InternalTicketEntryPage(page), {
      activitiesTab,
      detailTab: new DetailTabPage(page),
    });
    await use({
      module: new HelpdeskPage(page),
      internalTicketSearch,
      internalTicketEntry,
      emailSettings: new EmailSettingsPage(page),
      activityEntry: new HelpdeskActivityEntryPage(page),
      nameEntry: new HelpdeskNameEntryPage(page),
    });
  },
};
