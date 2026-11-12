# Example: Validation Rules

When applying the **D.R.Y.** principle to validation rules, refactor repetitive logic into reusable components. This reduces errors and makes updates easier.

Consider repetitive email validation across different forms:

```dart
bool isValidEmail(String email) {
  return RegExp(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").hasMatch(email);
}
```

By using a single validation function, you avoid redundancy and ensure consistency.

> [!warning]
> Avoid over-abstraction by ensuring each validation rule truly applies to all intended contexts.

## Assignment

The validation logic for emails is repeated unnecessarily. 

1. Create a reusable function named `isValidEmail` that handles the email validation logic.
2. Replace calls to `isValidSignupEmail` and `isValidContactFormEmail` with `isValidEmail`.
3. Update the validation for the `brokenEmail` variable to use the new function as well. 

Ensure the console outputs remain consistent.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
