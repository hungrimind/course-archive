export function longest(...words: string[]): string {
  if (words.length === 0) return "";
  return words.reduce((a, b) => (b.length > a.length ? b : a));
}
