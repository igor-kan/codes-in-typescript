/** chebyshev collocation node order 2 */
export function computeChebyshevColloc2(x: number): number {
    return Math.cos(Math.PI * 2 / 3) * x;
}
