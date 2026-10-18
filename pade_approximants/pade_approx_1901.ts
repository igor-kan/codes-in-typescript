/** rational function approximant order 1901 */
export function computePadeApprox1901(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
