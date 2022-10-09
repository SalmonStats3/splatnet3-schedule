import { HttpException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import axios from 'axios';
import {
  SessionTokenRequest,
  SessionTokenResponse,
} from '../dto/session_token';

@Injectable()
export class SessionTokenService {
  async get_session_token(
    request: SessionTokenRequest,
  ): Promise<SessionTokenResponse> {
    const url = 'https://accounts.nintendo.com/connect/1.0.0/api/session_token';
    const parameters = new URLSearchParams();
    parameters.append('client_id', '71b963c1b7b6d119');
    parameters.append('session_token_code', request.session_token_code);
    parameters.append(
      'session_token_code_verifier',
      request.session_token_code_verifier,
    );
    try {
      const response = await axios.post(url, parameters);
      return plainToClass(SessionTokenResponse, response.data);
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }
}
