export function createCoordinate(x: number, y: number): [number, number] {
  return [x, y];
}

export function getUserInfo(): [string, number, boolean] {
  return ["Alice", 30, true];
}

const coord = createCoordinate(10, 20);
console.log(`Coordinate: (${coord[0]}, ${coord[1]})`);

const [name, age, isActive] = getUserInfo();
console.log(`${name} is ${age} years old, active: ${isActive}`);
