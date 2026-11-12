# The OR Operator

**`||`** is `true` when **at least one** side is `true`. It only returns `false` if both sides are `false`.

```typescript
const isAdmin: boolean = false;
const isOwner: boolean = true;

if (isAdmin || isOwner) {
  console.log("Access granted.");
}
```

Like `&&`, it short-circuits: if the left side is `true`, TypeScript doesn't bother checking the right side.

## Fill in the Blanks

Fill in the blanks:

```typescript
const isAdmin: boolean = false;
const isOwner: boolean = true;

if (isAdmin __(1)__ isOwner) {
  console.log("Access granted.");
}
```

<details>
<summary>Answer</summary>

1. `||`

</details>

---

[← Course overview](../../../README.md)
