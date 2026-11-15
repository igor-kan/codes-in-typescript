import { dijkstraShortestPaths } from "./core.js";
import { reconstructPath } from "./fast_path.js";
import { validateGraphNonNegative } from "./interface.js";
import { verifyBellmanOptimality } from "./invariants.js";
import { assertSourceZero } from "./validation.js";

const g = [
  [{ to: 1, weight: 4 }, { to: 2, weight: 1 }],
  [{ to: 3, weight: 1 }],
  [{ to: 1, weight: 2 }, { to: 3, weight: 5 }],
  [],
];
validateGraphNonNegative(g, 0);
const res = dijkstraShortestPaths(g, 0);
assertSourceZero(res, 0);
verifyBellmanOptimality(g, res);
if (res.dist[3] !== 4) throw new Error(`expected dist 4 got ${res.dist[3]}`);
if (reconstructPath(res, 3).join(",") !== "0,2,1,3") throw new Error("path mismatch");
