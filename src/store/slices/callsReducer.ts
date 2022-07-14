import { createSlice } from '@reduxjs/toolkit';

// type InitialStateType = {
//
// }

const initialState = {};

const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {},
});

export const callsReducer = callsSlice.reducer;
