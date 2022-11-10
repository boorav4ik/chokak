function sequence(
  end,
  start = 0,
  step = end > start ? 1 : -1,
  isRight = false
) {
  const output = [];
  if (
    !(
      Number.isInteger(end) &&
      Number.isInteger(start) &&
      Number.isInteger(step)
    )
  )
    return;
  for (let i = start; step > 0 ? i < end : end < i; i += step) {
    output.push(i);
  }
  if (isRight) output.reverse();
  return output;
}

export default function range(start, end, step, isRight) {
  if (typeof start === "undefined") {
    return [];
  }
  if (typeof end === "undefined") {
    return sequence(start, end, step, isRight);
  }
  return sequence(end, start, step, isRight);
}
