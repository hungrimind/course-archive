# Joining to a String

**`.join()`** combines all array items into a single string, with a separator of your choice between them.

```typescript
const words = ["Hello", "World"];
console.log(words.join(" "));  // "Hello World"
console.log(words.join("-"));  // "Hello-World"
console.log(words.join(""));   // "HelloWorld"
```

It's the reverse of the `.split()` method you saw with strings. Split breaks a string into an array; join merges an array back into a string.


## Assignment

Complete the `joinWords` function so that it uses `.join()` to combine all words in the array into a single string, using the provided `separator` between them.

## Challenge

Complete the `joinWords` function so that it uses `.join()` to combine all words in the array into a single string, using the provided `separator` between them.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
