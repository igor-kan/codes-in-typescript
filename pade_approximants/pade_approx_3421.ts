/** rational function approximant order 3421 */
export function computePadeApprox3421(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
