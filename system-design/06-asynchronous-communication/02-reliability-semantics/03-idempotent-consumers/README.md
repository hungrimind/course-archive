# Idempotent Consumers

An **idempotent consumer** in a messaging system processes the same message multiple times without changing the outcome beyond the initial processing. This ensures consistency even when messages are re-delivered due to retries or failures.

```typescript
function processMessage(messageId: string, payload: string) {
  if (!isAlreadyProcessed(messageId)) {
    performAction(payload);
    markAsProcessed(messageId);
  }
}
```

> [!tip]
> Use unique identifiers to track processed messages, maintaining idempotency despite duplicate deliveries.

## Assignment

As you work to implement idempotent consumers, transform the `processMessage` function to prevent duplicate actions. 

1. Create an interface named `DedupeStore` with methods `has` and `add`.
2. Implement a class `InMemoryDedupeStore` that stores processed message IDs.
3. Modify `processMessage` to use `DedupeStore` for checking and marking processed messages.
4. Update the function calls to pass an instance of `InMemoryDedupeStore` and adjust parameters accordingly. 

Upon completion, ensure that the console output remains consistent with the expected actions performed.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
