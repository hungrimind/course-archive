# Array Length

The **.length** property tells you how many items an array contains.

```typescript
const colors = ["red", "green", "blue"];
console.log(colors.length); // 3
console.log(colors[colors.length - 1]); // "blue"
```

Since indexes start at 0, the last item is always at index `length - 1`. An array with 3 items has indexes 0, 1, and 2.

## Fill in the Blanks

Fill in the blanks:

```typescript
const fruits = ["apple", "banana", "cherry"];
const last = fruits[fruits.__(1)__ - 1];
console.log(last); // "cherry"
```

<details>
<summary>Answer</summary>

1. `length`

</details>

---

[← Course overview](../../../README.md)
