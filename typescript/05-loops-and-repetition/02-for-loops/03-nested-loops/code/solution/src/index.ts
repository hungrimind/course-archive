export function grid(rows: number, cols: number): string[] {
  const result: string[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result.push(`${r},${c}`);
    }
  }

  return result;
}

console.log(grid(2, 3));
