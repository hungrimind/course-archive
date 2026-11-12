# Class Properties

**Properties** are variables that belong to each instance of a class. In TypeScript, you declare them at the top of the class body with their types, then assign values in the constructor.

```typescript
class User {
  name: string;
  age: number;
  active: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.active = true;
  }
}
```

Every property must have a value by the time the constructor finishes. TypeScript enforces this, so you cannot leave a property unassigned.


## Assignment

Complete the `Product` class by declaring three typed properties (`title`, `price`, `inStock`) above the constructor, then assign them inside the constructor body. The `inStock` property should default to `true` without being passed as a parameter.

Expected output:
```
Wireless Keyboard costs $49.99, in stock: true
```

## Challenge

Complete the `Product` class by declaring three typed properties (`title`, `price`, `inStock`) above the constructor, then assign them inside the constructor body. The `inStock` property should default to `true` without being passed as a parameter.

Expected output:
```
Wireless Keyboard costs $49.99, in stock: true
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
