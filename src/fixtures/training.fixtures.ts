import { Page } from '@playwright/test';
import {
  TrainingPage, FacilityCodePage, GuestSearchPage, InstructorSearchPage,
  CourseSearchPage, ClassSearchPage, TrainingSearchPage, CertificationSearchPage,
  FacilityEntryPage, GuestEntryPage, InstructorEntryPage, CourseEntryPage,
  CourseDescriptionTabPage, NotesForStudentsTabPage, InstructorNotesTabPage,
  CourseCEUsTabPage, OtherSettingsTabPage, CourseEntryAttachmentTabPage,
  ClassEntryPage, ClassEntryStudentsTabPage, ClassEntryTrainingDetailTabPage,
  ClassEntryInstructorsTabPage, ClassEntryCourseDescriptionTabPage,
  ClassEntryNotesForStudentsTabPage, ClassEntryInstructorNotesTabPage,
  ClassEntryEvaluationsTabPage, ClassEntryCEUsTabPage, ClassEntryAttachmentTabPage,
  TrainingEntryPage, TrainingDetailTabPage, CEUsTabPage, InstructorsTabPage,
  AdditionalPFTabPage, AttachmentTabPage, QAFormsTabPage as TrainingQAFormsTabPage,
  CertificationEntryPage, CertificationManualEntryPage, TrainingClassEntryPage,
  TrainingScheduleEntryPage, MultiPFWindowPage, RequestTabPage, ClassEntryRequestTabPage,
} from '../pages/training';

// ── Type ─────────────────────────────────────────────────────────────────────

export type TrainingFixture = {
  training: {
    module: TrainingPage;
    facilityCode: FacilityCodePage;
    facilityEntry: FacilityEntryPage;
    guestSearch: GuestSearchPage;
    guestEntry: GuestEntryPage;
    instructorSearch: InstructorSearchPage;
    instructorEntry: InstructorEntryPage;
    courseSearch: CourseSearchPage;
    courseEntry: CourseEntryPage & {
      courseDescriptionTab: CourseDescriptionTabPage;
      notesForStudentsTab: NotesForStudentsTabPage;
      instructorNotesTab: InstructorNotesTabPage;
      courseCEUsTab: CourseCEUsTabPage;
      otherSettingsTab: OtherSettingsTabPage;
      courseEntryAttachmentTab: CourseEntryAttachmentTabPage;
    };
    classSearch: ClassSearchPage;
    classEntry: ClassEntryPage & {
      classEntryStudentsTab: ClassEntryStudentsTabPage;
      classEntryTrainingDetailTab: ClassEntryTrainingDetailTabPage;
      classEntryInstructorsTab: ClassEntryInstructorsTabPage;
      classEntryCourseDescriptionTab: ClassEntryCourseDescriptionTabPage;
      classEntryNotesForStudentsTab: ClassEntryNotesForStudentsTabPage;
      classEntryInstructorNotesTab: ClassEntryInstructorNotesTabPage;
      classEntryEvaluationsTab: ClassEntryEvaluationsTabPage;
      classEntryCEUsTab: ClassEntryCEUsTabPage;
      classEntryAttachmentTab: ClassEntryAttachmentTabPage;
      requestTab: ClassEntryRequestTabPage;
    };
    trainingSearch: TrainingSearchPage;
    trainingEntry: TrainingEntryPage & {
      trainingDetailTab: TrainingDetailTabPage;
      cEUsTab: CEUsTabPage;
      instructorsTab: InstructorsTabPage;
      additionalPFTab: AdditionalPFTabPage;
      attachmentTab: AttachmentTabPage;
      qaFormsTab: TrainingQAFormsTabPage;
    };
    certificationSearch: CertificationSearchPage;
    certificationEntry: CertificationEntryPage;
    certificationManualEntry: CertificationManualEntryPage;
    trainingClassEntry: TrainingClassEntryPage & {
      classEntryStudentsTab: ClassEntryStudentsTabPage;
      classEntryInstructorsTab: ClassEntryInstructorsTabPage;
      classEntryInstructorNotesTab: ClassEntryInstructorNotesTabPage;
    };
    trainingScheduleEntry: TrainingScheduleEntryPage;
    multiPFWindow: MultiPFWindowPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const trainingFixtureDefs = {
  training: async ({ page }: { page: Page }, use: (v: TrainingFixture['training']) => Promise<void>) => {
    const courseEntry = Object.assign(new CourseEntryPage(page), {
      courseDescriptionTab: new CourseDescriptionTabPage(page),
      notesForStudentsTab: new NotesForStudentsTabPage(page),
      instructorNotesTab: new InstructorNotesTabPage(page),
      courseCEUsTab: new CourseCEUsTabPage(page),
      otherSettingsTab: new OtherSettingsTabPage(page),
      courseEntryAttachmentTab: new CourseEntryAttachmentTabPage(page),
    });
    const classEntry = Object.assign(new ClassEntryPage(page), {
      classEntryStudentsTab: new ClassEntryStudentsTabPage(page),
      classEntryTrainingDetailTab: new ClassEntryTrainingDetailTabPage(page),
      classEntryInstructorsTab: new ClassEntryInstructorsTabPage(page),
      classEntryCourseDescriptionTab: new ClassEntryCourseDescriptionTabPage(page),
      classEntryNotesForStudentsTab: new ClassEntryNotesForStudentsTabPage(page),
      classEntryInstructorNotesTab: new ClassEntryInstructorNotesTabPage(page),
      classEntryEvaluationsTab: new ClassEntryEvaluationsTabPage(page),
      classEntryCEUsTab: new ClassEntryCEUsTabPage(page),
      classEntryAttachmentTab: new ClassEntryAttachmentTabPage(page),
      requestTab: new ClassEntryRequestTabPage(page),
    });
    const trainingEntry = Object.assign(new TrainingEntryPage(page), {
      trainingDetailTab: new TrainingDetailTabPage(page),
      cEUsTab: new CEUsTabPage(page),
      instructorsTab: new InstructorsTabPage(page),
      additionalPFTab: new AdditionalPFTabPage(page),
      attachmentTab: new AttachmentTabPage(page),
      qaFormsTab: new TrainingQAFormsTabPage(page),
    });
    const trainingClassEntry = Object.assign(new TrainingClassEntryPage(page), {
      classEntryStudentsTab: new ClassEntryStudentsTabPage(page),
      classEntryInstructorsTab: new ClassEntryInstructorsTabPage(page),
      classEntryInstructorNotesTab: new ClassEntryInstructorNotesTabPage(page),
    });
    await use({
      module: new TrainingPage(page),
      facilityCode: new FacilityCodePage(page),
      facilityEntry: new FacilityEntryPage(page),
      guestSearch: new GuestSearchPage(page),
      guestEntry: new GuestEntryPage(page),
      instructorSearch: new InstructorSearchPage(page),
      instructorEntry: new InstructorEntryPage(page),
      courseSearch: new CourseSearchPage(page),
      courseEntry,
      classSearch: new ClassSearchPage(page),
      classEntry,
      trainingSearch: new TrainingSearchPage(page),
      trainingEntry,
      certificationSearch: new CertificationSearchPage(page),
      certificationEntry: new CertificationEntryPage(page),
      certificationManualEntry: new CertificationManualEntryPage(page),
      trainingClassEntry,
      trainingScheduleEntry: new TrainingScheduleEntryPage(page),
      multiPFWindow: new MultiPFWindowPage(page),
    });
  },
};
