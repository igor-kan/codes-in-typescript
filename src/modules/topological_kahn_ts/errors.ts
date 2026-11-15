export enum TopoErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class TopoError extends Error {
  public readonly code: TopoErrorCode;
  constructor(code: TopoErrorCode, message: string) {
    super(message);
    this.name = "TopoError";
    this.code = code;
  }
}
