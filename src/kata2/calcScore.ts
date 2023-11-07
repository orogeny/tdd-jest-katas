const parseFrame = ([a, b]: string[]) => {
  let ball1 = 0;
  let ball2 = 0;

  ball1 = a === "-" ? 0 : parseInt(a);
  ball2 = b === "-" ? 0 : parseInt(b);

  return [ball1, ball2];
};

function calcScore(input: string) {
  const score = input
    .split(" ")
    .map((frame) => [...frame])
    .map(parseFrame)
    .flat()
    .reduce((score, pins) => (score += pins));

  return score;
}

export { calcScore };
