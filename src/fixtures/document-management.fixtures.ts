import { Page } from '@playwright/test';
import {
  DocumentManagementPage, DocumentEntryPage, DocumentTabPage,
  AssignmentTabPage, ReviewbyPFTabPage, DistributedToPFTabPage, BlogTabPage,
  MyDocumentsSearchPage, DocumentManagementSearchPage, DocumentAssignSearchPage,
  MyDocumentEntryPage, MyDocumentDocTabPage, MyNotesTabPage, MyBlogTabPage,
  QAFormsTabPage, WordDocAppPage, AccreditationSearchPage, AccreditationSearchEntryPage,
} from '../pages/document-management';

// ── Type ─────────────────────────────────────────────────────────────────────

export type DocumentManagementFixture = {
  documentManagement: {
    module: DocumentManagementPage;
    documentEntry: DocumentEntryPage & {
      documentTab: DocumentTabPage;
      assignmentTab: AssignmentTabPage;
      reviewbyPFTab: ReviewbyPFTabPage;
      distributedToPFTab: DistributedToPFTabPage;
      blogTab: BlogTabPage;
    };
    myDocumentsSearch: MyDocumentsSearchPage;
    documentManagementSearch: DocumentManagementSearchPage;
    documentAssignSearch: DocumentAssignSearchPage;
    myDocumentEntry: MyDocumentEntryPage & {
      documentTab: MyDocumentDocTabPage;
      myNotesTab: MyNotesTabPage;
      myBlogTab: MyBlogTabPage;
      qAFormsTab: QAFormsTabPage;
    };
    wordDocAppScreen: WordDocAppPage;
    accreditationSearch: AccreditationSearchPage;
    accreditationSearchEntry: AccreditationSearchEntryPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const documentManagementFixtureDefs = {
  documentManagement: async ({ page }: { page: Page }, use: (v: DocumentManagementFixture['documentManagement']) => Promise<void>) => {
    const documentEntry = Object.assign(new DocumentEntryPage(page), {
      documentTab: new DocumentTabPage(page),
      assignmentTab: new AssignmentTabPage(page),
      reviewbyPFTab: new ReviewbyPFTabPage(page),
      distributedToPFTab: new DistributedToPFTabPage(page),
      blogTab: new BlogTabPage(page),
    });
    const myDocumentEntry = Object.assign(new MyDocumentEntryPage(page), {
      documentTab: new MyDocumentDocTabPage(page),
      myNotesTab: new MyNotesTabPage(page),
      myBlogTab: new MyBlogTabPage(page),
      qAFormsTab: new QAFormsTabPage(page),
    });
    await use({
      module: new DocumentManagementPage(page),
      documentEntry,
      myDocumentsSearch: new MyDocumentsSearchPage(page),
      documentManagementSearch: new DocumentManagementSearchPage(page),
      documentAssignSearch: new DocumentAssignSearchPage(page),
      myDocumentEntry,
      wordDocAppScreen: new WordDocAppPage(page),
      accreditationSearch: new AccreditationSearchPage(page),
      accreditationSearchEntry: new AccreditationSearchEntryPage(page),
    });
  },
};
