# Reliability vs Availability

A system’s **reliability** is how often it works **correctly** over time.

A system’s **availability** is how often it is **up and able to respond**.

These are related but not the same:

- You can be **available but not reliable**: the service responds, but returns wrong results or errors.
- You can be **reliable but not available**: the service is correct when it’s up, but it goes down and takes a long time to recover.

> [!note]
> Availability is often improved by fast recovery (restarts, failover). Reliability is improved by correctness (testing, safe deploys, data integrity).

## True or False

**1. True or false:** A system can be available but not reliable if it returns incorrect results while being up.

<details>
<summary>Answer</summary>

**True**: Availability refers to a system being up and able to respond, while reliability involves the correctness of that response. A system that is up but consistently returns incorrect outputs is available but not reliable.

</details>

**2. True or false:** Reliability of a system can be improved by fast recovery techniques like restarts and failover.

<details>
<summary>Answer</summary>

**False**: Reliability is improved by correctness measures like testing and safe deployments, not fast recovery. Fast recovery techniques improve availability by reducing downtime.

</details>

**3. True or false:** A system that is reliable but not available may suffer from frequent downtimes despite delivering correct responses when it is operational.

<details>
<summary>Answer</summary>

**True**: Reliability ensures responses are correct, but if a system is not available, it can mean that the system frequently goes down, interfering with its usefulness despite its correctness when up.

</details>

**4. True or false:** Availability and reliability are the same since both ensure that a system provides correct responses over time.

<details>
<summary>Answer</summary>

**False**: Although related, availability focuses on uptime and responsiveness, while reliability emphasizes the correctness of responses. They address different aspects of system performance.

</details>

---

[← Course overview](../../../README.md)
