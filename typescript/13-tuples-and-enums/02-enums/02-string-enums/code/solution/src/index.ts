export enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

export function getColorLabel(color: Color): string {
  switch (color) {
    case Color.Red:
      return "Red Color";
    case Color.Green:
      return "Green Color";
    case Color.Blue:
      return "Blue Color";
  }
}

console.log(getColorLabel(Color.Red));
console.log(getColorLabel(Color.Green));
console.log(getColorLabel(Color.Blue));
