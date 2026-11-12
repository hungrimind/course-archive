export default class Greeter {
  greet(name: string): string {
    return `Hello, ${name}!`;
  }

  farewell(name: string): string {
    return `Goodbye, ${name}!`;
  }
}

const greeter = new Greeter();
console.log(greeter.greet("Alice"));
console.log(greeter.farewell("Bob"));
