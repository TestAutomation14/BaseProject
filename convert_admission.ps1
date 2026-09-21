$javaPath = 'D:\Phoenix2026Workspace\PhoenixBaseTest2026\src\test\java\scripts\AdmissionScripts.java'
$outPath = 'D:\Migrations\BaseProject\tests\admission\admission.spec.ts'

$java = Get-Content $javaPath -Raw

# Trim at @AfterMethod/@AfterSuite to avoid picking up cleanup code
$afterIdx = $java.IndexOf('@AfterMethod')
if ($afterIdx -lt 0) { $afterIdx = $java.IndexOf('@AfterSuite') }
if ($afterIdx -gt 0) {
    $java = $java.Substring(0, $afterIdx)
}

# Two-pass approach: find all method positions first, then look back for @Test
$allMethods = [regex]::Matches($java, '(?s)public void\s+(\w+)\(\s*ITestContext\s+\w+\)\s*\{?')
$skipMethods = @('beforeRunSuite')

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

    # Extract testID
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
        # Handle }// comment pattern - strip the brace, keep the comment
        if ($trimmed -match '^\}//(.*)$') {
            $result += "      //$($Matches[1])"
            continue
        }
        if ($trimmed -match '^ExtentReport\.') { continue }
        if ($trimmed -match '^Browser\.Navigate') { continue }
        if ($trimmed -match '^testContext\.setAttribute') { continue }
        if ($trimmed -match '^Playback\.') { continue }
        if ($trimmed -match 'Playback\.driver') { continue }
        if ($trimmed -match '^throws\s') { continue }
        if ($trimmed -match '^Set<') { continue }
        if ($trimmed -match '^System\.gc') { continue }
        if ($trimmed -match '^@AfterSuite') { continue }
        if ($trimmed -match "^'[^']*'") { continue }
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

        # Handle block comments
        if ($trimmed -match '^/\*') {
            $result += "      $trimmed"
            if ($trimmed -notmatch '\*/') {
                $result += "      */"
            }
            continue
        }

        # Handle already-commented lines
        if ($trimmed -match '^//') {
            $converted = $trimmed
            $converted = $converted -replace '"', "'"
            $result += "      $converted"
            continue
        }

        # objectIdentification -> comment out
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
    $line = $line -replace 'login\.loginScreen\.(\w+)\(([^)]*)\)', 'await loginPage.loginScreen.$1($2)'
    $line = $line -replace 'login\.Reset\(\)', 'await loginPage.reset()'

    # --- loader ---
    $line = $line -replace 'loader\.(\w+)\(([^)]*)\)', 'await loaderPage.$1($2)'

    # --- popup (standalone) ---
    $line = $line -replace '(?<!\w)popup\.switchToCodedSearch\(\)', 'await popupPage.switchToCodedSearch()'
    $line = $line -replace '(?<!\w)popup\.switchToTreeViewHelp\(\)', 'await popupPage.switchToTreeViewHelp()'
    $line = $line -replace '(?<!\w)popup\.acknowledge\.(\w+)\(([^)]*)\)', 'await popupPage.acknowledge.$1($2)'
    $line = $line -replace '(?<!\w)popup\.confirm\.(\w+)\(([^)]*)\)', 'await popupPage.confirm.$1($2)'
    $line = $line -replace '(?<!\w)popup\.kPICodedLookup\.(\w+)\(([^)]*)\)', 'await popupPage.kPICodedLookup.$1($2)'
    $line = $line -replace '(?<!\w)popup\.Reset\(\)', 'await popupPage.reset()'

    # --- admission.switchTo -> admission.module.switchTo ---
    $line = $line -replace '\badmission\.(switchTo\w+)\(([^)]*)\)', 'await admission.module.$1($2)'

    # --- admission 3-level: admission.admissionEntry.chargeTab.X() ---
    $line = $line -replace '\badmission\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await admission.$1.$2.$3($4)'

    # --- admission.X.Y() -> await admission.X.Y() ---
    $line = $line -replace '\badmission\.(\w+)\.(\w+)\(([^)]*)\)', 'await admission.$1.$2($3)'

    # --- admission.X() -> await admission.X() (single level like Reset) ---
    $line = $line -replace '\badmission\.(\w+)\(([^)]*)\)', 'await admission.$1($2)'

    # --- home.switchTo -> home.module.switchTo ---
    $line = $line -replace '\bhome\.(switchTo\w+)\(([^)]*)\)', 'await home.module.$1($2)'

    # --- home 3-level ---
    $line = $line -replace '\bhome\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await home.$1.$2.$3($4)'

    # --- home.X.Y() ---
    $line = $line -replace '\bhome\.(\w+)\.(\w+)\(([^)]*)\)', 'await home.$1.$2($3)'

    # --- names.switchTo -> names.module.switchTo ---
    $line = $line -replace '\bnames\.(switchTo\w+)\(([^)]*)\)', 'await names.module.$1($2)'

    # --- names.X.Y() ---
    $line = $line -replace '\bnames\.(\w+)\.(\w+)\(([^)]*)\)', 'await names.$1.$2($3)'

    # --- names.X() ---
    $line = $line -replace '\bnames\.(\w+)\(([^)]*)\)', 'await names.$1($2)'

    # --- settings.switchTo -> settings.module.switchTo ---
    $line = $line -replace '\bsettings\.(switchTo\w+)\(([^)]*)\)', 'await settings.module.$1($2)'

    # --- settings 3-level ---
    $line = $line -replace '\bsettings\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await settings.$1.$2.$3($4)'

    # --- settings.X.Y() ---
    $line = $line -replace '\bsettings\.(\w+)\.(\w+)\(([^)]*)\)', 'await settings.$1.$2($3)'

    # --- personnel.switchTo -> personnel.module.switchTo ---
    $line = $line -replace '\bpersonnel\.(switchTo\w+)\(([^)]*)\)', 'await personnel.module.$1($2)'

    # --- personnel.X.Y() ---
    $line = $line -replace '\bpersonnel\.(\w+)\.(\w+)\(([^)]*)\)', 'await personnel.$1.$2($3)'

    # --- facilityManagement.switchTo -> facilityManagement.module.switchTo ---
    $line = $line -replace '\bfacilityManagement\.(switchTo\w+)\(([^)]*)\)', 'await facilityManagement.module.$1($2)'

    # --- facilityManagement 3-level ---
    $line = $line -replace '\bfacilityManagement\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await facilityManagement.$1.$2.$3($4)'

    # --- facilityManagement.X.Y() ---
    $line = $line -replace '\bfacilityManagement\.(\w+)\.(\w+)\(([^)]*)\)', 'await facilityManagement.$1.$2($3)'

    # --- facilityManagement.X() ---
    $line = $line -replace '\bfacilityManagement\.(\w+)\(([^)]*)\)', 'await facilityManagement.$1($2)'

    # --- geo.switchTo -> geo.module.switchTo ---
    $line = $line -replace '\bgeo\.(switchTo\w+)\(([^)]*)\)', 'await geo.module.$1($2)'

    # --- geo.X.Y() ---
    $line = $line -replace '\bgeo\.(\w+)\.(\w+)\(([^)]*)\)', 'await geo.$1.$2($3)'

    # --- geo.X() (like geo.Reset) ---
    $line = $line -replace '\bgeo\.(\w+)\(([^)]*)\)', 'await geo.$1($2)'

    # --- activity.switchTo/SwitchTo/swicthTo -> activity.module.switchTo ---
    $line = $line -replace '\bactivity\.(switchTo\w+|SwitchTo\w+|swicthTo\w+)\(([^)]*)\)', 'await activity.module.$1($2)'

    # --- activity 3-level ---
    $line = $line -replace '\bactivity\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await activity.$1.$2.$3($4)'

    # --- activity.X.Y() ---
    $line = $line -replace '\bactivity\.(\w+)\.(\w+)\(([^)]*)\)', 'await activity.$1.$2($3)'

    # --- activity.X() ---
    $line = $line -replace '\bactivity\.(\w+)\(([^)]*)\)', 'await activity.$1($2)'

    # --- qA.SwitchTo/switchTo -> qA.module.SwitchTo/switchTo ---
    $line = $line -replace '\bqA\.(switchTo\w+|SwitchTo\w+)\(([^)]*)\)', 'await qA.module.$1($2)'

    # --- qA.X.Y() ---
    $line = $line -replace '\bqA\.(\w+)\.(\w+)\(([^)]*)\)', 'await qA.$1.$2($3)'

    # --- qA.X() ---
    $line = $line -replace '\bqA\.(\w+)\(([^)]*)\)', 'await qA.$1($2)'

    # --- Double quotes to single quotes ---
    $line = $line -replace '"([^"]*)"', "'`$1'"

    # --- Add await if line starts with a method call without it ---
    if ($line -match '^\s*(admission|home|settings|names|personnel|facilityManagement|geo|activity|qA|loader|loginPage|popupPage|loaderPage)\.' -and $line -notmatch '^\s*await ') {
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
$output += "const testData = TestDataReader.loadData('Admission');"
$output += ""

foreach ($grp in $groups) {
    $groupName = $grp.Name
    if ($groupName -eq '') { $groupName = 'Ungrouped' }

    $output += "test.describe('$groupName', () => {"

    foreach ($method in $grp.Group) {
        $testID = $method.TestID
        $testName = "${groupName}_${testID}"

        $output += "  test('$testName', async ({ loginPage, loaderPage, popupPage, admission, home, settings, names, personnel, facilityManagement, geo, activity, qA }) => {"
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
