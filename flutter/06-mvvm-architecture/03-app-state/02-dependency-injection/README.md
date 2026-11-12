# Dependency Injection

> Dependencies should always be injected through the constructor.

In practice, this is very simple, but we need a way to have a single instance and inject that instance instead of creating a new one.

```dart del="WeNeedTheServiceInstanceHere"
class MyService {}

class MyViewModel {
  MyViewModel({required MyService myService}) : _myService = myService;

  final MyService _myService
}

final myViewModel = MyViewModel(myService: WeNeedTheServiceInstanceHere);
```

## Pass Dependencies

There are several ways to instantiate a new instance and use that single instance throughout the app.

One approach is `InheritedWidget`. Using an `InheritedWidget`, you first create an instance of your service and insert it into the widget tree. Any widget lower in the widget tree can access it.

The other approach, and our preferred approach, is using a "service locator".

## Service Locator

The ViewModel is attached to a single view; its main job is to contain business logic. To do this business logic, it needs to get access to the instance of the service or repository. While `InheritedWidget` works, it's not the only way to do it.

You can use a service locator, which is just a fancy `Map` used to create and reference instances of classes. You could make a service locator yourself, but we will use the package `GetIt`, a service locator package.

```dart
final locator = GetIt.instance;

// call this when you want to create your instances
void setupLocator() {
  locator.registerSingleton<MyService>(MyService());
  // ... other services, integrations etc
}


final myViewModel = MyViewModel(myService: locator<MyService>());
```

## Try different approaches

Again, using `GetIt` is our recommendation because it's very straightforward; you can use other approaches. The main goal is to not create multiple instances of your services. These services handle logic that should be the same app-wide (imagine having a `PaymentService` that handles the payment state. Now, imagine handling multiple of those).

Some other approaches:

- good old `InheritedWidget`
- Provider
- Riverpod
- globals (yes, this works to some degree)

## Core Architecture

Those are the core concepts of everything related to the MVVM architecture that we use to build apps used by millions of people. We've mentioned this a few times, but feel free to adjust this for your own project needs. Next, we will cover a few more concepts related to this architecture, but they aren't at the core.

## Quiz

**1. How should dependencies be injected according to the lesson?**

- A) Through the constructor
- B) Through global variables
- C) Through method parameters
- D) Through static fields

<details>
<summary>Answer</summary>

- A) Through the constructor

</details>

**2. What is GetIt in Flutter?**

- A) A state management solution
- B) A widget builder
- C) A routing package
- D) A service locator package

<details>
<summary>Answer</summary>

- D) A service locator package

</details>

**3. What is the main goal of dependency injection in this context?**

- A) To make code more complex
- B) To increase app performance
- C) To avoid creating multiple instances of services
- D) To reduce code size

<details>
<summary>Answer</summary>

- C) To avoid creating multiple instances of services

</details>

---

[← Course overview](../../../README.md)
