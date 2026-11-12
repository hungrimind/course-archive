# Modifying the DOM

**`.textContent`**, **`.setAttribute()`**, and **`.style`** let you change what elements display and how they look. TypeScript knows which properties exist on each element type, so an `HTMLInputElement` has `.value` but a plain `Element` does not.

```typescript
const heading = document.querySelector<HTMLHeadingElement>("h1");

if (heading) {
  heading.textContent = "New Title";
  heading.style.color = "blue";
  heading.setAttribute("id", "main-title");
}
```

Narrowing to the specific element type, like `HTMLInputElement` or `HTMLDivElement`, unlocks the properties that belong to that kind of element. Without it, TypeScript only shows the generic `Element` properties.


## Assignment

Implement three functions that simulate modifying DOM elements using an `ElementModel` type.

1. `setTextContent` should return a new element with the `textContent` updated to the given `text`.
2. `setAttribute` should return a new element with the given `key`/`value` added to `attributes`, preserving existing attributes.
3. `setStyle` should return a new element with the given `property`/`value` added to `style`, preserving existing styles.

Use the spread operator (`...`) to create copies rather than mutating the original element.

## Challenge

Implement three functions that simulate modifying DOM elements using an `ElementModel` type.

1. `setTextContent` should return a new element with the `textContent` updated to the given `text`.
2. `setAttribute` should return a new element with the given `key`/`value` added to `attributes`, preserving existing attributes.
3. `setStyle` should return a new element with the given `property`/`value` added to `style`, preserving existing styles.

Use the spread operator (`...`) to create copies rather than mutating the original element.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
