import React, { memo, useRef, useState } from 'react';

import s from './select.module.scss';

import { useClickOutside } from 'hooks';
import { Nullable, OptionType, ReturnComponentType } from 'types';

type SelectType = {
  onClick?: (value: Nullable<number>) => void;
  defaultOption: string;
  items?: OptionType[];
  disable?: boolean;
};

export const Select = memo(
  ({ defaultOption, items, disable, onClick }: SelectType): ReturnComponentType => {
    const ref = useRef<Nullable<HTMLDivElement>>(null);

    const [open, setOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(defaultOption);

    useClickOutside(open, setOpen, ref);

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
              items.map(({ id, title, value }) => (
                <li
                  key={id}
                  className={s.listItem}
                  onClick={() => handleOnClick(value, title)}
                >
                  <span className={title === currentValue ? s.activeItem : s.item}>
                    {title}
                  </span>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  },
);
