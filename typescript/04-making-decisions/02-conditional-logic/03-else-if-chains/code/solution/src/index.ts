export function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(60));
