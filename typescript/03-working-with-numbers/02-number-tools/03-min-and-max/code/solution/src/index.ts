export function getMin(a: number, b: number, c: number): number {
  return Math.min(a, b, c);
}

export function getMax(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

console.log(getMin(3, 7, 2));
console.log(getMax(3, 7, 2));
console.log(clamp(150, 0, 100));
