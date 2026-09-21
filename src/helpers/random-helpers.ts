import { Locator } from "@playwright/test";

/**
 * Random data utility helpers (migrated from Randomized.java)
 */
export class RandomHelpers {
    // ─── Number Generation ─────────────────────────────────────────────────────

    static getRandomNumber(max: number = 9): number {
        const result = Math.floor(Math.random() * max);
        return result === 0 ? 1 : result;
    }

    static getRandomDecimalNumber(): number {
        return Math.random();
    }

    static getRandomBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Get a random number between min and max (inclusive).
     */
    static getRandomBetweenTwoNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomEvenNumber(max: number): number {
        let num = Math.floor(Math.random() * max);
        while (num % 2 !== 0) num = Math.floor(Math.random() * max);
        return num;
    }

    static getRandomOddNumber(max: number): number {
        let num = Math.floor(Math.random() * max);
        while (num % 2 === 0) num = Math.floor(Math.random() * max);
        return num;
    }

    static getRandomDropDownValue(optionsLength: number): number {
        const size = optionsLength - 1;
        const result = Math.floor(Math.random() * size);
        return result < 1 ? 1 : result;
    }

    // ─── String Generation ─────────────────────────────────────────────────────

    static randomString(length: number): string {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    static randomAlphanumeric(length: number): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    static randomAlphanumericSpecialChars(length: number): string {
        const chars = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789@!#$%&'()*+,-./:;<=>?[]_";
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    static manualPlusRandomString(prefix: string, randomLength: number): string {
        return prefix + RandomHelpers.randomString(randomLength);
    }

    static randomNumberString(length: number): string {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 9).toString();
        }
        return result;
    }

    static getRandomPhoneNumber(): string {
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += Math.floor(Math.random() * 9).toString();
        }
        return result;
    }

    static getRandomChar(): string {
        const num = Math.floor(Math.random() * 26);
        return String.fromCharCode(97 + num); // 'a' to 'z'
    }

    static randomIdentifier(length: number = 8): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    static randomNameGenerate(): string {
        const names = [
            'Shiva', 'Shakthi', 'Stalin', 'Surya', 'Mani', 'Mahesh', 'MKS',
            'Mithun', 'Kiran', 'Raj', 'Stefan', 'Rose', 'Murugan', 'Max',
            'Anderson', 'Smith', 'Sofia', 'Dark', 'Denvar', 'Chifu',
            'Cyndrala', 'Kaif', 'Khan', 'Patan', 'Salman', 'Vijay', 'karthi',
        ];
        return names[Math.floor(Math.random() * names.length)];
    }

    // ─── String Manipulation ───────────────────────────────────────────────────

    static removeCharAt(value: string, index: number): string {
        return value.slice(0, index) + value.slice(index + 1);
    }

    static removeStringByIndex(value: string, startIndex: number, endIndex: number): string {
        return value.slice(0, startIndex) + value.slice(endIndex);
    }

    static insertStringByIndex(value: string, index: number, insertValue: string): string {
        return value.slice(0, index) + insertValue + value.slice(index);
    }

    // ─── Utility ───────────────────────────────────────────────────────────────

    static getRandomFromArray<T>(arr: T[]): T {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    async selectRandomRow(table: Locator): Promise<void> {
        // 1. Identify rows using the pattern from your Java XPath + the Infragistics attribute
        // This finds <tr> tags inside a <tbody> containing "Item", or rows specifically marked type="row"
        const rowSelector = "tbody[class*='Item'] tr, tr[type='row']";
        const rows = table.locator(rowSelector);

        // 2. Wait for at least one row to appear (Equivalent to controlReadyThreadWait)
        await rows.first().waitFor({ state: 'attached', timeout: 10000 });

        const count = await rows.count();

        if (count > 0) {
            // 3. Generate random index
            const randomIndex = Math.floor(Math.random() * count);
            const randomRow = rows.nth(randomIndex);

            // 4. Click the row
            // - Playwright automatically scrolls to the row (manualIdentify.scrollIntoView is not needed)
            // - We use { force: true } to bypass invisible selection layers often found in these grids
            await randomRow.click({ force: true });

            console.log(`Successfully clicked random row at index: ${randomIndex}`);
        } else {
            throw new Error("Cannot select random row: Grid is empty.");
        }
    }
}
