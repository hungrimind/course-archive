# Accessing Properties

**Dot notation** is the standard way to read a property from an object. Just write the object name, a dot, and the property name.

```typescript
const person = { name: "Alice", age: 30 };

console.log(person.name); // "Alice"
console.log(person["age"]); // 30
```

**Bracket notation** (`person["age"]`) does the same thing but lets you use a variable as the key. Stick with dot notation unless you need that flexibility.


## Assignment

Complete the `getName` and `getAge` functions so they return the corresponding property from the given object using dot notation.

## Challenge

Complete the `getName` and `getAge` functions so they return the corresponding property from the given object using dot notation.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
