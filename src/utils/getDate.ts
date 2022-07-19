import dayjs, { ManipulateType } from 'dayjs';

export const getDate = (count: number, unit: ManipulateType | undefined) =>
  dayjs().subtract(count, unit).format('YYYY-MM-DD');
