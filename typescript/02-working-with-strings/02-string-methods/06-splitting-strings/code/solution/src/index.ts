export function splitByComma(text: string): string[] {
  return text.split(",");
}

export function splitIntoChars(text: string): string[] {
  return text.split("");
}

const colors = splitByComma("red,green,blue");
console.log(colors);

const chars = splitIntoChars("hi");
console.log(chars);
