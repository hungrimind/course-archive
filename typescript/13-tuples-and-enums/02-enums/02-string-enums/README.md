# String Enums

A **string enum** assigns an explicit string value to each member instead of an auto-incrementing number. Every member must have a value because there's no auto-assignment with strings.

```typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}
```

String enums are easier to debug. If you log a numeric enum, you see `0` and have to look up what it means. With a string enum, you see `"ACTIVE"`, and the value speaks for itself.


## Challenge: String Enums

Create a string enum and a function that uses it:

1. **`Color` enum** -- Define a string enum with three members: `Red = "RED"`, `Green = "GREEN"`, and `Blue = "BLUE"`.

2. **`getColorLabel(color)`** -- Takes a `Color` parameter and returns a descriptive string. Use a `switch` statement to return `"Red Color"` for `Color.Red`, `"Green Color"` for `Color.Green`, and `"Blue Color"` for `Color.Blue`.

Make sure to export both the enum and the function.

## Challenge

## Challenge: String Enums

Create a string enum and a function that uses it:

1. **`Color` enum** -- Define a string enum with three members: `Red = "RED"`, `Green = "GREEN"`, and `Blue = "BLUE"`.

2. **`getColorLabel(color)`** -- Takes a `Color` parameter and returns a descriptive string. Use a `switch` statement to return `"Red Color"` for `Color.Red`, `"Green Color"` for `Color.Green`, and `"Blue Color"` for `Color.Blue`.

Make sure to export both the enum and the function.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
