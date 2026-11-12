export function toNumber(value: string): number {
  return Number(value);
}

export function addFromStrings(a: string, b: string): number {
  return Number(a) + Number(b);
}

console.log(toNumber("42"));
console.log(toNumber("hello"));
console.log(addFromStrings("10", "20"));
