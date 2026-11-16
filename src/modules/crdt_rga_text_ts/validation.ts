import { RgaError, RgaErrorCode } from "./errors.js";
import { RgaNode } from "./types.js";

export function validateRgaOp(node: RgaNode): void {
  if (!node.id.site || node.id.clock <= 0 || node.ch.length !== 1) {
    throw new RgaError(RgaErrorCode.INVALID_INPUT, "malformed RGA node operation");
  }
}
