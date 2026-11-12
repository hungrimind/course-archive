export function replaceFirst(text: string, oldWord: string, newWord: string): string {
  return text.replace(oldWord, newWord);
}

export function replaceEvery(text: string, oldWord: string, newWord: string): string {
  return text.replaceAll(oldWord, newWord);
}

console.log(replaceFirst("I like cats and cats", "cats", "dogs"));
console.log(replaceEvery("I like cats and cats", "cats", "dogs"));
