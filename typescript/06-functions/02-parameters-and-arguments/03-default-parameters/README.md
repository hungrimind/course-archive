# Default Parameters

A **default parameter** has a fallback value that kicks in when no argument is provided. Set it with `=` in the parameter list.

```typescript
function greet(name = "friend") {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet();        // Hello, friend!
```

Default parameters are always optional. Parameters without defaults are required.


## Assignment

Write a `formatPrice` function that takes an `amount` (number) and an optional `currency` (string) with a default value of `"USD"`. It should return the string `"amount currency"` (e.g. `"9.99 USD"`). Call it twice to print a price with an explicit currency and one using the default.

## Challenge

Write a `formatPrice` function that takes an `amount` (number) and an optional `currency` (string) with a default value of `"USD"`. It should return the string `"amount currency"` (e.g. `"9.99 USD"`). Call it twice to print a price with an explicit currency and one using the default.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
