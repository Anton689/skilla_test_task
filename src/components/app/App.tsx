import React from 'react';

import { Calls } from '../calls';
import { Sidebar } from '../sidebar';

import s from './app.module.scss';

import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
  <div className={s.App}>
    <div className={s.wrapper}>
      <Sidebar />
      <Calls />
    </div>
  </div>
);
