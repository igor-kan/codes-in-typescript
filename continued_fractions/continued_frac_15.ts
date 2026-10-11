/** continued fraction approximant order 15 */
export function computeContinuedFrac15(x: number): number {
    let a = 1.0;
    for (let k = 4; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
