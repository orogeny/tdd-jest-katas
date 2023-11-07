const parseFrame = (frame: string[]) => {
  const ball1 = frame[0] === "-" ? 0 : parseInt(frame[0]);
  const ball2 =
    frame[1] === "-" ? 0 : frame[1] === "/" ? 10 - ball1 : parseInt(frame[1]);

  if (frame.length === 2) return [ball1, ball2];
  else {
    const ball3 = parseInt(frame[2]);

    return [ball1, ball2, ball3];
  }
};

function calcScore(input: string) {
  const score = input
    .split(" ")
    .map((frame) => [...frame])
    .map(parseFrame)
    .map((frame, i, frames) => {
      if (i === frames.length - 1) return frame; // just output last frame as-is

      // check for lookahead
      const [a, b] = frame;

      if (a + b < 10) return frame;

      return [...frame, frames[i + 1][0]];
    })
    .flat()
    .reduce((score, pins) => (score += pins));

  return score;
}

export { calcScore };
