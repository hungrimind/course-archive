# Null-Aware Access Operator

The null-aware access operator (`?.`) is used to access the properties or methods of an object that might be null.

```dart
int? number;
print(number?.isNegative);
```

This code will print `null` because `number` is null. The `isNegative` property is only available when it is not `null`. If we tried to access this property using the dot operator, we would not be able to compile it due to an error.

But when we use the null-aware access operator, it will return `null` if the object is null. So, it is another way to prevent our code from crashing.

## Assignment

Update the program to safely access a property on a possibly null value using the null-aware access operator (`?.`).

If the value is `null`, the access should return `null` instead of causing an error.

If the value is not `null`, it should correctly return the property value.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/main.dart`. Tests: `test/main_test.dart`.

---

[← Course overview](../../../README.md)
