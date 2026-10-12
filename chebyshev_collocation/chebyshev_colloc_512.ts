/** chebyshev collocation node order 512 */
export function computeChebyshevColloc512(x: number): number {
    return Math.cos(Math.PI * 2 / 3) * x;
}
