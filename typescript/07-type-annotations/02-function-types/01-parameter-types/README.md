# Parameter Types

**Parameter type annotations** tell TypeScript what kind of values a function expects. Add a colon and type after each parameter name, just like with variables.

```typescript
function greet(name: string) {
  console.log("Hello, " + name);
}

greet("Ada");   // works
greet(42);      // error: number is not string
```

Unlike variables, parameters have no initial value for TypeScript to infer from. That makes annotations especially important here. Without them, parameters default to `any`.


## Assignment

Export a function called `repeat` that takes a `text` parameter of type `string` and a `times` parameter of type `number`. It should return the text repeated that many times, concatenated together. For example, `repeat("ha", 3)` should return `"hahaha"`.

## Challenge

Export a function called `repeat` that takes a `text` parameter of type `string` and a `times` parameter of type `number`. It should return the text repeated that many times, concatenated together. For example, `repeat("ha", 3)` should return `"hahaha"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
