import { instanceRecords } from './instance';

export const recordsAPI = {
  async fetchRecords(params: paramsType) {
    try {
      const res = await instanceRecords.post('', {}, { params, responseType: 'blob' });
      return res.data;
    } catch (e: any) {
      return console.log(e.message);
    }
  },
};

type paramsType = {
  record: string;
  partnership_id: string;
};
