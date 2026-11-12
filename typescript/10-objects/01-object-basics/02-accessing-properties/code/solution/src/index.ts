const person = { name: "Alice", age: 30 };

export function getName(obj: { name: string; age: number }): string {
  return obj.name;
}

export function getAge(obj: { name: string; age: number }): number {
  return obj.age;
}

console.log(getName(person));
console.log(getAge(person));
