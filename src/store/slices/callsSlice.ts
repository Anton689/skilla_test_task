import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { callsAPI } from 'api/callsAPI';
import { ParamsType } from 'api/types';
import { RootState } from 'store';
import { CallType, Nullable } from 'types';
import { getDate } from 'utils';

const DAY_COUNT = 3;
const currentDate = dayjs().format('YYYY-MM-DD');
const dayStart = getDate(DAY_COUNT, 'day');

type InitialStateType = {
  callsData: CallType[];
  params: ParamsType;
};

const initialState: InitialStateType = {
  callsData: [],
  params: {
    date_start: dayStart,
    date_end: currentDate,
    in_out: null,
    limit: 50,
  },
};

export const fetchCalls = createAsyncThunk(
  'callsSlice/calls',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { calls } = getState() as RootState;
      return await callsAPI.getCalls(calls.params);
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
      state.params.in_out = action.payload;
    },
    addedStartDate: (state, action: PayloadAction<Nullable<string>>) => {
      state.params.date_start = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCalls.fulfilled, (state, action) => {
      state.callsData = action.payload;
    });
  },
});

export const { addedSortValue, addedStartDate } = callsSlice.actions;
export const callsReducer = callsSlice.reducer;
