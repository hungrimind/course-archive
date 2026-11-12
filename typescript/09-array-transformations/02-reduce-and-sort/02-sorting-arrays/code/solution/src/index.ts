export function sortLowestFirst(scores: number[]): number[] {
  return [...scores].sort((a, b) => a - b);
}

export function sortHighestFirst(scores: number[]): number[] {
  return [...scores].sort((a, b) => b - a);
}

const scores = [82, 95, 67, 73, 88];

console.log(sortLowestFirst(scores));
console.log(sortHighestFirst(scores));
