# Optional Properties

An **optional property** is one that might not exist on an object. Mark it with a `?` after the property name in a type annotation.

```typescript
const user: { name: string; middleName?: string } = {
  name: "Alice",
};

console.log(user.middleName); // undefined
```

When you access an optional property that wasn't set, it returns `undefined`. This is useful for data that isn't always present, like a middle name or phone number.


## Assignment

Complete the `getDisplayName` function. If the user has a `middleName`, return the name and middle name separated by a space. If there is no middle name, return just the `name`.

## Challenge

Complete the `getDisplayName` function. If the user has a `middleName`, return the name and middle name separated by a space. If there is no middle name, return just the `name`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
