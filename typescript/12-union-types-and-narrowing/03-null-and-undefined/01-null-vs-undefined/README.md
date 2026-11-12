# null vs undefined

**`undefined`** means a variable was declared but never assigned a value. **`null`** means "intentionally empty" -- you're explicitly saying "there's nothing here."

```typescript
let x: string | undefined;
console.log(x); // undefined -- no value assigned yet

let y: string | null = null;
console.log(y); // null -- deliberately set to nothing
```

In practice, `undefined` tends to show up on its own (uninitialized variables, missing object properties, functions with no return), while `null` is something you assign on purpose. TypeScript treats them as distinct types.

## True or False

**1. True or false:** undefined means a variable was declared but intentionally set to empty.

<details>
<summary>Answer</summary>

**False**: undefined means a variable was declared but never assigned a value. null is used for intentionally setting something to empty.

</details>

**2. True or false:** TypeScript treats null and undefined as distinct types.

<details>
<summary>Answer</summary>

**True**: TypeScript has separate null and undefined types. They are not interchangeable, which helps catch bugs related to missing values.

</details>

**3. True or false:** A function with no return statement returns null.

<details>
<summary>Answer</summary>

**False**: A function with no return statement returns undefined, not null. null must be explicitly assigned.

</details>

**4. True or false:** null is typically something you assign on purpose to indicate 'no value here'.

<details>
<summary>Answer</summary>

**True**: null represents an intentional absence of value. You explicitly assign null to indicate that a variable deliberately holds nothing.

</details>

---

[← Course overview](../../../README.md)
