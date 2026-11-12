export function roundNumber(n: number): number {
  return Math.round(n);
}

export function floorNumber(n: number): number {
  return Math.floor(n);
}

export function ceilNumber(n: number): number {
  return Math.ceil(n);
}

console.log(roundNumber(4.5));
console.log(floorNumber(4.9));
console.log(ceilNumber(4.1));
