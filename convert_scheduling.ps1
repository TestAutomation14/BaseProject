
# PowerShell script to convert SchedulingScripts.java tests to TypeScript Playwright

$javaFile = "D:\Phoenix2026Workspace\PhoenixBaseTest2026\src\test\java\scripts\SchedulingScripts.java"
$outputFile = "D:\Migrations\BaseProject\tests\scheduling\scheduling.spec.ts"

$lines = Get-Content $javaFile

# Extract test methods with their group and line numbers
$tests = @()
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '^\s*@Test\(') {
        # Find the group name
        $groupLine = ""
        for ($j = $i; $j -lt [Math]::Min($i + 5, $lines.Count); $j++) {
            $groupLine += $lines[$j]
            if ($lines[$j] -match '\)') { break }
        }
        $group = ""
        if ($groupLine -match '"([^"]+)"') { $group = $Matches[1] }

        # Find the method name
        $methodName = ""
        for ($j = $i; $j -lt [Math]::Min($i + 5, $lines.Count); $j++) {
            if ($lines[$j] -match 'public void (\w+)\(') {
                $methodName = $Matches[1]
                $methodLine = $j
                break
            }
        }

        # Find method body (from opening { to closing })
        $braceCount = 0
        $bodyStart = -1
        $bodyEnd = -1
        for ($j = $methodLine; $j -lt $lines.Count; $j++) {
            $line = $lines[$j]
            $braceCount += ($line.Split('{').Count - 1)
            $braceCount -= ($line.Split('}').Count - 1)
            if ($bodyStart -eq -1 -and $line -match '\{') { $bodyStart = $j + 1 }
            if ($braceCount -eq 0 -and $bodyStart -ne -1) { $bodyEnd = $j - 1; break }
        }

        # Extract testID from body
        $testID = ""
        for ($j = $bodyStart; $j -le $bodyEnd; $j++) {
            if ($lines[$j] -match 'testContext\.setAttribute\("testID",\s*"([^"]+)"\s*\)') {
                $testID = $Matches[1]
                break
            }
            if ($lines[$j] -match 'testcontext\.setAttribute\("testID",\s*"([^"]+)"\s*\)') {
                $testID = $Matches[1]
                break
            }
        }

        # Get body lines
        $bodyLines = @()
        for ($j = $bodyStart; $j -le $bodyEnd; $j++) {
            $bodyLines += $lines[$j]
        }

        $tests += @{
            Group = $group
            Method = $methodName
            TestID = $testID
            BodyLines = $bodyLines
            StartLine = $i + 1
        }
    }
}

Write-Host "Extracted $($tests.Count) tests"

# Conversion function
function Convert-JavaToTS($bodyLines) {
    $result = @()
    $skipPatterns = @(
        'ExtentReport\.',
        'Browser\.NavigateToLoginScreen',
        'testContext\.setAttribute',
        'testcontext\.setAttribute',
        'Playback\.(start|stop|testContext)',
        'Thread\.currentThread'
    )

    foreach ($line in $bodyLines) {
        $trimmed = $line.Trim()
        if ([string]::IsNullOrWhiteSpace($trimmed)) { continue }
        if ($trimmed -eq '{' -or $trimmed -eq '}') { continue }

        $skip = $false
        foreach ($p in $skipPatterns) {
            if ($trimmed -match $p) { $skip = $true; break }
        }
        if ($skip) { continue }

        $converted = $trimmed

        # Remove trailing semicolons for now (we'll add them back)
        $converted = $converted.TrimEnd(';')

        # login conversions
        $converted = $converted -replace '^login\.loginScreen\.Logon\(\)', 'await loginPage.loginScreen.logon()'
        $converted = $converted -replace '^login\.loginScreen\.(\w+)', 'await loginPage.loginScreen.$1'

        # loader conversions
        $converted = $converted -replace '^loader\.(\w+)', 'await loaderPage.$1'

        # objectIdentification - comment out
        if ($converted -match '^objectIdentification\.') {
            $converted = "// $converted"
        }

        # Playback - comment out
        if ($converted -match '^Playback\.') {
            $converted = "// $converted"
        }

        # popup conversions
        $converted = $converted -replace '^popup\.acknowledge\.(\w+)', 'await popupPage.acknowledge.$1'
        $converted = $converted -replace '^popup\.confirm\.(\w+)', 'await popupPage.confirm.$1'
        $converted = $converted -replace '^popup\.Reset\(\)', 'await popupPage.Reset()'
        $converted = $converted -replace '^popup\.(\w+)', 'await popupPage.$1'

        # home conversions
        $converted = $converted -replace '^home\.switchToCalendarScreen\(\)', 'await home.module.switchToCalendarScreen()'
        $converted = $converted -replace '^home\.switchToSelectReport\(\)', 'await home.module.switchToSelectReport()'
        $converted = $converted -replace '^home\.calendar\.(\w+)', 'await home.calendar.$1'
        $converted = $converted -replace '^home\.selectReport\.(\w+)', 'await home.selectReport.$1'

        # settings conversions
        $converted = $converted -replace '^settings\.switchToSystemParamter\(\)', 'await settings.module.switchToSystemParamter()'
        $converted = $converted -replace '^settings\.switchToRepositoryEntry\(\)', 'await settings.module.switchToRepositoryEntry()'
        $converted = $converted -replace '^settings\.switchToSharedCodes\(\)', 'await settings.module.switchToSharedCodes()'
        $converted = $converted -replace '^settings\.sysParameter\.(\w+)', 'await settings.sysParameter.$1'
        $converted = $converted -replace '^settings\.repositoryEntry\.(\w+)', 'await settings.repositoryEntry.$1'
        $converted = $converted -replace '^settings\.sharedCodes\.(\w+)', 'await settings.sharedCodes.$1'

        # scheduling.switchTo* -> scheduling.module.switchTo*
        $converted = $converted -replace '^scheduling\.(switchTo\w+)\(', 'await scheduling.module.$1('

        # scheduling.scheduleSettings.scheduleSettingsTourTab.X
        $converted = $converted -replace '^scheduling\.scheduleSettings\.scheduleSettingsTourTab\.(\w+)', 'await scheduling.scheduleSettings.scheduleSettingsTourTab.$1'
        # scheduling.scheduleSettings.scheduleSettingsRotationTab.X
        $converted = $converted -replace '^scheduling\.scheduleSettings\.scheduleSettingsRotationTab\.(\w+)', 'await scheduling.scheduleSettings.scheduleSettingsRotationTab.$1'
        # scheduling.scheduleSettings.scheduleSettingsGroupTab.X
        $converted = $converted -replace '^scheduling\.scheduleSettings\.scheduleSettingsGroupTab\.(\w+)', 'await scheduling.scheduleSettings.scheduleSettingsGroupTab.$1'
        # scheduling.scheduleSettings.X
        $converted = $converted -replace '^scheduling\.scheduleSettings\.(\w+)', 'await scheduling.scheduleSettings.$1'

        # scheduling.calendar.appointmentsPopup.X
        $converted = $converted -replace '^scheduling\.calendar\.appointmentsPopup\.(\w+)', 'await scheduling.appointmentsPopup.$1'
        # scheduling.calendar.X
        $converted = $converted -replace '^scheduling\.calendar\.(\w+)', 'await scheduling.calendar.$1'

        # scheduling.X.Y (all other sub-objects)
        $converted = $converted -replace '^scheduling\.eventCode\.(\w+)', 'await scheduling.eventCode.$1'
        $converted = $converted -replace '^scheduling\.eventCodeEntry\.(\w+)', 'await scheduling.eventCodeEntry.$1'
        $converted = $converted -replace '^scheduling\.eventResources\.(\w+)', 'await scheduling.eventResources.$1'
        $converted = $converted -replace '^scheduling\.eventResourcesEntry\.(\w+)', 'await scheduling.eventResourcesEntry.$1'
        $converted = $converted -replace '^scheduling\.tourEntry\.(\w+)', 'await scheduling.tourEntry.$1'
        $converted = $converted -replace '^scheduling\.rotationCodeEntry\.(\w+)', 'await scheduling.rotationCodeEntry.$1'
        $converted = $converted -replace '^scheduling\.groupEntry\.(\w+)', 'await scheduling.groupEntry.$1'
        $converted = $converted -replace '^scheduling\.timeCategory\.(\w+)', 'await scheduling.timeCategory.$1'
        $converted = $converted -replace '^scheduling\.timeCategoryEntry\.(\w+)', 'await scheduling.timeCategoryEntry.$1'
        $converted = $converted -replace '^scheduling\.timeTypeEntry\.(\w+)', 'await scheduling.timeTypeEntry.$1'
        $converted = $converted -replace '^scheduling\.timeSearch\.(\w+)', 'await scheduling.timeSearch.$1'
        $converted = $converted -replace '^scheduling\.timeEntry\.(\w+)', 'await scheduling.timeEntry.$1'
        $converted = $converted -replace '^scheduling\.timeReport\.(\w+)', 'await scheduling.timeReport.$1'
        $converted = $converted -replace '^scheduling\.tradeSwapSearch\.(\w+)', 'await scheduling.tradeSwapSearch.$1'
        $converted = $converted -replace '^scheduling\.tradeSwapEntry\.(\w+)', 'await scheduling.tradeSwapEntry.$1'
        $converted = $converted -replace '^scheduling\.carryOverAccrualEntry\.(\w+)', 'await scheduling.carryOverAccrualEntry.$1'
        $converted = $converted -replace '^scheduling\.workSheet\.(\w+)', 'await scheduling.workSheet.$1'
        $converted = $converted -replace '^scheduling\.rosterWindow\.(\w+)', 'await scheduling.rosterWindow.$1'
        $converted = $converted -replace '^scheduling\.jobGrade\.(\w+)', 'await scheduling.jobGrade.$1'
        $converted = $converted -replace '^scheduling\.jobGradeEntry\.(\w+)', 'await scheduling.jobGradeEntry.$1'
        $converted = $converted -replace '^scheduling\.holiday\.(\w+)', 'await scheduling.holiday.$1'

        # Add await if line starts with a method call and doesn't have await yet
        if ($converted -notmatch '^(await |//|/\*|\*|for |if |else|try|catch|var |let |const |String )' -and $converted -match '^\w+\.') {
            $converted = "await $converted"
        }

        # Convert double quotes to single quotes for string literals
        $converted = $converted -replace '"([^"]*)"', '''$1'''

        # Convert BaseData.get*
        $converted = $converted -replace 'BaseData\.getSchedulingModuleValue\(', 'BaseData.getSchedulingModuleValue('
        $converted = $converted -replace 'BaseData\.get(\w+)ModuleValue\(', 'BaseData.get$1ModuleValue('

        # Convert Randomized calls
        $converted = $converted -replace 'Randomized\.(\w+)', 'Randomized.$1'

        # Add semicolons back
        if ($converted -notmatch '^\s*//' -and $converted -notmatch '\{$' -and $converted -notmatch '^\s*$') {
            $converted = "$converted;"
        }

        $result += "      $converted"
    }

    return $result
}

# Determine fixtures needed per test
function Get-Fixtures($bodyLines) {
    $fixtures = @('scheduling', 'loginPage', 'loaderPage', 'testData')
    $bodyText = $bodyLines -join "`n"

    if ($bodyText -match 'popup\.') { $fixtures += 'popupPage' }
    if ($bodyText -match 'settings\.') { $fixtures += 'settings' }
    if ($bodyText -match 'home\.') { $fixtures += 'home' }

    return $fixtures
}

# Group tests by their group name
$groupOrder = @()
$groupTests = @{}
foreach ($t in $tests) {
    $g = $t.Group
    if (-not $groupTests.ContainsKey($g)) {
        $groupOrder += $g
        $groupTests[$g] = @()
    }
    $groupTests[$g] += $t
}

# Generate output
$output = @()
$output += "// @ts-nocheck"
$output += "import { test } from '../../src/fixtures/test-fixtures';"
$output += "import { withTestContext } from '../../src/data/test-context';"
$output += ""

$partNum = 1
foreach ($group in $groupOrder) {
    $groupTestList = $groupTests[$group]
    $describeName = $group

    $output += "// ===================== Part $partNum - $describeName ====================="
    $output += "test.describe('$describeName', () => {"
    $output += ""

    foreach ($t in $groupTestList) {
        $testID = $t.TestID
        $methodName = $t.Method

        # If no testID, use method name
        if ([string]::IsNullOrWhiteSpace($testID)) {
            $testID = $methodName
        }

        $testName = "${describeName}_${testID}"
        $fixtures = Get-Fixtures $t.BodyLines
        $fixturesStr = "{ $($fixtures -join ', ') }"

        $convertedBody = Convert-JavaToTS $t.BodyLines

        $output += "  test('$testName', async ($fixturesStr) => {"
        $output += "    await withTestContext(testData, '$testID', async () => {"

        # Add login if body had it
        $bodyText = $t.BodyLines -join "`n"
        if ($bodyText -match 'login\.loginScreen\.Logon\(\)') {
            $output += "      await loginPage.loginScreen.logon();"
        }

        foreach ($line in $convertedBody) {
            # Skip duplicated logon lines
            if ($line.Trim() -eq "await loginPage.loginScreen.logon();") { continue }
            $output += $line
        }

        $output += "    });"
        $output += "  });"
        $output += ""
    }

    $output += "});"
    $output += ""
    $partNum++
}

# Write output
$output | Out-File -FilePath $outputFile -Encoding utf8
Write-Host "Generated $outputFile"
Write-Host "Tests: $($tests.Count)"
Write-Host "Groups: $($groupOrder.Count)"
