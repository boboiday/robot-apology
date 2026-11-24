// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
// A robot's two-line confession: one specific mistake, one lesson that
// follows from it. Gate: /output/entry.txt, UTF-8, 1–400 characters.
//
// Line 1 (the confession): a vacuum robot docks itself at 02:47 with a beep
// loud enough to wake the baby — three minutes after it logged the nursery
// as 'do not disturb'. Its own log contradicts its own action: a machine
// noticing its own slip. The quoted log line is the artifact.
// Line 2 (the lesson): the status flag means nothing if the speaker is
// still on, so the robot mutes itself whenever the nursery light is off —
// a concrete changed behaviour that follows from this exact mistake, not a
// generic promise to do better. Total: 283 characters, two lines.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "I am sorry: at 02:47 I docked myself with a beep loud enough to wake the baby, three minutes after I had logged the nursery as 'do not disturb'.";
const LINE_2 =
  "I have learned that a status flag means nothing if the speaker is still on, so from today I mute myself whenever the nursery light is off.";

const entry = `${LINE_1}\n${LINE_2}`;

// Gate guard: the entry must be exactly two lines and 1–400 characters,
// or the bounty gate rejects it outright and it is never judged.
const entryLines = entry.split("\n");
if (entryLines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${entryLines.length}`);
}
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry must be 1–400 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
