import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import incomingLogo from '../../images/incommingCall.svg';
import outgoingLogo from '../../images/outgoing .svg';
import { selectCalls, selectParams } from '../../store/selectors';
import { fetchCalls } from '../../store/slices/callsSlice';
import { ReturnComponentType } from '../../types';
import { changeFormat } from '../../utils';
import { AudioPlayer } from '../audioPlayer';

import s from './callsTable.module.scss';

const SORT_VALUE = 1;

const callTypeImg = {
  incoming: incomingLogo,
  outgoing: outgoingLogo,
};

export const CallsTable = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const calls = useAppSelector(selectCalls);
  const params = useAppSelector(selectParams);

  useEffect(() => {
    dispatch(fetchCalls());
  }, [params]);

  const callsRows = calls.map(
    ({
      id,
      in_out,
      date,
      person_avatar,
      from_number,
      to_number,
      source,
      time,
      record,
    }) => {
      const phoneNumberType = in_out === SORT_VALUE ? from_number : to_number;
      const typeOfCall =
        in_out === SORT_VALUE ? callTypeImg.incoming : callTypeImg.outgoing;
      return (
        <tr key={id}>
          <td>
            <img src={typeOfCall} alt="logo" />
          </td>
          <td>{changeFormat(date)}</td>
          <td>
            <img src={person_avatar} alt="avatar" />
          </td>
          <td className={s.calls}>{phoneNumberType}</td>
          <td className={s.source}>{source}</td>
          <td />
          <td>{record && <AudioPlayer />}</td>
        </tr>
      );
    },
  );
  return (
    <div className={s.tableContainer}>
      <table>
        <thead>
          <tr className={s.trHead}>
            <th>Тип</th>
            <th>Время</th>
            <th>Сотрудник</th>
            <th>Звонок</th>
            <th>Источник</th>
            <th className={s.asses}>Оценка</th>
            <th>Длительность</th>
          </tr>
        </thead>

        <tbody>{callsRows}</tbody>
      </table>
    </div>
  );
};
