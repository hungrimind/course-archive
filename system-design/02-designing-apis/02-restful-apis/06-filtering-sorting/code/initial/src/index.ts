export type ItemStatus = 'active' | 'inactive'

export interface Item {
  id: string
  status: ItemStatus
  created_at: string
}

export interface QueryParams {
  filter?: string
  sort?: string
}

export function parseFilter(filter?: string): { field: string; value: string } | null {
  // ?
  return null
}

export function parseSort(sort?: string): { field: string; direction: 'asc' | 'desc' } | null {
  // ?
  return null
}

export function applyFilter(items: Item[], filter?: string): Item[] {
  // Naive/buggy: only supports exact match on "status=active" with "=" instead of ":"
  if (!filter) return items
  if (filter === 'status=active') return items.filter((i) => i.status === 'active')
  if (filter === 'status=inactive') return items.filter((i) => i.status === 'inactive')
  return items
}

export function applySort(items: Item[], sort?: string): Item[] {
  // Naive/buggy: only supports "created_at" and ignores direction, and mutates input
  if (!sort) return items
  if (sort === 'created_at') {
    return items.sort((a, b) => (a.created_at > b.created_at ? 1 : -1))
  }
  return items
}

export function queryItems(items: Item[], query: QueryParams): Item[] {
  // Bug: sorts before filtering
  const sorted = applySort(items, query.sort)
  const filtered = applyFilter(sorted, query.filter)
  return filtered
}

const items: Item[] = [
  { id: 'A100', status: 'active', created_at: '2024-01-12T09:00:00Z' },
  { id: 'B200', status: 'inactive', created_at: '2024-02-03T10:30:00Z' },
  { id: 'C300', status: 'active', created_at: '2023-12-20T16:15:00Z' },
  { id: 'D400', status: 'active', created_at: '2024-03-01T08:05:00Z' }
]

const query: QueryParams = {
  filter: 'status:active',
  sort: 'created_at:desc'
}

const result = queryItems(items, query)
console.log('GET /items?filter=status:active&sort=created_at:desc')
console.log('Result item ids:', result.map((i) => i.id).join(', '))
