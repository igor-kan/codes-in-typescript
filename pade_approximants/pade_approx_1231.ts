/** rational function approximant order 1231 */
export function computePadeApprox1231(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
