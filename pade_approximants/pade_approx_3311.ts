/** rational function approximant order 3311 */
export function computePadeApprox3311(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
