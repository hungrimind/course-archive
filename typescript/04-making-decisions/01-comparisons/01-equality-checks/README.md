# Equality Checks

**`===`** checks if two values are exactly equal and returns `true` or `false`.

```typescript
const age: number = 25;
const isExactly25: boolean = age === 25; // true
const isExactly30: boolean = age === 30; // false
```

Always use **triple equals** (`===`). Double equals (`==`) silently converts types before comparing, which leads to surprises like `0 == ""` being `true`. Triple equals never does that. If the types don't match, it's just `false`.

## True or False

**1. True or false:** The expression 0 == "" evaluates to true in JavaScript/TypeScript.

<details>
<summary>Answer</summary>

**True**: Double equals (==) performs type coercion, so 0 == "" is true. This is why you should always use triple equals (===).

</details>

**2. True or false:** The operator === checks equality after converting both values to the same type.

<details>
<summary>Answer</summary>

**False**: Triple equals (===) does NOT convert types. If the types don't match, it simply returns false. Double equals (==) is the one that converts types.

</details>

**3. True or false:** The expression 25 === 25 evaluates to true.

<details>
<summary>Answer</summary>

**True**: Both values are the same type (number) and the same value (25), so === returns true.

</details>

---

[← Course overview](../../../README.md)
