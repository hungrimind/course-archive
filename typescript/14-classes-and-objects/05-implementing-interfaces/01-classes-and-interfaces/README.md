# Classes and Interfaces

A class can **implement** an interface, promising it will have all the properties and methods that interface requires. TypeScript checks this at compile time.

```typescript
interface Printable {
  print(): string;
}

class Invoice implements Printable {
  constructor(public amount: number) {}

  print(): string {
    return `Invoice: $${this.amount}`;
  }
}
```

If `Invoice` forgot to define `print()`, TypeScript would immediately flag the error. Interfaces act as contracts. The class signs up to fulfill them, and the compiler holds it accountable.


## Assignment

Implement the `draw` method in the `Circle` class so it satisfies the `Drawable` interface. The method should return a string in the format `"Drawing circle with radius <radius>"`, where `<radius>` is the circle's radius value.

## Challenge

Implement the `draw` method in the `Circle` class so it satisfies the `Drawable` interface. The method should return a string in the format `"Drawing circle with radius <radius>"`, where `<radius>` is the circle's radius value.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
