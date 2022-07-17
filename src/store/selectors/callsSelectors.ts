import { ParamsType } from '../../api/types';
import { CallType } from '../../types';
import { RootState } from '../store';

export const selectCalls = (state: RootState): CallType[] => state.calls.callsData;
export const selectParams = (state: RootState): ParamsType => state.calls.params;
