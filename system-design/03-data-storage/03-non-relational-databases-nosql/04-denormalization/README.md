# Denormalization

A **denormalization** process involves duplicating data in a database to improve read performance and reduce complex queries. It trades off increased storage space and potential data inconsistency for faster access times.

```plaintext
ProductID: 101
ProductName: "Widget"
CategoryName: "Gadgets"
```

Here, `CategoryName` is duplicated with each product to avoid complex joins during queries.

> [!warning]
> Denormalization can lead to data inconsistency if updates are not carefully managed across duplicates.

## True or False

**1. True or false:** Denormalization always improves the performance of write operations in a database.

<details>
<summary>Answer</summary>

**False**: Denormalization primarily improves read performance by reducing the need for complex joins, but it can make write operations more complicated and slower due to the need to update duplicate data in multiple places.

</details>

**2. True or false:** One of the risks of denormalization is potential data inconsistency.

<details>
<summary>Answer</summary>

**True**: Denormalization involves duplicating data across different tables. If updates to data are not carefully managed, this can lead to inconsistencies, where the data is not the same in all instances.

</details>

**3. True or false:** The primary trade-off of denormalization is between storage space and query complexity.

<details>
<summary>Answer</summary>

**True**: Denormalization can reduce query complexity by avoiding joins, but it often requires more storage space due to data duplication.

</details>

**4. True or false:** In denormalization, the same level of data integrity is maintained as in normalized databases.

<details>
<summary>Answer</summary>

**False**: Denormalization sacrifices some level of data integrity for performance benefits, as duplicated data can become inconsistent if not managed correctly.

</details>

---

[← Course overview](../../../README.md)
