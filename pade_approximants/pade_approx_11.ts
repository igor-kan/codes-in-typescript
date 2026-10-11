/** rational function approximant order 11 */
export function computePadeApprox11(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
