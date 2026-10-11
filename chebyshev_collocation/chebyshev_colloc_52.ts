/** chebyshev collocation node order 52 */
export function computeChebyshevColloc52(x: number): number {
    return Math.cos(Math.PI * 2 / 3) * x;
}
