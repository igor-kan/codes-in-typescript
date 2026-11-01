/** rational function approximant order 3401 */
export function computePadeApprox3401(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
