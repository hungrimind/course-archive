# Why Add Types?

TypeScript **infers** types automatically, but explicit **type annotations** let you state exactly what you intend. When inference gets it wrong, or when a type is ambiguous, an annotation catches the mistake before your code runs.

```typescript
let score = 0;        // inferred as number, fine
let input = JSON.parse(data); // inferred as any, not helpful
```

Annotations shine where inference falls short. They also make your code self-documenting: anyone reading it knows the expected type without tracing through logic.

## Quiz

**1. When is a type annotation most useful?**

- A) When TypeScript already infers the correct type from a literal value
- B) When the inferred type is ambiguous or incorrect, such as with JSON.parse
- C) When you want your code to run faster at runtime
- D) When you want to skip compilation entirely

<details>
<summary>Answer</summary>

- B) When the inferred type is ambiguous or incorrect, such as with JSON.parse

Type annotations shine where inference falls short. For example, JSON.parse returns 'any', so an annotation lets you specify the actual expected type.

</details>

**2. What is an additional benefit of explicit type annotations beyond catching errors?**

- A) They reduce the file size of your compiled JavaScript
- B) They make your code self-documenting so others know the expected type without tracing logic
- C) They allow you to use variables without declaring them first
- D) They automatically convert values to the annotated type at runtime

<details>
<summary>Answer</summary>

- B) They make your code self-documenting so others know the expected type without tracing logic

Annotations serve as documentation: anyone reading the code immediately knows the expected type without having to trace through the surrounding logic.

</details>

---

[← Course overview](../../../README.md)
