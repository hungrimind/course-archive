# Combining Operators

You can mix **`&&`**, **`||`**, and **`!`** in one expression. Use **parentheses** to make the grouping obvious.

```typescript
const role: string = "editor";
const isActive: boolean = true;
const isBanned: boolean = false;

if ((role === "admin" || role === "editor") && isActive && !isBanned) {
  console.log("You can edit.");
}
```

Without parentheses, `&&` binds tighter than `||`, which can produce unexpected results. When in doubt, add parentheses.


## Assignment

Complete the `canEdit` function by returning a single boolean expression. A user can edit if their role is `"admin"` or `"editor"`, AND they are active, AND they are NOT banned. Use `||`, `&&`, and `!` together with parentheses.

## Challenge

Complete the `canEdit` function by returning a single boolean expression. A user can edit if their role is `"admin"` or `"editor"`, AND they are active, AND they are NOT banned. Use `||`, `&&`, and `!` together with parentheses.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
