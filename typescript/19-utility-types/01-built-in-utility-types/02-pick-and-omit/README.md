# Pick and Omit

**`Pick<T, Keys>`** creates a new type by pulling only the properties you name from an existing type. **`Omit<T, Keys>`** does the reverse: it creates a type with everything *except* the keys you specify.

```typescript
interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type UserPreview = Pick<User, "name" | "age">;
type SafeUser = Omit<User, "password">;
```

Both are great for creating variations of a type without rewriting its properties. Need a public-facing version of a `User`? `Omit` the sensitive fields.


# Pick and Omit

## Objective

Use `Pick` and `Omit` to create derived types from a `User` interface and write functions that return the narrowed shapes.

## Requirements

1. Export an `interface` called `User` with properties: `name: string`, `age: number`, `email: string`, and `password: string`.
2. Export a type `UserPreview` using `Pick<User, "name" | "age">`.
3. Export a type `SafeUser` using `Omit<User, "password">`.
4. Export a function `getPreview(user: User): UserPreview` that returns an object with only `name` and `age`.
5. Export a function `getSafeUser(user: User): SafeUser` that returns an object with everything except `password`.
6. Create a user `{ name: "Alice", age: 30, email: "alice@example.com", password: "secret123" }` and log the results of both functions with `console.log`.

## Challenge

# Pick and Omit

## Objective

Use `Pick` and `Omit` to create derived types from a `User` interface and write functions that return the narrowed shapes.

## Requirements

1. Export an `interface` called `User` with properties: `name: string`, `age: number`, `email: string`, and `password: string`.
2. Export a type `UserPreview` using `Pick<User, "name" | "age">`.
3. Export a type `SafeUser` using `Omit<User, "password">`.
4. Export a function `getPreview(user: User): UserPreview` that returns an object with only `name` and `age`.
5. Export a function `getSafeUser(user: User): SafeUser` that returns an object with everything except `password`.
6. Create a user `{ name: "Alice", age: 30, email: "alice@example.com", password: "secret123" }` and log the results of both functions with `console.log`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
