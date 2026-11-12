# Promise race

**`Promise.race()`** resolves or rejects as soon as the first promise in the array settles. The remaining promises keep running but their results are ignored.

```typescript
const result = await Promise.race([
  fetchData(),
  timeout(5000),
]);
```

A common use case is timeouts: race your actual request against a timer. Whichever settles first wins. If the timer resolves before the fetch, you know the request took too long.

## True or False

**1. True or false:** Promise.race() resolves or rejects as soon as the first promise in the array settles.

<details>
<summary>Answer</summary>

**True**: Promise.race() returns a promise that settles with the same result (fulfilled or rejected) as the first promise in the array to settle.

</details>

**2. True or false:** When Promise.race() settles, all remaining promises in the array are automatically cancelled.

<details>
<summary>Answer</summary>

**False**: The remaining promises are NOT cancelled. They keep running in the background, but their results are simply ignored by Promise.race().

</details>

**3. True or false:** A common use case for Promise.race() is implementing timeouts for async operations.

<details>
<summary>Answer</summary>

**True**: You can race your actual request against a timer promise. Whichever settles first wins, so if the timer resolves before the fetch, you know the request took too long.

</details>

**4. True or false:** Promise.race() always resolves successfully with the fastest promise's value.

<details>
<summary>Answer</summary>

**False**: Promise.race() settles with whatever the first promise does. If the first promise to settle is a rejection, then Promise.race() also rejects.

</details>

---

[← Course overview](../../../README.md)
