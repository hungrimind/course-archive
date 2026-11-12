# Affinity Tradeoffs

A **server affinity** (or sticky session) binds a user's session to a particular server, ensuring all requests from that session go to the same server.

```typescript
// Example of sticky session routing (conceptual)
userSession['server'] = 'Server A';
```

> [!warning]
> While affinity can simplify session management, it may lead to uneven server loads and reduce fault tolerance if a server fails.

## True or False

**1. True or false:** Server affinity guarantees that a user's session will continue seamlessly if the bound server fails.

<details>
<summary>Answer</summary>

**False**: Server affinity does not provide fault tolerance if a server fails. It ties a session to a single server, so if that server fails, the session could be disrupted.

</details>

**2. True or false:** One downside of server affinity is that it can lead to uneven server loads.

<details>
<summary>Answer</summary>

**True**: Because all requests from a user's session are directed to the same server, some servers may become overloaded while others are underutilized.

</details>

**3. True or false:** Server affinity can simplify session management by ensuring that all requests from a user's session reach the same server.

<details>
<summary>Answer</summary>

**True**: By binding a session to a specific server, session management becomes simpler, as the server has context and state for that specific session.

</details>

**4. True or false:** Sticky sessions ensure improved fault tolerance because they distribute the load evenly across all servers.

<details>
<summary>Answer</summary>

**False**: Sticky sessions do not inherently improve fault tolerance or ensure even load distribution; they bind sessions to specific servers, which can lead to uneven load and does not protect against server failures.

</details>

---

[← Course overview](../../../README.md)
