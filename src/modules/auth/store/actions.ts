import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginPayload } from '../domain/interfaces/LoginPayload';
import { LoginResponse } from '../domain/interfaces/LoginResponse';
import authService from '../domain/services/AuthService';

const PREFIX = 'auth';

export const authLogin = createAsyncThunk<LoginResponse, LoginPayload>(
  `${PREFIX}/login`,
  async (payload) => {
    const res = await authService.login(payload);
    return res;
  }
);

export const authLogout = createAsyncThunk(`${PREFIX}/logout`, async () => {
  return await authService.logout();
});
