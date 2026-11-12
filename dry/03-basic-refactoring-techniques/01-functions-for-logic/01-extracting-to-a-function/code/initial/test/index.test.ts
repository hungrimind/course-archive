import { describe, test, expect } from 'vitest'
import { execSync } from 'node:child_process'
import { calculateArea } from '../src/index'

describe('Extracting to a Function', () => {
  test('calculateArea multiplies width and height', () => {
    expect(calculateArea(5, 10)).toBe(50)
    expect(calculateArea(7, 3)).toBe(21)
  })

  test('calculateArea returns 0 if one side is 0', () => {
    expect(calculateArea(0, 10)).toBe(0)
  })

  test('program output shows the two calculated areas using the function', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf8' })
    expect(output).toContain('Area of a 5x10 rectangle: 50')
    expect(output).toContain('Area of a 7x3 rectangle: 21')
  })
})
