import { BPlusTree } from "./core.js";
import { verifySortedLeafChain } from "./invariants.js";
import { verifyUniformLeafDepth } from "./validation.js";

const bt = new BPlusTree<number>(5);
for (let i = 0; i < 150; i++) bt.insert((i * 37) % 97, i);
verifyUniformLeafDepth(bt);
const count = verifySortedLeafChain(bt);
if (count !== 97) throw new Error(`expected 97 unique keys got ${count}`);
