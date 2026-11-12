# API Versioning

A **versioned API** allows you to make changes without disrupting existing clients. It manages different versions of an API simultaneously, ensuring backward compatibility.

Common versioning strategies include:
- **URL Versioning**: Include the version in the URL.
  ```plaintext
  GET /v1/users/123
  ```
- **Header Versioning**: Specify the version in request headers.
  ```plaintext
  Accept: application/vnd.example.v1+json
  ```
- **Query Parameter Versioning**: Pass the version as a query parameter.
  ```plaintext
  GET /users/123?version=1
  ```

> [!tip]
> Choose a strategy that aligns with your API's evolution needs and client compatibility. URL versioning is often the simplest to implement.

## Matching

Sort each item into the right category: **Versioning Strategies**, **URL Versioning Example**, **Header Versioning Example**

- Accept: application/vnd.example.v1+json
- GET /v1/users/123
- Header Versioning
- Query Parameter Versioning
- URL Versioning

<details>
<summary>Answer</summary>

**Versioning Strategies**
- URL Versioning
- Header Versioning
- Query Parameter Versioning

**URL Versioning Example**
- GET /v1/users/123

**Header Versioning Example**
- Accept: application/vnd.example.v1+json

</details>

---

[← Course overview](../../../README.md)
