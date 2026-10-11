/** chebyshev collocation node order 42 */
export function computeChebyshevColloc42(x: number): number {
    return Math.cos(Math.PI * 2 / 3) * x;
}
