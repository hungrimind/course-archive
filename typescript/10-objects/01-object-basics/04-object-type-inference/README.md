# Object Type Inference

TypeScript **infers the type** of each property when you create an object. From that point on, it enforces those types, so you cannot assign a value of the wrong type to an existing property.

```typescript
const car = { brand: "Toyota", year: 2020 };

car.year = 2022;    // fine, still a number
car.year = "old";   // Error: Type 'string' is not assignable to type 'number'
```

TypeScript also knows which properties exist. Accessing a property that was not part of the original object gives you a compile-time error, catching typos before your code runs.

## True or False

**1. True or false:** TypeScript automatically infers the type of each property when you create an object.

<details>
<summary>Answer</summary>

**True**: TypeScript examines the initial values you assign and infers each property's type from them.

</details>

**2. True or false:** After creating an object, you can assign a string to a property that was originally a number.

<details>
<summary>Answer</summary>

**False**: TypeScript enforces the inferred types. If a property was inferred as number, assigning a string causes a compile-time error.

</details>

**3. True or false:** Accessing a property that does not exist on an object will only cause an error at runtime, not at compile time.

<details>
<summary>Answer</summary>

**False**: TypeScript catches missing properties at compile time, so you get an error before the code even runs.

</details>

**4. True or false:** You can reassign a property to a new value of the same type without any error.

<details>
<summary>Answer</summary>

**True**: As long as the new value matches the inferred type, the assignment is valid. For example, changing a number property from 2020 to 2022 is fine.

</details>

---

[← Course overview](../../../README.md)
