import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { callsReducer } from './slices';

const rootReducer = combineReducers({
  calls: callsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
