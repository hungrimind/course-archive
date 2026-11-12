# ReturnType

**`ReturnType<typeof fn>`** extracts whatever type a function returns. Instead of duplicating a type or defining it separately, you can derive it straight from the function.

```typescript
function createUser() {
  return { name: "Ada", age: 36, active: true };
}

type User = ReturnType<typeof createUser>;
// { name: string; age: number; active: boolean }
```

Notice you need `typeof` before the function name. `ReturnType` expects a type, not a value. This keeps your types in sync automatically: if the function's return shape changes, every `ReturnType` reference updates with it.


# ReturnType

Export a `createProduct` function that returns an object with `name`, `price`, and `inStock` fields. Use `ReturnType` to derive a `Product` type from that function, then export a `formatProduct` function that takes a `Product` and returns a string in the format `"<name> - $<price>"`.

## Challenge

# ReturnType

Export a `createProduct` function that returns an object with `name`, `price`, and `inStock` fields. Use `ReturnType` to derive a `Product` type from that function, then export a `formatProduct` function that takes a `Product` and returns a string in the format `"<name> - $<price>"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
