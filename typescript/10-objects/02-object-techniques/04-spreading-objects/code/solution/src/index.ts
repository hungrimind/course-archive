export function withUpdatedAge(person: { name: string; age: number }, newAge: number): { name: string; age: number } {
  return { ...person, age: newAge };
}

const original = { name: "Alice", age: 30 };
const updated = withUpdatedAge(original, 31);
console.log(updated.name);
console.log(updated.age);
console.log(original.age);
