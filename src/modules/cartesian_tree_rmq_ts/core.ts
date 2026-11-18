import { CartDesc } from "./types.js";

export function buildCartesian(arr: readonly number[]): CartDesc {
  const n = arr.length;
  const left = new Int32Array(n).fill(-1);
  const right = new Int32Array(n).fill(-1);
  const st: number[] = [];
  for (let i = 0; i < n; i++) {
    let last = -1;
    while (st.length > 0 && arr[st[st.length - 1]] > arr[i]) last = st.pop()!;
    if (st.length > 0) right[st[st.length - 1]] = i;
    if (last !== -1) left[i] = last;
    st.push(i);
  }
  return { root: st[0] ?? -1, left, right };
}

export function queryRmqIdx(ct: CartDesc, l: number, r: number): number {
  let cur = ct.root;
  while (cur !== -1) {
    if (cur < l) cur = ct.right[cur];
    else if (cur > r) cur = ct.left[cur];
    else return cur;
  }
  return -1;
}
