export function canRide(hasTicket: boolean, height: number): string {
  if (hasTicket) {
    if (height >= 120) {
      return "Enjoy the ride!";
    } else {
      return "Too short!";
    }
  }
  return "No ticket!";
}

console.log(canRide(true, 130));
console.log(canRide(true, 100));
console.log(canRide(false, 130));
