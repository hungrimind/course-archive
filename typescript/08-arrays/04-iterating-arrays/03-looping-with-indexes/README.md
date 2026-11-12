# Looping with Indexes

Sometimes you need the index alongside each item. A traditional **for loop** gives you full control over the counter.

```typescript
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(`${i}: ${colors[i]}`);
}
```

This pattern is useful when you need to compare neighboring items, skip certain positions, or loop in reverse. For straightforward iteration, `for...of` or `forEach` are usually simpler.


## Assignment

Start with `const scores = [10, 20, 30, 40, 50]`.

Use a traditional `for` loop (with `let i = 0; i < scores.length; i++`) to print each score multiplied by its index. Print each result on its own line.

Expected output:
```
0
20
60
120
200
```

## Challenge

Start with `const scores = [10, 20, 30, 40, 50]`.

Use a traditional `for` loop (with `let i = 0; i < scores.length; i++`) to print each score multiplied by its index. Print each result on its own line.

Expected output:
```
0
20
60
120
200
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
