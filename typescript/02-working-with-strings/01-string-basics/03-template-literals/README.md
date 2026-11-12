# Template Literals

**Template literals** are backtick strings that let you drop variables right into text using `${...}`. No more awkward `+` signs gluing things together.

```typescript
const name = "Alice";
const age = 30;
const greeting = `${name} is ${age} years old`;
```

Any valid expression works inside `${}`: variables, math, even function calls.


## Assignment

Complete the `introduce` function so it returns a string in the format `"Alice is 30 years old"` using a template literal. Use backticks and `${}` to embed the `name` and `age` parameters directly in the string.

## Challenge

Complete the `introduce` function so it returns a string in the format `"Alice is 30 years old"` using a template literal. Use backticks and `${}` to embed the `name` and `age` parameters directly in the string.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
