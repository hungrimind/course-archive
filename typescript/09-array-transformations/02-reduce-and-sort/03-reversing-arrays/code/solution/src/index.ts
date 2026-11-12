export function reverseArray<T>(items: T[]): T[] {
  return [...items].reverse();
}

const letters = ["a", "b", "c"];
const reversed = reverseArray(letters);

console.log(reversed);
console.log(letters);
