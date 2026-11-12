# Capacity Planning

A **capacity plan** is a simple forecast: *how much traffic can we handle today, and what do we need to add before we fall over?*

For beginners, the key idea is:

## Plan for headroom
If you run your critical systems at **95–100%** utilization, small spikes (or slowdowns) can cause timeouts and outages.

A common rule of thumb is to plan so normal load stays around **60–70%** utilization, leaving room for:

- traffic spikes
- deployments
- instance failures

## What resources can become the bottleneck?
Most capacity plans track a few common limits:

- **CPU** (compute-bound work)
- **Memory** (caches, large objects, leaks)
- **Network** (large responses, chatty services)
- **Disk / I/O** (slow queries, heavy writes)

> [!tip]
> Capacity planning isn’t “guessing.” It’s measuring current usage, deciding how much headroom you want, and adding resources (or reducing per-request cost) before you hit the limit.

## True or False

**1. True or false:** A capacity plan is solely a guess about future system requirements.

<details>
<summary>Answer</summary>

**False**: A capacity plan is not just guessing; it involves measuring current usage, forecasting needs, and deciding on the necessary headroom to avoid hitting system limits.

</details>

**2. True or false:** Running a system consistently at 95–100% utilization is ideal for efficiency.

<details>
<summary>Answer</summary>

**False**: Running systems at 95-100% utilization is risky as small traffic spikes or slowdowns can lead to timeouts and outages. It's essential to operate at lower utilization levels.

</details>

**3. True or false:** Monitoring both CPU and memory is essential in capacity planning.

<details>
<summary>Answer</summary>

**True**: CPU and memory are critical resources that can become bottlenecks, so they must be monitored in capacity planning to ensure overall system stability.

</details>

**4. True or false:** Capacity planning includes considering network and disk I/O limits.

<details>
<summary>Answer</summary>

**True**: Network bandwidth and disk I/O can also become limiting factors, so they should be tracked and planned for in order to handle varying loads effectively.

</details>

---

[← Course overview](../../../README.md)
