# Accidental Duplication

Accidental duplication occurs when code appears unique but actually repeats the same logic or data in different places. This often happens when similar solutions are implemented separately without realizing the overlap.

Common scenarios include:
- **Copy-pasting code** with minor changes.
- Implementing similar logic in different parts of an application without abstraction.
- Using hardcoded values (magic numbers/strings) instead of constants.

Accidental duplication reduces code maintainability by increasing the effort needed to update or fix bugs. It can be identified by regularly reviewing code for patterns or similar logic blocks.

To avoid it, use:
- **Code reviews** to catch duplication early.
- **Refactoring** to extract common logic into functions or constants.
- Consistent use of **naming conventions** to spot potential overlaps.

> [!tip]
> Regularly refactor and review code to prevent duplication from sneaking in.

## Matching

Sort each item into the right category: **Causes of Duplication**, **Identifying Duplication**, **Preventing Duplication**

- Code reviews
- Consistent naming conventions
- Copy-pasting code
- Hardcoded values
- Refactoring common logic
- Reviewing similar logic

<details>
<summary>Answer</summary>

**Causes of Duplication**
- Copy-pasting code
- Hardcoded values

**Identifying Duplication**
- Code reviews
- Reviewing similar logic

**Preventing Duplication**
- Refactoring common logic
- Consistent naming conventions

</details>

---

[← Course overview](../../../README.md)
