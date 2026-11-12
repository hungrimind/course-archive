# Object Destructuring

**Destructuring** pulls properties out of an object into standalone variables in a single line. Instead of repeating `person.name` and `person.age`, you extract them up front.

```typescript
const person = { name: "Alice", age: 30, city: "Oslo" };

const { name, age } = person;

console.log(name); // "Alice"
console.log(age);  // 30
```

The variable names must match the property names. You only need to extract the ones you actually use. `city` is left behind here and that's perfectly fine.


## Assignment

Complete the `introduce` function. Use destructuring to extract `name` and `age` from the person object, then return the string `"{name} is {age}"`.

## Challenge

Complete the `introduce` function. Use destructuring to extract `name` and `age` from the person object, then return the string `"{name} is {age}"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
