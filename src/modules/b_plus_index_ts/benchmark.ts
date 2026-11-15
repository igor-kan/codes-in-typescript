import { BPlusTree } from "./core.js";

const bt = new BPlusTree<number>(16);
for (let i = 0; i < 2000; i++) bt.insert(i, i * 2);
const t0 = Date.now();
let sink = 0;
for (let i = 0; i < 1000; i++) sink += bt.rangeScan(200, 400).length;
console.log(`b_plus_index_ts ms=${Date.now() - t0} sink=${sink}`);
