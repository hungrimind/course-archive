# Shorthand Properties

**Parameter properties** let you declare and assign class properties directly in the constructor signature. Add an access modifier or `readonly` before the parameter, and TypeScript handles the rest.

```typescript
class User {
  constructor(
    public name: string,
    private age: number,
    readonly id: string
  ) {}
}

const user = new User("Alice", 30, "u-1");
console.log(user.name); // "Alice"
```

This eliminates the repetitive pattern of declaring a property at the top, then assigning `this.name = name` inside the constructor. Same result, far less boilerplate.


## Assignment

Refactor the `Movie` class to use parameter properties. Replace the separate property declarations and constructor assignments with the shorthand syntax directly in the constructor signature. Keep the `getRating` method as-is.

## Challenge

Refactor the `Movie` class to use parameter properties. Replace the separate property declarations and constructor assignments with the shorthand syntax directly in the constructor signature. Keep the `getRating` method as-is.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
