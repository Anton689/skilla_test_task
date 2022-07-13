import React from 'react';

import logo from '../../images/logo.svg';
import { ReturnComponentType } from '../../types';

import s from './navbar.module.scss';

export const Sidebar = (): ReturnComponentType => (
  <div className={s.sidebar}>
    <div className={s.wrapper}>
      <img className={s.logo} src={logo} alt="pic" />
      <ul className={s.items}>
        <li className={s.item}>Итоги</li>
        <li className={s.item}>Заказы</li>
        <li className={s.item}>Сообщения</li>
        <li className={s.item}>Звонки</li>
        <li className={s.item}>Контрагенты</li>
        <li className={s.item}>Документы</li>
        <li className={s.item}>Исполнители</li>
        <li className={s.item}>Отчеты</li>
        <li className={s.item}>База знаний</li>
        <li className={s.item}>Настройки</li>
      </ul>
      <div className={s.buttons}>
        <button type="button" className={s.button}>
          Добавить заказ
        </button>
        <button type="button" className={s.button}>
          Оплата
        </button>
      </div>
    </div>
  </div>
);
