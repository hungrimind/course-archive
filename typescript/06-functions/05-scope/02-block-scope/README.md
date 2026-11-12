# Block Scope

Variables declared with `let` or `const` inside any curly braces only exist within those braces. This is called **block scope**, and it applies to `if` blocks, loops, and functions alike.

```typescript
if (true) {
  let x = 10;
  console.log(x); // 10
}

console.log(x); // Error! x is not defined
```

Every pair of `{}` creates a new scope. Variables born inside a block die when the block ends.

## True or False

**1. True or false:** A variable declared with let inside an if block can be accessed outside that if block.

<details>
<summary>Answer</summary>

**False**: Variables declared with let or const inside curly braces only exist within those braces. Once the block ends, the variable is no longer accessible.

</details>

**2. True or false:** Every pair of curly braces {} creates a new scope for variables declared with let or const.

<details>
<summary>Answer</summary>

**True**: Block scope applies to any set of curly braces, whether they belong to an if statement, a loop, or a function.

</details>

**3. True or false:** Block scope applies to if blocks and loops, but not to functions.

<details>
<summary>Answer</summary>

**False**: Block scope applies to all curly braces equally, including if blocks, loops, and functions.

</details>

**4. True or false:** A variable declared with const inside a for loop is not accessible after the loop ends.

<details>
<summary>Answer</summary>

**True**: Since const follows block scope rules, a variable declared inside a loop's curly braces is destroyed when the loop block ends.

</details>

---

[← Course overview](../../../README.md)
