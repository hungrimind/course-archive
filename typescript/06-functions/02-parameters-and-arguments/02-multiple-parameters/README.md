# Multiple Parameters

Functions can accept **multiple parameters**, separated by commas. When calling the function, pass values in the same order the parameters are defined.

```typescript
function introduce(name, age) {
  console.log(name + " is " + age + " years old.");
}

introduce("Alice", 30); // Alice is 30 years old.
```

Order matters. The first argument goes to the first parameter, the second to the second, and so on.


## Assignment

Create a function called `buildFullName` that takes two parameters: `first` (a `string`) and `last` (a `string`). It should return the full name by combining them with a space in between, like `"Jane Doe"`. Make sure to export the function.

## Challenge

Create a function called `buildFullName` that takes two parameters: `first` (a `string`) and `last` (a `string`). It should return the full name by combining them with a space in between, like `"Jane Doe"`. Make sure to export the function.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
