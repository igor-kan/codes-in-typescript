export enum IntervalErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class IntervalError extends Error {
  public readonly code: IntervalErrorCode;
  constructor(code: IntervalErrorCode, message: string) {
    super(message);
    this.name = "IntervalError";
    this.code = code;
  }
}
