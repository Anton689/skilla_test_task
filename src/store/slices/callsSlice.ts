import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { callsAPI } from '../../api/callsAPI';
import { ParamsType } from '../../api/types';
import { CallType, Nullable } from '../../types';
import { RootState } from '../store';

type InitialStateType = {
  callsData: CallType[];
  params: ParamsType;
};

const initialState: InitialStateType = {
  callsData: [],
  params: {
    date_start: null,
    date_end: null,
    in_out: null,
  },
};

export const fetchCalls = createAsyncThunk(
  'callsSlice/calls',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { calls } = getState() as RootState;
      return await callsAPI.getCalls(calls.params);
      // return null;
    } catch (e: any) {
      return rejectWithValue(e.response.data.error);
    }
  },
);

const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    addedSortValue: (state, action: PayloadAction<Nullable<number>>) => {
      // eslint-disable-next-line no-param-reassign
      state.params.in_out = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCalls.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.callsData = action.payload;
    });
  },
});

export const { addedSortValue } = callsSlice.actions;
export const callsReducer = callsSlice.reducer;
