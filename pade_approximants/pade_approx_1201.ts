/** rational function approximant order 1201 */
export function computePadeApprox1201(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
