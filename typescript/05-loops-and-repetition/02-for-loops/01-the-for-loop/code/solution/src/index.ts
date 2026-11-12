export function repeat(text: string, times: number): string {
  let result = "";

  for (let i = 0; i < times; i++) {
    result += text;
  }

  return result;
}

console.log(repeat("ha", 3));
console.log(repeat("!", 5));
