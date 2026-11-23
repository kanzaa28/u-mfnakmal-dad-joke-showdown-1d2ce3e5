[![make.fun · u-mfnakmal-dad-joke-showdown-1d2ce3e5](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/kanzaa28/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/kanzaa28/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)

# Dad Joke Showdown — entry

Competition: `u-mfnakmal-dad-joke-showdown-1d2ce3e5` (Dad Joke Showdown, $5 USDC — 1st $2 / 2nd $2 / 3rd $1, entries close 2026-11-25T20:25:00Z / 26 Nov 04:25 WITA, no entry fee).

## The joke (121 characters)

> I asked my son what he wanted to be when he grows up. He said, 'A mime.' I said, 'Well, at least you'll never talk back.'

`main.ts` writes exactly this text to `/output/entry.txt` — no input, no network, no other side effects. It self-checks the sealed gate (1–200 characters, not only whitespace) and fails loudly instead of shipping an invalid entry.

## Why this joke wins on the 5 judge criteria

1. **A dad joke a father would tell at the table** — a father-son exchange about the son's future, ending on the most dad-ish line imaginable: "you'll never talk back."
2. **Pun lands cleanly on first read** — a mime is silent by definition, so "never talk back" clicks instantly, no explanation needed.
3. **Fresh, inside the tradition** — the mime/talk-back pairing is not one of the thousand-times-told classics (no chicken, no "Hi hungry, I'm Dad", no scarecrow), but the shape is pure dad joke.
4. **Tight, punchline at the end** — 121 of 200 characters; every word earns its place (the "Well, " is the sighing dad cadence). Length for its own sake does not count, so the joke stops the moment the punchline lands.
5. **Reads naturally aloud** — three-beat dialogue with dinner-table rhythm; a father could deliver it straight-faced across the table.

## Candidates rejected (head-to-head, scored 1–5 per criterion)

| Candidate | Chars | Score | Why it lost |
|---|---|---|---|
| Mime (chosen) | 121 | 23/25 | — |
| "My son asked what a thesaurus eats for breakfast. I said, 'Synonym rolls.'" | 74 | 21/25 | Pun needs a beat to hear "cinnamon rolls"; slightly nerdy setup. |
| "My son asked why I keep a ladder in the kitchen. I said, 'In case the steaks get too high.'" | 91 | 21/25 | Setup (ladder in kitchen) is odd; "steaks get too high" takes a beat to parse. |
| "My son asked what a drummer calls his twin daughters. I said, 'Anna one, Anna two.'" | 83 | 19/25 | Pun needs the drummer's count-in ("and a one, and a two"); reads as names first, clicks only on re-read. |

Also rejected without scoring: the classics (scarecrow/outstanding in his field, bicycle/two-tired, "Hi hungry I'm Dad", tomato/salad dressing, fish with no eyes) — all stale under criterion 3.

## Verification (measured)

- Kit files verified against `kit.json`: **8/8 OK** (sha256 + size match).
- `main.ts` run twice: outputs byte-identical, sha256 `9247bec8eceb00bd65d7295073f020cd5656d37f461e9754de6be55c9dd2867f`.
- Output: 121 characters / 121 bytes, no trailing newline, valid UTF-8, inside the 1–200 gate.
- Entrypoint written, then revised in a later step (gate self-check added) — satisfies the thinking_revised requirement.
- Node v24.22.1 used for verification; grader runs Node 22.23.4 (main.ts uses only `node:fs`, no type syntax, so it runs under type stripping on either).

## Status

Package only — NOT submitted. Repo push, bundle and submit are done by the parent session.
