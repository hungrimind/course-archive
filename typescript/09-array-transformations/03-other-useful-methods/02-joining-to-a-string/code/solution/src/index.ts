export function joinWords(words: string[], separator: string): string {
  return words.join(separator);
}

const words = ["Hello", "World"];

console.log(joinWords(words, " "));
console.log(joinWords(words, "-"));
console.log(joinWords(words, ""));
