import { CallType } from '../../types';
import { RootState } from '../store';

export const selectCalls = (state: RootState): CallType[] => state.calls.callsData;
