/** rational function approximant order 3701 */
export function computePadeApprox3701(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
