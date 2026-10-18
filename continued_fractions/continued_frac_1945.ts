/** continued fraction approximant order 1945 */
export function computeContinuedFrac1945(x: number): number {
    let a = 1.0;
    for (let k = 2; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
