/** continued fraction approximant order 3665 */
export function computeContinuedFrac3665(x: number): number {
    let a = 1.0;
    for (let k = 6; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
