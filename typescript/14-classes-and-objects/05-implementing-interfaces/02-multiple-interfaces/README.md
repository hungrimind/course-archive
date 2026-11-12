# Multiple Interfaces

A class can implement **multiple interfaces** at once, separated by commas. It must satisfy every requirement from all of them.

```typescript
interface Printable {
  print(): string;
}

interface Saveable {
  save(): void;
}

class Report implements Printable, Saveable {
  print(): string {
    return "Report content";
  }
  save(): void {
    console.log("Saved!");
  }
}
```

This is different from inheritance. A class can only extend one parent class, but it can implement as many interfaces as it needs. Interfaces describe what a class must do without dictating how.


## Assignment

Implement both methods in the `Box` class so it satisfies the `Sizeable` and `Describable` interfaces. `getSize()` should return the area (width times height), and `describe()` should return a string in the format `Box(widthxheight)`.

## Challenge

Implement both methods in the `Box` class so it satisfies the `Sizeable` and `Describable` interfaces. `getSize()` should return the area (width times height), and `describe()` should return a string in the format `Box(widthxheight)`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
