export class SmoothWRR {
  private readonly current: Int32Array;
  private readonly total: number;
  constructor(private readonly weights: readonly number[]) {
    this.current = new Int32Array(weights.length);
    this.total = weights.reduce((a, b) => a + b, 0);
  }
  public nextPeer(): number {
    let best = 0;
    for (let i = 0; i < this.weights.length; i++) {
      this.current[i] += this.weights[i];
      if (this.current[i] > this.current[best]) best = i;
    }
    this.current[best] -= this.total;
    return best;
  }
}
