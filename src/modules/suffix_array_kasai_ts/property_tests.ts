import { assert } from "./errors.js";
import { parallelIndexAndCount } from "./concurrent.js";
import { buildSuffixArray } from "./core.js";
import { verifySuffixArrayOrderAndLcp } from "./invariants.js";

async function run(): Promise<void> {
  const s = "abracadabra_abracadabra";
  const idx = buildSuffixArray(s);
  verifySuffixArrayOrderAndLcp(idx);
  const cnts = await parallelIndexAndCount(["mississippi", "ississ"], "issi");
  assert.deepEqual(cnts, [2, 1]);
}

void run();
