/** rational function approximant order 111 */
export function computePadeApprox111(x: number): number {
    return (1.0 + x * 1) / (1.0 + x * x * 2);
}
