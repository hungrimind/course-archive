# Variable Annotations

A **type annotation** goes right after the variable name, separated by a colon. It tells TypeScript exactly what type that variable holds.

```typescript
let age: number = 25;
let username: string = "Ada";
let isActive: boolean = true;
```

If you later try `age = "twenty-five"`, TypeScript flags the error instantly. The annotation acts as a contract: once declared, the variable only accepts values of that type.


## Assignment

Declare three annotated variables: `age` as a `number` set to `25`, `username` as a `string` set to `"Ada"`, and `isActive` as a `boolean` set to `true`. Each variable must have an explicit type annotation.

## Challenge

Declare three annotated variables: `age` as a `number` set to `25`, `username` as a `string` set to `"Ada"`, and `isActive` as a `boolean` set to `true`. Each variable must have an explicit type annotation.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
