import { TreapError, TreapErrorCode } from "./errors.js";
import { OrderStatisticSet } from "./interface.js";
import { TreapNode } from "./types.js";

function nodeSize(t: TreapNode | null): number {
  return t === null ? 0 : t.size;
}

function pull(t: TreapNode): void {
  t.size = 1 + nodeSize(t.left) + nodeSize(t.right);
}

export function splitTreap(t: TreapNode | null, key: number): [TreapNode | null, TreapNode | null] {
  if (t === null) return [null, null];
  if (t.key <= key) {
    const [rl, rr] = splitTreap(t.right, key);
    t.right = rl;
    pull(t);
    return [t, rr];
  } else {
    const [ll, lr] = splitTreap(t.left, key);
    t.left = lr;
    pull(t);
    return [ll, t];
  }
}

export function mergeTreap(l: TreapNode | null, r: TreapNode | null): TreapNode | null {
  if (l === null) return r;
  if (r === null) return l;
  if (l.prio >= r.prio) {
    l.right = mergeTreap(l.right, r);
    pull(l);
    return l;
  } else {
    r.left = mergeTreap(l, r.left);
    pull(r);
    return r;
  }
}

export class RandomizedTreap implements OrderStatisticSet {
  public root: TreapNode | null = null;
  private rngState = 0x9E3779B9;

  private nextPrio(): number {
    let t = (this.rngState += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return (t ^ (t >>> 14)) >>> 0;
  }

  public contains(key: number): boolean {
    let cur = this.root;
    while (cur !== null) {
      if (key === cur.key) return true;
      cur = key < cur.key ? cur.left : cur.right;
    }
    return false;
  }

  public insert(key: number): boolean {
    if (this.contains(key)) return false;
    const [l, r] = splitTreap(this.root, key);
    const nd: TreapNode = { key, prio: this.nextPrio(), size: 1, left: null, right: null };
    this.root = mergeTreap(mergeTreap(l, nd), r);
    return true;
  }

  public erase(key: number): boolean {
    if (!this.contains(key)) return false;
    const [ltEq, gt] = splitTreap(this.root, key);
    const [lt] = splitTreap(ltEq, key - 1);
    this.root = mergeTreap(lt, gt);
    return true;
  }

  public kthSmallest(k: number): number {
    if (k < 0 || k >= this.size()) {
      throw new TreapError(TreapErrorCode.OUT_OF_BOUNDS, "kth index out of bounds");
    }
    let cur = this.root!;
    while (true) {
      const lsz = nodeSize(cur.left);
      if (k === lsz) return cur.key;
      if (k < lsz) cur = cur.left!;
      else { k -= lsz + 1; cur = cur.right!; }
    }
  }

  public size(): number {
    return nodeSize(this.root);
  }
}
