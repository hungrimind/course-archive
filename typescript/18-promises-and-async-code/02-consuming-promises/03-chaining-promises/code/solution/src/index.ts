export function processName(promise: Promise<string>): Promise<string> {
  return promise
    .then((name) => name.trim())
    .then((name) => name.toUpperCase())
    .then((name) => "Hello, " + name);
}

console.log("Chaining promises!");
