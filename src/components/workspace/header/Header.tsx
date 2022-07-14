import React from 'react';

import { ReturnComponentType } from '../../../types';
import styles from '../container.module.scss';

import s from './header.module.scss';

export const Header = (): ReturnComponentType => (
  <div className={s.header}>
    <div className={styles.container}>
      <div className={s.wrapper}>
        <span className={s.date}>12.04.22</span>
        <div className={s.callInformation}>
          <span>Новые звонки</span>
          <span>Качество разговоров</span>
          <span>Конверсия в заказ</span>
        </div>
        <span className={s.search}>Search</span>
        <div className={s.profileInformation}>
          <span className={s.name}>Ip Sydorova Alex</span>
          <img className={s.avatar} src="" alt="somepic" />
        </div>
      </div>
    </div>
  </div>
);
