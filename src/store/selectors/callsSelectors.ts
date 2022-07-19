import { RootState } from '../store';

import { ParamsType } from 'api/types';
import { CallType } from 'types';

export const selectCalls = (state: RootState): CallType[] => state.calls.callsData;

export const selectParams = (state: RootState): ParamsType => state.calls.params;
