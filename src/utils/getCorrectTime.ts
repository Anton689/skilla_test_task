const START_VALUE = 11;
const LAST_VALUE = -3;

export const getCorrectTime = (time: string): string =>
  time.slice(START_VALUE, LAST_VALUE);
