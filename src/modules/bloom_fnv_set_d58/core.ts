export class StringBloom512 {
  private readonly words = new Uint32Array(16);
  private readonly k = 4;

  private hashes(s: string): [number, number] {
    let h1 = 2166136261;
    let h2 = 3735928559;
    for (let i = 0; i < s.length; i++) {
      const c = s.charCodeAt(i);
      h1 = Math.imul(h1 ^ c, 16777619);
      h2 = Math.imul(h2 ^ (c + i), 2246822519);
    }
    return [h1 >>> 0, (h2 | 1) >>> 0];
  }

  add(s: string): void {
    const [h1, h2] = this.hashes(s);
    for (let i = 0; i < this.k; i++) {
      const bit = (h1 + Math.imul(i, h2)) & 511;
      this.words[bit >>> 5] |= 1 << (bit & 31);
    }
  }

  mightContain(s: string): boolean {
    const [h1, h2] = this.hashes(s);
    for (let i = 0; i < this.k; i++) {
      const bit = (h1 + Math.imul(i, h2)) & 511;
      if ((this.words[bit >>> 5] & (1 << (bit & 31))) === 0) return false;
    }
    return true;
  }
}
