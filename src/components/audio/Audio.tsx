import React, { useState } from 'react';

import { Player } from './audioPlayer';

import { recordsAPI } from 'api/recordsAPI';
import { ReturnComponentType } from 'types';
import { changeFormatToMinutes } from 'utils';

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
  const [isPlayerView, setIsPlayerView] = useState<boolean>(false);

  const getAudioOnClick = () => {
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

    setIsPlayerView(!isPlayerView);
  };

  return (
    <div>
      {isPlayerView ? (
        <Player record={record} time={time} closeAction={setIsPlayerView} />
      ) : (
        <p style={{ cursor: 'pointer' }} onClick={getAudioOnClick}>
          {changeFormatToMinutes(time)}
        </p>
      )}
    </div>
  );
};
