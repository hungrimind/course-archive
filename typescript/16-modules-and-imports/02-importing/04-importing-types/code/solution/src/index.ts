export type Coordinate = {
  x: number;
  y: number;
};

export function formatCoordinate(coord: Coordinate): string {
  return `(${coord.x}, ${coord.y})`;
}

export function distance(a: Coordinate, b: Coordinate): number {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}

export function translate(coord: Coordinate, dx: number, dy: number): Coordinate {
  return { x: coord.x + dx, y: coord.y + dy };
}

const origin: Coordinate = { x: 0, y: 0 };
const point: Coordinate = { x: 3, y: 4 };
console.log(formatCoordinate(point));
console.log(distance(origin, point));
