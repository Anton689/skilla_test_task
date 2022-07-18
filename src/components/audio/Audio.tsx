import React, { useEffect, useState } from 'react';

import { recordsAPI } from '../../api/recordsAPI';
import { ReturnComponentType } from '../../types';

import { Player } from './audioPlayer';

type AudioType = {
  recordId: string;
  partnershipId: string;
  time: number;
};

export const Audio = ({
  recordId,
  partnershipId,
  time,
}: AudioType): ReturnComponentType => {
  const [record, setRecord] = useState<string>('');

  useEffect(() => {
    recordsAPI
      .fetchRecords({
        record: recordId,
        partnership_id: partnershipId,
      })
      .then(res => {
        const audioFile = new Blob([res], { type: 'audio/mp3' });
        const url = window.URL.createObjectURL(audioFile);

        setRecord(url);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Player record={record} time={time} />
    </div>
  );
};

//
// useEffect(() => {
//   (async () => {
//     try {
//       const { data } = await recordsAPI.fetchRecords({
//         record: recordId,
//         partnership_id: partnershipId,
//       });
//       const audioFile = new Blob([data], { type: 'audio/mp3' });
//       const url = window.URL.createObjectURL(audioFile);
//
//       setRecord(url);
//     } catch (e: any) {
//       throw new Error(e);
//     }
//   })();
// }, []);
