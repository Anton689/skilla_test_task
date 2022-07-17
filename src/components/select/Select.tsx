import React, { useEffect, useRef, useState } from 'react';

import { Nullable, OptionsType, ReturnComponentType } from '../../types';

import s from './select.module.scss';

type SelectType = {
  onClick?: (value: Nullable<number>) => void;
  defaultOption: string;
  items?: OptionsType;
  disable?: boolean;
};

export const Select = ({
  defaultOption,
  items,
  disable,
  onClick,
}: SelectType): ReturnComponentType => {
  const ref = useRef<Nullable<HTMLDivElement>>(null);

  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(defaultOption);

  useEffect(() => {
    const clickedOutside = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', clickedOutside);
    return () => {
      document.removeEventListener('click', clickedOutside);
    };
  }, [open]);

  const setStyleToTitle = (): string => {
    const evenly = currentValue === defaultOption;
    const notEvenly = currentValue !== defaultOption;

    if (!open && evenly) {
      return `${s.title} ${s.defaultArrow}`;
    }
    if (!open && notEvenly) {
      return `${s.activeTitle} ${s.defaultArrow}`;
    }
    if (open && evenly) {
      return `${s.secondTitle} ${s.activeArrow}`;
    }
    return `${s.secondActiveTitle} ${s.activeArrow}`;
  };

  const handleOnClick = (value: Nullable<number>, title: string) => {
    if (onClick) {
      onClick(value);
    }
    setCurrentValue(title);
    setOpen(!open);
  };

  const toggle = (): void => setOpen(!open);

  if (disable) {
    return (
      <div className={s.header}>
        <p className={`${s.title} ${s.defaultArrow}`}>{currentValue}</p>
      </div>
    );
  }
  return (
    <div ref={ref} className={s.wrapper}>
      <div className={s.header} onClick={() => toggle()}>
        <p className={setStyleToTitle()}>{currentValue}</p>
      </div>
      {open && (
        <ul className={s.list}>
          {items &&
            items.map(item => (
              <li
                key={item.id}
                className={s.listItem}
                onClick={() => handleOnClick(item.value, item.title)}
              >
                <span className={item.title === currentValue ? s.activeItem : s.item}>
                  {item.title}
                </span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
