export function countdown(start: number): string[] {
  const result: string[] = [];
  let current = start;

  while (current > 0) {
    result.push(`T-minus ${current}`);
    current--;
  }

  result.push("Liftoff!");
  return result;
}

console.log(countdown(3));
