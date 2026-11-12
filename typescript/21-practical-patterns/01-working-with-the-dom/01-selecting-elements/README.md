# Selecting Elements

**`document.querySelector()`** finds the first HTML element matching a CSS selector. TypeScript returns `Element | null` because the element might not exist on the page.

```typescript
const btn = document.querySelector("#submit");

if (btn) {
  console.log("Found it!");
}
```

Since the result could be `null`, you must check before using it. If you know the element's specific type, use a generic: `document.querySelector<HTMLButtonElement>("#submit")` to get access to button-specific properties.


## Assignment

Implement three functions that simulate how `document.querySelector` works in TypeScript.

1. `selectElement` should return `"Selected: <id>"` if the selector starts with `#` or `.`, otherwise return `null`.
2. `selectTypedElement` should return an object with `selector` and `tagName` properties if the selector is non-empty, otherwise `null`. This mirrors using a generic type parameter with `querySelector`.
3. `handleNullableElement` should call `selectElement` and return its result if non-null, otherwise return `"Element not found"`. This demonstrates the null-check pattern needed with DOM queries.

## Challenge

Implement three functions that simulate how `document.querySelector` works in TypeScript.

1. `selectElement` should return `"Selected: <id>"` if the selector starts with `#` or `.`, otherwise return `null`.
2. `selectTypedElement` should return an object with `selector` and `tagName` properties if the selector is non-empty, otherwise `null`. This mirrors using a generic type parameter with `querySelector`.
3. `handleNullableElement` should call `selectElement` and return its result if non-null, otherwise return `"Element not found"`. This demonstrates the null-check pattern needed with DOM queries.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
