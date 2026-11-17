import { ManacherError, ManacherErrorCode } from './errors.js';

export function ensureText(s: string): void {
  if (!s) throw new ManacherError(ManacherErrorCode.EMPTY_INPUT, 'empty');
}
