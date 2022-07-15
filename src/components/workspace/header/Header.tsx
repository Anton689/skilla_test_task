import React from 'react';

import convCalls from '../../../images/conv_calls.svg';
import avatar from '../../../images/headerAvatar.svg';
import search from '../../../images/mgf.svg';
import newcalls from '../../../images/new_calls.svg';
import qualcalls from '../../../images/qual_calls.svg';
import { ReturnComponentType } from '../../../types';
import styles from '../container.module.scss';

import s from './header.module.scss';

export const Header = (): ReturnComponentType => (
  <div className={s.header}>
    <div className={styles.container}>
      <div className={s.wrapper}>
        <span className={s.date}>Среда, 13 окт</span>
        <div className={s.callsInformation}>
          <img src={newcalls} alt="calls" />
          <img src={qualcalls} alt="calls" />
          <img src={convCalls} alt="calls" />
        </div>
        <span className={s.search}>
          <img src={search} alt="search" />
        </span>
        <div className={s.profileInformation}>
          <span className={s.name}>ИП Сидорова Александра Михайловна</span>
          <img className={s.avatar} src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  </div>
);
