# NoSQL vs SQL

When choosing a database, you'll often hear about **SQL (relational databases)** and **NoSQL (non-relational databases)**. Here's a simple way to understand them.

### SQL: Like a Spreadsheet

Imagine you have a well-organized Excel spreadsheet with separate sheets for different types of data. In SQL databases, your data is stored in tables with a fixed structure (or schema) that defines exactly what each row (record) should look like. For example:

```txt
-- Users table
id | name  | email
1  | John  | john@email.com
2  | Sarah | sarah@email.com

-- Posts table
id | user_id | content
1  | 1       | Hello world!
2  | 1       | Another post
```

- **Fixed Structure:** Every piece of data must follow a set format.
- **Strong Relationships:** Data in separate tables can be linked (e.g., posts to users) using keys.
- **Ideal For:** Applications where data consistency and complex queries are essential.

SQL database also has its language to interact with the database. The language is called SQL. Technically the type of database is called a SQL-based database (but people excluded `-based` from the name often).

When you interact with a SQL-based database, you use the SQL language to retrieve, insert, update, and delete data.

This course isn't about SQL, but here's a few examples of the SQL language:

```sql
SELECT * FROM users;
INSERT INTO users (name, email) VALUES ('John', 'john@email.com');
UPDATE users SET email = 'john@email.com' WHERE id = 1;
DELETE FROM users WHERE id = 1;
```

### NoSQL: Like Folders on Your Computer

Now, think about how you might organize files on your computer. Instead of using one large spreadsheet, you have folders that can contain different kinds of files and even sub-folders. NoSQL databases work similarly by allowing more flexibility in how data is stored and organized. Here's an example using a document-based NoSQL approach:

```txt
-- Users collection
{
  "id": 1,
  "name": "John",
  "email": "john@email.com",
  "posts": [
    {
      "id": 1,
      "content": "Hello world!"
    },
    {
      "id": 2,
      "content": "Another post"
    }
  ]
},
{
  "id": 2,
  "name": "Sarah",
  "email": "sarah@email.com"
}
```

- **Flexible Structure:** Data can be stored in collections and can be nested to have sub-folders.
- **No Fixed Schema:** Data doesn't need to follow a specific format.
- **Ideal For:** Applications where data is doesn't have too many relationships between, and the data makes sense to store in a folder structure.

## Quiz

**1. Which of the following best characterizes SQL databases?**

- A) They are schema-less and store data in flexible, nested documents.
- B) They are designed primarily for rapid scaling and dynamic data types.
- C) They store data as loosely organized files, similar to folders on your computer.
- D) They use a fixed schema with tables and strong relationships.

<details>
<summary>Answer</summary>

- D) They use a fixed schema with tables and strong relationships.

</details>

**2. Which characteristic best describes NoSQL databases?**

- A) Offers flexible data structures and schema-less storage
- B) Requires strict table schemas and predefined relationships
- C) Enforces rigid data normalization across tables
- D) Maintains fixed column definitions for all records

<details>
<summary>Answer</summary>

- A) Offers flexible data structures and schema-less storage

</details>

---

[← Course overview](../../../README.md)
