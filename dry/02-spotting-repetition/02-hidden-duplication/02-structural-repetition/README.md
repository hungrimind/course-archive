# Structural Repetition

# Structural Repetition

Structural repetition happens when similar code patterns or structures appear across different parts of a program. It's not just about identical lines of code but how the logic is organized.

Look for similar functions or classes that perform related tasks. For example, instead of having separate functions for each shape, you can use a single function with parameters to handle multiple shapes:

```typescript
type ShapeType = 'circle' | 'square';

interface ShapeAreaInput {
  type: ShapeType;
  dimension: number;
}

function calculateArea(input: ShapeAreaInput): number {
  if (input.type === 'circle') {
    return Math.PI * input.dimension * input.dimension;
  } else {
    return input.dimension * input.dimension;
  }
}

function formatAreaLabel(type: ShapeType, area: number): string {
  return `${type} area: ${area.toFixed(2)}`;
}

function logShapeArea(input: ShapeAreaInput): void {
  const area = calculateArea(input);
  console.log(formatAreaLabel(input.type, area));
}

// Example usage:
logShapeArea({ type: 'circle', dimension: 5 });
logShapeArea({ type: 'square', dimension: 4 });
```

> [!tip]
> Spotting structural repetition helps create reusable, efficient components, reducing duplication.


## Assignment

The shapes in your program need to be streamlined for efficiency. 

1. Create a `ShapeType` type with values `'circle'` and `'square'`.
2. Define a `ShapeAreaInput` interface that includes `type` and `dimension`.
3. Consolidate the area calculation into a single `calculateArea` function that accepts `ShapeAreaInput`.
4. Merge the formatting functions into a single `formatAreaLabel` that takes the shape type and area.
5. Refactor the logging functions into one `logShapeArea` that uses the new structure.

Ensure the output remains consistent with the examples provided in the starter code.

## Quiz

**1. What is structural repetition in programming?**

- A) Identical lines of code repeating within a function
- B) Similar code patterns or structures appearing across different parts of a program
- C) Reusing variables within a loop
- D) Copy-pasting code from external sources

<details>
<summary>Answer</summary>

- B) Similar code patterns or structures appearing across different parts of a program

</details>

**2. How does using a single `calculateArea` function help with structural repetition?**

- A) By ensuring consistent logic for different tasks
- B) By eliminating the need for any parameters
- C) By consolidating related functionality into one place, reducing duplication
- D) By allowing only one shape type to be calculated

<details>
<summary>Answer</summary>

- C) By consolidating related functionality into one place, reducing duplication

</details>

**3. What is the purpose of the `formatAreaLabel` function in the example?**

- A) To calculate the area of a shape based on its type
- B) To format and print the area of a shape in a readable string
- C) To log the shape's dimension to a file
- D) To convert the area value to integer format

<details>
<summary>Answer</summary>

- B) To format and print the area of a shape in a readable string

</details>

---

[← Course overview](../../../README.md)
