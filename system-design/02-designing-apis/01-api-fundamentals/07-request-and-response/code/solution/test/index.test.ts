import { describe, test, expect } from 'vitest'
import { execSync } from 'node:child_process'
import { handleRequest } from '../src/index'

describe('Request and Response', () => {
  test('handleRequest returns the example success response for GET /api/data', () => {
    expect(handleRequest({ method: 'GET', path: '/api/data' })).toEqual({
      status: 'success',
      data: [1, 2, 3]
    })
  })

  test('handleRequest returns an error response for an unknown path', () => {
    expect(handleRequest({ method: 'GET', path: '/api/unknown' })).toEqual({
      status: 'error',
      message: 'Not found'
    })
  })

  test('program output shows the request line and the JSON response', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf8' })

    expect(output).toContain('GET /api/data')
    expect(output).toContain('"status": "success"')
    expect(output).toContain('"data": [')
    expect(output).toContain('1')
    expect(output).toContain('2')
    expect(output).toContain('3')
  })
})
