# Push and Pop

**.push()** adds an item to the end of an array. **.pop()** removes the last item and returns it.

```typescript
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]

const last = fruits.pop();
console.log(last); // "cherry"
```

Think of an array like a stack of plates -- `push` puts one on top, `pop` takes it off.


## Assignment

Start with `const fruits = ["apple", "banana"]`.

1. Use `push` to add `"cherry"` to the end
2. Use `push` to add `"date"` to the end
3. Use `pop` to remove the last item and store it in a variable called `removed`

Print the array and then print `removed`.

## Challenge

Start with `const fruits = ["apple", "banana"]`.

1. Use `push` to add `"cherry"` to the end
2. Use `push` to add `"date"` to the end
3. Use `pop` to remove the last item and store it in a variable called `removed`

Print the array and then print `removed`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
