import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { fetchDataWithRetry, type HttpClient } from '../src/index';

describe('fetchDataWithRetry', () => {
  test('returns on first success without retrying', async () => {
    let calls = 0;
    const client: HttpClient = {
      async get(url: string) {
        calls++;
        return { url, ok: true };
      }
    };

    const result = await fetchDataWithRetry('https://example.com/data', 3, client);
    expect(result).toEqual({ url: 'https://example.com/data', ok: true });
    expect(calls).toBe(1);
  });

  test('retries on transient failures and eventually succeeds', async () => {
    let calls = 0;
    const client: HttpClient = {
      async get() {
        calls++;
        if (calls < 3) throw new Error('Temporary failure');
        return { ok: true, calls };
      }
    };

    const result = await fetchDataWithRetry('https://example.com/flaky', 3, client);
    expect(result).toEqual({ ok: true, calls: 3 });
    expect(calls).toBe(3);
  });

  test('throws the last error after exhausting retries', async () => {
    let calls = 0;
    const client: HttpClient = {
      async get() {
        calls++;
        throw new Error(`Still failing (${calls})`);
      }
    };

    await expect(fetchDataWithRetry('https://example.com/down', 3, client)).rejects.toThrow(
      'Still failing (3)'
    );
    expect(calls).toBe(3);
  });
});

describe('program output', () => {
  test('prints expected demo output lines', () => {
    const out = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });

    expect(out).toContain('Profile response:');
    expect(out).toContain('"id":"u_123"');
    expect(out).toContain('"name":"Ava"');

    expect(out).toContain('Flaky GET succeeded after retries:');
    expect(out).toContain('"calls":3');
  });
});
