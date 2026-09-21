import { Page } from '@playwright/test';
import {
  AccountingModulePage, InvoiceTypePage, InvoiceTypeEntryPage, ItemCodePage, ItemCodeEntryPage,
  InvoiceEntryPage, InvoiceDetailsTabPage, TransactionsHistoryTabPage,
  ReceivePaymentPage, ReceivePaymentInvoicesTabPage, ReceivePaymentOptionPage,
  InvoiceSearchPage, TransactionAndAdjustmentPage, PaymentSearchPage,
  SearchAccountPage, ExpenseSearchPage, ExpenseEntryPage, ExpenseItemsTabPage,
  ExpenseApprovalTabPage, PermitTypePage, PermitTypeEntryPage, PermitParametersTabPage,
} from '../pages/accounting';

// ── Type ─────────────────────────────────────────────────────────────────────

export type AccountingFixture = {
  accounting: {
    module: AccountingModulePage;
    invoiceType: InvoiceTypePage;
    invoiceTypeEntry: InvoiceTypeEntryPage;
    itemCode: ItemCodePage;
    itemCodeEntry: ItemCodeEntryPage;
    invoiceEntry: InvoiceEntryPage & { invoiceDetailsTab: InvoiceDetailsTabPage; transactionHistoryTab: TransactionsHistoryTabPage };
    invoiceSearch: InvoiceSearchPage;
    receivePayment: ReceivePaymentPage & { invoicesTab: ReceivePaymentInvoicesTabPage };
    receivePaymentOption: ReceivePaymentOptionPage;
    transactionAndAdjustment: TransactionAndAdjustmentPage;
    paymentSearch: PaymentSearchPage;
    searchAccount: SearchAccountPage;
    expenseSearch: ExpenseSearchPage;
    expenseEntry: ExpenseEntryPage & { itemsTab: ExpenseItemsTabPage; approvalTab: ExpenseApprovalTabPage };
    permitType: PermitTypePage;
    permitTypeEntry: PermitTypeEntryPage & { parametersTab: PermitParametersTabPage };
  };
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const accountingFixtureDefs = {
  accounting: async ({ page }: { page: Page }, use: (v: AccountingFixture['accounting']) => Promise<void>) => {
    const invoiceEntry = Object.assign(new InvoiceEntryPage(page), {
      invoiceDetailsTab: new InvoiceDetailsTabPage(page),
      transactionHistoryTab: new TransactionsHistoryTabPage(page),
    });
    const receivePayment = Object.assign(new ReceivePaymentPage(page), {
      invoicesTab: new ReceivePaymentInvoicesTabPage(page),
    });
    const expenseEntry = Object.assign(new ExpenseEntryPage(page), {
      itemsTab: new ExpenseItemsTabPage(page),
      approvalTab: new ExpenseApprovalTabPage(page),
    });
    const permitTypeEntry = Object.assign(new PermitTypeEntryPage(page), {
      parametersTab: new PermitParametersTabPage(page),
    });
    await use({
      module: new AccountingModulePage(page),
      invoiceType: new InvoiceTypePage(page),
      invoiceTypeEntry: new InvoiceTypeEntryPage(page),
      itemCode: new ItemCodePage(page),
      itemCodeEntry: new ItemCodeEntryPage(page),
      invoiceEntry,
      invoiceSearch: new InvoiceSearchPage(page),
      receivePayment,
      receivePaymentOption: new ReceivePaymentOptionPage(page),
      transactionAndAdjustment: new TransactionAndAdjustmentPage(page),
      paymentSearch: new PaymentSearchPage(page),
      searchAccount: new SearchAccountPage(page),
      expenseSearch: new ExpenseSearchPage(page),
      expenseEntry,
      permitType: new PermitTypePage(page),
      permitTypeEntry,
    });
  },
};
