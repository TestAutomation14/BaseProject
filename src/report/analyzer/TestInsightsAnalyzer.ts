import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import { Properties } from '../../config/Properties';

type TestRecord = {
  title: string;
  file: string;
  status: string;
  duration: number;
};

type Insights = {
  flakyTests: Array<{ title: string; file: string; history: string[] }>;
  slowTests: Array<{ title: string; file: string; avgDuration: number }>;
  executionTrend: Array<{ timestamp: string; passed: number; failed: number; skipped: number }>;
};

export class TestInsightsAnalyzer {

  /* ✅ MAIN ENTRY */
  static analyze(history: any[]): Insights {

    const testHistoryMap: Record<string, TestRecord[]> = {};

    /* ✅ Build history per test */
    history.forEach(run => {

      const snapshot = run.suitesSnapshot || {};

      Object.entries(snapshot).forEach(([key, value]: any) => {

        if (!testHistoryMap[key]) {
          testHistoryMap[key] = [];
        }

        testHistoryMap[key].push({
          title: value.title,
          file: value.file,
          status: value.status,
          duration: value.duration || 0
        });
      });
    });

    /* ✅ 1. FLAKY TESTS */
    const flakyTests = Object.keys(testHistoryMap)
      .filter(k => {
        const statuses = testHistoryMap[k].map(t => t.status);
        return statuses.includes("passed") && statuses.includes("failed");
      })
      .map(k => ({
        title: testHistoryMap[k][0].title,
        file: testHistoryMap[k][0].file,
        history: testHistoryMap[k].map(t => t.status)
      }));

    /* ✅ 2. SLOW TESTS */
    const slowTests = Object.keys(testHistoryMap)
      .map(k => {

        const durations = testHistoryMap[k]
          .map(t => t.duration || 0)
          .filter(d => d > 0);

        const avg =
          durations.reduce((a, b) => a + b, 0) / (durations.length || 1);

        return {
          title: testHistoryMap[k][0].title,
          file: testHistoryMap[k][0].file,
          avgDuration: Math.round(avg)
        };
      })
      .sort((a, b) => b.avgDuration - a.avgDuration)
      .slice(0, 10); // top 10 slow

    /* ✅ 3. EXECUTION TREND */
    const executionTrend = history.map(run => ({
      timestamp: run.timestamp,
      passed: run.passed,
      failed: run.failed,
      skipped: run.skipped
    }));

    return {
      flakyTests,
      slowTests,
      executionTrend
    };
  }

  static generateHtmlReport(product?: string): string {
    const basePath = Properties.get('REPORT_BASE_PATH');
    if (!basePath) throw new Error('REPORT_BASE_PATH is not configured');

    const rawDirectory = path.join(basePath, 'raw');
    if (!fs.existsSync(rawDirectory)) {
      throw new Error(`Raw results folder not found: ${rawDirectory}`);
    }

    const history = fs.readdirSync(rawDirectory)
      .filter(file => file.endsWith('.json') && !file.includes('merged'))
      .map(file => {
        const filePath = path.join(rawDirectory, file);
        const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const suitesSnapshot = buildSuitesSnapshot(parsed.suites || []);
        const statuses = Object.values(suitesSnapshot).map(test => normalizeStatus(test.status));
        return {
          timestamp: parsed.stats?.startTime || fs.statSync(filePath).mtime.toISOString(),
          suitesSnapshot,
          passed: statuses.filter(status => status === 'passed').length,
          failed: statuses.filter(status => status === 'failed').length,
          skipped: statuses.filter(status => status === 'skipped').length
        };
      })
      .sort((left, right) => left.timestamp.localeCompare(right.timestamp));

    const insights = TestInsightsAnalyzer.analyze(history);
    const reportPath = Properties.get('INSIGHTS_REPORT_PATH')
      || path.join(basePath, 'insights', 'test-insights-report.html');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });

    const templatePath = path.join(process.cwd(), 'src/main/Report/templates/test-insights.ejs');
    const html = ejs.render(fs.readFileSync(templatePath, 'utf8'), {
      product: product || Properties.get('PROJECT') || 'UNKNOWN_PROJECT',
      generatedAt: new Date().toLocaleString(),
      insights
    });

    fs.writeFileSync(reportPath, html, 'utf8');
    return reportPath;
  }
}

function buildSuitesSnapshot(suites: any[]): Record<string, TestRecord> {
  const snapshot: Record<string, TestRecord> = {};

  const visit = (suite: any, file?: string) => {
    const suiteFile = suite.file || file || 'unknown';
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        const result = test.results?.[test.results.length - 1];
        const title = [...(spec.title ? [spec.title] : []), test.title].filter(Boolean).join(' › ');
        const key = `${suiteFile}::${title}`;
        snapshot[key] = {
          title,
          file: suiteFile,
          status: normalizeStatus(result?.status || test.status || 'skipped'),
          duration: result?.duration || test.duration || 0
        };
      }

    }
    for (const child of suite.suites || []) visit(child, suiteFile);
  };

  suites.forEach(suite => visit(suite));
  return snapshot;
}

function normalizeStatus(status: string): 'passed' | 'failed' | 'skipped' {
  if (status === 'passed' || status === 'expected') return 'passed';
  if (status === 'failed' || status === 'unexpected' || status === 'timedOut') return 'failed';
  return 'skipped';
}