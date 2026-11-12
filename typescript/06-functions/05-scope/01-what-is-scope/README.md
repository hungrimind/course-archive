# What is Scope?

**Scope** determines where a variable can be accessed. A variable created inside a function only exists inside that function. Code outside cannot see it.

```typescript
function sayHi() {
  let message = "Hello!";
  console.log(message); // works fine
}

sayHi();
console.log(message); // Error! message is not defined
```

This is a good thing. Scope keeps variables contained so different parts of your program don't accidentally interfere with each other.

## Quiz

**1. What happens when you try to access a variable outside the function where it was created?**

- A) It returns undefined silently
- B) It returns an empty string
- C) You get an error because the variable is not defined outside that function
- D) It works fine because all variables are global

<details>
<summary>Answer</summary>

- C) You get an error because the variable is not defined outside that function

Variables created inside a function only exist within that function's scope. Trying to access them outside causes a 'not defined' error.

</details>

**2. Why is scope considered a good thing in programming?**

- A) It makes code run faster
- B) It keeps variables contained so different parts of your program don't accidentally interfere with each other
- C) It automatically names your variables
- D) It allows you to skip writing function definitions

<details>
<summary>Answer</summary>

- B) It keeps variables contained so different parts of your program don't accidentally interfere with each other

Scope prevents accidental conflicts between variables in different parts of your program by keeping them contained to where they were created.

</details>

---

[← Course overview](../../../README.md)
