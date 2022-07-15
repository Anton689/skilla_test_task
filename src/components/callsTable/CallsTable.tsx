import React from 'react';

import { useAppSelector } from '../../hooks';
import incomingLogo from '../../images/incommingCall.svg';
import outgoingLogo from '../../images/outgoing .svg';
import { selectCalls } from '../../store/selectors';
import { ReturnComponentType } from '../../types';
import { changeFormat } from '../../utils';

import s from './callsTable.module.scss';

const SORT_VALUE = 1;

const callTypeImg = {
  incoming: incomingLogo,
  outgoing: outgoingLogo,
};

export const CallsTable = (): ReturnComponentType => {
  const calls = useAppSelector(selectCalls);

  const time1 = (seconds: string): any => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const min = Math.floor(+seconds / 60);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const sec = +seconds - min * 60;
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const min1 = min === 0 ? `${0}:${sec}` : `${min}:${sec}`;
    return min1;
  };

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  console.log(time1('130'));

  const callsRows = calls.map(
    ({ id, in_out, date, person_avatar, from_number, to_number, source, time }) => {
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
          <td>{time}</td>
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
