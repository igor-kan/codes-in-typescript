/** rational function approximant order 3131 */
export function computePadeApprox3131(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
