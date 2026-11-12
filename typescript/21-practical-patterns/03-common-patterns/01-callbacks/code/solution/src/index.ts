export function transform(items: string[], fn: (s: string) => string): string[] {
  return items.map(fn);
}

export function repeat(n: number, fn: (i: number) => void): void {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}
