# Stubs and Fakes

Using the same `mocktail` package, you can stub the functions within your test. Generating the mocks creates the alternate implementation, and stubbing defines how the functions within that alternate implementation should act.

There are four functions to use when stubbing:

- `when`
- `thenReturn`
- `thenAnswer`
- `thenThrow`

A stub is put together like:

```dart
when(MockDatabase().login()).thenReturn(true);
```

Within the `when`, you define what function you want to stub, and in the `thenReturn`, you define what you want that function to return.

Stubs can almost be read as a sentence: “When you call MockDatabase().login(), then return true”.

`thenReturn` is synchronous, so it just returns an object. `thenAnswer` is a callback and can be used for asynchronous returns, and `thenThrow` throws an exception.

Stubs are relatively clear, so what are fakes for?

## Fakes

Fakes are a test double used to simulate the behavior of real objects. Unlike mocks or stubs, which provide mocked responses, fakes often have a lightweight, simplified implementation that mimics the actual object’s functionality without the overhead.

Fakes are particularly useful when working with components that interact with external systems, such as databases, APIs, or file systems. They allow you to test logic without relying on actual external resources, leading to faster and more reliable tests.

### **When to Use Fakes**

- When the real dependency is complex, slow, or use external sources (e.g., querying a database).
- When the dependency is unavailable during testing (e.g., an external API).
- When controlling specific test scenarios (e.g., simulating different data states).

To create a fake, you create a class that extends `Fake` and implements the class you want to fake. By extending the `Fake`, you no longer need to override all the functions and only the ones you need for the test.

Here’s an example of a fake class for our divide function.

```dart
class FakeDemo extends Fake implements Demo {
  @override
  double divide(int a, int b) {
    return b / a;
  }
}
```

If your app is set up properly with MVVM, you can pass the `FakeDemo` into ViewModel or Service and test it.

## Quiz

**1. Which function would you use for asynchronous stub responses?**

- A) thenReturn
- B) thenThrow
- C) thenAnswer
- D) when

<details>
<summary>Answer</summary>

- C) thenAnswer

</details>

**2. What is the main difference between a Fake and a Mock?**

- A) Fakes are only for testing
- B) Fakes provide a lightweight implementation of functionality
- C) Fakes must implement all methods
- D) Fakes can only be used with databases

<details>
<summary>Answer</summary>

- B) Fakes provide a lightweight implementation of functionality

</details>

**3. When implementing a Fake class, which class must you extend?**

- A) Mock
- B) Test
- C) Stub
- D) Fake

<details>
<summary>Answer</summary>

- D) Fake

</details>

**4. What's the correct way to create a stub?**

- A) stub(() => mockObject.method())
- B) when(() => mockObject.method())
- C) fake(() => mockObject.method())
- D) mock(() => mockObject.method())

<details>
<summary>Answer</summary>

- B) when(() => mockObject.method())

</details>

---

[← Course overview](../../../README.md)
