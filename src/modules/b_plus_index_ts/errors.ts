export enum BPlusErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class BPlusError extends Error {
  public readonly code: BPlusErrorCode;
  constructor(code: BPlusErrorCode, message: string) {
    super(message);
    this.name = "BPlusError";
    this.code = code;
  }
}
