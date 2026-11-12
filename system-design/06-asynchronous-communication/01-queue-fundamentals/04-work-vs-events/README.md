# Work vs Events

A **work item** is a task that needs to be executed, often involving a specific action or computation. An **event**, on the other hand, is a notification that something has occurred, like a change in state.

In a queue, work items require processing, while events may trigger additional actions or workflows.

```typescript
// Work: Execute a specific task
processTask('Task 1');

// Event: Notify that a task was completed
notifyEvent('Task 1 Completed');
```

> [!note]
> Work often involves direct processing, whereas events can cascade to trigger further operations.

## Matching

Sort each item into the right category: **Work Items**, **Events**

- Execute a specific task
- Notify a change in state
- Require processing in a queue
- Trigger additional actions
- notifyEvent("Task 1 Completed")
- processTask("Task 1")

<details>
<summary>Answer</summary>

**Work Items**
- processTask("Task 1")
- Execute a specific task
- Require processing in a queue

**Events**
- notifyEvent("Task 1 Completed")
- Notify a change in state
- Trigger additional actions

</details>

---

[← Course overview](../../../README.md)
