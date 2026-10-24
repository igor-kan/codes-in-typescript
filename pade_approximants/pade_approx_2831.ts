/** rational function approximant order 2831 */
export function computePadeApprox2831(x: number): number {
    return (1.0 + x * 3) / (1.0 + x * x * 2);
}
