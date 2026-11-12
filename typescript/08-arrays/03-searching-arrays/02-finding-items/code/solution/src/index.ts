const numbers = [4, 11, 2, 19, 7, 15];

const firstBig = numbers.find((n) => n > 10);
const firstSmall = numbers.find((n) => n < 3);

console.log(firstBig);
console.log(firstSmall);
