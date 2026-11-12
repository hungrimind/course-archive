import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { buildItemsUrl, buildOffsetPaginationQuery } from '../src/index';

describe('Pagination Basics', () => {
  test('buildOffsetPaginationQuery builds ?page=2&limit=10', () => {
    expect(buildOffsetPaginationQuery({ page: 2, limit: 10 })).toBe('?page=2&limit=10');
  });

  test('buildItemsUrl builds /items?page=2&limit=10', () => {
    expect(buildItemsUrl({ page: 2, limit: 10 })).toBe('/items?page=2&limit=10');
  });

  test('buildOffsetPaginationQuery validates page and limit are >= 1', () => {
    expect(() => buildOffsetPaginationQuery({ page: 0, limit: 10 })).toThrow(/page must be an integer >= 1/);
    expect(() => buildOffsetPaginationQuery({ page: 1, limit: 0 })).toThrow(/limit must be an integer >= 1/);
  });

  test('program output includes the example GET /items?page=2&limit=10', () => {
    const out = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });
    expect(out).toContain('GET /items?page=2&limit=10');
  });

  test('program output mentions offset-based vs cursor-based pagination', () => {
    const out = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });
    expect(out.toLowerCase()).toContain('offset-based');
    expect(out.toLowerCase()).toContain('cursor-based');
  });
});
