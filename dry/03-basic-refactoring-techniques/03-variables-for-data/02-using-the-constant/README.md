# Using the Constant

Use **constants** to enhance code maintainability by centralizing fixed values. This prevents errors when updates are needed, as you only change the value in one place.

```typescript
const MAX_USERS = 100;
```

Instead of scattering `100` throughout your code, use `MAX_USERS` for clarity and consistency.

> [!note]
> Constants are especially useful for settings, limits, and configuration values that might change later.

## Assignment

To improve code maintainability, you need to introduce the constant `MAX_USERS`. 

1. Declare a constant `MAX_USERS` with a value of `100` at the top of the file.
2. Replace all occurrences of `100` in the `canAddUsers`, `remainingUserSlots`, and console log statements with `MAX_USERS`.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
