import type {
  Reporter,
  FullConfig,
  FullResult,
  Suite,
  TestCase,
  TestResult
} from '@playwright/test/reporter';
import fs from 'node:fs';
import { randomUUID } from 'node:crypto';

import { ReportGenerator } from '../generator/ReportGenerator';
import { Properties } from '../../config/Properties';
import { deleteRemoteBrowser } from '../../setup/grid-client';
import { aggregateData } from '../generator/DataAggregator';
import { generateTrendReport, updateTrend } from '../generator/TrendCollector';

type RunStats = {
  startTime: number;
  endTime: number;
  duration: number;
};

export default class SuiteRuntimeReporter implements Reporter {

  private rootSuite!: Suite;
  private product!: string;
  private runStartTime!: number;
  private trendRunId!: string;
  private trendSummary = { total: 0, passed: 0, failed: 0, skipped: 0, duration: 0 };

  /* ✅ FIX: Reliable suite tracking */
  private suiteTotalTests: Record<string, number> = {};
  private suiteCompletedTests: Record<string, number> = {};
  private suiteMap: Record<string, Suite> = {};

  /* ✅ Track in-flight suite report generation so onEnd can wait for them
     before the process starts tearing down (fixes PDF export failing with
     "Target page, context or browser has been closed"). */
  private pendingReports: Promise<void>[] = [];

  onBegin(config: FullConfig, suite: Suite) {
    this.rootSuite = suite;
    this.product = Properties.get('PROJECT') || 'UNKNOWN_PROJECT';
    this.runStartTime = Date.now();
    this.trendRunId = randomUUID();

    console.log("🚀 Execution started");

    /* ✅ Pre-calculate suite test counts (CORRECT APPROACH) */
    const allSuites: Suite[] = [];
    this.collectDescribeSuites(this.rootSuite, allSuites);

    for (const s of allSuites) {
      const file = s.location?.file || s.title;

      const totalTests = s.allTests().length;

      this.suiteTotalTests[file] = totalTests;
      this.suiteCompletedTests[file] = 0;
      this.suiteMap[file] = s;

      console.log(`📦 Suite mapped: ${file} → ${totalTests} tests`);
    }
  }

  /* ✅ Incremental tracking */
  async onTestEnd(test: TestCase, result: TestResult) {

    const file = test.location.file;
    if (!file) return;

    const hasRemoteSession = result.attachments.some(attachment => attachment.name === 'video-report-host');
    if (hasRemoteSession) {
      const dashboardTestName = test.title;
      const dashboardStatus = result.status === 'passed' ? 'passed' : 'failed';
      const sessionInfoAttachment = result.attachments.find(attachment => attachment.name === 'remote-session-info');
      let controllerUrl: string | undefined;
      let container: string | undefined;
      if (sessionInfoAttachment?.path && fs.existsSync(sessionInfoAttachment.path)) {
        try {
          const sessionInfo = JSON.parse(fs.readFileSync(sessionInfoAttachment.path, 'utf8')) as {
            controllerUrl?: string;
            container?: string;
          };
          controllerUrl = sessionInfo.controllerUrl;
          container = sessionInfo.container;
        } catch (error) {
          console.warn(`[RemoteBrowser] Could not read session info for ${test.title}:`, error instanceof Error ? error.message : String(error));
        }
      }
      console.log(`[RemoteBrowser] Video dashboard status: ${result.status} -> ${dashboardStatus}`);
      await deleteRemoteBrowser(result.workerIndex, dashboardTestName, dashboardStatus, controllerUrl, container).catch((error) => {
        console.warn(`[RemoteBrowser] Cleanup warning for worker ${result.workerIndex}:`, error instanceof Error ? error.message : String(error));
      });
    }

    /* ✅ Increment count ONLY when test actually finishes */
    this.suiteCompletedTests[file] =
      (this.suiteCompletedTests[file] || 0) + 1;

    this.trendSummary.total++;
    this.trendSummary.duration += result.duration || 0;
    if (result.status === 'passed') {
      this.trendSummary.passed++;
    } else if (result.status === 'failed' || result.status === 'timedOut') {
      this.trendSummary.failed++;
    } else {
      this.trendSummary.skipped++;
    }

    if (Properties.get('TREND_REPORT_ENABLED').toLowerCase() === 'true') {
      updateTrend(this.product, this.trendSummary, this.trendRunId, new Date(this.runStartTime).toISOString());
      generateTrendReport(this.product);
    }

    const completed = this.suiteCompletedTests[file];
    const total = this.suiteTotalTests[file];

    /* ✅ Debug (can remove later) */
    console.log(
      `📊 ${file} → Completed: ${completed} / Total: ${total}`
    );
  }

  async onEnd(result: FullResult) {

    const runEndTime = Date.now();

    const stats: RunStats = {
      startTime: this.runStartTime,
      endTime: runEndTime,
      duration: runEndTime - this.runStartTime
    };

    for (const suite of Object.values(this.suiteMap)) {
      if (!suite.location?.file) continue;

      const displaySuite = this.getDisplaySuite(suite);
      console.log(`✅ Suite completed: ${suite.location.file}`);
      console.log("📄 Generating suite report...");

      const reportPromise = (async () => {
        try {
          await new Promise(res => setTimeout(res, 150));

          await ReportGenerator.generateSuiteReport({
            suite: displaySuite,
            product: this.product,
            stats,
            useJson: true
          });

          console.log(`✅ Suite report generated: ${suite.location.file}`);

        } catch (err) {
          console.error(`❌ Failed to generate suite report for ${suite.location.file}:`, err);
        }
      })();

      this.pendingReports.push(reportPromise);
      await reportPromise;
    }

    /* ✅ Ensure any still in-flight suite report generation (e.g. PDF export)
       finishes before Playwright tears down the runtime/browsers. */
    await Promise.allSettled(this.pendingReports);

    if (Properties.get('TREND_REPORT_ENABLED').toLowerCase() === 'true') {
      const aggregatedData = aggregateData('all', '');
      updateTrend(
        this.product,
        aggregatedData.summary,
        this.trendRunId,
        new Date(this.runStartTime).toISOString()
      );
      const trendReportPath = generateTrendReport(this.product);
      console.log(`📈 Separate trend report generated: ${trendReportPath}`);
    } else {
      console.log('📈 Separate trend report generation is disabled.');
    }

    console.log("✅ Execution Completed");

    /* ✅ Optional (keep your hierarchy logic here if needed) */
    // HierarchyReportGenerator.generate(this.product);
  }

  private getDisplaySuite(suite: Suite): Suite {
    const fileLike = (value?: string) => !!value && (value.endsWith('.spec.ts') || value.includes('\\') || value.includes('/'));

    if (!fileLike(suite.title) && suite.title) {
      return suite;
    }

    for (const child of suite.suites) {
      const match = this.getDisplaySuite(child);
      if (!fileLike(match.title) && match.title) {
        return match;
      }
    }

    return suite;
  }

  /* ✅ Existing helper (unchanged) */
  private collectDescribeSuites(suite: Suite, acc: Suite[]) {

    if (
      suite.title &&
      suite.location?.file &&
      suite.allTests().length > 0 &&
      suite.title.endsWith('.spec.ts')
    ) {
      acc.push(suite);
    }

    suite.suites.forEach(child =>
      this.collectDescribeSuites(child, acc)
    );
  }
}