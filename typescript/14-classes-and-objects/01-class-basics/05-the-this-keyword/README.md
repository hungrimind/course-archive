# The this Keyword

Inside a class, **`this`** refers to the specific instance the method was called on. When two objects exist from the same class, `this.name` gives each one its own value.

```typescript
class Pet {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): string {
    return `${this.name} says hello`;
  }
}

const a = new Pet("Luna");
const b = new Pet("Milo");
console.log(a.speak()); // "Luna says hello"
console.log(b.speak()); // "Milo says hello"
```

`this` is how each instance knows about itself. Without it, a method would have no way to reach its own properties.

## Fill in the Blanks

Fill in the blanks:

```typescript
class Pet {
  name: string;
  constructor(name: string) {
    __(1)__ = name;
  }
  speak(): string {
    return `${__(2)__} says hello`;
  }
}
```

<details>
<summary>Answer</summary>

1. `this.name`
2. `this.name`

</details>

---

[← Course overview](../../../README.md)
