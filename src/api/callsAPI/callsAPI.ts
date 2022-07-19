import { CallsResponseType, ParamsType } from '../types';

import { instanceCalls } from './instance';

export const callsAPI = {
  getCalls(params: ParamsType) {
    return instanceCalls
      .post<CallsResponseType>('', {}, { params })
      .then(res => res.data.results);
  },
};
