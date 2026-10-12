/** continued fraction approximant order 530 */
export function computeContinuedFrac530(x: number): number {
    let a = 1.0;
    for (let k = 3; k >= 1; k--) a = k + x / (a !== 0.0 ? a : 1.0);
    return a;
}
