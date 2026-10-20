/** rational function approximant order 2321 */
export function computePadeApprox2321(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
