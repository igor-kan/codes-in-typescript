/** rational function approximant order 1211 */
export function computePadeApprox1211(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
