import { RgaError, RgaErrorCode } from "./errors.js";
import { SequenceCrdtContract } from "./interface.js";
import { OpId, RgaNode } from "./types.js";

export function compareIds(a: OpId, b: OpId): number {
  if (a.clock !== b.clock) return a.clock - b.clock;
  return a.site < b.site ? -1 : (a.site > b.site ? 1 : 0);
}

export function sameId(a: OpId | null, b: OpId | null): boolean {
  if (a === null || b === null) return a === b;
  return a.clock === b.clock && a.site === b.site;
}

export class RgaDocument implements SequenceCrdtContract {
  public readonly siteId: string;
  private clock = 0;
  private readonly nodes: RgaNode[] = [];

  constructor(siteId: string) {
    if (!siteId) throw new RgaError(RgaErrorCode.EMPTY_INPUT, "siteId required");
    this.siteId = siteId;
  }

  private visibleNodes(): RgaNode[] {
    return this.nodes.filter((n) => !n.deleted);
  }

  public insertLocal(afterPos: number, ch: string): RgaNode {
    const vis = this.visibleNodes();
    if (afterPos < -1 || afterPos >= vis.length) {
      throw new RgaError(RgaErrorCode.OUT_OF_BOUNDS, "insert position oob");
    }
    const anchor = afterPos === -1 ? null : vis[afterPos].id;
    this.clock++;
    const node: RgaNode = {
      id: { clock: this.clock, site: this.siteId },
      anchor,
      ch,
      deleted: false,
    };
    this.applyRemote(node);
    return node;
  }

  public deleteAt(visiblePos: number): OpId | null {
    const vis = this.visibleNodes();
    if (visiblePos < 0 || visiblePos >= vis.length) return null;
    vis[visiblePos].deleted = true;
    return vis[visiblePos].id;
  }

  public applyRemoteDelete(id: OpId): void {
    for (const nd of this.nodes) {
      if (sameId(nd.id, id)) { nd.deleted = true; return; }
    }
  }

  public applyRemote(node: RgaNode): void {
    if (node.id.clock > this.clock) this.clock = node.id.clock;
    for (const existing of this.nodes) {
      if (sameId(existing.id, node.id)) return;
    }
    let idx = 0;
    if (node.anchor !== null) {
      const aIdx = this.nodes.findIndex((x) => sameId(x.id, node.anchor));
      if (aIdx === -1) throw new RgaError(RgaErrorCode.INVALID_INPUT, "missing causal anchor");
      idx = aIdx + 1;
    }
    // Skip sibling subtrees whose root ID is strictly greater (higher timestamp wins earlier position)
    while (idx < this.nodes.length && compareIds(this.nodes[idx].id, node.id) > 0) {
      idx++;
    }
    this.nodes.splice(idx, 0, { ...node });
  }

  public toText(): string {
    let s = "";
    for (const n of this.nodes) if (!n.deleted) s += n.ch;
    return s;
  }
}
