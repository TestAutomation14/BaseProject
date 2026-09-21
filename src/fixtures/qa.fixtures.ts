import { Page } from '@playwright/test';
import {
  QAPage, QuestionnariePage, QuestionDataEntryPage, QAFormEntryPage,
  QAFormSectionPage, ManageQuestionsPage, QuestionMasterPage,
  QuestionReviewPage, PDFFormScreenPage, QuestionnarieRepositoryPage,
  QAFormsPage as QAQAFormsPage, FieldNamePDFPage, SendEmailPopUpPage,
} from '../pages/qa';

// ── Type ─────────────────────────────────────────────────────────────────────

export type QAFixture = {
  qA: {
    module: QAPage;
    questionnarie: QuestionnariePage;
    questionDataEntry: QuestionDataEntryPage;
    qAFormEntry: QAFormEntryPage;
    questionnarieRepository: QuestionnarieRepositoryPage;
    fieldNamePDF: FieldNamePDFPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const qaFixtureDefs = {
  qA: async ({ page }: { page: Page }, use: (v: QAFixture['qA']) => Promise<void>) => {
    await use({
      module: new QAPage(page),
      questionnarie: new QuestionnariePage(page),
      questionDataEntry: new QuestionDataEntryPage(page),
      qAFormEntry: new QAFormEntryPage(page),
      questionnarieRepository: new QuestionnarieRepositoryPage(page),
      fieldNamePDF: new FieldNamePDFPage(page),
    });
  },
};
