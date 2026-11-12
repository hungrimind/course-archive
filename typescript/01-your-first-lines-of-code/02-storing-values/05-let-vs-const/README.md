# let vs const

**Default to `const`**. Only reach for `let` when you know the value needs to change.

This isn't just style. It's a signal to anyone reading your code. A `const` says "this won't change," so readers can stop tracking it. A `let` says "watch out, this gets updated somewhere."

> [!tip]
> In practice, you'll find that most variables never need to change. `const` ends up being the one you use far more often.

## Quiz

**1. Which keyword should you use by default when declaring a variable?**

- A) let, because it's more flexible
- B) const, because most values don't need to change
- C) var, because it works everywhere
- D) It doesn't matter, they're interchangeable

<details>
<summary>Answer</summary>

- B) const, because most values don't need to change

const is the recommended default because most variables never need to be reassigned. Using const signals to readers that the value won't change, making code easier to reason about.

</details>

**2. What does seeing `let` in someone's code tell you?**

- A) The variable was declared inside a function
- B) The variable's value will be updated later in the code
- C) The variable holds a string value
- D) The variable is temporary and will be deleted

<details>
<summary>Answer</summary>

- B) The variable's value will be updated later in the code

let is a signal that the variable's value will change somewhere in the code. It tells readers to watch out for reassignments, while const means the value stays the same.

</details>

---

[← Course overview](../../../README.md)
