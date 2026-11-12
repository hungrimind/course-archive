# Template Literal Types

**Template literal types** bring backtick string syntax into the type system. You can build types from string patterns, and TypeScript enforces them at compile time.

```typescript
type EventName = `on${string}`;

const a: EventName = "onClick";   // ok
const b: EventName = "click";     // error
```

Combine them with union types and the results multiply out automatically. `` type Color = "red" | "blue" `` and `` type Shade = `light-${Color}` `` gives you `"light-red" | "light-blue"`, no manual listing needed.


## Assignment

1. Define the `Shade` type using template literal syntax to combine `"light-"` and `"dark-"` prefixes with each `Color` value.
2. Implement the `applyShade` function so it returns `"Applying {shade}"` for the given shade.

## Challenge

1. Define the `Shade` type using template literal syntax to combine `"light-"` and `"dark-"` prefixes with each `Color` value.
2. Implement the `applyShade` function so it returns `"Applying {shade}"` for the given shade.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
