# Why Generics?

A function that accepts **any** type using `any` throws away type information. You get no autocomplete, no error checking, nothing.

```typescript
function first(items: any[]): any {
  return items[0];
}

const result = first(["a", "b"]); // result is any
```

**Generics** solve this by letting you write flexible functions that still track the actual type flowing through them. The type gets decided when the function is called, not when it's written.

## Quiz

**1. What is the main problem with using `any` as a function parameter and return type?**

- A) It makes the code run slower at runtime
- B) TypeScript loses all type information, so you get no autocomplete or error checking
- C) It prevents the function from accepting multiple types
- D) It causes the function to throw runtime errors

<details>
<summary>Answer</summary>

- B) TypeScript loses all type information, so you get no autocomplete or error checking

When you use `any`, TypeScript treats the value as having no specific type, so it cannot provide autocomplete, catch type errors, or track what type flows through the function.

</details>

**2. What do generics allow you to do that `any` does not?**

- A) Accept only string types as arguments
- B) Write functions that reject all input types
- C) Write flexible functions that still track the actual type flowing through them
- D) Automatically convert types at runtime

<details>
<summary>Answer</summary>

- C) Write flexible functions that still track the actual type flowing through them

Generics let you write functions that work with multiple types while preserving type information. The type is decided when the function is called, not when it is written, so TypeScript can still provide full type safety.

</details>

---

[← Course overview](../../../README.md)
