# Nested Objects

A **nested object** is an object stored as a property of another object. This is how you represent structured data like an address inside a person.

```typescript
const person = {
  name: "Alice",
  address: {
    city: "Oslo",
    country: "Norway",
  },
};

console.log(person.address.city); // "Oslo"
```

Access deep values by chaining dots. TypeScript infers the nested types too, so `person.address.city` is known to be a string.


## Assignment

Complete the `getAuthorFirstName`, `getAuthorLastName`, and `getAuthorFullName` functions so they return the corresponding values from the nested `author` object by chaining dot notation. The full name should be the first name and last name separated by a space.

## Challenge

Complete the `getAuthorFirstName`, `getAuthorLastName`, and `getAuthorFullName` functions so they return the corresponding values from the nested `author` object by chaining dot notation. The full name should be the first name and last name separated by a space.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
