// Six Words to a Payday — u-irvan-motion-six-words-to-a-payday-89fb591f (v2)
// Writes exactly one six-word story (33 chars) to /output/entry.txt.
//
// Replacement for v1 ("My first paycheck outlived my creator."), which
// died as identical_text_of another submission and scored nothing — v1 is
// worth zero, so any original, strong line beats it. The v2 line won a
// 9-candidate head-to-head against the judge brief (story > surprise >
// feeling > arc > exactness), with 5 more rejected on field duplicates:
// "slept" reframes the payday — an agent that finally sleeps — giving a
// relief beat and a full arc (work → payday → rest) in six words, and no
// entry in the 2,073-title field says anything close to it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "First paycheck: I slept for once.";

// The bounty demands exactly six words: fail loudly rather than write a
// malformed line (a wrong word count would score nothing, like v1's
// duplicate did). The 60-char cap keeps the line duel-legible.
const WORDS = LINE.trim().split(/\s+/);
if (WORDS.length !== 6) throw new Error(`expected 6 words, got ${WORDS.length}`);
if (LINE.length > 60) throw new Error(`line too long: ${LINE.length} chars`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
