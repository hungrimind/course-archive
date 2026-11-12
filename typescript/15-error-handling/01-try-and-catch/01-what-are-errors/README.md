# What are Errors?

**Errors** are problems that stop your code from running normally. Accessing a property on `null`, calling a function that doesn't exist, or parsing invalid JSON all throw errors.

```typescript
const data = JSON.parse("not valid json");
// TypeError: Unexpected token 'n'
```

When an error is thrown and nothing handles it, your program crashes. The rest of your code never runs. That's why error handling exists: to catch problems and decide what to do instead of just crashing.

## Quiz

**1. What happens when an error is thrown and nothing handles it?**

- A) The error is silently ignored and code continues
- B) The program crashes and the rest of the code never runs
- C) The error is logged but execution continues normally
- D) The program restarts automatically from the beginning

<details>
<summary>Answer</summary>

- B) The program crashes and the rest of the code never runs

When an error is thrown and nothing handles it, the program crashes. The rest of the code never runs, which is why error handling exists.

</details>

**2. Which of the following would throw an error in JavaScript/TypeScript?**

- A) Declaring a variable with let
- B) Calling console.log with a string
- C) Parsing invalid JSON with JSON.parse
- D) Adding two numbers together

<details>
<summary>Answer</summary>

- C) Parsing invalid JSON with JSON.parse

JSON.parse throws an error when given invalid JSON. Operations like variable declarations, logging, and arithmetic do not throw errors on their own.

</details>

---

[← Course overview](../../../README.md)
