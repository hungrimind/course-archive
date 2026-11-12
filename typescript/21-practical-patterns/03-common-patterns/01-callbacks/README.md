# Callbacks

A **callback** is a function you pass as an argument to another function, to be called later. You have already used them with `.map()`, `.filter()`, and `addEventListener`.

```typescript
function runTwice(callback: (n: number) => void) {
  callback(1);
  callback(2);
}

runTwice((n) => console.log("Call", n));
```

Typing the callback parameter, `(n: number) => void`, ensures that anyone calling `runTwice` passes a function with the right signature. If the shapes do not match, TypeScript flags it at compile time.


## Assignment

Implement three functions that accept typed callbacks.

1. `runTwice` should call the `callback` twice, first with `1` then with `2`.
2. `applyToEach` should apply the `callback` to every item in the `items` array and return the results.
3. `filterWith` should return only the numbers from `numbers` for which the `predicate` callback returns `true`.

## Challenge

Implement three functions that accept typed callbacks.

1. `runTwice` should call the `callback` twice, first with `1` then with `2`.
2. `applyToEach` should apply the `callback` to every item in the `items` array and return the results.
3. `filterWith` should return only the numbers from `numbers` for which the `predicate` callback returns `true`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
