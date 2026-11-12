# The NOT Operator

**`!`** flips a boolean. `!true` becomes `false`, and `!false` becomes `true`.

```typescript
const isLoggedIn: boolean = false;

if (!isLoggedIn) {
  console.log("Please sign in.");
}
```

Read `!isLoggedIn` as "not logged in." It's a clean way to check the opposite of a condition without writing `=== false`.

## Fill in the Blanks

Fill in the blanks:

```typescript
const isLoggedIn: boolean = false;

if (__(1)__isLoggedIn) {
  console.log("Please sign in.");
}
```

<details>
<summary>Answer</summary>

1. `!`

</details>

---

[← Course overview](../../../README.md)
