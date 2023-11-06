function calcScore(input: string) {
  const score = input
    .split(" ")
    .map((frame) => [...frame])
    .map(([a, b]) => [parseInt(a), b === "-" ? 0 : parseInt(b)])
    .flat()
    .reduce((score, pins) => (score += pins));

  return score;
}

export { calcScore };
