/** rational function approximant order 3101 */
export function computePadeApprox3101(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
