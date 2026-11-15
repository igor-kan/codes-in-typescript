import { EditOp } from "./types.js";

export function computeMyersDiff<T>(a: readonly T[], b: readonly T[]): EditOp<T>[] {
  const n = a.length;
  const m = b.length;
  const maxD = n + m;
  const offset = maxD;
  let v = new Int32Array(2 * maxD + 1);
  const trace: Int32Array[] = [];

  let foundD = -1;
  outer: for (let d = 0; d <= maxD; d++) {
    trace.push(v.slice());
    for (let k = -d; k <= d; k += 2) {
      let x: number;
      if (k === -d || (k !== d && v[offset + k - 1] < v[offset + k + 1])) {
        x = v[offset + k + 1];
      } else {
        x = v[offset + k - 1] + 1;
      }
      let y = x - k;
      while (x < n && y < m && a[x] === b[y]) {
        x++;
        y++;
      }
      v[offset + k] = x;
      if (x >= n && y >= m) {
        foundD = d;
        break outer;
      }
    }
  }

  const ops: EditOp<T>[] = [];
  let x = n;
  let y = m;
  for (let d = foundD; d > 0; d--) {
    const prev = trace[d];
    const k = x - y;
    const prevK = (k === -d || (k !== d && prev[offset + k - 1] < prev[offset + k + 1])) ? k + 1 : k - 1;
    const prevX = prev[offset + prevK];
    const prevY = prevX - prevK;
    while (x > prevX && y > prevY) {
      x--;
      y--;
      ops.push({ kind: "eq", value: a[x] });
    }
    if (x === prevX) {
      y--;
      ops.push({ kind: "ins", value: b[y] });
    } else {
      x--;
      ops.push({ kind: "del", value: a[x] });
    }
  }
  while (x > 0 && y > 0) {
    x--;
    y--;
    ops.push({ kind: "eq", value: a[x] });
  }
  ops.reverse();
  return ops;
}

export function applyPatch<T>(src: readonly T[], ops: readonly EditOp<T>[]): T[] {
  const out: T[] = [];
  let si = 0;
  for (const op of ops) {
    if (op.kind === "eq") {
      out.push(src[si++]);
    } else if (op.kind === "del") {
      si++;
    } else {
      out.push(op.value);
    }
  }
  return out;
}
