/** continued fraction approximant order 1925 */
export function computeContinuedFrac1925(x: number): number {
    let a = 1.0;
    for (let k = 6; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
