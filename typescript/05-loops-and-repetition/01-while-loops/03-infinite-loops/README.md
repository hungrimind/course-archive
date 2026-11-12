# Infinite Loops

An **infinite loop** is a loop whose condition never becomes `false`, so it runs forever and freezes your program. This is almost always a bug.

```typescript
let count = 0;

while (count < 5) {
  console.log(count);
  // Oops, count never changes!
}
```

The most common causes: forgetting to update the counter, or writing a condition that can never be `false` like `while (true)`. If your program hangs, a runaway loop is the first thing to suspect.

> [!warning]
> If you accidentally create one, press `Ctrl + C` in the terminal to kill it.

## True or False

**1. True or false:** A while loop that never updates its counter variable will run forever.

<details>
<summary>Answer</summary>

**True**: If the counter never changes, the condition never becomes false, so the loop never stops. This is the most common cause of infinite loops.

</details>

**2. True or false:** while (true) { } will eventually stop on its own once it has run enough times.

<details>
<summary>Answer</summary>

**False**: while (true) never stops on its own because the condition true can never become false. You must manually kill the program with Ctrl + C.

</details>

**3. True or false:** An infinite loop is always caused by using while (true).

<details>
<summary>Answer</summary>

**False**: Infinite loops can also happen when you forget to update a counter, or when the condition is written in a way that can never become false. while (true) is just one example.

</details>

**4. True or false:** If your program freezes and stops responding, a runaway loop is a likely cause.

<details>
<summary>Answer</summary>

**True**: An infinite loop consumes all available processing time, making the program appear frozen. It is one of the first things to check when a program hangs.

</details>

---

[← Course overview](../../../README.md)
