# Extending Interfaces

The `extends` keyword builds a new interface on top of an existing one. The child interface inherits all the parent's properties and adds its own, without repeating anything.

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  company: string;
}

const dev: Employee = { name: "Sam", age: 28, company: "Acme" };
```

An `Employee` must have `name`, `age`, and `company`. You get all of `Person` for free.


# Extending Interfaces

## Objective

Use `extends` to build an `Employee` interface on top of a `Person` interface, and write a function that introduces an employee.

## Requirements

1. Export an `interface` called `Person` with properties `name: string` and `age: number`.
2. Export an `interface` called `Employee` that extends `Person` and adds `company: string`.
3. Export a function `introduce(employee: Employee): string` that returns `"Hi, I'm <name>, age <age>, working at <company>"`.
4. Log the result of calling `introduce` with `{ name: "Sam", age: 28, company: "Acme" }` using `console.log`.

## Challenge

# Extending Interfaces

## Objective

Use `extends` to build an `Employee` interface on top of a `Person` interface, and write a function that introduces an employee.

## Requirements

1. Export an `interface` called `Person` with properties `name: string` and `age: number`.
2. Export an `interface` called `Employee` that extends `Person` and adds `company: string`.
3. Export a function `introduce(employee: Employee): string` that returns `"Hi, I'm <name>, age <age>, working at <company>"`.
4. Log the result of calling `introduce` with `{ name: "Sam", age: 28, company: "Acme" }` using `console.log`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
