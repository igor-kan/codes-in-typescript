class AutocompleteNode {
  readonly children = new Map<string, AutocompleteNode>();
  terminal = false;
}

export class AutocompleteTrie {
  private readonly root = new AutocompleteNode();

  insert(word: string): void {
    let cur = this.root;
    for (const ch of word) {
      let nxt = cur.children.get(ch);
      if (!nxt) {
        nxt = new AutocompleteNode();
        cur.children.set(ch, nxt);
      }
      cur = nxt;
    }
    cur.terminal = true;
  }

  suggest(prefix: string, limit: number): string[] {
    let cur: AutocompleteNode | undefined = this.root;
    for (const ch of prefix) {
      cur = cur.children.get(ch);
      if (!cur) return [];
    }
    const out: string[] = [];
    const dfs = (node: AutocompleteNode, acc: string): void => {
      if (out.length >= limit) return;
      if (node.terminal) out.push(acc);
      const keys = Array.from(node.children.keys()).sort();
      for (const k of keys) {
        dfs(node.children.get(k) as AutocompleteNode, acc + k);
      }
    };
    dfs(cur, prefix);
    return out;
  }
}
