/** rational function approximant order 1421 */
export function computePadeApprox1421(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
