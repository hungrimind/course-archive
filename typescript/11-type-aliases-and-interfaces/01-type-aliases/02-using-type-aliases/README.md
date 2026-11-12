# Using Type Aliases

A type alias works anywhere you'd write a type: variable annotations, function parameters, and return types. One definition, many uses.

```typescript
type Point = { x: number; y: number };

function distance(a: Point, b: Point): number {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}
```

If the shape changes later, you update the alias in one place and every usage stays in sync.


Create a type alias called `Rectangle` with `width` and `height` number properties. Export a `perimeter` function that takes a `Rectangle` and returns its perimeter. Also export an `area` function that takes a `Rectangle` and returns its area.

## Challenge

Create a type alias called `Rectangle` with `width` and `height` number properties. Export a `perimeter` function that takes a `Rectangle` and returns its perimeter. Also export an `area` function that takes a `Rectangle` and returns its area.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
