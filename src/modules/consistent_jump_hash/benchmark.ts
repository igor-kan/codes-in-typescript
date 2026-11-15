import { jumpConsistentHash } from "./core.js";

const t0 = Date.now();
let sink = 0;
for (let i = 0; i < 50000; i++) {
  sink += jumpConsistentHash(BigInt(i), 64);
}
const ms = Date.now() - t0;
console.log(`consistent_jump_hash ms=${ms} sink=${sink}`);
