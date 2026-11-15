import { diffSequences } from "./interface.js";
import { verifyRoundtripPatch } from "./invariants.js";

const pairs: [string, string][] = [
  ["", ""],
  ["abc", ""],
  ["", "xyz"],
  ["kitten", "sitting"],
  ["algorithm", "altruistic"],
];
for (const [s1, s2] of pairs) {
  const a1 = Array.from(s1);
  const a2 = Array.from(s2);
  verifyRoundtripPatch(a1, a2, diffSequences(a1, a2));
}
