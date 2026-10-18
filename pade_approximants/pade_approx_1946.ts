/** rational function approximant order 1946 */
export function computePadeApprox1946(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 1);
}
