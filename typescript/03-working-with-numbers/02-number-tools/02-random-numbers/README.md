# Random Numbers

**`Math.random()`** returns a random decimal from 0 up to (but not including) 1. To get a random whole number in a range, multiply and floor it.

```typescript
const roll = Math.floor(Math.random() * 6) + 1; // 1-6
```

The pattern is always the same: `Math.floor(Math.random() * range) + min`. Here, `range` is 6 and `min` is 1, giving you a dice roll.


## Assignment

Implement `randomInRange` that takes a `min` and `max` number and returns a random whole number between them (inclusive). Use `Math.floor()` and `Math.random()` with the pattern from the lesson.

## Challenge

Implement `randomInRange` that takes a `min` and `max` number and returns a random whole number between them (inclusive). Use `Math.floor()` and `Math.random()` with the pattern from the lesson.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
