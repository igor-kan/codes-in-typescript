/** rational function approximant order 1066 */
export function computePadeApprox1066(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 1);
}
