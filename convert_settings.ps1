$javaPath = 'D:\Phoenix2026Workspace\PhoenixBaseTest2026\src\test\java\scripts\SettingsScripts.java'
$outPath = 'D:\Migrations\BaseProject\tests\settings\settings.spec.ts'

$java = Get-Content $javaPath -Raw

# Trim at @AfterMethod/@AfterSuite to avoid picking up cleanup code
$afterIdx = $java.IndexOf('@AfterMethod')
if ($afterIdx -lt 0) { $afterIdx = $java.IndexOf('@AfterSuite') }
if ($afterIdx -gt 0) {
    $java = $java.Substring(0, $afterIdx)
}

# Two-pass approach: find all method positions first, then look back for @Test
$allMethods = [regex]::Matches($java, '(?s)public void (\w+)\(\s*ITestContext\s+\w+\)\s*\{?')
$skipMethods = @('beforeRunSuite','JobStatusShouldBeShownAsSuccessInJobsScreen_289924')

Write-Host "Found $($allMethods.Count) total methods, skipping $($skipMethods.Count) setup/commented"

# Build method data
$methods = @()
for ($i = 0; $i -lt $allMethods.Count; $i++) {
    $m = $allMethods[$i]
    $name = $m.Groups[1].Value

    if ($name -in $skipMethods) { continue }

    # Look backwards from method position to find @Test(groups = {"xxx"}) or @Test(groups = "xxx")
    $lookbackStart = [Math]::Max(0, $m.Index - 1000)
    $lookbackText = $java.Substring($lookbackStart, $m.Index - $lookbackStart)
    # Try array format first: {"groupName"}, then bare string: "groupName"
    $groupMatch = [regex]::Match($lookbackText, '@Test\s*\(groups\s*=\s*\{\s*"([^"]*)"', [System.Text.RegularExpressions.RegexOptions]::RightToLeft)
    if (-not $groupMatch.Success) {
        $groupMatch = [regex]::Match($lookbackText, '@Test\s*\(groups\s*=\s*"([^"]*)"', [System.Text.RegularExpressions.RegexOptions]::RightToLeft)
    }
    if ($groupMatch.Success) {
        $group = $groupMatch.Groups[1].Value
    } else {
        Write-Host "WARNING: No @Test group found for $name, skipping"
        continue
    }

    $startIdx = $m.Index + $m.Length

    # Find body end: next public void or end of file
    if ($i -lt $allMethods.Count - 1) {
        $endIdx = $allMethods[$i + 1].Index
    } else {
        $endIdx = $java.Length
    }

    $body = $java.Substring($startIdx, $endIdx - $startIdx)

    # Extract testID - handle both testContext and testcontext (case-insensitive)
    $idMatch = [regex]::Match($body, '(?i)testContext\.setAttribute\("testID",\s*"([^"]+)"\)')
    if ($idMatch.Success) {
        $testID = $idMatch.Groups[1].Value
    } else {
        $testID = $name
    }

    $methods += [PSCustomObject]@{
        Group  = $group
        Name   = $name
        TestID = $testID
        Body   = $body
    }
}

Write-Host "Extracted $($methods.Count) test methods"

function Convert-Body($body) {
    $lines = $body -split "`n"
    $result = @()
    $inObjectIdBlock = $false

    foreach ($rawLine in $lines) {
        $line = $rawLine.TrimEnd("`r")
        $trimmed = $line.Trim()

        # Skip lines
        if ($trimmed -eq '' -or $trimmed -eq '{' -or $trimmed -eq '}' -or $trimmed -eq '};') { continue }
        if ($trimmed -match '^ExtentReport\.') { continue }
        if ($trimmed -match '^Browser\.Navigate') { continue }
        if ($trimmed -match '^testContext\.setAttribute') { continue }
        if ($trimmed -match '^Playback\.') { continue }
        if ($trimmed -match 'Playback\.driver') { continue }
        if ($trimmed -match '^throws\s') { continue }
        if ($trimmed -match '^Set<') { continue }
        if ($trimmed -match '^System\.gc') { continue }
        if ($trimmed -match '^@AfterSuite') { continue }
        if ($trimmed -match "^'[^']*'") { continue }  # leftover group name strings
        if ($trimmed -match '^\}\)$') { continue }
        if ($trimmed -match '^try\s*\{') { continue }
        if ($trimmed -match '^\}\s*catch') { continue }
        if ($trimmed -match '^catch\s*\(') { continue }
        if ($trimmed -match '^e\.printStackTrace') { continue }
        if ($trimmed -match '^@Test') { continue }
        if ($trimmed -match '^public void') { continue }
        if ($trimmed -match '^ITestContext') { continue }
        if ($trimmed -match '^\*') { continue }
        if ($trimmed -match '^/\*\*') { continue }
        if ($trimmed -match '^\*/') { continue }

        # Handle block comments - pass through as-is, close them
        if ($trimmed -match '^/\*') {
            $result += "      $trimmed"
            # If not self-closing, add closing
            if ($trimmed -notmatch '\*/') {
                $result += "      */"
            }
            continue
        }

        # Handle already-commented lines
        if ($trimmed -match '^//') {
            $converted = $trimmed
            # Convert double quotes to single in comments too
            $converted = $converted -replace '"', "'"
            $result += "      $converted"
            continue
        }

        # objectIdentification -> comment out (at start or in assignment)
        if ($trimmed -match 'objectIdentification\.') {
            $inObjectIdBlock = $true
            $converted = $trimmed -replace ';$', ''
            $converted = $converted -replace '"', "'"
            $result += "      // $converted"
            continue
        }

        # Continuation of multi-line objectIdentification calls
        if ($inObjectIdBlock -and $trimmed -notmatch '^\w+\.' -and $trimmed -notmatch '^(const|await|if|for|while|return|var|let)\b') {
            $converted = $trimmed -replace ';$', ''
            $converted = $converted -replace '"', "'"
            $result += "      // $converted"
            continue
        }
        $inObjectIdBlock = $false

        # Variable declarations: String/int/boolean x = ...
        if ($trimmed -match '^(String|int|boolean)\s+(\w+)\s*=\s*(.+)$') {
            $varName = $Matches[2]
            $rest = $Matches[3]
            $rest = Convert-Expression $rest
            $result += "      const $varName = $rest"
            continue
        }

        # List variable declarations
        if ($trimmed -match '^List<\w+>\s+(\w+)\s*=\s*(.+)$') {
            $varName = $Matches[1]
            $rest = $Matches[2]
            $rest = Convert-Expression $rest
            $result += "      const $varName = $rest"
            continue
        }

        # Regular method calls
        $converted = Convert-Expression $trimmed
        $result += "      $converted"
    }

    return $result
}

function Convert-Expression($expr) {
    $line = $expr

    # Remove trailing semicolons
    $line = $line -replace ';\s*$', ''

    # --- login ---
    $line = $line -replace 'login\.loginScreen\.Logon\(\)', 'await loginPage.loginScreen.logon()'
    $line = $line -replace 'login\.loginScreen\.(\w+)\(\)', 'await loginPage.loginScreen.$1()'
    $line = $line -replace 'login\.loginScreen\.(\w+)\(([^)]+)\)', 'await loginPage.loginScreen.$1($2)'
    $line = $line -replace 'login\.Reset\(\)', 'await loginPage.reset()'

    # --- loader ---
    $line = $line -replace 'loader\.(\w+)\(([^)]*)\)', 'await loaderPage.$1($2)'

    # --- popup (standalone, NOT settings.popup) ---
    # Must come before settings.popup conversion
    $line = $line -replace '(?<!settings\.)popup\.switchToCodedSearch\(\)', 'await popupPage.switchToCodedSearch()'
    $line = $line -replace '(?<!settings\.)popup\.switchToTreeViewHelp\(\)', 'await popupPage.switchToTreeViewHelp()'
    $line = $line -replace '(?<!settings\.)popup\.acknowledge\.(\w+)\(([^)]*)\)', 'await popupPage.acknowledge.$1($2)'
    $line = $line -replace '(?<!settings\.)popup\.confirm\.(\w+)\(([^)]*)\)', 'await popupPage.confirm.$1($2)'
    $line = $line -replace '(?<!settings\.)popup\.kPICodedLookup\.(\w+)\(([^)]*)\)', 'await popupPage.kPICodedLookup.$1($2)'
    $line = $line -replace '(?<!settings\.)popup\.treeViewHelp\.(\w+)\(([^)]*)\)', 'await popupPage.treeViewHelp.$1($2)'

    # --- settings.popup -> popupPage ---
    $line = $line -replace 'settings\.popup\.acknowledge\.(\w+)\(([^)]*)\)', 'await popupPage.acknowledge.$1($2)'
    $line = $line -replace 'settings\.popup\.confirm\.(\w+)\(([^)]*)\)', 'await popupPage.confirm.$1($2)'

    # --- home.switchTo -> home.module.switchTo ---
    $line = $line -replace '\bhome\.(switchTo\w+)\(([^)]*)\)', 'await home.module.$1($2)'

    # --- home 3-level: home.myHome.myReportsTab.X() ---
    $line = $line -replace '\bhome\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await home.$1.$2.$3($4)'

    # --- home.X.Y() -> await home.X.Y() (sub-objects) ---
    $line = $line -replace '\bhome\.(\w+)\.(\w+)\(([^)]*)\)', 'await home.$1.$2($3)'

    # --- names.switchTo -> names.module.switchTo ---
    $line = $line -replace '\bnames\.(switchTo\w+)\(([^)]*)\)', 'await names.module.$1($2)'

    # --- names.X.Y() -> await names.X.Y() ---
    $line = $line -replace '\bnames\.(\w+)\.(\w+)\(([^)]*)\)', 'await names.$1.$2($3)'

    # --- scheduling.switchTo -> scheduling.module.switchTo ---
    $line = $line -replace '\bscheduling\.(switchTo\w+)\(([^)]*)\)', 'await scheduling.module.$1($2)'

    # --- scheduling 3-level: scheduling.calendar.appointmentsPopup.X() ---
    $line = $line -replace 'scheduling\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await scheduling.$1.$2.$3($4)'

    # --- scheduling.X.Y() -> await scheduling.X.Y() ---
    $line = $line -replace 'scheduling\.(\w+)\.(\w+)\(([^)]*)\)', 'await scheduling.$1.$2($3)'

    # --- settings.switchTo -> settings.module.switchTo ---
    $line = $line -replace 'settings\.(switchTo\w+)\(([^)]*)\)', 'await settings.module.$1($2)'

    # --- settings 3-level nested: settings.X.Y.Z() ---
    # terminalEntry tabs, cFSCodeEntry tabs, jobEntry tabs, juris tabs, etc.
    $line = $line -replace 'settings\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await settings.$1.$2.$3($4)'

    # --- settings.X.Y() -> await settings.X.Y() ---
    $line = $line -replace 'settings\.(\w+)\.(\w+)\(([^)]*)\)', 'await settings.$1.$2($3)'

    # --- geo.switchTo -> geo.module.switchTo ---
    $line = $line -replace 'geo\.(switchTo\w+)\(([^)]*)\)', 'await geo.module.$1($2)'
    # --- geo.X.Y() -> await geo.X.Y() ---
    $line = $line -replace 'geo\.(\w+)\.(\w+)\(([^)]*)\)', 'await geo.$1.$2($3)'

    # --- activity.SwitchTo/switchTo -> activity.module.switchTo ---
    $line = $line -replace 'activity\.(switchTo\w+|SwitchTo\w+)\(([^)]*)\)', 'await activity.module.$1($2)'
    # --- activity.X.Y() -> await activity.X.Y() ---
    $line = $line -replace 'activity\.(\w+)\.(\w+)\(([^)]*)\)', 'await activity.$1.$2($3)'

    # --- qa.SwitchTo/switchTo -> qa.module.switchTo ---
    $line = $line -replace 'qa\.(switchTo\w+|SwitchTo\w+)\(([^)]*)\)', 'await qa.module.$1($2)'
    # --- qa.X.Y() -> await qa.X.Y() ---
    $line = $line -replace 'qa\.(\w+)\.(\w+)\(([^)]*)\)', 'await qa.$1.$2($3)'

    # --- Double quotes to single quotes ---
    $line = $line -replace '"([^"]*)"', "'`$1'"

    # --- Add await if line starts with a method call without it ---
    if ($line -match '^\s*(settings|home|scheduling|names|loader|loginPage|popupPage|loaderPage|geo|activity|qa)\.' -and $line -notmatch '^\s*await ') {
        $line = "await $line"
    }

    # --- Thread.sleep -> // Thread.sleep ---
    if ($line -match 'Thread\.sleep') {
        $line = "// $line"
    }

    # --- Fix double await ---
    $line = $line -replace 'await await ', 'await '

    return $line
}

# Group methods by group name
$groups = $methods | Group-Object -Property Group

# Build output
$output = @()
$output += "// @ts-nocheck"
$output += "import { test } from '../../src/fixtures/test-fixtures';"
$output += "import { TestDataReader } from '../../src/data/test-data-reader';"
$output += "import { withTestContext } from '../../src/data/test-context';"
$output += ""
$output += "const testData = TestDataReader.loadData('Settings');"
$output += ""

foreach ($grp in $groups) {
    $groupName = $grp.Name
    if ($groupName -eq '') { $groupName = 'Ungrouped' }

    $output += "test.describe('$groupName', () => {"

    foreach ($method in $grp.Group) {
        $testID = $method.TestID
        $testName = "${groupName}_${testID}"

        $output += "  test('$testName', async ({ loginPage, loaderPage, popupPage, settings, home, scheduling, names, geo, activity }) => {"
        $output += "    await withTestContext(testData, '$testID', async () => {"

        $bodyLines = Convert-Body $method.Body
        $output += $bodyLines

        $output += "    });"
        $output += "  });"
        $output += ""
    }

    $output += "});"
    $output += ""
}

# Create output directory
$outDir = Split-Path $outPath
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

# Write output
$output | Set-Content $outPath -Encoding UTF8

Write-Host "Generated $outPath"
Write-Host "Total tests: $($methods.Count)"
Write-Host "Total groups: $($groups.Count)"
Write-Host "Total lines: $($output.Count)"
