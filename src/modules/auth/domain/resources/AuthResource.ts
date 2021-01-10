import httpResource from 'modules/core/infrastructure/httpResource';
import { BaseRestResource } from '@snap-alex/domain-js';
import { LoginPayload } from '../interfaces/LoginPayload';
import { LoginResponse } from '../interfaces/LoginResponse';

class AuthResource extends BaseRestResource {
  constructor() {
    super(httpResource, 'auth');
  }
  public async login(payload: LoginPayload): Promise<LoginResponse> {
    return await this.child('login').create(payload);
  }
  public async logout() {
    return await this.child('logout').create({});
  }
}
const authResource = new AuthResource();
export default authResource;
