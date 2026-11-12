import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { fetchData, sleep } from '../src/index';

describe('Timeouts', () => {
  test('fetchData returns ok=true when request resolves before timeout', async () => {
    const result = await fetchData(async () => {
      await sleep(10);
      return 'hello';
    }, 100);

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data).toBe('hello');
    }
  });

  test('fetchData returns TIMEOUT when request exceeds timeout', async () => {
    const result = await fetchData(async () => {
      await sleep(80);
      return 'too-slow';
    }, 20);

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe('TIMEOUT');
    }
  });

  test('fetchData returns FAILED when request throws an error', async () => {
    const result = await fetchData(async () => {
      await sleep(5);
      throw new Error('network down');
    }, 100);

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe('FAILED');
    }
  });

  test('program output indicates timeout handling', () => {
    const out = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });
    expect(out).toMatch(/Request timed out or failed/);
    expect(out).toMatch(/timeout=50ms/);
    expect(out).toMatch(/: TIMEOUT/);
  });
});
