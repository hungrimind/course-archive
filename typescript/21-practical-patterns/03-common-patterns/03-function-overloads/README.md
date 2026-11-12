# Function Overloads

**Function overloads** let you define multiple call signatures for a single function. This is useful when the return type depends on the input type.

```typescript
function double(x: string): string;
function double(x: number): number;
function double(x: string | number) {
  if (typeof x === "string") return x + x;
  return x * 2;
}

double("hi"); // "hihi" - TypeScript knows it's a string
double(5);    // 10 - TypeScript knows it's a number
```

The first two lines are the **overload signatures**, which describe what callers see. The third is the **implementation signature**, which handles all cases but is not directly callable. TypeScript picks the matching overload based on the argument you pass in.


## Assignment

Implement the overloaded `combine` function. When both arguments are strings, concatenate them with a space. When both arguments are numbers, return their sum. When the first argument is a string and the second is a number, return a string in the format `"name: value"` (e.g., `combine("age", 25)` returns `"age: 25"`).

## Challenge

Implement the overloaded `combine` function. When both arguments are strings, concatenate them with a space. When both arguments are numbers, return their sum. When the first argument is a string and the second is a number, return a string in the format `"name: value"` (e.g., `combine("age", 25)` returns `"age: 25"`).

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
