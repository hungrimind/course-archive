export function checkScore(score: number): string {
  const passing: boolean = score >= 70;
  const perfect: boolean = score > 100;
  const failing: boolean = score < 70;

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
