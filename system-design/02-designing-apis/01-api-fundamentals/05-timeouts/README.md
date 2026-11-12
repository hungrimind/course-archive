# Timeouts

# Timeouts

A **timeout** is a predefined period during which a request must complete. If the request takes longer, it's aborted to prevent resource locking and improve system responsiveness.

Here's an example of implementing a timeout using Axios in TypeScript with `async/await`:

```typescript
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://example.com', { timeout: 5000 });
    console.log(response.data);
  } catch (error) {
    console.error('Request timed out or failed', error);
  }
}

fetchData();
```

In this example, the request will fail if it doesn't complete in 5 seconds. The `timeout` is specified in milliseconds (5000 ms = 5 seconds). The `async/await` syntax is used for handling asynchronous requests.

> [!tip]
> Setting appropriate timeouts helps avoid server overloads and enhances user experience by quickly handling slow responses.

## Assignment

Your mission is to implement the `fetchData` function to handle timeouts effectively.

1. Record the start time of the request.
2. Use `Promise.race` to manage the request and a timeout promise.
3. Return the correct `FetchResult` structure based on whether the request succeeds or fails. 

Ensure that the output reflects whether the request timed out or completed successfully!

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
