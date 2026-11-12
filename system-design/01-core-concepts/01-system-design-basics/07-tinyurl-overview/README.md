# TinyURL Overview

A **TinyURL** (URL shortener) turns a long URL into a short code, then later **redirects** anyone who visits the short link back to the original URL.

## The two core actions
- **Shorten**: user submits a long URL → system returns a short URL (like `tinyurl.com/abc123`).
- **Redirect**: user visits the short URL → system looks up the long URL → returns an HTTP redirect (commonly `301` or `302`).

## Key components (high level)
- **API / Web Server**: receives requests to shorten and redirect.
- **ID Generator** (hashing or random code): creates the short code.
- **Database**: stores the mapping `short_code → long_url`.

```text
Long URL:  https://www.example.com/very/long/url
Short URL: https://tinyurl.com/abc123
```

## One common pitfall: collisions
If two different long URLs produce the same short code (a **collision**), you can:
- **retry** with a different code, or
- generate codes in a way that guarantees uniqueness (e.g., a counter + encoding).

> [!tip]
> TinyURL systems are often **read-heavy**: many more redirects than new short-link creations. This will matter later when we talk about caching.

## Exercise: Build the System

Build a TinyURL-style architecture that supports both shortening and redirecting. Your diagram must include an API/Web Server, an ID generator to create short codes, and a database to store short_code → long_url mappings. Ensure the client reaches the database only through the server (no direct client→DB connection), and make sure there is an end-to-end path from the client to the database for storing and/or looking up mappings.

Available components: Client (Browser/App), API / Web Server, Short Code / ID Generator, URL Mapping Database, Cache (Redirect Lookups), Collision Check + Retry

<details>
<summary>Solution</summary>

Connections:

- Client (Browser/App) → API / Web Server
- API / Web Server → Short Code / ID Generator
- Short Code / ID Generator → Collision Check + Retry
- Collision Check + Retry → URL Mapping Database
- API / Web Server → Cache (Redirect Lookups)
- Cache (Redirect Lookups) → URL Mapping Database

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
