# The Else Path

# The Else Path

An if statement handles the *true* case. An **else** handles the *false* case.

*If the password is correct, log in; otherwise, show an error.* Now your program covers both outcomes. Think of it as a fork in the road: the condition decides which path you take, and nothing gets ignored.

## Fill in the Blanks

Fill in the blanks:

```typescript
let password = "secret123";

__(1)__ (password === "secret123") {
  console.log("Welcome!");
} __(2)__ {
  console.log("Wrong password.");
}
```

<details>
<summary>Answer</summary>

1. `if`
2. `else`

</details>

---

[← Course overview](../../../README.md)
