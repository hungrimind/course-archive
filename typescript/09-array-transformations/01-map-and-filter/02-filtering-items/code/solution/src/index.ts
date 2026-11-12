export function filterBigNumbers(numbers: number[]): number[] {
  return numbers.filter(n => n > 3);
}

const numbers = [1, 2, 3, 4, 5];
const big = filterBigNumbers(numbers);

console.log(big);
console.log(numbers);
