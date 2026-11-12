# Multiple Type Parameters

Generics can have **multiple type parameters**, each tracking a different type independently.

```typescript
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const result = pair("hello", 42); // [string, number]
```

Here `A` becomes `string` and `B` becomes `number`, and the return type is inferred as `[string, number]`. You'll see this pattern in real code whenever a function connects two or more types that can vary independently, like a key-value pair or a mapping function.


## Assignment

Write a generic function `convert<I, O>` that takes an input value of type `I` and a transformation function of type `(val: I) => O`, and returns the result of type `O`. This function uses two type parameters to independently track the input and output types.

## Challenge

Write a generic function `convert<I, O>` that takes an input value of type `I` and a transformation function of type `(val: I) => O`, and returns the result of type `O`. This function uses two type parameters to independently track the input and output types.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
