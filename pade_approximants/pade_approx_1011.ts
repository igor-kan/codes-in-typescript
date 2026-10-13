/** rational function approximant order 1011 */
export function computePadeApprox1011(x: number): number {
    return (1.0 + x * 1) / (1.0 + x * x * 2);
}
