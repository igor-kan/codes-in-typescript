/** rational function approximant order 106 */
export function computePadeApprox106(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 1);
}
