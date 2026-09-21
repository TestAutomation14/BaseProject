import { Page } from '@playwright/test';
import {
  HomePage, PnxReportSSRSPDFScreenPage, PnxCustomReportPDFScreenPage, SelectReportPage,
  PrintBatchScreenPage, ViewPrintHistoryPage, MyHomePage, MyRemindersTabPage,
  MyApprovalTabPage, MyTrainingTabPage, MessageTabPage, MyReportsTabPage, MyCMTabPage,
  WhiteBoardPage, ManageLinksPage, PhoneBookSearchPage, PhoneBookContactEntryPage,
  PhoneBookEntryPage, PhoneNumberTabPage, CallBackTabPage, ContactEntryHistoryTabPage,
  MessageSendScreenPage, MessageSearchPage, MessageReceivedScreenPage,
  BOLOMessageReceivedScreenPage, BulletinEntryPage, NotificationSearchPage,
  NotificationPage, ReportLogPage, TrackSearchPage, TrackEntryPage,
  ExpenseEntryPage as HomeExpenseEntryPage, ExpenseEntryApprovalTabPage as HomeExpenseApprovalTabPage,
  HelpPage, HowToVideosWindowPage, PhoenixPoliceRMSWindowPage, PhoenixCMSWindowPage,
  AddMultiplePFPage as HomeAddMultiplePFPage, WhiteboardEntryPage,
  BulletinAttachmentsTabPage, BulletinEmailTextTabPage,
  TextMgmtPage as HomeTextMgmtPage,
} from '../pages/home/home.page';
import { createPopupProxy } from '../helpers/browser-helpers';

// ── Type ─────────────────────────────────────────────────────────────────────

export type HomeFixture = {
  homePage: HomePage;
  home: {
    module: HomePage;
    myHome: MyHomePage & {
      myRemindersTab: MyRemindersTabPage;
      myApprovalTab: MyApprovalTabPage;
      myTrainingTab: MyTrainingTabPage;
      messageTab: MessageTabPage;
      myReportsTab: MyReportsTabPage;
      myCMTab: MyCMTabPage;
      whiteBoard: WhiteBoardPage;
      manageLinks: ManageLinksPage;
    };
    phoneBookSearch: PhoneBookSearchPage;
    phoneBookContactEntry: PhoneBookContactEntryPage & { phoneNumberTab: PhoneNumberTabPage; callBackTab: CallBackTabPage; contactEntryHistoryTab: ContactEntryHistoryTabPage };
    phoneBookEntry: PhoneBookEntryPage;
    messageSendScreen: MessageSendScreenPage;
    addMultiplePF: HomeAddMultiplePFPage;
    messageSearch: MessageSearchPage;
    messageReceivedScreen: MessageReceivedScreenPage;
    bOLOMessageReceivedScreen: BOLOMessageReceivedScreenPage;
    bulletinEntry: BulletinEntryPage;
    notificationSearch: NotificationSearchPage;
    notification: NotificationPage;
    reportLog: ReportLogPage;
    trackSearch: TrackSearchPage;
    trackEntry: TrackEntryPage;
    expenseEntry: HomeExpenseEntryPage & { expenseEntryApprovalTab: HomeExpenseApprovalTabPage };
    help: HelpPage;
    howToVideosWindow: HowToVideosWindowPage;
    phoenixPoliceRMSWindow: PhoenixPoliceRMSWindowPage;
    phoenixCMSWindow: PhoenixCMSWindowPage;
    pnxReportSSRSPDFScreen: PnxReportSSRSPDFScreenPage;
    pnxCustomReportPDFScreen: PnxCustomReportPDFScreenPage;
    selectReport: SelectReportPage;
    printBatchScreen: PrintBatchScreenPage;
    viewPrintHistory: ViewPrintHistoryPage;
    textMgmt: HomeTextMgmtPage;
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const homeFixtureDefs = {
  homePage: async ({ page }: { page: Page }, use: (v: HomePage) => Promise<void>) => {
    await use(new HomePage(page));
  },

  home: async ({ page }: { page: Page }, use: (v: HomeFixture['home']) => Promise<void>) => {
    const myHome = Object.assign(new MyHomePage(page), {
      myRemindersTab: new MyRemindersTabPage(page),
      myApprovalTab: new MyApprovalTabPage(page),
      myTrainingTab: new MyTrainingTabPage(page),
      messageTab: new MessageTabPage(page),
      myReportsTab: new MyReportsTabPage(page),
      myCMTab: new MyCMTabPage(page),
      whiteBoard: new WhiteBoardPage(page),
      manageLinks: new ManageLinksPage(page),
    });
    const phoneBookContactEntry = Object.assign(new PhoneBookContactEntryPage(page), {
      phoneNumberTab: new PhoneNumberTabPage(page),
      callBackTab: new CallBackTabPage(page),
      contactEntryHistoryTab: new ContactEntryHistoryTabPage(page),
    });
    const expenseEntry = Object.assign(new HomeExpenseEntryPage(page), {
      expenseEntryApprovalTab: new HomeExpenseApprovalTabPage(page),
    });
    await use({
      module: new HomePage(page),
      myHome,
      phoneBookSearch: new PhoneBookSearchPage(page),
      phoneBookContactEntry,
      phoneBookEntry: new PhoneBookEntryPage(page),
      messageSendScreen: new MessageSendScreenPage(page),
      addMultiplePF: new HomeAddMultiplePFPage(page),
      messageSearch: new MessageSearchPage(page),
      messageReceivedScreen: new MessageReceivedScreenPage(page),
      bOLOMessageReceivedScreen: new BOLOMessageReceivedScreenPage(page),
      bulletinEntry: new BulletinEntryPage(page),
      notificationSearch: new NotificationSearchPage(page),
      notification: new NotificationPage(page),
      reportLog: new ReportLogPage(page),
      trackSearch: new TrackSearchPage(page),
      trackEntry: new TrackEntryPage(page),
      expenseEntry,
      help: new HelpPage(page),
      howToVideosWindow: new HowToVideosWindowPage(page),
      phoenixPoliceRMSWindow: new PhoenixPoliceRMSWindowPage(page),
      phoenixCMSWindow: new PhoenixCMSWindowPage(page),
      pnxReportSSRSPDFScreen: new PnxReportSSRSPDFScreenPage(page),
      pnxCustomReportPDFScreen: new PnxCustomReportPDFScreenPage(page),
      selectReport: new SelectReportPage(page),
      printBatchScreen: new PrintBatchScreenPage(page),
      viewPrintHistory: new ViewPrintHistoryPage(page),
      textMgmt: new HomeTextMgmtPage(createPopupProxy(page, 'frmTextMgmt')),
    });
  },
};
