export type Color = "red" | "blue";
export type Shade = `light-${Color}` | `dark-${Color}`;

export function applyShade(shade: Shade): string {
  return `Applying ${shade}`;
}

console.log(applyShade("light-red"));
console.log(applyShade("dark-blue"));
console.log(applyShade("light-blue"));
console.log(applyShade("dark-red"));
