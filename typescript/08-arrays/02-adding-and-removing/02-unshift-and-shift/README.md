# Unshift and Shift

**.unshift()** adds an item to the beginning of an array. **.shift()** removes the first item and returns it.

```typescript
const tasks = ["eat", "sleep"];
tasks.unshift("wake up");
console.log(tasks); // ["wake up", "eat", "sleep"]

const first = tasks.shift();
console.log(first); // "wake up"
```

> [!tip]
> `push`/`pop` work at the end, `unshift`/`shift` work at the beginning. For large arrays, `push` and `pop` are faster because the other items don't need to move.

## Matching

Sort each item into the right category: **Operates at the end of the array**, **Operates at the beginning of the array**

- Returns removed first item
- Returns removed last item
- pop()
- push("x")
- shift()
- unshift("x")

<details>
<summary>Answer</summary>

**Operates at the end of the array**
- push("x")
- pop()
- Returns removed last item

**Operates at the beginning of the array**
- unshift("x")
- shift()
- Returns removed first item

</details>

---

[← Course overview](../../../README.md)
