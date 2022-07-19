import React, { useRef, useState } from 'react';

import { ManipulateType } from 'dayjs';

import s from './dateSelect.module.scss';

import { useClickOutside } from 'hooks';
import { DateOptionsType, Nullable } from 'types';

type DateSelectType = {
  onClick: (count: number, unit: ManipulateType | undefined) => void;
  defaultOption: string;
  items: DateOptionsType[];
};

export const DateSelect = ({ onClick, defaultOption, items }: DateSelectType) => {
  const ref = useRef<Nullable<HTMLDivElement>>(null);

  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(defaultOption);

  useClickOutside(open, setOpen, ref);

  const handleOnClick = (
    title: string,
    count: number,
    unit: ManipulateType | undefined,
  ) => {
    if (onClick) {
      onClick(count, unit);
    }
    setCurrentValue(title);
    setOpen(!open);
  };

  const toggle = (): void => setOpen(!open);

  return (
    <div ref={ref} className={s.wrapper}>
      <div className={s.header}>
        <button type="button" className={s.prevButton} />
        <p className={s.currentValue} onClick={() => toggle()}>
          {currentValue}
        </p>
        <div className={s.calendar} />
        <button type="button" value="next" className={s.nextButton} />
      </div>

      {open && (
        <ul className={s.list}>
          {items &&
            items.map(({ count, title, id, unit }) => (
              <li
                key={id}
                className={s.listItem}
                onClick={() => handleOnClick(title, count, unit)}
              >
                <span className={title === currentValue ? s.activeItem : s.item}>
                  {title}
                </span>
              </li>
            ))}

          <li className={s.setDate}>Выбрать дату</li>
          <li className={s.datePlaceholder}> __.__.__-__.__.__</li>
        </ul>
      )}
    </div>
  );
};
