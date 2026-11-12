# Modifying Properties

Assign a new value to a property using dot notation and the `=` operator, just like updating a variable.

```typescript
const person = { name: "Alice", age: 30 };

person.age = 31;
person.name = "Bob";

console.log(person); // { name: "Bob", age: 31 }
```

Even though `person` is declared with `const`, you can still change its properties. The `const` only prevents reassigning the variable itself to a completely different object.


## Assignment

Complete the `updatePerson` function so it modifies the object's `name` and `age` properties using dot notation, then returns the modified object.

## Challenge

Complete the `updatePerson` function so it modifies the object's `name` and `age` properties using dot notation, then returns the modified object.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
