export interface Circle {
  kind: "circle";
  radius: number;
}

export interface Square {
  kind: "square";
  side: number;
}

export type Shape = Circle | Square;

export function getArea(shape: unknown): number {
  const s = shape as Shape;
  if (s.kind === "circle") {
    const circle = s as Circle;
    return Math.round(Math.PI * circle.radius * circle.radius * 100) / 100;
  }
  const square = s as Square;
  return square.side * square.side;
}

console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "square", side: 4 }));
