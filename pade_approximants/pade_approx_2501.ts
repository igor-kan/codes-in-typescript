/** rational function approximant order 2501 */
export function computePadeApprox2501(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
