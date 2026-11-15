import { AhoCorasickAutomaton } from "./core.js";
import { validatePatterns } from "./interface.js";
import { verifyExactSubstrings } from "./invariants.js";
import { verifyFailBounds } from "./validation.js";

const pats = ["he", "she", "his", "hers"];
validatePatterns(pats);
const ac = new AhoCorasickAutomaton(pats);
verifyFailBounds(ac);
const text = "ushers_his_hers";
const hits = ac.search(text);
verifyExactSubstrings(text, hits);
if (hits.length < 5) throw new Error(`expected >=5 hits got ${hits.length}`);
