# What are Modules?

A **module** is any file that contains an `export` or `import` statement. Instead of putting everything in one giant file, modules let you split your program into focused pieces: one file for math helpers, another for user logic, another for types.

Each module has its own **scope**. Variables declared inside a module don't leak into other files. Other files only see what the module explicitly exports. This keeps your code organized and prevents accidental name collisions as your project grows.

## Quiz

**1. What makes a file a "module" in TypeScript?**

- A) It must be inside a special modules folder
- B) It contains at least one export or import statement
- C) It must have the .module.ts file extension
- D) It must be registered in a configuration file

<details>
<summary>Answer</summary>

- B) It contains at least one export or import statement

A file becomes a module when it contains an export or import statement. This is what distinguishes a module from a plain script file.

</details>

**2. What happens to variables declared inside a module?**

- A) They are automatically available to all other files
- B) They are only accessible within that module unless explicitly exported
- C) They are shared globally across the entire project
- D) They must be declared with a special keyword to stay private

<details>
<summary>Answer</summary>

- B) They are only accessible within that module unless explicitly exported

Each module has its own scope. Variables stay private to the module by default and are only visible to other files when explicitly exported. This prevents accidental name collisions.

</details>

---

[← Course overview](../../../README.md)
