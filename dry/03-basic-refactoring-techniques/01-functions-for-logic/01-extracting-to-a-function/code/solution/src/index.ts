export function calculateArea(width: number, height: number): number {
  return width * height
}

const area1 = calculateArea(5, 10)
const area2 = calculateArea(7, 3)

console.log(`Area of a 5x10 rectangle: ${area1}`)
console.log(`Area of a 7x3 rectangle: ${area2}`)
