# Circuit Breakers

A **circuit breaker** is a design pattern that helps prevent system overload by stopping operations when failures exceed a threshold. It acts like an electrical circuit breaker, halting requests to a failing service to avoid further strain.

```typescript
if (failureCount > threshold) {
  openCircuit(); // Stop requests
}
```

When the circuit is "open," requests are blocked, allowing the system to recover. Once stable, the circuit can "close," resuming normal operations. 

> [!warning]
> Avoid constantly retrying failed services, as it can worsen the situation. Use circuit breakers to manage failures effectively.

## Quiz

**1. What is the primary purpose of a circuit breaker in system design?**

- A) To enhance data encryption
- B) To reduce power consumption
- C) To prevent system overload by stopping operations upon failure
- D) To increase network speed

<details>
<summary>Answer</summary>

- C) To prevent system overload by stopping operations upon failure

A circuit breaker prevents system overload by stopping operations when failures exceed a certain threshold, allowing the system to recover.

</details>

**2. What happens when the circuit is 'open' in the circuit breaker pattern?**

- A) Requests are prioritized
- B) Requests are blocked
- C) Services are shut down permanently
- D) All requests are rerouted

<details>
<summary>Answer</summary>

- B) Requests are blocked

When the circuit is 'open,' requests to the failing service are blocked to prevent further strain on the system.

</details>

**3. Why should you avoid constantly retrying failed services without a circuit breaker?**

- A) It can accelerate the system's recovery
- B) It risks aggravating the failure situation
- C) It improves system efficiency
- D) It ensures faster service

<details>
<summary>Answer</summary>

- B) It risks aggravating the failure situation

Constantly retrying failed services can worsen system strain, so circuit breakers manage failures by halting requests and allowing recovery.

</details>

---

[← Course overview](../../../README.md)
