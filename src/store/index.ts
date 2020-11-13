import { combineReducers, configureStore } from '@reduxjs/toolkit';

import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer,
});

export default store;
export type RootState = ReturnType<typeof store['getState']>;
export type CustomDispatch = typeof store.dispatch;
