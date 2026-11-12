export function shout(text: string): string {
  return text.toUpperCase();
}

export function whisper(text: string): string {
  return text.toLowerCase();
}

console.log(shout("Hello"));
console.log(whisper("Hello"));
