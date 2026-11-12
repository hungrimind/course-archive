# Validation Methods

Now we need to add validation methods to our form.

## Assignment

Check that the form has a valid username and password. Both fields should not be empty, and the password should be at least 6 characters long.

### Requirements

1. If a username is empty, show the error message "Please enter a username".
2. If a password is empty, show the error message "Please enter a password".
3. If a password is less than 6 characters long, show the error message "Password must be at least 6 characters".
4. When you click the "Log in" button, the form should be validated.

> **Hint**
>
> Use a `FormKey` to validate the form.

### Extra Credit

Save the username and password to a variable, when the form is valid. When building an app with authentication, you will need to use these variables to authenticate the user. (You don't need to do this to mark the lesson as complete, but it's a good practice to do it.)

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/pages/signin.dart`. Tests: `test/pages/signin_test.dart`, `test/main_test.dart`.

---

[← Course overview](../../../README.md)
