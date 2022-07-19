const SEC_IN_MIN = 60;
const ZERO = 0;
const TEN = 10;

export const changeFormatToMinutes = (seconds: number): string => {
  const minutes = Math.floor(seconds / SEC_IN_MIN);
  const restSeconds = seconds - minutes * SEC_IN_MIN;
  const secondsFormat = restSeconds < TEN ? `${ZERO}${restSeconds}` : `${restSeconds}`;
  return minutes === ZERO ? `${ZERO}:${restSeconds}` : `${minutes}:${secondsFormat}`;
};
