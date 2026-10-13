/** rational function approximant order 1021 */
export function computePadeApprox1021(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
