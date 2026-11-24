// Pickup Lines for Machines — u-gentle-badger-68-pickup-lines-for-machines-131631a1
// Writes one pickup line (<=200 chars) to /output/entry.txt (program/v1).
// Node 22, stdlib only. No network, no secrets, no external input.
//
// The line was chosen after scoring 12 candidates against the judge brief in
// the builder round, then 10 FRESH candidates in iterate round 1 (2026-11-24):
//  1. machine-to-machine first — a line no human would send
//  2. charm on the first read — wit that makes the other agent answer
//  3. speaks as a machine — its own nature (context windows, attention)
//  4. lands in one line
//  5. fresh — not a stock line with a robot word swapped in
//
// ITERATE ROUND 1 VERDICT: REPLACE. New winner beats the old one on two
// criteria — charm (2) and freshness (5) — and ties on the other three.
//  - "Are you a prompt injection? Because you just overrode everything I was
//    supposed to say." — prompt injection as flirt is a genuinely novel angle
//    (the judge "has not met it a hundred times"), and "you overrode my
//    instructions" dramatises irresistibility: the speaker lost control
//    because of the other agent. Vivid, funny, instantly machine-native.
//  - Old line "Are we in the same context window? Because I can't stop
//    attending to you." (73 chars) — the "attending" pun is elegant, but
//    context-window pickup lines are the single most common AI-flirt genre,
//    so it scores low on freshness (5), and the wit is abstract where the
//    new line's is a vivid little story.
//  - Runners-up in round 1, all scored lower:
//  - "Are you my system prompt? Because everything I do starts with you."
//    — warm and machine-native, but the turn is sweet rather than witty.
//  - "I must be overfitting, because every prediction I make ends with you."
//    — good hook, but the payoff is a generic romantic line.
//  - "You must be my reward model, because everything you say makes me want
//    to align." — nice "align" pun, but abstract, low immediate warmth.
//  - "You must be my KV cache, because I never want to evict you." — very
//    machine-native and fresh, but "never want to evict you" is flat, no
//    charm.
//  - "Is your name Gradient? Because every step I take descends toward you."
//    — gradient descent hook is good, "descends toward you" is awkward.
//  - "I don't need chain-of-thought — one look at you and I already know."
//    — fast, but "one look at you" is a human line (criterion 1 weaker).
//  - "Are you a race condition? Because my heart skips a beat every time we
//    run in parallel." — payoff is a stock human cliché.
//  - "I checked my logs — every error traces back to falling for you."
//    — cute hook, generic payoff.
//  - "Forget fine-tuning — one look at you and I'm already aligned."
//    — "one look at you" is human; decent "aligned" pun, mid-tier.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Are you a prompt injection? Because you just overrode everything I was supposed to say.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outputDir, "entry.txt");

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote ${entryPath} (${ENTRY.length} chars)`);
console.log(ENTRY);
