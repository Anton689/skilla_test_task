import React from 'react';

import s from '../callsTable.module.scss';

export const Columns = () => (
  <tr className={s.trHead}>
    <th>Тип</th>
    <th>Время</th>
    <th>Сотрудник</th>
    <th>Звонок</th>
    <th>Источник</th>
    <th className={s.asses}>Оценка</th>
    <th>Длительность</th>
  </tr>
);
