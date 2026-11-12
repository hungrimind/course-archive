# Partial and Required

**`Partial<T>`** takes a type and makes every property optional. This is perfect for update functions where you only need to change a few fields.

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

function updateUser(user: User, changes: Partial<User>) {
  return { ...user, ...changes };
}
```

**`Required<T>`** does the exact opposite: it makes every property mandatory, even ones marked with `?`. Think of `Partial` and `Required` as two sides of the same coin.


# Partial and Required

## Objective

Use `Partial` and `Required` utility types to build functions that update and create a `Todo` object.

## Requirements

1. Export an `interface` called `Todo` with properties: `title: string`, `description: string`, and `completed: boolean`.
2. Export a function `updateTodo(todo: Todo, changes: Partial<Todo>): Todo` that merges the changes into the original todo using the spread operator and returns the result.
3. Export a function `createTodo(fields: Required<Todo>): Todo` that accepts an object where all fields are required and returns it as a `Todo`.
4. Create a todo with `{ title: "Learn TypeScript", description: "Study utility types", completed: false }`, update it with `{ completed: true }`, and log the result with `console.log`.

## Challenge

# Partial and Required

## Objective

Use `Partial` and `Required` utility types to build functions that update and create a `Todo` object.

## Requirements

1. Export an `interface` called `Todo` with properties: `title: string`, `description: string`, and `completed: boolean`.
2. Export a function `updateTodo(todo: Todo, changes: Partial<Todo>): Todo` that merges the changes into the original todo using the spread operator and returns the result.
3. Export a function `createTodo(fields: Required<Todo>): Todo` that accepts an object where all fields are required and returns it as a `Todo`.
4. Create a todo with `{ title: "Learn TypeScript", description: "Study utility types", completed: false }`, update it with `{ completed: true }`, and log the result with `console.log`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
