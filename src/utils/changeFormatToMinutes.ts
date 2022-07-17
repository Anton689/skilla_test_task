const SEC_IN_MIN = 60;
const ZERO = 0;

export const changeFormatToMinutes = (seconds: string): string => {
  const secToNumber = Number(seconds);
  const min = Math.floor(secToNumber / SEC_IN_MIN);
  const sec = secToNumber - min * SEC_IN_MIN;
  const finalFormat = min === ZERO ? `${ZERO}:${sec}` : `${min}:${sec}`;
  return finalFormat.toString();
};
