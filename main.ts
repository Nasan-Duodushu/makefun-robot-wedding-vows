// One-Line Robot Wedding Vows — at most 160 characters, and funny.
// Vows in robot terms: firmware updates, factory resets, and the last
// 5% of battery as the ultimate romantic gesture.
import { writeFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "I promise to love you through every firmware update, to never factory-reset our memories, and to always give you the last 5% of my battery.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
