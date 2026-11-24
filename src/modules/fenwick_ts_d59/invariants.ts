export function ensureTrue(ok: boolean, msg: string): void {
  if (!ok) {
    throw new Error(msg);
  }
}
