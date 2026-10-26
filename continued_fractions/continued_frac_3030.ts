/** continued fraction approximant order 3030 */
export function computeContinuedFrac3030(x: number): number {
    let a = 1.0;
    for (let k = 1; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
