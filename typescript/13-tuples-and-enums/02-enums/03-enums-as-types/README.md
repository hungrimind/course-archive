# Enums as Types

An enum doubles as a **type annotation**. When you type a parameter or variable as an enum, TypeScript only allows that enum's members. Nothing else gets through.

```typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

function display(status: Status) {
  console.log(status);
}

display(Status.Active);
```

Calling `display("ACTIVE")` would fail even though the underlying value matches. TypeScript expects the enum member itself, not a raw string. This prevents accidental misuse and keeps your code tightly constrained to the values you defined.


## Challenge: Enums as Types

Create an enum and two functions that use it as a type annotation:

1. **`Role` enum** -- Define a string enum with three members: `Admin = "ADMIN"`, `Editor = "EDITOR"`, and `Viewer = "VIEWER"`.

2. **`getPermissionLevel(role)`** -- Takes a `Role` parameter and returns a number: `3` for Admin, `2` for Editor, and `1` for Viewer.

3. **`canEdit(role)`** -- Takes a `Role` parameter and returns `true` if the role is `Admin` or `Editor`, and `false` for `Viewer`.

Make sure to export the enum and both functions.

## Challenge

## Challenge: Enums as Types

Create an enum and two functions that use it as a type annotation:

1. **`Role` enum** -- Define a string enum with three members: `Admin = "ADMIN"`, `Editor = "EDITOR"`, and `Viewer = "VIEWER"`.

2. **`getPermissionLevel(role)`** -- Takes a `Role` parameter and returns a number: `3` for Admin, `2` for Editor, and `1` for Viewer.

3. **`canEdit(role)`** -- Takes a `Role` parameter and returns `true` if the role is `Admin` or `Editor`, and `false` for `Viewer`.

Make sure to export the enum and both functions.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
