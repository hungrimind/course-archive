# Stringifying Data

**`JSON.stringify()`** converts an object into a JSON string. This is how you prepare data to send to an API or save in `localStorage`.

```typescript
const user = { name: "Ada", age: 30 };
const json = JSON.stringify(user);

console.log(json); // '{"name":"Ada","age":30}'
```

Not everything survives the conversion. Functions and `undefined` values are silently skipped, and `Date` objects become strings. If you round-trip an object through `stringify` and `parse`, make sure it only contains JSON-safe values: strings, numbers, booleans, arrays, objects, and `null`.


## Assignment

Implement three functions related to `JSON.stringify()`.

1. `stringifyUser` should create an object with `name` and `age` properties, then return it as a JSON string using `JSON.stringify()`.
2. `isJsonSafe` should return `false` if the value is a `function` or `undefined` (since these are skipped by `JSON.stringify`), and `true` otherwise.
3. `roundTrip` should convert `data` to a JSON string and parse it back, returning the result. This demonstrates how data survives a stringify/parse cycle.

## Challenge

Implement three functions related to `JSON.stringify()`.

1. `stringifyUser` should create an object with `name` and `age` properties, then return it as a JSON string using `JSON.stringify()`.
2. `isJsonSafe` should return `false` if the value is a `function` or `undefined` (since these are skipped by `JSON.stringify`), and `true` otherwise.
3. `roundTrip` should convert `data` to a JSON string and parse it back, returning the result. This demonstrates how data survives a stringify/parse cycle.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
