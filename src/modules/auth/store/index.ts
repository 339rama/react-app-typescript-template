import { createSlice } from '@reduxjs/toolkit';
import { authLogin, authLogout } from './actions';

const initialState = {
  isAuthChecking: false,
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.isAuthChecking = true;
    });
    builder.addCase(authLogin.fulfilled, (state, { payload }) => {
      state.isAuthChecking = false;
    });
    builder.addCase(authLogin.rejected, (state) => {
      state.isAuthChecking = false;
    });
    builder.addCase(authLogout.pending, (state) => {
      state.isAuthChecking = true;
    });
    builder.addCase(authLogout.fulfilled, (state) => {
      state.isAuthChecking = false;
    });
    builder.addCase(authLogout.rejected, (state) => {
      state.isAuthChecking = false;
    });
  },
});

const authStore = slice.reducer;
type authStore = ReturnType<typeof slice['reducer']>;
export default authStore;
