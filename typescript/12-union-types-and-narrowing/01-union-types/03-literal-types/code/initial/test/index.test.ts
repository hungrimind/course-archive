import { describe, test, expect } from 'vitest';
import { getStatusMessage } from '../src/index.js';

describe('getStatusMessage', () => {
  test('returns message for success', () => {
    expect(getStatusMessage("success")).toBe("Operation completed successfully");
  });

  test('returns message for error', () => {
    expect(getStatusMessage("error")).toBe("Something went wrong");
  });

  test('returns message for loading', () => {
    expect(getStatusMessage("loading")).toBe("Please wait...");
  });
});
