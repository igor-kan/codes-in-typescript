import { AhoCorasickAutomaton } from "./core.js";

export function countAllHitsFast(ac: AhoCorasickAutomaton, text: string): number {
  return ac.search(text).length;
}
