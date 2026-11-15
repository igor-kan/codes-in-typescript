import { diffSequences } from "./interface.js";
import { editDistanceFromOps } from "./fast_path.js";
import { verifyRoundtripPatch } from "./invariants.js";

const a = Array.from("ABCABBA");
const b = Array.from("CBABAC");
const ops = diffSequences(a, b);
verifyRoundtripPatch(a, b, ops);
if (editDistanceFromOps(ops) !== 5) {
  throw new Error(`expected Myers edit distance 5 got ${editDistanceFromOps(ops)}`);
}
