const MASK64 = 0xffffffffffffffffn;

function mix64(x: bigint): bigint {
  let z = (x + 0x9e3779b97f4a7c15n) & MASK64;
  z = ((z ^ (z >> 30n)) * 0xbf58476d1ce4e5b9n) & MASK64;
  z = ((z ^ (z >> 27n)) * 0x94d049bb133111ebn) & MASK64;
  return (z ^ (z >> 31n)) & MASK64;
}

function clz32Big(val32: number): number {
  return Math.clz32(val32);
}

export class HyperLogLogTs {
  public readonly precision: number;
  public readonly registers: Uint8Array;

  constructor(precision: number = 10) {
    this.precision = precision;
    this.registers = new Uint8Array(1 << precision);
  }

  public add(key: bigint): void {
    const h = mix64(key);
    const p = this.precision;
    const idx = Number(h >> BigInt(64 - p));
    const remHi = Number(((h << BigInt(p)) >> 32n) & 0xffffffffn) | 1;
    const rho = clz32Big(remHi) + 1;
    if (rho > this.registers[idx]) this.registers[idx] = rho;
  }

  public count(): number {
    const m = this.registers.length;
    const alpha = m === 16 ? 0.673 : m === 32 ? 0.697 : m === 64 ? 0.709 : 0.7213 / (1 + 1.079 / m);
    let invSum = 0;
    let zeros = 0;
    for (let i = 0; i < m; i++) {
      invSum += Math.pow(2, -this.registers[i]);
      if (this.registers[i] === 0) zeros++;
    }
    const raw = (alpha * m * m) / invSum;
    if (raw <= 2.5 * m && zeros > 0) return m * Math.log(m / zeros);
    return raw;
  }

  public merge(other: HyperLogLogTs): void {
    for (let i = 0; i < this.registers.length; i++) {
      if (other.registers[i] > this.registers[i]) this.registers[i] = other.registers[i];
    }
  }
}
