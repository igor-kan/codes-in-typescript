/** continued fraction approximant order 3310 */
export function computeContinuedFrac3310(x: number): number {
    let a = 1.0;
    for (let k = 5; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
