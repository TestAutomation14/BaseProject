import { Properties } from '../../config/Properties';
import { HierarchyReportGenerator } from '../generator/HierarchyReportGenerator';

const ENV = process.env.ENV || 'test';   // ✅ SAME AS PLAYWRIGHT

Properties.load(ENV);                   // ✅ REQUIRED

const product =
  Properties.get('PROJECT') || 'UNKNOWN_PROJECT';
const startDate = process.env.HIERARCHY_START_DATE || Properties.get('HIERARCHY_START_DATE') || undefined;
const endDate = process.env.HIERARCHY_END_DATE || Properties.get('HIERARCHY_END_DATE') || undefined;

console.log("✅ Loaded PROJECT:", product);

HierarchyReportGenerator.generate(product, {
  startDate,
  endDate
})
  .catch(error => {
    console.error('❌ Hierarchy report generation failed:', error);
    process.exitCode = 1;
  });
