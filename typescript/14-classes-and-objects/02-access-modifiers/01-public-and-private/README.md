# Public and Private

By default, all class members are **public**, accessible from anywhere. Mark a member **`private`** to lock it down so only code inside the class can use it.

```typescript
class BankAccount {
  private balance: number;

  constructor(initial: number) {
    this.balance = initial;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acct = new BankAccount(100);
acct.deposit(50);
// acct.balance; // Error: 'balance' is private
```

Private members let you control how data is accessed and changed, instead of letting any code reach in and modify it directly.

## Matching

Sort each item into the right category: **Public Members**, **Private Members**

- Accessible from anywhere
- Can be read by external code
- Default access level
- Hides implementation details
- Must use a method to expose the value
- Only accessible inside the class

<details>
<summary>Answer</summary>

**Public Members**
- Accessible from anywhere
- Default access level
- Can be read by external code

**Private Members**
- Only accessible inside the class
- Must use a method to expose the value
- Hides implementation details

</details>

---

[← Course overview](../../../README.md)
