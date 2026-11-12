# Key Takeaways

TypeScript adds **static types** to JavaScript, catching bugs at compile time instead of runtime. Every value has a type, whether you annotate it explicitly or let TypeScript infer it.

**Variables and primitives** (`string`, `number`, `boolean`) are the foundation. Use `const` by default, `let` when you need reassignment.

**Functions** are how you organize logic. Arrow functions, return types, and scope rules keep your code predictable. **Generics** let you write functions and types that work with any type while staying type-safe.

Use **union types** (`string | number`) to model values that can be more than one type, and **narrowing** (`typeof`, `in`, `instanceof`) to safely handle each case. **Discriminated unions** with a shared tag field are the cleanest pattern for complex variants.

**Interfaces** and **type aliases** let you name and reuse object shapes. Interfaces can be extended; type aliases are more flexible with unions and intersections.

**Classes** bundle data and behavior together. Access modifiers (`public`, `private`, `protected`) and parameter properties keep class code concise.

> [!note]
> TypeScript's type system is structural, not nominal. If two types have the same shape, they are compatible regardless of their names.

**Error handling** with `try`/`catch` and typed errors makes failure cases explicit. **Promises** and `async`/`await` handle asynchronous operations cleanly.

**Utility types** like `Partial`, `Pick`, `Omit`, `Record`, and `ReturnType` let you derive new types from existing ones without duplication.

---

[← Course overview](../../../README.md)
