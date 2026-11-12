# Schema Flexibility

A **schema flexible** database allows you to store data without a predefined structure, enabling changes to data models without downtime. This is particularly useful in applications with rapidly evolving requirements.

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "age": 30
}
```

Here, the JSON document can easily accommodate additional fields like "phone" or "address" without altering existing data.

> [!tip]
> Use schema flexibility to adapt quickly to new data requirements, but ensure you maintain necessary data validation and integrity.

## True or False

**1. True or false:** A schema flexible database requires downtime to add new fields to existing documents.

<details>
<summary>Answer</summary>

**False**: One of the main advantages of a schema flexible database is that it does not require downtime to add new fields to existing documents, which allows rapid adaptation to changing data requirements.

</details>

**2. True or false:** Schema flexible databases allow changes in data models without predefined constraints.

<details>
<summary>Answer</summary>

**True**: Schema flexible databases do not require a predefined structure and therefore allow changes to the data model without being constrained by a rigid schema.

</details>

**3. True or false:** In a schema flexible database, maintaining data validation and integrity is not necessary.

<details>
<summary>Answer</summary>

**False**: Even though schema flexible databases handle changes well, it is still important to maintain data validation and integrity to ensure data reliability and consistency.

</details>

**4. True or false:** JSON documents in schema flexible databases can only store specific, predefined fields.

<details>
<summary>Answer</summary>

**False**: JSON documents in schema flexible databases can easily accommodate additional fields without predefined structure, allowing dynamic changes and additions.

</details>

---

[← Course overview](../../../README.md)
