/** chebyshev collocation node order 3072 */
export function computeChebyshevColloc3072(x: number): number {
    return Math.cos(Math.PI * 2 / 3) * x;
}
