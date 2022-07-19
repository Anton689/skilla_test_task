import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import incomingLogo from '../../images/incommingCall.svg';
import outgoingLogo from '../../images/outgoing .svg';
import { Audio } from '../audio';

import s from './callsTable.module.scss';
import { Columns } from './columns';

import { useAppDispatch } from 'hooks';
import { selectCalls, selectParams } from 'store/selectors';
import { fetchCalls } from 'store/slices/callsSlice';
import { ReturnComponentType } from 'types';
import { getCorrectTime } from 'utils';

const SORT_VALUE = 1;

const callTypeImg = {
  incoming: incomingLogo,
  outgoing: outgoingLogo,
};

export const CallsTable = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const calls = useSelector(selectCalls);
  const params = useSelector(selectParams);

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
      partnership_id,
    }) => {
      const phoneNumberType = in_out === SORT_VALUE ? from_number : to_number;
      const typeOfCall =
        in_out === SORT_VALUE ? callTypeImg.incoming : callTypeImg.outgoing;
      return (
        <tr key={id}>
          <td>
            <img src={typeOfCall} alt="logo" />
          </td>
          <td>{getCorrectTime(date)}</td>
          <td>
            <img src={person_avatar} alt="avatar" />
          </td>
          <td className={s.calls}>{phoneNumberType}</td>
          <td className={s.source}>{source}</td>
          <td />
          <td>
            {record && (
              <Audio recordId={record} partnershipId={partnership_id} time={time} />
            )}
          </td>
        </tr>
      );
    },
  );
  return (
    <div className={s.tableContainer}>
      <table>
        <thead>
          <Columns />
        </thead>

        <tbody>{callsRows}</tbody>
      </table>
    </div>
  );
};
