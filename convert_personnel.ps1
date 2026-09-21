$inputFile = "D:\Migrations\BaseProject\personnel_test_methods.txt"
$content = Get-Content $inputFile -Raw

# Split into individual test methods
$tests = [regex]::Matches($content, '=== TEST: (.+?)_(\w+?) \(line (\d+)\) ===\r?\n([\s\S]*?)(?==== TEST:|$)')

$output = @()
$output += "// @ts-nocheck"
$output += "import { test } from '../../src/fixtures/test-fixtures';"
$output += "import { withTestContext } from '../../src/data/test-context';"
$output += ""

# Group definitions based on line numbers
# We'll assign groups based on the Java source group annotations
$groupMap = @{
    '231336' = 'SysParameter6600'
    '232493' = '2020DefectTestCases'
    '248769' = '2020DefectTestCases'
    '258919' = '2020DefectTestCases'
    '259709' = 'SysParameter67And68'
    '260160' = '2020DefectTestCases'
    '260821' = '2020DefectTestCases'
    '256106' = 'SysParameter4338'
    '278646' = 'DefectTestCases1'
    '282075' = 'DefectTestCases1'
    '292513' = 'SysParameter299'
    '292510' = 'SysParameter299'
    '261083' = 'SysParameter4322'
    '261083A' = 'SysParameter4322'
    'PersonnelEntry' = 'EntryScreenSmokeScriptPersonnel'
    'AllowanceCodeEntry' = 'EntryScreenSmokeScriptPersonnel'
    'InjuryRptEntry' = 'EntryScreenSmokeScriptPersonnel'
    'MedicalHistoryEntry' = 'EntryScreenSmokeScriptPersonnel'
    'PerformanceReviewEntry' = 'EntryScreenSmokeScriptPersonnel'
    'WorkHistoryEntry' = 'EntryScreenSmokeScriptPersonnel'
    '8987' = 'SysParameter4322'
    '9110' = 'PersonnelFunctional1'
    '9123' = 'PersonnelChecklist'
    '9127' = 'PersonnelChecklist'
    '9153' = 'DefectTestCases1'
    '10224' = 'PersonnelFunctional1'
    '10245' = 'SysParameter231'
    '11007' = 'PersonnelFunctional1'
    '10878' = 'PersonnelFunctional1'
    '10944' = 'PersonnelFunctional1'
    '11717' = 'SysParameter4322'
    '13190' = 'DefectTestCases1'
    '9150' = 'DefectTestCases1'
    '13855' = 'PersonnelFunctional1'
    '13874' = 'PersonnelChecklistSystemParameter'
    '13880' = 'PersonnelFunctional1'
}

$currentGroup = ''
$testCount = 0

foreach ($match in $tests) {
    $fullName = $match.Groups[1].Value
    $testID = $match.Groups[2].Value
    $lineNo = $match.Groups[3].Value
    $body = $match.Groups[4].Value
    
    # Determine group
    if ($groupMap.ContainsKey($testID)) {
        $group = $groupMap[$testID]
    } else {
        $group = 'PersonnelTests'
    }
    
    # Determine fixtures needed
    $fixtures = @('personnel', 'loginPage', 'loaderPage', 'testData')
    if ($body -match 'settings\.') { $fixtures += 'settings' }
    if ($body -match 'activity\.') { $fixtures += 'activity' }
    if ($body -match '(?<!personnel\.)home\.') { $fixtures += 'home' }
    if ($body -match 'scheduling\.') { $fixtures += 'scheduling' }
    if ($body -match 'popup\.') { $fixtures += 'popupPage' }
    if ($body -match 'qA\.') { $fixtures += 'qA' }
    if ($body -match 'admission\.') { $fixtures += 'admission' }
    if ($body -match 'training\.') { $fixtures += 'training' }
    if ($body -match 'names\.') { $fixtures += 'names' }
    if ($body -match 'inventory\.') { $fixtures += 'inventory' }
    if ($body -match 'vehicle\.') { $fixtures += 'vehicle' }
    if ($body -match 'employmentApplicants\.') { $fixtures += 'employmentApplicants' }
    $fixtureStr = $fixtures -join ', '
    
    # Process body line by line
    $lines = $body -split "`n"
    $convertedLines = @()
    
    foreach ($line in $lines) {
        $trimmed = $line.Trim()
        
        # Skip empty lines at start/end
        if ([string]::IsNullOrWhiteSpace($trimmed)) { continue }
        
        # Skip these patterns entirely
        if ($trimmed -match '^(public\s+void|ExtentReport\.|Browser\.NavigateToLoginScreen|testContext\.setAttribute|Playback\.\w+\(|BaseData\.get|\}$|\{$|@Test|ITestContext)') { continue }
        if ($trimmed -eq '}') { continue }
        if ($trimmed -eq '{') { continue }
        
        # Handle Java comments - keep as-is
        if ($trimmed -match '^//') {
            $convertedLines += "      $trimmed"
            continue
        }
        
        # Handle commented Java code
        if ($trimmed -match '^//.+\.' ) {
            $convertedLines += "      $trimmed"
            continue
        }
        
        # Comment out objectIdentification lines
        if ($trimmed -match 'objectIdentification\.') {
            $convertedLines += "      // $trimmed"
            continue
        }
        
        # Convert strings from double to single quotes (simple approach)
        $converted = $trimmed -replace '"([^"]*)"', "'`$1'"
        
        # Remove trailing semicolons for now, we'll add them back
        $converted = $converted -replace ';\s*$', ';'
        
        # Handle String variable declarations
        if ($converted -match '^String\s+(\w+)\s*=\s*(.+);') {
            $varName = $Matches[1]
            $rest = $Matches[2]
            $converted = "const $varName = $rest;"
        }
        
        # Apply conversion rules
        
        # login
        $converted = $converted -replace 'login\.loginScreen\.Logon\(\)', 'await loginPage.loginScreen.logon()'
        $converted = $converted -replace 'login\.loginScreen\.logonUsingTestContext\(\)', 'await loginPage.loginScreen.logonUsingTestContext()'
        $converted = $converted -replace 'login\.loginScreen\.LogOnForNewPFByCreateNewPassword\(', 'await loginPage.loginScreen.logOnForNewPFByCreateNewPassword('
        $converted = $converted -replace 'login\.loginScreen\.(\w+)\(', 'await loginPage.loginScreen.$1('
        
        # loader
        $converted = $converted -replace 'loader\.navigateToModule\(', 'await loaderPage.navigateToModule('
        $converted = $converted -replace 'loader\.navigateToScreen\(', 'await loaderPage.navigateToScreen('
        $converted = $converted -replace 'loader\.navigateToScreenByScreenID\(', 'await loaderPage.navigateToScreenByScreenID('
        $converted = $converted -replace 'loader\.logout\(\)', 'await loaderPage.logout()'
        $converted = $converted -replace 'loader\.(\w+)\(', 'await loaderPage.$1('
        
        # personnel.switchToXxx
        $converted = $converted -replace 'personnel\.(switchTo\w+)\(', 'await personnel.module.$1('
        
        # personnel.personnelEntry.TAB.SUBTAB.xxx - 4 levels deep first
        $converted = $converted -replace 'personnel\.personnelEntry\.personnelEntryTrainingTab\.(specialSkillsTab|certificationTab|innerTrainingTab|fTOTab)\.(\w+)\(', 'await personnel.personnelEntry.personnelEntryTrainingTab.$1.$2('
        $converted = $converted -replace 'personnel\.personnelEntry\.personnelEntryWorkRecordTab\.(workHistoryTab|injuryReportTab|medicalHistoryTab|performanceEvaluationTab|meaningfulReviewTab|cADQAEvaluationsTab)\.(\w+)\(', 'await personnel.personnelEntry.personnelEntryWorkRecordTab.$1.$2('
        
        # personnel.personnelEntry.TAB.xxx - 3 levels deep
        $converted = $converted -replace 'personnel\.personnelEntry\.(personnelEntryMainTab|personnelEntryAssignmentTab|personnelEntrySecurityTab|personnelEntryTrainingTab|personnelEntryWorkRecordTab|personnelEntryInventoryTab|personnelEntryEmergencyDataTab|personnelEntryAllowanceTab|personnelEntryTimeTab|personnelEntryPreferencesTab|personnelEntryQAFormsTab|aboutMeTab|rFIDTab)\.(\w+)\(', 'await personnel.personnelEntry.$1.$2('
        
        # personnel.personnelEntry.xxx
        $converted = $converted -replace 'personnel\.personnelEntry\.(\w+)\(', 'await personnel.personnelEntry.$1('
        
        # personnel.personnelSearch.xxx
        $converted = $converted -replace 'personnel\.personnelSearch\.(\w+)\(', 'await personnel.personnelSearch.$1('
        
        # personnel sub-entry screens with sub-tabs
        $converted = $converted -replace 'personnel\.workHistoryEntry\.(workHistoryEntryDispositionTab|approvalTab|commentsTab)\.(\w+)\(', 'await personnel.workHistoryEntry.$1.$2('
        $converted = $converted -replace 'personnel\.injuryReportEntry\.(injuryDetailTab|approvalTab)\.(\w+)\(', 'await personnel.injuryReportEntry.$1.$2('
        $converted = $converted -replace 'personnel\.performanceReviewEntry\.(approvalTab|supervisorReportTab|qaFormTab)\.(\w+)\(', 'await personnel.performanceReviewEntry.$1.$2('
        $converted = $converted -replace 'personnel\.meaningfulReviewEntry\.(approvalTab|mainTab)\.(\w+)\(', 'await personnel.meaningfulReviewEntry.$1.$2('
        
        # personnel other sub-pages
        $converted = $converted -replace 'personnel\.(workHistoryEntry|injuryReportEntry|medicalHistoryEntry|performanceReviewEntry|meaningfulReviewEntry|batchUpdateEntry|personnelBatchUpdate|injuryRptSearch|medHistorySearch|workHistorySearch|allowanceCode|allowanceCodeEntry|supervisorSearch|meaningfulReviewSearch|multiJurisRoles|productHelp|organizationChart|reportsDue|performanceReview|assignmentHistoryScreen|personnelLockDetailsScreen|injuryRptEntryApproval|workHistoryEntryApproval)\.(\w+)\(', 'await personnel.$1.$2('
        
        # settings
        $converted = $converted -replace 'settings\.(switchTo\w+)\(', 'await settings.module.$1('
        $converted = $converted -replace 'settings\.(sysParameter|approvalParameter|sharedCodes|systemParameter|customLabels)\.(\w+)\(', 'await settings.$1.$2('
        
        # activity  
        $converted = $converted -replace 'activity\.(switchTo\w+|SwitchTo\w+|pressF4\w+)\(', 'await activity.module.$1('
        $converted = $converted -replace 'activity\.popup\.(switchTo\w+)\(', 'await activity.popup.$1('
        $converted = $converted -replace 'activity\.popup\.kPICodedLookup\.(\w+)\(', 'await activity.popup.kPICodedLookup.$1('
        $converted = $converted -replace 'activity\.(activitySearch|activityEntry|activityQuickEntry|activitySearchHelpWindow)\.(\w+)\(', 'await activity.$1.$2('
        $converted = $converted -replace 'activity\.activityEntry\.(activityEntryPFTab|activityEntryOtherTab|activityEntryNamesTab|recurrencePopUp)\.(\w+)\(', 'await activity.activityEntry.$1.$2('
        
        # popup
        $converted = $converted -replace 'popup\.(switchTo\w+)\(', 'await popupPage.$1('
        $converted = $converted -replace 'popup\.kPICodedLookup\.(\w+)\(', 'await popupPage.kPICodedLookup.$1('
        $converted = $converted -replace 'popup\.acknowledge\.(\w+)\(', 'await popupPage.acknowledge.$1('
        $converted = $converted -replace 'popup\.confirm\.(\w+)\(', 'await popupPage.confirm.$1('
        $converted = $converted -replace 'popup\.treeViewHelp\.(\w+)\(', 'await popupPage.treeViewHelp.$1('
        
        # home
        $converted = $converted -replace 'home\.(switchTo\w+)\(', 'await home.module.$1('
        $converted = $converted -replace 'home\.(myHome|attachment|selectReport|signatureScreen|allImagesScreen|mobileDeviceOTPScreen|phoneBookSearch|messageSendScreen|messageSearch|messageReceivedScreen|bulletinEntry|phoneBookContactEntry|phoneBookEntry|notificationSearch|notification|reportLog|trackSearch|trackEntry|expenseEntry|help|howToVideosWindow|phoenixPoliceRMSWindow|phoenixCMSWindow|pnxReportSSRSPDFScreen|pnxCustomReportPDFScreen|printBatchScreen|viewPrintHistory)\.(\w+)\(', 'await home.$1.$2('
        
        # scheduling
        $converted = $converted -replace 'scheduling\.(switchTo\w+)\(', 'await scheduling.module.$1('
        $converted = $converted -replace 'scheduling\.(calendar|eventSchedule)\.(\w+)\(', 'await scheduling.$1.$2('
        $converted = $converted -replace 'scheduling\.calendar\.appointmentsPopup\.(\w+)\(', 'await scheduling.calendar.appointmentsPopup.$1('
        
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
        $converted = $converted -replace 'inventory\.(\w+)\.(\w+)\(', 'await inventory.$1.$2('
        
        # vehicle
        $converted = $converted -replace 'vehicle\.(switchTo\w+)\(', 'await vehicle.module.$1('
        $converted = $converted -replace 'vehicle\.(\w+)\.(\w+)\(', 'await vehicle.$1.$2('
        
        # employmentApplicants
        $converted = $converted -replace 'employmentApplicants\.(switchTo\w+)\(', 'await employmentApplicants.module.$1('
        $converted = $converted -replace 'employmentApplicants\.(\w+)\.(\w+)\(', 'await employmentApplicants.$1.$2('
        
        # Fix Playback references that slipped through
        if ($converted -match '^\s*Playback\.') { continue }
        if ($converted -match '^\s*BaseData\.') { continue }
        
        # Add await if line starts with a method call that doesn't have await yet
        if ($converted -match '^\s*[a-zA-Z]' -and $converted -notmatch '^\s*await ' -and $converted -notmatch '^\s*//' -and $converted -notmatch '^\s*const ' -and $converted -notmatch '^\s*\}' -and $converted -notmatch '^\s*\{') {
            if ($converted -match '\.\w+\(') {
                # It's a method call without await - this shouldn't happen after conversions but just in case
            }
        }
        
        $convertedLines += "      $converted"
    }
    
    # Start new group if needed
    if ($group -ne $currentGroup) {
        if ($currentGroup -ne '') {
            $output += "  });"
            $output += ""
        }
        $currentGroup = $group
        $output += "// ===================== $group ====================="
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
    $output += "  });"
}

$outputFile = "D:\Migrations\BaseProject\tests\personnel\personnel.spec.ts"
$outputDir = Split-Path $outputFile -Parent
if (-not (Test-Path $outputDir)) { New-Item -ItemType Directory -Path $outputDir -Force | Out-Null }
$output | Out-File -FilePath $outputFile -Encoding utf8

Write-Host "Total tests converted: $testCount"
Write-Host "Output written to: $outputFile"
