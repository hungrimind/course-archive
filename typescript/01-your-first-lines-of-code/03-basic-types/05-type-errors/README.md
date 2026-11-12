# Type Errors

If you assign the wrong type to a variable, TypeScript flags it **before your code runs**. No surprises at runtime.

```typescript
let name = "Alice";
name = 42; // Error: Type 'number' is not assignable to type 'string'
```

This is one of the biggest reasons people use TypeScript. Bugs that would normally crash your app get caught the moment you write them.

## True or False

**1. True or false:** TypeScript catches type errors before your code runs.

<details>
<summary>Answer</summary>

**True**: TypeScript performs type checking at compile time, flagging type mismatches before the code is executed. This prevents bugs from reaching runtime.

</details>

**2. True or false:** After declaring `let name = "Alice"`, you can later assign `name = 100` without errors.

<details>
<summary>Answer</summary>

**False**: TypeScript infers that name is a string from the initial assignment. Trying to assign a number to it causes a type error: 'Type number is not assignable to type string'.

</details>

**3. True or false:** Type errors in TypeScript only appear when you run the program.

<details>
<summary>Answer</summary>

**False**: Type errors are caught at compile time, before the code runs. This is one of TypeScript's biggest advantages over plain JavaScript.

</details>

---

[← Course overview](../../../README.md)
