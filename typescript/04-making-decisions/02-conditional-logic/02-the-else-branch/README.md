# The else Branch

**`else`** runs code when the `if` condition is `false`. It's your "otherwise" path.

```typescript
const age: number = 15;

if (age >= 18) {
  console.log("Welcome in!");
} else {
  console.log("Sorry, adults only.");
}
```

Every `else` must follow an `if`. You can't use it on its own.


## Assignment

Complete the `checkAge` function using `if` and `else`. If the age is 18 or older, return `"Welcome in!"`. Otherwise, return `"Sorry, adults only."`.

## Challenge

Complete the `checkAge` function using `if` and `else`. If the age is 18 or older, return `"Welcome in!"`. Otherwise, return `"Sorry, adults only."`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
