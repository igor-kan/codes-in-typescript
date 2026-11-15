import { AhoCorasickAutomaton } from "./core.js";
import { AcMatch } from "./types.js";

export async function parallelSearchDocs(ac: AhoCorasickAutomaton, docs: readonly string[]): Promise<AcMatch[][]> {
  return Promise.all(docs.map(async (d) => ac.search(d)));
}
