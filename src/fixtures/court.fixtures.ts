import { Page } from '@playwright/test';
import {
  CourtPage, CreateCasePage,
  SchedulingCommentsTabPage, SchedulingCourtActivitiesTabPage, SchedulingPage,
  CourtCaseSearchPage, AssessmentSearchPage,
  CaseDeletionPage, CourtDeletePage,
  AssessmentEntryPage,
  RegisterCodesPage, RegisterCodeEntryPage,
  PaymentScheduleSearchPage, PaymentSchedulingPage,
  AttorneyRecommendationPage, CheckInPage, CourtActivitiesPage,
} from '../pages/court';

// ── Type ─────────────────────────────────────────────────────────────────────

export type CourtFixture = {
  court: {
    module: CourtPage;
    createCase: CreateCasePage;
    scheduling: SchedulingPage & {
      schedulingCommentsTab: SchedulingCommentsTabPage;
      schedulingCourtActivitiesTab: SchedulingCourtActivitiesTabPage;
    };
    courtCaseSearch: CourtCaseSearchPage;
    assessmentSearch: AssessmentSearchPage;
    caseDeletion: CaseDeletionPage;
    courtDelete: CourtDeletePage;
    assessmentEntry: AssessmentEntryPage;
    registerCodes: RegisterCodesPage;
    registerCodeEntry: RegisterCodeEntryPage;
    paymentScheduleSearch: PaymentScheduleSearchPage;
    paymentScheduling: PaymentSchedulingPage;
    attorneyRecommendation: AttorneyRecommendationPage;
    checkIn: CheckInPage;
    courtActivities: CourtActivitiesPage;
    [key: string]: any;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const courtFixtureDefs = {
  court: async ({ page }: { page: Page }, use: (v: CourtFixture['court']) => Promise<void>) => {
    const scheduling = Object.assign(new SchedulingPage(page), {
      schedulingCommentsTab: new SchedulingCommentsTabPage(page),
      schedulingCourtActivitiesTab: new SchedulingCourtActivitiesTabPage(page),
    });
    await use({
      module: new CourtPage(page),
      createCase: new CreateCasePage(page),
      scheduling,
      courtCaseSearch: new CourtCaseSearchPage(page),
      assessmentSearch: new AssessmentSearchPage(page),
      caseDeletion: new CaseDeletionPage(page),
      courtDelete: new CourtDeletePage(page),
      assessmentEntry: new AssessmentEntryPage(page),
      registerCodes: new RegisterCodesPage(page),
      registerCodeEntry: new RegisterCodeEntryPage(page),
      paymentScheduleSearch: new PaymentScheduleSearchPage(page),
      paymentScheduling: new PaymentSchedulingPage(page),
      attorneyRecommendation: new AttorneyRecommendationPage(page),
      checkIn: new CheckInPage(page),
      courtActivities: new CourtActivitiesPage(page),
    });
  },
};
