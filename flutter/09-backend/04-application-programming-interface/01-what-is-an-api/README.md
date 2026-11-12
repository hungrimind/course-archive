# What is an API?

When building mobile apps, you often need to communicate with external services. Whether it's authenticating users, storing data in a database, or getting the current weather - your app needs a way to talk to these services.

## What is an API?

An API (Application Programming Interface) is like a waiter at a restaurant:

- Takes your order (request)
- Delivers it to the kitchen (backend service)
- Brings back your food (response)
- Follows specific rules for service (protocol)

## How APIs Work in Flutter

We learned about authentication and databases in previous lessons. Those are both part of the backend system, while an API is the connection between your Flutter app and the backend.

## Types of APIs

There are several types of APIs you might use in your Flutter app:

### REST APIs

- Most common type
- Uses standard HTTP methods (GET, POST, PUT, DELETE)
- Typically returns JSON data
- Stateless (each request is independent)

### GraphQL APIs

- More flexible data querying
- Single endpoint for all operations
- Client specifies exactly what data it needs
- Popular for complex applications

### WebSocket APIs

- Real-time, two-way communication
- Maintains an open connection
- Great for chat apps or live updates
- More resource-intensive

## Common Use Cases

APIs are everywhere in modern apps. Here are some common examples:

- User authentication (login/signup)
- Database operations (save/retrieve data)
- Payment processing
- Social media integration
- Weather data
- Maps and location services

Remember: APIs are the bridges that connect your Flutter app to your desired backend. Understanding how to work with them is crucial for building applications.

## Quiz

**1. What is the main purpose of an API in mobile development?**

- A) To make the app look better
- B) To provide a standardized way for different systems to communicate
- C) To store data locally
- D) To create user interfaces

<details>
<summary>Answer</summary>

- B) To provide a standardized way for different systems to communicate

</details>

**2. Which of these is NOT typically handled through an API?**

- A) User authentication
- B) Database operations
- C) Local UI state management
- D) Weather data retrieval

<details>
<summary>Answer</summary>

- C) Local UI state management

</details>

---

[← Course overview](../../../README.md)
