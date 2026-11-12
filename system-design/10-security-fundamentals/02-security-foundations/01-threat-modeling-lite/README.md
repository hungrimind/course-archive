# Threat Modeling Lite

A **threat model** is a structured approach to identifying, prioritizing, and addressing potential security risks in a system. It helps you understand what you're protecting, from whom, and how.

```plaintext
[Identify Assets] -> [Identify Threats] -> [Mitigate Risks]
```

Begin by identifying critical assets and potential threats, then design defenses to mitigate the risks. This process enhances your system's security posture by proactively addressing vulnerabilities.

> [!warning]
> Ignoring threat modeling can leave critical vulnerabilities unaddressed, increasing the risk of a security breach.

## Exercise: Build the System

Build a simple threat modeling workflow: start from identifying assets, include a step to identify threats, ensure threats feed into prioritizing risks, and ensure the process leads to mitigating risks. Your mitigation should result in at least one concrete security controls output, and the flow should not skip directly from assets to mitigations.

Available components: Identify Assets, Identify Threats, Prioritize Risks, Mitigate Risks, Security Controls, Monitoring & Logging

<details>
<summary>Solution</summary>

Connections:

- Identify Assets → Identify Threats
- Identify Threats → Prioritize Risks
- Prioritize Risks → Mitigate Risks
- Mitigate Risks → Security Controls
- Mitigate Risks → Monitoring & Logging

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
