export function doubleNumbers(numbers: number[]): number[] {
  return numbers.map(n => n * 2);
}

const numbers = [1, 2, 3];
const doubled = doubleNumbers(numbers);

console.log(doubled);
console.log(numbers);
