import httpResource from 'modules/core/infrastructure/httpResource';
import storageResource from 'modules/core/infrastructure/storageResource';
import { getCookie, removeCookie } from '../helpers/cookie-helpers';
import { LoginPayload } from '../interfaces/LoginPayload';
import { LoginResponse } from '../interfaces/LoginResponse';
import authResource from '../resources/AuthResource';

class AuthService {
  private readonly TOKEN_NAME = '@access_token';
  private readonly COOKIE_NAME = 'Authentication';

  public async login(payload: LoginPayload) {
    const response = await authResource.login(payload);
  }

  public async logout() {
    await authResource.logout();
    this.removeTokens();
  }

  public setTokens(token: string) {
    const tokenCookie = `${this.COOKIE_NAME}=${token}`;
    httpResource.setHeaders({ 'Set-Cookie': tokenCookie });
    storageResource.setItem(this.TOKEN_NAME, token);
  }

  public async removeTokens() {
    httpResource.clearHeaders();
    storageResource.removeItem(this.TOKEN_NAME);
    removeCookie(this.COOKIE_NAME, document);
  }
}

const authService = new AuthService();
export default authService;
