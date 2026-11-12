# Error Types

JavaScript has **built-in error types** for different kinds of failures. `TypeError` is for wrong types, `RangeError` for out-of-range values, and `SyntaxError` for invalid syntax. You can throw these directly instead of the generic `Error`.

```typescript
function setAge(age: number) {
  if (age < 0 || age > 150) {
    throw new RangeError("Age must be between 0 and 150");
  }
}
```

Using specific error types helps callers distinguish between different failure modes. You can even create your own by extending the `Error` class.

## Matching

Sort each item into the right category: **TypeError**, **RangeError**, **SyntaxError**, **Generic Error**

- Age value outside 0-150 range
- Array length set to a negative number
- Calling a method on null
- Custom application failure message
- Missing closing bracket in code
- Parsing invalid JSON
- Using a value as a function when it is not

<details>
<summary>Answer</summary>

**TypeError**
- Calling a method on null
- Using a value as a function when it is not

**RangeError**
- Array length set to a negative number
- Age value outside 0-150 range

**SyntaxError**
- Parsing invalid JSON
- Missing closing bracket in code

**Generic Error**
- Custom application failure message

</details>

---

[← Course overview](../../../README.md)
