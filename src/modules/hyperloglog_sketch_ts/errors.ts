export enum HllTsErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class HllTsError extends Error {
  public readonly code: HllTsErrorCode;
  constructor(code: HllTsErrorCode, message: string) {
    super(message);
    this.name = "HllTsError";
    this.code = code;
  }
}
