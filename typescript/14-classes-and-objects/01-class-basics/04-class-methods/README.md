# Class Methods

**Methods** are functions defined inside a class. They can access the object's properties through `this` and describe what an instance can do.

```typescript
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}

const user = new User("Alice");
console.log(user.greet()); // "Hi, I'm Alice"
```

Every instance shares the same method definitions, but each call operates on that specific instance's data.


## Assignment

Create a `Counter` class that starts at `0`. Implement an `increment` method that adds 1 to the count, a `decrement` method that subtracts 1, and a `getCount` method that returns the current count.

## Challenge

Create a `Counter` class that starts at `0`. Implement an `increment` method that adds 1 to the count, a `decrement` method that subtracts 1, and a `getCount` method that returns the current count.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
