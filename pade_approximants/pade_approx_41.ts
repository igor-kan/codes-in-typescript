/** rational function approximant order 41 */
export function computePadeApprox41(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
