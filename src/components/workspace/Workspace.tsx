import React from 'react';

import { optionsOfCallsType } from '../../constants';
import { useAppDispatch } from '../../hooks';
import add from '../../images/addButton.svg';
import { addedSortValue } from '../../store/slices';
import { Nullable, ReturnComponentType } from '../../types';
import { CallsTable } from '../callsTable';
import { Header } from '../header';
import { Select } from '../select';

import styles from './container.module.scss';
import s from './workspace.module.scss';

export const Workspace = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const setSortValue = (value: Nullable<number>) => {
    dispatch(addedSortValue(value));
  };

  return (
    <div className={s.workspace}>
      <Header />
      <div className={s.content}>
        <div className={styles.container}>
          <div className={s.balanceInfo}>
            <div className={s.balanceDisplay}>
              <span className={s.title}>Баланс:</span>
              <span className={s.amount}>272 ₽ </span>
              <span>
                <img src={add} alt="button" />
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
              <Select
                defaultOption="Все типы"
                items={optionsOfCallsType}
                onClick={setSortValue}
              />
              {/* //TODO сделать енамки */}
              <Select defaultOption="Все сотрудники" disable />
              <Select defaultOption="Все звонки" disable />
              <Select defaultOption="Все источники" disable />
              <Select defaultOption="Все оценки" disable />
              <Select defaultOption="Все ошибки" disable />
            </div>
          </div>
          <CallsTable />
        </div>
      </div>
    </div>
  );
};
