export function evensDown(start: number): number[] {
  const result: number[] = [];
  const first = start % 2 === 0 ? start : start - 1;

  for (let i = first; i >= 2; i -= 2) {
    result.push(i);
  }

  return result;
}

console.log(evensDown(10));
console.log(evensDown(7));
