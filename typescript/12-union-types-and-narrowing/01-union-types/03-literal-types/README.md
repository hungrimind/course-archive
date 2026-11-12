# Literal Types

A **literal type** is a type that represents one specific value, not just any string or number. Combine literals with unions to create a set of allowed values.

```typescript
type Status = "success" | "error" | "loading";

let current: Status = "success";  // fine
current = "loading";              // fine
current = "pending";              // Error
```

This is far more precise than typing `current` as `string`. TypeScript will catch any typo or invalid value at compile time, which is something a plain `string` type could never do.


## Assignment

Complete the `getStatusMessage` function that takes a `Status` literal type and returns a human-readable message for each status:

- `"success"` returns `"Operation completed successfully"`
- `"error"` returns `"Something went wrong"`
- `"loading"` returns `"Please wait..."`

## Challenge

Complete the `getStatusMessage` function that takes a `Status` literal type and returns a human-readable message for each status:

- `"success"` returns `"Operation completed successfully"`
- `"error"` returns `"Something went wrong"`
- `"loading"` returns `"Please wait..."`

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
