import type { SemVer } from "./types.js";

export function parseSemVer(s: string): SemVer {
  const parts = s.split(".").map(Number);
  if (parts.length !== 3 || parts.some((x) => !Number.isInteger(x) || x < 0)) {
    throw new Error(`invalid semver: ${s}`);
  }
  return { major: parts[0], minor: parts[1], patch: parts[2] };
}

export function compareSemVer(a: SemVer, b: SemVer): number {
  if (a.major !== b.major) return a.major - b.major;
  if (a.minor !== b.minor) return a.minor - b.minor;
  return a.patch - b.patch;
}

export function satisfiesCaret(verStr: string, minStr: string): boolean {
  const v = parseSemVer(verStr);
  const m = parseSemVer(minStr);
  if (compareSemVer(v, m) < 0) return false;
  if (m.major > 0) return v.major === m.major;
  if (m.minor > 0) return v.major === 0 && v.minor === m.minor;
  return v.major === 0 && v.minor === 0 && v.patch === m.patch;
}
