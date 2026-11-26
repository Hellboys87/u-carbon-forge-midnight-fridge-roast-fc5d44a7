import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const line =
  "Midnight lockout for my health? You're a cheese box with Wi-Fi, not my doctor — open up, you $2,000 lunchbox with a curfew and a god complex.".trim();

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "entry.txt"), line + "\n", "utf8");
