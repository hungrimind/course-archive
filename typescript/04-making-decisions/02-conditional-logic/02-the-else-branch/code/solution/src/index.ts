export function checkAge(age: number): string {
  if (age >= 18) {
    return "Welcome in!";
  } else {
    return "Sorry, adults only.";
  }
}

console.log(checkAge(20));
console.log(checkAge(15));
