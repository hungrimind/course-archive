export function sumAll(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

const numbers = [1, 2, 3, 4];
const sum = sumAll(numbers);

console.log(sum);
