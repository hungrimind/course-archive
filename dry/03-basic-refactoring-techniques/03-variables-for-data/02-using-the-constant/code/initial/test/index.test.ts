import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { MAX_USERS, canAddUsers, remainingUserSlots } from '../src/index';

describe('Using the constant (MAX_USERS)', () => {
  test('exports MAX_USERS = 100', () => {
    expect(MAX_USERS).toBe(100);
  });

  test('canAddUsers uses MAX_USERS as the limit', () => {
    expect(canAddUsers(90, 10)).toBe(true);
    expect(canAddUsers(90, 11)).toBe(false);
  });

  test('remainingUserSlots computes slots left based on MAX_USERS', () => {
    expect(remainingUserSlots(95)).toBe(5);
    expect(remainingUserSlots(150)).toBe(0);
  });

  test('program output includes the MAX_USERS value and uses the functions', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });
    const lines = output.trim().split(/\r?\n/);

    expect(lines[0]).toBe('Max users allowed: 100');
    expect(lines).toContain('Current users: 92');
    expect(lines).toContain('Remaining slots: 8');
    expect(lines).toContain('Can add 7 more users? true');
  });
});
