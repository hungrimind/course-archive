# Using Tuples

Tuples shine when **position carries meaning**, like coordinates, key-value pairs, or returning multiple values from a function. TypeScript enforces the correct type at each index, so you always know what you're getting.

```typescript
function getUser(): [string, number] {
  return ["Alice", 30];
}

const [name, age] = getUser();
```

Destructuring a tuple works just like destructuring an array, but TypeScript knows `name` is a `string` and `age` is a `number` without any extra annotations.


## Challenge: Using Tuples

Create two functions that return tuples:

1. **`createCoordinate(x, y)`** -- Takes two numbers and returns a tuple of type `[number, number]` containing both values.

2. **`getUserInfo()`** -- Takes no arguments and returns a tuple of type `[string, number, boolean]` with the values `"Alice"`, `30`, and `true`.

Make sure to export both functions so the tests can import them.

## Challenge

## Challenge: Using Tuples

Create two functions that return tuples:

1. **`createCoordinate(x, y)`** -- Takes two numbers and returns a tuple of type `[number, number]` containing both values.

2. **`getUserInfo()`** -- Takes no arguments and returns a tuple of type `[string, number, boolean]` with the values `"Alice"`, `30`, and `true`.

Make sure to export both functions so the tests can import them.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
