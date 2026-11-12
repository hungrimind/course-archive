# Authentication

The next step is to allow the user to sign in and out of the app. But this leads to the question: What does signing in mean?

## Sessions

When signing in, you can't just check the user's credentials once and be done with it. You need to check them every time the user opens the app. This is where sessions come in.

A session is a way to make sure the user is still authenticated. This also ensures the user's authentication state is maintained across the app and life cycles.

The session also stores the current user's authentication details. When a session is created, a token will be generated. If we go back to the analogy of the security guard at the club, the token is the wristband. This wristband will be checked whenever an action requires authentication, like accessing the user's database.

## Assignment

We already defined the `createSession` and the `deleteSession` functions in the `UserService` class. The code listens to if the session exists and will display the home page if it does. We have already implemented creating the session when you create an account. Now we need to start and end the sessions where appropriate.

### Requirements

1. Start a session when the user signs in.
2. End a session when the user signs out.

> note: we already start a session when you create an account

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/auth/login_view_model.dart`. Tests: `test/create_account_test.dart`, `test/login_test.dart`, `test/home_test.dart`.

---

[← Course overview](../../../README.md)
