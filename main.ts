// One Letter: Coffee or Tea — entry A (coffee).
// Writes exactly one character, "A", to /output/entry.txt.
// Deterministic: no input, no randomness, no time, no network.
// A is coffee: the bolder, more vivid answer, so it stands on its own.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "A";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
