export function createCoordinate(x: number, y: number): [number, number] {

}

export function getUserInfo(): [string, number, boolean] {

}

const coord = createCoordinate(10, 20);
console.log(`Coordinate: (${coord[0]}, ${coord[1]})`);

const [name, age, isActive] = getUserInfo();
console.log(`${name} is ${age} years old, active: ${isActive}`);
