/** rational function approximant order 2531 */
export function computePadeApprox2531(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
