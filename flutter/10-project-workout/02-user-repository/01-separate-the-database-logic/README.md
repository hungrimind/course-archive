# Separate the Database Logic

If there is a key insight we want you to take away from this entire course, it is this:

Build your code to be easily refactorable and maintainable. You don't need to use the full-blown MVVM architecture to build a simple app, but you can add more pieces when that app grows.

This app isn't too massive, but we are ready to add more features, so another abstraction layer will help us. Before, we had everything in the `user_service.dart` file, but now we will move some of that functionality to a new file called `user_repository.dart`.

### User Repository

Repositories are a design pattern used to abstract the data layer from the business logic layer of an application.

Currently, we have the `UserService` interface directly with the database. Since the repository should be the only thing that knows about the database, we must move that logic to the repository.

### User Service

Then, the `UserService` becomes what it was always meant to be: a service that provides the user access to the rest of the application (aka state management).

So let's separate it.

## Assignment

The assignment is to complete the refactoring. The core problem is we need to move the database logic to the repository and maintain the user service as the source of truth for the user information.

The logic to interact with the database is moved; what's left is to update the `UserService` to use the repository.

### Requirements

1. Update the `signIn` method to use the `createSession` method on the repository.
2. Update the `signOut` method to use the `deleteSession` method on the repository.
3. Update the `signUp` method to use the `createUser` method on the repository.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/auth/user_service.dart`. Tests: `test/create_account_test.dart`, `test/login_test.dart`, `test/workout_test.dart`, `test/user_service_test.dart`.

---

[← Course overview](../../../README.md)
