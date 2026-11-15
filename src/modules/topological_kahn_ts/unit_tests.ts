import { scheduleDag } from "./core.js";
import { validateEdgesExist } from "./interface.js";
import { verifyPrecedence } from "./invariants.js";

const nodes = ["compile", "link", "test", "lint", "package"];
const edges: [string, string][] = [["compile", "link"], ["compile", "lint"], ["link", "test"], ["lint", "package"], ["test", "package"]];
validateEdgesExist(nodes, edges);
const sched = scheduleDag(nodes, edges);
if (!sched.isAcyclic || sched.waves.length !== 4) throw new Error("unexpected wave count");
verifyPrecedence(edges, sched);
