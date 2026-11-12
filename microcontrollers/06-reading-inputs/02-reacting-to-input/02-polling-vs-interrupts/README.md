# Polling vs Interrupts

# Polling vs Interrupts

**Polling** means checking the pin in a loop: "Are you pressed? Are you pressed? Are you pressed?" It works, but your code spends most of its time asking a question with no new answer.

**Interrupts** flip the relationship. Instead of asking, you tell the pin: "Notify me when something changes." Your code does other work (or sleeps) until the hardware taps it on the shoulder.

> [!tip]
> Interrupts are more efficient, but polling is simpler to reason about. For a single button, either approach works fine.

## Matching

Sort each item into the right category: **Polling**, **Interrupts**

- Checks the pin in a loop repeatedly
- Code can sleep or do other work until triggered
- Code spends time asking with no new answer
- More efficient for waiting on input
- Pin notifies the code when something changes
- Simpler to reason about

<details>
<summary>Answer</summary>

**Polling**
- Checks the pin in a loop repeatedly
- Simpler to reason about
- Code spends time asking with no new answer

**Interrupts**
- Pin notifies the code when something changes
- More efficient for waiting on input
- Code can sleep or do other work until triggered

</details>

---

[← Course overview](../../../README.md)
