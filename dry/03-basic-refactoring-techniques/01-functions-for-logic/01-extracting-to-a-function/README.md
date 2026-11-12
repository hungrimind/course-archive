# Extracting to a Function

Extracting code into a **function** helps eliminate repetition and promote the D.R.Y. principle. Functions encapsulate logic, allowing you to reuse code effortlessly.

Here's how to extract code into a function in TypeScript:

```typescript
function calculateArea(width: number, height: number): number {
  return width * height;
}

const area1 = calculateArea(5, 10);
const area2 = calculateArea(7, 3);
```

In this example, `calculateArea` is a function that calculates the area of a rectangle. By calling this function with different arguments, you avoid repeating the multiplication logic.

> [!tip]
> Name your functions clearly to describe their purpose, making your code more readable.

## Assignment

It's time to clean up your code by extracting the area calculation into a function!

1. Create a new function named `calculateArea` that takes two parameters: `width` and `height`.
2. Inside the function, return the product of `width` and `height`.
3. Replace the area calculations for `area1` and `area2` with calls to the `calculateArea` function.
4. Ensure the console logs display the correct area for both rectangles.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
