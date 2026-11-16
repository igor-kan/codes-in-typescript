import * as Core from "./core.js";
import * as Fast from "./fast_path.js";

export function runBenchmark(): void {
  let sink = 0;
  const txt = 'banana_abracadabra_'.repeat(16);
  const t0 = Date.now();
  for (let it = 0; it < 200; it++) {
    const idx = Core.buildSuffixArray(txt); sink += Fast.countSubstringMatches(idx, 'abra');
  }
  const ms = (Date.now() - t0) / 200;
  void ms;
  void sink;
  void Core;
  void Fast;
}

runBenchmark();
