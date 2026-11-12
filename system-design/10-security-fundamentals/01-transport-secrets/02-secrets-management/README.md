# Secrets Management

A **secret** is sensitive data, like passwords or API keys, that must be protected from unauthorized access. **Secrets management** involves securely storing, accessing, and distributing these secrets to ensure system security.

```plaintext
[Service] ---> [Secret Manager] ---> [Secret]
```

Tools like secret managers automate this process, reducing the risk of exposure.

> [!tip]
> Regularly rotate secrets to minimize the impact of any potential compromise.

## Exercise: Build the System

Build a secrets management flow where the Service retrieves sensitive values through a Secret Manager (not directly from the Secret). Ensure secret access is auditable by connecting the Secret Manager to Audit Logs, and include a rotation path so secrets can be regularly rotated.

Available components: Service / App, Secret Manager, Secret (API Key / Password), Identity Provider (AuthN), Secret Rotation Job, Audit Logs

<details>
<summary>Solution</summary>

Connections:

- Service / App → Secret Manager
- Secret Manager → Secret (API Key / Password)
- Secret Manager → Audit Logs
- Secret Rotation Job → Secret Manager
- Secret Rotation Job → Secret (API Key / Password)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
