import { describe, test, expect } from 'vitest';
import { describeEvent, addEventListener } from '../src/index.js';

describe('describeEvent', () => {
  test('describes a click event with coordinates', () => {
    expect(describeEvent({ type: "click", clientX: 50, clientY: 75 })).toBe("Clicked at 50, 75");
  });

  test('describes a keypress event with key', () => {
    expect(describeEvent({ type: "keypress", key: "a" })).toBe("Key pressed: a");
  });
});

describe('addEventListener', () => {
  test('passes click event to callback', () => {
    const result = addEventListener("click", (e) => {
      if (e.type === "click") return `x:${e.clientX}`;
      return "wrong";
    });
    expect(result).toBe("x:100");
  });

  test('passes keypress event to callback', () => {
    const result = addEventListener("keypress", (e) => {
      if (e.type === "keypress") return `key:${e.key}`;
      return "wrong";
    });
    expect(result).toBe("key:Enter");
  });

  test('describeEvent works as callback', () => {
    expect(addEventListener("click", describeEvent)).toBe("Clicked at 100, 200");
  });
});
