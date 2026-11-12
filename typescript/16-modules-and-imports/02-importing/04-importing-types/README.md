# Importing Types

**`import type`** tells TypeScript that an import is only used for type-checking and should be erased from the final JavaScript output.

```typescript
import type { Person } from "./types";

function greet(person: Person): string {
  return `Hello, ${person.name}`;
}
```

Regular `import` works for types too, but `import type` makes the intent explicit. It also prevents you from accidentally using a type as a runtime value. TypeScript will flag an error if you try.


## Assignment

1. Export a `Coordinate` type with `x` (number) and `y` (number) properties.
2. Complete `formatCoordinate` so it returns the string `"(x, y)"` for a given coordinate.
3. Complete `distance` to return the Euclidean distance between two coordinates using `Math.sqrt` and `**`.

Expected output:
```
(3, 4)
5
```

## Challenge

1. Export a `Coordinate` type with `x` (number) and `y` (number) properties.
2. Complete `formatCoordinate` so it returns the string `"(x, y)"` for a given coordinate.
3. Complete `distance` to return the Euclidean distance between two coordinates using `Math.sqrt` and `**`.

Expected output:
```
(3, 4)
5
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
