import { CallsResponseType, ParamsType } from '../types';

import { instanceCalls } from './instance';

const LIMIT = 25;

// TODO не забыть убрать
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const date1 = new Date();
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDay());

export const defaultParams = {
  date_start: null,
  date_end: null,
  in_out: null,
};

export const callsAPI = {
  getCalls(params: ParamsType, limitCallsList: number = LIMIT) {
    return instanceCalls
      .post<CallsResponseType>('', { limitCallsList }, { params })
      .then(res => res.data.results);
  },
};
