import React from 'react';

import s from '../calls.module.scss';

export const SearchCalls = () => (
  <input className={s.search} type="text" placeholder="Поиск по звонкам" disabled />
);
