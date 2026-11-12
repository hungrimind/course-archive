export function getDayType(day: string): string {
  switch (day) {
    case "Monday":
    case "Tuesday":
      return "Early week";
    case "Friday":
      return "Almost weekend!";
    default:
      return "Some other day";
  }
}

console.log(getDayType("Monday"));
console.log(getDayType("Friday"));
console.log(getDayType("Sunday"));
