import React, { memo } from 'react';

import IcomoonReact from 'icomoon-react';

import { ReturnComponentType } from '../types';

import iconSet from './selection.json';

type IconType = {
  color?: string;
  size?: string | number;
  icon: string;
};

const defaultProps: IconType = {
  color: '',
  size: '100%',
  icon: '',
};

export const Icon = memo(
  ({ color, size, icon }: typeof defaultProps): ReturnComponentType => (
    <IcomoonReact icon={icon} iconSet={iconSet} color={color} size={size} />
  ),
);
