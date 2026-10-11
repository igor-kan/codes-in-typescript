/** rational function approximant order 6 */
export function computePadeApprox6(x: number): number {
    return (1.0 + x * 1) / (1.0 + x * x * 1);
}
