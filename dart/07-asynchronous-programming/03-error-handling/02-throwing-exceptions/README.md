# Throwing Exceptions

In the previous example, we caught the exception and printed out a custom error message. However, there are times when you want to throw your own exceptions.

One way to do this is to use the `throw` keyword.

```dart
void main() {
  try {
    print(sqrt(-1));
  } catch (e) {
    print('You cannot enter negative numbers!');
  }
}

double sqrt(int x) {
  if (x < 0) {
    throw Exception('You cannot enter negative numbers!');
  }
  return x / 2;
}
```

In that example, we throw a generic Exception. But you can also create your own custom exception by creating a new class that implements Exception and overriding the `toString` method.

```dart
class NegativeSqrtException implements Exception {
  @override
  String toString() {
    return 'You cannot enter negative numbers!';
  }
}

void main() {
  try {
    print(sqrt(-1));
  } catch (e) {
    print(e);
  }
}

double sqrt(int x) {
  if (x < 0) {
    throw NegativeSqrtException();
  }
  return x / 2;
}
```

## Assignment

You are implementing a secure banking withdrawal system. In the `withdraw` method of the `BankAccount` class, add validation to check if the withdrawal amount is positive. If the amount is zero or negative, throw an exception with the message "Withdrawal amount must be positive." Only subtract the amount from the balance if it is valid.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/secure_bank_withdrawal.dart`. Tests: `test/secure_bank_withdrawal_test.dart`.

---

[← Course overview](../../../README.md)
