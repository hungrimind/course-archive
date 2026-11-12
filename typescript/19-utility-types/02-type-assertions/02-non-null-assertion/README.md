# Non-Null Assertion

The **non-null assertion operator** (`!`) tells TypeScript a value is definitely not `null` or `undefined`. Place it right after the expression.

```typescript
const element = document.getElementById("app");

element!.style.color = "red";
```

Without the `!`, TypeScript complains because `getElementById` can return `null`. The `!` silences that warning.

Like `as`, this is a promise *you* make to the compiler, not a runtime check. If the element actually is `null`, your code will crash. When you're not 100% certain, prefer optional chaining (`?.`) or a proper null check instead.

## Fill in the Blanks

Fill in the blanks:

```typescript
const element = document.getElementById("app");

element__(1)__.style.color = "red";
```

<details>
<summary>Answer</summary>

1. `!`

</details>

---

[← Course overview](../../../README.md)
