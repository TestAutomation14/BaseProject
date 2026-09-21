import { Page } from '@playwright/test';
import {
  EmploymentApplicantsPage, JobListingsPage, ApplicantSearchPage, ApplicantEntryPage,
  ApplicantEntryMainTabPage, ApplicantEntryTasksNScheduleTabPage, ApplicantEntryNotesTabPage,
  ApprovalNStatusTabPage, JobEntryPage, JobEntryMainTabPage, JobEntryJobDescriptionTabPage,
  HiringTaskPage, MyTaskPage, OrientationPage, HiringTaskFrmTaskEntryPage,
} from '../pages/employment-applicants';

// ── Type ─────────────────────────────────────────────────────────────────────

export type EmploymentApplicantsFixture = {
  employmentApplicants: {
    module: EmploymentApplicantsPage;
    jobListings: JobListingsPage;
    applicantSearch: ApplicantSearchPage;
    applicantEntry: ApplicantEntryPage & {
      applicantEntryMainTab: ApplicantEntryMainTabPage;
      tasksNScheduleTab: ApplicantEntryTasksNScheduleTabPage;
      notesTab: ApplicantEntryNotesTabPage;
      approvalNStatusTab: ApprovalNStatusTabPage;
    };
    jobEntry: JobEntryPage & { jobEntryMainTab: JobEntryMainTabPage; jobDescriptionTab: JobEntryJobDescriptionTabPage };
    hiringTask: HiringTaskPage;
    myTask: MyTaskPage;
    orientation: OrientationPage;
    hiringTaskFrmTaskEntry: HiringTaskFrmTaskEntryPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const employmentApplicantsFixtureDefs = {
  employmentApplicants: async ({ page }: { page: Page }, use: (v: EmploymentApplicantsFixture['employmentApplicants']) => Promise<void>) => {
    await use({
      module: new EmploymentApplicantsPage(page),
      jobListings: new JobListingsPage(page),
      applicantSearch: new ApplicantSearchPage(page),
      applicantEntry: Object.assign(new ApplicantEntryPage(page), {
        applicantEntryMainTab: new ApplicantEntryMainTabPage(page),
        tasksNScheduleTab: new ApplicantEntryTasksNScheduleTabPage(page),
        notesTab: new ApplicantEntryNotesTabPage(page),
        approvalNStatusTab: new ApprovalNStatusTabPage(page),
      }),
      jobEntry: Object.assign(new JobEntryPage(page), {
        jobEntryMainTab: new JobEntryMainTabPage(page),
        jobDescriptionTab: new JobEntryJobDescriptionTabPage(page),
      }),
      hiringTask: new HiringTaskPage(page),
      myTask: new MyTaskPage(page),
      orientation: new OrientationPage(page),
      hiringTaskFrmTaskEntry: new HiringTaskFrmTaskEntryPage(page),
    });
  },
};
