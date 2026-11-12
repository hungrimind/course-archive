# The finally Block

The **finally block** runs after try-catch no matter what, whether the code succeeded or threw an error. It's the place for cleanup that must always happen.

```typescript
try {
  const data = JSON.parse(input);
  console.log(data);
} catch (error) {
  console.log("Failed to parse");
} finally {
  console.log("Done"); // always runs
}
```

Think of `finally` for things like hiding a loading spinner or closing a file. You want those to happen regardless of the outcome.

## Fill in the Blanks

Fill in the blanks:

```typescript
try {
  const data = JSON.parse(userInput);
  console.log(data);
} catch (error) {
  console.log("Parse error");
} __(1)__ {
  __(2)__("Cleanup complete");
}
```

<details>
<summary>Answer</summary>

1. `finally`
2. `console.log`

</details>

---

[← Course overview](../../../README.md)
