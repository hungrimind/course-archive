# Stateless vs Stateful

A **stateless** system does not retain any information between requests. Each request is independent, like separate conversations where no context is remembered.

A **stateful** system maintains information between requests. It's like a conversation where each part builds on the previous.

> [!warning]
> Stateless systems are generally easier to scale because they don't require sharing session data across servers.

```markdown
// Example of Stateful vs Stateless in HTTP
GET /resource // Stateless: Each request is processed independently
POST /login   // Stateful: User session is maintained across requests
```

## Matching

Sort each item into the right category: **Stateless System**, **Stateful System**

- Conversation builds on context
- Easy to scale
- No session data is retained
- Session data is maintained

<details>
<summary>Answer</summary>

**Stateless System**
- No session data is retained
- Easy to scale

**Stateful System**
- Session data is maintained
- Conversation builds on context

</details>

---

[← Course overview](../../../README.md)
