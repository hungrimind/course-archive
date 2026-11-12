# The AND Operator

**`&&`** requires ALL conditions to be `true`. If any one is `false`, the whole expression is `false`.

```typescript
const age: number = 20;
const hasTicket: boolean = true;

if (age >= 18 && hasTicket) {
  console.log("Enjoy the show!");
}
```

There's a shortcut built in: if the left side is `false`, TypeScript skips the right side entirely. It already knows the answer.

## Fill in the Blanks

Fill in the blanks:

```typescript
const age: number = 20;
const hasTicket: boolean = true;

if (age >= 18 __(1)__ hasTicket) {
  console.log("Enjoy the show!");
}
```

<details>
<summary>Answer</summary>

1. `&&`

</details>

---

[← Course overview](../../../README.md)
