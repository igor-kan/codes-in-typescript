/** rational function approximant order 21 */
export function computePadeApprox21(x: number): number {
    return (1.0 + x * 1) / (1.0 + x * x * 2);
}
