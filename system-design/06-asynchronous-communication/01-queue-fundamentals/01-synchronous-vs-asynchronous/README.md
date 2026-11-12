# Synchronous vs Asynchronous

A **synchronous** operation waits for a task to complete before moving to the next one, like waiting in line at a store. In contrast, an **asynchronous** operation allows tasks to start without waiting for others to finish, similar to ordering online and receiving a notification when ready.

```typescript
// Asynchronous example
async function fetchData(): Promise<void> {
  await networkRequest(); // Other work can continue while waiting
}
```

> [!note]
> Use asynchronous operations to improve system responsiveness and efficiency, especially in I/O-bound tasks.

## True or False

**1. True or false:** Synchronous operations allow tasks to proceed without waiting for previous tasks to complete.

<details>
<summary>Answer</summary>

**False**: Synchronous operations require each task to wait for the previous one to complete before proceeding, like waiting in line at a store.

</details>

**2. True or false:** Asynchronous programming is often used to improve the responsiveness of applications.

<details>
<summary>Answer</summary>

**True**: Asynchronous programming allows tasks to be executed without blocking, which can increase responsiveness, especially for I/O-bound tasks.

</details>

**3. True or false:** In the provided code, the 'await' keyword blocks the entire program until 'networkRequest' completes.

<details>
<summary>Answer</summary>

**False**: The 'await' keyword pauses the execution of the 'fetchData' function until 'networkRequest' completes, but it does not block the entire program. Other operations can continue while awaiting.

</details>

**4. True or false:** Asynchronous operations are not beneficial for I/O-bound tasks.

<details>
<summary>Answer</summary>

**False**: Asynchronous operations are particularly useful for I/O-bound tasks as they allow other operations to continue without waiting for I/O operations to complete, enhancing efficiency and responsiveness.

</details>

---

[← Course overview](../../../README.md)
