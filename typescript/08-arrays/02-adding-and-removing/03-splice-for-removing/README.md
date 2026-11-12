# Splice for Removing

**.splice()** removes items from any position in an array. Pass it the starting index and the number of items to remove.

```typescript
const letters = ["a", "b", "c", "d", "e"];
const removed = letters.splice(1, 2);
console.log(letters);  // ["a", "d", "e"]
console.log(removed);  // ["b", "c"]
```

Unlike `pop` and `shift`, `splice` gives you precise control over which items to cut. It modifies the original array and returns the removed items as a new array.


## Assignment

Start with `const letters = ["a", "b", "c", "d", "e"]`.

1. Use `splice` to remove the items at index 1 and 2 (`"b"` and `"c"`). Store the removed items in a variable called `removed`.
2. Print the modified `letters` array
3. Print the `removed` array

## Challenge

Start with `const letters = ["a", "b", "c", "d", "e"]`.

1. Use `splice` to remove the items at index 1 and 2 (`"b"` and `"c"`). Store the removed items in a variable called `removed`.
2. Print the modified `letters` array
3. Print the `removed` array

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
