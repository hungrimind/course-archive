export function introduce(person: { name: string; age: number; city: string }): string {
  const { name, age } = person;
  return `${name} is ${age}`;
}

const person = { name: "Alice", age: 30, city: "Oslo" };
console.log(introduce(person));
