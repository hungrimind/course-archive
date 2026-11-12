# HTTP Verbs

HTTP **verbs** define actions you can perform on resources in a RESTful API. The main verbs are GET, POST, PUT, DELETE, and PATCH.

- **GET**: Retrieve data from the server. It doesn't change state.
- **POST**: Send data to the server, often creating a new resource.
- **PUT**: Update an existing resource (or create it if it doesn't exist).
- **DELETE**: Remove a resource from the server.
- **PATCH**: Partially update a resource.

```text
# Example: creating a new user
POST /users
```

> [!warning]
> Avoid using GET to alter server state, as it's meant for data retrieval.

## Matching

Sort each item into the right category: **State-Altering Verbs**, **Retrieval Verb**, **Partial Update Verb**

- DELETE
- GET
- PATCH
- POST
- PUT

<details>
<summary>Answer</summary>

**State-Altering Verbs**
- POST
- PUT
- DELETE

**Retrieval Verb**
- GET

**Partial Update Verb**
- PATCH

</details>

---

[← Course overview](../../../README.md)
