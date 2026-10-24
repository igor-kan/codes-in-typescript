/** rational function approximant order 2801 */
export function computePadeApprox2801(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
