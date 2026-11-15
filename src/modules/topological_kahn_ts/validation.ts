import { TopoError, TopoErrorCode } from "./errors.js";

export function assertUniqueNodes(nodes: readonly string[]): void {
  if (new Set(nodes).size !== nodes.length) {
    throw new TopoError(TopoErrorCode.INVALID_INPUT, "duplicate node ids");
  }
}
