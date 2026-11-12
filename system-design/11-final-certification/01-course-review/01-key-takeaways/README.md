# Key Takeaways

### Key Takeaways

System design involves creating scalable, reliable, and efficient systems by balancing functional and non-functional requirements. 

Key concepts include **scalability**, **availability**, **consistency**, API design, data storage choices, and **load balancing**. Understand the tradeoffs between vertical and horizontal scaling and the importance of caching for performance.

Familiarize yourself with **asynchronous communication** via message queues, database scaling through sharding, and ensuring system reliability with redundancy and observability.

Security fundamentals like **rate limiting** and **input validation** are crucial for protecting systems against abuse and malicious data. 

> [!note]
> System design is an iterative process; continuously refine your design as requirements and technologies evolve.

## Quiz

**1. What is the primary benefit of horizontal scaling in system design?**

- A) It decreases the physical size of each server.
- B) It increases storage capacity on a single machine.
- C) It allows adding more servers to handle increased load.
- D) It simplifies the software architecture.

<details>
<summary>Answer</summary>

- C) It allows adding more servers to handle increased load.

Horizontal scaling is achieved by adding more servers to distribute the load, making the system more capable of handling increased demand.

</details>

**2. Why is caching important in system design?**

- A) It reduces the number of servers needed.
- B) It improves data consistency across the system.
- C) It improves performance by reducing data retrieval time.
- D) It automatically handles input validation.

<details>
<summary>Answer</summary>

- C) It improves performance by reducing data retrieval time.

Caching stores frequently accessed data in a fast storage layer, reducing the time it takes to retrieve data and improving system performance.

</details>

**3. Which technique helps ensure system reliability through redundancy?**

- A) Sharding
- B) Load balancing
- C) Data replication
- D) Rate limiting

<details>
<summary>Answer</summary>

- C) Data replication

Data replication involves storing copies of data on multiple servers, providing redundancy that helps maintain system reliability in case of failures.

</details>

**4. What is the purpose of rate limiting in terms of security?**

- A) To ensure high availability by spreading requests evenly.
- B) To prevent overuse of system resources and protect against abuse.
- C) To facilitate faster data processing in message queues.
- D) To enhance data storage capacity through load distribution.

<details>
<summary>Answer</summary>

- B) To prevent overuse of system resources and protect against abuse.

Rate limiting controls the number of requests a user can make to a system, helping to protect it from being overwhelmed by excessive demand or malicious attacks.

</details>

---

[← Course overview](../../../README.md)
