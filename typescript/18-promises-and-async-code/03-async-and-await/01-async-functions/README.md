# Async Functions

An **async function** is a function that automatically returns a promise. Add the `async` keyword before the function declaration, and whatever you return gets wrapped in a promise.

```typescript
async function greet(): Promise<string> {
  return "Hello";
}

greet().then((msg) => console.log(msg)); // "Hello"
```

You don't need to manually create a `new Promise`. The `async` keyword handles that for you. The real power comes when you combine it with `await` inside the function body.


## Assignment

Create an `async` function called `fetchMessage` that takes a `topic` parameter of type `string` and returns `"Latest update on "` followed by the topic. Export the function so it can be used in tests.

## Challenge

Create an `async` function called `fetchMessage` that takes a `topic` parameter of type `string` and returns `"Latest update on "` followed by the topic. Export the function so it can be used in tests.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
