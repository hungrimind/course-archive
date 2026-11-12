# Promise Typing

An async function's return type is **`Promise<T>`** where `T` is the type of the resolved value. TypeScript can infer this, but adding it explicitly makes your API clear.

```typescript
interface User {
  name: string;
  age: number;
}

async function getUser(): Promise<User> {
  const res = await fetch("/api/user");
  return res.json();
}
```

When you `await` a `Promise<User>`, the result is typed as `User`. The `Promise` wrapper is unwrapped automatically by `await`.


## Assignment

Define an interface called `Product` with two properties: `name` of type `string` and `price` of type `number`.

Create an `async` function called `fetchProduct` that takes `name` (string) and `price` (number) parameters and returns a `Promise<Product>`. Then create an `async` function called `getProductLabel` that accepts a `Promise<Product>` and returns a `Promise<string>` formatted as `"name - $price"`.

## Challenge

Define an interface called `Product` with two properties: `name` of type `string` and `price` of type `number`.

Create an `async` function called `fetchProduct` that takes `name` (string) and `price` (number) parameters and returns a `Promise<Product>`. Then create an `async` function called `getProductLabel` that accepts a `Promise<Product>` and returns a `Promise<string>` formatted as `"name - $price"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
