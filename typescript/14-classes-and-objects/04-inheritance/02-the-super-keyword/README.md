# The super Keyword

When a subclass has its own constructor, it must call **`super()`** first to run the parent's constructor. This ensures the inherited properties get set up before you add anything new.

```typescript
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }
}

const dog = new Dog("Rex", "Labrador");
```

You can also call **`super.methodName()`** inside a method to invoke the parent's version. Think of `super` as a direct line to the parent class.

## Fill in the Blanks

Fill in the blanks:

```typescript
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    __(1)__(__(2)__);
  }
}
```

<details>
<summary>Answer</summary>

1. `super`
2. `name`

</details>

---

[← Course overview](../../../README.md)
