/** continued fraction approximant order 3730 */
export function computeContinuedFrac3730(x: number): number {
    let a = 1.0;
    for (let k = 5; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
