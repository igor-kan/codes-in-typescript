/** continued fraction approximant order 2310 */
export function computeContinuedFrac2310(x: number): number {
    let a = 1.0;
    for (let k = 1; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
