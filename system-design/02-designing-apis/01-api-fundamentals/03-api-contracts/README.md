# API Contracts

A **API contract** is a formal agreement between a client and a server that defines how they will communicate. It specifies the expected requests and responses, including data types and error handling.

```plaintext
Contract: 
Request - GET /users/123
Response - 200 OK
```

This ensures both parties understand how to interact, reducing errors and improving system reliability.

> [!tip]
> Use API contracts to keep development teams aligned and to simplify integration testing.

## True or False

**1. True or false:** An API contract is solely a guideline and not a formal agreement between a client and a server.

<details>
<summary>Answer</summary>

**False**: An API contract is indeed a formal agreement between a client and a server, detailing how they communicate, including requests, responses, data types, and error handling.

</details>

**2. True or false:** API contracts help improve system reliability by ensuring that both parties are aware of the expected interactions.

<details>
<summary>Answer</summary>

**True**: By clearly defining the communication expectations between a client and a server, API contracts reduce the risk of miscommunication and errors, thus improving system reliability.

</details>

**3. True or false:** The example 'Request - GET /users/123' in an API contract specifies the response should be '500 Internal Server Error' if the user does not exist.

<details>
<summary>Answer</summary>

**False**: The response '500 Internal Server Error' indicates a server error, not a non-existent user. A '404 Not Found' response would be more fitting for a non-existent user scenario.

</details>

**4. True or false:** API contracts can simplify integration testing by keeping development teams aligned on expected interactions.

<details>
<summary>Answer</summary>

**True**: By clearly defining the expected interactions in API contracts, development teams can focus on creating tests that verify these interactions, simplifying the integration testing process.

</details>

---

[← Course overview](../../../README.md)
