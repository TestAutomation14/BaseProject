import * as fs from "fs";
import * as path from "path";

export class Properties {
  private static props: Record<string, string> = {};

  static load(env: string) {
    const filePath = path.resolve(`src/config/test.properties`);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Properties file not found: ${filePath}`);
    }

    const content = fs.readFileSync(filePath, "utf-8");

    this.props = {};

    content.split(/\r?\n/).forEach((line: string) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;

      const [key, ...rest] = trimmed.split("=");
      this.props[key.trim()] = rest.join("=").trim();
    });

    console.log(`✅ Loaded properties from: ${filePath}`);
  }

  static get(key: string): string {
    return this.props[key] ?? "";
  }
}
