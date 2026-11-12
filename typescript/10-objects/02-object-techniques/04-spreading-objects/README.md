# Spreading Objects

The **spread operator** (`...`) copies all properties from one object into a new one. This is the cleanest way to create a modified copy without touching the original.

```typescript
const original = { name: "Alice", age: 30 };
const updated = { ...original, age: 31 };

console.log(updated); // { name: "Alice", age: 31 }
console.log(original.age); // 30, unchanged
```

Properties listed after the spread override matching keys from the original. Order matters, and the last value wins.


## Assignment

Complete the `withUpdatedAge` function. Use the spread operator to create a new object that copies all properties from `person` but overrides `age` with the provided `newAge`. The original object must remain unchanged.

## Challenge

Complete the `withUpdatedAge` function. Use the spread operator to create a new object that copies all properties from `person` but overrides `age` with the provided `newAge`. The original object must remain unchanged.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
