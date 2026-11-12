export interface Person {
  name: string;
  age: number;
}

export interface Employee extends Person {
  company: string;
}

export function introduce(employee: Employee): string {
  return `Hi, I'm ${employee.name}, age ${employee.age}, working at ${employee.company}`;
}

console.log(introduce({ name: "Sam", age: 28, company: "Acme" }));