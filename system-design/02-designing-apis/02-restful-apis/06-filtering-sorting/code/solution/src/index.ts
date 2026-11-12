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
  if (!filter) return null
  const idx = filter.indexOf(':')
  if (idx === -1) return null
  const field = filter.slice(0, idx).trim()
  const value = filter.slice(idx + 1).trim()
  if (!field || !value) return null
  return { field, value }
}

export function parseSort(sort?: string): { field: string; direction: 'asc' | 'desc' } | null {
  if (!sort) return null
  const idx = sort.indexOf(':')
  if (idx === -1) return null
  const field = sort.slice(0, idx).trim()
  const directionRaw = sort.slice(idx + 1).trim().toLowerCase()
  if (!field) return null
  if (directionRaw !== 'asc' && directionRaw !== 'desc') return null
  return { field, direction: directionRaw }
}

export function applyFilter(items: Item[], filter?: string): Item[] {
  const parsed = parseFilter(filter)
  if (!parsed) return [...items]

  const { field, value } = parsed
  if (field !== 'status') return [...items]
  if (value !== 'active' && value !== 'inactive') return [...items]

  return items.filter((i) => i.status === value)
}

export function applySort(items: Item[], sort?: string): Item[] {
  const parsed = parseSort(sort)
  if (!parsed) return [...items]

  const { field, direction } = parsed
  if (field !== 'created_at') return [...items]

  const sorted = [...items].sort((a, b) => {
    const ta = Date.parse(a.created_at)
    const tb = Date.parse(b.created_at)
    return ta - tb
  })

  return direction === 'asc' ? sorted : sorted.reverse()
}

export function queryItems(items: Item[], query: QueryParams): Item[] {
  const filtered = applyFilter(items, query.filter)
  const sorted = applySort(filtered, query.sort)
  return sorted
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
