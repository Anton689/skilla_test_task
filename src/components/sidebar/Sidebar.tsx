import React from 'react';

import logo from '../../images/logo.svg';

import s from './sidebar.module.scss';

import { Icon } from 'icons';
import { ReturnComponentType } from 'types';

const icons = [
  { id: '1', iconName: 'totals', title: 'Итоги', isActive: false },
  { id: '2', iconName: 'orders', title: 'Заказы', isActive: false },
  { id: '3', iconName: 'messages', title: 'Сообщения', isActive: false },
  { id: '4', iconName: 'calls', title: 'Звонки', isActive: true },
  { id: '5', iconName: 'agents', title: 'Контрагенты', isActive: false },
  { id: '6', iconName: 'documents', title: 'Документы', isActive: false },
  { id: '7', iconName: 'performers', title: 'Исполнители', isActive: false },
  { id: '8', iconName: 'reports', title: 'Отчеты', isActive: false },
  { id: '9', iconName: 'base', title: 'База знаний', isActive: false },
  { id: '10', iconName: 'settings', title: 'Настройки', isActive: false },
];

export const Sidebar = (): ReturnComponentType => (
  <div className={s.sidebar}>
    <div className={s.wrapper}>
      <img className={s.logo} src={logo} alt="pic" />
      <ul className={s.items}>
        {icons.map(icon => (
          <li key={icon.id} className={icon.isActive ? s.activeItem : s.item}>
            <Icon icon={icon.iconName} size="22px" />
            <span className={s.title}>{icon.title}</span>
          </li>
        ))}
      </ul>
      <div className={s.buttons}>
        <button type="button" className={s.addOrderButton}>
          Добавить заказ
        </button>
        <button type="button" className={s.payButton}>
          Оплата
        </button>
      </div>
    </div>
  </div>
);
