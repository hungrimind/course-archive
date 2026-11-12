# The await Keyword

**`await`** pauses an async function until a promise settles, then gives you the resolved value directly. The code reads like synchronous code but works asynchronously underneath.

```typescript
async function loadUser() {
  const response = await fetch("/api/user");
  const data = await response.json();
  console.log(data.name);
}
```

Compare that to chaining `.then().then().then()`. Much cleaner. You can only use `await` inside an `async` function; using it at the top level of a regular function is a syntax error.


## Assignment

Create an `async` function called `combineValues` that takes two parameters: `first` of type `Promise<string>` and `second` of type `Promise<number>`.

Use `await` to get the resolved values from both promises, then return them combined as a string in the format `"<first>: <second>"`.

For example, if `first` resolves with `"Score"` and `second` resolves with `42`, return `"Score: 42"`.

## Challenge

Create an `async` function called `combineValues` that takes two parameters: `first` of type `Promise<string>` and `second` of type `Promise<number>`.

Use `await` to get the resolved values from both promises, then return them combined as a string in the format `"<first>: <second>"`.

For example, if `first` resolves with `"Score"` and `second` resolves with `42`, return `"Score: 42"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
