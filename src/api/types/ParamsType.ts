import { Nullable } from '../../types';

export type ParamsType = {
  date_start: Nullable<string>;
  date_end: Nullable<string>;
  in_out: Nullable<number>;
  limit: Nullable<number>;
};
