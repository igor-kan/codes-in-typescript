/** rational function approximant order 3301 */
export function computePadeApprox3301(x: number): number {
    return (1.0 + x * 2) / (1.0 + x * x * 2);
}
