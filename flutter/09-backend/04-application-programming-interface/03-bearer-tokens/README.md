# Bearer Tokens

Bearer tokens are a type of access token used in HTTP authentication. They are called "bearer" tokens because whoever has the token can use it - like how anyone who bears (holds) a ticket can enter a concert.

## How They Work

1. When you authenticate (login), the server gives you a token
2. You include this token in the header of future requests
3. The server validates the token before processing the request

In the last lesson we didn't need to use a bearer token, because we were calling a public API.

```dart
// Example HTTP request with bearer token
final response = await http.get(
  Uri.parse('https://api.example.com/data'),
  headers: {
    'Authorization': 'Bearer ${yourTokenHere}',
  },
);
```

## Best Practices

1. **Always use HTTPS** - Bearer tokens are sent in plain text
2. **Store securely** - Never store in code or version control
3. **Handle expiration** - Tokens usually have a limited lifetime
4. **Remove on logout** - Clear tokens when the user signs out

## Common Use Cases

- API Authentication
- OAuth 2.0
- JWT (JSON Web Tokens)

## Quiz

**1. What is the correct way to include a bearer token in an HTTP request?**

- A) Bearer: <token>
- B) Token: Bearer <token>
- C) Authorization: Bearer <token>
- D) Authentication: <token>

<details>
<summary>Answer</summary>

- C) Authorization: Bearer <token>

</details>

---

[← Course overview](../../../README.md)
