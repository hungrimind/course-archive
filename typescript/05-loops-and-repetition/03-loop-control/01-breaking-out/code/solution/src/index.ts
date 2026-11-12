export function firstNegative(numbers: number[]): number {
  let result = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      result = numbers[i];
      break;
    }
  }

  return result;
}

console.log(firstNegative([3, 7, -2, 5, -8]));
console.log(firstNegative([1, 2, 3]));
