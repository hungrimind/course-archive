# Counting Patterns

You control the counting pattern by tweaking the for loop's three parts. Count down instead of up, or skip by any amount you want.

```typescript
for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}
// 10, 8, 6, 4, 2
```

Start value, condition direction, and step size are all yours to change. `i++` counts by ones, `i += 3` counts by threes, `i--` counts backward. The structure stays the same. Only the numbers move.


## Assignment

Complete `evensDown` so it returns an array of even numbers counting **down** from the largest even number at or below `start`, stopping at `2`.

`evensDown(10)` should return `[10, 8, 6, 4, 2]`.
`evensDown(7)` should return `[6, 4, 2]` (starts from 6 since 7 is odd).

## Challenge

Complete `evensDown` so it returns an array of even numbers counting **down** from the largest even number at or below `start`, stopping at `2`.

`evensDown(10)` should return `[10, 8, 6, 4, 2]`.
`evensDown(7)` should return `[6, 4, 2]` (starts from 6 since 7 is odd).

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
