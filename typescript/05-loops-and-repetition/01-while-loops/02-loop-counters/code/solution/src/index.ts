export function multiplyByAddition(a: number, b: number): number {
  let result = 0;
  let counter = 0;

  while (counter < b) {
    result += a;
    counter++;
  }

  return result;
}

console.log(multiplyByAddition(3, 4));
console.log(multiplyByAddition(7, 5));
