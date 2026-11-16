export interface PatternFinder {
  findAll(text: string, pattern: string): number[];
  smallestPeriod(s: string): number;
}
