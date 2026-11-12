# The string Type

A **string** is a piece of text. You can wrap it in single quotes, double quotes, or backticks. All three work.

```typescript
const name = "Alice";
const city = 'Oslo';
const greeting = `Hello, ${name}`;
```

Backticks are special: they let you embed variables inside `${}`. The other two are interchangeable, so just pick one style and stick with it.


## Assignment

Create a `greeting` constant using backticks and template syntax (`${}`) to embed the `name` and `city` variables. The output should be `Hello, Alice from Oslo`.

## Challenge

Create a `greeting` constant using backticks and template syntax (`${}`) to embed the `name` and `city` variables. The output should be `Hello, Alice from Oslo`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
