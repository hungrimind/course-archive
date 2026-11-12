# Forms

## Form Widget

The `TextField` widget is good for single input fields, but what if we want to make a form for a user to log in? We could nest multiple `TextField` widgets, but we can simplify this using a `Form` widget.

You can have multiple `FormField` widgets inside the `Form` widget. The most common `FormField` widget is `TextFormField`. This is like the `TextField` widget but with added functionality like validation and integration with the `Form` widget.

```dart
Form(
  child: Column(
    children: [
      TextFormField(
        decoration: const InputDecoration(labelText: 'Username'),
      ),
      TextFormField(
        decoration: const InputDecoration(labelText: 'Password'),
        obscureText: true,
      ),
      ElevatedButton(
        onPressed: () {},
        child: Text('Submit'),
      ),
    ],
  ),
)
```

## Form Validation

You can add validation to the `TextFormField` by adding a `validator` field. This is a function with the return type of `String`. Whatever you return in that `String` will be the message that will be displayed for the user. If the info the user entered is valid, `null` must be returned.

In this example, we check if the password is not empty and is at least 10 characters long.

```dart
TextFormField(
  decoration: const InputDecoration(labelText: 'Password'),
  obscureText: true,
  validator: (value) {
    if (value == null || value.isEmpty) {
      return 'Please enter a password';
    }
    if (value.length < 10) {
      return 'Please enter a longer password';
    }
    return null;
  },
)
```

## FormState

We also mentioned that `TextFormField` integrates nicely with the `Form` widget. Because of this, we don't need a `TextEditingController` to get the value and make sure it is valid.

One thing we do need is a `GlobalKey`. This global key is a unique identifier for the form that allows you to access some of the needed functionality of the form which is the `FormState`. We use the `FormState` type because that is the type for the widget the `GlobalKey` is used for.

We can use the `FormState` object to get the current form state and validate it.

In this example, we validate the form whenever a button is pressed, and then we know that the sign-in was successful.

Right after that, we save the username and password into the state variable. At this point, you would likely use some authentication service to make sure that this user has an account and can access the correct information.

```dart
final formKey = GlobalKey<FormState>();
String username = '';
String password = '';

Form(
  key: formKey,
  child: Column(
    children: [
      TextFormField(
        decoration: const InputDecoration(labelText: 'Username'),
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter a username';
          }
          return null;
        },
        onSaved: (value) => username = value ?? '',
      ),
      TextFormField(
        decoration: const InputDecoration(labelText: 'Password'),
        obscureText: true,
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter a password';
          }
          if (value.length < 10) {
            return 'Please enter a longer password';
          }
          return null;
        },
        onSaved: (value) => password = value ?? '',
      ),
      ElevatedButton(
        onPressed: () {
          if (formKey.currentState!.validate()) {
            formKey.currentState!.save();
            // use the values to check authentication
          }
        },
        child: Text('Submit'),
      ),
    ],
  ),
)
```

## Assignment

Add two validations:

- checks if the input is empty. If it is, return "Field cannot be empty".
- checks if the input is less than 10 characters. If it is, return "Field must be at least 10 characters".

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/form.dart`. Tests: `test/form_test.dart`.

---

[← Course overview](../../../README.md)
