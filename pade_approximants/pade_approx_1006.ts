/** rational function approximant order 1006 */
export function computePadeApprox1006(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 1);
}
