/** rational function approximant order 3281 */
export function computePadeApprox3281(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
