/** rational function approximant order 1001 */
export function computePadeApprox1001(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
