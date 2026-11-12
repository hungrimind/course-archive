export function repeatHello(times: number): string[] {
  const lines: string[] = [];

  for (let i = 0; i < times; i++) {
    lines.push('Hello');
  }

  return lines;
}

const lines = repeatHello(3);

for (let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
}
