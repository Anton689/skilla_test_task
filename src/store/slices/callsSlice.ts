import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { callsAPI, defaultParams } from '../../api/callsAPI/callsAPI';
import { ParamsType } from '../../api/types';
import { CallType } from '../../types';

type InitialStateType = {
  callsData: CallType[];
  params: ParamsType;
};

const initialState: InitialStateType = {
  callsData: [],
  // TODO зарефакторить
  params: defaultParams,
};

export const fetchCalls = createAsyncThunk(
  'callsSlice/calls',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await callsAPI.getCalls();
      return res;
    } catch (e: any) {
      return rejectWithValue(e.response.data.error);
    }
  },
);

const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCalls.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.callsData = action.payload;
    });
  },
});

export const callsReducer = callsSlice.reducer;
