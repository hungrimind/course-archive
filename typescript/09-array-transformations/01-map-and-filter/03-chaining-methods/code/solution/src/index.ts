export function filterAndScale(numbers: number[]): number[] {
  return numbers
    .filter(n => n > 0)
    .map(n => n * 10);
}

const numbers = [-2, -1, 0, 1, 2, 3];
const result = filterAndScale(numbers);

console.log(result);
