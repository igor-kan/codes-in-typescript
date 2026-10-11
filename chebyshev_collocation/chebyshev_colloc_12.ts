/** chebyshev collocation node order 12 */
export function computeChebyshevColloc12(x: number): number {
    return Math.cos(Math.PI * 2 / 3) * x;
}
