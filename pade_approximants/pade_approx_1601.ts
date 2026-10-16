/** rational function approximant order 1601 */
export function computePadeApprox1601(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
