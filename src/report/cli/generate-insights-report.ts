import { Properties } from '../../config/Properties';
import { TestInsightsAnalyzer } from '../analyzer/TestInsightsAnalyzer';

const ENV = process.env.ENV || 'test';
Properties.load(ENV);

try {
  const reportPath = TestInsightsAnalyzer.generateHtmlReport(
    Properties.get('PROJECT') || 'UNKNOWN_PROJECT'
  );
  console.log(`✅ Test insights report generated: ${reportPath}`);
} catch (error) {
  console.error('❌ Test insights report generation failed:', error);
  process.exitCode = 1;
}
