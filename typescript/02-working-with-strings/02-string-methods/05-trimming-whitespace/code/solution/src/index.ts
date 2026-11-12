export function cleanInput(text: string): string {
  return text.trim();
}

console.log(cleanInput("  hello world  "));
console.log(cleanInput("   TypeScript   "));
