export function containsWord(sentence: string, word: string): boolean {
  return sentence.includes(word);
}

console.log(containsWord("TypeScript is great", "Script"));
console.log(containsWord("TypeScript is great", "script"));
