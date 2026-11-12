# What is Availability?

A system’s **availability** is the percentage of time it is up and able to serve requests.

For example:
- **99.9%** availability (“three nines”) allows about **~43 minutes of downtime per month**.

> [!tip]
> Availability is improved with **redundancy** (multiple instances) and **failover** (switching to a healthy instance when one fails).

In system design, you often add load balancers, replicas, and multi-zone deployments to reduce downtime.

## True or False

**1. True or false:** A system with 99.9% availability is expected to have approximately 4.3 hours of downtime per month.

<details>
<summary>Answer</summary>

**False**: A system with 99.9% availability is expected to have about 43 minutes of downtime per month, not 4.3 hours.

</details>

**2. True or false:** Redundancy can help improve a system's availability by having multiple instances to handle requests.

<details>
<summary>Answer</summary>

**True**: Redundancy increases availability by ensuring that if one instance fails, others can take over and continue serving requests.

</details>

**3. True or false:** Failover mechanisms automatically switch to a backup system to improve reliability when the primary system fails.

<details>
<summary>Answer</summary>

**True**: Failover enhances reliability by automatically redirecting traffic to a different instance, ensuring continuous availability even if the main instance fails.

</details>

**4. True or false:** Adding a single load balancer is not effective in improving system availability.

<details>
<summary>Answer</summary>

**False**: Adding a load balancer helps distribute requests efficiently across multiple instances, enhancing system availability by preventing overload on a single instance.

</details>

---

[← Course overview](../../../README.md)
