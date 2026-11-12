# Objects as Parameters

Functions can accept an **object as a parameter** instead of multiple separate values. This keeps calls readable and lets TypeScript verify the shape of the data you pass in.

```typescript
function greet(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age}`);
}

greet({ name: "Alice", age: 30 });
```

With one parameter instead of two or three, you never have to remember argument order. The property names make each value self-documenting.


## Assignment

Write a `formatMovie` function that accepts a movie object with `title` (string) and `year` (number) properties. Return the string in the format `"Title (Year)"`, e.g. `"Inception (2010)"`.

## Challenge

Write a `formatMovie` function that accepts a movie object with `title` (string) and `year` (number) properties. Return the string in the format `"Title (Year)"`, e.g. `"Inception (2010)"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
