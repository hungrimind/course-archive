# Authorization Basics

**Authorization Basics**

**Authorization** determines what resources or actions a user is allowed to access after they have been authenticated. It enforces permissions and access levels within a system.

```plaintext
[Access Control] -> [Resource Permission]
```

While authentication verifies who you are, authorization defines what you can do. For instance, a user might be authenticated to access an application but authorized only to view, not edit, certain data.

> [!note]
> Always implement both authentication and authorization to secure your system effectively.

## Quiz

**1. What is the primary function of authorization in a system?**

- A) To verify the identity of a user
- B) To determine what actions a user can perform
- C) To encrypt user data
- D) To provide user interface features

<details>
<summary>Answer</summary>

- B) To determine what actions a user can perform

Authorization is responsible for determining what actions a user is allowed to perform within a system, ensuring they have the necessary permissions.

</details>

**2. How does authorization differ from authentication?**

- A) Authorization ensures user information is confidential
- B) Authorization verifies user identity, while authentication grants access to resources
- C) Authentication defines access levels, while authorization verifies identity
- D) Authentication verifies who you are, while authorization defines what you can do

<details>
<summary>Answer</summary>

- D) Authentication verifies who you are, while authorization defines what you can do

Authentication is about verifying a user's identity, whereas authorization defines what resources or actions the user is permitted to access.

</details>

**3. What happens if a user has been authenticated but not authorized?**

- A) The user can access all functionalities
- B) The user cannot perform any actions
- C) The user gains access to limited functionalities based on permissions
- D) The user encounters a security threat

<details>
<summary>Answer</summary>

- C) The user gains access to limited functionalities based on permissions

If a user is authenticated but not authorized, they can only access limited functionalities according to the permissions that have been set for them.

</details>

---

[← Course overview](../../../README.md)
