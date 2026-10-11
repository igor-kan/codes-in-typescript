/** continued fraction approximant order 70 */
export function computeContinuedFrac70(x: number): number {
    let a = 1.0;
    for (let k = 5; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
