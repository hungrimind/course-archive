export function oddOnly(limit: number): number[] {
  const result: number[] = [];

  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      continue;
    }
    result.push(i);
  }

  return result;
}

console.log(oddOnly(10));
console.log(oddOnly(7));
