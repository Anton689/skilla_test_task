import React from 'react';

import { ReturnComponentType } from '../../types';
import { Sidebar } from '../navbar';

import s from './app.module.scss';

export const App = (): ReturnComponentType => (
  <div className={s.App}>
    <div className={s.wrapper}>
      <Sidebar />
    </div>
  </div>
);
