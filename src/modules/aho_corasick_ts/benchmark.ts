import { AhoCorasickAutomaton } from "./core.js";
import { countAllHitsFast } from "./fast_path.js";

const ac = new AhoCorasickAutomaton(["alpha", "beta", "gamma", "delta", "epsilon"]);
const hay = "alpha_beta_gamma_delta_epsilon_".repeat(64);
const t0 = Date.now();
let sink = 0;
for (let i = 0; i < 500; i++) sink += countAllHitsFast(ac, hay);
console.log(`aho_corasick_ts ms=${Date.now() - t0} sink=${sink}`);
