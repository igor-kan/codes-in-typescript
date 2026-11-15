import { scheduleDag } from "./core.js";
import { assertUniqueNodes } from "./validation.js";

const n = ["a", "b", "c", "d"];
assertUniqueNodes(n);
const cyc = scheduleDag(n, [["a", "b"], ["b", "c"], ["c", "a"], ["c", "d"]]);
if (cyc.isAcyclic || cyc.blockedNodes.length !== 4) throw new Error("expected all blocked downstream + cycle");
