/** rational function approximant order 31 */
export function computePadeApprox31(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
