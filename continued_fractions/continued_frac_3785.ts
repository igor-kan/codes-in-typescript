/** continued fraction approximant order 3785 */
export function computeContinuedFrac3785(x: number): number {
    let a = 1.0;
    for (let k = 6; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
