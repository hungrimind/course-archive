# Void Functions

**`void`** is the return type for functions that don't return a value. They do something, like log a message or update a variable, but hand nothing back.

```typescript
function logMessage(msg: string): void {
  console.log(msg);
}
```

Marking a function as `void` makes your intent clear: this function is about side effects, not producing a result. If you accidentally add a `return` with a value, TypeScript will let you know.

## Fill in the Blanks

Fill in the blanks:

```typescript
function logMessage(msg: __(1)__): __(2)__ {
  console.log(msg);
}
```

<details>
<summary>Answer</summary>

1. `string`
2. `void`

</details>

---

[← Course overview](../../../README.md)
