# SQL Use Cases

SQL databases are ideal for use cases needing structured data and complex queries. They shine in scenarios like online transaction processing (OLTP), where data integrity and ACID compliance are crucial.

```sql
SELECT * FROM orders WHERE customer_id = 123;
```

This query retrieves all orders for a specific customer, showcasing SQL's ability to handle complex queries efficiently.

> [!note]
> Use SQL when your application needs strong consistency, complex joins, and reliable transaction support.

## True or False

**1. True or false:** SQL databases are best suited for applications that require flexible and unstructured data storage.

<details>
<summary>Answer</summary>

**False**: SQL databases are designed for structured data and scenarios requiring complex queries, data integrity, and ACID compliance, not for flexible or unstructured data.

</details>

**2. True or false:** The SQL query `SELECT * FROM orders WHERE customer_id = 123;` is an example of SQL's ability to perform complex data retrieval operations.

<details>
<summary>Answer</summary>

**True**: This query demonstrates SQL's capability to filter and retrieve specific data efficiently based on given criteria, which is a part of SQL's strength in handling complex queries.

</details>

**3. True or false:** SQL databases excel in online transaction processing (OLTP) due to their lack of ACID compliance.

<details>
<summary>Answer</summary>

**False**: SQL databases excel in OLTP specifically because of their ACID compliance, which ensures reliable transactions and data integrity.

</details>

**4. True or false:** For applications requiring strong consistency and reliable transaction support, SQL databases are a suitable choice.

<details>
<summary>Answer</summary>

**True**: SQL databases provide strong consistency and support reliable transactions due to their adherence to ACID properties, making them ideal for applications needing these features.

</details>

---

[← Course overview](../../../README.md)
