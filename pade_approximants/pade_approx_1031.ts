/** rational function approximant order 1031 */
export function computePadeApprox1031(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
