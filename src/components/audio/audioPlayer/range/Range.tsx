import React, { useEffect, useRef, useState } from 'react';

import s from '../player.module.scss';

export const Range = () => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <input
      value={value}
      type="range"
      className={s.range}
      max="100"
      step="0.01"
      onChange={e => setValue(e.currentTarget.value)}
    />
  );
};
