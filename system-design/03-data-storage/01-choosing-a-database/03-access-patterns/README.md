# Access Patterns

An **access pattern** describes *how your application reads data*.

Access patterns matter because different databases (and indexes) are optimized for different kinds of reads.

## Common access patterns

### 1) Point lookup
Fetch **one item** by an exact key.

- Example: `GET /users/123`
- Typical query: “find user where `user_id = 123`”

### 2) Range query
Fetch a **range** of items, usually sorted.

- Example: “orders from last 7 days”
- Typical query: “where `created_at` between A and B, ordered by `created_at`”

### 3) Search
Find items by text or flexible matching.

- Example: “search products for ‘wireless headphones’”
- Often needs a search index (or a database feature built for search)

### 4) Analytics / aggregation
Compute totals, averages, and groupings over many rows.

- Example: “daily active users per day”
- Often needs columnar storage or an analytics system

> [!tip]
> Don’t confuse **access patterns** with **workload mix** (read-heavy vs write-heavy). Workload mix is about *how many* reads/writes you do; access patterns are about *what shape* your reads are.

## Matching

Sort each item into the right category: **Read-Heavy**, **Write-Heavy**, **Balanced**

- Emphasize indexing
- Equal reads and writes
- Focus on storage solutions
- Frequent data retrieval
- Frequent data updates
- Optimize write performance
- Prioritize caching
- Versatile database selection

<details>
<summary>Answer</summary>

**Read-Heavy**
- Frequent data retrieval
- Prioritize caching
- Emphasize indexing

**Write-Heavy**
- Frequent data updates
- Focus on storage solutions
- Optimize write performance

**Balanced**
- Equal reads and writes
- Versatile database selection

</details>

---

[← Course overview](../../../README.md)
