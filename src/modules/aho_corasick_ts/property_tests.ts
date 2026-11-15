import { AhoCorasickAutomaton } from "./core.js";
import { verifyExactSubstrings } from "./invariants.js";

const pats = ["a", "aa", "aaa", "ab", "ba"];
const ac = new AhoCorasickAutomaton(pats);
const hay = "abaaabbaa";
const got = ac.search(hay);
verifyExactSubstrings(hay, got);
let brute = 0;
for (const p of pats) {
  for (let i = 0; i + p.length <= hay.length; i++) {
    if (hay.slice(i, i + p.length) === p) brute++;
  }
}
if (got.length !== brute) throw new Error(`count mismatch ${got.length} != ${brute}`);
