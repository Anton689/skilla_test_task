import { instance } from '../instance';
import { CallsResponseType, ParamsType } from '../types';

// TODO не забыть убрать
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const date1 = new Date();
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDay());

export const defaultParams = {
  date_start: '2022-07-15',
  date_end: '2022-07-15',
  in_out: null,
};

export const callsAPI = {
  getCalls(params: ParamsType = defaultParams) {
    return instance
      .post<CallsResponseType>('', null, { params })
      .then(res => res.data.results);
  },
};
