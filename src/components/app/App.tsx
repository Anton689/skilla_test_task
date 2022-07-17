import React from 'react';

import { callsAPI } from '../../api/callsAPI';
import { useAppDispatch } from '../../hooks';
import { fetchCalls } from '../../store/slices/callsSlice';
import { ReturnComponentType } from '../../types';
import { Sidebar } from '../sidebar';
import { Workspace } from '../workspace';

import s from './app.module.scss';

export const App = (): ReturnComponentType => (
  // const dispatch = useAppDispatch();

  <div className={s.App}>
    <div className={s.wrapper}>
      <Sidebar />
      {/* TODO пофиксить нейминг */}
      <Workspace />
    </div>
  </div>
);
