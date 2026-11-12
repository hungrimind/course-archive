export type Coordinate = {
  x: number;
  y: number;
};

export function formatCoordinate(coord: Coordinate): string {

}

export function distance(a: Coordinate, b: Coordinate): number {

}

export function translate(coord: Coordinate, dx: number, dy: number): Coordinate {

}

const origin: Coordinate = { x: 0, y: 0 };
const point: Coordinate = { x: 3, y: 4 };
console.log(formatCoordinate(point));
console.log(distance(origin, point));
