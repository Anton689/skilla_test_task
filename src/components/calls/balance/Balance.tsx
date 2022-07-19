import React from 'react';

import add from '../../../images/addButton.svg';
import s from '../calls.module.scss';

export const Balance = () => (
  <div className={s.balanceDisplay}>
    <span className={s.title}>Баланс:</span>
    <span className={s.amount}>272 ₽ </span>
    <span>
      <img src={add} alt="button" />
    </span>
  </div>
);
