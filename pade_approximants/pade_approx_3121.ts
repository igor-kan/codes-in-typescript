/** rational function approximant order 3121 */
export function computePadeApprox3121(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
