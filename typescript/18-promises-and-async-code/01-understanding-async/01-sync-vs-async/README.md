# Sync vs Async

**Synchronous** code runs line by line. Each line waits for the previous one to finish before moving on. **Asynchronous** code can kick off a long task (like fetching data from the internet) and keep going without waiting for the result.

```typescript
// Synchronous: each line blocks the next
const name = getName();
console.log(name);

// Asynchronous: fetchData starts, code moves on
fetchData();
console.log("This runs immediately");
```

Most I/O operations (network requests, reading files, timers) are asynchronous. Without async code, your program would freeze every time it waited on the network.

## Quiz

**1. What happens when synchronous code encounters a long-running task like a network request?**

- A) It skips the task and moves to the next line
- B) It blocks and waits for the task to finish before continuing
- C) It runs the task in the background automatically
- D) It throws an error because synchronous code cannot do network requests

<details>
<summary>Answer</summary>

- B) It blocks and waits for the task to finish before continuing

Synchronous code runs line by line. Each line must finish before the next one starts, so a long-running task blocks everything after it until it completes.

</details>

**2. Why is asynchronous code important for I/O operations like fetching data?**

- A) It makes the data arrive faster from the server
- B) It prevents your program from freezing while waiting for a response
- C) It guarantees the data will always be available
- D) It automatically retries failed requests

<details>
<summary>Answer</summary>

- B) It prevents your program from freezing while waiting for a response

Asynchronous code lets your program kick off a task like a network request and keep running other code while waiting for the result, preventing the program from freezing.

</details>

---

[← Course overview](../../../README.md)
