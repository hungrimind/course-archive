# Tagged Unions

A **discriminated union** is a union where every member shares a common property, called a **tag**, that TypeScript uses to tell them apart. Each tag value is a unique literal, so a simple `if` or `switch` on that property narrows the type automatically.

```typescript
type Shape =
  | { type: "circle"; radius: number }
  | { type: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.type) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}
```

The `type` property is the tag. Inside each `case`, TypeScript knows exactly which variant you have, so `shape.radius` and `shape.side` just work, no casting needed.


## Assignment

Complete the `describePayment` function. Use a `switch` on the `kind` tag to return a description string. For `"card"`, return `"Card ending in XXXX"` (where XXXX is `last4`). For `"cash"`, return `"Cash payment of $X"` (where X is `amount`).

## Challenge

Complete the `describePayment` function. Use a `switch` on the `kind` tag to return a description string. For `"card"`, return `"Card ending in XXXX"` (where XXXX is `last4`). For `"cash"`, return `"Cash payment of $X"` (where X is `amount`).

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
