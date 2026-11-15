import { BPlusError, BPlusErrorCode } from "./errors.js";

export function validateOrder(order: number): void {
  if (!Number.isInteger(order) || order < 3) {
    throw new BPlusError(BPlusErrorCode.INVALID_INPUT, "B+ Tree order must be integer >= 3");
  }
}
