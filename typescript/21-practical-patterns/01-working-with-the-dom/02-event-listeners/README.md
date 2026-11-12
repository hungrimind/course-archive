# Event Listeners

**`addEventListener()`** attaches a function that runs when a user action occurs, like a click or keypress. TypeScript automatically types the event object so you get autocomplete on its properties.

```typescript
const btn = document.querySelector<HTMLButtonElement>("#submit");

btn?.addEventListener("click", (event: MouseEvent) => {
  console.log("Clicked at", event.clientX, event.clientY);
});
```

The event type depends on the action: `MouseEvent` for clicks, `KeyboardEvent` for keypresses, `Event` for general-purpose listeners. TypeScript infers the right one based on the event name you pass in.


## Assignment

Implement two functions that simulate how event listeners work with typed events.

1. `describeEvent` should check the event's `type` property: for `"click"` events return `"Clicked at <clientX>, <clientY>"`, and for `"keypress"` events return `"Key pressed: <key>"`.
2. `addEventListener` should create a simulated event based on `eventName`: for `"click"` create a click event with `clientX: 100` and `clientY: 200`, for anything else create a keypress event with `key: "Enter"`. Pass the event to the `callback` and return its result.

## Challenge

Implement two functions that simulate how event listeners work with typed events.

1. `describeEvent` should check the event's `type` property: for `"click"` events return `"Clicked at <clientX>, <clientY>"`, and for `"keypress"` events return `"Key pressed: <key>"`.
2. `addEventListener` should create a simulated event based on `eventName`: for `"click"` create a click event with `clientX: 100` and `clientY: 200`, for anything else create a keypress event with `key: "Enter"`. Pass the event to the `callback` and return its result.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
