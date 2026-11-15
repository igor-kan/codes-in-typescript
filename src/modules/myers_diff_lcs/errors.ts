export enum MyersErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class MyersError extends Error {
  public readonly code: MyersErrorCode;
  constructor(code: MyersErrorCode, message: string) {
    super(message);
    this.name = "MyersError";
    this.code = code;
  }
}
