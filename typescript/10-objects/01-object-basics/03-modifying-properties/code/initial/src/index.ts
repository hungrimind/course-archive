export function updatePerson(person: { name: string; age: number }, newName: string, newAge: number): { name: string; age: number } {

}

const person = { name: "Alice", age: 30 };
const updated = updatePerson(person, "Bob", 31);
console.log(updated.name);
console.log(updated.age);
