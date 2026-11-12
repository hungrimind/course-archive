export type Person = { name: string; age: number };
export type Employment = { company: string; role: string };

export type Employee = Person & Employment;

export function summarize(employee: Employee): string {
  return `${employee.name} is a ${employee.role} at ${employee.company}`;
}

console.log(summarize({ name: "Sam", age: 28, company: "Acme", role: "dev" }));