import { BPlusTree } from "./core.js";
import { validateOrder } from "./interface.js";
import { verifySortedLeafChain } from "./invariants.js";
import { verifyUniformLeafDepth } from "./validation.js";

validateOrder(4);
const bt = new BPlusTree<string>(4);
for (const k of [10, 20, 5, 15, 30, 25, 35, 1, 8, 12, 18, 40]) bt.insert(k, `v${k}`);
if (bt.get(25) !== "v25" || bt.get(99) !== undefined) throw new Error("lookup mismatch");
const rng = bt.rangeScan(10, 25);
if (rng.map(([k]) => k).join(",") !== "10,12,15,18,20,25") throw new Error("range scan mismatch");
verifyUniformLeafDepth(bt);
if (verifySortedLeafChain(bt) !== 12) throw new Error("leaf count mismatch");
