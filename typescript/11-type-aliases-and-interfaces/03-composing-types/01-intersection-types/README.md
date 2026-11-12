# Intersection Types

An **intersection type** uses `&` to combine two types into one that has all properties of both. It's the type alias equivalent of `extends` for interfaces.

```typescript
type Person = { name: string; age: number };
type Employment = { company: string; role: string };

type Employee = Person & Employment;

const dev: Employee = { name: "Sam", age: 28, company: "Acme", role: "dev" };
```

Every property from both sides is required. Think of `&` as "and" -- the result must satisfy this type *and* that type.


# Intersection Types

## Objective

Use an intersection type (`&`) to combine two type aliases into one, and write a function that summarizes the combined type.

## Requirements

1. Export a type alias `Person` with properties `name: string` and `age: number`.
2. Export a type alias `Employment` with properties `company: string` and `role: string`.
3. Export a type alias `Employee` that is the intersection of `Person` and `Employment`.
4. Export a function `summarize(employee: Employee): string` that returns `"<name> is a <role> at <company>"`.
5. Log the result of calling `summarize` with `{ name: "Sam", age: 28, company: "Acme", role: "dev" }` using `console.log`.

## Challenge

# Intersection Types

## Objective

Use an intersection type (`&`) to combine two type aliases into one, and write a function that summarizes the combined type.

## Requirements

1. Export a type alias `Person` with properties `name: string` and `age: number`.
2. Export a type alias `Employment` with properties `company: string` and `role: string`.
3. Export a type alias `Employee` that is the intersection of `Person` and `Employment`.
4. Export a function `summarize(employee: Employee): string` that returns `"<name> is a <role> at <company>"`.
5. Log the result of calling `summarize` with `{ name: "Sam", age: 28, company: "Acme", role: "dev" }` using `console.log`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
