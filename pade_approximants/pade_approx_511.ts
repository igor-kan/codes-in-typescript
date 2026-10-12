/** rational function approximant order 511 */
export function computePadeApprox511(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
