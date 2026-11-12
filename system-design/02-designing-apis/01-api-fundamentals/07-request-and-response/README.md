# Request and Response

A **request and response** is the fundamental communication pattern between a client and server in a system. The client sends a **request** to perform an action or retrieve data, and the server sends back a **response** with the result.

```text
# Example of a request and response
GET /api/data

# Server response
{
  "status": "success",
  "data": [1, 2, 3]
}
```

The request specifies what the client wants, and the response provides the requested data or an error message. This pattern is crucial for APIs and web services.

## Assignment

Your task is to implement the `handleRequest` function to handle incoming API requests.

1. Define the `HttpMethod` type and the `Request`, `ApiSuccessResponse`, `ApiErrorResponse`, and `ApiResponse` interfaces.
2. Ensure that the `handleRequest` function returns a success response when the request method is `GET` and the path is `/api/data`, including the data `[1, 2, 3]`.
3. Return an error response if the request does not match the criteria.

The output should match the console logs showing the request method, path, and the corresponding response in JSON format.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
