# Switch Statements

A **`switch`** compares one value against multiple **`case`** labels. It's cleaner than a long `else if` chain when you're matching against specific values.

```typescript
const day: string = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
    console.log("Early week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Some other day");
}
```

Every `case` needs a **`break`** to stop execution from falling through to the next one. The **`default`** case handles anything that didn't match.


## Assignment

Complete the `getDayType` function using a `switch` statement. Match `"Monday"` and `"Tuesday"` to return `"Early week"`, match `"Friday"` to return `"Almost weekend!"`, and use `default` to return `"Some other day"`.

## Challenge

Complete the `getDayType` function using a `switch` statement. Match `"Monday"` and `"Tuesday"` to return `"Early week"`, match `"Friday"` to return `"Almost weekend!"`, and use `default` to return `"Some other day"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
