const person = { name: "Alice", age: 30 };

export function getName(obj: { name: string; age: number }): string {

}

export function getAge(obj: { name: string; age: number }): number {

}

console.log(getName(person));
console.log(getAge(person));
