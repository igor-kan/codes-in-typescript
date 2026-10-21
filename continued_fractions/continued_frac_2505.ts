/** continued fraction approximant order 2505 */
export function computeContinuedFrac2505(x: number): number {
    let a = 1.0;
    for (let k = 4; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
