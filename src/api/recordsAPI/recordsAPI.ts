import { RecordsParamsType } from '../types';

import { instanceRecords } from './instance';

export const recordsAPI = {
  async fetchRecords(params: RecordsParamsType) {
    try {
      const res = await instanceRecords.post('', {}, { params, responseType: 'blob' });
      return res.data;
    } catch (e: any) {
      return console.error(e.message);
    }
  },
};
