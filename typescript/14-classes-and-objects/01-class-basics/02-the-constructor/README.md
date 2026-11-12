# The Constructor

The **constructor** is a special method that runs automatically when you create an instance with `new`. It sets up the object's initial state.

```typescript
class Car {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}

const myCar = new Car("Honda", 2023);
```

Instead of every instance having the same hardcoded values, the constructor lets you customize each one at creation time.


## Assignment

Create a `Book` class with `title` (string) and `pages` (number) properties. Add a constructor that accepts both values as parameters and assigns them to the class properties. Create two different `Book` instances to verify each one holds its own data.

## Challenge

Create a `Book` class with `title` (string) and `pages` (number) properties. Add a constructor that accepts both values as parameters and assigns them to the class properties. Create two different `Book` instances to verify each one holds its own data.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
