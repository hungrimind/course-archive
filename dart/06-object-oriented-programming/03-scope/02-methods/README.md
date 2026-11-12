# Methods

The same way that you can create custom properties in a class, you can also create custom functions. But in the context of a class, these functions are called **methods**.

The same way we created properties in the last lesson, we can create a method inside a class, and this method can only be accessed by instances of that class.

```dart
class BankAccount {
  double balance = 0;

  void deposit(double amount) {
    balance += amount;
  }
}
```

We now have a `BankAccount` class with a `deposit` method.

To call this method, we must first create an instance of the `BankAccount` class, and then we can use the dot notation to call the `deposit` method.

```dart
void main() {
  BankAccount account = BankAccount();
  account.deposit(100);
  print(account.balance);
}
```

This will print out `100` because we deposited $100 into the bank account.

The `deposit` method adds the amount we pass in as an argument to the `balance` property. This will only work because the `balance` property is within the same scope as the `deposit` method. So, if we created a `deposit` function outside the class, it would not be able to access the `balance` property.

When a method is inside of a class, it will always have access to all the properties and methods within that same class.

## Assignment

You are building a simple role-playing game where players can take damage. Inside the `Player` class, create a method named `takeDamage` that accepts an `int` parameter named `damageAmount` and subtracts it from the player's `health` property.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/take_damage.dart`. Tests: `test/take_damage_test.dart`.

---

[← Course overview](../../../README.md)
