export function stringify(value: string | number | boolean): string {
  if (typeof value === "string") {
    return "text: " + value;
  }
  if (typeof value === "number") {
    return "number: " + value;
  }
  return "boolean: " + value;
}
