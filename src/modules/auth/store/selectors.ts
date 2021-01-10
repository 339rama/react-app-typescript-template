import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import authStore from '.';

const authSelector = (state: RootState): authStore => state.authStore;

export const isAuthCheckingSelector = createSelector(
  authSelector,
  (state) => state.isAuthChecking
);

export const isLoggedInSelector = createSelector(
  authSelector,
  (state) => state.isLoggedIn
);
