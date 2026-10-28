/** rational function approximant order 3211 */
export function computePadeApprox3211(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
