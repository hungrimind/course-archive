# What is an API?

A **API** (Application Programming Interface) is a set of rules that lets different software entities communicate with each other. It defines how requests and responses should be formatted and handled.

```json
// Example of a simple API request
GET /users/123

// Response
{
  "id": 123,
  "name": "Alice"
}
```

Here, a client requests user data, and the API responds with that information. APIs enable interaction between different systems or components.

## True or False

**1. True or false:** APIs only allow communication between web-based applications.

<details>
<summary>Answer</summary>

**False**: APIs are not limited to web-based applications. They enable communication between various types of software systems, including desktop applications, mobile apps, and hardware devices.

</details>

**2. True or false:** An API request must always specify the HTTP method to be used, such as GET or POST.

<details>
<summary>Answer</summary>

**True**: API requests generally specify the HTTP method to indicate the type of action being requested. Common methods include GET for retrieving data, POST for creating resources, PUT for updating resources, and DELETE for removing resources.

</details>

**3. True or false:** APIs define both the format of requests and responses to facilitate communication between software entities.

<details>
<summary>Answer</summary>

**True**: APIs set rules for both requests and responses, ensuring that data is exchanged in a consistent and understood format between different software entities.

</details>

**4. True or false:** Once defined, the structure of an API cannot be changed without disrupting communication.

<details>
<summary>Answer</summary>

**False**: API structures can be versioned and updated to improve functionality or correct issues. Proper versioning allows changes without disrupting existing clients by enabling them to continue using older versions of the API.

</details>

---

[← Course overview](../../../README.md)
