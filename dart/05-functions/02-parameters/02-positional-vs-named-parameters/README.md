# Positional vs Named Parameters

There are 2 types of parameters in Dart: positional and named. The ones we have been using thus far have been positional parameters. But you can turn those into *named parameters* by wrapping them in curly braces. 

```dart
void add({num a, num b}) {
  print(a + b);
}
```

When calling the function, you must specify the parameter name with a colon before passing in the value.

```dart
add(a: 1, b: 2);
```

I recommend using named parameters for most cases, since they make your code more readable.

For example, if you have a function with 5 parameters, it is hard to know what each parameter is when you call the function.

```dart
void doSomething(String action, String item, String place, String time, String person) {
  // do something
}

doSomething("run", "dog", "park", "10am", "John"); // positional parameters
```

But if you use named parameters, you can see exactly what each parameter is.

```dart
void doSomething({
  String? action,
  String? item,
  String? place,
  String? time,
  String? person,
}) {
  // do something
}

//named parameters
doSomething(
  action: "run",
  item: "dog",
  place: "park",
  time: "10am",
  person: "John",
);
```

You can also mix both types in one function.

However, there is a strict rule: **positional parameters must come first**, before the curly braces that contain the named parameters.

This approach is best used when a function has one primary parameter that is always required (make this positional), followed by configuration options or details that are clearer when named.

When calling this function, the first argument is passed directly, while the rest use the `name:` syntax:

```dart
void sendEmail(String email, {String? subject, String? cc}) {
  print("Sending to: $email");
  if (subject != null) print("Subject: $subject");
  if (cc != null) print("CC: $cc");
}

// Usage
sendEmail("jane@example.com"); 

sendEmail("boss@example.com", subject: "Urgent", cc: "hr@example.com");
```

## Assignment

You are working on a shipping application and need a function to format mailing addresses. Define the `formatAddress` function that accepts one positional parameter `street` (String) and two named parameters `city` and `postalCode` (both String). Remember that positional parameters must come before named parameters in the function signature. The function should print the address in the format: "street, city, postalCode".

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/format_address.dart`. Tests: `test/format_address_test.dart`.

---

[← Course overview](../../../README.md)
