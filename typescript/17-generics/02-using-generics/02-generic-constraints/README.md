# Generic Constraints

A **generic constraint** uses `extends` to restrict which types are allowed. Without it, `T` could be anything, and you can't safely access properties on it.

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");    // works - strings have length
getLength([1, 2, 3]);  // works - arrays have length
// getLength(42);       // error - numbers don't have length
```

The constraint `T extends { length: number }` means "T must be a type that has a `length` property." Strings, arrays, and any object with `length` qualify. Plain numbers don't.


## Assignment

Write a generic function called `getLabel` that accepts any object with a `label` property. Use a generic constraint to ensure only objects containing a `label` of type `string` can be passed in. The function should return the label value.

## Challenge

Write a generic function called `getLabel` that accepts any object with a `label` property. Use a generic constraint to ensure only objects containing a `label` of type `string` can be passed in. The function should return the label value.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
