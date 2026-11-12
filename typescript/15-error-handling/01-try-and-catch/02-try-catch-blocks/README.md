# Try-Catch Blocks

A **try-catch block** wraps risky code so errors don't crash your program. Code in the `try` runs normally, but if it throws an error, execution jumps straight to `catch`.

```typescript
try {
  const data = JSON.parse("not valid json");
} catch (error) {
  console.log("Parsing failed");
}
```

The `catch` block receives the error that was thrown. Code after the try-catch continues running either way because the crash is contained.


## Assignment

Complete the `safeParse` function so it safely parses a JSON string. Use a try-catch block to attempt `JSON.parse` -- if parsing succeeds, return the parsed data. If it throws an error, return the string `"Parsing failed"`.

## Challenge

Complete the `safeParse` function so it safely parses a JSON string. Use a try-catch block to attempt `JSON.parse` -- if parsing succeeds, return the parsed data. If it throws an error, return the string `"Parsing failed"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
