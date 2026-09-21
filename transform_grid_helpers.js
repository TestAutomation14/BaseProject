const fs = require('fs');

const filePath = 'src/pages/names/names.page.ts';
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

// Step 1: Find all constructor lines for classes that have `new GridHelpers(this.page)`
const constructorsNeedingGrid = new Set();
const gridHelperLines = new Set();

for (let i = 0; i < lines.length; i++) {
    if (/^\s+const gridHelpers = new GridHelpers\(this\.page\);/.test(lines[i])) {
        gridHelperLines.add(i);
        // Find the constructor this belongs to
        for (let j = i; j >= 0; j--) {
            if (/^\s+constructor\(page: Page\)/.test(lines[j])) {
                constructorsNeedingGrid.add(j);
                break;
            }
        }
    }
}

console.log(`Found ${gridHelperLines.size} local GridHelpers instantiations`);
console.log(`Found ${constructorsNeedingGrid.size} classes needing grid property`);

// Step 2: Find where to insert property declarations and constructor assignments
const propInsertions = new Map(); // line -> text
const assignInsertions = new Map(); // line -> text

for (const constructorLine of constructorsNeedingGrid) {
    // Check if this class already has a grid property (skip if so)
    let alreadyHasGrid = false;
    for (let j = constructorLine - 1; j >= 0; j--) {
        if (/^\s+readonly grid: GridHelpers;/.test(lines[j])) {
            alreadyHasGrid = true;
            break;
        }
        if (/^export class |^class /.test(lines[j])) {
            break;
        }
    }
    if (alreadyHasGrid) continue;

    // Find `readonly page: Page;` before this constructor
    let pagePropertyLine = -1;
    for (let j = constructorLine - 1; j >= 0; j--) {
        if (/^\s+readonly page: Page;/.test(lines[j])) {
            pagePropertyLine = j;
            break;
        }
        if (/^export class |^class /.test(lines[j])) {
            break;
        }
    }
    
    if (pagePropertyLine >= 0) {
        // Check if popup: PopupHelpers already exists after page
        const nextLine = lines[pagePropertyLine + 1];
        if (/^\s+readonly popup: PopupHelpers;/.test(nextLine)) {
            // Insert after popup line
            propInsertions.set(pagePropertyLine + 1, '    readonly grid: GridHelpers;');
        } else {
            // Insert after page line
            propInsertions.set(pagePropertyLine, '    readonly grid: GridHelpers;');
        }
    }

    // Find `this.page = page;` after constructor
    for (let j = constructorLine; j < constructorLine + 10; j++) {
        if (/^\s+this\.page = page;/.test(lines[j])) {
            // Check if next line is popup assignment
            const nextLine = lines[j + 1];
            if (/^\s+this\.popup = new PopupHelpers\(page\);/.test(nextLine)) {
                assignInsertions.set(j + 1, '        this.grid = new GridHelpers(page);');
            } else {
                assignInsertions.set(j, '        this.grid = new GridHelpers(page);');
            }
            break;
        }
    }
}

console.log(`Will insert ${propInsertions.size} property declarations`);
console.log(`Will insert ${assignInsertions.size} constructor assignments`);

// Step 3: Build new lines - remove `const gridHelpers = new GridHelpers(this.page);` lines
// and add property/constructor assignments
const newLines = [];
for (let i = 0; i < lines.length; i++) {
    // Skip lines that are just `const gridHelpers = new GridHelpers(this.page);`
    if (gridHelperLines.has(i)) {
        // Skip this line
        continue;
    }
    
    newLines.push(lines[i]);
    
    if (propInsertions.has(i)) {
        newLines.push(propInsertions.get(i));
    }
    if (assignInsertions.has(i)) {
        newLines.push(assignInsertions.get(i));
    }
}

// Step 4: Replace all `gridHelpers.` with `this.grid.` in method bodies
let result = newLines.join('\n');

// Replace `gridHelpers.` with `this.grid.` (only the local variable references)
result = result.replace(/\bgridHelpers\./g, 'this.grid.');

fs.writeFileSync(filePath, result, 'utf8');

const finalLines = result.split('\n').length;
console.log(`\nSummary:`);
console.log(`  Removed ${gridHelperLines.size} local instantiations`);
console.log(`  Added ${propInsertions.size} class properties`);
console.log(`  Added ${assignInsertions.size} constructor assignments`);
console.log(`  Total lines before: ${lines.length}`);
console.log(`  Total lines after: ${finalLines}`);
