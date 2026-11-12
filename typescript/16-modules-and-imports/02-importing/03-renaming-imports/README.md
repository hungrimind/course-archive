# Renaming Imports

The **`as`** keyword lets you rename an import to avoid name collisions or improve clarity.

```typescript
import { add as sum } from "./math";
import { add as concat } from "./strings";

console.log(sum(1, 2));
console.log(concat("hello", " world"));
```

This is especially handy when two modules export something with the same name. The original export stays unchanged. The rename only applies in the importing file.

## Fill in the Blanks

Fill in the blanks:

```typescript
import { add __(1)__ sum } from "./math";
import { add __(2)__ concat } from "./strings";

console.log(__(3)__(1, 2));
console.log(concat("hello", " world"));
```

<details>
<summary>Answer</summary>

1. `as`
2. `as`
3. `sum`

</details>

---

[← Course overview](../../../README.md)
