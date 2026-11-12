# Protected Members

**`protected`** members are accessible inside the class and any class that extends it, but not from outside code. It sits between `public` and `private`.

```typescript
class Animal {
  protected sound: string;
  constructor(sound: string) {
    this.sound = sound;
  }
}

class Dog extends Animal {
  bark(): string {
    return this.sound.toUpperCase(); // OK, subclass access
  }
}

const dog = new Dog("woof");
// dog.sound; // Error: 'sound' is protected
```

Use `protected` when subclasses need access to a property but the outside world should not.

## True or False

**1. True or false:** A protected member can be accessed by a subclass that extends the class.

<details>
<summary>Answer</summary>

**True**: Protected members are accessible inside the class and any class that extends it, which is the main purpose of the protected modifier.

</details>

**2. True or false:** A protected member can be accessed directly on an instance from outside the class.

<details>
<summary>Answer</summary>

**False**: Protected members are not accessible from outside code. Only code inside the class or a subclass can use them.

</details>

**3. True or false:** Protected is more restrictive than private.

<details>
<summary>Answer</summary>

**False**: Private is more restrictive than protected. Private members are only accessible inside the class itself, while protected members are also accessible in subclasses.

</details>

---

[← Course overview](../../../README.md)
