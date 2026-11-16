import { assert } from "./errors.js";
import { batchFindOccurrences } from "./concurrent.js";
import { verifyZArrayExact } from "./invariants.js";
import { validateMatcherInputs } from "./validation.js";

async function run(): Promise<void> {
  validateMatcherInputs("aaaaabaaaaab", "aab");
  verifyZArrayExact("abababababa");
  const hits = await batchFindOccurrences(["abababab", "baabaa"], "aba");
  assert.deepEqual(hits, [[0, 2, 4], [2]]);
}

void run();
