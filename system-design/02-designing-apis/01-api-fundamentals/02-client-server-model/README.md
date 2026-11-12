# Client-Server Model

A **client-server model** is a system design where the client requests services, and the server provides them. Clients are users or applications, while servers host resources or perform actions.

```plaintext
Client → Request → Server
Server → Response → Client
```

This architecture allows centralized management and resource sharing, enabling efficient communication between different parts of a system.

## Exercise: Build the System

Build a basic client-server architecture where a client communicates with a server over a network. Include a network layer, connect client → network → server to represent request/response flow, and avoid directly connecting the client to the server.

Available components: Client App, Network / Internet, Server (API), Auth / Access Control, Database

<details>
<summary>Solution</summary>

Connections:

- Client App → Network / Internet
- Network / Internet → Server (API)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
