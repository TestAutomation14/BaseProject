$javaPath = 'D:\Phoenix2026Workspace\PhoenixBaseTest2026\src\test\java\scripts\InventoryScripts.java'
$outPath = 'D:\Migrations\BaseProject\tests\inventory\inventory.spec.ts'

$java = Get-Content $javaPath -Raw

# Trim at @AfterMethod/@AfterSuite to avoid picking up cleanup code
$afterIdx = $java.IndexOf('@AfterMethod')
if ($afterIdx -lt 0) { $afterIdx = $java.IndexOf('@AfterSuite') }
if ($afterIdx -gt 0) {
    $java = $java.Substring(0, $afterIdx)
}

# Two-pass approach: find all method positions first, then look back for @Test
$allMethods = [regex]::Matches($java, '(?s)public void\s+(\w+)\(\s*ITestContext\s+\w+\)\s*\{?')
$skipMethods = @('beforeRunSuite', 'BeforeTestMethod', 'BeforeTestMethodSchedule')

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
        # Check for bare @Test without groups
        $bareTest = [regex]::Match($lookbackText, '@Test\s*$', [System.Text.RegularExpressions.RegexOptions]::Multiline -bor [System.Text.RegularExpressions.RegexOptions]::RightToLeft)
        if (-not $bareTest.Success) {
            $bareTest = [regex]::Match($lookbackText, '@Test\s*\(\s*\)', [System.Text.RegularExpressions.RegexOptions]::RightToLeft)
        }
        if ($bareTest.Success) {
            $group = 'Ungrouped'
            Write-Host "INFO: Bare @Test for $name, assigning to Ungrouped"
        } else {
            Write-Host "WARNING: No @Test group found for $name, skipping"
            continue
        }
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
        # Handle }// comment pattern
        if ($trimmed -match '^\}//(.*)$') {
            $result += "      //$($Matches[1])"
            continue
        }
        if ($trimmed -match '^ExtentReport\.') { continue }
        if ($trimmed -match '^Browser\.Navigate') { continue }
        if ($trimmed -match '^System\.out\.') { continue }
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

        # Lines containing Playback.getTestContextAttribute -> comment out
        if ($trimmed -match 'Playback\.getTestContextAttribute') {
            $converted = $trimmed -replace ';$', ''
            $converted = $converted -replace '"', "'"
            $result += "      // $converted"
            continue
        }

        # Handle Map<> declarations
        if ($trimmed -match '^Map<') {
            $mapMatch = [regex]::Match($trimmed, '^Map<.+?>\s+(\w+)\s*=\s*(.+)$')
            if ($mapMatch.Success) {
                $varName = $mapMatch.Groups[1].Value
                $rest = $mapMatch.Groups[2].Value
                $rest = Convert-Expression $rest
                $result += "      const $varName = $rest"
                continue
            }
        }

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
        if ($inObjectIdBlock -and $trimmed -notmatch '^\w+\.\w+\.\w+\(' -and $trimmed -notmatch '^(const|await|if|for|while|return|var|let)\b' -and $trimmed -notmatch '^(inventory|names|home|settings|geo|activity|vehicle|popup|loader|login)\.' ) {
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
    $line = $line -replace '(?<!\w)popup\.switchToCodedSearchII\(\)', 'await popupPage.switchToCodedSearchII()'
    $line = $line -replace '(?<!\w)popup\.switchToTreeViewHelp\(\)', 'await popupPage.switchToTreeViewHelp()'
    $line = $line -replace '(?<!\w)popup\.switchToAcknowledge\(\)', 'await popupPage.switchToAcknowledge()'
    $line = $line -replace '(?<!\w)popup\.switchToConfirm\(\)', 'await popupPage.switchToConfirm()'
    $line = $line -replace '(?<!\w)popup\.switchToMultiFilesAttachWindow\(\)', 'await popupPage.switchToMultiFilesAttachWindow()'
    $line = $line -replace '(?<!\w)popup\.acknowledge\.(\w+)\(([^)]*)\)', 'await popupPage.acknowledge.$1($2)'
    $line = $line -replace '(?<!\w)popup\.confirm\.(\w+)\(([^)]*)\)', 'await popupPage.confirm.$1($2)'
    $line = $line -replace '(?<!\w)popup\.kPICodedLookup\.(\w+)\(([^)]*)\)', 'await popupPage.kPICodedLookup.$1($2)'
    $line = $line -replace '(?<!\w)popup\.treeViewHelp\.(\w+)\(([^)]*)\)', 'await popupPage.treeViewHelp.$1($2)'
    $line = $line -replace '(?<!\w)popup\.multiFilesAttachWindow\.(\w+)\(([^)]*)\)', 'await popupPage.multiFilesAttachWindow.$1($2)'
    $line = $line -replace '(?<!\w)popup\.codedSearch\.(\w+)\(([^)]*)\)', 'await popupPage.codedSearch.$1($2)'
    $line = $line -replace '(?<!\w)popup\.Reset\(\)', 'await popupPage.reset()'

    # --- inventory.switchTo -> inventory.module.switchTo ---
    $line = $line -replace '\binventory\.(switchTo\w+)\(([^)]*)\)', 'await inventory.module.$1($2)'

    # --- inventory 3-level: inventory.X.Y.Z() ---
    $line = $line -replace '\binventory\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await inventory.$1.$2.$3($4)'

    # --- inventory.X.Y() ---
    $line = $line -replace '\binventory\.(\w+)\.(\w+)\(([^)]*)\)', 'await inventory.$1.$2($3)'

    # --- inventory.X() ---
    $line = $line -replace '\binventory\.(\w+)\(([^)]*)\)', 'await inventory.$1($2)'

    # --- names.switchTo -> names.module.switchTo ---
    $line = $line -replace '\bnames\.(switchTo\w+)\(([^)]*)\)', 'await names.module.$1($2)'

    # --- names 3-level ---
    $line = $line -replace '\bnames\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await names.$1.$2.$3($4)'

    # --- names.X.Y() ---
    $line = $line -replace '\bnames\.(\w+)\.(\w+)\(([^)]*)\)', 'await names.$1.$2($3)'

    # --- names.X() ---
    $line = $line -replace '\bnames\.(\w+)\(([^)]*)\)', 'await names.$1($2)'

    # --- home.switchTo -> home.module.switchTo ---
    $line = $line -replace '\bhome\.(switchTo\w+)\(([^)]*)\)', 'await home.module.$1($2)'

    # --- home 3-level ---
    $line = $line -replace '\bhome\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await home.$1.$2.$3($4)'

    # --- home.X.Y() ---
    $line = $line -replace '\bhome\.(\w+)\.(\w+)\(([^)]*)\)', 'await home.$1.$2($3)'

    # --- home.X() ---
    $line = $line -replace '\bhome\.(\w+)\(([^)]*)\)', 'await home.$1($2)'

    # --- settings.switchTo -> settings.module.switchTo ---
    $line = $line -replace '\bsettings\.(switchTo\w+)\(([^)]*)\)', 'await settings.module.$1($2)'

    # --- settings 3-level ---
    $line = $line -replace '\bsettings\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await settings.$1.$2.$3($4)'

    # --- settings.X.Y() ---
    $line = $line -replace '\bsettings\.(\w+)\.(\w+)\(([^)]*)\)', 'await settings.$1.$2($3)'

    # --- settings.X() ---
    $line = $line -replace '\bsettings\.(\w+)\(([^)]*)\)', 'await settings.$1($2)'

    # --- geo.switchTo -> geo.module.switchTo ---
    $line = $line -replace '\bgeo\.(switchTo\w+)\(([^)]*)\)', 'await geo.module.$1($2)'

    # --- geo 3-level ---
    $line = $line -replace '\bgeo\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await geo.$1.$2.$3($4)'

    # --- geo.X.Y() ---
    $line = $line -replace '\bgeo\.(\w+)\.(\w+)\(([^)]*)\)', 'await geo.$1.$2($3)'

    # --- geo.X() ---
    $line = $line -replace '\bgeo\.(\w+)\(([^)]*)\)', 'await geo.$1($2)'

    # --- activity.switchTo -> activity.module.switchTo ---
    $line = $line -replace '\bactivity\.(switchTo\w+|SwitchTo\w+|swicthTo\w+)\(([^)]*)\)', 'await activity.module.$1($2)'

    # --- activity 3-level ---
    $line = $line -replace '\bactivity\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await activity.$1.$2.$3($4)'

    # --- activity.X.Y() ---
    $line = $line -replace '\bactivity\.(\w+)\.(\w+)\(([^)]*)\)', 'await activity.$1.$2($3)'

    # --- activity.X() ---
    $line = $line -replace '\bactivity\.(\w+)\(([^)]*)\)', 'await activity.$1($2)'

    # --- vehicle.switchTo -> vehicle.module.switchTo ---
    $line = $line -replace '\bvehicle\.(switchTo\w+)\(([^)]*)\)', 'await vehicle.module.$1($2)'

    # --- vehicle 3-level ---
    $line = $line -replace '\bvehicle\.(\w+)\.(\w+)\.(\w+)\(([^)]*)\)', 'await vehicle.$1.$2.$3($4)'

    # --- vehicle.X.Y() ---
    $line = $line -replace '\bvehicle\.(\w+)\.(\w+)\(([^)]*)\)', 'await vehicle.$1.$2($3)'

    # --- vehicle.X() ---
    $line = $line -replace '\bvehicle\.(\w+)\(([^)]*)\)', 'await vehicle.$1($2)'

    # --- Double quotes to single quotes ---
    $line = $line -replace '"([^"]*)"', "'`$1'"

    # --- Add await if line starts with a method call without it ---
    if ($line -match '^\s*(inventory|names|home|settings|geo|activity|vehicle|loader|loginPage|popupPage|loaderPage)\.' -and $line -notmatch '^\s*await ') {
        $line = "await $line"
    }

    # --- Thread.sleep -> // Thread.sleep ---
    if ($line -match 'Thread\.sleep') {
        $line = "// $line"
    }

    # --- Randomized.X() ---
    $line = $line -replace 'Randomized\.(\w+)\(([^)]*)\)', 'Randomized.$1($2)'

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
$output += "const testData = TestDataReader.loadData('Inventory');"
$output += ""

foreach ($grp in $groups) {
    $groupName = $grp.Name
    if ($groupName -eq '') { $groupName = 'Ungrouped' }

    $output += "test.describe('$groupName', () => {"

    foreach ($method in $grp.Group) {
        $testID = $method.TestID
        $testName = "${groupName}_${testID}"

        $output += "  test('$testName', async ({ loginPage, loaderPage, popupPage, inventory, names, home, settings, geo, activity, vehicle }) => {"
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
