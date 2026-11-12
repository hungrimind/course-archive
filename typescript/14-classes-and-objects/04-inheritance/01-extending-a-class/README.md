# Extending a Class

A class can **extend** another class to inherit all of its properties and methods. The child class gets everything the parent has, plus anything new you define.

```typescript
class Animal {
  constructor(public name: string) {}

  move(): string {
    return `${this.name} moves`;
  }
}

class Dog extends Animal {
  fetch(): string {
    return `${this.name} fetches the ball`;
  }
}

const dog = new Dog("Rex");
console.log(dog.move());  // "Rex moves"
console.log(dog.fetch()); // "Rex fetches the ball"
```

`Dog` never defined `name` or `move()`, but it has both because it extends `Animal`.


## Assignment

Create a `Truck` class that extends `Vehicle`. The `Truck` class should add a `haul` method that returns `"{name} hauls the cargo"`. The child class inherits the constructor and `describe` method from `Vehicle` without redefining them.

## Challenge

Create a `Truck` class that extends `Vehicle`. The `Truck` class should add a `haul` method that returns `"{name} hauls the cargo"`. The child class inherits the constructor and `describe` method from `Vehicle` without redefining them.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
