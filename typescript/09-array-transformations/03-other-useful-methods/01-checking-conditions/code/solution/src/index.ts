export function areAllAdults(ages: number[]): boolean {
  return ages.every(age => age >= 18);
}

export function hasAnyAdult(ages: number[]): boolean {
  return ages.some(age => age >= 18);
}

const ages = [18, 25, 30, 16];

console.log(areAllAdults(ages));
console.log(hasAnyAdult(ages));
