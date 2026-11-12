# Idempotent Operations

An **idempotent operation** is an operation that has the same effect no matter how many times it is executed. In RESTful APIs, this ensures repeated requests won't alter the outcome.

- **GET**, **PUT**, and **DELETE** are idempotent HTTP verbs.

```text
# Example: deleting a user
DELETE /users/123
```

> [!tip]
> Use idempotency to avoid unintended side effects when users retry actions.

## True or False

**1. True or false:** An idempotent operation will yield different outcomes when executed multiple times.

<details>
<summary>Answer</summary>

**False**: An idempotent operation produces the same outcome no matter how many times it is executed. This is the core principle of idempotency.

</details>

**2. True or false:** POST is an idempotent HTTP verb.

<details>
<summary>Answer</summary>

**False**: POST is not idempotent because executing it multiple times can create multiple resources or have different outcomes each time the request is processed.

</details>

**3. True or false:** Repeatedly calling a DELETE request on the same resource won't change the outcome after the first successful operation.

<details>
<summary>Answer</summary>

**True**: Once a resource is deleted with a DELETE request, subsequent DELETE requests on the same resource will have no effect, maintaining the outcome as the resource no longer exists.

</details>

**4. True or false:** GET requests are idempotent because they do not modify any resources.

<details>
<summary>Answer</summary>

**True**: GET is idempotent because it only retrieves data and does not alter the server state, so repeated GET requests yield the same result without side effects.

</details>

---

[← Course overview](../../../README.md)
