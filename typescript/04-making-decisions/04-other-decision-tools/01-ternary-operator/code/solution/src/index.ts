export function getLabel(age: number): string {
  const label: string = age >= 18 ? "adult" : "minor";
  return label;
}

console.log(getLabel(20));
console.log(getLabel(15));
