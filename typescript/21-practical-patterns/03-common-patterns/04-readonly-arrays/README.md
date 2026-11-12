# Readonly Arrays

**`readonly number[]`** creates an array type that cannot be modified. No `push`, no `pop`, no index assignment. Any mutation attempt is a compile-time error.

```typescript
function total(prices: readonly number[]): number {
  // prices.push(99); - Error: push does not exist
  return prices.reduce((sum, p) => sum + p, 0);
}

const items = [10, 20, 30];
console.log(total(items)); // 60
```

This enforces immutability at the type level. The caller can still pass a regular array. TypeScript just prevents the function from changing it. You can also write it as `ReadonlyArray<number>`, which means the same thing.

## True or False

**1. True or false:** A function parameter typed as `readonly number[]` prevents the function from calling `.push()` on that array.

<details>
<summary>Answer</summary>

**True**: The `readonly` modifier removes mutating methods like `push`, `pop`, and index assignment from the type, so TypeScript will report a compile-time error if you try to use them.

</details>

**2. True or false:** `readonly number[]` and `ReadonlyArray<number>` mean different things in TypeScript.

<details>
<summary>Answer</summary>

**False**: They are exactly the same type. `readonly number[]` is shorthand syntax for `ReadonlyArray<number>`.

</details>

**3. True or false:** You cannot pass a regular `number[]` to a function that expects `readonly number[]`.

<details>
<summary>Answer</summary>

**False**: You can pass a regular mutable array to a parameter typed as `readonly number[]`. TypeScript just prevents the function from modifying the array; the caller's original array is still mutable on their side.

</details>

**4. True or false:** The `readonly` modifier on arrays is enforced at runtime and will throw an error if you attempt to mutate the array.

<details>
<summary>Answer</summary>

**False**: The `readonly` modifier is a compile-time-only constraint. It has no effect at runtime, because TypeScript's type annotations are erased when the code is compiled to JavaScript.

</details>

---

[← Course overview](../../../README.md)
