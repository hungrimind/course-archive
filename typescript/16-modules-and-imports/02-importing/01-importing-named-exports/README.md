# Importing Named Exports

Use curly braces to pull in **named exports** from another file. The names must match exactly what was exported.

```typescript
import { TAX_RATE, calculateTotal } from "./billing";

const total = calculateTotal(49.99);
console.log(total);
```

The path is relative to the current file and you leave off the `.ts` extension. You can import as many named exports as you need in a single `import` statement, just separate them with commas.


## Assignment

Implement the `formatPrice` function so it returns the amount formatted with a dollar sign and exactly two decimal places. For example, `formatPrice(107)` should return `"$107.00"`.

Expected output:
```
Tax rate: 0.07
Price: $49.99
Total with tax: $53.49
```

## Challenge

Implement the `formatPrice` function so it returns the amount formatted with a dollar sign and exactly two decimal places. For example, `formatPrice(107)` should return `"$107.00"`.

Expected output:
```
Tax rate: 0.07
Price: $49.99
Total with tax: $53.49
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
