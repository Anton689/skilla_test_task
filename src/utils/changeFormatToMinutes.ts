const SEC_IN_MIN = 60;
const ZERO = 0;
const TEN = 10;

export const changeFormatToMinutes = (seconds: number): string => {
  const min = Math.floor(seconds / SEC_IN_MIN);
  const sec = seconds - min * SEC_IN_MIN;
  const secondsFormat = sec < TEN ? `0${sec}` : `${sec}`;
  const finalFormat = min === ZERO ? `${ZERO}:${sec}` : `${min}:${secondsFormat}`;
  return finalFormat;
};
