# Readonly Properties

The **`readonly`** modifier prevents a property from being reassigned after the object is created. TypeScript will throw an error at compile time if you try.

```typescript
type Config = {
  readonly apiUrl: string;
  readonly maxRetries: number;
};

const config: Config = { apiUrl: "https://api.example.com", maxRetries: 3 };
config.apiUrl = "something else"; // Error!
```

This is great for values that should never change once set, like configuration or IDs.

## Fill in the Blanks

Fill in the blanks:

```typescript
type Config = {
  __(1)__ apiUrl: string;
  __(2)__ maxRetries: number;
};
```

<details>
<summary>Answer</summary>

1. `readonly`
2. `readonly`

</details>

---

[← Course overview](../../../README.md)
