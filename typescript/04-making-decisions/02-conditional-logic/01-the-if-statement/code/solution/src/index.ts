export function checkTemperature(temperature: number): string {
  if (temperature > 30) {
    return "hot";
  }
  return "not hot";
}

console.log(checkTemperature(35));
console.log(checkTemperature(25));
