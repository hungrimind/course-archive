import { describe, test, expect } from 'vitest'
import { execSync } from 'node:child_process'
import { applyFilter, applySort, queryItems, type Item } from '../src/index'

describe('Filtering & Sorting', () => {
  const items: Item[] = [
    { id: 'A100', status: 'active', created_at: '2024-01-12T09:00:00Z' },
    { id: 'B200', status: 'inactive', created_at: '2024-02-03T10:30:00Z' },
    { id: 'C300', status: 'active', created_at: '2023-12-20T16:15:00Z' },
    { id: 'D400', status: 'active', created_at: '2024-03-01T08:05:00Z' }
  ]

  test('applyFilter filters by status from query parameter format (status:active)', () => {
    const filtered = applyFilter(items, 'status:active')
    expect(filtered.map((i) => i.id)).toEqual(['A100', 'C300', 'D400'])
  })

  test('applySort sorts by created_at descending when sort=created_at:desc', () => {
    const sorted = applySort(items, 'created_at:desc')
    expect(sorted.map((i) => i.id)).toEqual(['D400', 'B200', 'A100', 'C300'])
  })

  test('queryItems combines filtering and sorting like GET /items?filter=status:active&sort=created_at:desc', () => {
    const result = queryItems(items, { filter: 'status:active', sort: 'created_at:desc' })
    expect(result.map((i) => i.id)).toEqual(['D400', 'A100', 'C300'])
  })

  test('program output includes the request and resulting ids in expected order', () => {
    const out = execSync('npx ts-node src/index.ts', { encoding: 'utf8' })
    expect(out).toContain('GET /items?filter=status:active&sort=created_at:desc')
    expect(out).toContain('Result item ids: D400, A100, C300')
  })
})
