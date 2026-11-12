export function repeatHello(times: number): string[] {
  const lines: string[] = [];

  lines.push('Hello');
  lines.push('Hello');
  lines.push('Hello');

  return lines;
}

const lines = repeatHello(3);

console.log(lines[0]);
console.log(lines[1]);
console.log(lines[2]);
