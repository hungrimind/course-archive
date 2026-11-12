export function checkScore(score: number): string {
  const passing: boolean
  const perfect: boolean
  const failing: boolean

  if (perfect) {
    return "invalid";
  } else if (passing) {
    return "passing";
  } else {
    return "failing";
  }
}

console.log(checkScore(85));
console.log(checkScore(101));
console.log(checkScore(50));
