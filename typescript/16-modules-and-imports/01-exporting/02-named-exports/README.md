# Named Exports

A **named export** makes a specific function, variable, or type available to other files. Just put the `export` keyword in front of it.

```typescript
export const TAX_RATE = 0.07;

export function calculateTotal(price: number): number {
  return price + price * TAX_RATE;
}
```

A single file can have as many named exports as you want. Each one is imported by its exact name, which you'll see in the next section.


## Assignment

Export a constant `PI` set to `3.14159` and a function `circleArea` that takes a `radius` parameter and returns the area of a circle. Use the `export` keyword directly on each declaration so they are named exports.

## Challenge

Export a constant `PI` set to `3.14159` and a function `circleArea` that takes a `radius` parameter and returns the area of a circle. Use the `export` keyword directly on each declaration so they are named exports.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
