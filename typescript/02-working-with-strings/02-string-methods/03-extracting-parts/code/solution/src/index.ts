export function getFirstFour(text: string): string {
  return text.slice(0, 4);
}

export function getRest(text: string): string {
  return text.slice(4);
}

console.log(getFirstFour("TypeScript"));
console.log(getRest("TypeScript"));
