# Handling Variations with Parameters

A **parameter** allows you to pass different values into a function, enabling you to handle variations without duplicating code. Think of it like a placeholder that gets filled with real data when the function runs.

```typescript
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("Alice");
greet("Bob");
```

Here, `name` is a parameter that lets `greet` handle different names. No need to write separate functions for each greeting.

## Assignment

You need to streamline the greeting functions to make them more flexible.

1. Replace the two functions `greetAlice` and `greetBob` with a single function called `greet` that takes a `name` parameter.
2. Adjust the calls to use the new `greet` function with "Alice" and "Bob" as arguments. 

Your output should greet both names correctly in the console.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
