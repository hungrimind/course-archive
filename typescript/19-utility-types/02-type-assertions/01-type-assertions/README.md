# Type Assertions

A **type assertion** tells TypeScript "trust me, I know what this is." You write it with the **`as`** keyword.

```typescript
const element = document.getElementById("username");
const input = element as HTMLInputElement;

console.log(input.value);
```

Without the assertion, TypeScript only knows `element` is `HTMLElement | null`. By asserting `as HTMLInputElement`, you gain access to input-specific properties like `.value`.

> [!warning]
> Assertions bypass the type checker. If you assert the wrong type, TypeScript won't catch the mistake. You'll get a runtime error instead. Use them sparingly.


# Type Assertions

## Objective

Use the `as` keyword to assert an `unknown` value into a typed shape and compute its area.

## Requirements

1. Export an `interface` called `Circle` with `kind: "circle"` and `radius: number`.
2. Export an `interface` called `Square` with `kind: "square"` and `side: number`.
3. Export a type `Shape` that is `Circle | Square`.
4. Export a function `getArea(shape: unknown): number` that:
   - Asserts `shape` as `Shape` using the `as` keyword.
   - If `kind` is `"circle"`, returns `Math.round(Math.PI * radius * radius * 100) / 100`.
   - If `kind` is `"square"`, returns `side * side`.
5. Log the area of `{ kind: "circle", radius: 5 }` and `{ kind: "square", side: 4 }` with `console.log`.

## Challenge

# Type Assertions

## Objective

Use the `as` keyword to assert an `unknown` value into a typed shape and compute its area.

## Requirements

1. Export an `interface` called `Circle` with `kind: "circle"` and `radius: number`.
2. Export an `interface` called `Square` with `kind: "square"` and `side: number`.
3. Export a type `Shape` that is `Circle | Square`.
4. Export a function `getArea(shape: unknown): number` that:
   - Asserts `shape` as `Shape` using the `as` keyword.
   - If `kind` is `"circle"`, returns `Math.round(Math.PI * radius * radius * 100) / 100`.
   - If `kind` is `"square"`, returns `side * side`.
5. Log the area of `{ kind: "circle", radius: 5 }` and `{ kind: "square", side: 4 }` with `console.log`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
