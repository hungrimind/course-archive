# The for Loop

A **for loop** packs the counter, condition, and update into a single line. It's the go-to choice when you know how many times to repeat.

```typescript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

The three parts inside the parentheses, `let i = 0` (init), `i < 5` (condition), `i++` (update), are the same three pieces a `while` loop needs, just tidied up into one place. Less room for mistakes.


## Assignment

Write a `repeat` function that uses a **for loop** to repeat a string a given number of times.

1. Accept a `text` string and a `times` number
2. Start with an empty `result` string
3. Use a for loop that runs `times` iterations, appending `text` to `result` each time
4. Return the final `result`

`repeat("ha", 3)` should return `"hahaha"`.

## Challenge

Write a `repeat` function that uses a **for loop** to repeat a string a given number of times.

1. Accept a `text` string and a `times` number
2. Start with an empty `result` string
3. Use a for loop that runs `times` iterations, appending `text` to `result` each time
4. Return the final `result`

`repeat("ha", 3)` should return `"hahaha"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
