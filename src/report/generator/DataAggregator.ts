import fs from 'fs';
import path from 'path';
import os from 'os';
import { randomUUID } from 'crypto';
import { Properties } from '../../config/Properties';
const machineName = process.env.MACHINE_NAME || os.hostname();

// Load properties when this module is imported before the CLI entry point.
if (!Properties.get("REPORT_BASE_PATH")) {
  Properties.load(process.env.ENV || "test");
}

const basePath = Properties.get("REPORT_BASE_PATH");
if (!basePath) {
  throw new Error("❌ REPORT_BASE_PATH is not configured");
}

console.log("📁 Base Report Path:", basePath);

/**
 * Find results JSON using PW_RUN_STAMP if valid, else use most recent file.
 * Only throws if explicitly needed (useJson=true with no files available).
 */
const getResultsJsonPaths = (): string[] => {
  const rawDir = path.join(basePath, 'raw');
  if (!fs.existsSync(rawDir)) {
    throw new Error('No results JSON found at ' + path.join(basePath, 'raw'));
  }

  const runStamp = process.env.PW_RUN_STAMP;
  const candidates = fs
    .readdirSync(rawDir)
    .filter(f => f.startsWith(machineName) && f.endsWith('-results.json'))
    .map(f => path.join(rawDir, f));

  if (runStamp) {
    const exactMatches = candidates.filter(file => file.includes(`-${runStamp}-results.json`));
    if (exactMatches.length > 0) {
      return exactMatches.sort();
    }
  }

  if (candidates.length > 0) {
    const newestFiles = candidates
      .map(file => ({ file, mtime: fs.statSync(file).mtimeMs }))
      .sort((a, b) => b.mtime - a.mtime);

    const newestTimestamp = newestFiles[0].mtime;
    const currentRunFiles = newestFiles
      .filter(item => newestTimestamp - item.mtime <= 120000)
      .map(item => item.file);

    if (currentRunFiles.length > 0) {
      return currentRunFiles.sort();
    }

    return [newestFiles[0].file];
  }

  throw new Error('No results JSON found at ' + path.join(basePath, 'raw'));
};

const readResultsJson = (filePath: string): any => {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8').trim();
      if (!content) throw new Error('Empty results file');
      return JSON.parse(content);
    } catch (error) {
      if (attempt === 19) throw error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100);
    }
  }

  return {};
};


export type AggregatedData = {
  summary: {
    total: number;
    passed: number;
    failed: number;
    skipped: number;
    duration: number;
  };
  tests: any[];
};

export type ReportJsonData = {
  suites: any[];
  tests: any[];
  stats?: {
    startTime?: string;
    endTime?: string;
  };
};

export type HierarchyMergeResult = {
  files: string[];
  data: ReportJsonData & {
    errors: any[];
    projects: any[];
  };
};

export function loadReportJsonData(): ReportJsonData {
  const reportJson: ReportJsonData = { suites: [], tests: [], stats: {} };

  for (const resultsJsonPath of getResultsJsonPaths()) {
    if (!fs.existsSync(resultsJsonPath)) continue;
    const fileJson = readResultsJson(resultsJsonPath);
    reportJson.suites.push(...(fileJson.suites || []));
    reportJson.tests.push(...(fileJson.tests || []));

    const startTime = fileJson.stats?.startTime;
    const endTime = fileJson.stats?.endTime;
    if (
      startTime &&
      (!reportJson.stats?.startTime ||
        new Date(startTime).getTime() < new Date(reportJson.stats.startTime).getTime())
    ) {
      reportJson.stats!.startTime = startTime;
    }

    if (
      endTime &&
      (!reportJson.stats?.endTime ||
        new Date(endTime).getTime() > new Date(reportJson.stats.endTime).getTime())
    ) {
      reportJson.stats!.endTime = endTime;
    }
  }

  return reportJson;
}

export function mergeHierarchyJson(
  resultsFolder: string,
  rangeStart: Date,
  rangeEnd: Date
): HierarchyMergeResult {
  const files = fs.readdirSync(resultsFolder)
    .filter(file => file.endsWith('.json') && !file.includes('merged'))
    .filter(file => {
      const filePath = path.join(resultsFolder, file);
      try {
        const data = readJsonFile<any>(filePath);
        const runDate = data.stats?.startTime
          ? new Date(data.stats.startTime)
          : fs.statSync(filePath).mtime;
        return runDate >= rangeStart && runDate <= rangeEnd;
      } catch {
        return false;
      }
    })
    .sort()
    .reverse();

  const data: HierarchyMergeResult['data'] = {
    suites: [],
    tests: [],
    stats: {
      startTime: new Date().toISOString(),
      endTime: undefined,
    },
    errors: [],
    projects: []
  };
  let earliestStart = Number.MAX_SAFE_INTEGER;
  let latestEnd = 0;
  const seenSuiteFiles = new Set<string>();

  files.forEach(file => {
    const filePath = path.join(resultsFolder, file);
    try {
      const fileData = readJsonFile<any>(filePath);
      const reportDate = fileData.stats?.startTime
        ? new Date(fileData.stats.startTime).toISOString().slice(0, 10).replace(/-/g, '')
        : new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const uniqueSuites = (fileData.suites || []).filter((suite: any) => {
        const suiteKey = String(suite.file || suite.title || '').replace(/\\/g, '/');
        if (!suiteKey || seenSuiteFiles.has(suiteKey)) return !suiteKey;
        seenSuiteFiles.add(suiteKey);
        return true;
      });

      uniqueSuites.forEach((suite: any) => {
        suite.machine = file.replace('.json', '');
        suite.reportDate = reportDate;
      });
      data.suites.push(...uniqueSuites);
      data.errors.push(...(fileData.errors || []));
      data.projects.push(...(fileData.projects || []));

      if (fileData.stats?.startTime) {
        earliestStart = Math.min(earliestStart, new Date(fileData.stats.startTime).getTime());
      }
      if (fileData.stats?.endTime) {
        latestEnd = Math.max(latestEnd, new Date(fileData.stats.endTime).getTime());
      }
    } catch {
      // Invalid or incomplete result files are excluded from the merge.
    }
  });

  if (earliestStart < Number.MAX_SAFE_INTEGER) {
    data.stats!.startTime = new Date(earliestStart).toISOString();
  }
  if (latestEnd > 0) {
    data.stats!.endTime = new Date(latestEnd).toISOString();
    (data.stats as any).duration = latestEnd - earliestStart;
  }

  return { files, data };
}

export function getReportMachineName(): string {
  return machineName;
}

export function findSuiteByFile(suites: any[], suiteFile?: string): any | undefined {
  const normalizedSuiteFile = suiteFile?.replace(/\\/g, '/').toLowerCase();
  if (!normalizedSuiteFile) return undefined;

  return suites.find((candidate: any) => {
    const candidateFile = candidate.file?.replace(/\\/g, '/').toLowerCase();
    return candidateFile && (
      candidateFile === normalizedSuiteFile ||
      normalizedSuiteFile.endsWith(`/${candidateFile}`) ||
      candidateFile.endsWith(`/${normalizedSuiteFile}`)
    );
  });
}

export function getReportSuite(
  reportJson: ReportJsonData,
  suiteFile?: string,
  suiteTitle?: string
): any | undefined {
  return findSuiteByFile(reportJson.suites, suiteFile)
    || reportJson.suites.find((candidate: any) => candidate.title === suiteTitle)
    || reportJson.suites.find((candidate: any) => candidate.file && candidate.suites?.length > 0)
    || reportJson.suites[0];
}

export function getSuiteFile(
  reportJson: ReportJsonData,
  suiteFile?: string,
  suiteTitle?: string
): string | undefined {
  return suiteFile || getReportSuite(reportJson, suiteFile, suiteTitle)?.file;
}

export function getReportStartTime(reportJson: ReportJsonData, fallback = Date.now()): number {
  return reportJson.stats?.startTime
    ? new Date(reportJson.stats.startTime).getTime()
    : fallback;
}

export function getSuiteStartTime(suite: any, fallback = Date.now()): number {
  const firstTest = suite?.allTests?.()[0];
  const startTime = getFirstTestResult(firstTest)?.startTime;
  return startTime ? new Date(startTime).getTime() : fallback;
}

export function resolveReportStartTime(
  reportJson: ReportJsonData,
  suite: any
): number {
  return getReportStartTime(reportJson, getSuiteStartTime(suite));
}

export function getTestTitle(test: any): string {
  if (typeof test?.title === 'string' && test.title.trim()) return test.title.trim();
  if (typeof test?.name === 'string' && test.name.trim()) return test.name.trim();

  if (Array.isArray(test?.titlePath)) {
    const titlePath = test.titlePath.filter((part: unknown): part is string =>
      typeof part === 'string' && part.trim().length > 0
    );
    if (titlePath.length > 0) return titlePath[titlePath.length - 1];
  }

  return 'Unnamed test';
}

export function getLastTestResult(test: any): any | undefined {
  return Array.isArray(test?.results)
    ? test.results[test.results.length - 1]
    : undefined;
}

export function getTestResults(test: any): any[] {
  return Array.isArray(test?.results) ? test.results : [];
}

export function getTestAnnotations(test: any): any[] {
  return Array.isArray(test?.annotations) ? test.annotations : [];
}

export function getTestAttachments(test: any): any[] {
  return getLastTestResult(test)?.attachments || [];
}

export function getTestError(test: any): any {
  return getLastTestResult(test)?.error || test?.error;
}

export function getTestStatus(test: any): string | undefined {
  return getLastTestResult(test)?.status || test?.status;
}

export function getAttachmentText(result: any, name: string, fallback?: string): string | undefined {
  const attachment = (result?.attachments || []).find((item: any) => item.name === name);
  if (!attachment?.path || !fs.existsSync(attachment.path)) return fallback;
  const value = fs.readFileSync(attachment.path, 'utf8').trim();
  return value || fallback;
}

export function getResultVideoHost(result: any): string | undefined {
  return getAttachmentText(result, 'video-report-host');
}

export function getResultVideoTestName(result: any, fallback: string): string {
  return getAttachmentText(result, 'video-report-test-name', fallback) || fallback;
}

export function getTestStartTime(test: any): Date | null {
  const result = getFirstTestResult(test);
  return result?.startTime ? new Date(result.startTime) : null;
}

export function getTestEndTime(test: any): Date | null {
  const result = getLastTestResult(test);
  return result?.startTime
    ? new Date(new Date(result.startTime).getTime() + (result.duration || 0))
    : null;
}

export function getTestDuration(test: any): number {
  return getLastTestResult(test)?.duration ?? test?.duration ?? 0;
}

export function readJsonFile<T = any>(filePath: string): T {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      const content = fs.readFileSync(filePath, 'utf8').trim();
      if (!content) throw new Error(`Empty JSON file: ${filePath}`);
      return JSON.parse(content) as T;
    } catch (error) {
      if (attempt === 19) throw error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100);
    }
  }
  throw new Error(`Unable to read JSON file: ${filePath}`);
}

export function getFirstTestResult(test: any): any | undefined {
  return Array.isArray(test?.results) && test.results.length > 0
    ? test.results[0]
    : undefined;
}

export function getSuiteTests(
  reportJson: ReportJsonData,
  suiteFile: string | undefined,
  suiteTitle: string | undefined,
  fallbackTests: any[] = []
): any[] {
  const matchingSuite = findSuiteByFile(reportJson.suites, suiteFile)
    || reportJson.suites.find((candidate: any) => candidate.title === suiteTitle)
    || reportJson.suites[0];

  const collectTests = (suiteNode: any): any[] => [
    ...(suiteNode.specs || []).flatMap((spec: any) =>
      (spec.tests || []).map((test: any) => ({
        ...test,
        title: getTestTitle(test) === 'Unnamed test' ? spec.title : getTestTitle(test)
      }))
    ),
    ...(suiteNode.suites || []).flatMap((child: any) => collectTests(child))
  ];

  const jsonTests = matchingSuite ? collectTests(matchingSuite) : [];
  return jsonTests.length > 0 ? jsonTests : fallbackTests;
}

export function getExecutionBrowser(reportJson: ReportJsonData, fallbackTests: any[]): string {
  return reportJson.tests?.[0]?.projectName
    || fallbackTests?.[0]?.project?.name
    || 'chrome';
}

export function getResultTimeBounds(tests: any[]): {
  duration: number;
  endTime: Date | null;
} {
  let earliestStart = Number.MAX_SAFE_INTEGER;
  let latestEnd = 0;

  for (const test of tests) {
    const results = getTestResults(test);
    const first = results[0];
    const last = results[results.length - 1];
    if (!first?.startTime || !last?.startTime) continue;

    const start = new Date(first.startTime).getTime();
    const end = new Date(last.startTime).getTime() + (last.duration || 0);
    if (!Number.isNaN(start) && start < earliestStart) earliestStart = start;
    if (!Number.isNaN(end) && end > latestEnd) latestEnd = end;
  }

  return latestEnd > 0 && earliestStart < Number.MAX_SAFE_INTEGER
    ? { duration: latestEnd - earliestStart, endTime: new Date(latestEnd) }
    : { duration: 0, endTime: null };
}

export function normalizeAggregatedStatus(status?: string): 'passed' | 'failed' | 'skipped' {
  if (status === 'passed' || status === 'expected') return 'passed';
  if (status === 'failed' || status === 'unexpected' || status === 'timedOut') return 'failed';
  return 'skipped';
}

export function aggregateTests(tests: any[]): AggregatedData {
  const normalizedTests = tests.map((test: any) => ({
    ...test,
    status: normalizeAggregatedStatus(getLastTestResult(test)?.status || test.status),
    duration: getTestDuration(test)
  }));

  return {
    summary: {
      total: normalizedTests.length,
      passed: normalizedTests.filter(test => test.status === 'passed').length,
      failed: normalizedTests.filter(test => test.status === 'failed').length,
      skipped: normalizedTests.filter(test => test.status === 'skipped').length,
      duration: normalizedTests.reduce((total, test) => total + (test.duration || 0), 0)
    },
    tests: normalizedTests
  };
}

export function aggregateData(type: string, identifier: string): AggregatedData {
  const mergedSuites = loadReportJsonData().suites;

  const collectTests = (suites: any[]): any[] =>
    suites.flatMap((suite: any) => [
      ...(suite.specs || []).flatMap((spec: any) =>
        (spec.tests || []).map((test: any) => {
          const lastResult = test.results?.[test.results.length - 1];
          return {
            ...test,
            status: lastResult?.status || test.status,
            duration: lastResult?.duration ?? test.duration ?? 0
          };
        })
      ),
      ...collectTests(suite.suites || [])
    ]);

  const tests = collectTests(mergedSuites);

  const filtered =
    type === 'suite' || type === 'module'
      ? tests.filter(t =>
          t.annotations?.some(a => a.description === identifier)
        )
      : tests;

  return aggregateTests(filtered);
}