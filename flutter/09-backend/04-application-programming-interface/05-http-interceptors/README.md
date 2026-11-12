# HTTP Interceptors

Interceptors are a requirement in any growing app or even smaller apps.

An interceptor allows you to "intercept" logic before an HTTP request is made but at scale.

## What do you mean by "at scale"?

Imagine the following scenario.

You have 20 different scenarios where you do HTTP requests. For those 20 different scenarios, you always want to do the following.

- Log details about the request being made
- renew some kind of bearer token (JWT with refresh token maybe?)
- Including specific headers

In reality, there could be a range of actions you want to do before making your HTTP request.

This is where interceptors come in.

## Interceptors

There are a couple of options on how to use this, and all of them are valid.

If you are using the normal `http` package we recommend just using the `http_interceptor` package which is a thin wrapper to allow interceptors using the official `http` package. There is nothing wrong implementing your own interceptor though and including it as a util in your project.

In case you want to use an all-in-one solution there is also the `dio` package. This package allows you to make http requests, but also includes a lot of extra "features" such as interceptors.

## Quiz

**1. What is the main purpose of HTTP interceptors?**

- A) To block all HTTP requests
- B) To execute common logic before/after HTTP requests
- C) To increase network speed
- D) To compress HTTP responses

<details>
<summary>Answer</summary>

- B) To execute common logic before/after HTTP requests

</details>

**2. Which of these is a common use case for interceptors?**

- A) Adding authentication headers to requests
- B) Storing HTTP responses
- C) Creating new HTTP endpoints
- D) Compressing request data

<details>
<summary>Answer</summary>

- A) Adding authentication headers to requests

</details>

**3. What's the advantage of using interceptors over manual request modification?**

- A) They make requests faster
- B) They reduce code duplication by centralizing common request logic
- C) They improve security
- D) They compress data automatically

<details>
<summary>Answer</summary>

- B) They reduce code duplication by centralizing common request logic

</details>

---

[← Course overview](../../../README.md)
