import { instanceRecords } from './instance';

export const recordsAPI = {
  fetchRecords(params: paramsType) {
    return instanceRecords
      .post('', {}, { params, responseType: 'blob' })
      .then(res => console.log(res.data));
  },
};

type paramsType = {
  record: string;
  partnership_id: string;
};
