export function isEven(num: number): boolean {
  return num % 2 === 0;
}

const ticketNumber = 1842;
const seatRow = 17;

console.log(`Ticket ${ticketNumber} requires an even number: ${isEven(ticketNumber)}`);
console.log(`Row ${seatRow} is even: ${isEven(seatRow)}`);
