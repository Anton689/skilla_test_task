import React, { useRef, useState } from 'react';

import download from '../../../images/download.svg';
import { changeFormatToMinutes } from '../../../utils';

import s from './player.module.scss';

// TODO в енамку
type RecordType = 'play' | 'pause';
const PLAY = 'play';
const PAUSE = 'pause';

type AudioPlayerType = {
  record: string;
  time: number;
};

export const Player = ({ record, time }: AudioPlayerType) => {
  const [recordStatus, setRecordStatus] = useState<RecordType>(PLAY);

  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    audioRef.current
      ?.play()
      .then(res => res)
      .catch(err => {
        throw new Error(err);
      });
    setRecordStatus(PAUSE);
  };

  const pauseSound = () => {
    audioRef.current?.pause();
    setRecordStatus(PLAY);
  };

  return (
    <div className={s.wrapper}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={record} />
      <span className={s.time}>{changeFormatToMinutes(time)}</span>
      {recordStatus === PLAY ? (
        <button className={s.controlButton} type="button" onClick={playSound} />
      ) : (
        <button className={s.controlButtonPause} type="button" onClick={pauseSound} />
      )}
      <div className={s.rangeWrapper}>
        <input type="range" className={s.range} step="0.01" />
      </div>
      <img className={s.download} src={download} alt="download" />
      <button className={s.closeButton} type="button" onClick={pauseSound} />
    </div>
  );
};

// <div className={s.rangeWrapper}>
//     <input type="range" className={s.range} step="0.01" />
// </div>

// <div className={s.rangeWrapper}>
//     <Range />
// </div>
