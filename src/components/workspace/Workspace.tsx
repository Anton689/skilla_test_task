import React from 'react';

import { ReturnComponentType } from '../../types';

import styles from './container.module.scss';
import { Header } from './header';
import s from './workspace.module.scss';

export const Workspace = (): ReturnComponentType => (
  <div className={s.workspace}>
    <Header />
    <div className={s.content}>
      <div className={styles.container}>
        <div className={s.balance}>
          <div>Balance</div>
          <div>Calendar</div>
        </div>
        <div className={s.optionsMenu}>
          <input type="text" />
          <div className={s.sortOptions}>
            <span>Vse tipy</span>
            <span>Vse sotrudnyki</span>
            <span>Vse zvonki</span>
            <span>Vse istochniki</span>
            <span>Vse ocenki</span>
            <span>Vse oshibki</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
