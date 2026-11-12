# Nested Conditions

You can put an **`if` inside another `if`** to check combinations of conditions.

```typescript
const isLoggedIn: boolean = true;
const isAdmin: boolean = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin!");
  } else {
    console.log("Welcome, user!");
  }
}
```

> If you find yourself nesting more than two levels deep, it's a sign to restructure. Logical operators like `&&` (coming up next) often flatten nested ifs into a single clean condition.


## Assignment

Complete the `canRide` function that checks if someone can go on a theme park ride. If they don't have a ticket, return `"No ticket!"`. If they have a ticket, check their height: return `"Enjoy the ride!"` if they are at least 120 cm tall, or `"Too short!"` otherwise.

## Challenge

Complete the `canRide` function that checks if someone can go on a theme park ride. If they don't have a ticket, return `"No ticket!"`. If they have a ticket, check their height: return `"Enjoy the ride!"` if they are at least 120 cm tall, or `"Too short!"` otherwise.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
