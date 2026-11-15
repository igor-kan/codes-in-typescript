import { BPlusInternal, BPlusLeaf, BPlusNode } from "./types.js";

export class BPlusTree<V> {
  public readonly order: number;
  public root: BPlusNode<number, V>;

  constructor(order: number = 4) {
    this.order = order;
    this.root = { isLeaf: true, keys: [], values: [], next: null };
  }

  private findLeaf(k: number): BPlusLeaf<number, V> {
    let cur = this.root;
    while (!cur.isLeaf) {
      let idx = 0;
      while (idx < cur.keys.length && k >= cur.keys[idx]) idx++;
      cur = cur.children[idx];
    }
    return cur;
  }

  public get(k: number): V | undefined {
    const leaf = this.findLeaf(k);
    const idx = leaf.keys.indexOf(k);
    return idx >= 0 ? leaf.values[idx] : undefined;
  }

  public rangeScan(lo: number, hi: number): [number, V][] {
    const res: [number, V][] = [];
    let leaf: BPlusLeaf<number, V> | null = this.findLeaf(lo);
    while (leaf !== null) {
      for (let i = 0; i < leaf.keys.length; i++) {
        const key = leaf.keys[i];
        if (key > hi) return res;
        if (key >= lo) res.push([key, leaf.values[i]]);
      }
      leaf = leaf.next;
    }
    return res;
  }

  public insert(k: number, v: V): void {
    const split = this.insertRec(this.root, k, v);
    if (split !== null) {
      this.root = { isLeaf: false, keys: [split[0]], children: [this.root, split[1]] };
    }
  }

  private insertRec(node: BPlusNode<number, V>, k: number, v: V): [number, BPlusNode<number, V>] | null {
    if (node.isLeaf) {
      let i = 0;
      while (i < node.keys.length && node.keys[i] < k) i++;
      if (i < node.keys.length && node.keys[i] === k) {
        node.values[i] = v;
        return null;
      }
      node.keys.splice(i, 0, k);
      node.values.splice(i, 0, v);
      if (node.keys.length < this.order) return null;
      const mid = Math.floor(node.keys.length / 2);
      const right: BPlusLeaf<number, V> = {
        isLeaf: true,
        keys: node.keys.splice(mid),
        values: node.values.splice(mid),
        next: node.next,
      };
      node.next = right;
      return [right.keys[0], right];
    }

    let idx = 0;
    while (idx < node.keys.length && k >= node.keys[idx]) idx++;
    const childSplit = this.insertRec(node.children[idx], k, v);
    if (childSplit === null) return null;
    node.keys.splice(idx, 0, childSplit[0]);
    node.children.splice(idx + 1, 0, childSplit[1]);
    if (node.keys.length < this.order) return null;
    const mid = Math.floor(node.keys.length / 2);
    const upKey = node.keys[mid];
    const rightInt: BPlusInternal<number, V> = {
      isLeaf: false,
      keys: node.keys.splice(mid + 1),
      children: node.children.splice(mid + 1),
    };
    node.keys.pop();
    return [upKey, rightInt];
  }
}
