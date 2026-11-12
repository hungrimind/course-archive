# Navigate to Home

Now we need to navigate to the home page when the user logs in.

## Assignment

Upon successful login, navigate to the home page.

### Requirements

1. If the form is valid, navigate to the home page.

> **Hint**
>
> You can use `Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const Home()));` to replace the current page instead of pushing a new page on top of the stack. This makes it so the user can't navigate back to the login page.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/pages/signin.dart`. Tests: `test/pages/signin_test.dart`, `test/main_test.dart`.

---

[← Course overview](../../../README.md)
