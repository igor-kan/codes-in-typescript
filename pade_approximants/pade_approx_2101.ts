/** rational function approximant order 2101 */
export function computePadeApprox2101(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
