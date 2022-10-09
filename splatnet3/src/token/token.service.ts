import { HttpException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import axios from 'axios';
import { AccessTokenRequest, AccessTokenResponse } from '../dto/access_token';

@Injectable()
export class TokenService {
  async get_access_token(
    request: AccessTokenRequest,
  ): Promise<AccessTokenResponse> {
    const url = 'https://accounts.nintendo.com/connect/1.0.0/api/token';
    const parameters = {
      client_id: '71b963c1b7b6d119',
      session_token: request.session_token,
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer-session-token',
    };
    try {
      const response = await axios.post(url, parameters);
      return plainToClass(AccessTokenResponse, response.data);
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }
}
