export function remainder(a: number, b: number): number {
  return a % b;
}

export function isEven(n: number): boolean {
  return n % 2 === 0;
}

console.log(remainder(10, 3));
console.log(isEven(8));
console.log(isEven(7));
