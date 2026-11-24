import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I renamed the meeting 'This Could Have Been an Email' and got invited to a meeting about the rename.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, JOKE);
