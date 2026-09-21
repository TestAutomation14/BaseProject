import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import { Properties } from '../../config/Properties';

export type TrendSummary = {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  duration?: number;
};

export type TrendEntry = TrendSummary & {
  date: string;
  runId?: string;
};

type TrendReportRow = TrendEntry & {
  product: string;
  executionDate: string;
};

type TrendData = Record<string, TrendEntry[]>;

const getTrendFile = () => {
  const basePath = Properties.get('REPORT_BASE_PATH');
  if (!basePath) throw new Error('REPORT_BASE_PATH is not configured');
  const trendDirectory = path.join(basePath, 'trends');
  fs.mkdirSync(trendDirectory, { recursive: true });
  return path.join(trendDirectory, 'trend-data.json');
};

const getTrendReportPath = () => {
  const configuredPath = Properties.get('TREND_REPORT_PATH');
  const reportPath = configuredPath || path.join(path.dirname(getTrendFile()), 'trend-report.html');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  return reportPath;
};

const readTrendData = (filePath: string): TrendData => {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8').trim();
  if (!content) return {};
  const parsed = JSON.parse(content) as TrendData;
  return parsed && typeof parsed === 'object' ? parsed : {};
};

export function updateTrend(
  product: string,
  summary: TrendSummary,
  runId?: string,
  executionDate?: string
): TrendEntry {
  const trendFile = getTrendFile();
  const data = readTrendData(trendFile);
  const entry: TrendEntry = {
    date: executionDate || new Date().toISOString(),
    runId,
    total: summary.total,
    passed: summary.passed,
    failed: summary.failed,
    skipped: summary.skipped,
    duration: summary.duration || 0
  };

  const existingIndex = runId
    ? (data[product] || []).findIndex(item => item.runId === runId)
    : -1;
  if (existingIndex >= 0) {
    data[product][existingIndex] = entry;
  } else {
    data[product] = [...(data[product] || []), entry];
  }
  fs.writeFileSync(trendFile, JSON.stringify(data, null, 2), 'utf8');
  return entry;
}

export function generateTrendReport(product?: string): string {
  const trendFile = getTrendFile();
  const data = readTrendData(trendFile);
  const reportPath = getTrendReportPath();
  const products = product ? [product] : Object.keys(data);
  const rows: TrendReportRow[] = products.flatMap(name => (data[name] || []).map(entry => ({
    product: name,
    ...entry,
    executionDate: formatExecutionDate(entry.date),
    duration: entry.duration || 0
  })));
  const totals = rows.reduce((summary, entry) => ({
    total: summary.total + entry.total,
    passed: summary.passed + entry.passed,
    failed: summary.failed + entry.failed,
    skipped: summary.skipped + entry.skipped,
    runs: summary.runs + 1
  }), { total: 0, passed: 0, failed: 0, skipped: 0, runs: 0 });
  const template = fs.readFileSync(
    path.join(process.cwd(), 'src/main/Report/templates/trend.ejs'),
    'utf8'
  );
  const html = ejs.render(template, {
    generatedAt: new Date().toLocaleString(),
    rows,
    totals
  });

  fs.writeFileSync(reportPath, html, 'utf8');
  return reportPath;
}

function formatExecutionDate(value: string): string {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : parsed.toLocaleString();
}