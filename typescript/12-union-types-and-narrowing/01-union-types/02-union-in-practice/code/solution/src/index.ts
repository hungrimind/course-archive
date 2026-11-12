export function describeValue(value: string | number): string {
  if (typeof value === "number") {
    return `number: ${value}`;
  }
  return `text: ${value}`;
}

console.log(describeValue(42));
console.log(describeValue("hello"));
