# Retries

A **retry** is an attempt to resend a failed request. Retries help improve reliability by handling transient failures, like network issues.

```typescript
async function fetchDataWithRetry(url: string, retries: number = 3): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios.get(url);
    } catch (error) {
      if (attempt === retries) throw error;
    }
  }
}
```

> [!warning]
> Avoid excessive retries to prevent overloading the system. Always balance retries with backoff strategies to minimize potential impact.

## Assignment

Your task is to enhance the `fetchDataWithRetry` function to accept a custom `HttpClient`. 

1. Add a new parameter `client` of type `HttpClient` to the function signature.
2. Replace the `axios.get(url)` call with `client.get(url)`.
3. Ensure the function returns the expected results when using the provided `demoClient` and a flaky client implementation.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
