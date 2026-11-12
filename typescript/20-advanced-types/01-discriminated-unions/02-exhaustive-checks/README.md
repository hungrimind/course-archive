# Exhaustive Checks

An **exhaustive check** guarantees you handle every variant in a discriminated union. If someone adds a new member later, TypeScript flags every spot you missed.

The trick is assigning the leftover value to `never` in a `default` case. Since `never` means "no possible value," TypeScript errors if any variant could actually reach it.

```typescript
function area(shape: Shape): number {
  switch (shape.type) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
```

Add a `"triangle"` variant to `Shape` and this function immediately shows a compile error at `_exhaustive`, telling you exactly where to add the new case.


## Assignment

A `Light` type represents a traffic light with three states: `"red"`, `"yellow"`, and `"green"`. Implement the `getAction` function using a switch statement that returns `"stop"` for red, `"caution"` for yellow, and `"go"` for green. Add a `default` case with an exhaustive check by assigning the value to `const _exhaustive: never` and returning it.

## Challenge

A `Light` type represents a traffic light with three states: `"red"`, `"yellow"`, and `"green"`. Implement the `getAction` function using a switch statement that returns `"stop"` for red, `"caution"` for yellow, and `"go"` for green. Add a `default` case with an exhaustive check by assigning the value to `const _exhaustive: never` and returning it.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
