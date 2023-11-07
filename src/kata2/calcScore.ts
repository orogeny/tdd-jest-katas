const parseFrame = (frame: string[]) => {
  if (frame[0] === "X") return [10]; // we have a strike

  const ball1 = frame[0] === "-" ? 0 : parseInt(frame[0]);

  const ball2 =
    frame[1] === "-" ? 0 : frame[1] === "/" ? 10 - ball1 : parseInt(frame[1]);

  if (frame.length === 2) return [ball1, ball2];
  else {
    const ball3 = parseInt(frame[2]);

    return [ball1, ball2, ball3];
  }
};

const addBonuses = (frame: number[], i: number, frames: number[][]) => {
  if (i >= 9) return frame; // just output last frame as-is

  if (frame.length === 1) {
    // we have a strike
    if (frames[i + 1].length === 2) {
      // next frame used both balls
      return [10, ...frames[i + 1]];
    } else {
      // next frame was a strike, so add 10 and first
      // attempt of next frame along
      return [10, 10, frames[i + 2][0]];
    }
  } else {
    // check for lookahead
    const [a, b] = frame;

    if (a + b < 10) return frame;

    return [...frame, frames[i + 1][0]];
  }
};

function calcScore(input: string) {
  const score = input
    .split(" ")
    .map((frame) => [...frame])
    .map(parseFrame)
    .map(addBonuses)
    .flat()
    .reduce((score, pins) => (score += pins));

  return score;
}

export { calcScore };
