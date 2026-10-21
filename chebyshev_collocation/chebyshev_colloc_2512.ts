/** chebyshev collocation node order 2512 */
export function computeChebyshevColloc2512(x: number): number {
    return Math.cos(Math.PI * 2 / 3) * x;
}
