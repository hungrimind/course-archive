export function mergeArrays<T>(first: T[], second: T[]): T[] {
  return [...first, ...second];
}

export function copyArray<T>(items: T[]): T[] {
  return [...items];
}

const first = [1, 2];
const second = [3, 4];

console.log(mergeArrays(first, second));
console.log(copyArray(first));
