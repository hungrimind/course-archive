import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { greet } from '../src/index.js';

describe('Handling Variations with Parameters', () => {
  test('greet is exported and prints a greeting using the name parameter', () => {
    const logs: string[] = [];
    const original = console.log;
    console.log = (msg?: unknown) => {
      logs.push(String(msg));
    };

    try {
      greet('Alice');
      greet('Bob');
    } finally {
      console.log = original;
    }

    expect(logs).toEqual(['Hello, Alice!', 'Hello, Bob!']);
  });

  test('greet works with another name', () => {
    const logs: string[] = [];
    const original = console.log;
    console.log = (msg?: unknown) => {
      logs.push(String(msg));
    };

    try {
      greet('Charlie');
    } finally {
      console.log = original;
    }

    expect(logs).toEqual(['Hello, Charlie!']);
  });

  test('program output includes greetings for Alice and Bob', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });
    const lines = output
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    expect(lines).toEqual(['Hello, Alice!', 'Hello, Bob!']);
  });
});
