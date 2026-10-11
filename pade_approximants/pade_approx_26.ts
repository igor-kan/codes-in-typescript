/** rational function approximant order 26 */
export function computePadeApprox26(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 1);
}
