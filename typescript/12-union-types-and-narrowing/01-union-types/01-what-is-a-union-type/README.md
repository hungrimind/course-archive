# What is a Union Type?

A **union type** lets a value be one of several types, written with the pipe `|` symbol. Think of it as "this or that."

```typescript
let id: string | number;
id = "abc";  // fine
id = 42;     // also fine
id = true;   // Error: boolean not allowed
```

When you annotate something as `string | number`, TypeScript enforces that only those two types are ever assigned. Anything else is a type error.

## Quiz

**1. What does a union type in TypeScript allow you to do?**

- A) Combine two objects into one merged object
- B) Allow a value to be one of several specified types
- C) Create a new type that has all properties of multiple types
- D) Convert a value from one type to another at runtime

<details>
<summary>Answer</summary>

- B) Allow a value to be one of several specified types

A union type, written with the pipe | symbol, lets a variable hold a value of any one of the listed types. It does not merge objects or convert types.

</details>

**2. What happens if you assign a boolean to a variable typed as string | number?**

- A) TypeScript silently converts it to a string
- B) The value is stored as undefined
- C) TypeScript reports a type error at compile time
- D) It works fine because boolean is compatible with number

<details>
<summary>Answer</summary>

- C) TypeScript reports a type error at compile time

TypeScript enforces that only the types listed in the union can be assigned. Since boolean is not part of string | number, it produces a compile-time error.

</details>

---

[← Course overview](../../../README.md)
