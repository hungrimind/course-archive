# Interface vs Type

Both `interface` and `type` can describe object shapes, and for most day-to-day code they're interchangeable. The key difference: interfaces can be **extended** and **declaration-merged**, while type aliases are more flexible for non-object types like unions or primitives.

```typescript
type ID = string | number;      // only type can do this
interface User { name: string } // either works for objects
type Admin = { name: string }   // this also works fine
```

For objects, pick whichever your team prefers and stay consistent. You'll see both in real codebases.

## Matching

Sort each item into the right category: **Only Type Alias**, **Only Interface**, **Both**

- Aliasing primitive types
- Annotating function parameters
- Declaration merging
- Describing object shapes
- Union types like string | number
- extends keyword

<details>
<summary>Answer</summary>

**Only Type Alias**
- Union types like string | number
- Aliasing primitive types

**Only Interface**
- Declaration merging
- extends keyword

**Both**
- Describing object shapes
- Annotating function parameters

</details>

---

[← Course overview](../../../README.md)
