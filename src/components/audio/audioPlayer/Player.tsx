import React, { useRef, useState } from 'react';

import s from './player.module.scss';

import { Action } from 'enums';
import download from 'images/download.svg';
import { RecordType } from 'types';
import { changeFormatToMinutes } from 'utils';

type AudioPlayerType = {
  record: string;
  time: number;
  closeAction: (value: boolean) => void;
};

export const Player = ({ record, time, closeAction }: AudioPlayerType) => {
  const [recordStatus, setRecordStatus] = useState<RecordType>(Action.PLAY);

  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    audioRef.current
      ?.play()
      .then(res => res)
      .catch(err => {
        throw new Error(err);
      });
    setRecordStatus(Action.PAUSE);
  };

  const pauseSound = () => {
    audioRef.current?.pause();
    setRecordStatus(Action.PLAY);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={s.wrapper}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio ref={audioRef} src={record} />

        <span className={s.time}>{changeFormatToMinutes(time)}</span>
        {recordStatus === Action.PLAY ? (
          <button className={s.controlButton} type="button" onClick={playSound} />
        ) : (
          <button className={s.controlButtonPause} type="button" onClick={pauseSound} />
        )}

        <div className={s.rangeWrapper}>
          <input type="range" className={s.range} step="0.01" />
        </div>

        <img className={s.download} src={download} alt="download" />

        <button
          className={s.closeButton}
          type="button"
          onClick={() => closeAction(false)}
        />
      </div>
    </div>
  );
};
