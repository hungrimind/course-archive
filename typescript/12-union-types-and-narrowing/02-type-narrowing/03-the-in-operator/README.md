# The in Operator

The **`in` operator** checks whether a property exists on an object, and TypeScript uses that check to narrow the type.

```typescript
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(pet: Dog | Cat) {
  if ("bark" in pet) {
    pet.bark();   // TypeScript knows it's a Dog
  }
}
```

This is especially useful when you have union types of objects that share some properties but differ in others. By checking for a unique property, TypeScript can figure out which type you're dealing with.


## Assignment

Complete the `travel` function using the `in` operator to narrow the `Car | Boat` union. Check if `"drive"` exists on the vehicle to determine if it is a `Car` and call the appropriate method. Otherwise, call `sail()` on the `Boat`.

## Challenge

Complete the `travel` function using the `in` operator to narrow the `Car | Boat` union. Check if `"drive"` exists on the vehicle to determine if it is a `Car` and call the appropriate method. Otherwise, call `sail()` on the `Boat`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
