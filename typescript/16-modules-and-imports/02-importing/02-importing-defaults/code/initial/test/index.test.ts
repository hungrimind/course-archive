import { describe, test, expect } from 'vitest';
import Greeter from '../src/index.js';
import { execSync } from 'child_process';

describe('Importing Defaults - Greeter', () => {
  test('Greeter can be instantiated', () => {
    const greeter = new Greeter();
    expect(greeter).toBeInstanceOf(Greeter);
  });

  test('greet returns a greeting message', () => {
    const greeter = new Greeter();
    expect(greeter.greet("Alice")).toBe("Hello, Alice!");
  });

  test('farewell returns a farewell message', () => {
    const greeter = new Greeter();
    expect(greeter.farewell("Bob")).toBe("Goodbye, Bob!");
  });

  test('output shows greeting and farewell', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf-8' });
    expect(output).toContain('Hello, Alice!');
    expect(output).toContain('Goodbye, Bob!');
  });
});
