import React from 'react';

import add from '../../images/addButton.svg';
import { ReturnComponentType } from '../../types';
import { CallsTable } from '../callsTable';

import styles from './container.module.scss';
import { Header } from './header';
import s from './workspace.module.scss';

export const Workspace = (): ReturnComponentType => (
  <div className={s.workspace}>
    <Header />
    <div className={s.content}>
      <div className={styles.container}>
        <div className={s.balanceInfo}>
          <div className={s.balanceDisplay}>
            <span className={s.title}>Баланс:</span>
            <span className={s.amount}>272 ₽ </span>
            <span>
              <img src={add} alt="calendar" />
            </span>
          </div>
          <div>Calendar</div>
        </div>
        <div className={s.optionsMenu}>
          <div className={s.callsSearch}>
            <input
              className={s.search}
              type="text"
              placeholder="Поиск по звонкам"
              disabled
            />
          </div>
          <div className={s.sortOptions}>
            <span>Vse tipy</span>
            <span>Vse sotrudnyki</span>
            <span>Vse zvonki</span>
            <span>Vse istochniki</span>
            <span>Vse ocenki</span>
            <span>Vse oshibki</span>
          </div>
        </div>
        <CallsTable />
      </div>
    </div>
  </div>
);
