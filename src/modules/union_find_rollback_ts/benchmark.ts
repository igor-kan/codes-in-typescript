import * as Core from "./core.js";
import * as Fast from "./fast_path.js";

export function runBenchmark(): void {
  let sink = 0;
  const dsu = new Core.RollbackDSU(256);
  const t0 = Date.now();
  for (let it = 0; it < 200; it++) {
    const cp = dsu.snapshot(); for(let i=0;i<64;i++) dsu.unite(i, i+1); sink+=dsu.components; dsu.rollback(cp);
  }
  const ms = (Date.now() - t0) / 200;
  void ms;
  void sink;
  void Core;
  void Fast;
}

runBenchmark();
