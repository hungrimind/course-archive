# What is a Class?

A **class** is a blueprint for creating objects that share the same structure and behavior. You define properties and methods once, then stamp out as many **instances** as you need with the `new` keyword.

```typescript
class Car {
  brand = "Toyota";
  year = 2024;
}

const myCar = new Car();
console.log(myCar.brand); // "Toyota"
```

Every object created from the same class starts with the same shape, but each one is an independent copy.

## Quiz

**1. What does the `new` keyword do when used with a class?**

- A) It defines a new class blueprint
- B) It creates an independent instance of the class
- C) It copies all methods from another class
- D) It deletes the previous instance of the class

<details>
<summary>Answer</summary>

- B) It creates an independent instance of the class

The `new` keyword creates a new instance (object) from the class blueprint. Each instance is an independent copy with its own property values.

</details>

**2. If two objects are created from the same class, what is true about them?**

- A) They share the same property values and changing one changes the other
- B) They must have different property names
- C) They start with the same shape but are independent copies
- D) Only the first object gets the class properties

<details>
<summary>Answer</summary>

- C) They start with the same shape but are independent copies

Every object created from the same class starts with the same shape (same properties and methods), but each one is an independent copy that can be modified without affecting others.

</details>

---

[← Course overview](../../../README.md)
