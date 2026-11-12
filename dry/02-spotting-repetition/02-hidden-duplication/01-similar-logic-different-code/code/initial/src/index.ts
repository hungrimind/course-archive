export function isEvenModulo(num: number): boolean {
  return num % 2 === 0;
}

export function isEvenBitwise(num: number): boolean {
  return (num & 1) === 0;
}

const ticketNumber = 1842;
const seatRow = 17;

console.log(`Ticket ${ticketNumber} requires an even number: ${isEvenModulo(ticketNumber)}`);
console.log(`Row ${seatRow} is even: ${isEvenBitwise(seatRow)}`);
