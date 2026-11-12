# Function Parameters

**Parameters** are variables listed in the function definition that receive values when the function is called. They let the same function work with different data each time.

```typescript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Bob");   // Hello, Bob!
```

The value you pass in, like `"Alice"`, is called an **argument**. The variable that catches it, `name`, is the parameter.


## Assignment

Create a function called `celebrate` that takes a `name` parameter of type `string` and returns the string `"{name} wins!"`. For example, `celebrate("Alice")` should return `"Alice wins!"`.

## Challenge

Create a function called `celebrate` that takes a `name` parameter of type `string` and returns the string `"{name} wins!"`. For example, `celebrate("Alice")` should return `"Alice wins!"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
