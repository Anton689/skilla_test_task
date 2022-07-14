import React from 'react';

import { ReturnComponentType } from '../../types';
import { Sidebar } from '../navbar';
import { Workspace } from '../workspace';

import s from './app.module.scss';

export const App = (): ReturnComponentType => (
  <div className={s.App}>
    <div className={s.wrapper}>
      <Sidebar />
      {/* TODO пофиксить нейминг */}
      <Workspace />
    </div>
  </div>
);
