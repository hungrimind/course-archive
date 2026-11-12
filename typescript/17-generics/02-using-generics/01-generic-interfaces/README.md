# Generic Interfaces

A **generic interface** adds a type parameter to an interface, making it reusable across different types.

```typescript
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 42 };
```

One interface, multiple uses. A `Box<string>` holds a string, a `Box<number>` holds a number, and TypeScript enforces each one correctly. Unlike generic functions, you typically need to specify the type explicitly when declaring a variable with a generic interface.


## Assignment

Complete the generic `Box<T>` interface and the `unbox` function.

1. Add a `value` property of type `T` to the `Box` interface
2. Implement `unbox` so it returns the value stored inside the box

Expected output:
```
hello
42
```

## Challenge

Complete the generic `Box<T>` interface and the `unbox` function.

1. Add a `value` property of type `T` to the `Box` interface
2. Implement `unbox` so it returns the value stored inside the box

Expected output:
```
hello
42
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
