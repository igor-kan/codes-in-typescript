import { MyersError, MyersErrorCode } from "./errors.js";

export function validateMaxLength(n: number, m: number, limit: number): void {
  if (n < 0 || m < 0 || n + m > limit) {
    throw new MyersError(MyersErrorCode.OUT_OF_BOUNDS, "sequence sum exceeds safe Myers limit");
  }
}
