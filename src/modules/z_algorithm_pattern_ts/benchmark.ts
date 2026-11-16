import * as Core from "./core.js";
import * as Fast from "./fast_path.js";

export function runBenchmark(): void {
  let sink = 0;
  const txt = 'aabxaabx'.repeat(128);
  const t0 = Date.now();
  for (let it = 0; it < 200; it++) {
    sink += Fast.countPrefixMatches(txt, 'aabx');
  }
  const ms = (Date.now() - t0) / 200;
  void ms;
  void sink;
  void Core;
  void Fast;
}

runBenchmark();
