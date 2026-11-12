# Overriding Methods

A subclass can **override** a parent method by defining a method with the same name. The subclass version runs instead when called on a subclass instance.

```typescript
class Animal {
  constructor(public name: string) {}

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Cat extends Animal {
  speak(): string {
    return `${this.name} meows`;
  }
}

const cat = new Cat("Whiskers");
console.log(cat.speak()); // "Whiskers meows"
```

The parent's `speak()` still exists, and other `Animal` instances use it. But `Cat` has its own version that takes priority. You can still reach the parent's implementation with `super.speak()` if you need it.


## Assignment

Create a `Formatter` base class with a `format(text: string)` method that returns the text unchanged. Then create an `UpperFormatter` class that extends `Formatter` and overrides `format` to return the text in all uppercase.

## Challenge

Create a `Formatter` base class with a `format(text: string)` method that returns the text unchanged. Then create an `UpperFormatter` class that extends `Formatter` and overrides `format` to return the text in all uppercase.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
