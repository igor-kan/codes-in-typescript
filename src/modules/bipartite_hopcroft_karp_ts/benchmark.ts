import * as Core from "./core.js";
import * as Fast from "./fast_path.js";

export function runBenchmark(): void {
  let sink = 0;
  const arr = [1, 2, 3, 4];
  const t0 = Date.now();
  for (let it = 0; it < 200; it++) {
    sink += Fast.fastArraySum(arr);
  }
  const ms = (Date.now() - t0) / 200;
  void ms;
  void sink;
  void Core;
  void Fast;
}

runBenchmark();
