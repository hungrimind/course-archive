# The while Loop

A **while loop** repeats a block of code as long as its condition stays `true`. Before each run, it checks the condition. If it's `false` from the start, the body never executes.

```typescript
let lives = 3;

while (lives > 0) {
  console.log(`Lives left: ${lives}`);
  lives--;
}
```

Think of it like a bouncer at the door: every time the code wants to run again, the condition gets checked first.


## Assignment

Write a `countdown` function that uses a **while loop** to build a launch countdown.

1. Accept a `start` number parameter
2. Use a while loop that runs as long as the counter is greater than 0
3. Each iteration should add `"T-minus {current}"` to a result array (e.g., `"T-minus 3"`)
4. Decrease the counter by 1 each time
5. After the loop, add `"Liftoff!"` to the array
6. Return the array

`countdown(3)` should return `["T-minus 3", "T-minus 2", "T-minus 1", "Liftoff!"]`.

## Challenge

Write a `countdown` function that uses a **while loop** to build a launch countdown.

1. Accept a `start` number parameter
2. Use a while loop that runs as long as the counter is greater than 0
3. Each iteration should add `"T-minus {current}"` to a result array (e.g., `"T-minus 3"`)
4. Decrease the counter by 1 each time
5. After the loop, add `"Liftoff!"` to the array
6. Return the array

`countdown(3)` should return `["T-minus 3", "T-minus 2", "T-minus 1", "Liftoff!"]`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
