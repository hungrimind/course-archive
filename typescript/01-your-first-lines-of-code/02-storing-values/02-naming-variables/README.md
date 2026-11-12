# Naming Variables

Variable names can contain letters, numbers, and underscores, but they **can't start with a number**. So `player1` works, but `1player` doesn't.

Good names describe what they hold. `age` beats `a`. `userName` beats `x`. Your future self will thank you for being specific.

```typescript
let userName = "Alice";
let itemCount = 5;
```

> [!tip]
> The convention in TypeScript is **camelCase**: start lowercase, capitalize each new word: `totalPrice`, `isLoggedIn`.

## Matching

Sort each item into the right category: **Valid variable name**, **Invalid variable name**, **Valid but poorly named**

- 1player
- a
- d2
- item-count
- itemCount
- let
- player1
- userName
- x

<details>
<summary>Answer</summary>

**Valid variable name**
- player1
- userName
- itemCount

**Invalid variable name**
- 1player
- item-count
- let

**Valid but poorly named**
- a
- x
- d2

</details>

---

[← Course overview](../../../README.md)
