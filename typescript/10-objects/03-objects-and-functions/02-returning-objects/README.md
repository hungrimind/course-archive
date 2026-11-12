# Returning Objects

A function can **return an object** to send back multiple related values at once. Each piece of data gets a meaningful property name, making the result easy to work with.

```typescript
function createUser(name: string, age: number) {
  return { name, age, active: true };
}

const user = createUser("Alice", 30);
console.log(user.active); // true
```

Notice the shorthand: when a variable name matches the property name, you can write just `name` instead of `name: name`. TypeScript infers the return type automatically.


## Assignment

Complete the `createBook` function so it returns an object with `title`, `author`, `pages`, and `available` properties. The `title`, `author`, and `pages` values come from the function parameters, while `available` should always be `true`.

Expected output:

```
The Hobbit
J.R.R. Tolkien
310
true
```

## Challenge

Complete the `createBook` function so it returns an object with `title`, `author`, `pages`, and `available` properties. The `title`, `author`, and `pages` values come from the function parameters, while `available` should always be `true`.

Expected output:

```
The Hobbit
J.R.R. Tolkien
310
true
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
