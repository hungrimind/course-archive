# What is a Promise?

A **Promise** is an object that represents a value that doesn't exist yet but will in the future. Think of it as a receipt. You don't have the item, but you have a guarantee you'll get it (or be told it's unavailable).

Every promise is in one of three states: **pending** (still waiting), **fulfilled** (succeeded with a value), or **rejected** (failed with an error). Once a promise settles to fulfilled or rejected, it stays that way forever.

```typescript
const promise: Promise<string> = fetchUsername();
// Right now: pending
// Later: fulfilled with "Alice" or rejected with an error
```

## Quiz

**1. What are the three possible states of a Promise?**

- A) waiting, done, error
- B) pending, fulfilled, rejected
- C) open, closed, failed
- D) started, finished, cancelled

<details>
<summary>Answer</summary>

- B) pending, fulfilled, rejected

A Promise starts as pending (still waiting), then settles to either fulfilled (succeeded with a value) or rejected (failed with an error).

</details>

**2. What happens once a Promise settles to fulfilled or rejected?**

- A) It can be reset back to pending
- B) It automatically retries if it was rejected
- C) It stays in that state forever
- D) It is deleted from memory immediately

<details>
<summary>Answer</summary>

- C) It stays in that state forever

Once a Promise settles to fulfilled or rejected, its state is locked. It cannot change again. This is a core guarantee of the Promise design.

</details>

---

[← Course overview](../../../README.md)
