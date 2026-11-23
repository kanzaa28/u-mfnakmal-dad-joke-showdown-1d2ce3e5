// Dad Joke Showdown — entrypoint.
// Writes one dad joke (121 characters, well inside the 200-character cap)
// to /output/entry.txt. No input, no network, no side effects beyond the file.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked my son what he wanted to be when he grows up. He said, 'A mime.' I said, 'Well, at least you'll never talk back.'";

// Self-check against the sealed gate before writing: the entry must be
// UTF-8 text of 1 to 200 characters and not only white space. Fail loudly
// instead of shipping an invalid entry.
const chars = [...joke].length;
if (chars < 1 || chars > 200 || joke.trim().length === 0) {
  throw new Error(`entry invalid: ${chars} characters (gate is 1-200)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
