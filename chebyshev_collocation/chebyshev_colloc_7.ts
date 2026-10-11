/** chebyshev collocation node order 7 */
export function computeChebyshevColloc7(x: number): number {
    return Math.cos(Math.PI * 7 / 8) * x;
}
