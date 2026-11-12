# What is a Tuple?

A **tuple** is an array with a fixed length where each position has its own specific type. Unlike regular arrays that hold any number of items of one type, a tuple locks down both the count and the type at every index.

```typescript
const product: [string, number] = ["Widget", 9.99];
const name: string = product[0];
const price: number = product[1];
```

The type `[string, number]` means exactly two elements: a `string` first, then a `number`. TypeScript will complain if you swap them, add extras, or leave one out.

## Quiz

**1. What does a tuple enforce that a regular array does not?**

- A) A tuple only allows string elements
- B) A tuple has a fixed length and a specific type at each position
- C) A tuple automatically sorts its elements
- D) A tuple prevents you from reading its elements

<details>
<summary>Answer</summary>

- B) A tuple has a fixed length and a specific type at each position

A tuple locks down both the number of elements and the type at every index. A regular array can hold any number of items of a single type, but a tuple says exactly how many elements there are and what type each one must be.

</details>

**2. Given `const item: [string, number] = ["Widget", 9.99];`, what would happen if you wrote `const item: [string, number] = [9.99, "Widget"];`?**

- A) It would work because tuples ignore element order
- B) It would silently swap the values at runtime
- C) TypeScript would report a type error because the types are in the wrong positions
- D) It would work but the types of item[0] and item[1] would be `any`

<details>
<summary>Answer</summary>

- C) TypeScript would report a type error because the types are in the wrong positions

Tuple types are positional. The type [string, number] requires a string at index 0 and a number at index 1. Swapping them causes a compile-time type error because 9.99 is not a string and "Widget" is not a number.

</details>

---

[← Course overview](../../../README.md)
