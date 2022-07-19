import React from 'react';

import { ManipulateType } from 'dayjs';

import { dateOptions, callsTypeOptions } from '../../constants';
import { Option } from '../../enums';
import { CallsTable } from '../callsTable';
import { DateSelect } from '../dateSelect';
import { Header } from '../header';
import { Select } from '../select';

import { Balance } from './balance';
import s from './calls.module.scss';
import styles from './container.module.scss';
import { SearchCalls } from './searchCalls';

import { useAppDispatch } from 'hooks';
import { addedSortValue, addedStartDate } from 'store/slices';
import { Nullable, ReturnComponentType } from 'types';
import { getDate } from 'utils';

const selects = [
  { id: '1', defaultOption: Option.STAFF, isDisable: true },
  { id: '2', defaultOption: Option.CALLS, isDisable: true },
  { id: '3', defaultOption: Option.SOURCES, isDisable: true },
  { id: '4', defaultOption: Option.RATES, isDisable: true },
  { id: '5', defaultOption: Option.ERRORS, isDisable: true },
];

export const Calls = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const setSortValue = (value: Nullable<number>) => {
    dispatch(addedSortValue(value));
  };

  const setStartDate = (count: number, unit: ManipulateType | undefined) => {
    const correctFormat = getDate(count, unit);
    dispatch(addedStartDate(correctFormat));
  };

  return (
    <div className={s.workspace}>
      <Header />
      <div className={s.content}>
        <div className={styles.container}>
          <div className={s.balanceInfo}>
            <Balance />

            <div style={{ width: '200px' }}>
              <DateSelect
                onClick={setStartDate}
                defaultOption="3 дня"
                items={dateOptions}
              />
            </div>
          </div>

          <div className={s.optionsMenu}>
            <div className={s.callsSearch}>
              <SearchCalls />
            </div>

            <div className={s.sortOptions}>
              <Select
                defaultOption={Option.TYPES}
                items={callsTypeOptions}
                onClick={setSortValue}
              />

              {selects.map(({ id, defaultOption, isDisable }) => (
                <Select key={id} defaultOption={defaultOption} disable={isDisable} />
              ))}
            </div>
          </div>

          <CallsTable />
        </div>
      </div>
    </div>
  );
};
