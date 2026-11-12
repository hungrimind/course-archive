# Nullish Coalescing

The **`??` operator** provides a fallback value when the left side is `null` or `undefined` -- and only those two values.

```typescript
const input: string | null = null;
const name = input ?? "Guest";  // "Guest"

const count: number = 0;
const total = count ?? 10;      // 0 (not 10!)
```

This is different from `||`, which treats `0`, `""`, and `false` as falsy and would replace them with the fallback. The `??` operator only kicks in for `null` and `undefined`, making it the perfect companion to optional chaining. You'll often see them together: `user?.name ?? "Anonymous"`.


## Assignment

Complete the two functions using the nullish coalescing operator (`??`):

1. `getDisplayName` should return the given `name`, or `"Guest"` if it is `null` or `undefined`.
2. `getCount` should return the given `count`, or `10` if it is `null`. Note that `0` is a valid count and should NOT be replaced.

Expected output:
```
Alice
Guest
Guest
0
10
```

## Challenge

Complete the two functions using the nullish coalescing operator (`??`):

1. `getDisplayName` should return the given `name`, or `"Guest"` if it is `null` or `undefined`.
2. `getCount` should return the given `count`, or `10` if it is `null`. Note that `0` is a valid count and should NOT be replaced.

Expected output:
```
Alice
Guest
Guest
0
10
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
