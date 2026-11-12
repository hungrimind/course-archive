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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
