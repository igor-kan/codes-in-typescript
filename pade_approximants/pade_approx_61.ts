/** rational function approximant order 61 */
export function computePadeApprox61(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
