import { ManipulateType } from 'dayjs';

export type DateOptionsType = {
  id: string;
  title: string;
  count: number;
  unit: ManipulateType | undefined;
};
