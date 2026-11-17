import * as Core from "./core.js";
import * as Fast from "./fast_path.js";

export function runBenchmark(): void {
  let sink = 0;
  const e = new Core.ManacherEngine(); const s = 'abacaba'.repeat(8); void Fast;
  const t0 = Date.now();
  for (let it = 0; it < 200; it++) {
    sink += e.analyze(s).count;
  }
  const ms = (Date.now() - t0) / 200;
  void ms;
  void sink;
  void Core;
  void Fast;
}

runBenchmark();
