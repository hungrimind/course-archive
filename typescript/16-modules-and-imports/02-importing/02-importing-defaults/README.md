# Importing Defaults

Import a **default export** without curly braces. You can name it anything you want since the file only has one default.

```typescript
import Calc from "./calculator";

const calc = new Calc();
console.log(calc.add(2, 3));
```

You can even mix default and named imports in a single statement: `import Calc, { TAX_RATE } from "./calculator"`. The default comes first, followed by named exports in curly braces.


## Assignment

Implement the `Greeter` class which is a default export. Complete the `greet` method to return `"Hello, {name}!"` and the `farewell` method to return `"Goodbye, {name}!"`.

Expected output:
```
Hello, Alice!
Goodbye, Bob!
```

## Challenge

Implement the `Greeter` class which is a default export. Complete the `greet` method to return `"Hello, {name}!"` and the `farewell` method to return `"Goodbye, {name}!"`.

Expected output:
```
Hello, Alice!
Goodbye, Bob!
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
