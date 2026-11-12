# Hashing vs Encryption

A **hash** is a one-way function that transforms data into a fixed-size string, mainly for data integrity checks. **Encryption** converts data into a different format to keep it secret, allowing it to be reverted back with a key.

```plaintext
[Hashing] -> Data integrity
[Encryption] -> Data confidentiality
```

> [!warning]
> Don't use hashing for confidentiality; it can't be reversed to reveal original data.

## Matching

Sort each item into the right category: **Hashing**, **Encryption**

- AES
- Data confidentiality
- Data integrity
- One-way function
- Revert with key
- SHA-256

<details>
<summary>Answer</summary>

**Hashing**
- One-way function
- Data integrity
- SHA-256

**Encryption**
- Revert with key
- Data confidentiality
- AES

</details>

---

[← Course overview](../../../README.md)
