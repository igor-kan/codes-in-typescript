/** chebyshev collocation node order 32 */
export function computeChebyshevColloc32(x: number): number {
    return Math.cos(Math.PI * 2 / 3) * x;
}
