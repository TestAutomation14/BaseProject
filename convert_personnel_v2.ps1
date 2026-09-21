$inputFile = "D:\Migrations\BaseProject\personnel_test_methods.txt"
$content = Get-Content $inputFile -Raw

# Split into individual test methods using the header format
$tests = [regex]::Matches($content, '=== TEST: .+? \(line (\d+)\) ===\r?\n([\s\S]*?)(?==== TEST:|$)')

Write-Host "Found $($tests.Count) tests"

# Extract testIDs from the method bodies
$testEntries = @()
foreach ($match in $tests) {
    $lineNo = [int]$match.Groups[1].Value
    $body = $match.Groups[2].Value
    
    # Extract testID from body
    $testID = ''
    if ($body -match 'testContext\.setAttribute\("testID",\s*"([^"]+)"\)') {
        $testID = $Matches[1]
    }
    if ([string]::IsNullOrEmpty($testID)) { continue }
    
    $testEntries += @{
        LineNo = $lineNo
        TestID = $testID
        Body = $body
    }
}

Write-Host "Extracted $($testEntries.Count) tests with testIDs"

# Group assignment based on Java source line numbers
function Get-Group($lineNo) {
    if ($lineNo -ge 114 -and $lineNo -le 165) { return 'PersonnelSysParameter6600' }
    if ($lineNo -ge 167 -and $lineNo -le 228) { return 'Personnel2020Defects1' }
    if ($lineNo -ge 229 -and $lineNo -le 267) { return 'Personnel2020Defects1' }
    if ($lineNo -ge 268 -and $lineNo -le 310) { return 'PersonnelSysParameter67And68' }
    if ($lineNo -ge 311 -and $lineNo -le 433) { return 'Personnel2020Defects1' }
    if ($lineNo -ge 434 -and $lineNo -le 452) { return 'PersonnelSysParameter4338' }
    if ($lineNo -ge 453 -and $lineNo -le 573) { return 'PersonnelDefectTestCases1' }
    if ($lineNo -ge 575 -and $lineNo -le 650) { return 'PersonnelSysParameter299' }
    if ($lineNo -ge 651 -and $lineNo -le 768) { return 'PersonnelSysParameter4322' }
    if ($lineNo -ge 769 -and $lineNo -le 930) { return 'PersonnelEntryScreenSmoke' }
    if ($lineNo -ge 931 -and $lineNo -le 974) { return 'PersonnelSysParameter4322' }
    if ($lineNo -ge 975 -and $lineNo -le 1017) { return 'PersonnelFunctional1' }
    if ($lineNo -ge 1018 -and $lineNo -le 1184) { return 'PersonnelChecklist' }
    if ($lineNo -ge 1185 -and $lineNo -le 1242) { return 'PersonnelDefectTestCases1' }
    if ($lineNo -ge 1243 -and $lineNo -le 1281) { return 'PersonnelFunctional1' }
    if ($lineNo -ge 1282 -and $lineNo -le 1320) { return 'PersonnelSysParameter231' }
    if ($lineNo -ge 1321 -and $lineNo -le 1403) { return 'PersonnelFunctional1' }
    if ($lineNo -ge 1404 -and $lineNo -le 1458) { return 'PersonnelSysParameter4322' }
    if ($lineNo -ge 1459 -and $lineNo -le 1511) { return 'PersonnelDefectTestCases1' }
    if ($lineNo -ge 1512 -and $lineNo -le 1561) { return 'PersonnelFunctional1' }
    if ($lineNo -ge 1562 -and $lineNo -le 1607) { return 'PersonnelChecklistSystemParameter' }
    if ($lineNo -ge 1608 -and $lineNo -le 1664) { return 'PersonnelFunctional1' }
    if ($lineNo -ge 1665 -and $lineNo -le 2000) { return 'PersonnelDefects2' }
    if ($lineNo -ge 2001 -and $lineNo -le 2500) { return 'PersonnelDefects3' }
    if ($lineNo -ge 2501 -and $lineNo -le 3000) { return 'PersonnelDefects4' }
    if ($lineNo -ge 3001 -and $lineNo -le 3600) { return 'PersonnelDefects5' }
    if ($lineNo -ge 3601 -and $lineNo -le 4200) { return 'PersonnelLegacy1' }
    if ($lineNo -ge 4201 -and $lineNo -le 4800) { return 'PersonnelLegacy2' }
    if ($lineNo -ge 4801 -and $lineNo -le 5500) { return 'PersonnelLegacy3' }
    if ($lineNo -ge 5501 -and $lineNo -le 6300) { return 'PersonnelSearch1' }
    if ($lineNo -ge 6301 -and $lineNo -le 7000) { return 'PersonnelSearch2' }
    if ($lineNo -ge 7001 -and $lineNo -le 7600) { return 'PersonnelEntryTabs1' }
    if ($lineNo -ge 7601 -and $lineNo -le 8300) { return 'PersonnelEntryTabs2' }
    if ($lineNo -ge 8301 -and $lineNo -le 9000) { return 'PersonnelBatchAndRoles' }
    if ($lineNo -ge 9001 -and $lineNo -le 9700) { return 'PersonnelSortAndFilter' }
    if ($lineNo -ge 9701 -and $lineNo -le 10400) { return 'PersonnelPasswordAndAuth1' }
    if ($lineNo -ge 10401 -and $lineNo -le 11100) { return 'PersonnelESignAndRoles' }
    if ($lineNo -ge 11101 -and $lineNo -le 11700) { return 'PersonnelMultiSelectAndAuth' }
    if ($lineNo -ge 11701 -and $lineNo -le 12607) { return 'PersonnelEntryUpdate' }
    return 'PersonnelTests'
}

function Convert-Line($line) {
    $trimmed = $line.Trim()
    
    # Skip empty lines
    if ([string]::IsNullOrWhiteSpace($trimmed)) { return $null }
    
    # Skip framework lines
    if ($trimmed -match '^\s*(public\s+void|ExtentReport\.|Browser\.NavigateToLoginScreen|testContext\.setAttribute|Playback\.\w+|BaseData\.get|\}$|\{$|@Test|ITestContext|Randomized\.)') { return $null }
    if ($trimmed -eq '}' -or $trimmed -eq '{') { return $null }
    if ($trimmed -match '^\s*Playback\.') { return $null }
    if ($trimmed -match '^\s*BaseData\.') { return $null }
    if ($trimmed -match '^\s*ExtentReport\.') { return $null }
    
    # Comment out objectIdentification lines
    if ($trimmed -match 'objectIdentification\.') {
        return "      // $trimmed"
    }
    
    # Keep pure comment lines
    if ($trimmed -match '^//' -and $trimmed -notmatch '\.\w+\(') {
        return "      $trimmed"
    }
    
    # Convert strings from double to single quotes
    $converted = $trimmed -replace '"([^"]*)"', "'`$1'"
    
    # Handle String variable declarations  
    $converted = $converted -replace '^String\s+(\w+)\s*=\s*(.+);', 'const $1 = $2;'
    $converted = $converted -replace '^int\s+(\w+)\s*=\s*(.+);', 'const $1 = $2;'
    $converted = $converted -replace '^boolean\s+(\w+)\s*=\s*(.+);', 'const $1 = $2;'
    $converted = $converted -replace '^List<\w+>\s+(\w+)\s*=\s*(.+);', 'const $1 = $2;'
    
    # login
    $converted = $converted -replace 'login\.loginScreen\.Logon\(\)', 'await loginPage.loginScreen.logon()'
    $converted = $converted -replace 'login\.loginScreen\.logonUsingTestContext\(\)', 'await loginPage.loginScreen.logonUsingTestContext()'
    $converted = $converted -replace 'login\.loginScreen\.(\w+)\(', 'await loginPage.loginScreen.$1('
    
    # loader
    $converted = $converted -replace 'loader\.(navigateToModule|navigateToScreen|navigateToScreenByScreenID|logout|switchToMainWindow)\(', 'await loaderPage.$1('
    $converted = $converted -replace 'loader\.(\w+)\(', 'await loaderPage.$1('
    
    # personnel.switchToXxx
    $converted = $converted -replace 'personnel\.(switchTo\w+)\(', 'await personnel.module.$1('
    
    # personnel deep nested (4+ levels) - must come before 3-level
    $converted = $converted -replace 'personnel\.personnelEntry\.personnelEntryTrainingTab\.(specialSkillsTab|certificationTab|innerTrainingTab|fTOTab)\.(\w+)\(', 'await personnel.personnelEntry.personnelEntryTrainingTab.$1.$2('
    $converted = $converted -replace 'personnel\.personnelEntry\.personnelEntryWorkRecordTab\.(workHistoryTab|injuryReportTab|medicalHistoryTab|performanceEvaluationTab|meaningfulReviewTab|cADQAEvaluationsTab)\.(\w+)\(', 'await personnel.personnelEntry.personnelEntryWorkRecordTab.$1.$2('
    
    # personnel.personnelEntry.TAB.xxx (3 levels)
    $converted = $converted -replace 'personnel\.personnelEntry\.(personnelEntryMainTab|personnelEntryAssignmentTab|personnelEntrySecurityTab|personnelEntryTrainingTab|personnelEntryWorkRecordTab|personnelEntryInventoryTab|personnelEntryEmergencyDataTab|personnelEntryAllowanceTab|personnelEntryTimeTab|personnelEntryPreferencesTab|personnelEntryQAFormsTab|aboutMeTab|rFIDTab)\.(\w+)\(', 'await personnel.personnelEntry.$1.$2('
    
    # personnel.personnelEntry.xxx (2 levels)
    $converted = $converted -replace 'personnel\.personnelEntry\.(\w+)\(', 'await personnel.personnelEntry.$1('
    $converted = $converted -replace 'personnel\.personnelSearch\.(\w+)\(', 'await personnel.personnelSearch.$1('
    
    # personnel sub-entry with sub-tabs (3 levels)
    $converted = $converted -replace 'personnel\.workHistoryEntry\.(workHistoryEntryDispositionTab|approvalTab|commentsTab)\.(\w+)\(', 'await personnel.workHistoryEntry.$1.$2('
    $converted = $converted -replace 'personnel\.injuryReportEntry\.(injuryDetailTab|approvalTab)\.(\w+)\(', 'await personnel.injuryReportEntry.$1.$2('
    $converted = $converted -replace 'personnel\.performanceReviewEntry\.(approvalTab|supervisorReportTab|qaFormTab)\.(\w+)\(', 'await personnel.performanceReviewEntry.$1.$2('
    $converted = $converted -replace 'personnel\.meaningfulReviewEntry\.(approvalTab|mainTab)\.(\w+)\(', 'await personnel.meaningfulReviewEntry.$1.$2('
    
    # personnel other sub-pages (2 levels)
    $converted = $converted -replace 'personnel\.(workHistoryEntry|injuryReportEntry|medicalHistoryEntry|performanceReviewEntry|meaningfulReviewEntry|batchUpdateEntry|personnelBatchUpdate|injuryRptSearch|medHistorySearch|workHistorySearch|allowanceCode|allowanceCodeEntry|supervisorSearch|meaningfulReviewSearch|multiJurisRoles|productHelp|organizationChart|reportsDue|performanceReview|assignmentHistoryScreen|personnelLockDetailsScreen|injuryRptEntryApproval|workHistoryEntryApproval)\.(\w+)\(', 'await personnel.$1.$2('
    
    # settings
    $converted = $converted -replace 'settings\.(switchTo\w+)\(', 'await settings.module.$1('
    $converted = $converted -replace 'settings\.(sysParameter|approvalParameter|sharedCodes|systemParameter|customLabels|accessLog|fieldUsage|reportRepositoryEntry|formRepositoryScreen|codedLookup|codedLookupEntry)\.(\w+)\(', 'await settings.$1.$2('
    
    # activity deep nested first
    $converted = $converted -replace 'activity\.activityEntry\.(activityEntryPFTab|activityEntryOtherTab|activityEntryNamesTab|recurrencePopUp|activityEntryChargeTab)\.(\w+)\(', 'await activity.activityEntry.$1.$2('
    $converted = $converted -replace 'activity\.popup\.kPICodedLookup\.(\w+)\(', 'await activity.popup.kPICodedLookup.$1('
    $converted = $converted -replace 'activity\.popup\.(switchTo\w+)\(', 'await activity.popup.$1('
    $converted = $converted -replace 'activity\.(switchTo\w+|SwitchTo\w+|pressF4\w+)\(', 'await activity.module.$1('
    $converted = $converted -replace 'activity\.(activitySearch|activityEntry|activityQuickEntry|activitySearchHelpWindow)\.(\w+)\(', 'await activity.$1.$2('
    
    # popup
    $converted = $converted -replace 'popup\.(switchTo\w+)\(', 'await popupPage.$1('
    $converted = $converted -replace 'popup\.kPICodedLookup\.(\w+)\(', 'await popupPage.kPICodedLookup.$1('
    $converted = $converted -replace 'popup\.acknowledge\.(\w+)\(', 'await popupPage.acknowledge.$1('
    $converted = $converted -replace 'popup\.confirm\.(\w+)\(', 'await popupPage.confirm.$1('
    $converted = $converted -replace 'popup\.treeViewHelp\.(\w+)\(', 'await popupPage.treeViewHelp.$1('
    
    # home deep nested first
    $converted = $converted -replace 'home\.selectReport\.(\w+)\(', 'await home.selectReport.$1('
    $converted = $converted -replace 'home\.signatureScreen\.(\w+)\(', 'await home.signatureScreen.$1('
    $converted = $converted -replace 'home\.allImagesScreen\.(\w+)\(', 'await home.allImagesScreen.$1('
    $converted = $converted -replace 'home\.mobileDeviceOTPScreen\.(\w+)\(', 'await home.mobileDeviceOTPScreen.$1('
    $converted = $converted -replace 'home\.pnxReportSSRSPDFScreen\.(\w+)\(', 'await home.pnxReportSSRSPDFScreen.$1('
    $converted = $converted -replace 'home\.pnxCustomReportPDFScreen\.(\w+)\(', 'await home.pnxCustomReportPDFScreen.$1('
    $converted = $converted -replace 'home\.(switchTo\w+)\(', 'await home.module.$1('
    $converted = $converted -replace 'home\.(myHome|attachment|phoneBookSearch|messageSendScreen|messageSearch|messageReceivedScreen|bulletinEntry|phoneBookContactEntry|phoneBookEntry|notificationSearch|notification|reportLog|trackSearch|trackEntry|expenseEntry|help|howToVideosWindow|printBatchScreen|viewPrintHistory|addMultiplePF)\.(\w+)\(', 'await home.$1.$2('
    
    # scheduling deep nested
    $converted = $converted -replace 'scheduling\.calendar\.appointmentsPopup\.(\w+)\(', 'await scheduling.calendar.appointmentsPopup.$1('
    $converted = $converted -replace 'scheduling\.(switchTo\w+)\(', 'await scheduling.module.$1('
    $converted = $converted -replace 'scheduling\.(calendar|eventSchedule)\.(\w+)\(', 'await scheduling.$1.$2('
    
    # qA
    $converted = $converted -replace 'qA\.(SwitchTo\w+|switchTo\w+)\(', 'await qA.$1('
    $converted = $converted -replace 'qA\.(questionDataEntry|questionnarie|sendEmailPopUp|questionDataEntryESign)\.(\w+)\(', 'await qA.$1.$2('
    
    # admission
    $converted = $converted -replace 'admission\.(switchTo\w+)\(', 'await admission.module.$1('
    $converted = $converted -replace 'admission\.(inmateSearchScreen|admissionEntry)\.(\w+)\(', 'await admission.$1.$2('
    
    # training
    $converted = $converted -replace 'training\.(switchTo\w+)\(', 'await training.module.$1('
    $converted = $converted -replace 'training\.(trainingEntry|trainingSearch)\.(\w+)\(', 'await training.$1.$2('
    
    # names
    $converted = $converted -replace 'names\.(switchTo\w+)\(', 'await names.module.$1('
    $converted = $converted -replace 'names\.(nameSearch|nameEntry)\.(\w+)\(', 'await names.$1.$2('
    
    # inventory
    $converted = $converted -replace 'inventory\.(switchTo\w+)\(', 'await inventory.module.$1('
    
    # vehicle
    $converted = $converted -replace 'vehicle\.(switchTo\w+)\(', 'await vehicle.module.$1('
    
    # employmentApplicants
    $converted = $converted -replace 'employmentApplicants\.(switchTo\w+)\(', 'await employmentApplicants.module.$1('
    
    # Add await to remaining unconverted method calls (catch-all for any missed patterns)
    if ($converted -match '^\s*[a-z]' -and $converted -notmatch '^\s*await ' -and $converted -notmatch '^\s*//' -and $converted -notmatch '^\s*const ' -and $converted -notmatch '^\s*var ' -and $converted -notmatch '^\s*let ') {
        if ($converted -match '\.\w+\(') {
            # Unconverted method call - add await
            $converted = "await $converted"
        }
    }
    
    return "      $converted"
}

$output = @()
$output += "// @ts-nocheck"
$output += "import { test } from '../../src/fixtures/test-fixtures';"
$output += "import { withTestContext } from '../../src/data/test-context';"
$output += ""

$currentGroup = ''
$testCount = 0
$partSize = 15  # tests per describe block approximately
$partNum = 0

foreach ($entry in $testEntries) {
    $testID = $entry.TestID
    $lineNo = $entry.LineNo
    $body = $entry.Body
    
    $group = Get-Group $lineNo
    
    # Determine fixtures
    $fixtures = @('personnel', 'loginPage', 'loaderPage', 'testData')
    if ($body -match 'settings\.') { $fixtures += 'settings' }
    if ($body -match 'activity\.') { $fixtures += 'activity' }
    if ($body -match '(?<=[^a-zA-Z])home\.') { $fixtures += 'home' }
    if ($body -match 'scheduling\.') { $fixtures += 'scheduling' }
    if ($body -match 'popup\.') { $fixtures += 'popupPage' }
    if ($body -match '(?<=[^a-zA-Z])qA\.') { $fixtures += 'qA' }
    if ($body -match 'admission\.') { $fixtures += 'admission' }
    if ($body -match '(?<=[^a-zA-Z])training\.') { $fixtures += 'training' }
    if ($body -match '(?<=[^a-zA-Z])names\.') { $fixtures += 'names' }
    if ($body -match '(?<=[^a-zA-Z])inventory\.') { $fixtures += 'inventory' }
    if ($body -match '(?<=[^a-zA-Z])vehicle\.') { $fixtures += 'vehicle' }
    if ($body -match 'employmentApplicants\.') { $fixtures += 'employmentApplicants' }
    $fixtureStr = $fixtures -join ', '
    
    # Process body
    $lines = $body -split "`n"
    $convertedLines = @()
    foreach ($line in $lines) {
        $result = Convert-Line $line
        if ($null -ne $result -and $result.Trim() -ne '') {
            $convertedLines += $result
        }
    }
    
    # Group management
    if ($group -ne $currentGroup) {
        if ($currentGroup -ne '') {
            $output += ""
            $output += "});"
            $output += ""
        }
        $currentGroup = $group
        $partNum++
        $output += "// ===================== Part $partNum - $group ====================="
        $output += "test.describe('$group', () => {"
    }
    
    $output += ""
    $output += "  test('${group}_${testID}', async ({ $fixtureStr }) => {"
    $output += "    await withTestContext(testData, '$testID', async () => {"
    foreach ($cl in $convertedLines) {
        $output += $cl
    }
    $output += "    });"
    $output += "  });"
    
    $testCount++
}

# Close last group
if ($currentGroup -ne '') {
    $output += ""
    $output += "});"
}

$outputFile = "D:\Migrations\BaseProject\tests\personnel\personnel.spec.ts"
$output | Out-File -FilePath $outputFile -Encoding utf8

Write-Host "Total tests converted: $testCount"
Write-Host "Output: $outputFile"
Write-Host "Lines: $($output.Count)"
