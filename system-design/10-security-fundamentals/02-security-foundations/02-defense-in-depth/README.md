# Defense in Depth

A **defense in depth** strategy involves layering multiple security measures to protect a system against threats. Each layer serves as a barrier, ensuring that if one layer fails, others still stand to protect the system.

```plaintext
[Firewall] -> [Intrusion Detection] -> [Encryption] -> [Access Controls]
```

This approach helps handle different attack vectors, making it harder for attackers to exploit vulnerabilities.

> [!tip]
> Think of defense in depth like a castle with multiple walls and moats; breaching one doesn't compromise the entire fortress.

## Exercise: Build the System

Build a defense-in-depth request path from an Internet Client to a Sensitive Data Store. Your design must include layered security controls (Firewall/WAF, IDS/IPS, Encryption, and Access Controls) and ensure traffic reaches the data store through these layers rather than directly to the app.

Available components: Internet Client, Firewall / WAF, IDS/IPS, Encryption (TLS + KMS), Access Controls (IAM/RBAC), Protected App Service, Sensitive Data Store

<details>
<summary>Solution</summary>

Connections:

- Internet Client → Firewall / WAF
- Firewall / WAF → IDS/IPS
- IDS/IPS → Encryption (TLS + KMS)
- Encryption (TLS + KMS) → Access Controls (IAM/RBAC)
- Access Controls (IAM/RBAC) → Protected App Service
- Protected App Service → Sensitive Data Store

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
