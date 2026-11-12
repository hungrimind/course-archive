# What is an Object?

An **object** groups related data into a single value using **key-value pairs** inside curly braces. Where arrays use numbered positions, objects use named **properties** so each piece of data has a clear label.

```typescript
const person = {
  name: "Alice",
  age: 30,
  active: true,
};
```

Each key (like `name` or `age`) is a property name, and the value after the colon is that property's data. You can mix different types in one object.

## Quiz

**1. What do objects use to organize their data, unlike arrays?**

- A) Numbered indices starting from 0
- B) Named key-value pairs
- C) Semicolons to separate values
- D) Square brackets around each value

<details>
<summary>Answer</summary>

- B) Named key-value pairs

Objects use named key-value pairs (properties) to organize data, while arrays use numbered positions (indices).

</details>

**2. Which of the following is a valid TypeScript object?**

- A) const item = [name: "Book", price: 10];
- B) const item = {name: "Book", price: 10};
- C) const item = (name: "Book", price: 10);
- D) const item = <name: "Book", price: 10>;

<details>
<summary>Answer</summary>

- B) const item = {name: "Book", price: 10};

Objects are defined with curly braces {} containing key-value pairs separated by commas.

</details>

**3. What types of values can properties in a single object hold?**

- A) Only strings
- B) Only numbers and strings
- C) Different types can be mixed in one object
- D) All properties must be the same type

<details>
<summary>Answer</summary>

- C) Different types can be mixed in one object

An object can mix different types in one value. In the lesson example, the person object has a string (name), a number (age), and a boolean (active).

</details>

---

[← Course overview](../../../README.md)
